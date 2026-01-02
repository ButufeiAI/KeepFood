import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { publicService, Category, Restaurant } from '../services/public.service';
import { useCartStore, CartItem } from '../stores/cart.store';
import { useToast } from '../components/ToastContainer';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { LazyImage } from '../components/LazyImage';
import { useIsMobile } from '../hooks/useIsMobile';

interface OrderStep {
  id: string;
  name: string;
  description?: string;
  categoryId: string;
  isMainCategory: boolean;
}

export function StepByStepOrder() {
  const { restaurantId, tableId } = useParams<{ restaurantId: string; tableId?: string }>();
  const navigate = useNavigate();
  const toast = useToast();
  const isMobile = useIsMobile();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [menu, setMenu] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState<OrderStep[]>([]);
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
      if (menuData && menuData.length > 0) {
        buildSteps(menuData);
      }
    } catch (error: any) {
      console.error('Erreur lors du chargement:', error);
      toast.error(error.response?.data?.message || 'Erreur lors du chargement du menu');
    } finally {
      setLoading(false);
    }
  };

  const buildSteps = (menuData: Category[]) => {
    const orderSteps: OrderStep[] = [];

    // Ordre logique des étapes (comme demandé par l'utilisateur)
    const stepOrder = [
      // Entrées/Apéritifs
      'Entrées',
      
      // Plats principaux et leurs variantes
      'Plats principaux',
      'Viandes',
      'Poissons',
      'Pâtes',
      
      // Accompagnements
      'Salades',
      'Frites',
      'Boulettes',
      'Snacks',
      'Sauces',
      
      // Fast Food
      'Burgers',
      'Pizzas',
      'Tacos',
      'Paninis',
      'Kebab',
      
      // Boissons
      'Boissons chaudes',
      'Boissons froides',
      'Bières',
      'Vins',
      'Cocktails',
      
      // Desserts
      'Glaces',
      'Gâteaux',
      'Crêpes',
      'Fruits',
    ];

    // Créer les étapes pour les catégories dans l'ordre défini
    stepOrder.forEach((stepName) => {
      const category = menuData.find((c) => c.name === stepName && c.products && c.products.length > 0);
      if (category) {
        orderSteps.push({
          id: category.id,
          name: category.name,
          description: category.description,
          categoryId: category.id,
          isMainCategory: false,
        });
      }
    });

    // Ajouter les autres catégories qui n'ont pas été ajoutées (catégories principales)
    menuData.forEach((category) => {
      if (!orderSteps.find((s) => s.categoryId === category.id) && category.products && category.products.length > 0) {
        // Vérifier si c'est une catégorie principale (pas une sous-catégorie)
        // En supposant que les catégories principales n'ont pas de préfixe spécial
        orderSteps.push({
          id: category.id,
          name: category.name,
          description: category.description,
          categoryId: category.id,
          isMainCategory: true,
        });
      }
    });

    setSteps(orderSteps);
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

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const itemCount = getItemCount();
  const currentCategory = steps[currentStep] ? menu.find((c) => c.id === steps[currentStep]?.categoryId) : null;

  if (loading) {
    return <LoadingSpinner fullScreen message="Chargement du menu..." />;
  }

  if (!restaurant || menu.length === 0 || steps.length === 0) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Menu non disponible</h2>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: isMobile ? '0.5rem' : '1rem', paddingBottom: isMobile ? '120px' : '100px' }}>
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '1.5rem' }}>{restaurant.name}</h1>
            {restaurant.address && (
              <p style={{ margin: '0.25rem 0 0 0', color: '#666', fontSize: '0.9rem' }}>
                {restaurant.address}, {restaurant.city}
              </p>
            )}
          </div>
          <button
            onClick={() => navigate(`/cart/${restaurantId}${tableId ? `/${tableId}` : ''}`)}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              cursor: 'pointer',
              position: 'relative',
            }}
          >
            🛒 Panier ({itemCount})
          </button>
        </div>

        {/* Progress Bar */}
        <div style={{ marginBottom: '0.5rem' }}>
          <div
            style={{
              width: '100%',
              height: '8px',
              backgroundColor: '#e9ecef',
              borderRadius: '4px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${((currentStep + 1) / steps.length) * 100}%`,
                height: '100%',
                backgroundColor: '#28a745',
                transition: 'width 0.3s ease',
              }}
            />
          </div>
          <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.85rem', color: '#666', textAlign: 'center' }}>
            Étape {currentStep + 1} sur {steps.length}
          </p>
        </div>

        {/* Step Indicators (mobile view - horizontal scroll) */}
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            overflowX: 'auto',
            padding: '0.5rem 0',
            scrollbarWidth: 'thin',
          }}
        >
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => goToStep(index)}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: index === currentStep ? '#007bff' : index < currentStep ? '#28a745' : '#f8f9fa',
                color: index === currentStep || index < currentStep ? '#fff' : '#666',
                border: '1px solid',
                borderColor: index === currentStep ? '#007bff' : '#dee2e6',
                borderRadius: '20px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                fontSize: '0.85rem',
                fontWeight: index === currentStep ? 'bold' : 'normal',
                transition: 'all 0.2s',
              }}
            >
              {index < currentStep ? '✓ ' : ''}
              {step.name}
            </button>
          ))}
        </div>
      </header>

      {/* Current Step Content */}
      {currentCategory && (
        <div>
          <div
            style={{
              backgroundColor: '#fff',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              marginBottom: '2rem',
            }}
          >
            <h2 style={{ margin: '0 0 0.5rem 0', fontSize: '2rem', color: '#333' }}>{currentCategory.name}</h2>
            {currentCategory.description && (
              <p style={{ margin: '0 0 2rem 0', color: '#666', fontSize: '1rem' }}>{currentCategory.description}</p>
            )}

            {currentCategory.products.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '3rem', color: '#999' }}>
                <p>Aucun produit disponible dans cette catégorie</p>
                <button
                  onClick={nextStep}
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
                  Passer cette étape →
                </button>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(280px, 1fr))', gap: isMobile ? '1rem' : '1.5rem' }}>
                {currentCategory.products.map((product) => (
                  <div
                    key={product.id}
                    style={{
                      backgroundColor: '#f8f9fa',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                      }
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
                    <div style={{ padding: '1.5rem' }}>
                      <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', fontWeight: 'bold' }}>{product.name}</h3>
                      {product.description && (
                        <p style={{ margin: '0 0 1rem 0', color: '#666', fontSize: '0.9rem', lineHeight: '1.5' }}>
                          {product.description}
                        </p>
                      )}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#007bff' }}>
                          {Number(product.price).toFixed(2)} €
                        </span>
                      </div>
                      {product.variants && product.variants.length > 0 ? (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          {product.variants.map((variant) => (
                            <button
                              key={variant.id}
                              onClick={() => handleAddToCart(product, variant)}
                              style={{
                                padding: '0.75rem 1rem',
                                backgroundColor: '#28a745',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontSize: '0.95rem',
                                fontWeight: '600',
                                transition: 'background-color 0.2s',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#218838';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#28a745';
                              }}
                            >
                              {variant.name} (+{Number(variant.priceModifier).toFixed(2)} €)
                            </button>
                          ))}
                        </div>
                      ) : (
                        <button
                          onClick={() => handleAddToCart(product)}
                          style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            backgroundColor: '#28a745',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '1rem',
                            fontWeight: '600',
                            transition: 'background-color 0.2s',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#218838';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#28a745';
                          }}
                        >
                          ➕ Ajouter au panier
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '1rem',
              position: 'fixed',
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: '#fff',
              padding: '1rem',
              boxShadow: '0 -2px 8px rgba(0,0,0,0.1)',
              zIndex: 100,
            }}
          >
            <button
              onClick={previousStep}
              disabled={currentStep === 0}
              style={{
                padding: '0.75rem 2rem',
                backgroundColor: currentStep === 0 ? '#6c757d' : '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: currentStep === 0 ? 'not-allowed' : 'pointer',
                opacity: currentStep === 0 ? 0.5 : 1,
              }}
            >
              ← Précédent
            </button>

            <button
              onClick={() => navigate(`/cart/${restaurantId}${tableId ? `/${tableId}` : ''}`)}
              style={{
                padding: '0.75rem 2rem',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              🛒 Voir le panier ({itemCount})
            </button>

            {currentStep < steps.length - 1 ? (
              <button
                onClick={nextStep}
                style={{
                  padding: '0.75rem 2rem',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                }}
              >
                Suivant →
              </button>
            ) : (
              <button
                onClick={() => navigate(`/cart/${restaurantId}${tableId ? `/${tableId}` : ''}`)}
                style={{
                  padding: '0.75rem 2rem',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                }}
              >
                Terminer la commande →
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

