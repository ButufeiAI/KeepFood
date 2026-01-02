

<?php
$page = $this->getRequest()->getParam('pass')[0] ?? 'index';

if ($page === 'login' || $page === 'register' || $page === 'email_verification' || $page === 'forgot_password' || $page === 'otp' || $page === 'reset_password') {
    echo'<body class="bg-white">';
} elseif ($page == 'pos') {
    echo '<body class="pos-page">';
} else {
    echo '<body>';
}?>