<?php

// Get current PHP file name
$filename = '';
if (!empty($_SERVER['SCRIPT_NAME'])) {
    $parsed = parse_url($_SERVER['SCRIPT_NAME'], PHP_URL_PATH);
    if ($parsed !== false) {
        $filename = pathinfo($parsed, PATHINFO_FILENAME);
    }
}

// Acronyms that should remain uppercase
$acronyms = ['ai', 'ui', 'api', 'pos', 'faq', 'rtl'];

if ($filename === 'index') {
    $title = 'Dashboard';
} elseif (!empty($filename)) {

    // Clean filename: replace - and _ with spaces
    $cleaned = strtolower($filename);
    $cleaned = str_replace(['_', '-'], ' ', $cleaned);
    $cleaned = trim($cleaned);

    // Convert into words
    $words = explode(' ', $cleaned);

    // Format words: uppercase acronyms, otherwise ucfirst()
    $words = array_map(function ($word) use ($acronyms) {
        return in_array($word, $acronyms, true)
            ? strtoupper($word)
            : ucfirst($word);
    }, $words);

    // Final page title
    $title = implode(' ', $words);
}
?>

<!-- Meta Tags -->
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title><?= htmlspecialchars($title, ENT_QUOTES, 'UTF-8') ?> | POS Food - Bootstrap 5 Admin Dashboard</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Dreams POS is a powerful Bootstrap based Inventory Management Admin Template designed for businesses, offering seamless invoicing, project tracking, and estimates.">
<meta name="keywords" content="inventory management, admin dashboard, bootstrap template, invoicing, estimates, business management, responsive admin, POS system">
<meta name="author" content="Dreams Technologies">