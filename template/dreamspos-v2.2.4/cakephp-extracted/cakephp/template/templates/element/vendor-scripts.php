<?php
$page = $this->getRequest()->getParam('pass')[0] ?? 'index';
?>

    <!-- jQuery -->
    <?php echo $this->Html->script('jquery-3.7.1.min.js'); ?>

    <!-- Feather Icon JS -->
    <?php echo $this->Html->script('feather.min.js'); ?>

    <!-- Slimscroll JS -->
    <?php echo $this->Html->script('jquery.slimscroll.min.js'); ?>

<?php if($page === 'chat') {?>    
    <!-- Slimscroll JS -->
    <?php echo $this->Html->script('/plugins/slimscroll/jquery.slimscroll.min.js'); ?>
<?php }?>

<?php if($page !== 'signin' && $page !== 'signin_2' && $page !== 'signin_3' && $page !== 'register' && $page !== 'register_2' && $page !== 'register_3' && $page !== 'forgot-password' && $page !== 'forgot-password-2' && $page !== 'forgot-password-3'  && $page !== 'reset-password' && $page !== 'reset-password-2' && $page !== 'reset-password-3' && $page !== 'email-verification' && $page !== 'email-verification-2' && $page !== 'email-verification-3'
 && $page !== 'two_step_verification' && $page !== 'two_step_verification_2' && $page !== 'two_step_verification_3' && $page !== 'lock_screen' && $page !== 'error_404' && $page !== 'error_500' && $page !=='coming_soon' && $page !=='under_maintenance' && $page !== 'success' && $page !== 'success_2' && $page !== 'success_3' ) {?>   
    <!-- Datatable JS -->
    <?php echo $this->Html->script('jquery.dataTables.min.js'); ?>
    <?php echo $this->Html->script('dataTables.bootstrap5.min.js'); ?>

    <!-- Datetimepicker JS -->
    <?php echo $this->Html->script('moment.min.js'); ?>
    <?php echo $this->Html->script('bootstrap-datetimepicker.min.js'); ?>
<?php }?>

    <!-- Bootstrap Core JS -->
    <?php echo $this->Html->script('bootstrap.bundle.min.js'); ?>

<?php if($page !== 'signin' && $page !== 'signin_2' && $page !== 'signin_3' && $page !== 'register' && $page !== 'register_2' && $page !== 'register_3' && $page !== 'forgot_password' && $page !== 'forgot_password_2' && $page !== 'forgot_password_3'  && $page !== 'reset_password' && $page !== 'reset_password_2' && $page !== 'reset_password_3' && $page !== 'email_verification' && $page !== 'email_verification_2' && $page !== 'email_verification_3'
 && $page !== 'two_step_verification' && $page !== 'two_step_verification_2' && $page !== 'two_step_verification_3' && $page !== 'lock_screen' && $page !== 'error_404' && $page !== 'error_500' && $page !=='coming_soon' && $page !=='under_maintenance' && $page !== 'success' && $page !== 'success_2' && $page !== 'success_3' ) {?>     
    <!-- Quill JS -->
    <?php echo $this->Html->script('/plugins/quill/quill.min.js'); ?>
<?php }?>   

<?php if($page === 'chart_c3') {?>
    <!-- Chart c3 JS -->
    <?php echo $this->Html->script('/plugins/c3-chart/d3.v5.min.js'); ?>
    <?php echo $this->Html->script('/plugins/c3-chart/c3.min.js'); ?>
    <?php echo $this->Html->script('/plugins/c3-chart/chart-data.js'); ?>
<?php }?>

<?php if($page === 'form_fileupload') {?>
    <!-- Fileupload JS -->
    <?php echo $this->Html->script('/plugins/fileupload/fileupload.min.js'); ?>
<?php }?>

<?php if($page === 'form_mask') {?>
    <!-- Mask JS -->
    <?php echo $this->Html->script('jquery.maskedinput.min.js'); ?>
    <?php echo $this->Html->script('mask.js'); ?>
<?php }?>

