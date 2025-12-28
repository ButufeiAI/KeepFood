import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { publicService, Category, Restaurant, Product } from '../services/public.service';
import { useCartStore } from '../stores/cart.store';

// Hook pour détecter la taille d'écran
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return isMobile;
};

export function MenuCard() {
  const { restaurantId, tableId } = useParams<{ restaurantId: string; tableId?: string }>();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [menu, setMenu] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const { addItem, setRestaurant: setCartRestaurant, getItemCount } = useCartStore();

  useEffect(() => {
    if (restaurantId) {
      loadData();
      setCartRestaurant(restaurantId, tableId);
    }
  }, [restaurantId, tableId]);

  useEffect(() => {
    // Sélectionner la première catégorie par défaut
    if (menu.length > 0 && !selectedCategory) {
      const firstCategory = menu.find(cat => cat.products && cat.products.length > 0);
      if (firstCategory) {
        setSelectedCategory(firstCategory.id);
      }
    }
  }, [menu]);

  const loadData = async () => {
    if (!restaurantId) return;

    try {
      setLoading(true);
      const [restaurantData, menuData] = await Promise.all([
        publicService.getRestaurant(restaurantId),
        publicService.getMenu(restaurantId),
      ]);
      setRestaurant(restaurantData);
      setMenu(menuData);
    } catch (error) {
      console.error('Erreur lors du chargement:', error);
      alert('Erreur lors du chargement du menu');
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    // Scroll vers la catégorie
    const element = categoryRefs.current[categoryId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleAddToCart = (product: Product, variantId?: string) => {
    if (!restaurantId) return;
    
    // Trouver la variante si elle existe
    const variant = variantId ? product.variants?.find(v => v.id === variantId) : null;
    const price = variant 
      ? Number(product.price) + Number(variant.priceModifier || 0)
      : Number(product.price);
    
    const productImage = Array.isArray(product.images) && product.images.length > 0
      ? (typeof product.images[0] === 'string' ? product.images[0] : (product.images[0] as any)?.url)
      : undefined;
    
    addItem({
      productId: product.id,
      productName: product.name,
      productImage,
      variantId: variant?.id,
      variantName: variant?.name,
      price,
      quantity: 1,
    });
  };

  const filteredMenu = menu.filter(category => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      category.name.toLowerCase().includes(query) ||
      category.products?.some(product =>
        product.name.toLowerCase().includes(query) ||
        product.description?.toLowerCase().includes(query)
      )
    );
  });

  const getFilteredProducts = (category: Category) => {
    if (!searchQuery) return category.products || [];
    const query = searchQuery.toLowerCase();
    return (category.products || []).filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.description?.toLowerCase().includes(query)
    );
  };

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f8f9fa',
      }}>
        <div style={{
          textAlign: 'center',
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #007bff',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 1rem',
          }}></div>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>Chargement du menu...</p>
        </div>
      </div>
    );
  }

  if (!restaurant) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <p>Restaurant non trouvé</p>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
    }}>
      {/* Header avec logo et infos restaurant */}
      <div style={{
        backgroundColor: 'white',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        padding: '1.5rem',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          {restaurant.logo && (
            <img
              src={restaurant.logo}
              alt={restaurant.name}
              style={{
                height: '60px',
                objectFit: 'contain',
                borderRadius: '8px',
              }}
            />
          )}
          <div style={{ flex: 1, minWidth: '200px' }}>
            <h1 style={{
              margin: 0,
              fontSize: '1.8rem',
              fontWeight: 'bold',
              color: '#1a1a1a',
            }}>
              {restaurant.name}
            </h1>
            {restaurant.address && (
              <p style={{
                margin: '0.25rem 0 0 0',
                color: '#666',
                fontSize: '0.9rem',
              }}>
                📍 {restaurant.address}
                {restaurant.city && `, ${restaurant.city}`}
              </p>
            )}
          </div>
          <button
            onClick={() => navigate(`/cart/${restaurantId}${tableId ? `/${tableId}` : ''}`)}
            style={{
              position: 'relative',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,123,255,0.3)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0056b3';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,123,255,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#007bff';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,123,255,0.3)';
            }}
          >
            🛒 Panier
            {getItemCount() > 0 && (
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                backgroundColor: '#dc3545',
                color: 'white',
                borderRadius: '50%',
                width: '24px',
                height: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.75rem',
                fontWeight: 'bold',
              }}>
                {getItemCount()}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Barre de recherche */}
      <div style={{
        maxWidth: '1200px',
        margin: '1.5rem auto',
        padding: '0 1.5rem',
      }}>
        <div style={{
          position: 'relative',
        }}>
          <input
            type="text"
            placeholder="🔍 Rechercher un plat, une boisson..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '1rem 1rem 1rem 3rem',
              border: '2px solid #e0e0e0',
              borderRadius: '12px',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#007bff';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#e0e0e0';
            }}
          />
          <span style={{
            position: 'absolute',
            left: '1rem',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '1.2rem',
          }}>
            🔍
          </span>
        </div>
      </div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem 2rem',
        display: 'flex',
        gap: '2rem',
        alignItems: 'flex-start',
        flexDirection: isMobile ? 'column' : 'row',
      }}>
        {/* Sidebar avec catégories */}
        <div style={{
          width: isMobile ? '100%' : '250px',
          position: isMobile ? 'relative' : 'sticky',
          top: isMobile ? 'auto' : '120px',
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '1.5rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          maxHeight: isMobile ? 'none' : 'calc(100vh - 140px)',
          overflowY: isMobile ? 'visible' : 'auto',
        }}>
          <h3 style={{
            margin: '0 0 1rem 0',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: '#1a1a1a',
          }}>
            Catégories
          </h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}>
            {filteredMenu.map((category) => {
              const productCount = getFilteredProducts(category).length;
              if (productCount === 0) return null;

              const isSelected = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  style={{
                    padding: '0.75rem 1rem',
                    backgroundColor: isSelected ? '#007bff' : '#f8f9fa',
                    color: isSelected ? 'white' : '#1a1a1a',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '0.95rem',
                    fontWeight: isSelected ? '600' : '400',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = '#e9ecef';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = '#f8f9fa';
                    }
                  }}
                >
                  <span>{category.name}</span>
                  <span style={{
                    backgroundColor: isSelected ? 'rgba(255,255,255,0.2)' : '#dee2e6',
                    color: isSelected ? 'white' : '#6c757d',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                  }}>
                    {productCount}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Contenu principal - Menu */}
        <div style={{ flex: 1 }}>
          {filteredMenu.map((category) => {
            const products = getFilteredProducts(category);
            if (products.length === 0) return null;

            return (
              <div
                key={category.id}
                ref={(el) => (categoryRefs.current[category.id] = el)}
                style={{
                  marginBottom: '3rem',
                  scrollMarginTop: '120px',
                }}
              >
                {/* En-tête de catégorie */}
                <div style={{
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}>
                  {category.image && (
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      flexShrink: 0,
                    }}>
                      <img
                        src={category.image}
                        alt={category.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                  )}
                  <div>
                    <h2 style={{
                      margin: 0,
                      fontSize: '1.8rem',
                      fontWeight: 'bold',
                      color: '#1a1a1a',
                    }}>
                      {category.name}
                    </h2>
                    {category.description && (
                      <p style={{
                        margin: '0.25rem 0 0 0',
                        color: '#666',
                        fontSize: '0.95rem',
                      }}>
                        {category.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Grille de produits */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '1.5rem',
                }}>
                  {products.map((product) => {
                    const imgSrc = Array.isArray(product.images) && product.images.length > 0
                      ? (typeof product.images[0] === 'string' ? product.images[0] : (product.images[0] as any)?.url)
                      : null;
                    
                    return (
                      <div
                        key={product.id}
                        onClick={() => setSelectedProduct(product)}
                        style={{
                          backgroundColor: 'white',
                          borderRadius: '16px',
                          overflow: 'hidden',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-8px)';
                          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                        }}
                      >
                        {/* Image du produit */}
                        {imgSrc ? (
                          <div style={{
                            width: '100%',
                            height: '200px',
                            overflow: 'hidden',
                            backgroundColor: '#f8f9fa',
                          }}>
                            <img
                              src={imgSrc}
                              alt={product.name}
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'transform 0.3s ease',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.1)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                              }}
                            />
                          </div>
                        ) : (
                          <div style={{
                            width: '100%',
                            height: '200px',
                            backgroundColor: '#f8f9fa',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#999',
                            fontSize: '3rem',
                          }}>
                            🍽️
                          </div>
                        )}

                        {/* Contenu du produit */}
                        <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                          <h3 style={{
                            margin: '0 0 0.5rem 0',
                            fontSize: '1.3rem',
                            fontWeight: 'bold',
                            color: '#1a1a1a',
                          }}>
                            {product.name}
                          </h3>
                          {product.description && (
                            <p style={{
                              margin: '0 0 1rem 0',
                              color: '#666',
                              fontSize: '0.9rem',
                              lineHeight: '1.5',
                              flex: 1,
                            }}>
                              {product.description}
                            </p>
                          )}

                          {/* Prix et bouton */}
                          <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginTop: 'auto',
                          }}>
                            <span style={{
                              fontSize: '1.5rem',
                              fontWeight: 'bold',
                              color: '#007bff',
                            }}>
                              {Number(product.price).toFixed(2)} €
                            </span>
                            {product.variants && product.variants.length > 0 ? (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedProduct(product);
                                }}
                                style={{
                                  padding: '0.5rem 1rem',
                                  backgroundColor: '#28a745',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '8px',
                                  fontSize: '0.9rem',
                                  fontWeight: '600',
                                  cursor: 'pointer',
                                  transition: 'background-color 0.2s',
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = '#218838';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor = '#28a745';
                                }}
                              >
                                Options
                              </button>
                            ) : (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleAddToCart(product);
                                }}
                                style={{
                                  padding: '0.5rem 1rem',
                                  backgroundColor: '#007bff',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '8px',
                                  fontSize: '0.9rem',
                                  fontWeight: '600',
                                  cursor: 'pointer',
                                  transition: 'all 0.2s',
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = '#0056b3';
                                  e.currentTarget.style.transform = 'scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor = '#007bff';
                                  e.currentTarget.style.transform = 'scale(1)';
                                }}
                              >
                                ➕ Ajouter
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {filteredMenu.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              backgroundColor: 'white',
              borderRadius: '16px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            }}>
              <p style={{ fontSize: '1.2rem', color: '#666', margin: 0 }}>
                Aucun résultat trouvé pour "{searchQuery}"
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Modal de détails du produit */}
      {selectedProduct && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1rem',
          }}
          onClick={() => setSelectedProduct(null)}
        >
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton fermer */}
            <button
              onClick={() => setSelectedProduct(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: 'white',
                fontSize: '1.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.7)';
              }}
            >
              ✕
            </button>

            {/* Image */}
            {(() => {
              const productImage = Array.isArray(selectedProduct.images) && selectedProduct.images.length > 0
                ? (typeof selectedProduct.images[0] === 'string' ? selectedProduct.images[0] : (selectedProduct.images[0] as any)?.url)
                : null;
              
              return productImage ? (
                <div style={{
                  width: '100%',
                  height: '300px',
                  overflow: 'hidden',
                }}>
                  <img
                    src={productImage}
                    alt={selectedProduct.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              ) : null;
            })()}

            {/* Détails */}
            <div style={{ padding: '2rem' }}>
              <h2 style={{
                margin: '0 0 1rem 0',
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#1a1a1a',
              }}>
                {selectedProduct.name}
              </h2>
              {selectedProduct.description && (
                <p style={{
                  margin: '0 0 1.5rem 0',
                  color: '#666',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                }}>
                  {selectedProduct.description}
                </p>
              )}

              {/* Variantes */}
              {selectedProduct.variants && selectedProduct.variants.length > 0 ? (
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{
                    margin: '0 0 1rem 0',
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: '#1a1a1a',
                  }}>
                    Options disponibles
                  </h3>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}>
                    {selectedProduct.variants.map((variant) => (
                      <button
                        key={variant.id}
                        onClick={() => {
                          handleAddToCart(selectedProduct, variant.id);
                          setSelectedProduct(null);
                        }}
                        style={{
                          padding: '1rem',
                          backgroundColor: '#f8f9fa',
                          border: '2px solid #e0e0e0',
                          borderRadius: '12px',
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'all 0.2s',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = '#007bff';
                          e.currentTarget.style.backgroundColor = '#e7f3ff';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = '#e0e0e0';
                          e.currentTarget.style.backgroundColor = '#f8f9fa';
                        }}
                      >
                        <span style={{
                          fontWeight: '600',
                          color: '#1a1a1a',
                        }}>
                          {variant.name}
                        </span>
                        <span style={{
                          fontSize: '1.1rem',
                          fontWeight: 'bold',
                          color: '#007bff',
                        }}>
                          +{Number(variant.priceModifier || 0).toFixed(2)} €
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.5rem',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '12px',
                  marginBottom: '1.5rem',
                }}>
                  <span style={{
                    fontSize: '1.8rem',
                    fontWeight: 'bold',
                    color: '#007bff',
                  }}>
                    {Number(selectedProduct.price).toFixed(2)} €
                  </span>
                  <button
                    onClick={() => {
                      handleAddToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    style={{
                      padding: '0.75rem 2rem',
                      backgroundColor: '#007bff',
                      color: 'white',
                      border: 'none',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#0056b3';
                    }}
                  >
                    ➕ Ajouter au panier
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* CSS pour l'animation de chargement */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

