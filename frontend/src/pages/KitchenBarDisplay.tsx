import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useAuthStore } from '../stores/auth.store';
import { websocketService } from '../services/websocket.service';

interface OrderItem {
  id: string;
  productName: string;
  productImage?: string;
  quantity: number;
  notes?: string;
  itemStatus: 'PENDING' | 'IN_PREPARATION' | 'READY' | 'CANCELLED';
  productType: 'FOOD' | 'DRINK';
}

interface Order {
  id: string;
  tableName: string;
  orderNumber: string;
  createdAt: string;
  items: OrderItem[];
  totalItems: number;
}

type ViewMode = 'KITCHEN' | 'BAR';

const KitchenBarDisplay: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { user, token } = useAuthStore();
  
  const [orders, setOrders] = useState<Order[]>([]);
  const [viewMode, setViewMode] = useState<ViewMode>(
    (searchParams.get('mode')?.toUpperCase() as ViewMode) || 'KITCHEN'
  );
  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5201/api';

  useEffect(() => {
    if (!user || !token || !user.restaurantId) {
      return;
    }

    // Connexion WebSocket
    const socket = websocketService.connect(token);
    
    if (socket) {
      // Rejoindre la room du restaurant
      websocketService.joinRoom(`restaurant-${user.restaurantId}`);
      
      // Écouter les nouvelles commandes
      const handleNewOrder = (data: any) => {
        console.log('Nouvelle commande reçue:', data);
        fetchOrders();
      };
      
      // Écouter les mises à jour de commandes
      const handleOrderUpdate = (data: any) => {
        console.log('Mise à jour commande:', data);
        fetchOrders();
      };
      
      websocketService.on('newOrder', handleNewOrder);
      websocketService.on('orderUpdate', handleOrderUpdate);
      
      // Charger les commandes initiales
      fetchOrders();
      
      // Fallback: rafraîchir toutes les 30 secondes en cas de problème WebSocket
      const interval = setInterval(() => {
        if (!websocketService.isConnected()) {
          console.warn('WebSocket déconnecté, reconnexion...');
          websocketService.reconnect();
        }
        fetchOrders();
      }, 30000);
      
      return () => {
        clearInterval(interval);
        websocketService.off('newOrder', handleNewOrder);
        websocketService.off('orderUpdate', handleOrderUpdate);
        websocketService.leaveRoom(`restaurant-${user.restaurantId}`);
      };
    } else {
      // Fallback si WebSocket ne peut pas se connecter
      fetchOrders();
      const interval = setInterval(fetchOrders, 5000);
      return () => clearInterval(interval);
    }
  }, [user, token, viewMode]);

  const fetchOrders = async () => {
    if (!user?.restaurantId) return;
    
    try {
      const endpoint = viewMode === 'KITCHEN' 
        ? `${API_URL}/kitchen/orders?restaurantId=${user.restaurantId}`
        : `${API_URL}/kitchen/bar/orders?restaurantId=${user.restaurantId}`;
        
      const response = await axios.get(endpoint, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      setOrders(response.data);
    } catch (error) {
      console.error('Erreur chargement commandes:', error);
    }
  };

  const updateItemStatus = async (itemId: string, status: string) => {
    setLoading(true);
    try {
      await axios.patch(
        `${API_URL}/kitchen/items/${itemId}/status`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchOrders();
    } catch (error) {
      console.error('Erreur mise à jour statut:', error);
      alert('Erreur lors de la mise à jour du statut');
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PENDING':
        return 'warning';
      case 'IN_PREPARATION':
        return 'primary';
      case 'READY':
        return 'success';
      default:
        return 'secondary';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'PENDING':
        return 'En attente';
      case 'IN_PREPARATION':
        return 'En préparation';
      case 'READY':
        return 'Prêt';
      default:
        return status;
    }
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 1) return "À l'instant";
    if (diffMins < 60) return `Il y a ${diffMins} min`;
    
    return date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  };

  const headerStyle: React.CSSProperties = {
    background: viewMode === 'KITCHEN' 
      ? 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)'
      : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  };

  const cardStyle: React.CSSProperties = {
    background: viewMode === 'KITCHEN'
      ? 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)'
      : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    borderRadius: '10px',
    marginBottom: '20px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', padding: '20px' }}>
      {/* Header */}
      <div style={headerStyle}>
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
          <div className="d-flex align-items-center gap-3">
            <button
              onClick={() => navigate('/dashboard')}
              className="btn btn-light"
              style={{ borderRadius: '8px' }}
            >
              <i className="icon-arrow-left me-2"></i> Retour
            </button>
            <div>
              <h1 className="mb-0" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
                {viewMode === 'KITCHEN' ? '🍳 CUISINE' : '🍸 BAR'}
              </h1>
              <p className="mb-0" style={{ fontSize: '1.1rem', opacity: 0.9 }}>
                {orders.length} commande{orders.length > 1 ? 's' : ''} active{orders.length > 1 ? 's' : ''}
              </p>
            </div>
          </div>

          {/* Switch Kitchen/Bar */}
          <div className="d-flex gap-2">
            <button
              onClick={() => setViewMode('KITCHEN')}
              className={`btn ${viewMode === 'KITCHEN' ? 'btn-warning' : 'btn-outline-light'}`}
              style={{ 
                fontSize: '1.1rem', 
                fontWeight: 'bold',
                padding: '10px 20px',
                borderRadius: '10px'
              }}
            >
              🍳 Cuisine
            </button>
            <button
              onClick={() => setViewMode('BAR')}
              className={`btn ${viewMode === 'BAR' ? 'btn-info' : 'btn-outline-light'}`}
              style={{ 
                fontSize: '1.1rem', 
                fontWeight: 'bold',
                padding: '10px 20px',
                borderRadius: '10px'
              }}
            >
              🍸 Bar
            </button>
          </div>

          <div className="text-end">
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
              {new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
            </div>
            <p className="mb-0" style={{ fontSize: '0.9rem', opacity: 0.9 }}>
              {new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}
            </p>
          </div>
        </div>
      </div>

      {/* Grille de commandes */}
      <div>
        {orders.length === 0 ? (
          <div className="text-center" style={{ padding: '100px 20px' }}>
            <div style={{ fontSize: '6rem', marginBottom: '20px' }}>
              {viewMode === 'KITCHEN' ? '🍳' : '🍸'}
            </div>
            <h2 className="text-muted" style={{ fontSize: '2rem', fontWeight: 'bold' }}>
              Aucune commande en cours
            </h2>
            <p className="text-muted" style={{ fontSize: '1.2rem', marginTop: '10px' }}>
              Les nouvelles commandes apparaîtront ici
            </p>
          </div>
        ) : (
          <div className="row g-4">
            {orders.map((order) => (
              <div key={order.id} className="col-xl-3 col-lg-4 col-md-6">
                <div className="card h-100" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                  {/* Header Commande */}
                  <div style={cardStyle}>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
                        #{order.orderNumber}
                      </div>
                      <span className="badge bg-white text-dark" style={{ fontSize: '0.9rem', padding: '8px 12px' }}>
                        {order.totalItems} article{order.totalItems > 1 ? 's' : ''}
                      </span>
                    </div>
                    <div className="d-flex align-items-center gap-2 mb-1" style={{ fontSize: '1.1rem', fontWeight: '600' }}>
                      🪑 {order.tableName}
                    </div>
                    <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                      ⏱️ {formatTime(order.createdAt)}
                    </div>
                  </div>

                  {/* Articles */}
                  <div className="card-body" style={{ padding: '15px' }}>
                    {order.items.map((item) => (
                      <div
                        key={item.id}
                        className="mb-3 p-3"
                        style={{ 
                          backgroundColor: '#f8f9fa', 
                          borderRadius: '10px',
                          border: '1px solid #dee2e6'
                        }}
                      >
                        <div className="d-flex gap-3">
                          {/* Image du produit */}
                          <div 
                            style={{ 
                              width: '80px', 
                              height: '80px', 
                              flexShrink: 0,
                              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                              borderRadius: '10px',
                              position: 'relative',
                              overflow: 'hidden',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            {item.productImage ? (
                              <img
                                src={item.productImage}
                                alt={item.productName}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                              />
                            ) : (
                              <div style={{ fontSize: '2rem' }}>
                                {viewMode === 'KITCHEN' ? '🍽️' : '🍹'}
                              </div>
                            )}
                            {/* Badge quantité */}
                            <div 
                              className="badge bg-white text-dark"
                              style={{ 
                                position: 'absolute', 
                                top: '5px', 
                                left: '5px',
                                width: '28px',
                                height: '28px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 'bold',
                                fontSize: '0.9rem'
                              }}
                            >
                              {item.quantity}
                            </div>
                          </div>

                          {/* Info produit */}
                          <div style={{ flex: 1 }}>
                            <h5 className="mb-1" style={{ fontWeight: 'bold', fontSize: '1rem' }}>
                              {item.productName}
                            </h5>
                            {item.notes && (
                              <p className="mb-2" style={{ fontSize: '0.85rem', color: '#ffc107' }}>
                                📝 {item.notes}
                              </p>
                            )}
                            
                            {/* Statut actuel */}
                            <span className={`badge bg-${getStatusColor(item.itemStatus)} mb-2`} style={{ fontSize: '0.75rem' }}>
                              {getStatusText(item.itemStatus)}
                            </span>

                            {/* Boutons d'action */}
                            <div className="d-flex gap-2 mt-2">
                              {item.itemStatus === 'PENDING' && (
                                <button
                                  onClick={() => updateItemStatus(item.id, 'IN_PREPARATION')}
                                  disabled={loading}
                                  className="btn btn-primary btn-sm flex-fill"
                                  style={{ fontSize: '0.85rem' }}
                                >
                                  👨‍🍳 Préparer
                                </button>
                              )}
                              {item.itemStatus === 'IN_PREPARATION' && (
                                <button
                                  onClick={() => updateItemStatus(item.id, 'READY')}
                                  disabled={loading}
                                  className="btn btn-success btn-sm flex-fill"
                                  style={{ fontSize: '0.85rem' }}
                                >
                                  ✅ Prêt
                                </button>
                              )}
                              {item.itemStatus === 'READY' && (
                                <div 
                                  className="btn btn-success btn-sm flex-fill"
                                  style={{ 
                                    fontSize: '0.85rem',
                                    animation: 'pulse 2s infinite',
                                    pointerEvents: 'none'
                                  }}
                                >
                                  🎉 Prêt à servir !
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CSS pour les animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
};

export default KitchenBarDisplay;
