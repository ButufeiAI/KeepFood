import { Table } from '../services/tables.service';
import { Card } from './Card';
import { TableVisualization } from './TableVisualization';

interface TableCardProps {
  table: Table;
  onQRCode?: () => void;
  onDelete?: () => void;
  showActions?: boolean;
}

export function TableCard({ table, onQRCode, onDelete, showActions = true }: TableCardProps) {
  return (
    <Card
      style={{
        border: table.isActive ? '2px solid #28a745' : '2px solid #dc3545',
        position: 'relative',
      }}
    >
      {/* Header avec nom et statut */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h3
          style={{
            margin: 0,
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#1a1a1a',
          }}
        >
          {table.name}
        </h3>
        <span
          style={{
            padding: '0.25rem 0.75rem',
            borderRadius: '12px',
            fontSize: '0.75rem',
            fontWeight: '600',
            backgroundColor: table.isActive ? '#d4edda' : '#f8d7da',
            color: table.isActive ? '#155724' : '#721c24',
          }}
        >
          {table.isActive ? 'Active' : 'Inactive'}
        </span>
      </div>

      {/* Visualisation graphique de la table */}
      <div style={{ 
        marginBottom: '1rem', 
        backgroundColor: '#f8f9fa', 
        borderRadius: '12px', 
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <TableVisualization capacity={table.capacity} size={120} />
        <p style={{ 
          marginTop: '1rem', 
          color: '#666', 
          fontSize: '0.9rem',
          textAlign: 'center',
        }}>
          <strong>{table.capacity}</strong> {table.capacity === 1 ? 'personne' : 'personnes'}
        </p>
      </div>

      {/* Informations */}
      {table.zone && (
        <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '1.2rem', lineHeight: '1' }}>📍</span>
          <span style={{ color: '#666', fontSize: '0.9rem' }}>
            Zone: <strong>{table.zone}</strong>
          </span>
        </div>
      )}

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
          {onQRCode && (
            <button
              onClick={onQRCode}
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
              📱 QR Code
            </button>
          )}
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

