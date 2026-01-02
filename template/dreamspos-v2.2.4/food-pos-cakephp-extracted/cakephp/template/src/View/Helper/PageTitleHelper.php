<?php
namespace App\View\Helper;

use Cake\View\Helper;

class PageTitleHelper extends Helper
{
    protected array $acronyms = ['ai', 'api', 'pos', 'faq', 'rtl'];

    public function generate(): string
    {
        $uri = $_SERVER['REQUEST_URI'] ?? '';
        $filename = basename(parse_url($uri, PHP_URL_PATH));
        $filename = preg_replace('/\.php$/', '', trim($filename, '/'));

        if ($filename === '' || $filename === 'index') {
            $title = 'Dashboard';
        } else {
            // Convert underscores/hyphens to spaces
            $cleaned = str_replace(['_', '-'], ' ', strtolower($filename));

            // Remove trailing numbers (e.g. report_1)
            $cleaned = preg_replace('/\s+[0-9]+$/', '', $cleaned);

            // Remove "ui" if it’s the first word
            $cleaned = preg_replace('/^ui\s+/', '', $cleaned);

            // Split into words
            $words = explode(' ', trim($cleaned));

            // Capitalize words and handle acronyms
            $words = array_map(function ($word) {
                $acronyms = ['ai', 'api', 'pos', 'faq', 'rtl'];
                return in_array(strtolower($word), $acronyms, true)
                    ? strtoupper($word)
                    : ucfirst($word);
            }, $words);

            $title = implode(' ', $words);

            // Handle special words
            if (str_contains($cleaned, 'chart')) {
                $title = str_replace('Chart', '', $title) . ' Charts';
            } elseif (str_contains($cleaned, 'icon')) {
                $title = str_replace('Icon', '', $title) . ' Icons';
            }
        }

        return $title . ' | POS Food - Bootstrap 5 Admin Dashboard';
    }
}
