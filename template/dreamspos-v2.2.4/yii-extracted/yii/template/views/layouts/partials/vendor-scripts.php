<?php
use yii\helpers\Html;
use yii\helpers\Url;

$path = Yii::$app->request->getPathInfo();
// Handle root path - if empty, treat as index page
$page = empty($path) ? 'index' : basename($path);
?>
    <!-- jQuery -->
    <script src = "<?= Url::to('@web/assets/js/jquery-3.7.1.min.js') ?>"></script>

    <!-- Feather Icon JS -->
    <script src = "<?= Url::to('@web/assets/js/feather.min.js') ?>"></script>

    <!-- Slimscroll JS -->
    <script src = "<?= Url::to('@web/assets/js/jquery.slimscroll.min.js') ?>"></script>

<?php if($page === 'chat') {?>    
    <!-- Slimscroll JS -->
    <script src="<?= Url::to('@web/assets/plugins/slimscroll/jquery.slimscroll.min.js') ?>"></script>
<?php }?>

<?php if($page !== 'signin' && $page !== 'signin-2' && $page !== 'signin-3' && $page !== 'register' && $page !== 'register-2' && $page !== 'register-3' && $page !== 'forgot-password' && $page !== 'forgot-password-2' && $page !== 'forgot-password-3'  && $page !== 'reset-password' && $page !== 'reset-password-2' && $page !== 'reset-password-3' && $page !== 'email-verification' && $page !== 'email-verification-2' && $page !== 'email-verification-3'
 && $page !== 'two-step-verification' && $page !== 'two-step-verification-2' && $page !== 'two-step-verification-3' && $page !== 'lock-screen' && $page !== 'error-404' && $page !== 'error-500' && $page !=='coming-soon' && $page !=='under-maintenance' && $page !== 'success' && $page !== 'success-2' && $page !== 'success-3' ) {?>   
    <!-- Datatable JS -->
    <script src = "<?= Url::to('@web/assets/js/jquery.dataTables.min.js') ?>"></script>
    <script src = "<?= Url::to('@web/assets/js/dataTables.bootstrap5.min.js') ?>"></script>

    <!-- Datetimepicker JS -->
    <script src = "<?= Url::to('@web/assets/js/moment.min.js') ?>"></script>
    <script src = "<?= Url::to('@web/assets/js/bootstrap-datetimepicker.min.js') ?>"></script>
<?php }?>

    <!-- Bootstrap Core JS -->
    <script src = "<?= Url::to('@web/assets/js/bootstrap.bundle.min.js') ?>"></script>

<?php if($page !== 'signin' && $page !== 'signin-2' && $page !== 'signin-3' && $page !== 'register' && $page !== 'register-2' && $page !== 'register-3' && $page !== 'forgot-password' && $page !== 'forgot-password-2' && $page !== 'forgot-password-3'  && $page !== 'reset-password' && $page !== 'reset-password-2' && $page !== 'reset-password-3' && $page !== 'email-verification' && $page !== 'email-verification-2' && $page !== 'email-verification-3'
 && $page !== 'two-step-verification' && $page !== 'two-step-verification-2' && $page !== 'two-step-verification-3' && $page !== 'lock-screen' && $page !== 'error-404' && $page !== 'error-500' && $page !=='coming-soon' && $page !=='under-maintenance' && $page !== 'success' && $page !== 'success-2' && $page !== 'success-3' ) {?>     
    <!-- Quill JS -->
    <script src="<?= Url::to('@web/assets/plugins/quill/quill.min.js') ?>"></script>
<?php }?>   

<?php if($page === 'chart-c3') {?>
    <!-- Chart c3 JS -->
    <script src="<?= Url::to('@web/assets/plugins/c3-chart/d3.v5.min.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/plugins/c3-chart/c3.min.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/plugins/c3-chart/chart-data.js') ?>"></script>
<?php }?>

<?php if($page === 'form-fileupload') {?>
    <!-- Fileupload JS -->
    <script src="<?= Url::to('@web/assets/plugins/fileupload/fileupload.min.js') ?>"></script>
<?php }?>

<?php if($page === 'form-mask') {?>
    <!-- Mask JS -->
    <script src="<?= Url::to('@web/assets/js/jquery.maskedinput.min.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/js/mask.js') ?>"></script>
<?php }?>

<?php if($page === 'chart-flot') {?>
    <!-- Chart flot JS -->
    <script src="<?= Url::to('@web/assets/plugins/flot/jquery.flot.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/plugins/flot/jquery.flot.pie.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/plugins/flot/chart-data.js') ?>"></script>
<?php }?>

