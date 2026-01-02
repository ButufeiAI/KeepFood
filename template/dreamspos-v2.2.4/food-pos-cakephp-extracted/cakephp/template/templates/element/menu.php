<?php
$page = $this->getRequest()->getParam('pass')[0] ?? 'index';

if (
    $page !== 'email_verification' && $page !== 'forgot_password' && $page !== 'login' && $page !== 'otp' && $page !== 'register' && $page !== 'reset_password'
) {
    echo $this->element('topbar');

    echo $this->element('sidebar');
}
?>