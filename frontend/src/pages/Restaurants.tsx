import { useState, useEffect } from 'react';
import { restaurantsService, CreateRestaurantDto, UpdateRestaurantDto } from '../services/restaurants.service';
import { Restaurant } from '../types';
import { RestaurantCard } from '../components/RestaurantCard';
import { Card } from '../components/Card';
import { useIsMobile } from '../hooks/useIsMobile';
import { statisticsService, ServerPerformance } from '../services/statistics.service';

export function Restaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [serverStats, setServerStats] = useState<ServerPerformance[]>([]);
  const [serverStatsPeriod, setServerStatsPeriod] = useState<'day' | 'week' | 'month'>('day');
  const [loadingServerStats, setLoadingServerStats] = useState(false);
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

  useEffect(() => {
    if (selectedRestaurant && !isEditing) {
      loadServerStats();
    }
  }, [selectedRestaurant, serverStatsPeriod, isEditing]);

  const loadServerStats = async () => {
    if (!selectedRestaurant) return;
    try {
      setLoadingServerStats(true);
      const data = await statisticsService.getServerPerformance(selectedRestaurant.id, serverStatsPeriod);
      setServerStats(data);
    } catch (error) {
      console.error('Erreur lors du chargement des statistiques serveurs:', error);
      setServerStats([]);
    } finally {
      setLoadingServerStats(false);
    }
  };

  const loadRestaurants = async () => {
    try {
      setLoading(true);
      const data = await restaurantsService.getAll();
      console.log('Restaurants chargés:', data); // Debug
      if (data.length > 0) {
        const firstRestaurant = data[0];
        console.log('Premier restaurant complet:', firstRestaurant); // Debug pour voir les champs
        console.log('Nouveaux champs:', {
          employeeCount: firstRestaurant.employeeCount,
          description: firstRestaurant.description,
          activities: firstRestaurant.activities,
          establishmentDate: firstRestaurant.establishmentDate,
          website: firstRestaurant.website,
          socialMedia: firstRestaurant.socialMedia,
          vatNumber: firstRestaurant.vatNumber,
        });
        console.log('Toutes les clés:', Object.keys(firstRestaurant));
      }
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
    console.log('🔍 Restaurant sélectionné (détails):', restaurant);
    console.log('🔍 Champs disponibles:', {
      employeeCount: restaurant.employeeCount,
      description: restaurant.description,
      activities: restaurant.activities,
      establishmentDate: restaurant.establishmentDate,
      website: restaurant.website,
      socialMedia: restaurant.socialMedia,
    });
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
      employeeCount: restaurant.employeeCount,
      description: restaurant.description,
      activities: restaurant.activities,
      establishmentDate: restaurant.establishmentDate,
      website: restaurant.website,
      socialMedia: restaurant.socialMedia,
    });
    setShowDetailsModal(false); // Pas de modal, affichage direct sur la page
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
      employeeCount: restaurant.employeeCount,
      description: restaurant.description,
      activities: restaurant.activities,
      establishmentDate: restaurant.establishmentDate,
      website: restaurant.website,
      socialMedia: restaurant.socialMedia,
    });
    setShowDetailsModal(true); // Ouvrir la modal pour l'édition
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

      {/* Affichage direct de la fiche restaurant si un restaurant est sélectionné */}
      {selectedRestaurant && !isEditing ? (
        <div style={{ marginTop: '2rem' }}>
          {/* Vue détaillée - Style Pappers.be */}
          {/* Header blanc avec carte principale */}
          <div style={{
            backgroundColor: '#ffffff',
            padding: '2rem',
            borderRadius: '12px',
            marginBottom: '2rem',
            position: 'relative',
          }}>
            <div style={{
              backgroundColor: '#f8f9fa',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              border: '1px solid #e9ecef',
              maxWidth: '1000px',
              margin: '0 auto',
            }}>
              {/* Nom de l'entreprise */}
              <h1 style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                color: '#1e293b',
              }}>
                {selectedRestaurant.name}
              </h1>

              {/* Statut et numéro */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem',
                flexWrap: 'wrap',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#16a34a',
                  fontWeight: '600',
                }}>
                  <span style={{ fontSize: '1.2rem' }}>✓</span>
                  <span>Actif</span>
                </div>
                {selectedRestaurant.vatNumber && (
                  <>
                    <span style={{ color: '#64748b' }}>|</span>
                    <span style={{
                      fontFamily: 'monospace',
                      fontSize: '1rem',
                      color: '#475569',
                    }}>
                      {selectedRestaurant.vatNumber}
                    </span>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(selectedRestaurant.vatNumber || '');
                        alert('Numéro copié !');
                      }}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        color: '#64748b',
                        padding: '0.25rem',
                      }}
                      title="Copier"
                    >
                      📋
                    </button>
                  </>
                )}
              </div>

              {/* Informations détaillées */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                gap: '1.5rem',
                marginTop: '1.5rem',
              }}>
                <div>
                  <strong style={{ color: '#64748b', fontSize: '0.875rem', display: 'block', marginBottom: '0.25rem' }}>
                    📍 Adresse
                  </strong>
                  <p style={{ margin: 0, color: '#1e293b', fontSize: '1rem' }}>
                    {selectedRestaurant.address 
                      ? `${selectedRestaurant.address}${selectedRestaurant.city ? `, ${selectedRestaurant.city}` : ''}${selectedRestaurant.zipCode ? ` ${selectedRestaurant.zipCode}` : ''}${selectedRestaurant.country ? `, ${selectedRestaurant.country}` : ''}`
                      : 'Non renseignée'}
                  </p>
                </div>

                <div>
                  <strong style={{ color: '#64748b', fontSize: '0.875rem', display: 'block', marginBottom: '0.25rem' }}>
                    🏢 Activité
                  </strong>
                  <p style={{ margin: 0, color: '#1e293b', fontSize: '1rem' }}>
                    {selectedRestaurant.activities || 'Non renseigné'}
                  </p>
                </div>

                <div>
                  <strong style={{ color: '#64748b', fontSize: '0.875rem', display: 'block', marginBottom: '0.25rem' }}>
                    👥 Effectif
                  </strong>
                  <p style={{ margin: 0, color: '#1e293b', fontSize: '1rem' }}>
                    {selectedRestaurant.employeeCount 
                      ? (selectedRestaurant.employeeCount < 10 
                        ? `Moins de ${selectedRestaurant.employeeCount} salariés`
                        : selectedRestaurant.employeeCount < 20
                        ? `Entre 10 et 19 salariés`
                        : selectedRestaurant.employeeCount < 50
                        ? `Entre 20 et 49 salariés`
                        : `Plus de ${selectedRestaurant.employeeCount} salariés`)
                      : 'Non renseigné'}
                  </p>
                </div>

                <div>
                  <strong style={{ color: '#64748b', fontSize: '0.875rem', display: 'block', marginBottom: '0.25rem' }}>
                    📅 Création
                  </strong>
                  <p style={{ margin: 0, color: '#1e293b', fontSize: '1rem' }}>
                    {selectedRestaurant.establishmentDate 
                      ? new Date(selectedRestaurant.establishmentDate).toLocaleDateString('fr-FR', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric',
                        })
                      : 'Non renseignée'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Grille de 4 cartes */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: '1.5rem',
            marginTop: '2rem',
          }}>
            {/* Les 4 cartes sont déjà définies dans la modal, je vais les réutiliser */}
            {/* Carte 1: Informations juridiques */}
            <div style={{
              backgroundColor: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '1.5rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            onClick={() => setSelectedCard('juridique')}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem',
              }}>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: 'bold',
                  color: '#1e293b',
                  margin: 0,
                }}>
                  Informations juridiques
                </h3>
                <span style={{ fontSize: '0.875rem', color: '#64748b' }}>→</span>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '1rem' }}>
                {selectedRestaurant.name}
              </p>
              <div style={{ display: 'grid', gap: '0.75rem' }}>
                {selectedRestaurant.vatNumber && (
                  <div>
                    <strong style={{ color: '#64748b', fontSize: '0.875rem', display: 'block', marginBottom: '0.25rem' }}>
                      Numéro
                    </strong>
                    <p style={{ margin: 0, color: '#1e293b', fontSize: '0.95rem', fontFamily: 'monospace' }}>
                      {selectedRestaurant.vatNumber}
                    </p>
                  </div>
                )}
                <div>
                  <strong style={{ color: '#64748b', fontSize: '0.875rem', display: 'block', marginBottom: '0.25rem' }}>
                    Numéro de TVA
                  </strong>
                  <p style={{ margin: 0, color: '#1e293b', fontSize: '0.95rem', fontFamily: 'monospace' }}>
                    {selectedRestaurant.vatNumber || 'Non renseigné'}
                  </p>
                </div>
                <div>
                  <strong style={{ color: '#64748b', fontSize: '0.875rem', display: 'block', marginBottom: '0.25rem' }}>
                    Forme juridique
                  </strong>
                  <p style={{ margin: 0, color: '#1e293b', fontSize: '0.95rem' }}>
                    Société à responsabilité limitée
                  </p>
                </div>
                <div>
                  <strong style={{ color: '#64748b', fontSize: '0.875rem', display: 'block', marginBottom: '0.25rem' }}>
                    Situation juridique
                  </strong>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#16a34a', fontSize: '1.2rem' }}>✓</span>
                    <span style={{ color: '#1e293b', fontSize: '0.95rem' }}>
                      {selectedRestaurant.isActive ? 'Situation normale' : 'Inactif'}
                      {selectedRestaurant.establishmentDate && ` depuis le ${new Date(selectedRestaurant.establishmentDate).toLocaleDateString('fr-FR', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                      })}`}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Carte 2: Activité */}
            <div style={{
              backgroundColor: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '1.5rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            onClick={() => setSelectedCard('activite')}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem',
              }}>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: 'bold',
                  color: '#1e293b',
                  margin: 0,
                }}>
                  Activité
                </h3>
                <span style={{ fontSize: '0.875rem', color: '#64748b' }}>→</span>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '1rem' }}>
                {selectedRestaurant.name}
              </p>
              <div style={{ display: 'grid', gap: '0.75rem' }}>
                <div>
                  <strong style={{ color: '#64748b', fontSize: '0.875rem', display: 'block', marginBottom: '0.25rem' }}>
                    Code NACEBEL
                  </strong>
                  <p style={{ margin: 0, color: '#1e293b', fontSize: '0.95rem' }}>
                    {selectedRestaurant.activities ? `${selectedRestaurant.activities} - ${selectedRestaurant.activities}` : 'Non renseigné'}
                  </p>
                </div>
                <div>
                  <strong style={{ color: '#64748b', fontSize: '0.875rem', display: 'block', marginBottom: '0.25rem' }}>
                    Domaines d'activité
                  </strong>
                  <p style={{ margin: 0, color: '#1e293b', fontSize: '0.95rem' }}>
                    {selectedRestaurant.activities || 'Non renseigné'}
                  </p>
                </div>
                <div>
                  <strong style={{ color: '#64748b', fontSize: '0.875rem', display: 'block', marginBottom: '0.25rem' }}>
                    Date de clôture d'exercice comptable
                  </strong>
                  <p style={{ margin: 0, color: '#1e293b', fontSize: '0.95rem' }}>
                    {selectedRestaurant.establishmentDate 
                      ? new Date(selectedRestaurant.establishmentDate).toLocaleDateString('fr-FR', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric',
                        })
                      : 'Non renseignée'}
                  </p>
                </div>
              </div>
            </div>

            {/* Carte 3: Dirigeants et représentants */}
            <div style={{
              backgroundColor: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '1.5rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            onClick={() => setSelectedCard('dirigeants')}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem',
              }}>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: 'bold',
                  color: '#1e293b',
                  margin: 0,
                }}>
                  Dirigeants et représentants
                </h3>
                <span style={{ fontSize: '0.875rem', color: '#64748b' }}>→</span>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '1rem' }}>
                {selectedRestaurant.name}
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem',
              }}>
                <span style={{ fontSize: '0.875rem', color: '#64748b' }}>
                  1 dirigeant ou représentant
                </span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#e9ecef',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                }}>
                  👤
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, color: '#1e293b', fontSize: '0.95rem', fontWeight: '600' }}>
                    Administrateur
                  </p>
                  <p style={{ margin: '0.25rem 0 0 0', color: '#64748b', fontSize: '0.875rem' }}>
                    Qualité: Gérant
                  </p>
                  {selectedRestaurant.establishmentDate && (
                    <p style={{ margin: '0.25rem 0 0 0', color: '#64748b', fontSize: '0.875rem' }}>
                      Depuis le {new Date(selectedRestaurant.establishmentDate).toLocaleDateString('fr-FR', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                      })}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Carte 4: Statistiques des serveurs */}
            <div style={{
              backgroundColor: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '1.5rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem',
              }}>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: 'bold',
                  color: '#1e293b',
                  margin: 0,
                }}>
                  📊 Statistiques des serveurs
                </h3>
                <select
                  value={serverStatsPeriod}
                  onChange={(e) => setServerStatsPeriod(e.target.value as 'day' | 'week' | 'month')}
                  style={{
                    padding: '0.5rem 0.75rem',
                    borderRadius: '6px',
                    border: '1px solid #e2e8f0',
                    fontSize: '0.875rem',
                    backgroundColor: 'white',
                    cursor: 'pointer',
                  }}
                >
                  <option value="day">Jour</option>
                  <option value="week">Semaine</option>
                  <option value="month">Mois</option>
                </select>
              </div>

              {loadingServerStats ? (
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                  <p style={{ color: '#64748b' }}>Chargement...</p>
                </div>
              ) : serverStats.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                  <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
                    Aucune donnée disponible pour cette période
                  </p>
                </div>
              ) : (
                <div>
                  {/* Graphique en barres */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem',
                    }}>
                      {serverStats.map((stat, index) => {
                        const maxRevenue = Math.max(...serverStats.map(s => s.totalRevenue));
                        const percentage = maxRevenue > 0 ? (stat.totalRevenue / maxRevenue) * 100 : 0;
                        return (
                          <div key={stat.serverId} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{
                              flex: '0 0 100px',
                              fontSize: '0.75rem',
                              color: '#64748b',
                              textAlign: 'right',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                            }}>
                              {stat.serverName}
                            </div>
                            <div style={{
                              flex: 1,
                              height: '24px',
                              backgroundColor: '#f1f5f9',
                              borderRadius: '4px',
                              position: 'relative',
                              overflow: 'hidden',
                            }}>
                              <div style={{
                                width: `${percentage}%`,
                                height: '100%',
                                backgroundColor: index === 0 ? '#3b82f6' : index === 1 ? '#10b981' : index === 2 ? '#f59e0b' : '#8b5cf6',
                                borderRadius: '4px',
                                transition: 'width 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                paddingRight: '0.5rem',
                              }}>
                                <span style={{
                                  color: 'white',
                                  fontSize: '0.7rem',
                                  fontWeight: '600',
                                  whiteSpace: 'nowrap',
                                }}>
                                  {stat.totalRevenue.toFixed(2)}€
                                </span>
                              </div>
                            </div>
                            <div style={{
                              flex: '0 0 60px',
                              fontSize: '0.75rem',
                              color: '#64748b',
                              textAlign: 'right',
                            }}>
                              {stat.orderCount} cmd
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Liste détaillée */}
                  <div style={{
                    borderTop: '1px solid #e2e8f0',
                    paddingTop: '1rem',
                    display: 'grid',
                    gap: '0.75rem',
                  }}>
                    {serverStats.slice(0, 3).map((stat, index) => (
                      <div key={stat.serverId} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '0.75rem',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '6px',
                      }}>
                        <div>
                          <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: '600', color: '#1e293b' }}>
                            {stat.serverName}
                          </p>
                          <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.75rem', color: '#64748b' }}>
                            {stat.orderCount} commande{stat.orderCount > 1 ? 's' : ''}
                          </p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: '600', color: '#1e293b' }}>
                            {stat.totalRevenue.toFixed(2)}€
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Boutons d'action */}
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            justifyContent: 'flex-end', 
            marginTop: '2rem',
          }}>
            <button
              onClick={() => {
                setSelectedRestaurant(null);
                setShowDetailsModal(false);
              }}
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
              ← Retour à la liste
            </button>
            <button
              onClick={() => {
                setShowDetailsModal(true);
                setIsEditing(true);
              }}
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
        </div>
      ) : restaurants.length > 0 ? (
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '1.5rem',
        }}>
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              onClick={() => {
                setSelectedRestaurant(restaurant);
                setShowDetailsModal(false);
              }}
              onEdit={() => handleEdit(restaurant)}
            />
          ))}
        </div>
      ) : (
        <Card style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem' }}>
          <p style={{ color: '#666', fontSize: '1.1rem', margin: 0 }}>
            Aucun restaurant pour le moment
          </p>
          <p style={{ color: '#999', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Créez votre premier restaurant pour commencer
          </p>
        </Card>
      )}

      {/* Modal d'édition uniquement */}
      {showDetailsModal && selectedRestaurant && isEditing && (
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
              maxWidth: '1200px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: 0,
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
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#1e293b',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                zIndex: 10,
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
              }}
            >
              ×
            </button>

            {!isEditing ? (
              <>
                {/* Vue détaillée - Style Pappers.be */}
                {/* Header blanc avec carte principale */}
                <div style={{
                  backgroundColor: '#ffffff',
                  padding: '2rem',
                  margin: '-2rem -2rem 2rem -2rem',
                  borderRadius: '12px 12px 0 0',
                  position: 'relative',
                }}>
                  <div style={{
                    backgroundColor: '#f8f9fa',
                    borderRadius: '16px',
                    padding: '2rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    border: '1px solid #e9ecef',
                    maxWidth: '1000px',
                    margin: '0 auto',
                  }}>
                    {/* Nom de l'entreprise */}
                    <h1 style={{
                      fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                      fontWeight: 'bold',
                      marginBottom: '1.5rem',
                      color: '#1e293b',
                    }}>
                      {selectedRestaurant.name}
                    </h1>

                    {/* Statut et numéro */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginBottom: '1.5rem',
                      flexWrap: 'wrap',
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: '#16a34a',
                        fontWeight: '600',
                      }}>
                        <span style={{ fontSize: '1.2rem' }}>✓</span>
                        <span>Actif</span>
                      </div>
                      {selectedRestaurant.vatNumber && (
                        <>
                          <span style={{ color: '#64748b' }}>|</span>
                          <span style={{
                            fontFamily: 'monospace',
                            fontSize: '1rem',
                            color: '#475569',
                          }}>
                            {selectedRestaurant.vatNumber}
                          </span>
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(selectedRestaurant.vatNumber || '');
                              alert('Numéro copié !');
                            }}
                            style={{
                              background: 'none',
                              border: 'none',
                              cursor: 'pointer',
                              fontSize: '1rem',
                              color: '#64748b',
                              padding: '0.25rem',
                            }}
                            title="Copier"
                          >
                            📋
                          </button>
                        </>
                      )}
                    </div>

                    {/* Informations détaillées */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                      gap: '1.5rem',
                      marginTop: '1.5rem',
                    }}>
                      <div>
                        <strong style={{ color: '#64748b', fontSize: '0.875rem', display: 'block', marginBottom: '0.25rem' }}>
                          📍 Adresse
                        </strong>
                        <p style={{ margin: 0, color: '#1e293b', fontSize: '1rem' }}>
                          {selectedRestaurant.address 
                            ? `${selectedRestaurant.address}${selectedRestaurant.city ? `, ${selectedRestaurant.city}` : ''}${selectedRestaurant.zipCode ? ` ${selectedRestaurant.zipCode}` : ''}${selectedRestaurant.country ? `, ${selectedRestaurant.country}` : ''}`
                            : 'Non renseignée'}
                        </p>
                      </div>

                      <div>
                        <strong style={{ color: '#64748b', fontSize: '0.875rem', display: 'block', marginBottom: '0.25rem' }}>
                          🏢 Activité
                        </strong>
                        <p style={{ margin: 0, color: '#1e293b', fontSize: '1rem' }}>
                          {selectedRestaurant.activities || 'Non renseigné'}
                        </p>
                      </div>

                      <div>
                        <strong style={{ color: '#64748b', fontSize: '0.875rem', display: 'block', marginBottom: '0.25rem' }}>
                          👥 Effectif
                        </strong>
                        <p style={{ margin: 0, color: '#1e293b', fontSize: '1rem' }}>
                          {selectedRestaurant.employeeCount 
                            ? (selectedRestaurant.employeeCount < 10 
                              ? `Moins de ${selectedRestaurant.employeeCount} salariés`
                              : selectedRestaurant.employeeCount < 20
                              ? `Entre 10 et 19 salariés`
                              : selectedRestaurant.employeeCount < 50
                              ? `Entre 20 et 49 salariés`
                              : `Plus de ${selectedRestaurant.employeeCount} salariés`)
                            : 'Non renseigné'}
                        </p>
                      </div>

                      <div>
                        <strong style={{ color: '#64748b', fontSize: '0.875rem', display: 'block', marginBottom: '0.25rem' }}>
                          📅 Création
                        </strong>
                        <p style={{ margin: 0, color: '#1e293b', fontSize: '1rem' }}>
                          {selectedRestaurant.establishmentDate 
                            ? new Date(selectedRestaurant.establishmentDate).toLocaleDateString('fr-FR', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric',
                              })
                            : 'Non renseignée'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Grille de 4 cartes */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                  gap: '1.5rem',
                  marginTop: '2rem',
                  padding: '0 2rem',
                }}>
                  {/* Carte 1: Informations juridiques */}
                  <div style={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  onClick={() => setSelectedCard('juridique')}
                  >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '1rem',
                    }}>
                      <h3 style={{
                        fontSize: '1.125rem',
                        fontWeight: 'bold',
                        color: '#1e293b',
                        margin: 0,
                      }}>
                        Informations juridiques
                      </h3>
                      <span style={{ fontSize: '0.875rem', color: '#64748b' }}>→</span>
                    </div>
                    <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '1rem' }}>
                      {selectedRestaurant.name}
                    </p>
                    <div style={{ display: 'grid', gap: '0.75rem' }}>
                      {selectedRestaurant.vatNumber && (
                        <div>
                          <strong style={{ color: '#64748b', fontSize: '0.875rem', display: 'block', marginBottom: '0.25rem' }}>
                            Numéro
                          </strong>
                          <p style={{ margin: 0, color: '#1e293b', fontSize: '0.95rem', fontFamily: 'monospace' }}>
                            {selectedRestaurant.vatNumber}
                          </p>
                        </div>
                      )}
                      <div>
                        <strong style={{ color: '#64748b', fontSize: '0.875rem', display: 'block', marginBottom: '0.25rem' }}>
                          Numéro de TVA
                        </strong>
                        <p style={{ margin: 0, color: '#1e293b', fontSize: '0.95rem', fontFamily: 'monospace' }}>
                          {selectedRestaurant.vatNumber || 'Non renseigné'}
                        </p>
                      </div>
                      <div>
                        <strong style={{ color: '#64748b', fontSize: '0.875rem', display: 'block', marginBottom: '0.25rem' }}>
                          Forme juridique
                        </strong>
                        <p style={{ margin: 0, color: '#1e293b', fontSize: '0.95rem' }}>
                          Société à responsabilité limitée
                        </p>
                      </div>
                      <div>
                        <strong style={{ color: '#64748b', fontSize: '0.875rem', display: 'block', marginBottom: '0.25rem' }}>
                          Situation juridique
                        </strong>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ color: '#16a34a', fontSize: '1.2rem' }}>✓</span>
                          <span style={{ color: '#1e293b', fontSize: '0.95rem' }}>
                            {selectedRestaurant.isActive ? 'Situation normale' : 'Inactif'}
                            {selectedRestaurant.establishmentDate && ` depuis le ${new Date(selectedRestaurant.establishmentDate).toLocaleDateString('fr-FR', {
                              day: '2-digit',
                              month: '2-digit',
                              year: 'numeric',
                            })}`}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Carte 2: Activité */}
                  <div style={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  onClick={() => setSelectedCard('activite')}
                  >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '1rem',
                    }}>
                      <h3 style={{
                        fontSize: '1.125rem',
                        fontWeight: 'bold',
                        color: '#1e293b',
                        margin: 0,
                      }}>
                        Activité
                      </h3>
                      <span style={{ fontSize: '0.875rem', color: '#64748b' }}>→</span>
                    </div>
                    <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '1rem' }}>
                      {selectedRestaurant.name}
                    </p>
                    <div style={{ display: 'grid', gap: '0.75rem' }}>
                      <div>
                        <strong style={{ color: '#64748b', fontSize: '0.875rem', display: 'block', marginBottom: '0.25rem' }}>
                          Code NACEBEL
                        </strong>
                        <p style={{ margin: 0, color: '#1e293b', fontSize: '0.95rem' }}>
                          {selectedRestaurant.activities ? `${selectedRestaurant.activities} - ${selectedRestaurant.activities}` : 'Non renseigné'}
                        </p>
                      </div>
                      <div>
                        <strong style={{ color: '#64748b', fontSize: '0.875rem', display: 'block', marginBottom: '0.25rem' }}>
                          Domaines d'activité
                        </strong>
                        <p style={{ margin: 0, color: '#1e293b', fontSize: '0.95rem' }}>
                          {selectedRestaurant.activities || 'Non renseigné'}
                        </p>
                      </div>
                      <div>
                        <strong style={{ color: '#64748b', fontSize: '0.875rem', display: 'block', marginBottom: '0.25rem' }}>
                          Date de clôture d'exercice comptable
                        </strong>
                        <p style={{ margin: 0, color: '#1e293b', fontSize: '0.95rem' }}>
                          {selectedRestaurant.establishmentDate 
                            ? new Date(selectedRestaurant.establishmentDate).toLocaleDateString('fr-FR', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric',
                              })
                            : 'Non renseignée'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Carte 3: Dirigeants et représentants */}
                  <div style={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  onClick={() => setSelectedCard('dirigeants')}
                  >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '1rem',
                    }}>
                      <h3 style={{
                        fontSize: '1.125rem',
                        fontWeight: 'bold',
                        color: '#1e293b',
                        margin: 0,
                      }}>
                        Dirigeants et représentants
                      </h3>
                      <span style={{ fontSize: '0.875rem', color: '#64748b' }}>→</span>
                    </div>
                    <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '1rem' }}>
                      {selectedRestaurant.name}
                    </p>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '1rem',
                    }}>
                      <span style={{ fontSize: '0.875rem', color: '#64748b' }}>
                        1 dirigeant ou représentant
                      </span>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '1rem',
                      backgroundColor: '#f8f9fa',
                      borderRadius: '8px',
                    }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: '#e9ecef',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                      }}>
                        👤
                      </div>
                      <div style={{ flex: 1 }}>
                        <p style={{ margin: 0, color: '#1e293b', fontSize: '0.95rem', fontWeight: '600' }}>
                          Administrateur
                        </p>
                        <p style={{ margin: '0.25rem 0 0 0', color: '#64748b', fontSize: '0.875rem' }}>
                          Qualité: Gérant
                        </p>
                        {selectedRestaurant.establishmentDate && (
                          <p style={{ margin: '0.25rem 0 0 0', color: '#64748b', fontSize: '0.875rem' }}>
                            Depuis le {new Date(selectedRestaurant.establishmentDate).toLocaleDateString('fr-FR', {
                              day: '2-digit',
                              month: '2-digit',
                              year: 'numeric',
                            })}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Carte 4: Cartographie */}
                  <div style={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    minHeight: '200px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  onClick={() => setSelectedCard('cartographie')}
                  >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '1rem',
                    }}>
                      <h3 style={{
                        fontSize: '1.125rem',
                        fontWeight: 'bold',
                        color: '#1e293b',
                        margin: 0,
                      }}>
                        Cartographie
                      </h3>
                      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.875rem', color: '#64748b', cursor: 'pointer' }} title="Paramètres">⚙️</span>
                        <span style={{ fontSize: '0.875rem', color: '#64748b', cursor: 'pointer' }} title="Plein écran">⛶</span>
                        <span style={{ fontSize: '0.875rem', color: '#64748b' }}>→</span>
                      </div>
                    </div>
                    <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '1rem' }}>
                      {selectedRestaurant.name}
                    </p>
                    {selectedRestaurant.address ? (
                      <div style={{
                        width: '100%',
                        height: '150px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid #e9ecef',
                      }}>
                        <div style={{ textAlign: 'center' }}>
                          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🗺️</div>
                          <p style={{ margin: 0, color: '#64748b', fontSize: '0.875rem' }}>
                            {selectedRestaurant.address}
                            {selectedRestaurant.city && `, ${selectedRestaurant.city}`}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div style={{
                        width: '100%',
                        height: '150px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid #e9ecef',
                      }}>
                        <p style={{ margin: 0, color: '#64748b', fontSize: '0.875rem' }}>
                          Adresse non renseignée
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Boutons d'action */}
                <div style={{ 
                  display: 'flex', 
                  gap: '1rem', 
                  justifyContent: 'flex-end', 
                  marginTop: '2rem',
                  padding: '0 2rem 2rem 2rem',
                }}>
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
                <div style={{ padding: '2rem' }}>
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

                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Nombre de travailleurs</label>
                    <input
                      type="number"
                      min="1"
                      value={editFormData.employeeCount || ''}
                      onChange={(e) => setEditFormData({ ...editFormData, employeeCount: e.target.value ? parseInt(e.target.value) : undefined })}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        fontSize: '1rem',
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Description</label>
                    <textarea
                      value={editFormData.description || ''}
                      onChange={(e) => setEditFormData({ ...editFormData, description: e.target.value })}
                      rows={5}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        fontFamily: 'inherit',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Activités principales</label>
                    <input
                      type="text"
                      value={editFormData.activities || ''}
                      onChange={(e) => setEditFormData({ ...editFormData, activities: e.target.value })}
                      placeholder="Ex: Restauration, Service traiteur, Événements..."
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        fontSize: '1rem',
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Date de création</label>
                      <input
                        type="date"
                        value={editFormData.establishmentDate ? editFormData.establishmentDate.split('T')[0] : ''}
                        onChange={(e) => setEditFormData({ ...editFormData, establishmentDate: e.target.value })}
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
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Site web</label>
                      <input
                        type="url"
                        value={editFormData.website || ''}
                        onChange={(e) => setEditFormData({ ...editFormData, website: e.target.value })}
                        placeholder="https://..."
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
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Réseaux sociaux (JSON)</label>
                    <input
                      type="text"
                      value={editFormData.socialMedia || ''}
                      onChange={(e) => setEditFormData({ ...editFormData, socialMedia: e.target.value })}
                      placeholder='{"facebook": "https://facebook.com/...", "instagram": "https://instagram.com/..."}'
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        fontFamily: 'monospace',
                      }}
                    />
                    <p style={{ marginTop: '0.25rem', fontSize: '0.85rem', color: '#666' }}>
                      Format JSON avec les liens de vos réseaux sociaux
                    </p>
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
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Modal pour les détails d'une carte */}
      {selectedCard && selectedRestaurant && (
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
            zIndex: 1001,
            padding: isMobile ? '1rem' : '2rem',
          }}
          onClick={() => setSelectedCard(null)}
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
              onClick={() => setSelectedCard(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                backgroundColor: 'transparent',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#666',
                width: '40px',
                height: '40px',
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

            {selectedCard === 'juridique' && (
              <div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>
                  Informations juridiques
                </h2>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  {selectedRestaurant.vatNumber && (
                    <div>
                      <strong style={{ color: '#64748b', fontSize: '0.875rem', display: 'block', marginBottom: '0.5rem' }}>
                        Numéro
                      </strong>
                      <p style={{ margin: 0, color: '#1e293b', fontSize: '1rem', fontFamily: 'monospace' }}>
                        {selectedRestaurant.vatNumber}
                      </p>
                    </div>
                  )}
                  <div>
                    <strong style={{ color: '#64748b', fontSize: '0.875rem', display: 'block', marginBottom: '0.5rem' }}>
                      Numéro de TVA
                    </strong>
                    <p style={{ margin: 0, color: '#1e293b', fontSize: '1rem', fontFamily: 'monospace' }}>
                      {selectedRestaurant.vatNumber || 'Non renseigné'}
                    </p>
                  </div>
                  <div>
                    <strong style={{ color: '#64748b', fontSize: '0.875rem', display: 'block', marginBottom: '0.5rem' }}>
                      Forme juridique
                    </strong>
                    <p style={{ margin: 0, color: '#1e293b', fontSize: '1rem' }}>
                      Société à responsabilité limitée
                    </p>
                  </div>
                  <div>
                    <strong style={{ color: '#64748b', fontSize: '0.875rem', display: 'block', marginBottom: '0.5rem' }}>
                      Situation juridique
                    </strong>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: '#16a34a', fontSize: '1.2rem' }}>✓</span>
                      <span style={{ color: '#1e293b', fontSize: '1rem' }}>
                        {selectedRestaurant.isActive ? 'Situation normale' : 'Inactif'}
                        {selectedRestaurant.establishmentDate && ` depuis le ${new Date(selectedRestaurant.establishmentDate).toLocaleDateString('fr-FR', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric',
                        })}`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedCard === 'activite' && (
              <div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>
                  Activité
                </h2>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  <div>
                    <strong style={{ color: '#64748b', fontSize: '0.875rem', display: 'block', marginBottom: '0.5rem' }}>
                      Code NACEBEL
                    </strong>
                    <p style={{ margin: 0, color: '#1e293b', fontSize: '1rem' }}>
                      {selectedRestaurant.activities ? `${selectedRestaurant.activities} - ${selectedRestaurant.activities}` : 'Non renseigné'}
                    </p>
                  </div>
                  <div>
                    <strong style={{ color: '#64748b', fontSize: '0.875rem', display: 'block', marginBottom: '0.5rem' }}>
                      Domaines d'activité
                    </strong>
                    <p style={{ margin: 0, color: '#1e293b', fontSize: '1rem' }}>
                      {selectedRestaurant.activities || 'Non renseigné'}
                    </p>
                  </div>
                  <div>
                    <strong style={{ color: '#64748b', fontSize: '0.875rem', display: 'block', marginBottom: '0.5rem' }}>
                      Description
                    </strong>
                    <p style={{ margin: 0, color: '#1e293b', fontSize: '1rem', lineHeight: '1.6' }}>
                      {selectedRestaurant.description || 'Non renseignée'}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {selectedCard === 'dirigeants' && (
              <div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>
                  Dirigeants et représentants
                </h2>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.5rem',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '12px',
                    border: '1px solid #e9ecef',
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: '#e9ecef',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem',
                    }}>
                      👤
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ margin: 0, color: '#1e293b', fontSize: '1.125rem', fontWeight: '600' }}>
                        Administrateur
                      </p>
                      <p style={{ margin: '0.5rem 0 0 0', color: '#64748b', fontSize: '0.95rem' }}>
                        Qualité: Gérant
                      </p>
                      {selectedRestaurant.establishmentDate && (
                        <p style={{ margin: '0.5rem 0 0 0', color: '#64748b', fontSize: '0.95rem' }}>
                          Depuis le {new Date(selectedRestaurant.establishmentDate).toLocaleDateString('fr-FR', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                          })}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedCard === 'cartographie' && (
              <div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>
                  Cartographie
                </h2>
                {selectedRestaurant.address ? (
                  <div style={{
                    width: '100%',
                    height: '400px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #e9ecef',
                    marginBottom: '1rem',
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🗺️</div>
                      <p style={{ margin: 0, color: '#64748b', fontSize: '1rem', fontWeight: '600' }}>
                        {selectedRestaurant.address}
                        {selectedRestaurant.city && `, ${selectedRestaurant.city}`}
                        {selectedRestaurant.zipCode && ` ${selectedRestaurant.zipCode}`}
                        {selectedRestaurant.country && `, ${selectedRestaurant.country}`}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div style={{
                    width: '100%',
                    height: '400px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #e9ecef',
                  }}>
                    <p style={{ margin: 0, color: '#64748b', fontSize: '1rem' }}>
                      Adresse non renseignée
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}