<?php if($page === 'chart-js' || $page === 'dashboard' || $page === 'index' || $page === 'layout-boxed' || $page === 'layout-dark' || $page === 'layout-detached' || $page === 'layout-horizontal' || $page === 'layout-hovered' || $page === 'layout-rtl' || $page === 'layout-two-column' || $page === 'subscription') {?>
    <!-- Chart JS -->
    <script src="<?= Url::to('@web/assets/plugins/chartjs/chart.min.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/plugins/chartjs/chart-data.js') ?>"></script>
<?php }?>

<?php if($page === 'chart-morris') {?>
    <!-- Chart JS -->
    <script src="<?= Url::to('@web/assets/plugins/morris/raphael-min.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/plugins/morris/morris.min.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/plugins/morris/chart-data.js') ?>"></script>
<?php }?>

<?php if($page === 'chart-peity' || $page === 'dashboard' || $page === 'subscription') {?>
    <!-- Chart JS -->
    <script src="<?= Url::to('@web/assets/plugins/peity/jquery.peity.min.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/plugins/peity/chart-data.js') ?>"></script>
<?php }?>

<?php if($page === 'calendar') {?>
    <!-- Fullcalendar JS -->
    <script src="<?= Url::to('@web/assets/plugins/fullcalendar/index.global.min.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/plugins/fullcalendar/calendar-data.js') ?>"></script>
<?php }?>

<?php  if ($page === 'add-product' ||$page === 'all-blog' ||$page === 'blog-tag' || $page === 'domain' || $page === 'edit-product' || $page === 'email-reply' || $page === 'localization-settings' || $page === 'otp-settings' || $page === 'packages' || $page === 'product-list' || $page === 'purchase-transaction' || $page === 'reviews' || $page === 'subscription' || $page === 'varriant-attributes') {?>
    <!-- Bootstrap Tagsinput JS -->
    <script src="<?= Url::to('@web/assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.js') ?>"></script>
<?php }?>

<?php  if ($page === 'admin-dashboard' ||$page === 'barcode' ||$page === 'calendar' || $page === 'chart-apex' || $page === 'companies' || $page === 'email-reply' || $page === 'dashboard' || $page === 'email' || $page === 'file-manager' || $page === 'form-elements' || $page === 'icon-feather' || $page === 'icon-flag' || $page === 'icon-fontawesome' || $page === 'icon-ionic' || $page === 'icon-material' || $page === 'icon-pe7' || $page === 'icon-remix' || $page === 'icon-simpleline' || $page === 'icon-tabler' || $page === 'icon-themify' || $page === 'icon-typicon' || $page === 'icon-weather' || $page === 'index' || $page === 'layout-boxed' || $page === 'layout-dark' || $page === 'layout-detached' || $page === 'layout-horizontal' || $page === 'layout-hovered' || $page === 'layout-rtl' || $page === 'layout-two-column' || $page === 'notes' || $page === 'pos' || $page === 'pos-2' || $page === 'pos-3' || $page === 'pos-4' || $page === 'pos-5' || $page === 'qrcode' || $page === 'sales-dashboard' || $page === 'todo-list' || $page === 'todo') {?>
    <!-- Chart Apex JS -->
    <script src="<?= Url::to('@web/assets/plugins/apexchart/apexcharts.min.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/plugins/apexchart/chart-data.js') ?>"></script>
<?php }?>

<?php if($page === 'sales-dashboard') {?>
    <!-- Map JS -->
    <script src="<?= Url::to('@web/assets/plugins/jvectormap/jquery-jvectormap-2.0.5.min.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/plugins/jvectormap/jquery-jvectormap-world-mill.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/plugins/jvectormap/jquery-jvectormap-ru-mill.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/plugins/jvectormap/jquery-jvectormap-us-aea.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/plugins/jvectormap/jquery-jvectormap-uk_countries-mill.js') ?>"></script>        
    <script src="<?= Url::to('@web/assets/plugins/jvectormap/jquery-jvectormap-in-mill.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/js/jvectormap.js') ?>"></script>
<?php }?>

<?php if($page !== 'signin' && $page !== 'signin-2' && $page !== 'signin-3' && $page !== 'register' && $page !== 'register-2' && $page !== 'register-3' && $page !== 'forgot-password' && $page !== 'forgot-password-2' && $page !== 'forgot-password-3'  && $page !== 'reset-password' && $page !== 'reset-password-2' && $page !== 'reset-password-3' && $page !== 'email-verification' && $page !== 'email-verification-2' && $page !== 'email-verification-3'
 && $page !== 'two-step-verification' && $page !== 'two-step-verification-2' && $page !== 'two-step-verification-3' && $page !== 'lock-screen' && $page !== 'error-404' && $page !== 'error-500' && $page !=='coming-soon' && $page !=='under-maintenance' && $page !== 'success' && $page !== 'success-2' && $page !== 'success-3' ) {?> 
    <!-- Select2 JS -->
    <script src = "<?= Url::to('@web/assets/plugins/select2/js/select2.min.js') ?>"></script>
<?php }?>

