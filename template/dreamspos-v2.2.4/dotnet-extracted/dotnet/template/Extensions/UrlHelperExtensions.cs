using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using System;

namespace Microsoft.AspNetCore.Mvc.Rendering
{
    public static class UrlHelperExtensions
    {
        public static string IsActive(this IUrlHelper urlHelper, string action, string? controller = null, string? area = null)
        {
            if (urlHelper == null)
                throw new ArgumentNullException(nameof(urlHelper));
            if (urlHelper.ActionContext?.RouteData?.Values == null)
                return string.Empty;

            var routeData = urlHelper.ActionContext.RouteData;
            var routeAction = routeData.Values["action"]?.ToString() ?? string.Empty;
            var routeController = routeData.Values["controller"]?.ToString() ?? string.Empty;
            var routeArea = routeData.Values["area"]?.ToString();

            var controllerMatch = string.IsNullOrEmpty(controller) || string.Equals(routeController, controller, StringComparison.OrdinalIgnoreCase);
            var actionMatch = string.Equals(routeAction, action, StringComparison.OrdinalIgnoreCase);
            var areaMatch = string.IsNullOrEmpty(area) || string.Equals(routeArea, area, StringComparison.OrdinalIgnoreCase);

            return (controllerMatch && actionMatch && areaMatch) ? "active" : "";
        }

        public static bool IsActive(this IUrlHelper urlHelper, string path)
        {
            if (urlHelper == null)
                throw new ArgumentNullException(nameof(urlHelper));

            if (string.IsNullOrWhiteSpace(path))
                return false;

            var httpContext = urlHelper.ActionContext.HttpContext;
            
            // Get the current path (without base path) - this is what the route actually matches
            var currentPath = httpContext.Request.Path.Value ?? "/";
            
            // Normalize current path - ensure it starts with /
            if (!currentPath.StartsWith("/"))
            {
                currentPath = "/" + currentPath;
            }
            
            // Normalize the input path parameter
            var normalizedPath = path.Trim();
            
            // If the path already includes the base path, remove it for comparison
            var pathBase = httpContext.Request.PathBase.Value ?? string.Empty;
            if (!string.IsNullOrEmpty(pathBase) && normalizedPath.StartsWith(pathBase, StringComparison.OrdinalIgnoreCase))
            {
                normalizedPath = normalizedPath.Substring(pathBase.Length);
            }
            
            // Ensure normalized path starts with /
            if (!normalizedPath.StartsWith("/"))
            {
                normalizedPath = "/" + normalizedPath;
            }
            
            // Normalize both paths by removing trailing slashes (except root)
            currentPath = currentPath == "/" ? "/" : currentPath.TrimEnd('/');
            normalizedPath = normalizedPath == "/" ? "/" : normalizedPath.TrimEnd('/');
            
            // Compare the paths (case-insensitive for URL paths)
            return string.Equals(currentPath, normalizedPath, StringComparison.OrdinalIgnoreCase);
        }

        /// <summary>
        /// Generates a URL that includes the base path (PathBase)
        /// </summary>
        public static string BaseUrl(this IUrlHelper urlHelper, string path)
        {
            if (urlHelper == null)
                throw new ArgumentNullException(nameof(urlHelper));
            
            if (string.IsNullOrEmpty(path))
                return path;
            
            var httpContext = urlHelper.ActionContext.HttpContext;
            var pathBase = httpContext.Request.PathBase.Value ?? string.Empty;
            
            // If path already starts with pathBase, return as is
            if (path.StartsWith(pathBase, StringComparison.OrdinalIgnoreCase))
                return path;
            
            // If path is absolute (starts with http:// or https://), return as is
            if (path.StartsWith("http://", StringComparison.OrdinalIgnoreCase) || 
                path.StartsWith("https://", StringComparison.OrdinalIgnoreCase) ||
                path.StartsWith("//", StringComparison.OrdinalIgnoreCase))
                return path;
            
            // If path is javascript: or #, return as is
            if (path.StartsWith("javascript:", StringComparison.OrdinalIgnoreCase) || 
                path.StartsWith("#"))
                return path;
            
            // Combine pathBase with path
            return pathBase + path.TrimStart('/');
        }
    }
}
