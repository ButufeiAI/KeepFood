import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useAuthStore } from '../stores/auth.store';

interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
  shortDescription?: string;
  category: string;
  type: 'DRINK' | 'FOOD';
}

interface OrderItem {
  product: Product;
  quantity: number;
  notes?: string;
  step: number;
}

interface Table {
  id: string;
  name: string;
  zone: string;
}

// Étapes du service restaurant
const SERVICE_STEPS = [
  { 
    id: 1, 
    name: 'Apéritifs', 
    icon: '🍸', 
    color: 'from-purple-500 to-pink-500',
    categories: ['Apéritifs', 'Cocktails', 'Softs'],
    description: 'Boissons d\'accueil'
  },
  { 
    id: 2, 
    name: 'Entrées', 
    icon: '🥗', 
    color: 'from-green-500 to-emerald-500',
    categories: ['Entrées', 'Salades'],
    description: 'Premiers plats'
  },
  { 
    id: 3, 
    name: 'Plats', 
    icon: '🍽️', 
    color: 'from-orange-500 to-red-500',
    categories: ['Plats', 'Viandes', 'Poissons', 'Pâtes', 'Pizzas'],
    description: 'Plats principaux'
  },
  { 
    id: 4, 
    name: 'Desserts', 
    icon: '🍰', 
    color: 'from-pink-500 to-rose-500',
    categories: ['Desserts', 'Glaces'],
    description: 'Douceurs sucrées'
  },
  { 
    id: 5, 
    name: 'Café/Digestifs', 
    icon: '☕', 
    color: 'from-amber-700 to-yellow-600',
    categories: ['Cafés', 'Thés', 'Digestifs'],
    description: 'Pour terminer'
  },
];

