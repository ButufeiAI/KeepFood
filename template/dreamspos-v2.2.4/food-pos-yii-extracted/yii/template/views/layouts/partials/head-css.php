<?php
use yii\helpers\Html;
use yii\helpers\Url;

$path = Yii::$app->request->getPathInfo();
// Handle root path - if empty, treat as index page
$page = empty($path) ? 'index' : basename($path);
?>

<?= Html::tag('link', '', ['rel' => 'shortcut icon', 'href' => Url::to('@web/assets/img/favicon.png')]) ?>

<?= Html::tag('link', '', ['rel' => 'apple-touch-icon', 'href' => Url::to('@web/assets/img/apple-touch-icon.png')]) ?>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/css/bootstrap.min.css') ?>">

<?php if ($page !== 'login' && $page !== 'register' && $page !== 'email-verification' && $page !== 'forgot-password' && $page !== 'otp' && $page !== 'reset-password') {   ?>
    <!-- Theme Script -->
    <script src="<?= Url::to('@web/assets/js/theme-script.js') ?>"></script>
<?php }?>

    <!-- Lucide Icon CSS -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/lucide/lucide.css') ?>">

<?php if ($page !== 'login' && $page !== 'register' && $page !== 'email-verification' && $page !== 'forgot-password' && $page !== 'otp' && $page !== 'reset-password') {   ?>
    <!-- Simplebar CSS -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/simplebar/simplebar.min.css') ?>">
<?php }?>

<?php if ($page == 'addons' || $page == 'coupons' || $page == 'index' || $page == 'invoices' || $page == 'kanban-view' || $page == 'orders' || $page == 'payments' || $page == 'role-permission' || $page == 'users') {   ?>
    <!-- Daterangepikcer CSS -->
	<link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/daterangepicker/daterangepicker.css') ?>">
<?php }?>

<?php if ($page == 'addons' || $page == 'audit-report' || $page == 'categories' || $page == 'coupons' || $page == 'customer-report' || $page == 'customer' || $page == 'delivery-settings' || $page == 'earning-report' || $page == 'integrations-settings' || $page == 'invoices' || $page == 'items' || $page == 'notifications-settings' || $page == 'order-report' || $page == 'payment-settings' || $page == 'payments' || $page == 'print-settings' || $page == 'role-permission' || $page == 'sales-report' || $page == 'store-settings' || $page == 'table' || $page == 'users') {   ?>
    <!-- Datatable CSS -->
	<link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/datatables/dataTables.bootstrap5.min.css') ?>">
<?php }?>

<?php if ($page == 'audit-report' || $page == 'coupons' || $page == 'customer-report' || $page == 'customer' || $page == 'delivery-settings' || $page == 'earning-report' || $page == 'integrations-settings' || $page == 'kitchen' || $page == 'pos' || $page == 'notifications-settings' || $page == 'order-report' || $page == 'orders' || $page == 'payment-settings' || $page == 'print-settings' || $page == 'reservations' || $page == 'sales-report' || $page == 'store-settings' || $page == 'table') {   ?>
    <!-- Flatpickr CSS -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/flatpickr/flatpickr.min.css') ?>">
<?php }?>

<?php if ($page == 'pos') {   ?>
    <!-- Slick CSS -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/slick/slick.css') ?>">
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/slick/slick-theme.css') ?>">
<?php }?>

 <?php if ($page == 'addons' || $page == 'audit-report' || $page == 'categories' || $page == 'coupons' || $page == 'customer-report' || $page == 'customer' || $page == 'delivery-settings' || $page == 'earning-report' || $page == 'index' || $page == 'integrations-settings' || $page == 'invoices' || $page == 'items' || $page == 'kitchen' || $page == 'pos' || $page == 'notifications-settings' || $page == 'order-report' || $page == 'orders' || $page == 'payment-settings' || $page == 'payments' || $page == 'print-settings' || $page == 'reservations' || $page == 'role-permission' || $page == 'sales-report' || $page == 'store-settings' || $page == 'table' || $page == 'tax-settings' || $page == 'users') {   ?>
    <!-- Select2 CSS -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/select2/css/select2.min.css') ?>">
<?php }?>

    <!-- Main CSS -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/css/style.css') ?>">