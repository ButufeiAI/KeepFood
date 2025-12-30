# 👥 SYSTÈME COMPLET DES RÔLES ET ATTRIBUTS UTILISATEURS - KeepFood

---

## 📊 **ANALYSE ACTUELLE**

### ✅ **Ce qui existe déjà**

#### Entité User (Basique)
```typescript
{
  id: uuid
  email: string
  phone: string (nullable)
  password: string
  firstName: string
  lastName: string
  role: UserRole (enum)
  restaurantId: uuid (nullable)
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}
```

#### Rôles existants
```typescript
enum UserRole {
  SUPER_ADMIN       // Admin plateforme
  ADMIN_RESTAURANT  // Propriétaire restaurant
  MANAGER           // Gérant
  SERVEUR           // Serveur
  CUISINE           // Cuisinier
  BAR               // Barman
  LIVREUR           // Livreur
  CAISSIER          // Caissier
  STOCK             // Gestionnaire stock
  CLIENT            // Client
}
```

---

## ❌ **CE QUI MANQUE**

### **Attributs employés manquants**
- ❌ Salaire / Taux horaire
- ❌ Date d'embauche
- ❌ Numéro sécurité sociale
- ❌ Adresse complète
- ❌ Contact d'urgence
- ❌ Photo de profil
- ❌ Disponibilités / Horaires
- ❌ Contrat (CDI/CDD/Temps partiel)
- ❌ Département / Service
- ❌ Manager hiérarchique
- ❌ Compétences / Certifications
- ❌ Langues parlées
- ❌ Permis de conduire (pour livreurs)
- ❌ Numéro plaque véhicule (livreurs)
- ❌ Notes de performance
- ❌ Historique formations

### **Attributs clients manquants**
- ❌ Date de naissance
- ❌ Adresse de livraison
- ❌ Préférences alimentaires (existe dans gamification mais pas dans User)
- ❌ Allergies
- ❌ Photo de profil
- ❌ Carte bancaire enregistrée
- ❌ Programme fidélité (existe séparé)
- ❌ Historique achats
- ❌ Newsletter opt-in

---

## 🎯 **SOLUTION RECOMMANDÉE**

### **Option 1: Attributs directement dans User (Simple)**
✅ Rapide à implémenter  
✅ Pas de jointures  
❌ Table très large  
❌ Beaucoup de nullable  

### **Option 2: Profils séparés (RECOMMANDÉ)**
✅ Séparation des responsabilités  
✅ Optimisé par rôle  
✅ Évolutif  
❌ Jointures supplémentaires  

---

## 📝 **IMPLÉMENTATION RECOMMANDÉE**

### **1. EmployeeProfile Entity**