<?php if($page === 'chart_flot') {?>
    <!-- Chart flot JS -->
    <?php echo $this->Html->script('/plugins/flot/jquery.flot.js'); ?>
    <?php echo $this->Html->script('/plugins/flot/jquery.flot.pie.js'); ?>
    <?php echo $this->Html->script('/plugins/flot/chart-data.js'); ?>
<?php }?>

<?php if($page === 'chart_js' || $page === 'dashboard' || $page === 'index' || $page === 'layout_boxed' || $page === 'layout_dark' || $page === 'layout_detached' || $page === 'layout_horizontal' || $page === 'layout_hovered' || $page === 'layout_rtl' || $page === 'layout_two_column' || $page === 'subscription') {?>
    <!-- Chart JS -->
    <?php echo $this->Html->script('/plugins/chartjs/chart.min.js'); ?>
    <?php echo $this->Html->script('/plugins/chartjs/chart-data.js'); ?>
<?php }?>

<?php if($page === 'chart_morris') {?>
    <!-- Chart JS -->
    <?php echo $this->Html->script('/plugins/morris/raphael-min.js'); ?>
    <?php echo $this->Html->script('/plugins/morris/morris.min.js'); ?>
    <?php echo $this->Html->script('/plugins/morris/chart-data.js'); ?>
<?php }?>

<?php if($page === 'chart_peity' || $page === 'dashboard' || $page === 'subscription') {?>
    <!-- Chart JS -->
    <?php echo $this->Html->script('/plugins/peity/jquery.peity.min.js'); ?>
    <?php echo $this->Html->script('/plugins/peity/chart-data.js'); ?>
<?php }?>

<?php if($page === 'calendar') {?>
    <!-- Fullcalendar JS -->
    <?php echo $this->Html->script('/plugins/fullcalendar/index.global.min.js'); ?>
    <?php echo $this->Html->script('/plugins/fullcalendar/calendar-data.js'); ?>
<?php }?>

<?php  if ($page === 'add_product' ||$page === 'all_blog' ||$page === 'blog_tag' || $page === 'domain' || $page === 'edit_product' || $page === 'email_reply' || $page === 'localization_settings' || $page === 'otp_settings' || $page === 'packages' || $page === 'product_list' || $page === 'purchase_transaction' || $page === 'reviews' || $page === 'subscription' || $page === 'varriant_attributes') {?>
    <!-- Bootstrap Tagsinput JS -->
    <?php echo $this->Html->script('/plugins/bootstrap-tagsinput/bootstrap-tagsinput.js'); ?>
<?php }?>

<?php  if ($page === 'admin_dashboard' ||$page === 'barcode' ||$page === 'calendar' || $page === 'chart_apex' || $page === 'companies' || $page === 'email_reply' || $page === 'dashboard' || $page === 'email' || $page === 'file_manager' || $page === 'form_elements' || $page === 'icon_feather' || $page === 'icon_flag' || $page === 'icon_fontawesome' || $page === 'icon_ionic' || $page === 'icon_material' || $page === 'icon_pe7' || $page === 'icon_remix' || $page === 'icon_simpleline' || $page === 'icon_tabler' || $page === 'icon_themify' || $page === 'icon_typicon' || $page === 'icon_weather' || $page === 'index' || $page === 'layout_boxed' || $page === 'layout_dark' || $page === 'layout_detached' || $page === 'layout_horizontal' || $page === 'layout_hovered' || $page === 'layout_rtl' || $page === 'layout_two_column' || $page === 'notes' || $page === 'pos' || $page === 'pos_2' || $page === 'pos_3' || $page === 'pos_4' || $page === 'pos_5' || $page === 'qrcode' || $page === 'sales_dashboard' || $page === 'todo_list' || $page === 'todo') {?>
    <!-- Chart Apex JS -->
    <?php echo $this->Html->script('/plugins/apexchart/apexcharts.min.js'); ?>
    <?php echo $this->Html->script('/plugins/apexchart/chart-data.js'); ?>
<?php }?>

