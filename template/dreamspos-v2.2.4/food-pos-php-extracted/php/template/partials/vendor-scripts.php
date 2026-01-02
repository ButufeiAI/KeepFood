<?php
$link = $_SERVER[ 'PHP_SELF' ];
$link_array = explode( '/', $link );
$page = end( $link_array );
?>

    <!-- jQuery -->
    <script src="assets/js/jquery-3.7.1.min.js"></script>

    <!-- Bootstrap Core JS -->
    <script src="assets/js/bootstrap.bundle.min.js"></script>

<?php if ($page !== 'login.php' && $page !== 'register.php' && $page !== 'email-verification.php' && $page !== 'forgot-password.php' && $page !== 'otp.php' && $page !== 'reset-password.php') {   ?>
	<!-- Simplebar JS -->
	<script src="assets/plugins/simplebar/simplebar.min.js"></script>
<?php }?>

<?php if ($page == 'addons.php' || $page == 'coupons.php' || $page == 'index.php' || $page == 'invoices.php' || $page == 'kanban-view.php' || $page == 'orders.php' || $page == 'payments.php' || $page == 'role-permission.php' || $page == 'users.php') {   ?>
    <!-- Daterangepikcer JS -->
    <script src="assets/js/moment.min.js"></script>
    <script src="assets/plugins/daterangepicker/daterangepicker.js"></script>
<?php }?>

<?php if ($page == 'addons.php' || $page == 'audit-report.php' || $page == 'categories.php' || $page == 'coupons.php' || $page == 'customer-report.php' || $page == 'customer.php' || $page == 'delivery-settings.php' || $page == 'earning-report.php' || $page == 'integrations-settings.php' || $page == 'invoices.php' || $page == 'items.php' || $page == 'notifications-settings.php' || $page == 'order-report.php' || $page == 'payment-settings.php' || $page == 'payments.php' || $page == 'print-settings.php' || $page == 'role-permission.php' || $page == 'sales-report.php' || $page == 'store-settings.php' || $page == 'table.php' || $page == 'users.php') {   ?>
	<!-- Datatable JS -->
    <script src="assets/plugins/datatables/js/jquery.dataTables.min.js"></script>
	<script src="assets/plugins/datatables/dataTables.bootstrap5.min.js"></script>
<?php }?>

<?php if ($page == 'audit-report.php' || $page == 'coupons.php' || $page == 'customer-report.php' || $page == 'customer.php' || $page == 'delivery-settings.php' || $page == 'earning-report.php' || $page == 'integrations-settings.php' || $page == 'kitchen.php' || $page == 'pos.php' || $page == 'notifications-settings.php' || $page == 'order-report.php' || $page == 'orders.php' || $page == 'payment-settings.php' || $page == 'print-settings.php' || $page == 'reservations.php' || $page == 'sales-report.php' || $page == 'store-settings.php' || $page == 'table.php') {   ?>
    <!-- Flatpickr JS -->
	<script src="assets/plugins/flatpickr/flatpickr.min.js"></script>
<?php }?>

<?php if ($page == 'pos.php') {   ?>
    <!-- Slick Js -->
    <script src="assets/plugins/slick/slick.min.js"></script>
<?php }?>

<?php if ($page == 'index.php') {   ?>
    <!-- ApexChart JS -->
    <script src="assets/plugins/apexchart/apexcharts.min.js"></script>
    <script src="assets/plugins/apexchart/chart-data.js"></script>
<?php }?>

<?php if ($page == 'kanban-view.php') {   ?>
    <!-- Dragula Js-->
    <script src="assets/plugins/dragula/dragula.min.js"></script>
    <script src="assets/js/dragula.js"></script>
<?php }?>

<?php if ($page == 'orders.php' || $page == 'kanban-view.php') {   ?>
    <!-- Calculator JS -->
    <script src="assets/js/calculator.js"></script>
<?php }?>

<?php if ($page == 'otp.php') {   ?>
	<!-- OTP JS -->
	<script src="assets/js/otp.js"></script>
<?php }?>

<?php if ($page == 'addons.php' || $page == 'audit-report.php' || $page == 'categories.php' || $page == 'coupons.php' || $page == 'customer-report.php' || $page == 'customer.php' || $page == 'delivery-settings.php' || $page == 'earning-report.php' || $page == 'index.php' || $page == 'integrations-settings.php' || $page == 'invoices.php' || $page == 'items.php' || $page == 'kitchen.php' || $page == 'pos.php' || $page == 'notifications-settings.php' || $page == 'order-report.php' || $page == 'orders.php' || $page == 'payment-settings.php' || $page == 'payments.php' || $page == 'print-settings.php' || $page == 'reservations.php' || $page == 'role-permission.php' || $page == 'sales-report.php' || $page == 'store-settings.php' || $page == 'table.php' || $page == 'tax-settings.php' || $page == 'users.php') {   ?>
    <!-- Select2 Js -->
    <script src="assets/plugins/select2/js/select2.min.js"></script>
<?php }?>

    <!-- Main JS -->
    <script src="assets/js/script.js"></script>
