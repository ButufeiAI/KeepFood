const public_routes = {};

// ------------- ( Authentication ) --------------------


// ------------- ( Main Menu ) --------------------

public_routes.admin_dashboard = "/index";
public_routes.pos = "/POS";
public_routes.orders = "/orders";
public_routes.kanban_view = "/kanban-view";
public_routes.kitchen = "/kitchen";
public_routes.reservation = "/reservations";

// ------------- ( Menu Management ) --------------------
public_routes.categories = "/categories";
public_routes.items = "/items";
public_routes.addons = "/addons";
public_routes.coupons = "/coupons";

// ------------- ( Operations Menu ) --------------------
public_routes.table = "/table";
public_routes.customer = "/customer";
public_routes.invoices = "/invoices";
public_routes.invoice_details = "/invoice-details";
public_routes.payments = "/payments";

// ------------- ( Administration Menu ) --------------------
public_routes.users = "/users";
public_routes.role_permission = "/role-permission";
public_routes.earning_report = "/earning-report";

// ------------- ( Pages Menu ) --------------------
public_routes.login = "/login";
public_routes.register = "/register";
public_routes.forgot_password = "/forgot-password";
public_routes.email_verification = "/email-verification";
public_routes.otp = "/otp";
public_routes.reset_password = "/reset-password";

// ------------- ( Settings Menu ) --------------------
public_routes.store_settings = "/store-settings";
public_routes.tax_settings = "/tax-settings";
public_routes.print_settings = "/print-settings";
public_routes.payment_settings = "/payment-settings";
public_routes.delivery_settings = "/delivery-settings";
public_routes.notifications_settings = "/notifications-settings";
public_routes.integrations_settings = "/integrations-settings";

// ------------- ( Error Pages ) --------------------
// Typo kept for compatibility with existing imports
public_routes.pageNotFount = "/page-not-found";

// ------------- ( Reports Menu ) --------------------
public_routes.earning_report = "/earning-report";
public_routes.order_report = "/order-report";
public_routes.sales_report = "/sales-report";
public_routes.customer_report = "/customer-report";
public_routes.audit_report = "/audit-report";

module.exports = public_routes;