<?php if($page === 'sales_dashboard') {?>
    <!-- Map JS -->
    <?php echo $this->Html->script('/plugins/jvectormap/jquery-jvectormap-2.0.5.min.js'); ?>
    <?php echo $this->Html->script('/plugins/jvectormap/jquery-jvectormap-world-mill.js'); ?>
    <?php echo $this->Html->script('/plugins/jvectormap/jquery-jvectormap-ru-mill.js'); ?>
    <?php echo $this->Html->script('/plugins/jvectormap/jquery-jvectormap-us-aea.js'); ?>
    <?php echo $this->Html->script('/plugins/jvectormap/jquery-jvectormap-uk_countries-mill.js'); ?>        
    <?php echo $this->Html->script('/plugins/jvectormap/jquery-jvectormap-in-mill.js'); ?>
    <?php echo $this->Html->script('jvectormap.js'); ?>
<?php }?>

<?php if($page !== 'signin' && $page !== 'signin_2' && $page !== 'signin_3' && $page !== 'register' && $page !== 'register_2' && $page !== 'register_3' && $page !== 'forgot_password' && $page !== 'forgot_password_2' && $page !== 'forgot_password_3'  && $page !== 'reset_password' && $page !== 'reset_password_2' && $page !== 'reset_password-3' && $page !== 'email_verification' && $page !== 'email_verification_2' && $page !== 'email_verification-3'
 && $page !== 'two_step_verification' && $page !== 'two_step_verification_2' && $page !== 'two_step_verification_3' && $page !== 'lock_screen' && $page !== 'error_404' && $page !== 'error_500' && $page !=='coming_soon' && $page !=='under_maintenance' && $page !== 'success' && $page !== 'success_2' && $page !== 'success_3' ) {?> 
    <!-- Select2 JS -->
    <?php echo $this->Html->script('/plugins/select2/js/select2.min.js'); ?>
<?php }?>

<?php  if ($page === 'billers' ||$page === 'blog_comments' || $page === 'chat' || $page === 'contacts' || $page === 'customers' || $page === 'expired_products' || $page === 'security_settings' || $page === 'warehouse' || $page === 'form_mask') {?>
    <!-- Mobile Input -->
    <?php echo $this->Html->script('/plugins/intltelinput/js/intlTelInput.js'); ?>
<?php }?>

<?php if($page === 'ui_swiperjs' || $page === 'chat' || $page === 'video_call' ) {?>
    <!-- Swiper JS -->
    <?php echo $this->Html->script('/plugins/swiper/swiper-bundle.min.js'); ?>
<?php }?>

<?php if($page === 'ui_swiperjs') {?>
    <!-- Internal Swiper JS -->
    <?php echo $this->Html->script('swiper.js'); ?>
<?php }?>

<?php  if ( $page === 'chat' || $page === 'email_reply' || $page === 'social_feed' || $page === 'search_list') {?>
    <!-- FancyBox JS -->
    <?php echo $this->Html->script('/plugins/fancybox/jquery.fancybox.min.js'); ?>
<?php }?>

<?php if($page === 'file_manager') {?>
    <!-- Player JS -->
    <?php echo $this->Html->script('plyr-js.js'); ?>
<?php }?>

<?php  if ( $page === 'ui_drag_drop' || $page === 'ui_clipboard' || $page === 'ui_stickynote' || $page === 'projects' || $page === 'search_list') {?>
    <!-- Drag Card -->
    <?php echo $this->Html->script('jquery-ui.min.js'); ?>
    <?php echo $this->Html->script('jquery.ui.touch-punch.min.js'); ?>
<?php }?>

<?php  if ( $page === 'pos' || $page === 'pos_2' || $page === 'pos_3' || $page === 'pos_4' || $page === 'pos_5') {?>
    <!-- Calculator JS -->
    <?php echo $this->Html->script('calculator.js'); ?>
<?php }?>

