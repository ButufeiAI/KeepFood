import React from 'react';

interface TableVisualizationProps {
  capacity: number;
  size?: number;
}

export function TableVisualization({ capacity, size = 150 }: TableVisualizationProps) {
  const centerX = size / 2;
  const centerY = size / 2;
  
  // Dimensions adaptées selon la capacité
  const tableRadius = capacity <= 4 ? size * 0.22 : capacity <= 6 ? size * 0.25 : size * 0.28;
  const chairWidth = size * 0.12;
  const chairHeight = size * 0.10;
  const chairDistance = tableRadius + size * 0.15;
  
  // Déterminer la forme de la table
  const isRound = capacity <= 6;
  const tableWidth = isRound ? tableRadius * 2 : tableRadius * 2.2;
  const tableHeight = isRound ? tableRadius * 2 : tableRadius * 1.4;
  
  // Calculer l'angle entre chaque chaise
  const angleStep = (Math.PI * 2) / capacity;

  // Fonction pour dessiner une chaise avec dossier
  const renderChair = (x: number, y: number, angle: number, index: number) => {
    const chairX = x - chairWidth / 2;
    const chairY = y - chairHeight / 2;
    
    return (
      <g key={`chair-${index}`} transform={`rotate(${(angle * 180) / Math.PI}, ${x}, ${y})`}>
        {/* Dossier de la chaise */}
        <rect
          x={chairX}
          y={chairY - chairHeight * 0.3}
          width={chairWidth}
          height={chairHeight * 0.3}
          rx="3"
          fill="#8B4513"
          stroke="#654321"
          strokeWidth="1.5"
        />
        
        {/* Siège de la chaise */}
        <rect
          x={chairX}
          y={chairY}
          width={chairWidth}
          height={chairHeight}
          rx="4"
          fill="#A0522D"
          stroke="#654321"
          strokeWidth="1.5"
        />
        
        {/* Pieds de la chaise (2 visibles) */}
        <line
          x1={chairX + chairWidth * 0.2}
          y1={chairY + chairHeight}
          x2={chairX + chairWidth * 0.2}
          y2={chairY + chairHeight + chairHeight * 0.3}
          stroke="#654321"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1={chairX + chairWidth * 0.8}
          y1={chairY + chairHeight}
          x2={chairX + chairWidth * 0.8}
          y2={chairY + chairHeight + chairHeight * 0.3}
          stroke="#654321"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    );
  };

  return (
    <div
      style={{
        width: size,
        height: size,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '1rem auto',
      }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Ombre de la table */}
        <defs>
          <filter id="tableShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
            <feOffset dx="2" dy="2" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          {/* Gradient pour la table */}
          <radialGradient id="tableGradient" cx="40%" cy="40%">
            <stop offset="0%" stopColor="#E8A87C" />
            <stop offset="100%" stopColor="#C87533" />
          </radialGradient>
        </defs>

        {/* Dessiner les chaises autour de la table */}
        {Array.from({ length: capacity }).map((_, index) => {
          const angle = index * angleStep - Math.PI / 2; // Commencer en haut
          const x = centerX + Math.cos(angle) * chairDistance;
          const y = centerY + Math.sin(angle) * chairDistance;
          
          return renderChair(x, y, angle + Math.PI / 2, index);
        })}

        {/* Dessiner la table */}
        {isRound ? (
          <>
            {/* Table ronde */}
            <circle
              cx={centerX}
              cy={centerY}
              r={tableRadius}
              fill="url(#tableGradient)"
              stroke="#8B4513"
              strokeWidth="3"
              filter="url(#tableShadow)"
            />
            {/* Bordure brillante */}
            <circle
              cx={centerX}
              cy={centerY}
              r={tableRadius - 5}
              fill="none"
              stroke="#D4A574"
              strokeWidth="1.5"
              opacity="0.5"
            />
          </>
        ) : (
          <>
            {/* Table rectangulaire */}
            <rect
              x={centerX - tableWidth / 2}
              y={centerY - tableHeight / 2}
              width={tableWidth}
              height={tableHeight}
              rx="8"
              fill="url(#tableGradient)"
              stroke="#8B4513"
              strokeWidth="3"
              filter="url(#tableShadow)"
            />
            {/* Bordure brillante */}
            <rect
              x={centerX - tableWidth / 2 + 5}
              y={centerY - tableHeight / 2 + 5}
              width={tableWidth - 10}
              height={tableHeight - 10}
              rx="6"
              fill="none"
              stroke="#D4A574"
              strokeWidth="1.5"
              opacity="0.5"
            />
          </>
        )}

        {/* Badge avec le nombre de places */}
        <g>
          {/* Fond du badge */}
          <circle
            cx={centerX}
            cy={centerY}
            r={size * 0.12}
            fill="white"
            stroke="#007bff"
            strokeWidth="2.5"
          />
          
          {/* Icône de personnes */}
          <text
            x={centerX}
            y={centerY - size * 0.03}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#007bff"
            fontSize={size * 0.08}
            fontWeight="bold"
          >
            👥
          </text>
          
          {/* Nombre */}
          <text
            x={centerX}
            y={centerY + size * 0.06}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#212529"
            fontSize={size * 0.11}
            fontWeight="bold"
          >
            {capacity}
          </text>
        </g>
      </svg>
      
      {/* Légende en dessous */}
      <div style={{
        position: 'absolute',
        bottom: '-25px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '0.75rem',
        color: '#6c757d',
        whiteSpace: 'nowrap',
        fontWeight: '500'
      }}>
        {capacity} {capacity === 1 ? 'place' : 'places'}
      </div>
    </div>
  );
}
