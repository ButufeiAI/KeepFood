import { useState, useEffect } from 'react';
import { ordersService, Order, OrderStatus, CreateOrderDto } from '../services/orders.service';
import { productsService, Product } from '../services/products.service';
import { tablesService, Table } from '../services/tables.service';
import { useAuthStore } from '../stores/auth.store';

export function Orders() {
  const { user } = useAuthStore();
  const [orders, setOrders] = useState<Order[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [tables, setTables] = useState<Table[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<CreateOrderDto>({
    items: [{ productId: '', quantity: 1 }],
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const [ordersData, productsData, tablesData] = await Promise.all([
        ordersService.getAll(user?.restaurantId),
        productsService.getAll(user?.restaurantId),
        tablesService.getAll(user?.restaurantId),
      ]);
      setOrders(ordersData);
      setProducts(productsData);
      setTables(tablesData);
    } catch (error) {
      console.error('Erreur lors du chargement:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await ordersService.create(formData);
      setShowForm(false);
      setFormData({ items: [{ productId: '', quantity: 1 }] });
      loadData();
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || 'Erreur lors de la création';
      console.error('Erreur lors de la création de la commande:', error);
      // TODO: Remplacer par un système de notification toast
      alert(errorMessage);
    }
  };

  const addItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { productId: '', quantity: 1 }],
    });
  };

  const removeItem = (index: number) => {
    setFormData({
      ...formData,
      items: formData.items.filter((_, i) => i !== index),
    });
  };

  const updateItem = (index: number, field: string, value: any) => {
    const newItems = [...formData.items];
    newItems[index] = { ...newItems[index], [field]: value };
    setFormData({ ...formData, items: newItems });
  };

  const getStatusColor = (status: OrderStatus) => {
    const colors: Record<OrderStatus, string> = {
      PENDING: '#ffc107',
      CONFIRMED: '#17a2b8',
      PREPARING: '#007bff',
      READY: '#28a745',
      SERVED: '#6c757d',
      CANCELLED: '#dc3545',
    };
    return colors[status] || '#6c757d';
  };

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>Commandes</h1>
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
          {showForm ? 'Annuler' : '+ Nouvelle commande'}
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
          <h2 style={{ marginBottom: '1.5rem' }}>Nouvelle commande</h2>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Table</label>
            <select
              value={formData.tableId || ''}
              onChange={(e) => setFormData({ ...formData, tableId: e.target.value || undefined })}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
              }}
            >
              <option value="">Aucune table</option>
              {tables.map((table) => (
                <option key={table.id} value={table.id}>
                  {table.name}
                </option>
              ))}
            </select>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <label>Articles</label>
              <button
                type="button"
                onClick={addItem}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                + Ajouter
              </button>
            </div>
            {formData.items.map((item, index) => (
              <div
                key={index}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '2fr 1fr auto',
                  gap: '0.5rem',
                  marginBottom: '0.5rem',
                  alignItems: 'center',
                }}
              >
                <select
                  value={item.productId}
                  onChange={(e) => updateItem(index, 'productId', e.target.value)}
                  required
                  style={{
                    padding: '0.75rem',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                  }}
                >
                  <option value="">Sélectionner un produit</option>
                  {products.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.name} - {product.price.toFixed(2)} €
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateItem(index, 'quantity', parseInt(e.target.value))}
                  required
                  style={{
                    padding: '0.75rem',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                  }}
                />
                <button
                  type="button"
                  onClick={() => removeItem(index)}
                  style={{
                    padding: '0.5rem',
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  ×
                </button>
              </div>
            ))}
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
            Créer la commande
          </button>
        </form>
      )}

      <div style={{ display: 'grid', gap: '1rem' }}>
        {orders.map((order) => (
          <div
            key={order.id}
            style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ marginBottom: '0.25rem' }}>Commande #{order.id.slice(0, 8)}</h3>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>
                  {new Date(order.createdAt).toLocaleString('fr-FR')}
                </p>
              </div>
              <span
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  backgroundColor: getStatusColor(order.status),
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
                {order.status}
              </span>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              {order.items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0.5rem 0',
                    borderBottom: '1px solid #eee',
                  }}
                >
                  <span>
                    {item.productName} x{item.quantity}
                  </span>
                  <span>{(item.price * item.quantity).toFixed(2)} €</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <strong style={{ fontSize: '1.25rem' }}>Total: {order.total.toFixed(2)} €</strong>
            </div>
          </div>
        ))}
        {orders.length === 0 && (
          <p style={{ textAlign: 'center', color: '#666', padding: '2rem' }}>
            Aucune commande pour le moment
          </p>
        )}
      </div>
    </div>
  );
}

