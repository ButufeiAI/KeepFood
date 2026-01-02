import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { publicService } from '../services/public.service';
import { useToast } from '../components';

// Utiliser Product du service public
import type { Product, Category } from '../services/public.service';

// interface Category {
//   id: string;
//   name: string;
//   description?: string;
//   image?: string;
//   products: Product[];
// }

// Utiliser Category du service public
type MenuData = Category;

interface CartItem {
  product: Product;
  quantity: number;
  notes?: string;
}

interface Restaurant {
  id: string;
  name: string;
  logo?: string;
}

interface MealFormula {
  id: string;
  name: string;
  price: number;
  items: string[];
}

const ClientMenu: React.FC = () => {
  const navigate = useNavigate();
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const [searchParams] = useSearchParams();
  const tableId = searchParams.get('table');
  
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [menuData, setMenuData] = useState<MenuData[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProducts, setSelectedProducts] = useState<Set<string>>(new Set());
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState<{ [key: string]: number }>({});
  const [selectedFormula, setSelectedFormula] = useState<string | null>(null);

  const toast = useToast();

  // Icônes de catégories
  const getCategoryIcon = (categoryName: string): string => {
    const name = categoryName.toLowerCase();
    if (name.includes('entrée') || name.includes('entree')) return '🥗';
    if (name.includes('plat') && !name.includes('dessert')) return '🍽️';
    if (name.includes('dessert')) return '🍰';
    if (name.includes('boisson') || name.includes('drink')) return '🍹';
    if (name.includes('café') || name.includes('cafe') || name.includes('coffee')) return '☕';
    if (name.includes('vin') || name.includes('wine')) return '🍷';
    if (name.includes('bière') || name.includes('biere') || name.includes('beer')) return '🍺';
    if (name.includes('divertissement') || name.includes('game')) return '🎮';
    return '🍽️';
  };

  // Formules prédéfinies (à adapter selon vos besoins)
  const formulas: MealFormula[] = [
    { id: 'A', name: 'A', price: 9, items: ['Entrée', 'Plat'] },
    { id: 'B', name: 'B', price: 13, items: ['Entrée', 'Plat', 'Dessert', 'Boissons'] },
    { id: 'C', name: 'C', price: 12, items: ['Entrée', 'Plat', 'Dessert'] },
    { id: 'D', name: 'D', price: 10, items: ['Plat', 'Dessert'] },
    { id: 'E', name: 'E', price: 8, items: ['Dessert'] },
  ];

  const ITEMS_PER_PAGE = 4;

  useEffect(() => {
    fetchData();
  }, [restaurantId]);

  const fetchData = async () => {
    if (!restaurantId) return;
    
    try {
      const [restaurantData, menuData] = await Promise.all([
        publicService.getRestaurant(restaurantId),
        publicService.getMenu(restaurantId),
      ]);

      setRestaurant(restaurantData);
      setMenuData(menuData);
      
      // Initialiser la première catégorie comme sélectionnée
      if (menuData.length > 0) {
        setSelectedCategory(menuData[0].id);
      }
    } catch (error) {
      console.error('Erreur chargement données:', error);
      toast.error('Erreur lors du chargement du menu');
    }
  };

  const getCurrentCategory = () => {
    if (selectedCategory === 'all') {
      return null;
    }
    return menuData.find(cat => cat.id === selectedCategory);
  };

  const getCurrentProducts = (): Product[] => {
    const category = getCurrentCategory();
    if (!category) {
      return menuData.flatMap(cat => cat.products);
    }
    return category.products;
  };

  const getCurrentPageProducts = (): Product[] => {
    const products = getCurrentProducts();
    const categoryId = selectedCategory;
    const page = currentPage[categoryId] || 1;
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return products.slice(start, end);
  };

  const getTotalPages = (): number => {
    const products = getCurrentProducts();
    return Math.ceil(products.length / ITEMS_PER_PAGE) || 1;
  };

  const addToCart = (product: Product) => {
    const existingItem = cart.find(item => item.product.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
    setSelectedProducts(new Set(selectedProducts).add(product.id));
  };

  const updateQuantity = (productId: string, change: number) => {
    setCart(cart.map(item => {
      if (item.product.id === productId) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
    
    // Retirer de la sélection si quantité = 0
    const item = cart.find(i => i.product.id === productId);
    if (item && item.quantity + change <= 0) {
      const newSelected = new Set(selectedProducts);
      newSelected.delete(productId);
      setSelectedProducts(newSelected);
    }
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter(item => item.product.id !== productId));
    const newSelected = new Set(selectedProducts);
    newSelected.delete(productId);
    setSelectedProducts(newSelected);
  };

  const getTotalAmount = () => {
    return cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  const handleSendOrder = async () => {
    if (cart.length === 0) {
      toast.error('Votre panier est vide');
      return;
    }

    if (!restaurantId) {
      toast.error('Restaurant non défini');
      return;
    }

    setLoading(true);
    try {
      await publicService.createOrder({
        restaurantId,
        tableId: tableId || undefined,
        items: cart.map(item => ({
          productId: item.product.id,
          quantity: item.quantity,
          notes: item.notes,
        })),
      });

      toast.success('Commande envoyée avec succès ! 🎉');
      setCart([]);
      setSelectedProducts(new Set());
    } catch (error: any) {
      console.error('Erreur envoi commande:', error);
      const errorMessage = error.response?.data?.message || 'Erreur lors de l\'envoi de la commande';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage({ ...currentPage, [categoryId]: 1 });
  };

  const handlePageChange = (direction: 'prev' | 'next') => {
    const categoryId = selectedCategory;
    const current = currentPage[categoryId] || 1;
    const total = getTotalPages();
    const newPage = direction === 'next' 
      ? Math.min(current + 1, total)
      : Math.max(current - 1, 1);
    setCurrentPage({ ...currentPage, [categoryId]: newPage });
  };

  const currentCategory = getCurrentCategory();
  const currentProducts = getCurrentPageProducts();
  const totalPages = getTotalPages();
  const currentPageNum = currentPage[selectedCategory] || 1;

  return (
    <div style={{ 
      display: 'flex', 
      height: '100vh', 
      backgroundColor: '#0f172a',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Sidebar gauche - Navigation */}
      <div style={{
        width: '140px',
        backgroundColor: '#0f172a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1.5rem 0',
        borderRight: '1px solid #1e293b',
      }}>
        {/* Icône Home */}
        <div style={{ marginBottom: '2rem' }}>
          <button
            onClick={() => navigate('/')}
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '12px',
              backgroundColor: '#1e293b',
              border: 'none',
              color: 'white',
              fontSize: '1.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            🏠
          </button>
        </div>

        {/* Logo Restaurant */}
        <div style={{ marginBottom: '2rem', textAlign: 'center', width: '100%' }}>
          {restaurant?.logo ? (
            <img 
              src={restaurant.logo} 
              alt={restaurant.name} 
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: '0.5rem',
                border: '2px solid #1e293b',
              }}
            />
          ) : (
            <div style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              backgroundColor: '#1e40af',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.75rem',
              fontWeight: 'bold',
              margin: '0 auto 0.5rem',
              border: '2px solid #1e293b',
            }}>
              {restaurant?.name?.charAt(0) || 'K'}
            </div>
          )}
          <p style={{ 
            color: '#cbd5e1', 
            fontSize: '0.7rem', 
            fontWeight: '500',
            padding: '0 0.5rem',
            lineHeight: '1.2',
            wordBreak: 'break-word'
          }}>
            {restaurant?.name || 'KeepFood'}
          </p>
        </div>

        {/* Catégories */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%', padding: '0 0.75rem' }}>
          <button
            onClick={() => handleCategoryChange('all')}
            style={{
              width: '100%',
              padding: '0.75rem 0.5rem',
              borderRadius: '8px',
              backgroundColor: selectedCategory === 'all' ? '#1e40af' : 'transparent',
              border: 'none',
              color: selectedCategory === 'all' ? 'white' : '#94a3b8',
              fontSize: '0.8rem',
              fontWeight: '500',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.25rem',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              if (selectedCategory !== 'all') {
                e.currentTarget.style.backgroundColor = '#1e293b';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedCategory !== 'all') {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
          >
            <span style={{ fontSize: '1.25rem' }}>🍽️</span>
            <span>Menu</span>
          </button>

          {menuData.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              style={{
                width: '100%',
                padding: '0.75rem 0.5rem',
                borderRadius: '8px',
                backgroundColor: selectedCategory === cat.id ? '#1e40af' : 'transparent',
                border: 'none',
                color: selectedCategory === cat.id ? 'white' : '#94a3b8',
                fontSize: '0.8rem',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.25rem',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                if (selectedCategory !== cat.id) {
                  e.currentTarget.style.backgroundColor = '#1e293b';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== cat.id) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              <span style={{ fontSize: '1.25rem' }}>
                {getCategoryIcon(cat.name)}
              </span>
              <span style={{ textAlign: 'center', fontSize: '0.75rem' }}>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Zone centrale - Produits */}
      <div style={{ 
        flex: 1, 
        overflowY: 'auto', 
        padding: '2rem',
        backgroundColor: '#0f172a',
      }}>
        {/* Header avec pagination */}
        <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ 
              color: 'white', 
              fontSize: '1.5rem', 
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              {currentCategory ? (
                <>
                  <span style={{ fontSize: '1.25rem' }}>{getCategoryIcon(currentCategory.name)}</span>
                  <span>• {currentCategory.name}</span>
                </>
              ) : (
                <>
                  <span style={{ fontSize: '1.25rem' }}>🍽️</span>
                  <span>Menu</span>
                </>
              )}
            </h2>
          </div>
          {totalPages > 1 && (
            <div style={{ 
              color: 'white', 
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <button
                onClick={() => handlePageChange('prev')}
                disabled={currentPageNum === 1}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: currentPageNum === 1 ? '#334155' : '#3b82f6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: currentPageNum === 1 ? 'not-allowed' : 'pointer',
                  fontSize: '0.875rem',
                }}
              >
                ←
              </button>
              <span>{currentPageNum}/{totalPages}</span>
              <button
                onClick={() => handlePageChange('next')}
                disabled={currentPageNum === totalPages}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: currentPageNum === totalPages ? '#334155' : '#3b82f6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: currentPageNum === totalPages ? 'not-allowed' : 'pointer',
                  fontSize: '0.875rem',
                }}
              >
                →
              </button>
            </div>
          )}
        </div>

        {/* Grille de produits */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {currentProducts.map(product => {
            const isSelected = selectedProducts.has(product.id);
            const cartItem = cart.find(item => item.product.id === product.id);
            const quantity = cartItem?.quantity || 0;
            const productImage = product.images?.[0] || null;

            return (
              <div
                key={product.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: isSelected ? '3px solid #f97316' : '1px solid #1e293b',
                  transition: 'all 0.2s',
                  position: 'relative',
                }}
                onClick={() => addToCart(product)}
              >
                {/* Image produit */}
                <div style={{
                  width: '100%',
                  height: '200px',
                  backgroundColor: '#e2e8f0',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  {productImage ? (
                    <img
                      src={productImage}
                      alt={product.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  ) : (
                    <div style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '4rem',
                    }}>
                      {(product.type as string) === 'DRINK' ? '🍹' : '🍽️'}
                    </div>
                  )}

                  {/* Badge "Délicieux" */}
                  {Math.random() > 0.7 && (
                    <div style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '12px',
                      backgroundColor: 'rgba(59, 130, 246, 0.9)',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                    }}>
                      Délicieux
                    </div>
                  )}

                  {/* Prix */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: '#1e293b',
                  }}>
                    {product.price.toFixed(2)} €
                  </div>

                  {/* Badge quantité si dans le panier */}
                  {quantity > 0 && (
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: '#10b981',
                      color: 'white',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.875rem',
                      fontWeight: 'bold',
                    }}>
                      {quantity}
                    </div>
                  )}

                  {/* Coche de sélection */}
                  {isSelected && (
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      backgroundColor: '#f97316',
                      color: 'white',
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                    }}>
                      ✓
                    </div>
                  )}
                </div>

                {/* Info produit */}
                <div style={{ padding: '1rem' }}>
                  <h3 style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#1e293b',
                    marginBottom: '0.5rem',
                  }}>
                    {product.name}
                  </h3>
                  {product.description && (
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#64748b',
                      marginTop: '0.25rem',
                    }}>
                      {product.description}
                    </p>
                  )}
                </div>

                {/* Contrôles quantité si dans le panier */}
                {quantity > 0 && (
                  <div style={{
                    padding: '0 1rem 1rem',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '0.5rem',
                  }}
                  onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => updateQuantity(product.id, -1)}
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        backgroundColor: 'white',
                        color: '#1e293b',
                        fontSize: '1.25rem',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      -
                    </button>
                    <span style={{
                      minWidth: '32px',
                      textAlign: 'center',
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: '#1e293b',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      {quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(product.id, 1)}
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        backgroundColor: 'white',
                        color: '#1e293b',
                        fontSize: '1.25rem',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {currentProducts.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: '#64748b' }}>
            <p style={{ fontSize: '1.1rem' }}>Aucun produit disponible</p>
          </div>
        )}
      </div>

      {/* Sidebar droite - Panier et Formules */}
      <div style={{
        width: '320px',
        backgroundColor: '#0f172a',
        display: 'flex',
        flexDirection: 'column',
        borderLeft: '1px solid #1e293b',
      }}>
        {/* Bouton Envoyer en cuisine */}
        <div style={{
          padding: '1.5rem',
          borderBottom: '1px solid #1e293b',
        }}>
          <button
            onClick={handleSendOrder}
            disabled={loading || cart.length === 0}
            style={{
              width: '100%',
              padding: '1rem',
              backgroundColor: cart.length > 0 ? '#f97316' : '#1e293b',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '0.95rem',
              fontWeight: '600',
              cursor: cart.length > 0 ? 'pointer' : 'not-allowed',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              position: 'relative',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => {
              if (cart.length > 0) {
                e.currentTarget.style.backgroundColor = '#ea580c';
              }
            }}
            onMouseLeave={(e) => {
              if (cart.length > 0) {
                e.currentTarget.style.backgroundColor = '#f97316';
              }
            }}
          >
            <span>🛍️</span>
            <span>Envoyer en cuisine</span>
            {getTotalItems() > 0 && (
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                backgroundColor: '#ef4444',
                color: 'white',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                border: '2px solid #0f172a',
              }}>
                {getTotalItems()}
              </span>
            )}
          </button>
        </div>

        {/* Liste articles dans le panier */}
        {cart.length > 0 && (
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '1rem',
          }}>
            <div style={{
              color: 'white',
              fontSize: '0.875rem',
              fontWeight: '600',
              marginBottom: '1rem',
              paddingBottom: '0.5rem',
              borderBottom: '1px solid #334155',
            }}>
              Articles ({getTotalItems()})
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {cart.map(item => (
                <div
                  key={item.product.id}
                  style={{
                    backgroundColor: '#1e293b',
                    borderRadius: '8px',
                    padding: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                  }}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '8px',
                    backgroundColor: '#334155',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                  }}>
                    {item.product.images?.[0] ? (
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '8px',
                        }}
                      />
                    ) : (
                      (item.product.type as string) === 'DRINK' ? '🍹' : '🍽️'
                    )}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      color: 'white',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      marginBottom: '0.25rem',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}>
                      {item.product.name}
                    </div>
                    <div style={{
                      color: '#94a3b8',
                      fontSize: '0.75rem',
                    }}>
                      {item.quantity}x {(item.product.price * item.quantity).toFixed(2)} €
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: '#ef4444',
                      cursor: 'pointer',
                      fontSize: '1.25rem',
                      padding: '0.25rem',
                    }}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section Formules */}
        <div style={{
          padding: '1.5rem',
          borderTop: '1px solid #1e293b',
        }}>
          <div style={{
            color: 'white',
            fontSize: '1rem',
            fontWeight: '600',
            marginBottom: '1rem',
            textAlign: 'center',
          }}>
            • Formules •
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {formulas.map(formula => (
              <button
                key={formula.id}
                onClick={() => setSelectedFormula(formula.id === selectedFormula ? null : formula.id)}
                style={{
                  width: '100%',
                  padding: '0.875rem',
                  backgroundColor: selectedFormula === formula.id ? '#f97316' : '#1e293b',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  if (selectedFormula !== formula.id) {
                    e.currentTarget.style.backgroundColor = '#334155';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedFormula !== formula.id) {
                    e.currentTarget.style.backgroundColor = '#1e293b';
                  }
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.25rem',
                }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
                    {formula.name} ({formula.price}€)
                  </span>
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  opacity: 0.85,
                  marginTop: '0.25rem',
                }}>
                  {formula.items.join(', ')}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Total */}
        {cart.length > 0 && (
          <div style={{
            padding: '1.5rem',
            borderTop: '1px solid #1e293b',
            backgroundColor: '#1e293b',
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              color: 'white',
              fontSize: '1.25rem',
              fontWeight: 'bold',
            }}>
              <span>Total</span>
              <span style={{ color: '#f97316' }}>
                {getTotalAmount().toFixed(2)} €
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientMenu;
