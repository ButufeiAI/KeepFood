<!DOCTYPE html>
<html lang="en">

<head>
	<!-- Meta Tags -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Dreams POS is a powerful Bootstrap based Inventory Management Admin Template designed for businesses, offering seamless invoicing, project tracking, and estimates.">
    <meta name="keywords" content="inventory management, admin dashboard, bootstrap template, invoicing, estimates, business management, responsive admin, POS system">
    <meta name="author" content="Dreams Technologies">
    <title><?= h($this->PageTitle->generate()) ?></title>

    <script>
        const baseUrl = '<?= $this->Url->build('/', ['fullBase' => true]); ?>';
        window.IMG_BASE_PATH = '<?= $this->request->getAttribute('webroot'); ?>img/';
        window.BASE_PATH = '<?= $this->request->getAttribute('webroot'); ?>';
    </script>

    <?= $this->element('head-css') ?>

</head>

<?= $this->element('body') ?>

    <!-- Begin Wrapper -->
    <?= $this->element('main-wrapper') ?>

        <?= $this->element('menu') ?>

        <?= $this->Flash->render() ?>
        <?= $this->fetch('content') ?>
    </div>
    <!-- End Wrapper -->

    <?= $this->element('modal-popup') ?>
    <?= $this->element('vendor-scripts') ?>

</body>
</html>