<?php  if ( $page === 'ui_lightbox') {?>
    <!-- Lightbox JS -->
    <?php echo $this->Html->script('/plugins/lightbox/glightbox.min.js'); ?>
    <?php echo $this->Html->script('/plugins/lightbox/lightbox.js'); ?>
<?php }?>

<?php  if ( $page === 'ui_modals') {?>
    <!-- Modal JS -->
    <?php echo $this->Html->script('modal.js'); ?>
<?php }?>

<?php  if ( $page === 'ui_rangeslider') {?>
    <!-- Rangeslider JS -->
    <?php echo $this->Html->script('/plugins/ion-rangeslider/js/ion.rangeSlider.min.js'); ?>
    <?php echo $this->Html->script('/plugins/ion-rangeslider/js/custom-rangeslider.js'); ?>
<?php }?>

<?php  if ( $page === 'calendar' || $page === 'form_pickers' || $page === 'projects' || $page === 'search_list' || $page === 'todo_list' || $page === 'todo') {?>
    <?php echo $this->Html->script('/plugins/moment/moment.min.js'); ?>
<?php }?>

<?php  if ($page === 'all_blog' || $page === 'blog_categories' || $page === 'blog_tag' ||$page === 'best_seller' || $page === 'calendar' || $page === 'companies' ||$page === 'customer_due_report' || $page === 'customer_report' || $page === 'dashboard' || $page === 'expense_report' || $page === 'form_pickers' || $page === 'income_report' || $page === 'index' || $page === 'inventory_report' || $page === 'invoice_report' || $page === 'layout_boxed' || $page === 'layout_dark' || $page === 'layout_detached' || $page === 'layout_rtl' || $page === 'layout_horizontal' || $page === 'layout_two_column' || $page === 'layout_hovered' || $page === 'notes' || $page === 'pos' || $page === 'pos_2' || $page === 'pos_3' || $page === 'pos_4' || $page === 'pos_5' || $page === 'product_expiry_report' || $page === 'product_quantity_alert' || $page === 'product_report' || $page === 'profit_and_loss' || $page === 'projects' || $page === 'purchase_report' || $page === 'sales_dashboard' || $page === 'sales_report' || $page === 'sales_tax' || $page === 'search_list' || $page === 'sold_stock' || $page === 'stock_history' || $page === 'supplier_due_report' || $page === 'supplier_report' || $page === 'tax_reports' || $page === 'todo_list' || $page === 'todo') {?>
    <!-- Daterangepicker JS -->
    <?php echo $this->Html->script('/plugins/daterangepicker/daterangepicker.js'); ?>
<?php }?>

<?php  if ( $page === 'ui_rating') {?>
    <!-- Rater JS -->
    <?php echo $this->Html->script('/plugins/rater-js/index.js'); ?>

    <!-- Internal Ratings JS -->
    <?php echo $this->Html->script('ratings.js'); ?>
<?php }?>

<?php  if ( $page === 'ui_sortable') {?>
    <!-- Sortable JS -->
    <?php echo $this->Html->script('/plugins/sortablejs/Sortable.min.js'); ?>

    <!-- Internal Sortable JS -->
    <?php echo $this->Html->script('sortable.js'); ?>
<?php }?>
	
<?php  if ( $page === 'ui_clipboard') {?>
    <!-- Clipboard JS -->
    <?php echo $this->Html->script('/plugins/clipboard/clipboard.min.js'); ?>
<?php }?>
   
<?php  if ( $page === 'ui_drag_drop') {?>
    <!-- Dragula JS -->
    <?php echo $this->Html->script('/plugins/dragula/js/dragula.min.js'); ?>
    <?php echo $this->Html->script('/plugins/dragula/js/drag-drop.min.js'); ?>
    <?php echo $this->Html->script('/plugins/dragula/js/draggable-cards.js'); ?>
<?php }?>

