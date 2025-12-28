# 🌐 Accès Réseau Local - KeepFood

## Configuration pour accès depuis d'autres appareils

Vos serveurs sont maintenant configurés pour être accessibles depuis le réseau local.

### 📍 Adresse IP de votre PC
**192.168.129.198**

### 🔗 URLs d'accès depuis d'autres appareils (même réseau WiFi/Ethernet)

#### Marketing (Site public)
```
http://192.168.129.198:5200
```

#### Frontend (Application principale)
```
http://192.168.129.198:5202
```

#### Backend API
```
http://192.168.129.198:5201/api
```

### 🏠 URLs d'accès local (sur ce PC)

#### Marketing
```
http://localhost:5200
```

#### Frontend
```
http://localhost:5202
```

#### Backend API
```
http://localhost:5201/api
```

## ⚙️ Modifications apportées

1. **Backend** (`backend/src/main.ts`)
   - Configuration pour écouter sur `0.0.0.0` (toutes les interfaces)
   - CORS mis à jour pour accepter les requêtes depuis l'IP locale

2. **Frontend** (`frontend/vite.config.ts`)
   - Configuration Vite pour écouter sur `0.0.0.0`
   - Accessible depuis le réseau local

3. **Marketing** (`marketing/vite.config.ts`)
   - Configuration Vite pour écouter sur `0.0.0.0`
   - Accessible depuis le réseau local

## 🔒 Sécurité

⚠️ **Important** : Ces configurations permettent l'accès depuis votre réseau local uniquement. Pour un accès public, vous devrez :
- Configurer un reverse proxy (nginx, Apache)
- Mettre en place HTTPS
- Configurer un firewall approprié
- Utiliser un domaine et certificat SSL

## 🧪 Test d'accès

Pour tester depuis un autre appareil sur le même réseau :

1. Assurez-vous que l'appareil est sur le même réseau WiFi/Ethernet
2. Ouvrez un navigateur sur l'appareil
3. Accédez à : `http://192.168.129.198:5200` (Marketing)
4. Si cela fonctionne, les serveurs sont correctement configurés

## 🛠️ Dépannage

### Si l'accès ne fonctionne pas :

1. **Vérifier le firewall Windows**
   ```powershell
   # Autoriser les ports dans le firewall
   New-NetFirewallRule -DisplayName "KeepFood Backend" -Direction Inbound -LocalPort 5201 -Protocol TCP -Action Allow
   New-NetFirewallRule -DisplayName "KeepFood Frontend" -Direction Inbound -LocalPort 5202 -Protocol TCP -Action Allow
   New-NetFirewallRule -DisplayName "KeepFood Marketing" -Direction Inbound -LocalPort 5200 -Protocol TCP -Action Allow
   ```

2. **Vérifier que les serveurs sont démarrés**
   ```powershell
   Get-Process -Name node
   ```

3. **Vérifier l'IP actuelle**
   ```powershell
   Get-NetIPAddress -AddressFamily IPv4 | Where-Object { $_.InterfaceAlias -notlike "*Loopback*" }
   ```

4. **Tester la connectivité**
   ```powershell
   Test-NetConnection -ComputerName 192.168.129.198 -Port 5200
   Test-NetConnection -ComputerName 192.168.129.198 -Port 5201
   Test-NetConnection -ComputerName 192.168.129.198 -Port 5202
   ```

## 📱 Accès depuis mobile

Pour accéder depuis votre téléphone :

1. Connectez votre téléphone au même WiFi
2. Ouvrez le navigateur
3. Accédez à : `http://192.168.129.198:5200`

**Note** : Si l'IP change (connexion à un autre réseau), vous devrez mettre à jour les URLs.

