using Microsoft.AspNetCore.Mvc;

namespace template.Controllers
{
    public class HomeController : Controller
    {
        // Index
        [Route("index")]
        public IActionResult Index()
        {
            return View("~/views/index.cshtml");
        }

        [Route("admin-dashboard")]
        public IActionResult AdminDashboard()
        {
            return View("~/views/admin-dashboard.cshtml");
        }

        [Route("account-list")]
        public IActionResult AccountList()
        {
            return View("~/views/account-list.cshtml");
        }

        [Route("account-statement")]
        public IActionResult AccountStatement()
        {
            return View("~/views/account-statement.cshtml");
        }

        [Route("activities")]
        public IActionResult Activities()
        {
            return View("~/views/activities.cshtml");
        }
        
        [Route("add-employee")]
        public IActionResult AddEmployee()
        {
            
            return View("~/views/add-employee.cshtml");  
        }

        [Route("add-product")]
        public IActionResult AddProduct()
        {
            
            return View("~/views/add-product.cshtml");  
        }

        [Route("all-blog")]
        public IActionResult AllBlog()
        {
            
            return View("~/views/all-blog.cshtml");  
        }

        [Route("annual-report")]
        public IActionResult AnnualReport()
        {
            
            return View("~/views/annual-report.cshtml");  
        }

        [Route("appearance")]
        public IActionResult Appearance()
        {
            
            return View("~/views/appearance.cshtml");  
        }

        [Route("attendence-admin")]
        public IActionResult AttendenceAdmin()
        {
            
            return View("~/views/attendence-admin.cshtml");  
        }
        
        [Route("attendence-employee")]
        public IActionResult AttendenceEmployee()
        {
            
            return View("~/views/attendence-employee.cshtml");  
        }

        [Route("audio-call")]
        public IActionResult AudioCall()
        {
            
            return View("~/views/audio-call.cshtml");  
        }

        [Route("balance-sheet")]
        public IActionResult BalanceSheet()
        {
            
            return View("~/views/balance-sheet.cshtml");  
        }

        [Route("balance-sheet-v2")]
        public IActionResult BalanceSheetV2()
        {
            
            return View("~/views/balance-sheet-v2.cshtml");  
        }
        
        [Route("ban-ip-address")]
        public IActionResult BanIpAddress()
        {
            
            return View("~/views/ban-ip-address.cshtml");  
        }

        [Route("bank-settings-grid")]
        public IActionResult BankSettingsGrid()
        {
            
            return View("~/views/bank-settings-grid.cshtml");  
        }

        [Route("barcode")]
        public IActionResult Barcode()
        {
            
            return View("~/views/barcode.cshtml");  
        }

        [Route("best-seller")]
        public IActionResult BestSeller()
        {
            
            return View("~/views/best-seller.cshtml");  
        }

        [Route("billers")]
        public IActionResult Billers()
        {
            
            return View("~/views/billers.cshtml");  
        }

        [Route("blank-page")]
        public IActionResult BlankPage()
        {
            
            return View("~/views/blank-page.cshtml");  
        }

        [Route("blog-categories")]
        public IActionResult BlogCategories()
        {
            
            return View("~/views/blog-categories.cshtml");  
        }

        [Route("blog-comments")]
        public IActionResult BlogComments()
        {
            
            return View("~/views/blog-comments.cshtml");  
        }

        [Route("blog-details")]
        public IActionResult BlogDetails()
        {
            
            return View("~/views/blog-details.cshtml");  
        }

        [Route("blog-tag")]
        public IActionResult BlogTag()
        {
            
            return View("~/views/blog-tag.cshtml");  
        }

        [Route("brand-list")]
        public IActionResult BrandList()
        {
            
            return View("~/views/brand-list.cshtml");  
        }

        [Route("calendar")]
        public IActionResult Calendar()
        {
            
            return View("~/views/calendar.cshtml");  
        }

        [Route("call-history")]
        public IActionResult CallHistory()
        {
            
            return View("~/views/call-history.cshtml");  
        }

        [Route("cart")]
        public IActionResult Cart()
        {
            
            return View("~/views/cart.cshtml");  
        }
        
        [Route("companies")]
        public IActionResult Companies()
        {
            
            return View("~/views/companies.cshtml");  
        }
        
        [Route("category-list")]
        public IActionResult CategoryList()
        {
            
            return View("~/views/category-list.cshtml");  
        }
        
        [Route("cash-flow")]
        public IActionResult CashFlow()
        {
            
            return View("~/views/cash-flow.cshtml");  
        }

        [Route("cash-flow-v2")]
        public IActionResult CashFlowV2()
        {
            
            return View("~/views/cash-flow-v2.cshtml");  
        }

        [Route("chart-apex")]
        public IActionResult ChartApex()
        {
            
            return View("~/views/chart-apex.cshtml");  
        }

        [Route("chart-c3")]
        public IActionResult ChartC3()
        {
            
            return View("~/views/chart-c3.cshtml");  
        }

