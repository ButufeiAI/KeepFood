<?php
$page = $this->getRequest()->getParam('pass')[0] ?? 'index';

if ($page == 'layout_horizontal') {
    echo '<html lang="en" data-layout="horizontal">';
} elseif ($page == 'layout_detached') {
    echo '<html lang="en" data-layout="detached">';
} elseif ($page == 'layout_modern') {
    echo '<html lang="en" data-layout="modern">';
} elseif ($page == 'layout_two_column') {
    echo '<html lang="en" data-layout="twocolumn">';
} elseif ($page == 'layout_hovered') {
    echo '<html lang="en" data-layout="layout-hovered">';
} elseif ($page == 'layout_boxed') {
    echo '<html lang="en" data-layout="default" data-width="box">';
} elseif ($page == 'layout_rtl') {
    echo '<html lang="en" data-layout-mode="light_mode">';
} elseif ($page == 'layout_dark') {
    echo '<html lang="en" data-theme="dark">';
} else {
    echo '<html lang="en">';
}
?>