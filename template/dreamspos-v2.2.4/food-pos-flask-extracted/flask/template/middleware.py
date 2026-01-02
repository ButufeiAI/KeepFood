class PrefixMiddleware:
    """WSGI middleware to mount the entire app under a URL prefix (BASE_URL).

    This adjusts SCRIPT_NAME and PATH_INFO so that url_for() and static URLs
    automatically include the base prefix without changing individual routes.
    """

    def __init__(self, app, prefix):
        self.app = app
        # Normalize prefix: None/'/' -> '' ; strip trailing slash
        normalized = (prefix or '').strip()
        if normalized == '/' or normalized == '':
            self.prefix = ''
        else:
            self.prefix = normalized.rstrip('/')

    def __call__(self, environ, start_response):
        if not self.prefix:
            return self.app(environ, start_response)

        script_name = environ.get('SCRIPT_NAME', '')
        path_info = environ.get('PATH_INFO', '')

        if path_info.startswith(self.prefix):
            environ['SCRIPT_NAME'] = script_name + self.prefix
            environ['PATH_INFO'] = path_info[len(self.prefix):] or '/'
            return self.app(environ, start_response)

        # If request doesn't start with the prefix, return 404
        from werkzeug.wrappers import Response
        return Response('Not Found', status=404)(environ, start_response)


