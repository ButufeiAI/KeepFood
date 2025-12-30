import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Réinitialiser le message après 5 secondes
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1000);
  };

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
          <Link to="/about" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '500' }}>À propos</Link>
          <Link to="/contact" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '600' }}>Contact</Link>
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
          Contactez-nous
        </h1>
        <p style={{ 
          fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', 
          color: '#666666',
          maxWidth: '800px', 
          margin: '0 auto',
          lineHeight: '1.6',
        }}>
          Une question ? Un projet ? Notre équipe est là pour vous aider
        </p>
      </section>

      {/* Contact Section */}
      <section style={{ 
        padding: 'clamp(4rem, 8vw, 6rem) clamp(1rem, 4vw, 4rem)',
        backgroundColor: '#ffffff',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: 'clamp(2rem, 4vw, 3rem)' 
          }}>
            {/* Contact Info */}
            <div>
              <h2 style={{ 
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', 
                marginBottom: 'clamp(2rem, 4vw, 3rem)', 
                color: '#1a1a1a',
                fontWeight: '700',
                letterSpacing: '-0.02em',
              }}>
                Informations de contact
              </h2>
              <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
                {[
                  {
                    icon: '📧',
                    title: 'Email',
                    content: 'contact@keepfood.com',
                    link: 'mailto:contact@keepfood.com',
                  },
                  {
                    icon: '📞',
                    title: 'Téléphone',
                    content: '+32 123 456 789',
                    link: 'tel:+32123456789',
                  },
                  {
                    icon: '📍',
                    title: 'Adresse',
                    content: 'Rue de la Digitalisation 123\n1000 Bruxelles\nBelgique',
                    link: null,
                  },
                  {
                    icon: '🕒',
                    title: 'Horaires',
                    content: 'Lundi - Vendredi: 9h - 18h\nSamedi: 10h - 16h\nDimanche: Fermé',
                    link: null,
                  },
                ].map((item, index) => (
                  <div 
                    key={index}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'start', 
                      gap: 'clamp(1rem, 2vw, 1.5rem)', 
                      marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
                    }}
                  >
                    <div style={{ 
                      fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                      lineHeight: '1',
                      flexShrink: 0,
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 style={{ 
                        fontSize: 'clamp(1.125rem, 2vw, 1.25rem)', 
                        marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)', 
                        color: '#1a1a1a',
                        fontWeight: '600',
                      }}>
                        {item.title}
                      </h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          style={{ 
                            color: '#007bff', 
                            textDecoration: 'none', 
                            fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
                            lineHeight: '1.6',
                            transition: 'color 0.3s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#0056b3';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = '#007bff';
                          }}
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p style={{ 
                          color: '#666666', 
                          fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)', 
                          lineHeight: '1.6',
                          whiteSpace: 'pre-line',
                        }}>
                          {item.content}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div style={{ marginTop: 'clamp(2rem, 4vw, 3rem)' }}>
                <h3 style={{ 
                  fontSize: 'clamp(1.125rem, 2vw, 1.25rem)', 
                  marginBottom: 'clamp(1rem, 2vw, 1.5rem)', 
                  color: '#1a1a1a',
                  fontWeight: '600',
                }}>
                  Suivez-nous
                </h3>
                <div style={{ display: 'flex', gap: 'clamp(0.75rem, 1.5vw, 1rem)' }}>
                  {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social, index) => (
                    <div
                      key={index}
                      style={{
                        width: 'clamp(48px, 6vw, 56px)',
                        height: 'clamp(48px, 6vw, 56px)',
                        backgroundColor: '#1a1a1a',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                        e.currentTarget.style.backgroundColor = '#333333';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.backgroundColor = '#1a1a1a';
                      }}
                    >
                      {social[0]}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 style={{ 
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', 
                marginBottom: 'clamp(2rem, 4vw, 3rem)', 
                color: '#1a1a1a',
                fontWeight: '700',
                letterSpacing: '-0.02em',
              }}>
                Envoyez-nous un message
              </h2>
              {submitted ? (
                <div
                  style={{
                    backgroundColor: '#d4edda',
                    border: '1px solid #c3e6cb',
                    color: '#155724',
                    padding: 'clamp(1.5rem, 3vw, 2rem)',
                    borderRadius: '16px',
                    marginBottom: 'clamp(2rem, 4vw, 3rem)',
                    textAlign: 'center',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  }}
                >
                  <div style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
                    ✅
                  </div>
                  <div style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', fontWeight: '600' }}>
                    Message envoyé avec succès !
                  </div>
                  <div style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)', marginTop: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
                    Nous vous répondrons dans les plus brefs délais.
                  </div>
                </div>
              ) : null}
              <form 
                onSubmit={handleSubmit} 
                style={{ 
                  backgroundColor: '#f8f9fa', 
                  padding: 'clamp(2rem, 4vw, 2.5rem)', 
                  borderRadius: '20px', 
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  border: '1px solid rgba(0,0,0,0.05)',
                }}
              >
                {[
                  { key: 'name', label: 'Nom complet', type: 'text', required: true },
                  { key: 'email', label: 'Email', type: 'email', required: true },
                  { key: 'phone', label: 'Téléphone', type: 'tel', required: false },
                ].map((field) => (
                  <div key={field.key} style={{ marginBottom: 'clamp(1.5rem, 3vw, 2rem)' }}>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)', 
                      color: '#1a1a1a', 
                      fontWeight: '600',
                      fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                    }}>
                      {field.label} {field.required && '*'}
                    </label>
                    <input
                      type={field.type}
                      required={field.required}
                      value={formData[field.key as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      style={{
                        width: '100%',
                        padding: 'clamp(0.75rem, 1.5vw, 1rem)',
                        border: '1px solid #e0e0e0',
                        borderRadius: '12px',
                        fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                        backgroundColor: '#ffffff',
                        transition: 'all 0.3s ease',
                        boxSizing: 'border-box',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#1a1a1a';
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(26,26,26,0.1)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#e0e0e0';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                ))}
                <div style={{ marginBottom: 'clamp(1.5rem, 3vw, 2rem)' }}>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)', 
                    color: '#1a1a1a', 
                    fontWeight: '600',
                    fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                  }}>
                    Sujet *
                  </label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: 'clamp(0.75rem, 1.5vw, 1rem)',
                      border: '1px solid #e0e0e0',
                      borderRadius: '12px',
                      fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                      backgroundColor: '#ffffff',
                      transition: 'all 0.3s ease',
                      boxSizing: 'border-box',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#1a1a1a';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(26,26,26,0.1)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#e0e0e0';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="demo">Demande de démo</option>
                    <option value="pricing">Question sur les tarifs</option>
                    <option value="support">Support technique</option>
                    <option value="partnership">Partenariat</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
                <div style={{ marginBottom: 'clamp(1.5rem, 3vw, 2rem)' }}>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)', 
                    color: '#1a1a1a', 
                    fontWeight: '600',
                    fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                  }}>
                    Message *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    style={{
                      width: '100%',
                      padding: 'clamp(0.75rem, 1.5vw, 1rem)',
                      border: '1px solid #e0e0e0',
                      borderRadius: '12px',
                      fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                      resize: 'vertical',
                      backgroundColor: '#ffffff',
                      transition: 'all 0.3s ease',
                      boxSizing: 'border-box',
                      fontFamily: 'inherit',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#1a1a1a';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(26,26,26,0.1)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#e0e0e0';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: '100%',
                    padding: 'clamp(1rem, 2vw, 1.25rem)',
                    backgroundColor: loading ? '#cccccc' : '#1a1a1a',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                    fontWeight: '600',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) {
                      e.currentTarget.style.backgroundColor = '#333333';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!loading) {
                      e.currentTarget.style.backgroundColor = '#1a1a1a';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  {loading ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
            Questions fréquentes
          </h2>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {[
              {
                question: 'Combien de temps faut-il pour mettre en place KeepFood ?',
                answer: 'La mise en place est très rapide ! En quelques minutes, vous pouvez créer votre compte, configurer votre restaurant et commencer à utiliser la plateforme. Notre équipe est disponible pour vous accompagner si nécessaire.',
              },
              {
                question: 'Puis-je essayer KeepFood gratuitement ?',
                answer: 'Oui ! Nous offrons une période d\'essai gratuite pour que vous puissiez découvrir toutes les fonctionnalités. Aucune carte bancaire n\'est requise pour commencer.',
              },
              {
                question: 'Quels types de paiements sont acceptés ?',
                answer: 'KeepFood s\'intègre avec les principales solutions de paiement : Viva Wallet, Payconiq, Stripe, et bien d\'autres. Vous pouvez également accepter les paiements en espèces et par carte bancaire traditionnelle.',
              },
              {
                question: 'Ai-je besoin d\'équipement spécial ?',
                answer: 'Non ! KeepFood fonctionne sur n\'importe quel appareil : smartphone, tablette ou ordinateur. Vous avez juste besoin d\'une connexion internet. Pour la cuisine, un écran TV ou tablette suffit.',
              },
              {
                question: 'Puis-je personnaliser mon menu ?',
                answer: 'Absolument ! Vous pouvez créer des catégories, ajouter des photos, des descriptions, des allergènes, et même créer des variantes de produits. Tout est personnalisable selon vos besoins.',
              },
              {
                question: 'Quel support est disponible ?',
                answer: 'Nous offrons un support par email, chat en direct (pack Premium), et une documentation complète. Notre équipe est là pour vous aider à chaque étape.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                style={{
                  marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
                  padding: 'clamp(1.5rem, 3vw, 2rem)',
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  border: '1px solid rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
                }}
              >
                <h3 style={{ 
                  fontSize: 'clamp(1.125rem, 2vw, 1.25rem)', 
                  marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)', 
                  color: '#1a1a1a',
                  fontWeight: '600',
                }}>
                  {faq.question}
                </h3>
                <p style={{ 
                  color: '#666666', 
                  lineHeight: '1.8',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
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
