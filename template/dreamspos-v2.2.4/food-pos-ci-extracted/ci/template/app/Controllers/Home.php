<?php

namespace App\Controllers;

class Home extends BaseController
{
    public function index()
    {
        if (!session()->get('isLoggedIn')) {
            return redirect()->to('/login');
        }
        return view('index');
    }
    public function Admin_Index()
	{
		return view('index');
	}
    public function Addons()
	{
		return view('addons');
	}
    public function Audit_Report()
	{
		return view('audit-report');
	}
    public function Categories()
	{
		return view('categories');
	}
    public function Coupons()
	{
		return view('coupons');
	}
    public function Customer_Report()
	{
		return view('customer-report');
	}
    public function Customer()
	{
		return view('customer');
	}
    public function Delivery_Settings()
	{
		return view('delivery-settings');
	}
    public function Earning_Report()
	{
		return view('earning-report');
	}
    public function Email_Verification()
	{
		return view('email-verification');
	}
    public function Forgot_Password()
	{
		return view('forgot-password');
	}
    public function Integrations_Settings()
	{
		return view('integrations-settings');
	}
    public function Invoices()
	{
		return view('invoices');
	}
	public function Invoice_Details()
	{
		return view('invoice-details');
	}
    public function Items()
	{
		return view('items');
	}
    public function Kanban_View()
	{
		return view('kanban-view');
	}
    public function Kitchen()
	{
		return view('kitchen');
	}
    public function Login()
	{
		return view('login');
	}
    public function Notifications_Settings()
	{
		return view('notifications-settings');
	}
    public function Order_Report()
	{
		return view('order-report');
	}
    public function Orders()
	{
		return view('orders');
	}
    public function Otp()
	{
		return view('otp');
	}
    public function Pos()
	{
		return view('pos');
	}
    public function Payment_Settings()
	{
		return view('payment-settings');
	}
    public function Payments()
	{
		return view('payments');
	}
    public function Print_Settings()
	{
		return view('print-settings');
	}
    public function Register()
	{
		return view('register');
	}
	public function Reservations()
	{
		return view('reservations');
	}
	public function Reset_Password()
	{
		return view('reset-password');
	}
    public function Role_Permission()
	{
		return view('role-permission');
	}
    public function Sales_Report()
	{
		return view('sales-report');
	}
    public function Store_Settings()
	{
		return view('store-settings');
	}
    public function Table()
	{
		return view('table');
	}
    public function Tax_Settings()
	{
		return view('tax-settings');
	}
    public function Users()
	{
		return view('users');
	}
}
