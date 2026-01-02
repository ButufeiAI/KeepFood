import { useState, useEffect } from 'react';
import { marketingService, PromoCode, CreatePromoCodeDto } from '../services/marketing.service';
import { useAuthStore } from '../stores/auth.store';
import { useIsMobile } from '../hooks/useIsMobile';

export function PromoCodes() {
  const { user } = useAuthStore();
  const isMobile = useIsMobile();
  const [promoCodes, setPromoCodes] = useState<PromoCode[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [selectedPromoCode, setSelectedPromoCode] = useState<PromoCode | null>(null);
  const [formData, setFormData] = useState<CreatePromoCodeDto>({
    code: '',
    name: '',
    description: '',
    type: 'PERCENTAGE',
    discountValue: 10,
    isActive: true,
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const data = await marketingService.getPromoCodes(user?.restaurantId || '');
      setPromoCodes(data);
    } catch (error) {
      console.error('Erreur lors du chargement:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (selectedPromoCode) {
        await marketingService.updatePromoCode(selectedPromoCode.id, formData);
      } else {
        await marketingService.createPromoCode(formData);
      }
      setShowForm(false);
      setSelectedPromoCode(null);
      setFormData({
        code: '',
        name: '',
        description: '',
        type: 'PERCENTAGE',
        discountValue: 10,
        isActive: true,
      });
      loadData();
    } catch (error: any) {
      alert(error.response?.data?.message || 'Erreur lors de la sauvegarde');
    }
  };

  const handleEdit = (promoCode: PromoCode) => {
    setSelectedPromoCode(promoCode);
    setFormData({
      code: promoCode.code,
      name: promoCode.name,
      description: promoCode.description || '',
      type: promoCode.type,
      discountValue: promoCode.discountValue,
      minOrderAmount: promoCode.minOrderAmount,
      maxDiscountAmount: promoCode.maxDiscountAmount,
      validFrom: promoCode.validFrom ? new Date(promoCode.validFrom).toISOString().split('T')[0] : undefined,
      validUntil: promoCode.validUntil ? new Date(promoCode.validUntil).toISOString().split('T')[0] : undefined,
      maxUses: promoCode.maxUses,
      maxUsesPerClient: promoCode.maxUsesPerClient,
      isActive: promoCode.isActive,
      applicableProducts: promoCode.applicableProducts,
      applicableCategories: promoCode.applicableCategories,
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce code promo ?')) {
      return;
    }
    try {
      await marketingService.deletePromoCode(id);
      loadData();
    } catch (error: any) {
      alert(error.response?.data?.message || 'Erreur lors de la suppression');
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'PERCENTAGE':
        return '📊 Réduction %';
      case 'FIXED':
        return '💰 Réduction fixe';
      case 'FREE_SHIPPING':
        return '🚚 Livraison gratuite';
      default:
        return type;
    }
  };

  if (loading && promoCodes.length === 0) {
    return (
      <div style={{ padding: isMobile ? '1rem' : '2rem' }}>
        <h1 style={{ marginBottom: '1rem' }}>Codes Promo</h1>
        <p>Chargement...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: isMobile ? '1rem' : '2rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: '600', color: '#212529', margin: 0 }}>
            🎟️ Codes Promo & Promotions
          </h1>
          <button
            onClick={() => {
              setSelectedPromoCode(null);
              setFormData({
                code: '',
                name: '',
                description: '',
                type: 'PERCENTAGE',
                discountValue: 10,
                isActive: true,
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
            ➕ Nouveau Code Promo
          </button>
        </div>
        <p style={{ color: '#6c757d' }}>
          Créez et gérez vos codes promo pour attirer et fidéliser vos clients
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
            {selectedPromoCode ? 'Modifier le code promo' : 'Nouveau code promo'}
          </h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                Code *
              </label>
              <input
                type="text"
                value={formData.code}
                onChange={(e) => setFormData({ ...formData, code: e.target.value.toUpperCase() })}
                required
                disabled={!!selectedPromoCode}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #dee2e6',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  boxSizing: 'border-box',
                }}
                placeholder="Ex: SUMMER2024"
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                Nom *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #dee2e6',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  boxSizing: 'border-box',
                }}
                placeholder="Ex: Promotion été 2024"
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #dee2e6',
                  borderRadius: '8px',
                  minHeight: '100px',
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                  boxSizing: 'border-box',
                }}
                placeholder="Description de la promotion"
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                Type de réduction *
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value as any })}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #dee2e6',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  boxSizing: 'border-box',
                }}
              >
                <option value="PERCENTAGE">📊 Réduction en pourcentage</option>
                <option value="FIXED">💰 Réduction fixe</option>
                <option value="FREE_SHIPPING">🚚 Livraison gratuite</option>
              </select>
            </div>

            {formData.type !== 'FREE_SHIPPING' && (
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  {formData.type === 'PERCENTAGE' ? 'Pourcentage de réduction *' : 'Montant de réduction (€) *'}
                </label>
                <input
                  type="number"
                  value={formData.discountValue}
                  onChange={(e) => setFormData({ ...formData, discountValue: parseFloat(e.target.value) || 0 })}
                  required
                  min="0"
                  max={formData.type === 'PERCENTAGE' ? 100 : undefined}
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
            )}

            {formData.type === 'PERCENTAGE' && (
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Réduction maximum (€) - Optionnel
                </label>
                <input
                  type="number"
                  value={formData.maxDiscountAmount || ''}
                  onChange={(e) => setFormData({ ...formData, maxDiscountAmount: parseFloat(e.target.value) || undefined })}
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
            )}

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                Montant minimum de commande (€) - Optionnel
              </label>
              <input
                type="number"
                value={formData.minOrderAmount || ''}
                onChange={(e) => setFormData({ ...formData, minOrderAmount: parseFloat(e.target.value) || undefined })}
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
                Date de début - Optionnel
              </label>
              <input
                type="date"
                value={formData.validFrom || ''}
                onChange={(e) => setFormData({ ...formData, validFrom: e.target.value || undefined })}
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
                Date de fin - Optionnel
              </label>
              <input
                type="date"
                value={formData.validUntil || ''}
                onChange={(e) => setFormData({ ...formData, validUntil: e.target.value || undefined })}
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
                Nombre maximum d'utilisations - Optionnel
              </label>
              <input
                type="number"
                value={formData.maxUses || ''}
                onChange={(e) => setFormData({ ...formData, maxUses: parseInt(e.target.value) || undefined })}
                min="1"
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
                Utilisations max par client - Optionnel
              </label>
              <input
                type="number"
                value={formData.maxUsesPerClient || ''}
                onChange={(e) => setFormData({ ...formData, maxUsesPerClient: parseInt(e.target.value) || undefined })}
                min="1"
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
                  checked={formData.isActive}
                  onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                />
                <span>Actif</span>
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
                {selectedPromoCode ? 'Modifier' : 'Créer'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setSelectedPromoCode(null);
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

      {/* Liste des codes promo */}
      {promoCodes.length === 0 ? (
        <div style={{
          backgroundColor: 'white',
          padding: '3rem',
          borderRadius: '12px',
          textAlign: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}>
          <p style={{ fontSize: '1.25rem', color: '#6c757d' }}>Aucun code promo configuré</p>
          <p style={{ color: '#6c757d', marginTop: '0.5rem' }}>
            Créez votre premier code promo pour attirer de nouveaux clients
          </p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gap: '1rem',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(350px, 1fr))',
        }}>
          {promoCodes.map((promoCode) => {
            const isExpired = promoCode.validUntil && new Date(promoCode.validUntil) < new Date();
            const isNotStarted = promoCode.validFrom && new Date(promoCode.validFrom) > new Date();
            const isExhausted = promoCode.maxUses && promoCode.usedCount >= promoCode.maxUses;

            return (
              <div
                key={promoCode.id}
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
                      {promoCode.code}
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
                      {getTypeLabel(promoCode.type)}
                    </div>
                  </div>
                  <div style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    backgroundColor: promoCode.isActive && !isExpired && !isNotStarted && !isExhausted ? '#d4edda' : '#f8d7da',
                    color: promoCode.isActive && !isExpired && !isNotStarted && !isExhausted ? '#155724' : '#721c24',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                  }}>
                    {promoCode.isActive && !isExpired && !isNotStarted && !isExhausted ? '✅ Actif' : '❌ Inactif'}
                  </div>
                </div>

                <p style={{ margin: '0 0 1rem 0', color: '#6c757d' }}>{promoCode.name}</p>

                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#6c757d' }}>Réduction:</span>
                    <span style={{ fontWeight: '600', fontSize: '1.1rem', color: '#28a745' }}>
                      {promoCode.type === 'PERCENTAGE' && `${promoCode.discountValue}%`}
                      {promoCode.type === 'FIXED' && `${promoCode.discountValue.toFixed(2)} €`}
                      {promoCode.type === 'FREE_SHIPPING' && 'Livraison gratuite'}
                    </span>
                  </div>
                  {promoCode.minOrderAmount && (
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#6c757d' }}>Min. commande:</span>
                      <span>{promoCode.minOrderAmount.toFixed(2)} €</span>
                    </div>
                  )}
                  {promoCode.maxUses && (
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#6c757d' }}>Utilisations:</span>
                      <span>{promoCode.usedCount} / {promoCode.maxUses}</span>
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    onClick={() => handleEdit(promoCode)}
                    style={{
                      flex: 1,
                      padding: '0.5rem',
                      backgroundColor: '#007bff',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                    }}
                  >
                    ✏️ Modifier
                  </button>
                  <button
                    onClick={() => handleDelete(promoCode.id)}
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
            );
          })}
        </div>
      )}
    </div>
  );
}
