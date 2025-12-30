import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { publicService, Restaurant } from '../services/public.service';
import { useAuthStore } from '../stores/auth.store';

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

export function Home() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();
  const isMobile = useIsMobile();
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadRestaurants();
  }, []);

  const loadRestaurants = async () => {
    try {
      setLoading(true);
      const data = await publicService.getAllRestaurants();
      setRestaurants(data);
    } catch (error) {
      console.error('Erreur lors du chargement des restaurants:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    restaurant.city?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    restaurant.address?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOrderOnline = (restaurantId: string) => {
    navigate(`/menu/${restaurantId}`);
  };

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f9fa',
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '60px',
            height: '60px',
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #007bff',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 1rem',
          }}></div>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>Chargement des restaurants...</p>
        </div>
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: 'white',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        padding: '1.5rem 2rem',
        position: 'sticky',
        top: 0,
        zIndex: 100,
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
          <h1 style={{
            margin: 0,
            fontSize: '1.8rem',
            fontWeight: 'bold',
            color: '#1a1a1a',
          }}>
            🍽️ KeepFood
          </h1>
          <div style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
          }}>
            {isAuthenticated ? (
              <>
                <button
                  onClick={() => navigate('/dashboard')}
                  style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#f8f9fa',
                    color: '#333',
                    border: '1px solid #dee2e6',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                  }}
                >
                  Mon tableau de bord
                </button>
              </>
            ) : (
              <button
                onClick={() => navigate('/login')}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                }}
              >
                Se connecter
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div style={{
        backgroundColor: 'white',
        padding: '3rem 2rem',
        textAlign: 'center',
        borderBottom: '1px solid #e9ecef',
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#1a1a1a',
            marginBottom: '1rem',
          }}>
            Commandez en ligne
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            marginBottom: '2rem',
          }}>
            Découvrez nos restaurants partenaires et commandez facilement
          </p>
          
          {/* Barre de recherche */}
          <div style={{
            position: 'relative',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            <input
              type="text"
              placeholder="🔍 Rechercher un restaurant, une ville..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '1rem 1rem 1rem 3rem',
                border: '2px solid #e0e0e0',
                borderRadius: '12px',
                fontSize: '1rem',
                outline: 'none',
              }}
            />
          </div>
        </div>
      </div>

      {/* Liste des restaurants */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3rem 2rem',
      }}>
        {filteredRestaurants.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            backgroundColor: 'white',
            borderRadius: '16px',
          }}>
            <p style={{
              fontSize: '1.2rem',
              color: '#666',
              marginBottom: '1rem',
            }}>
              {searchQuery ? 'Aucun restaurant trouvé' : 'Aucun restaurant disponible pour le moment'}
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  cursor: 'pointer',
                }}
              >
                Réinitialiser la recherche
              </button>
            )}
          </div>
        ) : (
          <>
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.5rem',
            }}>
              {filteredRestaurants.map((restaurant) => (
                <div
                  key={restaurant.id}
                  onClick={() => handleOrderOnline(restaurant.id)}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
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
                  {restaurant.logo && (
                    <div style={{
                      width: '100%',
                      height: '200px',
                      backgroundColor: '#f8f9fa',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                    }}>
                      <img
                        src={restaurant.logo}
                        alt={restaurant.name}
                        style={{
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                        }}
                      />
                    </div>
                  )}
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      color: '#1a1a1a',
                      marginBottom: '0.5rem',
                    }}>
                      {restaurant.name}
                    </h3>
                    {restaurant.description && (
                      <p style={{
                        fontSize: '0.95rem',
                        color: '#666',
                        marginBottom: '1rem',
                        lineHeight: '1.5',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}>
                        {restaurant.description}
                      </p>
                    )}
                    {(restaurant.address || restaurant.city) && (
                      <p style={{
                        fontSize: '0.9rem',
                        color: '#888',
                        marginBottom: '0.5rem',
                      }}>
                        📍 {[restaurant.address, restaurant.city, restaurant.zipCode].filter(Boolean).join(', ')}
                      </p>
                    )}
                    {restaurant.phone && (
                      <p style={{
                        fontSize: '0.9rem',
                        color: '#888',
                        marginBottom: '1rem',
                      }}>
                        📞 {restaurant.phone}
                      </p>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOrderOnline(restaurant.id);
                      }}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        marginTop: '1rem',
                      }}
                    >
                      Voir le menu et commander
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Info QR Code */}
      <div style={{
        backgroundColor: 'white',
        padding: '3rem 2rem',
        textAlign: 'center',
        borderTop: '1px solid #e9ecef',
        marginTop: '3rem',
      }}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#1a1a1a',
            marginBottom: '1rem',
          }}>
            Sur place ?
          </h3>
          <p style={{
            fontSize: '1rem',
            color: '#666',
            lineHeight: '1.6',
          }}>
            Scannez le QR code sur votre table pour voir le menu et passer commande directement depuis votre smartphone.
          </p>
        </div>
      </div>
    </div>
  );
}

