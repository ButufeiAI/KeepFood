<?php

use yii\helpers\Html;
use yii\helpers\Url;

$path = Yii::$app->request->getPathInfo();
// Handle root path - if empty, treat as index page
$page = empty($path) ? 'index' : basename($path);

if ($page == 'pos') {
    echo '<div class="main-wrapper pos-wrapper">';
} else {
    echo '<div class="main-wrapper">';
}
?>
