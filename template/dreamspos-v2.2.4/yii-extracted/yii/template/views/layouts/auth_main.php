<?php
use yii\helpers\Html;
use yii\web\View;

/* @var $this View */
/* @var $content string */
?>

<!DOCTYPE html>
<?= $this->render('partials/theme-settings') ?>

<head>
    <?= $this->render('partials/title-meta') ?>
    <?= $this->render('partials/head-css') ?>
</head>

<?= $this->render('partials/body') ?>
    <?= $this->render('partials/loader') ?>

    <!-- Begin Wrapper -->
    <?= $this->render('partials/main-wrapper') ?>

        <?= $content ?> <!-- Main content of the page -->

    </div>
    <!-- End Wrapper -->

    <?= $this->render('partials/vendor-scripts') ?>
</body>
</html>