import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { publicService, Category, Restaurant } from '../services/public.service';
import { useCartStore, CartItem } from '../stores/cart.store';
import { useToast } from '../components/ToastContainer';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { LazyImage } from '../components/LazyImage';
import { useIsMobile } from '../hooks/useIsMobile';

export function Menu() {
  const { restaurantId, tableId } = useParams<{ restaurantId: string; tableId?: string }>();
  const navigate = useNavigate();
  const toast = useToast();
  const isMobile = useIsMobile();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [menu, setMenu] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
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

  const handleAddToCart = (product: Category['products'][0], variant?: Category['products'][0]['variants'][0]) => {
    if (!restaurantId) return;

    const price = variant ? Number(product.price) + Number(variant.priceModifier) : Number(product.price);
    const cartItem: CartItem = {
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

  const itemCount = getItemCount();

  if (loading) {
    return <LoadingSpinner fullscreen message="Chargement du menu..." />;
  }

  if (!restaurant || menu.length === 0) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Menu non disponible</h2>
      </div>
    );
  }

  const currentCategory = menu.find((c) => c.id === selectedCategory);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: isMobile ? '0.5rem' : '1rem' }}>
      {/* Header */}
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: isMobile ? 'wrap' : 'nowrap', gap: isMobile ? '0.5rem' : '0' }}>
          <div style={{ flex: isMobile ? '1 1 100%' : 'auto' }}>
            <h1 style={{ margin: 0, fontSize: isMobile ? '1.25rem' : '1.5rem' }}>{restaurant.name}</h1>
            {restaurant.address && (
              <p style={{ margin: '0.25rem 0 0 0', color: '#666', fontSize: '0.9rem' }}>
                {restaurant.address}, {restaurant.city}
              </p>
            )}
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
              flex: isMobile ? '0 0 auto' : 'auto',
            }}
          >
            🛒 {isMobile ? '' : 'Panier'}
            {itemCount > 0 && (
              <span
                style={{
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
                }}
              >
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </header>

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

      {/* Products */}
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
                    style={{
                      width: '100%',
                      height: isMobile ? '180px' : '200px',
                      objectFit: 'cover',
                    }}
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
                    {product.variants && product.variants.length > 0 ? (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {product.variants.map((variant) => (
                          <button
                            key={variant.id}
                            onClick={() => handleAddToCart(product, variant)}
                            style={{
                              padding: '0.5rem 1rem',
                              backgroundColor: '#28a745',
                              color: 'white',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              fontSize: '0.9rem',
                              textAlign: 'left',
                            }}
                          >
                            {variant.name} (+{(Number(variant.priceModifier)).toFixed(2)} €)
                          </button>
                        ))}
                      </div>
                    ) : (
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
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

