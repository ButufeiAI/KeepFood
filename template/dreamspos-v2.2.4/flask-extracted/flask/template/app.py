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

@app.route('/account-list', endpoint='account-list')
def account_list():
    return render_template('pages/account-list.html')

@app.route('/account-statement', endpoint='account-statement')
def account_statement():
    return render_template('pages/account-statement.html')

@app.route('/activities', endpoint='activities')
def activities():
    return render_template('pages/activities.html')

@app.route('/add-employee', endpoint='add-employee')
def add_employee():
    return render_template('pages/add-employee.html')

@app.route('/add-product', endpoint='add-product')
def add_product():
    return render_template('pages/add-product.html')

@app.route('/admin-dashboard', endpoint='admin-dashboard')
def admin_dashboard():
    return render_template('pages/admin-dashboard.html')

@app.route('/all-blog', endpoint='all-blog')
def all_blog():
    return render_template('pages/all-blog.html')

@app.route('/annual-report', endpoint='annual-report')
def annual_report():
    return render_template('pages/annual-report.html')

@app.route('/appearance', endpoint='appearance')
def appearance():
    return render_template('pages/appearance.html')

@app.route('/attendance-admin', endpoint='attendance-admin')
def attendance_admin():
    return render_template('pages/attendance-admin.html')

@app.route('/attendance-employee', endpoint='attendance-employee')
def attendance_employee():
    return render_template('pages/attendance-employee.html')

@app.route('/audio-call', endpoint='audio-call')
def audio_call():
    return render_template('pages/audio-call.html')

@app.route('/balance-sheet', endpoint='balance-sheet')
def balance_sheet():
    return render_template('pages/balance-sheet.html')

@app.route('/balance-sheet-v2', endpoint='balance-sheet-v2')
def balance_sheet_v2():
    return render_template('pages/balance-sheet-v2.html')

@app.route('/ban-ip-address', endpoint='ban-ip-address')
def ban_ip_address():
    return render_template('pages/ban-ip-address.html')

@app.route('/bank-settings-grid', endpoint='bank-settings-grid')
def bank_settings_grid():
    return render_template('pages/bank-settings-grid.html')

@app.route('/bank-settings-list', endpoint='bank-settings-list')
def bank_settings_list():
    return render_template('pages/bank-settings-list.html')

@app.route('/barcode', endpoint='barcode')
def barcode():
    return render_template('pages/barcode.html')

@app.route('/best-seller', endpoint='best-seller')
def best_seller():
    return render_template('pages/best-seller.html')

@app.route('/billers', endpoint='billers')
def billers():
    return render_template('pages/billers.html')

@app.route('/blank-page', endpoint='blank-page')
def blank_page():
    return render_template('pages/blank-page.html')

@app.route('/blog-categories', endpoint='blog-categories')
def blog_categories():
    return render_template('pages/blog-categories.html')

@app.route('/blog-comments', endpoint='blog-comments')
def blog_comments():
    return render_template('pages/blog-comments.html')

@app.route('/blog-details', endpoint='blog-details')
def blog_details():
    return render_template('pages/blog-details.html')

@app.route('/blog-tag', endpoint='blog-tag')
def blog_tag():
    return render_template('pages/blog-tag.html')

@app.route('/brand-list', endpoint='brand-list')
def brand_list():
    return render_template('pages/brand-list.html')

@app.route('/calendar', endpoint='calendar')
def calendar():
    return render_template('pages/calendar.html')

@app.route('/call-history', endpoint='call-history')
def call_history():
    return render_template('pages/call-history.html')

@app.route('/cart', endpoint='cart')
def cart():
    return render_template('pages/cart.html')

@app.route('/companies', endpoint='companies')
def companies():
    return render_template('pages/companies.html')

@app.route('/category-list', endpoint='category-list')
def category_list():
    return render_template('pages/category-list.html')

@app.route('/cash-flow', endpoint='cash-flow')
def cash_flow():
    return render_template('pages/cash-flow.html')

@app.route('/cash-flow-v2', endpoint='cash-flow-v2')
def cash_flow_v2():
    return render_template('pages/cash-flow-v2.html')

@app.route('/chart-apex', endpoint='chart-apex')
def chart_apex():
    return render_template('pages/chart-apex.html')

@app.route('/chart-c3', endpoint='chart-c3')
def chart_c3():
    return render_template('pages/chart-c3.html')

@app.route('/chart-flot', endpoint='chart-flot')
def chart_flot():
    return render_template('pages/chart-flot.html')

@app.route('/chart-js', endpoint='chart-js')
def chart_js():
    return render_template('pages/chart-js.html')

