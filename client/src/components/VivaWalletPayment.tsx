import React, { useState, useEffect } from 'react';
import { paymentsService } from '../services/payments.service';

interface VivaWalletPaymentProps {
  amount: number;
  restaurantId: string;
  onSuccess: (paymentIntentId: string) => void;
  onError: (error: string) => void;
  onCancel: () => void;
}

export function VivaWalletPayment({ amount, restaurantId, onSuccess, onError, onCancel }: VivaWalletPaymentProps) {
  const [loading, setLoading] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);
  const [paymentIntentId, setPaymentIntentId] = useState<string | null>(null);

  useEffect(() => {
    // Créer l'intention de paiement Viva Wallet
    const createIntent = async () => {
      try {
        setLoading(true);
        const result = await paymentsService.createPaymentIntent(amount, restaurantId);
        
        if (result.redirectUrl) {
          setRedirectUrl(result.redirectUrl);
          setPaymentIntentId(result.paymentIntentId);
        } else {
          onError('Impossible de créer l\'intention de paiement Viva Wallet');
        }
      } catch (err: any) {
        onError(err.message || 'Erreur lors de la création du paiement');
      } finally {
        setLoading(false);
      }
    };

    createIntent();
  }, [amount, restaurantId, onError]);

  const handleRedirect = () => {
    if (redirectUrl) {
      // Ouvrir dans une nouvelle fenêtre et surveiller le retour
      const popup = window.open(redirectUrl, 'VivaWalletPayment', 'width=600,height=800');
      
      // Surveiller si la fenêtre est fermée (paiement terminé)
      const checkClosed = setInterval(() => {
        if (popup?.closed) {
          clearInterval(checkClosed);
          // Vérifier le statut du paiement
          if (paymentIntentId) {
            // En production, on devrait vérifier via un webhook ou polling
            // Pour l'instant, on suppose que c'est réussi si la fenêtre se ferme
            setTimeout(() => {
              onSuccess(paymentIntentId);
            }, 1000);
          }
        }
      }, 500);

      // Timeout après 30 minutes
      setTimeout(() => {
        clearInterval(checkClosed);
        if (popup && !popup.closed) {
          popup.close();
          onError('Le paiement a expiré');
        }
      }, 30 * 60 * 1000);
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <p>Préparation du paiement Viva Wallet...</p>
      </div>
    );
  }

  if (!redirectUrl) {
    return (
      <div style={{
        padding: '1rem',
        backgroundColor: '#fee',
        color: '#c33',
        borderRadius: '8px',
        marginBottom: '1rem',
      }}>
        <p style={{ margin: 0 }}>
          ⚠️ Impossible de créer le paiement Viva Wallet
        </p>
      </div>
    );
  }

  return (
    <div>
      <div style={{
        padding: '1.5rem',
        backgroundColor: '#e7f3ff',
        borderRadius: '8px',
        marginBottom: '1.5rem',
        fontSize: '0.9rem',
      }}>
        <p style={{ margin: '0 0 0.5rem 0', fontWeight: '500' }}>
          💳 Paiement sécurisé Viva Wallet
        </p>
        <p style={{ margin: 0, color: '#666' }}>
          Vous allez être redirigé vers la page de paiement sécurisée de Viva Wallet.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <button
          onClick={onCancel}
          style={{
            flex: 1,
            padding: '0.75rem',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
        >
          Annuler
        </button>
        <button
          onClick={handleRedirect}
          style={{
            flex: 1,
            padding: '0.75rem',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold',
          }}
        >
          Payer avec Viva Wallet
        </button>
      </div>
    </div>
  );
}
