import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Header */}
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
          flexWrap: 'wrap',
        }}
      >
        <Link to="/" style={{ fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', fontWeight: 'bold', color: 'white', textDecoration: 'none' }}>
          🍽️ KeepFood
        </Link>
        <nav style={{ display: 'flex', gap: 'clamp(0.5rem, 2vw, 2rem)', alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="#features" style={{ color: 'white', textDecoration: 'none', fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>
            Fonctionnalités
          </a>
          <a href="#pricing" style={{ color: 'white', textDecoration: 'none', fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>
            Tarifs
          </a>
          <a href="#benefits" style={{ color: 'white', textDecoration: 'none', fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>
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
      </header>

      {/* Hero Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 3vw, 2rem)',
          textAlign: 'center',
        }}
      >
        {/* Logo au centre */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '2rem',
        }}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            padding: '2rem',
            borderRadius: '20px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            display: 'inline-block',
          }}>
            <img
              src="/images/logo/logo-noir-refloode.png"
              alt="KeepFood Logo"
              style={{
                maxWidth: 'clamp(200px, 30vw, 400px)',
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
              }}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        </div>
        <h1 style={{ fontSize: 'clamp(1.75rem, 6vw, 3.5rem)', marginBottom: '1rem', fontWeight: 'bold', lineHeight: '1.2' }}>
          Digitalisez votre restaurant en quelques minutes
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)', marginBottom: '2rem', opacity: 0.9 }}>
          KeepFood est la solution SaaS complète pour transformer votre restaurant en établissement moderne.
          <br />
          Menu digital, commandes QR, interface cuisine, paiements intégrés, analytics et bien plus encore.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/register"
            style={{
              padding: '1rem 2.5rem',
              backgroundColor: 'white',
              color: '#667eea',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            }}
          >
            Démarrer gratuitement
          </Link>
          <a
            href="#features"
            style={{
              padding: '1rem 2.5rem',
              backgroundColor: 'transparent',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              border: '2px solid white',
            }}
          >
            En savoir plus
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 3vw, 2rem)', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              textAlign: 'center',
              fontSize: '2.5rem',
              marginBottom: '1rem',
              color: '#333',
            }}
          >
            Fonctionnalités principales
          </h2>
          <p
            style={{
              textAlign: 'center',
              fontSize: '1.2rem',
              color: '#666',
              marginBottom: '3rem',
            }}
          >
            Une solution complète pour digitaliser votre restaurant
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              {
                icon: '📱',
                title: 'Menu Digital',
                description:
                  'Menu interactif avec photos, descriptions et allergènes. Accessible via QR code à chaque table.',
              },
              {
                icon: '🛒',
                title: 'Commandes QR',
                description:
                  'Vos clients commandent directement depuis leur smartphone. Plus besoin d\'attendre le serveur.',
              },
              {
                icon: '🍳',
                title: 'Interface Cuisine',
                description:
                  'Affichage en temps réel des commandes sur écran TV. Séparation automatique cuisine/bar.',
              },
              {
                icon: '💳',
                title: 'Paiements Intégrés',
                description:
                  'Paiement en ligne sécurisé via Viva Wallet, Payconiq, Stripe et autres solutions.',
              },
              {
                icon: '📊',
                title: 'Tableau de Bord',
                description:
                  'Statistiques en temps réel : ventes, produits vedettes, performance par période.',
              },
              {
                icon: '🎁',
                title: 'Fidélité & Marketing',
                description:
                  'Programme de fidélité, abonnements midi, campagnes marketing ciblées (Premium).',
              },
            ].map((feature, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'white',
                  padding: '2rem',
                  borderRadius: '12px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                  transition: 'transform 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{feature.icon}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 3vw, 2rem)', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              textAlign: 'center',
              fontSize: '2.5rem',
              marginBottom: '1rem',
              color: '#333',
            }}
          >
            Choisissez votre pack
          </h2>
          <p
            style={{
              textAlign: 'center',
              fontSize: '1.2rem',
              color: '#666',
              marginBottom: '3rem',
            }}
          >
            Des solutions adaptées à tous les types d'établissements
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              {
                name: 'BASIC',
                price: '49',
                period: 'mois',
                description: 'Pour petits établissements ou tests',
                features: [
                  'Fiche restaurant complète',
                  'Gestion du menu',
                  'Menu digital + QR codes',
                  'Commandes sur place',
                  'Interface cuisine/bar',
                  'Interface serveur',
                ],
                color: '#28a745',
                popular: false,
              },
              {
                name: 'STANDARD',
                price: '99',
                period: 'mois',
                description: 'Pour restaurants actifs',
                features: [
                  'Tout le pack BASIC',
                  'Paiements intégrés',
                  'Gestion serveurs avancée',
                  'Commandes à emporter',
                  'Livraison',
                  'Dashboard de base',
                ],
                color: '#007bff',
                popular: true,
              },
              {
                name: 'PREMIUM',
                price: '199',
                period: 'mois',
                description: 'Pour restaurants et chaînes',
                features: [
                  'Tout le pack STANDARD',
                  'Abonnements de midi',
                  'Module de fidélité',
                  'Marketing & campagnes',
                  'Analytics avancés',
                  'Support multi-restaurant',
                ],
                color: '#ffc107',
                popular: false,
              },
            ].map((plan, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: plan.popular ? '#f8f9fa' : 'white',
                  padding: '2.5rem',
                  borderRadius: '12px',
                  boxShadow: plan.popular
                    ? '0 4px 20px rgba(0,123,255,0.3)'
                    : '0 2px 10px rgba(0,0,0,0.1)',
                  border: plan.popular ? '3px solid #007bff' : '1px solid #e0e0e0',
                  position: 'relative',
                  transition: 'transform 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {plan.popular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-15px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: '#007bff',
                      color: 'white',
                      padding: '0.5rem 1.5rem',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontWeight: 'bold',
                    }}
                  >
                    Le plus populaire
                  </div>
                )}
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <h3
                    style={{
                      fontSize: '2rem',
                      marginBottom: '0.5rem',
                      color: plan.color,
                      fontWeight: 'bold',
                    }}
                  >
                    {plan.name}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '3rem', fontWeight: 'bold', color: '#333' }}>
                      {plan.price}€
                    </span>
                    <span style={{ color: '#666' }}>/{plan.period}</span>
                  </div>
                  <p style={{ color: '#666', marginTop: '0.5rem' }}>{plan.description}</p>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      style={{
                        padding: '0.75rem 0',
                        borderBottom: i < plan.features.length - 1 ? '1px solid #eee' : 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      <span style={{ color: plan.color, fontSize: '1.2rem' }}>✓</span>
                      <span style={{ color: '#333' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/create-app"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '1rem',
                    backgroundColor: plan.color,
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                  }}
                >
                  Commencer maintenant
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              textAlign: 'center',
              fontSize: '2.5rem',
              marginBottom: '1rem',
              color: '#333',
            }}
          >
            Comment ça marche ?
          </h2>
          <p
            style={{
              textAlign: 'center',
              fontSize: '1.2rem',
              color: '#666',
              marginBottom: '3rem',
            }}
          >
            En 4 étapes simples, votre restaurant est digitalisé
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              {
                step: '1',
                icon: '📝',
                title: 'Créez votre compte',
                description: 'Inscrivez-vous en quelques minutes avec votre numéro de TVA. Notre système VIES remplit automatiquement vos informations.',
              },
              {
                step: '2',
                icon: '🍽️',
                title: 'Configurez votre restaurant',
                description: 'Ajoutez votre menu, vos produits, vos tables et votre équipe. Personnalisez votre logo et vos informations.',
              },
              {
                step: '3',
                icon: '📱',
                title: 'Générez vos QR codes',
                description: 'Imprimez les QR codes pour chaque table. Vos clients scannent et commandent directement depuis leur smartphone.',
              },
              {
                step: '4',
                icon: '🚀',
                title: 'Lancez votre service',
                description: 'Les commandes arrivent en temps réel dans votre cuisine et sur l\'interface serveur. C\'est parti !',
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#f8f9fa',
                  padding: '2rem',
                  borderRadius: '12px',
                  textAlign: 'center',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                  }}
                >
                  {item.step}
                </div>
                <div style={{ fontSize: '4rem', marginTop: '1rem', marginBottom: '1rem' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 3vw, 2rem)', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              textAlign: 'center',
              fontSize: '2.5rem',
              marginBottom: '1rem',
              color: '#333',
            }}
          >
            Pourquoi choisir KeepFood ?
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              marginTop: '3rem',
            }}
          >
            {[
              {
                icon: '⚡',
                title: 'Mise en place rapide',
                description: 'En quelques minutes, votre restaurant est opérationnel.',
              },
              {
                icon: '💰',
                title: 'Réduction des coûts',
                description: 'Moins d\'erreurs, moins de gaspillage, plus d\'efficacité.',
              },
              {
                icon: '📈',
                title: 'Augmentation des ventes',
                description: 'Commandes plus rapides = plus de clients servis.',
              },
              {
                icon: '😊',
                title: 'Satisfaction client',
                description: 'Expérience moderne et fluide pour vos clients.',
              },
              {
                icon: '🔒',
                title: 'Sécurisé',
                description: 'Données protégées, paiements sécurisés.',
              },
              {
                icon: '📱',
                title: 'Multi-plateforme',
                description: 'Fonctionne sur smartphone, tablette et ordinateur.',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'white',
                  padding: '2rem',
                  borderRadius: '12px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{benefit.icon}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#333' }}>
                  {benefit.title}
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 3vw, 2rem)',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', marginBottom: '1rem' }}>
          Prêt à digitaliser votre restaurant ?
        </h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
          Rejoignez des centaines de restaurants qui font confiance à KeepFood
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
          Essai gratuit
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
              <h4 style={{ marginBottom: '1rem' }}>Produit</h4>
              <ul style={{ listStyle: 'none', padding: 0, color: '#aaa' }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#features" style={{ color: '#aaa', textDecoration: 'none' }}>
                    Fonctionnalités
                  </a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#pricing" style={{ color: '#aaa', textDecoration: 'none' }}>
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
              <h4 style={{ marginBottom: '1rem' }}>Légal</h4>
              <ul style={{ listStyle: 'none', padding: 0, color: '#aaa' }}>
                <li style={{ marginBottom: '0.5rem' }}>CGU</li>
                <li style={{ marginBottom: '0.5rem' }}>Confidentialité</li>
                <li style={{ marginBottom: '0.5rem' }}>Mentions légales</li>
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

