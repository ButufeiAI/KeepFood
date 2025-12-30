import { useNavigate, useParams } from 'react-router-dom';
import { useCartStore } from '../stores/cart.store';
import { useClientStore } from '../stores/client.store';
import { useAuthStore } from '../stores/auth.store';
import { publicService } from '../services/public.service';
import { paymentsService } from '../services/payments.service';
import { useState, useEffect } from 'react';

export function Cart() {
  const { restaurantId, tableId } = useParams<{ restaurantId: string; tableId?: string }>();
  const navigate = useNavigate();
  const { items, removeItem, updateQuantity, getTotal, clear, restaurantId: cartRestaurantId, tableId: cartTableId, tableSessionId, setTableSession } = useCartStore();
  const { identifier: clientIdentifier, name: clientName, generateIdentifier } = useClientStore();
  const { isAuthenticated, user } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState('');
  const [orderType, setOrderType] = useState<'ON_SITE' | 'TAKEAWAY' | 'DELIVERY'>('ON_SITE');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false);

  const total = getTotal();
  const isOnlineOrder = orderType === 'TAKEAWAY' || orderType === 'DELIVERY';

  // S'assurer qu'un identifiant client existe
  useEffect(() => {
    if (!clientIdentifier) {
      generateIdentifier();
    }
  }, [clientIdentifier, generateIdentifier]);

  const handleCheckout = async () => {
    if (items.length === 0) {
      alert('Votre panier est vide');
      return;
    }

    if (!cartRestaurantId) {
      alert('Erreur: restaurant non défini');
      return;
    }

    // Pour les commandes en ligne (takeaway/delivery), vérifier l'authentification
    if (isOnlineOrder && !isAuthenticated) {
      navigate(`/login?redirect=${encodeURIComponent(window.location.pathname)}`);
      return;
    }

    // Pour les commandes en ligne, ouvrir le modal de paiement
    if (isOnlineOrder) {
      if (orderType === 'DELIVERY' && !deliveryAddress.trim()) {
        alert('Veuillez entrer une adresse de livraison');
        return;
      }
      setShowPaymentModal(true);
      return;
    }

    // Pour les commandes sur place (ON_SITE), créer directement
    try {
      setLoading(true);
      
      // Obtenir ou créer une session de table si nécessaire
      let sessionId = tableSessionId;
      if ((tableId || cartTableId) && !sessionId && cartRestaurantId) {
        const session = await publicService.getOrCreateTableSession(
          tableId || cartTableId!,
          cartRestaurantId
        );
        sessionId = session.id;
        setTableSession(session.id);
      }

      // Créer l'identifiant client s'il n'existe pas
      const clientId = clientIdentifier || generateIdentifier();

      const order = await publicService.createOrder({
        restaurantId: cartRestaurantId,
        tableId: tableId || cartTableId,
        tableSessionId: sessionId,
        clientIdentifier: clientId,
        clientName: clientName || undefined,
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

  const handlePayment = async () => {
    if (!cartRestaurantId || !user) return;

    try {
      setPaymentProcessing(true);

      // Créer une intention de paiement
      const { paymentIntentId } = await paymentsService.createPaymentIntent(
        total,
        cartRestaurantId
      );

      // Simuler le paiement (en production, intégrer avec Stripe, etc.)
      // Ici, on suppose que le paiement est toujours réussi pour la simulation
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulation délai paiement

      // Confirmer le paiement et créer la commande
      const order = await paymentsService.confirmPaymentAndCreateOrder({
        restaurantId: cartRestaurantId,
        orderType: orderType as 'TAKEAWAY' | 'DELIVERY',
        deliveryAddress: orderType === 'DELIVERY' ? deliveryAddress : undefined,
        items: items.map((item) => ({
          productId: item.productId,
          variantId: item.variantId,
          quantity: item.quantity,
          notes: item.notes,
        })),
        notes: notes || undefined,
        paymentIntentId,
      });

      clear();
      setShowPaymentModal(false);
      navigate(`/order/${order.id}?restaurantId=${cartRestaurantId}`);
    } catch (error: any) {
      console.error('Erreur lors du paiement:', error);
      alert(error.response?.data?.message || 'Erreur lors du paiement');
    } finally {
      setPaymentProcessing(false);
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

      {/* Sélection du type de commande (uniquement si pas de tableId) */}
      {!tableId && !cartTableId && (
        <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '1.5rem', marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: 'bold' }}>
            Type de commande
          </label>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => setOrderType('TAKEAWAY')}
              style={{
                flex: 1,
                padding: '0.75rem',
                backgroundColor: orderType === 'TAKEAWAY' ? '#007bff' : '#f8f9fa',
                color: orderType === 'TAKEAWAY' ? 'white' : '#333',
                border: '2px solid',
                borderColor: orderType === 'TAKEAWAY' ? '#007bff' : '#ddd',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.95rem',
                fontWeight: '500',
              }}
            >
              📦 À emporter
            </button>
            <button
              type="button"
              onClick={() => setOrderType('DELIVERY')}
              style={{
                flex: 1,
                padding: '0.75rem',
                backgroundColor: orderType === 'DELIVERY' ? '#007bff' : '#f8f9fa',
                color: orderType === 'DELIVERY' ? 'white' : '#333',
                border: '2px solid',
                borderColor: orderType === 'DELIVERY' ? '#007bff' : '#ddd',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.95rem',
                fontWeight: '500',
              }}
            >
              🚚 Livraison
            </button>
          </div>

          {orderType === 'DELIVERY' && (
            <div style={{ marginTop: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                Adresse de livraison *
              </label>
              <textarea
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
                placeholder="Rue, numéro, code postal, ville..."
                required={orderType === 'DELIVERY'}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  minHeight: '80px',
                  resize: 'vertical',
                  fontFamily: 'inherit',
                  boxSizing: 'border-box',
                }}
              />
            </div>
          )}

          {isOnlineOrder && !isAuthenticated && (
            <div style={{
              marginTop: '1rem',
              padding: '1rem',
              backgroundColor: '#fff3cd',
              border: '1px solid #ffc107',
              borderRadius: '8px',
              fontSize: '0.9rem',
            }}>
              ⚠️ Vous devez être connecté pour commander en ligne
            </div>
          )}
        </div>
      )}

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
          disabled={loading || (isOnlineOrder && !isAuthenticated)}
          style={{
            width: '100%',
            padding: '1rem',
            backgroundColor: loading || (isOnlineOrder && !isAuthenticated) ? '#6c757d' : '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: loading || (isOnlineOrder && !isAuthenticated) ? 'not-allowed' : 'pointer',
            marginBottom: tableSessionId ? '0.5rem' : '0',
          }}
        >
          {loading
            ? 'Traitement...'
            : isOnlineOrder
            ? 'Procéder au paiement'
            : 'Valider la commande'}
        </button>
        {tableSessionId && (
          <button
            onClick={() => navigate(`/table-session/${tableSessionId}`)}
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '0.95rem',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Voir la facture complète de la table
          </button>
        )}
      </div>

      {/* Modal de paiement pour les commandes en ligne */}
      {showPaymentModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
          onClick={() => !paymentProcessing && setShowPaymentModal(false)}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '16px',
              maxWidth: '500px',
              width: '90%',
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Paiement</h2>

            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                <strong>Total à payer:</strong>
              </p>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#007bff' }}>
                {total.toFixed(2)} €
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <p style={{ margin: '0 0 0.5rem 0', fontWeight: '500' }}>
                Type: {orderType === 'TAKEAWAY' ? '📦 À emporter' : '🚚 Livraison'}
              </p>
              {orderType === 'DELIVERY' && deliveryAddress && (
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>
                  Livraison à: {deliveryAddress}
                </p>
              )}
            </div>

            <div style={{
              padding: '1.5rem',
              backgroundColor: '#e7f3ff',
              borderRadius: '8px',
              marginBottom: '1.5rem',
              fontSize: '0.9rem',
            }}>
              <strong>⚠️ Mode simulation</strong>
              <p style={{ margin: '0.5rem 0 0 0' }}>
                Le paiement sera simulé. En production, cette étape intégrerait Stripe, Viva Wallet, etc.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={() => setShowPaymentModal(false)}
                disabled={paymentProcessing}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: paymentProcessing ? 'not-allowed' : 'pointer',
                  fontSize: '1rem',
                }}
              >
                Annuler
              </button>
              <button
                onClick={handlePayment}
                disabled={paymentProcessing}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  backgroundColor: paymentProcessing ? '#6c757d' : '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: paymentProcessing ? 'not-allowed' : 'pointer',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                }}
              >
                {paymentProcessing ? 'Traitement...' : 'Payer et commander'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

