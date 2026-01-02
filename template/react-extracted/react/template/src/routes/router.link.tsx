import { Navigate, Route } from "react-router";
import { all_routes } from "./all_routes";
import React, { Suspense } from "react";

const Login = React.lazy(
  () => import("../pages/authentication/login/login")
);
const Dashboard = React.lazy(
  () => import("../pages/main-module/dashboard/dashboard")
);
const Kitchen = React.lazy(
  () => import("../pages/main-module/kitchen/kitchen")
);
const Reservations = React.lazy(
  () => import("../pages/main-module/reservations/reservations")
);
const Orders = React.lazy(
  () => import("../pages/main-module/orders/orders")
);
const KanbanView = React.lazy(
  () => import("../pages/main-module/orders/kanbanView")
);
const Pos = React.lazy(
  () => import("../pages/main-module/pos/pos")
);
const EarningReport = React.lazy(
  () => import("../pages/administration/reports/earningReport")
);
const OrderReport = React.lazy(
  () => import("../pages/administration/reports/orderReport")
);
const SalesReport = React.lazy(
  () => import("../pages/administration/reports/salesReport")
);
const CustomerReport = React.lazy(
  () => import("../pages/administration/reports/customerReport")
);
const AuditReport = React.lazy(
  () => import("../pages/administration/reports/auditReport")
);
const Invoices = React.lazy(
  () => import("../pages/operations/invoices/invoices")
);
const InvoiceDetails = React.lazy(
  () => import("../pages/operations/invoiceDetails/invoiceDetails")
);
const Categories = React.lazy(
  () => import("../pages/management/categories/categories")
);
const Items = React.lazy(
  () => import("../pages/management/items/items")
);
const Addons = React.lazy(
  () => import("../pages/management/addons/addons")
);
const Coupons = React.lazy(
  () => import("../pages/management/coupons/coupons")
);
const Table = React.lazy(
  () => import("../pages/operations/tables/table")
);
const Customer = React.lazy(
  () => import("../pages/operations/customers/customer")
);
const Payments = React.lazy(
  () => import("../pages/operations/payments/payments")
);
const Users = React.lazy(
  () => import("../pages/administration/users/users")
);
const RolesPermissions = React.lazy(
  () => import("../pages/administration/permissions/rolePermissions")
);
const StoreSettings = React.lazy(
  () => import("../pages/settings/storeSettings")
);
const PrintSettings = React.lazy(
  () => import("../pages/settings/printSettings")
);
const TaxSettings = React.lazy(
  () => import("../pages/settings/tax-settings/taxSetting")
);
const PaymentSettings = React.lazy(
  () => import("../pages/settings/paymentSettings")
);
const DeliverySettings = React.lazy(
  () => import("../pages/settings/deliverySettings")
);
const NotificationsSettings = React.lazy(
  () => import("../pages/settings/notificationsSettings")
);
const InterationSettings = React.lazy(
  () => import("../pages/settings/integrationSettings")
);



const Register = React.lazy(
  () => import("../pages/authentication/register/register")
);
const ForgotPassword = React.lazy(
  () => import("../pages/authentication/forgot-password/forgotPassword")
);
const ResetPassword = React.lazy(
  () => import("../pages/authentication/reset-password/resetPassword")
);
const EmailVerification = React.lazy(
  () => import("../pages/authentication/email-verification/emailVerification")
);
const OTP = React.lazy(
  () => import("../pages/authentication/otp/otp")
);

const route = all_routes;

const suspenseFallback = <div></div>;

