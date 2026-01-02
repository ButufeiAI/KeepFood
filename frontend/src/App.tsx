import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './core/redux/store';
import TemplateLayout from './layouts/TemplateLayout';
import { ProtectedRoute } from './components/ProtectedRoute';

// Pagini existente KeepFood
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { ModernDashboard } from './pages/ModernDashboard';
import { ModernProducts } from './pages/ModernProducts';
import { ModernOrders } from './pages/ModernOrders';
import { ModernTables } from './pages/ModernTables';
import { Restaurants } from './pages/Restaurants';
import { Server } from './pages/Server';
import { Categories } from './pages/Categories';
import { EmployeeManagement } from './pages/EmployeeManagement';
import { TableAssignments } from './pages/TableAssignments';
import BarPOS from './pages/BarPOS';
import ServerStepOrder from './pages/ServerStepOrder';
import KitchenBarDisplay from './pages/KitchenBarDisplay';
import { FloorPlanEditor } from './pages/FloorPlanEditor';
import { FloorPlanView } from './pages/FloorPlanView';
import { ZoneAssignmentPage } from './pages/ZoneAssignmentPage';
import { AdvancedDashboard } from './pages/AdvancedDashboard';
import { Payments } from './pages/Payments';
import { LoyaltyRewards } from './pages/LoyaltyRewards';
import { Subscriptions } from './pages/Subscriptions';
import { PromoCodes } from './pages/PromoCodes';

// Pagini din template (lazy loading pentru optimizare)
import React from 'react';

// Template Pages - Main Module
const TemplateDashboard = React.lazy(() => import('./pages-template/main-module/dashboard/dashboard'));
const Kitchen = React.lazy(() => import('./pages-template/main-module/kitchen/kitchen'));
const Reservations = React.lazy(() => import('./pages-template/main-module/reservations/reservations'));
const Orders = React.lazy(() => import('./pages-template/main-module/orders/orders'));
const KanbanView = React.lazy(() => import('./pages-template/main-module/orders/kanbanView'));
const POS = React.lazy(() => import('./pages-template/main-module/pos/pos'));

// Template Pages - Management
const EstablishmentTypes = React.lazy(() => import('./pages-template/management/establishment-types/establishmentTypes'));
const TemplateCategories = React.lazy(() => import('./pages-template/management/categories/categories'));
const Items = React.lazy(() => import('./pages-template/management/items/items'));
const Addons = React.lazy(() => import('./pages-template/management/addons/addons'));
const Coupons = React.lazy(() => import('./pages-template/management/coupons/coupons'));

// Template Pages - Operations
const Table = React.lazy(() => import('./pages-template/operations/tables/table'));
const Customer = React.lazy(() => import('./pages-template/operations/customers/customer'));
const Invoices = React.lazy(() => import('./pages-template/operations/invoices/invoices'));
const InvoiceDetails = React.lazy(() => import('./pages-template/operations/invoiceDetails/invoiceDetails'));
const TemplatePayments = React.lazy(() => import('./pages-template/operations/payments/payments'));

// Template Pages - Administration
const Users = React.lazy(() => import('./pages-template/administration/users/users'));
const RolePermissions = React.lazy(() => import('./pages-template/administration/permissions/rolePermissions'));
const EarningReport = React.lazy(() => import('./pages-template/administration/reports/earningReport'));
const OrderReport = React.lazy(() => import('./pages-template/administration/reports/orderReport'));
const SalesReport = React.lazy(() => import('./pages-template/administration/reports/salesReport'));
const CustomerReport = React.lazy(() => import('./pages-template/administration/reports/customerReport'));
const AuditReport = React.lazy(() => import('./pages-template/administration/reports/auditReport'));

// Template Pages - Settings
const StoreSettings = React.lazy(() => import('./pages-template/settings/storeSettings'));
const PrintSettings = React.lazy(() => import('./pages-template/settings/printSettings'));
const TaxSettings = React.lazy(() => import('./pages-template/settings/tax-settings/taxSetting'));
const PaymentSettings = React.lazy(() => import('./pages-template/settings/paymentSettings'));
const DeliverySettings = React.lazy(() => import('./pages-template/settings/deliverySettings'));
const NotificationsSettings = React.lazy(() => import('./pages-template/settings/notificationsSettings'));
const IntegrationSettings = React.lazy(() => import('./pages-template/settings/integrationSettings'));

