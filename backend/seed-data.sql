-- ============================================
-- SCRIPT D'INSERTION DE DONNÉES DE TEST
-- KeepFood - Restaurant Demo
-- ============================================

-- 1. CRÉER UN RESTAURANT DE TEST
INSERT INTO restaurants (
  id, 
  name, 
  address, 
  city, 
  "zipCode", 
  country, 
  phone, 
  email, 
  plan, 
  "onSiteEnabled", 
  "takeawayEnabled", 
  "deliveryEnabled",
  "isActive"
) VALUES (
  'a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d',
  'Restaurant Le Gourmet',
  '123 Avenue des Champs',
  'Paris',
  '75008',
  'France',
  '+33 1 42 25 25 25',
  'contact@legourmet.fr',
  'PREMIUM',
  true,
  true,
  true,
  true
) ON CONFLICT (id) DO NOTHING;

-- 2. CRÉER DES TABLES
INSERT INTO tables (id, "restaurantId", name, capacity, zone, "isActive") VALUES
  (gen_random_uuid(), 'a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d', 'Table 1', 4, 'Salle principale', true),
  (gen_random_uuid(), 'a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d', 'Table 2', 2, 'Salle principale', true),
  (gen_random_uuid(), 'a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d', 'Table 3', 6, 'Salle principale', true),
  (gen_random_uuid(), 'a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d', 'Table 4', 4, 'Salle principale', true),
  (gen_random_uuid(), 'a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d', 'Table 5', 2, 'Terrasse', true),
  (gen_random_uuid(), 'a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d', 'Table 6', 4, 'Terrasse', true),
  (gen_random_uuid(), 'a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d', 'Bar 1', 2, 'Bar', true),
  (gen_random_uuid(), 'a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d', 'Bar 2', 2, 'Bar', true);

-- 3. CRÉER DES CATÉGORIES

-- Catégories principales
INSERT INTO categories (id, "restaurantId", name, "displayOrder", "isActive") VALUES
  ('cat-aperitifs', 'a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d', 'Apéritifs', 1, true),
  ('cat-entrees', 'a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d', 'Entrées', 2, true),
  ('cat-plats', 'a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d', 'Plats', 3, true),
  ('cat-desserts', 'a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d', 'Desserts', 4, true),
  ('cat-cafes', 'a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d', 'Cafés', 5, true),
  ('cat-softs', 'a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d', 'Softs', 6, true),
  ('cat-bieres', 'a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d', 'Bières', 7, true),
  ('cat-vins', 'a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d', 'Vins', 8, true),
  ('cat-cocktails', 'a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d', 'Cocktails', 9, true)
ON CONFLICT (id) DO NOTHING;

-- 4. CRÉER DES PRODUITS AVEC IMAGES

-- APÉRITIFS
INSERT INTO products (id, "categoryId", name, "shortDescription", price, type, "isAvailable") VALUES
  (gen_random_uuid(), 'cat-aperitifs', 'Kir Royal', 'Crémant et Cassis', 8.50, 'DRINK', true),
  (gen_random_uuid(), 'cat-aperitifs', 'Pastis 51', 'Le classique du sud', 6.00, 'DRINK', true),
  (gen_random_uuid(), 'cat-aperitifs', 'Porto Rouge', 'Porto traditionnel', 7.50, 'DRINK', true),
  (gen_random_uuid(), 'cat-aperitifs', 'Champagne Brut', 'Coupe de champagne', 12.00, 'DRINK', true);

-- ENTRÉES
INSERT INTO products (id, "categoryId", name, "shortDescription", price, type, "isAvailable") VALUES
  (gen_random_uuid(), 'cat-entrees', 'Salade César', 'Poulet grillé, parmesan, croûtons', 11.50, 'FOOD', true),
  (gen_random_uuid(), 'cat-entrees', 'Carpaccio de Bœuf', 'Roquette, parmesan, huile de truffe', 13.50, 'FOOD', true),
  (gen_random_uuid(), 'cat-entrees', 'Soupe à l''Oignon', 'Gratinée au fromage', 8.50, 'FOOD', true),
  (gen_random_uuid(), 'cat-entrees', 'Foie Gras Maison', 'Confit d''oignons, pain toasté', 16.50, 'FOOD', true),
  (gen_random_uuid(), 'cat-entrees', 'Escargots de Bourgogne', '6 escargots au beurre persillé', 12.00, 'FOOD', true);

-- PLATS PRINCIPAUX
INSERT INTO products (id, "categoryId", name, "shortDescription", price, type, "isAvailable") VALUES
  (gen_random_uuid(), 'cat-plats', 'Steak Frites', 'Entrecôte 300g, frites maison', 22.50, 'FOOD', true),
  (gen_random_uuid(), 'cat-plats', 'Magret de Canard', 'Pommes sarladaises, sauce au miel', 24.00, 'FOOD', true),
  (gen_random_uuid(), 'cat-plats', 'Saumon Grillé', 'Légumes de saison, beurre blanc', 21.50, 'FOOD', true),
  (gen_random_uuid(), 'cat-plats', 'Risotto aux Champignons', 'Cèpes, parmesan, truffe', 18.50, 'FOOD', true),
  (gen_random_uuid(), 'cat-plats', 'Bœuf Bourguignon', 'Mijoté au vin rouge, carottes', 19.50, 'FOOD', true),
  (gen_random_uuid(), 'cat-plats', 'Pizza Margherita', 'Tomate, mozzarella, basilic', 13.50, 'FOOD', true),
  (gen_random_uuid(), 'cat-plats', 'Poulet Curry', 'Riz basmati, sauce curry', 17.50, 'FOOD', true);

