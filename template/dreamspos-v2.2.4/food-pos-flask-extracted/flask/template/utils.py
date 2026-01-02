import re
from flask import request

def generate_title():
    path = request.path.strip('/')
    filename = path or 'index'

    acronyms = ['ui', 'ai', 'js', 'api', 'css', 'html', 'php', 'seo', 'ip', 'faq', 'pos', 'rtl']

    if filename == 'index':
        title = 'Admin Dashboard'
    else:
        parts = re.sub(r'^ui-', '', filename.lower()).split('-')

        has_icon = 'icon' in parts
        has_chart = 'chart' in parts

        cleaned_parts = [
            part for part in parts
            if not (part.isnumeric() or part in ['icon', 'chart', 'all'])
        ]

        formatted_parts = [
            word.upper() if word in acronyms else word.capitalize()
            for word in cleaned_parts
        ]

        if has_icon:
            formatted_parts.append('Icons')
        if has_chart:
            formatted_parts.append('Charts')

        title = ' '.join(formatted_parts)

    return f"{title} | POS Food - Bootstrap 5 Admin Dashboard"