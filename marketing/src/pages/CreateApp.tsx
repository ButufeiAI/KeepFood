import { useState } from 'react';

interface CompanyData {
  valid: boolean;
  countryCode: string;
  vatNumber: string;
  name: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
}

export function CreateApp() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [vatLoading, setVatLoading] = useState(false);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [companyData, setCompanyData] = useState<CompanyData | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    // Étape 1: Informations entreprise
    vatNumber: '',
    name: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    phone: '',
    email: '',
    logo: null as File | null,

    // Étape 2: Compte administrateur
    firstName: '',
    lastName: '',
    adminEmail: '',
    password: '',
    confirmPassword: '',

    // Étape 3: Pack et configuration
    plan: 'BASIC' as 'BASIC' | 'STANDARD' | 'PREMIUM',
    onSiteEnabled: true,
    takeawayEnabled: false,
    deliveryEnabled: false,

    // Étape 4: Détails entreprise
    employeeCount: '',
    description: '',
    activities: '',
    establishmentDate: '',
    website: '',
    socialMedia: '',
  });

  // Fonction helper pour obtenir l'URL de l'API
  const getApiUrl = () => {
    const envUrl = import.meta.env.VITE_API_URL;
    if (envUrl) {
      return envUrl;
    }
    // Si on est sur localhost, utiliser localhost
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      return 'http://localhost:5201/api';
    }
    // Sinon, utiliser l'IP du serveur actuel
    return `http://${window.location.hostname}:5201/api`;
  };

  const handleVatVerification = async () => {
    if (!formData.vatNumber) {
      alert('Veuillez entrer un numéro de TVA');
      return;
    }

    setVatLoading(true);
    try {
      // Appel à l'API backend pour vérifier le TVA
      const response = await fetch(
        `${getApiUrl()}/restaurants/vat/verify?vatNumber=${encodeURIComponent(formData.vatNumber)}`,
      );
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erreur lors de la vérification');
      }

      const data = await response.json();

      if (data.valid) {
        setCompanyData(data);
        // Auto-remplir les champs avec les données VIES (seulement si elles existent)
        const updatedFormData = { ...formData };
        
        if (data.name && data.name !== `Entreprise ${data.vatNumber}`) {
          updatedFormData.name = data.name;
        }
        if (data.address) {
          updatedFormData.address = data.address;
        }
        if (data.city) {
          updatedFormData.city = data.city;
        }
        if (data.zipCode) {
          updatedFormData.zipCode = data.zipCode;
        }
        if (data.country) {
          updatedFormData.country = data.country;
        }
        
        setFormData(updatedFormData);
        
        // Message de succès plus informatif
        let successMsg = `✅ Numéro de TVA vérifié via VIES !\n\n`;
        if (data.name && data.name !== `Entreprise ${data.vatNumber}`) {
          successMsg += `Entreprise: ${data.name}\n`;
        } else {
          successMsg += `⚠️ Le nom de l'entreprise n'a pas pu être récupéré depuis VIES.\n`;
        }
        if (data.address) {
          successMsg += `Adresse: ${data.address}\n`;
        }
        if (data.city) {
          successMsg += `Ville: ${data.city}\n`;
        }
        if (data.zipCode) {
          successMsg += `Code postal: ${data.zipCode}\n`;
        }
        if (data.country) {
          successMsg += `Pays: ${data.country}\n`;
        }
        if (data.note) {
          successMsg += `\n${data.note}`;
        }
        alert(successMsg);
      } else {
        alert('❌ Numéro de TVA invalide');
      }
    } catch (error: any) {
      console.error('Erreur vérification TVA:', error);
      alert(`Erreur: ${error.message || 'Impossible de vérifier le numéro de TVA. Veuillez réessayer.'}`);
    } finally {
      setVatLoading(false);
    }
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Le logo ne doit pas dépasser 5MB');
        return;
      }
      if (!file.type.startsWith('image/')) {
        alert('Veuillez sélectionner une image');
        return;
      }
      setFormData({ ...formData, logo: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const apiBaseUrl = getApiUrl();
      
      // Créer ou réutiliser le compte utilisateur
      // Si l'utilisateur existe déjà sans restaurant, il sera réutilisé automatiquement
      const registerResponse = await fetch(`${apiBaseUrl}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.adminEmail,
          password: formData.password,
          firstName: formData.firstName,
          lastName: formData.lastName,
          role: 'ADMIN_RESTAURANT',
        }),
      });

      if (!registerResponse.ok) {
        let errorMessage = 'Erreur lors de la création du compte';
        try {
          const errorData = await registerResponse.json();
          errorMessage = errorData.message || errorMessage;
          
          // Gérer les erreurs spécifiques
          if (registerResponse.status === 409) {
            errorMessage = 'Cet email est déjà utilisé. Veuillez utiliser un autre email ou vous connecter.';
          } else if (registerResponse.status === 400) {
            errorMessage = errorData.message || 'Données invalides. Veuillez vérifier les informations saisies.';
          }
        } catch (e) {
          // Si la réponse n'est pas du JSON, utiliser le message par défaut selon le status
          if (registerResponse.status === 409) {
            errorMessage = 'Cet email est déjà utilisé. Veuillez utiliser un autre email ou vous connecter.';
          } else if (registerResponse.status === 400) {
            errorMessage = 'Données invalides. Veuillez vérifier les informations saisies.';
          }
        }
        const error = new Error(errorMessage);
        console.error('Erreur d\'enregistrement:', errorMessage, 'Status:', registerResponse.status);
        throw error;
      }

      const authData = await registerResponse.json();

      // Ensuite créer le restaurant
      const restaurantData = {
        name: formData.name?.trim() || '',
        address: formData.address?.trim() || undefined,
        city: formData.city?.trim() || undefined,
        zipCode: formData.zipCode?.trim() || undefined,
        country: formData.country?.trim() || undefined,
        phone: formData.phone?.trim() || undefined,
        email: formData.email?.trim() || undefined,
        vatNumber: formData.vatNumber?.trim() || undefined,
        plan: formData.plan,
        onSiteEnabled: formData.onSiteEnabled ?? true,
        takeawayEnabled: formData.takeawayEnabled ?? false,
        deliveryEnabled: formData.deliveryEnabled ?? false,
        employeeCount: formData.employeeCount ? parseInt(formData.employeeCount) : undefined,
        description: formData.description?.trim() || undefined,
        activities: formData.activities?.trim() || undefined,
        establishmentDate: formData.establishmentDate || undefined,
        website: formData.website?.trim() || undefined,
        socialMedia: formData.socialMedia?.trim() || undefined,
      };

      // Valider que le nom est présent
      if (!restaurantData.name) {
        throw new Error('Le nom du restaurant est requis');
      }

      console.log('Données restaurant à envoyer:', JSON.stringify(restaurantData, null, 2));

      const restaurantResponse = await fetch(`${apiBaseUrl}/restaurants`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authData.accessToken}`,
        },
        body: JSON.stringify(restaurantData),
      });

      if (!restaurantResponse.ok) {
        let errorMessage = 'Erreur lors de la création du restaurant';
        const responseText = await restaurantResponse.text();
        console.error('Réponse brute du serveur:', responseText);
        console.error('Status:', restaurantResponse.status);
        console.error('Données envoyées:', JSON.stringify(restaurantData, null, 2));
        
        try {
          const errorData = JSON.parse(responseText);
          errorMessage = errorData.message || errorData.error || errorMessage;
          console.error('Erreur création restaurant (parsed):', errorData);
        } catch (e) {
          // Si la réponse n'est pas du JSON, utiliser le message par défaut
          console.error('La réponse n\'est pas du JSON:', e);
          if (restaurantResponse.status === 500) {
            errorMessage = 'Erreur serveur lors de la création du restaurant. Veuillez vérifier les logs du serveur backend pour plus de détails. Message: ' + responseText.substring(0, 200);
          } else if (restaurantResponse.status === 400) {
            errorMessage = 'Données invalides. Veuillez vérifier les informations saisies. Message: ' + responseText.substring(0, 200);
          } else if (restaurantResponse.status === 401) {
            errorMessage = 'Session expirée. Veuillez vous reconnecter.';
          } else {
            errorMessage = `Erreur ${restaurantResponse.status}: ${responseText.substring(0, 200)}`;
          }
        }
        throw new Error(errorMessage);
      }

      // Stocker les tokens et les données utilisateur
      localStorage.setItem('accessToken', authData.accessToken);
      localStorage.setItem('refreshToken', authData.refreshToken);
      
      // Stocker les données utilisateur dans localStorage pour que le frontend puisse les récupérer
      // Le frontend devra initialiser son store depuis localStorage au démarrage
      if (authData.user) {
        localStorage.setItem('user', JSON.stringify(authData.user));
      }
      
      // Rediriger vers l'application
      window.location.href = 'http://localhost:5202/dashboard';
    } catch (error: any) {
      console.error('Erreur lors de la soumission:', error);
      // Afficher un message d'erreur plus clair
      const errorMsg = error.message || 'Une erreur est survenue lors de la création de votre application';
      
      // Afficher l'erreur dans l'interface
      setErrorMessage(errorMsg);
      
      // Afficher aussi l'alerte pour être sûr
      alert(`❌ Erreur: ${errorMsg}\n\nVeuillez vérifier vos informations et réessayer.`);
      
      // Effacer le message d'erreur après 10 secondes
      setTimeout(() => {
        setErrorMessage(null);
      }, 10000);
    } finally {
      setLoading(false);
    }
  };

  // Variables de validation pour l'étape 2
  const isStep2Valid =
    formData.firstName &&
    formData.lastName &&
    formData.adminEmail &&
    formData.password &&
    formData.confirmPassword &&
    formData.password === formData.confirmPassword &&
    formData.password.length >= 6;

  const passwordsMatch = formData.password === formData.confirmPassword;
  const passwordsBothFilled = formData.password && formData.confirmPassword;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5', padding: '1rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', marginBottom: '0.5rem', color: '#333' }}>
            🍽️ Créez votre application KeepFood
          </h1>
          <p style={{ color: '#666', fontSize: 'clamp(0.9rem, 3vw, 1.1rem)' }}>
            En quelques minutes, votre restaurant sera digitalisé
          </p>
        </div>

        {/* Message d'erreur */}
        {errorMessage && (
          <div
            style={{
              backgroundColor: '#fee',
              border: '2px solid #f00',
              borderRadius: '8px',
              padding: '1.5rem',
              marginBottom: '2rem',
              color: '#c33',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              animation: 'slideDown 0.3s ease-out',
            }}
          >
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                ❌ Erreur
              </div>
              <div style={{ fontSize: '1rem' }}>{errorMessage}</div>
            </div>
            <button
              onClick={() => setErrorMessage(null)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '2rem',
                cursor: 'pointer',
                color: '#c33',
                padding: '0 0.5rem',
                lineHeight: '1',
                marginLeft: '1rem',
              }}
              title="Fermer"
            >
              ×
            </button>
          </div>
        )}

        {/* Progress Bar */}
        <div style={{ marginBottom: '2rem' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '0.5rem',
              fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
              color: '#666',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}
            className="progress-steps"
          >
            <span style={{ color: step >= 1 ? '#007bff' : '#999', whiteSpace: 'nowrap' }}>
              Entreprise
            </span>
            <span style={{ color: step >= 2 ? '#007bff' : '#999', whiteSpace: 'nowrap' }}>Admin</span>
            <span style={{ color: step >= 3 ? '#007bff' : '#999', whiteSpace: 'nowrap' }}>Détails</span>
            <span style={{ color: step >= 4 ? '#007bff' : '#999', whiteSpace: 'nowrap' }}>Config</span>
          </div>
          <div
            style={{
              height: '8px',
              backgroundColor: '#e0e0e0',
              borderRadius: '4px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${(step / 4) * 100}%`,
                backgroundColor: '#007bff',
                transition: 'width 0.3s',
              }}
            />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div
            style={{
              backgroundColor: 'white',
              padding: 'clamp(1.5rem, 4vw, 3rem)',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            }}
            className="card"
          >
            {/* Étape 1: Informations entreprise */}
            {step === 1 && (
              <div>
                <h2 style={{ marginBottom: '2rem', fontSize: '1.8rem', color: '#333' }}>
                  1. Informations de votre entreprise
                </h2>

                {/* Vérification TVA */}
                <div style={{ marginBottom: '2rem' }}>
                  <label
                    style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      fontWeight: 'bold',
                      color: '#333',
                    }}
                  >
                    Numéro de TVA *
                  </label>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }} className="flex-row">
                    <input
                      type="text"
                      value={formData.vatNumber}
                      onChange={(e) =>
                        setFormData({ ...formData, vatNumber: e.target.value.toUpperCase() })
                      }
                      placeholder="FR12345678901"
                      required
                      style={{
                        flex: 1,
                        padding: '0.75rem',
                        border: '2px solid #e0e0e0',
                        borderRadius: '8px',
                        fontSize: '1rem',
                      }}
                    />
                    <button
                      type="button"
                      onClick={handleVatVerification}
                      disabled={vatLoading}
                      style={{
                        padding: '0.75rem 1.5rem',
                        backgroundColor: '#28a745',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: vatLoading ? 'not-allowed' : 'pointer',
                        fontWeight: 'bold',
                        opacity: vatLoading ? 0.6 : 1,
                      }}
                    >
                      {vatLoading ? 'Vérification...' : '✓ Vérifier'}
                    </button>
                  </div>
                  {companyData?.valid && (
                    <div
                      style={{
                        marginTop: '0.5rem',
                        padding: '0.75rem',
                        backgroundColor: '#d4edda',
                        color: '#155724',
                        borderRadius: '4px',
                        fontSize: '0.9rem',
                      }}
                    >
                      ✅ Entreprise vérifiée : {companyData.name}
                    </div>
                  )}
                  <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: '#666' }}>
                    Format: FR12345678901, BE0123456789, etc.
                  </p>
                </div>

                {/* Logo */}
                <div style={{ marginBottom: '2rem' }}>
                  <label
                    style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      fontWeight: 'bold',
                      color: '#333',
                    }}
                  >
                    Logo de votre restaurant
                  </label>
                  <div
                    style={{
                      border: '2px dashed #e0e0e0',
                      borderRadius: '8px',
                      padding: '2rem',
                      textAlign: 'center',
                      cursor: 'pointer',
                      position: 'relative',
                    }}
                    onClick={() => document.getElementById('logo-upload')?.click()}
                  >
                    {logoPreview ? (
                      <div>
                        <img
                          src={logoPreview}
                          alt="Logo preview"
                          style={{
                            maxWidth: '200px',
                            maxHeight: '200px',
                            borderRadius: '8px',
                          }}
                        />
                        <p style={{ marginTop: '1rem', color: '#666' }}>
                          Cliquez pour changer
                        </p>
                      </div>
                    ) : (
                      <div>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📷</div>
                        <p style={{ color: '#666' }}>
                          Cliquez pour télécharger votre logo
                        </p>
                        <p style={{ fontSize: '0.85rem', color: '#999', marginTop: '0.5rem' }}>
                          PNG, JPG max 5MB
                        </p>
                      </div>
                    )}
                    <input
                      id="logo-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      style={{ display: 'none' }}
                    />
                  </div>
                </div>

                {/* Autres champs */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
                      Nom du restaurant *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid #e0e0e0',
                        borderRadius: '8px',
                        fontSize: '1rem',
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid #e0e0e0',
                        borderRadius: '8px',
                        fontSize: '1rem',
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
                    Adresse *
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
                      Ville *
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid #e0e0e0',
                        borderRadius: '8px',
                        fontSize: '1rem',
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
                      Code postal *
                    </label>
                    <input
                      type="text"
                      value={formData.zipCode}
                      onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid #e0e0e0',
                        borderRadius: '8px',
                        fontSize: '1rem',
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
                      Pays *
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid #e0e0e0',
                        borderRadius: '8px',
                        fontSize: '1rem',
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
                    Email restaurant
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                    }}
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  disabled={!formData.name || !formData.vatNumber}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    cursor: !formData.name || !formData.vatNumber ? 'not-allowed' : 'pointer',
                    opacity: !formData.name || !formData.vatNumber ? 0.6 : 1,
                  }}
                >
                  Suivant →
                </button>
              </div>
            )}

            {/* Étape 2: Compte admin */}
            {step === 2 && (
              <div>
                <h2 style={{ marginBottom: '2rem', fontSize: '1.8rem', color: '#333' }}>
                  2. Créer votre compte administrateur
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
                      Prénom *
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid #e0e0e0',
                        borderRadius: '8px',
                        fontSize: '1rem',
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
                      Nom *
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid #e0e0e0',
                        borderRadius: '8px',
                        fontSize: '1rem',
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
                    Email administrateur *
                  </label>
                  <input
                    type="email"
                    value={formData.adminEmail}
                    onChange={(e) => setFormData({ ...formData, adminEmail: e.target.value })}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
                      Mot de passe *
                    </label>
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required
                      minLength={6}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid #e0e0e0',
                        borderRadius: '8px',
                        fontSize: '1rem',
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
                      Confirmer le mot de passe *
                    </label>
                    <input
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid #e0e0e0',
                        borderRadius: '8px',
                        fontSize: '1rem',
                      }}
                    />
                  </div>
                </div>

                {/* Message d'erreur si les mots de passe ne correspondent pas */}
                {passwordsBothFilled && !passwordsMatch && (
                  <div
                    style={{
                      marginBottom: '1rem',
                      padding: '0.75rem',
                      backgroundColor: '#fee',
                      border: '2px solid #f00',
                      borderRadius: '8px',
                      color: '#c33',
                      fontSize: '0.9rem',
                    }}
                  >
                    ⚠️ Les mots de passe ne correspondent pas
                  </div>
                )}

                {/* Message d'avertissement si le mot de passe est trop court */}
                {formData.password && formData.password.length > 0 && formData.password.length < 6 && (
                  <div
                    style={{
                      marginBottom: '1rem',
                      padding: '0.75rem',
                      backgroundColor: '#fff3cd',
                      border: '2px solid #ffc107',
                      borderRadius: '8px',
                      color: '#856404',
                      fontSize: '0.9rem',
                    }}
                  >
                    ⚠️ Le mot de passe doit contenir au moins 6 caractères
                  </div>
                )}

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    style={{
                      flex: 1,
                      padding: '1rem',
                      backgroundColor: '#6c757d',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                    }}
                  >
                    ← Précédent
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (!passwordsMatch) {
                        alert('Les mots de passe ne correspondent pas');
                        return;
                      }
                      setStep(3);
                    }}
                    disabled={!isStep2Valid}
                    style={{
                      flex: 1,
                      padding: '1rem',
                      backgroundColor: '#007bff',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      cursor: !isStep2Valid ? 'not-allowed' : 'pointer',
                      opacity: !isStep2Valid ? 0.6 : 1,
                    }}
                  >
                    Suivant →
                  </button>
                </div>
              </div>
            )}

            {/* Étape 3: Détails entreprise */}
            {step === 3 && (
              <div>
                <h2 style={{ marginBottom: '2rem', fontSize: '1.8rem', color: '#333' }}>
                  3. Détails de votre entreprise
                </h2>
                <p style={{ marginBottom: '2rem', color: '#666', fontSize: '0.95rem' }}>
                  Complétez les informations sur votre restaurant pour une meilleure visibilité
                </p>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
                    Nombre de travailleurs/employés
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={formData.employeeCount}
                    onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
                    placeholder="Ex: 10"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                    }}
                  />
                  <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: '#666' }}>
                    Nombre approximatif d'employés dans votre établissement
                  </p>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
                    Description de votre restaurant
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Décrivez votre restaurant, votre cuisine, vos spécialités..."
                    rows={5}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontFamily: 'inherit',
                      resize: 'vertical',
                    }}
                  />
                  <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: '#666' }}>
                    Présentez votre établissement, votre concept, votre cuisine...
                  </p>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
                    Activités principales
                  </label>
                  <input
                    type="text"
                    value={formData.activities}
                    onChange={(e) => setFormData({ ...formData, activities: e.target.value })}
                    placeholder="Ex: Restauration, Service traiteur, Événements..."
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                    }}
                  />
                  <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: '#666' }}>
                    Listez les principales activités de votre restaurant
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
                      Date de création
                    </label>
                    <input
                      type="date"
                      value={formData.establishmentDate}
                      onChange={(e) => setFormData({ ...formData, establishmentDate: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid #e0e0e0',
                        borderRadius: '8px',
                        fontSize: '1rem',
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
                      Site web
                    </label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="https://..."
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid #e0e0e0',
                        borderRadius: '8px',
                        fontSize: '1rem',
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
                    Réseaux sociaux (optionnel)
                  </label>
                  <input
                    type="text"
                    value={formData.socialMedia}
                    onChange={(e) => setFormData({ ...formData, socialMedia: e.target.value })}
                    placeholder='Ex: {"facebook": "https://facebook.com/...", "instagram": "https://instagram.com/..."}'
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                    }}
                  />
                  <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: '#666' }}>
                    Format JSON avec les liens de vos réseaux sociaux
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    style={{
                      flex: 1,
                      padding: '1rem',
                      backgroundColor: '#6c757d',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                    }}
                  >
                    ← Précédent
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    style={{
                      flex: 1,
                      padding: '1rem',
                      backgroundColor: '#007bff',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                    }}
                  >
                    Suivant →
                  </button>
                </div>
              </div>
            )}

            {/* Étape 4: Configuration */}
            {step === 4 && (
              <div>
                <h2 style={{ marginBottom: '2rem', fontSize: '1.8rem', color: '#333' }}>
                  4. Choisissez votre pack et configurez
                </h2>

                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', marginBottom: '1rem', fontWeight: 'bold', color: '#333' }}>
                    Pack *
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                    {(['BASIC', 'STANDARD', 'PREMIUM'] as const).map((plan) => (
                      <div
                        key={plan}
                        onClick={() => setFormData({ ...formData, plan })}
                        style={{
                          padding: '1.5rem',
                          border: formData.plan === plan ? '3px solid #007bff' : '2px solid #e0e0e0',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          backgroundColor: formData.plan === plan ? '#f0f7ff' : 'white',
                          transition: 'all 0.3s',
                        }}
                      >
                        <h3 style={{ marginBottom: '0.5rem', color: formData.plan === plan ? '#007bff' : '#333' }}>
                          {plan}
                        </h3>
                        <p style={{ fontSize: '0.9rem', color: '#666' }}>
                          {plan === 'BASIC' && '49€/mois - Parfait pour débuter'}
                          {plan === 'STANDARD' && '99€/mois - Le plus populaire'}
                          {plan === 'PREMIUM' && '199€/mois - Pour les chaînes'}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', marginBottom: '1rem', fontWeight: 'bold', color: '#333' }}>
                    Canaux de commande
                  </label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={formData.onSiteEnabled}
                        onChange={(e) => setFormData({ ...formData, onSiteEnabled: e.target.checked })}
                        style={{ width: '20px', height: '20px' }}
                      />
                      <span>Sur place (QR code à table)</span>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={formData.takeawayEnabled}
                        onChange={(e) => setFormData({ ...formData, takeawayEnabled: e.target.checked })}
                        style={{ width: '20px', height: '20px' }}
                      />
                      <span>À emporter</span>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={formData.deliveryEnabled}
                        onChange={(e) => setFormData({ ...formData, deliveryEnabled: e.target.checked })}
                        style={{ width: '20px', height: '20px' }}
                      />
                      <span>Livraison</span>
                    </label>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    style={{
                      flex: 1,
                      padding: '1rem',
                      backgroundColor: '#6c757d',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                    }}
                  >
                    ← Précédent
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      flex: 2,
                      padding: '1rem',
                      backgroundColor: '#28a745',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      cursor: loading ? 'not-allowed' : 'pointer',
                      opacity: loading ? 0.6 : 1,
                    }}
                  >
                    {loading ? 'Création en cours...' : '🚀 Créer mon application'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

