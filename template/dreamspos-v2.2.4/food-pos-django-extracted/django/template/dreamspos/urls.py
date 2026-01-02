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
    
    path('login', app_views.login, name='login'),
    path('reset-password', app_views.reset_password, name='reset-password'),

    # Main menu 

    path('index', dashboard_views.index, name='index'),


    path('addons', app_views.addons, name='addons'),
    path('pos', app_views.pos, name='pos'),
    path('categories', app_views.categories, name='categories'),
    path('audit-report', app_views.audit_report, name='audit-report'),
    path('coupons', app_views.coupons, name='coupons'),
    path('report-customer', app_views.customer_report, name='report-customer'),
    path('customer', app_views.customer, name='customer'),
    path('delivery-settings', app_views.delivery_settings, name='delivery-settings'),
    path('earning-report', app_views.earning_report, name='earning-report'),
    path('integrations-settings', app_views.integrations_settings, name='integrations-settings'),
    path('invoices', app_views.invoices, name='invoices'),
    path('invoice-details', app_views.invoice_details, name='invoice-details'),
    path('items', app_views.items, name='items'),
    path('kanban-view', app_views.kanban_view, name='kanban-view'),
    path('kitchen', app_views.kitchen, name='kitchen'),
    path('notifications-settings', app_views.notifications_settings, name='notifications-settings'),
    path('order-report', app_views.order_report, name='order-report'),
    path('orders', app_views.orders, name='orders'),
    path('payment-settings', app_views.payment_settings, name='payment-settings'),
    path('payments', app_views.payments, name='payments'),
    path('print-settings', app_views.print_settings, name='print-settings'),
    path('reservations', app_views.reservations, name='reservations'),
    path('role-permission', app_views.role_permission, name='role-permission'),
    path('sales-report', app_views.sales_report, name='sales-report'),
    path('store-settings', app_views.store_settings, name='store-settings'),
    path('table', app_views.table, name='table'),
    path('tax-settings', app_views.tax_settings, name='tax-settings'),
    path('users', app_views.users, name='users'),
    path('email-verification', app_views.email_verification, name='email-verification'),
    path('forgot-password', app_views.forgot_password, name='forgot-password'),
    path('register', app_views.register, name='register'),
    path('reset-password', app_views.reset_password, name='reset-password'),
    path('otp', app_views.otp, name='otp'),
    path('login', app_views.login, name='login'),

]

# Serve static files in development
if settings.DEBUG:
    from django.contrib.staticfiles.urls import staticfiles_urlpatterns
    urlpatterns += staticfiles_urlpatterns()