@app.route('/chart-morris', endpoint='chart-morris')
def chart_morris():
    return render_template('pages/chart-morris.html')

@app.route('/chart-peity', endpoint='chart-peity')
def chart_peity():
    return render_template('pages/chart-peity.html')

@app.route('/chat', endpoint='chat')
def chat():
    return render_template('pages/chat.html')

@app.route('/checkout', endpoint='checkout')
def checkout():
    return render_template('pages/checkout.html')

@app.route('/cities', endpoint='cities')
def cities():
    return render_template('pages/cities.html')

@app.route('/coming-soon', endpoint='coming-soon')
def coming_soon():
    return render_template('pages/coming-soon.html')

@app.route('/company-settings', endpoint='company-settings')
def company_settings():
    return render_template('pages/company-settings.html')

@app.route('/connected-apps', endpoint='connected-apps')
def connected_apps():
    return render_template('pages/connected-apps.html')

@app.route('/contacts', endpoint='contacts')
def contacts():
    return render_template('pages/contacts.html')

@app.route('/countries', endpoint='countries')
def countries():
    return render_template('pages/countries.html')

@app.route('/coupons', endpoint='coupons')
def coupons():
    return render_template('pages/coupons.html')

@app.route('/currency-settings', endpoint='currency-settings')
def currency_settings():
    return render_template('pages/currency-settings.html')

@app.route('/custom-fields', endpoint='custom-fields')
def custom_fields():
    return render_template('pages/custom-fields.html')

@app.route('/customer-due-report', endpoint='customer-due-report')
def customer_due_report():
    return render_template('pages/customer-due-report.html')

@app.route('/customer-report', endpoint='customer-report')
def customer_report():
    return render_template('pages/customer-report.html')

@app.route('/customers', endpoint='customers')
def customers():
    return render_template('pages/customers.html')

@app.route('/data-tables', endpoint='data-tables')
def data_tables():
    return render_template('pages/data-tables.html')

@app.route('/dashboard', endpoint='dashboard')
def dashboard():
    return render_template('pages/dashboard.html')

@app.route('/delete-account', endpoint='delete-account')
def delete_account():
    return render_template('pages/delete-account.html')

@app.route('/department-grid', endpoint='department-grid')
def department_grid():
    return render_template('pages/department-grid.html')

@app.route('/department-list', endpoint='department-list')
def department_list():
    return render_template('pages/department-list.html')

@app.route('/designation', endpoint='designation')
def designation():
    return render_template('pages/designation.html')

@app.route('/discount', endpoint='discount')
def discount():
    return render_template('pages/discount.html')

@app.route('/discount-plan', endpoint='discount-plan')
def discount_plan():
    return render_template('pages/discount-plan.html')

@app.route('/domain', endpoint='domain')
def domain():
    return render_template('pages/domain.html')

@app.route('/edit-employee', endpoint='edit-employee')
def edit_employee():
    return render_template('pages/edit-employee.html')

@app.route('/edit-product', endpoint='edit-product')
def edit_product():
    return render_template('pages/edit-product.html')

@app.route('/email', endpoint='email')
def email():
    return render_template('pages/email.html')

@app.route('/email-reply', endpoint='email-reply')
def email_reply():
    return render_template('pages/email-reply.html')

@app.route('/email-settings', endpoint='email-settings')
def email_settings():
    return render_template('pages/email-settings.html')

@app.route('/email-templates', endpoint='email-templates')
def email_templates():
    return render_template('pages/email-templates.html')

@app.route('/email-verification', endpoint='email-verification')
def email_verification():
    return render_template('pages/email-verification.html')

@app.route('/email-verification-2', endpoint='email-verification-2')
def email_verification_2():
    return render_template('pages/email-verification-2.html')

@app.route('/email-verification-3', endpoint='email-verification-3')
def email_verification_3():
    return render_template('pages/email-verification-3.html')

@app.route('/employee-details', endpoint='employee-details')
def employee_details():
    return render_template('pages/employee-details.html')

@app.route('/employee-salary', endpoint='employee-salary')
def employee_salary():
    return render_template('pages/employee-salary.html')

@app.route('/employees-grid', endpoint='employees-grid')
def employees_grid():
    return render_template('pages/employees-grid.html')

@app.route('/employees-list', endpoint='employees-list')
def employees_list():
    return render_template('pages/employees-list.html')

@app.route('/error-404', endpoint='error-404')
def error_404():
    return render_template('pages/error-404.html')

