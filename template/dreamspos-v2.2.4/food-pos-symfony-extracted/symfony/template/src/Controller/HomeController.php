<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Twig\Environment;

class HomeController extends AbstractController
{
    public function __construct(Environment $twig)
    {
        $this->loader = $twig->getLoader();
    }

    #[Route('/', name: 'home')]
    public function home(): Response
    {
        return $this->render('index.html.twig');
    }

    #[Route('/index', name: 'index')]
    public function index(): Response
    {
        return $this->render('index.html.twig');
    }

    #[Route('/addons', name: 'addons')]
    public function addons(): Response
    {
        return $this->render('addons.html.twig');
    }

    #[Route('/audit-report', name: 'audit-report')]
    public function audit_report(): Response
    {
        return $this->render('audit-report.html.twig');
    }

    #[Route('/categories', name: 'categories')]
    public function categories(): Response
    {
        return $this->render('categories.html.twig');
    }

    #[Route('/coupons', name: 'coupons')]
    public function coupons(): Response
    {
        return $this->render('coupons.html.twig');
    }

    #[Route('/customer-report', name: 'customer-report')]
    public function customer_report(): Response
    {
        return $this->render('customer-report.html.twig');
    }

    #[Route('/customer', name: 'customer')]
    public function customer(): Response
    {
        return $this->render('customer.html.twig');
    }

    #[Route('/delivery-settings', name: 'delivery-settings')]
    public function delivery_settings(): Response
    {
        return $this->render('delivery-settings.html.twig');
    }

    #[Route('/earning-report', name: 'earning-report')]
    public function earning_report(): Response
    {
        return $this->render('earning-report.html.twig');
    }

    #[Route('/email-verification', name: 'email-verification')]
    public function email_verification(): Response
    {
        return $this->render('email-verification.html.twig');
    }

    #[Route('/forgot-password', name: 'forgot-password')]
    public function forgot_password(): Response
    {
        return $this->render('forgot-password.html.twig');
    }

    #[Route('/integrations-settings', name: 'integrations-settings')]
    public function integrations_settings(): Response
    {
        return $this->render('integrations-settings.html.twig');
    }

    #[Route('/invoices', name: 'invoices')]
    public function invoices(): Response
    {
        return $this->render('invoices.html.twig');
    }

    #[Route('/invoice-details', name: 'invoice-details')]
    public function invoice_details(): Response
    {
        return $this->render('invoice-details.html.twig');
    }    

    #[Route('/items', name: 'items')]
    public function items(): Response
    {
        return $this->render('items.html.twig');
    }

    #[Route('/kanban-view', name: 'kanban-view')]
    public function kanban_view(): Response
    {
        return $this->render('kanban-view.html.twig');
    }

    #[Route('/kitchen', name: 'kitchen')]
    public function kitchen(): Response
    {
        return $this->render('kitchen.html.twig');
    }

    #[Route('/login', name: 'login')]
    public function login(): Response
    {
        return $this->render('login.html.twig');
    }

    #[Route('/notifications-settings', name: 'notifications-settings')]
    public function notifications_settings(): Response
    {
        return $this->render('notifications-settings.html.twig');
    }

    #[Route('/order-report', name: 'order-report')]
    public function order_report(): Response
    {
        return $this->render('order-report.html.twig');
    }

    #[Route('/orders', name: 'orders')]
    public function orders(): Response
    {
        return $this->render('orders.html.twig');
    }

    #[Route('/otp', name: 'otp')]
    public function otp(): Response
    {
        return $this->render('otp.html.twig');
    }

    #[Route('/pos', name: 'pos')]
    public function pos(): Response
    {
        return $this->render('pos.html.twig');
    }

    #[Route('/payment-settings', name: 'payment-settings')]
    public function payment_settings(): Response
    {
        return $this->render('payment-settings.html.twig');
    }

    #[Route('/payments', name: 'payments')]
    public function payments(): Response
    {
        return $this->render('payments.html.twig');
    }

    #[Route('/print-settings', name: 'print-settings')]
    public function print_settings(): Response
    {
        return $this->render('print-settings.html.twig');
    }

    #[Route('/register', name: 'register')]
    public function register(): Response
    {
        return $this->render('register.html.twig');
    }

    #[Route('/reservations', name: 'reservations')]
    public function reservations(): Response
    {
        return $this->render('reservations.html.twig');
    }

    #[Route('/reset-password', name: 'reset-password')]
    public function reset_password(): Response
    {
        return $this->render('reset-password.html.twig');
    }    

    #[Route('/role-permission', name: 'role-permission')]
    public function role_permission(): Response
    {
        return $this->render('role-permission.html.twig');
    }

    #[Route('/sales-report', name: 'sales-report')]
    public function sales_report(): Response
    {
        return $this->render('sales-report.html.twig');
    }

    #[Route('/store-settings', name: 'store-settings')]
    public function store_settings(): Response
    {
        return $this->render('store-settings.html.twig');
    }

    #[Route('/table', name: 'table')]
    public function table(): Response
    {
        return $this->render('table.html.twig');
    }

    #[Route('/tax-settings', name: 'tax-settings')]
    public function tax_settings(): Response
    {
        return $this->render('tax-settings.html.twig');
    }

    #[Route('/users', name: 'users')]
    public function users(): Response
    {
        return $this->render('users.html.twig');
    }



    #[Route('/{path}')]
    public function root($path)
    {
        if ($this->loader->exists($path . '.html.twig')) {
            if ($path == '/' || $path == 'home' || $path == 'index') {
                return $this->render('index.html.twig');
            }
            return $this->render($path . '.html.twig');
        }
        throw $this->createNotFoundException();
    }
}
