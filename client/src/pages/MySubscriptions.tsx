import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { subscriptionsService, Subscription } from '../services/subscriptions.service';
import { useClientStore } from '../stores/client.store';

export function MySubscriptions() {
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const { identifier: clientIdentifier, generateIdentifier } = useClientStore();
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (restaurantId && clientIdentifier) {
      loadData();
    } else if (restaurantId) {
      generateIdentifier();
    }
  }, [restaurantId, clientIdentifier]);

  const loadData = async () => {
    if (!restaurantId || !clientIdentifier) return;
    try {
      setLoading(true);
      const data = await subscriptionsService.getMySubscriptions(restaurantId, clientIdentifier);
      setSubscriptions(data);
    } catch (error) {
      console.error('Erreur lors du chargement:', error);
    } finally {
      setLoading(false);
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'THREE_DAYS':
        return '3 jours/semaine';
      case 'FIVE_DAYS':
        return '5 jours/semaine';
      case 'MONTHLY':
        return 'Mensuel';
      default:
        return type;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'ACTIVE':
        return '✅ Actif';
      case 'PAUSED':
        return '⏸️ En pause';
      case 'EXPIRED':
        return '❌ Expiré';
      case 'CANCELLED':
        return '🚫 Annulé';
      default:
        return status;
    }
  };

  const getRemainingMeals = (subscription: Subscription) => {
    return subscription.totalMeals - subscription.consumedMeals;
  };

  if (loading) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <p>Chargement...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '1rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem', fontSize: '2rem', fontWeight: '600' }}>
        🍽️ Mes Abonnements de Midi
      </h1>

      {subscriptions.length === 0 ? (
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '3rem',
          textAlign: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}>
          <p style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>🍽️</p>
          <p style={{ fontSize: '1.25rem', color: '#6c757d', marginBottom: '0.5rem' }}>
            Vous n'avez pas d'abonnement actif
          </p>
          <p style={{ color: '#6c757d' }}>
            Contactez le restaurant pour souscrire à un abonnement de midi
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {subscriptions.map((subscription) => {
            const remaining = getRemainingMeals(subscription);
            const progress = (subscription.consumedMeals / subscription.totalMeals) * 100;

            return (
              <div
                key={subscription.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  padding: '2rem',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem' }}>
                  <div>
                    <h2 style={{ margin: '0 0 0.5rem 0', fontSize: '1.5rem', fontWeight: '600' }}>
                      {getTypeLabel(subscription.type)}
                    </h2>
                    <div style={{
                      display: 'inline-block',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      backgroundColor: subscription.status === 'ACTIVE' ? '#d4edda' : subscription.status === 'PAUSED' ? '#fff3cd' : '#f8d7da',
                      color: subscription.status === 'ACTIVE' ? '#155724' : subscription.status === 'PAUSED' ? '#856404' : '#721c24',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                    }}>
                      {getStatusLabel(subscription.status)}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ margin: 0, fontSize: '1.5rem', fontWeight: '700', color: '#007bff' }}>
                      {subscription.price.toFixed(2)} €
                    </p>
                    <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.875rem', color: '#6c757d' }}>
                      {subscription.isRecurring ? 'Récurrent' : 'Unique'}
                    </p>
                  </div>
                </div>

                {/* Barre de progression */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                      Repas consommés
                    </span>
                    <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>
                      {subscription.consumedMeals} / {subscription.totalMeals}
                    </span>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '12px',
                    backgroundColor: '#e9ecef',
                    borderRadius: '6px',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      width: `${progress}%`,
                      height: '100%',
                      backgroundColor: remaining > 0 ? '#28a745' : '#dc3545',
                      transition: 'width 0.3s ease',
                    }} />
                  </div>
                  <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.875rem', color: '#6c757d', textAlign: 'center' }}>
                    {remaining > 0 ? `${remaining} repas restants` : 'Tous les repas ont été consommés'}
                  </p>
                </div>

                {/* Dates */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                  padding: '1rem',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                  marginBottom: '1rem',
                }}>
                  <div>
                    <p style={{ margin: 0, fontSize: '0.875rem', color: '#6c757d' }}>Début</p>
                    <p style={{ margin: '0.25rem 0 0 0', fontWeight: '600' }}>
                      {new Date(subscription.startDate).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                  {subscription.endDate && (
                    <div>
                      <p style={{ margin: 0, fontSize: '0.875rem', color: '#6c757d' }}>Fin</p>
                      <p style={{ margin: '0.25rem 0 0 0', fontWeight: '600' }}>
                        {new Date(subscription.endDate).toLocaleDateString('fr-FR')}
                      </p>
                    </div>
                  )}
                </div>

                {/* Pause info */}
                {subscription.status === 'PAUSED' && subscription.pauseStartDate && (
                  <div style={{
                    padding: '1rem',
                    backgroundColor: '#fff3cd',
                    border: '1px solid #ffc107',
                    borderRadius: '8px',
                    marginBottom: '1rem',
                  }}>
                    <p style={{ margin: 0, fontSize: '0.875rem', color: '#856404' }}>
                      ⏸️ En pause depuis le {new Date(subscription.pauseStartDate).toLocaleDateString('fr-FR')}
                      {subscription.pauseEndDate && ` jusqu'au ${new Date(subscription.pauseEndDate).toLocaleDateString('fr-FR')}`}
                    </p>
                    {subscription.pauseReason && (
                      <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.875rem', color: '#856404' }}>
                        Raison: {subscription.pauseReason}
                      </p>
                    )}
                  </div>
                )}

                {/* Jours préférés */}
                {subscription.preferredDays && subscription.preferredDays.length > 0 && (
                  <div style={{ marginTop: '1rem' }}>
                    <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#6c757d' }}>
                      Jours préférés:
                    </p>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {subscription.preferredDays.map((day, index) => (
                        <span
                          key={index}
                          style={{
                            padding: '0.25rem 0.75rem',
                            backgroundColor: '#e7f3ff',
                            color: '#007bff',
                            borderRadius: '20px',
                            fontSize: '0.875rem',
                          }}
                        >
                          {day}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
