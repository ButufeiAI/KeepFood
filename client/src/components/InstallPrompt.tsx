import { useState, useEffect } from 'react';
import { showInstallPrompt, isAppInstalled } from '../utils/pwa';
import { useIsMobile } from '../hooks/useIsMobile';

export function InstallPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Vérifier si l'app est déjà installée
    setIsInstalled(isAppInstalled());

    // Afficher le prompt après 30 secondes si pas installé
    if (!isAppInstalled()) {
      const timer = setTimeout(() => {
        setShowPrompt(true);
      }, 30000); // 30 secondes

      return () => clearTimeout(timer);
    }
  }, []);

  const handleInstall = async () => {
    const accepted = await showInstallPrompt();
    if (accepted) {
      setIsInstalled(true);
      setShowPrompt(false);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    // Ne plus afficher pendant 7 jours
    localStorage.setItem('installPromptDismissed', Date.now().toString());
  };

  useEffect(() => {
    // Vérifier si le prompt a été dismiss récemment
    const dismissed = localStorage.getItem('installPromptDismissed');
    if (dismissed) {
      const dismissedTime = parseInt(dismissed);
      const daysSinceDismissed = (Date.now() - dismissedTime) / (1000 * 60 * 60 * 24);
      if (daysSinceDismissed < 7) {
        setShowPrompt(false);
      }
    }
  }, []);

  if (isInstalled || !showPrompt) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: isMobile ? '1rem' : '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
        padding: isMobile ? '1rem' : '1.5rem',
        maxWidth: isMobile ? 'calc(100% - 2rem)' : '400px',
        width: '100%',
        zIndex: 1000,
        animation: 'slideUp 0.3s ease-out',
      }}
    >
      <style>{`
        @keyframes slideUp {
          from {
            transform: translateX(-50%) translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
          }
        }
      `}</style>

      <div style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            backgroundColor: '#007bff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            flexShrink: 0,
          }}
        >
          📱
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>
            Installer KeepFood
          </h3>
          <p style={{ margin: '0 0 1rem 0', color: '#666', fontSize: '0.9rem' }}>
            Installez l'application pour un accès rapide, des notifications en temps réel et le mode hors ligne !
          </p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={handleInstall}
              style={{
                flex: 1,
                padding: '0.75rem',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '0.9rem',
              }}
            >
              Installer
            </button>
            <button
              onClick={handleDismiss}
              style={{
                padding: '0.75rem 1rem',
                backgroundColor: '#f8f9fa',
                color: '#666',
                border: '1px solid #ddd',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.9rem',
              }}
            >
              Plus tard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

