<?php
use yii\helpers\Html;
use yii\web\View;

/* @var $this View */
/* @var $content string */
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <?= $this->render('partials/title-meta') ?>
    <?= $this->render('partials/head-css') ?>
</head>

<?= $this->render('partials/body') ?>

    <!-- Begin Wrapper -->
    <?= $this->render('partials/main-wrapper') ?>

        <?= $this->render('partials/topbar') ?>
        <?= $this->render('partials/sidebar') ?>

        <?= $content ?> <!-- Main content of the page -->

    </div>
    <!-- End Wrapper -->

    <?= $this->render('partials/modal-popup') ?>
    <?= $this->render('partials/vendor-scripts') ?>
</body>
</html>
