"""
URL configuration for dreamspos project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from apps import views as app_views
from dashboard import views as dashboard_views

urlpatterns = [
    path('admin/', admin.site.urls),

    # Authentication
    
    path('signin', app_views.login, name='signin'),
    path('signin-2', app_views.signin_2, name='signin-2'),
    path('signin-3', app_views.signin_3, name='signin-3'),
    path('register', app_views.register, name='register'),
    path('register-2', app_views.register_2, name='register-2'),
    path('register-3', app_views.register_3, name='register-3'),
    path('forgot-password', app_views.forgot_password, name='forgot-password'),
    path('forgot-password-2', app_views.forgot_password_2, name='forgot-password-2'),
    path('forgot-password-3', app_views.forgot_password_3, name='forgot-password-3'),
    path('reset-password', app_views.reset_password, name='reset-password'),
    path('reset-password-2', app_views.reset_password_2, name='reset-password-2'),
    path('reset-password-3', app_views.reset_password_3, name='reset-password-3'),
    path('email-verification', app_views.email_verification, name='email-verification'),
    path('email-verification-2', app_views.email_verification_2, name='email-verification-2'),
    path('email-verification-3', app_views.email_verification_3, name='email-verification-3'),
    path('success', app_views.success, name='success'),
    path('success-2', app_views.success_2, name='success-2'),
    path('success-3', app_views.success_3, name='success-3'),
    path('two-step-verification', app_views.two_step_verification, name='two-step-verification'),
    path('two-step-verification-2', app_views.two_step_verification_2, name='two-step-verification-2'),
    path('two-step-verification-3', app_views.two_step_verification_3, name='two-step-verification-3'),
    path('error-404', app_views.error_404, name='error-404'),
    path('error-500', app_views.error_500, name='error-500'),
    path('coming-soon', app_views.coming_soon, name='coming-soon'),
    path('under-maintenance', app_views.under_maintenance, name='under-maintenance'),


    # Main menu 

    path('index', dashboard_views.index, name='index'),
    path('admin-dashboard', dashboard_views.admin_dashboard, name='admin_dashboard'),
    path('sales-dashboard', dashboard_views.sales_dashboard, name='sales_dashboard'),
    
    path('dashboard', app_views.dashboard, name='dashboard'),
    path('companies', app_views.companies, name='companies'),
    path('subscription', app_views.subscription, name='subscription'),
    path('packages', app_views.packages, name='packages'),
    path('domain', app_views.domain, name='domain'),
    path('purchase-transaction', app_views.purchase_transaction, name='purchase-transaction'),

    path('chat', app_views.chat, name='chat'),
    path('video-call', app_views.video_call, name='video-call'),
    path('audio-call', app_views.audio_call, name='audio-call'),
    path('call-history', app_views.call_history, name='call-history'),
    path('calendar', app_views.calendar, name='calendar'),
    path('contacts', app_views.contacts, name='contacts'),
    path('email', app_views.email, name='email'),
    path('email-reply', app_views.email_reply, name='email-reply'),
    path('todo', app_views.todo, name='todo'),
    path('todo-list', app_views.todo_list, name='todo-list'),
    path('notes', app_views.notes, name='notes'),
    path('file-manager', app_views.file_manager, name='file-manager'),
    path('projects', app_views.projects, name='projects'),
    path('products', app_views.products, name='products'),
    path('orders', app_views.orders, name='orders'),
    path('customers', app_views.customers, name='customers'),
    path('cart', app_views.cart, name='cart'),
    path('checkout', app_views.checkout, name='checkout'),
    path('wishlist', app_views.wishlist, name='wishlist'),
    path('reviews', app_views.reviews, name='reviews'),
    path('social-feed', app_views.social_feed, name='social-feed'),
    path('search-list', app_views.search_list, name='search-list'),

    path('layout-horizontal', app_views.layout_horizontal, name='layout-horizontal'),
    path('layout-detached', app_views.layout_detached, name='layout-detached'),
    path('layout-two-column', app_views.layout_two_column, name='layout-two-column'),
    path('layout-hovered', app_views.layout_hovered, name='layout-hovered'),
    path('layout-boxed', app_views.layout_boxed, name='layout-boxed'),
    path('layout-dark', app_views.layout_dark, name='layout-dark'),
    path('layout-rtl', app_views.layout_rtl, name='layout-rtl'),

    # Inventory

    path('product-list', app_views.product_list, name='product-list'),
    path('add-product', app_views.add_product, name='add-product'),
    path('edit-product', app_views.edit_product, name='edit-product'),
    path('product-details', app_views.product_details, name='product-details'),
    path('expired-products', app_views.expired_products, name='expired-products'),
    path('low-stocks', app_views.low_stocks, name='low-stocks'),
    path('category-list', app_views.category_list, name='category-list'),
    path('sub-categories', app_views.sub_categories, name='sub-categories'),
    path('brand-list', app_views.brand_list, name='brand-list'),
    path('units', app_views.units, name='units'),
    path('varriant-attributes', app_views.varriant_attributes, name='varriant-attributes'),
    path('warranty', app_views.warranty, name='warranty'),
    path('barcode', app_views.barcode, name='barcode'),
    path('qrcode', app_views.qrcode, name='qrcode'),

    # Stocks

    path('manage-stocks', app_views.manage_stocks, name='manage-stocks'),
    path('stock-adjustment', app_views.stock_adjustment, name='stock-adjustment'),
    path('stock-transfer', app_views.stock_transfer, name='stock-transfer'),

    # Sales

    path('online-orders', app_views.online_orders, name='online-orders'),
    path('pos-orders', app_views.pos_orders, name='pos-orders'),
    path('invoice', app_views.invoice, name='invoice'),
    path('invoice-details', app_views.invoice_details, name='invoice-details'),
    path('sales-returns', app_views.sales_returns, name='sales-returns'),
    path('quotation-list', app_views.quotation_list, name='quotation-list'),
    path('pos', app_views.pos, name='pos'),
    path('pos-2', app_views.pos_2, name='pos-2'),   
    path('pos-3', app_views.pos_3, name='pos-3'),
    path('pos-4', app_views.pos_4, name='pos-4'),
    path('pos-5', app_views.pos_5, name='pos-5'),

    # Promo

    path('coupons', app_views.coupons, name='coupons'),
    path('gift-cards', app_views.gift_cards, name='gift-cards'),
    path('discount-plan', app_views.discount_plan, name='discount-plan'),
    path('discount', app_views.discount, name='discount'),

    # Purchases

    path('purchase-list', app_views.purchase_list, name='purchase-list'),
    path('purchase-order-report', app_views.purchase_order_report, name='purchase-order-report'),
    path('purchase-returns', app_views.purchase_returns, name='purchase-returns'),

    # Finance & Accounts

    path('expense-list', app_views.expense_list, name='expense-list'),
    path('expense-category', app_views.expense_category, name='expense-category'),
    path('income', app_views.income, name='income'),
    path('income-category', app_views.income_category, name='income-category'),
    path('account-list', app_views.account_list, name='account-list'),
    path('money-transfer', app_views.money_transfer, name='money-transfer'),
    path('balance-sheet', app_views.balance_sheet, name='balance-sheet'),
    path('balance-sheet-v2', app_views.balance_sheet_v2, name='balance-sheet-v2'),
    path('trial-balance', app_views.trial_balance, name='trial-balance'),
    path('cash-flow', app_views.cash_flow, name='cash-flow'),
    path('cash-flow-v2', app_views.cash_flow_v2, name='cash-flow-v2'),
    path('account-statement', app_views.account_statement, name='account-statement'),

    # Peoples

    path('billers', app_views.billers, name='billers'),
    path('suppliers', app_views.suppliers, name='suppliers'),
    path('store-list', app_views.store_list, name='store-list'),
    path('warehouse', app_views.warehouse, name='warehouse'),

    # HRM

    path('employees-grid', app_views.employees_grid, name='employees-grid'),
    path('add-employee', app_views.add_employee, name='add-employee'),
    path('edit-employee', app_views.edit_employee, name='edit-employee'),
    path('employee-details', app_views.employee_details, name='employee-details'),
    path('employees-list', app_views.employees_list, name='employees-list'),
    path('department-grid', app_views.department_grid, name='department-grid'),
    path('department-list', app_views.department_list, name='department-list'),
    path('designation', app_views.designation, name='designation'),
    path('shift', app_views.shift, name='shift'),
    path('attendance-employee', app_views.attendance_employee, name='attendance-employee'),
    path('attendance-admin', app_views.attendance_admin, name='attendance-admin'),
    path('leaves-admin', app_views.leaves_admin, name='leaves-admin'),
    path('leaves-employee', app_views.leaves_employee, name='leaves-employee'),
    path('leave-types', app_views.leave_types, name='leave-types'),
    path('holidays', app_views.holidays, name='holidays'),
    path('employee-salary', app_views.employee_salary, name='employee-salary'),
    path('payslip', app_views.payslip, name='payslip'),

    # Reports

    path('sales-report', app_views.sales_report, name='sales-report'),
    path('best-seller', app_views.best_seller, name='best-seller'),
    path('purchase-report', app_views.best_seller, name='purchase-report'),
    path('inventory-report', app_views.inventory_report, name='inventory-report'),
    path('stock-history', app_views.stock_history, name='stock-history'),
    path('sold-stock', app_views.sold_stock, name='sold-stock'),
    path('invoice-report', app_views.invoice_report, name='invoice-report'),
    path('supplier-report', app_views.supplier_report, name='supplier-report'),
    path('supplier-due-report', app_views.supplier_due_report, name='supplier-due-report'),
    path('customer-report', app_views.customer_report, name='customer-report'),
    path('customer-due-report', app_views.customer_due_report, name='customer-due-report'),
    path('product-report', app_views.product_report, name='product-report'),
    path('product-expiry-report', app_views.product_expiry_report, name='product-expiry-report'),
    path('product-quantity-alert', app_views.product_quantity_alert, name='product-quantity-alert'),
    path('expense-report', app_views.expense_report, name='expense-report'),
    path('income-report', app_views.income_report, name='income-report'),
    path('tax-reports', app_views.tax_reports, name='tax-reports'),
    path('sales-tax', app_views.sales_tax, name='sales-tax'),
    path('profit-and-loss', app_views.profit_and_loss, name='profit-and-loss'),
    path('annual-report', app_views.annual_report, name='annual-report'),

    # Content

    path('pages', app_views.pages, name='pages'),
    path('all-blog', app_views.all_blog, name='all-blog'),
    path('blog-tag', app_views.blog_tag, name='blog-tag'),
    path('blog-categories', app_views.blog_categories, name='blog-categories'),
    path('blog-comments', app_views.blog_comments, name='blog-comments'),
    path('countries', app_views.countries, name='countries'),
    path('states', app_views.states, name='states'),
    path('cities', app_views.cities, name='cities'),
    path('testimonials', app_views.testimonials, name='testimonials'),
    path('faq', app_views.faq, name='faq'),


    # User Management
    path('users', app_views.users, name='users'),
    path('roles-permissions', app_views.roles_permissions, name='roles-permissions'),
    path('permissions', app_views.permissions, name='permissions'),
    path('delete-account', app_views.delete_account, name='delete-account'),


    # Pages

    path('profile', app_views.profile, name='profile'),
    path('blank-page', app_views.blank_page, name='blank-page'),
    path('pricing', app_views.pricing, name='pricing'),


    # Settings

    path('general-settings', app_views.general_settings, name='general-settings'),
    path('security-settings', app_views.security_settings, name='security-settings'),
    path('notification', app_views.notification, name='notification'),
    path('connected-apps', app_views.connected_apps, name='connected-apps'),
    path('system-settings', app_views.system_settings, name='system-settings'),
    path('company-settings', app_views.company_settings, name='company-settings'),
    path('localization-settings', app_views.localization_settings, name='localization-settings'),
    path('prefixes', app_views.prefixes, name='prefixes'),
    path('preference', app_views.preference, name='preference'),
    path('appearance', app_views.appearance, name='appearance'),
    path('social-authentication', app_views.social_authentication, name='social-authentication'),
    path('language-settings', app_views.language_settings, name='language-settings'),
    path('language-settings-web', app_views.language_settings_web, name='language-settings-web'),
    path('invoice-settings', app_views.invoice_settings, name='invoice-settings'),
    path('invoice-template', app_views.invoice_template, name='invoice-template'),
    path('printer-settings', app_views.printer_settings, name='printer-settings'),
    path('pos-settings', app_views.pos_settings, name='pos-settings'),
    path('custom-fields', app_views.custom_fields, name='custom-fields'),
    path('signatures', app_views.signatures, name='signatures'),
    path('email-settings', app_views.email_settings, name='email-settings'),
    path('sms-settings', app_views.sms_settings, name='sms-settings'),
    path('sms-templates', app_views.sms_templates, name='sms-templates'),
    path('otp-settings', app_views.otp_settings, name='otp-settings'),
    path('gdpr-settings', app_views.gdpr_settings, name='gdpr-settings'),
    path('payment-gateway-settings', app_views.payment_gateway_settings, name='payment-gateway-settings'),
    path('bank-settings-grid', app_views.bank_settings_grid, name='bank-settings-grid'),
    path('tax-rates', app_views.tax_rates, name='tax-rates'),
    path('currency-settings', app_views.currency_settings, name='currency-settings'),
    path('storage-settings', app_views.storage_settings, name='storage-settings'),
    path('ban-ip-address', app_views.ban_ip_address, name='ban-ip-address'),

    # Base UI

    path('ui-alerts', app_views.ui_alerts, name='ui-alerts'),
    path('ui-accordion', app_views.ui_accordion, name='ui-accordion'),
    path('ui-avatar', app_views.ui_avatar, name='ui-avatar'),
    path('ui-badges', app_views.ui_badges, name='ui-badges'),
    path('ui-borders', app_views.ui_borders, name='ui-borders'),
    path('ui-buttons', app_views.ui_buttons, name='ui-buttons'),
    path('ui-buttons-group', app_views.ui_buttons_group, name='ui-buttons-group'),
    path('ui-breadcrumb', app_views.ui_breadcrumb, name='ui-breadcrumb'),
    path('ui-cards', app_views.ui_cards, name='ui-cards'),
    path('ui-carousel', app_views.ui_carousel, name='ui-carousel'),
    path('ui-colors', app_views.ui_colors, name='ui-colors'),
    path('ui-dropdowns', app_views.ui_dropdowns, name='ui-dropdowns'),
    path('ui-grid', app_views.ui_grid, name='ui-grid'),
    path('ui-images', app_views.ui_images, name='ui-images'),
    path('ui-lightbox', app_views.ui_lightbox, name='ui-lightbox'),
    path('ui-media', app_views.ui_media, name='ui-media'),
    path('ui-modals', app_views.ui_modals, name='ui-modals'),
    path('ui-offcanvas', app_views.ui_offcanvas, name='ui-offcanvas'),
    path('ui-pagination', app_views.ui_pagination, name='ui-pagination'),
    path('ui-popovers', app_views.ui_popovers, name='ui-popovers'),
    path('ui-progress', app_views.ui_progress, name='ui-progress'),
    path('ui-placeholders', app_views.ui_placeholders, name='ui-placeholders'),
    path('ui-rangeslider', app_views.ui_rangeslider, name='ui-rangeslider'),
    path('ui-spinner', app_views.ui_spinner, name='ui-spinner'),
    path('ui-sweetalerts', app_views.ui_sweetalerts, name='ui-sweetalerts'),
    path('ui-nav-tabs', app_views.ui_nav_tabs, name='ui-nav-tabs'),
    path('ui-toasts', app_views.ui_toasts, name='ui-toasts'),
    path('ui-tooltips', app_views.ui_tooltips, name='ui-tooltips'),
    path('ui-typography', app_views.ui_typography, name='ui-typography'),
    path('ui-video', app_views.ui_video, name='ui-video'),
    path('ui-sortable', app_views.ui_sortable, name='ui-sortable'),
    path('ui-swiperjs', app_views.ui_swiperjs, name='ui-swiperjs'),


    # Advanced UI

    path('ui-ribbon', app_views.ui_ribbon, name='ui-ribbon'),
    path('ui-clipboard', app_views.ui_clipboard, name='ui-clipboard'),
    path('ui-drag-drop', app_views.ui_drag_drop, name='ui-drag-drop'),
    path('ui-rating', app_views.ui_rating, name='ui-rating'),
    path('ui-text-editor', app_views.ui_text_editor, name='ui-text-editor'),
    path('ui-counter', app_views.ui_counter, name='ui-counter'),
    path('ui-scrollbar', app_views.ui_scrollbar, name='ui-scrollbar'),
    path('ui-stickynote', app_views.ui_stickynote, name='ui-stickynote'),
    path('ui-timeline', app_views.ui_timeline, name='ui-timeline'),


    # Charts

    path('chart-apex', app_views.chart_apex, name='chart-apex'),
    path('chart-c3', app_views.chart_c3, name='chart-c3'),
    path('chart-js', app_views.chart_js, name='chart-js'),
    path('chart-morris', app_views.chart_morris, name='chart-morris'),
    path('chart-flot', app_views.chart_flot, name='chart-flot'),
    path('chart-peity', app_views.chart_peity, name='chart-peity'),


    # Icons

    path('icon-fontawesome', app_views.icon_fontawesome, name='icon-fontawesome'),
    path('icon-feather', app_views.icon_feather, name='icon-feather'),
    path('icon-ionic', app_views.icon_ionic, name='icon-ionic'),
    path('icon-material', app_views.icon_material, name='icon-material'),
    path('icon-pe7', app_views.icon_pe7, name='icon-pe7'),
    path('icon-simpleline', app_views.icon_simpleline, name='icon-simpleline'),
    path('icon-themify', app_views.icon_themify, name='icon-themify'),
    path('icon-weather', app_views.icon_weather, name='icon-weather'),
    path('icon-typicon', app_views.icon_typicon, name='icon-typicon'),
    path('icon-flag', app_views.icon_flag, name='icon-flag'),
    path('icon-tabler', app_views.icon_tabler, name='icon-tabler'),
    path('icon-bootstrap', app_views.icon_bootstrap, name='icon-bootstrap'),
    path('icon-remix', app_views.icon_remix, name='icon-remix'),


    # Forms

    path('form-basic-inputs', app_views.form_basic_inputs, name='form-basic-inputs'),
    path('form-checkbox-radios', app_views.form_checkbox_radios, name='form-checkbox-radios'),
    path('form-input-groups', app_views.form_input_groups, name='form-input-groups'),
    path('form-grid-gutters', app_views.form_grid_gutters, name='form-grid-gutters'),
    path('form-select', app_views.form_select, name='form-select'),
    path('form-mask', app_views.form_mask, name='form-mask'),
    path('form-fileupload', app_views.form_fileupload, name='form-fileupload'),
    path('form-horizontal', app_views.form_horizontal, name='form-horizontal'),
    path('form-vertical', app_views.form_vertical, name='form-vertical'),
    path('form-floating-labels', app_views.form_floating_labels, name='form-floating-labels'),
    path('form-validation', app_views.form_validation, name='form-validation'),
    path('form-select2', app_views.form_select2, name='form-select2'),
    path('form-wizard', app_views.form_wizard, name='form-wizard'),
    path('form-pickers', app_views.form_pickers, name='form-pickers'),

    # Tables

    path('tables-basic', app_views.tables_basic, name='tables-basic'),
    path('data-tables', app_views.data_tables, name='data-tables'),

    # Maps

    path('maps-vector', app_views.maps_vector, name='maps-vector'),
    path('maps-leaflet', app_views.maps_leaflet, name='maps-leaflet'),


]

# Serve static files in development
if settings.DEBUG:
    from django.contrib.staticfiles.urls import staticfiles_urlpatterns
    urlpatterns += staticfiles_urlpatterns()
