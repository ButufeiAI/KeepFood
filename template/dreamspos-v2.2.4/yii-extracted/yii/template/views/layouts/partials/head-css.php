<?php
use yii\helpers\Html;
use yii\helpers\Url;

$path = Yii::$app->request->getPathInfo();
// Handle root path - if empty, treat as index page
$page = empty($path) ? 'index' : basename($path);
?>

<?= Html::tag('link', '', ['rel' => 'shortcut icon', 'type' => 'image/x-icon', 'href' => Url::to('@web/assets/img/favicon.png')]) ?>

<?= Html::tag('link', '', ['rel' => 'apple-touch-icon', 'sizes' => '180x180', 'href' => Url::to('@web/assets/img/apple-touch-icon.png')]) ?>

<?php  if ($page !== 'signin' && $page !== 'signin-2' && $page !== 'signin-3' && $page !== 'register' && $page !== 'register-2' && $page !== 'register-3' && $page !== 'forgot-password' && $page !== 'forgot-password-2' && $page !== 'forgot-password-3'  && $page !== 'reset-password' && $page !== 'reset-password-2' && $page !== 'reset-password-3' && $page !== 'email-verification' && $page !== 'email-verification-2' && $page !== 'email-verification-3'
 && $page !== 'two-step-verification' && $page !== 'two-step-verification-2' && $page !== 'two-step-verification-3' && $page !== 'lock-screen' && $page !== 'error-404' && $page !== 'error-500' && $page !=='coming-soon' && $page !=='under-maintenance' && $page !=='layout-horizontal' && $page !=='layout-detached' && $page !=='layout-modern' && $page !=='layout-two-column' && $page !=='layout-hovered' && $page !=='layout-boxed' && $page !=='layout-dark' && $page !=='layout-rtl' && $page !== 'success' && $page !== 'success-2' && $page !== 'success-3') {   ?>
    <!-- Theme Script JS -->
    <script src="<?= Url::to('@web/assets/js/theme-script.js') ?>"></script>
<?php }?>

<?php if ($page !== 'layout-rtl'){?>
    <!-- Bootstrap CSS -->
    <link rel = 'stylesheet' href ="<?= Url::to('@web/assets/css/bootstrap.min.css') ?>">
<?php }?> 

<?php if ($page === 'layout-rtl'){?>
    <!-- Bootstrap RTL CSS -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/css/bootstrap.rtl.min.css') ?>">
<?php }?>  

<?php if($page !== 'signin' && $page !== 'signin-2' && $page !== 'signin-3' && $page !== 'register' && $page !== 'register-2' && $page !== 'register-3' && $page !== 'forgot-password' && $page !== 'forgot-password-2' && $page !== 'forgot-password-3'  && $page !== 'reset-password' && $page !== 'reset-password-2' && $page !== 'reset-password-3' && $page !== 'email-verification' && $page !== 'email-verification-2' && $page !== 'email-verification-3'
 && $page !== 'two-step-verification' && $page !== 'two-step-verification-2' && $page !== 'two-step-verification-3' && $page !== 'lock-screen' && $page !== 'error-404' && $page !== 'error-500' && $page !=='coming-soon' && $page !=='under-maintenance' && $page !== 'success' && $page !== 'success-2' && $page !== 'success-3' ) {?> 
    <!-- animation CSS -->
    <link rel = 'stylesheet' href="<?= Url::to('@web/assets/css/animate.css') ?>">
<?php }?> 

    <!-- Tabler Icon CSS -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/tabler-icons/tabler-icons.min.css') ?>">

    <!-- Fontawesome CSS -->
    <link rel = 'stylesheet' href = "<?= Url::to('@web/assets/plugins/fontawesome/css/fontawesome.min.css') ?>">
    <link rel = 'stylesheet' href = "<?= Url::to('@web/assets/plugins/fontawesome/css/all.min.css') ?>">

<?php  if ($page === 'add-product' || $page === 'audio-call' || $page === 'edit-product' || $page === 'domain' || $page === 'form-vertical' || $page === 'packages' || $page === 'product-list' || $page === 'purchase-transaction' || $page === 'reviews' || $page === 'subscription' || $page === 'tables-basic' || $page === 'ui-alerts' || $page === 'ui-nav-tabs' || $page === 'video-call'){?>
    <!-- Feathericon CSS -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/css/feather.css') ?>">
<?php }?>  

