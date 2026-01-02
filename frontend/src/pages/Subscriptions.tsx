import { useState, useEffect } from 'react';
import { subscriptionsService, Subscription, CreateSubscriptionDto } from '../services/subscriptions.service';
import { useAuthStore } from '../stores/auth.store';
import api from '../services/api';

interface Client {
  id: string;
  name?: string;
  email?: string;
  identifier?: string;
}
import { useIsMobile } from '../hooks/useIsMobile';

export function Subscriptions() {
  const { user } = useAuthStore();
  const isMobile = useIsMobile();
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [selectedSubscription, setSelectedSubscription] = useState<Subscription | null>(null);
  const [formData, setFormData] = useState<CreateSubscriptionDto>({
    clientId: '',
    type: 'THREE_DAYS',
    price: 0,
    startDate: new Date().toISOString().split('T')[0],
    totalMeals: 12,
    mealsPerWeek: 3,
    isRecurring: false,
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const subscriptionsData = await subscriptionsService.getAll(user?.restaurantId || '');
      setSubscriptions(subscriptionsData);
      
      // Récupérer les clients depuis les abonnements
      const uniqueClients = subscriptionsData
        .filter((sub) => sub.client)
        .map((sub) => sub.client!)
        .filter((client, index, self) => index === self.findIndex((c) => c.id === client.id));
      setClients(uniqueClients);
      
      // Si besoin, récupérer tous les clients via API
      try {
        const response = await api.get('/clients');
        setClients(response.data);
      } catch (error) {
        // Si l'endpoint n'existe pas, on utilise les clients des abonnements
      }
    } catch (error) {
      console.error('Erreur lors du chargement:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (selectedSubscription) {
        await subscriptionsService.update(selectedSubscription.id, {
          startDate: formData.startDate,
          endDate: formData.endDate,
          preferredDays: formData.preferredDays,
        });
      } else {
        await subscriptionsService.create(formData);
      }
      setShowForm(false);
      setSelectedSubscription(null);
      setFormData({
        clientId: '',
        type: 'THREE_DAYS',
        price: 0,
        startDate: new Date().toISOString().split('T')[0],
        totalMeals: 12,
        mealsPerWeek: 3,
        isRecurring: false,
      });
      loadData();
    } catch (error: any) {
      alert(error.response?.data?.message || 'Erreur lors de la sauvegarde');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet abonnement ?')) {
      return;
    }
    try {
      await subscriptionsService.delete(id);
      loadData();
    } catch (error: any) {
      alert(error.response?.data?.message || 'Erreur lors de la suppression');
    }
  };

  const handlePause = async (id: string) => {
    const startDate = prompt('Date de début de pause (YYYY-MM-DD):');
    if (!startDate) return;
    const endDate = prompt('Date de fin de pause (YYYY-MM-DD) - Optionnel (laisser vide):');
    const reason = prompt('Raison de la pause (optionnel):');
    try {
      await subscriptionsService.pauseSubscription(id, startDate, endDate || undefined, reason || undefined);
      loadData();
    } catch (error: any) {
      alert(error.response?.data?.message || 'Erreur lors de la mise en pause');
    }
  };

  const handleResume = async (id: string) => {
    try {
      await subscriptionsService.resumeSubscription(id);
      loadData();
    } catch (error: any) {
      alert(error.response?.data?.message || 'Erreur lors de la reprise');
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

  if (loading && subscriptions.length === 0) {
    return (
      <div style={{ padding: isMobile ? '1rem' : '2rem' }}>
        <h1 style={{ marginBottom: '1rem' }}>Abonnements de Midi</h1>
        <p>Chargement...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: isMobile ? '1rem' : '2rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: '600', color: '#212529', margin: 0 }}>
            🍽️ Abonnements de Midi
          </h1>
          <button
            onClick={() => {
              setSelectedSubscription(null);
              setFormData({
                clientId: '',
                type: 'THREE_DAYS',
                price: 0,
                startDate: new Date().toISOString().split('T')[0],
                totalMeals: 12,
                mealsPerWeek: 3,
                isRecurring: false,
              });
              setShowForm(true);
            }}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            ➕ Nouvel Abonnement
          </button>
        </div>
        <p style={{ color: '#6c757d' }}>
          Gérez les abonnements de midi de vos clients
        </p>
      </div>

      {/* Formulaire */}
      {showForm && (
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '2rem',
          marginBottom: '2rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}>
          <h2 style={{ marginBottom: '1.5rem' }}>
            {selectedSubscription ? 'Modifier l\'abonnement' : 'Nouvel abonnement'}
          </h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                Client *
              </label>
              <select
                value={formData.clientId}
                onChange={(e) => setFormData({ ...formData, clientId: e.target.value })}
                required
                disabled={!!selectedSubscription}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #dee2e6',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  boxSizing: 'border-box',
                }}
              >
                <option value="">Sélectionner un client</option>
                {clients.map((client) => (
                  <option key={client.id} value={client.id}>
                    {client.name || client.email || client.identifier}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                Type d'abonnement *
              </label>
              <select
                value={formData.type}
                onChange={(e) => {
                  const type = e.target.value as any;
                  setFormData({
                    ...formData,
                    type,
                    mealsPerWeek: type === 'THREE_DAYS' ? 3 : type === 'FIVE_DAYS' ? 5 : undefined,
                    totalMeals: type === 'THREE_DAYS' ? 12 : type === 'FIVE_DAYS' ? 20 : 30,
                  });
                }}
                required
                disabled={!!selectedSubscription}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #dee2e6',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  boxSizing: 'border-box',
                }}
              >
                <option value="THREE_DAYS">3 jours/semaine</option>
                <option value="FIVE_DAYS">5 jours/semaine</option>
                <option value="MONTHLY">Mensuel</option>
              </select>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                Prix (€) *
              </label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })}
                required
                min="0"
                step="0.01"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #dee2e6',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                Date de début *
              </label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #dee2e6',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                Date de fin (optionnel)
              </label>
              <input
                type="date"
                value={formData.endDate || ''}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value || undefined })}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #dee2e6',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                Nombre total de repas *
              </label>
              <input
                type="number"
                value={formData.totalMeals}
                onChange={(e) => setFormData({ ...formData, totalMeals: parseInt(e.target.value) || 0 })}
                required
                min="1"
                disabled={!!selectedSubscription}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #dee2e6',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={formData.isRecurring}
                  onChange={(e) => setFormData({ ...formData, isRecurring: e.target.checked })}
                />
                <span>Facturation récurrente</span>
              </label>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                type="submit"
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                }}
              >
                {selectedSubscription ? 'Modifier' : 'Créer'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setSelectedSubscription(null);
                }}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  cursor: 'pointer',
                }}
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Liste des abonnements */}
      {subscriptions.length === 0 ? (
        <div style={{
          backgroundColor: 'white',
          padding: '3rem',
          borderRadius: '12px',
          textAlign: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}>
          <p style={{ fontSize: '1.25rem', color: '#6c757d' }}>Aucun abonnement configuré</p>
          <p style={{ color: '#6c757d', marginTop: '0.5rem' }}>
            Créez votre premier abonnement pour vos clients
          </p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gap: '1rem',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(400px, 1fr))',
        }}>
          {subscriptions.map((subscription) => (
            <div
              key={subscription.id}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '1.5rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', fontWeight: '600' }}>
                    {subscription.client?.name || subscription.client?.email || 'Client'}
                  </h3>
                  <div style={{
                    display: 'inline-block',
                    padding: '0.25rem 0.75rem',
                    backgroundColor: '#e7f3ff',
                    color: '#007bff',
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                  }}>
                    {getTypeLabel(subscription.type)}
                  </div>
                </div>
                <div style={{
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

              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#6c757d' }}>Prix:</span>
                  <span style={{ fontWeight: '600' }}>{subscription.price.toFixed(2)} €</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#6c757d' }}>Repas consommés:</span>
                  <span style={{ fontWeight: '600' }}>
                    {subscription.consumedMeals} / {subscription.totalMeals}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#6c757d' }}>Début:</span>
                  <span>{new Date(subscription.startDate).toLocaleDateString('fr-FR')}</span>
                </div>
                {subscription.endDate && (
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#6c757d' }}>Fin:</span>
                    <span>{new Date(subscription.endDate).toLocaleDateString('fr-FR')}</span>
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {subscription.status === 'ACTIVE' && (
                  <button
                    onClick={() => handlePause(subscription.id)}
                    style={{
                      flex: 1,
                      padding: '0.5rem',
                      backgroundColor: '#ffc107',
                      color: '#856404',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                    }}
                  >
                    ⏸️ Mettre en pause
                  </button>
                )}
                {subscription.status === 'PAUSED' && (
                  <button
                    onClick={() => handleResume(subscription.id)}
                    style={{
                      flex: 1,
                      padding: '0.5rem',
                      backgroundColor: '#28a745',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                    }}
                  >
                    ▶️ Reprendre
                  </button>
                )}
                <button
                  onClick={() => handleDelete(subscription.id)}
                  style={{
                    flex: 1,
                    padding: '0.5rem',
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                  }}
                >
                  🗑️ Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
