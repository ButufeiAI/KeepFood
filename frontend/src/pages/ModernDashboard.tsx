import React, { useState, useEffect } from 'react';
import { useAuthStore } from '../stores/auth.store';
import { statisticsService, DashboardStats } from '../services/statistics.service';
import { Link } from "react-router-dom";
import { all_routes } from "../routes/all_routes";
import ImageWithBasePath from "../components/ImageWithBasePath";
// Charts will be added later
// import RevenueChart from "../pages-template/main-module/dashboard/revenueChart";
// import CategoryChart from "../pages-template/main-module/dashboard/categoryChart";
// import SalesChart from "../pages-template/main-module/dashboard/salesChart";

export const ModernDashboard: React.FC = () => {
  const { user } = useAuthStore();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadStats();
  }, [user]);

  const loadStats = async () => {
    try {
      setLoading(true);
      setError(null);
      
      if (!user?.restaurantId) {
        setError('Aucun restaurant associé à votre compte. Veuillez d\'abord créer un restaurant.');
        setLoading(false);
        return;
      }
      
      const data = await statisticsService.getDashboardStats(user.restaurantId);
      setStats(data);
    } catch (error: any) {
      console.error('Erreur chargement statistiques:', error);
      const errorMessage = error.response?.data?.message || error.message || 'Erreur lors du chargement des statistiques';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

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

  if (error) {
    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="alert alert-danger" role="alert">
            <i className="icon-alert-circle me-2"></i>
            {error}
          </div>
          <button className="btn btn-primary" onClick={loadStats}>
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="alert alert-info" role="alert">
            Aucune donnée disponible
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <div className="content pb-0">
        {/* Page Header */}
        <div className="d-flex align-items-center flex-wrap gap-3 mb-4">
          <div className="flex-grow-1">
            <h3 className="mb-0">
              Dashboard{" "}
              <Link
                to="#"
                className="btn btn-icon btn-sm btn-white rounded-circle ms-2"
                onClick={loadStats}
              >
                <i className="icon-refresh-ccw" />
              </Link>
            </h3>
          </div>
          <div className="gap-2 d-flex align-items-center flex-wrap">
            <Link
              to="#"
              className="btn btn-white d-inline-flex align-items-center"
            >
              <i className="icon-folder-sync me-2" />
              Sync Data
            </Link>
            <div className="dropdown">
              <Link
                to="#"
                className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                <i className="icon-upload me-2" />
                Export
              </Link>
              <ul className="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <Link to="#" className="dropdown-item rounded-1">
                    <i className="icon-file-pdf me-2" />
                    Export as PDF
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item rounded-1">
                    <i className="icon-file-text me-2" />
                    Export as Excel
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="row">
          {/* Total Revenue */}
          <div className="col-xl-3 col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div>
                    <span className="d-block mb-1">Revenus du Jour</span>
                    <h3 className="mb-0">{(stats.todayRevenue || 0).toFixed(2)} €</h3>
                  </div>
                  <div className="avatar avatar-lg bg-success-transparent rounded-circle flex-shrink-0">
                    <i className="icon-dollar-sign fs-4 text-success" />
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <span className={`badge ${(stats.revenueGrowth || 0) >= 0 ? 'badge-success-transparent' : 'badge-danger-transparent'} fw-normal d-inline-flex align-items-center`}>
                    <i className={`icon-arrow-${(stats.revenueGrowth || 0) >= 0 ? 'up' : 'down'}-right me-1`} />
                    {Math.abs(stats.revenueGrowth || 0).toFixed(1)}%
                  </span>
                  <span className="fs-13 fw-normal text-gray-9">que le mois dernier</span>
                </div>
              </div>
            </div>
          </div>

          {/* Today Orders */}
          <div className="col-xl-3 col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div>
                    <span className="d-block mb-1">Commandes du Jour</span>
                    <h3 className="mb-0">{stats.todayOrders || 0}</h3>
                  </div>
                  <div className="avatar avatar-lg bg-info-transparent rounded-circle flex-shrink-0">
                    <i className="icon-shopping-cart fs-4 text-info" />
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <span className={`badge ${(stats.ordersGrowth || 0) >= 0 ? 'badge-success-transparent' : 'badge-danger-transparent'} fw-normal d-inline-flex align-items-center`}>
                    <i className={`icon-arrow-${(stats.ordersGrowth || 0) >= 0 ? 'up' : 'down'}-right me-1`} />
                    {Math.abs(stats.ordersGrowth || 0).toFixed(1)}%
                  </span>
                  <span className="fs-13 fw-normal text-gray-9">que le mois dernier</span>
                </div>
              </div>
            </div>
          </div>

          {/* Available Tables */}
          <div className="col-xl-3 col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div>
                    <span className="d-block mb-1">Tables Disponibles</span>
                    <h3 className="mb-0">{stats.availableTables || 0}/{stats.totalTables || 0}</h3>
                  </div>
                  <div className="avatar avatar-lg bg-warning-transparent rounded-circle flex-shrink-0">
                    <i className="icon-concierge-bell fs-4 text-warning" />
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <span className="badge badge-info-transparent fw-normal d-inline-flex align-items-center">
                    <i className="icon-check-circle me-1" />
                    Disponibles
                  </span>
                  <span className="fs-13 fw-normal text-gray-9">en temps réel</span>
                </div>
              </div>
            </div>
          </div>

          {/* Active Orders */}
          <div className="col-xl-3 col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div>
                    <span className="d-block mb-1">Commandes Actives</span>
                    <h3 className="mb-0">{stats.activeOrders || 0}</h3>
                  </div>
                  <div className="avatar avatar-lg bg-danger-transparent rounded-circle flex-shrink-0">
                    <i className="icon-clock fs-4 text-danger" />
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <span className="badge badge-danger-transparent fw-normal d-inline-flex align-items-center">
                    <i className="icon-trending-up me-1" />
                    En cours
                  </span>
                  <span className="fs-13 fw-normal text-gray-9">en temps réel</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="row">
          {/* Revenue Chart */}
          <div className="col-xl-8">
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between">
                <h5 className="card-title mb-0">Revenus Totaux</h5>
                <div className="d-flex align-items-center gap-2">
                  <span className="badge bg-primary-transparent">{(stats.totalRevenue || 0).toFixed(2)} €</span>
                </div>
              </div>
              <div className="card-body">
                <div className="text-center py-4">
                  <p className="text-muted">Grafic în curs de integrare</p>
                </div>
              </div>
            </div>
          </div>

          {/* Top Selling Item */}
          <div className="col-xl-4">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title mb-0">Article le Plus Vendu</h5>
              </div>
              <div className="card-body">
                {stats.topSellingItem ? (
                  <div className="text-center">
                    <div className="avatar avatar-xl bg-primary-light rounded-circle mx-auto mb-3">
                      <span className="fs-2">🍽️</span>
                    </div>
                    <h5 className="mb-1">{stats.topSellingItem?.name || 'N/A'}</h5>
                    <p className="text-muted mb-2">{stats.topSellingItem?.sales || 0} ventes</p>
                    <span className="badge bg-success">{(stats.topSellingItem?.revenue || 0).toFixed(2)} €</span>
                  </div>
                ) : (
                  <p className="text-center text-muted">Aucune donnée</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="row">
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title mb-0">Statistiques par Catégorie</h5>
              </div>
              <div className="card-body">
                <div className="text-center py-4">
                  <p className="text-muted">Grafic în curs de integrare</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title mb-0">Performance des Ventes</h5>
              </div>
              <div className="card-body">
                <div className="text-center py-4">
                  <p className="text-muted">Grafic în curs de integrare</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="row">
          <div className="col-xl-3 col-md-6">
            <div className="card bg-gradient-primary text-white">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="mb-1 text-white-50">Total Produits</p>
                    <h3 className="mb-0 text-white">{stats.totalProducts || 0}</h3>
                  </div>
                  <div className="avatar avatar-md bg-white-transparent rounded">
                    <i className="icon-package fs-3"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6">
            <div className="card bg-gradient-success text-white">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="mb-1 text-white-50">Commandes Complétées</p>
                    <h3 className="mb-0 text-white">{stats.completedOrders || 0}</h3>
                  </div>
                  <div className="avatar avatar-md bg-white-transparent rounded">
                    <i className="icon-check-circle fs-3"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6">
            <div className="card bg-gradient-warning text-white">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="mb-1 text-white-50">En Attente</p>
                    <h3 className="mb-0 text-white">{stats.pendingOrders || 0}</h3>
                  </div>
                  <div className="avatar avatar-md bg-white-transparent rounded">
                    <i className="icon-clock fs-3"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6">
            <div className="card bg-gradient-info text-white">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="mb-1 text-white-50">Ticket Moyen</p>
                    <h3 className="mb-0 text-white">{(stats.averageOrderValue || 0).toFixed(2)} €</h3>
                  </div>
                  <div className="avatar avatar-md bg-white-transparent rounded">
                    <i className="icon-trending-up fs-3"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
