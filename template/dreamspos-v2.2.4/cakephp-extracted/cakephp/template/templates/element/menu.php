<?php
$page = $this->getRequest()->getParam('pass')[0] ?? 'index';

if (
    $page == 'under_maintenance' ||
    $page == 'coming_soon' ||
    $page == 'error_404' ||
    $page == 'error_500' ||
    $page == 'two_step_verification_3' ||
    $page == 'two_step_verification_2' ||
    $page == 'two_step_verification' ||
    $page == 'email_verification_3' ||
    $page == 'email_verification_2' ||
    $page == 'email_verification' ||
    $page == 'reset_password_3' ||
    $page == 'reset_password_2' ||
    $page == 'reset_password' ||
    $page == 'forgot_password_3' ||
    $page == 'forgot_password_2' ||
    $page == 'forgot_password' ||
    $page == 'register_3' ||
    $page == 'register_2' ||
    $page == 'register' ||
    $page == 'signin_3' ||
    $page == 'signin_2' ||
    $page == 'signin' ||
    $page == 'success' ||
    $page == 'success_2' ||
    $page == 'success_3' ||
    $page == 'lock_screen'
) {
} else {
    include 'topbar.php';
    include 'sidebar.php';
    include 'horizontal-sidebar.php';
    include 'twocolumn-sidebar.php';
}
?>