<?php

use yii\helpers\Html;
use yii\helpers\Url;

$path = Yii::$app->request->getPathInfo();
// Handle root path - if empty, treat as index page
$page = empty($path) ? 'index' : basename($path);

if ($page == 'lock-screen') {
    echo '<div class="main-wrapper login-body">';
} elseif ($page == 'pos') {
    echo '<div class="main-wrapper pos-five">';
} elseif ($page == 'pos-3') {
    echo '<div class="main-wrapper pos-two">';
} elseif ($page == 'pos-4') {
    echo '<div class="main-wrapper pos-three">';
} elseif ($page == 'pos-5') {
    echo '<div class="main-wrapper pos-three pos-four">';
} else {
    echo '<div class="main-wrapper">';
}
?>