import { Link } from 'react-router-dom';

export function Home() {
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
          <a href="#features" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '500' }}>
            Fonctionnalités
          </a>
          <a href="#pricing" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '500' }}>
            Tarifs
          </a>
          <Link to="/about" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '500' }}>
            À propos
          </Link>
          <Link to="/contact" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '500' }}>
            Contact
          </Link>
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
          padding: 'clamp(4rem, 10vw, 8rem) clamp(1rem, 4vw, 4rem)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Logo au centre */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 'clamp(2rem, 5vw, 3rem)',
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            padding: 'clamp(1.5rem, 4vw, 3rem)',
            borderRadius: '24px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
            display: 'inline-block',
            border: '1px solid rgba(0,0,0,0.05)',
          }}>
            <img
              src="/images/logo/logo-noir-refloode.png"
              alt="KeepFood Logo"
              style={{
                maxWidth: 'clamp(180px, 25vw, 350px)',
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
        <h1 style={{ 
          fontSize: 'clamp(2rem, 6vw, 4rem)', 
          marginBottom: 'clamp(1rem, 3vw, 1.5rem)', 
          fontWeight: '700', 
          lineHeight: '1.2',
          color: '#1a1a1a',
          letterSpacing: '-0.02em',
        }}>
          Digitalisez votre restaurant en quelques minutes
        </h1>
        <p style={{ 
          fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', 
          marginBottom: 'clamp(2rem, 5vw, 3rem)', 
          color: '#666666',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: '1.6',
        }}>
          KeepFood est la solution SaaS complète pour transformer votre restaurant en établissement moderne.
          Menu digital, commandes QR, interface cuisine, paiements intégrés, fidélité, comptabilité et bien plus encore.
        </p>
        <div style={{ 
          display: 'flex', 
          gap: 'clamp(0.75rem, 2vw, 1.5rem)', 
          justifyContent: 'center', 
          flexWrap: 'wrap' 
        }}>
          <Link
            to="/create-app"
            style={{
              padding: 'clamp(0.875rem, 2vw, 1.25rem) clamp(2rem, 5vw, 3rem)',
              backgroundColor: '#1a1a1a',
              color: '#ffffff',
              textDecoration: 'none',
              borderRadius: '12px',
              fontWeight: '600',
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 25px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
            }}
          >
            Démarrer gratuitement
          </Link>
          <a
            href="#features"
            style={{
              padding: 'clamp(0.875rem, 2vw, 1.25rem) clamp(2rem, 5vw, 3rem)',
              backgroundColor: '#ffffff',
              color: '#1a1a1a',
              textDecoration: 'none',
              borderRadius: '12px',
              fontWeight: '600',
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              border: '2px solid #e0e0e0',
              transition: 'all 0.3s ease',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#1a1a1a';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e0e0e0';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            En savoir plus
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ 
        padding: 'clamp(4rem, 8vw, 6rem) clamp(1rem, 4vw, 4rem)', 
        backgroundColor: '#f8f9fa' 
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2
            style={{
              textAlign: 'center',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
              color: '#1a1a1a',
              fontWeight: '700',
              letterSpacing: '-0.02em',
            }}
          >
            Fonctionnalités complètes
          </h2>
          <p
            style={{
              textAlign: 'center',
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              color: '#666666',
              marginBottom: 'clamp(3rem, 6vw, 4rem)',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Une solution complète pour digitaliser et optimiser votre restaurant
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2rem)',
            }}
          >
            {[
              {
                icon: '📱',
                title: 'Menu Digital Interactif',
                description: 'Menu interactif avec photos haute qualité, descriptions détaillées, allergènes et tags. Accessible via QR code à chaque table.',
              },
              {
                icon: '🛒',
                title: 'Commandes QR Code',
                description: 'Vos clients commandent directement depuis leur smartphone. Plus besoin d\'attendre le serveur. Commande guidée étape par étape.',
              },
              {
                icon: '🍳',
                title: 'Interface Cuisine & Bar',
                description: 'Affichage en temps réel des commandes sur écran TV. Séparation automatique cuisine/bar avec notifications sonores.',
              },
              {
                icon: '💳',
                title: 'Paiements Intégrés',
                description: 'Paiement en ligne sécurisé via Viva Wallet, Payconiq, Stripe. Gestion des paiements cash, carte et en ligne unifiée.',
              },
              {
                icon: '📊',
                title: 'Tableau de Bord Analytics',
                description: 'Statistiques en temps réel : ventes, produits vedettes, performance par période, répartition des paiements.',
              },
              {
                icon: '🎁',
                title: 'Programme de Fidélité',
                description: 'Points de fidélité, récompenses personnalisables (dessert offert, réductions), historique des transactions (Premium).',
              },
              {
                icon: '👥',
                title: 'Gestion d\'Équipe',
                description: 'Gestion complète des employés : rôles, permissions, pointage, attribution de tables, suivi des performances.',
              },
              {
                icon: '📈',
                title: 'Comptabilité Intégrée',
                description: 'Gestion des factures entrantes/sortantes, transactions, intégration PEPPOL via Dokapi, rapports financiers.',
              },
              {
                icon: '📦',
                title: 'Multi-Canaux',
                description: 'Gérez sur place, à emporter et livraison depuis une seule plateforme. Commandes en ligne avec paiement sécurisé.',
              },
              {
                icon: '🍽️',
                title: 'Gestion des Tables',
                description: 'Visualisation graphique des tables avec capacité. QR codes uniques par table. Gestion des sessions multi-clients.',
              },
              {
                icon: '📱',
                title: 'Application Serveur',
                description: 'Interface tablette pour serveurs : liste des tables assignées, gestion des commandes, encaissement, notifications.',
              },
              {
                icon: '🔔',
                title: 'Notifications Temps Réel',
                description: 'Notifications pour les serveurs quand la nourriture est prête. Alertes sonores et visuelles pour la cuisine.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#ffffff',
                  padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                  borderRadius: '16px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  border: '1px solid rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
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
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
                  marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                  lineHeight: '1',
                }}>
                  {feature.icon}
                </div>
                <h3 style={{ 
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', 
                  marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)', 
                  color: '#1a1a1a',
                  fontWeight: '600',
                }}>
                  {feature.title}
                </h3>
                <p style={{ 
                  color: '#666666', 
                  lineHeight: '1.6',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                  flex: '1',
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{ 
        padding: 'clamp(4rem, 8vw, 6rem) clamp(1rem, 4vw, 4rem)', 
        backgroundColor: '#ffffff' 
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2
            style={{
              textAlign: 'center',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
              color: '#1a1a1a',
              fontWeight: '700',
              letterSpacing: '-0.02em',
            }}
          >
            Choisissez votre pack
          </h2>
          <p
            style={{
              textAlign: 'center',
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              color: '#666666',
              marginBottom: 'clamp(3rem, 6vw, 4rem)',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Des solutions adaptées à tous les types d'établissements
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2rem)',
              maxWidth: '1200px',
              margin: '0 auto',
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
                  'Gestion du menu avec images',
                  'Menu digital + QR codes',
                  'Commandes sur place',
                  'Interface cuisine/bar',
                  'Interface serveur',
                  'Gestion des tables',
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
                  'Paiements intégrés en ligne',
                  'Gestion serveurs avancée',
                  'Commandes à emporter',
                  'Livraison',
                  'Dashboard de base',
                  'Gestion d\'équipe',
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
                  'Comptabilité intégrée',
                  'Support multi-restaurant',
                ],
                color: '#ffc107',
                popular: false,
              },
            ].map((plan, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: plan.popular ? '#ffffff' : '#ffffff',
                  padding: 'clamp(2rem, 4vw, 3rem)',
                  borderRadius: '20px',
                  boxShadow: plan.popular
                    ? '0 8px 32px rgba(0,123,255,0.15)'
                    : '0 2px 12px rgba(0,0,0,0.06)',
                  border: plan.popular ? '2px solid #007bff' : '1px solid rgba(0,0,0,0.05)',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = plan.popular
                    ? '0 12px 40px rgba(0,123,255,0.2)'
                    : '0 8px 24px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = plan.popular
                    ? '0 8px 32px rgba(0,123,255,0.15)'
                    : '0 2px 12px rgba(0,0,0,0.06)';
                }}
              >
                {plan.popular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-16px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: '#007bff',
                      color: 'white',
                      padding: 'clamp(0.5rem, 1vw, 0.75rem) clamp(1.25rem, 3vw, 2rem)',
                      borderRadius: '24px',
                      fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
                      fontWeight: '600',
                      boxShadow: '0 4px 12px rgba(0,123,255,0.3)',
                    }}
                  >
                    Le plus populaire
                  </div>
                )}
                <div style={{ textAlign: 'center', marginBottom: 'clamp(1.5rem, 3vw, 2rem)' }}>
                  <h3
                    style={{
                      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                      marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)',
                      color: plan.color,
                      fontWeight: '700',
                    }}
                  >
                    {plan.name}
                  </h3>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'baseline', 
                    justifyContent: 'center', 
                    gap: '0.5rem' 
                  }}>
                    <span style={{ 
                      fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
                      fontWeight: '700', 
                      color: '#1a1a1a' 
                    }}>
                      {plan.price}€
                    </span>
                    <span style={{ color: '#666666', fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
                      /{plan.period}
                    </span>
                  </div>
                  <p style={{ color: '#666666', marginTop: 'clamp(0.5rem, 1vw, 0.75rem)', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
                    {plan.description}
                  </p>
                </div>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
                  flex: '1',
                }}>
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      style={{
                        padding: 'clamp(0.75rem, 1.5vw, 1rem) 0',
                        borderBottom: i < plan.features.length - 1 ? '1px solid #f0f0f0' : 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'clamp(0.75rem, 1.5vw, 1rem)',
                      }}
                    >
                      <span style={{ color: plan.color, fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', fontWeight: 'bold' }}>
                        ✓
                      </span>
                      <span style={{ color: '#1a1a1a', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/create-app"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: 'clamp(0.875rem, 2vw, 1.125rem)',
                    backgroundColor: plan.color,
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '12px',
                    fontWeight: '600',
                    fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.opacity = '0.9';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.opacity = '1';
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
      <section style={{ 
        padding: 'clamp(4rem, 8vw, 6rem) clamp(1rem, 4vw, 4rem)', 
        backgroundColor: '#f8f9fa' 
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2
            style={{
              textAlign: 'center',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
              color: '#1a1a1a',
              fontWeight: '700',
              letterSpacing: '-0.02em',
            }}
          >
            Comment ça marche ?
          </h2>
          <p
            style={{
              textAlign: 'center',
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              color: '#666666',
              marginBottom: 'clamp(3rem, 6vw, 4rem)',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            En 4 étapes simples, votre restaurant est digitalisé
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2rem)',
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
                description: 'Ajoutez votre menu, vos produits avec photos, vos tables, votre équipe. Personnalisez votre logo et vos informations.',
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
                  backgroundColor: '#ffffff',
                  padding: 'clamp(2rem, 4vw, 2.5rem)',
                  borderRadius: '20px',
                  textAlign: 'center',
                  position: 'relative',
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
                <div
                  style={{
                    position: 'absolute',
                    top: '-24px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 'clamp(48px, 6vw, 56px)',
                    height: 'clamp(48px, 6vw, 56px)',
                    backgroundColor: '#1a1a1a',
                    color: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                    fontWeight: '700',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  }}
                >
                  {item.step}
                </div>
                <div style={{ 
                  fontSize: 'clamp(3rem, 6vw, 4rem)', 
                  marginTop: 'clamp(1rem, 2vw, 1.5rem)', 
                  marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                  lineHeight: '1',
                }}>
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
                  lineHeight: '1.6',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" style={{ 
        padding: 'clamp(4rem, 8vw, 6rem) clamp(1rem, 4vw, 4rem)', 
        backgroundColor: '#ffffff' 
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2
            style={{
              textAlign: 'center',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
              color: '#1a1a1a',
              fontWeight: '700',
              letterSpacing: '-0.02em',
            }}
          >
            Pourquoi choisir KeepFood ?
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2rem)',
              marginTop: 'clamp(3rem, 6vw, 4rem)',
            }}
          >
            {[
              {
                icon: '⚡',
                title: 'Mise en place rapide',
                description: 'En quelques minutes, votre restaurant est opérationnel. Configuration intuitive et guidée.',
              },
              {
                icon: '💰',
                title: 'Réduction des coûts',
                description: 'Moins d\'erreurs, moins de gaspillage, plus d\'efficacité. Optimisez vos opérations.',
              },
              {
                icon: '📈',
                title: 'Augmentation des ventes',
                description: 'Commandes plus rapides = plus de clients servis. Améliorez votre chiffre d\'affaires.',
              },
              {
                icon: '😊',
                title: 'Satisfaction client',
                description: 'Expérience moderne et fluide pour vos clients. Service amélioré et attente réduite.',
              },
              {
                icon: '🔒',
                title: 'Sécurisé & Conforme',
                description: 'Données protégées, paiements sécurisés, conformité RGPD. Intégration PEPPOL pour facturation.',
              },
              {
                icon: '📱',
                title: 'Multi-plateforme',
                description: 'Fonctionne sur smartphone, tablette et ordinateur. Application PWA installable.',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#f8f9fa',
                  padding: 'clamp(1.5rem, 3vw, 2rem)',
                  borderRadius: '16px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  border: '1px solid rgba(0,0,0,0.05)',
                  textAlign: 'center',
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
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
                  marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                  lineHeight: '1',
                }}>
                  {benefit.icon}
                </div>
                <h3 style={{ 
                  fontSize: 'clamp(1.125rem, 2vw, 1.25rem)', 
                  marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)', 
                  color: '#1a1a1a',
                  fontWeight: '600',
                }}>
                  {benefit.title}
                </h3>
                <p style={{ 
                  color: '#666666', 
                  lineHeight: '1.6',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                }}>
                  {benefit.description}
                </p>
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
          Prêt à digitaliser votre restaurant ?
        </h2>
        <p style={{ 
          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', 
          marginBottom: 'clamp(2rem, 4vw, 3rem)', 
          opacity: 0.9,
          maxWidth: '700px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          Rejoignez des centaines de restaurants qui font confiance à KeepFood
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
          Essai gratuit
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
                La solution SaaS complète pour digitaliser votre restaurant et améliorer votre service.
              </p>
            </div>
            <div>
              <h4 style={{ marginBottom: 'clamp(1rem, 2vw, 1.5rem)', fontSize: 'clamp(1rem, 2vw, 1.125rem)', fontWeight: '600' }}>
                Produit
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, color: '#aaaaaa' }}>
                <li style={{ marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
                  <a href="#features" style={{ color: '#aaaaaa', textDecoration: 'none', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
                    Fonctionnalités
                  </a>
                </li>
                <li style={{ marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
                  <a href="#pricing" style={{ color: '#aaaaaa', textDecoration: 'none', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
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
                <li style={{ marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)' }}>Documentation</li>
                <li style={{ marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
                  <Link to="/contact" style={{ color: '#aaaaaa', textDecoration: 'none', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
                    Contact
                  </Link>
                </li>
                <li style={{ marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)' }}>FAQ</li>
              </ul>
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
                Légal
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, color: '#aaaaaa' }}>
                <li style={{ marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>CGU</li>
                <li style={{ marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>Confidentialité</li>
                <li style={{ marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>Mentions légales</li>
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
