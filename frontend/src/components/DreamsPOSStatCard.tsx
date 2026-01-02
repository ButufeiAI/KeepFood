import React from 'react';

interface DreamsPOSStatCardProps {
  title: string;
  value: string | number;
  trend?: {
    value: string;
    positive: boolean;
  };
  icon?: string;
  bgGradient?: string;
  iconBgColor?: string;
}

export const DreamsPOSStatCard: React.FC<DreamsPOSStatCardProps> = ({
  title,
  value,
  trend,
  icon,
  bgGradient = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  iconBgColor = 'rgba(255,255,255,0.2)',
}) => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '1.5rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid #f0f0f0',
      }}
    >
      {/* Icône en arrière-plan avec gradient */}
      {icon && (
        <div
          style={{
            position: 'absolute',
            top: '-20px',
            right: '-20px',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: bgGradient,
            opacity: 0.1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem',
          }}
        >
          {icon}
        </div>
      )}
      
      {/* Contenu */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <p
          style={{
            fontSize: '0.875rem',
            color: '#6c757d',
            margin: 0,
            marginBottom: '0.75rem',
            fontWeight: '500',
          }}
        >
          {title}
        </p>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <h3
            style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#212529',
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            {value}
          </h3>
          {trend && (
            <span
              style={{
                fontSize: '0.875rem',
                fontWeight: '600',
                color: trend.positive ? '#28a745' : '#dc3545',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
              }}
            >
              {trend.positive ? '↗' : '↘'}
              {trend.value}
            </span>
          )}
        </div>
      </div>

      {/* Barre décorative en bas */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: bgGradient,
        }}
      />
    </div>
  );
};
