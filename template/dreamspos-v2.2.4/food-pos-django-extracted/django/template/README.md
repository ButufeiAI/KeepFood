# Django CRM Template

A customizable Customer Relationship Management (CRM) system built with Django. This project features a modular structure for managing users, dashboards, and CRM functionalities, with a modern frontend and asset pipeline powered by Gulp.

## Features

- Modular Django app structure (apps, components, dashboard)
- User authentication and management
- Dashboard and reporting templates
- Static asset management (CSS, JS, images) with Gulp
- Ready-to-use HTML templates for CRM, dashboard, user management, and more
- Easily extendable for custom business logic

## Prerequisites

- Python 3.8+
- pip (Python package manager)
- Node.js & npm (for frontend asset management)
- Django 3.2+ (install via requirements)
- Gulp CLI (`npm install -g gulp-cli`)

## Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd template
   ```

2. **Create and activate a virtual environment:**
   ```bash
   python -m venv venv
   # On Windows:
   venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate
   ```

3. **Install Python dependencies:**
   ```bash
   pip install django
   # Or use requirements.txt if available
   # pip install -r requirements.txt
   ```

4. **Install frontend dependencies:**
   ```bash
   npm install
   ```

5. **Install Gulp CLI globally (if not already installed):**
   ```bash
   npm install -g gulp-cli
   ```

6. **Build and watch static assets with Gulp:**
   - To build assets:
     ```bash
     gulp
     ```
   - To watch for changes and automatically rebuild:
     ```bash
     gulp watch
     ```

7. **Apply migrations:**
   ```bash
   python manage.py migrate
   ```

8. **Create a superuser (admin):**
   ```bash
   python manage.py createsuperuser
   ```

9. **Run the development server:**
   ```bash
   python manage.py runserver
   ```

10. **Access the app:**
    - Visit [http://127.0.0.1:8000/](http://127.0.0.1:8000/) in your browser.
    - Admin: [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/)

## Using Gulp for Asset Management

This project uses Gulp to automate and optimize frontend asset workflows, such as compiling SCSS, minifying CSS/JS, and copying static files.

- **gulpfile.js**: Contains Gulp tasks for building and processing assets.
- **npm install**: Installs all dependencies required for Gulp tasks.
- **gulp**: Runs the default Gulp task (builds all assets).
- **gulp watch**: Watches for changes in asset files and rebuilds automatically.

You can customize the Gulp tasks in `gulpfile.js` to fit your project's needs.

## Project Structure

```
template/
├── apps/           # Core CRM app logic
├── components/     # Reusable Django components
├── crms/           # Project settings and URLs
├── dashboard/      # Dashboard-specific logic
├── static/         # Static assets (CSS, JS, images)
├── templates/      # HTML templates (auth, dashboard, CRM, etc.)
├── gulpfile.js     # Gulp tasks for asset pipeline
├── package.json    # Node.js dependencies
├── manage.py       # Django management script
```

## Customization

- Add your own Django apps in the `apps/` or `components/` directories.
- Modify or extend templates in `templates/`.
- Add or update static files in `static/assets/`.
- Edit `gulpfile.js` to change asset build steps.

## License

This project is provided as a template. Add your license information here.

---

Feel free to modify this README to fit your project's needs! 