interface TableVisualizationProps {
  capacity: number;
  size?: number;
}

export function TableVisualization({ capacity, size = 150 }: TableVisualizationProps) {
  // Calculer le rayon pour placer les chaises autour de la table
  const tableRadius = size * 0.25;
  const chairRadius = size * 0.06;
  const chairDistance = size * 0.35;
  const centerX = size / 2;
  const centerY = size / 2;

  // Pour les petites tables (2-4 personnes), utiliser moins d'espace
  const spacingAngle = capacity <= 4 ? (Math.PI * 2) / capacity : (Math.PI * 2) / capacity;

  // Déterminer la forme de la table
  const isRound = capacity <= 6;
  const tableWidth = isRound ? tableRadius * 2 : tableRadius * 1.6;
  const tableHeight = isRound ? tableRadius * 2 : tableRadius * 1.2;

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
      <svg width={size} height={size} style={{ position: 'absolute', top: 0, left: 0 }}>
        {/* Dessiner les chaises */}
        {Array.from({ length: capacity }).map((_, index) => {
          const angle = index * spacingAngle - Math.PI / 2; // Commencer en haut
          const x = centerX + Math.cos(angle) * chairDistance;
          const y = centerY + Math.sin(angle) * chairDistance;

          return (
            <circle
              key={`chair-${index}`}
              cx={x}
              cy={y}
              r={chairRadius}
              fill="#8B4513"
              stroke="#654321"
              strokeWidth="2"
            />
          );
        })}

        {/* Dessiner la table */}
        {isRound ? (
          <circle
            cx={centerX}
            cy={centerY}
            r={tableRadius}
            fill="#D2691E"
            stroke="#A0522D"
            strokeWidth="3"
          />
        ) : (
          <rect
            x={centerX - tableWidth / 2}
            y={centerY - tableHeight / 2}
            width={tableWidth}
            height={tableHeight}
            rx="8"
            fill="#D2691E"
            stroke="#A0522D"
            strokeWidth="3"
          />
        )}

        {/* Texte avec le nombre de personnes au centre */}
        <text
          x={centerX}
          y={centerY}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize={size * 0.15}
          fontWeight="bold"
          style={{ pointerEvents: 'none' }}
        >
          {capacity}
        </text>
      </svg>
    </div>
  );
}

