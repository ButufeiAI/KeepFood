# KeepFood - Plateforme SaaS Restaurants & HoReCa

Plateforme SaaS multi-établissements pour la digitalisation des restaurants, snacks, pizzerias, cafés, bars, food-trucks et cantines.

## 🎯 Fonctionnalités principales

- 📱 Menu digital avec QR code à table
- 🛒 Commande client depuis smartphone
- 📊 Application serveur sur tablette
- 🍳 Affichage cuisine & bar en temps réel (écrans TV)
- 💳 Paiements intégrés (Viva Wallet, Payconiq, etc.)
- 🎁 Module de fidélité (Premium)
- 📅 Abonnements de midi (Premium)
- 📈 Statistiques et tableau de bord

## 🏗️ Architecture technique

- **Frontend**: React (SPA + PWA)
- **Backend**: Node.js avec NestJS
- **Base de données**: PostgreSQL
- **Authentification**: JWT + Refresh Tokens
- **Architecture**: Multi-tenant

## 📦 Structure du projet

```
KeepFood/
├── frontend/          # Application React (Port 5202)
├── backend/           # API NestJS (Port 5201)
├── marketing/         # Site Marketing (Port 5200)
└── README.md
```

## 🚀 Démarrage rapide

### Prérequis

- Node.js (v18 ou supérieur)
- PostgreSQL (v14 ou supérieur)
- npm ou yarn

### Installation

```bash
# Installer toutes les dépendances (racine, frontend et backend)
npm run install:all
```

### Configuration

1. **Backend** : Créer un fichier `backend/.env` avec :
```env
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=your_user
DATABASE_PASSWORD=your_password
DATABASE_NAME=keepfood
JWT_SECRET=your_secret_key
JWT_EXPIRATION=1d
REFRESH_TOKEN_SECRET=your_refresh_secret
REFRESH_TOKEN_EXPIRATION=7d
PORT=5201
```

2. **Frontend** : Créer un fichier `frontend/.env` avec :
```env
VITE_API_URL=http://localhost:5201/api
```

3. **Marketing** : Créer un fichier `marketing/.env` avec :
```env
VITE_API_URL=http://localhost:5201/api
PORT=5200
```

### Démarrer le projet

#### Option 1 : Scripts PowerShell (Recommandé)

```powershell
# Démarrer tous les serveurs
.\start-servers.ps1

# Arrêter tous les serveurs
.\stop-servers.ps1

# Redémarrer tous les serveurs
.\restart-servers.ps1
```

#### Option 2 : Commandes npm

```bash
# Démarrer tous les services en même temps
npm run dev

# Ou séparément :
npm run dev:frontend   # Frontend sur http://localhost:5202
npm run dev:backend    # Backend sur http://localhost:5201
npm run dev:marketing  # Marketing sur http://localhost:5200
```

## 📋 Packs disponibles

- **BASIC** : Menu digital, commandes QR, interface cuisine/bar
- **STANDARD** : + Paiements intégrés, à emporter, livraison
- **PREMIUM** : + Fidélité, abonnements midi, marketing, analytics avancés

## 🔐 Rôles utilisateurs

- SUPER ADMIN (KeepFood)
- ADMIN RESTAURANT
- MANAGER
- SERVEUR
- CUISINE / BAR
- CLIENT FINAL

## 📄 Documentation

- [Cahier des charges complet](CAHIER_DES_CHARGES.md)
- [Documentation API et Endpoints](API_ENDPOINTS.md)

## ✅ Modules implémentés (Phase 1 - MVP)

- ✅ **Authentification** : JWT, login, register, refresh tokens
- ✅ **Restaurants** : CRUD complet avec gestion des packs (BASIC/STANDARD/PREMIUM)
- ✅ **Tables** : Gestion des tables avec QR codes
- ✅ **Catégories** : Gestion des catégories et sous-catégories de produits
- ✅ **Produits** : CRUD produits avec images, variantes, allergènes, tags
- ✅ **Commandes** : Création, gestion des statuts, historique
- ✅ **Kitchen/Bar** : Interfaces séparées pour cuisine et bar avec gestion des statuts des items

## 🛠️ Technologies utilisées

- React + TypeScript
- NestJS + TypeScript
- PostgreSQL
- JWT Authentication
- PWA (Progressive Web App)