@app.route('/error-500', endpoint='error-500')
def error_500():
    return render_template('pages/error-500.html')

@app.route('/expense-category', endpoint='expense-category')
def expense_category():
    return render_template('pages/expense-category.html')

@app.route('/expense-list', endpoint='expense-list')
def expense_list():
    return render_template('pages/expense-list.html')

@app.route('/expense-report', endpoint='expense-report')
def expense_report():
    return render_template('pages/expense-report.html')

@app.route('/expired-products', endpoint='expired-products')
def expired_products():
    return render_template('pages/expired-products.html')

@app.route('/faq', endpoint='faq')
def faq():
    return render_template('pages/faq.html')

@app.route('/file-archived', endpoint='file-archived')
def file_archived():
    return render_template('pages/file-archived.html')

@app.route('/file-document', endpoint='file-document')
def file_document():
    return render_template('pages/file-document.html')

@app.route('/file-favourites', endpoint='file-favourites')
def file_favourites():
    return render_template('pages/file-favourites.html')
    
@app.route('/file-manager', endpoint='file-manager')
def file_manager():
    return render_template('pages/file-manager.html')

@app.route('/file-manager-deleted', endpoint='file-manager-deleted')
def file_manager_deleted():
    return render_template('pages/file-manager-deleted.html')

@app.route('/file-recent', endpoint='file-recent')
def file_recent():
    return render_template('pages/file-recent.html')

@app.route('/file-shared', endpoint='file-shared')
def file_shared():
    return render_template('pages/file-shared.html')

@app.route('/form-basic-inputs', endpoint='form-basic-inputs')
def form_basic_inputs():
    return render_template('pages/form-basic-inputs.html')

@app.route('/form-checkbox-radios', endpoint='form-checkbox-radios')
def form_checkbox_radios():
    return render_template('pages/form-checkbox-radios.html')

@app.route('/form-elements', endpoint='form-elements')
def form_elements():
    return render_template('pages/form-elements.html')

@app.route('/form-fileupload', endpoint='form-fileupload')
def form_fileupload():
    return render_template('pages/form-fileupload.html')

@app.route('/form-floating-labels', endpoint='form-floating-labels')
def form_floating_labels():
    return render_template('pages/form-floating-labels.html')

@app.route('/form-grid-gutters', endpoint='form-grid-gutters')
def form_grid_gutters():
    return render_template('pages/form-grid-gutters.html')

@app.route('/form-horizontal', endpoint='form-horizontal')
def form_horizontal():
    return render_template('pages/form-horizontal.html')

@app.route('/form-input-groups', endpoint='form-input-groups')
def form_input_groups():
    return render_template('pages/form-input-groups.html')

@app.route('/form-mask', endpoint='form-mask')
def form_mask():
    return render_template('pages/form-mask.html')

@app.route('/form-pickers', endpoint='form-pickers')
def form_pickers():
    return render_template('pages/form-pickers.html')

@app.route('/form-select', endpoint='form-select')
def form_select():
    return render_template('pages/form-select.html')

@app.route('/form-select2', endpoint='form-select2')
def form_select2():
    return render_template('pages/form-select2.html')

@app.route('/form-validation', endpoint='form-validation')
def form_validation():
    return render_template('pages/form-validation.html')

@app.route('/form-vertical', endpoint='form-vertical')
def form_vertical():
    return render_template('pages/form-vertical.html')

@app.route('/form-wizard', endpoint='form-wizard')
def form_wizard():
    return render_template('pages/form-wizard.html')

@app.route('/forgot-password', endpoint='forgot-password')
def forgot_password():
    return render_template('pages/forgot-password.html')

@app.route('/forgot-password-2', endpoint='forgot-password-2')
def forgot_password_2():
    return render_template('pages/forgot-password-2.html')

@app.route('/forgot-password-3', endpoint='forgot-password-3')
def forgot_password_3():
    return render_template('pages/forgot-password-3.html')

@app.route('/gdpr-settings', endpoint='gdpr-settings')
def gdpr_settings():
    return render_template('pages/gdpr-settings.html')

@app.route('/general-settings', endpoint='general-settings')
def general_settings():
    return render_template('pages/general-settings.html')

@app.route('/holidays', endpoint='holidays')
def holidays():
    return render_template('pages/holidays.html')

@app.route('/gift-cards', endpoint='gift-cards')
def gift_cards():
    return render_template('pages/gift-cards.html')

@app.route('/icon-bootstrap', endpoint='icon-bootstrap')
def icon_bootstrap():
    return render_template('pages/icon-bootstrap.html')

