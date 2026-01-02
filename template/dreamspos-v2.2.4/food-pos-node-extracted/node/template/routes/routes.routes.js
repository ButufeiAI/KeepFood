const express = require("express");
const route = express.Router();
const public_routes = require("./public.routes");

const index = "index";
const index_without_nav = "index-without-nav";
const index_pos_nav = "index-pos-nav";
const index_error = "index-error";

route.use((req, res, next) => {
  let url_replace_options = req?.url?.replace("?", "")?.replace("/", "");
  let routes = {};
  for (var key in public_routes) {
    routes[key] = public_routes[key]?.replace("/", "");
  }
  res.locals.routes = routes;
  res.locals.active_path = url_replace_options;
  next();
});

// --------------- ( Error Pages ) ----------------------

route.get(public_routes.pageNotFount, (req, res, next) => {
  res.render(index_error, {
    title: "Dreams Pos Admin Template",
    page_path: "error-404",
    layout: index_error,
  });
});

//   -------------- ( Auth ) ------------------

route.get(public_routes.login, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Login | POS Food - Bootstrap 5 Admin Dashboard",
    layout: index_without_nav,
    page_path: "login",
  });
});

route.get(public_routes.register, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Register | POS Food - Bootstrap 5 Admin Dashboard",
    layout: index_without_nav,
    page_path: "register",
  });
});

route.get(public_routes.forgot_password, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Forgot Password | POS Food - Bootstrap 5 Admin Dashboard",
    layout: index_without_nav,
    page_path: "forgot-password",
  });
});
route.get(public_routes.email_verification, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Email Verification | POS Food - Bootstrap 5 Admin Dashboard",
    layout: index_without_nav,
    page_path: "email-verification",
  });
});
route.get(public_routes.otp, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Otp | POS Food - Bootstrap 5 Admin Dashboard",
    layout: index_without_nav,
    page_path: "otp",
  });
});
route.get(public_routes.reset_password, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Reset Password | POS Food - Bootstrap 5 Admin Dashboard",
    layout: index_without_nav,
    page_path: "reset-password",
  });
});
//------------(POS)---------
route.get(public_routes.pos, (req, res, next) => {
  res.render(index_pos_nav, {
    title: "Pos | POS Food - Bootstrap 5 Admin Dashboard",
    layout: index_pos_nav,
    page_path: "dashboard/pos",
  });
});


// ---------------- ( Main Menu ) --------------------------

route.get(public_routes.admin_dashboard, (req, res, next) => {
  res.render(index, {
    title: "Dashboard | POS Food - Bootstrap 5 Admin Dashboard",
    page_path: "dashboard/admin-dashboard",
  });
});
route.get(public_routes.orders, (req, res, next) => {
  res.render(index, {
    title: "Orders | POS Food - Bootstrap 5 Admin Dashboard",
    page_path: "dashboard/orders",
  });
});
route.get(public_routes.kanban_view, (req, res, next) => {
  res.render(index, {
    title: "Kanban View | POS Food - Bootstrap 5 Admin Dashboard",
    page_path: "dashboard/kanban-view",
  });
});
route.get(public_routes.kitchen, (req, res, next) => {
  res.render(index, {
    title: "Kitchen | POS Food - Bootstrap 5 Admin Dashboard",
    page_path: "dashboard/kitchen",
  });
});
route.get(public_routes.reservation, (req, res, next) => {
  res.render(index, {
    title: "Reservation | POS Food - Bootstrap 5 Admin Dashboard",
    page_path: "dashboard/reservations",
  });
});

// ---------------- ( Menu Management  ) --------------------------
route.get(public_routes.categories, (req, res, next) => {
  res.render(index, {
    title: "Categories | POS Food - Bootstrap 5 Admin Dashboard",
    page_path: "menu-management/categories",
  });
});
route.get(public_routes.items, (req, res, next) => {
  res.render(index, {
    title: "Items | POS Food - Bootstrap 5 Admin Dashboard",
    page_path: "menu-management/items",
  });
});
route.get(public_routes.coupons, (req, res, next) => {
  res.render(index, {
    title: "Coupons | POS Food - Bootstrap 5 Admin Dashboard",
    page_path: "menu-management/coupons",
  });
});
route.get(public_routes.addons, (req, res, next) => {
  res.render(index, {
    title: "Addons | POS Food - Bootstrap 5 Admin Dashboard",
    page_path: "menu-management/addons",
  });
});