<?php  if ($page === 'icon-feather' || $page === 'icon-ionic'){?>
<!-- Feathericon CSS -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/icons/feather/feather.css') ?>">
<?php }?>

<?php if($page !== 'signin' && $page !== 'signin-2' && $page !== 'signin-3' && $page !== 'register' && $page !== 'register-2' && $page !== 'register-3' && $page !== 'forgot-password' && $page !== 'forgot-password-2' && $page !== 'forgot-password-3'  && $page !== 'reset-password' && $page !== 'reset-password-2' && $page !== 'reset-password-3' && $page !== 'email-verification' && $page !== 'email-verification-2' && $page !== 'email-verification-3'
 && $page !== 'two-step-verification' && $page !== 'two-step-verification-2' && $page !== 'two-step-verification-3' && $page !== 'lock-screen' && $page !== 'error-404' && $page !== 'error-500' && $page !=='coming-soon' && $page !=='under-maintenance' && $page !== 'success' && $page !== 'success-2' && $page !== 'success-3' ) {?> 
    <!-- Datatable CSS -->
    <link rel = 'stylesheet' href="<?= Url::to('@web/assets/css/dataTables.bootstrap5.min.css') ?>">

    <!-- Quill CSS -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/quill/quill.snow.css') ?>">
<?php }?>

<?php  if ($page === 'icon-tabler' || $page === 'projects'){?>    
    <!-- Tabler Icon CSS -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/icons/tabler-icons/tabler-icons.css') ?>">
<?php }?>
         
<?php if($page !== 'signin' && $page !== 'signin-2' && $page !== 'signin-3' && $page !== 'register' && $page !== 'register-2' && $page !== 'register-3' && $page !== 'forgot-password' && $page !== 'forgot-password-2' && $page !== 'forgot-password-3'  && $page !== 'reset-password' && $page !== 'reset-password-2' && $page !== 'reset-password-3' && $page !== 'email-verification' && $page !== 'email-verification-2' && $page !== 'email-verification-3'
 && $page !== 'two-step-verification' && $page !== 'two-step-verification-2' && $page !== 'two-step-verification-3' && $page !== 'lock-screen' && $page !== 'error-404' && $page !== 'error-500' && $page !=='coming-soon' && $page !=='under-maintenance' && $page !== 'success' && $page !== 'success-2' && $page !== 'success-3' ) {?> 
    <!-- Datetimepicker CSS -->
    <link rel = 'stylesheet' href = "<?= Url::to('@web/assets/css/bootstrap-datetimepicker.min.css') ?>">
<?php }?>

<?php  if ( $page === 'audio-call' || $page === 'pos' || $page === 'pos-2' || $page === 'pos-3' || $page === 'pos-4' || $page === 'pos-5' || $page === 'product-details' || $page === 'video-call' ){?>
    <link rel = 'stylesheet' href = "<?= Url::to('@web/assets/plugins/owlcarousel/owl.carousel.min.css') ?>">
    <link rel = 'stylesheet' href = "<?= Url::to('@web/assets/plugins/owlcarousel/owl.theme.default.min.css') ?>">
<?php }?>  

<?php  if ($page === 'barcode' || $page === 'file-manager' || $page === 'notes' || $page === 'plugin' || $page === 'qrcode' || $page === 'social-feed' || $page === 'todo-list' || $page === 'todo'){?>
    <!-- Owl Carousel CSS -->
    <link rel = "stylesheet" href="<?= Url::to('@web/assets/css/owl.carousel.min.css') ?>">
<?php }?>  

<?php  if ( $page === 'file-manager' ) {?>
    <!-- Player CSS -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/css/plyr.css') ?>">
<?php }?>

<?php if($page !== 'signin' && $page !== 'signin-2' && $page !== 'signin-3' && $page !== 'register' && $page !== 'register-2' && $page !== 'register-3' && $page !== 'forgot-password' && $page !== 'forgot-password-2' && $page !== 'forgot-password-3'  && $page !== 'reset-password' && $page !== 'reset-password-2' && $page !== 'reset-password-3' && $page !== 'email-verification' && $page !== 'email-verification-2' && $page !== 'email-verification-3'
 && $page !== 'two-step-verification' && $page !== 'two-step-verification-2' && $page !== 'two-step-verification-3' && $page !== 'lock-screen' && $page !== 'error-404' && $page !== 'error-500' && $page !=='coming-soon' && $page !=='under-maintenance' && $page !== 'success' && $page !== 'success-2' && $page !== 'success-3' ) {?> 
    <!-- Select2 CSS -->
    <link rel = 'stylesheet' href="<?= Url::to('@web/assets/plugins/select2/css/select2.min.css') ?>">
<?php }?>

