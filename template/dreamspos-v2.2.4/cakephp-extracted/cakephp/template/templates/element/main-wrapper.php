<?php
$page = $this->getRequest()->getParam('pass')[0] ?? 'index';

if ($page == 'lock_screen') {
    echo '<div class="main-wrapper login-body">';
} elseif ($page == 'pos') {
    echo '<div class="main-wrapper pos-five">';
} elseif ($page == 'pos_3') {
    echo '<div class="main-wrapper pos-two">';
} elseif ($page == 'pos_4') {
    echo '<div class="main-wrapper pos-three">';
} elseif ($page == 'pos_5') {
    echo '<div class="main-wrapper pos-three pos-four">';
} else {
    echo '<div class="main-wrapper">';
}
?>