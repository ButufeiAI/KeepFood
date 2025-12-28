# API KeepFood - Documentation des Endpoints

## Base URL
```
http://localhost:5201/api
```

## Authentification

Tous les endpoints (sauf `/auth/register` et `/auth/login`) nécessitent un token JWT dans le header :
```
Authorization: Bearer <token>
```

Ou via cookie (HTTP-only) : `accessToken`

---

## 🔐 Authentification (`/auth`)

### POST `/auth/register`
Créer un nouveau compte utilisateur

**Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe",
  "phone": "+33123456789",
  "role": "CLIENT",
  "restaurantId": "uuid" // optionnel
}
```

### POST `/auth/login`
Se connecter

**Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "accessToken": "jwt_token",
  "refreshToken": "refresh_token",
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "role": "CLIENT",
    "restaurantId": "uuid"
  }
}
```

### POST `/auth/refresh`
Rafraîchir le token

**Body:**
```json
{
  "refreshToken": "refresh_token"
}
```

Ou via cookie : `refreshToken`

### POST `/auth/logout`
Se déconnecter (nécessite authentification)

### GET `/auth/me`
Obtenir les informations de l'utilisateur connecté (nécessite authentification)

---

## 🏪 Restaurants (`/restaurants`)

**Rôles requis :** SUPER_ADMIN, ADMIN_RESTAURANT, MANAGER (selon l'action)

### GET `/restaurants`
Liste tous les restaurants (selon les permissions)

### GET `/restaurants/:id`
Obtenir un restaurant par ID

### POST `/restaurants`
Créer un nouveau restaurant

**Body:**
```json
{
  "name": "Restaurant Le Gourmet",
  "logo": "https://...",
  "address": "123 Rue de la Paix",
  "city": "Paris",
  "zipCode": "75001",
  "country": "France",
  "phone": "+33123456789",
  "email": "contact@restaurant.com",
  "openingHours": "{\"monday\":\"09:00-22:00\",...}",
  "plan": "BASIC",
  "onSiteEnabled": true,
  "takeawayEnabled": false,
  "deliveryEnabled": false
}
```

### PATCH `/restaurants/:id`
Mettre à jour un restaurant

### DELETE `/restaurants/:id`
Supprimer un restaurant (SUPER_ADMIN uniquement)

---

## 🪑 Tables (`/tables`)

**Rôles requis :** SUPER_ADMIN, ADMIN_RESTAURANT, MANAGER (pour modifications)

### GET `/tables?restaurantId=uuid`
Liste toutes les tables d'un restaurant

### GET `/tables/:id`
Obtenir une table par ID

### POST `/tables`
Créer une nouvelle table

**Body:**
```json
{
  "restaurantId": "uuid",
  "name": "Table 1",
  "capacity": 4,
  "qrCode": "https://...",
  "zone": "Salle principale",
  "isActive": true
}
```

### PATCH `/tables/:id`
Mettre à jour une table

### DELETE `/tables/:id`
Supprimer une table

---

## 📁 Catégories (`/categories`)

**Rôles requis :** SUPER_ADMIN, ADMIN_RESTAURANT, MANAGER (pour modifications)

### GET `/categories?restaurantId=uuid`
Liste toutes les catégories d'un restaurant

### GET `/categories/:id`
Obtenir une catégorie par ID

### POST `/categories`
Créer une nouvelle catégorie

**Body:**
```json
{
  "restaurantId": "uuid",
  "name": "Entrées",
  "description": "Nos entrées",
  "displayOrder": 0,
  "parentCategoryId": null,
  "image": "https://...",
  "isActive": true
}
```

### PATCH `/categories/:id`
Mettre à jour une catégorie

### DELETE `/categories/:id`
Supprimer une catégorie

---

## 🍽️ Produits (`/products`)

**Rôles requis :** SUPER_ADMIN, ADMIN_RESTAURANT, MANAGER (pour modifications)

### GET `/products?categoryId=uuid`
Liste tous les produits d'une catégorie

### GET `/products?restaurantId=uuid`
Liste tous les produits d'un restaurant

### GET `/products/:id`
Obtenir un produit par ID

### POST `/products`
Créer un nouveau produit

**Body:**
```json
{
  "categoryId": "uuid",
  "name": "Pizza Margherita",
  "shortDescription": "Tomate, mozzarella, basilic",
  "fullDescription": "Une délicieuse pizza...",
  "price": 12.50,
  "allergens": "[\"gluten\",\"lactose\"]",
  "tags": "[\"vegetarian\"]",
  "type": "FOOD",
  "isAvailable": true,
  "displayOrder": 0,
  "images": [
    {
      "url": "https://...",
      "isPrimary": true,
      "displayOrder": 0
    }
  ],
  "variants": [
    {
      "name": "Grande",
      "priceModifier": 3.00,
      "isAvailable": true
    }
  ]
}
```

### PATCH `/products/:id`
Mettre à jour un produit

### DELETE `/products/:id`
Supprimer un produit (soft delete)

---

## 🛒 Commandes (`/orders`)

### POST `/orders`
Créer une nouvelle commande

**Body:**
```json
{
  "restaurantId": "uuid",
  "tableId": "uuid",
  "userId": "uuid",
  "orderType": "ON_SITE",
  "notes": "Sans oignon",
  "items": [
    {
      "productId": "uuid",
      "variantId": "uuid",
      "quantity": 2,
      "notes": "Bien cuit"
    }
  ]
}
```

### GET `/orders?restaurantId=uuid`
Liste toutes les commandes d'un restaurant

### GET `/orders?restaurantId=uuid&active=true`
Liste les commandes actives (PENDING, CONFIRMED, IN_PREPARATION, READY)

### GET `/orders/:id`
Obtenir une commande par ID

### PATCH `/orders/:id`
Mettre à jour une commande

**Body:**
```json
{
  "status": "CONFIRMED",
  "serverId": "uuid",
  "notes": "...",
  "isPaid": false
}
```

### PATCH `/orders/:orderId/items/:itemId/status`
Mettre à jour le statut d'un article de commande

**Body:**
```json
{
  "status": "IN_PREPARATION"
}
```

**Statuts possibles :** `PENDING`, `IN_PREPARATION`, `READY`, `CANCELLED`

---

## 🍳 Kitchen / Bar (`/kitchen`)

**Rôles requis :** CUISINE, BAR, ADMIN_RESTAURANT, MANAGER, SUPER_ADMIN

### GET `/kitchen/orders?restaurantId=uuid`
Obtenir les commandes de cuisine (produits FOOD uniquement)

### GET `/kitchen/bar/orders?restaurantId=uuid`
Obtenir les commandes du bar (produits DRINK uniquement)

### PATCH `/kitchen/items/:itemId/status`
Mettre à jour le statut d'un article

**Body:**
```json
{
  "status": "READY"
}
```

**Statuts possibles :** `PENDING`, `IN_PREPARATION`, `READY`, `CANCELLED`

---

## 📊 Rôles Utilisateurs

- **SUPER_ADMIN** : Accès complet à tous les restaurants
- **ADMIN_RESTAURANT** : Gestion complète d'un restaurant
- **MANAGER** : Gestion du service d'un restaurant
- **SERVEUR** : Prise de commandes, encaissement
- **CUISINE** : Gestion des commandes en cuisine
- **BAR** : Gestion des commandes au bar
- **CLIENT** : Passer des commandes

---

## 📦 Statuts de Commandes

- **PENDING** : En attente
- **CONFIRMED** : Confirmée
- **IN_PREPARATION** : En préparation
- **READY** : Prête
- **SERVED** : Servie
- **CANCELLED** : Annulée
- **PAID** : Payée

---

## 🔒 Sécurité

- Tous les endpoints (sauf `/auth/register` et `/auth/login`) nécessitent un token JWT valide
- Les données sont filtrées selon le rôle et le restaurant de l'utilisateur
- Les mots de passe sont hashés avec bcrypt
- Les tokens sont stockés dans des cookies HTTP-only (optionnel)



