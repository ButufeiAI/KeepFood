from django import template
import sys
from pathlib import Path

# Add project root to path to import config
sys.path.insert(0, str(Path(__file__).resolve().parent.parent.parent))
from config import BASE_URL

register = template.Library()


@register.filter
def normalize_path(path):
    """
    Normalize a path by stripping the BASE_URL prefix.
    This ensures path comparisons work correctly when BASE_URL is set.
    """
    if not path:
        return path
    
    # Normalize BASE_URL (strip trailing slash)
    base_url = (BASE_URL or '').strip().rstrip('/')
    
    # If BASE_URL is empty or just '/', return path as is
    if not base_url or base_url == '/':
        return path
    
    # Remove BASE_URL prefix if present
    if path.startswith(base_url):
        normalized = path[len(base_url):] or '/'
        return normalized
    
    return path


@register.filter
def get_page_name(request):
    # Get current URL path, e.g. "/" or "/signin" or "/pages/dashboard"
    path = request.path.strip('/')

    # If path is empty (like home page), set page to "index"
    page = path.split('/')[-1] if path else 'index'

    # Return this to all templates
    return page  


@register.simple_tag
def is_active_path(request_path, *paths):
    """
    Check if the current request path matches any of the given paths.
    Automatically normalizes the request path by stripping BASE_URL.
    
    Usage: {% is_active_path request.path '/index' '/admin-dashboard' %}
    """
    normalized_request_path = normalize_path(request_path)
    
    for path in paths:
        # Normalize the comparison path (ensure it starts with /)
        normalized_path = path if path.startswith('/') else '/' + path
        if normalized_request_path == normalized_path:
            return 'active'
    
    return ''


@register.simple_tag(takes_context=True)
def get_normalized_path(context):
    """
    Get the normalized path from the request.
    Usage: {% get_normalized_path as normalized_path %}
    """
    request = context.get('request')
    if request:
        return normalize_path(request.path)
    return ''
