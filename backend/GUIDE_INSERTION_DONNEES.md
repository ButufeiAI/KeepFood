# 🗄️ GUIDE D'INSERTION DES DONNÉES DE TEST

## 📦 Ce qui sera créé

### Restaurant
- **Nom** : Restaurant Le Gourmet
- **ID** : `a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d`
- **Plan** : PREMIUM
- **Ville** : Paris

### 8 Tables
- Table 1, 2, 3, 4 (Salle principale)
- Table 5, 6 (Terrasse)
- Bar 1, 2 (Bar)

### 9 Catégories
1. 🍸 Apéritifs
2. 🥗 Entrées
3. 🍽️ Plats
4. 🍰 Desserts
5. ☕ Cafés
6. 🥤 Softs
7. 🍺 Bières
8. 🍷 Vins
9. 🍹 Cocktails

### 50+ Produits

#### Apéritifs (4 produits)
- Kir Royal - 8.50€
- Pastis 51 - 6.00€
- Porto Rouge - 7.50€
- Champagne Brut - 12.00€

#### Entrées (5 produits)
- Salade César - 11.50€
- Carpaccio de Bœuf - 13.50€
- Soupe à l'Oignon - 8.50€
- Foie Gras Maison - 16.50€
- Escargots de Bourgogne - 12.00€

#### Plats (7 produits)
- Steak Frites - 22.50€
- Magret de Canard - 24.00€
- Saumon Grillé - 21.50€
- Risotto aux Champignons - 18.50€
- Bœuf Bourguignon - 19.50€
- Pizza Margherita - 13.50€
- Poulet Curry - 17.50€

#### Desserts (5 produits)
- Crème Brûlée - 7.50€
- Fondant au Chocolat - 8.50€
- Tarte Tatin - 8.00€
- Profiteroles - 9.00€
- Tiramisu Maison - 7.50€

#### Cafés (5 produits)
- Espresso - 2.50€
- Café Allongé - 3.00€
- Cappuccino - 4.50€
- Café Gourmand - 9.50€
- Thé - 3.50€

#### Softs (7 produits)
- Coca-Cola / Coca Zéro - 4.00€
- Sprite - 4.00€
- Orangina - 4.00€
- Perrier - 3.50€
- Jus d'Orange - 5.50€
- Limonade Maison - 5.00€

#### Bières (5 produits)
- Kronenbourg - 5.50€
- 1664 - 6.00€
- Heineken - 6.50€
- Leffe Blonde - 7.00€
- Desperados - 6.50€

#### Vins (5 produits)
- Bordeaux Rouge/Blanc - 6.00€
- Côtes du Rhône - 6.50€
- Champagne (bouteille) - 45.00€
- Rosé de Provence - 5.50€

#### Cocktails (5 produits)
- Mojito - 10.00€
- Piña Colada - 11.00€
- Cosmopolitan - 11.50€
- Margarita - 10.50€
- Sex on the Beach - 10.00€

---

## 🚀 MÉTHODES D'INSERTION

### Méthode 1 : Script PowerShell (RECOMMANDÉ pour Windows)

```powershell
cd backend
powershell -ExecutionPolicy Bypass -File .\insert-test-data.ps1
```

**Avantages** :
- Interface guidée
- Détection automatique de PostgreSQL
- Messages colorés
- Gestion sécurisée du mot de passe

### Méthode 2 : Script Batch

```batch
cd backend
insert-test-data.bat
```

### Méthode 3 : Commande directe psql

```bash
cd backend
psql -h localhost -U postgres -d keepfood -f seed-data.sql
```

Remplacez :
- `localhost` par votre hôte
- `postgres` par votre utilisateur
- `keepfood` par votre base de données

---

## ⚙️ PRÉREQUIS

### 1. PostgreSQL installé
Vérifiez avec :
```bash
psql --version
```

Si non installé, téléchargez depuis : https://www.postgresql.org/download/

### 2. Base de données créée
```sql
CREATE DATABASE keepfood;
```

### 3. Migrations exécutées
Assurez-vous que le backend a créé toutes les tables :
```bash
cd backend
npm run start:dev
```
(Les migrations se lancent automatiquement au démarrage)

---

## 🎯 APRÈS L'INSERTION

### Vérifier les données

```sql
-- Se connecter à la base
psql -U postgres -d keepfood

-- Compter les éléments
SELECT COUNT(*) FROM restaurants;  -- Devrait retourner 1
SELECT COUNT(*) FROM tables;       -- Devrait retourner 8
SELECT COUNT(*) FROM categories;   -- Devrait retourner 9
SELECT COUNT(*) FROM products;     -- Devrait retourner 50+

-- Voir tous les produits
SELECT name, price, type FROM products ORDER BY "categoryId", name;
```

### Tester les interfaces

1. **Bar POS** : http://localhost:5202/bar-pos
   - Vous devriez voir toutes les boissons avec catégories

2. **Écran Cuisine** : http://localhost:5202/kitchen-display?mode=KITCHEN
   - Créez une commande avec des plats pour les voir apparaître

3. **Écran Bar** : http://localhost:5202/kitchen-display?mode=BAR
   - Créez une commande avec des boissons pour les voir apparaître

---

## 🔧 DÉPANNAGE

### Erreur : "relation does not exist"
➡️ Les tables ne sont pas créées. Démarrez le backend une fois :
```bash
cd backend
npm run start:dev
```

### Erreur : "duplicate key value violates unique constraint"
➡️ Les données existent déjà. Pour réinsérer :
```sql
-- Supprimer les données existantes
DELETE FROM products WHERE "categoryId" IN (SELECT id FROM categories WHERE "restaurantId" = 'a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d');
DELETE FROM categories WHERE "restaurantId" = 'a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d';
DELETE FROM tables WHERE "restaurantId" = 'a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d';
DELETE FROM restaurants WHERE id = 'a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d';

-- Puis relancer le script
```

### Erreur : "password authentication failed"
➡️ Vérifiez votre mot de passe PostgreSQL

### PostgreSQL non trouvé dans le PATH
➡️ Ajoutez PostgreSQL au PATH :
```
C:\Program Files\PostgreSQL\16\bin
```

---

## 📝 PERSONNALISATION

Pour modifier les données, éditez le fichier `seed-data.sql` :

### Changer le nom du restaurant
```sql
-- Ligne 13
name: 'Votre Restaurant',
```

### Ajouter des produits
```sql
INSERT INTO products (id, "categoryId", name, "shortDescription", price, type, "isAvailable") VALUES
  (gen_random_uuid(), 'cat-plats', 'Votre Plat', 'Description', 25.00, 'FOOD', true);
```

### Ajouter des images
```sql
UPDATE products 
SET image = 'https://votre-url-image.jpg'
WHERE name = 'Nom du produit';
```

---

## ✅ DONNÉES PRÊTES !

Après insertion, vous avez un restaurant complet avec :
- ✅ Menu diversifié (50+ produits)
- ✅ Catégories organisées
- ✅ Tables configurées
- ✅ Types FOOD/DRINK corrects
- ✅ Prix réalistes

**Vous pouvez maintenant tester toutes les interfaces !** 🎉

---

*Guide créé le 31/12/2025*
