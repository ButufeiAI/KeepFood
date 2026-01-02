<?php
$page = $this->getRequest()->getParam('pass')[0] ?? 'index';


if ($page !== 'under_maintenance' && $page !== 'coming_soon' && $page !== 'error_404' && $page !== 'error_500' && $page !== 'two_step_verification_3' && $page !== 'two_step_verification_2' && $page !== 'two_step_verification' && $page !== 'email_verification_3' && $page !== 'email_verification_2' && $page !== 'email_verification' && $page !== 'reset_password_3' && $page !== 'reset_password_2' && $page !== 'reset_password' && $page !== 'forgot_password_3' && $page !== 'forgot_password_2' && $page !== 'forgot_password' && $page !== 'register_3' && $page !== 'register_2' && $page !== 'register' && $page !== 'signin_3' && $page !== 'signin_2' && $page !== 'signin' && $page !== 'success' && $page !== 'success_2' && $page !== 'success_3' && $page !== 'layout_horizontal' && $page !== 'layout_hovered' && $page !== 'layout_boxed' && $page !== 'layout_rtl' && $page !== 'pos' && $page !== 'pos_2' && $page !== 'pos_3' && $page !== 'pos_4' && $page !== 'pos_5')
    echo "<body>";

if ($page === 'layout_horizontal')
    echo '<body class="menu-horizontal">';
if ($page === 'layout_hovered')
    echo '<body class="mini-sidebar expand-menu">';
if ($page === 'layout_boxed')
    echo '<body class="mini-sidebar layout-box-mode">';
if ($page === 'layout_rtl')
    echo '<body class="layout-mode-rtl">';
if ($page === 'under_maintenance' || $page === 'coming_soon' || $page === 'error_404' || $page === 'error_500')
    echo '<body class="error-page">';
if ($page === 'two_step_verification' || $page === 'email_verification' || $page === 'reset_password' || $page === 'forgot_password' || $page === 'register_2' || $page === 'register' || $page === 'signin' || $page === 'success')
    echo '<body class="account-page">';
if ($page === 'two_step_verification_3' || $page === 'two_step_verification_2' || $page === 'success_2' || $page === 'success_3' || $page === 'signin_3' || $page === 'signin_2' || $page === 'reset_password_3' || $page === 'reset_password_2' || $page === 'forgot_password_3' || $page === 'forgot_password_2' || $page === 'email_verification_3' || $page === 'email_verification_2' || $page === 'register_3')
    echo '<body class="account-page bg-white">';
if ($page === 'lock_screen')
    echo '<img src="' . $this->Url->image('bg/lock-screen-bg.png') . '" alt="bg" class="lock-screen-bg position-absolute img-fluid d-sm-none d-md-none d-lg-flex">';
if ($page === 'pos' || $page === 'pos_2' || $page === 'pos_3' || $page === 'pos_4' || $page === 'pos_5')
    echo '<body class="pos-page">';
?>