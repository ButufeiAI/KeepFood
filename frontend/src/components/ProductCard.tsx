import { Product } from '../services/products.service';
import { Card } from './Card';

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
  onDelete?: () => void;
  showActions?: boolean;
}

export function ProductCard({ product, onClick, onDelete, showActions = true }: ProductCardProps) {
  const mainImage = product.images && product.images.length > 0 ? product.images[0].url : null;

  return (
    <Card
      onClick={onClick}
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Image du produit */}
      {mainImage && (
        <div
          style={{
            width: '100%',
            height: '200px',
            marginBottom: '1rem',
            borderRadius: '12px',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <img
            src={mainImage}
            alt={product.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          {product.images && product.images.length > 1 && (
            <span
              style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                backgroundColor: 'rgba(0,0,0,0.7)',
                color: 'white',
                padding: '0.25rem 0.5rem',
                borderRadius: '8px',
                fontSize: '0.75rem',
                fontWeight: 'bold',
              }}
            >
              +{product.images.length - 1}
            </span>
          )}
        </div>
      )}

      {/* Header avec nom */}
      <div style={{ marginBottom: '0.75rem' }}>
        <h3
          style={{
            margin: 0,
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: '#1a1a1a',
            marginBottom: '0.5rem',
          }}
        >
          {product.name}
        </h3>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <span
            style={{
              padding: '0.25rem 0.75rem',
              borderRadius: '12px',
              fontSize: '0.75rem',
              fontWeight: '600',
              backgroundColor: product.isAvailable ? '#d4edda' : '#f8d7da',
              color: product.isAvailable ? '#155724' : '#721c24',
            }}
          >
            {product.isAvailable ? 'Disponible' : 'Indisponible'}
          </span>
          {(product as any).type && (
            <span
              style={{
                padding: '0.25rem 0.75rem',
                borderRadius: '12px',
                fontSize: '0.75rem',
                fontWeight: '600',
                backgroundColor: (product as any).type === 'FOOD' ? '#fff5e6' : '#e7f3ff',
                color: (product as any).type === 'FOOD' ? '#cc6600' : '#0056b3',
              }}
            >
              {(product as any).type === 'FOOD' ? '🍽️ Nourriture' : '🥤 Boisson'}
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      {(product.description || (product as any).shortDescription) && (
        <p
          style={{
            margin: '0 0 1rem 0',
            color: '#666',
            fontSize: '0.9rem',
            lineHeight: '1.5',
          }}
        >
          {product.description || (product as any).shortDescription}
        </p>
      )}

      {/* Prix */}
      <div style={{ marginBottom: '1rem' }}>
        <span
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#007bff',
          }}
        >
          {product.price.toFixed(2)} €
        </span>
      </div>

      {/* Actions */}
      {showActions && (
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            paddingTop: '1rem',
            borderTop: '1px solid #f0f0f0',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {onDelete && (
            <button
              onClick={onDelete}
              style={{
                flex: 1,
                padding: '0.75rem',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '600',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#c82333';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#dc3545';
              }}
            >
              🗑️ Supprimer
            </button>
          )}
        </div>
      )}
    </Card>
  );
}