```typescript
@Entity('employee_profiles')
export class EmployeeProfile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', unique: true })
  userId: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  // Informations personnelles
  @Column({ type: 'date', nullable: true })
  birthDate: Date;

  @Column({ type: 'text', nullable: true })
  address: string;

  @Column({ length: 100, nullable: true })
  city: string;

  @Column({ length: 20, nullable: true })
  zipCode: string;

  @Column({ length: 100, nullable: true })
  country: string;

  @Column({ length: 255, nullable: true })
  profileImage: string;

  // Contact d'urgence
  @Column({ length: 255, nullable: true })
  emergencyContactName: string;

  @Column({ length: 50, nullable: true })
  emergencyContactPhone: string;

  @Column({ length: 100, nullable: true })
  emergencyContactRelation: string;

  // Informations emploi
  @Column({ type: 'date' })
  hireDate: Date;

  @Column({ type: 'date', nullable: true })
  endDate: Date; // Pour CDD ou fin de contrat

  @Column({
    type: 'enum',
    enum: ['CDI', 'CDD', 'INTERIM', 'STAGE', 'APPRENTISSAGE'],
    default: 'CDI',
  })
  contractType: string;

  @Column({
    type: 'enum',
    enum: ['FULL_TIME', 'PART_TIME', 'SEASONAL'],
    default: 'FULL_TIME',
  })
  workSchedule: string;

  @Column({ length: 255, nullable: true })
  socialSecurityNumber: string;

  @Column({ length: 100, nullable: true })
  department: string; // Service / Département

  @Column({ type: 'uuid', nullable: true })
  managerId: string; // Manager hiérarchique

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'managerId' })
  manager: User;

  // Rémunération
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  hourlyRate: number; // Taux horaire

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  monthlySalary: number; // Salaire mensuel

  @Column({ length: 10, default: 'EUR' })
  currency: string;

  // Compétences et certifications
  @Column({ type: 'text', nullable: true })
  skills: string; // JSON array

  @Column({ type: 'text', nullable: true })
  certifications: string; // JSON array

  @Column({ type: 'text', nullable: true })
  languages: string; // JSON array: [{language: 'FR', level: 'Native'}]

  // Pour livreurs
  @Column({ length: 100, nullable: true })
  driverLicense: string; // Numéro permis

  @Column({ type: 'date', nullable: true })
  driverLicenseExpiry: Date;

  @Column({ length: 50, nullable: true })
  vehiclePlate: string;

  @Column({ length: 100, nullable: true })
  vehicleType: string; // Voiture, Moto, Vélo, etc.

  // Disponibilités
  @Column({ type: 'text', nullable: true })
  availability: string; // JSON: {monday: [{start: '09:00', end: '17:00'}]}

  // Performance
  @Column({ type: 'decimal', precision: 3, scale: 2, default: 0 })
  performanceRating: number; // Note de performance sur 5

  @Column({ type: 'text', nullable: true })
  notes: string; // Notes internes

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
```

---

### **2. ClientProfile Entity**

```typescript
@Entity('client_profiles')
export class ClientProfile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', unique: true })
  userId: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  // Informations personnelles
  @Column({ type: 'date', nullable: true })
  birthDate: Date;

  @Column({ length: 255, nullable: true })
  profileImage: string;

  @Column({ length: 10, nullable: true })
  gender: string; // M, F, Other

  // Adresses
  @Column({ type: 'text', nullable: true })
  defaultDeliveryAddress: string;

  @Column({ type: 'text', nullable: true })
  savedAddresses: string; // JSON array of addresses

  // Préférences alimentaires
  @Column({ type: 'text', nullable: true })
  dietaryPreferences: string; // JSON: ['Vegan', 'Gluten-Free']

  @Column({ type: 'text', nullable: true })
  allergies: string; // JSON: ['Peanuts', 'Shellfish']

  @Column({ type: 'text', nullable: true })
  favoriteCuisines: string; // JSON: ['Italian', 'Japanese']

  // Paiement
  @Column({ type: 'text', nullable: true })
  savedPaymentMethods: string; // JSON (tokenized, never store real card data)

  @Column({ length: 50, nullable: true })
  preferredPaymentMethod: string; // 'card', 'cash', 'online'

  // Communication
  @Column({ type: 'boolean', default: true })
  emailNotifications: boolean;

  @Column({ type: 'boolean', default: true })
  smsNotifications: boolean;

  @Column({ type: 'boolean', default: false })
  pushNotifications: boolean;

  @Column({ type: 'boolean', default: false })
  marketingEmails: boolean;

  @Column({ length: 10, nullable: true })
  preferredLanguage: string; // 'fr', 'en', 'nl'

  // Statistiques (dénormalisées pour performance)
  @Column({ type: 'int', default: 0 })
  totalOrders: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  totalSpent: number;

  @Column({ type: 'decimal', precision: 3, scale: 2, nullable: true })
  averageRating: number; // Note moyenne donnée par le client

  @Column({ type: 'timestamp', nullable: true })
  lastOrderDate: Date;

  @Column({ type: 'uuid', nullable: true })
  favoriteRestaurantId: string;

  // Programme fidélité (référence)
  @Column({ type: 'int', default: 0 })
  loyaltyPoints: number; // Dénormalisé pour accès rapide

  @Column({ type: 'int', default: 1 })
  loyaltyLevel: number; // Bronze, Silver, Gold, Platinum

  // Parrainage
  @Column({ length: 50, nullable: true, unique: true })
  referralCode: string; // Code personnel de parrainage

  @Column({ type: 'uuid', nullable: true })
  referredById: string; // Par qui le client a été parrainé

  @Column({ type: 'int', default: 0 })
  successfulReferrals: number; // Nombre de parrainages réussis

  // Préférences UI
  @Column({ type: 'boolean', default: false })
  darkMode: boolean;

  @Column({ length: 50, default: 'cards' })
  menuViewPreference: string; // 'cards', 'list', 'steps'

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
```

