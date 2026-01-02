import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { publicService, TableSession, Order } from '../services/public.service';
import { useClientStore } from '../stores/client.store';
import { useToast } from '../components/ToastContainer';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { useIsMobile } from '../hooks/useIsMobile';

export function TableSessionPage() {
  const { sessionId } = useParams<{ sessionId: string }>();
  const navigate = useNavigate();
  const toast = useToast();
  const isMobile = useIsMobile();
  const { identifier: clientIdentifier } = useClientStore();
  const [session, setSession] = useState<TableSession | null>(null);
  const [loading, setLoading] = useState(true);
  const [paymentMode, setPaymentMode] = useState<'full' | 'split'>('full');
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);

  useEffect(() => {
    if (sessionId) {
      loadSession();
    }
  }, [sessionId]);

  const loadSession = async () => {
    try {
      setLoading(true);
      const data = await publicService.getTableSession(sessionId!);
      setSession(data);
      // Sélectionner automatiquement les commandes du client actuel en mode split
      if (data.orders && clientIdentifier) {
        const myOrders = data.orders.filter((o) => o.clientIdentifier === clientIdentifier);
        setSelectedOrders(myOrders.map((o) => o.id));
      }
    } catch (error: any) {
      console.error('Erreur lors du chargement de la session:', error);
      toast.error(error.response?.data?.message || 'Erreur lors du chargement de la session');
    } finally {
      setLoading(false);
    }
  };

  const handlePayment = async (payFull: boolean) => {
    if (!session) return;

    if (payFull) {
      // Paiement complet - tous paient ensemble
      toast.info(`Paiement complet de ${session.totalAmount.toFixed(2)} €`);
      // TODO: Intégrer avec le système de paiement
    } else {
      // Paiement séparé - chacun paie ses commandes
      if (selectedOrders.length === 0) {
        toast.warning('Veuillez sélectionner au moins une commande');
        return;
      }

      const selectedOrdersData = session.orders.filter((o) => selectedOrders.includes(o.id));
      const totalToPay = selectedOrdersData.reduce((sum, o) => sum + Number(o.totalAmount), 0);

      toast.info(`Vous allez payer ${totalToPay.toFixed(2)} € pour ${selectedOrdersData.length} commande(s)`);
      // TODO: Intégrer avec le système de paiement
    }
  };

  if (loading) {
    return <LoadingSpinner fullScreen message="Chargement de la session..." />;
  }

  if (!session) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <p>Session introuvable</p>
      </div>
    );
  }

  // Grouper les commandes par client
  const ordersByClient = session.orders.reduce((acc, order) => {
    const clientId = order.clientIdentifier || 'anonyme';
    const clientName = order.clientName || `Client ${clientId.slice(0, 8)}`;
    if (!acc[clientId]) {
      acc[clientId] = { name: clientName, orders: [], total: 0 };
    }
    acc[clientId].orders.push(order);
    acc[clientId].total += Number(order.totalAmount);
    return acc;
  }, {} as Record<string, { name: string; orders: Order[]; total: number }>);

  const myTotal = session.orders
    .filter((o) => o.clientIdentifier === clientIdentifier)
    .reduce((sum, o) => sum + Number(o.totalAmount), 0);

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: isMobile ? '0.5rem' : '1rem' }}>
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: isMobile ? 'wrap' : 'nowrap', gap: isMobile ? '1rem' : '0' }}>
        <h1 style={{ fontSize: isMobile ? '1.5rem' : '2rem', flex: isMobile ? '1 1 100%' : 'auto' }}>Facture de la table</h1>
        <button
          onClick={() => navigate(-1)}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Retour
        </button>
      </div>

      {/* Sélection du mode de paiement */}
      <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: isMobile ? '1rem' : '1.5rem', marginBottom: '1.5rem' }}>
        <h2 style={{ marginBottom: '1rem', fontSize: isMobile ? '1.25rem' : '1.5rem' }}>Mode de paiement</h2>
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '1rem', marginBottom: '1rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
            <input
              type="radio"
              checked={paymentMode === 'full'}
              onChange={() => setPaymentMode('full')}
            />
            <span style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>Paiement complet (tous ensemble)</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
            <input
              type="radio"
              checked={paymentMode === 'split'}
              onChange={() => setPaymentMode('split')}
            />
            <span style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>Paiement séparé (chacun paie sa part)</span>
          </label>
        </div>

        {paymentMode === 'full' && (
          <div style={{ backgroundColor: '#f8f9fa', padding: '1rem', borderRadius: '8px' }}>
            <p style={{ margin: 0, fontSize: '1.1rem' }}>
              <strong>Total à payer : {session.totalAmount.toFixed(2)} €</strong>
            </p>
            <p style={{ margin: '0.5rem 0 0 0', color: '#666', fontSize: '0.9rem' }}>
              {session.orders.length} commande(s) • {Object.keys(ordersByClient).length} personne(s)
            </p>
          </div>
        )}

        {paymentMode === 'split' && (
          <div style={{ backgroundColor: '#f8f9fa', padding: '1rem', borderRadius: '8px' }}>
            <p style={{ margin: 0, fontSize: '1.1rem' }}>
              <strong>Votre total : {myTotal.toFixed(2)} €</strong>
            </p>
            <p style={{ margin: '0.5rem 0 0 0', color: '#666', fontSize: '0.9rem' }}>
              Sélectionnez les commandes que vous souhaitez payer
            </p>
          </div>
        )}
      </div>

      {/* Liste des commandes par client */}
      <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '1.5rem', marginBottom: '1.5rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Commandes de la table</h2>
        {Object.entries(ordersByClient).map(([clientId, clientData]) => (
          <div
            key={clientId}
            style={{
              border: '1px solid #eee',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '1rem',
              backgroundColor: clientId === clientIdentifier ? '#e7f3ff' : '#fff',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <h3 style={{ margin: 0 }}>
                {clientData.name}
                {clientId === clientIdentifier && (
                  <span style={{ marginLeft: '0.5rem', fontSize: '0.85rem', color: '#007bff' }}>(Vous)</span>
                )}
              </h3>
              <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                {clientData.total.toFixed(2)} €
              </span>
            </div>

            {clientData.orders.map((order) => (
              <div
                key={order.id}
                style={{
                  marginTop: '0.75rem',
                  padding: '0.75rem',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '4px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ flex: 1 }}>
                  {paymentMode === 'split' && (
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={selectedOrders.includes(order.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedOrders([...selectedOrders, order.id]);
                          } else {
                            setSelectedOrders(selectedOrders.filter((id) => id !== order.id));
                          }
                        }}
                        disabled={clientId !== clientIdentifier}
                      />
                      <span>Payer cette commande</span>
                    </label>
                  )}
                  <div style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#666' }}>
                    {order.items?.length || 0} article(s) • Commandé le{' '}
                    {new Date(order.createdAt).toLocaleString('fr-FR')}
                  </div>
                  {order.items && order.items.length > 0 && (
                    <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: '#999' }}>
                      {order.items
                        .map((item: any) => `${item.quantity}x ${item.productName || 'Article'}`)
                        .join(', ')}
                    </div>
                  )}
                </div>
                <span style={{ fontWeight: 'bold', fontSize: '1rem', marginLeft: '1rem' }}>
                  {Number(order.totalAmount).toFixed(2)} €
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Bouton de paiement */}
      <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '1.5rem' }}>
        <button
          onClick={() => handlePayment(paymentMode === 'full')}
          style={{
            width: '100%',
            padding: '1rem',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          {paymentMode === 'full'
            ? `Payer ${session.totalAmount.toFixed(2)} € (Paiement complet)`
            : `Payer ${selectedOrders
                .reduce((sum, id) => {
                  const order = session.orders.find((o) => o.id === id);
                  return sum + (order ? Number(order.totalAmount) : 0);
                }, 0)
                .toFixed(2)} € (Mes commandes)`}
        </button>
      </div>
    </div>
  );
}

