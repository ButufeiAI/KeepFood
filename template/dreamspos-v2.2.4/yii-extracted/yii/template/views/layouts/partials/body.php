<?php
use yii\helpers\Html;
use yii\helpers\Url;

$path = Yii::$app->request->getPathInfo();
// Handle root path - if empty, treat as index page
$page = empty($path) ? 'index' : basename($path);

if (in_array($page, ['under-maintenance', 'coming-soon', 'error-404', 'error-500'])) {
    echo '<body class="error-page">';
} elseif (in_array($page, ['two-step-verification', 'email-verification', 'reset-password', 'forgot-password', 'register', 'signin', 'success'])) {
    echo '<body class="account-page">';
} elseif (in_array($page, ['two-step-verification-3', 'two-step-verification-2', 'success-2', 'success-3', 'signin-3', 'signin-2', 'reset-password-3', 'reset-password-2', 'forgot-password-3', 'forgot-password-2', 'email-verification-3', 'email-verification-2', 'register-2', 'register-3'])) {
    echo '<body class="account-page bg-white">';
} elseif ($page === 'layout-horizontal') {
    echo '<body class="menu-horizontal">';
} elseif ($page === 'layout-hovered') {
    echo '<body class="mini-sidebar expand-menu">';
} elseif ($page === 'layout-boxed') {
    echo '<body class="mini-sidebar layout-box-mode">';
} elseif ($page === 'layout-rtl') {
    echo '<body class="layout-mode-rtl">';
} elseif ($page === 'lock-screen') {
    echo '<body>';
    echo '<img src="assets/img/bg/lock-screen-bg.png" alt="bg" class="lock-screen-bg position-absolute img-fluid d-sm-none d-md-none d-lg-flex">';
} elseif (in_array($page, ['pos', 'pos-2', 'pos-3', 'pos-4', 'pos-5'])) {
    echo '<body class="pos-page">';
} else {
    echo '<body>';
}