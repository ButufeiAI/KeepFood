import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useClientStore } from '../stores/client.store';
import api from '../services/api';
import './Dashboard.css';

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

export function Dashboard() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { identifier } = useClientStore();
  const restaurantId = searchParams.get('restaurantId');

  const [orders, setOrders] = useState<Order[]>([]);
  const [loyalty, setLoyalty] = useState<LoyaltyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!identifier) {
      setError('Identifiant client non trouvé');
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
        setError('');
      } catch (err: any) {
        console.error('Erreur lors du chargement du tableau de bord:', err);
        setError(err.response?.data?.message || 'Erreur lors du chargement des données');
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, [identifier, restaurantId]);

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
    return (
      <div className="dashboard-container">
        <div className="loading">Chargement...</div>
      </div>
    );
  }

  if (error && !identifier) {
    return (
      <div className="dashboard-container">
        <div className="error">{error}</div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Mon Tableau de Bord</h1>
        <button onClick={() => navigate(-1)} className="back-button">
          ← Retour
        </button>
      </header>

      {error && <div className="error-message">{error}</div>}

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
                    <img
                      src={order.restaurant.logo}
                      alt={order.restaurant.name}
                      className="restaurant-logo"
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

