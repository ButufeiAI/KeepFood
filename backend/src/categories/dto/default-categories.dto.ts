// Images par défaut pour les catégories (Unsplash - images gratuites de qualité)
const CATEGORY_IMAGES: Record<string, string> = {
  // Catégories principales
  'Restaurant': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
  'Friterie': 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80',
  'Fast Food': 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80',
  'Boissons': 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80',
  'Desserts': 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80',
  
  // Sous-catégories Restaurant
  'Entrées': 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80',
  'Plats principaux': 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80',
  'Pâtes': 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80',
  'Viandes': 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
  'Poissons': 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=800&q=80',
  'Salades': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
  
  // Sous-catégories Friterie
  'Frites': 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80',
  'Boulettes': 'https://images.unsplash.com/photo-1608039829570-21a20e6e0ee0?w=800&q=80',
  'Snacks': 'https://images.unsplash.com/photo-1586816001966-79b736744398?w=800&q=80',
  'Sauces': 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=800&q=80',
  
  // Sous-catégories Fast Food
  'Burgers': 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
  'Pizzas': 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80',
  'Tacos': 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80',
  'Paninis': 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80',
  'Kebab': 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80',
  
  // Sous-catégories Boissons
  'Boissons chaudes': 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&q=80',
  'Boissons froides': 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=800&q=80',
  'Bières': 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80',
  'Vins': 'https://images.unsplash.com/photo-1506377248727-11f5d7c1544a?w=800&q=80',
  'Cocktails': 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80',
  
  // Sous-catégories Desserts
  'Glaces': 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80',
  'Gâteaux': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80',
  'Crêpes': 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80',
  'Fruits': 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=800&q=80',
};

// Fonction pour obtenir l'image d'une catégorie
export function getCategoryImage(categoryName: string): string | undefined {
  return CATEGORY_IMAGES[categoryName];
}

// Catégories par défaut pour un restaurant
export const DEFAULT_MAIN_CATEGORIES = [
  { name: 'Restaurant', description: 'Plats du restaurant', displayOrder: 1, image: CATEGORY_IMAGES['Restaurant'] },
  { name: 'Friterie', description: 'Frites et snacks', displayOrder: 2, image: CATEGORY_IMAGES['Friterie'] },
  { name: 'Fast Food', description: 'Burgers, pizzas, etc.', displayOrder: 3, image: CATEGORY_IMAGES['Fast Food'] },
  { name: 'Boissons', description: 'Boissons froides et chaudes', displayOrder: 4, image: CATEGORY_IMAGES['Boissons'] },
  { name: 'Desserts', description: 'Desserts et sucreries', displayOrder: 5, image: CATEGORY_IMAGES['Desserts'] },
];

export const DEFAULT_SUBCATEGORIES: Record<string, Array<{ name: string; description?: string; displayOrder: number; image?: string }>> = {
  'Restaurant': [
    { name: 'Entrées', description: 'Entrées du restaurant', displayOrder: 1, image: CATEGORY_IMAGES['Entrées'] },
    { name: 'Plats principaux', description: 'Plats principaux', displayOrder: 2, image: CATEGORY_IMAGES['Plats principaux'] },
    { name: 'Pâtes', description: 'Pâtes et risottos', displayOrder: 3, image: CATEGORY_IMAGES['Pâtes'] },
    { name: 'Viandes', description: 'Viandes et grillades', displayOrder: 4, image: CATEGORY_IMAGES['Viandes'] },
    { name: 'Poissons', description: 'Poissons et fruits de mer', displayOrder: 5, image: CATEGORY_IMAGES['Poissons'] },
    { name: 'Salades', description: 'Salades composées', displayOrder: 6, image: CATEGORY_IMAGES['Salades'] },
  ],
  'Friterie': [
    { name: 'Frites', description: 'Frites classiques et spéciales', displayOrder: 1, image: CATEGORY_IMAGES['Frites'] },
    { name: 'Boulettes', description: 'Boulettes et croquettes', displayOrder: 2, image: CATEGORY_IMAGES['Boulettes'] },
    { name: 'Snacks', description: 'Snacks et accompagnements', displayOrder: 3, image: CATEGORY_IMAGES['Snacks'] },
    { name: 'Sauces', description: 'Sauces et condiments', displayOrder: 4, image: CATEGORY_IMAGES['Sauces'] },
  ],
  'Fast Food': [
    { name: 'Burgers', description: 'Burgers classiques et spéciaux', displayOrder: 1, image: CATEGORY_IMAGES['Burgers'] },
    { name: 'Pizzas', description: 'Pizzas et calzones', displayOrder: 2, image: CATEGORY_IMAGES['Pizzas'] },
    { name: 'Tacos', description: 'Tacos et wraps', displayOrder: 3, image: CATEGORY_IMAGES['Tacos'] },
    { name: 'Paninis', description: 'Paninis et sandwiches', displayOrder: 4, image: CATEGORY_IMAGES['Paninis'] },
    { name: 'Kebab', description: 'Kebabs et durums', displayOrder: 5, image: CATEGORY_IMAGES['Kebab'] },
  ],
  'Boissons': [
    { name: 'Boissons chaudes', description: 'Café, thé, chocolat chaud', displayOrder: 1, image: CATEGORY_IMAGES['Boissons chaudes'] },
    { name: 'Boissons froides', description: 'Sodas, jus, eau', displayOrder: 2, image: CATEGORY_IMAGES['Boissons froides'] },
    { name: 'Bières', description: 'Bières pression et bouteilles', displayOrder: 3, image: CATEGORY_IMAGES['Bières'] },
    { name: 'Vins', description: 'Vins rouges, blancs, rosés', displayOrder: 4, image: CATEGORY_IMAGES['Vins'] },
    { name: 'Cocktails', description: 'Cocktails et apéritifs', displayOrder: 5, image: CATEGORY_IMAGES['Cocktails'] },
  ],
  'Desserts': [
    { name: 'Glaces', description: 'Glaces et sorbets', displayOrder: 1, image: CATEGORY_IMAGES['Glaces'] },
    { name: 'Gâteaux', description: 'Gâteaux et pâtisseries', displayOrder: 2, image: CATEGORY_IMAGES['Gâteaux'] },
    { name: 'Crêpes', description: 'Crêpes et gaufres', displayOrder: 3, image: CATEGORY_IMAGES['Crêpes'] },
    { name: 'Fruits', description: 'Fruits frais', displayOrder: 4, image: CATEGORY_IMAGES['Fruits'] },
  ],
};