<?php  if ($page === 'billers' ||$page === 'blog-comments' || $page === 'chat' || $page === 'contacts' || $page === 'customers' || $page === 'expired-products' || $page === 'security-settings' || $page === 'warehouse' || $page === 'form-mask') {?>
    <!-- Mobile Input -->
    <script src="<?= Url::to('@web/assets/plugins/intltelinput/js/intlTelInput.js') ?>"></script>
<?php }?>

<?php if($page === 'ui-swiperjs' || $page === 'chat' || $page === 'video-call' ) {?>
    <!-- Swiper JS -->
    <script src="<?= Url::to('@web/assets/plugins/swiper/swiper-bundle.min.js') ?>"></script>
<?php }?>

<?php if($page === 'ui-swiperjs') {?>
    <!-- Internal Swiper JS -->
    <script src="<?= Url::to('@web/assets/js/swiper.js') ?>"></script>
<?php }?>

<?php  if ( $page === 'chat' || $page === 'email-reply' || $page === 'social-feed' || $page === 'search-list') {?>
    <!-- FancyBox JS -->
    <script src="<?= Url::to('@web/assets/plugins/fancybox/jquery.fancybox.min.js') ?>"></script>
<?php }?>

<?php if($page === 'file-manager') {?>
    <!-- Player JS -->
    <script src="<?= Url::to('@web/assets/js/plyr-js.js') ?>"></script>
<?php }?>

<?php  if ( $page === 'ui-drag-drop' || $page === 'ui-clipboard' || $page === 'ui-stickynote' || $page === 'projects' || $page === 'search-list') {?>
    <!-- Drag Card -->
    <script src="<?= Url::to('@web/assets/js/jquery-ui.min.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/js/jquery.ui.touch-punch.min.js') ?>"></script>
<?php }?>

<?php  if ( $page === 'pos' || $page === 'pos-2' || $page === 'pos-3' || $page === 'pos-4' || $page === 'pos-5') {?>
    <!-- Calculator JS -->
    <script src="<?= Url::to('@web/assets/js/calculator.js') ?>"></script>
<?php }?>

<?php  if ( $page === 'ui-lightbox') {?>
    <!-- Lightbox JS -->
    <script src="<?= Url::to('@web/assets/plugins/lightbox/glightbox.min.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/plugins/lightbox/lightbox.js') ?>"></script>
<?php }?>

<?php  if ( $page === 'ui-modals') {?>
    <!-- Modal JS -->
    <script src="<?= Url::to('@web/assets/js/modal.js') ?>"></script>
<?php }?>

<?php  if ( $page === 'ui-rangeslider') {?>
    <!-- Rangeslider JS -->
    <script src="<?= Url::to('@web/assets/plugins/ion-rangeslider/js/ion.rangeSlider.min.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/plugins/ion-rangeslider/js/custom-rangeslider.js') ?>"></script>
<?php }?>

<?php  if ( $page === 'calendar' || $page === 'form-pickers' || $page === 'projects' || $page === 'search-list' || $page === 'todo-list' || $page === 'todo') {?>
    <script src="<?= Url::to('@web/assets/plugins/moment/moment.min.js') ?>"></script>
<?php }?>

<?php  if ($page === 'all-blog' || $page === 'blog-categories' || $page === 'blog-tag' ||$page === 'best-seller' || $page === 'calendar' || $page === 'companies' ||$page === 'customer-due-report' || $page === 'customer-report' || $page === 'dashboard' || $page === 'expense-report' || $page === 'form-pickers' || $page === 'income-report' || $page === 'index' || $page === 'inventory-report' || $page === 'invoice-report' || $page === 'layout-boxed' || $page === 'layout-dark' || $page === 'layout-detached' || $page === 'layout-rtl' || $page === 'layout-horizontal' || $page === 'layout-two-column' || $page === 'layout-hovered' || $page === 'notes' || $page === 'pos' || $page === 'pos-2' || $page === 'pos-3' || $page === 'pos-4' || $page === 'pos-5' || $page === 'product-expiry-report' || $page === 'product-quantity-alert' || $page === 'product-report' || $page === 'profit-and-loss' || $page === 'projects' || $page === 'purchase-report' || $page === 'sales-dashboard' || $page === 'sales-report' || $page === 'sales-tax' || $page === 'search-list' || $page === 'sold-stock' || $page === 'stock-history' || $page === 'supplier-due-report' || $page === 'supplier-report' || $page === 'tax-reports' || $page === 'todo-list' || $page === 'todo') {?>
    <!-- Daterangepicker JS -->
    <script src="<?= Url::to('@web/assets/plugins/daterangepicker/daterangepicker.js') ?>"></script>
<?php }?>

