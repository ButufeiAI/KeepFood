import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import axios from 'axios';
import { Restaurant } from '../entities/restaurant.entity';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { User } from '../entities/user.entity';
import { UsersService } from '../users/users.service';
import { UserRole } from '../common/enums/role.enum';
import { PlanType } from '../common/enums/plan.enum';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectRepository(Restaurant)
    private restaurantsRepository: Repository<Restaurant>,
    private usersService: UsersService,
  ) {}

  async create(
    createRestaurantDto: CreateRestaurantDto,
    user: User,
  ): Promise<Restaurant> {
    try {
      console.log('RestaurantsService.create - DTO:', JSON.stringify(createRestaurantDto, null, 2));
      console.log('RestaurantsService.create - User:', { id: user.id, email: user.email, role: user.role, restaurantId: user.restaurantId });
      
      // Vérifier que le nom est fourni (requis)
      if (!createRestaurantDto.name || createRestaurantDto.name.trim() === '') {
        throw new BadRequestException('Le nom du restaurant est requis');
      }

      // Vérifier si un restaurant avec ce nom existe déjà
      const existingRestaurant = await this.restaurantsRepository.findOne({
        where: { name: createRestaurantDto.name.trim() },
      });
      
      if (existingRestaurant) {
        throw new BadRequestException('Un restaurant avec ce nom existe déjà. Veuillez choisir un autre nom.');
      }

      const restaurant = this.restaurantsRepository.create({
        ...createRestaurantDto,
        name: createRestaurantDto.name.trim(), // Nettoyer le nom
        plan: createRestaurantDto.plan || PlanType.BASIC,
        onSiteEnabled: createRestaurantDto.onSiteEnabled ?? true,
        isActive: true,
      });

      console.log('Restaurant créé (avant save):', restaurant);
      const savedRestaurant = await this.restaurantsRepository.save(restaurant) as Restaurant;
      console.log('Restaurant sauvegardé:', savedRestaurant.id);

      // Si l'utilisateur est un ADMIN_RESTAURANT, on l'associe au restaurant
      if (user.role === UserRole.ADMIN_RESTAURANT) {
        try {
          console.log('Association de l\'utilisateur au restaurant...');
          console.log('User ID:', user.id);
          console.log('User restaurantId actuel:', user.restaurantId);
          console.log('Restaurant ID:', savedRestaurant.id);
          
          // Mettre à jour même si l'utilisateur a déjà un restaurantId (cas de réutilisation)
          const updatedUser = await this.usersService.update(user.id, {
            restaurantId: savedRestaurant.id,
          });
          console.log('Utilisateur associé au restaurant:', updatedUser.id);
        } catch (updateError: any) {
          console.error('Erreur lors de l\'association de l\'utilisateur:', updateError);
          console.error('Message:', updateError.message);
          console.error('Stack:', updateError.stack);
          // Ne pas faire échouer la création du restaurant si l'association échoue
          // L'utilisateur pourra être associé manuellement plus tard
          console.warn('⚠️ Le restaurant a été créé mais l\'utilisateur n\'a pas pu être associé');
        }
      }

      return savedRestaurant;
    } catch (error: any) {
      console.error('=== ERREUR LORS DE LA CRÉATION DU RESTAURANT ===');
      console.error('Type:', error.constructor?.name);
      console.error('Message:', error.message);
      console.error('Code:', error.code);
      console.error('Detail:', error.detail);
      console.error('Stack:', error.stack);
      console.error('DTO reçu:', JSON.stringify(createRestaurantDto, null, 2));
      console.error('User:', { id: user.id, email: user.email, role: user.role });
      console.error('===============================================');
      
      // Si c'est déjà une exception NestJS, la propager
      if (
        error instanceof BadRequestException ||
        error instanceof NotFoundException ||
        error instanceof ForbiddenException ||
        error instanceof InternalServerErrorException
      ) {
        throw error;
      }
      
      // Si c'est une erreur de contrainte de base de données (nom du restaurant déjà existant, etc.)
      if (error.code === '23505' || error.message?.includes('duplicate') || error.message?.includes('unique')) {
        throw new BadRequestException(
          'Un restaurant avec ce nom existe déjà. Veuillez choisir un autre nom.',
        );
      }
      
      // Pour les autres erreurs serveur (base de données, etc.), utiliser InternalServerErrorException avec plus de détails
      const errorMessage = error.message || error.detail || 'Erreur serveur lors de la création du restaurant';
      const errorDetails = error.code ? ` (Code: ${error.code})` : '';
      throw new InternalServerErrorException(
        `${errorMessage}${errorDetails}. Veuillez vérifier les logs du serveur pour plus d'informations.`,
      );
    }
  }

  async findAll(user: User): Promise<Restaurant[]> {
    // SUPER_ADMIN voit tous les restaurants
    if (user.role === UserRole.SUPER_ADMIN) {
      return this.restaurantsRepository.find({
        relations: ['users'],
        order: { createdAt: 'DESC' },
      });
    }

    // Les autres voient uniquement leur restaurant
    if (user.restaurantId) {
      return this.restaurantsRepository.find({
        where: { id: user.restaurantId },
        relations: ['users', 'tables', 'categories'],
      });
    }

    return [];
  }

  async findOne(id: string, user: User): Promise<Restaurant> {
    const restaurant = await this.restaurantsRepository.findOne({
      where: { id },
      relations: ['users', 'tables', 'categories'],
    });

    if (!restaurant) {
      throw new NotFoundException(`Restaurant with ID ${id} not found`);
    }

    // Vérifier les permissions
    if (
      user.role !== UserRole.SUPER_ADMIN &&
      restaurant.id !== user.restaurantId
    ) {
      throw new ForbiddenException('You do not have access to this restaurant');
    }

    return restaurant;
  }

  async update(
    id: string,
    updateRestaurantDto: UpdateRestaurantDto,
    user: User,
  ): Promise<Restaurant> {
    const restaurant = await this.findOne(id, user);

    Object.assign(restaurant, updateRestaurantDto);
    return this.restaurantsRepository.save(restaurant);
  }

  async remove(id: string, user: User): Promise<void> {
    const restaurant = await this.findOne(id, user);

    // Seul SUPER_ADMIN peut supprimer un restaurant
    if (user.role !== UserRole.SUPER_ADMIN) {
      throw new ForbiddenException('Only super admin can delete restaurants');
    }

    await this.restaurantsRepository.remove(restaurant);
  }

  async verifyVatNumber(vatNumber: string): Promise<any> {
    // Nettoyer le numéro de TVA (enlever espaces, tirets, etc.)
    const cleanVat = vatNumber.replace(/[\s\-\.]/g, '').toUpperCase();

    // Format: 2 lettres (code pays) + numéro
    // Exemples: FR12345678901, BE0123456789, DE123456789
    const vatRegex = /^([A-Z]{2})([0-9A-Z]+)$/;
    const match = cleanVat.match(vatRegex);

    if (!match) {
      throw new BadRequestException('Format de numéro de TVA invalide');
    }

    const countryCode = match[1];
    const number = match[2];
    
    // Préparer la réponse de fallback
    const fallbackResponse = {
      valid: true,
      countryCode,
      vatNumber: number,
      name: `Entreprise ${number}`,
      address: '',
      city: this.getDefaultCity(countryCode),
      zipCode: '',
      country: this.getCountryName(countryCode),
      note: 'Les informations complètes n\'ont pas pu être récupérées depuis VIES. Veuillez les compléter manuellement.',
    };

    // Toujours essayer d'appeler l'API VIES pour récupérer les vraies données
    // Le fallback ne sera utilisé qu'en cas d'erreur
    // Note: L'API VIES peut ne pas retourner toutes les informations pour tous les pays
    // Certains pays (comme la Belgique) peuvent limiter les données partagées

    try {
      // Appel à l'API VIES de l'Union Européenne (SOAP)
      const viesUrl = 'https://ec.europa.eu/taxation_customs/vies/services/checkVatService';
      
      const soapEnvelope = `<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="urn:ec.europa.eu:taxud:vies:services:checkVat:types">
  <soap:Header/>
  <soap:Body>
    <tns:checkVat>
      <tns:countryCode>${countryCode}</tns:countryCode>
      <tns:vatNumber>${number}</tns:vatNumber>
    </tns:checkVat>
  </soap:Body>
</soap:Envelope>`;

      let response;
      try {
        console.log('Appel API VIES pour:', countryCode, number);
        response = await axios.post(viesUrl, soapEnvelope, {
          headers: {
            'Content-Type': 'text/xml; charset=utf-8',
            'SOAPAction': 'urn:ec.europa.eu:taxud:vies:services:checkVat/checkVat',
          },
          timeout: 20000, // Augmenter le timeout
          validateStatus: (status) => status < 500, // Accepter les erreurs 4xx pour les parser
        });
        console.log('Réponse VIES reçue, status:', response.status);
      } catch (axiosError: any) {
        console.error('Erreur axios VIES:', axiosError.message);
        console.error('Code erreur:', axiosError.code);
        console.error('Stack:', axiosError.stack);
        // Ne pas throw, utiliser le fallback
        console.warn('Utilisation du fallback à cause d\'une erreur axios');
        return fallbackResponse;
      }
      
      // Vérifier si la réponse contient une erreur SOAP
      if (response.status !== 200) {
        console.error('VIES API returned status:', response.status);
        console.error('VIES API response:', response.data);
        console.warn('Utilisation du fallback à cause d\'un status non-200');
        return fallbackResponse;
      }

      // Parser la réponse XML
      const xmlResponse = response.data;
      
      console.log('Réponse VIES complète (premiers 1000 caractères):', xmlResponse.substring(0, 1000));
      
      // Vérifier si la réponse contient une erreur SOAP
      if (xmlResponse.includes('<soap:Fault>') || xmlResponse.includes('faultcode')) {
        const faultMatch = xmlResponse.match(/<faultstring>([\s\S]*?)<\/faultstring>/i);
        const faultMessage = faultMatch ? faultMatch[1] : 'Erreur inconnue de l\'API VIES';
        console.error('VIES SOAP Fault:', faultMessage);
        // Ne pas throw, utiliser le fallback à la place
        console.warn('Utilisation du fallback à cause d\'une erreur SOAP');
        return fallbackResponse;
      }
      
      // Extraire les données de la réponse SOAP avec regex plus robustes
      // L'API VIES peut retourner des valeurs vides ou "---" si l'info n'est pas disponible
      // Essayer plusieurs patterns pour être sûr de capturer les données
      // Essayer plusieurs patterns pour capturer valid (avec différents namespaces)
      let validMatch = xmlResponse.match(/<ns2:valid>([^<]*)<\/ns2:valid>/i);
      if (!validMatch) {
        validMatch = xmlResponse.match(/<tns:valid>([^<]*)<\/tns:valid>/i);
      }
      if (!validMatch) {
        validMatch = xmlResponse.match(/<valid>([^<]*)<\/valid>/i);
      }
      
      // Essayer plusieurs patterns pour capturer le nom (avec différents namespaces)
      // IMPORTANT: VIES utilise ns2: dans la réponse
      let nameMatch = xmlResponse.match(/<ns2:name>([\s\S]*?)<\/ns2:name>/i);
      if (!nameMatch) {
        nameMatch = xmlResponse.match(/<tns:name>([\s\S]*?)<\/tns:name>/i);
      }
      if (!nameMatch) {
        nameMatch = xmlResponse.match(/<name>([\s\S]*?)<\/name>/i);
      }
      // Essayer aussi sans le namespace explicite (au cas où)
      if (!nameMatch) {
        const nameRegex = /<[^:>]*:?name[^>]*>([\s\S]*?)<\/[^:>]*:?name[^>]*>/i;
        nameMatch = xmlResponse.match(nameRegex);
      }
      
      // Essayer plusieurs patterns pour capturer l'adresse (avec différents namespaces)
      // IMPORTANT: VIES utilise ns2: dans la réponse
      let addressMatch = xmlResponse.match(/<ns2:address>([\s\S]*?)<\/ns2:address>/i);
      if (!addressMatch) {
        addressMatch = xmlResponse.match(/<tns:address>([\s\S]*?)<\/tns:address>/i);
      }
      if (!addressMatch) {
        addressMatch = xmlResponse.match(/<address>([\s\S]*?)<\/address>/i);
      }
      // Essayer aussi sans le namespace explicite (au cas où)
      if (!addressMatch) {
        const addressRegex = /<[^:>]*:?address[^>]*>([\s\S]*?)<\/[^:>]*:?address[^>]*>/i;
        addressMatch = xmlResponse.match(addressRegex);
      }
      
      // Debug: logger les matches trouvés
      console.log('VIES Debug - validMatch:', validMatch ? validMatch[1] : 'null');
      console.log('VIES Debug - nameMatch trouvé:', !!nameMatch);
      if (nameMatch) {
        console.log('VIES Debug - nameMatch contenu brut:', JSON.stringify(nameMatch[1].substring(0, 200)));
      }
      console.log('VIES Debug - addressMatch trouvé:', !!addressMatch);
      if (addressMatch) {
        console.log('VIES Debug - addressMatch contenu brut:', JSON.stringify(addressMatch[1].substring(0, 200)));
      }

      const isValid = validMatch && validMatch[1].toLowerCase().trim() === 'true';
      
      if (!isValid) {
        console.warn('Numéro de TVA invalide selon VIES, utilisation du fallback');
        return fallbackResponse;
      }
      
      console.log('Numéro de TVA valide, extraction des données...');

      // Nettoyer et extraire les données
      let companyName = '';
      let address = '';
      
      if (nameMatch && nameMatch[1]) {
        // Extraire le contenu entre les balises <name>
        let rawName = nameMatch[1];
        // Décoder les entités XML et CDATA (IMPORTANT: décoder &amp; en &)
        rawName = rawName
          .replace(/<!\[CDATA\[(.*?)\]\]>/g, '$1') // Extraire le contenu CDATA
          .replace(/&amp;/g, '&') // Décoder &amp; en & (IMPORTANT: avant les autres remplacements)
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&quot;/g, '"')
          .replace(/&apos;/g, "'")
          .replace(/&#39;/g, "'")
          .replace(/&#x27;/g, "'")
          .replace(/&#x2F;/g, '/')
          .replace(/&nbsp;/g, ' ')
          .replace(/\r\n/g, ' ')
          .replace(/\n/g, ' ')
          .replace(/\r/g, ' ')
          .replace(/\s+/g, ' ') // Normaliser les espaces multiples
          .trim();
        
        companyName = rawName;
        // VIES peut retourner "---" si le nom n'est pas disponible
        if (companyName === '---' || companyName === '' || companyName.toLowerCase() === 'invalid' || companyName === 'null') {
          companyName = '';
        }
      }

      if (addressMatch && addressMatch[1]) {
        // Extraire le contenu entre les balises <address>
        let rawAddress = addressMatch[1];
        // Décoder les entités XML et CDATA (PRÉSERVER les retours à la ligne pour le parsing)
        rawAddress = rawAddress
          .replace(/<!\[CDATA\[(.*?)\]\]>/g, '$1') // Extraire le contenu CDATA
          .replace(/&amp;/g, '&') // Décoder &amp; en & (IMPORTANT: avant les autres remplacements)
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&quot;/g, '"')
          .replace(/&apos;/g, "'")
          .replace(/&#39;/g, "'")
          .replace(/&#x27;/g, "'")
          .replace(/&#x2F;/g, '/')
          .replace(/&nbsp;/g, ' ')
          // PRÉSERVER les retours à la ligne pour parser la ville et le code postal
          .replace(/\r\n/g, '\n')
          .replace(/\r/g, '\n')
          .trim();
        
        address = rawAddress;
        // VIES peut retourner "---" si l'adresse n'est pas disponible
        if (address === '---' || address === '' || address.toLowerCase() === 'invalid' || address === 'null') {
          address = '';
        }
      }

      // Si le nom n'est pas disponible, utiliser un nom par défaut
      if (!companyName || companyName === '') {
        companyName = `Entreprise ${number}`;
      }

      // Parser l'adresse pour extraire ville, code postal, etc.
      const parsedAddress = this.parseAddress(address, countryCode);
      
      console.log('Données parsées:', { companyName, address, parsedAddress }); // Debug

      // Construire l'adresse complète si on a plusieurs lignes
      let fullAddress = '';
      if (parsedAddress.street) {
        fullAddress = parsedAddress.street;
        if (parsedAddress.zipCode && parsedAddress.city) {
          fullAddress += `, ${parsedAddress.zipCode} ${parsedAddress.city}`;
        } else if (parsedAddress.city) {
          fullAddress += `, ${parsedAddress.city}`;
        }
      } else if (address) {
        // Si on n'a pas pu parser mais qu'on a l'adresse brute, l'utiliser
        fullAddress = address.split('\n')[0] || address;
      }

      return {
        valid: true,
        countryCode,
        vatNumber: number,
        name: companyName,
        address: fullAddress || parsedAddress.street || '',
        city: parsedAddress.city || this.getDefaultCity(countryCode),
        zipCode: parsedAddress.zipCode || '',
        country: this.getCountryName(countryCode),
      };
    } catch (error: any) {
      // Si l'API VIES échoue, vérifier si c'est une erreur réseau ou une erreur de parsing
      console.error('Erreur API VIES:', error.message);
      console.error('Stack:', error.stack);
      
      // Pour toutes les erreurs, utiliser le fallback
      // Cela permet au formulaire de continuer même si VIES est indisponible
      console.warn('Erreur lors de l\'appel VIES, utilisation du fallback pour:', vatNumber);
      console.warn('Détails de l\'erreur:', error.message);
      return fallbackResponse;
    }
  }

  private cleanXmlText(text: string): string {
    if (!text) return '';
    
    return text
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'")
      .replace(/&#39;/g, "'")
      .replace(/&#x27;/g, "'")
      .replace(/&nbsp;/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  private parseAddress(address: string, countryCode: string): { street?: string; city?: string; zipCode?: string } {
    if (!address || address.trim() === '' || address === '---') {
      return {};
    }

    const result: { street?: string; city?: string; zipCode?: string } = {};

    // Nettoyer l'adresse
    let cleanAddress = address
      .replace(/\r\n/g, '\n')
      .replace(/\r/g, '\n')
      .replace(/\n+/g, '\n')
      .trim();

    // Séparer par lignes
    const lines = cleanAddress.split('\n').map(line => line.trim()).filter(line => line && line !== '---');
    
    if (lines.length === 0) {
      return {};
    }

    // La première ligne est généralement la rue
    if (lines.length > 0) {
      result.street = lines[0];
    }

    // Patterns pour différents pays
    if (countryCode === 'FR') {
      // Format français: "75001 PARIS" ou "PARIS 75001"
      if (lines.length > 1) {
        const lastLine = lines[lines.length - 1];
        // Pattern: code postal (5 chiffres) + ville
        const frPattern1 = /^(\d{5})\s+(.+)$/;
        const frPattern2 = /^(.+)\s+(\d{5})$/;
        
        if (frPattern1.test(lastLine)) {
          const match = lastLine.match(frPattern1);
          if (match) {
            result.zipCode = match[1];
            result.city = match[2];
          }
        } else if (frPattern2.test(lastLine)) {
          const match = lastLine.match(frPattern2);
          if (match) {
            result.city = match[1];
            result.zipCode = match[2];
          }
        } else {
          result.city = lastLine;
        }
      }
    } else if (countryCode === 'BE') {
      // Format belge: "Rue des Ardennes 1\n6780 Messancy" ou "6780 Messancy"
      if (lines.length > 1) {
        // La première ligne est généralement la rue
        if (!result.street) {
          result.street = lines[0];
        }
        
        // La dernière ligne contient généralement le code postal et la ville
        const lastLine = lines[lines.length - 1];
        const bePattern1 = /^(\d{4})\s+(.+)$/; // "6780 Messancy"
        const bePattern2 = /^(.+)\s+(\d{4})$/; // "Messancy 6780"
        
        if (bePattern1.test(lastLine)) {
          const match = lastLine.match(bePattern1);
          if (match) {
            result.zipCode = match[1];
            result.city = match[2];
          }
        } else if (bePattern2.test(lastLine)) {
          const match = lastLine.match(bePattern2);
          if (match) {
            result.city = match[1];
            result.zipCode = match[2];
          }
        } else {
          // Si pas de pattern, vérifier si c'est juste un code postal ou une ville
          if (/^\d{4}$/.test(lastLine)) {
            result.zipCode = lastLine;
          } else {
            result.city = lastLine;
          }
        }
      } else if (lines.length === 1) {
        // Une seule ligne: peut être "6780 Messancy" ou juste la rue
        const singleLine = lines[0];
        const bePattern = /^(\d{4})\s+(.+)$/;
        if (bePattern.test(singleLine)) {
          const match = singleLine.match(bePattern);
          if (match) {
            result.zipCode = match[1];
            result.city = match[2];
          }
        } else {
          result.street = singleLine;
        }
      }
    } else if (countryCode === 'DE') {
      // Format allemand: "10115 BERLIN" ou "BERLIN 10115"
      if (lines.length > 1) {
        const lastLine = lines[lines.length - 1];
        const dePattern1 = /^(\d{5})\s+(.+)$/;
        const dePattern2 = /^(.+)\s+(\d{5})$/;
        
        if (dePattern1.test(lastLine)) {
          const match = lastLine.match(dePattern1);
          if (match) {
            result.zipCode = match[1];
            result.city = match[2];
          }
        } else if (dePattern2.test(lastLine)) {
          const match = lastLine.match(dePattern2);
          if (match) {
            result.city = match[1];
            result.zipCode = match[2];
          }
        } else {
          result.city = lastLine;
        }
      }
    } else {
      // Format générique: chercher code postal + ville dans la dernière ligne
      if (lines.length > 1) {
        const lastLine = lines[lines.length - 1];
        // Pattern générique: code postal (4-5 chiffres) + ville
        const genericPattern = /(\d{4,5})\s+(.+)|(.+)\s+(\d{4,5})/;
        const match = lastLine.match(genericPattern);
        
        if (match) {
          if (match[1] && match[2]) {
            result.zipCode = match[1];
            result.city = match[2];
          } else if (match[3] && match[4]) {
            result.city = match[3];
            result.zipCode = match[4];
          }
        } else {
          // Si pas de pattern, prendre toute la ligne comme ville
          result.city = lastLine;
        }
      }
    }

    // Si on n'a pas trouvé de ville mais qu'il y a plusieurs lignes, prendre la dernière
    if (!result.city && lines.length > 1) {
      result.city = lines[lines.length - 1];
    }

    return result;
  }

  private getDefaultCity(countryCode: string): string {
    const defaultCities: Record<string, string> = {
      FR: 'Paris',
      BE: 'Bruxelles',
      DE: 'Berlin',
      IT: 'Rome',
      ES: 'Madrid',
      NL: 'Amsterdam',
      PT: 'Lisbonne',
      AT: 'Vienne',
      CH: 'Berne',
      LU: 'Luxembourg',
    };
    return defaultCities[countryCode] || '';
  }

  private getCountryName(code: string): string {
    const countries: Record<string, string> = {
      FR: 'France',
      BE: 'Belgique',
      DE: 'Allemagne',
      IT: 'Italie',
      ES: 'Espagne',
      NL: 'Pays-Bas',
      PT: 'Portugal',
      AT: 'Autriche',
      CH: 'Suisse',
      LU: 'Luxembourg',
    };
    return countries[code] || code;
  }

  async cleanup(): Promise<{ deleted: { restaurants: number; orphanUsers: number } }> {
    console.log('🧹 Nettoyage de la base de données...');
    
    // Supprimer tous les restaurants
    const restaurants = await this.restaurantsRepository.find();
    const restaurantCount = restaurants.length;
    
    for (const restaurant of restaurants) {
      await this.restaurantsRepository.remove(restaurant);
    }
    
    console.log(`✅ ${restaurantCount} restaurants supprimés`);
    
    // Supprimer tous les utilisateurs orphelins (sans restaurant)
    const orphanUsers = await this.usersService.findAllOrphans();
    const orphanCount = orphanUsers.length;
    
    for (const user of orphanUsers) {
      await this.usersService.delete(user.id);
    }
    
    console.log(`✅ ${orphanCount} utilisateurs orphelins supprimés`);
    
    return {
      deleted: {
        restaurants: restaurantCount,
        orphanUsers: orphanCount,
      },
    };
  }
}

