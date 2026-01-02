import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/auth.store';
import { useToast } from '../components/ToastContainer';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { useIsMobile } from '../hooks/useIsMobile';
import api from '../services/api';
import {
  GamificationProfile,
  Badge,
  Challenge,
  BADGES,
  calculateLevel,
  RARITY_COLORS,
} from '../types/gamification';

export function Gamification() {
  const navigate = useNavigate();
  const toast = useToast();
  const isMobile = useIsMobile();
  const { isAuthenticated } = useAuthStore();

  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<GamificationProfile | null>(null);
  const [activeTab, setActiveTab] = useState<'badges' | 'challenges' | 'leaderboard'>('badges');

  useEffect(() => {
    if (!isAuthenticated) {
      toast.warning('Veuillez vous connecter pour accéder à la gamification');
      navigate('/login');
      return;
    }

    loadGamificationData();
  }, [isAuthenticated]);

  const loadGamificationData = async () => {
    try {
      setLoading(true);
      const response = await api.get('/gamification/profile');
      setProfile(response.data);
    } catch (error: any) {
      console.error('Erreur lors du chargement:', error);
      toast.error(error.response?.data?.message || 'Erreur lors du chargement des données');
    } finally {
      setLoading(false);
    }
  };

  const claimChallenge = async (challengeId: string) => {
    try {
      await api.post(`/gamification/challenges/${challengeId}/claim`);
      toast.success('Récompense réclamée ! 🎉');
      loadGamificationData();
    } catch (error: any) {
      console.error('Erreur lors de la réclamation:', error);
      toast.error(error.response?.data?.message || 'Erreur lors de la réclamation');
    }
  };

  if (loading) {
    return <LoadingSpinner fullScreen message="Chargement de votre profil..." />;
  }

  if (!profile) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <p>Impossible de charger le profil</p>
        <button onClick={() => navigate(-1)} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
          Retour
        </button>
      </div>
    );
  }

  const levelInfo = calculateLevel(profile.xp);
  const progressPercentage = ((profile.xp - Math.pow(levelInfo.level - 1, 2) * 100) / (Math.pow(levelInfo.level, 2) * 100 - Math.pow(levelInfo.level - 1, 2) * 100)) * 100;

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: isMobile ? '0.5rem' : '1rem' }}>
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <h1 style={{ margin: 0, fontSize: isMobile ? '1.5rem' : '2rem' }}>🎮 Gamification</h1>
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
      </header>

      {/* Profil et niveau */}
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: isMobile ? '1rem' : '2rem',
          marginBottom: '2rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <div
            style={{
              width: isMobile ? '80px' : '100px',
              height: isMobile ? '80px' : '100px',
              borderRadius: '50%',
              backgroundColor: '#007bff',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: isMobile ? '2rem' : '2.5rem',
              fontWeight: 'bold',
              border: '4px solid #ffc107',
            }}
          >
            {profile.level}
          </div>
          <div style={{ flex: 1, minWidth: '200px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Niveau {profile.level}</span>
              <span style={{ color: '#666' }}>Rang #{profile.rank}</span>
            </div>
            <div
              style={{
                width: '100%',
                height: '24px',
                backgroundColor: '#e9ecef',
                borderRadius: '12px',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <div
                style={{
                  width: `${progressPercentage}%`,
                  height: '100%',
                  backgroundColor: '#28a745',
                  transition: 'width 0.3s ease',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: progressPercentage > 50 ? 'white' : '#333',
                  fontSize: '0.85rem',
                  fontWeight: 'bold',
                }}
              >
                {profile.xp} / {Math.pow(profile.level, 2) * 100} XP
              </div>
            </div>
            <p style={{ margin: '0.5rem 0 0 0', color: '#666', fontSize: '0.9rem' }}>
              {levelInfo.xpToNextLevel} XP jusqu'au niveau {profile.level + 1}
            </p>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
            gap: '1rem',
            marginTop: '2rem',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#007bff' }}>{profile.totalOrders}</div>
            <div style={{ fontSize: '0.85rem', color: '#666' }}>Commandes</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#28a745' }}>{profile.badges.length}</div>
            <div style={{ fontSize: '0.85rem', color: '#666' }}>Badges</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ffc107' }}>
              {profile.completedChallenges.length}
            </div>
            <div style={{ fontSize: '0.85rem', color: '#666' }}>Challenges</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#dc3545' }}>#{profile.rank}</div>
            <div style={{ fontSize: '0.85rem', color: '#666' }}>Classement</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          marginBottom: '2rem',
          overflowX: 'auto',
          padding: '0.5rem 0',
        }}
      >
        <button
          onClick={() => setActiveTab('badges')}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: activeTab === 'badges' ? '#007bff' : '#f8f9fa',
            color: activeTab === 'badges' ? '#fff' : '#333',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: activeTab === 'badges' ? 'bold' : 'normal',
            whiteSpace: 'nowrap',
          }}
        >
          🏅 Badges ({profile.badges.length})
        </button>
        <button
          onClick={() => setActiveTab('challenges')}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: activeTab === 'challenges' ? '#007bff' : '#f8f9fa',
            color: activeTab === 'challenges' ? '#fff' : '#333',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: activeTab === 'challenges' ? 'bold' : 'normal',
            whiteSpace: 'nowrap',
          }}
        >
          🎯 Challenges ({profile.activeChallenges.length})
        </button>
        <button
          onClick={() => setActiveTab('leaderboard')}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: activeTab === 'leaderboard' ? '#007bff' : '#f8f9fa',
            color: activeTab === 'leaderboard' ? '#fff' : '#333',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: activeTab === 'leaderboard' ? 'bold' : 'normal',
            whiteSpace: 'nowrap',
          }}
        >
          🏆 Classement
        </button>
      </div>

      {/* Contenu des tabs */}
      {activeTab === 'badges' && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: '1rem',
          }}
        >
          {BADGES.map((badge, index) => {
            const earned = profile.badges.find((b) => b.name === badge.name);
            const isEarned = !!earned;

            return (
              <div
                key={index}
                style={{
                  backgroundColor: isEarned ? '#fff' : '#f8f9fa',
                  borderRadius: '12px',
                  padding: '1rem',
                  textAlign: 'center',
                  boxShadow: isEarned ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
                  border: `2px solid ${isEarned ? RARITY_COLORS[badge.rarity] : '#e9ecef'}`,
                  opacity: isEarned ? 1 : 0.6,
                  transition: 'transform 0.2s',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => !isMobile && (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => !isMobile && (e.currentTarget.style.transform = 'scale(1)')}
              >
                <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{badge.icon}</div>
                <div style={{ fontWeight: 'bold', marginBottom: '0.25rem', fontSize: '0.9rem' }}>
                  {badge.name}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#666', marginBottom: '0.5rem' }}>
                  {badge.description}
                </div>
                {isEarned && earned?.earnedAt && (
                  <div style={{ fontSize: '0.7rem', color: RARITY_COLORS[badge.rarity], fontWeight: 'bold' }}>
                    ✓ Débloqué le {new Date(earned.earnedAt).toLocaleDateString('fr-FR')}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {activeTab === 'challenges' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {profile.activeChallenges.map((challenge) => {
            const progressPercentage = (challenge.requirement.current / challenge.requirement.target) * 100;

            return (
              <div
                key={challenge.id}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  padding: isMobile ? '1rem' : '1.5rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                }}
              >
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                  <div
                    style={{
                      fontSize: '3rem',
                      flexShrink: 0,
                    }}
                  >
                    {challenge.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                      <div>
                        <h3 style={{ margin: '0 0 0.25rem 0' }}>{challenge.title}</h3>
                        <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>{challenge.description}</p>
                      </div>
                      <span
                        style={{
                          padding: '0.25rem 0.75rem',
                          backgroundColor: challenge.type === 'daily' ? '#007bff' : challenge.type === 'weekly' ? '#28a745' : '#ffc107',
                          color: 'white',
                          borderRadius: '12px',
                          fontSize: '0.75rem',
                          fontWeight: 'bold',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {challenge.type === 'daily' ? 'Quotidien' : challenge.type === 'weekly' ? 'Hebdo' : 'Mensuel'}
                      </span>
                    </div>

                    <div style={{ marginBottom: '0.5rem' }}>
                      <div
                        style={{
                          width: '100%',
                          height: '8px',
                          backgroundColor: '#e9ecef',
                          borderRadius: '4px',
                          overflow: 'hidden',
                        }}
                      >
                        <div
                          style={{
                            width: `${Math.min(progressPercentage, 100)}%`,
                            height: '100%',
                            backgroundColor: challenge.completed ? '#28a745' : '#007bff',
                            transition: 'width 0.3s ease',
                          }}
                        />
                      </div>
                      <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem', color: '#666' }}>
                        {challenge.requirement.current} / {challenge.requirement.target}
                      </p>
                    </div>

                    {challenge.completed && !challenge.claimed && (
                      <button
                        onClick={() => claimChallenge(challenge.id)}
                        style={{
                          padding: '0.5rem 1rem',
                          backgroundColor: '#28a745',
                          color: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          fontWeight: 'bold',
                        }}
                      >
                        🎁 Réclamer la récompense
                      </button>
                    )}

                    {challenge.completed && challenge.claimed && (
                      <span style={{ color: '#28a745', fontWeight: 'bold', fontSize: '0.9rem' }}>
                        ✓ Récompense réclamée
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {profile.activeChallenges.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
              <p style={{ margin: 0, color: '#666' }}>Aucun challenge actif pour le moment</p>
            </div>
          )}
        </div>
      )}

      {activeTab === 'leaderboard' && (
        <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: isMobile ? '1rem' : '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <p style={{ textAlign: 'center', color: '#666' }}>
            Le classement sera disponible prochainement...
          </p>
        </div>
      )}
    </div>
  );
}