@app.route('/icon-feather', endpoint='icon-feather')
def icon_feather():
    return render_template('pages/icon-feather.html')

@app.route('/icon-flag', endpoint='icon-flag')
def icon_flag():
    return render_template('pages/icon-flag.html')

@app.route('/icon-fontawesome', endpoint='icon-fontawesome')
def icon_fontawesome():
    return render_template('pages/icon-fontawesome.html')

@app.route('/icon-ionic', endpoint='icon-ionic')
def icon_ionic():
    return render_template('pages/icon-ionic.html')

@app.route('/icon-material', endpoint='icon-material')
def icon_material():
    return render_template('pages/icon-material.html')

@app.route('/icon-pe7', endpoint='icon-pe7')
def icon_pe7():
    return render_template('pages/icon-pe7.html')

@app.route('/icon-remix', endpoint='icon-remix')
def icon_remix():
    return render_template('pages/icon-remix.html')

@app.route('/icon-simpleline', endpoint='icon-simpleline')
def icon_simpleline():
    return render_template('pages/icon-simpleline.html')

@app.route('/icon-tabler', endpoint='icon-tabler')
def icon_tabler():
    return render_template('pages/icon-tabler.html')

@app.route('/icon-themify', endpoint='icon-themify')
def icon_themify():
    return render_template('pages/icon-themify.html')

@app.route('/icon-typicon', endpoint='icon-typicon')
def icon_typicon():
    return render_template('pages/icon-typicon.html')

@app.route('/icon-weather', endpoint='icon-weather')
def icon_weather():
    return render_template('pages/icon-weather.html')

@app.route('/income', endpoint='income')
def income():
    return render_template('pages/income.html')

@app.route('/income-category', endpoint='income-category')
def income_category():
    return render_template('pages/income-category.html')

@app.route('/income-report', endpoint='income-report')
def income_report():
    return render_template('pages/income-report.html')

@app.route('/inventory-report', endpoint='inventory-report')
def inventory_report():
    return render_template('pages/inventory-report.html')

@app.route('/invoice', endpoint='invoice')
def invoice():
    return render_template('pages/invoice.html')    

@app.route('/invoice-details', endpoint='invoice-details')
def invoice_details():
    return render_template('pages/invoice-details.html')

@app.route('/invoice-report', endpoint='invoice-report')
def invoice_report():
    return render_template('pages/invoice-report.html')

@app.route('/invoice-settings', endpoint='invoice-settings')
def invoice_settings():
    return render_template('pages/invoice-settings.html')

@app.route('/invoice-templates', endpoint='invoice-templates')
def invoice_templates():
    return render_template('pages/invoice-templates.html')

@app.route('/language-settings', endpoint='language-settings')
def language_settings():
    return render_template('pages/language-settings.html')

@app.route('/language-settings-web', endpoint='language-settings-web')
def language_settings_web():
    return render_template('pages/language-settings-web.html')

@app.route('/layout-boxed', endpoint='layout-boxed')
def layout_boxed():
    return render_template('pages/layout-boxed.html')

@app.route('/layout-dark', endpoint='layout-dark')
def layout_dark():
    return render_template('pages/layout-dark.html')

@app.route('/layout-detached', endpoint='layout-detached')
def layout_detached():
    return render_template('pages/layout-detached.html')

@app.route('/layout-horizontal', endpoint='layout-horizontal')
def layout_horizontal():
    return render_template('pages/layout-horizontal.html')

@app.route('/layout-hovered', endpoint='layout-hovered')
def layout_hovered():
    return render_template('pages/layout-hovered.html')

@app.route('/layout-modern', endpoint='layout-modern')
def layout_modern():
    return render_template('pages/layout-modern.html')

@app.route('/layout-rtl', endpoint='layout-rtl')
def layout_rtl():
    return render_template('pages/layout-rtl.html')

@app.route('/layout-two-column', endpoint='layout-two-column')
def layout_two_column():
    return render_template('pages/layout-two-column.html')

@app.route('/leaves-admin', endpoint='leaves-admin')
def leaves_admin():
    return render_template('pages/leaves-admin.html')

@app.route('/leaves-employee', endpoint='leaves-employee')
def leaves_employee():
    return render_template('pages/leaves-employee.html')

@app.route('/leave-types', endpoint='leave-types')
def leave_types():
    return render_template('pages/leave-types.html')

@app.route('/localization-settings', endpoint='localization-settings')
def localization_settings():
    return render_template('pages/localization-settings.html')

@app.route('/lock-screen', endpoint='lock-screen')
def lock_screen():
    return render_template('pages/lock-screen.html')

