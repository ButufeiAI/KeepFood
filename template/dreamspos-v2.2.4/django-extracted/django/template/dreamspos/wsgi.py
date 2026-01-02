"""
WSGI config for dreamspos project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/howto/deployment/wsgi/
"""

import os
import sys
from pathlib import Path

# Add project root to path to import config
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from config import BASE_URL

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'dreamspos.settings')

# Get the Django WSGI application
django_app = get_wsgi_application()

# Apply PrefixMiddleware if BASE_URL is set
if BASE_URL and BASE_URL.strip() and BASE_URL.strip() != '/':
    from middleware import PrefixMiddleware
    application = PrefixMiddleware(django_app, BASE_URL)
else:
    application = django_app
