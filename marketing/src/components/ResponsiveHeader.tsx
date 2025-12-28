import { useState } from 'react';
import { Link } from 'react-router-dom';

export function ResponsiveHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        backgroundColor: '#1a1a1a',
        color: 'white',
        padding: '1rem clamp(1rem, 3vw, 2rem)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      }}
    >
      <Link to="/" style={{ fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', fontWeight: 'bold', color: 'white', textDecoration: 'none' }}>
        🍽️ KeepFood
      </Link>
      
      {/* Menu Desktop */}
      <nav style={{ display: window.innerWidth > 768 ? 'flex' : 'none', gap: 'clamp(1rem, 3vw, 2rem)', alignItems: 'center' }}>
        <a href="/#features" style={{ color: 'white', textDecoration: 'none', fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>
          Fonctionnalités
        </a>
        <a href="/#pricing" style={{ color: 'white', textDecoration: 'none', fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>
          Tarifs
        </a>
        <a href="/#benefits" style={{ color: 'white', textDecoration: 'none', fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>
          Avantages
        </a>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>
          À propos
        </Link>
        <Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>
          Contact
        </Link>
        <Link
          to="/create-app"
          style={{
            padding: 'clamp(0.4rem, 1.5vw, 0.5rem) clamp(1rem, 3vw, 1.5rem)',
            backgroundColor: '#007bff',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            fontWeight: 'bold',
            fontSize: 'clamp(0.85rem, 2vw, 1rem)',
          }}
        >
          Essai gratuit
        </Link>
      </nav>

      {/* Menu Mobile Toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: window.innerWidth <= 768 ? 'block' : 'none',
          background: 'none',
          border: 'none',
          color: 'white',
          fontSize: '1.5rem',
          cursor: 'pointer',
          padding: '0.5rem',
        }}
        aria-label="Toggle menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Menu Mobile */}
      {menuOpen && (
        <nav
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: '#1a1a1a',
            display: 'flex',
            flexDirection: 'column',
            padding: '1rem',
            gap: '1rem',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
          }}
        >
          <a href="/#features" onClick={() => setMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem' }}>
            Fonctionnalités
          </a>
          <a href="/#pricing" onClick={() => setMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem' }}>
            Tarifs
          </a>
          <a href="/#benefits" onClick={() => setMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem' }}>
            Avantages
          </a>
          <Link to="/about" onClick={() => setMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem' }}>
            À propos
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem' }}>
            Contact
          </Link>
          <Link
            to="/create-app"
            onClick={() => setMenuOpen(false)}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#007bff',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Essai gratuit
          </Link>
        </nav>
      )}
    </header>
  );
}

