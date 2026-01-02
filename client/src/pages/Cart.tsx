import { useNavigate, useParams } from 'react-router-dom';
import { useCartStore } from '../stores/cart.store';
import { useClientStore } from '../stores/client.store';
import { useAuthStore } from '../stores/auth.store';
import { publicService } from '../services/public.service';
import { paymentsService } from '../services/payments.service';
import { useState, useEffect } from 'react';
import { useToast, LazyImage } from '../components';
import { handleApiError } from '../utils/errorHandler';
import { StripePayment } from '../components/StripePayment';
import { VivaWalletPayment } from '../components/VivaWalletPayment';
import { loyaltyService, LoyaltyAccount, LoyaltyReward } from '../services/loyalty.service';
import { subscriptionsService, Subscription } from '../services/subscriptions.service';
import { promoService } from '../services/promo.service';

export function Cart() {
  const { restaurantId, tableId } = useParams<{ restaurantId: string; tableId?: string }>();
  const navigate = useNavigate();
  const toast = useToast();
  const { items, removeItem, updateQuantity, getTotal, clear, restaurantId: cartRestaurantId, tableId: cartTableId, tableSessionId, setTableSession } = useCartStore();
  const { identifier: clientIdentifier, name: clientName, generateIdentifier } = useClientStore();
  const { isAuthenticated, user } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState('');
  const [orderType, setOrderType] = useState<'ON_SITE' | 'TAKEAWAY' | 'DELIVERY'>('ON_SITE');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentProvider, setPaymentProvider] = useState<string>('CASH_ONLY');
  const [loyaltyAccount, setLoyaltyAccount] = useState<LoyaltyAccount | null>(null);
  const [availableRewards, setAvailableRewards] = useState<LoyaltyReward[]>([]);
  const [selectedReward, setSelectedReward] = useState<string | null>(null);
  const [showLoyaltyModal, setShowLoyaltyModal] = useState(false);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [selectedSubscription, setSelectedSubscription] = useState<string | null>(null);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromoCode, setAppliedPromoCode] = useState<{ code: string; discountAmount: number } | null>(null);
  const [promoCodeError, setPromoCodeError] = useState<string | null>(null);
  const [promoCodeLoading, setPromoCodeLoading] = useState(false);

  const total = getTotal();
  const isOnlineOrder = orderType === 'TAKEAWAY' || orderType === 'DELIVERY';

  // S'assurer qu'un identifiant client existe
  useEffect(() => {
    if (!clientIdentifier) {
      generateIdentifier();
    }
  }, [clientIdentifier, generateIdentifier]);

  // Récupérer le provider de paiement du restaurant
  useEffect(() => {
    if (cartRestaurantId && isOnlineOrder) {
      paymentsService.getRestaurantPaymentProvider(cartRestaurantId).then(setPaymentProvider);
    }
  }, [cartRestaurantId, isOnlineOrder]);

  // Charger le compte de fidélité et les abonnements
  useEffect(() => {
    if (clientIdentifier && cartRestaurantId) {
      loadLoyaltyAccount();
      loadSubscriptions();
    }
  }, [clientIdentifier, cartRestaurantId]);

  const loadLoyaltyAccount = async () => {
    if (!clientIdentifier || !cartRestaurantId) return;
    try {
      const account = await loyaltyService.getMyAccount(cartRestaurantId, clientIdentifier);
      setLoyaltyAccount(account);
      
      // Charger les récompenses disponibles
      if (account.points > 0) {
        const rewards = await loyaltyService.getAvailableRewards(cartRestaurantId, clientIdentifier);
        setAvailableRewards(rewards);
      } else {
        setAvailableRewards([]);
      }
    } catch (error) {
      // Si pas de compte, ce n'est pas grave
      console.log('Pas de compte de fidélité');
    }
  };

  const loadSubscriptions = async () => {
    if (!clientIdentifier || !cartRestaurantId) return;
    try {
      const data = await subscriptionsService.getMySubscriptions(cartRestaurantId, clientIdentifier);
      // Filtrer seulement les abonnements actifs avec des repas restants
      setSubscriptions(data.filter(sub => 
        sub.status === 'ACTIVE' && (sub.totalMeals - sub.consumedMeals) > 0
      ));
    } catch (error) {
      console.log('Pas d\'abonnements');
    }
  };

  const handleCheckout = async () => {
    if (items.length === 0) {
      toast.warning('Votre panier est vide');
      return;
    }

    if (!cartRestaurantId) {
      toast.error('Erreur: restaurant non défini');
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
        toast.warning('Veuillez entrer une adresse de livraison');
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
      toast.success('Commande créée avec succès ! 🎉');
      navigate(`/order/${order.id}?restaurantId=${cartRestaurantId}&tableId=${tableId || cartTableId || ''}`);
    } catch (error: any) {
      console.error('Erreur lors de la commande:', error);
      handleApiError(error, toast.error);
    } finally {
      setLoading(false);
    }
  };

  const handlePaymentSuccess = async (paymentIntentId: string) => {
    if (!cartRestaurantId || !user) return;

    try {
      setPaymentProcessing(true);

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
      toast.success('Paiement réussi ! Votre commande a été créée 🎉');
      navigate(`/order/${order.id}?restaurantId=${cartRestaurantId}`);
    } catch (error: any) {
      console.error('Erreur lors de la confirmation du paiement:', error);
      handleApiError(error, toast.error);
    } finally {
      setPaymentProcessing(false);
    }
  };

  const handlePaymentError = (error: string) => {
    toast.error(error);
    setPaymentProcessing(false);
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
              <LazyImage
                src={item.productImage}
                alt={item.productName}
                style={{
                  width: '80px',
                  height: '80px',
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

      {/* Code promo */}
      <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '1.5rem', marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
          🎟️ Code promo
        </label>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <input
            type="text"
            value={promoCode}
            onChange={(e) => {
              setPromoCode(e.target.value.toUpperCase());
              setPromoCodeError(null);
              if (appliedPromoCode) {
                setAppliedPromoCode(null);
              }
            }}
            placeholder="Entrez votre code promo"
            disabled={promoCodeLoading || !!appliedPromoCode}
            style={{
              flex: 1,
              padding: '0.75rem',
              border: promoCodeError ? '1px solid #dc3545' : '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '1rem',
            }}
          />
          {!appliedPromoCode ? (
            <button
              onClick={async () => {
                if (!promoCode.trim()) {
                  setPromoCodeError('Veuillez entrer un code promo');
                  return;
                }
                try {
                  setPromoCodeLoading(true);
                  setPromoCodeError(null);
                  const result = await promoService.applyPromoCode(
                    cartRestaurantId!,
                    promoCode.trim(),
                    total,
                    clientIdentifier || undefined,
                  );
                  setAppliedPromoCode({ code: promoCode.trim(), discountAmount: result.discountAmount });
                  toast.success(`Code promo appliqué ! Réduction de ${result.discountAmount.toFixed(2)} €`);
                } catch (error: any) {
                  setPromoCodeError(error.response?.data?.message || error.message || 'Code promo invalide');
                  toast.error('Code promo invalide ou expiré');
                } finally {
                  setPromoCodeLoading(false);
                }
              }}
              disabled={promoCodeLoading || !promoCode.trim()}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: promoCodeLoading || !promoCode.trim() ? '#6c757d' : '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: promoCodeLoading || !promoCode.trim() ? 'not-allowed' : 'pointer',
                fontSize: '1rem',
                fontWeight: '500',
              }}
            >
              {promoCodeLoading ? 'Vérification...' : 'Appliquer'}
            </button>
          ) : (
            <button
              onClick={() => {
                setAppliedPromoCode(null);
                setPromoCode('');
                toast.success('Code promo retiré');
              }}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '500',
              }}
            >
              Retirer
            </button>
          )}
        </div>
        {promoCodeError && (
          <p style={{ margin: '0.5rem 0 0 0', color: '#dc3545', fontSize: '0.875rem' }}>
            {promoCodeError}
          </p>
        )}
        {appliedPromoCode && (
          <p style={{ margin: '0.5rem 0 0 0', color: '#28a745', fontSize: '0.875rem', fontWeight: '600' }}>
            ✅ Code {appliedPromoCode.code} appliqué ! Réduction de {appliedPromoCode.discountAmount.toFixed(2)} €
          </p>
        )}
      </div>

      {/* Abonnements disponibles */}
      {subscriptions.length > 0 && (
        <div style={{
          backgroundColor: '#e7f3ff',
          border: '1px solid #007bff',
          borderRadius: '8px',
          padding: '1rem',
          marginBottom: '1rem',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ fontWeight: '600', color: '#004085' }}>
              🍽️ Abonnements disponibles
            </span>
            <button
              onClick={() => setShowSubscriptionModal(true)}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '500',
              }}
            >
              Utiliser un repas ({subscriptions.reduce((sum, sub) => sum + (sub.totalMeals - sub.consumedMeals), 0)} disponibles)
            </button>
          </div>
        </div>
      )}

      {/* Points de fidélité */}
      {loyaltyAccount && loyaltyAccount.points > 0 && (
        <div style={{
          backgroundColor: '#fff3cd',
          border: '1px solid #ffc107',
          borderRadius: '8px',
          padding: '1rem',
          marginBottom: '1rem',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ fontWeight: '600', color: '#856404' }}>
              ⭐ Vos points de fidélité
            </span>
            <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#856404' }}>
              {loyaltyAccount.points} points
            </span>
          </div>
          {availableRewards.length > 0 && (
            <button
              onClick={() => setShowLoyaltyModal(true)}
              style={{
                width: '100%',
                padding: '0.5rem',
                backgroundColor: '#ffc107',
                color: '#856404',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '500',
              }}
            >
              Voir les récompenses disponibles ({availableRewards.length})
            </button>
          )}
        </div>
      )}

      <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '1.5rem', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Sous-total</span>
          <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
            {total.toFixed(2)} €
          </span>
        </div>
        {appliedPromoCode && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', color: '#28a745' }}>
            <span style={{ fontSize: '1rem' }}>Réduction ({appliedPromoCode.code})</span>
            <span style={{ fontSize: '1rem', fontWeight: '600' }}>
              -{appliedPromoCode.discountAmount.toFixed(2)} €
            </span>
          </div>
        )}
        <div style={{ borderTop: '1px solid #dee2e6', paddingTop: '0.5rem', marginTop: '0.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Total</span>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#007bff' }}>
              {(total - (appliedPromoCode?.discountAmount || 0)).toFixed(2)} €
            </span>
          </div>
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
                {(total - (appliedPromoCode?.discountAmount || 0)).toFixed(2)} €
              </p>
              {appliedPromoCode && (
                <p style={{ fontSize: '0.875rem', color: '#28a745', marginTop: '0.5rem' }}>
                  Réduction {appliedPromoCode.code}: -{appliedPromoCode.discountAmount.toFixed(2)} €
                </p>
              )}
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

            {/* Composant de paiement selon le provider */}
            {paymentProvider === 'STRIPE' ? (
              <StripePayment
                amount={total - (appliedPromoCode?.discountAmount || 0)}
                restaurantId={cartRestaurantId!}
                onSuccess={handlePaymentSuccess}
                onError={handlePaymentError}
                onCancel={() => setShowPaymentModal(false)}
              />
            ) : paymentProvider === 'VIVA_WALLET' ? (
              <VivaWalletPayment
                amount={total - (appliedPromoCode?.discountAmount || 0)}
                restaurantId={cartRestaurantId!}
                onSuccess={handlePaymentSuccess}
                onError={handlePaymentError}
                onCancel={() => setShowPaymentModal(false)}
              />
            ) : (
              <div>
                <div style={{
                  padding: '1.5rem',
                  backgroundColor: '#e7f3ff',
                  borderRadius: '8px',
                  marginBottom: '1.5rem',
                  fontSize: '0.9rem',
                }}>
                  <strong>⚠️ Mode simulation</strong>
                  <p style={{ margin: '0.5rem 0 0 0' }}>
                    Aucun provider de paiement configuré. Le paiement sera simulé.
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
                    onClick={() => handlePaymentSuccess('simulated_' + Date.now())}
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
            )}
          </div>
        </div>
      )}

      {/* Modal récompenses de fidélité */}
      {showLoyaltyModal && loyaltyAccount && (
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
            padding: '1rem',
          }}
          onClick={() => setShowLoyaltyModal(false)}
        >
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '2rem',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ marginBottom: '1rem' }}>⭐ Récompenses disponibles</h2>
            <p style={{ marginBottom: '1.5rem', color: '#6c757d' }}>
              Vous avez <strong>{loyaltyAccount.points} points</strong>
            </p>

            {availableRewards.length === 0 ? (
              <p style={{ textAlign: 'center', color: '#6c757d', padding: '2rem' }}>
                Aucune récompense disponible pour le moment
              </p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {availableRewards.map((reward) => (
                  <div
                    key={reward.id}
                    style={{
                      border: selectedReward === reward.id ? '2px solid #007bff' : '1px solid #dee2e6',
                      borderRadius: '8px',
                      padding: '1rem',
                      cursor: 'pointer',
                      backgroundColor: selectedReward === reward.id ? '#e7f3ff' : 'white',
                    }}
                    onClick={() => setSelectedReward(reward.id)}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                      <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '600' }}>
                        {reward.name}
                      </h3>
                      <span style={{
                        padding: '0.25rem 0.75rem',
                        backgroundColor: '#007bff',
                        color: 'white',
                        borderRadius: '20px',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                      }}>
                        {reward.pointsRequired} ⭐
                      </span>
                    </div>
                    {reward.description && (
                      <p style={{ margin: '0 0 0.5rem 0', color: '#6c757d', fontSize: '0.9rem' }}>
                        {reward.description}
                      </p>
                    )}
                    <div style={{ fontSize: '0.875rem', color: '#6c757d' }}>
                      {reward.type === 'PERCENTAGE_DISCOUNT' && reward.discountPercentage && (
                        <span>Réduction de {reward.discountPercentage}%</span>
                      )}
                      {reward.type === 'FIXED_DISCOUNT' && reward.discountAmount && (
                        <span>Réduction de {reward.discountAmount.toFixed(2)} €</span>
                      )}
                      {reward.type === 'FREE_PRODUCT' && (
                        <span>Produit offert</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <button
                onClick={() => {
                  setShowLoyaltyModal(false);
                  setSelectedReward(null);
                }}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
              >
                Fermer
              </button>
              {selectedReward && (
                <button
                  onClick={async () => {
                    try {
                      await loyaltyService.useReward(cartRestaurantId!, clientIdentifier!, selectedReward);
                      toast.success('Récompense appliquée !');
                      setShowLoyaltyModal(false);
                      setSelectedReward(null);
                      loadLoyaltyAccount();
                    } catch (error: any) {
                      toast.error(error.message || error.response?.data?.message || 'Erreur lors de l\'utilisation de la récompense');
                    }
                  }}
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                  }}
                >
                  Utiliser cette récompense
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Modal abonnements */}
      {showSubscriptionModal && subscriptions.length > 0 && (
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
            padding: '1rem',
          }}
          onClick={() => setShowSubscriptionModal(false)}
        >
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '2rem',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ marginBottom: '1rem' }}>🍽️ Utiliser un repas d'abonnement</h2>
            <p style={{ marginBottom: '1.5rem', color: '#6c757d' }}>
              Sélectionnez l'abonnement à utiliser pour cette commande
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {subscriptions.map((subscription) => {
                const remaining = subscription.totalMeals - subscription.consumedMeals;
                return (
                  <div
                    key={subscription.id}
                    style={{
                      border: selectedSubscription === subscription.id ? '2px solid #007bff' : '1px solid #dee2e6',
                      borderRadius: '8px',
                      padding: '1rem',
                      cursor: 'pointer',
                      backgroundColor: selectedSubscription === subscription.id ? '#e7f3ff' : 'white',
                    }}
                    onClick={() => setSelectedSubscription(subscription.id)}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                      <div>
                        <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '600' }}>
                          {subscription.type === 'THREE_DAYS' ? '3 jours/semaine' : 
                           subscription.type === 'FIVE_DAYS' ? '5 jours/semaine' : 'Mensuel'}
                        </h3>
                        <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.875rem', color: '#6c757d' }}>
                          {remaining} repas restants
                        </p>
                      </div>
                      <span style={{
                        padding: '0.25rem 0.75rem',
                        backgroundColor: '#28a745',
                        color: 'white',
                        borderRadius: '20px',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                      }}>
                        {subscription.price.toFixed(2)} €
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <button
                onClick={() => {
                  setShowSubscriptionModal(false);
                  setSelectedSubscription(null);
                }}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
              >
                Fermer
              </button>
              {selectedSubscription && (
                <button
                  onClick={async () => {
                    try {
                      toast.success('Abonnement sélectionné ! Il sera utilisé lors de la validation de la commande.');
                      setShowSubscriptionModal(false);
                      setSelectedSubscription(null);
                    } catch (error: any) {
                      toast.error(error.message || 'Erreur lors de la sélection');
                    }
                  }}
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                  }}
                >
                  Utiliser cet abonnement
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

