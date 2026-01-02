<?php

use yii\helpers\Html;
use yii\helpers\Url;

$path = Yii::$app->request->getPathInfo();
// Handle root path - if empty, treat as index page
$page = empty($path) ? 'index' : basename($path);

if ($page == 'layout-horizontal') {
    echo '<html lang="en" data-layout="horizontal">';
} elseif ($page == 'layout-detached') {
    echo '<html lang="en" data-layout="detached">';
} elseif ($page == 'layout-modern') {
    echo '<html lang="en" data-layout="modern">';
} elseif ($page == 'layout-two-column') {
    echo '<html lang="en" data-layout="twocolumn">';
} elseif ($page == 'layout-hovered') {
    echo '<html lang="en" data-layout="layout-hovered">';
} elseif ($page == 'layout-boxed') {
    echo '<html lang="en" data-layout="default" data-width="box">';
} elseif ($page == 'layout-rtl') {
    echo '<html lang="en" data-layout-mode="light_mode">';
} elseif ($page == 'layout-dark') {
    echo '<html lang="en" data-theme="dark">';
} else {
    echo '<html lang="en">';
}
?>
