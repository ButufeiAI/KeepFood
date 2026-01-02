import React, { useState, useEffect } from 'react';
import { useAuthStore } from '../stores/auth.store';
import { zoneAssignmentsService, ZoneAssignment } from '../services/zone-assignments.service';
import { employeesService, Employee } from '../services/employees.service';
import { tablesService, Table } from '../services/tables.service';

export function ZoneAssignmentPage() {
  const { user } = useAuthStore();
  const [assignments, setAssignments] = useState<ZoneAssignment[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [zones, setZones] = useState<string[]>([]);
  const [selectedZone, setSelectedZone] = useState<string>('');
  const [selectedEmployees, setSelectedEmployees] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      
      // Charger les tables pour extraire les zones
      const tables = await tablesService.getAll(user?.restaurantId);
      const uniqueZones = Array.from(new Set(tables.map((t: Table) => t.zone).filter(Boolean))) as string[];
      setZones(uniqueZones.sort());

      // Charger les employés (serveurs)
      const emps = await employeesService.getAll(user?.restaurantId);
      setEmployees(emps.filter((e: Employee) => e.role === 'SERVER' || e.role === 'WAITER'));

      // Charger les attributions existantes
      const assigns = await zoneAssignmentsService.getAll(user?.restaurantId);
      setAssignments(assigns);
    } catch (error) {
      console.error('Erreur chargement données:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAssign = async () => {
    if (!selectedZone || selectedEmployees.length === 0) {
      alert('Veuillez sélectionner une zone et au moins un employé');
      return;
    }

    try {
      await zoneAssignmentsService.assignMultiple({
        zone: selectedZone,
        employeeIds: selectedEmployees,
        restaurantId: user?.restaurantId!,
      });
      
      setSelectedZone('');
      setSelectedEmployees([]);
      await loadData();
      alert('Attribution réussie ! 🎉');
    } catch (error) {
      console.error('Erreur attribution:', error);
      alert('Erreur lors de l\'attribution');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Supprimer cette attribution ?')) return;
    
    try {
      await zoneAssignmentsService.delete(id);
      await loadData();
    } catch (error) {
      console.error('Erreur suppression:', error);
    }
  };

  const toggleEmployee = (employeeId: string) => {
    setSelectedEmployees(prev =>
      prev.includes(employeeId)
        ? prev.filter(id => id !== employeeId)
        : [...prev, employeeId]
    );
  };

  const getAssignmentsByZone = (zone: string) => {
    return assignments.filter(a => a.zone === zone && a.isActive);
  };

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '3rem' }}>Chargement...</div>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>
          Attribution des Zones aux Serveurs
        </h2>
        <p style={{ color: '#6c757d', fontSize: '0.95rem' }}>
          Assignez des serveurs à chaque zone de votre restaurant
        </p>
      </div>

      {/* Formulaire d'attribution */}
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1.5rem' }}>
          Nouvelle Attribution
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {/* Sélection de la zone */}
          <div>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
              Zone
            </label>
            <select
              value={selectedZone}
              onChange={(e) => setSelectedZone(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #dee2e6',
                borderRadius: '8px',
                fontSize: '0.95rem'
              }}
            >
              <option value="">-- Sélectionner une zone --</option>
              {zones.map(zone => (
                <option key={zone} value={zone}>{zone}</option>
              ))}
            </select>
          </div>

          {/* Sélection des employés */}
          <div>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
              Serveurs (Multi-sélection)
            </label>
            <div style={{
              border: '1px solid #dee2e6',
              borderRadius: '8px',
              padding: '0.75rem',
              maxHeight: '200px',
              overflowY: 'auto',
              backgroundColor: '#f8f9fa'
            }}>
              {employees.map(emp => (
                <label
                  key={emp.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.5rem',
                    cursor: 'pointer',
                    borderRadius: '6px',
                    backgroundColor: selectedEmployees.includes(emp.id) ? '#e7f3ff' : 'transparent',
                    marginBottom: '0.25rem'
                  }}
                >
                  <input
                    type="checkbox"
                    checked={selectedEmployees.includes(emp.id)}
                    onChange={() => toggleEmployee(emp.id)}
                    style={{ cursor: 'pointer' }}
                  />
                  <span style={{ fontWeight: '500', fontSize: '0.95rem' }}>
                    {emp.firstName} {emp.lastName}
                  </span>
                </label>
              ))}
              {employees.length === 0 && (
                <p style={{ margin: 0, color: '#6c757d', fontSize: '0.875rem', textAlign: 'center' }}>
                  Aucun serveur disponible
                </p>
              )}
            </div>
          </div>
        </div>

        <button
          onClick={handleAssign}
          disabled={!selectedZone || selectedEmployees.length === 0}
          style={{
            marginTop: '1.5rem',
            padding: '0.75rem 2rem',
            backgroundColor: selectedZone && selectedEmployees.length > 0 ? '#28a745' : '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: selectedZone && selectedEmployees.length > 0 ? 'pointer' : 'not-allowed',
            fontWeight: '600',
            fontSize: '0.95rem'
          }}
        >
          ✅ Attribuer la zone
        </button>
      </div>

      {/* Affichage des attributions par zone */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem' }}>
        {zones.map(zone => {
          const zoneAssignments = getAssignmentsByZone(zone);
          return (
            <div
              key={zone}
              style={{
                backgroundColor: 'white',
                padding: '1.5rem',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem',
                paddingBottom: '0.75rem',
                borderBottom: '2px solid #007bff'
              }}>
                <h4 style={{
                  margin: 0,
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  color: '#007bff'
                }}>
                  📍 {zone}
                </h4>
                <span style={{
                  backgroundColor: '#e7f3ff',
                  color: '#007bff',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>
                  {zoneAssignments.length} serveur{zoneAssignments.length > 1 ? 's' : ''}
                </span>
              </div>

              {zoneAssignments.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {zoneAssignments.map(assignment => (
                    <div
                      key={assignment.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.75rem',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '8px',
                        border: '1px solid #dee2e6'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #28a745, #20c997)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontWeight: '700',
                          fontSize: '0.875rem'
                        }}>
                          {assignment.employee.firstName.charAt(0)}
                        </div>
                        <div>
                          <p style={{ margin: 0, fontWeight: '600', fontSize: '0.95rem' }}>
                            {assignment.employee.firstName} {assignment.employee.lastName}
                          </p>
                          <p style={{ margin: 0, fontSize: '0.75rem', color: '#6c757d' }}>
                            {assignment.employee.role}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDelete(assignment.id)}
                        style={{
                          padding: '0.5rem',
                          backgroundColor: '#dc3545',
                          color: 'white',
                          border: 'none',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          fontSize: '0.875rem'
                        }}
                        title="Supprimer"
                      >
                        🗑️
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p style={{ margin: 0, color: '#6c757d', fontSize: '0.875rem', textAlign: 'center', padding: '1rem' }}>
                  Aucun serveur assigné
                </p>
              )}
            </div>
          );
        })}
      </div>

      {zones.length === 0 && (
        <div style={{
          backgroundColor: 'white',
          padding: '3rem',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <p style={{ fontSize: '3rem', margin: '0 0 1rem 0' }}>📍</p>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
            Aucune zone définie
          </h3>
          <p style={{ color: '#6c757d', fontSize: '0.95rem' }}>
            Créez d'abord des zones dans la page "Tables"
          </p>
        </div>
      )}
    </div>
  );
}