<?php  if ( $page === 'icon-flag' ) {?>
    <!-- Flag Icon CSS -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/icons/flags/flags.css') ?>">
<?php }?>

<?php  if ( $page === 'icon-ionic' ) {?>
	<!-- Ionic CSS -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/icons/ionic/ionicons.css') ?>">
<?php }?>    

<?php  if ( $page === 'icon-material' ) {?>
    <!-- Material CSS -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/material/materialdesignicons.css') ?>">
<?php }?> 

<?php  if ( $page === 'icon-pe7' ) {?>
    <!-- Pe7 CSS -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/icons/pe7/pe-icon-7.css') ?>">       
<?php }?> 

<?php  if ( $page === 'icon-simpleline' ) {?>
    <!-- Simpleline Icons CSS -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/simpleline/simple-line-icons.css') ?>">
<?php }?>   

<?php  if ( $page === 'icon-themify' ) {?>
    <!-- Themify Icon CSS -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/icons/themify/themify.css') ?>">
<?php }?> 

<?php  if ( $page === 'icon-typicon' ) {?>
    <!-- Typicon icons CSS -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/icons/typicons/typicons.css') ?>">
<?php }?> 

<?php  if ( $page === 'icon-weather' ) {?>
    <!-- Weather CSS -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/icons/weather/weathericons.css') ?>">
<?php }?>   

<?php  if ( $page === 'form-wizard' ) {?>
    <!-- Wizard CSS -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/twitter-bootstrap-wizard/form-wizard.css') ?>">
<?php }?>

<?php  if ($page === 'audio-call' ||$page === 'call-history' || $page === 'chat' || $page === 'video-call') {?>
    <!-- Boxicons CSS -->
    <link rel = 'stylesheet' href="<?= Url::to('@web/assets/plugins/boxicons/css/boxicons.min.css') ?>">
<?php }?>

<?php  if ($page === 'billers' ||$page === 'blog-comments' || $page === 'chat' || $page === 'contacts' || $page === 'customers' || $page === 'expired-products' || $page === 'security-settings' || $page === 'warehouse' || $page === 'form-mask') {?>
    <!-- Mobile CSS-->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/intltelinput/css/intlTelInput.css') ?>">
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/intltelinput/css/demo.css') ?>">
<?php }?>

<?php  if ($page === 'add-product' ||$page === 'all-blog' ||$page === 'blog-tag' || $page === 'domain' || $page === 'edit-product' || $page === 'email-reply' || $page === 'localization-settings' || $page === 'otp-settings' || $page === 'packages' || $page === 'product-list' || $page === 'purchase-transaction' || $page === 'reviews' || $page === 'subscription' || $page === 'varriant-attributes') {?>
    <!-- Bootstrap Tagsinput CSS -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.css') ?>">
<?php }?>

<?php  if ( $page === 'dashboard' || $page === 'sales-dashboard') {?>
    <!-- Map CSS -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/jvectormap/jquery-jvectormap-2.0.5.css') ?>">
<?php }?>

<?php  if ($page === 'all-blog' || $page === 'blog-categories' || $page === 'blog-tag' ||$page === 'best-seller' || $page === 'calendar' || $page === 'companies' ||$page === 'customer-due-report' || $page === 'customer-report' || $page === 'dashboard' || $page === 'expense-report' || $page === 'form-pickers' || $page === 'income-report' || $page === 'income' || $page === 'index' || $page === 'inventory-report' || $page === 'invoice-report' || $page === 'layout-boxed' || $page === 'layout-dark' || $page === 'layout-detached' || $page === 'layout-rtl' || $page === 'layout-horizontal' || $page === 'layout-two-column' || $page === 'layout-hovered' || $page === 'notes' || $page === 'pos' || $page === 'pos-2' || $page === 'pos-3' || $page === 'pos-4' || $page === 'pos-5' || $page === 'product-expiry-report' || $page === 'product-quantity-alert' || $page === 'product-report' || $page === 'profit-and-loss' || $page === 'projects' || $page === 'purchase-report' || $page === 'sales-dashboard' || $page === 'sales-report' || $page === 'sales-tax' || $page === 'search-list' || $page === 'sold-stock' || $page === 'stock-history' || $page === 'supplier-due-report' || $page === 'supplier-report' || $page === 'tax-reports' || $page === 'todo-list' || $page === 'todo') {?>
    <!-- Daterangepikcer CSS -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/daterangepicker/daterangepicker.css') ?>">
<?php }?>