---

## 🔐 **PERMISSIONS PAR RÔLE**

### **SUPER_ADMIN**
- ✅ Tout (plateforme complète)
- ✅ Gestion restaurants
- ✅ Gestion abonnements
- ✅ Statistiques globales

### **ADMIN_RESTAURANT**
- ✅ Gestion complète de son restaurant
- ✅ Gestion employés
- ✅ Gestion menu/produits
- ✅ Gestion tables
- ✅ Gestion commandes
- ✅ Statistiques restaurant
- ✅ Comptabilité
- ✅ Configuration

### **MANAGER**
- ✅ Gestion employés (lecture/création/modification)
- ✅ Gestion commandes
- ✅ Validation pointages
- ✅ Statistiques restaurant
- ✅ Gestion stock
- ❌ Configuration système
- ❌ Comptabilité complète

### **SERVEUR**
- ✅ Voir commandes de ses tables
- ✅ Créer commandes
- ✅ Modifier statut commandes
- ✅ Pointage
- ✅ Voir ses statistiques
- ❌ Voir autres serveurs
- ❌ Gestion menu

### **CUISINE**
- ✅ Voir commandes cuisine
- ✅ Modifier statut préparation
- ✅ Alertes "prêt"
- ✅ Pointage
- ❌ Voir prix
- ❌ Gestion menu

### **BAR**
- ✅ Voir commandes boissons
- ✅ Modifier statut préparation
- ✅ Pointage
- ❌ Voir prix
- ❌ Gestion menu

### **LIVREUR**
- ✅ Voir commandes à livrer
- ✅ Modifier statut livraison
- ✅ GPS/Itinéraire
- ✅ Pointage
- ✅ Ses statistiques
- ❌ Prix détaillés
- ❌ Autres commandes

### **CAISSIER**
- ✅ Encaissement
- ✅ Paiements
- ✅ Tickets
- ✅ Rapport caisse
- ✅ Pointage
- ❌ Gestion menu
- ❌ Gestion employés

### **STOCK**
- ✅ Gestion stock
- ✅ Inventaire
- ✅ Fournisseurs
- ✅ Bons de commande
- ✅ Pointage
- ❌ Commandes clients
- ❌ Gestion menu

### **CLIENT**
- ✅ Commander
- ✅ Voir ses commandes
- ✅ Profil
- ✅ Fidélité
- ✅ Avis
- ✅ Favoris
- ❌ Rien d'autre

---

## 📋 **PLAN D'IMPLÉMENTATION**

### **Phase 1: Entités**
1. ✅ Créer `EmployeeProfile` entity
2. ✅ Créer `ClientProfile` entity
3. ✅ Migrations

### **Phase 2: Services**
1. ✅ EmployeeProfileService
2. ✅ ClientProfileService
3. ✅ Auto-création profil à l'inscription

### **Phase 3: API**
1. ✅ CRUD endpoints profils
2. ✅ Validation par rôle
3. ✅ Guards permissions

### **Phase 4: Frontend**
1. ✅ Formulaires employés
2. ✅ Formulaires clients
3. ✅ Affichage profils
4. ✅ Édition profils

---

## ✅ **RECOMMANDATIONS**

1. **Séparer les profils** (EmployeeProfile / ClientProfile)
2. **Créer automatiquement** les profils à l'inscription
3. **Permissions granulaires** avec guards NestJS
4. **Validation stricte** des données
5. **Encryption** pour données sensibles (SSN, etc.)
6. **Audit trail** pour modifications profils
7. **RGPD compliance** pour données personnelles

---

Voulez-vous que j'implémente ce système complet ? 🚀

