from django.shortcuts import render

# Create your views here.

# Authentication

def login(request):
    return render(request, 'pages/signin.html')

def signin_2(request):
    return render(request, 'pages/signin-2.html')

def signin_3(request):
    return render(request, 'pages/signin-3.html')

def register(request):
    return render(request, 'pages/register.html')

def register_2(request):
    return render(request, 'pages/register-2.html')

def register_3(request):
    return render(request, 'pages/register-3.html')

def forgot_password(request):
    return render(request, 'pages/forgot-password.html')

def forgot_password_2(request):
    return render(request, 'pages/forgot-password-2.html')

def forgot_password_3(request):
    return render(request, 'pages/forgot-password-3.html')

def reset_password(request):
    return render(request, 'pages/reset-password.html')

def reset_password_2(request):
    return render(request, 'pages/reset-password-2.html')

def reset_password_3(request):
    return render(request, 'pages/reset-password-3.html')

def email_verification(request):
    return render(request, 'pages/email-verification.html')

def email_verification_2(request):
    return render(request, 'pages/email-verification-2.html')

def email_verification_3(request):
    return render(request, 'pages/email-verification-3.html')

def success(request):
    return render(request, 'pages/success.html')

def success_2(request):
    return render(request, 'pages/success-2.html')

def success_3(request):
    return render(request, 'pages/success-3.html')

def two_step_verification(request):
    return render(request, 'pages/two-step-verification.html')

def two_step_verification_2(request):
    return render(request, 'pages/two-step-verification-2.html')

def two_step_verification_3(request):
    return render(request, 'pages/two-step-verification-3.html')

def error_404(request):
    return render(request, 'pages/error-404.html')

def error_500(request):
    return render(request, 'pages/error-500.html')

def coming_soon(request):
    return render(request, 'pages/coming-soon.html')

def under_maintenance(request):
    return render(request, 'pages/under-maintenance.html')


# Super Admin
 
def dashboard(request):
    return render(request, 'pages/dashboard.html')
 
def companies(request):
    return render(request, 'pages/companies.html')
 
def subscription(request):
    return render(request, 'pages/subscription.html')
 
def packages(request):
    return render(request, 'pages/packages.html')
 
def domain(request):
    return render(request, 'pages/domain.html')
 
def purchase_transaction(request):
    return render(request, 'pages/purchase-transaction.html')
 
# Application

def chat(request):
    return render(request, 'pages/chat.html')

def video_call(request):
    return render(request, 'pages/video-call.html')

def audio_call(request):
    return render(request, 'pages/audio-call.html')

def call_history(request):
    return render(request, 'pages/call-history.html')

def calendar(request):
    return render(request, 'pages/calendar.html')

def contacts(request):
    return render(request, 'pages/contacts.html')

def email(request):
    return render(request, 'pages/email.html')

def email_reply(request):
    return render(request, 'pages/email-reply.html')

def todo(request):
    return render(request, 'pages/todo.html')

def todo_list(request):
    return render(request, 'pages/todo-list.html')

def notes(request):
    return render(request, 'pages/notes.html')

def file_manager(request):
    return render(request, 'pages/file-manager.html')

def projects(request):
    return render(request, 'pages/projects.html')

def products(request):
    return render(request, 'pages/products.html')

def orders(request):
    return render(request, 'pages/orders.html')

def customers(request):
    return render(request, 'pages/customers.html')

def cart(request):
    return render(request, 'pages/cart.html')

def checkout(request):
    return render(request, 'pages/checkout.html')

def wishlist(request):
    return render(request, 'pages/wishlist.html')

def reviews(request):
    return render(request, 'pages/reviews.html')

def social_feed(request):
    return render(request, 'pages/social-feed.html')

def search_list(request):
    return render(request, 'pages/search-list.html')

def layout_horizontal(request):
    return render(request, 'pages/layout-horizontal.html')

def layout_detached(request):
    return render(request, 'pages/layout-detached.html')

def layout_two_column(request):
    return render(request, 'pages/layout-two-column.html')

def layout_hovered(request):
    return render(request, 'pages/layout-hovered.html')

def layout_boxed(request):
    return render(request, 'pages/layout-boxed.html')

