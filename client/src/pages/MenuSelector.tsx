import { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { publicService, Category, Restaurant } from '../services/public.service';
import { useCartStore } from '../stores/cart.store';
import { useToast } from '../components/ToastContainer';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { useIsMobile } from '../hooks/useIsMobile';
import { useDebounce } from '../hooks/useDebounce';
import { LazyImage } from '../components/LazyImage';

type ViewMode = 'cards' | 'list' | 'steps';

export function MenuSelector() {
  const { restaurantId, tableId } = useParams<{ restaurantId: string; tableId?: string }>();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const toast = useToast();
  const isMobile = useIsMobile();
  
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [menu, setMenu] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  // const [currentStep, setCurrentStep] = useState(0); // Non utilisé
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 300);
  
  // Lire le mode depuis l'URL ou localStorage
  const initialMode = (searchParams.get('view') as ViewMode) || (localStorage.getItem('menuViewMode') as ViewMode) || 'cards';
  const [viewMode, setViewMode] = useState<ViewMode>(initialMode);
  
  const { addItem, setRestaurant: setCartRestaurant, getItemCount } = useCartStore();

  useEffect(() => {
    if (restaurantId) {
      loadData();
      setCartRestaurant(restaurantId, tableId);
    }
  }, [restaurantId, tableId]);

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
      if (menuData.length > 0) {
        setSelectedCategory(menuData[0].id);
      }
    } catch (error: any) {
      console.error('Erreur lors du chargement:', error);
      toast.error(error.response?.data?.message || 'Erreur lors du chargement du menu');
    } finally {
      setLoading(false);
    }
  };

  const handleViewModeChange = (mode: ViewMode) => {
    setViewMode(mode);
    localStorage.setItem('menuViewMode', mode);
    setSearchParams({ view: mode });
  };

  const handleAddToCart = (product: any, variant?: any) => {
    if (!restaurantId) return;

    const price = variant ? Number(product.price) + Number(variant.priceModifier) : Number(product.price);
    const cartItem = {
      productId: product.id,
      productName: product.name,
      productImage: product.images[0],
      variantId: variant?.id,
      variantName: variant?.name,
      price,
      quantity: 1,
    };

    addItem(cartItem);
    toast.success(`${product.name} ajouté au panier !`);
  };

  const getFilteredProducts = () => {
    if (!debouncedSearch.trim()) return [];
    
    const query = debouncedSearch.toLowerCase();
    const allProducts: any[] = [];
    
    menu.forEach((category) => {
      category.products.forEach((product) => {
        if (
          product.name.toLowerCase().includes(query) ||
          product.description?.toLowerCase().includes(query)
        ) {
          allProducts.push({ ...product, categoryName: category.name });
        }
      });
    });
    
    return allProducts;
  };

  const itemCount = getItemCount();

  if (loading) {
    return <LoadingSpinner fullScreen message="Chargement du menu..." />;
  }

  if (!restaurant || menu.length === 0) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Menu non disponible</h2>
      </div>
    );
  }

  const filteredProducts = getFilteredProducts();
  const currentCategory = menu.find((c) => c.id === selectedCategory);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: isMobile ? '0.5rem' : '1rem', paddingBottom: viewMode === 'steps' ? '120px' : '20px' }}>
      {/* Header avec sélecteur de vue */}
      <header
        style={{
          backgroundColor: '#fff',
          padding: isMobile ? '0.75rem' : '1rem',
          marginBottom: '1rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ flex: '1', minWidth: '200px' }}>
            <h1 style={{ margin: 0, fontSize: isMobile ? '1.25rem' : '1.5rem' }}>{restaurant.name}</h1>
            {restaurant.address && (
              <p style={{ margin: '0.25rem 0 0 0', color: '#666', fontSize: '0.9rem' }}>
                {restaurant.address}, {restaurant.city}
              </p>
            )}
          </div>

          {/* Sélecteur de vue */}
          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              backgroundColor: '#f8f9fa',
              padding: '0.25rem',
              borderRadius: '8px',
              flexWrap: isMobile ? 'wrap' : 'nowrap',
            }}
          >
            <button
              onClick={() => handleViewModeChange('cards')}
              style={{
                padding: isMobile ? '0.4rem 0.8rem' : '0.5rem 1rem',
                backgroundColor: viewMode === 'cards' ? '#007bff' : 'transparent',
                color: viewMode === 'cards' ? '#fff' : '#666',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: isMobile ? '0.85rem' : '0.9rem',
                fontWeight: viewMode === 'cards' ? 'bold' : 'normal',
                transition: 'all 0.2s',
              }}
              title="Vue Cartes"
            >
              🎴 {!isMobile && 'Cartes'}
            </button>
            <button
              onClick={() => handleViewModeChange('list')}
              style={{
                padding: isMobile ? '0.4rem 0.8rem' : '0.5rem 1rem',
                backgroundColor: viewMode === 'list' ? '#007bff' : 'transparent',
                color: viewMode === 'list' ? '#fff' : '#666',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: isMobile ? '0.85rem' : '0.9rem',
                fontWeight: viewMode === 'list' ? 'bold' : 'normal',
                transition: 'all 0.2s',
              }}
              title="Vue Liste"
            >
              📋 {!isMobile && 'Liste'}
            </button>
            <button
              onClick={() => handleViewModeChange('steps')}
              style={{
                padding: isMobile ? '0.4rem 0.8rem' : '0.5rem 1rem',
                backgroundColor: viewMode === 'steps' ? '#007bff' : 'transparent',
                color: viewMode === 'steps' ? '#fff' : '#666',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: isMobile ? '0.85rem' : '0.9rem',
                fontWeight: viewMode === 'steps' ? 'bold' : 'normal',
                transition: 'all 0.2s',
              }}
              title="Vue Étapes"
            >
              🔢 {!isMobile && 'Étapes'}
            </button>
          </div>

          <button
            onClick={() => navigate(`/cart/${restaurantId}${tableId ? `/${tableId}` : ''}`)}
            style={{
              padding: isMobile ? '0.5rem 1rem' : '0.75rem 1.5rem',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: isMobile ? '0.9rem' : '1rem',
              cursor: 'pointer',
              position: 'relative',
            }}
          >
            🛒 {!isMobile && 'Panier'} ({itemCount})
          </button>
        </div>

        {/* Barre de recherche */}
        <div style={{ marginTop: '1rem' }}>
          <input
            type="text"
            placeholder="🔍 Rechercher un produit..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#007bff')}
            onBlur={(e) => (e.target.style.borderColor = '#ddd')}
          />
        </div>
      </header>

      {/* Résultats de recherche */}
      {debouncedSearch.trim() && filteredProducts.length > 0 && (
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>
            {filteredProducts.length} résultat(s) pour "{debouncedSearch}"
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}
              >
                {product.images[0] && (
                  <LazyImage
                    src={product.images[0]}
                    alt={product.name}
                    style={{ width: '100%', height: isMobile ? '180px' : '200px', objectFit: 'cover' }}
                  />
                )}
                <div style={{ padding: '1rem' }}>
                  <span style={{ fontSize: '0.75rem', color: '#007bff', fontWeight: 'bold' }}>
                    {product.categoryName}
                  </span>
                  <h3 style={{ margin: '0.25rem 0 0.5rem 0', fontSize: '1.1rem' }}>{product.name}</h3>
                  {product.description && (
                    <p style={{ margin: '0 0 1rem 0', color: '#666', fontSize: '0.9rem' }}>
                      {product.description}
                    </p>
                  )}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                      {Number(product.price).toFixed(2)} €
                    </span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      style={{
                        padding: '0.5rem 1rem',
                        backgroundColor: '#28a745',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                      }}
                    >
                      Ajouter
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {debouncedSearch.trim() && filteredProducts.length === 0 && (
        <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: '#fff', borderRadius: '8px' }}>
          <p style={{ fontSize: '1.1rem', color: '#666' }}>
            Aucun résultat pour "{debouncedSearch}"
          </p>
        </div>
      )}

      {/* Affichage selon le mode sélectionné */}
      {!debouncedSearch.trim() && (
        <>
          {viewMode === 'cards' && (
            <>
              {/* Categories */}
              <div
                style={{
                  display: 'flex',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                  overflowX: 'auto',
                  padding: '0.5rem 0',
                }}
              >
                {menu.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    style={{
                      padding: '0.75rem 1.5rem',
                      backgroundColor: selectedCategory === category.id ? '#007bff' : '#fff',
                      color: selectedCategory === category.id ? '#fff' : '#333',
                      border: '1px solid #ddd',
                      borderRadius: '24px',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      fontSize: '0.9rem',
                      fontWeight: selectedCategory === category.id ? 'bold' : 'normal',
                    }}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Products in Cards */}
              {currentCategory && (
                <div>
                  <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>{currentCategory.name}</h2>
                  {currentCategory.description && (
                    <p style={{ marginBottom: '1rem', color: '#666' }}>{currentCategory.description}</p>
                  )}

                  <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(280px, 1fr))', gap: isMobile ? '0.75rem' : '1rem' }}>
                    {currentCategory.products.map((product) => (
                      <div
                        key={product.id}
                        style={{
                          backgroundColor: '#fff',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        }}
                      >
                        {product.images[0] && (
                          <LazyImage
                            src={product.images[0]}
                            alt={product.name}
                            style={{ width: '100%', height: isMobile ? '180px' : '200px', objectFit: 'cover' }}
                          />
                        )}
                        <div style={{ padding: '1rem' }}>
                          <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>{product.name}</h3>
                          {product.description && (
                            <p style={{ margin: '0 0 1rem 0', color: '#666', fontSize: '0.9rem' }}>
                              {product.description}
                            </p>
                          )}
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                              {Number(product.price).toFixed(2)} €
                            </span>
                            <button
                              onClick={() => handleAddToCart(product)}
                              style={{
                                padding: '0.5rem 1rem',
                                backgroundColor: '#28a745',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '0.9rem',
                              }}
                            >
                              Ajouter
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {viewMode === 'list' && (
            <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: isMobile ? '1rem' : '1.5rem' }}>
              {menu.map((category) => (
                <div key={category.id} style={{ marginBottom: '2rem' }}>
                  <h2 style={{ marginBottom: '1rem', borderBottom: '2px solid #007bff', paddingBottom: '0.5rem' }}>
                    {category.name}
                  </h2>
                  {category.products.map((product) => (
                    <div
                      key={product.id}
                      style={{
                        display: 'flex',
                        gap: '1rem',
                        padding: '1rem',
                        borderBottom: '1px solid #eee',
                        alignItems: 'center',
                        flexWrap: isMobile ? 'wrap' : 'nowrap',
                      }}
                    >
                      {product.images[0] && (
                        <LazyImage
                          src={product.images[0]}
                          alt={product.name}
                          style={{
                            width: isMobile ? '100%' : '100px',
                            height: isMobile ? '150px' : '100px',
                            objectFit: 'cover',
                            borderRadius: '8px',
                            flexShrink: 0,
                          }}
                        />
                      )}
                      <div style={{ flex: 1, minWidth: isMobile ? '100%' : '200px' }}>
                        <h3 style={{ margin: '0 0 0.5rem 0' }}>{product.name}</h3>
                        {product.description && (
                          <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>{product.description}</p>
                        )}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
                        <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                          {Number(product.price).toFixed(2)} €
                        </span>
                        <button
                          onClick={() => handleAddToCart(product)}
                          style={{
                            padding: '0.5rem 1rem',
                            backgroundColor: '#28a745',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

          {viewMode === 'steps' && (
            <div>
              <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
                Naviguez étape par étape à travers notre menu
              </p>
              {/* La vue étapes sera similaire à StepByStepOrder.tsx - simplifié pour l'exemple */}
              <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <p>Vue étape par étape disponible prochainement...</p>
                <button
                  onClick={() => navigate(`/menu-step-by-step/${restaurantId}${tableId ? `/${tableId}` : ''}`)}
                  style={{
                    marginTop: '1rem',
                    padding: '0.75rem 2rem',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                  }}
                >
                  Accéder à la vue complète étape par étape →
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

