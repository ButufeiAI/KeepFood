<?php
$link = $_SERVER['PHP_SELF'];
$link_array = explode('/', $link);
$page = end($link_array);
?>

<?php if ($page === 'pos.php') {   ?>
    <div class="main-wrapper pos-wrapper">
<?php } else {   ?>
    <div class="main-wrapper">
<?php }?>
