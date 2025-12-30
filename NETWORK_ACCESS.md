# Configuration d'accès réseau - KeepFood

## Accès public via IP : 91.178.47.136

L'application KeepFood est configurée pour être accessible via l'IP publique **91.178.47.136** en plus de localhost.

## URLs d'accès

### Local (localhost)
- **Marketing** : http://localhost:5200
- **Frontend** : http://localhost:5202
- **Client** : http://localhost:5203
- **Backend API** : http://localhost:5201/api

### Réseau local (IP locale)
- **Marketing** : http://[IP_LOCALE]:5200
- **Frontend** : http://[IP_LOCALE]:5202
- **Client** : http://[IP_LOCALE]:5203
- **Backend API** : http://[IP_LOCALE]:5201/api

### Accès public (IP : 91.178.47.136)
- **Marketing** : http://91.178.47.136:5200
- **Frontend** : http://91.178.47.136:5202
- **Client** : http://91.178.47.136:5203
- **Backend API** : http://91.178.47.136:5201/api

## Configuration

### Backend
- Écoute sur `0.0.0.0` (toutes les interfaces)
- CORS configuré pour accepter les requêtes depuis l'IP publique
- Port : 5201

### Frontend / Marketing / Client
- Serveurs Vite configurés pour écouter sur `0.0.0.0`
- Détection automatique de l'URL de l'API selon l'hostname
- Ports : 5202 (frontend), 5200 (marketing), 5203 (client)

## Variables d'environnement (optionnel)

Vous pouvez définir l'IP publique dans un fichier `.env` :

```env
# Backend
PUBLIC_IP=91.178.47.136
HOST=0.0.0.0
PORT=5201

# Frontend
VITE_API_URL=http://91.178.47.136:5201/api

# Marketing
VITE_API_URL=http://91.178.47.136:5201/api

# Client
VITE_API_URL=http://91.178.47.136:5201/api
```

## Firewall

Assurez-vous que les ports suivants sont ouverts dans le firewall :
- **5200** (Marketing)
- **5201** (Backend API)
- **5202** (Frontend)
- **5203** (Client)

## Notes de sécurité

⚠️ **Important** : Cette configuration permet l'accès public. En production, il est recommandé de :
- Utiliser HTTPS avec un certificat SSL
- Configurer un reverse proxy (nginx, Apache)
- Mettre en place une authentification renforcée
- Limiter l'accès par IP si nécessaire

