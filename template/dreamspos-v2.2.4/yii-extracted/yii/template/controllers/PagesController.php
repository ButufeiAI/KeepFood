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

    public function actionAccountList()
    {
        $this->layout = 'main';
        return $this->render('/account-list');  
    }

    public function actionAccountStatement()
    {
        $this->layout = 'main';
        return $this->render('/account-statement');  
    }
    
    public function actionActivities()
    {
        $this->layout = 'main';
        return $this->render('/activities');  
    }
     
    public function actionAddEmployee()
    {
        $this->layout = 'main';
        return $this->render('/add-employee');  
    }

    public function actionAddProduct()
    {
        $this->layout = 'main';
        return $this->render('/add-product');  
    }

    public function actionAdminDashboard()
    {
        $this->layout = 'main';
        return $this->render('/admin-dashboard');  
    }

    public function actionAllBlog()
    {
        $this->layout = 'main';
        return $this->render('/all-blog');  
    }

    public function actionAnnualReport()
    {
        $this->layout = 'main';
        return $this->render('/annual-report');  
    }

    public function actionAppearance()
    {
        $this->layout = 'main';
        return $this->render('/appearance');  
    }

    public function actionAttendanceAdmin()
    {
        $this->layout = 'main';
        return $this->render('/attendance-admin');  
    }
    
    public function actionAttendanceEmployee()
    {
        $this->layout = 'main';
        return $this->render('/attendance-employee');  
    }

    public function actionAudioCall()
    {
        $this->layout = 'main';
        return $this->render('/audio-call');  
    }

    public function actionBalanceSheet()
    {
        $this->layout = 'main';
        return $this->render('/balance-sheet');  
    }

    public function actionBalanceSheetV2()
    {
        $this->layout = 'main';
        return $this->render('/balance-sheet-v2');  
    }
    
    public function actionBanIpAddress()
    {
        $this->layout = 'main';
        return $this->render('/ban-ip-address');  
    }

    public function actionBankSettingsGrid()
    {
        $this->layout = 'main';
        return $this->render('/bank-settings-grid');  
    }

    public function actionBankSettingsList()
    {
        $this->layout = 'main';
        return $this->render('/bank-settings-list');  
    }

    public function actionBarcode()
    {
        $this->layout = 'main';
        return $this->render('/barcode');  
    }

    public function actionBestSeller()
    {
        $this->layout = 'main';
        return $this->render('/best-seller');  
    }

    public function actionBillers()
    {
        $this->layout = 'main';
        return $this->render('/billers');  
    }

    public function actionBlankPage()
    {
        $this->layout = 'main';
        return $this->render('/blank-page');  
    }

    public function actionBlogCategories()
    {
        $this->layout = 'main';
        return $this->render('/blog-categories');  
    }

    public function actionBlogComments()
    {
        $this->layout = 'main';
        return $this->render('/blog-comments');  
    }

    public function actionBlogDetails()
    {
        $this->layout = 'main';
        return $this->render('/blog-details');  
    }

    public function actionBlogTag()
    {
        $this->layout = 'main';
        return $this->render('/blog-tag');  
    }

    public function actionBrandList()
    {
        $this->layout = 'main';
        return $this->render('/brand-list');  
    }

    public function actionCalendar()
    {
        $this->layout = 'main';
        return $this->render('/calendar');  
    }

    public function actionCallHistory()
    {
        $this->layout = 'main';
        return $this->render('/call-history');  
    }

    public function actionCart()
    {
        $this->layout = 'main';
        return $this->render('/cart');  
    }
    
    public function actionCompanies()
    {
        $this->layout = 'main';
        return $this->render('/companies');  
    }
    
    public function actionCategoryList()
    {
        $this->layout = 'main';
        return $this->render('/category-list');  
    }
    
    public function actionCashFlow()
    {
        $this->layout = 'main';
        return $this->render('/cash-flow');  
    }

    public function actionCashFlowV2()
    {
        $this->layout = 'main';
        return $this->render('/cash-flow-v2');  
    }

    public function actionChartApex()
    {
        $this->layout = 'main';
        return $this->render('/chart-apex');  
    }

    public function actionChartC3()
    {
        $this->layout = 'main';
        return $this->render('/chart-c3');  
    }

    public function actionChartFlot()
    {
        $this->layout = 'main';
        return $this->render('/chart-flot');  
    }
    
    public function actionChartJs()
    {
        $this->layout = 'main';
        return $this->render('/chart-js');  
    }
    
    public function actionChartMorris()
    {
        $this->layout = 'main';
        return $this->render('/chart-morris');  
    }
    
    public function actionChartPeity()
    {
        $this->layout = 'main';
        return $this->render('/chart-peity');  
    }

    public function actionChat()
    {
        $this->layout = 'main';
        return $this->render('/chat');  
    }

    public function actionCheckout()
    {
        $this->layout = 'main';
        return $this->render('/checkout');  
    }
    
    public function actionCities()
    {
        $this->layout = 'main';
        return $this->render('/cities');  
    }
    
    public function actionComingSoon()
    {
        $this->layout = 'auth_main';
        return $this->render('/coming-soon');  
    }
    
    public function actionCompanySettings()
    {
        $this->layout = 'main';
        return $this->render('/company-settings');  
    } 
    
    public function actionConnectedApps()
    {
        $this->layout = 'main';
        return $this->render('/connected-apps');  
    } 
    
    public function actionContacts()
    {
        $this->layout = 'main';
        return $this->render('/contacts');  
    }
    
    public function actionCountries()
    {
        $this->layout = 'main';
        return $this->render('/countries');  
    }
    
    public function actionCoupons()
    {
        $this->layout = 'main';
        return $this->render('/coupons');  
    }

    public function actionCurrencySettings()
    {
        $this->layout = 'main';
        return $this->render('/currency-settings');  
    }

    public function actionCustomFields()
    {
        $this->layout = 'main';
        return $this->render('/custom-fields');  
    }
    
    public function actionCustomerDueReport()
    {
        $this->layout = 'main';
        return $this->render('/customer-due-report');  
    }
    
    public function actionCustomerReport()
    {
        $this->layout = 'main';
        return $this->render('/customer-report');  
    }
    
    public function actionCustomers()
    {
        $this->layout = 'main';
        return $this->render('/customers');  
    }

    public function actionDataTables()
    {
        $this->layout = 'main';
        return $this->render('/data-tables');  
    }

    public function actionDashboard()
    {
        $this->layout = 'main';
        return $this->render('/dashboard');  
    }

    public function actionDeleteAccount()
    {
        $this->layout = 'main';
        return $this->render('/delete-account');  
    }

    public function actionDepartmentGrid()
    {
        $this->layout = 'main';
        return $this->render('/department-grid');  
    }
    
    public function actionDepartmentList()
    {
        $this->layout = 'main';
        return $this->render('/department-list');  
    }

    public function actionDesignation()
    {
        $this->layout = 'main';
        return $this->render('/designation');  
    }

    public function actionDiscount()
    {
        $this->layout = 'main';
        return $this->render('/discount');  
    }

    public function actionDiscountPlan()
    {
        $this->layout = 'main';
        return $this->render('/discount-plan');  
    }

    public function actionDomain()
    {
        $this->layout = 'main';
        return $this->render('/domain');  
    }

    public function actionEditEmployee()
    {
        $this->layout = 'main';
        return $this->render('/edit-employee');  
    }
    
    public function actionEditProduct()
    {
        $this->layout = 'main';
        return $this->render('/edit-product');  
    }

    public function actionEmail()
    {
        $this->layout = 'main';
        return $this->render('/email');  
    }

    public function actionEmailReply()
    {
        $this->layout = 'main';
        return $this->render('/email-reply');  
    }
    
    public function actionEmailSettings()
    {
        $this->layout = 'main';
        return $this->render('/email-settings');  
    }

    public function actionEmailTemplates()
    {
        $this->layout = 'main';
        return $this->render('/email-templates');  
    }

    public function actionEmailVerification()
    {
        $this->layout = 'auth_main';
        return $this->render('/email-verification');  
    }

    public function actionEmailVerification2()
    {
        $this->layout = 'auth_main';
        return $this->render('/email-verification-2');  
    }

    public function actionEmailVerification3()
    {
        $this->layout = 'auth_main';
        return $this->render('/email-verification-3');  
    }

    public function actionEmployeeDetails()
    {
        $this->layout = 'main';
        return $this->render('/employee-details');  
    }

    public function actionEmployeeSalary()
    {
        $this->layout = 'main';
        return $this->render('/employee-salary');  
    }

    public function actionEmployeesGrid()
    {
        $this->layout = 'main';
        return $this->render('/employees-grid');  
    }

    public function actionEmployeesList()
    {
        $this->layout = 'main';
        return $this->render('/employees-list');  
    }

    public function actionError404()
    {
        $this->layout = 'auth_main';
        return $this->render('/error-404');  
    }
    
    public function actionError500()
    {
        $this->layout = 'auth_main';
        return $this->render('/error-500');  
    }

    public function actionExpenseCategory()
    {
        $this->layout = 'main';
        return $this->render('/expense-category');  
    }

    public function actionExpenseList()
    {
        $this->layout = 'main';
        return $this->render('/expense-list');  
    }
    
    public function actionExpenseReport()
    {
        $this->layout = 'main';
        return $this->render('/expense-report');  
    }
    
    public function actionExpiredProducts()
    {
        $this->layout = 'main';
        return $this->render('/expired-products');  
    }
    
    public function actionFaq()
    {
        $this->layout = 'main';
        return $this->render('/faq');  
    }
    
    public function actionFileArchived()
    {
        $this->layout = 'main';
        return $this->render('/file-archived');  
    }   

    public function actionFileDocument()
    {
        $this->layout = 'main';
        return $this->render('/file-document');
    }    

    public function actionFileFavourites()
    {
        $this->layout = 'main';
        return $this->render('/file-favourites');
    }    

    public function actionFileManager()
    {
        $this->layout = 'main';
        return $this->render('/file-manager');
    }    

    public function actionFileManagerDeleted()
    {
        $this->layout = 'main';
        return $this->render('/file-manager-deleted');
    }    

    public function actionFileRecent()
    {
        $this->layout = 'main';
        return $this->render('/file-recent');
    }

    public function actionFileShared()
    {
        $this->layout = 'main';
        return $this->render('/file-shared');
    }

    public function actionFormBasicInputs()
    {
        $this->layout = 'main';
        return $this->render('/form-basic-inputs');
    }
    
    public function actionFormCheckboxRadios()
    {
        $this->layout = 'main';
        return $this->render('/form-checkbox-radios');
    }
    
    public function actionFormElements()
    {
        $this->layout = 'main';
        return $this->render('/form-elements');
    }
    
    public function actionFormFileupload()
    {
        $this->layout = 'main';
        return $this->render('/form-fileupload');
    }
    
    public function actionFormFloatingLabels()
    {
        $this->layout = 'main';
        return $this->render('/form-floating-labels');
    }
    
    public function actionFormGridGutters()
    {
        $this->layout = 'main';
        return $this->render('/form-grid-gutters');
    }    

    public function actionFormHorizontal()
    {
        $this->layout = 'main';
        return $this->render('/form-horizontal');
    }

    public function actionFormInputGroups()
    {
        $this->layout = 'main';
        return $this->render('/form-input-groups');
    }

    public function actionFormMask()
    {
        $this->layout = 'main';
        return $this->render('/form-mask');
    }

    public function actionFormPickers()
    {
        $this->layout = 'main';
        return $this->render('/form-pickers');
    }

    public function actionFormSelect()
    {
        $this->layout = 'main';
        return $this->render('/form-select');
    }

    public function actionFormSelect2()
    {
        $this->layout = 'main';
        return $this->render('/form-select2');
    }

    public function actionFormValidation()
    {
        $this->layout = 'main';
        return $this->render('/form-validation');
    }
    
    public function actionFormVertical()
    {
        $this->layout = 'main';
        return $this->render('/form-vertical');
    }
    
    public function actionFormWizard()
    {
        $this->layout = 'main';
        return $this->render('/form-wizard');
    }

    public function actionForgotPassword()
    {
        $this->layout = 'auth_main';
        return $this->render('/forgot-password');  
    }

    public function actionForgotPassword2()
    {
        $this->layout = 'auth_main';
        return $this->render('/forgot-password-2');  
    }

    public function actionForgotPassword3()
    {
        $this->layout = 'auth_main';
        return $this->render('/forgot-password-3');  
    }

    public function actionGdprSettings()
    {
        $this->layout = 'main';
        return $this->render('/gdpr-settings');  
    }

    public function actionGeneralSettings()
    {
        $this->layout = 'main';
        return $this->render('/general-settings');  
    }

    public function actionHolidays()
    {
        $this->layout = 'main';
        return $this->render('/holidays');  
    }

    public function actionGiftCards()
    {
        $this->layout = 'main';
        return $this->render('/gift-cards');  
    }

    public function actionIconBootstrap()
    {
        $this->layout = 'main';
        return $this->render('/icon-bootstrap');  
    }

    public function actionIconFeather()
    {
        $this->layout = 'main';
        return $this->render('/icon-feather');  
    }

    public function actionIconFlag()
    {
        $this->layout = 'main';
        return $this->render('/icon-flag');  
    }

    public function actionIconFontawesome()
    {
        $this->layout = 'main';
        return $this->render('/icon-fontawesome');  
    }

    public function actionIconIonic()
    {
        $this->layout = 'main';
        return $this->render('/icon-ionic');  
    }
    
    public function actionIconMaterial()
    {
        $this->layout = 'main';
        return $this->render('/icon-material');  
    }
    
    public function actionIconPe7()
    {
        $this->layout = 'main';
        return $this->render('/icon-pe7');  
    }
    
    public function actionIconRemix()
    {
        $this->layout = 'main';
        return $this->render('/icon-remix');  
    }
    
    public function actionIconSimpleline()
    {
        $this->layout = 'main';
        return $this->render('/icon-simpleline');  
    }
    
    public function actionIconTabler()
    {
        $this->layout = 'main';
        return $this->render('/icon-tabler');  
    }
    
    public function actionIconThemify()
    {
        $this->layout = 'main';
        return $this->render('/icon-themify');  
    }
    
    public function actionIconTypicon()
    {
        $this->layout = 'main';
        return $this->render('/icon-typicon');  
    }
    
    public function actionIconWeather()
    {
        $this->layout = 'main';
        return $this->render('/icon-weather');  
    }
    
    public function actionIncome()
    {
        $this->layout = 'main';
        return $this->render('/income');  
    }
    
    public function actionIncomeCategory()
    {
        $this->layout = 'main';
        return $this->render('/income-category');  
    }

    public function actionIncomeReport()
    {
        $this->layout = 'main';
        return $this->render('/income-report');  
    }

    public function actionInventoryReport()
    {
        $this->layout = 'main';
        return $this->render('/inventory-report');  
    }
    
    public function actionInvoice()
    {
        $this->layout = 'main';
        return $this->render('/invoice');  
    }
    
    public function actionInvoiceDetails()
    {
        $this->layout = 'main';
        return $this->render('/invoice-details');  
    }
    
    public function actionInvoiceReport()
    {
        $this->layout = 'main';
        return $this->render('/invoice-report');  
    }

    public function actionInvoiceSettings()
    {
        $this->layout = 'main';
        return $this->render('/invoice-settings');  
    }

    public function actionInvoiceTemplates()
    {
        $this->layout = 'main';
        return $this->render('/invoice-templates');  
    }

    public function actionLanguageSettings()
    {
        $this->layout = 'main';
        return $this->render('/language-settings');  
    }

    public function actionLanguageSettingsWeb()
    {
        $this->layout = 'main';
        return $this->render('/language-settings-web');  
    }

    public function actionLayoutBoxed()
    {
        $this->layout = 'main';
        return $this->render('/layout-boxed');  
    }

    public function actionLayoutDark()
    {
        $this->layout = 'main';
        return $this->render('/layout-dark');  
    }

    public function actionLayoutDetached()
    {
        $this->layout = 'main';
        return $this->render('/layout-detached');  
    }
    
    public function actionLayoutHorizontal()
    {
        $this->layout = 'main';
        return $this->render('/layout-horizontal');  
    }

    public function actionLayoutHovered()
    {
        $this->layout = 'main';
        return $this->render('/layout-hovered');  
    }
    
    public function actionLayoutModern()
    {
        $this->layout = 'main';
        return $this->render('/layout-modern');  
    }
    
    public function actionLayoutRtl()
    {
        $this->layout = 'main';
        return $this->render('/layout-rtl');  
    }
    
    public function actionLayoutTwoColumn()
    {
        $this->layout = 'main';
        return $this->render('/layout-two-column');  
    }
    
    public function actionLeavesAdmin()
    {
        $this->layout = 'main';
        return $this->render('/leaves-admin');  
    }
    
    public function actionLeavesEmployee()
    {
        $this->layout = 'main';
        return $this->render('/leaves-employee');  
    }
    
    public function actionLeaveTypes()
    {
        $this->layout = 'main';
        return $this->render('/leave-types');  
    }
    
    public function actionLocalizationSettings()
    {
        $this->layout = 'main';
        return $this->render('/localization-settings');  
    }

    public function actionLockScreen()
    {
        $this->layout = 'auth_main';
        return $this->render('/lock-screen');  
    }
    
    public function actionLowStocks()
    {
        $this->layout = 'main';
        return $this->render('/low-stocks');  
    }
    
    public function actionManageStocks()
    {
        $this->layout = 'main';
        return $this->render('/manage-stocks');  
    }
    
    public function actionMapsLeaflet()
    {
        $this->layout = 'main';
        return $this->render('/maps-leaflet');  
    }
    
    public function actionMapsVector()
    {
        $this->layout = 'main';
        return $this->render('/maps-vector');  
    }
    
    public function actionMoneyTransfer()
    {
        $this->layout = 'main';
        return $this->render('/money-transfer');  
    }
    
    public function actionNotes()
    {
        $this->layout = 'main';
        return $this->render('/notes');  
    }
    
    public function actionNotification()
    {
        $this->layout = 'main';
        return $this->render('/notification');  
    }
    
    public function actionOnlineOrders()
    {
        $this->layout = 'main';
        return $this->render('/online-orders');  
    }
    
    public function actionOrders()
    {
        $this->layout = 'main';
        return $this->render('/orders');  
    }
    
    public function actionOtpSettings()
    {
        $this->layout = 'main';
        return $this->render('/otp-settings');  
    }

    public function actionPackages()
    {
        $this->layout = 'main';
        return $this->render('/packages');  
    }
    
    public function actionPages()
    {
        $this->layout = 'main';
        return $this->render('/pages');  
    }
    
    public function actionPaymentGatewaySettings()
    {
        $this->layout = 'main';
        return $this->render('/payment-gateway-settings');  
    }
    
    public function actionPayrollList()
    {
        $this->layout = 'main';
        return $this->render('/payroll-list');  
    }
    
    public function actionPayslip()
    {
        $this->layout = 'main';
        return $this->render('/payslip');  
    }
    
    public function actionPermissions()
    {
        $this->layout = 'main';
        return $this->render('/permissions');  
    }
    
    public function actionPos()
    {
        $this->layout = 'main';
        return $this->render('/pos');  
    }
    
    public function actionPos2()
    {
        $this->layout = 'main';
        return $this->render('/pos-2');  
    }
    
    public function actionPos3()
    {
        $this->layout = 'main';
        return $this->render('/pos-3');  
    }
    
    public function actionPos4()
    {
        $this->layout = 'main';
        return $this->render('/pos-4');  
    }

    public function actionPos5()
    {
        $this->layout = 'main';
        return $this->render('/pos-5');  
    }

    public function actionPosOrders()
    {
        $this->layout = 'main';
        return $this->render('/pos-orders');  
    }
    
    public function actionPosSettings()
    {
        $this->layout = 'main';
        return $this->render('/pos-settings');  
    }
    
    public function actionPreference()
    {
        $this->layout = 'main';
        return $this->render('/preference');  
    }

    public function actionPrefixes()
    {
        $this->layout = 'main';
        return $this->render('/prefixes');  
    }

    public function actionPrinterSettings()
    {
        $this->layout = 'main';
        return $this->render('/printer-settings');  
    }
    
    public function actionPricing()
    {
        $this->layout = 'main';
        return $this->render('/pricing');  
    }
    
    public function actionProductDetails()
    {
        $this->layout = 'main';
        return $this->render('/product-details');  
    }
    
    public function actionProductExpiryReport()
    {
        $this->layout = 'main';
        return $this->render('/product-expiry-report');  
    }
    
    public function actionProductList()
    {
        $this->layout = 'main';
        return $this->render('/product-list');  
    }
    
    public function actionProductQuantityAlert()
    {
        $this->layout = 'main';
        return $this->render('/product-quantity-alert');  
    }
    
    public function actionProductReport()
    {
        $this->layout = 'main';
        return $this->render('/product-report');  
    }
    
    public function actionProducts()
    {
        $this->layout = 'main';
        return $this->render('/products');  
    }
    
    public function actionProfile()
    {
        $this->layout = 'main';
        return $this->render('/profile');  
    }
    
    public function actionProfitAndLoss()
    {
        $this->layout = 'main';
        return $this->render('/profit-and-loss');  
    }
    
    public function actionProjects()
    {
        $this->layout = 'main';
        return $this->render('/projects');  
    }   
    
    public function actionPurchaseList()
    {
        $this->layout = 'main';
        return $this->render('/purchase-list');  
    }

    public function actionPurchaseOrderReport()
    {
        $this->layout = 'main';
        return $this->render('/purchase-order-report');  
    }
    
    public function actionPurchaseReport()
    {
        $this->layout = 'main';
        return $this->render('/purchase-report');  
    }

    public function actionPurchaseReturns()
    {
        $this->layout = 'main';
        return $this->render('/purchase-returns');  
    }

    public function actionPurchaseTransaction()
    {
        $this->layout = 'main';
        return $this->render('/purchase-transaction');  
    }

    public function actionQrcode()
    {
        $this->layout = 'main';
        return $this->render('/qrcode');  
    }

    public function actionQuotationList()
    {
        $this->layout = 'main';
        return $this->render('/quotation-list');  
    }

    public function actionRegister()
    {
        $this->layout = 'auth_main';
        return $this->render('/register');  
    }

    public function actionRegister2()
    {
        $this->layout = 'auth_main';
        return $this->render('/register-2');  
    }

    public function actionRegister3()
    {
        $this->layout = 'auth_main';
        return $this->render('/register-3');  
    }

    public function actionResetPassword()
    {
        $this->layout = 'auth_main';
        return $this->render('/reset-password');  
    }

    public function actionResetPassword2()
    {
        $this->layout = 'auth_main';
        return $this->render('/reset-password-2');  
    }   

    public function actionResetPassword3()
    {
        $this->layout = 'auth_main';
        return $this->render('/reset-password-3');  
    }   

    public function actionReviews()
    {
        $this->layout = 'main';
        return $this->render('/reviews');  
    }

    public function actionRolesPermissions()
    {
        $this->layout = 'main';
        return $this->render('/roles-permissions');  
    }

    public function actionSalesDashboard()
    {
        $this->layout = 'main';
        return $this->render('/sales-dashboard');  
    }
    
    public function actionSalesList()
    {
        $this->layout = 'main';
        return $this->render('/sales-list');  
    }

    public function actionSalesReport()
    {
        $this->layout = 'main';
        return $this->render('/sales-report');  
    }

    public function actionSalesReturns()
    {
        $this->layout = 'main';
        return $this->render('/sales-returns');  
    }

    public function actionSalesTax()
    {
        $this->layout = 'main';
        return $this->render('/sales-tax');  
    }

    public function actionSearchList()
    {
        $this->layout = 'main';
        return $this->render('/search-list');  
    }

    public function actionSecuritySettings()
    {
        $this->layout = 'main';
        return $this->render('/security-settings');  
    }
    
    public function actionShift()
    {
        $this->layout = 'main';
        return $this->render('/shift');  
    }

    public function actionSignatures()
    {
        $this->layout = 'main';
        return $this->render('/signatures');  
    }

    public function actionSignin()
    {
        $this->layout = 'auth_main';
        return $this->render('/signin');  
    }

    public function actionSignin2()
    {
        $this->layout = 'auth_main';
        return $this->render('/signin-2');  
    }
    
    public function actionSignin3()
    {
        $this->layout = 'auth_main'; 
        return $this->render('/signin-3');  
    }

    public function actionSmsGateway()
    {
        $this->layout = 'main';
        return $this->render('/sms-gateway');  
    }

    public function actionSmsSettings()
    {
        $this->layout = 'main';
        return $this->render('/sms-settings');  
    }

    public function actionSmsTemplates()
    {
        $this->layout = 'main';
        return $this->render('/sms-templates');  
    }
    
    public function actionSocialAuthentication()
    {
        $this->layout = 'main';
        return $this->render('/social-authentication');  
    }
    
    public function actionSocialFeed()
    {
        $this->layout = 'main';
        return $this->render('/social-feed');  
    }

    public function actionSoldStock()
    {
        $this->layout = 'main';
        return $this->render('/sold-stock');  
    }
    
    public function actionStates()
    {
        $this->layout = 'main';
        return $this->render('/states');  
    }
    
    public function actionStockAdjustment()
    {
        $this->layout = 'main';
        return $this->render('/stock-adjustment');  
    }

    public function actionStockHistory()
    {
        $this->layout = 'main';
        return $this->render('/stock-history');  
    }

    public function actionStockTransfer()
    {
        $this->layout = 'main';
        return $this->render('/stock-transfer');  
    }

    public function actionStorageSettings()
    {
        $this->layout = 'main';
        return $this->render('/storage-settings');  
    }

    public function actionStoreList()
    {
        $this->layout = 'main';
        return $this->render('/store-list');  
    }

    public function actionSubCategories()
    {
        $this->layout = 'main';
        return $this->render('/sub-categories');  
    }

    public function actionSubscription()
    {
        $this->layout = 'main';
        return $this->render('/subscription');  
    }

    public function actionSuccess()
    {
        $this->layout = 'auth_main';
        return $this->render('/success');  
    }

    public function actionSuccess2()
    {
        $this->layout = 'auth_main';
        return $this->render('/success-2');  
    }

    public function actionSuccess3()
    {
        $this->layout = 'auth_main';
        return $this->render('/success-3');  
    }

    public function actionSupplierDueReport()
    {
        $this->layout = 'main';
        return $this->render('/supplier-due-report');  
    }

    public function actionSupplierReport()
    {
        $this->layout = 'main';
        return $this->render('/supplier-report');  
    }

    public function actionSuppliers()
    {
        $this->layout = 'main';
        return $this->render('/suppliers');  
    }

    public function actionSystemSettings()
    {
        $this->layout = 'main';
        return $this->render('/system-settings');  
    }

    public function actionTablesBasic()
    {
        $this->layout = 'main';
        return $this->render('/tables-basic');  
    }

    public function actionTaxRates()
    {
        $this->layout = 'main';
        return $this->render('/tax-rates');  
    }

    public function actionTaxReports()
    {
        $this->layout = 'main';
        return $this->render('/tax-reports');  
    }

    public function actionTestimonials()
    {
        $this->layout = 'main';
        return $this->render('/testimonials');  
    }

    public function actionTodo()
    {
        $this->layout = 'main';
        return $this->render('/todo');  
    }

    public function actionTodoList()
    {
        $this->layout = 'main';
        return $this->render('/todo-list');  
    }

    public function actionTrialBalance()
    {
        $this->layout = 'main';
        return $this->render('/trial-balance');  
    }

    public function actionTwoStepVerification()
    {
        $this->layout = 'auth_main';
        return $this->render('/two-step-verification');  
    }

    public function actionTwoStepVerification2()
    {
        $this->layout = 'auth_main';
        return $this->render('/two-step-verification-2');  
    }
    
    public function actionTwoStepVerification3()
    {
        $this->layout = 'auth_main';
        return $this->render('/two-step-verification-3');  
    }

    public function actionUiAccordion()
    {
        $this->layout = 'main';
        return $this->render('/ui-accordion');  
    }
    
    public function actionUiAlerts()
    {
        $this->layout = 'main';
        return $this->render('/ui-alerts');  
    }

    public function actionUiAvatar()
    {
        $this->layout = 'main';
        return $this->render('/ui-avatar');  
    }

    public function actionUiBadges()
    {
        $this->layout = 'main';
        return $this->render('/ui-badges');  
    }

    public function actionUiBorders()
    {
        $this->layout = 'main';
        return $this->render('/ui-borders');  
    }
    
    public function actionUiBreadcrumb()
    {
        $this->layout = 'main';
        return $this->render('/ui-breadcrumb');  
    }
    
    public function actionUiButtons()
    {
        $this->layout = 'main';
        return $this->render('/ui-buttons');  
    }
    
    public function actionUiButtonsGroup()
    {
        $this->layout = 'main';
        return $this->render('/ui-buttons-group');  
    }
    
    public function actionUiCards()
    {
        $this->layout = 'main';
        return $this->render('/ui-cards');  
    }
    
    public function actionUiCarousel()
    {
        $this->layout = 'main';
        return $this->render('/ui-carousel');  
    }
    
    public function actionUiClipboard()
    {
        $this->layout = 'main';
        return $this->render('/ui-clipboard');  
    }
    
    public function actionUiColors()
    {
        $this->layout = 'main';
        return $this->render('/ui-colors');  
    }
    
    public function actionUiCounter()
    {
        $this->layout = 'main';
        return $this->render('/ui-counter');  
    }
    
    public function actionUiDragDrop()
    {
        $this->layout = 'main';
        return $this->render('/ui-drag-drop');  
    }
    
    public function actionUiDropdowns()
    {
        $this->layout = 'main';
        return $this->render('/ui-dropdowns');  
    }
    
    public function actionUiGrid()
    {
        $this->layout = 'main';
        return $this->render('/ui-grid');  
    }
        
    public function actionUiImages()
    {
        $this->layout = 'main';
        return $this->render('/ui-images');  
    }
    
    public function actionUiLightbox()
    {
        $this->layout = 'main';
        return $this->render('/ui-lightbox');  
    } 
    
    public function actionUiMedia()
    {
        $this->layout = 'main';
        return $this->render('/ui-media');  
    }
    
    public function actionUiModals()
    {
        $this->layout = 'main';
        return $this->render('/ui-modals');  
    }

    public function actionUiNavTabs()
    {
        $this->layout = 'main';
        return $this->render('/ui-nav-tabs');  
    }

    public function actionUiOffcanvas()
    {
        $this->layout = 'main';
        return $this->render('/ui-offcanvas');  
    }
    
    public function actionUiPagination()
    {
        $this->layout = 'main';
        return $this->render('/ui-pagination');  
    }
    
    public function actionUiPlaceholders()
    {
        $this->layout = 'main';
        return $this->render('/ui-placeholders');  
    }
    
    public function actionUiPopovers()
    {
        $this->layout = 'main';
        return $this->render('/ui-popovers');  
    }
    
    public function actionUiProgress()
    {
        $this->layout = 'main';
        return $this->render('/ui-progress');  
    }
    
    public function actionUiRangeslider()
    {
        $this->layout = 'main';
        return $this->render('/ui-rangeslider');  
    }
    
    public function actionUiRating()
    {
        $this->layout = 'main';
        return $this->render('/ui-rating');  
    }
    
    public function actionUiRibbon()
    {
        $this->layout = 'main';
        return $this->render('/ui-ribbon');  
    }

    public function actionUiScrollbar()
    {
        $this->layout = 'main';
        return $this->render('/ui-scrollbar');  
    }

    public function actionUiSortable()
    {
        $this->layout = 'main';
        return $this->render('/ui-sortable');  
    }
    
    public function actionUiSpinner()
    {
        $this->layout = 'main';
        return $this->render('/ui-spinner');  
    }
    
    public function actionUiStickynote()
    {
        $this->layout = 'main';
        return $this->render('/ui-stickynote');  
    }

    public function actionUiSweetalerts()
    {
        $this->layout = 'main';
        return $this->render('/ui-sweetalerts');  
    }

    public function actionUiSwiperjs()
    {
        $this->layout = 'main';
        return $this->render('/ui-swiperjs');  
    }    

    public function actionUiTextEditor()
    {
        $this->layout = 'main';
        return $this->render('/ui-text-editor');  
    }

    public function actionUiTimeline()
    {
        $this->layout = 'main';
        return $this->render('/ui-timeline');  
    }

    public function actionUiToasts()
    {
        $this->layout = 'main';
        return $this->render('/ui-toasts');  
    }

    public function actionUiTooltips()
    {
        $this->layout = 'main';
        return $this->render('/ui-tooltips');  
    }

    public function actionUiTypography()
    {
        $this->layout = 'main';
        return $this->render('/ui-typography');  
    }
    
    public function actionUiVideo()
    {
        $this->layout = 'main';
        return $this->render('/ui-video');  
    }
    public function actionUnderMaintenance()
    {
        $this->layout = 'auth_main';
        return $this->render('/under-maintenance');  
    }

    public function actionUnits()
    {
        $this->layout = 'main';
        return $this->render('/units');  
    }

    public function actionUsers()
    {
        $this->layout = 'main';
        return $this->render('/users');  
    }

    public function actionVarriantAttributes()
    {
        $this->layout = 'main';
        return $this->render('/varriant-attributes');  
    }

    public function actionVideoCall()
    {
        $this->layout = 'main';
        return $this->render('/video-call');  
    }

    public function actionWarehouse()
    {
        $this->layout = 'main';
        return $this->render('/warehouse');  
    }

    public function actionWarranty()
    {
        $this->layout = 'main';
        return $this->render('/warranty');  
    }

    public function actionWishlist()
    {
        $this->layout = 'main';
        return $this->render('/wishlist');  
    }    

}

