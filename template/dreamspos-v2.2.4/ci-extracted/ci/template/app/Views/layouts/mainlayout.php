<!DOCTYPE html>
<html lang="en">

<head>
    <?= $this->include('partials/title-meta') ?>
    <?= $this->include('partials/head-css') ?>
</head>

<?= $this->include('partials/body') ?>

    <!-- Begin Wrapper -->
    <?= $this->include('partials/main-wrapper') ?>

        <?= $this->include('partials/topbar') ?>
        <?= $this->include('partials/sidebar') ?>

        <?= $this->renderSection('content') ?>

    </div>
    <!-- End Wrapper -->

    <?= $this->include('partials/modal-popup') ?>
    <?= $this->include('partials/vendor-scripts') ?>

</body>

</html>
