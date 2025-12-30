import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/auth.store';
import { useToast } from '../components/ToastContainer';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { useIsMobile } from '../hooks/useIsMobile';
import api from '../services/api';

interface Table {
  id: string;
  name: string;
  capacity: number;
  zone: string;
  isActive: boolean;
}

interface Waiter {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  isActive: boolean;
  assignedTables: Array<{
    id: string;
    tableId: string;
    tableName: string;
    zone: string;
    isActive: boolean;
  }>;
}

interface Zone {
  name: string;
  tables: Table[];
  color: string;
}

const ZONE_COLORS: { [key: string]: string } = {
  'Salle principale': '#007bff',
  'Terrasse': '#28a745',
  'Bar': '#ffc107',
  'Salon privé': '#6f42c1',
  'Jardin': '#17a2b8',
  'Étage': '#fd7e14',
  'VIP': '#dc3545',
};

export function TableAssignments() {
  const navigate = useNavigate();
  const toast = useToast();
  const isMobile = useIsMobile();
  const { user } = useAuthStore();

  const [loading, setLoading] = useState(true);
  const [tables, setTables] = useState<Table[]>([]);
  const [waiters, setWaiters] = useState<Waiter[]>([]);
  const [zones, setZones] = useState<Zone[]>([]);
  const [selectedWaiter, setSelectedWaiter] = useState<string | null>(null);
  const [selectedTables, setSelectedTables] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'zones' | 'waiters'>('zones');

  useEffect(() => {
    if (user?.role !== 'ADMIN_RESTAURANT' && user?.role !== 'SUPER_ADMIN' && user?.role !== 'MANAGER') {
      toast.error('Accès non autorisé');
      navigate('/dashboard');
      return;
    }
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const [tablesRes, waitersRes] = await Promise.all([
        api.get('/tables'),
        api.get('/employees?role=SERVEUR'),
      ]);

      setTables(tablesRes.data);
      setWaiters(waitersRes.data);

      // Organiser par zones
      const zoneMap: { [key: string]: Table[] } = {};
      tablesRes.data.forEach((table: Table) => {
        const zoneName = table.zone || 'Non assigné';
        if (!zoneMap[zoneName]) {
          zoneMap[zoneName] = [];
        }
        zoneMap[zoneName].push(table);
      });

      const zonesArray = Object.entries(zoneMap).map(([name, tables]) => ({
        name,
        tables,
        color: ZONE_COLORS[name] || '#6c757d',
      }));

      setZones(zonesArray);
    } catch (error: any) {
      console.error('Erreur chargement:', error);
      toast.error('Erreur lors du chargement des données');
    } finally {
      setLoading(false);
    }
  };

  const handleAssignTables = async () => {
    if (!selectedWaiter || selectedTables.length === 0) {
      toast.warning('Veuillez sélectionner un serveur et au moins une table');
      return;
    }

    try {
      await api.post('/table-assignments', {
        userId: selectedWaiter,
        tableIds: selectedTables,
      });

      toast.success(`${selectedTables.length} table(s) assignée(s) avec succès !`);
      setSelectedWaiter(null);
      setSelectedTables([]);
      loadData();
    } catch (error: any) {
      console.error('Erreur attribution:', error);
      toast.error(error.response?.data?.message || 'Erreur lors de l\'attribution');
    }
  };

  const handleUnassignTable = async (assignmentId: string) => {
    try {
      await api.delete(`/table-assignments/${assignmentId}`);
      toast.success('Table retirée du serveur');
      loadData();
    } catch (error: any) {
      console.error('Erreur:', error);
      toast.error('Erreur lors du retrait de la table');
    }
  };

  const autoAssignTables = async () => {
    if (!confirm('Voulez-vous répartir automatiquement toutes les tables entre les serveurs actifs ?')) {
      return;
    }

    try {
      await api.post('/table-assignments/auto-assign');
      toast.success('Attribution automatique terminée !');
      loadData();
    } catch (error: any) {
      console.error('Erreur:', error);
      toast.error('Erreur lors de l\'attribution automatique');
    }
  };

  const clearAllAssignments = async () => {
    if (!confirm('Voulez-vous vraiment retirer TOUTES les attributions de tables ?')) {
      return;
    }

    try {
      await api.delete('/table-assignments/clear-all');
      toast.success('Toutes les attributions ont été supprimées');
      loadData();
    } catch (error: any) {
      console.error('Erreur:', error);
      toast.error('Erreur lors de la suppression');
    }
  };

  const toggleTableSelection = (tableId: string) => {
    setSelectedTables((prev) =>
      prev.includes(tableId) ? prev.filter((id) => id !== tableId) : [...prev, tableId]
    );
  };

  const getTableAssignment = (tableId: string) => {
    for (const waiter of waiters) {
      const assignment = waiter.assignedTables.find((a) => a.tableId === tableId && a.isActive);
      if (assignment) {
        return {
          waiter,
          assignment,
        };
      }
    }
    return null;
  };

  if (loading) {
    return <LoadingSpinner fullscreen message="Chargement des attributions..." />;
  }

  return (
    <div style={{ maxWidth: '1600px', margin: '0 auto', padding: isMobile ? '0.5rem' : '1rem' }}>
      {/* Header */}
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div>
          <h1 style={{ margin: '0 0 0.5rem 0', fontSize: isMobile ? '1.5rem' : '2rem' }}>
            📍 Attribution des Tables
          </h1>
          <p style={{ margin: 0, color: '#666' }}>
            {waiters.length} serveur(s) • {tables.length} table(s) • {zones.length} zone(s)
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => navigate('/employees')}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            👥 Employés
          </button>
          <button
            onClick={autoAssignTables}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#17a2b8',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            🤖 Auto-Répartir
          </button>
          <button
            onClick={clearAllAssignments}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            🗑️ Tout Effacer
          </button>
        </div>
      </header>

      {/* Sélecteur de vue */}
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '2rem',
          backgroundColor: '#f8f9fa',
          padding: '0.5rem',
          borderRadius: '12px',
        }}
      >
        <button
          onClick={() => setViewMode('zones')}
          style={{
            flex: 1,
            padding: '0.75rem',
            backgroundColor: viewMode === 'zones' ? '#007bff' : 'white',
            color: viewMode === 'zones' ? 'white' : '#333',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.3s',
          }}
        >
          🗺️ Vue par Zones
        </button>
        <button
          onClick={() => setViewMode('waiters')}
          style={{
            flex: 1,
            padding: '0.75rem',
            backgroundColor: viewMode === 'waiters' ? '#007bff' : 'white',
            color: viewMode === 'waiters' ? 'white' : '#333',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.3s',
          }}
        >
          👔 Vue par Serveurs
        </button>
      </div>

      {/* Panneau d'attribution */}
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: isMobile ? '1rem' : '1.5rem',
          marginBottom: '2rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          border: '3px solid #28a745',
        }}
      >
        <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>➕ Attribuer des tables</h3>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr', gap: '1rem', alignItems: 'end' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Sélectionner un serveur
            </label>
            <select
              value={selectedWaiter || ''}
              onChange={(e) => setSelectedWaiter(e.target.value || null)}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem',
              }}
            >
              <option value="">-- Choisir un serveur --</option>
              {waiters
                .filter((w) => w.isActive)
                .map((waiter) => (
                  <option key={waiter.id} value={waiter.id}>
                    {waiter.firstName} {waiter.lastName} ({waiter.assignedTables.length} table(s))
                  </option>
                ))}
            </select>
          </div>

          <button
            onClick={handleAssignTables}
            disabled={!selectedWaiter || selectedTables.length === 0}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: selectedWaiter && selectedTables.length > 0 ? '#28a745' : '#ccc',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: selectedWaiter && selectedTables.length > 0 ? 'pointer' : 'not-allowed',
              fontWeight: 'bold',
              fontSize: '1rem',
            }}
          >
            ✅ Attribuer ({selectedTables.length})
          </button>
        </div>

        {selectedTables.length > 0 && (
          <div style={{ marginTop: '1rem' }}>
            <strong>Tables sélectionnées:</strong>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
              {selectedTables.map((tableId) => {
                const table = tables.find((t) => t.id === tableId);
                return table ? (
                  <span
                    key={tableId}
                    style={{
                      padding: '0.25rem 0.75rem',
                      backgroundColor: '#007bff',
                      color: 'white',
                      borderRadius: '12px',
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                    }}
                    onClick={() => toggleTableSelection(tableId)}
                  >
                    {table.name} ✕
                  </span>
                ) : null;
              })}
            </div>
          </div>
        )}
      </div>

      {/* Vue par Zones */}
      {viewMode === 'zones' && (
        <div>
          {zones.map((zone) => (
            <div
              key={zone.name}
              style={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                padding: isMobile ? '1rem' : '1.5rem',
                marginBottom: '2rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                border: `3px solid ${zone.color}`,
              }}
            >
              <h2
                style={{
                  marginTop: 0,
                  marginBottom: '1.5rem',
                  color: zone.color,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: '30px',
                    height: '30px',
                    backgroundColor: zone.color,
                    borderRadius: '50%',
                  }}
                />
                {zone.name} ({zone.tables.length} table(s))
              </h2>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? 'repeat(auto-fill, minmax(120px, 1fr))' : 'repeat(auto-fill, minmax(180px, 1fr))',
                  gap: '1rem',
                }}
              >
                {zone.tables.map((table) => {
                  const assignment = getTableAssignment(table.id);
                  const isSelected = selectedTables.includes(table.id);

                  return (
                    <div
                      key={table.id}
                      onClick={() => !assignment && toggleTableSelection(table.id)}
                      style={{
                        backgroundColor: isSelected ? zone.color : assignment ? '#f8f9fa' : 'white',
                        border: `3px solid ${isSelected ? zone.color : assignment ? '#ffc107' : '#ddd'}`,
                        borderRadius: '12px',
                        padding: '1rem',
                        cursor: assignment ? 'default' : 'pointer',
                        transition: 'all 0.3s',
                        textAlign: 'center',
                        position: 'relative',
                        opacity: table.isActive ? 1 : 0.5,
                      }}
                    >
                      {/* Badge serveur assigné */}
                      {assignment && (
                        <div
                          style={{
                            position: 'absolute',
                            top: '-10px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            backgroundColor: '#ffc107',
                            color: '#333',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '12px',
                            fontSize: '0.75rem',
                            fontWeight: 'bold',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {assignment.waiter.firstName[0]}.{assignment.waiter.lastName}
                        </div>
                      )}

                      {/* Icône table */}
                      <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                        {table.capacity <= 2 ? '🪑' : table.capacity <= 4 ? '🍽️' : '👥'}
                      </div>

                      {/* Nom table */}
                      <div
                        style={{
                          fontWeight: 'bold',
                          fontSize: '1.1rem',
                          marginBottom: '0.25rem',
                          color: isSelected ? 'white' : '#333',
                        }}
                      >
                        {table.name}
                      </div>

                      {/* Capacité */}
                      <div style={{ fontSize: '0.85rem', color: isSelected ? 'white' : '#666', marginBottom: '0.5rem' }}>
                        {table.capacity} place(s)
                      </div>

                      {/* Action retirer */}
                      {assignment && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleUnassignTable(assignment.assignment.id);
                          }}
                          style={{
                            padding: '0.25rem 0.75rem',
                            backgroundColor: '#dc3545',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '0.75rem',
                            marginTop: '0.5rem',
                          }}
                        >
                          ✕ Retirer
                        </button>
                      )}

                      {/* Checkmark si sélectionné */}
                      {isSelected && (
                        <div
                          style={{
                            position: 'absolute',
                            top: '0.5rem',
                            right: '0.5rem',
                            backgroundColor: 'white',
                            color: zone.color,
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold',
                          }}
                        >
                          ✓
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Vue par Serveurs */}
      {viewMode === 'waiters' && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {waiters.map((waiter) => (
            <div
              key={waiter.id}
              style={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                padding: '1.5rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                border: `3px solid ${waiter.isActive ? '#007bff' : '#ccc'}`,
                opacity: waiter.isActive ? 1 : 0.6,
              }}
            >
              {/* En-tête serveur */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: '#007bff',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                  }}
                >
                  {waiter.firstName[0]}{waiter.lastName[0]}
                </div>
                <div>
                  <h3 style={{ margin: '0 0 0.25rem 0' }}>
                    {waiter.firstName} {waiter.lastName}
                  </h3>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>
                    {waiter.assignedTables.length} table(s) assignée(s)
                  </p>
                </div>
              </div>

              {/* Tables assignées */}
              {waiter.assignedTables.length > 0 ? (
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                    gap: '0.75rem',
                  }}
                >
                  {waiter.assignedTables.map((assignment) => {
                    const zone = zones.find((z) => z.name === assignment.zone);
                    const color = zone?.color || '#6c757d';

                    return (
                      <div
                        key={assignment.id}
                        style={{
                          backgroundColor: color,
                          color: 'white',
                          borderRadius: '8px',
                          padding: '0.75rem',
                          textAlign: 'center',
                          position: 'relative',
                        }}
                      >
                        <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>
                          {assignment.tableName}
                        </div>
                        <div style={{ fontSize: '0.75rem', opacity: 0.9 }}>
                          {assignment.zone}
                        </div>
                        <button
                          onClick={() => handleUnassignTable(assignment.id)}
                          style={{
                            position: 'absolute',
                            top: '-5px',
                            right: '-5px',
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            backgroundColor: '#dc3545',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '0.7rem',
                            padding: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          ✕
                        </button>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div
                  style={{
                    textAlign: 'center',
                    padding: '2rem',
                    color: '#999',
                    fontSize: '0.9rem',
                  }}
                >
                  Aucune table assignée
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {waiters.length === 0 && (
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: '12px',
            padding: '3rem',
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>👔</div>
          <p style={{ margin: 0, fontSize: '1.1rem', color: '#666' }}>
            Aucun serveur disponible. Créez d'abord des employés avec le rôle "Serveur".
          </p>
          <button
            onClick={() => navigate('/employees')}
            style={{
              marginTop: '1.5rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            ➕ Créer des employés
          </button>
        </div>
      )}
    </div>
  );
}

