import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/auth.store';
import { useIsMobile } from '../hooks/useIsMobile';
import api from '../services/api';
import { UserRole } from '../types/index';

interface Employee {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: UserRole;
  isActive: boolean;
  createdAt: string;
  profile?: {
    id: string;
    profileImage?: string;
    hireDate: string;
    contractType: string;
    workSchedule: string;
    department?: string;
    hourlyRate?: number;
    monthlySalary?: number;
    performanceRating: number;
  };
  assignedTables?: Array<{
    id: string;
    tableId: string;
    tableName: string;
    zone: string;
    isActive: boolean;
  }>;
}

const ROLES = [
  { value: UserRole.ADMIN_RESTAURANT, label: 'Admin Restaurant', color: '#dc3545' },
  { value: UserRole.MANAGER, label: 'Manager', color: '#ffc107' },
  { value: UserRole.SERVEUR, label: 'Serveur', color: '#007bff' },
  { value: UserRole.CUISINE, label: 'Cuisine', color: '#28a745' },
  { value: UserRole.BAR, label: 'Bar', color: '#17a2b8' },
  { value: UserRole.LIVREUR, label: 'Livreur', color: '#6f42c1' },
  { value: UserRole.CAISSIER, label: 'Caissier', color: '#fd7e14' },
  { value: UserRole.STOCK, label: 'Stock', color: '#6c757d' },
];

