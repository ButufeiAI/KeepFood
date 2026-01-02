<?php
$page = $this->getRequest()->getParam('pass')[0] ?? 'index';
?>

    <!-- jQuery -->
    <?php echo $this->Html->script('jquery-3.7.1.min.js'); ?>

    <!-- Bootstrap Core JS -->
    <?php echo $this->Html->script('bootstrap.bundle.min.js'); ?>

<?php if ($page !== 'login' && $page !== 'register' && $page !== 'email_verification' && $page !== 'forgot_password' && $page !== 'otp' && $page !== 'reset_password') {   ?>
	<!-- Simplebar JS -->
	<?php echo $this->Html->script('/plugins/simplebar/simplebar.min.js'); ?>
<?php }?>

<?php if ($page == 'addons' || $page == 'coupons' || $page == 'index' || $page == 'invoices' || $page == 'kanban_view' || $page == 'orders' || $page == 'payments' || $page == 'role_permission' || $page == 'users') {   ?>
    <!-- Daterangepikcer JS -->
    <?php echo $this->Html->script('moment.min.js'); ?>
    <?php echo $this->Html->script('/plugins/daterangepicker/daterangepicker.js'); ?>
<?php }?>

<?php if ($page == 'addons' || $page == 'audit_report' || $page == 'categories' || $page == 'coupons' || $page == 'customer_report' || $page == 'customer' || $page == 'delivery_settings' || $page == 'earning_report' || $page == 'integrations_settings' || $page == 'invoices' || $page == 'items' || $page == 'notifications_settings' || $page == 'order_report' || $page == 'payment_settings' || $page == 'payments' || $page == 'print_settings' || $page == 'role_permission' || $page == 'sales_report' || $page == 'store_settings' || $page == 'table' || $page == 'users') {   ?>
	<!-- Datatable JS -->
    <?php echo $this->Html->script('/plugins/datatables/js/jquery.dataTables.min.js'); ?>
	<?php echo $this->Html->script('/plugins/datatables/dataTables.bootstrap5.min.js'); ?>
<?php }?>

<?php if ($page == 'audit_report' || $page == 'coupons' || $page == 'customer_report' || $page == 'customer' || $page == 'delivery_settings' || $page == 'earning_report' || $page == 'integrations_settings' || $page == 'kitchen' || $page == 'pos' || $page == 'notifications_settings' || $page == 'order_report' || $page == 'orders' || $page == 'payment_settings' || $page == 'print_settings' || $page == 'reservations' || $page == 'sales_report' || $page == 'store_settings' || $page == 'table') {   ?>
    <!-- Flatpickr JS -->
	<?php echo $this->Html->script('/plugins/flatpickr/flatpickr.min.js'); ?>
<?php }?>

<?php if ($page == 'pos') {   ?>
    <!-- Slick Js -->
    <?php echo $this->Html->script('/plugins/slick/slick.min.js'); ?>
<?php }?>

<?php if ($page == 'index') {   ?>
    <!-- ApexChart JS -->
    <?php echo $this->Html->script('/plugins/apexchart/apexcharts.min.js'); ?>
    <?php echo $this->Html->script('/plugins/apexchart/chart-data.js'); ?>
<?php }?>

<?php if ($page == 'kanban_view') {   ?>
    <!-- Dragula Js-->
    <?php echo $this->Html->script('/plugins/dragula/dragula.min.js'); ?>
    <?php echo $this->Html->script('dragula.js'); ?>
<?php }?>

<?php if ($page == 'orders' || $page == 'kanban_view') {   ?>
    <!-- Calculator JS -->
    <?php echo $this->Html->script('calculator.js'); ?>
<?php }?>

<?php if ($page == 'otp') {   ?>
	<!-- OTP JS -->
	<?php echo $this->Html->script('otp.js'); ?>
<?php }?>

<?php if ($page == 'addons' || $page == 'audit_report' || $page == 'categories' || $page == 'coupons' || $page == 'customer_report' || $page == 'customer' || $page == 'delivery_settings' || $page == 'earning_report' || $page == 'index' || $page == 'integrations_settings' || $page == 'invoices' || $page == 'items' || $page == 'kitchen' || $page == 'pos' || $page == 'notifications_settings' || $page == 'order_report' || $page == 'orders' || $page == 'payment_settings' || $page == 'payments' || $page == 'print_settings' || $page == 'reservations' || $page == 'role_permission' || $page == 'sales_report' || $page == 'store_settings' || $page == 'table' || $page == 'tax_settings' || $page == 'users') {   ?>
    <!-- Select2 Js -->
    <?php echo $this->Html->script('/plugins/select2/js/select2.min.js'); ?>
<?php }?>

    <!-- Main JS -->
    <?php echo $this->Html->script('script.js'); ?>