import { useState, useEffect } from 'react';
import { ordersService, Order, OrderStatus, UpdateOrderDto } from '../services/orders.service';
import { tablesService, Table } from '../services/tables.service';
import { useAuthStore } from '../stores/auth.store';

export function Server() {
  const { user } = useAuthStore();
  const [orders, setOrders] = useState<Order[]>([]);
  const [tables, setTables] = useState<Table[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTable, setSelectedTable] = useState<string | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'CASH' | 'CARD_TERMINAL'>('CASH');

  useEffect(() => {
    loadData();
    // Rafraîchir les données toutes les 5 secondes
    const interval = setInterval(loadData, 5000);
    return () => clearInterval(interval);
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const [ordersData, tablesData] = await Promise.all([
        ordersService.getActive(user?.restaurantId),
        tablesService.getAll(user?.restaurantId),
      ]);
      setOrders(ordersData);
      setTables(tablesData);
    } catch (error) {
      console.error('Erreur lors du chargement:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsServed = async (orderId: string) => {
    try {
      await ordersService.update(orderId, { status: OrderStatus.SERVED });
      loadData();
    } catch (error: any) {
      alert(error.response?.data?.message || 'Erreur lors de la mise à jour');
    }
  };

  const handlePayOrder = (order: Order) => {
    setSelectedOrder(order);
    setShowPaymentModal(true);
  };

  const confirmPayment = async () => {
    if (!selectedOrder) return;

    try {
      await ordersService.update(selectedOrder.id, {
        isPaid: true,
        status: OrderStatus.PAID,
        serverId: user?.id,
      });
      setShowPaymentModal(false);
      setSelectedOrder(null);
      loadData();
    } catch (error: any) {
      alert(error.response?.data?.message || 'Erreur lors de l\'encaissement');
    }
  };

  const getStatusColor = (status: OrderStatus) => {
    const colors: Record<string, string> = {
      PENDING: '#ffc107',
      CONFIRMED: '#17a2b8',
      IN_PREPARATION: '#007bff',
      READY: '#28a745',
      SERVED: '#6c757d',
      PAID: '#155724',
    };
    return colors[status] || '#6c757d';
  };

  const filteredOrders = selectedTable
    ? orders.filter((order) => order.tableId === selectedTable)
    : orders;

  const getTotal = (order: Order) => {
    return order.totalAmount || order.total || 0;
  };

  if (loading && orders.length === 0) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Chargement...</div>;
  }

  return (
    <div style={{ padding: '1rem', maxWidth: '1400px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '1rem', fontSize: '1.75rem' }}>Service - Commandes</h1>

      {/* Filtre par table */}
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          marginBottom: '1.5rem',
          flexWrap: 'wrap',
          padding: '1rem',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
        }}
      >
        <button
          onClick={() => setSelectedTable(null)}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: selectedTable === null ? '#007bff' : '#fff',
            color: selectedTable === null ? '#fff' : '#333',
            border: '1px solid #ddd',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: selectedTable === null ? 'bold' : 'normal',
          }}
        >
          Toutes les tables
        </button>
        {tables.map((table) => (
          <button
            key={table.id}
            onClick={() => setSelectedTable(table.id)}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: selectedTable === table.id ? '#007bff' : '#fff',
              color: selectedTable === table.id ? '#fff' : '#333',
              border: '1px solid #ddd',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: selectedTable === table.id ? 'bold' : 'normal',
            }}
          >
            {table.name}
          </button>
        ))}
      </div>

      {/* Liste des commandes */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '1rem',
        }}
      >
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              border: '2px solid',
              borderColor: getStatusColor(order.status),
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.25rem' }}>
                  {order.table?.name || `Table ${order.tableId?.slice(0, 4)}` || 'Sans table'}
                </h3>
                <p style={{ margin: '0.25rem 0 0 0', color: '#666', fontSize: '0.9rem' }}>
                  {new Date(order.createdAt).toLocaleTimeString('fr-FR', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
              <span
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  backgroundColor: getStatusColor(order.status),
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                }}
              >
                {order.status}
              </span>
            </div>

            <div style={{ marginBottom: '1rem', maxHeight: '300px', overflowY: 'auto' }}>
              {order.items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0.75rem 0',
                    borderBottom: '1px solid #eee',
                  }}
                >
                  <div>
                    <span style={{ fontWeight: '500' }}>
                      {item.productName || item.product?.name || 'Produit'} x{item.quantity}
                    </span>
                    {item.notes && (
                      <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem', color: '#666', fontStyle: 'italic' }}>
                        {item.notes}
                      </p>
                    )}
                  </div>
                  <span style={{ fontWeight: 'bold' }}>
                    {(item.totalPrice || (item.unitPrice || item.price || 0) * item.quantity).toFixed(2)} €
                  </span>
                </div>
              ))}
            </div>

            {order.notes && (
              <div
                style={{
                  padding: '0.75rem',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '4px',
                  marginBottom: '1rem',
                  fontSize: '0.9rem',
                  color: '#666',
                }}
              >
                <strong>Note:</strong> {order.notes}
              </div>
            )}

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem',
                paddingTop: '1rem',
                borderTop: '2px solid #eee',
              }}
            >
              <strong style={{ fontSize: '1.5rem' }}>Total: {getTotal(order).toFixed(2)} €</strong>
              {order.isPaid && (
                <span style={{ color: '#28a745', fontWeight: 'bold', fontSize: '0.9rem' }}>✓ Payé</span>
              )}
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {order.status === OrderStatus.READY && !order.isPaid && (
                <button
                  onClick={() => handleMarkAsServed(order.id)}
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    backgroundColor: '#17a2b8',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                  }}
                >
                  Servie
                </button>
              )}
              {!order.isPaid && (
                <button
                  onClick={() => handlePayOrder(order)}
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                  }}
                >
                  💳 Encaisser
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredOrders.length === 0 && (
        <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: 'white', borderRadius: '8px' }}>
          <p style={{ fontSize: '1.25rem', color: '#666' }}>
            {selectedTable ? 'Aucune commande pour cette table' : 'Aucune commande active'}
          </p>
        </div>
      )}

      {/* Modal de paiement */}
      {showPaymentModal && selectedOrder && (
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
          onClick={() => setShowPaymentModal(false)}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '8px',
              maxWidth: '500px',
              width: '90%',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ marginBottom: '1.5rem' }}>Encaisser la commande</h2>
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                Total: <strong>{getTotal(selectedOrder).toFixed(2)} €</strong>
              </p>
              <p style={{ color: '#666', marginBottom: '1rem' }}>
                Table: {selectedOrder.table?.name || 'N/A'}
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Mode de paiement
              </label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={() => setPaymentMethod('CASH')}
                  style={{
                    flex: 1,
                    padding: '1rem',
                    backgroundColor: paymentMethod === 'CASH' ? '#28a745' : '#f8f9fa',
                    color: paymentMethod === 'CASH' ? 'white' : '#333',
                    border: '2px solid',
                    borderColor: paymentMethod === 'CASH' ? '#28a745' : '#ddd',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                  }}
                >
                  💵 Espèces
                </button>
                <button
                  onClick={() => setPaymentMethod('CARD_TERMINAL')}
                  style={{
                    flex: 1,
                    padding: '1rem',
                    backgroundColor: paymentMethod === 'CARD_TERMINAL' ? '#007bff' : '#f8f9fa',
                    color: paymentMethod === 'CARD_TERMINAL' ? 'white' : '#333',
                    border: '2px solid',
                    borderColor: paymentMethod === 'CARD_TERMINAL' ? '#007bff' : '#ddd',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                  }}
                >
                  💳 Carte
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={() => setShowPaymentModal(false)}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                }}
              >
                Annuler
              </button>
              <button
                onClick={confirmPayment}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                }}
              >
                Confirmer le paiement
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

