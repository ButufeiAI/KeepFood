import { useState, useEffect } from 'react';
import { useIsMobile } from '../hooks/useIsMobile';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../stores/auth.store';
import { statisticsService, DashboardStats } from '../services/statistics.service';

export function Dashboard() {
  const { user } = useAuthStore();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      setLoading(true);
      const data = await statisticsService.getDashboardStats(user?.restaurantId);
      setStats(data);
    } catch (error) {
      console.error('Erreur lors du chargement des statistiques:', error);
    } finally {
      setLoading(false);
    }
  };

  const menuItems = [
    { path: '/restaurants', label: 'Restaurants', icon: '🏢', description: 'Gérer les restaurants' },
    { path: '/categories', label: 'Catégories', icon: '📂', description: 'Gérer les catégories et sous-catégories' },
    { path: '/products', label: 'Produits', icon: '🍕', description: 'Gérer le menu et produits' },
    { path: '/tables', label: 'Tables', icon: '🪑', description: 'Gérer les tables et QR codes' },
    { path: '/orders', label: 'Commandes', icon: '📋', description: 'Voir et gérer les commandes' },
    { path: '/server', label: 'Service', icon: '👨‍💼', description: 'Interface serveur - Gérer les commandes actives' },
  ];

  if (loading) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Chargement des statistiques...</div>;
  }

  return (
    <div style={{ maxWidth: '100%', overflowX: 'hidden' }}>
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: isMobile ? 'flex-start' : 'space-between',
        alignItems: isMobile ? 'flex-start' : 'center',
        gap: isMobile ? '1rem' : '1.5rem',
        marginBottom: '2rem',
      }}>
        <h1 style={{ fontSize: isMobile ? '1.5rem' : '2rem', margin: 0 }}>Tableau de bord</h1>
        {!isMobile && (
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span style={{ color: '#666' }}>Bonjour, {user?.firstName} {user?.lastName}</span>
            <span
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#007bff',
                color: 'white',
                borderRadius: '4px',
                fontSize: '0.9rem',
              }}
            >
              {user?.role}
            </span>
          </div>
        )}
      </div>

      {stats && (
        <>
          {/* Cartes de statistiques principales */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem',
            }}
          >
            <div
              style={{
                backgroundColor: 'white',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                borderLeft: '4px solid #28a745',
              }}
            >
              <h3 style={{ marginBottom: '0.5rem', color: '#666', fontSize: '0.9rem' }}>
                Revenus totaux
              </h3>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#28a745' }}>
                {stats.revenue.total.toFixed(2)} €
              </p>
              <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.5rem' }}>
                Aujourd'hui: {stats.revenue.today.toFixed(2)} €
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'white',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                borderLeft: '4px solid #007bff',
              }}
            >
              <h3 style={{ marginBottom: '0.5rem', color: '#666', fontSize: '0.9rem' }}>
                Commandes totales
              </h3>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#007bff' }}>
                {stats.orders.total}
              </p>
              <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.5rem' }}>
                Aujourd'hui: {stats.orders.today} | En attente: {stats.orders.pending}
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'white',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                borderLeft: '4px solid #ffc107',
              }}
            >
              <h3 style={{ marginBottom: '0.5rem', color: '#666', fontSize: '0.9rem' }}>
                Produits
              </h3>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ffc107' }}>
                {stats.products.total}
              </p>
              <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.5rem' }}>
                Disponibles: {stats.products.available}
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'white',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                borderLeft: '4px solid #17a2b8',
              }}
            >
              <h3 style={{ marginBottom: '0.5rem', color: '#666', fontSize: '0.9rem' }}>
                Tables
              </h3>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#17a2b8' }}>
                {stats.tables.total}
              </p>
              <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.5rem' }}>
                Disponibles: {stats.tables.available}
              </p>
            </div>
          </div>

          {/* Graphiques et détails */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem',
            }}
          >
            {/* Produits les plus vendus */}
            <div
              style={{
                backgroundColor: 'white',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>
                Produits les plus vendus
              </h2>
              {stats.topProducts.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {stats.topProducts.map((product, index) => (
                    <div
                      key={product.productId}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '0.75rem',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '4px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span
                          style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            backgroundColor: '#007bff',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.75rem',
                            fontWeight: 'bold',
                          }}
                        >
                          {index + 1}
                        </span>
                        <span style={{ fontWeight: '500' }}>{product.name}</span>
                      </div>
                      <span style={{ color: '#666', fontWeight: 'bold' }}>
                        {product.quantity} ventes
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p style={{ color: '#666', textAlign: 'center', padding: '1rem' }}>
                  Aucune donnée disponible
                </p>
              )}
            </div>

            {/* Revenus par jour */}
            <div
              style={{
                backgroundColor: 'white',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>
                Revenus (7 derniers jours)
              </h2>
              {stats.revenueByDay.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {stats.revenueByDay.map((day) => {
                    const maxRevenue = Math.max(
                      ...stats.revenueByDay.map((d) => parseFloat(d.revenue)),
                    );
                    const percentage = (parseFloat(day.revenue) / maxRevenue) * 100;
                    return (
                      <div key={day.date} style={{ marginBottom: '0.5rem' }}>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: '0.25rem',
                            fontSize: '0.85rem',
                          }}
                        >
                          <span>{new Date(day.date).toLocaleDateString('fr-FR')}</span>
                          <span style={{ fontWeight: 'bold' }}>
                            {parseFloat(day.revenue).toFixed(2)} €
                          </span>
                        </div>
                        <div
                          style={{
                            width: '100%',
                            height: '20px',
                            backgroundColor: '#e9ecef',
                            borderRadius: '4px',
                            overflow: 'hidden',
                          }}
                        >
                          <div
                            style={{
                              width: `${percentage}%`,
                              height: '100%',
                              backgroundColor: '#28a745',
                              transition: 'width 0.3s',
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p style={{ color: '#666', textAlign: 'center', padding: '1rem' }}>
                  Aucune donnée disponible
                </p>
              )}
            </div>
          </div>
        </>
      )}


      {/* Menu principal - Toutes les fonctionnalités */}
      <div style={{ marginTop: '3rem' }}>
        <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
          Accès rapide - Toutes les fonctionnalités
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                backgroundColor: 'white',
                padding: '2rem 1.5rem',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                textDecoration: 'none',
                color: 'inherit',
                display: 'block',
                transition: 'all 0.3s ease',
                border: '2px solid transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
                e.currentTarget.style.borderColor = '#007bff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              <div style={{ fontSize: '3.5rem', marginBottom: '1rem', textAlign: 'center' }}>
                {item.icon}
              </div>
              <h3 style={{ marginBottom: '0.75rem', textAlign: 'center', fontSize: '1.25rem', fontWeight: '600' }}>
                {item.label}
              </h3>
              <p style={{ color: '#666', fontSize: '0.9rem', textAlign: 'center', lineHeight: '1.5' }}>
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