export const publicRoutes = [
  {
    id: "1",
    path: route.dashboard,
    name: "Root",
    element: (
      <Suspense fallback={suspenseFallback}>
        <Dashboard />
      </Suspense>
    ),
    route: Route,
    meta_title: "Dashboard",
  },

  // Administration
  {
    id: "2",
    path: route.earningReport,
    name: "Root",
    element: (
      <Suspense fallback={suspenseFallback}>
        <EarningReport />
      </Suspense>
    ),
    route: Route,
    meta_title: "Earning Report",
  },

  {
    id: "",
    path: route.invoices,
    name: "Root",
    element: (
      <Suspense fallback={suspenseFallback}>
        <Invoices />
      </Suspense>
    ),
    route: Route,
    meta_title: "Invoices",
  },
  {
    id: "",
    path: route.invoiceDetails,
    name: "Root",
    element: (
      <Suspense fallback={suspenseFallback}>
        <InvoiceDetails />
      </Suspense>
    ),
    route: Route,
    meta_title: "Invoice Details",
  },

  {
    id: "",
    path: route.orderReport,
    name: "Root",
    element: (
      <Suspense fallback={suspenseFallback}>
        <OrderReport />
      </Suspense>
    ),
    route: Route,
    meta_title: "Order Report",
  },

  {
    id: "",
    path: route.salesReport,
    name: "Root",
    element: (
      <Suspense fallback={suspenseFallback}>
        <SalesReport />
      </Suspense>
    ),
    route: Route,
    meta_title: "Sales Report",
  },

  {
    id: "",
    path: route.customerReport,
    name: "Root",
    element: (
      <Suspense fallback={suspenseFallback}>
        <CustomerReport />
      </Suspense>
    ),
    route: Route,
    meta_title: "Customer Report",
  },

  {
    id: "",
    path: route.auditReport,
    name: "Root",
    element: (
      <Suspense fallback={suspenseFallback}>
        <AuditReport />
      </Suspense>
    ),
    route: Route,
    meta_title: "Audit Logs",
  },
  {
    id: "",
    path: route.kitchen,
    name: "Root",
    element: (
      <Suspense fallback={suspenseFallback}>
        <Kitchen />
      </Suspense>
    ),
    route: Route,
    meta_title: "Kitchen",
  },
  {
    id: "",
    path: route.reservations,
    name: "Root",
    element: (
      <Suspense fallback={suspenseFallback}>
        <Reservations />
      </Suspense>
    ),
    route: Route,
    meta_title: "Reservations",
  },
  {
    id: "",
    path: route.orders,
    name: "Root",
    element: (
      <Suspense fallback={suspenseFallback}>
        <Orders />
      </Suspense>
    ),
    route: Route,
    meta_title: "Orders",
  },
  {
    id: "",
    path: route.kanbanView,
    name: "Root",
    element: (
      <Suspense fallback={suspenseFallback}>
        <KanbanView />
      </Suspense>
    ),
    route: Route,
    meta_title: "Kanban View",
  },
  {
    id: "",
    path: route.categories,
    name: "Root",
    element: (
      <Suspense fallback={suspenseFallback}>
        <Categories />
      </Suspense>
    ),
    route: Route,
    meta_title: "Categories",
  },
  {
    id: "",
    path: route.items,
    name: "Root",
    element: (
      <Suspense fallback={suspenseFallback}>
        <Items />
      </Suspense>
    ),
    route: Route,
    meta_title: "Items",
  },
  {
    id: "",
    path: route.addons,
    name: "Root",
    element: (
      <Suspense fallback={suspenseFallback}>
        <Addons />
      </Suspense>
    ),
    route: Route,
    meta_title: "Addons",
  },
  {
    id: "",
    path: route.coupons,
    name: "Root",
    element: (
      <Suspense fallback={suspenseFallback}>
        <Coupons />
      </Suspense>
    ),
    route: Route,
    meta_title: "Coupons",
  },
  {
    id: "",
    path: route.table,
    name: "Root",
    element: (
      <Suspense fallback={suspenseFallback}>
        <Table />
      </Suspense>
    ),
    route: Route,
    meta_title: "Table",
  },
  {
    id: "",
    path: route.customer,
    name: "Root",
    element: (
      <Suspense fallback={suspenseFallback}>
        <Customer />
      </Suspense>
    ),
    route: Route,
    meta_title: "Customer",
  },
  {
    id: "",
    path: route.payments,
    name: "Root",
    element: (
      <Suspense fallback={suspenseFallback}>
        <Payments />
      </Suspense>
    ),
    route: Route,
    meta_title: "Payments",
  },
  {
    id: "",
    path: route.users,
    name: "Root",
    element: (
      <Suspense fallback={suspenseFallback}>
        <Users />
      </Suspense>
    ),
    route: Route,
    meta_title: "Users",
  },
  {
    id: "",
    path: route.rolePermissions,
    name: "Root",
    element: (
      <Suspense fallback={suspenseFallback}>
        <RolesPermissions />
      </Suspense>
    ),
    route: Route,
    meta_title: "Roles Permissions",
  },
  {
    id: "",
    path: route.storeSettings,
    name: "Root",
    element: (
      <Suspense fallback={suspenseFallback}>
        <StoreSettings />
      </Suspense>
    ),
    route: Route,
    meta_title: "Store Settings",
  },
  {
    id: "",
    path: route.taxSettings,
    name: "Root",
    element: (
      <Suspense fallback={suspenseFallback}>
        <TaxSettings />
      </Suspense>
    ),
    route: Route,
    meta_title: "Tax Settings",
  },
  {
    id: "",
    path: route.printSettings,
    name: "Root",
    element: (
      <Suspense fallback={suspenseFallback}>
        <PrintSettings />
      </Suspense>
    ),
    route: Route,
    meta_title: "Print Settings",
  },
  {
    id: "",
    path: route.paymentSettings,
    name: "Root",
    element: (
      <Suspense fallback={suspenseFallback}>
        <PaymentSettings />
      </Suspense>
    ),
    route: Route,
    meta_title: "Payment Settings",
  },
  {
    id: "",
    path: route.deliverySettings,
    name: "Root",
    element: (
      <Suspense fallback={suspenseFallback}>
        <DeliverySettings />
      </Suspense>
    ),
    route: Route,
    meta_title: "Delivery Settings",
  },
  {
    id: "",
    path: route.notificationsSettings,
    name: "Root",
    element: (
      <Suspense fallback={suspenseFallback}>
        <NotificationsSettings />
      </Suspense>
    ),
    route: Route,
    meta_title: "Notifications Settings",
  },
  {
    id: "",
    path: route.integrationsSettings,
    name: "Root",
    element: (
      <Suspense fallback={suspenseFallback}>
        <InterationSettings />
      </Suspense>
    ),
    route: Route,
    meta_title: "Interation Settings",
  },
];

