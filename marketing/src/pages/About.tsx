import { Link } from 'react-router-dom';

export function About() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* Header */}
      <header
        style={{
          backgroundColor: '#1a1a1a',
          color: '#ffffff',
          padding: 'clamp(1rem, 3vw, 2rem)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          boxShadow: '0 2px 20px rgba(0,0,0,0.2)',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <Link to="/" style={{ color: '#ffffff', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img
            src="/images/logo/logo-blanc-header.png"
            alt="KeepFood Logo"
            style={{
              height: 'clamp(60px, 8vw, 97.5px)',
              width: 'auto',
              objectFit: 'contain',
              display: 'block',
            }}
            onError={(e) => {
              console.error('Logo not found');
            }}
          />
        </Link>
        <nav style={{ 
          display: 'flex', 
          gap: 'clamp(0.75rem, 2vw, 2rem)', 
          alignItems: 'center', 
          flexWrap: 'wrap',
          fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
        }}>
          <Link to="/" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '500' }}>Accueil</Link>
          <Link to="/about" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '600' }}>À propos</Link>
          <Link to="/contact" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '500' }}>Contact</Link>
          <Link
            to="/create-app"
            style={{
              padding: 'clamp(0.5rem, 1.5vw, 0.75rem) clamp(1.25rem, 3vw, 2rem)',
              backgroundColor: '#ffffff',
              color: '#1a1a1a',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f0f0f0';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Essai gratuit
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
          color: '#1a1a1a',
          padding: 'clamp(4rem, 8vw, 6rem) clamp(1rem, 4vw, 4rem)',
          textAlign: 'center',
        }}
      >
        <h1 style={{ 
          fontSize: 'clamp(2rem, 6vw, 3.5rem)', 
          marginBottom: 'clamp(1rem, 2.5vw, 1.5rem)', 
          fontWeight: '700',
          letterSpacing: '-0.02em',
        }}>
          À propos de KeepFood
        </h1>
        <p style={{ 
          fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', 
          color: '#666666',
          maxWidth: '800px', 
          margin: '0 auto',
          lineHeight: '1.6',
        }}>
          La solution SaaS complète pour digitaliser et moderniser votre restaurant
        </p>
      </section>

      {/* Mission Section */}
      <section style={{ 
        padding: 'clamp(4rem, 8vw, 6rem) clamp(1rem, 4vw, 4rem)', 
        backgroundColor: '#ffffff' 
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3rem)', 
            marginBottom: 'clamp(2rem, 4vw, 3rem)', 
            color: '#1a1a1a', 
            textAlign: 'center',
            fontWeight: '700',
            letterSpacing: '-0.02em',
          }}>
            Notre Mission
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: 'clamp(2rem, 4vw, 3rem)' 
          }}>
            {[
              {
                icon: '🎯',
                title: 'Notre Vision',
                description: 'Révolutionner l\'expérience restaurant en proposant une solution digitale complète, accessible et intuitive. Nous croyons que chaque restaurant mérite les outils modernes pour exceller dans son service.',
              },
              {
                icon: '💡',
                title: 'Notre Approche',
                description: 'KeepFood combine simplicité et puissance. Notre plateforme permet aux restaurants de toutes tailles de digitaliser leurs opérations sans complexité technique, tout en offrant des fonctionnalités avancées pour les établissements les plus exigeants.',
              },
              {
                icon: '🚀',
                title: 'Notre Engagement',
                description: 'Nous nous engageons à fournir un service de qualité, une innovation continue et un support réactif. Votre succès est notre priorité, et nous travaillons chaque jour pour améliorer votre expérience.',
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#f8f9fa',
                  padding: 'clamp(2rem, 4vw, 2.5rem)',
                  borderRadius: '20px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  border: '1px solid rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
                  e.currentTarget.style.backgroundColor = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
                  e.currentTarget.style.backgroundColor = '#f8f9fa';
                }}
              >
                <div style={{ fontSize: 'clamp(3rem, 6vw, 4rem)', marginBottom: 'clamp(1rem, 2vw, 1.5rem)', lineHeight: '1' }}>
                  {item.icon}
                </div>
                <h3 style={{ 
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', 
                  marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)', 
                  color: '#1a1a1a',
                  fontWeight: '600',
                }}>
                  {item.title}
                </h3>
                <p style={{ 
                  color: '#666666', 
                  lineHeight: '1.8', 
                  fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section style={{ 
        padding: 'clamp(4rem, 8vw, 6rem) clamp(1rem, 4vw, 4rem)', 
        backgroundColor: '#f8f9fa' 
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3rem)', 
            marginBottom: 'clamp(3rem, 6vw, 4rem)', 
            color: '#1a1a1a', 
            textAlign: 'center',
            fontWeight: '700',
            letterSpacing: '-0.02em',
          }}>
            Ce que nous faisons
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: 'clamp(1.5rem, 3vw, 2rem)' 
          }}>
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
                  'Application serveur sur tablette',
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
                  'Paiements multi-modes',
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
                  'Top produits et produits peu vendus',
                  'Répartition des paiements',
                ],
              },
              {
                icon: '🎁',
                title: 'Marketing & Fidélité',
                description: 'Outils marketing avancés pour fidéliser vos clients et développer votre activité avec des campagnes ciblées.',
                details: [
                  'Programme de fidélité avec points',
                  'Récompenses personnalisables',
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
                  'Paiement en ligne obligatoire',
                ],
              },
              {
                icon: '👥',
                title: 'Gestion d\'Équipe & Comptabilité',
                description: 'Outil complet pour gérer votre équipe et votre comptabilité avec des fonctionnalités avancées.',
                details: [
                  'Gestion des employés et rôles',
                  'Pointage et horaires',
                  'Attribution de tables',
                  'Comptabilité intégrée',
                  'Intégration PEPPOL',
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#ffffff',
                  padding: 'clamp(2rem, 4vw, 2.5rem)',
                  borderRadius: '20px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  border: '1px solid rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
                }}
              >
                <div style={{ 
                  fontSize: 'clamp(3rem, 6vw, 4rem)', 
                  marginBottom: 'clamp(1rem, 2vw, 1.5rem)', 
                  textAlign: 'center',
                  lineHeight: '1',
                }}>
                  {item.icon}
                </div>
                <h3 style={{ 
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', 
                  marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)', 
                  color: '#1a1a1a', 
                  textAlign: 'center',
                  fontWeight: '600',
                }}>
                  {item.title}
                </h3>
                <p style={{ 
                  color: '#666666', 
                  lineHeight: '1.8', 
                  marginBottom: 'clamp(1.5rem, 3vw, 2rem)', 
                  textAlign: 'center',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                }}>
                  {item.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {item.details.map((detail, i) => (
                    <li
                      key={i}
                      style={{
                        padding: 'clamp(0.5rem, 1vw, 0.75rem) 0',
                        color: '#555555',
                        display: 'flex',
                        alignItems: 'start',
                        gap: 'clamp(0.75rem, 1.5vw, 1rem)',
                        fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                      }}
                    >
                      <span style={{ color: '#007bff', fontSize: 'clamp(1.125rem, 2vw, 1.25rem)', fontWeight: 'bold', flexShrink: 0 }}>
                        ✓
                      </span>
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
      <section style={{ 
        padding: 'clamp(4rem, 8vw, 6rem) clamp(1rem, 4vw, 4rem)', 
        backgroundColor: '#ffffff' 
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3rem)', 
            marginBottom: 'clamp(1rem, 2.5vw, 1.5rem)', 
            color: '#1a1a1a', 
            textAlign: 'center',
            fontWeight: '700',
            letterSpacing: '-0.02em',
          }}>
            Technologie Moderne
          </h2>
          <p style={{ 
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', 
            color: '#666666', 
            textAlign: 'center', 
            maxWidth: '800px', 
            margin: '0 auto clamp(3rem, 6vw, 4rem)',
            lineHeight: '1.6',
          }}>
            KeepFood est construit avec les dernières technologies pour garantir performance, sécurité et évolutivité.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2rem)',
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
                  padding: 'clamp(1.5rem, 3vw, 2rem)',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '16px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  border: '1px solid rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
                  e.currentTarget.style.backgroundColor = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
                  e.currentTarget.style.backgroundColor = '#f8f9fa';
                }}
              >
                <div style={{ 
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)', 
                  marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)', 
                  fontWeight: '700', 
                  color: '#1a1a1a' 
                }}>
                  {tech.name}
                </div>
                <div style={{ 
                  color: '#666666', 
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                  lineHeight: '1.5',
                }}>
                  {tech.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: 'clamp(4rem, 8vw, 6rem) clamp(1rem, 4vw, 4rem)',
          background: 'linear-gradient(135deg, #1a1a1a 0%, #333333 100%)',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <h2 style={{ 
          fontSize: 'clamp(2rem, 5vw, 3rem)', 
          marginBottom: 'clamp(1rem, 2.5vw, 1.5rem)',
          fontWeight: '700',
          letterSpacing: '-0.02em',
        }}>
          Rejoignez l'aventure KeepFood
        </h2>
        <p style={{ 
          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', 
          marginBottom: 'clamp(2rem, 4vw, 3rem)', 
          opacity: 0.9,
          maxWidth: '700px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          Découvrez comment KeepFood peut transformer votre restaurant
        </p>
        <Link
          to="/create-app"
          style={{
            display: 'inline-block',
            padding: 'clamp(1rem, 2.5vw, 1.25rem) clamp(2.5rem, 5vw, 3.5rem)',
            backgroundColor: '#ffffff',
            color: '#1a1a1a',
            textDecoration: 'none',
            borderRadius: '12px',
            fontWeight: '600',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 25px rgba(0,0,0,0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
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
          padding: 'clamp(3rem, 6vw, 4rem) clamp(1rem, 4vw, 2rem)',
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'clamp(2rem, 4vw, 3rem)',
              marginBottom: 'clamp(2rem, 4vw, 3rem)',
            }}
          >
            <div>
              <h3 style={{ marginBottom: 'clamp(1rem, 2vw, 1.5rem)', fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', fontWeight: '600' }}>
                KeepFood
              </h3>
              <p style={{ color: '#aaaaaa', lineHeight: '1.6', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
                La solution SaaS pour digitaliser votre restaurant et améliorer votre service.
              </p>
            </div>
            <div>
              <h4 style={{ marginBottom: 'clamp(1rem, 2vw, 1.5rem)', fontSize: 'clamp(1rem, 2vw, 1.125rem)', fontWeight: '600' }}>
                Navigation
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, color: '#aaaaaa' }}>
                <li style={{ marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
                  <Link to="/" style={{ color: '#aaaaaa', textDecoration: 'none', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
                    Accueil
                  </Link>
                </li>
                <li style={{ marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
                  <Link to="/about" style={{ color: '#aaaaaa', textDecoration: 'none', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
                    À propos
                  </Link>
                </li>
                <li style={{ marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
                  <Link to="/contact" style={{ color: '#aaaaaa', textDecoration: 'none', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: 'clamp(1rem, 2vw, 1.5rem)', fontSize: 'clamp(1rem, 2vw, 1.125rem)', fontWeight: '600' }}>
                Produit
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, color: '#aaaaaa' }}>
                <li style={{ marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
                  <a href="/#features" style={{ color: '#aaaaaa', textDecoration: 'none', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
                    Fonctionnalités
                  </a>
                </li>
                <li style={{ marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
                  <a href="/#pricing" style={{ color: '#aaaaaa', textDecoration: 'none', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
                    Tarifs
                  </a>
                </li>
                <li style={{ marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
                  <Link to="/create-app" style={{ color: '#aaaaaa', textDecoration: 'none', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
                    Inscription
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: 'clamp(1rem, 2vw, 1.5rem)', fontSize: 'clamp(1rem, 2vw, 1.125rem)', fontWeight: '600' }}>
                Support
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, color: '#aaaaaa' }}>
                <li style={{ marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>Documentation</li>
                <li style={{ marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
                  <Link to="/contact" style={{ color: '#aaaaaa', textDecoration: 'none', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
                    Contact
                  </Link>
                </li>
                <li style={{ marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>FAQ</li>
              </ul>
            </div>
          </div>
          <div
            style={{
              borderTop: '1px solid #333333',
              paddingTop: 'clamp(1.5rem, 3vw, 2rem)',
              textAlign: 'center',
              color: '#aaaaaa',
              fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
            }}
          >
            <p>© 2024 KeepFood. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