@app.route('/low-stocks', endpoint='low-stocks')
def low_stocks():
    return render_template('pages/low-stocks.html')

@app.route('/manage-stocks', endpoint='manage-stocks')
def manage_stocks():
    return render_template('pages/manage-stocks.html')

@app.route('/maps-leaflet', endpoint='maps-leaflet')
def maps_leaflet():
    return render_template('pages/maps-leaflet.html')

@app.route('/maps-vector', endpoint='maps-vector')
def maps_vector():
    return render_template('pages/maps-vector.html')

@app.route('/money-transfer', endpoint='money-transfer')
def money_transfer():
    return render_template('pages/money-transfer.html')

@app.route('/notes', endpoint='notes')
def notes():
    return render_template('pages/notes.html')

@app.route('/notification', endpoint='notification')
def notification():
    return render_template('pages/notification.html')

@app.route('/online-orders', endpoint='online-orders')
def online_orders():
    return render_template('pages/online-orders.html')

@app.route('/orders', endpoint='orders')
def orders():
    return render_template('pages/orders.html')

@app.route('/otp-settings', endpoint='otp-settings')
def otp_settings():
    return render_template('pages/otp-settings.html')

@app.route('/packages', endpoint='packages')
def packages():
    return render_template('pages/packages.html')

@app.route('/pages', endpoint='pages')
def pages():
    return render_template('pages/pages.html')

@app.route('/payment-gateway-settings', endpoint='payment-gateway-settings')
def payment_gateway_settings():
    return render_template('pages/payment-gateway-settings.html')

@app.route('/payroll-list', endpoint='payroll-list')
def payroll_list():
    return render_template('pages/payroll-list.html')

@app.route('/payslip', endpoint='payslip')
def payslip():
    return render_template('pages/payslip.html')

@app.route('/permissions', endpoint='permissions')
def permissions():
    return render_template('pages/permissions.html')

@app.route('/pos', endpoint='pos')
def pos():
    return render_template('pages/pos.html')

@app.route('/pos-2', endpoint='pos-2')
def pos_2():
    return render_template('pages/pos-2.html')

@app.route('/pos-3', endpoint='pos-3')
def pos_3():
    return render_template('pages/pos-3.html')

@app.route('/pos-4', endpoint='pos-4')
def pos_4():
    return render_template('pages/pos-4.html')

@app.route('/pos-5', endpoint='pos-5')
def pos_5():
    return render_template('pages/pos-5.html')

@app.route('/pos-orders', endpoint='pos-orders')
def pos_orders():
    return render_template('pages/pos-orders.html')

@app.route('/pos-settings', endpoint='pos-settings')
def pos_settings():
    return render_template('pages/pos-settings.html')

@app.route('/preference', endpoint='preference')
def preference():
    return render_template('pages/preference.html')

@app.route('/prefixes', endpoint='prefixes')
def prefixes():
    return render_template('pages/prefixes.html')

@app.route('/printer-settings', endpoint='printer-settings')
def printer_settings():
    return render_template('pages/printer-settings.html')

@app.route('/pricing', endpoint='pricing')
def pricing():
    return render_template('pages/pricing.html')

@app.route('/product-details', endpoint='product-details')
def product_details():
    return render_template('pages/product-details.html')

@app.route('/product-expiry-report', endpoint='product-expiry-report')
def product_expiry_report():
    return render_template('pages/product-expiry-report.html')

@app.route('/product-list', endpoint='product-list')
def product_list():
    return render_template('pages/product-list.html')

@app.route('/product-quantity-alert', endpoint='product-quantity-alert')
def product_quantity_alert():
    return render_template('pages/product-quantity-alert.html')

@app.route('/product-report', endpoint='product-report')
def product_report():
    return render_template('pages/product-report.html')

@app.route('/products', endpoint='products')
def products():
    return render_template('pages/products.html')

@app.route('/profile', endpoint='profile')
def profile():
    return render_template('pages/profile.html')

@app.route('/profit-and-loss', endpoint='profit-and-loss')
def profit_and_loss():
    return render_template('pages/profit-and-loss.html')

@app.route('/projects', endpoint='projects')
def projects():
    return render_template('pages/projects.html')

@app.route('/purchase-list', endpoint='purchase-list')
def purchase_list():
    return render_template('pages/purchase-list.html')

@app.route('/purchase-order-report', endpoint='purchase-order-report')
def purchase_order_report():
    return render_template('pages/purchase-order-report.html')

@app.route('/purchase-report', endpoint='purchase-report')
def purchase_report():
    return render_template('pages/purchase-report.html')