def layout_dark(request):
    return render(request, 'pages/layout-dark.html')

def layout_rtl(request):
    return render(request, 'pages/layout-rtl.html')

    # Inventory

def product_list(request):
    return render(request, 'pages/product-list.html')

def add_product(request):
    return render(request, 'pages/add-product.html')

def edit_product(request):
    return render(request, 'pages/edit-product.html')

def product_details(request):
    return render(request, 'pages/product-details.html')

def expired_products(request):
    return render(request, 'pages/expired-products.html')

def low_stocks(request):
    return render(request, 'pages/low-stocks.html')

def category_list(request):
    return render(request, 'pages/category-list.html')

def sub_categories(request):
    return render(request, 'pages/sub-categories.html')

def brand_list(request):
    return render(request, 'pages/brand-list.html')

def units(request):
    return render(request, 'pages/units.html')

def varriant_attributes(request):
    return render(request, 'pages/varriant-attributes.html')

def warranty(request):
    return render(request, 'pages/warranty.html')

def barcode(request):
    return render(request, 'pages/barcode.html')

def qrcode(request):
    return render(request, 'pages/qrcode.html')

# Stocks

def manage_stocks(request):
    return render(request, 'pages/manage-stocks.html')

def stock_adjustment(request):
    return render(request, 'pages/stock-adjustment.html')

def stock_transfer(request):
    return render(request, 'pages/stock-transfer.html')

# Sales

def online_orders(request):
    return render(request, 'pages/online-orders.html')

def pos_orders(request):
    return render(request, 'pages/pos-orders.html')

def invoice(request):
    return render(request, 'pages/invoice.html')

def invoice_details(request):
    return render(request, 'pages/invoice-details.html')

def sales_returns(request):
    return render(request, 'pages/sales-returns.html')

def quotation_list(request):
    return render(request, 'pages/quotation-list.html')

def pos(request):
    return render(request, 'pages/pos.html')

def pos_2(request):
    return render(request, 'pages/pos-2.html')

def pos_3(request):
    return render(request, 'pages/pos-3.html')

def pos_4(request):
    return render(request, 'pages/pos-4.html')

def pos_5(request):
    return render(request, 'pages/pos-5.html')

# Promo

def coupons(request):
    return render(request, 'pages/coupons.html')

def gift_cards(request):
    return render(request, 'pages/gift-cards.html')

def discount_plan(request):
    return render(request, 'pages/discount-plan.html')

def discount(request):
    return render(request, 'pages/discount.html')

# Purchases

def purchase_list(request):
    return render(request, 'pages/purchase-list.html')

def purchase_order_report(request):
    return render(request, 'pages/purchase-order-report.html')

def purchase_returns(request):
    return render(request, 'pages/purchase-returns.html')


# Finance & Accounts

def expense_list(request):
    return render(request, 'pages/expense-list.html')

def expense_category(request):
    return render(request, 'pages/expense-category.html')

def income(request):
    return render(request, 'pages/income.html')

def income_category(request):
    return render(request, 'pages/income-category.html')

def account_list(request):
    return render(request, 'pages/account-list.html')

def money_transfer(request):
    return render(request, 'pages/money-transfer.html')

def balance_sheet(request):
    return render(request, 'pages/balance-sheet.html')

def balance_sheet_v2(request):
    return render(request, 'pages/balance-sheet-v2.html')

def trial_balance(request):
    return render(request, 'pages/trial-balance.html')

def cash_flow(request):
    return render(request, 'pages/cash-flow.html')

def cash_flow_v2(request):
    return render(request, 'pages/cash-flow-v2.html')

def account_statement(request):
    return render(request, 'pages/account-statement.html')

# Pepoles

def billers(request):
    return render(request, 'pages/billers.html')

def suppliers(request):
    return render(request, 'pages/suppliers.html')

def store_list(request):
    return render(request, 'pages/store-list.html')

def warehouse(request):
    return render(request, 'pages/warehouse.html')

# HRM

def employees_grid(request):
    return render(request, 'pages/employees-grid.html')

def add_employee(request):
    return render(request, 'pages/add-employee.html')

def edit_employee(request):
    return render(request, 'pages/edit-employee.html')

