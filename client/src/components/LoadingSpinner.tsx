interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  message?: string;
  fullScreen?: boolean;
}

export function LoadingSpinner({ 
  size = 'medium', 
  message = 'Chargement...',
  fullScreen = false 
}: LoadingSpinnerProps) {
  const sizeMap = {
    small: '40px',
    medium: '60px',
    large: '80px',
  };

  const spinnerSize = sizeMap[size];

  const containerStyle: React.CSSProperties = fullScreen ? {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f8f9fa',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
  } : {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
  };

  return (
    <div style={containerStyle}>
      <div style={{ textAlign: 'center' }}>
        <div style={{
          width: spinnerSize,
          height: spinnerSize,
          border: '4px solid #f3f3f3',
          borderTop: '4px solid #007bff',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto 1rem',
        }}></div>
        {message && (
          <p style={{ 
            color: '#666', 
            fontSize: size === 'small' ? '0.9rem' : '1.1rem',
            margin: 0 
          }}>
            {message}
          </p>
        )}
      </div>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

