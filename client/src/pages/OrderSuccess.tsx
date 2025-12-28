import { useParams, useSearchParams, useNavigate } from 'react-router-dom';

export function OrderSuccess() {
  const { orderId } = useParams<{ orderId: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const restaurantId = searchParams.get('restaurantId');
  const tableId = searchParams.get('tableId');

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem', textAlign: 'center' }}>
      <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '3rem' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
        <h1 style={{ marginBottom: '1rem', color: '#28a745' }}>Commande confirmée !</h1>
        <p style={{ marginBottom: '2rem', color: '#666', fontSize: '1.1rem' }}>
          Votre commande a été envoyée avec succès. Elle sera préparée et servie sous peu.
        </p>
        {orderId && (
          <p style={{ marginBottom: '2rem', fontSize: '0.9rem', color: '#999' }}>
            Numéro de commande: {orderId.slice(0, 8).toUpperCase()}
          </p>
        )}
        <button
          onClick={() => navigate(`/menu/${restaurantId}${tableId ? `/${tableId}` : ''}`)}
          style={{
            padding: '0.75rem 2rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Commander à nouveau
        </button>
      </div>
    </div>
  );
}

