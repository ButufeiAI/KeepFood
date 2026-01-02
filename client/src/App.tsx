import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu } from './pages/Menu';
import { MenuCard } from './pages/MenuCard';
import { StepByStepOrder } from './pages/StepByStepOrder';
import { Cart } from './pages/Cart';
import { OrderSuccess } from './pages/OrderSuccess';
import { Order } from './pages/Order';
import { TableSessionPage } from './pages/TableSession';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';
import ClientMenu from './pages/ClientMenu';
import { LoyaltyHistory } from './pages/LoyaltyHistory';
import { MySubscriptions } from './pages/MySubscriptions';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route d'accueil */}
        <Route path="/" element={<Home />} />
        {/* Route pour /order?tableId=xxx&restaurantId=yyy (QR code) */}
        <Route path="/order" element={<Order />} />
        {/* NOUVELLE ROUTE - Menu style Delyss */}
        <Route path="/client-menu/:restaurantId" element={<ClientMenu />} />
        {/* Route principale avec template interactif moderne */}
        <Route path="/menu/:restaurantId" element={<MenuCard />} />
        <Route path="/menu/:restaurantId/:tableId" element={<MenuCard />} />
        {/* Route étape par étape (alternative) */}
        <Route path="/menu-step-by-step/:restaurantId" element={<StepByStepOrder />} />
        <Route path="/menu-step-by-step/:restaurantId/:tableId" element={<StepByStepOrder />} />
        {/* Route classique (menu complet) - pour référence */}
        <Route path="/menu-classic/:restaurantId" element={<Menu />} />
        <Route path="/menu-classic/:restaurantId/:tableId" element={<Menu />} />
        <Route path="/cart/:restaurantId" element={<Cart />} />
        <Route path="/cart/:restaurantId/:tableId" element={<Cart />} />
        <Route path="/order/:orderId" element={<OrderSuccess />} />
        <Route path="/table-session/:sessionId" element={<TableSessionPage />} />
        <Route path="/loyalty/:restaurantId" element={<LoyaltyHistory />} />
        <Route path="/subscriptions/:restaurantId" element={<MySubscriptions />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