<?php  if ( $page === 'ui_counter') {?>
    <!-- Counter JS -->
    <?php echo $this->Html->script('/plugins/countup/jquery.counterup.min.js'); ?>
    <?php echo $this->Html->script('/plugins/countup/jquery.waypoints.min.js'); ?>
    <?php echo $this->Html->script('/plugins/countup/jquery.missofis-countdown.js'); ?>
<?php }?>

<?php  if ( $page === 'ui_scrollbar') {?>
    <!-- Scrollbar JS -->
    <?php echo $this->Html->script('/plugins/scrollbar/scrollbar.min.js'); ?>
    <?php echo $this->Html->script('/plugins/scrollbar/custom-scroll.js'); ?>
<?php }?>

<?php  if ( $page === 'ui_stickynote' || $page === 'search_list') {?>
    <!-- Stickynote JS -->
    <?php echo $this->Html->script('jquery-ui.min.js'); ?>
    <?php echo $this->Html->script('/plugins/stickynote/sticky.js'); ?>
<?php }?>

<?php  if ( $page === 'ui_sweetalerts') {?>
    <!-- Sweetalerts JS -->
    <?php echo $this->Html->script('/plugins/sweetalert/sweetalert2.all.min.js'); ?>
    <?php echo $this->Html->script('/plugins/sweetalert/sweetalerts.min.js'); ?>
<?php }?>

<?php  if ( $page === 'ui_toasts') {?>
    <!-- Toatr JS -->		
    <?php echo $this->Html->script('/plugins/toastr/toastr.min.js'); ?>
    <?php echo $this->Html->script('/plugins/toastr/toastr.js'); ?>
<?php }?>

<?php if($page === 'form_select' || $page === 'form_select2' || $page === 'form_pickers') {?>
    <!-- Custom Select JS -->
    <?php echo $this->Html->script('custom-select2.js'); ?>
<?php }?>

<?php  if ( $page === 'form_wizard') {?>
    <!-- Wizard JS -->
    <?php echo $this->Html->script('/plugins/vanilla-wizard/js/wizard.min.js'); ?>
    <?php echo $this->Html->script('form-wizard.js'); ?>
<?php }?>

<?php  if ( $page === 'form_pickers') {?>
    <!-- Form Date PIckers JS -->
    <?php echo $this->Html->script('/plugins/flatpickr/flatpickr.js'); ?>
    <?php echo $this->Html->script('/plugins/bootstrap-datepicker/bootstrap-datepicker.js'); ?>
    <?php echo $this->Html->script('/plugins/jquery-timepicker/jquery-timepicker.js'); ?>
    <?php echo $this->Html->script('/plugins/pickr/pickr.js'); ?>
    <?php echo $this->Html->script('/plugins/@simonwep/pickr/pickr.min.js'); ?>
    <?php echo $this->Html->script('forms-pickers.js'); ?>
<?php }?>

<?php  if ( $page === 'maps_vector') {?>
    <!-- JSVector Maps MapsJS -->
    <?php echo $this->Html->script('/plugins/jsvectormap/js/jsvectormap.min.js'); ?>
    <?php echo $this->Html->script('/plugins/jsvectormap/maps/world-merc.js'); ?>
    <?php echo $this->Html->script('us-merc-en.js'); ?>
    <?php echo $this->Html->script('russia.js'); ?>
    <?php echo $this->Html->script('spain.js'); ?>
    <?php echo $this->Html->script('canada.js'); ?>
    <?php echo $this->Html->script('jsvectormap.js'); ?>
<?php }?>

<?php  if ( $page === 'maps_leaflet') {?>
    <!-- Leaflet Maps JS -->
    <?php echo $this->Html->script('/plugins/leaflet/leaflet.js'); ?>
    <?php echo $this->Html->script('leaflet.js'); ?>
<?php }?>

