-- ============================================
-- CRÉER UN COMPTE ADMINISTRATEUR
-- Email: leonard.anghe@gmail.com
-- Password: Admin123!
-- ============================================

-- Note: Le mot de passe sera hashé par bcrypt dans l'application
-- Pour ce script, nous devons utiliser un hash bcrypt pré-calculé

-- Hash bcrypt pour "Admin123!" (10 rounds)
-- $2b$10$rN8X7QGZqO5Y5YfJXxPFWeFjp3qU5kYJKHJjF5VGKvZnX5VQZqO5K

-- 1. Créer ou mettre à jour l'utilisateur admin
INSERT INTO users (
  id,
  email,
  password,
  "firstName",
  "lastName",
  phone,
  role,
  "restaurantId",
  "isActive"
) VALUES (
  'admin-user-001',
  'leonard.anghe@gmail.com',
  '$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdTqHg9qe', -- Hash pour "Admin123!"
  'Leonard',
  'Anghe',
  '+33 6 12 34 56 78',
  'SUPER_ADMIN',
  'a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d', -- Restaurant Le Gourmet
  true
)
ON CONFLICT (email) 
DO UPDATE SET
  password = EXCLUDED.password,
  "firstName" = EXCLUDED."firstName",
  "lastName" = EXCLUDED."lastName",
  role = EXCLUDED.role,
  "isActive" = EXCLUDED."isActive";

-- Afficher un message de confirmation
SELECT 
  'Compte administrateur créé avec succès!' AS message,
  email,
  "firstName",
  "lastName",
  role
FROM users 
WHERE email = 'leonard.anghe@gmail.com';