        [Route("chart-flot")]
        public IActionResult ChartFlot()
        {
            
            return View("~/views/chart-flot.cshtml");  
        }
        
        [Route("chart-js")]
        public IActionResult ChartJs()
        {
            
            return View("~/views/chart-js.cshtml");  
        }
        
        [Route("chart-morris")]
        public IActionResult ChartMorris()
        {
            
            return View("~/views/chart-morris.cshtml");  
        }
        
        [Route("chart-peity")]
        public IActionResult ChartPeity()
        {
            
            return View("~/views/chart-peity.cshtml");  
        }

        [Route("chat")]
        public IActionResult Chat()
        {
            
            return View("~/views/chat.cshtml");  
        }

        [Route("checkout")]
        public IActionResult Checkout()
        {
            
            return View("~/views/checkout.cshtml");  
        }
        
        [Route("cities")]
        public IActionResult Cities()
        {
            
            return View("~/views/cities.cshtml");  
        }
        
        [Route("coming-soon")]
        public IActionResult ComingSoon()
        {

            return View("~/views/coming-soon.cshtml");  
        }
        
        [Route("company-settings")]
        public IActionResult CompanySettings()
        {
            
            return View("~/views/company-settings.cshtml");  
        } 
        
        [Route("connected-apps")]
        public IActionResult ConnectedApps()
        {
            
            return View("~/views/connected-apps.cshtml");  
        } 
        
        [Route("contacts")]
        public IActionResult Contacts()
        {
            
            return View("~/views/contacts.cshtml");  
        }
        
        [Route("countries")]
        public IActionResult Countries()
        {
            
            return View("~/views/countries.cshtml");  
        }
        
        [Route("coupons")]
        public IActionResult Coupons()
        {
            return View("~/views/coupons.cshtml");
        }

        [Route("currency-settings")]
        public IActionResult CurrencySettings()
        {
            return View("~/views/currency-settings.cshtml");
        }

        [Route("custom-fields")]
        public IActionResult CustomFields()
        {
            return View("~/views/custom-fields.cshtml");
        }
        
        [Route("customer-due-report")]
        public IActionResult CustomerDueReport()
        {
            return View("~/views/customer-due-report.cshtml");
        }
        
        [Route("customer-report")]
        public IActionResult CustomerReport()
        {
            return View("~/views/customer-report.cshtml");
        }
        
        [Route("customers")]
        public IActionResult Customers()
        {
            return View("~/views/customers.cshtml");
        }

        [Route("data-tables")]
        public IActionResult DataTables()
        {
            return View("~/views/data-tables.cshtml");
        }

        [Route("dashboard")]
        public IActionResult Dashboard()
        {
            return View("~/views/dashboard.cshtml");
        }

        [Route("delete-account")]
        public IActionResult DeleteAccount()
        {
            return View("~/views/delete-account.cshtml");
        }

        [Route("department-grid")]
        public IActionResult DepartmentGrid()
        {
            return View("~/views/department-grid.cshtml");
        }
        
        [Route("department-list")]
        public IActionResult DepartmentList()
        {
            return View("~/views/department-list.cshtml");
        }

        [Route("designation")]
        public IActionResult Designation()
        {
            return View("~/views/designation.cshtml");
        }

        [Route("discount")]
        public IActionResult Discount()
        {
            return View("~/views/discount.cshtml");
        }

        [Route("discount-plan")]
        public IActionResult DiscountPlan()
        {
            return View("~/views/discount-plan.cshtml");
        }

        [Route("domain")]
        public IActionResult Domain()
        {
            return View("~/views/domain.cshtml");
        }

        [Route("edit-employee")]
        public IActionResult EditEmployee()
        {
            return View("~/views/edit-employee.cshtml");
        }
        
        [Route("edit-product")]
        public IActionResult EditProduct()
        {
            return View("~/views/edit-product.cshtml");
        }

        [Route("email")]
        public IActionResult Email()
        {
            return View("~/views/email.cshtml");
        }

        [Route("email-reply")]
        public IActionResult EmailReply()
        {
            return View("~/views/email-reply.cshtml");
        }
        
        [Route("email-settings")]
        public IActionResult EmailSettings()
        {
            return View("~/views/email-settings.cshtml");
        }

        [Route("email-templates")]
        public IActionResult EmailTemplates()
        {
            return View("~/views/email-templates.cshtml");
        }

        [Route("email-verification")]
        public IActionResult EmailVerification()
        {
            return View("~/views/email-verification.cshtml");
        }

        [Route("email-verification-2")]
        public IActionResult EmailVerification2()
        {
            return View("~/views/email-verification-2.cshtml");
        }

        [Route("email-verification-3")]
        public IActionResult EmailVerification3()
        {
            return View("~/views/email-verification-3.cshtml");
        }