@app.route('/purchase-returns', endpoint='purchase-returns')
def purchase_returns():
    return render_template('pages/purchase-returns.html')

@app.route('/purchase-settings', endpoint='purchase-settings')
def purchase_settings():
    return render_template('pages/purchase-settings.html')

@app.route('/purchase-transaction', endpoint='purchase-transaction')
def purchase_transaction():
    return render_template('pages/purchase-transaction.html')

@app.route('/qrcode', endpoint='qrcode')
def qrcode():
    return render_template('pages/qrcode.html')

@app.route('/quotation-list', endpoint='quotation-list')
def quotation_list():
    return render_template('pages/quotation-list.html')

@app.route('/register', endpoint='register')
def register():
    return render_template('pages/register.html')

@app.route('/register-2', endpoint='register-2')
def register_2():
    return render_template('pages/register-2.html')

@app.route('/register-3', endpoint='register-3')
def register_3():
    return render_template('pages/register-3.html')

@app.route('/reset-password', endpoint='reset-password')
def reset_password():
    return render_template('pages/reset-password.html')

@app.route('/reset-password-2', endpoint='reset-password-2')
def reset_password_2():
    return render_template('pages/reset-password-2.html')

@app.route('/reset-password-3', endpoint='reset-password-3')
def reset_password_3():
    return render_template('pages/reset-password-3.html')

@app.route('/reviews', endpoint='reviews')
def reviews():
    return render_template('pages/reviews.html')  

@app.route('/roles-permissions', endpoint='roles-permissions')
def roles_permissions():
    return render_template('pages/roles-permissions.html')  

@app.route('/sales-dashboard', endpoint='sales-dashboard')
def sales_dashboard():
    return render_template('pages/sales-dashboard.html')  

@app.route('/sales-list', endpoint='sales-list')
def sales_list():
    return render_template('pages/sales-list.html')  

@app.route('/sales-report', endpoint='sales-report')
def sales_report():
    return render_template('pages/sales-report.html')  

@app.route('/sales-returns', endpoint='sales-returns')
def sales_returns():
    return render_template('pages/sales-returns.html')  

@app.route('/sales-tax', endpoint='sales-tax')
def sales_tax():
    return render_template('pages/sales-tax.html')  

@app.route('/search-list', endpoint='search-list')
def search_list():
    return render_template('pages/search-list.html')  

@app.route('/security-settings', endpoint='security-settings')
def security_settings():
    return render_template('pages/security-settings.html')  

@app.route('/shift', endpoint='shift')
def shift():
    return render_template('pages/shift.html')  

@app.route('/signatures', endpoint='signatures')
def signatures():
    return render_template('pages/signatures.html')  

@app.route('/signin', endpoint='signin')
def signin():
    return render_template('pages/signin.html')  

@app.route('/signin-2', endpoint='signin-2')
def signin_2():
    return render_template('pages/signin-2.html')  

@app.route('/signin-3', endpoint='signin-3')
def signin_3():
    return render_template('pages/signin-3.html')  

@app.route('/sms-gateway', endpoint='sms-gateway')
def sms_gateway():
    return render_template('pages/sms-gateway.html')  

@app.route('/sms-settings', endpoint='sms-settings')
def sms_settings():
    return render_template('pages/sms-settings.html')  

@app.route('/sms-templates', endpoint='sms-templates')
def sms_templates():
    return render_template('pages/sms-templates.html')  

@app.route('/social-authentication', endpoint='social-authentication')
def social_authentication():
    return render_template('pages/social-authentication.html')  

@app.route('/social-feed', endpoint='social-feed')
def social_feed():
    return render_template('pages/social-feed.html')  

@app.route('/sold-stock', endpoint='sold-stock')
def sold_stock():
    return render_template('pages/sold-stock.html')  

@app.route('/states', endpoint='states')
def states():
    return render_template('pages/states.html')  

@app.route('/stock-adjustment', endpoint='stock-adjustment')
def stock_adjustment():
    return render_template('pages/stock-adjustment.html')  

@app.route('/stock-history', endpoint='stock-history')
def stock_history():
    return render_template('pages/stock-history.html')  

@app.route('/stock-transfer', endpoint='stock-transfer')
def stock_transfer():
    return render_template('pages/stock-transfer.html')  

@app.route('/storage-settings', endpoint='storage-settings')
def storage_settings():
    return render_template('pages/storage-settings.html')  

@app.route('/store-list', endpoint='store-list')
def store_list():
    return render_template('pages/store-list.html')  

