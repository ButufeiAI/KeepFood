using Microsoft.AspNetCore.Http;

namespace template.Middleware;

/// <summary>
/// ASP.NET Core middleware to mount the entire app under a URL prefix (BASE_URL).
/// This adjusts PathBase and Path so that Url.Action() and static URLs
/// automatically include the base prefix without changing individual routes.
/// </summary>
public class PathPrefixMiddleware
{
    private readonly RequestDelegate _next;
    private readonly string _prefix;

    public PathPrefixMiddleware(RequestDelegate next, string? prefix)
    {
        _next = next;
        
        // Normalize prefix: null/'/' -> '' ; strip trailing slash
        var normalized = (prefix ?? string.Empty).Trim();
        if (normalized == "/" || normalized == string.Empty)
        {
            _prefix = string.Empty;
        }
        else
        {
            _prefix = normalized.TrimEnd('/');
        }
    }

    public async Task InvokeAsync(HttpContext context)
    {
        // If no prefix, pass through unchanged
        if (string.IsNullOrEmpty(_prefix))
        {
            await _next(context);
            return;
        }

        var path = context.Request.Path.Value ?? string.Empty;

        // Check if the path starts with the prefix (case-sensitive to match Python behavior)
        if (path.StartsWith(_prefix, StringComparison.Ordinal))
        {
            // Adjust PathBase and Path
            var remainingPath = path.Substring(_prefix.Length);
            context.Request.PathBase = new PathString(_prefix);
            context.Request.Path = new PathString(string.IsNullOrEmpty(remainingPath) ? "/" : remainingPath);
            
            await _next(context);
            return;
        }

        // If request doesn't start with the prefix, return 404
        context.Response.StatusCode = StatusCodes.Status404NotFound;
        await context.Response.WriteAsync("Not Found");
    }
}

