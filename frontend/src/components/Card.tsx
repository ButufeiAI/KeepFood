import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  hover?: boolean;
}

export function Card({ children, onClick, style, hover = true }: CardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        padding: '1.5rem',
        cursor: onClick ? 'pointer' : 'default',
        transition: hover ? 'all 0.3s ease' : 'none',
        border: '1px solid #f0f0f0',
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
      onMouseEnter={(e) => {
        if (hover && onClick) {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.12)';
          e.currentTarget.style.borderColor = '#007bff';
        }
      }}
      onMouseLeave={(e) => {
        if (hover && onClick) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
          e.currentTarget.style.borderColor = '#f0f0f0';
        }
      }}
    >
      {children}
    </div>
  );
}

