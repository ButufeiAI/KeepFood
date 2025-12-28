# 📦 Instructions d'installation - KeepFood

## ✅ Étape 1 : Vérifier Node.js

Assurez-vous que Node.js est installé :

```powershell
node --version
npm --version
```

Si ces commandes ne fonctionnent pas, installez Node.js depuis : https://nodejs.org/

## 🚀 Étape 2 : Installer les dépendances

### Option A : Utiliser le fichier batch (Windows)

Double-cliquez sur le fichier :
- **`INSTALLER.bat`** - Installe les dépendances

### Option B : Utiliser la ligne de commande

Ouvrez PowerShell ou CMD dans le dossier du projet :

```cmd
cd backend
npm install
```

## ▶️ Étape 3 : Démarrer le serveur

### Option A : Utiliser le fichier batch (Windows)

Double-cliquez sur :
- **`DEMARRER.bat`** - Démarre le serveur
- **`INSTALL_ET_DEMARRER.bat`** - Installe ET démarre tout

### Option B : Utiliser la ligne de commande

```cmd
cd backend
npm run start:dev
```

## ✅ Vérifier que ça fonctionne

Le serveur devrait démarrer et afficher :
```
🚀 KeepFood API is running on: http://localhost:5201/api
```

Testez dans un navigateur ou avec curl :
```
http://localhost:5201/api/health
```

Vous devriez recevoir :
```json
{"status":"ok","timestamp":"...","service":"KeepFood API"}
```

## 📝 Important

Avant de démarrer, assurez-vous que :
- ✅ PostgreSQL est démarré
- ✅ La base de données `keepfood` existe
- ✅ Le fichier `backend/.env` contient le bon mot de passe PostgreSQL

## 🆘 Si ça ne marche pas

1. **"npm n'est pas reconnu"**
   - Installez Node.js depuis nodejs.org
   - Redémarrez votre terminal après l'installation

2. **Erreur de connexion à la base de données**
   - Vérifiez que PostgreSQL est démarré
   - Vérifiez le mot de passe dans `backend/.env`

3. **"port already in use"**
   - Un autre processus utilise le port 5201
   - Changez le port dans `backend/.env`