<?php  if ( $page === 'ui-rangeslider' || $page === 'ui-ratings') {?>
    <!-- Rangeslider CSS -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/ion-rangeslider/css/ion.rangeSlider.min.css') ?>">
<?php }?>

<?php  if ( $page === 'ui-drag-drop' || $page === 'ui-clipboard' || $page === 'ui-sortable') {?>
    <!-- Dragula CSS -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/dragula/css/dragula.min.css') ?>">
<?php }?>

<?php  if ( $page === 'ui-lightbox' ) {?>
    <!-- Lightbox CSS -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/lightbox/glightbox.min.css') ?>">
<?php }?>

<?php  if ( $page === 'ui-scrollbar' ) {?>
    <!-- Scrollbar CSS -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/scrollbar/scroll.min.css') ?>">
<?php }?>

<?php  if ( $page === 'ui-toasts' ) {?>
    <!-- Toatr CSS -->		
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/toastr/toatr.css') ?>">
<?php }?>

<?php if($page === 'ui-swiperjs' || $page === 'chat' || $page === 'video-call' ) {?>
    <!-- Swiper CSS -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/swiper/swiper-bundle.min.css') ?>">
<?php }?>

<?php  if ( $page === 'ui-stickynote' || $page === 'ui-timeline') {?>
    <!-- Sticky CSS -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/stickynote/sticky.css') ?>">
<?php }?>

<?php  if ( $page === 'icon-bootstrap' ) {?>
    <!-- Bootstrap Icon CSS -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/icons/bootstrap/bootstrap-icons.min.css') ?>">
<?php }?>

<?php  if ( $page === 'icon-remix' ) {?>
    <!-- Remix Icon CSS -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/icons/remix/fonts/remixicon.css') ?>">
<?php }?>

<?php  if ( $page === 'form-pickers' ) {?>
    <!-- Form Date PIckers CSS -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/flatpickr/flatpickr.css') ?>">
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/bootstrap-datepicker/bootstrap-datepicker.css') ?>">
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/jquery-timepicker/jquery-timepicker.css') ?>">
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/pickr/pickr-themes.css') ?>">
<?php }?>

<?php  if ( $page === 'maps-vector' ) {?>
    <!-- Jsvector Maps -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/jsvectormap/css/jsvectormap.min.css') ?>">
<?php }?>

<?php  if ( $page === 'maps-leaflet' ) {?>
    <!-- Leaflet Maps CSS -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/leaflet/leaflet.css') ?>">
<?php }?>

<?php  if ( $page === 'chat' || $page === 'email-reply' || $page === 'social-feed' || $page === 'search-list') {?>
    <!-- Fancybox -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/fancybox/jquery.fancybox.min.css') ?>">
<?php }?>

<?php if($page !== 'signin' && $page !== 'signin-2' && $page !== 'signin-3' && $page !== 'register' && $page !== 'register-2' && $page !== 'register-3' && $page !== 'forgot-password' && $page !== 'forgot-password-2' && $page !== 'forgot-password-3'  && $page !== 'reset-password' && $page !== 'reset-password-2' && $page !== 'reset-password-3' && $page !== 'email-verification' && $page !== 'email-verification-2' && $page !== 'email-verification-3'
 && $page !== 'two-step-verification' && $page !== 'two-step-verification-2' && $page !== 'two-step-verification-3' && $page !== 'lock-screen' && $page !== 'error-404' && $page !== 'error-500' && $page !=='coming-soon' && $page !=='under-maintenance' && $page !== 'success' && $page !== 'success-2' && $page !== 'success-3' ) {?>
    <!-- Color Picker Css -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/plugins/@simonwep/pickr/themes/nano.min.css') ?>">
<?php }?>

    <!-- Main CSS -->
    <link rel="stylesheet" href="<?= Url::to('@web/assets/css/style.css') ?>">