export function EmployeeManagement() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const { user } = useAuthStore();

  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRole, setFilterRole] = useState<string>('ALL');
  const [filterStatus, setFilterStatus] = useState<string>('ALL');
  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  // Formulaire
  const [formData, setFormData] = useState<{
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    role: UserRole;
    password: string;
    hireDate: string;
    contractType: string;
    workSchedule: string;
    hourlyRate: string;
    monthlySalary: string;
    department: string;
  }>({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    role: UserRole.SERVEUR,
    password: '',
    hireDate: new Date().toISOString().split('T')[0],
    contractType: 'CDI',
    workSchedule: 'FULL_TIME',
    hourlyRate: '',
    monthlySalary: '',
    department: '',
  });

  useEffect(() => {
    if (user?.role !== UserRole.ADMIN_RESTAURANT && user?.role !== UserRole.SUPER_ADMIN && user?.role !== UserRole.MANAGER) {
      alert('Accès non autorisé');
      navigate('/dashboard');
      return;
    }
    loadEmployees();
  }, []);

  useEffect(() => {
    filterEmployees();
  }, [employees, searchQuery, filterRole, filterStatus]);

  const loadEmployees = async () => {
    try {
      setLoading(true);
      const response = await api.get('/employees');
      setEmployees(response.data);
    } catch (error: any) {
      console.error('Erreur chargement employés:', error);
      alert(error.response?.data?.message || 'Erreur lors du chargement');
    } finally {
      setLoading(false);
    }
  };

  const filterEmployees = () => {
    let filtered = [...employees];

    // Recherche
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (emp) =>
          emp.firstName.toLowerCase().includes(query) ||
          emp.lastName.toLowerCase().includes(query) ||
          emp.email.toLowerCase().includes(query) ||
          emp.phone?.includes(query)
      );
    }

    // Filtre rôle
    if (filterRole !== 'ALL') {
      filtered = filtered.filter((emp) => emp.role === filterRole);
    }

    // Filtre statut
    if (filterStatus !== 'ALL') {
      filtered = filtered.filter((emp) => emp.isActive === (filterStatus === 'ACTIVE'));
    }

    setFilteredEmployees(filtered);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (isEditing && selectedEmployee) {
        await api.put(`/employees/${selectedEmployee.id}`, formData);
        alert('Employé modifié avec succès !');
      } else {
        await api.post('/employees', formData);
        alert('Employé créé avec succès !');
      }
      
      setShowModal(false);
      resetForm();
      loadEmployees();
    } catch (error: any) {
      console.error('Erreur:', error);
      alert(error.response?.data?.message || 'Erreur lors de l\'opération');
    }
  };

  const handleEdit = (employee: Employee) => {
    setSelectedEmployee(employee);
    setIsEditing(true);
    setFormData({
      email: employee.email,
      firstName: employee.firstName,
      lastName: employee.lastName,
      phone: employee.phone || '',
      role: employee.role,
      password: '',
      hireDate: employee.profile?.hireDate?.split('T')[0] || new Date().toISOString().split('T')[0],
      contractType: employee.profile?.contractType || 'CDI',
      workSchedule: employee.profile?.workSchedule || 'FULL_TIME',
      hourlyRate: employee.profile?.hourlyRate?.toString() || '',
      monthlySalary: employee.profile?.monthlySalary?.toString() || '',
      department: employee.profile?.department || '',
    });
    setShowModal(true);
  };

  const handleDelete = async (employeeId: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet employé ?')) return;

    try {
      await api.delete(`/employees/${employeeId}`);
      alert('Employé supprimé');
      loadEmployees();
    } catch (error: any) {
      console.error('Erreur suppression:', error);
      alert(error.response?.data?.message || 'Erreur lors de la suppression');
    }
  };

  const toggleStatus = async (employeeId: string, currentStatus: boolean) => {
    try {
      await api.patch(`/employees/${employeeId}/status`, { isActive: !currentStatus });
      alert(currentStatus ? 'Employé désactivé' : 'Employé activé');
      loadEmployees();
    } catch (error: any) {
      console.error('Erreur:', error);
      alert(error.response?.data?.message || 'Erreur lors du changement de statut');
    }
  };

  const resetForm = () => {
    setFormData({
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      role: UserRole.SERVEUR,
      password: '',
      hireDate: new Date().toISOString().split('T')[0],
      contractType: 'CDI',
      workSchedule: 'FULL_TIME',
      hourlyRate: '',
      monthlySalary: '',
      department: '',
    });
    setSelectedEmployee(null);
    setIsEditing(false);
  };

  const getRoleInfo = (role: string) => {
    return ROLES.find((r) => r.value === role) || { label: role, color: '#6c757d' };
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div>Chargement des employés...</div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: isMobile ? '0.5rem' : '1rem' }}>
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
            👥 Gestion des Employés
          </h1>
          <p style={{ margin: 0, color: '#666' }}>
            {filteredEmployees.length} employé(s) {filterRole !== 'ALL' && `• Rôle: ${getRoleInfo(filterRole).label}`}
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => navigate('/table-assignments')}
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
            📍 Attribution Tables
          </button>
          <button
            onClick={() => {
              resetForm();
              setShowModal(true);
            }}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            ➕ Nouvel Employé
          </button>
        </div>
      </header>

      {/* Filtres */}
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: isMobile ? '1rem' : '1.5rem',
          marginBottom: '2rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
          }}
        >
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem' }}>
              🔍 Recherche
            </label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Nom, email, téléphone..."
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem',
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem' }}>
              👔 Rôle
            </label>
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem',
              }}
            >
              <option value="ALL">Tous les rôles</option>
              {ROLES.map((role) => (
                <option key={role.value} value={role.value}>
                  {role.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem' }}>
              ⚡ Statut
            </label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem',
              }}
            >
              <option value="ALL">Tous</option>
              <option value="ACTIVE">Actifs</option>
              <option value="INACTIVE">Inactifs</option>
            </select>
          </div>
        </div>
      </div>

      {/* Liste des employés */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {filteredEmployees.map((employee) => {
          const roleInfo = getRoleInfo(employee.role);
          
          return (
            <div
              key={employee.id}
              style={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                padding: '1.5rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                border: `3px solid ${employee.isActive ? roleInfo.color : '#ccc'}`,
                opacity: employee.isActive ? 1 : 0.7,
                position: 'relative',
              }}
            >
              {/* Badge statut */}
              <div
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  padding: '0.25rem 0.75rem',
                  backgroundColor: employee.isActive ? '#28a745' : '#6c757d',
                  color: 'white',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                }}
              >
                {employee.isActive ? '🟢 Actif' : '🔴 Inactif'}
              </div>

              {/* Profil */}
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: roleInfo.color,
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    flexShrink: 0,
                  }}
                >
                  {employee.firstName[0]}{employee.lastName[0]}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1.25rem' }}>
                    {employee.firstName} {employee.lastName}
                  </h3>
                  <div
                    style={{
                      display: 'inline-block',
                      padding: '0.25rem 0.75rem',
                      backgroundColor: roleInfo.color,
                      color: 'white',
                      borderRadius: '12px',
                      fontSize: '0.85rem',
                      fontWeight: 'bold',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {roleInfo.label}
                  </div>
                  <p style={{ margin: '0.25rem 0', fontSize: '0.9rem', color: '#666' }}>
                    📧 {employee.email}
                  </p>
                  {employee.phone && (
                    <p style={{ margin: '0.25rem 0', fontSize: '0.9rem', color: '#666' }}>
                      📱 {employee.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Infos supplémentaires */}
              {employee.profile && (
                <div
                  style={{
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    padding: '1rem',
                    marginBottom: '1rem',
                    fontSize: '0.9rem',
                  }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                    <div>
                      <strong>Embauche:</strong>
                      <br />
                      {new Date(employee.profile.hireDate).toLocaleDateString('fr-FR')}
                    </div>
                    <div>
                      <strong>Contrat:</strong>
                      <br />
                      {employee.profile.contractType}
                    </div>
                    {employee.profile.monthlySalary && (
                      <div>
                        <strong>Salaire:</strong>
                        <br />
                        {employee.profile.monthlySalary}€/mois
                      </div>
                    )}
                    <div>
                      <strong>Performance:</strong>
                      <br />
                      {'⭐'.repeat(Math.round(employee.profile.performanceRating))} ({employee.profile.performanceRating}/5)
                    </div>
                  </div>
                </div>
              )}

              {/* Tables assignées (pour serveurs) */}
              {employee.role === UserRole.SERVEUR && employee.assignedTables && employee.assignedTables.length > 0 && (
                <div style={{ marginBottom: '1rem' }}>
                  <strong style={{ fontSize: '0.9rem' }}>📍 Tables assignées:</strong>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                    {employee.assignedTables.map((assignment) => (
                      <span
                        key={assignment.id}
                        style={{
                          padding: '0.25rem 0.75rem',
                          backgroundColor: assignment.isActive ? '#007bff' : '#ccc',
                          color: 'white',
                          borderRadius: '12px',
                          fontSize: '0.85rem',
                        }}
                      >
                        {assignment.tableName} ({assignment.zone})
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => handleEdit(employee)}
                  style={{
                    flex: 1,
                    padding: '0.5rem',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                  }}
                >
                  ✏️ Modifier
                </button>
                <button
                  onClick={() => toggleStatus(employee.id, employee.isActive)}
                  style={{
                    flex: 1,
                    padding: '0.5rem',
                    backgroundColor: employee.isActive ? '#ffc107' : '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                  }}
                >
                  {employee.isActive ? '⏸️ Désactiver' : '▶️ Activer'}
                </button>
                <button
                  onClick={() => handleDelete(employee.id)}
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                  }}
                >
                  🗑️
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredEmployees.length === 0 && (
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: '12px',
            padding: '3rem',
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>👥</div>
          <p style={{ margin: 0, fontSize: '1.1rem', color: '#666' }}>
            Aucun employé trouvé
          </p>
        </div>
      )}

      {/* Modal Formulaire */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
            padding: isMobile ? '1rem' : '2rem',
            overflowY: 'auto',
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              padding: isMobile ? '1.5rem' : '2rem',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ marginTop: 0 }}>
              {isEditing ? '✏️ Modifier l\'employé' : '➕ Nouvel employé'}
            </h2>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1rem' }}>
                {/* Informations de base */}
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      fontSize: '1rem',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    Nom *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      fontSize: '1rem',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={isEditing}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      opacity: isEditing ? 0.6 : 1,
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      fontSize: '1rem',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    Rôle *
                  </label>
                  <select
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value as UserRole })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      fontSize: '1rem',
                    }}
                  >
                    {ROLES.map((role) => (
                      <option key={role.value} value={role.value}>
                        {role.label}
                      </option>
                    ))}
                  </select>
                </div>

                {!isEditing && (
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                      Mot de passe *
                    </label>
                    <input
                      type="password"
                      required={!isEditing}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        fontSize: '1rem',
                      }}
                    />
                  </div>
                )}

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    Date d'embauche *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.hireDate}
                    onChange={(e) => setFormData({ ...formData, hireDate: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      fontSize: '1rem',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    Type de contrat
                  </label>
                  <select
                    value={formData.contractType}
                    onChange={(e) => setFormData({ ...formData, contractType: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      fontSize: '1rem',
                    }}
                  >
                    <option value="CDI">CDI</option>
                    <option value="CDD">CDD</option>
                    <option value="INTERIM">Intérim</option>
                    <option value="STAGE">Stage</option>
                    <option value="APPRENTISSAGE">Apprentissage</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    Horaire
                  </label>
                  <select
                    value={formData.workSchedule}
                    onChange={(e) => setFormData({ ...formData, workSchedule: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      fontSize: '1rem',
                    }}
                  >
                    <option value="FULL_TIME">Temps plein</option>
                    <option value="PART_TIME">Temps partiel</option>
                    <option value="SEASONAL">Saisonnier</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    Département / Service
                  </label>
                  <input
                    type="text"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    placeholder="Ex: Service en salle"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      fontSize: '1rem',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    Taux horaire (€/h)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.hourlyRate}
                    onChange={(e) => setFormData({ ...formData, hourlyRate: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      fontSize: '1rem',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    Salaire mensuel (€/mois)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.monthlySalary}
                    onChange={(e) => setFormData({ ...formData, monthlySalary: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      fontSize: '1rem',
                    }}
                  />
                </div>
              </div>

              {/* Actions */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: '1rem',
                  marginTop: '2rem',
                }}
              >
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    resetForm();
                  }}
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
                  Annuler
                </button>
                <button
                  type="submit"
                  style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                  }}
                >
                  {isEditing ? '💾 Enregistrer' : '➕ Créer'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

