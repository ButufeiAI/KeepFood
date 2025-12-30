import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useClientStore } from '../stores/client.store';
import api from '../services/api';
import './Dashboard.css';
import { useToast } from '../components/ToastContainer';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { LazyImage } from '../components/LazyImage';
import { useIsMobile } from '../hooks/useIsMobile';

interface Order {
  id: string;
  totalAmount: number;
  status: string;
  orderType: string;
  createdAt: string;
  items: Array<{
    id: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    product: {
      id: string;
      name: string;
      images?: Array<{ url: string }>;
    };
    variant?: {
      id: string;
      name: string;
    };
  }>;
  restaurant: {
    id: string;
    name: string;
    logo?: string;
  };
  table?: {
    id: string;
    number: string;
  };
}

interface LoyaltyData {
  points: number;
  totalPointsEarned: number;
  transactions: Array<{
    id: string;
    type: string;
    points: number;
    balanceAfter: number;
    description: string;
    createdAt: string;
    orderId?: string;
  }>;
}

interface SpendingStats {
  totalSpent: number;
  averageOrderValue: number;
  monthlySpending: Array<{ month: string; amount: number }>;
  categorySpending: Array<{ category: string; amount: number; percentage: number }>;
  favoriteProducts: Array<{ name: string; orderCount: number }>;
  visitFrequency: {
    thisWeek: number;
    thisMonth: number;
    total: number;
  };
}