@app.route('/sub-categories', endpoint='sub-categories')
def sub_categories():
    return render_template('pages/sub-categories.html')  

@app.route('/subscription', endpoint='subscription')
def subscription():
    return render_template('pages/subscription.html')  

@app.route('/success', endpoint='success')
def success():
    return render_template('pages/success.html')  

@app.route('/success-2', endpoint='success-2')
def success_2():
    return render_template('pages/success-2.html')  

@app.route('/success-3', endpoint='success-3')
def success_3():
    return render_template('pages/success-3.html')  

@app.route('/supplier-due-report', endpoint='supplier-due-report')
def supplier_due_report():
    return render_template('pages/supplier-due-report.html')  

@app.route('/supplier-report', endpoint='supplier-report')
def supplier_report():
    return render_template('pages/supplier-report.html')  

@app.route('/suppliers', endpoint='suppliers')
def suppliers():
    return render_template('pages/suppliers.html')  

@app.route('/system-settings', endpoint='system-settings')
def system_settings():
    return render_template('pages/system-settings.html')  

@app.route('/tables-basic', endpoint='tables-basic')
def tables_basic():
    return render_template('pages/tables-basic.html')  

@app.route('/tax-rates', endpoint='tax-rates')
def tax_rates():
    return render_template('pages/tax-rates.html')  

@app.route('/tax-reports', endpoint='tax-reports')
def tax_reports():
    return render_template('pages/tax-reports.html')  

@app.route('/testimonials', endpoint='testimonials')
def testimonials():
    return render_template('pages/testimonials.html')  

@app.route('/todo', endpoint='todo')
def todo():
    return render_template('pages/todo.html')  

@app.route('/todo-list', endpoint='todo-list')
def todo_list():
    return render_template('pages/todo-list.html')  

@app.route('/trial-balance', endpoint='trial-balance')
def trial_balance():
    return render_template('pages/trial-balance.html')  

@app.route('/two-step-verification', endpoint='two-step-verification')
def two_step_verification():
    return render_template('pages/two-step-verification.html')  

@app.route('/two-step-verification-2', endpoint='two-step-verification-2')
def two_step_verification_2():
    return render_template('pages/two-step-verification-2.html')  

@app.route('/two-step-verification-3', endpoint='two-step-verification-3')
def two_step_verification_3():
    return render_template('pages/two-step-verification-3.html')  

@app.route('/ui-accordion', endpoint='ui-accordion')
def ui_accordion():
    return render_template('pages/ui-accordion.html')  

@app.route('/ui-alerts', endpoint='ui-alerts')
def ui_alerts():
    return render_template('pages/ui-alerts.html')  

@app.route('/ui-avatar', endpoint='ui-avatar')
def ui_avatar():
    return render_template('pages/ui-avatar.html')  

@app.route('/ui-badges', endpoint='ui-badges')
def ui_badges():
    return render_template('pages/ui-badges.html')  

@app.route('/ui-borders', endpoint='ui-borders')
def ui_borders():
    return render_template('pages/ui-borders.html')  

@app.route('/ui-breadcrumb', endpoint='ui-breadcrumb')
def ui_breadcrumb():
    return render_template('pages/ui-breadcrumb.html')  

@app.route('/ui-buttons', endpoint='ui-buttons')
def ui_buttons():
    return render_template('pages/ui-buttons.html')  

@app.route('/ui-buttons-group', endpoint='ui-buttons-group')
def ui_buttons_group():
    return render_template('pages/ui-buttons-group.html')  

@app.route('/ui-cards', endpoint='ui-cards')
def ui_cards():
    return render_template('pages/ui-cards.html')  

@app.route('/ui-carousel', endpoint='ui-carousel')
def ui_carousel():
    return render_template('pages/ui-carousel.html')  

@app.route('/ui-clipboard', endpoint='ui-clipboard')
def ui_clipboard():
    return render_template('pages/ui-clipboard.html')  

@app.route('/ui-colors', endpoint='ui-colors')
def ui_colors():
    return render_template('pages/ui-colors.html')  

@app.route('/ui-counter', endpoint='ui-counter')
def ui_counter():
    return render_template('pages/ui-counter.html')  

@app.route('/ui-drag-drop', endpoint='ui-drag-drop')
def ui_drag_drop():
    return render_template('pages/ui-drag-drop.html')  

@app.route('/ui-dropdowns', endpoint='ui-dropdowns')
def ui_dropdowns():
    return render_template('pages/ui-dropdowns.html')  

@app.route('/ui-grid', endpoint='ui-grid')
def ui_grid():
    return render_template('pages/ui-grid.html')  