def employee_details(request):
    return render(request, 'pages/employee-details.html')

def employees_list(request):
    return render(request, 'pages/employees-list.html')

def department_grid(request):
    return render(request, 'pages/department-grid.html')

def department_list(request):
    return render(request, 'pages/department-list.html')

def designation(request):
    return render(request, 'pages/designation.html')

def shift(request):
    return render(request, 'pages/shift.html')

def attendance_employee(request):
    return render(request, 'pages/attendance-employee.html')

def attendance_admin(request):
    return render(request, 'pages/attendance-admin.html')

def leaves_admin(request):
    return render(request, 'pages/leaves-admin.html')

def leaves_employee(request):
    return render(request, 'pages/leaves-employee.html')

def leave_types(request):
    return render(request, 'pages/leave-types.html')

def holidays(request):
    return render(request, 'pages/holidays.html')

def employee_salary(request):
    return render(request, 'pages/employee-salary.html')

def payslip(request):
    return render(request, 'pages/payslip.html')

# Reports

def sales_report(request):
    return render(request, 'pages/sales-report.html')

def best_seller(request):
    return render(request, 'pages/best-seller.html')

def purchase_report(request):
    return render(request, 'pages/purchase-report.html')

def inventory_report(request):
    return render(request, 'pages/inventory-report.html')

def stock_history(request):
    return render(request, 'pages/stock-history.html')

def sold_stock(request):
    return render(request, 'pages/sold-stock.html')

def invoice_report(request):
    return render(request, 'pages/invoice-report.html')

def supplier_report(request):
    return render(request, 'pages/supplier-report.html')

def supplier_due_report(request):
    return render(request, 'pages/supplier-due-report.html')

def customer_report(request):
    return render(request, 'pages/customer-report.html')

def customer_due_report(request):
    return render(request, 'pages/customer-due-report.html')

def product_report(request):
    return render(request, 'pages/product-report.html')

def product_expiry_report(request):
    return render(request, 'pages/product-expiry-report.html')

def product_quantity_alert(request):
    return render(request, 'pages/product-quantity-alert.html')

def expense_report(request):
    return render(request, 'pages/expense-report.html')

def income_report(request):
    return render(request, 'pages/income-report.html')

def tax_reports(request):
    return render(request, 'pages/tax-reports.html')

def sales_tax(request):
    return render(request, 'pages/sales-tax.html')

def profit_and_loss(request):
    return render(request, 'pages/profit-and-loss.html')

def annual_report(request):
    return render(request, 'pages/annual-report.html')

# Content

def pages(request):
    return render(request, 'pages/pages.html')

def all_blog(request):
    return render(request, 'pages/all-blog.html')

def blog_tag(request):
    return render(request, 'pages/blog-tag.html')

def blog_categories(request):
    return render(request, 'pages/blog-categories.html')

def blog_comments(request):
    return render(request, 'pages/blog-comments.html')

def countries(request):
    return render(request, 'pages/countries.html')

def states(request):
    return render(request, 'pages/states.html')

def cities(request):
    return render(request, 'pages/cities.html')

def testimonials(request):
    return render(request, 'pages/testimonials.html')

def faq(request):
    return render(request, 'pages/faq.html')

# User Management

def users(request):
    return render(request, 'pages/users.html')

def roles_permissions(request):
    return render(request, 'pages/roles-permissions.html')

def permissions(request):
    return render(request, 'pages/permissions.html')

def delete_account(request):
    return render(request, 'pages/delete-account.html')

# Pages

def profile(request):
    return render(request, 'pages/profile.html')

def blank_page(request):
    return render(request, 'pages/blank-page.html')

def pricing(request):
    return render(request, 'pages/pricing.html')

# Settings

def general_settings(request):
    return render(request, 'pages/general-settings.html')

def security_settings(request):
    return render(request, 'pages/security-settings.html')

def notification(request):
    return render(request, 'pages/notification.html')

def connected_apps(request):
    return render(request, 'pages/connected-apps.html')

def system_settings(request):
    return render(request, 'pages/system-settings.html')

def company_settings(request):
    return render(request, 'pages/company-settings.html')

