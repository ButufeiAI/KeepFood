<?php
$page = $this->getRequest()->getParam('pass')[0] ?? 'index';
?>

    <!-- Favicon -->
    <?= $this->Html->meta('icon', 'img/favicon.png', ['type' => 'image/png']) ?>

    <!-- Apple Icon -->
    <?= $this->Html->meta('apple-touch-icon', 'img/apple-icon.png', ['rel' => 'apple-touch-icon', 'type' => 'image/png']) ?>

<?php  if ($page !== 'signin' && $page !== 'signin_2' && $page !== 'signin_3' && $page !== 'register' && $page !== 'register_2' && $page !== 'register_3' && $page !== 'forgot_password' && $page !== 'forgot_password_2' && $page !== 'forgot_password_3'  && $page !== 'reset_password' && $page !== 'reset_password_2' && $page !== 'reset_password_3' && $page !== 'email_verification' && $page !== 'email_verification_2' && $page !== 'email_verification_3'
 && $page !== 'two_step_verification' && $page !== 'two_step_verification_2' && $page !== 'two_step_verification_3' && $page !== 'lock_screen' && $page !== 'error_404' && $page !== 'error_500' && $page !=='coming_soon' && $page !=='under_maintenance' && $page !=='layout_horizontal' && $page !=='layout_detached' && $page !=='layout_modern' && $page !=='layout_two_column' && $page !=='layout_hovered' && $page !=='layout_boxed'
 && $page !== 'layout_dark' && $page !== 'layout_rtl' && $page !== 'success' && $page !== 'success_2' && $page !== 'success_3') {   ?>
    <!-- Theme Script JS -->
    <?php echo $this->Html->script('theme-script.js'); ?> 
<?php }?>

<?php if ($page !== 'layout_rtl'){?>
    <!-- Bootstrap CSS -->
    <?php echo $this->Html->css('bootstrap.min.css'); ?> 
<?php }?> 

<?php if ($page === 'layout_rtl'){?>
    <!-- Bootstrap RTL CSS -->
    <?php echo $this->Html->css('bootstrap.rtl.min.css'); ?> 
<?php }?>  

<?php if($page !== 'signin' && $page !== 'signin_2' && $page !== 'signin_3' && $page !== 'register' && $page !== 'register_2' && $page !== 'register_3' && $page !== 'forgot_password' && $page !== 'forgot_password_2' && $page !== 'forgot_password_3'  && $page !== 'reset_password' && $page !== 'reset_password_2' && $page !== 'reset_password_3' && $page !== 'email_verification' && $page !== 'email_verification_2' && $page !== 'email_verification_3'
 && $page !== 'two_step_verification' && $page !== 'two_step_verification_2' && $page !== 'two_step_verification_3' && $page !== 'lock_screen' && $page !== 'error_404' && $page !== 'error_500' && $page !=='coming_soon' && $page !=='under_maintenance' && $page !== 'success' && $page !== 'success_2' && $page !== 'success_3' ) {?> 
    <!-- animation CSS -->
    <?php echo $this->Html->css('animate.css'); ?> 
<?php }?> 

    <!-- Tabler Icon CSS -->
    <?php echo $this->Html->css('/plugins/tabler-icons/tabler-icons.min.css'); ?>

    <!-- Fontawesome CSS -->
    <?php echo $this->Html->css('/plugins/fontawesome/css/fontawesome.min.css'); ?>
    <?php echo $this->Html->css('/plugins/fontawesome/css/all.min.css'); ?>

<?php  if ($page === 'add_product' || $page === 'audio_call' || $page === 'edit_product' || $page === 'domain' || $page === 'form_vertical' || $page === 'packages' || $page === 'product_list' || $page === 'purchase_transaction' || $page === 'reviews' || $page === 'subscription' || $page === 'tables_basic' || $page === 'ui_alerts' || $page === 'ui_nav_tabs' || $page === 'video_call'){?>
    <!-- Feathericon CSS -->
    <?php echo $this->Html->css('feather.css'); ?>
<?php }?>  

<?php  if ($page === 'icon_feather' || $page === 'icon_ionic'){?>
<!-- Feathericon CSS -->
    <?php echo $this->Html->css('/plugins/icons/feather/feather.css'); ?>
<?php }?>

