<?php
use yii\helpers\Html;

/** @var yii\web\View $this */

// Get current controller and action
$actionId = Yii::$app->controller->action->id;
$controllerId = Yii::$app->controller->id;

// Define acronyms that should be uppercase
$acronyms = ['ui', 'ai', 'js', 'api', 'css', 'html', 'php', 'seo', 'ip', 'faq', 'pos', 'rtl'];

// Generate page title based on controller/action
if ($controllerId === 'pages' && $actionId === 'index') {
    $title = 'Admin Dashboard';
} else {
    $filename = $actionId !== 'index' ? $actionId : $controllerId;
    $parts = explode('-', str_replace('ui-', '', strtolower($filename)));


    // Format words (uppercase acronyms, capitalize others)
    $formattedParts = array_map(function($word) use ($acronyms) {
        return in_array($word, $acronyms) ? strtoupper($word) : ucfirst($word);
    }, $parts);

    $title = implode(' ', $formattedParts);
}

// Final page title
$finalTitle = $title . ' | POS Food - Bootstrap 5 Admin Dashboard';

// Render meta tags and title
echo '<meta charset="utf-8">' . "\n";
echo '<meta http-equiv="X-UA-Compatible" content="IE=edge">' . "\n";
echo '<meta name="viewport" content="width=device-width, initial-scale=1.0">' . "\n";
echo '<meta name="description" content="Dreams POS is a powerful Bootstrap based Inventory Management Admin Template designed for businesses, offering seamless invoicing, project tracking, and estimates.">' . "\n";
echo '<meta name="keywords" content="inventory management, admin dashboard, bootstrap template, invoicing, estimates, business management, responsive admin, POS system">' . "\n";
echo '<meta name="author" content="Dreams Technologies">' . "\n";
echo '<title>' . Html::encode($finalTitle) . '</title>' . "\n";