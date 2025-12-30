import { useState } from 'react';
import { useToast } from '../components/ToastContainer';
import { useIsMobile } from '../hooks/useIsMobile';
import api from '../services/api';

interface RatingModalProps {
  orderId: string;
  restaurantId: string;
  restaurantName: string;
  onClose: () => void;
  onSubmit?: () => void;
}

export function RatingModal({ orderId, restaurantId, restaurantName, onClose, onSubmit }: RatingModalProps) {
  const toast = useToast();
  const isMobile = useIsMobile();
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (rating === 0) {
      toast.warning('Veuillez sélectionner une note');
      return;
    }

    try {
      setSubmitting(true);
      await api.post('/reviews', {
        orderId,
        restaurantId,
        rating,
        comment: comment.trim() || undefined,
      });
      toast.success('Merci pour votre avis !');
      onSubmit?.();
      onClose();
    } catch (error: any) {
      console.error('Erreur lors de l\'envoi de l\'avis:', error);
      toast.error(error.response?.data?.message || 'Erreur lors de l\'envoi de l\'avis');
    } finally {
      setSubmitting(false);
    }
  };

  const renderStars = () => {
    return [1, 2, 3, 4, 5].map((star) => (
      <button
        key={star}
        type="button"
        onMouseEnter={() => setHoveredRating(star)}
        onMouseLeave={() => setHoveredRating(0)}
        onClick={() => setRating(star)}
        style={{
          background: 'none',
          border: 'none',
          fontSize: isMobile ? '2.5rem' : '3rem',
          cursor: 'pointer',
          color: star <= (hoveredRating || rating) ? '#ffc107' : '#e0e0e0',
          transition: 'color 0.2s, transform 0.2s',
          padding: '0 0.2rem',
        }}
        onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
        onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        ★
      </button>
    ));
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: isMobile ? '1rem' : '2rem',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: isMobile ? '1.5rem' : '2rem',
          maxWidth: '500px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 style={{ marginTop: 0, marginBottom: '1rem', fontSize: isMobile ? '1.5rem' : '1.75rem' }}>
          Notez votre expérience
        </h2>
        <p style={{ margin: '0 0 1.5rem 0', color: '#666' }}>
          Restaurant : <strong>{restaurantName}</strong>
        </p>

        {/* Étoiles */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{ marginBottom: '0.5rem' }}>{renderStars()}</div>
          <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>
            {rating === 0 && 'Cliquez pour noter'}
            {rating === 1 && '⭐ Très mauvais'}
            {rating === 2 && '⭐⭐ Mauvais'}
            {rating === 3 && '⭐⭐⭐ Moyen'}
            {rating === 4 && '⭐⭐⭐⭐ Bon'}
            {rating === 5 && '⭐⭐⭐⭐⭐ Excellent'}
          </p>
        </div>

        {/* Commentaire */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
            Commentaire (optionnel)
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Partagez votre expérience..."
            maxLength={500}
            rows={4}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontSize: '1rem',
              resize: 'vertical',
              fontFamily: 'inherit',
            }}
          />
          <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.85rem', color: '#999', textAlign: 'right' }}>
            {comment.length}/500 caractères
          </p>
        </div>

        {/* Boutons */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
          <button
            onClick={onClose}
            disabled={submitting}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: submitting ? 'not-allowed' : 'pointer',
              fontSize: '1rem',
              opacity: submitting ? 0.6 : 1,
            }}
          >
            Annuler
          </button>
          <button
            onClick={handleSubmit}
            disabled={submitting || rating === 0}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: rating === 0 ? '#ccc' : '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: submitting || rating === 0 ? 'not-allowed' : 'pointer',
              fontSize: '1rem',
              opacity: submitting ? 0.6 : 1,
            }}
          >
            {submitting ? 'Envoi...' : 'Envoyer'}
          </button>
        </div>
      </div>
    </div>
  );
}