        [Route("employee-details")]
        public IActionResult EmployeeDetails()
        {
            return View("~/views/employee-details.cshtml");
        }

        [Route("employee-salary")]
        public IActionResult EmployeeSalary()
        {
            return View("~/views/employee-salary.cshtml");
        }

        [Route("employees-grid")]
        public IActionResult EmployeesGrid()
        {
            return View("~/views/employees-grid.cshtml");
        }

        [Route("employees-list")]
        public IActionResult EmployeesList()
        {
            return View("~/views/employees-list.cshtml");
        }

        [Route("error-404")]
        public IActionResult Error404()
        {
            return View("~/views/error-404.cshtml");
        }
        
        [Route("error-500")]
        public IActionResult Error500()
        {   
            return View("~/views/error-500.cshtml");
        }

        [Route("expense-category")]
        public IActionResult ExpenseCategory()
        {
            return View("~/views/expense-category.cshtml");
        }

        [Route("expense-list")]
        public IActionResult ExpenseList()
        {
            return View("~/views/expense-list.cshtml");
        }
        
        [Route("expense-report")]
        public IActionResult ExpenseReport()
        {
            return View("~/views/expense-report.cshtml");
        }
        
        [Route("expired-products")]
        public IActionResult ExpiredProducts()
        {
            return View("~/views/expired-products.cshtml");
        }
        
        [Route("faq")]
        public IActionResult Faq()
        {
            return View("~/views/faq.cshtml");
        }  

        [Route("file-manager")]
        public IActionResult FileManager()
        {
            return View("~/views/file-manager.cshtml");
        }

        [Route("form-basic-inputs")]
        public IActionResult FormBasicInputs()
        {
            return View("~/views/form-basic-inputs.cshtml");
        }
        
        [Route("form-checkbox-radios")]
        public IActionResult FormCheckboxRadios()
        {
            return View("~/views/form-checkbox-radios.cshtml");
        }
        
        [Route("form-elements")]
        public IActionResult FormElements()
        {
            return View("~/views/form-elements.cshtml");
        }
        
        [Route("form-fileupload")]
        public IActionResult FormFileupload()
        {
            return View("~/views/form-fileupload.cshtml");
        }
        
        [Route("form-floating-labels")]
        public IActionResult FormFloatingLabels()
        {
            return View("~/views/form-floating-labels.cshtml");
        }
        
        [Route("form-grid-gutters")]
        public IActionResult FormGridGutters()
        {
            return View("~/views/form-grid-gutters.cshtml");
        }    

        [Route("form-horizontal")]
        public IActionResult FormHorizontal()
        {
            return View("~/views/form-horizontal.cshtml");
        }

        [Route("form-input-groups")]
        public IActionResult FormInputGroups()
        {
            return View("~/views/form-input-groups.cshtml");
        }

        [Route("form-mask")]
        public IActionResult FormMask()
        {
            return View("~/views/form-mask.cshtml");
        }

        [Route("form-pickers")]
        public IActionResult FormPickers()
        {
            return View("~/views/form-pickers.cshtml");
        }

        [Route("form-select")]
        public IActionResult FormSelect()
        {
            return View("~/views/form-select.cshtml");
        }

        [Route("form-select2")]
        public IActionResult FormSelect2()
        {
            return View("~/views/form-select2.cshtml");
        }

        [Route("form-validation")]
        public IActionResult FormValidation()
        {
            return View("~/views/form-validation.cshtml");
        }
        
        [Route("form-vertical")]
        public IActionResult FormVertical()
        {
            return View("~/views/form-vertical.cshtml");
        }
        
        [Route("form-wizard")]
        public IActionResult FormWizard()
        {
            return View("~/views/form-wizard.cshtml");
        }

        [Route("forgot-password")]
        public IActionResult ForgotPassword()
        {
            return View("~/views/forgot-password.cshtml");
        }

        [Route("forgot-password-2")]
        public IActionResult ForgotPassword2()
        {
            return View("~/views/forgot-password-2.cshtml");
        }

        [Route("forgot-password-3")]
        public IActionResult ForgotPassword3()
        {
            return View("~/views/forgot-password-3.cshtml");
        }

        [Route("gdpr-settings")]
        public IActionResult GdprSettings()
        {
            return View("~/views/gdpr-settings.cshtml");
        }

        [Route("general-settings")]
        public IActionResult GeneralSettings()
        {
            return View("~/views/general-settings.cshtml");
        }

        [Route("holidays")]
        public IActionResult Holidays()
        {
            return View("~/views/holidays.cshtml");
        }

        [Route("gift-cards")]
        public IActionResult GiftCards()
        {
            return View("~/views/gift-cards.cshtml");
        }

        [Route("icon-bootstrap")]
        public IActionResult IconBootstrap()
        {
            return View("~/views/icon-bootstrap.cshtml");
        }

        [Route("icon-feather")]
        public IActionResult IconFeather()
        {
            return View("~/views/icon-feather.cshtml");
        }

