import { useState, useEffect } from 'react';
import { isOnline, onConnectionChange } from '../utils/pwa';

export function OfflineBanner() {
  const [online, setOnline] = useState(isOnline());
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cleanup = onConnectionChange((isOnline) => {
      setOnline(isOnline);
      if (!isOnline) {
        setShowBanner(true);
      } else {
        // Masquer après 3 secondes quand on revient en ligne
        setTimeout(() => setShowBanner(false), 3000);
      }
    });

    return cleanup;
  }, []);

  if (!showBanner) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: online ? '#28a745' : '#dc3545',
        color: 'white',
        padding: '0.75rem 1rem',
        textAlign: 'center',
        zIndex: 10000,
        fontSize: '0.9rem',
        fontWeight: 'bold',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        animation: 'slideDown 0.3s ease-out',
      }}
    >
      <style>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
      
      {online ? (
        <>
          ✓ Connexion rétablie ! Synchronisation en cours...
        </>
      ) : (
        <>
          ⚠️ Mode hors ligne - Certaines fonctionnalités sont limitées
        </>
      )}
    </div>
  );
}