<?php  if ($page === 'appearance' || $page === 'audio_call' || $page === 'ban_ip_address' ||$page === 'bank_settings_grid' || $page === 'barcode' || $page === 'blog_details' ||$page === 'company_settings' || $page === 'connected_apps' || $page === 'currency_settings' || $page === 'custom_fields' || $page === 'email_settings' || $page === 'email_templates' || $page === 'employee_details' || $page === 'file_manager' || $page === 'gdpr_settings' || $page === 'general_settings' || $page === 'invoice_settings' || $page === 'invoice_templates' || $page === 'language_settings_web' || $page === 'language_settings' || $page === 'localization_settings' || $page === 'notes' || $page === 'notification' || $page === 'otp_settings' || $page === 'payment_gateway_settings' || $page === 'pos' || $page === 'pos_2' || $page === 'pos_3' || $page === 'pos_4' || $page === 'pos_5' || $page === 'pos_settings' || $page === 'preference' || $page === 'prefixes' || $page === 'qrcode' || $page === 'security_settings' || $page === 'signatures' || $page === 'sms_templates' || $page === 'sms_settings' || $page === 'social_feed' || $page === 'social_authentication' || $page === 'storage_settings' || $page === 'system_settings'|| $page === 'tax_rates' || $page === 'todo_list' || $page === 'todo' || $page === 'video_call') {?>
    <!-- Sticky-sidebar -->
    <?php echo $this->Html->script('/plugins/theia-sticky-sidebar/ResizeSensor.js'); ?>
    <?php echo $this->Html->script('/plugins/theia-sticky-sidebar/theia-sticky-sidebar.js'); ?>
<?php }?>

<?php  if ( $page === 'calendar' || $page === 'file_manager') {?>
    <!-- Theiastickysidebar JS -->
    <?php echo $this->Html->script('/plugins/theia-sticky-sidebar/theia-sticky-sidebar.min.js'); ?>
    <?php echo $this->Html->script('/plugins/theia-sticky-sidebar/ResizeSensor.min.js'); ?>
<?php }?>

<?php  if ($page === 'audio_call' || $page === 'pos' || $page === 'pos_2' || $page === 'pos_3' || $page === 'pos_4' || $page === 'pos_5' || $page === 'product_details' || $page === 'video_call'){?>
    <!-- Owl JS -->
    <?php echo $this->Html->script('/plugins/owlcarousel/owl.carousel.min.js'); ?>
<?php }?>

<?php  if ($page === 'barcode' || $page === 'file_manager' || $page === 'notes' || $page === 'qrcode' || $page === 'social_feed' || $page === 'todo_list' || $page === 'todo'){?>
    <!-- Owl JS -->
    <?php echo $this->Html->script('owl.carousel.min.js'); ?>
<?php }?>

<?php  if ( $page === 'security_settings') {?>
    <!-- Validation-->
    <?php echo $this->Html->script('validation.js'); ?>
<?php }?>

<?php  if ( $page === 'video_call' || $page === 'chat') {?>
    <!-- Chat JS -->
    <?php echo $this->Html->script('chat.js'); ?>
<?php }?>

<?php if($page !== 'signin' && $page !== 'signin_2' && $page !== 'signin_3' && $page !== 'register' && $page !== 'register_2' && $page !== 'register_3' && $page !== 'forgot_password' && $page !== 'forgot_password_2' && $page !== 'forgot_password_3'  && $page !== 'reset_password' && $page !== 'reset_password_2' && $page !== 'reset_password_3' && $page !== 'email_verification' && $page !== 'email_verification_2' && $page !== 'email_verification_3'
 && $page !== 'two_step_verification' && $page !== 'two_step_verification_2' && $page !== 'two_step_verification_3' && $page !== 'lock_screen' && $page !== 'error_404' && $page !== 'error_500' && $page !=='coming_soon' && $page !=='under_maintenance' && $page !== 'success' && $page !== 'success_2' && $page !== 'success_3' ) {?> 
    <!-- Color Picker JS -->
    <?php echo $this->Html->script('/plugins/@simonwep/pickr/pickr.es5.min.js'); ?>

    <?php echo $this->Html->script('theme-colorpicker.js'); ?>
<?php }?>    

    <?php echo $this->Html->script('script.js'); ?>