        [Route("icon-flag")]
        public IActionResult IconFlag()
        {
            return View("~/views/icon-flag.cshtml");
        }

        [Route("icon-fontawesome")]
        public IActionResult IconFontawesome()
        {
            return View("~/views/icon-fontawesome.cshtml");
        }

        [Route("icon-ionic")]
        public IActionResult IconIonic()
        {
            return View("~/views/icon-ionic.cshtml");
        }
        
        [Route("icon-material")]
        public IActionResult IconMaterial()
        {
            return View("~/views/icon-material.cshtml");
        }
        
        [Route("icon-pe7")]
        public IActionResult IconPe7()
        {
            return View("~/views/icon-pe7.cshtml");
        }
        
        [Route("icon-remix")]
        public IActionResult IconRemix()
        {
            return View("~/views/icon-remix.cshtml");
        }
        
        [Route("icon-simpleline")]
        public IActionResult IconSimpleline()
        {
            return View("~/views/icon-simpleline.cshtml");
        }
        
        [Route("icon-tabler")]
        public IActionResult IconTabler()
        {
            return View("~/views/icon-tabler.cshtml");
        }
        
        [Route("icon-themify")]
        public IActionResult IconThemify()
        {
            return View("~/views/icon-themify.cshtml");
        }
        
        [Route("icon-typicon")]
        public IActionResult IconTypicon()
        {
            return View("~/views/icon-typicon.cshtml");
        }
        
        [Route("icon-weather")]
        public IActionResult IconWeather()
        {
            return View("~/views/icon-weather.cshtml");
        }
        
        [Route("income")]
        public IActionResult Income()
        {
            return View("~/views/income.cshtml");
        }
        
        [Route("income-category")]
        public IActionResult IncomeCategory()
        {
            return View("~/views/income-category.cshtml");  
        }

        [Route("income-report")]
        public IActionResult IncomeReport()
        {
            
            return View("~/views/income-report.cshtml"); 
        }

        [Route("inventory-report")]
        public IActionResult InventoryReport()
        {
            
            return View("~/views/inventory-report.cshtml");  
        }
        
        [Route("invoice")]
        public IActionResult Invoice() 
        {
            
            return View("~/views/invoice.cshtml");  
        }
        
        [Route("invoice-details")]
        public IActionResult InvoiceDetails()
        {
            
            return View("~/views/invoice-details.cshtml");  
        }
        
        [Route("invoice-report")]
        public IActionResult InvoiceReport()
        {
            
            return View("~/views/invoice-report.cshtml");  
        }

        [Route("invoice-settings")]
        public IActionResult InvoiceSettings()
        {
            
            return View("~/views/invoice-settings.cshtml");  
        }

        [Route("invoice-templates")]
        public IActionResult InvoiceTemplates()
        {
            
            return View("~/views/invoice-templates.cshtml");  
        }

        [Route("language-settings")]
        public IActionResult LanguageSettings()
        {
            
            return View("~/views/language-settings.cshtml");  
        }

        [Route("language-settings-web")]
        public IActionResult LanguageSettingsWeb()
        {
            
            return View("~/views/language-settings-web.cshtml");  
        }

        [Route("layout-boxed")]
        public IActionResult LayoutBoxed()
        {
            return View("~/views/layout-boxed.cshtml");
        }

        [Route("layout-dark")]
        public IActionResult LayoutDark()
        {
            return View("~/views/layout-dark.cshtml");
        }

        [Route("layout-detached")]
        public IActionResult LayoutDetached()
        {
            return View("~/views/layout-detached.cshtml");
        }
        
        [Route("layout-horizontal")]
        public IActionResult LayoutHorizontal()
        {
            return View("~/views/layout-horizontal.cshtml");
        }

        [Route("layout-hovered")]
        public IActionResult LayoutHovered()
        {
            return View("~/views/layout-hovered.cshtml");
        }
        
        [Route("layout-modern")]
        public IActionResult LayoutModern()
        {
            return View("~/views/layout-modern.cshtml");
        }
        
        [Route("layout-rtl")]
        public IActionResult LayoutRtl()
        {
            return View("~/views/layout-rtl.cshtml");
        }
        
        [Route("layout-two-column")]
        public IActionResult LayoutTwoColumn()
        {
            return View("~/views/layout-two-column.cshtml");
        }
        
        [Route("leaves-admin")]
        public IActionResult LeavesAdmin()
        {
            return View("~/views/leaves-admin.cshtml");
        }
        
        [Route("leaves-employee")]
        public IActionResult LeavesEmployee()
        {
            return View("~/views/leaves-employee.cshtml");
        }
        
        [Route("leave-types")]
        public IActionResult LeaveTypes()
        {
            return View("~/views/leave-types.cshtml");
        }
        
        [Route("localization-settings")]
        public IActionResult LocalizationSettings()
        {
            return View("~/views/localization-settings.cshtml");
        }

