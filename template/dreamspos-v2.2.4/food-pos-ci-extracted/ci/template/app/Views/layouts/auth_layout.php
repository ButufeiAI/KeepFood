<!DOCTYPE html>
<html lang="en">

<head>
    <?= $this->include('partials/title-meta') ?>
    <?= $this->include('partials/head-css') ?>
</head>

<?= $this->include('partials/body') ?>

    <!-- Begin Wrapper -->
    <div class="main-wrapper">

        <?= $this->renderSection('content') ?>

    </div>
    <!-- End Wrapper -->

    <?= $this->include('partials/modal-popup') ?>
    <?= $this->include('partials/vendor-scripts') ?>

</body>

</html>
