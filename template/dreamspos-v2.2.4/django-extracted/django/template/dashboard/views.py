from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'pages/index.html', {'index': None})

def admin_dashboard(request):
    return render(request, 'pages/admin-dashboard.html', {'admin_dashboard': None})

def sales_dashboard(request):
    return render(request, 'pages/sales-dashboard.html', {'sales_dashboard': None})