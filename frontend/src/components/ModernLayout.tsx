import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../stores/auth.store';

interface ModernLayoutProps {
  children: React.ReactNode;
}

export const ModernLayout: React.FC<ModernLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuthStore();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Détecter si on est sur mobile/tablette
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setSidebarOpen(false); // Fermer automatiquement sur mobile
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const menuGroups = [
    {
      title: 'MAIN',
      items: [
    { path: '/dashboard', icon: '📊', label: 'Dashboard' },
        { path: '/orders', icon: '📋', label: 'Orders' },
        { path: '/server', icon: '👨‍💼', label: 'Kitchen (KDS)' },
        { path: '/tables', icon: '🪑', label: 'Reservation' },
      ]
    },
    {
      title: 'MENU MANAGEMENT',
      items: [
        { path: '/categories', icon: '📂', label: 'Categories' },
        { path: '/products', icon: '🍽️', label: 'Items' },
        { path: '/promo-codes', icon: '🎟️', label: 'Addons' },
        { path: '/promo-codes', icon: '🎁', label: 'Coupons' },
      ]
    },
    {
      title: 'OPERATIONS',
      items: [
        { path: '/tables', icon: '🪑', label: 'Tables' },
        { path: '/employees', icon: '👥', label: 'Customers' },
        { path: '/payments', icon: '💳', label: 'Invoices' },
        { path: '/payments', icon: '💰', label: 'Payments' },
      ]
    },
    {
      title: 'ADMINISTRATION',
      items: [
        { path: '/employees', icon: '👥', label: 'Users' },
        { path: '/employees', icon: '🔐', label: 'Permissions' },
        { path: '/advanced-stats', icon: '📈', label: 'Reports' },
      ]
    },
    {
      title: 'SETTINGS',
      items: [
        { path: '/restaurants', icon: '🏢', label: 'Store Settings' },
        { path: '/payments', icon: '💳', label: 'Tax' },
        { path: '/payments', icon: '🖨️', label: 'Print' },
        { path: '/payments', icon: '💵', label: 'Payment Types' },
      ]
    }
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isActive = (path: string) => location.pathname === path;

  const getPageTitle = (pathname: string): string => {
    const titles: Record<string, string> = {
      '/dashboard': 'Tableau de bord',
      '/advanced-stats': 'Statistiques Avancées',
      '/restaurants': 'Restaurants',
      '/tables': 'Plan Gestion Tables',
      '/categories': 'Catégories',
      '/products': 'Produits',
      '/orders': 'Commandes',
      '/payments': 'Paiements',
      '/loyalty': 'Fidélité',
      '/subscriptions': 'Abonnements',
      '/promo-codes': 'Codes Promo',
      '/server': 'Service',
      '/employees': 'Employés',
      '/floor-plan-editor': 'Éditeur de Plan',
      '/floor-plan-view': 'Vue Plan de Salle',
      '/zone-assignments': 'Attribution des Zones',
    };
    return titles[pathname] || 'KeepFood Pro';
  };

  // Si pas d'utilisateur connecté, afficher juste les enfants
  if (!user) {
    return <>{children}</>;
  }

  const sidebarWidth = isMobile ? '100%' : (sidebarOpen ? '280px' : '80px');

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      position: 'relative'
    }}>
      {/* Overlay pour mobile quand sidebar ouverte */}
      {isMobile && sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
          }}
        />
      )}

      {/* Sidebar */}
      <aside style={{
        width: sidebarWidth,
        maxWidth: isMobile ? '280px' : 'none',
        backgroundColor: '#212529',
        color: 'white',
        transition: 'all 0.3s',
        display: 'flex',
        flexDirection: 'column',
        position: isMobile ? 'fixed' : 'fixed',
        height: '100vh',
        left: isMobile && !sidebarOpen ? '-100%' : 0,
        top: 0,
        zIndex: 1000,
        boxShadow: '2px 0 8px rgba(0,0,0,0.1)',
        overflowY: 'auto'
      }}>
        {/* Header */}
        <div style={{
          padding: '1rem 1.5rem',
          borderBottom: '1px solid #2a2e33',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#212529',
          minHeight: '70px',
          height: '70px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flex: 1
          }}>
            <div style={{
              width: sidebarOpen ? '120px' : '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'width 0.3s',
              overflow: 'hidden'
          }}>
            <img 
              src="/images/logo/Logo blanc refloode.png" 
              alt="KeepFood Logo" 
              style={{ 
                width: '100%', 
                height: '100%', 
                  objectFit: 'contain',
                  maxWidth: sidebarOpen ? '120px' : '40px'
              }} 
            />
            </div>
            {!sidebarOpen && (
              <div style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: 'white',
                letterSpacing: '0.5px'
              }}>
                KF
              </div>
            )}
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'white',
              fontSize: '1.25rem',
              cursor: 'pointer',
              padding: '0.5rem',
              borderRadius: '6px',
              transition: 'background 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#343a40'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            {sidebarOpen ? '◀' : '▶'}
          </button>
        </div>

        {/* Menu */}
        <nav style={{
          flex: 1,
          padding: '1rem 0',
          overflowY: 'auto'
        }}>
          {menuGroups.map((group, groupIndex) => (
            <div key={groupIndex} style={{ marginBottom: '1.5rem' }}>
              {/* Titre du groupe */}
              {(sidebarOpen || isMobile) && (
                <div style={{
                  padding: '0.5rem 1.5rem',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: '#6c757d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '0.5rem'
                }}>
                  {group.title}
                </div>
              )}
              
              {/* Items du groupe */}
              {group.items.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => isMobile && setSidebarOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '0',
                  textDecoration: 'none',
                  color: active ? 'white' : '#adb5bd',
                  backgroundColor: active ? '#007bff' : 'transparent',
                  transition: 'all 0.2s',
                      fontWeight: active ? '600' : '400',
                      borderLeft: active ? '3px solid #fff' : '3px solid transparent'
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    e.currentTarget.style.backgroundColor = '#343a40';
                    e.currentTarget.style.color = 'white';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#adb5bd';
                  }
                }}
              >
                    <span style={{ fontSize: '1.125rem', width: '20px', textAlign: 'center' }}>{item.icon}</span>
                    {(sidebarOpen || isMobile) && <span style={{ fontSize: '0.875rem' }}>{item.label}</span>}
              </Link>
            );
          })}
            </div>
          ))}
        </nav>

        {/* User Profile */}
        <div style={{
          padding: '1rem',
          borderTop: '1px solid #343a40'
        }}>
          {(sidebarOpen || isMobile) ? (
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '0.75rem'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#007bff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '1.125rem'
                }}>
                  {user.firstName?.charAt(0) || 'U'}
                </div>
                <div style={{ flex: 1, overflow: 'hidden' }}>
                  <p style={{
                    margin: 0,
                    fontWeight: '600',
                    fontSize: '0.875rem',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {user.firstName} {user.lastName}
                  </p>
                  <p style={{
                    margin: 0,
                    fontSize: '0.75rem',
                    color: '#adb5bd',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {user.email}
                  </p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '500',
                  fontSize: '0.875rem',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c82333'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#dc3545'}
              >
                🚪 Déconnexion
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogout}
              style={{
                width: '100%',
                padding: '0.75rem',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1.25rem',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c82333'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#dc3545'}
            >
              🚪
            </button>
          )}
        </div>
      </aside>

      {/* Bouton hamburger pour mobile */}
      {isMobile && !sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          style={{
            position: 'fixed',
            top: '1rem',
            left: '1rem',
            zIndex: 998,
            width: '50px',
            height: '50px',
            borderRadius: '12px',
            backgroundColor: '#212529',
            color: 'white',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          ☰
        </button>
      )}

      {/* Main Content */}
      <main style={{
        flex: 1,
        marginLeft: isMobile ? 0 : (sidebarOpen ? '280px' : '80px'),
        transition: 'margin-left 0.3s',
        minHeight: '100vh',
        width: isMobile ? '100%' : 'auto',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Header moderne */}
        <header style={{
          backgroundColor: 'white',
          borderBottom: '1px solid #e9ecef',
          padding: isMobile ? '0.75rem 1rem' : '1rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          minHeight: isMobile ? '64px' : '70px',
          height: isMobile ? '64px' : '70px',
          flexWrap: 'wrap',
          gap: '0.75rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '0.5rem' : '1rem', flex: 1, minWidth: 0 }}>
            <h2 style={{
              margin: 0,
              fontSize: isMobile ? '1.125rem' : '1.375rem',
              fontWeight: '600',
              color: '#212529',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}>
              {getPageTitle(location.pathname)}
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '0.5rem' : '1rem', flexShrink: 0 }}>
            {/* Recherche rapide */}
            <div style={{ position: 'relative', display: isMobile ? 'none' : 'block' }}>
              <input
                type="text"
                placeholder="Search"
                style={{
                  padding: '0.5rem 1rem 0.5rem 2.5rem',
                  border: '1px solid #dee2e6',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  width: '200px',
                  backgroundColor: '#f8f9fa',
                  transition: 'all 0.2s'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#007bff';
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,123,255,0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#dee2e6';
                  e.currentTarget.style.backgroundColor = '#f8f9fa';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
              <span style={{
                position: 'absolute',
                left: '0.75rem',
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '0.875rem',
                color: '#6c757d'
              }}>
                🔍
              </span>
            </div>
            {/* Notifications */}
            <button style={{
              position: 'relative',
              backgroundColor: 'transparent',
              border: 'none',
              fontSize: '1.25rem',
              cursor: 'pointer',
              padding: '0.5rem',
              borderRadius: '6px',
              transition: 'background 0.2s',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            title="Notifications">
              🔔
              <span style={{
                position: 'absolute',
                top: '6px',
                right: '6px',
                width: '8px',
                height: '8px',
                backgroundColor: '#dc3545',
                borderRadius: '50%',
                border: '2px solid white'
              }}></span>
            </button>
            {/* Avatar utilisateur */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.375rem 0.75rem',
              borderRadius: '8px',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: '600',
                fontSize: '0.875rem',
                flexShrink: 0
              }}>
                {user.firstName?.charAt(0) || 'U'}
              </div>
              {!isMobile && (
                <div style={{ lineHeight: '1.3' }}>
                  <p style={{
                    margin: 0,
                    fontWeight: '600',
                    fontSize: '0.875rem',
                    color: '#212529'
                  }}>
                    {user.firstName} {user.lastName}
                  </p>
                  <p style={{
                    margin: 0,
                    fontSize: '0.75rem',
                    color: '#6c757d'
                  }}>
                    {user.role || 'Administrator'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Contenu de la page */}
        <div style={{ flex: 1, padding: isMobile ? '1rem' : '2rem', backgroundColor: '#f8f9fa' }}>
          {children}
        </div>
      </main>
    </div>
  );
};
