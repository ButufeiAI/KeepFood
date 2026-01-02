import React, { useState, useEffect } from 'react';
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { paymentsService } from '../services/payments.service';

interface StripePaymentProps {
  amount: number;
  restaurantId: string;
  onSuccess: (paymentIntentId: string) => void;
  onError: (error: string) => void;
  onCancel: () => void;
}

// Charger Stripe avec la clé publique
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '');

function StripeCheckoutForm({ onSuccess, onCancel }: {
  onSuccess: (paymentIntentId: string) => void;
  onError: (error: string) => void;
  onCancel: () => void;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { error: submitError } = await elements.submit();
      if (submitError) {
        setError(submitError.message || 'Erreur lors de la soumission');
        setLoading(false);
        return;
      }

      const { error: confirmError, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: window.location.origin + '/order-success',
        },
        redirect: 'if_required',
      });

      if (confirmError) {
        setError(confirmError.message || 'Erreur lors du paiement');
        setLoading(false);
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        onSuccess(paymentIntent.id);
      }
    } catch (err: any) {
      setError(err.message || 'Erreur inattendue');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <PaymentElement />
      {error && (
        <div style={{
          marginTop: '1rem',
          padding: '0.75rem',
          backgroundColor: '#fee',
          color: '#c33',
          borderRadius: '4px',
          fontSize: '0.9rem',
        }}>
          {error}
        </div>
      )}
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
        <button
          type="button"
          onClick={onCancel}
          disabled={loading}
          style={{
            flex: 1,
            padding: '0.75rem',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontSize: '1rem',
          }}
        >
          Annuler
        </button>
        <button
          type="submit"
          disabled={loading || !stripe}
          style={{
            flex: 1,
            padding: '0.75rem',
            backgroundColor: loading || !stripe ? '#6c757d' : '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: loading || !stripe ? 'not-allowed' : 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold',
          }}
        >
          {loading ? 'Traitement...' : 'Payer'}
        </button>
      </div>
    </form>
  );
}

export function StripePayment({ amount, restaurantId, onSuccess, onError, onCancel }: StripePaymentProps) {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Créer l'intention de paiement
    const createIntent = async () => {
      try {
        const result = await paymentsService.createPaymentIntent(amount, restaurantId);
        if (result.clientSecret) {
          setClientSecret(result.clientSecret);
        } else {
          onError('Impossible de créer l\'intention de paiement');
        }
      } catch (err: any) {
        onError(err.message || 'Erreur lors de la création du paiement');
      } finally {
        setLoading(false);
      }
    };

    createIntent();
  }, [amount, restaurantId, onError]);

  if (loading || !clientSecret) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <p>Chargement du formulaire de paiement...</p>
      </div>
    );
  }

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: 'stripe',
    },
  };

  if (!import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY) {
    return (
      <div style={{
        padding: '1rem',
        backgroundColor: '#fff3cd',
        border: '1px solid #ffc107',
        borderRadius: '8px',
        marginBottom: '1rem',
      }}>
        <p style={{ margin: 0, color: '#856404' }}>
          ⚠️ Stripe n'est pas configuré. Veuillez définir VITE_STRIPE_PUBLISHABLE_KEY
        </p>
      </div>
    );
  }

  return (
    <Elements stripe={stripePromise} options={options}>
      <StripeCheckoutForm
        onSuccess={onSuccess}
        onError={onError}
        onCancel={onCancel}
      />
    </Elements>
  );
}
