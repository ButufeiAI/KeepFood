import { Restaurant } from '../types';
import { Card } from './Card';

interface RestaurantCardProps {
  restaurant: Restaurant;
  onClick?: () => void;
  onEdit?: () => void;
  showActions?: boolean;
}

export function RestaurantCard({ restaurant, onClick, onEdit, showActions = true }: RestaurantCardProps) {
  return (
    <Card
      onClick={onClick}
      style={{
        background: restaurant.logo
          ? `linear-gradient(135deg, rgba(0,123,255,0.1) 0%, rgba(255,255,255,1) 100%)`
          : 'white',
        position: 'relative',
      }}
    >
      {/* Header avec logo et nom */}
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
        {restaurant.logo && (
          <div
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '12px',
              overflow: 'hidden',
              flexShrink: 0,
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            <img
              src={restaurant.logo}
              alt={restaurant.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        )}
        <div style={{ flex: 1, minWidth: 0 }}>
          <h3
            style={{
              margin: 0,
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#1a1a1a',
              marginBottom: '0.25rem',
            }}
          >
            {restaurant.name}
          </h3>
          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                padding: '0.25rem 0.75rem',
                borderRadius: '12px',
                fontSize: '0.75rem',
                fontWeight: '600',
                backgroundColor: restaurant.isActive ? '#d4edda' : '#f8d7da',
                color: restaurant.isActive ? '#155724' : '#721c24',
              }}
            >
              {restaurant.isActive ? 'Actif' : 'Inactif'}
            </span>
            <span
              style={{
                padding: '0.25rem 0.75rem',
                borderRadius: '12px',
                fontSize: '0.75rem',
                fontWeight: '600',
                backgroundColor: '#e7f3ff',
                color: '#0056b3',
              }}
            >
              {restaurant.plan}
            </span>
          </div>
        </div>
      </div>

      {/* Informations */}
      <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '1rem' }}>
        {restaurant.address && (
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.2rem', lineHeight: '1' }}>📍</span>
            <div>
              <p style={{ margin: 0, color: '#666', fontSize: '0.9rem', lineHeight: '1.5' }}>
                {restaurant.address}
                {restaurant.city && `, ${restaurant.city}`}
                {restaurant.zipCode && ` ${restaurant.zipCode}`}
                {restaurant.country && `, ${restaurant.country}`}
              </p>
            </div>
          </div>
        )}

        {restaurant.phone && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.2rem', lineHeight: '1' }}>📞</span>
            <span style={{ color: '#666', fontSize: '0.9rem' }}>{restaurant.phone}</span>
          </div>
        )}

        {restaurant.email && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.2rem', lineHeight: '1' }}>✉️</span>
            <span style={{ color: '#666', fontSize: '0.9rem' }}>{restaurant.email}</span>
          </div>
        )}

        {/* Canaux activés */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
          {restaurant.onSiteEnabled && (
            <span
              style={{
                padding: '0.25rem 0.75rem',
                borderRadius: '8px',
                fontSize: '0.75rem',
                backgroundColor: '#f0f8ff',
                color: '#0056b3',
              }}
            >
              🍽️ Sur place
            </span>
          )}
          {restaurant.takeawayEnabled && (
            <span
              style={{
                padding: '0.25rem 0.75rem',
                borderRadius: '8px',
                fontSize: '0.75rem',
                backgroundColor: '#fff5e6',
                color: '#cc6600',
              }}
            >
              📦 À emporter
            </span>
          )}
          {restaurant.deliveryEnabled && (
            <span
              style={{
                padding: '0.25rem 0.75rem',
                borderRadius: '8px',
                fontSize: '0.75rem',
                backgroundColor: '#ffe6f0',
                color: '#cc0066',
              }}
            >
              🚚 Livraison
            </span>
          )}
        </div>
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
          {onEdit && (
            <button
              onClick={onEdit}
              style={{
                flex: 1,
                padding: '0.75rem',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '600',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0056b3';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#007bff';
              }}
            >
              ✏️ Modifier
            </button>
          )}
        </div>
      )}
    </Card>
  );
}