def localization_settings(request):
    return render(request, 'pages/localization-settings.html')

def prefixes(request):
    return render(request, 'pages/prefixes.html')

def preference(request):
    return render(request, 'pages/preference.html')

def appearance(request):
    return render(request, 'pages/appearance.html')

def social_authentication(request):
    return render(request, 'pages/social-authentication.html')

def language_settings(request):
    return render(request, 'pages/language-settings.html')

def language_settings_web(request):
    return render(request, 'pages/language-settings-web.html')

def invoice_settings(request):
    return render(request, 'pages/invoice-settings.html')

def invoice_template(request):
    return render(request, 'pages/invoice-template.html')

def printer_settings(request):
    return render(request, 'pages/printer-settings.html')

def pos_settings(request):
    return render(request, 'pages/pos-settings.html')

def custom_fields(request):
    return render(request, 'pages/custom-fields.html')

def signatures(request):
    return render(request, 'pages/signatures.html')

def email_settings(request):
    return render(request, 'pages/email-settings.html')

def email_templates(request):
    return render(request, 'pages/email-templates.html')

def sms_settings(request):
    return render(request, 'pages/sms-settings.html')
    
def sms_templates(request):
    return render(request, 'pages/sms-templates.html')
    
def otp_settings(request):
    return render(request, 'pages/otp-settings.html')
    
def gdpr_settings(request):
    return render(request, 'pages/gdpr-settings.html')
    
def payment_gateway_settings(request):
    return render(request, 'pages/payment-gateway-settings.html')
    
def bank_settings_grid(request):
    return render(request, 'pages/bank-settings-grid.html')

def tax_rates(request):
    return render(request, 'pages/tax-rates.html')
    
def currency_settings(request):
    return render(request, 'pages/currency-settings.html')
    
def storage_settings(request):
    return render(request, 'pages/storage-settings.html')
    
def ban_ip_address(request):
    return render(request, 'pages/ban-ip-address.html')
    
#    Base UI

def ui_alerts(request):
    return render(request, 'pages/ui-alerts.html')

def ui_accordion(request):
    return render(request, 'pages/ui-accordion.html')

def ui_avatar(request):
    return render(request, 'pages/ui-avatar.html')

def ui_badges(request):
    return render(request, 'pages/ui-badges.html')

def ui_borders(request):
    return render(request, 'pages/ui-borders.html')

def ui_buttons(request):
    return render(request, 'pages/ui-buttons.html')

def ui_buttons_group(request):
    return render(request, 'pages/ui-buttons-group.html')

def ui_breadcrumb(request):
    return render(request, 'pages/ui-breadcrumb.html')

def ui_cards(request):
    return render(request, 'pages/ui-cards.html')

def ui_carousel(request):
    return render(request, 'pages/ui-carousel.html')

def ui_colors(request):
    return render(request, 'pages/ui-colors.html')

def ui_dropdowns(request):
    return render(request, 'pages/ui-dropdowns.html')

def ui_grid(request):
    return render(request, 'pages/ui-grid.html')

def ui_images(request):
    return render(request, 'pages/ui-images.html')

def ui_lightbox(request):
    return render(request, 'pages/ui-lightbox.html')

def ui_media(request):
    return render(request, 'pages/ui-media.html')

def ui_modals(request):
    return render(request, 'pages/ui-modals.html')

def ui_offcanvas(request):
    return render(request, 'pages/ui-offcanvas.html')

def ui_pagination(request):
    return render(request, 'pages/ui-pagination.html')

def ui_popovers(request):
    return render(request, 'pages/ui-popovers.html')

def ui_progress(request):
    return render(request, 'pages/ui-progress.html')

def ui_placeholders(request):
    return render(request, 'pages/ui-placeholders.html')

def ui_rangeslider(request):
    return render(request, 'pages/ui-rangeslider.html')

def ui_spinner(request):
    return render(request, 'pages/ui-spinner.html')

def ui_sweetalerts(request):
    return render(request, 'pages/ui-sweetalerts.html')

def ui_nav_tabs(request):
    return render(request, 'pages/ui-nav-tabs.html')

def ui_toasts(request):
    return render(request, 'pages/ui-toasts.html')