export function Dashboard() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const toast = useToast();
  const isMobile = useIsMobile();
  const { identifier } = useClientStore();
  const restaurantId = searchParams.get('restaurantId');

  const [orders, setOrders] = useState<Order[]>([]);
  const [loyalty, setLoyalty] = useState<LoyaltyData | null>(null);
  const [stats, setStats] = useState<SpendingStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!identifier) {
      toast.error('Identifiant client non trouvé');
      setLoading(false);
      return;
    }

    const loadDashboard = async () => {
      try {
        setLoading(true);
        const params = new URLSearchParams({
          clientIdentifier: identifier,
        });
        if (restaurantId) {
          params.append('restaurantId', restaurantId);
        }

        const response = await api.get(`/public/clients/dashboard?${params.toString()}`);
        setOrders(response.data.orders || []);
        setLoyalty(response.data.loyalty);
        
        // Calculer les statistiques
        calculateStats(response.data.orders || []);
      } catch (err: any) {
        console.error('Erreur lors du chargement du tableau de bord:', err);
        toast.error(err.response?.data?.message || 'Erreur lors du chargement des données');
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, [identifier, restaurantId, toast]);

  const calculateStats = (ordersData: Order[]) => {
    if (ordersData.length === 0) {
      setStats(null);
      return;
    }

    // Total dépensé
    const totalSpent = ordersData.reduce((sum, order) => sum + Number(order.totalAmount), 0);
    const averageOrderValue = totalSpent / ordersData.length;

    // Dépenses par mois (3 derniers mois)
    const monthlySpending: Array<{ month: string; amount: number }> = [];
    const now = new Date();
    for (let i = 2; i >= 0; i--) {
      const month = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const monthName = month.toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' });
      const monthStart = new Date(month.getFullYear(), month.getMonth(), 1);
      const monthEnd = new Date(month.getFullYear(), month.getMonth() + 1, 0);
      
      const monthOrders = ordersData.filter((order) => {
        const orderDate = new Date(order.createdAt);
        return orderDate >= monthStart && orderDate <= monthEnd;
      });
      
      const amount = monthOrders.reduce((sum, order) => sum + Number(order.totalAmount), 0);
      monthlySpending.push({ month: monthName, amount });
    }

    // Produits favoris
    const productCount: Record<string, { name: string; count: number }> = {};
    ordersData.forEach((order) => {
      order.items.forEach((item) => {
        const name = item.product.name;
        if (!productCount[name]) {
          productCount[name] = { name, count: 0 };
        }
        productCount[name].count += item.quantity;
      });
    });
    
    const favoriteProducts = Object.values(productCount)
      .sort((a, b) => b.count - a.count)
      .slice(0, 5)
      .map((p) => ({ name: p.name, orderCount: p.count }));

    // Fréquence de visite
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    
    const thisWeek = ordersData.filter((o) => new Date(o.createdAt) >= weekAgo).length;
    const thisMonth = ordersData.filter((o) => new Date(o.createdAt) >= monthAgo).length;

    setStats({
      totalSpent,
      averageOrderValue,
      monthlySpending,
      categorySpending: [],
      favoriteProducts,
      visitFrequency: {
        thisWeek,
        thisMonth,
        total: ordersData.length,
      },
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return '#10b981';
      case 'READY':
        return '#3b82f6';
      case 'IN_PREPARATION':
        return '#f59e0b';
      case 'PENDING':
        return '#6b7280';
      case 'CANCELLED':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  const getStatusLabel = (status: string) => {
    const labels: Record<string, string> = {
      PENDING: 'En attente',
      IN_PREPARATION: 'En préparation',
      READY: 'Prête',
      COMPLETED: 'Terminée',
      CANCELLED: 'Annulée',
    };
    return labels[status] || status;
  };

  if (loading) {
    return <LoadingSpinner fullscreen message="Chargement du tableau de bord..." />;
  }

  if (!identifier) {
    return (
      <div className="dashboard-container">
        <div className="error">Identifiant client non trouvé</div>
      </div>
    );
  }

  return (
    <div className="dashboard-container" style={{ padding: isMobile ? '0.5rem' : '1rem' }}>
      <header className="dashboard-header" style={{ flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '1rem' : '0', alignItems: isMobile ? 'flex-start' : 'center' }}>
        <h1 style={{ fontSize: isMobile ? '1.5rem' : '2rem' }}>Mon Tableau de Bord</h1>
        <button onClick={() => navigate(-1)} className="back-button">
          ← Retour
        </button>
      </header>

      {/* Statistiques globales */}
      {stats && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              padding: '1.5rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#007bff', marginBottom: '0.5rem' }}>
              {stats.totalSpent >= 100
                ? (stats.totalSpent / 100).toFixed(2)
                : stats.totalSpent.toFixed(2)} €
            </div>
            <div style={{ fontSize: '0.9rem', color: '#666' }}>Total dépensé</div>
          </div>

          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              padding: '1.5rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#28a745', marginBottom: '0.5rem' }}>
              {stats.averageOrderValue >= 100
                ? (stats.averageOrderValue / 100).toFixed(2)
                : stats.averageOrderValue.toFixed(2)} €
            </div>
            <div style={{ fontSize: '0.9rem', color: '#666' }}>Panier moyen</div>
          </div>

          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              padding: '1.5rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ffc107', marginBottom: '0.5rem' }}>
              {stats.visitFrequency.thisMonth}
            </div>
            <div style={{ fontSize: '0.9rem', color: '#666' }}>Visites ce mois</div>
          </div>

          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              padding: '1.5rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#dc3545', marginBottom: '0.5rem' }}>
              {stats.visitFrequency.total}
            </div>
            <div style={{ fontSize: '0.9rem', color: '#666' }}>Commandes totales</div>
          </div>
        </div>
      )}

      {/* Graphique dépenses mensuelles */}
      {stats && stats.monthlySpending.length > 0 && (
        <section
          style={{
            backgroundColor: '#fff',
            borderRadius: '12px',
            padding: isMobile ? '1rem' : '1.5rem',
            marginBottom: '2rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          <h2 style={{ marginTop: 0, marginBottom: '1.5rem' }}>Dépenses mensuelles</h2>
          <div style={{ position: 'relative', height: '250px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-around',
                height: '200px',
                borderBottom: '2px solid #ddd',
                gap: '1rem',
              }}
            >
              {stats.monthlySpending.map((item, index) => {
                const maxAmount = Math.max(...stats.monthlySpending.map((m) => m.amount));
                const heightPercentage = maxAmount > 0 ? (item.amount / maxAmount) * 100 : 0;
                
                return (
                  <div
                    key={index}
                    style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <div
                      style={{
                        width: '100%',
                        height: `${heightPercentage}%`,
                        backgroundColor: '#007bff',
                        borderRadius: '8px 8px 0 0',
                        position: 'relative',
                        transition: 'height 0.3s ease',
                        minHeight: item.amount > 0 ? '5px' : '0',
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          top: '-25px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          fontSize: '0.85rem',
                          fontWeight: 'bold',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {item.amount >= 100 ? (item.amount / 100).toFixed(0) : item.amount.toFixed(0)} €
                      </div>
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#666', textAlign: 'center' }}>
                      {item.month}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Produits préférés */}
      {stats && stats.favoriteProducts.length > 0 && (
        <section
          style={{
            backgroundColor: '#fff',
            borderRadius: '12px',
            padding: isMobile ? '1rem' : '1.5rem',
            marginBottom: '2rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          <h2 style={{ marginTop: 0, marginBottom: '1.5rem' }}>Mes produits préférés</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {stats.favoriteProducts.map((product, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#007bff',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    flexShrink: 0,
                  }}
                >
                  {index + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>{product.name}</div>
                  <div style={{ fontSize: '0.85rem', color: '#666' }}>
                    Commandé {product.orderCount} fois
                  </div>
                </div>
                <div style={{ fontSize: '1.5rem' }}>
                  {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '🍽️'}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Section Points de Fidélité */}
      {loyalty && (
        <section className="loyalty-section">
          <h2>Points de Fidélité</h2>
          <div className="loyalty-card">
            <div className="loyalty-points">
              <span className="points-value">{loyalty.points}</span>
              <span className="points-label">points disponibles</span>
            </div>
            <div className="loyalty-total">
              <span>Total gagné : {loyalty.totalPointsEarned} points</span>
            </div>
          </div>

          {loyalty.transactions && loyalty.transactions.length > 0 && (
            <div className="transactions-list">
              <h3>Historique des transactions</h3>
              {loyalty.transactions.map((transaction) => (
                <div key={transaction.id} className="transaction-item">
                  <div className="transaction-info">
                    <span className="transaction-type">
                      {transaction.type === 'EARNED' ? '➕' : '➖'} {transaction.description}
                    </span>
                    <span className="transaction-date">{formatDate(transaction.createdAt)}</span>
                  </div>
                  <div className="transaction-points">
                    {transaction.type === 'EARNED' ? '+' : '-'}
                    {transaction.points} points
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Section Commandes */}
      <section className="orders-section">
        <h2>Mes Commandes</h2>
        {orders.length === 0 ? (
          <div className="empty-state">
            <p>Aucune commande pour le moment</p>
            <button onClick={() => navigate('/')} className="primary-button">
              Passer une commande
            </button>
          </div>
        ) : (
          <div className="orders-list">
            {orders.map((order) => (
              <div key={order.id} className="order-card">
                <div className="order-header">
                  <div className="order-info">
                    <h3>Commande #{order.id.substring(0, 8)}</h3>
                    <span className="order-date">{formatDate(order.createdAt)}</span>
                  </div>
                  <div className="order-status" style={{ color: getStatusColor(order.status) }}>
                    {getStatusLabel(order.status)}
                  </div>
                </div>

                <div className="order-restaurant">
                  {order.restaurant.logo && (
                    <LazyImage
                      src={order.restaurant.logo}
                      alt={order.restaurant.name}
                      className="restaurant-logo"
                      style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                  )}
                  <span>{order.restaurant.name}</span>
                </div>

                {order.table && (
                  <div className="order-table">
                    Table {order.table.number}
                  </div>
                )}

                <div className="order-items">
                  {order.items.map((item) => (
                    <div key={item.id} className="order-item">
                      <div className="item-info">
                        <span className="item-name">
                          {item.quantity}x {item.product.name}
                        </span>
                        {item.variant && (
                          <span className="item-variant">{item.variant.name}</span>
                        )}
                      </div>
                      <span className="item-price">
                        {typeof item.totalPrice === 'number' 
                          ? (item.totalPrice >= 100 ? (item.totalPrice / 100).toFixed(2) : item.totalPrice.toFixed(2))
                          : (parseFloat(item.totalPrice) / 100).toFixed(2)} €
                      </span>
                    </div>
                  ))}
                </div>

                <div className="order-total">
                  <strong>Total : {typeof order.totalAmount === 'number' 
                    ? (order.totalAmount >= 100 ? (order.totalAmount / 100).toFixed(2) : order.totalAmount.toFixed(2))
                    : (parseFloat(order.totalAmount) / 100).toFixed(2)} €</strong>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