const ServerStepOrder: React.FC = () => {
  const navigate = useNavigate();
  const { tableId } = useParams<{ tableId: string }>();
  const { user, token } = useAuthStore();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [table, setTable] = useState<Table | null>(null);
  const [loading, setLoading] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5201/api';

  useEffect(() => {
    // Pour les tests, on peut fonctionner sans auth (commenté pour production)
    // if (!user || !token) {
    //   navigate('/login');
    //   return;
    // }
    
    if (user && token) {
      fetchProducts();
      if (tableId) {
        fetchTable(tableId);
      }
    }
  }, [user, token, tableId]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API_URL}/products?restaurantId=${user?.restaurantId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts(response.data);
    } catch (error) {
      console.error('Erreur chargement produits:', error);
    }
  };

  const fetchTable = async (id: string) => {
    try {
      const response = await axios.get(`${API_URL}/tables/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTable(response.data);
    } catch (error) {
      console.error('Erreur chargement table:', error);
    }
  };

  const getCurrentStepProducts = () => {
    const step = SERVICE_STEPS.find(s => s.id === currentStep);
    if (!step) return [];
    
    return products.filter(p => 
      step.categories.some(cat => 
        p.category.toLowerCase().includes(cat.toLowerCase())
      )
    );
  };

  const addToOrder = (product: Product) => {
    const existingItem = orderItems.find(
      item => item.product.id === product.id && item.step === currentStep
    );
    
    if (existingItem) {
      setOrderItems(orderItems.map(item =>
        item.product.id === product.id && item.step === currentStep
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setOrderItems([...orderItems, { product, quantity: 1, step: currentStep }]);
    }
  };

  const updateQuantity = (productId: string, stepId: number, change: number) => {
    setOrderItems(orderItems.map(item => {
      if (item.product.id === productId && item.step === stepId) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeItem = (productId: string, stepId: number) => {
    setOrderItems(orderItems.filter(
      item => !(item.product.id === productId && item.step === stepId)
    ));
  };

  const getTotalAmount = () => {
    return orderItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  };

  const getStepTotal = (stepId: number) => {
    return orderItems
      .filter(item => item.step === stepId)
      .reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  };

  const getStepItemCount = (stepId: number) => {
    return orderItems
      .filter(item => item.step === stepId)
      .reduce((sum, item) => sum + item.quantity, 0);
  };

  const handleSendOrder = async () => {
    if (!table) {
      alert('Table non sélectionnée');
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
        tableId: table.id,
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
      
      alert('Commande envoyée en cuisine/bar !');
      setOrderItems([]);
      navigate('/server');
    } catch (error) {
      console.error('Erreur envoi commande:', error);
      alert('Erreur lors de l\'envoi de la commande');
    } finally {
      setLoading(false);
    }
  };

  const handleRequestPayment = () => {
    if (orderItems.length === 0) {
      alert('Aucun article à payer');
      return;
    }
    
    const total = getTotalAmount();
    const confirmed = confirm(
      `Demander le paiement à la table ${table?.name} ?\n\nMontant : ${total.toFixed(2)}€`
    );
    
    if (confirmed) {
      alert(`Demande de paiement envoyée pour ${total.toFixed(2)}€`);
      // Ici on pourrait envoyer une notification au client ou ouvrir l'écran de paiement
    }
  };

  const currentStepData = SERVICE_STEPS.find(s => s.id === currentStep);
  const filteredProducts = getCurrentStepProducts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <div className="bg-slate-800/80 backdrop-blur-lg shadow-2xl border-b border-slate-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/server')}
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
            >
              ← Retour
            </button>
            <div>
              <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                🍽️ Prise de Commande
              </h1>
              {table && (
                <p className="text-slate-300 text-sm">
                  {table.name} - {table.zone}
                </p>
              )}
            </div>
          </div>
          <button
            onClick={() => setShowCart(!showCart)}
            className="relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-bold transition-all transform hover:scale-105"
          >
            🛒 Panier
            {orderItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                {orderItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>

        {/* Barre d'étapes */}
        <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
          {SERVICE_STEPS.map(step => {
            const itemCount = getStepItemCount(step.id);
            const stepTotal = getStepTotal(step.id);
            const isActive = currentStep === step.id;
            const hasItems = itemCount > 0;

            return (
              <button
                key={step.id}
                onClick={() => setCurrentStep(step.id)}
                className={`flex-shrink-0 px-6 py-4 rounded-xl transition-all transform hover:scale-105 ${
                  isActive
                    ? `bg-gradient-to-r ${step.color} text-white shadow-2xl ring-4 ring-white ring-opacity-30`
                    : hasItems
                    ? 'bg-green-600 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{step.icon}</div>
                  <div className="text-left">
                    <div className="font-bold text-sm">{step.name}</div>
                    <div className="text-xs opacity-80">{step.description}</div>
                    {hasItems && (
                      <div className="text-xs font-bold mt-1 bg-white/20 px-2 py-0.5 rounded">
                        {itemCount} article{itemCount > 1 ? 's' : ''} · {stepTotal.toFixed(2)}€
                      </div>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Contenu principal */}
      <div className="p-6">
        {/* Info étape actuelle */}
        {currentStepData && (
          <div className={`mb-6 p-6 rounded-2xl bg-gradient-to-r ${currentStepData.color} text-white shadow-2xl`}>
            <div className="flex items-center gap-4">
              <div className="text-6xl">{currentStepData.icon}</div>
              <div>
                <h2 className="text-3xl font-bold">Étape {currentStepData.id} : {currentStepData.name}</h2>
                <p className="text-lg opacity-90">{currentStepData.description}</p>
                <p className="text-sm mt-2 opacity-75">
                  Catégories : {currentStepData.categories.join(', ')}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Grille de produits avec images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredProducts.map(product => (
            <button
              key={product.id}
              onClick={() => addToOrder(product)}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 overflow-hidden group"
            >
              {/* Image du produit */}
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-7xl">
                    {currentStepData?.icon}
                  </div>
                )}
                
                {/* Badge prix */}
                <div className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-lg font-bold shadow-lg">
                  {product.price.toFixed(2)}€
                </div>

                {/* Badge dans le panier */}
                {orderItems.some(item => item.product.id === product.id && item.step === currentStep) && (
                  <div className="absolute top-3 left-3 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {orderItems.find(item => item.product.id === product.id && item.step === currentStep)?.quantity}
                  </div>
                )}
              </div>
              
              {/* Info produit */}
              <div className="p-4">
                <h3 className="font-bold text-slate-800 text-lg mb-1 truncate">{product.name}</h3>
                {product.shortDescription && (
                  <p className="text-slate-600 text-sm line-clamp-2">{product.shortDescription}</p>
                )}
                <p className="text-slate-500 text-xs mt-2">{product.category}</p>
              </div>
            </button>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            <p className="text-2xl mb-2">😔</p>
            <p className="text-xl">Aucun produit disponible pour cette étape</p>
            <p className="text-sm mt-2">Passez à l'étape suivante</p>
          </div>
        )}
      </div>

      {/* Panier flottant */}
      {showCart && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end md:items-center justify-center p-4">
          <div className="bg-slate-800 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden">
            {/* Header panier */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">🛒 Votre Commande</h2>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-white hover:bg-white/20 rounded-lg p-2"
                >
                  ✕
                </button>
              </div>
              <p className="text-sm opacity-90 mt-1">
                {orderItems.reduce((sum, item) => sum + item.quantity, 0)} article(s)
              </p>
            </div>

            {/* Contenu panier par étape */}
            <div className="p-6 overflow-y-auto max-h-96">
              {SERVICE_STEPS.map(step => {
                const stepItems = orderItems.filter(item => item.step === step.id);
                if (stepItems.length === 0) return null;

                return (
                  <div key={step.id} className="mb-6">
                    <h3 className={`text-white font-bold mb-3 flex items-center gap-2 bg-gradient-to-r ${step.color} px-4 py-2 rounded-lg`}>
                      {step.icon} {step.name}
                    </h3>
                    <div className="space-y-2">
                      {stepItems.map(item => (
                        <div key={`${item.product.id}-${item.step}`} className="bg-slate-700 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-white font-medium">{item.product.name}</span>
                            <button
                              onClick={() => removeItem(item.product.id, item.step)}
                              className="text-red-400 hover:text-red-300"
                            >
                              🗑️
                            </button>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => updateQuantity(item.product.id, item.step, -1)}
                                className="w-10 h-10 bg-slate-600 hover:bg-slate-500 text-white rounded-lg text-xl font-bold"
                              >
                                -
                              </button>
                              <span className="text-white font-bold text-xl w-12 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.product.id, item.step, 1)}
                                className="w-10 h-10 bg-slate-600 hover:bg-slate-500 text-white rounded-lg text-xl font-bold"
                              >
                                +
                              </button>
                            </div>
                            <span className="text-green-400 font-bold text-xl">
                              {(item.product.price * item.quantity).toFixed(2)}€
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer avec total et actions */}
            <div className="bg-slate-900 p-6 space-y-4">
              <div className="flex justify-between items-center text-3xl font-bold border-t border-slate-700 pt-4">
                <span className="text-slate-400">TOTAL</span>
                <span className="text-green-400">{getTotalAmount().toFixed(2)}€</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleRequestPayment}
                  disabled={orderItems.length === 0}
                  className="py-4 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 disabled:from-slate-600 disabled:to-slate-600 text-white rounded-xl font-bold text-lg transition-all"
                >
                  💰 Demander Paiement
                </button>
                <button
                  onClick={handleSendOrder}
                  disabled={loading || orderItems.length === 0}
                  className="py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-slate-600 disabled:to-slate-600 text-white rounded-xl font-bold text-lg transition-all"
                >
                  {loading ? '⏳ Envoi...' : '📤 Envoyer'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServerStepOrder;