@app.route('/ui-images', endpoint='ui-images')
def ui_images():
    return render_template('pages/ui-images.html')  

@app.route('/ui-lightbox', endpoint='ui-lightbox')
def ui_lightbox():
    return render_template('pages/ui-lightbox.html')  

@app.route('/ui-media', endpoint='ui-media')
def ui_media():
    return render_template('pages/ui-media.html')  

@app.route('/ui-modals', endpoint='ui-modals')
def ui_modals():
    return render_template('pages/ui-modals.html')  

@app.route('/ui-nav-tabs', endpoint='ui-nav-tabs')
def ui_nav_tabs():
    return render_template('pages/ui-nav-tabs.html')  

@app.route('/ui-offcanvas', endpoint='ui-offcanvas')
def ui_offcanvas():
    return render_template('pages/ui-offcanvas.html')  

@app.route('/ui-pagination', endpoint='ui-pagination')
def ui_pagination():
    return render_template('pages/ui-pagination.html')  

@app.route('/ui-placeholders', endpoint='ui-placeholders')
def ui_placeholders():
    return render_template('pages/ui-placeholders.html')  

@app.route('/ui-popovers', endpoint='ui-popovers')
def ui_popovers():
    return render_template('pages/ui-popovers.html')  

@app.route('/ui-progress', endpoint='ui-progress')
def ui_progress():
    return render_template('pages/ui-progress.html')    

@app.route('/ui-rangeslider', endpoint='ui-rangeslider')
def ui_rangeslider():
    return render_template('pages/ui-rangeslider.html')  

@app.route('/ui-rating', endpoint='ui-rating')
def ui_rating():
    return render_template('pages/ui-rating.html')  

@app.route('/ui-ribbon', endpoint='ui-ribbon')
def ui_ribbon():
    return render_template('pages/ui-ribbon.html')  

@app.route('/ui-scrollbar', endpoint='ui-scrollbar')
def ui_scrollbar():
    return render_template('pages/ui-scrollbar.html')  

@app.route('/ui-sortable', endpoint='ui-sortable')
def ui_sortable():
    return render_template('pages/ui-sortable.html')  

@app.route('/ui-spinner', endpoint='ui-spinner')
def ui_spinner():
    return render_template('pages/ui-spinner.html')  

@app.route('/ui-stickynote', endpoint='ui-stickynote')
def ui_stickynote():
    return render_template('pages/ui-stickynote.html')  

@app.route('/ui-sweetalerts', endpoint='ui-sweetalerts')
def ui_sweetalerts():
    return render_template('pages/ui-sweetalerts.html') 

@app.route('/ui-swiperjs', endpoint='ui-swiperjs')
def ui_swiperjs():
    return render_template('pages/ui-swiperjs.html')     

@app.route('/ui-text-editor', endpoint='ui-text-editor')
def ui_text_editor():
    return render_template('pages/ui-text-editor.html')  

@app.route('/ui-timeline', endpoint='ui-timeline')
def ui_timeline():
    return render_template('pages/ui-timeline.html')  

@app.route('/ui-toasts', endpoint='ui-toasts')
def ui_toasts():
    return render_template('pages/ui-toasts.html')  

@app.route('/ui-tooltips', endpoint='ui-tooltips')
def ui_tooltips():
    return render_template('pages/ui-tooltips.html')  

@app.route('/ui-typography', endpoint='ui-typography')
def ui_typography():
    return render_template('pages/ui-typography.html')  

@app.route('/ui-video', endpoint='ui-video')
def ui_video():
    return render_template('pages/ui-video.html')  

@app.route('/under-maintenance', endpoint='under-maintenance')
def under_maintenance():
    return render_template('pages/under-maintenance.html')  

@app.route('/units', endpoint='units')
def units():
    return render_template('pages/units.html')  

@app.route('/users', endpoint='users')
def users():
    return render_template('pages/users.html')  

@app.route('/varriant-attributes', endpoint='varriant-attributes')
def varriant_attributes():
    return render_template('pages/varriant-attributes.html')  

@app.route('/video-call', endpoint='video-call')
def video_call():
    return render_template('pages/video-call.html')  

@app.route('/warehouse', endpoint='warehouse')
def warehouse():
    return render_template('pages/warehouse.html')  

@app.route('/warranty', endpoint='warranty')
def warranty():
    return render_template('pages/warranty.html')  

@app.route('/wishlist', endpoint='wishlist')
def wishlist():
    return render_template('pages/wishlist.html')  
    
@app.context_processor
def inject_title():
    return {'title': generate_title()}