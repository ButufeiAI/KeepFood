<?php require_once __DIR__ . '/../partials/session.php';?>

<!DOCTYPE html>
<html lang="en">

<head>

    <?php require_once __DIR__ . '/../partials/title-meta.php';?>

    <?php require_once __DIR__ . '/../partials/head-css.php';?>

</head>

<?php require_once __DIR__ . '/../partials/body.php';?>

    <!-- Start Main Wrapper -->
    <?php require_once __DIR__ . '/../partials/main-wrapper.php';?>

        <?php require_once __DIR__ . '/../partials/topbar.php';?>
        <?php require_once __DIR__ . '/../partials/sidebar.php';?>

        <?= $content ?? '' ?>

    </div>
    <!-- End Main Wrapper -->

<?php include_once __DIR__ . '/../partials/modal-popup.php'; ?>
<?php require_once __DIR__ . '/../partials/vendor-scripts.php'; ?>

</body>
</html>
