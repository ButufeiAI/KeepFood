import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu } from './pages/Menu';
import { MenuCard } from './pages/MenuCard';
import { StepByStepOrder } from './pages/StepByStepOrder';
import { Cart } from './pages/Cart';
import { OrderSuccess } from './pages/OrderSuccess';
import { Order } from './pages/Order';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route pour /order?tableId=xxx&restaurantId=yyy (QR code) */}
        <Route path="/order" element={<Order />} />
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
      </Routes>
    </Router>
  );
}

export default App;