<?php if($page !== 'signin' && $page !== 'signin_2' && $page !== 'signin_3' && $page !== 'register' && $page !== 'register_2' && $page !== 'register_3' && $page !== 'forgot_password' && $page !== 'forgot_password_2' && $page !== 'forgot_password_3'  && $page !== 'reset_password' && $page !== 'reset_password_2' && $page !== 'reset_password_3' && $page !== 'email_verification' && $page !== 'email_verification_2' && $page !== 'email_verification_3'
 && $page !== 'two_step_verification' && $page !== 'two_step_verification_2' && $page !== 'two_step_verification_3' && $page !== 'lock_screen' && $page !== 'error_404' && $page !== 'error_500' && $page !=='coming_soon' && $page !=='under_maintenance' && $page !== 'success' && $page !== 'success_2' && $page !== 'success_3' ) {?> 
    <!-- Datatable CSS -->
    <?php echo $this->Html->css('/css/dataTables.bootstrap5.min.css'); ?>

    <!-- Quill CSS -->
    <?php echo $this->Html->css('/plugins/quill/quill.snow.css'); ?>
<?php }?>

<?php  if ($page === 'icon_tabler' || $page === 'projects'){?>    
    <!-- Tabler Icon CSS -->
    <?php echo $this->Html->css('/plugins/icons/tabler-icons/tabler-icons.css'); ?>
<?php }?>
         
<?php if($page !== 'signin' && $page !== 'signin_2' && $page !== 'signin_3' && $page !== 'register' && $page !== 'register_2' && $page !== 'register_3' && $page !== 'forgot_password' && $page !== 'forgot_password_2' && $page !== 'forgot_password_3'  && $page !== 'reset_password' && $page !== 'reset_password_2' && $page !== 'reset_password_3' && $page !== 'email_verification' && $page !== 'email_verification_2' && $page !== 'email_verification_3'
 && $page !== 'two_step_verification' && $page !== 'two_step_verification_2' && $page !== 'two_step_verification_3' && $page !== 'lock_screen' && $page !== 'error_404' && $page !== 'error_500' && $page !=='coming_soon' && $page !=='under_maintenance' && $page !== 'success' && $page !== 'success_2' && $page !== 'success_3' ) {?> 
    <!-- Datetimepicker CSS -->
    <?php echo $this->Html->css('/css/bootstrap-datetimepicker.min.css'); ?>
<?php }?>

<?php  if ( $page === 'audio_call' || $page === 'pos' || $page === 'pos_2' || $page === 'pos_3' || $page === 'pos_4' || $page === 'pos_5' || $page === 'product_details' || $page === 'video_call' ){?>
    <?php echo $this->Html->css('/plugins/owlcarousel/owl.carousel.min.css'); ?>
    <?php echo $this->Html->css('/plugins/owlcarousel/owl.theme.default.min.css'); ?>
<?php }?>  

<?php  if ($page === 'barcode' || $page === 'file_manager' || $page === 'notes' || $page === 'plugin' || $page === 'qrcode' || $page === 'social_feed' || $page === 'todo_list' || $page === 'todo'){?>
    <!-- Owl Carousel CSS -->
    <?php echo $this->Html->css('/css/owl.carousel.min.css'); ?>
<?php }?>  

<?php  if ( $page === 'file_manager' ) {?>
    <!-- Player CSS -->
    <?php echo $this->Html->css('plyr.css'); ?>
<?php }?>

<?php if($page !== 'signin' && $page !== 'signin_2' && $page !== 'signin_3' && $page !== 'register' && $page !== 'register_2' && $page !== 'register_3' && $page !== 'forgot-password' && $page !== 'forgot-password-2' && $page !== 'forgot-password-3'  && $page !== 'reset-password' && $page !== 'reset-password-2' && $page !== 'reset-password-3' && $page !== 'email-verification' && $page !== 'email-verification-2' && $page !== 'email-verification-3'
 && $page !== 'two_step_verification' && $page !== 'two_step_verification_2' && $page !== 'two_step_verification_3' && $page !== 'lock_screen' && $page !== 'error_404' && $page !== 'error_500' && $page !=='coming-soon' && $page !=='under-maintenance' && $page !== 'success' && $page !== 'success-2' && $page !== 'success-3' ) {?> 
    <!-- Select2 CSS -->
    <?php echo $this->Html->css('/plugins/select2/css/select2.min.css'); ?>
<?php }?>

<?php  if ( $page === 'icon_flag' ) {?>
    <!-- Flag Icon CSS -->
    <?php echo $this->Html->css('/plugins/icons/flags/flags.css'); ?>
<?php }?>

<?php  if ( $page === 'icon_ionic' ) {?>
	<!-- Ionic CSS -->
    <?php echo $this->Html->css('/plugins/icons/ionic/ionicons.css'); ?>
<?php }?>    

<?php  if ( $page === 'icon_material' ) {?>
    <!-- Material CSS -->
    <?php echo $this->Html->css('/plugins/material/materialdesignicons.css'); ?>
<?php }?> 

