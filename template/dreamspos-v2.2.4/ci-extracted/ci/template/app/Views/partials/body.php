<?php
$link = $_SERVER[ 'PHP_SELF' ];
$link_array = explode( '/', $link );
$page = end( $link_array );


if ($page === 'login' || $page === 'register' || $page === 'email-verification' || $page === 'forgot-password' || $page === 'otp' || $page === 'reset-password') {
    echo '<body class="bg-white">';
} elseif ($page == 'pos') {
    echo '<body class="pos-page">';
} else {
    echo '<body>';
}
?>
