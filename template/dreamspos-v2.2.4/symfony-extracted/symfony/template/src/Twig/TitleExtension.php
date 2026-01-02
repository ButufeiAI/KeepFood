<?php
namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class TitleExtension extends AbstractExtension
{
    private array $acronyms = [
        // Technology & Development
        'ui', 'ai', 'js', 'api', 'css', 'html', 'php', 'seo', 'faq', 'rtl',
        'xml', 'json', 'sql', 'ftp', 'ssh', 'ssl', 'tls', 'http', 'https', 'url',
        'cdn', 'cms', 'crm', 'erp', 'saas', 'paas', 'iaas', 'sdk', 'ide', 'cli',
        'rest', 'soap', 'jwt', 'oauth', 'cors', 'gui', 'voip',

        // Business & Management
        'ceo', 'cfo', 'cto', 'hr', 'pr', 'qa', 'rd', 'it', 'pm', 'vp',
        'kpi', 'roi', 'b2b', 'b2c', 'pos', 'atm',

        // Government & Agencies
        'fbi', 'cia', 'nsa', 'fda', 'epa', 'irs',

        // Healthcare & Medical
        'mri', 'ct', 'pet', 'ecg', 'eeg', 'icu', 'er', 'or',
        'rn', 'lpn', 'pa', 'np', 'pt', 'ot', 'st',

        // Education & Degrees
        'phd', 'mba', 'bsc', 'msc', 'ba', 'ma', 'bs', 'ms'
    ];

    public function getFunctions(): array
    {
        return [
            new TwigFunction('page_title', [$this, 'generateTitle']),
        ];
    }

    public function generateTitle(string $routeName): string
    {
        if ($routeName === 'index' || $routeName === 'home') {
            return 'Admin Dashboard';
        }

        // Convert to lowercase and remove ui- prefix
        $cleaned = str_replace('ui-', '', strtolower($routeName));

        // Remove trailing -1, -2, _1, _2, etc.
        $cleaned = preg_replace('/-([0-9]+)$/', '', $cleaned);
        $cleaned = preg_replace('/_([0-9]+)$/', '', $cleaned);

        // Replace separators with spaces
        $cleaned = str_replace(['_', '-'], ' ', $cleaned);

        $parts = explode(' ', trim($cleaned));

        $hasIcon = false;
        $hasChart = false;
        $cleanedParts = [];

        foreach ($parts as $part) {
            $part = trim($part);
            if (empty($part)) continue;

            if ($part === 'icon') {
                $hasIcon = true;
                continue;
            }
            if ($part === 'chart') {
                $hasChart = true;
                continue;
            }
            if ($part === 'all') {
                continue;
            }
            $cleanedParts[] = $part;
        }

        $formattedParts = array_map(function ($word) {
            return in_array($word, $this->acronyms)
                ? strtoupper($word)
                : ucfirst($word);
        }, $cleanedParts);

        if ($hasIcon) {
            $formattedParts[] = 'Icons';
        }

        if ($hasChart) {
            $formattedParts[] = 'Charts';
        }

        return implode(' ', $formattedParts);
    }
}
