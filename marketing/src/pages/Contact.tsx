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
          <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>À propos</Link>
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Contact</Link>
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
          Contactez-nous
        </h1>
        <p style={{ fontSize: '1.3rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto' }}>
          Une question ? Un projet ? Notre équipe est là pour vous aider
        </p>
      </section>

      {/* Contact Section */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {/* Contact Info */}
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#333' }}>
                Informations de contact
              </h2>
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'start', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '2rem' }}>📧</div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#333' }}>Email</h3>
                    <a
                      href="mailto:contact@keepfood.com"
                      style={{ color: '#007bff', textDecoration: 'none', fontSize: '1.1rem' }}
                    >
                      contact@keepfood.com
                    </a>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'start', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '2rem' }}>📞</div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#333' }}>Téléphone</h3>
                    <a
                      href="tel:+32123456789"
                      style={{ color: '#007bff', textDecoration: 'none', fontSize: '1.1rem' }}
                    >
                      +32 123 456 789
                    </a>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'start', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '2rem' }}>📍</div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#333' }}>Adresse</h3>
                    <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.6' }}>
                      Rue de la Digitalisation 123<br />
                      1000 Bruxelles<br />
                      Belgique
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
                  <div style={{ fontSize: '2rem' }}>🕒</div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#333' }}>Horaires</h3>
                    <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.6' }}>
                      Lundi - Vendredi: 9h - 18h<br />
                      Samedi: 10h - 16h<br />
                      Dimanche: Fermé
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div style={{ marginTop: '3rem' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#333' }}>Suivez-nous</h3>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social, index) => (
                    <div
                      key={index}
                      style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: '#007bff',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        transition: 'transform 0.3s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
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
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#333' }}>
                Envoyez-nous un message
              </h2>
              {submitted ? (
                <div
                  style={{
                    backgroundColor: '#d4edda',
                    border: '1px solid #c3e6cb',
                    color: '#155724',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    marginBottom: '2rem',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✅</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                    Message envoyé avec succès !
                  </div>
                  <div style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                    Nous vous répondrons dans les plus brefs délais.
                  </div>
                </div>
              ) : null}
              <form onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: 'bold' }}>
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #ddd',
                      borderRadius: '6px',
                      fontSize: '1rem',
                    }}
                  />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: 'bold' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #ddd',
                      borderRadius: '6px',
                      fontSize: '1rem',
                    }}
                  />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: 'bold' }}>
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #ddd',
                      borderRadius: '6px',
                      fontSize: '1rem',
                    }}
                  />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: 'bold' }}>
                    Sujet *
                  </label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #ddd',
                      borderRadius: '6px',
                      fontSize: '1rem',
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
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: 'bold' }}>
                    Message *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #ddd',
                      borderRadius: '6px',
                      fontSize: '1rem',
                      resize: 'vertical',
                    }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    backgroundColor: loading ? '#ccc' : '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    transition: 'background-color 0.3s',
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
      <section style={{ padding: '5rem 2rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: '#333', textAlign: 'center' }}>
            Questions fréquentes
          </h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
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
                  marginBottom: '1.5rem',
                  padding: '1.5rem',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                }}
              >
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: '#333' }}>
                  {faq.question}
                </h3>
                <p style={{ color: '#666', lineHeight: '1.8' }}>{faq.answer}</p>
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