-- DESSERTS
INSERT INTO products (id, "categoryId", name, "shortDescription", price, type, "isAvailable") VALUES
  (gen_random_uuid(), 'cat-desserts', 'Crème Brûlée', 'À la vanille de Madagascar', 7.50, 'FOOD', true),
  (gen_random_uuid(), 'cat-desserts', 'Fondant au Chocolat', 'Cœur coulant, glace vanille', 8.50, 'FOOD', true),
  (gen_random_uuid(), 'cat-desserts', 'Tarte Tatin', 'Pommes caramélisées, chantilly', 8.00, 'FOOD', true),
  (gen_random_uuid(), 'cat-desserts', 'Profiteroles', 'Glace vanille, sauce chocolat', 9.00, 'FOOD', true),
  (gen_random_uuid(), 'cat-desserts', 'Tiramisu Maison', 'Recette traditionnelle', 7.50, 'FOOD', true);

-- CAFÉS
INSERT INTO products (id, "categoryId", name, "shortDescription", price, type, "isAvailable") VALUES
  (gen_random_uuid(), 'cat-cafes', 'Espresso', 'Café serré', 2.50, 'DRINK', true),
  (gen_random_uuid(), 'cat-cafes', 'Café Allongé', 'Double espresso allongé', 3.00, 'DRINK', true),
  (gen_random_uuid(), 'cat-cafes', 'Cappuccino', 'Espresso, lait mousseux', 4.50, 'DRINK', true),
  (gen_random_uuid(), 'cat-cafes', 'Café Gourmand', 'Café + assortiment desserts', 9.50, 'DRINK', true),
  (gen_random_uuid(), 'cat-cafes', 'Thé', 'Earl Grey, Menthe, Vert', 3.50, 'DRINK', true);

-- SOFTS
INSERT INTO products (id, "categoryId", name, "shortDescription", price, type, "isAvailable") VALUES
  (gen_random_uuid(), 'cat-softs', 'Coca-Cola', '33cl', 4.00, 'DRINK', true),
  (gen_random_uuid(), 'cat-softs', 'Coca-Cola Zéro', '33cl', 4.00, 'DRINK', true),
  (gen_random_uuid(), 'cat-softs', 'Sprite', '33cl', 4.00, 'DRINK', true),
  (gen_random_uuid(), 'cat-softs', 'Orangina', '33cl', 4.00, 'DRINK', true),
  (gen_random_uuid(), 'cat-softs', 'Perrier', '33cl', 3.50, 'DRINK', true),
  (gen_random_uuid(), 'cat-softs', 'Jus d''Orange', 'Pressé frais', 5.50, 'DRINK', true),
  (gen_random_uuid(), 'cat-softs', 'Limonade Maison', 'Citron frais', 5.00, 'DRINK', true);

-- BIÈRES
INSERT INTO products (id, "categoryId", name, "shortDescription", price, type, "isAvailable") VALUES
  (gen_random_uuid(), 'cat-bieres', 'Kronenbourg', 'Pression 33cl', 5.50, 'DRINK', true),
  (gen_random_uuid(), 'cat-bieres', '1664', 'Pression 33cl', 6.00, 'DRINK', true),
  (gen_random_uuid(), 'cat-bieres', 'Heineken', 'Bouteille 33cl', 6.50, 'DRINK', true),
  (gen_random_uuid(), 'cat-bieres', 'Leffe Blonde', 'Pression 33cl', 7.00, 'DRINK', true),
  (gen_random_uuid(), 'cat-bieres', 'Desperados', 'Bouteille 33cl', 6.50, 'DRINK', true);

-- VINS
INSERT INTO products (id, "categoryId", name, "shortDescription", price, type, "isAvailable") VALUES
  (gen_random_uuid(), 'cat-vins', 'Bordeaux Rouge', 'Verre 12cl', 6.00, 'DRINK', true),
  (gen_random_uuid(), 'cat-vins', 'Bordeaux Blanc', 'Verre 12cl', 6.00, 'DRINK', true),
  (gen_random_uuid(), 'cat-vins', 'Côtes du Rhône', 'Verre 12cl', 6.50, 'DRINK', true),
  (gen_random_uuid(), 'cat-vins', 'Champagne', 'Bouteille 75cl', 45.00, 'DRINK', true),
  (gen_random_uuid(), 'cat-vins', 'Rosé de Provence', 'Verre 12cl', 5.50, 'DRINK', true);

-- COCKTAILS
INSERT INTO products (id, "categoryId", name, "shortDescription", price, type, "isAvailable") VALUES
  (gen_random_uuid(), 'cat-cocktails', 'Mojito', 'Rhum, menthe, citron vert', 10.00, 'DRINK', true),
  (gen_random_uuid(), 'cat-cocktails', 'Piña Colada', 'Rhum, ananas, coco', 11.00, 'DRINK', true),
  (gen_random_uuid(), 'cat-cocktails', 'Cosmopolitan', 'Vodka, cranberry, citron', 11.50, 'DRINK', true),
  (gen_random_uuid(), 'cat-cocktails', 'Margarita', 'Tequila, citron vert, triple sec', 10.50, 'DRINK', true),
  (gen_random_uuid(), 'cat-cocktails', 'Sex on the Beach', 'Vodka, pêche, fruits rouges', 10.00, 'DRINK', true);

-- Afficher un message de succès
SELECT 'Données de test insérées avec succès!' AS message,
       (SELECT COUNT(*) FROM products) AS nb_produits,
       (SELECT COUNT(*) FROM categories) AS nb_categories,
       (SELECT COUNT(*) FROM tables) AS nb_tables;
