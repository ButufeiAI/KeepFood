import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthResponseDto } from './dto/auth-response.dto';
import { Response } from 'express';
import { UserRole } from '../common/enums/role.enum';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async register(registerDto: RegisterDto): Promise<AuthResponseDto> {
    const existingUser = await this.usersService.findByEmail(registerDto.email);
    
    // Si l'utilisateur existe mais n'a pas de restaurant associé (utilisateur orphelin),
    // on peut le réutiliser au lieu de créer un nouveau compte
    if (existingUser) {
      if (existingUser.restaurantId) {
        // L'utilisateur a déjà un restaurant, on ne peut pas réutiliser
        throw new ConflictException('Cet email est déjà utilisé. Veuillez utiliser un autre email ou vous connecter.');
      } else {
        // L'utilisateur existe mais n'a pas de restaurant (orphelin)
        // On peut le réutiliser - mettre à jour ses informations si nécessaire
        console.log(`Réutilisation de l'utilisateur orphelin: ${existingUser.email}`);
        // Retourner les tokens pour cet utilisateur existant
        return this.generateTokens(existingUser);
      }
    }

    // Créer un nouvel utilisateur
    const user = await this.usersService.create({
      ...registerDto,
      role: registerDto.role || UserRole.CLIENT,
    });

    return this.generateTokens(user);
  }

  async login(loginDto: LoginDto): Promise<AuthResponseDto> {
    console.log('=== TENTATIVE DE CONNEXION ===');
    console.log('Email:', loginDto.email);
    console.log('Password length:', loginDto.password?.length || 0);
    
    // Mode développement : permettre connexion avec mot de passe provisoire "test123"
    // Par défaut, on considère qu'on est en développement sauf si NODE_ENV est explicitement "production"
    const isDevelopment = process.env.NODE_ENV !== 'production';
    const isProvisionalPassword = isDevelopment && loginDto.password === 'test123';
    
    console.log('isDevelopment:', isDevelopment);
    console.log('isProvisionalPassword:', isProvisionalPassword);
    
    let user = await this.usersService.findByEmail(loginDto.email);
    
    // Si utilisateur n'existe pas et qu'on utilise le mot de passe provisoire, créer un compte de test
    if (!user && isProvisionalPassword) {
      console.log('🔓 Mode développement : création d\'un compte de test');
      try {
        user = await this.usersService.create({
          email: loginDto.email,
          password: loginDto.password, // Sera hashé dans le service
          firstName: 'Test',
          lastName: 'User',
          role: UserRole.CLIENT,
        });
        console.log('✅ Compte de test créé:', user.id);
      } catch (error: any) {
        console.error('❌ Erreur lors de la création du compte de test:', error?.message);
        // Si l'utilisateur existe déjà (conflit), réessayer de le récupérer
        user = await this.usersService.findByEmail(loginDto.email);
      }
    }
    
    if (!user) {
      console.log('❌ Utilisateur non trouvé avec cet email');
      throw new UnauthorizedException('Invalid credentials');
    }

    console.log('✅ Utilisateur trouvé:', {
      id: user.id,
      email: user.email,
      isActive: user.isActive,
      restaurantId: user.restaurantId,
    });
    
    let isPasswordValid = false;
    if (isProvisionalPassword) {
      // En mode dev, accepter "test123" comme mot de passe provisoire pour n'importe quel utilisateur
      console.log('🔓 Mode développement : utilisation du mot de passe provisoire - ACCEPTÉ');
      isPasswordValid = true;
    } else {
      console.log('🔐 Validation du mot de passe normal');
      isPasswordValid = await this.usersService.validatePassword(
        user,
        loginDto.password,
      );
      console.log('Résultat validation:', isPasswordValid);
    }
    
    if (!isPasswordValid) {
      console.log('❌ Mot de passe incorrect');
      throw new UnauthorizedException('Invalid credentials');
    }

    if (!user.isActive) {
      console.log('❌ Compte inactif');
      throw new UnauthorizedException('Account is not active');
    }

    console.log('✅ Connexion réussie');
    return this.generateTokens(user);
  }

  async refreshToken(refreshToken: string): Promise<AuthResponseDto> {
    try {
      const payload = this.jwtService.verify(refreshToken, {
        secret: this.configService.get<string>('REFRESH_TOKEN_SECRET'),
      });
      const user = await this.usersService.findOne(payload.sub);
      return this.generateTokens(user);
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  private async generateTokens(user: any): Promise<AuthResponseDto> {
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
      restaurantId: user.restaurantId,
    };

    const accessToken = this.jwtService.sign(payload, {
      secret: this.configService.get<string>('JWT_SECRET'),
      expiresIn: this.configService.get<string>('JWT_EXPIRATION') || '1d',
    });

    const refreshToken = this.jwtService.sign(payload, {
      secret: this.configService.get<string>('REFRESH_TOKEN_SECRET'),
      expiresIn:
        this.configService.get<string>('REFRESH_TOKEN_EXPIRATION') || '7d',
    });

    return {
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        restaurantId: user.restaurantId,
      },
    };
  }

  async resetPassword(email: string, newPassword: string) {
    return this.usersService.resetPassword(email, newPassword);
  }

  setTokenCookies(response: Response, tokens: AuthResponseDto): void {
    const isProduction = this.configService.get<string>('NODE_ENV') === 'production';

    response.cookie('accessToken', tokens.accessToken, {
      httpOnly: true,
      secure: isProduction,
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    response.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      secure: isProduction,
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
  }
}

