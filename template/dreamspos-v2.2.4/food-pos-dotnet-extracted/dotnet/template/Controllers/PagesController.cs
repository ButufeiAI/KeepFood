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

        [Route("addons")]
        public IActionResult Addons()
        {
            return View("~/views/addons.cshtml");
        }
        [Route("audit-report")]
        public IActionResult AuditReport()
        {
            return View("~/views/audit-report.cshtml");
        }

        [Route("categories")]
        public IActionResult Categories()
        {
            return View("~/views/categories.cshtml");
        }

        [Route("coupons")]
        public IActionResult Coupons()
        {
            return View("~/views/coupons.cshtml");
        }

        [Route("customer-report")]
        public IActionResult CustomerReport()
        {
            return View("~/views/customer-report.cshtml");
        }

        [Route("customer")]
        public IActionResult Customer()
        {
            return View("~/views/customer.cshtml");
        }

        [Route("delivery-settings")]
        public IActionResult DeliverySettings()
        {
            return View("~/views/delivery-settings.cshtml");
        }

        [Route("earning-report")]
        public IActionResult EarningReport()
        {
            return View("~/views/earning-report.cshtml");
        }

        [Route("email-verification")]
        public IActionResult EmailVerification()
        {
            return View("~/views/email-verification.cshtml");
        }

        [Route("forgot-password")]
        public IActionResult ForgotPassword()
        {
            return View("~/views/forgot-password.cshtml");
        }

        [Route("integrations-settings")]
        public IActionResult IntegrationsSettings()
        {
            return View("~/views/integrations-settings.cshtml");
        }

        [Route("invoice-details")]
        public IActionResult InvoiceDetails()
        {
            return View("~/views/invoice-details.cshtml");
        }

        [Route("invoices")]
        public IActionResult Invoices()
        {
            return View("~/views/invoices.cshtml");
        }

        [Route("items")]
        public IActionResult Items()
        {
            return View("~/views/items.cshtml");
        }

        [Route("kanban-view")]
        public IActionResult KanbanView()
        {
            return View("~/views/kanban-view.cshtml");
        }

        [Route("kitchen")]
        public IActionResult Kitchen()
        {
            return View("~/views/kitchen.cshtml");
        }

        [Route("login")]
        public IActionResult Login()
        {
            return View("~/views/login.cshtml");
        }

        [Route("notifications-settings")]
        public IActionResult NotificationsSettings()
        {
            return View("~/views/notifications-settings.cshtml");
        }

        [Route("order-report")]
        public IActionResult OrderReport()
        {
            return View("~/views/order-report.cshtml");
        }

        [Route("orders")]
        public IActionResult Orders()
        {
            return View("~/views/orders.cshtml");
        }

        [Route("otp")]
        public IActionResult Otp()
        {
            return View("~/views/otp.cshtml");
        }

        [Route("pos")]
        public IActionResult Pos()
        {
            return View("~/views/pos.cshtml");
        }

        [Route("payment-settings")]
        public IActionResult PaymentSettings()
        {
            return View("~/views/payment-settings.cshtml");
        }

        [Route("payments")]
        public IActionResult Payments()
        {
            return View("~/views/payments.cshtml");
        }

        [Route("print-settings")]
        public IActionResult PrintSettings()
        {
            return View("~/views/print-settings.cshtml");
        }

        [Route("reset-password")]
        public IActionResult ResetPassword()
        {
            return View("~/views/reset-password.cshtml");
        }

        [Route("register")]
        public IActionResult Register()
        {
            return View("~/views/register.cshtml");
        }

        [Route("reservations")]
        public IActionResult Reservations()
        {
            return View("~/views/reservations.cshtml");
        }

        [Route("role-permission")]
        public IActionResult RolePermission()
        {
            return View("~/views/role-permission.cshtml");
        }

        [Route("sales-report")]
        public IActionResult SalesReport()
        {
            return View("~/views/sales-report.cshtml");
        }

        [Route("store-settings")]
        public IActionResult StoreSettings()
        {
            return View("~/views/store-settings.cshtml");
        }

        [Route("table")]
        public IActionResult Table()
        {
            return View("~/views/table.cshtml");
        }

        [Route("tax-settings")]
        public IActionResult TaxSettings()
        {
            return View("~/views/tax-settings.cshtml");
        }

        [Route("users")]
        public IActionResult Users()
        {
            return View("~/views/users.cshtml");
        }
    }
                
}