export const authRoutes = [
  {
    path: "/",
    name: "Root",
    element: <Navigate to={route.login} />,
    route: Route,
  },
  {
    id: "1",
    path: route.login,
    element: (
      <Suspense fallback={suspenseFallback}>
        <Login />
      </Suspense>
    ),
    route: Route,
    meta_title: "Login",
  },
  {
    id: "2",
    path: route.register,
    element: (
      <Suspense fallback={suspenseFallback}>
        <Register />
      </Suspense>
    ),
    route: Route,
    meta_title: "Register",
  },
  {
    id: "3",
    path: route.forgotPassword,
    element: (
      <Suspense fallback={suspenseFallback}>
        <ForgotPassword />
      </Suspense>
    ),
    route: Route,
    meta_title: "Forgot Password",
  },
  {
    id: "4",
    path: route.emailVerification,
    element: (
      <Suspense fallback={suspenseFallback}>
        <EmailVerification />
      </Suspense>
    ),
    route: Route,
    meta_title: "Email Verification",
  },
  {
    id: "5",
    path: route.otp,
    element: (
      <Suspense fallback={suspenseFallback}>
        <OTP />
      </Suspense>
    ),
    route: Route,
    meta_title: "OTP",
  },
  {
    id: "6",
    path: route.resetPassword,
    element: (
      <Suspense fallback={suspenseFallback}>
        <ResetPassword />
      </Suspense>
    ),
    route: Route,
    meta_title: "Reset Password",
  },
];

export const posPage = [
  {
    id: "1",
    path: route.pos,
    element: (
      <Suspense fallback={suspenseFallback}>
        <Pos />
      </Suspense>
    ),
    route: Route,
    meta_title: "POS",
  },
]