        [Route("lock-screen")]
        public IActionResult LockScreen()
        {
            return View("~/views/lock-screen.cshtml");
        }
        
        [Route("low-stocks")]
        public IActionResult LowStocks()
        {
            return View("~/views/low-stocks.cshtml");
        }
        
        [Route("manage-stocks")]
        public IActionResult ManageStocks()
        {
            return View("~/views/manage-stocks.cshtml");
        }
        
        [Route("maps-leaflet")]
        public IActionResult MapsLeaflet()
        {
            return View("~/views/maps-leaflet.cshtml");
        }
        
        [Route("maps-vector")]
        public IActionResult MapsVector()
        {
            return View("~/views/maps-vector.cshtml"); 
        }
        
        [Route("money-transfer")]
        public IActionResult MoneyTransfer()
        {
            return View("~/views/money-transfer.cshtml"); 
        }
        
        [Route("notes")]
        public IActionResult Notes()
        {
            return View("~/views/notes.cshtml"); 
        }
        
        [Route("notification")]
        public IActionResult Notification()
        {
            return View("~/views/notification.cshtml"); 
        }
        
        [Route("online-orders")]
        public IActionResult OnlineOrders()
        {
            return View("~/views/online-orders.cshtml"); 
        }
        
        [Route("orders")]
        public IActionResult Orders()
        {
            return View("~/views/orders.cshtml"); 
        }
        
        [Route("otp-settings")]
        public IActionResult OtpSettings()
        {
            
            return View("~/views/otp-settings.cshtml");   
        }

        [Route("packages")]
        public IActionResult Packages()
        {
            return View("~/views/packages.cshtml");
        }
        
        [Route("pages")]
        public IActionResult Pages()
        {
            return View("~/views/pages.cshtml");
        }
        
        [Route("payment-gateway-settings")]
        public IActionResult PaymentGatewaySettings()
        {
            return View("~/views/payment-gateway-settings.cshtml");
        }
        
        [Route("payslip")]
        public IActionResult Payslip()
        {
            return View("~/views/payslip.cshtml");
        }
        
        [Route("permissions")]
        public IActionResult Permissions()
        {
            return View("~/views/permissions.cshtml");
        }
        
        [Route("pos")]
        public IActionResult Pos()
        {
            return View("~/views/pos.cshtml");
        }
        
        [Route("pos-2")]
        public IActionResult Pos2()
        {
            return View("~/views/pos-2.cshtml");
        }
        
        [Route("pos-3")]
        public IActionResult Pos3()
        {
            return View("~/views/pos-3.cshtml");
        }
        
        [Route("pos-4")]
        public IActionResult Pos4()
        {
            return View("~/views/pos-4.cshtml");
        }

        [Route("pos-5")]
        public IActionResult Pos5()
        {
            return View("~/views/pos-5.cshtml");
        }

        [Route("pos-orders")]
        public IActionResult PosOrders()
        {
            return View("~/views/pos-orders.cshtml");
        }
        
        [Route("pos-settings")]
        public IActionResult PosSettings()
        {
            return View("~/views/pos-settings.cshtml");
        }
        
        [Route("preference")]
        public IActionResult Preference()
        {
            return View("~/views/preference.cshtml");
        }

        [Route("prefixes")]
        public IActionResult Prefixes()
        {
            return View("~/views/prefixes.cshtml");
        }

        [Route("pricing")]
        public IActionResult Pricing()
        {
            return View("~/views/pricing.cshtml");
        }

        [Route("printer-settings")]
        public IActionResult PrinterSettings()
        {
            return View("~/views/printer-settings.cshtml");
        }
    
        
        [Route("product-details")]
        public IActionResult ProductDetails()
        {
            
            return View("~/views/product-details.cshtml");  
        }
        
        [Route("product-expiry-report")]
        public IActionResult ProductExpiryReport()
        {
            return View("~/views/product-expiry-report.cshtml");
        }
        
        [Route("product-list")]
        public IActionResult ProductList()
        {
            return View("~/views/product-list.cshtml");
        }
        
        [Route("product-quantity-alert")]
        public IActionResult ProductQuantityAlert()
        {
            return View("~/views/product-quantity-alert.cshtml");
        }
        
        [Route("product-report")]
        public IActionResult ProductReport()
        {
            return View("~/views/product-report.cshtml");
        }
        
        [Route("products")]
        public IActionResult Products()
        {
            
            return View("~/views/products.cshtml");  
        }
        
        [Route("profile")]
        public IActionResult Profile()
        {
            
            return View("~/views/profile.cshtml");  
        }
        
        [Route("profit-and-loss")]
        public IActionResult ProfitAndLoss()
        {
            
            return View("~/views/profit-and-loss.cshtml");  
        }
        
        [Route("projects")]
        public IActionResult Projects()
        {
            
            return View("~/views/projects.cshtml");  
        }   
        