def ui_tooltips(request):
    return render(request, 'pages/ui-tooltips.html')

def ui_typography(request):
    return render(request, 'pages/ui-typography.html')

def ui_video(request):
    return render(request, 'pages/ui-video.html')

def ui_sortable(request):
    return render(request, 'pages/ui-sortable.html')

def ui_swiperjs(request):
    return render(request, 'pages/ui-swiperjs.html')

# Advanced UI

def ui_ribbon(request):
    return render(request, 'pages/ui-ribbon.html')

def ui_clipboard(request):
    return render(request, 'pages/ui-clipboard.html')

def ui_drag_drop(request):
    return render(request, 'pages/ui-drag-drop.html')

def ui_rating(request):
    return render(request, 'pages/ui-rating.html')

def ui_text_editor(request):
    return render(request, 'pages/ui-text-editor.html')

def ui_counter(request):
    return render(request, 'pages/ui-counter.html')

def ui_scrollbar(request):
    return render(request, 'pages/ui-scrollbar.html')

def ui_stickynote(request):
    return render(request, 'pages/ui-stickynote.html')

def ui_timeline(request):
    return render(request, 'pages/ui-timeline.html')

def chart_apex(request):
    return render(request, 'pages/chart-apex.html')

def chart_c3(request):
    return render(request, 'pages/chart-c3.html')

def chart_js(request):
    return render(request, 'pages/chart-js.html')

def chart_js(request):
    return render(request, 'pages/chart-js.html')

def chart_morris(request):
    return render(request, 'pages/chart-morris.html')

def chart_flot(request):
    return render(request, 'pages/chart-flot.html')

def chart_peity(request):
    return render(request, 'pages/chart-peity.html')

# Icons

def icon_fontawesome(request):
    return render(request, 'pages/icon-fontawesome.html')

def icon_feather(request):
    return render(request, 'pages/icon-feather.html')

def icon_ionic(request):
    return render(request, 'pages/icon-ionic.html')

def icon_material(request):
    return render(request, 'pages/icon-material.html')

def icon_pe7(request):
    return render(request, 'pages/icon-pe7.html')

def icon_simpleline(request):
    return render(request, 'pages/icon-simpleline.html')

def icon_themify(request):
    return render(request, 'pages/icon-themify.html')

def icon_weather(request):
    return render(request, 'pages/icon-weather.html')

def icon_typicon(request):
    return render(request, 'pages/icon-typicon.html')

def icon_flag(request):
    return render(request, 'pages/icon-flag.html')

def icon_tabler(request):
    return render(request, 'pages/icon-tabler.html')

def icon_bootstrap(request):
    return render(request, 'pages/icon-bootstrap.html')

def icon_remix(request):
    return render(request, 'pages/icon-remix.html')


# Forms 

def form_basic_inputs(request):
    return render(request, 'pages/form-basic-inputs.html')

def form_checkbox_radios(request):
    return render(request, 'pages/form-checkbox-radios.html')

def form_input_groups(request):
    return render(request, 'pages/form-input-groups.html')

def form_grid_gutters(request):
    return render(request, 'pages/form-grid-gutters.html')

def form_select(request):
    return render(request, 'pages/form-select.html')

def form_mask(request):
    return render(request, 'pages/form-mask.html')

def form_fileupload(request):
    return render(request, 'pages/form-fileupload.html')

def form_horizontal(request):
    return render(request, 'pages/form-horizontal.html')

def form_vertical(request):
    return render(request, 'pages/form-vertical.html')

def form_floating_labels(request):
    return render(request, 'pages/form-floating-labels.html')

def form_validation(request):
    return render(request, 'pages/form-validation.html')

def form_select2(request):
    return render(request, 'pages/form-select2.html')

def form_wizard(request):
    return render(request, 'pages/form-wizard.html')

def form_pickers(request):
    return render(request, 'pages/form-pickers.html')

# Tables

def tables_basic(request):
    return render(request, 'pages/tables-basic.html')

def data_tables(request):
    return render(request, 'pages/data-tables.html')

# Maps

def maps_vector(request):
    return render(request, 'pages/maps-vector.html')

def maps_leaflet(request):
    return render(request, 'pages/maps-leaflet.html')