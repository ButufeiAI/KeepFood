<?php
use yii\helpers\Html;
use yii\helpers\Url;

$path = Yii::$app->request->getPathInfo();
// Handle root path - if empty, treat as index page
$page = empty($path) ? 'index' : basename($path);
?>

    <!-- jQuery -->
    <script src="<?= Url::to('@web/assets/js/jquery-3.7.1.min.js') ?>"></script>

    <!-- Bootstrap Core JS -->
    <script src="<?= Url::to('@web/assets/js/bootstrap.bundle.min.js') ?>"></script>

<?php if ($page !== 'login' && $page !== 'register' && $page !== 'email-verification' && $page !== 'forgot-password' && $page !== 'otp' && $page !== 'reset-password') {   ?>
	<!-- Simplebar JS -->
	<script src="<?= Url::to('@web/assets/plugins/simplebar/simplebar.min.js') ?>"></script>
<?php }?>

<?php if ($page == 'addons' || $page == 'coupons' || $page == 'index' || $page == 'invoices' || $page == 'kanban-view' || $page == 'orders' || $page == 'payments' || $page == 'role-permission' || $page == 'users') {   ?>
    <!-- Daterangepikcer JS -->
    <script src="<?= Url::to('@web/assets/js/moment.min.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/plugins/daterangepicker/daterangepicker.js') ?>"></script>
<?php }?>

<?php if ($page == 'addons' || $page == 'audit-report' || $page == 'categories' || $page == 'coupons' || $page == 'customer-report' || $page == 'customer' || $page == 'delivery-settings' || $page == 'earning-report' || $page == 'integrations-settings' || $page == 'invoices' || $page == 'items' || $page == 'notifications-settings' || $page == 'order-report' || $page == 'payment-settings' || $page == 'payments' || $page == 'print-settings' || $page == 'role-permission' || $page == 'sales-report' || $page == 'store-settings' || $page == 'table' || $page == 'users') {   ?>
	<!-- Datatable JS -->
    <script src="<?= Url::to('@web/assets/plugins/datatables/js/jquery.dataTables.min.js') ?>"></script>
	<script src="<?= Url::to('@web/assets/plugins/datatables/dataTables.bootstrap5.min.js') ?>"></script>
<?php }?>

<?php if ($page == 'audit-report' || $page == 'coupons' || $page == 'customer-report' || $page == 'customer' || $page == 'delivery-settings' || $page == 'earning-report' || $page == 'integrations-settings' || $page == 'kitchen' || $page == 'pos' || $page == 'notifications-settings' || $page == 'order-report' || $page == 'orders' || $page == 'payment-settings' || $page == 'print-settings' || $page == 'reservations' || $page == 'sales-report' || $page == 'store-settings' || $page == 'table') {   ?>
    <!-- Flatpickr JS -->
	<script src="<?= Url::to('@web/assets/plugins/flatpickr/flatpickr.min.js') ?>"></script>
<?php }?>

<?php if ($page == 'pos') {   ?>
    <!-- Slick Js -->
    <script src="<?= Url::to('@web/assets/plugins/slick/slick.min.js') ?>"></script>
<?php }?>

<?php if ($page == 'index') {   ?>
    <!-- ApexChart JS -->
    <script src="<?= Url::to('@web/assets/plugins/apexchart/apexcharts.min.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/plugins/apexchart/chart-data.js') ?>"></script>
<?php }?>

<?php if ($page == 'kanban-view') {   ?>
    <!-- Dragula Js-->
    <script src="<?= Url::to('@web/assets/plugins/dragula/dragula.min.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/js/dragula.js') ?>"></script>
<?php }?>

<?php if ($page == 'orders' || $page == 'kanban-view') {   ?>
    <!-- Calculator JS -->
    <script src="<?= Url::to('@web/assets/js/calculator.js') ?>"></script>
<?php }?>

<?php if ($page == 'otp') {   ?>
	<!-- OTP JS -->
	<script src="<?= Url::to('@web/assets/js/otp.js') ?>"></script>
<?php }?>

<?php if ($page == 'addons' || $page == 'audit-report' || $page == 'categories' || $page == 'coupons' || $page == 'customer-report' || $page == 'customer' || $page == 'delivery-settings' || $page == 'earning-report' || $page == 'index' || $page == 'integrations-settings' || $page == 'invoices' || $page == 'items' || $page == 'kitchen' || $page == 'pos' || $page == 'notifications-settings' || $page == 'order-report' || $page == 'orders' || $page == 'payment-settings' || $page == 'payments' || $page == 'print-settings' || $page == 'reservations' || $page == 'role-permission' || $page == 'sales-report' || $page == 'store-settings' || $page == 'table' || $page == 'tax-settings' || $page == 'users') {   ?>
    <!-- Select2 Js -->
    <script src="<?= Url::to('@web/assets/plugins/select2/js/select2.min.js') ?>"></script>
<?php }?>

    <!-- Main JS -->
    <script src="<?= Url::to('@web/assets/js/script.js') ?>"></script>
