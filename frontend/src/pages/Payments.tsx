import { useState, useEffect } from 'react';
import { paymentsService, Payment } from '../services/payments.service';
import { useAuthStore } from '../stores/auth.store';

export function Payments() {
  const { user } = useAuthStore();
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [limit] = useState(50);
  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [refunding, setRefunding] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    loadPayments();
  }, [page]);

  const loadPayments = async () => {
    try {
      setLoading(true);
      const data = await paymentsService.getPaymentHistory(
        user?.restaurantId || '',
        limit,
        page * limit,
      );
      setPayments(data.payments);
      setTotal(data.total);
    } catch (error) {
      console.error('Erreur lors du chargement des paiements:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefund = async (payment: Payment, amount?: number) => {
    if (!confirm(`Êtes-vous sûr de vouloir rembourser ce paiement${amount ? ` (${amount}€)` : ' (total)'} ?`)) {
      return;
    }

    try {
      setRefunding(true);
      await paymentsService.refundPayment(payment.id, amount);
      alert('Remboursement effectué avec succès');
      loadPayments();
      if (showDetails) {
        setShowDetails(false);
      }
    } catch (error: any) {
      alert(error.response?.data?.message || 'Erreur lors du remboursement');
    } finally {
      setRefunding(false);
    }
  };

  const getStatusConfig = (status: string) => {
    const configs: Record<string, { color: string; bgColor: string; label: string }> = {
      'SUCCESS': { color: '#155724', bgColor: '#d4edda', label: 'Success' },
      'FAILED': { color: '#721c24', bgColor: '#f8d7da', label: 'Failed' },
      'PENDING': { color: '#856404', bgColor: '#fff3cd', label: 'Pending' },
      'REFUNDED': { color: '#383d41', bgColor: '#e2e3e5', label: 'Refunded' },
    };
    return configs[status] || { color: '#6c757d', bgColor: '#e9ecef', label: status };
  };

  const getMethodLabel = (method: string) => {
    const methods: Record<string, string> = {
      'CASH': 'Cash',
      'CARD_TERMINAL': 'Card Terminal',
      'ONLINE': 'Online',
      'WALLET': 'Wallet',
    };
    return methods[method] || method;
  };

  if (loading && payments.length === 0) {
    return (
      <div style={{ padding: isMobile ? '1.5rem 1rem' : '2rem', textAlign: 'center' }}>
        <p>Chargement...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: isMobile ? '1.5rem 1rem' : '2rem', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '2rem',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div>
          <h1 style={{ 
            fontSize: isMobile ? '1.5rem' : '2rem', 
            fontWeight: '700', 
            color: '#212529', 
            margin: 0,
            marginBottom: '0.25rem'
          }}>
            Payments
          </h1>
          <p style={{ color: '#6c757d', margin: 0, fontSize: '0.875rem' }}>
            {total} paiement{total > 1 ? 's' : ''} au total
          </p>
        </div>
      </div>

      {payments.length === 0 ? (
        <div style={{
          backgroundColor: 'white',
          padding: '4rem 2rem',
          borderRadius: '12px',
          textAlign: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          border: '1px solid #f0f0f0'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>💳</div>
          <p style={{ fontSize: '1.125rem', color: '#6c757d', margin: 0 }}>
            Aucun paiement enregistré
          </p>
        </div>
      ) : (
        <>
          <div style={{
            display: 'grid',
            gap: '1.5rem',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(380px, 1fr))',
          }}>
            {payments.map((payment) => {
              const statusConfig = getStatusConfig(payment.status);
              return (
                <div
                  key={payment.id}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    border: '1px solid #f0f0f0',
                    cursor: 'pointer',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                  }}
                  onClick={() => {
                    setSelectedPayment(payment);
                    setShowDetails(true);
                  }}
                >
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'start', 
                    marginBottom: '1rem' 
                  }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ 
                        margin: '0 0 0.5rem 0', 
                        fontSize: '1.125rem', 
                        fontWeight: '600',
                        color: '#212529'
                      }}>
                        {payment.order?.table ? `Table ${payment.order.table.name}` : 'Online Order'}
                      </h3>
                      <p style={{ margin: 0, color: '#6c757d', fontSize: '0.875rem' }}>
                        {new Date(payment.createdAt).toLocaleString('fr-FR', {
                          day: '2-digit',
                          month: 'short',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                    <span style={{
                      padding: '0.5rem 0.75rem',
                      borderRadius: '6px',
                      backgroundColor: statusConfig.bgColor,
                      color: statusConfig.color,
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      whiteSpace: 'nowrap'
                    }}>
                      {statusConfig.label}
                    </span>
                  </div>

                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginBottom: '1rem',
                    paddingBottom: '1rem',
                    borderBottom: '1px solid #f0f0f0'
                  }}>
                    <div>
                      <p style={{ margin: '0 0 0.25rem 0', color: '#6c757d', fontSize: '0.875rem' }}>
                        {getMethodLabel(payment.paymentMethod)}
                      </p>
                      <p style={{ margin: 0, color: '#6c757d', fontSize: '0.75rem' }}>
                        {payment.provider || 'Not specified'}
                      </p>
                    </div>
                    <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#212529' }}>
                      ${Number(payment.amount).toFixed(2)}
                    </div>
                  </div>

                  {payment.status === 'SUCCESS' && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRefund(payment);
                      }}
                      disabled={refunding}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        backgroundColor: '#ffc107',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: refunding ? 'not-allowed' : 'pointer',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        transition: 'background 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        if (!refunding) e.currentTarget.style.backgroundColor = '#e0a800';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#ffc107';
                      }}
                    >
                      {refunding ? 'Processing...' : 'Refund'}
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          {total > limit && (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.75rem',
              marginTop: '2rem',
            }}>
              <button
                onClick={() => setPage(Math.max(0, page - 1))}
                disabled={page === 0}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: page === 0 ? '#e9ecef' : '#007bff',
                  color: page === 0 ? '#6c757d' : 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: page === 0 ? 'not-allowed' : 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}
              >
                Previous
              </button>
              <span style={{ 
                padding: '0.75rem 1.5rem', 
                display: 'flex', 
                alignItems: 'center',
                fontSize: '0.875rem',
                color: '#495057'
              }}>
                Page {page + 1} / {Math.ceil(total / limit)}
              </span>
              <button
                onClick={() => setPage(Math.min(Math.ceil(total / limit) - 1, page + 1))}
                disabled={page >= Math.ceil(total / limit) - 1}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: page >= Math.ceil(total / limit) - 1 ? '#e9ecef' : '#007bff',
                  color: page >= Math.ceil(total / limit) - 1 ? '#6c757d' : 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: page >= Math.ceil(total / limit) - 1 ? 'not-allowed' : 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}

      {/* Modal détails */}
      {showDetails && selectedPayment && (
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
          onClick={() => setShowDetails(false)}
        >
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '2rem',
              maxWidth: '500px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ 
              marginBottom: '1.5rem', 
              fontSize: '1.5rem', 
              fontWeight: '600',
              color: '#212529'
            }}>
              Payment Details
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <strong style={{ fontSize: '0.875rem', color: '#6c757d', display: 'block', marginBottom: '0.25rem' }}>ID:</strong>
                <span style={{ fontSize: '0.875rem', color: '#212529' }}>{selectedPayment.id}</span>
              </div>
              <div>
                <strong style={{ fontSize: '0.875rem', color: '#6c757d', display: 'block', marginBottom: '0.25rem' }}>Amount:</strong>
                <span style={{ fontSize: '1.25rem', fontWeight: '700', color: '#212529' }}>
                  ${Number(selectedPayment.amount).toFixed(2)}
                </span>
              </div>
              <div>
                <strong style={{ fontSize: '0.875rem', color: '#6c757d', display: 'block', marginBottom: '0.25rem' }}>Method:</strong>
                <span style={{ fontSize: '0.875rem', color: '#212529' }}>
                  {getMethodLabel(selectedPayment.paymentMethod)}
                </span>
              </div>
              <div>
                <strong style={{ fontSize: '0.875rem', color: '#6c757d', display: 'block', marginBottom: '0.25rem' }}>Status:</strong>
                <span style={{
                  padding: '0.375rem 0.75rem',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  ...getStatusConfig(selectedPayment.status),
                  display: 'inline-block'
                }}>
                  {getStatusConfig(selectedPayment.status).label}
                </span>
              </div>
              {selectedPayment.transactionId && (
                <div>
                  <strong style={{ fontSize: '0.875rem', color: '#6c757d', display: 'block', marginBottom: '0.25rem' }}>Transaction ID:</strong>
                  <span style={{ fontSize: '0.875rem', color: '#212529' }}>{selectedPayment.transactionId}</span>
                </div>
              )}
              <div>
                <strong style={{ fontSize: '0.875rem', color: '#6c757d', display: 'block', marginBottom: '0.25rem' }}>Date:</strong>
                <span style={{ fontSize: '0.875rem', color: '#212529' }}>
                  {new Date(selectedPayment.createdAt).toLocaleString('fr-FR')}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '2rem' }}>
              <button
                onClick={() => setShowDetails(false)}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}
              >
                Close
              </button>
              {selectedPayment.status === 'SUCCESS' && (
                <button
                  onClick={() => handleRefund(selectedPayment)}
                  disabled={refunding}
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    backgroundColor: '#ffc107',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: refunding ? 'not-allowed' : 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}
                >
                  {refunding ? 'Processing...' : 'Refund'}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
