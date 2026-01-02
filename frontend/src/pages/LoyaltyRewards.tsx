import { useState, useEffect } from 'react';
import { loyaltyService, LoyaltyReward, CreateLoyaltyRewardDto } from '../services/loyalty.service';
import { productsService, Product } from '../services/products.service';
import { useAuthStore } from '../stores/auth.store';
import { useIsMobile } from '../hooks/useIsMobile';

export function LoyaltyRewards() {
  const { user } = useAuthStore();
  const isMobile = useIsMobile();
  const [rewards, setRewards] = useState<LoyaltyReward[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [selectedReward, setSelectedReward] = useState<LoyaltyReward | null>(null);
  const [formData, setFormData] = useState<CreateLoyaltyRewardDto>({
    name: '',
    description: '',
    type: 'FREE_PRODUCT',
    pointsRequired: 100,
    isActive: true,
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const [rewardsData, productsData] = await Promise.all([
        loyaltyService.getRewards(user?.restaurantId || ''),
        productsService.getAll(user?.restaurantId),
      ]);
      setRewards(rewardsData);
      setProducts(productsData);
    } catch (error) {
      console.error('Erreur lors du chargement:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (selectedReward) {
        await loyaltyService.updateReward(selectedReward.id, formData);
      } else {
        await loyaltyService.createReward(formData);
      }
      setShowForm(false);
      setSelectedReward(null);
      setFormData({
        name: '',
        description: '',
        type: 'FREE_PRODUCT',
        pointsRequired: 100,
        isActive: true,
      });
      loadData();
    } catch (error: any) {
      alert(error.response?.data?.message || 'Erreur lors de la sauvegarde');
    }
  };

  const handleEdit = (reward: LoyaltyReward) => {
    setSelectedReward(reward);
    setFormData({
      name: reward.name,
      description: reward.description || '',
      type: reward.type,
      pointsRequired: reward.pointsRequired,
      productId: reward.productId,
      discountPercentage: reward.discountPercentage,
      discountAmount: reward.discountAmount,
      maxDiscountAmount: reward.maxDiscountAmount,
      isActive: reward.isActive,
      maxUsesPerClient: reward.maxUsesPerClient,
      validFrom: reward.validFrom,
      validUntil: reward.validUntil,
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette récompense ?')) {
      return;
    }
    try {
      await loyaltyService.deleteReward(id);
      loadData();
    } catch (error: any) {
      alert(error.response?.data?.message || 'Erreur lors de la suppression');
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'FREE_PRODUCT':
        return '🎁 Produit offert';
      case 'PERCENTAGE_DISCOUNT':
        return '📊 Réduction %';
      case 'FIXED_DISCOUNT':
        return '💰 Réduction fixe';
      default:
        return type;
    }
  };

  if (loading && rewards.length === 0) {
    return (
      <div style={{ padding: isMobile ? '1rem' : '2rem' }}>
        <h1 style={{ marginBottom: '1rem' }}>Récompenses de Fidélité</h1>
        <p>Chargement...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: isMobile ? '1rem' : '2rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: '600', color: '#212529', margin: 0 }}>
            ⭐ Récompenses de Fidélité
          </h1>
          <button
            onClick={() => {
              setSelectedReward(null);
              setFormData({
                name: '',
                description: '',
                type: 'FREE_PRODUCT',
                pointsRequired: 100,
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
            ➕ Nouvelle Récompense
          </button>
        </div>
        <p style={{ color: '#6c757d' }}>
          Configurez les récompenses que vos clients peuvent obtenir avec leurs points de fidélité
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
            {selectedReward ? 'Modifier la récompense' : 'Nouvelle récompense'}
          </h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                Nom de la récompense *
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
                placeholder="Ex: Dessert offert"
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
                placeholder="Description de la récompense"
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                Type de récompense *
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
                <option value="FREE_PRODUCT">🎁 Produit offert</option>
                <option value="PERCENTAGE_DISCOUNT">📊 Réduction en pourcentage</option>
                <option value="FIXED_DISCOUNT">💰 Réduction fixe</option>
              </select>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                Points nécessaires *
              </label>
              <input
                type="number"
                value={formData.pointsRequired}
                onChange={(e) => setFormData({ ...formData, pointsRequired: parseInt(e.target.value) || 0 })}
                required
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

            {formData.type === 'FREE_PRODUCT' && (
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Produit offert
                </label>
                <select
                  value={formData.productId || ''}
                  onChange={(e) => setFormData({ ...formData, productId: e.target.value || undefined })}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #dee2e6',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    boxSizing: 'border-box',
                  }}
                >
                  <option value="">Sélectionner un produit</option>
                  {products.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {formData.type === 'PERCENTAGE_DISCOUNT' && (
              <>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                    Pourcentage de réduction *
                  </label>
                  <input
                    type="number"
                    value={formData.discountPercentage || ''}
                    onChange={(e) => setFormData({ ...formData, discountPercentage: parseFloat(e.target.value) || undefined })}
                    min="0"
                    max="100"
                    step="0.1"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #dee2e6',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      boxSizing: 'border-box',
                    }}
                    placeholder="Ex: 10"
                  />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                    Réduction maximum (€) - Optionnel
                  </label>
                  <input
                    type="number"
                    value={formData.maxDiscountAmount || ''}
                    onChange={(e) => setFormData({ ...formData, maxDiscountAmount: parseInt(e.target.value) || undefined })}
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
                    placeholder="Ex: 20"
                  />
                </div>
              </>
            )}

            {formData.type === 'FIXED_DISCOUNT' && (
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Montant de réduction (€) *
                </label>
                <input
                  type="number"
                  value={formData.discountAmount || ''}
                  onChange={(e) => setFormData({ ...formData, discountAmount: parseFloat(e.target.value) || undefined })}
                  min="0"
                  step="0.01"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #dee2e6',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    boxSizing: 'border-box',
                  }}
                  placeholder="Ex: 5.00"
                />
              </div>
            )}

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={formData.isActive}
                  onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                />
                <span>Active</span>
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
                {selectedReward ? 'Modifier' : 'Créer'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setSelectedReward(null);
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

      {/* Liste des récompenses */}
      {rewards.length === 0 ? (
        <div style={{
          backgroundColor: 'white',
          padding: '3rem',
          borderRadius: '12px',
          textAlign: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}>
          <p style={{ fontSize: '1.25rem', color: '#6c757d' }}>Aucune récompense configurée</p>
          <p style={{ color: '#6c757d', marginTop: '0.5rem' }}>
            Créez votre première récompense pour fidéliser vos clients
          </p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gap: '1rem',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(350px, 1fr))',
        }}>
          {rewards.map((reward) => (
            <div
              key={reward.id}
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
                    {reward.name}
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
                    {getTypeLabel(reward.type)}
                  </div>
                </div>
                <div style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  backgroundColor: reward.isActive ? '#d4edda' : '#f8d7da',
                  color: reward.isActive ? '#155724' : '#721c24',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                }}>
                  {reward.isActive ? '✅ Active' : '❌ Inactive'}
                </div>
              </div>

              {reward.description && (
                <p style={{ margin: '0 0 1rem 0', color: '#6c757d' }}>{reward.description}</p>
              )}

              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#6c757d' }}>Points nécessaires:</span>
                  <span style={{ fontWeight: '600', fontSize: '1.1rem', color: '#007bff' }}>
                    {reward.pointsRequired} ⭐
                  </span>
                </div>
                {reward.type === 'PERCENTAGE_DISCOUNT' && reward.discountPercentage && (
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#6c757d' }}>Réduction:</span>
                    <span style={{ fontWeight: '600' }}>{reward.discountPercentage}%</span>
                  </div>
                )}
                {reward.type === 'FIXED_DISCOUNT' && reward.discountAmount && (
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#6c757d' }}>Réduction:</span>
                    <span style={{ fontWeight: '600' }}>{reward.discountAmount.toFixed(2)} €</span>
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={() => handleEdit(reward)}
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
                  onClick={() => handleDelete(reward.id)}
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
