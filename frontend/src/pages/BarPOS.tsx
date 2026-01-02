import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuthStore } from '../stores/auth.store';

interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
  category: string;
  type: 'DRINK' | 'FOOD';
}

interface OrderItem {
  product: Product;
  quantity: number;
  notes?: string;
}

interface Table {
  id: string;
  name: string;
  zone: string;
}

const BarPOS: React.FC = () => {
  const navigate = useNavigate();
  const { user, token } = useAuthStore();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [tables, setTables] = useState<Table[]>([]);
  const [selectedTable, setSelectedTable] = useState<string>('');
  const [paymentAmount, setPaymentAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5201/api';

  // Catégories de bar - exact ca în imagine
  const barCategories = [
    { name: 'Tous', color: '#3b82f6', icon: '🍹' },
    { name: 'Softs', color: '#10b981', icon: '🥤' },
    { name: 'Cafés', color: '#8b5cf6', icon: '☕' },
    { name: 'Bières', color: '#f59e0b', icon: '🍺' },
    { name: 'Vins', color: '#ec4899', icon: '🍷' },
    { name: 'Cocktails', color: '#06b6d4', icon: '🍸' },
    { name: 'Spiritueux', color: '#ef4444', icon: '🥃' },
    { name: 'Jus', color: '#84cc16', icon: '🧃' },
  ];

  useEffect(() => {
    if (user && token) {
      fetchProducts();
      fetchTables();
    }
  }, [user, token]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API_URL}/products?restaurantId=${user?.restaurantId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const drinks = response.data.filter((p: Product) => p.type === 'DRINK');
      setProducts(drinks);
      const cats = Array.from(new Set(drinks.map((p: Product) => p.category)));
      setCategories(['Tous', ...cats]);
    } catch (error) {
      console.error('Erreur chargement produits:', error);
    }
  };

  const fetchTables = async () => {
    try {
      const response = await axios.get(`${API_URL}/tables?restaurantId=${user?.restaurantId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTables(response.data);
    } catch (error) {
      console.error('Erreur chargement tables:', error);
    }
  };

  const addToOrder = (product: Product) => {
    const existingItem = orderItems.find(item => item.product.id === product.id);
    if (existingItem) {
      setOrderItems(orderItems.map(item =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setOrderItems([...orderItems, { product, quantity: 1 }]);
    }
  };

  const updateQuantity = (productId: string, change: number) => {
    setOrderItems(orderItems.map(item => {
      if (item.product.id === productId) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeItem = (productId: string) => {
    setOrderItems(orderItems.filter(item => item.product.id !== productId));
  };

  const getTotalAmount = () => {
    return orderItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  };

  const handleSendOrder = async () => {
    if (!selectedTable) {
      alert('Veuillez sélectionner une table');
      return;
    }
    if (orderItems.length === 0) {
      alert('Aucun produit dans la commande');
      return;
    }

    setLoading(true);
    try {
      await axios.post(`${API_URL}/orders`, {
        restaurantId: user?.restaurantId,
        tableId: selectedTable,
        userId: user?.id,
        orderType: 'ON_SITE',
        items: orderItems.map(item => ({
          productId: item.product.id,
          quantity: item.quantity,
          notes: item.notes,
        })),
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      alert('Commande envoyée au bar !');
      setOrderItems([]);
      setSelectedTable('');
    } catch (error) {
      console.error('Erreur envoi commande:', error);
      alert('Erreur lors de l\'envoi de la commande');
    } finally {
      setLoading(false);
    }
  };

  const handlePayment = (method: string) => {
    if (orderItems.length === 0) {
      alert('Aucun article à payer');
      return;
    }
    
    const total = getTotalAmount();
    const confirmed = confirm(`Paiement ${method}\nMontant : ${total.toFixed(2)}€\nConfirmer ?`);
    
    if (confirmed) {
      alert(`Paiement de ${total.toFixed(2)}€ par ${method} confirmé !`);
      setOrderItems([]);
      setSelectedTable('');
      setPaymentAmount('');
    }
  };

  const handleNumpadClick = (value: string) => {
    if (value === 'CL') {
      setPaymentAmount('');
    } else if (value === ',') {
      if (!paymentAmount.includes('.')) {
        setPaymentAmount(paymentAmount + '.');
      }
    } else {
      setPaymentAmount(paymentAmount + value);
    }
  };

  const filteredProducts = selectedCategory === 'Tous'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="page-wrapper">
      <div className="content">
        {/* Title Section */}
        <div className="mb-4">
          <h2 className="mb-1" style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
            🍸 BAR - Point de Vente
          </h2>
          <p className="text-muted mb-0" style={{ fontSize: '1rem' }}>Interface Caisse Bar</p>
        </div>

        {/* Main Content Row */}
        <div className="row g-0" style={{ minHeight: 'calc(100vh - 200px)' }}>
          {/* Left Side - Categories and Products */}
          <div className="col-lg-8" style={{ backgroundColor: '#fff', padding: '20px' }}>
            {/* Category Buttons - 2 rows of 4 */}
            <div className="row g-3 mb-4">
              {barCategories.map(cat => (
                <div key={cat.name} className="col-3">
                  <button
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`btn w-100 p-4 text-white fw-bold ${
                      selectedCategory === cat.name ? 'border border-3 border-dark' : ''
                    }`}
                    style={{ 
                      backgroundColor: cat.color,
                      borderRadius: '12px',
                      fontSize: '1rem',
                      minHeight: '100px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      transition: 'all 0.3s',
                      boxShadow: selectedCategory === cat.name ? '0 4px 8px rgba(0,0,0,0.2)' : 'none'
                    }}
                    onMouseEnter={(e) => {
                      if (selectedCategory !== cat.name) {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedCategory !== cat.name) {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = 'none';
                      }
                    }}
                  >
                    <div style={{ fontSize: '2.5rem' }}>{cat.icon}</div>
                    <div>{cat.name}</div>
                  </button>
                </div>
              ))}
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-5">
                <p className="text-warning mb-0" style={{ fontSize: '1.1rem', fontWeight: '500' }}>
                  Aucun produit dans cette catégorie
                </p>
              </div>
            ) : (
              <div className="row g-3">
                {filteredProducts.map(product => (
                  <div key={product.id} className="col-xl-3 col-md-4 col-sm-6">
                    <button
                      onClick={() => addToOrder(product)}
                      className="btn btn-light w-100 p-0 text-start border"
                      style={{ 
                        borderRadius: '12px',
                        overflow: 'hidden',
                        transition: 'all 0.3s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      {/* Product Image */}
                      <div 
                        style={{ 
                          height: '150px',
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          position: 'relative',
                          overflow: 'hidden',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        ) : (
                          <div style={{ fontSize: '4rem' }}>🍹</div>
                        )}
                        <div 
                          className="badge bg-success position-absolute"
                          style={{ 
                            top: '10px', 
                            right: '10px',
                            fontSize: '0.9rem',
                            padding: '6px 12px'
                          }}
                        >
                          {product.price.toFixed(2)}€
                        </div>
                      </div>
                      
                      {/* Product Info */}
                      <div className="p-3">
                        <h6 className="mb-1 fw-bold" style={{ fontSize: '0.95rem' }}>{product.name}</h6>
                        <p className="mb-0 text-muted" style={{ fontSize: '0.8rem' }}>{product.category}</p>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Side - Order Panel (Dark) */}
          <div className="col-lg-4 bg-dark text-white" style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
            {/* Table Selection */}
            <div className="mb-3">
              <label className="text-muted mb-2 d-block" style={{ fontSize: '0.9rem' }}>Table sélectionnée</label>
              <select
                value={selectedTable}
                onChange={(e) => setSelectedTable(e.target.value)}
                className="form-select bg-secondary text-white border-secondary"
                style={{ padding: '12px', fontSize: '1rem' }}
              >
                <option value="">Choisir une table...</option>
                {tables.map(table => (
                  <option key={table.id} value={table.id}>
                    {table.name} - {table.zone}
                  </option>
                ))}
              </select>
            </div>

            {/* Current Order */}
            <div className="mb-3" style={{ flex: 1, overflowY: 'auto' }}>
              <h5 className="mb-3 d-flex align-items-center gap-2">
                📝 Commande en cours
                <span className="badge bg-primary" style={{ fontSize: '0.9rem' }}>
                  {orderItems.length}
                </span>
              </h5>

              {orderItems.length === 0 ? (
                <div className="text-center py-4 text-muted">
                  <p className="mb-0">Aucun article</p>
                </div>
              ) : (
                <div>
                  {orderItems.map(item => (
                    <div key={item.product.id} className="bg-secondary rounded p-3 mb-2">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <span className="fw-medium" style={{ fontSize: '0.9rem' }}>{item.product.name}</span>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="btn btn-sm text-danger p-0"
                          style={{ fontSize: '1.2rem', lineHeight: '1' }}
                        >
                          ✕
                        </button>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, -1)}
                            className="btn btn-sm btn-secondary"
                            style={{ width: '30px', height: '30px', padding: 0 }}
                          >
                            -
                          </button>
                          <span className="fw-bold" style={{ width: '30px', textAlign: 'center' }}>{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, 1)}
                            className="btn btn-sm btn-secondary"
                            style={{ width: '30px', height: '30px', padding: 0 }}
                          >
                            +
                          </button>
                        </div>
                        <span className="text-success fw-bold">
                          {(item.product.price * item.quantity).toFixed(2)}€
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Total and Actions */}
            <div className="border-top border-secondary pt-3">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted fw-bold" style={{ fontSize: '1.2rem' }}>TOTAL</span>
                <span className="text-success fw-bold" style={{ fontSize: '1.8rem' }}>{getTotalAmount().toFixed(2)}€</span>
              </div>

              <button
                onClick={handleSendOrder}
                disabled={loading || orderItems.length === 0}
                className="btn btn-primary w-100 mb-3 fw-bold"
                style={{ padding: '14px', fontSize: '1.1rem' }}
              >
                {loading ? '⏳ Envoi...' : '📤 Envoyer au Bar'}
              </button>

              {/* Numeric Keypad - Orange buttons */}
              <div className="row g-2 mb-3">
                {['1', '2', '3', '4', '5', '6', '7', '8', '9', 'CL', '0', ','].map(num => (
                  <div key={num} className="col-4">
                    <button
                      onClick={() => handleNumpadClick(num)}
                      className="btn w-100 fw-bold text-white"
                      style={{ 
                        padding: '12px',
                        backgroundColor: '#f59e0b',
                        border: 'none',
                        fontSize: '1.1rem'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#d97706';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#f59e0b';
                      }}
                    >
                      {num}
                    </button>
                  </div>
                ))}
              </div>

              {/* Amount Display - Orange button style */}
              <input
                type="text"
                value={paymentAmount || getTotalAmount().toFixed(2)}
                readOnly
                className="form-control bg-warning text-dark text-center mb-3 border-0"
                style={{ 
                  fontSize: '1.8rem', 
                  fontWeight: 'bold', 
                  padding: '14px',
                  color: '#000 !important'
                }}
              />

              {/* Payment Buttons */}
              <div className="row g-2">
                <div className="col-6">
                  <button
                    onClick={() => handlePayment('CB')}
                    className="btn btn-info w-100 fw-bold text-white"
                    style={{ padding: '12px' }}
                  >
                    💳 CB
                  </button>
                </div>
                <div className="col-6">
                  <button
                    onClick={() => handlePayment('Cash')}
                    className="btn btn-success w-100 fw-bold text-white"
                    style={{ padding: '12px' }}
                  >
                    💵 Cash
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarPOS;
