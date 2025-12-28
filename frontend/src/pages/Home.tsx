export function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
      <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img
          src="/images/logo/WhatsApp Image 2025-12-28 at 14.46.05.jpeg"
          alt="KeepFood Logo"
          style={{
            maxWidth: '150px',
            width: '100%',
            height: 'auto',
            marginBottom: '2rem',
            backgroundColor: 'transparent',
            mixBlendMode: 'normal',
          }}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>
      <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '2rem' }}>
        Plateforme SaaS Restaurants & HoReCa
      </p>
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginTop: '3rem',
        }}
      >
        <div
          style={{
            padding: '2rem',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          }}
        >
          <h3>📱 Menu Digital</h3>
          <p style={{ color: '#666', marginTop: '0.5rem' }}>
            Menu interactif avec QR code
          </p>
        </div>
        <div
          style={{
            padding: '2rem',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          }}
        >
          <h3>🛒 Commandes</h3>
          <p style={{ color: '#666', marginTop: '0.5rem' }}>
            Commandes depuis smartphone
          </p>
        </div>
        <div
          style={{
            padding: '2rem',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          }}
        >
          <h3>🍳 Cuisine</h3>
          <p style={{ color: '#666', marginTop: '0.5rem' }}>
            Affichage temps réel
          </p>
        </div>
      </div>
    </div>
  );
}



