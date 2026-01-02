import { useState, useEffect } from 'react';
import { ordersService, Order, OrderStatus } from '../services/orders.service';
import { useAuthStore } from '../stores/auth.store';

export function ModernOrders() {
  const { user } = useAuthStore();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const ordersData = await ordersService.getAll(user?.restaurantId);
      setOrders(ordersData);
    } catch (error) {
      console.error('Erreur lors du chargement:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusConfig = (status: OrderStatus) => {
    const configs: Record<string, { badgeClass: string; label: string }> = {
      'PENDING': { badgeClass: 'bg-warning', label: 'En Attente' },
      'CONFIRMED': { badgeClass: 'bg-info', label: 'Confirmée' },
      'IN_PREPARATION': { badgeClass: 'bg-primary', label: 'En Préparation' },
      'READY': { badgeClass: 'bg-success', label: 'Prête' },
      'SERVED': { badgeClass: 'bg-secondary', label: 'Servie' },
      'CANCELLED': { badgeClass: 'bg-danger', label: 'Annulée' },
      'PAID': { badgeClass: 'bg-success', label: 'Payée' },
    };
    return configs[status] || { badgeClass: 'bg-secondary', label: status };
  };

  const filteredOrders = selectedStatus === 'ALL'
    ? orders
    : orders.filter(o => o.status === selectedStatus);

  const statuses: OrderStatus[] = ['PENDING', 'CONFIRMED', 'IN_PREPARATION', 'READY', 'SERVED', 'CANCELLED', 'PAID'];

  if (loading) {
    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Chargement...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <div className="content">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col-sm-8">
              <h3 className="page-title">Commandes</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="/dashboard">Dashboard</a></li>
                <li className="breadcrumb-item active">Commandes</li>
              </ul>
            </div>
            <div className="col-sm-4 text-end">
              <button className="btn btn-primary">
                <i className="icon-plus me-2"></i>
                Nouvelle Commande
              </button>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="card mb-4">
          <div className="card-body">
            <div className="d-flex flex-wrap gap-2">
              <button
                className={`btn ${selectedStatus === 'ALL' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setSelectedStatus('ALL')}
              >
                Toutes ({orders.length})
              </button>
              {statuses.map(status => {
                const count = orders.filter(o => o.status === status).length;
                const config = getStatusConfig(status);
                return (
                  <button
                    key={status}
                    className={`btn ${selectedStatus === status ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setSelectedStatus(status)}
                  >
                    {config.label} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Orders Table */}
        {filteredOrders.length === 0 ? (
          <div className="card">
            <div className="card-body text-center py-5">
              <i className="icon-inbox fs-1 text-muted mb-3 d-block"></i>
              <h5>Aucune commande trouvée</h5>
              <p className="text-muted">
                {selectedStatus === 'ALL' 
                  ? 'Aucune commande enregistrée pour le moment'
                  : `Aucune commande avec le statut "${getStatusConfig(selectedStatus as OrderStatus).label}"`
                }
              </p>
            </div>
          </div>
        ) : (
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover datanew">
                  <thead>
                    <tr>
                      <th>
                        <label className="checkboxs">
                          <input type="checkbox" id="select-all" />
                          <span className="checkmarks"></span>
                        </label>
                      </th>
                      <th>N° Commande</th>
                      <th>Table</th>
                      <th>Client</th>
                      <th>Date</th>
                      <th>Montant</th>
                      <th>Statut</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredOrders.map((order, index) => {
                      const config = getStatusConfig(order.status);
                      const createdAt = order.createdAt ? new Date(order.createdAt) : new Date();
                      
                      return (
                        <tr key={order.id}>
                          <td>
                            <label className="checkboxs">
                              <input type="checkbox" />
                              <span className="checkmarks"></span>
                            </label>
                          </td>
                          <td>
                            <span className="fw-bold text-primary">#{order.id.substring(0, 8)}</span>
                          </td>
                          <td>
                            <span className="badge bg-light text-dark">
                              <i className="icon-concierge-bell me-1"></i>
                              Table {order.tableNumber || 'N/A'}
                            </span>
                          </td>
                          <td>{order.customerName || 'Anonyme'}</td>
                          <td>
                            <div>
                              <div>{createdAt.toLocaleDateString('fr-FR')}</div>
                              <small className="text-muted">{createdAt.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</small>
                            </div>
                          </td>
                          <td>
                            <span className="fw-bold text-success">{order.total?.toFixed(2) || '0.00'} €</span>
                          </td>
                          <td>
                            <span className={`badge ${config.badgeClass}`}>
                              {config.label}
                            </span>
                          </td>
                          <td>
                            <div className="action-table-data">
                              <div className="edit-delete-action">
                                <a className="me-2 p-2" href="#" title="Voir">
                                  <i className="icon-eye"></i>
                                </a>
                                <a className="me-2 p-2" href="#" title="Modifier">
                                  <i className="icon-edit"></i>
                                </a>
                                <a className="confirm-text p-2" href="#" title="Supprimer">
                                  <i className="icon-trash-2"></i>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