function App() {
  return (
    <Provider store={store}>
      <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Routes>
        {/* Toutes les routes avec Layout */}
        <Route element={<TemplateLayout />}>
          {/* Pages principales KeepFood */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Dashboard - Template version */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="page-wrapper"><div className="content"><div className="spinner-border text-primary"></div></div></div>}>
                  <TemplateDashboard />
                </React.Suspense>
              </ProtectedRoute>
            }
          />
          
          {/* POS / Bar */}
          <Route
            path="/pos"
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="page-wrapper"><div className="content"><div className="spinner-border text-primary"></div></div></div>}>
                  <POS />
                </React.Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/bar-pos"
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="page-wrapper"><div className="content"><div className="spinner-border text-primary"></div></div></div>}>
                  <POS />
                </React.Suspense>
              </ProtectedRoute>
            }
          />
          
          {/* Orders - Template version avec Kanban */}
          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="page-wrapper"><div className="content"><div className="spinner-border text-primary"></div></div></div>}>
                  <Orders />
                </React.Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/kanban-view"
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="page-wrapper"><div className="content"><div className="spinner-border text-primary"></div></div></div>}>
                  <KanbanView />
                </React.Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/server-order/:tableId"
            element={
              <ProtectedRoute>
                <ServerStepOrder />
              </ProtectedRoute>
            }
          />
          
          {/* Kitchen */}
          <Route
            path="/kitchen"
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="page-wrapper"><div className="content"><div className="spinner-border text-primary"></div></div></div>}>
                  <Kitchen />
                </React.Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/kitchen-display"
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="page-wrapper"><div className="content"><div className="spinner-border text-primary"></div></div></div>}>
                  <Kitchen />
                </React.Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/server"
            element={
              <ProtectedRoute>
                <Server />
              </ProtectedRoute>
            }
          />
          
          {/* Reservations / Tables */}
          <Route
            path="/reservations"
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="page-wrapper"><div className="content"><div className="spinner-border text-primary"></div></div></div>}>
                  <Reservations />
                </React.Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/tables"
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="page-wrapper"><div className="content"><div className="spinner-border text-primary"></div></div></div>}>
                  <Table />
                </React.Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/floor-plan-editor"
            element={
              <ProtectedRoute>
                <FloorPlanEditor />
              </ProtectedRoute>
            }
          />
          <Route
            path="/floor-plan-view"
            element={
              <ProtectedRoute>
                <FloorPlanView />
              </ProtectedRoute>
            }
          />
          <Route
            path="/table-assignments"
            element={
              <ProtectedRoute>
                <TableAssignments />
              </ProtectedRoute>
            }
          />
          
          {/* Menu Management */}
          <Route
            path="/establishment-types"
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="page-wrapper"><div className="content"><div className="spinner-border text-primary"></div></div></div>}>
                  <EstablishmentTypes />
                </React.Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/categories"
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="page-wrapper"><div className="content"><div className="spinner-border text-primary"></div></div></div>}>
                  <TemplateCategories />
                </React.Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/items"
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="page-wrapper"><div className="content"><div className="spinner-border text-primary"></div></div></div>}>
                  <Items />
                </React.Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="page-wrapper"><div className="content"><div className="spinner-border text-primary"></div></div></div>}>
                  <Items />
                </React.Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/addons"
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="page-wrapper"><div className="content"><div className="spinner-border text-primary"></div></div></div>}>
                  <Addons />
                </React.Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/coupons"
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="page-wrapper"><div className="content"><div className="spinner-border text-primary"></div></div></div>}>
                  <Coupons />
                </React.Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/promo-codes"
            element={
              <ProtectedRoute>
                <PromoCodes />
              </ProtectedRoute>
            }
          />
          
          {/* Operations */}
          <Route
            path="/customers"
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="page-wrapper"><div className="content"><div className="spinner-border text-primary"></div></div></div>}>
                  <Customer />
                </React.Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/invoices"
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="page-wrapper"><div className="content"><div className="spinner-border text-primary"></div></div></div>}>
                  <Invoices />
                </React.Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/invoice-details"
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="page-wrapper"><div className="content"><div className="spinner-border text-primary"></div></div></div>}>
                  <InvoiceDetails />
                </React.Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/payments"
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="page-wrapper"><div className="content"><div className="spinner-border text-primary"></div></div></div>}>
                  <TemplatePayments />
                </React.Suspense>
              </ProtectedRoute>
            }
          />
          
          {/* Administration */}
          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="page-wrapper"><div className="content"><div className="spinner-border text-primary"></div></div></div>}>
                  <Users />
                </React.Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/employees"
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="page-wrapper"><div className="content"><div className="spinner-border text-primary"></div></div></div>}>
                  <Users />
                </React.Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/role-permissions"
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="page-wrapper"><div className="content"><div className="spinner-border text-primary"></div></div></div>}>
                  <RolePermissions />
                </React.Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/zone-assignments"
            element={
              <ProtectedRoute>
                <ZoneAssignmentPage />
              </ProtectedRoute>
            }
          />
          
          {/* Reports */}
          <Route
            path="/advanced-stats"
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="page-wrapper"><div className="content"><div className="spinner-border text-primary"></div></div></div>}>
                  <EarningReport />
                </React.Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/earning-report"
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="page-wrapper"><div className="content"><div className="spinner-border text-primary"></div></div></div>}>
                  <EarningReport />
                </React.Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/order-report"
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="page-wrapper"><div className="content"><div className="spinner-border text-primary"></div></div></div>}>
                  <OrderReport />
                </React.Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/sales-report"
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="page-wrapper"><div className="content"><div className="spinner-border text-primary"></div></div></div>}>
                  <SalesReport />
                </React.Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/customer-report"
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="page-wrapper"><div className="content"><div className="spinner-border text-primary"></div></div></div>}>
                  <CustomerReport />
                </React.Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/audit-report"
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="page-wrapper"><div className="content"><div className="spinner-border text-primary"></div></div></div>}>
                  <AuditReport />
                </React.Suspense>
              </ProtectedRoute>
            }
          />
          
          {/* Settings */}
          <Route
            path="/restaurants"
            element={
              <ProtectedRoute>
                <Restaurants />
              </ProtectedRoute>
            }
          />
          <Route
            path="/store-settings"
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="page-wrapper"><div className="content"><div className="spinner-border text-primary"></div></div></div>}>
                  <StoreSettings />
                </React.Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/tax-settings"
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="page-wrapper"><div className="content"><div className="spinner-border text-primary"></div></div></div>}>
                  <TaxSettings />
                </React.Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/print-settings"
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="page-wrapper"><div className="content"><div className="spinner-border text-primary"></div></div></div>}>
                  <PrintSettings />
                </React.Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/payment-settings"
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="page-wrapper"><div className="content"><div className="spinner-border text-primary"></div></div></div>}>
                  <PaymentSettings />
                </React.Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/delivery-settings"
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="page-wrapper"><div className="content"><div className="spinner-border text-primary"></div></div></div>}>
                  <DeliverySettings />
                </React.Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/notifications-settings"
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="page-wrapper"><div className="content"><div className="spinner-border text-primary"></div></div></div>}>
                  <NotificationsSettings />
                </React.Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/integrations-settings"
            element={
              <ProtectedRoute>
                <React.Suspense fallback={<div className="page-wrapper"><div className="content"><div className="spinner-border text-primary"></div></div></div>}>
                  <IntegrationSettings />
                </React.Suspense>
              </ProtectedRoute>
            }
          />
          
          {/* Loyalty & Subscriptions (paginile tale existente) */}
          <Route
            path="/loyalty"
            element={
              <ProtectedRoute>
                <LoyaltyRewards />
              </ProtectedRoute>
            }
          />
          <Route
            path="/subscriptions"
            element={
              <ProtectedRoute>
                <Subscriptions />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
