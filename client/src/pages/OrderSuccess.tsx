import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { useOrderTracking, OrderStatus } from '../hooks';
import { useEffect } from 'react';
import { useToast } from '../components';

export function OrderSuccess() {
  const { orderId } = useParams<{ orderId: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const toast = useToast();
  const restaurantId = searchParams.get('restaurantId');
  const tableId = searchParams.get('tableId');

  // Suivi en temps réel de la commande
  const { status, lastUpdate, isConnected } = useOrderTracking(orderId || null);

  // Afficher des notifications lors des changements de statut
  useEffect(() => {
    if (lastUpdate && lastUpdate.message) {
      const statusMessages: Record<OrderStatus, { icon: string; type: 'info' | 'success' | 'warning' }> = {
        PENDING: { icon: '⏳', type: 'info' },
        IN_PREPARATION: { icon: '👨‍🍳', type: 'info' },
        READY: { icon: '✅', type: 'success' },
        COMPLETED: { icon: '🎉', type: 'success' },
        PAID: { icon: '💳', type: 'success' },
        CANCELLED: { icon: '❌', type: 'warning' },
      };

      const statusInfo = statusMessages[lastUpdate.status];
      if (statusInfo) {
        toast.info(`${statusInfo.icon} ${lastUpdate.message || getStatusLabel(lastUpdate.status)}`);
      }
    }
  }, [lastUpdate]);

  const getStatusLabel = (status: string) => {
    const labels: Record<string, string> = {
      PENDING: 'En attente',
      IN_PREPARATION: 'En préparation',
      READY: 'Prête à être servie',
      COMPLETED: 'Terminée',
      PAID: 'Payée',
      CANCELLED: 'Annulée',
    };
    return labels[status] || status;
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      PENDING: '#6b7280',
      IN_PREPARATION: '#f59e0b',
      READY: '#10b981',
      COMPLETED: '#3b82f6',
      PAID: '#8b5cf6',
      CANCELLED: '#ef4444',
    };
    return colors[status] || '#6b7280';
  };

  const getStatusIcon = (status: string) => {
    const icons: Record<string, string> = {
      PENDING: '⏳',
      IN_PREPARATION: '👨‍🍳',
      READY: '✅',
      COMPLETED: '🎉',
      PAID: '💳',
      CANCELLED: '❌',
    };
    return icons[status] || '📋';
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <div style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '3rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem', textAlign: 'center' }}>✅</div>
        <h1 style={{ marginBottom: '1rem', color: '#28a745', textAlign: 'center', fontSize: '2rem' }}>
          Commande confirmée !
        </h1>
        <p style={{ marginBottom: '2rem', color: '#666', fontSize: '1.1rem', textAlign: 'center', lineHeight: '1.6' }}>
          Votre commande a été envoyée avec succès. Elle sera préparée et servie sous peu.
        </p>
        
        {orderId && (
          <div style={{ 
            marginBottom: '2rem', 
            padding: '1rem', 
            backgroundColor: '#f8f9fa', 
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.85rem', color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Numéro de commande
            </p>
            <p style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold', color: '#333', fontFamily: 'monospace' }}>
              {orderId.slice(0, 8).toUpperCase()}
            </p>
          </div>
        )}

        {/* Statut en temps réel */}
        <div style={{ 
          marginBottom: '2rem', 
          padding: '1.5rem', 
          backgroundColor: '#f0f9ff', 
          borderRadius: '12px',
          border: '2px solid #bfdbfe'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#1e40af' }}>
              Statut de la commande
            </h3>
            {isConnected ? (
              <span style={{ fontSize: '0.75rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <span style={{ width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '50%', animation: 'pulse 2s infinite' }}></span>
                En direct
              </span>
            ) : (
              <span style={{ fontSize: '0.75rem', color: '#ef4444' }}>
                Hors ligne
              </span>
            )}
          </div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem',
            padding: '1rem',
            backgroundColor: 'white',
            borderRadius: '8px',
            marginTop: '0.5rem'
          }}>
            <span style={{ fontSize: '2.5rem' }}>{getStatusIcon(status)}</span>
            <div style={{ flex: 1 }}>
              <p style={{ margin: '0 0 0.25rem 0', fontSize: '1.25rem', fontWeight: 'bold', color: getStatusColor(status) }}>
                {getStatusLabel(status)}
              </p>
              {lastUpdate && lastUpdate.message && (
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>
                  {lastUpdate.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <button
            onClick={() => navigate(`/menu/${restaurantId}${tableId ? `/${tableId}` : ''}`)}
            style={{
              padding: '0.75rem 2rem',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s',
              width: '100%',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0056b3';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#007bff';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Commander à nouveau
          </button>
          <button
            onClick={() => navigate('/')}
            style={{
              padding: '0.75rem 2rem',
              backgroundColor: '#f8f9fa',
              color: '#333',
              border: '1px solid #dee2e6',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s',
              width: '100%',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e9ecef';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f8f9fa';
            }}
          >
            Retour à l'accueil
          </button>
        </div>
      </div>

      {/* Animation pulse pour l'indicateur en direct */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}

