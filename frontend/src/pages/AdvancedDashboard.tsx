import React, { useState, useEffect } from 'react';
import { useAuthStore } from '../stores/auth.store';
import { statisticsService } from '../services/statistics.service';

export function AdvancedDashboard() {
  const { user } = useAuthStore();
  const [loading, setLoading] = useState(true);
  const [period, setPeriod] = useState<'day' | 'week' | 'month' | 'year'>('month');
  const [chartPeriod, setChartPeriod] = useState<'week' | 'month' | 'year'>('month');
  const [chartMetric, setChartMetric] = useState<'revenue' | 'orders' | 'avg'>('revenue');
  const [employeeStats, setEmployeeStats] = useState<any[]>([]);
  const [evolutionData, setEvolutionData] = useState<Array<{ date: string; value: number }>>([]);

  useEffect(() => {
    loadData();
  }, [period, chartPeriod, chartMetric]);

  const loadData = async () => {
    try {
      setLoading(true);
      const [employees, evolution] = await Promise.all([
        statisticsService.getAllEmployeesStats(user?.restaurantId!, period),
        statisticsService.getRestaurantEvolution(user?.restaurantId!, chartPeriod, chartMetric),
      ]);
      setEmployeeStats(employees);
      setEvolutionData(evolution);
    } catch (error) {
      console.error('Erreur chargement statistiques:', error);
    } finally {
      setLoading(false);
    }
  };

  const getMetricLabel = () => {
    switch (chartMetric) {
      case 'revenue':
        return 'Chiffre d\'affaires';
      case 'orders':
        return 'Nombre de commandes';
      case 'avg':
        return 'Panier moyen';
      default:
        return '';
    }
  };

  const formatValue = (value: number) => {
    if (chartMetric === 'orders') {
      return value.toString();
    }
    return `${value.toFixed(2)} €`;
  };

  const maxValue = Math.max(...evolutionData.map(d => d.value), 1);

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '3rem' }}>Chargement...</div>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Header */}
      <div>
        <h2 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '0.5rem' }}>
          📊 Statistiques Avancées
        </h2>
        <p style={{ color: '#6c757d', fontSize: '0.95rem' }}>
          Performance détaillée de votre restaurant et de votre équipe
        </p>
      </div>

      {/* Graphique d'évolution */}
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '600' }}>
            📈 Évolution du Restaurant
          </h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <select
              value={chartMetric}
              onChange={(e) => setChartMetric(e.target.value as any)}
              style={{
                padding: '0.5rem 1rem',
                border: '1px solid #dee2e6',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}
            >
              <option value="revenue">Chiffre d'affaires</option>
              <option value="orders">Commandes</option>
              <option value="avg">Panier moyen</option>
            </select>
            <select
              value={chartPeriod}
              onChange={(e) => setChartPeriod(e.target.value as any)}
              style={{
                padding: '0.5rem 1rem',
                border: '1px solid #dee2e6',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}
            >
              <option value="week">7 derniers jours</option>
              <option value="month">30 derniers jours</option>
              <option value="year">12 derniers mois</option>
            </select>
          </div>
        </div>

        {/* Graphique simple en barres */}
        <div style={{ overflowX: 'auto' }}>
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: chartPeriod === 'year' ? '0.5rem' : '0.75rem',
            height: '300px',
            padding: '1rem',
            borderBottom: '2px solid #dee2e6',
            minWidth: chartPeriod === 'year' ? '600px' : evolutionData.length > 15 ? '800px' : '100%'
          }}>
            {evolutionData.map((point, index) => {
              const height = (point.value / maxValue) * 100;
              return (
                <div
                  key={index}
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minWidth: chartPeriod === 'year' ? '40px' : '30px'
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: `${height}%`,
                      background: 'linear-gradient(180deg, #007bff, #0056b3)',
                      borderRadius: '4px 4px 0 0',
                      position: 'relative',
                      minHeight: point.value > 0 ? '10px' : '0',
                      cursor: 'pointer'
                    }}
                    title={`${point.date}: ${formatValue(point.value)}`}
                  >
                    {height > 15 && (
                      <span style={{
                        position: 'absolute',
                        top: '-20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontSize: '0.7rem',
                        fontWeight: '600',
                        color: '#007bff',
                        whiteSpace: 'nowrap'
                      }}>
                        {formatValue(point.value)}
                      </span>
                    )}
                  </div>
                  <span style={{
                    marginTop: '0.5rem',
                    fontSize: '0.7rem',
                    color: '#6c757d',
                    transform: chartPeriod === 'month' ? 'rotate(-45deg)' : 'none',
                    transformOrigin: 'center',
                    whiteSpace: 'nowrap',
                    marginLeft: chartPeriod === 'month' ? '0.5rem' : '0'
                  }}>
                    {chartPeriod === 'year' ? point.date.slice(5) : point.date.slice(5)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ marginTop: '1rem', textAlign: 'center', color: '#6c757d', fontSize: '0.875rem' }}>
          {getMetricLabel()} sur la période
        </div>
      </div>

      {/* Statistiques par employé */}
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '600' }}>
            👥 Performance des Employés
          </h3>
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value as any)}
            style={{
              padding: '0.5rem 1rem',
              border: '1px solid #dee2e6',
              borderRadius: '8px',
              fontSize: '0.875rem',
              fontWeight: '500'
            }}
          >
            <option value="day">Aujourd'hui</option>
            <option value="week">Cette semaine</option>
            <option value="month">Ce mois</option>
            <option value="year">Cette année</option>
          </select>
        </div>

        {employeeStats.length > 0 ? (
          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '0.95rem'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Employé</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Rôle</th>
                  <th style={{ padding: '1rem', textAlign: 'center', fontWeight: '600' }}>Commandes</th>
                  <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '600' }}>CA Total</th>
                  <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '600' }}>Panier Moyen</th>
                </tr>
              </thead>
              <tbody>
                {employeeStats.map((emp, index) => (
                  <tr
                    key={emp.serverId}
                    style={{
                      borderBottom: '1px solid #dee2e6',
                      backgroundColor: index % 2 === 0 ? 'white' : '#f8f9fa'
                    }}
                  >
                    <td style={{ padding: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #28a745, #20c997)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontWeight: '700',
                          fontSize: '0.95rem'
                        }}>
                          {emp.serverName.charAt(0)}
                        </div>
                        <span style={{ fontWeight: '600' }}>{emp.serverName}</span>
                      </div>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <span style={{
                        padding: '0.25rem 0.75rem',
                        backgroundColor: '#e7f3ff',
                        color: '#007bff',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: '600'
                      }}>
                        {emp.role}
                      </span>
                    </td>
                    <td style={{ padding: '1rem', textAlign: 'center', fontWeight: '600', color: '#007bff' }}>
                      {emp.orderCount}
                    </td>
                    <td style={{ padding: '1rem', textAlign: 'right', fontWeight: '600', color: '#28a745' }}>
                      {emp.totalRevenue.toFixed(2)} €
                    </td>
                    <td style={{ padding: '1rem', textAlign: 'right', fontWeight: '600' }}>
                      {emp.avgOrderAmount.toFixed(2)} €
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '3rem',
            color: '#6c757d'
          }}>
            <p style={{ fontSize: '2rem', margin: '0 0 1rem 0' }}>📊</p>
            <p style={{ margin: 0 }}>Aucune donnée pour cette période</p>
          </div>
        )}
      </div>
    </div>
  );
}
