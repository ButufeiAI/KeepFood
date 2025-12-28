# 🚀 Guide de démarrage rapide - KeepFood

## 📋 Prérequis

Avant de démarrer le projet, assurez-vous d'avoir :

1. **Node.js** (v18 ou supérieur) installé
2. **PostgreSQL** (v14 ou supérieur) installé et démarré
3. **npm** ou **yarn** installé

## 🔧 Configuration initiale

### 1. Créer le fichier `.env` dans le dossier `backend`

Le fichier `.env` devrait déjà être créé, mais si ce n'est pas le cas, copiez `env.example` :

```bash
cd backend
copy env.example .env
```

**Important :** Modifiez les valeurs dans `.env` selon votre configuration PostgreSQL :

```env
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres              # Votre utilisateur PostgreSQL
DATABASE_PASSWORD=postgres          # Votre mot de passe PostgreSQL
DATABASE_NAME=keepfood              # La base de données sera créée automatiquement en développement
```

### 2. Créer la base de données PostgreSQL

Connectez-vous à PostgreSQL et créez la base de données :

```sql
CREATE DATABASE keepfood;
```

Ou via la ligne de commande :

```bash
psql -U postgres
CREATE DATABASE keepfood;
\q
```

## 🏃 Démarrage

### Option 1 : Démarrer tout le projet (backend + frontend + marketing)

```bash
npm run dev
```

### Option 2 : Démarrer uniquement le backend

```bash
cd backend
npm run start:dev
```

Le serveur backend devrait démarrer sur : **http://localhost:5201**

### Option 3 : Démarrer séparément

```bash
# Terminal 1 - Backend
npm run dev:backend

# Terminal 2 - Frontend
npm run dev:frontend

# Terminal 3 - Marketing
npm run dev:marketing
```

## ✅ Vérifier que tout fonctionne

### 1. Vérifier le health check du backend

```bash
curl http://localhost:5201/api/health
```

Vous devriez recevoir :
```json
{
  "status": "ok",
  "timestamp": "2024-...",
  "service": "KeepFood API"
}
```

### 2. Tester l'endpoint racine

```bash
curl http://localhost:5201/api
```

## 📝 Créer un premier utilisateur (Super Admin)

Une fois le backend démarré, vous pouvez créer un premier utilisateur via l'API :

```bash
curl -X POST http://localhost:5201/api/auth/register \
  -H "Content-Type: application/json" \
  -d "{
    \"email\": \"admin@keepfood.com\",
    \"password\": \"admin123\",
    \"firstName\": \"Admin\",
    \"lastName\": \"KeepFood\",
    \"role\": \"SUPER_ADMIN\"
  }"
```

## 🎯 Endpoints disponibles

- **Health check** : `GET /api/health`
- **Authentification** : `/api/auth/*` (voir [API_ENDPOINTS.md](API_ENDPOINTS.md))
- **Restaurants** : `/api/restaurants`
- **Tables** : `/api/tables`
- **Catégories** : `/api/categories`
- **Produits** : `/api/products`
- **Commandes** : `/api/orders`
- **Kitchen/Bar** : `/api/kitchen`

Consultez [API_ENDPOINTS.md](API_ENDPOINTS.md) pour la documentation complète de l'API.

## ⚠️ Problèmes courants

### Le serveur ne démarre pas

1. **PostgreSQL n'est pas démarré** : Démarrez le service PostgreSQL
2. **Erreur de connexion à la base de données** : Vérifiez les credentials dans `.env`
3. **Port 5201 déjà utilisé** : Changez le port dans `.env` ou arrêtez l'autre processus

### Erreur "synchronize: true" en production

Le mode `synchronize: true` est activé uniquement en développement. En production, utilisez des migrations TypeORM.

### Base de données vide

En mode développement avec `synchronize: true`, les tables sont créées automatiquement. Les données initiales devront être créées via l'API.

## 📚 Documentation

- [Cahier des charges](CAHIER_DES_CHARGES.md)
- [Documentation API](API_ENDPOINTS.md)
- [README principal](README.md)



