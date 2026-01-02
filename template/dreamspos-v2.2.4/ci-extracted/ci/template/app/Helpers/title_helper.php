<?php

if (!function_exists('convert_to_title')) {
    /**
     * Converts a string like 'ui-avatar-chart' to 'Avatar Chart'
     * (Only acronym handling, no icon/chart/all logic)
     *
     * @param string $string
     * @return string
     */
    function convert_to_title($string)
    {
        $acronyms = ['ui', 'ai', 'js', 'api', 'css', 'html', 'php', 'seo', 'ip', 'faq', 'pos', 'rtl'];

        // Normalize
        $string = strtolower($string);

        // Remove ui- prefix if present
        $string = preg_replace('/^ui-/', '', $string);

        // Split by dash
        $parts = explode('-', $string);

        $cleaned = [];

        foreach ($parts as $part) {
            // Skip numeric parts
            if (is_numeric($part)) {
                continue;
            }

            // Acronym handling
            $cleaned[] = in_array($part, $acronyms, true)
                ? strtoupper($part)
                : ucfirst($part);
        }

        return implode(' ', $cleaned);
    }
}

if (!function_exists('get_page_title')) {
    /**
     * Returns a formatted page title based on the current URI segment.
     *
     * @return string
     */
    function get_page_title()
    {
        $uri = service('uri');
        $segments = $uri->getSegments();
        $last = !empty($segments) ? end($segments) : 'index';

        return $last === 'index'
            ? 'Dashboard'
            : convert_to_title($last);
    }
}