// ---------------- ( Operations Menu ) --------------------------

route.get(public_routes.invoices, (req, res, next) => {
  res.render(index, {
    title: "Invoices | POS Food - Bootstrap 5 Admin Dashboard",
    page_path: "operations/invoices",
  });
});
route.get(public_routes.invoice_details, (req, res, next) => {
  res.render(index, {
    title: "invoice Details | POS Food - Bootstrap 5 Admin Dashboard",
    page_path: "operations/invoice-details",
  });
});
route.get(public_routes.payments, (req, res, next) => {
  res.render(index, {
    title: "Payments | POS Food - Bootstrap 5 Admin Dashboard",
    page_path: "operations/payments",
  });
});
route.get(public_routes.table, (req, res, next) => {
  res.render(index, {
    title: "Table | POS Food - Bootstrap 5 Admin Dashboard",
    page_path: "operations/table",
  });
});
route.get(public_routes.customer, (req, res, next) => {
  res.render(index, {
    title: "Customer | POS Food - Bootstrap 5 Admin Dashboard",
    page_path: "operations/customer",
  });
});

// ---------------- ( Administration Menu ) --------------------------
route.get(public_routes.users, (req, res, next) => {
  res.render(index, {
    title: "Users | POS Food - Bootstrap 5 Admin Dashboard",
    page_path: "administration/users",
  });
});
route.get(public_routes.role_permission, (req, res, next) => {
  res.render(index, {
    title: "Role Permission | POS Food - Bootstrap 5 Admin Dashboard",
    page_path: "administration/role-permission",
  });
});

// ---------------- ( Reports Menu ) --------------------------

route.get(public_routes.earning_report, (req, res, next) => {
  res.render(index, {
    title: "Earning Report | POS Food - Bootstrap 5 Admin Dashboard",
    page_path: "reports/earning-report",
  });
});
route.get(public_routes.order_report, (req, res, next) => {
  res.render(index, {
    title: "Order Report | POS Food - Bootstrap 5 Admin Dashboard",
    page_path: "reports/order-report",
  });
});
route.get(public_routes.sales_report, (req, res, next) => {
  res.render(index, {
    title: "Sales Report | POS Food - Bootstrap 5 Admin Dashboard",
    page_path: "reports/sales-report",
  });
});
route.get(public_routes.customer_report, (req, res, next) => {
  res.render(index, {
    title: "Customer Report | POS Food - Bootstrap 5 Admin Dashboard",
    page_path: "reports/customer-report",
  });
});
route.get(public_routes.audit_report, (req, res, next) => {
  res.render(index, {
    title: "Audit Report | POS Food - Bootstrap 5 Admin Dashboard",
    page_path: "reports/audit-report",
  });
});

// ---------------- ( Settngs Menu ) --------------------------
route.get(public_routes.store_settings, (req, res, next) => {
  res.render(index, {
    title: "Store Settings | POS Food - Bootstrap 5 Admin Dashboard",
    page_path: "settings/store-settings",
  });
});
route.get(public_routes.tax_settings, (req, res, next) => {
  res.render(index, {
    title: "Tax Settings | POS Food - Bootstrap 5 Admin Dashboard",
    page_path: "settings/tax-settings",
  });
});
route.get(public_routes.print_settings, (req, res, next) => {
  res.render(index, {
    title: "Print Settings | POS Food - Bootstrap 5 Admin Dashboard",
    page_path: "settings/print-settings",
  });
});
route.get(public_routes.payment_settings, (req, res, next) => {
  res.render(index, {
    title: "Payment Settings | POS Food - Bootstrap 5 Admin Dashboard",
    page_path: "settings/payment-settings",
  });
});
route.get(public_routes.delivery_settings, (req, res, next) => {
  res.render(index, {
    title: "Delivery Settings | POS Food - Bootstrap 5 Admin Dashboard",
    page_path: "settings/delivery-settings",
  });
});
route.get(public_routes.notifications_settings, (req, res, next) => {
  res.render(index, {
    title: "Notification Settings | POS Food - Bootstrap 5 Admin Dashboard",
    page_path: "settings/notifications-settings",
  });
});
route.get(public_routes.integrations_settings, (req, res, next) => {
  res.render(index, {
    title: "Integrations Settings | POS Food - Bootstrap 5 Admin Dashboard",
    page_path: "settings/integrations-settings",
  });
});

module.exports = route