        [Route("purchase-list")]
        public IActionResult PurchaseList()
        {
            
            return View("~/views/purchase-list.cshtml");  
        }

        [Route("purchase-order-report")]
        public IActionResult PurchaseOrderReport()
        {
            
            return View("~/views/purchase-order-report.cshtml");  
        }
        
        [Route("purchase-report")]
        public IActionResult PurchaseReport()
        {
            
            return View("~/views/purchase-report.cshtml");  
        }

        [Route("purchase-returns")]
        public IActionResult PurchaseReturns()
        {
            
            return View("~/views/purchase-returns.cshtml");  
        }

        [Route("purchase-transaction")]
        public IActionResult PurchaseTransaction()
        {
            
            return View("~/views/purchase-transaction.cshtml");  
        }

        [Route("qrcode")]
        public IActionResult Qrcode()
        {
            
            return View("~/views/qrcode.cshtml");
        }

        [Route("quotation-list")]
        public IActionResult QuotationList()
        {
            
            return View("~/views/quotation-list.cshtml");  
        }

        [Route("register")]
        public IActionResult Register()
        {

            return View("~/views/register.cshtml");  
        }

        [Route("register-2")]
        public IActionResult Register2()
        {

            return View("~/views/register-2.cshtml");  
        }

        [Route("register-3")]
        public IActionResult Register3()
        {

            return View("~/views/register-3.cshtml");  
        }

        [Route("reset-password")]
        public IActionResult ResetPassword()
        {

            return View("~/views/reset-password.cshtml");  
        }

        [Route("reset-password-2")]
        public IActionResult ResetPassword2()
        {

            return View("~/views/reset-password-2.cshtml");  
        }   

        [Route("reset-password-3")]
        public IActionResult ResetPassword3()
        {

            return View("~/views/reset-password-3.cshtml");  
        }   

        [Route("reviews")]
        public IActionResult Reviews()
        {
            
            return View("~/views/reviews.cshtml");  
        }

        [Route("roles-permissions")]
        public IActionResult RolesPermissions()
        {
            
            return View("~/views/roles-permissions.cshtml");  
        }

        [Route("sales-dashboard")]
        public IActionResult SalesDashboard()
        {
            
            return View("~/views/sales-dashboard.cshtml");  
        }

        [Route("sales-report")]
        public IActionResult SalesReport()
        {
            
            return View("~/views/sales-report.cshtml");  
        }

        [Route("sales-returns")]
        public IActionResult SalesReturns()
        {
            
            return View("~/views/sales-returns.cshtml");  
        }

        [Route("sales-tax")]
        public IActionResult SalesTax()
        {
            
            return View("~/views/sales-tax.cshtml");  
        }

        [Route("search-list")]
        public IActionResult SearchList()
        {
            
            return View("~/views/search-list.cshtml");  
        }

        [Route("security-settings")]
        public IActionResult SecuritySettings()
        {
            
            return View("~/views/security-settings.cshtml");  
        }
        
        [Route("shift")]
        public IActionResult Shift()
        {
            
            return View("~/views/shift.cshtml");  
        }

        [Route("signatures")]
        public IActionResult Signatures()
        {
            
            return View("~/views/signatures.cshtml");  
        }

        [Route("signin")]
        public IActionResult Signin()
        {

            return View("~/views/signin.cshtml");  
        }

        [Route("signin-2")]
        public IActionResult Signin2()
        {

            return View("~/views/signin-2.cshtml");  
        }
        
        [Route("signin-3")]
        public IActionResult Signin3()
        {
 
            return View("~/views/signin-3.cshtml");  
        }

        [Route("sms-settings")]
        public IActionResult SmsSettings()
        {
            
            return View("~/views/sms-settings.cshtml");  
        }

        [Route("sms-templates")]
        public IActionResult SmsTemplates()
        {
            
            return View("~/views/sms-templates.cshtml");  
        }
        
        [Route("social-authentication")]
        public IActionResult SocialAuthentication()
        {
            
            return View("~/views/social-authentication.cshtml");  
        }
        
        [Route("social-feed")]
        public IActionResult SocialFeed()
        {
            
            return View("~/views/social-feed.cshtml");  
        }

        [Route("sold-stock")]
        public IActionResult SoldStock()
        {
            
            return View("~/views/sold-stock.cshtml");  
        }
        
        [Route("states")]
        public IActionResult States()
        {
            
            return View("~/views/states.cshtml");  
        }
        
        [Route("stock-adjustment")]
        public IActionResult StockAdjustment()
        {
            
            return View("~/views/stock-adjustment.cshtml");  
        }

        [Route("stock-history")]
        public IActionResult StockHistory()
        {
            
            return View("~/views/stock-history.cshtml");  
        }

        [Route("stock-transfer")]
        public IActionResult StockTransfer()
        {
            
            return View("~/views/stock-transfer.cshtml");  
        }

        [Route("storage-settings")]
        public IActionResult StorageSettings()
        {
            
            return View("~/views/storage-settings.cshtml");  
        }

