<?php
$link = $_SERVER[ 'PHP_SELF' ];
$link_array = explode( '/', $link );
$page = end( $link_array );
?>

    <!-- Favicon -->
    <link rel="shortcut icon" href="assets/img/favicon.png">

    <!-- Apple Icon -->
    <link rel="apple-touch-icon" href="assets/img/apple-icon.png">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">

<?php if ($page !== 'login.php' && $page !== 'register.php' && $page !== 'email-verification.php' && $page !== 'forgot-password.php' && $page !== 'otp.php' && $page !== 'reset-password.php') {   ?>
    <!-- Theme Script -->
    <script src="assets/js/theme-script.js"></script>
<?php }?>

    <!-- Lucide Icon CSS -->
    <link rel="stylesheet" href="assets/plugins/lucide/lucide.css">

<?php if ($page !== 'login.php' && $page !== 'register.php' && $page !== 'email-verification.php' && $page !== 'forgot-password.php' && $page !== 'otp.php' && $page !== 'reset-password.php') {   ?>
    <!-- Simplebar CSS -->
    <link rel="stylesheet" href="assets/plugins/simplebar/simplebar.min.css">
<?php }?>

<?php if ($page == 'addons.php' || $page == 'coupons.php' || $page == 'index.php' || $page == 'invoices.php' || $page == 'kanban-view.php' || $page == 'orders.php' || $page == 'payments.php' || $page == 'role-permission.php' || $page == 'users.php') {   ?>
    <!-- Daterangepikcer CSS -->
	<link rel="stylesheet" href="assets/plugins/daterangepicker/daterangepicker.css">
<?php }?>

<?php if ($page == 'addons.php' || $page == 'audit-report.php' || $page == 'categories.php' || $page == 'coupons.php' || $page == 'customer-report.php' || $page == 'customer.php' || $page == 'delivery-settings.php' || $page == 'earning-report.php' || $page == 'integrations-settings.php' || $page == 'invoices.php' || $page == 'items.php' || $page == 'notifications-settings.php' || $page == 'order-report.php' || $page == 'payment-settings.php' || $page == 'payments.php' || $page == 'print-settings.php' || $page == 'role-permission.php' || $page == 'sales-report.php' || $page == 'store-settings.php' || $page == 'table.php' || $page == 'users.php') {   ?>
    <!-- Datatable CSS -->
	<link rel="stylesheet" href="assets/plugins/datatables/dataTables.bootstrap5.min.css">
<?php }?>

<?php if ($page == 'audit-report.php' || $page == 'coupons.php' || $page == 'customer-report.php' || $page == 'customer.php' || $page == 'delivery-settings.php' || $page == 'earning-report.php' || $page == 'integrations-settings.php' || $page == 'kitchen.php' || $page == 'pos.php' || $page == 'notifications-settings.php' || $page == 'order-report.php' || $page == 'orders.php' || $page == 'payment-settings.php' || $page == 'print-settings.php' || $page == 'reservations.php' || $page == 'sales-report.php' || $page == 'store-settings.php' || $page == 'table.php') {   ?>
    <!-- Flatpickr CSS -->
    <link rel="stylesheet" href="assets/plugins/flatpickr/flatpickr.min.css">
<?php }?>

<?php if ($page == 'pos.php') {   ?>
    <!-- Slick CSS -->
    <link rel="stylesheet" href="assets/plugins/slick/slick.css">
    <link rel="stylesheet" href="assets/plugins/slick/slick-theme.css">
<?php }?>

 <?php if ($page == 'addons.php' || $page == 'audit-report.php' || $page == 'categories.php' || $page == 'coupons.php' || $page == 'customer-report.php' || $page == 'customer.php' || $page == 'delivery-settings.php' || $page == 'earning-report.php' || $page == 'index.php' || $page == 'integrations-settings.php' || $page == 'invoices.php' || $page == 'items.php' || $page == 'kitchen.php' || $page == 'pos.php' || $page == 'notifications-settings.php' || $page == 'order-report.php' || $page == 'orders.php' || $page == 'payment-settings.php' || $page == 'payments.php' || $page == 'print-settings.php' || $page == 'reservations.php' || $page == 'role-permission.php' || $page == 'sales-report.php' || $page == 'store-settings.php' || $page == 'table.php' || $page == 'tax-settings.php' || $page == 'users.php') {   ?>
    <!-- Select2 CSS -->
    <link rel="stylesheet" href="assets/plugins/select2/css/select2.min.css">
<?php }?>

    <!-- Main CSS -->
    <link rel="stylesheet" href="assets/css/style.css">
