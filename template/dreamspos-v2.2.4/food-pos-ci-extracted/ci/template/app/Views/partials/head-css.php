<?php
$link = $_SERVER[ 'PHP_SELF' ];
$link_array = explode( '/', $link );
$page = end( $link_array );
if ($page === '' || $page === 'index.php') $page = 'index';
?>

    <!-- Favicon -->
    <link rel="shortcut icon" href="<?php echo base_url('assets/img/favicon.png'); ?>">

    <!-- Apple Icon -->
    <link rel="apple-touch-icon" href="<?php echo base_url('assets/img/apple-icon.png'); ?>">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="<?php echo base_url('assets/css/bootstrap.min.css'); ?>">

<?php if ($page !== 'login' && $page !== 'register' && $page !== 'email-verification' && $page !== 'forgot-password' && $page !== 'otp' && $page !== 'reset-password') {   ?>
    <!-- Theme Script -->
    <script src="<?php echo base_url('assets/js/theme-script.js'); ?>"></script>
<?php }?>

    <!-- Lucide Icon CSS -->
    <link rel="stylesheet" href="<?php echo base_url('assets/plugins/lucide/lucide.css'); ?>">

<?php if ($page !== 'login' && $page !== 'register' && $page !== 'email-verification' && $page !== 'forgot-password' && $page !== 'otp' && $page !== 'reset-password') {   ?>
    <!-- Simplebar CSS -->
    <link rel="stylesheet" href="<?php echo base_url('assets/plugins/simplebar/simplebar.min.css'); ?>">
<?php }?>

<?php if ($page == 'addons' || $page == 'coupons' || $page == 'index' || $page == 'invoices' || $page == 'kanban-view' || $page == 'orders' || $page == 'payments' || $page == 'role-permission' || $page == 'users') {   ?>
    <!-- Daterangepikcer CSS -->
	<link rel="stylesheet" href="<?php echo base_url('assets/plugins/daterangepicker/daterangepicker.css'); ?>">
<?php }?>

<?php if ($page == 'addons' || $page == 'audit-report' || $page == 'categories' || $page == 'coupons' || $page == 'customer-report' || $page == 'customer' || $page == 'delivery-settings' || $page == 'earning-report' || $page == 'integrations-settings' || $page == 'invoices' || $page == 'items' || $page == 'notifications-settings' || $page == 'order-report' || $page == 'payment-settings' || $page == 'payments' || $page == 'print-settings' || $page == 'role-permission' || $page == 'sales-report' || $page == 'store-settings' || $page == 'table' || $page == 'users') {   ?>
    <!-- Datatable CSS -->
	<link rel="stylesheet" href="<?php echo base_url('assets/plugins/datatables/dataTables.bootstrap5.min.css'); ?>">
<?php }?>

<?php if ($page == 'audit-report' || $page == 'coupons' || $page == 'customer-report' || $page == 'customer' || $page == 'delivery-settings' || $page == 'earning-report' || $page == 'integrations-settings' || $page == 'kitchen' || $page == 'pos' || $page == 'notifications-settings' || $page == 'order-report' || $page == 'orders' || $page == 'payment-settings' || $page == 'print-settings' || $page == 'reservations' || $page == 'sales-report' || $page == 'store-settings' || $page == 'table') {   ?>
    <!-- Flatpickr CSS -->
    <link rel="stylesheet" href="<?php echo base_url('assets/plugins/flatpickr/flatpickr.min.css'); ?>">
<?php }?>

<?php if ($page == 'pos') {   ?>
    <!-- Slick CSS -->
    <link rel="stylesheet" href="<?php echo base_url('assets/plugins/slick/slick.css'); ?>">
    <link rel="stylesheet" href="<?php echo base_url('assets/plugins/slick/slick-theme.css'); ?>">
<?php }?>

 <?php if ($page == 'addons' || $page == 'audit-report' || $page == 'categories' || $page == 'coupons' || $page == 'customer-report' || $page == 'customer' || $page == 'delivery-settings' || $page == 'earning-report' || $page == 'index' || $page == 'integrations-settings' || $page == 'invoices' || $page == 'items' || $page == 'kitchen' || $page == 'pos' || $page == 'notifications-settings' || $page == 'order-report' || $page == 'orders' || $page == 'payment-settings' || $page == 'payments' || $page == 'print-settings' || $page == 'reservations' || $page == 'role-permission' || $page == 'sales-report' || $page == 'store-settings' || $page == 'table' || $page == 'tax-settings' || $page == 'users') {   ?>
    <!-- Select2 CSS -->
    <link rel="stylesheet" href="<?php echo base_url('assets/plugins/select2/css/select2.min.css'); ?>">
<?php }?>

    <!-- Main CSS -->
    <link rel="stylesheet" href="<?php echo base_url('assets/css/style.css'); ?>">

