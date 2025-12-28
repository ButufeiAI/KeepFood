import { useState, useEffect } from 'react';
import { restaurantsService, CreateRestaurantDto, UpdateRestaurantDto } from '../services/restaurants.service';
import { Restaurant } from '../types';
import { RestaurantCard } from '../components/RestaurantCard';
import { Card } from '../components/Card';
import { useIsMobile } from '../hooks/useIsMobile';

export function Restaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const isMobile = useIsMobile();
  const [formData, setFormData] = useState<CreateRestaurantDto>({
    name: '',
    plan: 'BASIC',
    onSiteEnabled: true,
  });
  const [editFormData, setEditFormData] = useState<UpdateRestaurantDto>({});

  useEffect(() => {
    loadRestaurants();
  }, []);

  const loadRestaurants = async () => {
    try {
      setLoading(true);
      const data = await restaurantsService.getAll();
      setRestaurants(data);
    } catch (error) {
      console.error('Erreur lors du chargement des restaurants:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await restaurantsService.create(formData);
      setShowForm(false);
      setFormData({ name: '', plan: 'BASIC', onSiteEnabled: true });
      loadRestaurants();
    } catch (error: any) {
      alert(error.response?.data?.message || 'Erreur lors de la création');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce restaurant ?')) {
      return;
    }
    try {
      await restaurantsService.delete(id);
      loadRestaurants();
    } catch (error: any) {
      alert(error.response?.data?.message || 'Erreur lors de la suppression');
    }
  };

  const handleViewDetails = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setEditFormData({
      name: restaurant.name,
      address: restaurant.address,
      city: restaurant.city,
      zipCode: restaurant.zipCode,
      country: restaurant.country,
      phone: restaurant.phone,
      email: restaurant.email,
      plan: restaurant.plan,
      onSiteEnabled: restaurant.onSiteEnabled,
      takeawayEnabled: restaurant.takeawayEnabled,
      deliveryEnabled: restaurant.deliveryEnabled,
      isActive: restaurant.isActive,
    });
    setShowDetailsModal(true);
    setIsEditing(false);
  };

  const handleEdit = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setEditFormData({
      name: restaurant.name,
      address: restaurant.address,
      city: restaurant.city,
      zipCode: restaurant.zipCode,
      country: restaurant.country,
      phone: restaurant.phone,
      email: restaurant.email,
      plan: restaurant.plan,
      onSiteEnabled: restaurant.onSiteEnabled,
      takeawayEnabled: restaurant.takeawayEnabled,
      deliveryEnabled: restaurant.deliveryEnabled,
      isActive: restaurant.isActive,
    });
    setShowDetailsModal(true);
    setIsEditing(true);
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRestaurant) return;

    try {
      await restaurantsService.update(selectedRestaurant.id, editFormData);
      setShowDetailsModal(false);
      setIsEditing(false);
      setSelectedRestaurant(null);
      loadRestaurants();
    } catch (error: any) {
      alert(error.response?.data?.message || 'Erreur lors de la mise à jour');
    }
  };

  if (loading) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Chargement...</div>;
  }

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: isMobile ? 'flex-start' : 'space-between',
        alignItems: isMobile ? 'flex-start' : 'center',
        gap: isMobile ? '1rem' : '0',
        marginBottom: '2rem',
      }}>
        <h1 style={{ fontSize: isMobile ? '1.5rem' : '2rem', margin: 0 }}>Restaurants</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: isMobile ? '0.9rem' : '1rem',
            fontWeight: '600',
            boxShadow: '0 2px 4px rgba(0,123,255,0.2)',
          }}
        >
          {showForm ? 'Annuler' : '+ Nouveau restaurant'}
        </button>
      </div>

      {showForm && (
        <Card style={{ marginBottom: '2rem' }}>
          <form onSubmit={handleSubmit}>
            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>Nouveau restaurant</h2>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Nom *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Plan</label>
              <select
                value={formData.plan}
                onChange={(e) => setFormData({ ...formData, plan: e.target.value as any })}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                }}
              >
                <option value="BASIC">BASIC</option>
                <option value="STANDARD">STANDARD</option>
                <option value="PREMIUM">PREMIUM</option>
              </select>
            </div>
          </div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input
                  type="checkbox"
                  checked={formData.onSiteEnabled}
                  onChange={(e) => setFormData({ ...formData, onSiteEnabled: e.target.checked })}
                />
                Sur place
              </label>
            </div>
            <div>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input
                  type="checkbox"
                  checked={formData.takeawayEnabled}
                  onChange={(e) => setFormData({ ...formData, takeawayEnabled: e.target.checked })}
                />
                À emporter
              </label>
            </div>
            <div>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input
                  type="checkbox"
                  checked={formData.deliveryEnabled}
                  onChange={(e) => setFormData({ ...formData, deliveryEnabled: e.target.checked })}
                />
                Livraison
              </label>
            </div>
          </div>
            <button
              type="submit"
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600',
                boxShadow: '0 2px 4px rgba(40,167,69,0.2)',
              }}
            >
              Créer
            </button>
          </form>
        </Card>
      )}

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '1.5rem',
      }}>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            onClick={() => handleViewDetails(restaurant)}
            onEdit={() => handleEdit(restaurant)}
          />
        ))}
        {restaurants.length === 0 && (
          <Card style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem' }}>
            <p style={{ color: '#666', fontSize: '1.1rem', margin: 0 }}>
              Aucun restaurant pour le moment
            </p>
            <p style={{ color: '#999', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              Créez votre premier restaurant pour commencer
            </p>
          </Card>
        )}
      </div>

      {/* Modal de détails/édition */}
      {showDetailsModal && selectedRestaurant && (
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
            padding: isMobile ? '1rem' : '2rem',
          }}
          onClick={() => {
            setShowDetailsModal(false);
            setIsEditing(false);
            setSelectedRestaurant(null);
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '2rem',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setShowDetailsModal(false);
                setIsEditing(false);
                setSelectedRestaurant(null);
              }}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                backgroundColor: 'transparent',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#666',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f0f0f0';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              ×
            </button>

            {!isEditing ? (
              <>
                {/* Vue détaillée */}
                <div style={{ marginBottom: '2rem' }}>
                  {selectedRestaurant.logo && (
                    <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                      <img
                        src={selectedRestaurant.logo}
                        alt={selectedRestaurant.name}
                        style={{
                          maxWidth: '150px',
                          maxHeight: '150px',
                          borderRadius: '12px',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        }}
                      />
                    </div>
                  )}
                  <h2 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>
                    {selectedRestaurant.name}
                  </h2>

                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {selectedRestaurant.address && (
                      <div>
                        <strong style={{ color: '#666', fontSize: '0.9rem' }}>📍 Adresse</strong>
                        <p style={{ margin: '0.25rem 0 0 0', fontSize: '1rem' }}>
                          {selectedRestaurant.address}
                          {selectedRestaurant.city && `, ${selectedRestaurant.city}`}
                          {selectedRestaurant.zipCode && ` ${selectedRestaurant.zipCode}`}
                          {selectedRestaurant.country && `, ${selectedRestaurant.country}`}
                        </p>
                      </div>
                    )}

                    {selectedRestaurant.phone && (
                      <div>
                        <strong style={{ color: '#666', fontSize: '0.9rem' }}>📞 Téléphone</strong>
                        <p style={{ margin: '0.25rem 0 0 0', fontSize: '1rem' }}>{selectedRestaurant.phone}</p>
                      </div>
                    )}

                    {selectedRestaurant.email && (
                      <div>
                        <strong style={{ color: '#666', fontSize: '0.9rem' }}>✉️ Email</strong>
                        <p style={{ margin: '0.25rem 0 0 0', fontSize: '1rem' }}>{selectedRestaurant.email}</p>
                      </div>
                    )}

                    <div>
                      <strong style={{ color: '#666', fontSize: '0.9rem' }}>📦 Plan</strong>
                      <p style={{ margin: '0.25rem 0 0 0', fontSize: '1rem', fontWeight: '600' }}>
                        {selectedRestaurant.plan}
                      </p>
                    </div>

                    <div>
                      <strong style={{ color: '#666', fontSize: '0.9rem' }}>✅ Statut</strong>
                      <p style={{ margin: '0.25rem 0 0 0', fontSize: '1rem' }}>
                        {selectedRestaurant.isActive ? 'Actif' : 'Inactif'}
                      </p>
                    </div>

                    <div>
                      <strong style={{ color: '#666', fontSize: '0.9rem' }}>🌐 Canaux activés</strong>
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                        {selectedRestaurant.onSiteEnabled && (
                          <span style={{
                            padding: '0.5rem 1rem',
                            borderRadius: '8px',
                            backgroundColor: '#e7f3ff',
                            color: '#0056b3',
                            fontSize: '0.9rem',
                          }}>🍽️ Sur place</span>
                        )}
                        {selectedRestaurant.takeawayEnabled && (
                          <span style={{
                            padding: '0.5rem 1rem',
                            borderRadius: '8px',
                            backgroundColor: '#fff5e6',
                            color: '#cc6600',
                            fontSize: '0.9rem',
                          }}>📦 À emporter</span>
                        )}
                        {selectedRestaurant.deliveryEnabled && (
                          <span style={{
                            padding: '0.5rem 1rem',
                            borderRadius: '8px',
                            backgroundColor: '#ffe6f0',
                            color: '#cc0066',
                            fontSize: '0.9rem',
                          }}>🚚 Livraison</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                  <button
                    onClick={() => setIsEditing(true)}
                    style={{
                      padding: '0.75rem 1.5rem',
                      backgroundColor: '#007bff',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      fontWeight: '600',
                    }}
                  >
                    ✏️ Modifier
                  </button>
                  <button
                    onClick={() => handleDelete(selectedRestaurant.id)}
                    style={{
                      padding: '0.75rem 1.5rem',
                      backgroundColor: '#dc3545',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      fontWeight: '600',
                    }}
                  >
                    🗑️ Supprimer
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Formulaire d'édition */}
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>
                  Modifier le restaurant
                </h2>
                <form onSubmit={handleUpdate}>
                  <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Nom *</label>
                      <input
                        type="text"
                        value={editFormData.name || ''}
                        onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                        required
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '1px solid #ddd',
                          borderRadius: '8px',
                          fontSize: '1rem',
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Plan</label>
                      <select
                        value={editFormData.plan || 'BASIC'}
                        onChange={(e) => setEditFormData({ ...editFormData, plan: e.target.value as any })}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '1px solid #ddd',
                          borderRadius: '8px',
                          fontSize: '1rem',
                        }}
                      >
                        <option value="BASIC">BASIC</option>
                        <option value="STANDARD">STANDARD</option>
                        <option value="PREMIUM">PREMIUM</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Adresse</label>
                    <input
                      type="text"
                      value={editFormData.address || ''}
                      onChange={(e) => setEditFormData({ ...editFormData, address: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        marginBottom: '0.5rem',
                      }}
                    />
                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr', gap: '0.5rem' }}>
                      <input
                        type="text"
                        placeholder="Ville"
                        value={editFormData.city || ''}
                        onChange={(e) => setEditFormData({ ...editFormData, city: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '1px solid #ddd',
                          borderRadius: '8px',
                          fontSize: '1rem',
                        }}
                      />
                      <input
                        type="text"
                        placeholder="Code postal"
                        value={editFormData.zipCode || ''}
                        onChange={(e) => setEditFormData({ ...editFormData, zipCode: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '1px solid #ddd',
                          borderRadius: '8px',
                          fontSize: '1rem',
                        }}
                      />
                      <input
                        type="text"
                        placeholder="Pays"
                        value={editFormData.country || ''}
                        onChange={(e) => setEditFormData({ ...editFormData, country: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '1px solid #ddd',
                          borderRadius: '8px',
                          fontSize: '1rem',
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Téléphone</label>
                      <input
                        type="tel"
                        value={editFormData.phone || ''}
                        onChange={(e) => setEditFormData({ ...editFormData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '1px solid #ddd',
                          borderRadius: '8px',
                          fontSize: '1rem',
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Email</label>
                      <input
                        type="email"
                        value={editFormData.email || ''}
                        onChange={(e) => setEditFormData({ ...editFormData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '1px solid #ddd',
                          borderRadius: '8px',
                          fontSize: '1rem',
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Canaux activés</label>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                        <input
                          type="checkbox"
                          checked={editFormData.onSiteEnabled || false}
                          onChange={(e) => setEditFormData({ ...editFormData, onSiteEnabled: e.target.checked })}
                        />
                        🍽️ Sur place
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                        <input
                          type="checkbox"
                          checked={editFormData.takeawayEnabled || false}
                          onChange={(e) => setEditFormData({ ...editFormData, takeawayEnabled: e.target.checked })}
                        />
                        📦 À emporter
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                        <input
                          type="checkbox"
                          checked={editFormData.deliveryEnabled || false}
                          onChange={(e) => setEditFormData({ ...editFormData, deliveryEnabled: e.target.checked })}
                        />
                        🚚 Livraison
                      </label>
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={editFormData.isActive !== false}
                        onChange={(e) => setEditFormData({ ...editFormData, isActive: e.target.checked })}
                      />
                      <strong>Actif</strong>
                    </label>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      style={{
                        padding: '0.75rem 1.5rem',
                        backgroundColor: '#6c757d',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        fontWeight: '600',
                      }}
                    >
                      Annuler
                    </button>
                    <button
                      type="submit"
                      style={{
                        padding: '0.75rem 1.5rem',
                        backgroundColor: '#28a745',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        fontWeight: '600',
                      }}
                    >
                      💾 Enregistrer
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}



