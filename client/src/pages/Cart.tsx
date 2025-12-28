import { useNavigate, useParams } from 'react-router-dom';
import { useCartStore } from '../stores/cart.store';
import { publicService } from '../services/public.service';
import { useState } from 'react';

export function Cart() {
  const { restaurantId, tableId } = useParams<{ restaurantId: string; tableId?: string }>();
  const navigate = useNavigate();
  const { items, removeItem, updateQuantity, getTotal, clear, restaurantId: cartRestaurantId, tableId: cartTableId } = useCartStore();
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState('');

  const total = getTotal();

  const handleCheckout = async () => {
    if (items.length === 0) {
      alert('Votre panier est vide');
      return;
    }

    if (!cartRestaurantId) {
      alert('Erreur: restaurant non défini');
      return;
    }

    try {
      setLoading(true);
      const order = await publicService.createOrder({
        restaurantId: cartRestaurantId,
        tableId: tableId || cartTableId,
        items: items.map((item) => ({
          productId: item.productId,
          variantId: item.variantId,
          quantity: item.quantity,
          notes: item.notes,
        })),
        notes: notes || undefined,
      });

      clear();
      navigate(`/order/${order.id}?restaurantId=${cartRestaurantId}&tableId=${tableId || cartTableId || ''}`);
    } catch (error: any) {
      console.error('Erreur lors de la commande:', error);
      alert(error.response?.data?.message || 'Erreur lors de la création de la commande');
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <h1 style={{ marginBottom: '1rem' }}>Panier</h1>
        <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: '#fff', borderRadius: '8px' }}>
          <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '1rem' }}>Votre panier est vide</p>
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
            Voir le menu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
      <h1 style={{ marginBottom: '1rem' }}>Panier</h1>

      <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '1.5rem', marginBottom: '1rem' }}>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              gap: '1rem',
              padding: '1rem 0',
              borderBottom: index < items.length - 1 ? '1px solid #eee' : 'none',
            }}
          >
            {item.productImage && (
              <img
                src={item.productImage}
                alt={item.productName}
                style={{
                  width: '80px',
                  height: '80px',
                  objectFit: 'cover',
                  borderRadius: '4px',
                }}
              />
            )}
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: '0 0 0.25rem 0' }}>{item.productName}</h3>
              {item.variantName && <p style={{ margin: '0 0 0.5rem 0', color: '#666', fontSize: '0.9rem' }}>{item.variantName}</p>}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <button
                    onClick={() => updateQuantity(item.productId, item.variantId, item.quantity - 1)}
                    style={{
                      width: '32px',
                      height: '32px',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      backgroundColor: '#fff',
                      cursor: 'pointer',
                      fontSize: '1.2rem',
                    }}
                  >
                    -
                  </button>
                  <span style={{ minWidth: '40px', textAlign: 'center' }}>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.productId, item.variantId, item.quantity + 1)}
                    style={{
                      width: '32px',
                      height: '32px',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      backgroundColor: '#fff',
                      cursor: 'pointer',
                      fontSize: '1.2rem',
                    }}
                  >
                    +
                  </button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                    {(item.price * item.quantity).toFixed(2)} €
                  </span>
                  <button
                    onClick={() => removeItem(item.productId, item.variantId)}
                    style={{
                      padding: '0.5rem',
                      backgroundColor: '#dc3545',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                    }}
                  >
                    ✕
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '1.5rem', marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
          Remarques (optionnel)
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Ex: Sans oignon, bien cuit..."
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #ddd',
            borderRadius: '4px',
            minHeight: '100px',
            resize: 'vertical',
            fontFamily: 'inherit',
          }}
        />
      </div>

      <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '1.5rem', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Total</span>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#007bff' }}>
            {total.toFixed(2)} €
          </span>
        </div>
        <button
          onClick={handleCheckout}
          disabled={loading}
          style={{
            width: '100%',
            padding: '1rem',
            backgroundColor: loading ? '#6c757d' : '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: loading ? 'not-allowed' : 'pointer',
          }}
        >
          {loading ? 'Traitement...' : 'Valider la commande'}
        </button>
      </div>
    </div>
  );
}

