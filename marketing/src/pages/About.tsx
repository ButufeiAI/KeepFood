import { Link } from 'react-router-dom';

export function About() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Header */}
      <header
        style={{
          backgroundColor: '#1a1a1a',
          color: 'white',
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        }}
      >
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', textDecoration: 'none' }}>
          🍽️ KeepFood
        </Link>
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Accueil</Link>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>À propos</Link>
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
          <Link
            to="/create-app"
            style={{
              padding: '0.5rem 1.5rem',
              backgroundColor: '#007bff',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
            }}
          >
            Essai gratuit
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '4rem 2rem',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold' }}>
          À propos de KeepFood
        </h1>
        <p style={{ fontSize: '1.3rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto' }}>
          La solution SaaS complète pour digitaliser et moderniser votre restaurant
        </p>
      </section>

      {/* Mission Section */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#333', textAlign: 'center' }}>
            Notre Mission
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>Notre Vision</h3>
              <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1.1rem' }}>
                Révolutionner l'expérience restaurant en proposant une solution digitale complète, 
                accessible et intuitive. Nous croyons que chaque restaurant mérite les outils modernes 
                pour exceller dans son service.
              </p>
            </div>
            <div>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💡</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>Notre Approche</h3>
              <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1.1rem' }}>
                KeepFood combine simplicité et puissance. Notre plateforme permet aux restaurants 
                de toutes tailles de digitaliser leurs opérations sans complexité technique, 
                tout en offrant des fonctionnalités avancées pour les établissements les plus exigeants.
              </p>
            </div>
            <div>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>Notre Engagement</h3>
              <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1.1rem' }}>
                Nous nous engageons à fournir un service de qualité, une innovation continue et 
                un support réactif. Votre succès est notre priorité, et nous travaillons chaque 
                jour pour améliorer votre expérience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section style={{ padding: '5rem 2rem', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: '#333', textAlign: 'center' }}>
            Ce que nous faisons
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {[
              {
                icon: '📱',
                title: 'Digitalisation Complète',
                description: 'Nous transformons votre restaurant en établissement moderne avec des menus digitaux, commandes QR, et interfaces intelligentes pour la cuisine et le service.',
                details: [
                  'Menu digital interactif avec photos et descriptions',
                  'Système de commandes via QR code',
                  'Interface cuisine en temps réel',
                  'Gestion des tables et serveurs',
                ],
              },
              {
                icon: '💳',
                title: 'Paiements Intégrés',
                description: 'Intégration avec les principales solutions de paiement pour offrir à vos clients une expérience de paiement fluide et sécurisée.',
                details: [
                  'Paiement en ligne sécurisé',
                  'Intégration Viva Wallet, Payconiq, Stripe',
                  'Gestion des factures',
                  'Suivi des transactions',
                ],
              },
              {
                icon: '📊',
                title: 'Analytics & Insights',
                description: 'Tableaux de bord complets pour suivre vos performances, identifier les tendances et optimiser vos opérations.',
                details: [
                  'Statistiques en temps réel',
                  'Analyse des ventes et produits',
                  'Rapports de performance',
                  'Prédictions et recommandations',
                ],
              },
              {
                icon: '🎁',
                title: 'Marketing & Fidélité',
                description: 'Outils marketing avancés pour fidéliser vos clients et développer votre activité avec des campagnes ciblées.',
                details: [
                  'Programme de fidélité',
                  'Abonnements midi',
                  'Campagnes marketing',
                  'Notifications push',
                ],
              },
              {
                icon: '🍽️',
                title: 'Gestion Multi-Canaux',
                description: 'Gérez sur place, à emporter et livraison depuis une seule plateforme unifiée.',
                details: [
                  'Commandes sur place',
                  'Commandes à emporter',
                  'Livraison',
                  'Gestion unifiée',
                ],
              },
              {
                icon: '👥',
                title: 'Gestion d\'Équipe',
                description: 'Outil complet pour gérer votre équipe : cuisiniers, serveurs, managers avec des rôles et permissions adaptés.',
                details: [
                  'Gestion des employés',
                  'Rôles et permissions',
                  'Planning et horaires',
                  'Suivi des performances',
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'white',
                  padding: '2.5rem',
                  borderRadius: '12px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{ fontSize: '4rem', marginBottom: '1rem', textAlign: 'center' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333', textAlign: 'center' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '1.5rem', textAlign: 'center' }}>
                  {item.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {item.details.map((detail, i) => (
                    <li
                      key={i}
                      style={{
                        padding: '0.5rem 0',
                        color: '#555',
                        display: 'flex',
                        alignItems: 'start',
                        gap: '0.5rem',
                      }}
                    >
                      <span style={{ color: '#007bff', fontSize: '1.2rem' }}>✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#333', textAlign: 'center' }}>
            Technologie Moderne
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#666', textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}>
            KeepFood est construit avec les dernières technologies pour garantir performance, 
            sécurité et évolutivité.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              textAlign: 'center',
            }}
          >
            {[
              { name: 'React', description: 'Interface moderne et réactive' },
              { name: 'Node.js', description: 'Backend performant et scalable' },
              { name: 'PostgreSQL', description: 'Base de données robuste' },
              { name: 'TypeScript', description: 'Code type-safe et maintenable' },
              { name: 'PWA', description: 'Application progressive web' },
              { name: 'Cloud', description: 'Hébergement sécurisé et fiable' },
            ].map((tech, index) => (
              <div
                key={index}
                style={{
                  padding: '2rem',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem', fontWeight: 'bold', color: '#007bff' }}>
                  {tech.name}
                </div>
                <div style={{ color: '#666', fontSize: '0.9rem' }}>{tech.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: '5rem 2rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Rejoignez l'aventure KeepFood
        </h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
          Découvrez comment KeepFood peut transformer votre restaurant
        </p>
        <Link
          to="/create-app"
          style={{
            display: 'inline-block',
            padding: '1rem 3rem',
            backgroundColor: 'white',
            color: '#667eea',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          }}
        >
          Commencer maintenant
        </Link>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: '#1a1a1a',
          color: 'white',
          padding: '3rem 2rem',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              marginBottom: '2rem',
            }}
          >
            <div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>🍽️ KeepFood</h3>
              <p style={{ color: '#aaa', lineHeight: '1.6' }}>
                La solution SaaS pour digitaliser votre restaurant et améliorer votre service.
              </p>
            </div>
            <div>
              <h4 style={{ marginBottom: '1rem' }}>Navigation</h4>
              <ul style={{ listStyle: 'none', padding: 0, color: '#aaa' }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <Link to="/" style={{ color: '#aaa', textDecoration: 'none' }}>Accueil</Link>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <Link to="/about" style={{ color: '#aaa', textDecoration: 'none' }}>À propos</Link>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <Link to="/contact" style={{ color: '#aaa', textDecoration: 'none' }}>Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '1rem' }}>Produit</h4>
              <ul style={{ listStyle: 'none', padding: 0, color: '#aaa' }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="/#features" style={{ color: '#aaa', textDecoration: 'none' }}>
                    Fonctionnalités
                  </a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="/#pricing" style={{ color: '#aaa', textDecoration: 'none' }}>
                    Tarifs
                  </a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <Link to="/create-app" style={{ color: '#aaa', textDecoration: 'none' }}>
                    Inscription
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '1rem' }}>Support</h4>
              <ul style={{ listStyle: 'none', padding: 0, color: '#aaa' }}>
                <li style={{ marginBottom: '0.5rem' }}>Documentation</li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <Link to="/contact" style={{ color: '#aaa', textDecoration: 'none' }}>Contact</Link>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>FAQ</li>
              </ul>
            </div>
          </div>
          <div
            style={{
              borderTop: '1px solid #333',
              paddingTop: '2rem',
              textAlign: 'center',
              color: '#aaa',
            }}
          >
            <p>© 2024 KeepFood. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

