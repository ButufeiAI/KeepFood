import { ReactNode, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/auth.store';
import { authService } from '../services/auth.service';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { user, logout: logoutStore } = useAuthStore();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleLogout = async () => {
    await authService.logout();
    logoutStore();
    navigate('/login');
  };

  const navLinks = user ? (
    <>
      <Link
        to="/dashboard"
        style={{ color: 'white', textDecoration: 'none', padding: '0.5rem' }}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Dashboard
      </Link>
      <Link
        to="/restaurants"
        style={{ color: 'white', textDecoration: 'none', padding: '0.5rem' }}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Restaurants
      </Link>
      <Link
        to="/categories"
        style={{ color: 'white', textDecoration: 'none', padding: '0.5rem' }}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Catégories
      </Link>
      <Link
        to="/products"
        style={{ color: 'white', textDecoration: 'none', padding: '0.5rem' }}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Produits
      </Link>
      <Link
        to="/tables"
        style={{ color: 'white', textDecoration: 'none', padding: '0.5rem' }}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Tables
      </Link>
      <Link
        to="/employees"
        style={{ color: 'white', textDecoration: 'none', padding: '0.5rem' }}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        👥 Employés
      </Link>
      <Link
        to="/table-assignments"
        style={{ color: 'white', textDecoration: 'none', padding: '0.5rem' }}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        📍 Attribution Tables
      </Link>
      <Link
        to="/orders"
        style={{ color: 'white', textDecoration: 'none', padding: '0.5rem' }}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Commandes
      </Link>
      <Link
        to="/server"
        style={{ color: 'white', textDecoration: 'none', padding: '0.5rem' }}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Service
      </Link>
    </>
  ) : (
    <>
      <Link
        to="/login"
        style={{ color: 'white', textDecoration: 'none', padding: '0.5rem' }}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Connexion
      </Link>
      <Link
        to="/register"
        style={{ color: 'white', textDecoration: 'none', padding: '0.5rem' }}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Inscription
      </Link>
    </>
  );

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header
        style={{
          backgroundColor: '#1a1a1a',
          color: 'white',
          padding: isMobile ? '0.75rem 1rem' : '1rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
        }}
      >
        <Link to={user ? '/dashboard' : '/'} style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img
            src="/images/logo/logo-blanc-header.png"
            alt="KeepFood Logo"
            style={{
              height: isMobile ? '78px' : '97.5px',
              width: 'auto',
              objectFit: 'contain',
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </Link>
        {isMobile ? (
          <>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '1.5rem',
                cursor: 'pointer',
                padding: '0.5rem',
              }}
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
            {isMobileMenuOpen && (
              <div
                style={{
                  position: 'fixed',
                  top: '60px',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: '#1a1a1a',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '1rem',
                  gap: '1rem',
                  zIndex: 999,
                  overflowY: 'auto',
                }}
                onClick={(e) => {
                  if (e.target === e.currentTarget) {
                    setIsMobileMenuOpen(false);
                  }
                }}
              >
                {user && (
                  <div style={{ paddingBottom: '1rem', borderBottom: '1px solid #444' }}>
                    <p style={{ margin: '0 0 0.5rem 0', fontSize: '1rem' }}>Bonjour, {user.firstName}</p>
                    <span
                      style={{
                        padding: '0.25rem 0.75rem',
                        backgroundColor: '#007bff',
                        borderRadius: '4px',
                        fontSize: '0.85rem',
                        display: 'inline-block',
                      }}
                    >
                      {user.role}
                    </span>
                  </div>
                )}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {navLinks}
                </div>
                {user && (
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    style={{
                      backgroundColor: '#dc3545',
                      color: 'white',
                      border: 'none',
                      padding: '0.75rem',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      marginTop: 'auto',
                      fontSize: '1rem',
                    }}
                  >
                    Déconnexion
                  </button>
                )}
              </div>
            )}
          </>
        ) : (
          <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            {user && (
              <>
                <span style={{ fontSize: '0.9rem' }}>Bonjour, {user.firstName}</span>
                {navLinks}
                <button
                  onClick={handleLogout}
                  style={{
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                  }}
                >
                  Déconnexion
                </button>
              </>
            )}
            {!user && navLinks}
          </nav>
        )}
      </header>
      <main style={{ flex: 1, padding: isMobile ? '1rem' : '2rem', maxWidth: '100%', overflowX: 'hidden' }}>
        {children}
      </main>
      <footer
        style={{
          backgroundColor: '#f5f5f5',
          padding: isMobile ? '1rem' : '1rem 2rem',
          textAlign: 'center',
          color: '#666',
          fontSize: isMobile ? '0.85rem' : '1rem',
        }}
      >
        <p style={{ margin: 0 }}>© 2024 KeepFood - Plateforme SaaS Restaurants & HoReCa</p>
      </footer>
    </div>
  );
}

