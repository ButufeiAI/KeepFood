<?php
use yii\helpers\Html;
use yii\helpers\Url;

$path = Yii::$app->request->getPathInfo();
// Handle root path - if empty, treat as index page
$page = empty($path) ? 'index' : basename($path);

if ($page === 'login' || $page === 'register' || $page === 'email-verification' || $page === 'forgot-password' || $page === 'otp' || $page === 'reset-password') {
    echo '<body class="bg-white">';
} elseif ($page === 'pos') {
    echo '<body class="pos-page">';
} else {
    echo '<body>';
}
?>