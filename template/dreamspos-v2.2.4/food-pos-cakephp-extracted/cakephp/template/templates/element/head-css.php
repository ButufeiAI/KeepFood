<?php
$page = $this->getRequest()->getParam('pass')[0] ?? 'index';
?>

    <!-- Favicon -->
    <?= $this->Html->meta('icon', 'img/favicon.png', ['type' => 'image/png']) ?>

    <!-- Apple Icon -->
    <?= $this->Html->meta('apple-touch-icon', 'img/apple-icon.png', ['rel' => 'apple-touch-icon']) ?>

    <!-- Bootstrap CSS -->
    <?php echo $this->Html->css('bootstrap.min.css'); ?>

<?php if ($page !== 'login' && $page !== 'register' && $page !== 'email_verification' && $page !== 'forgot_password' && $page !== 'otp' && $page !== 'reset_password') {   ?>
    <!-- Theme Script -->
    <?php echo $this->Html->script('theme-script.js'); ?>
<?php }?>

    <!-- Lucide Icon CSS -->
    <?php echo $this->Html->css('/plugins/lucide/lucide.css'); ?>

<?php if ($page !== 'login' && $page !== 'register' && $page !== 'email_verification' && $page !== 'forgot_password' && $page !== 'otp' && $page !== 'reset_password') {   ?>
    <!-- Simplebar CSS -->
    <?php echo $this->Html->css('/plugins/simplebar/simplebar.min.css'); ?>
<?php }?>

<?php if ($page == 'addons' || $page == 'coupons' || $page == 'index' || $page == 'invoices' || $page == 'kanban_view' || $page == 'orders' || $page == 'payments' || $page == 'role_permission' || $page == 'users') {   ?>
    <!-- Daterangepikcer CSS -->
	<?php echo $this->Html->css('/plugins/daterangepicker/daterangepicker.css'); ?>
<?php }?>

<?php if ($page == 'addons' || $page == 'audit_report' || $page == 'categories' || $page == 'coupons' || $page == 'customer_report' || $page == 'customer' || $page == 'delivery_settings' || $page == 'earning_report' || $page == 'integrations_settings' || $page == 'invoices' || $page == 'items' || $page == 'notifications_settings' || $page == 'order_report' || $page == 'payment_settings' || $page == 'payments' || $page == 'print_settings' || $page == 'role_permission' || $page == 'sales_report' || $page == 'store_settings' || $page == 'table' || $page == 'users') {   ?>
    <!-- Datatable CSS -->
	<?php echo $this->Html->css('/plugins/datatables/dataTables.bootstrap5.min.css'); ?>
<?php }?>

<?php if ($page == 'audit_report' || $page == 'coupons' || $page == 'customer_report' || $page == 'customer' || $page == 'delivery_settings' || $page == 'earning_report' || $page == 'integrations_settings' || $page == 'kitchen' || $page == 'pos' || $page == 'notifications_settings' || $page == 'order_report' || $page == 'orders' || $page == 'payment_settings' || $page == 'print_settings' || $page == 'reservations' || $page == 'sales_report' || $page == 'store_settings' || $page == 'table') {   ?>
    <!-- Flatpickr CSS -->
    <?php echo $this->Html->css('/plugins/flatpickr/flatpickr.min.css'); ?>
<?php }?>

<?php if ($page == 'pos') {   ?>
    <!-- Slick CSS -->
    <?php echo $this->Html->css('/plugins/slick/slick.css'); ?>
    <?php echo $this->Html->css('/plugins/slick/slick-theme.css'); ?>
<?php }?>

 <?php if ($page == 'addons' || $page == 'audit_report' || $page == 'categories' || $page == 'coupons' || $page == 'customer_report' || $page == 'customer' || $page == 'delivery_settings' || $page == 'earning_report' || $page == 'index' || $page == 'integrations_settings' || $page == 'invoices' || $page == 'items' || $page == 'kitchen' || $page == 'pos' || $page == 'notifications_settings' || $page == 'order_report' || $page == 'orders' || $page == 'payment_settings' || $page == 'payments' || $page == 'print_settings' || $page == 'reservations' || $page == 'role_permission' || $page == 'sales_report' || $page == 'store_settings' || $page == 'table' || $page == 'tax_settings' || $page == 'users') {   ?>
    <!-- Select2 CSS -->
    <?php echo $this->Html->css('/plugins/select2/css/select2.min.css'); ?>
<?php }?>

    <!-- Main CSS -->
    <?php echo $this->Html->css('style.css'); ?>
