<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('login', 'CustomAuthController::login');
$routes->post('login', 'CustomAuthController::attemptLogin');
$routes->get('index', 'Home::index');
$routes->get('/', 'Home::Admin_Index');
$routes->get('index', 'Home::Admin_Index');
$routes->get('addons', 'Home::Addons');
$routes->get('audit-report', 'Home::Audit_Report');
$routes->get('categories', 'Home::Categories');
$routes->get('coupons', 'Home::Coupons');
$routes->get('customer-report', 'Home::Customer_Report');
$routes->get('customer', 'Home::Customer');
$routes->get('delivery-settings', 'Home::Delivery_Settings');
$routes->get('earning-report', 'Home::Earning_Report');
$routes->get('email-verification', 'Home::Email_Verification');
$routes->get('forgot-password', 'Home::Forgot_Password');
$routes->get('integrations-settings', 'Home::Integrations_Settings');
$routes->get('invoices', 'Home::Invoices');
$routes->get('invoice-details', 'Home::Invoice_Details');
$routes->get('items', 'Home::Items');
$routes->get('kanban-view', 'Home::Kanban_View');
$routes->get('kitchen', 'Home::Kitchen');
// $routes->get('login', 'Home::Login');
$routes->get('notifications-settings', 'Home::Notifications_Settings');
$routes->get('order-report', 'Home::Order_Report');
$routes->get('orders', 'Home::Orders');
$routes->get('otp', 'Home::Otp');
$routes->get('pos', 'Home::Pos');
$routes->get('payment-settings', 'Home::Payment_Settings');
$routes->get('payments', 'Home::Payments');
$routes->get('print-settings', 'Home::Print_Settings');
$routes->get('register', 'Home::Register');
$routes->get('reservations', 'Home::Reservations');
$routes->get('reset-password', 'Home::Reset_Password');
$routes->get('role-permission', 'Home::Role_Permission');
$routes->get('sales-report', 'Home::Sales_Report');
$routes->get('store-settings', 'Home::Store_Settings');
$routes->get('table', 'Home::Table');
$routes->get('tax-settings', 'Home::Tax_Settings');
$routes->get('users', 'Home::Users');