<?php  if ( $page === 'ui-rating') {?>
    <!-- Rater JS -->
    <script src="<?= Url::to('@web/assets/plugins/rater-js/index.js') ?>"></script>

    <!-- Internal Ratings JS -->
    <script src="<?= Url::to('@web/assets/js/ratings.js') ?>"></script>
<?php }?>

<?php  if ( $page === 'ui-sortable') {?>
    <!-- Sortable JS -->
    <script src="<?= Url::to('@web/assets/plugins/sortablejs/Sortable.min.js') ?>"></script>

    <!-- Internal Sortable JS -->
    <script src="<?= Url::to('@web/assets/js/sortable.js') ?>"></script>
<?php }?>
	
<?php  if ( $page === 'ui-clipboard') {?>
    <!-- Clipboard JS -->
    <script src="<?= Url::to('@web/assets/plugins/clipboard/clipboard.min.js') ?>"></script>
<?php }?>
   
<?php  if ( $page === 'ui-drag-drop') {?>
    <!-- Dragula JS -->
    <script src="<?= Url::to('@web/assets/plugins/dragula/js/dragula.min.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/plugins/dragula/js/drag-drop.min.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/plugins/dragula/js/draggable-cards.js') ?>"></script>
<?php }?>

<?php  if ( $page === 'ui-counter') {?>
    <!-- Counter JS -->
    <script src="<?= Url::to('@web/assets/plugins/countup/jquery.counterup.min.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/plugins/countup/jquery.waypoints.min.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/plugins/countup/jquery.missofis-countdown.js') ?>"></script>
<?php }?>

<?php  if ( $page === 'ui-scrollbar') {?>
    <!-- Scrollbar JS -->
    <script src="<?= Url::to('@web/assets/plugins/scrollbar/scrollbar.min.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/plugins/scrollbar/custom-scroll.js') ?>"></script>
<?php }?>

<?php  if ( $page === 'ui-stickynote' || $page === 'search-list') {?>
    <!-- Stickynote JS -->
    <script src="<?= Url::to('@web/assets/js/jquery-ui.min.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/plugins/stickynote/sticky.js') ?>"></script>
<?php }?>

<?php  if ( $page === 'ui-sweetalerts') {?>
    <!-- Sweetalerts JS -->
    <script src="<?= Url::to('@web/assets/plugins/sweetalert/sweetalert2.all.min.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/plugins/sweetalert/sweetalerts.min.js') ?>"></script>
<?php }?>

<?php  if ( $page === 'ui-toasts') {?>
    <!-- Toatr JS -->		
    <script src="<?= Url::to('@web/assets/plugins/toastr/toastr.min.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/plugins/toastr/toastr.js') ?>"></script>
<?php }?>

<?php if($page === 'form-select' || $page === 'form-select2' || $page === 'form-pickers') {?>
    <!-- Custom Select JS -->
    <script src="<?= Url::to('@web/assets/js/custom-select2.js') ?>"></script>
<?php }?>

<?php  if ( $page === 'form-wizard') {?>
    <!-- Wizard JS -->
    <script src="<?= Url::to('@web/assets/plugins/vanilla-wizard/js/wizard.min.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/js/form-wizard.js') ?>"></script>
<?php }?>

<?php  if ( $page === 'form-pickers') {?>
    <!-- Form Date PIckers JS -->
    <script src="<?= Url::to('@web/assets/plugins/flatpickr/flatpickr.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/plugins/bootstrap-datepicker/bootstrap-datepicker.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/plugins/jquery-timepicker/jquery-timepicker.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/plugins/pickr/pickr.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/plugins/@simonwep/pickr/pickr.min.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/js/forms-pickers.js') ?>"></script>
<?php }?>

<?php  if ( $page === 'maps-vector') {?>
    <!-- JSVector Maps MapsJS -->
    <script src="<?= Url::to('@web/assets/plugins/jsvectormap/js/jsvectormap.min.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/plugins/jsvectormap/maps/world-merc.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/js/us-merc-en.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/js/russia.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/js/spain.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/js/canada.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/js/jsvectormap.js') ?>"></script>
<?php }?>

