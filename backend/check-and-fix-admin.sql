-- Vérifier l'utilisateur admin et son restaurant

SELECT 
  u.id,
  u.email,
  u."firstName",
  u."lastName",
  u.role,
  u."restaurantId",
  u."isActive",
  r.name as restaurant_name
FROM users u
LEFT JOIN restaurants r ON u."restaurantId" = r.id
WHERE u.email = 'leonard.anghe@gmail.com';

-- Si restaurantId est NULL, le mettre à jour
UPDATE users 
SET "restaurantId" = 'a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d'
WHERE email = 'leonard.anghe@gmail.com' 
  AND "restaurantId" IS NULL;

-- Vérifier à nouveau
SELECT 
  u.email,
  u.role,
  u."restaurantId",
  r.name as restaurant_name
FROM users u
LEFT JOIN restaurants r ON u."restaurantId" = r.id
WHERE u.email = 'leonard.anghe@gmail.com';
