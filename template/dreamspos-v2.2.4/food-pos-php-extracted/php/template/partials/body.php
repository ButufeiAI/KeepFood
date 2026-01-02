<?php
$link = $_SERVER['PHP_SELF'];
$link_array = explode('/', $link);
$page = end($link_array);
?>

<?php if ($page === 'login.php' || $page === 'register.php' || $page === 'email-verification.php' || $page === 'forgot-password.php' || $page === 'otp.php' || $page === 'reset-password.php') {   ?>
    <body class="bg-white">
<?php } elseif ($page === 'pos.php') {   ?>
    <body class="pos-page">
<?php } else {   ?>
    <body>
<?php }?>