<?php  if ( $page === 'icon_pe7' ) {?>
    <!-- Pe7 CSS -->
    <?php echo $this->Html->css('/plugins/icons/pe7/pe-icon-7.css'); ?>       
<?php }?> 

<?php  if ( $page === 'icon_simpleline' ) {?>
    <!-- Simpleline Icons CSS -->
    <?php echo $this->Html->css('/plugins/simpleline/simple-line-icons.css'); ?>
<?php }?>   

<?php  if ( $page === 'icon_themify' ) {?>
    <!-- Themify Icon CSS -->
    <?php echo $this->Html->css('/plugins/icons/themify/themify.css'); ?>
<?php }?> 

<?php  if ( $page === 'icon_typicon' ) {?>
    <!-- Typicon icons CSS -->
    <?php echo $this->Html->css('/plugins/icons/typicons/typicons.css'); ?>
<?php }?> 

<?php  if ( $page === 'icon_weather' ) {?>
    <!-- Weather CSS -->
    <?php echo $this->Html->css('/plugins/icons/weather/weathericons.css'); ?>
<?php }?>   

<?php  if ( $page === 'form_wizard' ) {?>
    <!-- Wizard CSS -->
    <?php echo $this->Html->css('/plugins/twitter-bootstrap-wizard/form-wizard.css'); ?>
<?php }?>

<?php  if ($page === 'audio_call' ||$page === 'call_history' || $page === 'chat' || $page === 'video_call') {?>
    <!-- Boxicons CSS -->
    <?php echo $this->Html->css('/plugins/boxicons/css/boxicons.min.css'); ?>
<?php }?>

<?php  if ($page === 'billers' ||$page === 'blog_comments' || $page === 'chat' || $page === 'contacts' || $page === 'customers' || $page === 'expired_products' || $page === 'security_settings' || $page === 'warehouse' || $page === 'form_mask') {?>
    <!-- Mobile CSS-->
    <?php echo $this->Html->css('/plugins/intltelinput/css/intlTelInput.css'); ?>
    <?php echo $this->Html->css('/plugins/intltelinput/css/demo.css'); ?>
<?php }?>

<?php  if ($page === 'add_product' ||$page === 'all_blog' ||$page === 'blog_tag' || $page === 'domain' || $page === 'edit_product' || $page === 'email_reply' || $page === 'localization_settings' || $page === 'otp_settings' || $page === 'packages' || $page === 'product_list' || $page === 'purchase_transaction' || $page === 'reviews' || $page === 'subscription' || $page === 'varriant_attributes') {?>
    <!-- Bootstrap Tagsinput CSS -->
    <?php echo $this->Html->css('/plugins/bootstrap-tagsinput/bootstrap-tagsinput.css'); ?>
<?php }?>

<?php  if ( $page === 'dashboard' || $page === 'sales_dashboard') {?>
    <!-- Map CSS -->
    <?php echo $this->Html->css('/plugins/jvectormap/jquery-jvectormap-2.0.5.css'); ?>
<?php }?>

<?php  if ($page === 'all_blog' || $page === 'blog_categories' || $page === 'blog_tag' ||$page === 'best_seller' || $page === 'calendar' || $page === 'companies' ||$page === 'customer_due_report' || $page === 'customer_report' || $page === 'dashboard' || $page === 'expense_report' || $page === 'form_pickers' || $page === 'income_report' || $page === 'income' || $page === 'index' || $page === 'inventory_report' || $page === 'invoice_report' || $page === 'layout_boxed' || $page === 'layout_dark' || $page === 'layout_detached' || $page === 'layout_rtl' || $page === 'layout_horizontal' || $page === 'layout_two_column' || $page === 'layout_hovered' || $page === 'notes' || $page === 'pos' || $page === 'pos_2' || $page === 'pos_3' || $page === 'pos_4' || $page === 'pos_5' || $page === 'product_expiry_report' || $page === 'product_quantity_alert' || $page === 'product_report' || $page === 'profit_and_loss' || $page === 'projects' || $page === 'purchase_report' || $page === 'sales_dashboard' || $page === 'sales_report' || $page === 'sales_tax' || $page === 'search_list' || $page === 'sold_stock' || $page === 'stock_history' || $page === 'supplier_due_report' || $page === 'supplier_report' || $page === 'tax_reports' || $page === 'todo_list' || $page === 'todo') {?>
    <!-- Daterangepikcer CSS -->
    <?php echo $this->Html->css('/plugins/daterangepicker/daterangepicker.css'); ?>
<?php }?>

