# 🔧 Guide de configuration - KeepFood

## Étape 1 : Configuration PostgreSQL

### Vérifier que PostgreSQL est installé et démarré

```powershell
# Vérifier si PostgreSQL écoute sur le port 5432
Test-NetConnection -ComputerName localhost -Port 5432
```

### Créer la base de données

Connectez-vous à PostgreSQL via `psql` ou pgAdmin :

```sql
CREATE DATABASE keepfood;
```

Ou via la ligne de commande :

```powershell
# Si psql est dans votre PATH
psql -U postgres -c "CREATE DATABASE keepfood;"
```

## Étape 2 : Configuration du fichier .env

Le fichier `.env` se trouve dans le dossier `backend/`. 

**⚠️ IMPORTANT :** Modifiez les valeurs suivantes selon votre configuration PostgreSQL :

```env
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres              # Votre utilisateur PostgreSQL
DATABASE_PASSWORD=VOTRE_MOT_DE_PASSE  # ⚠️ Changez cette valeur !
DATABASE_NAME=keepfood
```

### Modifier le fichier .env

1. Ouvrez `backend/.env` dans un éditeur de texte
2. Remplacez `your_password` par votre mot de passe PostgreSQL
3. Remplacez `your_jwt_secret_key_change_in_production` par une clé secrète aléatoire
4. Remplacez `your_refresh_token_secret_change_in_production` par une autre clé secrète aléatoire

**Exemple de valeurs sécurisées :**

```env
DATABASE_PASSWORD=MonMotDePasse123!
JWT_SECRET=keepfood_super_secret_jwt_key_2024_xyz789
REFRESH_TOKEN_SECRET=keepfood_super_secret_refresh_key_2024_abc456
```

## Étape 3 : Installation des dépendances

```powershell
cd backend
npm install
```

## Étape 4 : Démarrer le serveur

```powershell
cd backend
npm run start:dev
```

Le serveur devrait démarrer sur **http://localhost:5201**

Vous devriez voir :
```
🚀 KeepFood API is running on: http://localhost:5201/api
```

## Étape 5 : Vérifier que tout fonctionne

Dans un nouveau terminal :

```powershell
# Health check
curl http://localhost:5201/api/health

# Endpoint racine
curl http://localhost:5201/api
```

## 🆘 Résolution des problèmes

### Erreur : "password authentication failed"

**Problème :** Le mot de passe PostgreSQL dans `.env` est incorrect.

**Solution :** Vérifiez et corrigez `DATABASE_PASSWORD` dans `backend/.env`

### Erreur : "database keepfood does not exist"

**Problème :** La base de données n'a pas été créée.

**Solution :** Créez la base de données :
```sql
CREATE DATABASE keepfood;
```

### Erreur : "Connection refused" ou "ECONNREFUSED"

**Problème :** PostgreSQL n'est pas démarré.

**Solution :** Démarrez le service PostgreSQL :
- Windows : Services → PostgreSQL → Démarrer
- Ou via la ligne de commande si vous avez les droits

### Erreur : "Port 5201 already in use"

**Problème :** Un autre processus utilise le port 5201.

**Solution :** 
```powershell
# Trouver le processus
netstat -ano | findstr :5201

# Tuer le processus (remplacez PID par le numéro trouvé)
taskkill /PID <PID> /F
```

Ou changez le port dans `backend/.env` :
```env
PORT=5202
```

## 📝 Script automatique

Vous pouvez utiliser le script PowerShell `backend/setup.ps1` :

```powershell
cd backend
.\setup.ps1
```

Ce script :
- ✅ Vérifie que .env existe
- ✅ Vérifie que PostgreSQL est actif
- ✅ Installe les dépendances si nécessaire
- ✅ Vous guide pour les prochaines étapes



