from django.shortcuts import render, redirect

# Create your views here.

# Default credentials for fake login
DEFAULT_USER = {
    "email": "admin@example.com",
    "password": "123456"
}

# Authentication

def addons(request):
    return render(request, 'pages/addons.html')

def audit_report(request):
    return render(request, 'pages/audit-report.html')

def categories(request):
    return render(request, 'pages/categories.html')

def coupons(request):
    return render(request, 'pages/coupons.html')

def customer_report(request):
    return render(request, 'pages/customer-report.html')

def customer(request):
    return render(request, 'pages/customer.html')

def delivery_settings(request):
    return render(request, 'pages/delivery-settings.html')

def earning_report(request):
    return render(request, 'pages/earning-report.html')

def email_verification(request):
    return render(request, 'auth/email-verification.html')

def forgot_password(request):
    return render(request, 'auth/forgot-password.html')

def integrations_settings(request):
    return render(request, 'pages/integrations-settings.html')

def invoice_details(request):
    return render(request, 'pages/invoice-details.html')

def invoices(request):
    return render(request, 'pages/invoices.html')

def items(request):
    return render(request, 'pages/items.html')

def kanban_view(request):
    return render(request, 'pages/kanban-view.html')

def kitchen(request):
    return render(request, 'pages/kitchen.html')

def login(request):
    # Default credentials
    default_email = 'admin@example.com'
    default_password = '123456'

    error_message = ''
    email = default_email
    password = default_password

    if request.method == 'POST':
        email = request.POST.get('email', '').strip()
        password = request.POST.get('password', '').strip()

        if email == default_email and password == default_password:
            # Fake login success
            return redirect('index')
        else:
            error_message = 'Invalid email or password.'

    return render(request, 'auth/login.html', {
        'error_message': error_message,
        'email': email,
        'password': password
    })


def notifications_settings(request):
    return render(request, 'pages/notifications-settings.html')

def order_report(request):
    return render(request, 'pages/order-report.html')

def orders(request):
    return render(request, 'pages/orders.html')

def otp(request):
    return render(request, 'auth/otp.html')

def pos(request):
    return render(request, 'pages/pos.html')

def payment_settings(request):
    return render(request, 'pages/payment-settings.html')

def payments(request):
    return render(request, 'pages/payments.html')

def print_settings(request):
    return render(request, 'pages/print-settings.html')

def reset_password(request):
    return render(request, 'auth/reset-password.html')

def register(request):
    return render(request, 'auth/register.html')

def reservations(request):
    return render(request, 'pages/reservations.html')

def role_permission(request):
    return render(request, 'pages/role-permission.html')

def sales_report(request):
    return render(request, 'pages/sales-report.html')

def store_settings(request):
    return render(request, 'pages/store-settings.html')

def table(request):
    return render(request, 'pages/table.html')

def tax_settings(request):
    return render(request, 'pages/tax-settings.html')

def users(request):
    return render(request, 'pages/users.html')