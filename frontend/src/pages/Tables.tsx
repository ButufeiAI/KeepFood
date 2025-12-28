import { useState, useEffect } from 'react';
import { QRCodeSVG } from 'react-qr-code';
import { tablesService, CreateTableDto, Table } from '../services/tables.service';
import { useAuthStore } from '../stores/auth.store';
import { TableVisualization } from '../components/TableVisualization';
import { TableCard } from '../components/TableCard';
import { Card } from '../components/Card';
import { useIsMobile } from '../hooks/useIsMobile';

export function Tables() {
  const { user } = useAuthStore();
  const isMobile = useIsMobile();
  const [tables, setTables] = useState<Table[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [selectedTable, setSelectedTable] = useState<Table | null>(null);
  const [formData, setFormData] = useState<Omit<CreateTableDto, 'restaurantId'>>({
    name: '',
    capacity: 4,
    isActive: true,
  });

  useEffect(() => {
    loadTables();
  }, []);

  const loadTables = async () => {
    try {
      setLoading(true);
      const data = await tablesService.getAll(user?.restaurantId);
      setTables(data);
    } catch (error) {
      console.error('Erreur lors du chargement des tables:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await tablesService.create({
        ...formData,
        restaurantId: user?.restaurantId || '',
      });
      setShowForm(false);
      setFormData({ name: '', capacity: 4, isActive: true });
      loadTables();
    } catch (error: any) {
      alert(error.response?.data?.message || 'Erreur lors de la création');
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

  const getClientUrl = () => {
    return import.meta.env.VITE_CLIENT_URL || 'http://localhost:5203';
  };

  const getQrCodeUrl = (table: Table) => {
    if (table.qrCode) {
      return table.qrCode;
    }
    // Générer l'URL si le QR code n'existe pas encore
    return `${getClientUrl()}/order?tableId=${table.id}&restaurantId=${table.restaurantId}`;
  };

  const downloadQRCode = async (table: Table) => {
    const qrUrl = getQrCodeUrl(table);
    try {
      // Utiliser une bibliothèque QR code pour générer une image
      // Pour l'instant, on va juste copier l'URL ou ouvrir dans un nouvel onglet
      const qrSvg = document.getElementById(`qr-${table.id}`);
      if (qrSvg) {
        const svgData = new XMLSerializer().serializeToString(qrSvg);
        const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(svgBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `QR-${table.name}.svg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error('Erreur lors du téléchargement:', error);
      // Fallback: ouvrir dans un nouvel onglet
      window.open(qrUrl, '_blank');
    }
  };

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>Tables</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {showForm ? 'Annuler' : '+ Nouvelle table'}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            marginBottom: '2rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          <h2 style={{ marginBottom: '1.5rem' }}>Nouvelle table</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Nom *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Capacité *</label>
              <input
                type="number"
                min="1"
                value={formData.capacity}
                onChange={(e) => setFormData({ ...formData, capacity: parseInt(e.target.value) })}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Zone</label>
              <input
                type="text"
                value={formData.zone || ''}
                onChange={(e) => setFormData({ ...formData, zone: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                }}
              />
            </div>
          </div>
          {/* Aperçu visuel de la table */}
          <div style={{ marginBottom: '1rem', backgroundColor: '#f8f9fa', borderRadius: '8px', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p style={{ marginBottom: '0.5rem', fontSize: '0.9rem', color: '#666' }}>Aperçu :</p>
            <TableVisualization capacity={formData.capacity} size={120} />
            <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: '#666' }}>
              {formData.capacity} {formData.capacity === 1 ? 'personne' : 'personnes'}
            </p>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input
                type="checkbox"
                checked={formData.isActive}
                onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
              />
              Active
            </label>
          </div>
          <button
            type="submit"
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Créer
          </button>
        </form>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {tables.map((table) => (
          <TableCard
            key={table.id}
            table={table}
            onQRCode={() => setSelectedTable(table)}
            onDelete={() => handleDelete(table.id)}
          />
        ))}
        {tables.length === 0 && (
          <Card style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem' }}>
            <p style={{ color: '#666', fontSize: '1.1rem', margin: 0 }}>
              Aucune table pour le moment
            </p>
            <p style={{ color: '#999', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              Créez votre première table pour commencer
            </p>
          </Card>
        )}
      </div>

      {/* Modal QR Code */}
      {selectedTable && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
          onClick={() => setSelectedTable(null)}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '8px',
              maxWidth: '500px',
              width: '90%',
              textAlign: 'center',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ marginBottom: '1rem' }}>QR Code - {selectedTable.name}</h2>
            <div
              style={{
                display: 'inline-block',
                padding: '1rem',
                backgroundColor: '#fff',
                borderRadius: '8px',
                marginBottom: '1rem',
              }}
            >
              <QRCodeSVG
                id={`qr-${selectedTable.id}`}
                value={getQrCodeUrl(selectedTable)}
                size={256}
                style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
              />
            </div>
            <p style={{ marginBottom: '1rem', color: '#666', fontSize: '0.9rem', wordBreak: 'break-all' }}>
              {getQrCodeUrl(selectedTable)}
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button
                onClick={() => downloadQRCode(selectedTable)}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                📥 Télécharger
              </button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(getQrCodeUrl(selectedTable));
                  alert('URL copiée dans le presse-papiers');
                }}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                📋 Copier l'URL
              </button>
              <button
                onClick={() => setSelectedTable(null)}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

