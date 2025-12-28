# 🆘 Aide au démarrage - KeepFood

## ⚠️ Action requise immédiate

Votre fichier `.env` contient encore les valeurs par défaut. **Vous devez le modifier** avant de démarrer le serveur.

## 📝 Étape 1 : Modifier le fichier .env

Ouvrez le fichier `backend/.env` et modifiez ces lignes :

```env
DATABASE_PASSWORD=your_password    ← Remplacez par votre mot de passe PostgreSQL
```

Si vous n'avez pas de mot de passe PostgreSQL, laissez vide :
```env
DATABASE_PASSWORD=
```

**Modifiez aussi les secrets JWT :**

```env
JWT_SECRET=keepfood_jwt_secret_123456789
REFRESH_TOKEN_SECRET=keepfood_refresh_secret_987654321
```

## 🗄️ Étape 2 : Créer la base de données

Ouvrez pgAdmin ou connectez-vous à PostgreSQL via la ligne de commande :

```sql
CREATE DATABASE keepfood;
```

**Comment vérifier si PostgreSQL fonctionne :**

1. Ouvrez pgAdmin (si installé)
2. Ou utilisez la ligne de commande :
   ```powershell
   psql -U postgres
   ```
   Puis tapez :
   ```sql
   CREATE DATABASE keepfood;
   \q
   ```

## 🚀 Étape 3 : Démarrer le serveur

Ouvrez un terminal PowerShell dans le dossier du projet et exécutez :

```powershell
cd backend
npm run start:dev
```

Si vous voyez cette erreur : `npm n'est pas reconnu`
- Vérifiez que Node.js est installé
- Redémarrez votre terminal après l'installation de Node.js

## ✅ Étape 4 : Vérifier que ça fonctionne

Dans un nouveau terminal, testez :

```powershell
curl http://localhost:5201/api/health
```

Vous devriez recevoir :
```json
{"status":"ok","timestamp":"...","service":"KeepFood API"}
```

## 📋 Checklist rapide

- [ ] PostgreSQL est installé et démarré
- [ ] Base de données `keepfood` créée
- [ ] Fichier `backend/.env` modifié avec le bon mot de passe PostgreSQL
- [ ] Secrets JWT modifiés dans `.env`
- [ ] Node.js est installé
- [ ] Dépendances installées (`npm install` dans `backend/`)
- [ ] Serveur démarré (`npm run start:dev`)

## 🔍 Commandes utiles

**Vérifier que PostgreSQL écoute :**
```powershell
Test-NetConnection -ComputerName localhost -Port 5432
```

**Vérifier si le port 5201 est libre :**
```powershell
Test-NetConnection -ComputerName localhost -Port 5201
```

**Installer les dépendances :**
```powershell
cd backend
npm install
```

## 🆘 Si ça ne marche toujours pas

1. **Erreur de connexion à PostgreSQL ?**
   - Vérifiez que le service PostgreSQL est démarré (Services Windows)
   - Vérifiez le mot de passe dans `.env`

2. **Erreur "database does not exist" ?**
   - Créez la base de données : `CREATE DATABASE keepfood;`

3. **Erreur "port already in use" ?**
   - Un autre processus utilise le port 5201
   - Changez le port dans `.env` : `PORT=5202`

4. **npm n'est pas reconnu ?**
   - Installez Node.js depuis nodejs.org
   - Redémarrez votre terminal

## 📞 Besoin d'aide supplémentaire ?

Consultez aussi :
- `CONFIGURATION.md` - Guide détaillé de configuration
- `DEBUT_RAPIDE.md` - Guide de démarrage rapide
- `API_ENDPOINTS.md` - Documentation de l'API