<?php  if ( $page === 'ui_rangeslider' || $page === 'ui_ratings') {?>
    <!-- Rangeslider CSS -->
    <?php echo $this->Html->css('/plugins/ion-rangeslider/css/ion.rangeSlider.min.css'); ?>
<?php }?>

<?php  if ( $page === 'ui_drag_drop' || $page === 'ui_clipboard' || $page === 'ui_sortable') {?>
    <!-- Dragula CSS -->
    <?php echo $this->Html->css('/plugins/dragula/css/dragula.min.css'); ?>
<?php }?>

<?php  if ( $page === 'ui_lightbox' ) {?>
    <!-- Lightbox CSS -->
    <?php echo $this->Html->css('/plugins/lightbox/glightbox.min.css'); ?>
<?php }?>

<?php  if ( $page === 'ui_scrollbar' ) {?>
    <!-- Scrollbar CSS -->
    <?php echo $this->Html->css('/plugins/scrollbar/scroll.min.css'); ?>
<?php }?>

<?php  if ( $page === 'ui_toasts' ) {?>
    <!-- Toatr CSS -->		
    <?php echo $this->Html->css('/plugins/toastr/toastr.css'); ?>
<?php }?>

<?php if($page === 'ui_swiperjs' || $page === 'chat' || $page === 'video_call' ) {?>
    <!-- Swiper CSS -->
    <?php echo $this->Html->css('/plugins/swiper/swiper-bundle.min.css'); ?>
<?php }?>

<?php  if ( $page === 'ui_stickynote' || $page === 'ui_timeline') {?>
    <!-- Sticky CSS -->
    <?php echo $this->Html->css('/plugins/stickynote/sticky.css'); ?>
<?php }?>

<?php  if ( $page === 'icon_bootstrap' ) {?>
    <!-- Bootstrap Icon CSS -->
    <?php echo $this->Html->css('/plugins/icons/bootstrap/bootstrap-icons.min.css'); ?>
<?php }?>

<?php  if ( $page === 'icon_remix' ) {?>
    <!-- Remix Icon CSS -->
    <?php echo $this->Html->css('/plugins/icons/remix/fonts/remixicon.css'); ?>
<?php }?>

<?php  if ( $page === 'form_pickers' ) {?>
    <!-- Form Date PIckers CSS -->
    <?php echo $this->Html->css('/plugins/flatpickr/flatpickr.css'); ?>
    <?php echo $this->Html->css('/plugins/bootstrap-datepicker/bootstrap-datepicker.css'); ?>
    <?php echo $this->Html->css('/plugins/jquery-timepicker/jquery-timepicker.css'); ?>
    <?php echo $this->Html->css('/plugins/pickr/pickr-themes.css'); ?>
<?php }?>

<?php  if ( $page === 'maps_vector' ) {?>
    <!-- Jsvector Maps -->
    <?php echo $this->Html->css('/plugins/jsvectormap/css/jsvectormap.min.css'); ?>
<?php }?>

<?php  if ( $page === 'maps_leaflet' ) {?>
    <!-- Leaflet Maps CSS -->
    <?php echo $this->Html->css('/plugins/leaflet/leaflet.css'); ?>
<?php }?>

<?php  if ( $page === 'chat' || $page === 'email_reply' || $page === 'social_feed' || $page === 'search_list') {?>
    <!-- Fancybox -->
    <?php echo $this->Html->css('/plugins/fancybox/jquery.fancybox.min.css'); ?>
<?php }?>

<?php if($page !== 'signin' && $page !== 'signin_2' && $page !== 'signin_3' && $page !== 'register' && $page !== 'register_2' && $page !== 'register_3' && $page !== 'forgot_password' && $page !== 'forgot_password_2' && $page !== 'forgot_password_3'  && $page !== 'reset_password' && $page !== 'reset_password_2' && $page !== 'reset_password_3' && $page !== 'email_verification' && $page !== 'email_verification_2' && $page !== 'email_verification-3'
 && $page !== 'two_step_verification' && $page !== 'two_step_verification_2' && $page !== 'two_step_verification_3' && $page !== 'lock_screen' && $page !== 'error_404' && $page !== 'error_500' && $page !=='coming_soon' && $page !=='under_maintenance' && $page !== 'success' && $page !== 'success_2' && $page !== 'success_3' ) {?>
    <!-- Color Picker Css -->
    <?php echo $this->Html->css('/plugins/@simonwep/pickr/themes/nano.min.css'); ?>
<?php }?>

    <!-- Main CSS -->
    <?php echo $this->Html->css('style.css'); ?>
