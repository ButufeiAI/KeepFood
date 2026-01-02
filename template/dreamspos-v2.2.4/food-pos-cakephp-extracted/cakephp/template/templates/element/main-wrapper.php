<?php
$page = $this->getRequest()->getParam('pass')[0] ?? 'index';

if ($page == 'pos') {
    echo '<div class="main-wrapper pos-wrapper">';
} else {
    echo '<div class="main-wrapper">';
}
?>
