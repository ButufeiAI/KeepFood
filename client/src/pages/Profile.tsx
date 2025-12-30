import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/auth.store';
import { useToast } from '../components/ToastContainer';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { useIsMobile } from '../hooks/useIsMobile';
import api from '../services/api';

interface UserProfile {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  profileImage?: string;
  dietaryPreferences?: string[];
  allergies?: string[];
}

const DIETARY_OPTIONS = [
  'Végétarien',
  'Végétalien',
  'Sans gluten',
  'Halal',
  'Casher',
  'Sans lactose',
  'Pescétarien',
];

const ALLERGY_OPTIONS = [
  'Arachides',
  'Fruits à coque',
  'Lait',
  'Œufs',
  'Poisson',
  'Crustacés',
  'Soja',
  'Gluten',
  'Sésame',
  'Moutarde',
];

export function Profile() {
  const navigate = useNavigate();
  const toast = useToast();
  const isMobile = useIsMobile();
  const { user, isAuthenticated, logout } = useAuthStore();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  // Données du formulaire
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    dietaryPreferences: [] as string[],
    allergies: [] as string[],
  });

  useEffect(() => {
    if (!isAuthenticated) {
      toast.warning('Veuillez vous connecter pour accéder à votre profil');
      navigate('/login');
      return;
    }

    loadProfile();
  }, [isAuthenticated]);

  const loadProfile = async () => {
    try {
      setLoading(true);
      const response = await api.get('/auth/me');
      setProfile(response.data);
      setFormData({
        firstName: response.data.firstName || '',
        lastName: response.data.lastName || '',
        phone: response.data.phone || '',
        dietaryPreferences: response.data.dietaryPreferences || [],
        allergies: response.data.allergies || [],
      });
    } catch (error: any) {
      console.error('Erreur lors du chargement du profil:', error);
      toast.error(error.response?.data?.message || 'Erreur lors du chargement du profil');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      await api.patch('/users/profile', formData);
      toast.success('Profil mis à jour avec succès !');
      setIsEditing(false);
      loadProfile();
    } catch (error: any) {
      console.error('Erreur lors de la mise à jour:', error);
      toast.error(error.response?.data?.message || 'Erreur lors de la mise à jour du profil');
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    if (profile) {
      setFormData({
        firstName: profile.firstName || '',
        lastName: profile.lastName || '',
        phone: profile.phone || '',
        dietaryPreferences: profile.dietaryPreferences || [],
        allergies: profile.allergies || [],
      });
    }
  };

  const toggleDietaryPreference = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      dietaryPreferences: prev.dietaryPreferences.includes(option)
        ? prev.dietaryPreferences.filter((p) => p !== option)
        : [...prev.dietaryPreferences, option],
    }));
  };

  const toggleAllergy = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      allergies: prev.allergies.includes(option)
        ? prev.allergies.filter((a) => a !== option)
        : [...prev.allergies, option],
    }));
  };

  const handleLogout = () => {
    logout();
    toast.success('Déconnexion réussie');
    navigate('/');
  };

  if (loading) {
    return <LoadingSpinner fullscreen message="Chargement du profil..." />;
  }

  if (!profile) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <p>Impossible de charger le profil</p>
        <button onClick={() => navigate('/')} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
          Retour
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: isMobile ? '0.5rem' : '1rem' }}>
      {/* Header */}
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
          flexWrap: isMobile ? 'wrap' : 'nowrap',
          gap: '1rem',
        }}
      >
        <h1 style={{ margin: 0, fontSize: isMobile ? '1.5rem' : '2rem' }}>Mon Profil</h1>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
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
            ← Retour
          </button>
          <button
            onClick={handleLogout}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            Déconnexion
          </button>
        </div>
      </header>

      {/* Photo de profil */}
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: isMobile ? '1rem' : '2rem',
          marginBottom: '1.5rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            width: isMobile ? '100px' : '120px',
            height: isMobile ? '100px' : '120px',
            borderRadius: '50%',
            backgroundColor: '#007bff',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: isMobile ? '2.5rem' : '3rem',
            fontWeight: 'bold',
            margin: '0 auto 1rem',
          }}
        >
          {profile.firstName?.[0]?.toUpperCase() || profile.email[0].toUpperCase()}
        </div>
        <h2 style={{ margin: '0 0 0.5rem 0' }}>
          {profile.firstName} {profile.lastName}
        </h2>
        <p style={{ margin: 0, color: '#666' }}>{profile.email}</p>
      </div>

      {/* Informations personnelles */}
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: isMobile ? '1rem' : '2rem',
          marginBottom: '1.5rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ margin: 0 }}>Informations personnelles</h3>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              ✏️ Modifier
            </button>
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
              Prénom
            </label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              disabled={!isEditing}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem',
                backgroundColor: isEditing ? '#fff' : '#f8f9fa',
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
              Nom
            </label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              disabled={!isEditing}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem',
                backgroundColor: isEditing ? '#fff' : '#f8f9fa',
              }}
            />
          </div>

          <div style={{ gridColumn: isMobile ? 'auto' : '1 / -1' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
              Téléphone
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              disabled={!isEditing}
              placeholder="+32 123 45 67 89"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem',
                backgroundColor: isEditing ? '#fff' : '#f8f9fa',
              }}
            />
          </div>
        </div>

        {isEditing && (
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', justifyContent: 'flex-end' }}>
            <button
              onClick={handleCancel}
              disabled={saving}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: saving ? 'not-allowed' : 'pointer',
                opacity: saving ? 0.6 : 1,
              }}
            >
              Annuler
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: saving ? 'not-allowed' : 'pointer',
                opacity: saving ? 0.6 : 1,
              }}
            >
              {saving ? 'Enregistrement...' : '✓ Enregistrer'}
            </button>
          </div>
        )}
      </div>

      {/* Préférences alimentaires */}
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: isMobile ? '1rem' : '2rem',
          marginBottom: '1.5rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        <h3 style={{ marginTop: 0 }}>Préférences alimentaires</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {DIETARY_OPTIONS.map((option) => (
            <button
              key={option}
              onClick={() => isEditing && toggleDietaryPreference(option)}
              disabled={!isEditing}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: formData.dietaryPreferences.includes(option) ? '#007bff' : '#f8f9fa',
                color: formData.dietaryPreferences.includes(option) ? '#fff' : '#333',
                border: `1px solid ${formData.dietaryPreferences.includes(option) ? '#007bff' : '#ddd'}`,
                borderRadius: '20px',
                cursor: isEditing ? 'pointer' : 'default',
                fontSize: '0.9rem',
                transition: 'all 0.2s',
              }}
            >
              {formData.dietaryPreferences.includes(option) && '✓ '}
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Allergies */}
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: isMobile ? '1rem' : '2rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        <h3 style={{ marginTop: 0 }}>Allergies</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {ALLERGY_OPTIONS.map((option) => (
            <button
              key={option}
              onClick={() => isEditing && toggleAllergy(option)}
              disabled={!isEditing}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: formData.allergies.includes(option) ? '#dc3545' : '#f8f9fa',
                color: formData.allergies.includes(option) ? '#fff' : '#333',
                border: `1px solid ${formData.allergies.includes(option) ? '#dc3545' : '#ddd'}`,
                borderRadius: '20px',
                cursor: isEditing ? 'pointer' : 'default',
                fontSize: '0.9rem',
                transition: 'all 0.2s',
              }}
            >
              {formData.allergies.includes(option) && '⚠️ '}
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

