import os
from flask import Flask, render_template, redirect, url_for, request
from utils import generate_title  # ✅ Import it from utils.py
from config import BASE_URL, DEBUG
from middleware import PrefixMiddleware

# Set FLASK_DEBUG environment variable for Flask CLI (flask run command)
# Convert DEBUG boolean to '1' or '0' string for FLASK_DEBUG
os.environ['FLASK_DEBUG'] = '1' if DEBUG else '0'
os.environ['FLASK_APP'] = 'app.py'

app = Flask(__name__)
# Set DEBUG in app config from config.py
app.config['DEBUG'] = DEBUG

# Ensure Flask knows the application root for URL generation
app.config['APPLICATION_ROOT'] = BASE_URL if BASE_URL not in ('', '/') else '/'

# Apply the prefix middleware so the entire app honors BASE_URL
app.wsgi_app = PrefixMiddleware(app.wsgi_app, BASE_URL)

@app.context_processor
def inject_page_name():
    # Get current URL path, e.g. "/" or "/signin" or "/pages/dashboard"
    path = request.path.strip('/')

    # If path is empty (like home page), set page to "index"
    page = path.split('/')[-1] if path else 'index'

    # Return this to all templates
    return dict(page=page)

@app.route('/')
def root():
    return redirect(url_for('index'))

@app.route('/index', endpoint='index')
def index():
    return render_template('pages/index.html')

@app.route('/addons', endpoint='addons')
def addons():
    return render_template('pages/addons.html')

@app.route('/audit-report', endpoint='audit-report')
def audit_report():
    return render_template('pages/audit-report.html')

@app.route('/categories', endpoint='categories')
def categories():
    return render_template('pages/categories.html')

@app.route('/coupons', endpoint='coupons')
def coupons():
    return render_template('pages/coupons.html')

@app.route('/customer-report', endpoint='customer-report')
def customer_report():
    return render_template('pages/customer-report.html')

@app.route('/customer', endpoint='customer')
def customer():
    return render_template('pages/customer.html')

@app.route('/delivery-settings', endpoint='delivery-settings')
def delivery_settings():
    return render_template('pages/delivery-settings.html')

@app.route('/earning-report', endpoint='earning-report')
def earning_report():
    return render_template('pages/earning-report.html')

@app.route('/email-verification', endpoint='email-verification')
def email_verification():
    return render_template('pages/email-verification.html')

@app.route('/forgot-password', endpoint='forgot-password')
def forgot_password():
    return render_template('pages/forgot-password.html')

@app.route('/integrations-settings', endpoint='integrations-settings')
def integrations_settings():
    return render_template('pages/integrations-settings.html')

@app.route('/invoices', endpoint='invoices')
def invoices():
    return render_template('pages/invoices.html')

@app.route('/invoice-details', endpoint='invoice-details')
def invoice_details():
    return render_template('pages/invoice-details.html')

@app.route('/items', endpoint='items')
def items():
    return render_template('pages/items.html')

@app.route('/kanban-view', endpoint='kanban-view')
def kanban_view():
    return render_template('pages/kanban-view.html')

@app.route('/kitchen', endpoint='kitchen')
def kitchen():
    return render_template('pages/kitchen.html')

@app.route('/login', endpoint='login')
def login():
    return render_template('pages/login.html')

@app.route('/notifications-settings', endpoint='notifications-settings')
def notifications_settings():
    return render_template('pages/notifications-settings.html')

@app.route('/order-report', endpoint='order-report')
def order_report():
    return render_template('pages/order-report.html')

@app.route('/orders', endpoint='orders')
def orders():
    return render_template('pages/orders.html')

@app.route('/otp', endpoint='otp')
def otp():
    return render_template('pages/otp.html')

@app.route('/pos', endpoint='pos')
def pos():
    return render_template('pages/pos.html')

@app.route('/payment-settings', endpoint='payment-settings')
def payment_settings():
    return render_template('pages/payment-settings.html')

@app.route('/payments', endpoint='payments')
def payments():
    return render_template('pages/payments.html')

@app.route('/print-settings', endpoint='print-settings')
def print_settings():
    return render_template('pages/print-settings.html')

@app.route('/register', endpoint='register')
def register():
    return render_template('pages/register.html')

@app.route('/reservations', endpoint='reservations')
def reservations():
    return render_template('pages/reservations.html')

@app.route('/reset-password', endpoint='reset-password')
def reset_password():
    return render_template('pages/reset-password.html')    

@app.route('/role-permission', endpoint='role-permission')
def role_permission():
    return render_template('pages/role-permission.html')

@app.route('/sales-report', endpoint='sales-report')
def sales_report():
    return render_template('pages/sales-report.html')

@app.route('/store-settings', endpoint='store-settings')
def store_settings():
    return render_template('pages/store-settings.html')

@app.route('/table', endpoint='table')
def table():
    return render_template('pages/table.html')

@app.route('/tax-settings', endpoint='tax-settings')
def tax_settings():
    return render_template('pages/tax-settings.html')

@app.route('/users', endpoint='users')
def users():
    return render_template('pages/users.html')
    
@app.context_processor
def inject_title():
    return {'title': generate_title()}