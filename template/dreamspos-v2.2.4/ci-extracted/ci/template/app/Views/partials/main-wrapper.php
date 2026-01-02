<?php
$link = $_SERVER['PHP_SELF'];
$link_array = explode('/', $link);
$page = end($link_array);

if ($page == 'pos') {
    echo '<div class="main-wrapper pos-wrapper">';
} else {
    echo '<div class="main-wrapper">';
}
?>