        [Route("store-list")]
        public IActionResult StoreList()
        {
            
            return View("~/views/store-list.cshtml");  
        }

        [Route("sub-categories")]
        public IActionResult SubCategories()
        {
            
            return View("~/views/sub-categories.cshtml");  
        }

        [Route("subscription")]
        public IActionResult Subscription()
        {
            
            return View("~/views/subscription.cshtml");  
        }

        [Route("success")]
        public IActionResult Success()
        {

            return View("~/views/success.cshtml");  
        }

        [Route("success-2")]
        public IActionResult Success2()
        {

            return View("~/views/success-2.cshtml");  
        }

        [Route("success-3")]
        public IActionResult Success3()
        {

            return View("~/views/success-3.cshtml");  
        }

        [Route("supplier-due-report")]
        public IActionResult SupplierDueReport()
        {
            
            return View("~/views/supplier-due-report.cshtml");  
        }

        [Route("supplier-report")]
        public IActionResult SupplierReport()
        {
            
            return View("~/views/supplier-report.cshtml");  
        }

        [Route("suppliers")]
        public IActionResult Suppliers()
        {
            
            return View("~/views/suppliers.cshtml");  
        }

        [Route("system-settings")]
        public IActionResult SystemSettings()
        {
            
            return View("~/views/system-settings.cshtml");  
        }

        [Route("tables-basic")]
        public IActionResult TablesBasic()
        {
            
            return View("~/views/tables-basic.cshtml");  
        }

        [Route("tax-rates")]
        public IActionResult TaxRates()
        {
            
            return View("~/views/tax-rates.cshtml");  
        }

        [Route("tax-reports")]
        public IActionResult TaxReports()
        {
            
            return View("~/views/tax-reports.cshtml");  
        }

        [Route("testimonials")]
        public IActionResult Testimonials()
        {
            
            return View("~/views/testimonials.cshtml");  
        }

        [Route("todo")]
        public IActionResult Todo()
        {
            
            return View("~/views/todo.cshtml");  
        }

        [Route("todo-list")]
        public IActionResult TodoList()
        {
            
            return View("~/views/todo-list.cshtml");  
        }

        [Route("trial-balance")]
        public IActionResult TrialBalance()
        {
            
            return View("~/views/trial-balance.cshtml");  
        }

        [Route("two-step-verification")]
        public IActionResult TwoStepVerification()
        {

            return View("~/views/two-step-verification.cshtml");  
        }

        [Route("two-step-verification-2")]
        public IActionResult TwoStepVerification2()
        {

            return View("~/views/two-step-verification-2.cshtml");  
        }
        
        [Route("two-step-verification-3")]
        public IActionResult TwoStepVerification3()
        {

            return View("~/views/two-step-verification-3.cshtml");  
        }

        [Route("ui-accordion")]
        public IActionResult UiAccordion()
        {
            
            return View("~/views/ui-accordion.cshtml");  
        }
        
        [Route("ui-alerts")]
        public IActionResult UiAlerts()
        {
            
            return View("~/views/ui-alerts.cshtml");  
        }

        [Route("ui-avatar")]
        public IActionResult UiAvatar()
        {
            
            return View("~/views/ui-avatar.cshtml");  
        }

        [Route("ui-badges")]
        public IActionResult UiBadges()
        {
            return View("~/views/ui-badges.cshtml");
        }

        [Route("ui-borders")]
        public IActionResult UiBorders()
        {
            return View("~/views/ui-borders.cshtml");
        }
        
        [Route("ui-breadcrumb")]
        public IActionResult UiBreadcrumb()
        {
            return View("~/views/ui-breadcrumb.cshtml");
        }
        
        [Route("ui-buttons")]
        public IActionResult UiButtons()
        {
            return View("~/views/ui-buttons.cshtml");
        }
        
        [Route("ui-buttons-group")]
        public IActionResult UiButtonsGroup()
        {
            return View("~/views/ui-buttons-group.cshtml");
        }
        
        [Route("ui-cards")]
        public IActionResult UiCards()
        {
            return View("~/views/ui-cards.cshtml");
        }
        
        [Route("ui-carousel")]
        public IActionResult UiCarousel()
        {
            return View("~/views/ui-carousel.cshtml");
        }
        
        [Route("ui-clipboard")]
        public IActionResult UiClipboard()
        {
            return View("~/views/ui-clipboard.cshtml");
        }
        
        [Route("ui-colors")]
        public IActionResult UiColors()
        {
            return View("~/views/ui-colors.cshtml");
        }
        
        [Route("ui-counter")]
        public IActionResult UiCounter()
        {
            return View("~/views/ui-counter.cshtml");
        }
        
        [Route("ui-drag-drop")]
        public IActionResult UiDragDrop()
        {
            return View("~/views/ui-drag-drop.cshtml");
        }
        
