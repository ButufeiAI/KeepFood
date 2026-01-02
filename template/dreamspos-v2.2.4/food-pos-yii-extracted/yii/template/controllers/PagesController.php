<?php

namespace app\controllers;

use yii\web\Controller;

class PagesController extends Controller
{
    public function actionIndex()
    {
        $this->layout = 'main';
        return $this->render('/index');
    }
    public function actionAddons()
	{
		$this->layout = 'main';
		return $this->render('/addons');
	}
    public function actionAuditReport()
	{
		$this->layout = 'main';
		return $this->render('/audit-report');
	}
    public function actionCategories()
	{
		$this->layout = 'main';
		return $this->render('/categories');
	}
    public function actionCoupons()
	{
		$this->layout = 'main';
		return $this->render('/coupons');
	}
    public function actionCustomerReport()
	{
		$this->layout = 'main';
		return $this->render('/customer-report');
	}
    public function actionCustomer()
	{
		$this->layout = 'main';
		return $this->render('/customer');
	}
    public function actionDeliverySettings()
	{
		$this->layout = 'main';
		return $this->render('/delivery-settings');
	}
    public function actionEarningReport()
	{
		$this->layout = 'main';
		return $this->render('/earning-report');
	}
    public function actionEmailVerification()
	{
		$this->layout = 'auth_main';
		return $this->render('/email-verification');
	}
    public function actionForgotPassword()
	{
		$this->layout = 'auth_main';
		return $this->render('/forgot-password');
	}
    public function actionIntegrationsSettings()
	{
		$this->layout = 'main';
		return $this->render('/integrations-settings');
	}
    public function actionInvoices()
	{
		$this->layout = 'main';
		return $this->render('/invoices');
	}
    public function actionInvoiceDetails()
	{
		$this->layout = 'main';
		return $this->render('/invoice-details');
	}
    public function actionItems()
	{
		$this->layout = 'main';
		return $this->render('/items');
	}
    public function actionKanbanView()
	{
		$this->layout = 'main';
		return $this->render('/kanban-view');
	}
    public function actionKitchen()
	{
		$this->layout = 'main';
		return $this->render('/kitchen');
	}
    public function actionLogin()
	{
		$this->layout = 'auth_main';
		return $this->render('/login');
	}
    public function actionNotificationsSettings()
	{
		$this->layout = 'main';
		return $this->render('/notifications-settings');
	}
    public function actionOrderReport()
	{
		$this->layout = 'main';
		return $this->render('/order-report');
	}
    public function actionOrders()
	{
		$this->layout = 'main';
		return $this->render('/orders');
	}
    public function actionOtp()
	{
		$this->layout = 'auth_main';
		return $this->render('/otp');
	}
    public function actionPos()
	{
		$this->layout = 'main';
		return $this->render('/pos');
	}
    public function actionPaymentSettings()
	{
		$this->layout = 'main';
		return $this->render('/payment-settings');
	}
        public function actionPayments()
	{
		$this->layout = 'main';
		return $this->render('/payments');
	}
    public function actionPrintSettings()
	{
		$this->layout = 'main';
		return $this->render('/print-settings');
	}
    public function actionRegister()
	{
		$this->layout = 'auth_main';
		return $this->render('/register');
	}
	public function actionReservations()
	{
		$this->layout = 'main';
		return $this->render('/reservations');
	}
	public function actionResetPassword()
	{
		$this->layout = 'auth_main';
		return $this->render('/reset-password');
	}
    public function actionRolePermission()
	{
		$this->layout = 'main';
		return $this->render('/role-permission');
	}
    public function actionSalesReport()
	{
		$this->layout = 'main';
		return $this->render('/sales-report');
	}
    public function actionStoreSettings()
	{
		$this->layout = 'main';
		return $this->render('/store-settings');
	}
    public function actionTable()
	{
		$this->layout = 'main';
		return $this->render('/table');
	}
    public function actionTaxSettings()
	{
		$this->layout = 'main';
		return $this->render('/tax-settings');
	}
    public function actionUsers()
	{
		$this->layout = 'main';
		return $this->render('/users');
	}
}

