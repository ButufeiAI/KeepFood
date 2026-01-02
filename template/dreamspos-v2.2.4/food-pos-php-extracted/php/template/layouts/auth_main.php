<?php require_once __DIR__ . '/../partials/session.php';?>

<!DOCTYPE html>
<html lang="en">

<head>

    <?php require_once __DIR__ . '/../partials/title-meta.php';?>

    <?php require_once __DIR__ . '/../partials/head-css.php';?>

</head>

<?php require_once __DIR__ . '/../partials/body.php';?>

    <!-- Start Main Wrapper -->
    <div class="main-wrapper">

        <?= $content ?? '' ?>

    </div>
    <!-- End Main Wrapper -->

    <?php require_once __DIR__ . '/../partials/vendor-scripts.php'; ?>

</body>
</html>