        [Route("ui-dropdowns")]
        public IActionResult UiDropdowns()
        {
            return View("~/views/ui-dropdowns.cshtml");
        }
        
        [Route("ui-grid")]
        public IActionResult UiGrid()
        {
            return View("~/views/ui-grid.cshtml");
        }
            
        [Route("ui-images")]
        public IActionResult UiImages()
        {
            return View("~/views/ui-images.cshtml");
        }
        
        [Route("ui-lightbox")]
        public IActionResult UiLightbox()
        {
            return View("~/views/ui-lightbox.cshtml");
        } 
        
        [Route("ui-media")]
        public IActionResult UiMedia()
        {
            return View("~/views/ui-media.cshtml");
        }
        
        [Route("ui-modals")]
        public IActionResult UiModals()
        {
            return View("~/views/ui-modals.cshtml");
        }

        [Route("ui-nav-tabs")]
        public IActionResult UiNavTabs()
        {
            return View("~/views/ui-nav-tabs.cshtml");
        }

        [Route("ui-offcanvas")]
        public IActionResult UiOffcanvas()
        {
            return View("~/views/ui-offcanvas.cshtml");
        }
        
        [Route("ui-pagination")]
        public IActionResult UiPagination()
        {
            return View("~/views/ui-pagination.cshtml");
        }
        
        [Route("ui-placeholders")]
        public IActionResult UiPlaceholders()
        {
            return View("~/views/ui-placeholders.cshtml");
        }
        
        [Route("ui-popovers")]
        public IActionResult UiPopovers()
        {
            return View("~/views/ui-popovers.cshtml");
        }
        
        [Route("ui-progress")]
        public IActionResult UiProgress()
        {
            return View("~/views/ui-progress.cshtml");
        }
        
        [Route("ui-rangeslider")]
        public IActionResult UiRangeslider()
        {
            return View("~/views/ui-rangeslider.cshtml");
        }
        
        [Route("ui-rating")]
        public IActionResult UiRating()
        {
            return View("~/views/ui-rating.cshtml");
        }
        
        [Route("ui-ribbon")]
        public IActionResult UiRibbon()
        {
            return View("~/views/ui-ribbon.cshtml");
        }

        [Route("ui-scrollbar")]
        public IActionResult UiScrollbar()
        {
            return View("~/views/ui-scrollbar.cshtml");
        }

        [Route("ui-sortable")]
        public IActionResult UiSortable()
        {
            return View("~/views/ui-sortable.cshtml");
        }
        
        [Route("ui-spinner")]
        public IActionResult UiSpinner()
        {
            return View("~/views/ui-spinner.cshtml");
        }
        
        [Route("ui-stickynote")]
        public IActionResult UiStickynote()
        {
            return View("~/views/ui-stickynote.cshtml");
        }

        [Route("ui-sweetalerts")]
        public IActionResult UiSweetalerts()
        {
            return View("~/views/ui-sweetalerts.cshtml");
        }
        [Route("ui-swiperjs")]
        public IActionResult UiSwiperjs()     
        {
            return View("~/views/ui-swiperjs.cshtml");
        }

        [Route("ui-text-editor")]
        public IActionResult UiTextEditor()
        {
            return View("~/views/ui-text-editor.cshtml");
        }

        [Route("ui-timeline")]
        public IActionResult UiTimeline()
        {
            return View("~/views/ui-timeline.cshtml");
        }

        [Route("ui-toasts")]
        public IActionResult UiToasts()
        {
            return View("~/views/ui-toasts.cshtml");
        }

        [Route("ui-tooltips")]
        public IActionResult UiTooltips()
        {
            return View("~/views/ui-tooltips.cshtml");
        }

        [Route("ui-typography")]
        public IActionResult UiTypography()
        {
            return View("~/views/ui-typography.cshtml");
        }
        
        [Route("ui-video")]
        public IActionResult UiVideo()
        {
            return View("~/views/ui-video.cshtml");
        }
        
        [Route("under-maintenance")]
        public IActionResult UnderMaintenance()
        {
            return View("~/views/under-maintenance.cshtml");
        }

        [Route("units")]
        public IActionResult Units()
        {
            return View("~/views/units.cshtml");
        }

        [Route("users")]
        public IActionResult Users()
        {
            return View("~/views/users.cshtml");
        }

        [Route("varriant-attributes")]
        public IActionResult VarriantAttributes()
        {
            return View("~/views/varriant-attributes.cshtml");
        }

        [Route("video-call")]
        public IActionResult VideoCall()
        {
            return View("~/views/video-call.cshtml");
        }

        [Route("warehouse")]
        public IActionResult Warehouse()
        {
            return View("~/views/warehouse.cshtml");
        }

        [Route("warranty")]
        public IActionResult Warranty()
        {
            return View("~/views/warranty.cshtml");
        }

        [Route("wishlist")]
        public IActionResult Wishlist()
        {
            return View("~/views/wishlist.cshtml");
        }
    }
}