<?php  if ( $page === 'maps-leaflet') {?>
    <!-- Leaflet Maps JS -->
    <script src="<?= Url::to('@web/assets/plugins/leaflet/leaflet.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/js/leaflet.js') ?>"></script>
<?php }?>

<?php  if ($page === 'appearance' || $page === 'audio-call' || $page === 'ban-ip-address' ||$page === 'bank-settings-grid' || $page === 'barcode' || $page === 'blog-details' ||$page === 'company-settings' || $page === 'connected-apps' || $page === 'currency-settings' || $page === 'custom-fields' || $page === 'email-settings' || $page === 'email-templates' || $page === 'employee-details' || $page === 'file-manager' || $page === 'gdpr-settings' || $page === 'general-settings' || $page === 'invoice-settings' || $page === 'invoice-templates' || $page === 'language-settings-web' || $page === 'language-settings' || $page === 'localization-settings' || $page === 'notes' || $page === 'notification' || $page === 'otp-settings' || $page === 'payment-gateway-settings' || $page === 'pos' || $page === 'pos-2' || $page === 'pos-3' || $page === 'pos-4' || $page === 'pos-5' || $page === 'pos-settings' || $page === 'preference' || $page === 'prefixes' || $page === 'qrcode' || $page === 'security-settings' || $page === 'signatures' || $page === 'sms-templates' || $page === 'sms-settings' || $page === 'social-feed' || $page === 'social-authentication' || $page === 'storage-settings' || $page === 'system-settings'|| $page === 'tax-rates' || $page === 'todo-list' || $page === 'todo' || $page === 'video-call') {?>
    <!-- Sticky-sidebar -->
    <script src="<?= Url::to('@web/assets/plugins/theia-sticky-sidebar/ResizeSensor.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/plugins/theia-sticky-sidebar/theia-sticky-sidebar.js') ?>"></script>
<?php }?>

<?php  if ( $page === 'calendar' || $page === 'file-manager') {?>
    <!-- Theiastickysidebar JS -->
    <script src="<?= Url::to('@web/assets/plugins/theia-sticky-sidebar/theia-sticky-sidebar.min.js') ?>"></script>
    <script src="<?= Url::to('@web/assets/plugins/theia-sticky-sidebar/ResizeSensor.min.js') ?>"></script>
<?php }?>

<?php  if ($page === 'audio-call' || $page === 'pos' || $page === 'pos-2' || $page === 'pos-3' || $page === 'pos-4' || $page === 'pos-5' || $page === 'product-details' || $page === 'video-call'){?>
    <!-- Owl JS -->
    <script src = "<?= Url::to('@web/assets/plugins/owlcarousel/owl.carousel.min.js') ?>"></script>
<?php }?>

<?php  if ($page === 'barcode' || $page === 'file-manager' || $page === 'notes' || $page === 'qrcode' || $page === 'social-feed' || $page === 'todo-list' || $page === 'todo'){?>
    <!-- Owl JS -->
    <script src="<?= Url::to('@web/assets/js/owl.carousel.min.js') ?>"></script>
<?php }?>

<?php  if ( $page === 'security-settings') {?>
    <!-- Validation-->
    <script src="<?= Url::to('@web/assets/js/validation.js') ?>"></script>
<?php }?>

<?php  if ($page === 'chat' || $page === 'video-call') {?>
    <!-- Chat-->
    <script src="<?= Url::to('@web/assets/js/chat.js') ?>"></script>
<?php }?>

<?php if($page !== 'signin' && $page !== 'signin-2' && $page !== 'signin-3' && $page !== 'register' && $page !== 'register-2' && $page !== 'register-3' && $page !== 'forgot-password' && $page !== 'forgot-password-2' && $page !== 'forgot-password-3'  && $page !== 'reset-password' && $page !== 'reset-password-2' && $page !== 'reset-password-3' && $page !== 'email-verification' && $page !== 'email-verification-2' && $page !== 'email-verification-3'
 && $page !== 'two-step-verification' && $page !== 'two-step-verification-2' && $page !== 'two-step-verification-3' && $page !== 'lock-screen' && $page !== 'error-404' && $page !== 'error-500' && $page !=='coming-soon' && $page !=='under-maintenance' && $page !== 'success' && $page !== 'success-2' && $page !== 'success-3' ) {?> 
    <!-- Color Picker JS -->
    <script src="<?= Url::to('@web/assets/plugins/@simonwep/pickr/pickr.es5.min.js') ?>"></script>

    <script src="<?= Url::to('@web/assets/js/theme-colorpicker.js') ?>"></script>
<?php }?>    

    <script src = "<?= Url::to('@web/assets/js/script.js') ?>"></script>
