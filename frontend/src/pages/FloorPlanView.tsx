import React, { useState, useEffect } from 'react';
import { useAuthStore } from '../stores/auth.store';
import { tablesService, Table } from '../services/tables.service';
import { TableVisualization } from '../components/TableVisualization';

interface TablePosition extends Table {
  currentOrder?: any;
  orderTime?: Date;
}

export function FloorPlanView() {
  const { user } = useAuthStore();
  const [tables, setTables] = useState<Table[]>([]);
  const [selectedZone, setSelectedZone] = useState<string>('all');
  const [zones, setZones] = useState<string[]>([]);
  const [autoRefresh, setAutoRefresh] = useState(true);

  useEffect(() => {
    loadFloorPlan();
    const interval = setInterval(() => {
      if (autoRefresh) {
        loadFloorPlan();
      }
    }, 5000); // Rafraîchir toutes les 5 secondes
    return () => clearInterval(interval);
  }, [autoRefresh]);

  const loadFloorPlan = async () => {
    try {
      // Charger les tables
      const tablesData = await tablesService.getAll(user?.restaurantId);
      
      // Extraire zones uniques
      const uniqueZones = Array.from(new Set(tablesData.map(t => t.zone).filter(Boolean))) as string[];
      setZones(uniqueZones.sort());

      setTables(tablesData);
    } catch (error) {
      console.error('Erreur chargement plan:', error);
    }
  };


  const getTableStats = () => {
    const total = tables.length;
    const active = tables.filter(t => t.isActive).length;
    const occupied = 0; // TODO: Calculer depuis les commandes
    const free = active - occupied;
    
    return { total, active, occupied, free };
  };

  const stats = getTableStats();

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Header avec stats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', fontWeight: '700', color: '#007bff' }}>{stats.total}</div>
          <div style={{ fontSize: '0.875rem', color: '#6c757d', marginTop: '0.25rem' }}>Tables Total</div>
        </div>
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', fontWeight: '700', color: '#28a745' }}>{stats.free}</div>
          <div style={{ fontSize: '0.875rem', color: '#6c757d', marginTop: '0.25rem' }}>Tables Libres</div>
        </div>
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', fontWeight: '700', color: '#ffc107' }}>{stats.occupied}</div>
          <div style={{ fontSize: '0.875rem', color: '#6c757d', marginTop: '0.25rem' }}>Tables Occupées</div>
        </div>
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', fontWeight: '700', color: '#6c757d' }}>{stats.active - stats.free - stats.occupied}</div>
          <div style={{ fontSize: '0.875rem', color: '#6c757d', marginTop: '0.25rem' }}>Tables Inactives</div>
        </div>
      </div>

      {/* Toolbar */}
      <div style={{
        backgroundColor: 'white',
        padding: '1rem',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
        alignItems: 'center'
      }}>
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: '600' }}>Filtrer par zone:</h3>
        <button
          onClick={() => setSelectedZone('all')}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: selectedZone === 'all' ? '#007bff' : '#f8f9fa',
            color: selectedZone === 'all' ? 'white' : '#212529',
            border: '1px solid #dee2e6',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '500'
          }}
        >
          🌍 Toutes
        </button>
        {zones.map(zone => (
          <button
            key={zone}
            onClick={() => setSelectedZone(zone)}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: selectedZone === zone ? '#007bff' : '#f8f9fa',
              color: selectedZone === zone ? 'white' : '#212529',
              border: '1px solid #dee2e6',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '500'
            }}
          >
            📍 {zone}
          </button>
        ))}
        <div style={{ flex: 1 }}></div>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={autoRefresh}
            onChange={(e) => setAutoRefresh(e.target.checked)}
            style={{ cursor: 'pointer' }}
          />
          <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>🔄 Auto-rafraîchir (5s)</span>
        </label>
      </div>

      {/* Grille des tables avec visualisation */}
      <div style={{
        flex: 1,
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        padding: '2rem',
        position: 'relative',
        overflow: 'auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '2rem',
          justifyItems: 'center'
        }}>
          {(selectedZone === 'all' ? tables : tables.filter(t => t.zone === selectedZone)).map(table => {
            // Couleur selon statut
            let borderColor = '#6c757d'; // Inactive
            let bgColor = '#f8f9fa';
            if (table.isActive) {
              borderColor = '#28a745'; // Libre
              bgColor = '#d4edda';
            }
            // TODO: Si commande en cours, couleur orange/rouge
            
            return (
              <div
                key={table.id}
                style={{
                  padding: '1.5rem',
                  border: `3px solid ${borderColor}`,
                  borderRadius: '12px',
                  backgroundColor: bgColor,
                  textAlign: 'center',
                  minWidth: '180px',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                }}
              >
                {/* Visualisation graphique de la table */}
                <div style={{ marginBottom: '1rem' }}>
                  <TableVisualization capacity={table.capacity} />
                </div>
                
                {/* Nom de la table */}
                <div style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: '#212529',
                  marginBottom: '0.5rem'
                }}>
                  {table.name}
                </div>
                
                {/* Capacité */}
                <div style={{
                  fontSize: '0.95rem',
                  color: '#6c757d',
                  marginBottom: '0.5rem'
                }}>
                  {table.capacity} personnes
                </div>
                
                {/* Zone */}
                {table.zone && (
                  <div style={{
                    fontSize: '0.875rem',
                    color: borderColor,
                    fontWeight: '600',
                    marginTop: '0.5rem',
                    padding: '0.25rem 0.75rem',
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    display: 'inline-block'
                  }}>
                    📍 {table.zone}
                  </div>
                )}
                
                {/* Statut */}
                <div style={{
                  marginTop: '0.75rem',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: borderColor
                }}>
                  {table.isActive ? '✅ Disponible' : '❌ Inactive'}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Légende */}
        <div style={{
          position: 'absolute',
          top: '2rem',
          right: '2rem',
          backgroundColor: 'white',
          padding: '1rem',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          fontSize: '0.875rem',
          border: '2px solid #dee2e6'
        }}>
          <div style={{ fontWeight: '600', marginBottom: '0.75rem' }}>📋 Légende</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <div style={{ width: '20px', height: '20px', backgroundColor: '#28a745', borderRadius: '4px' }}></div>
            <span>Table libre</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <div style={{ width: '20px', height: '20px', backgroundColor: '#ffc107', borderRadius: '4px' }}></div>
            <span>Table occupée</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '20px', height: '20px', backgroundColor: '#6c757d', borderRadius: '4px' }}></div>
            <span>Table inactive</span>
          </div>
        </div>
      </div>
    </div>
  );
}
