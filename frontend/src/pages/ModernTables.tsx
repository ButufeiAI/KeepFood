import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code';
import { tablesService, CreateTableDto, Table } from '../services/tables.service';
import { useAuthStore } from '../stores/auth.store';
import { TableVisualization } from '../components/TableVisualization';

export function ModernTables() {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const [tables, setTables] = useState<Table[]>([]);
  const [zones, setZones] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTable, setSelectedTable] = useState<Table | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editingTable, setEditingTable] = useState<Table | null>(null);
  const [activeTab, setActiveTab] = useState<'tables' | 'zones'>('tables');
  const [showZoneForm, setShowZoneForm] = useState(false);
  const [newZoneName, setNewZoneName] = useState('');
  const [editingZone, setEditingZone] = useState<string | null>(null);
  const [editZoneName, setEditZoneName] = useState('');
  const [formData, setFormData] = useState<Omit<CreateTableDto, 'restaurantId'>>({
    name: '',
    capacity: 4,
    isActive: true,
    zone: '',
  });
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1200);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  useEffect(() => {
    loadTables();
  }, []);

  const loadTables = async () => {
    try {
      setLoading(true);
      const data = await tablesService.getAll(user?.restaurantId);
      setTables(data);
      
      // Extraire les zones uniques
      const uniqueZones = Array.from(new Set(data.map(t => t.zone).filter(Boolean))) as string[];
      setZones(uniqueZones.sort());
    } catch (error) {
      console.error('Erreur lors du chargement des tables:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingTable) {
        await tablesService.update(editingTable.id, formData);
      } else {
        await tablesService.create({
          ...formData,
          restaurantId: user?.restaurantId || '',
        });
      }
      setShowForm(false);
      setEditingTable(null);
      setFormData({ name: '', capacity: 4, isActive: true, zone: '' });
      loadTables();
    } catch (error: any) {
      alert(error.response?.data?.message || 'Erreur lors de la sauvegarde');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette table ?')) {
      return;
    }
    try {
      await tablesService.delete(id);
      loadTables();
    } catch (error: any) {
      alert(error.response?.data?.message || 'Erreur lors de la suppression');
    }
  };

  const handleCreateZone = () => {
    if (!newZoneName.trim()) {
      alert('Veuillez entrer un nom de zone');
      return;
    }
    if (zones.includes(newZoneName.trim())) {
      alert('Cette zone existe déjà');
      return;
    }
    setZones([...zones, newZoneName.trim()].sort());
    setNewZoneName('');
    setShowZoneForm(false);
  };

  const handleEditZone = async (oldName: string) => {
    if (!editZoneName.trim()) {
      alert('Le nom de zone ne peut pas être vide');
      return;
    }
    if (zones.includes(editZoneName.trim()) && oldName !== editZoneName.trim()) {
      alert('Cette zone existe déjà');
      return;
    }
    
    // Mettre à jour toutes les tables de cette zone
    const tablesInZone = tables.filter(t => t.zone === oldName);
    for (const table of tablesInZone) {
      await tablesService.update(table.id, { ...table, zone: editZoneName.trim() });
    }
    
    setEditingZone(null);
    setEditZoneName('');
    loadTables();
  };

  const handleDeleteZone = async (zoneName: string) => {
    const tablesInZone = tables.filter(t => t.zone === zoneName);
    if (tablesInZone.length > 0) {
      if (!confirm(`Cette zone contient ${tablesInZone.length} table(s). Supprimer la zone mettra ces tables en "Sans zone". Continuer ?`)) {
        return;
      }
      for (const table of tablesInZone) {
        await tablesService.update(table.id, { ...table, zone: '' });
      }
    }
    
    loadTables();
  };

  const getClientUrl = () => {
    return import.meta.env.VITE_CLIENT_URL || 'http://localhost:5203';
  };

  const getQrCodeUrl = (table: Table) => {
    if (table.qrCode) {
      return table.qrCode;
    }
    return `${getClientUrl()}/order?tableId=${table.id}&restaurantId=${table.restaurantId}`;
  };

  const tablesByZone = tables.reduce((acc, table) => {
    const zone = table.zone || 'Sans zone';
    if (!acc[zone]) acc[zone] = [];
    acc[zone].push(table);
    return acc;
  }, {} as Record<string, Table[]>);

  if (loading) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <p>Chargement...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: isMobile ? '1rem' : '2rem', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      {/* En-tête principal */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: isMobile ? '1.75rem' : '2rem', fontWeight: '700', color: '#212529', margin: 0, marginBottom: '0.5rem' }}>
          🪑 Gestion des Tables & Zones
        </h1>
        <p style={{ color: '#6c757d', margin: 0 }}>Organisez votre restaurant par zones et gérez vos tables</p>
      </div>

      {/* Onglets */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '2px solid #e9ecef', flexWrap: 'wrap' }}>
        <button
          onClick={() => setActiveTab('tables')}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: 'transparent',
            border: 'none',
            borderBottom: activeTab === 'tables' ? '3px solid #007bff' : '3px solid transparent',
            color: activeTab === 'tables' ? '#007bff' : '#6c757d',
            cursor: 'pointer',
            fontWeight: activeTab === 'tables' ? '600' : '400',
            fontSize: '1rem',
            transition: 'all 0.2s',
            position: 'relative',
            top: '2px'
          }}
        >
          🪑 Tables ({tables.length})
        </button>
        <button
          onClick={() => setActiveTab('zones')}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: 'transparent',
            border: 'none',
            borderBottom: activeTab === 'zones' ? '3px solid #007bff' : '3px solid transparent',
            color: activeTab === 'zones' ? '#007bff' : '#6c757d',
            cursor: 'pointer',
            fontWeight: activeTab === 'zones' ? '600' : '400',
            fontSize: '1rem',
            transition: 'all 0.2s',
            position: 'relative',
            top: '2px'
          }}
        >
          📍 Zones ({zones.length})
        </button>
      </div>

      {/* Contenu selon l'onglet */}
      {activeTab === 'tables' ? (
        <>
          {/* Bouton ajouter table */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#212529', margin: 0 }}>Mes Tables</h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => navigate('/floor-plan-view')}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '500',
                  fontSize: '0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                👁️ Vue Plan Salle
              </button>
              <button
                onClick={() => {
                  if (showForm && editingTable) {
                    setEditingTable(null);
                    setFormData({ name: '', capacity: 4, isActive: true, zone: '' });
                  }
                  setShowForm(!showForm);
                }}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '500',
                  fontSize: '0.95rem'
                }}
              >
                {showForm ? '❌ Annuler' : '➕ Nouvelle Table'}
              </button>
            </div>
          </div>

          {/* Formulaire table */}
          {showForm && (
            <div style={{ backgroundColor: 'white', padding: isMobile ? '1.5rem' : '2rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem', color: '#212529' }}>
                {editingTable ? `✏️ Éditer "${editingTable.name}"` : '➕ Créer une table'}
              </h2>
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500', color: '#495057' }}>
                      Nom *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="Ex: Table 1"
                      style={{ width: '100%', padding: '0.75rem', border: '2px solid #e9ecef', borderRadius: '8px', fontSize: '1rem' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500', color: '#495057' }}>
                      Capacité *
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="20"
                      value={formData.capacity}
                      onChange={(e) => setFormData({ ...formData, capacity: parseInt(e.target.value) })}
                      required
                      style={{ width: '100%', padding: '0.75rem', border: '2px solid #e9ecef', borderRadius: '8px', fontSize: '1rem' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500', color: '#495057' }}>
                      Zone
                    </label>
                    <select
                      value={formData.zone || ''}
                      onChange={(e) => setFormData({ ...formData, zone: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem', border: '2px solid #e9ecef', borderRadius: '8px', fontSize: '1rem' }}
                    >
                      <option value="">Sans zone</option>
                      {zones.map(zone => <option key={zone} value={zone}>{zone}</option>)}
                    </select>
                  </div>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={formData.isActive}
                      onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                      style={{ transform: 'scale(1.2)' }}
                    />
                    <span style={{ fontWeight: '500', color: '#495057' }}>Table active</span>
                  </label>
                </div>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm(false);
                      setEditingTable(null);
                      setFormData({ name: '', capacity: 4, isActive: true, zone: '' });
                    }}
                    style={{ padding: '0.75rem 1.5rem', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '500' }}
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    style={{ padding: '0.75rem 1.5rem', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '500' }}
                  >
                    {editingTable ? '💾 Enregistrer' : '✅ Créer'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Liste tables par zone */}
          {Object.keys(tablesByZone).length === 0 ? (
            <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', textAlign: 'center', color: '#6c757d' }}>
              <p>Aucune table. Créez votre première table !</p>
            </div>
          ) : (
            Object.entries(tablesByZone).map(([zone, zoneTables]) => (
              <div key={zone} style={{ marginBottom: '3rem' }}>
                <div style={{ backgroundColor: 'white', padding: '1rem 1.5rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', borderLeft: '3px solid #007bff', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '1.5rem' }}>📍</span>
                  <h2 style={{ fontSize: '1.15rem', fontWeight: '600', color: '#212529', margin: 0 }}>{zone}</h2>
                  <span style={{ backgroundColor: '#007bff', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600' }}>
                    {zoneTables.length}
                  </span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : (isTablet ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)'), gap: '1rem' }}>
                  {zoneTables.map(table => (
                    <div key={table.id} style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', overflow: 'hidden', transition: 'transform 0.2s', position: 'relative' }}>
                      <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', zIndex: 1 }}>
                        <span style={{ padding: '0.2rem 0.6rem', borderRadius: '6px', fontSize: '0.7rem', fontWeight: '600', backgroundColor: table.isActive ? '#d4edda' : '#e2e3e5', color: table.isActive ? '#155724' : '#383d41' }}>
                          {table.isActive ? '✓' : '⏸'}
                        </span>
                      </div>
                      <div style={{ padding: '0.75rem', backgroundColor: '#f8f9fa', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TableVisualization capacity={table.capacity} size={100} />
                      </div>
                      <div style={{ padding: '1rem' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#212529', marginBottom: '0.5rem', paddingRight: '2rem' }}>{table.name}</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#6c757d', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
                          <span>👥</span>
                          <span><strong>{table.capacity}</strong> pers.</span>
                        </div>
                        <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid #f1f3f5', alignItems: 'center' }}>
                          <div onClick={() => setSelectedTable(table)} style={{ padding: '0.4rem', backgroundColor: 'white', borderRadius: '6px', border: '2px solid #007bff', cursor: 'pointer', transition: 'transform 0.2s' }} title="Voir QR">
                            <QRCode value={getQrCodeUrl(table)} size={50} level="L" />
                          </div>
                          <div style={{ display: 'flex', gap: '0.5rem', flex: 1 }}>
                            <button
                              onClick={() => {
                                setEditingTable(table);
                                setFormData({ name: table.name, capacity: table.capacity, isActive: table.isActive, zone: table.zone || '' });
                                setShowForm(true);
                              }}
                              style={{ flex: 1, padding: '0.6rem', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '500', fontSize: '0.8rem' }}
                              title="Modifier"
                            >
                              ✏️ Éditer
                            </button>
                            <button onClick={() => handleDelete(table.id)} style={{ padding: '0.6rem 0.75rem', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem' }} title="Supprimer">
                              🗑️
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </>
      ) : (
        <>
          {/* Onglet Zones */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#212529', margin: 0 }}>Mes Zones</h2>
            <button
              onClick={() => setShowZoneForm(!showZoneForm)}
              style={{ padding: '0.75rem 1.5rem', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '500', fontSize: '0.95rem' }}
            >
              {showZoneForm ? '❌ Annuler' : '➕ Nouvelle Zone'}
            </button>
          </div>

          {/* Formulaire zone */}
          {showZoneForm && (
            <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem', color: '#212529' }}>➕ Créer une zone</h3>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <input
                  type="text"
                  value={newZoneName}
                  onChange={(e) => setNewZoneName(e.target.value)}
                  placeholder="Ex: Terrasse, Salle principale..."
                  style={{ flex: 1, minWidth: '200px', padding: '0.75rem', border: '2px solid #e9ecef', borderRadius: '8px', fontSize: '1rem' }}
                  onKeyPress={(e) => e.key === 'Enter' && handleCreateZone()}
                />
                <button onClick={handleCreateZone} style={{ padding: '0.75rem 1.5rem', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '500' }}>
                  ✅ Créer
                </button>
              </div>
            </div>
          )}

          {/* Liste zones */}
          {zones.length === 0 ? (
            <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', textAlign: 'center', color: '#6c757d' }}>
              <p>Aucune zone créée. Commencez par créer une zone !</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {zones.map(zone => {
                const tablesCount = tables.filter(t => t.zone === zone).length;
                return (
                  <div key={zone} style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', borderLeft: '4px solid #28a745' }}>
                    {editingZone === zone ? (
                      <div>
                        <input
                          type="text"
                          value={editZoneName}
                          onChange={(e) => setEditZoneName(e.target.value)}
                          style={{ width: '100%', padding: '0.5rem', border: '2px solid #007bff', borderRadius: '6px', marginBottom: '0.75rem', fontSize: '1rem' }}
                          onKeyPress={(e) => e.key === 'Enter' && handleEditZone(zone)}
                          autoFocus
                        />
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <button onClick={() => handleEditZone(zone)} style={{ flex: 1, padding: '0.5rem', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem' }}>
                            💾 Enregistrer
                          </button>
                          <button onClick={() => { setEditingZone(null); setEditZoneName(''); }} style={{ flex: 1, padding: '0.5rem', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem' }}>
                            Annuler
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                          <span style={{ fontSize: '2rem' }}>📍</span>
                          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#212529', margin: 0, flex: 1 }}>{zone}</h3>
                        </div>
                        <p style={{ color: '#6c757d', fontSize: '0.9rem', marginBottom: '1rem' }}>
                          {tablesCount} {tablesCount === 1 ? 'table' : 'tables'}
                        </p>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <button
                            onClick={() => { setEditingZone(zone); setEditZoneName(zone); }}
                            style={{ flex: 1, padding: '0.6rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '500', fontSize: '0.85rem' }}
                          >
                            ✏️ Éditer
                          </button>
                          <button
                            onClick={() => handleDeleteZone(zone)}
                            style={{ padding: '0.6rem 0.75rem', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem' }}
                            title="Supprimer"
                          >
                            🗑️
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}

      {/* Modal QR Code */}
      {selectedTable && (
        <div onClick={() => setSelectedTable(null)} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, backdropFilter: 'blur(5px)' }}>
          <div onClick={(e) => e.stopPropagation()} style={{ backgroundColor: 'white', padding: isMobile ? '1.5rem' : '2rem', borderRadius: '12px', maxWidth: '500px', width: '90%', textAlign: 'center', boxShadow: '0 10px 40px rgba(0,0,0,0.2)' }}>
            <h2 style={{ marginBottom: '1.5rem', fontSize: isMobile ? '1.25rem' : '1.5rem' }}>📱 QR Code - {selectedTable.name}</h2>
            <div style={{ display: 'inline-block', padding: '1.5rem', backgroundColor: '#fff', borderRadius: '12px', marginBottom: '1.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              <QRCode value={getQrCodeUrl(selectedTable)} size={isMobile ? 200 : 256} />
            </div>
            <p style={{ marginBottom: '1.5rem', color: '#6c757d', fontSize: '0.85rem', wordBreak: 'break-all' }}>
              {getQrCodeUrl(selectedTable)}
            </p>
            <button onClick={() => setSelectedTable(null)} style={{ padding: '0.75rem 2rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1rem', fontWeight: '500' }}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
