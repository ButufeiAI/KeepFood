import {createRouter, createWebHistory} from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'sign-in',
    component: () => import('@/views/pages/pages/authentication/login/sign-in.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/pages/pages/authentication/register/pos-register.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('@/views/pages/pages/authentication/forgot-password/forgot-password.vue'),
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: () => import('@/views/pages/pages/authentication/reset-password/reset-password.vue'),
  },
  {
    path: '/email-verification',
    name: 'email-verification',
    component: () => import('@/views/pages/pages/authentication/email-verification/email-verification.vue'),
  },
  {
    path: '/two-step-verification',
    name: 'two-step-verification',
    component: () => import('@/views/pages/pages/authentication/two-step-verification/two-step-verification.vue'),
  },
  {
    path: '/success',
    name: 'success',
    component: () => import('@/views/pages/pages/pos-success.vue'),
  },
  {
    path: '/success-2',
    name: 'success-2',
    component: () => import('@/views/pages/pages/success-2.vue'),
  },
  {
    path: '/success-3',
    name: 'success-3',
    component: () => import('@/views/pages/pages/success-3.vue'),
  },
  {
    path: '/activities',
    name: 'activities',
    component: () => import('@/views/pages/pos-activities.vue'),
  },
  {
    path: '/coupons',
    name: 'coupons',
    component: () => import('@/views/pages/promo/pos-coupons.vue'),
  },
  {
    path: '/gift-cards',
    name: 'gift-cards',
    component: () => import('@/views/pages/promo/gift-cards.vue'),
  },
  {
    path: '/invoice',
    name: 'invoice',
    component: () => import('@/views/pages/sales/invoice-pos.vue'),
  },
  {
    path: '/invoice-details',
    name: 'invoice-details',
    component: () => import('@/views/pages/sales/invoice-details.vue'),
  },
  {
    path: '/sales-returns',
    name: 'sales-returns',
    component: () => import('@/views/pages/sales/sales-returns.vue'),
  },
  {
    path: '/quotation-list',
    name: 'quotation-list',
    component: () => import('@/views/pages/sales/quotation-list.vue'),
  },
  {
    path: '/application',
    component: () => import('@/views/pages/application/pos-application.vue'), 
    children: [
      { path: '', redirect: '/application/chat' },
      { path: "chat", component: () => import('@/views/pages/application/chat/chat-index.vue') },
      { path: "calendar", component: () => import('@/views/pages/application/pos-calendar.vue') },
      { path: "email", component: () => import('@/views/pages/application/pos-email.vue') },
      { path: "email-reply", component: () => import('@/views/pages/application/email-reply.vue') },
      { path: "todo", component: () => import('@/views/pages/application/pos-todo.vue') },
      { path: "todo-list", component: () => import('@/views/pages/application/todo-list.vue') },
      { path: "notes", component: () => import('@/views/pages/application/pos-notes.vue') },
      { path: "file-manager", component: () => import('@/views/pages/application/files/file-manager.vue') },      
      { path: "social-feed", component: () => import('@/views/pages/application/social-feed.vue') },
      { path: "projects", component: () => import('@/views/pages/application/kanban-view/kanban-view.vue') },
      { path: "contacts", component: () => import('@/views/pages/application/contacts-index.vue') },
      { path: "search-list", component: () => import('@/views/pages/application/search-list.vue') },
    ]
  },
  {
    path: '/settings',
    component: () => import('@/views/pages/settings/general-settings/settings-index.vue'),
    children: [
      { path: '', redirect: '/settings/general-settings' },
      { path: "general-settings", component: () => import('@/views/pages/settings/general-settings/general-settings.vue') },
      { path: "security-settings", component: () => import('@/views/pages/settings/general-settings/security-settings.vue') },
      { path: "notification", component: () => import('@/views/pages/settings/general-settings/pos-notification.vue') },
      { path: "connected-apps", component: () => import('@/views/pages/settings/general-settings/connected-apps.vue') },
    ]
  },
  {
    path: '/website-settings',
    component: () => import('@/views/pages/settings/website-settings/website-settings.vue'),
    children: [
      { path: '', redirect: '/website-settings/system-settings' },
      { path: "company-settings", component: () => import('@/views/pages/settings/website-settings/company-settings.vue') },
      { path: "localization-settings", component: () => import('@/views/pages/settings/website-settings/localization-settings.vue') },
      { path: "system-settings", component: () => import('@/views/pages/settings/website-settings/system-settings.vue') },
      { path: "prefixes", component: () => import('@/views/pages/settings/website-settings/pos-prefixes.vue') },
      { path: "preference", component: () => import('@/views/pages/settings/website-settings/pos-preference.vue') },
      { path: "appearance", component: () => import('@/views/pages/settings/website-settings/pos-appearance.vue') },
      { path: "social-authentication", component: () => import('@/views/pages/settings/website-settings/social-authentication.vue') },
      { path: "language-settings", component: () => import('@/views/pages/settings/website-settings/language-settings.vue') },
      { path: "language-settings-web", component: () => import('@/views/pages/settings/website-settings/language-settings-web.vue') },
    ]
  },
  {
    path: '/app-settings',
    component: () => import('@/views/pages/settings/app-settings/app-settings.vue'),
    children: [
      { path: '', redirect: '/app-settings/invoice-settings' },
      { path: "invoice-settings", component: () => import('@/views/pages/settings/app-settings/invoice-settings.vue') },
      { path: "invoice-templates", component: () => import('@/views/pages/settings/app-settings/invoice-templates.vue') },
      { path: "signatures", component: () => import('@/views/pages/settings/app-settings/pos-signatures.vue') },
      { path: "printer-settings", component: () => import('@/views/pages/settings/app-settings/printer-settings.vue') },
      { path: "custom-fields", component: () => import('@/views/pages/settings/app-settings/custom-fields.vue') },
      { path: "pos-settings", component: () => import('@/views/pages/settings/app-settings/pos-settings.vue') },
    ]
  },
  {
    path: '/system-settings',
    component: () => import('@/views/pages/settings/system-settings/settings-system.vue'),
    children: [
      { path: '', redirect: '/system-settings/email-settings' },
      { path: "email-settings", component: () => import('@/views/pages/settings/system-settings/email-settings.vue') },
      { path: "email-templates", component: () => import('@/views/pages/settings/system-settings/email-templates.vue') },
      { path: "sms-settings", component: () => import('@/views/pages/settings/system-settings/sms-settings.vue') },
      { path: "sms-templates", component: () => import('@/views/pages/settings/system-settings/sms-templates.vue') },
      { path: "otp-settings", component: () => import('@/views/pages/settings/system-settings/otp-settings.vue') },
      { path: "gdpr-settings", component: () => import('@/views/pages/settings/system-settings/gdpr-settings.vue') },
    ]
  },
  {
    path: '/financial-settings',
    component: () => import('@/views/pages/settings/financal-settings/financial-settings.vue'),
    children: [
      { path: '', redirect: '/financial-settings/payment-gateway-settings' },
      { path: "payment-gateway-settings", component: () => import('@/views/pages/settings/financal-settings/payment-gateway-settings.vue') },
      { path: "bank-settings-grid", component: () => import('@/views/pages/settings/financal-settings/bank-settings-grid.vue') },
      { path: "bank-settings-list", component: () => import('@/views/pages/settings/financal-settings/bank-settings-list.vue') },
      { path: "tax-rates", component: () => import('@/views/pages/settings/financal-settings/tax-rates.vue') },
      { path: "currency-settings", component: () => import('@/views/pages/settings/financal-settings/currency-settings.vue') },
    ]
  },
  {
    path: '/other-settings',
    component: () => import('@/views/pages/settings/other-settings/other-settings.vue'),
    children: [
      { path: '', redirect: '/other-settings/storage-settings' },
      { path: "storage-settings", component: () => import('@/views/pages/settings/other-settings/storage-settings.vue') },
      { path: "ban-ip-address", component: () => import('@/views/pages/settings/other-settings/ban-ip-address.vue') },
    ]
  },
  {
    path: '/pages',
    component: () => import('@/views/pages/pages/pos-pages.vue'),
    children: [
      { path: '', redirect: '/pages/profile' },
      { path: "profile", component: () => import('@/views/pages/pages/pos-profile.vue') },
      { path: "pricing", component: () => import('@/views/pages/pages/pos-pricing.vue') },
      { path: "coming-soon", component: () => import('@/views/pages/pages/coming-soon.vue') },
      { path: "under-maintenance", component: () => import('@/views/pages/pages/under-maintenance.vue') },
      { path: "blank-page", component: () => import('@/views/pages/pages/blank-page.vue') },
    ]
  },
  {
    path: '/error',
    component: () => import('@/views/pages/pages/error/pos-error.vue'),
    children: [
      { path: '', redirect: '/error/error-404' },
      { path: "error-404", component: () => import('@/views/pages/pages/error/error-404.vue') },
      { path: "error-500", component: () => import('@/views/pages/pages/error/error-500.vue') },
    ]
  },
  {
    path: '/authentication',
    component: () => import('@/views/pages/pages/pos-pages.vue'),
    children: [
      { path: '', redirect: '/authentication/signin-2' },
      { path: "signin-2", component: () => import('@/views/pages/pages/authentication/login/signin-2.vue') },
      { path: "signin-3", component: () => import('@/views/pages/pages/authentication/login/signin-3.vue') },
      { path: "register-2", component: () => import('@/views/pages/pages/authentication/register/register-2.vue') },
      { path: "register-3", component: () => import('@/views/pages/pages/authentication/register/register-3.vue') },
      { path: "forgot-password-2", component: () => import('@/views/pages/pages/authentication/forgot-password/forgot-password-2.vue') },
      { path: "forgot-password-3", component: () => import('@/views/pages/pages/authentication/forgot-password/forgot-password-3.vue') },
      { path: "reset-password-2", component: () => import('@/views/pages/pages/authentication/reset-password/reset-password-2.vue') },
      { path: "reset-password-3", component: () => import('@/views/pages/pages/authentication/reset-password/reset-password-3.vue') },
      { path: "email-verification-2", component: () => import('@/views/pages/pages/authentication/email-verification/email-verification-2.vue') },
      { path: "email-verification-3", component: () => import('@/views/pages/pages/authentication/email-verification/email-verification-3.vue') },
      { path: "two-step-verification-2", component: () => import('@/views/pages/pages/authentication/two-step-verification/two-step-verification-2.vue') },
      { path: "two-step-verification-3", component: () => import('@/views/pages/pages/authentication/two-step-verification/two-step-verification-3.vue') },
      { path: "lock-screen", component: () => import('@/views/pages/pages/authentication/lock-screen.vue') },
    ]
  },
  {
    path: '/inventory',
    component: () => import('@/views/pages/inventory/pos-inventory.vue'),
    children: [
      { path: '', redirect: '/inventory/product-list' },
      { path: "product-list", component: () => import('@/views/pages/inventory/product-list/product-list.vue') },
      { path: "add-product", component: () => import('@/views/pages/inventory/add-product.vue') },
      { path: "edit-product", component: () => import('@/views/pages/inventory/edit-product.vue') },
      { path: "expired-products", component: () => import('@/views/pages/inventory/expired-products.vue') },
      { path: "low-stocks", component: () => import('@/views/pages/inventory/low-stocks/low-stocks.vue') },
      { path: "category-list", component: () => import('@/views/pages/inventory/category-list.vue') },
      { path: "sub-categories", component: () => import('@/views/pages/inventory/sub-categories.vue') },
      { path: "brand-list", component: () => import('@/views/pages/inventory/brand-list.vue') },
      { path: "units", component: () => import('@/views/pages/inventory/pos-units.vue') },
      { path: "varriant-attributes", component: () => import('@/views/pages/inventory/varriant-attributes.vue') },
      { path: "warranty", component: () => import('@/views/pages/inventory/pos-warranty.vue') },
      { path: "barcode", component: () => import('@/views/pages/inventory/pos-barcode.vue') },
      { path: "qrcode", component: () => import('@/views/pages/inventory/pos-qrcode.vue') },
      { path: "product-details", component: () => import('@/views/pages/inventory/product-details.vue') },
    ]
  },
  {
    path: '/expenses',
    component: () => import('@/views/pages/finance/expenses/expenses-index.vue'),
    children: [
      { path: '', redirect: '/expenses/expenses-list' },
      { path: "expenses-list", component: () => import('@/views/pages/finance/expenses/expenses-list.vue') },
      { path: "expenses-category", component: () => import('@/views/pages/finance/expenses/expenses-category.vue') },
    ]
  },
  {
    path: '/income',
    component: () => import('@/views/pages/finance/income/income-index.vue'),
    children: [
      { path: '', redirect: '/income/income-list' },
      { path: "income-list", component: () => import('@/views/pages/finance/income/income-list.vue') },
      { path: "income-category", component: () => import('@/views/pages/finance/income/income-category.vue') },
    ]
  },
  {
    path: '/finance',
    component: () => import('@/views/pages/finance/pos-finance.vue'),
    children: [
      { path: '', redirect: '/finance/account-list' },
      { path: "account-list", component: () => import('@/views/pages/finance/account-list.vue') },
      { path: "money-transfer", component: () => import('@/views/pages/finance/money-transfer.vue') },
      { path: "balance-sheet", component: () => import('@/views/pages/finance/balance-sheet.vue') },
      { path: "balance-sheet-v2", component: () => import('@/views/pages/finance/balance-sheet-v2.vue') },
      { path: "trial-balance", component: () => import('@/views/pages/finance/trial-balance.vue') },
      { path: "cash-flow", component: () => import('@/views/pages/finance/cash-flow.vue') },
      { path: "cash-flow-v2", component: () => import('@/views/pages/finance/cash-flow-v2.vue') },
      { path: "account-statement", component: () => import('@/views/pages/finance/account-statement.vue') },
    ]
  },
  {
    path: '/users',
    component: () => import('@/views/pages/users/pos-users.vue'),
    children: [
      { path: '', redirect: '/users/users-list' },
      { path: "users-list", component: () => import('@/views/pages/users/users-list.vue') },
      { path: "roles-permissions", component: () => import('@/views/pages/users/roles-permissions.vue') },
      { path: "permissions", component: () => import('@/views/pages/users/pos-permissions.vue') },
      { path: "delete-account", component: () => import('@/views/pages/users/delete-account.vue') },
    ]
  },
  {
    path: '/people',
    component: () => import('@/views/pages/people/pos-people.vue'),
    children: [
      { path: '', redirect: '/people/suppliers' },
      { path: "suppliers", component: () => import('@/views/pages/people/pos-suppliers.vue') },
      { path: "store-list", component: () => import('@/views/pages/people/store-list.vue') },
      { path: "warehouse", component: () => import('@/views/pages/people/pos-warehouse.vue') },
      { path: "billers", component: () => import('@/views/pages/people/billers-list.vue') },
    ]
  },
  {
    path: '/content',
    component: () => import('@/views/pages/content/pos-content.vue') ,
    children: [
      { path: '', redirect: '/content/testimonials' },
      { path: "faq", component: () => import('@/views/pages/content/pos-faq.vue') },
      { path: "testimonials", component: () => import('@/views/pages/content/pos-testimonials.vue') },
    ]
  },
  {
    path: '/location',
    component: () => import('@/views/pages/content/locations/pos-locations.vue'),
    children: [
      { path: '', redirect: '/location/countries' },
      { path: "countries", component: () => import('@/views/pages/content/locations/pos-countries.vue') },
      { path: "states", component: () => import('@/views/pages/content/locations/pos-states.vue') },
      { path: "cities", component: () => import('@/views/pages/content/locations/pos-cities.vue') },
    ]
  },
  {
    path: '/blog',
    component: () => import('@/views/pages/content/blogs/pos-blogs.vue'),
    children: [
      { path: '', redirect: '/blog/blog-comments' },
      { path: "blog-comments", component: () => import('@/views/pages/content/blogs/blog-comments.vue') },
      { path: "blog-categories", component: () => import('@/views/pages/content/blogs/blog-categories.vue') },
      { path: "blog-tag", component: () => import('@/views/pages/content/blogs/blog-tag.vue') },
      { path: "all-blog", component: () => import('@/views/pages/content/blogs/all-blog.vue') },
      { path: "blog-details", component: () => import('@/views/pages/content/blogs/blog-details.vue') },
    ]
  },
  {
    path: '/page',
    component: () => import('@/views/pages/content/pages/page-index.vue'),
    children: [
      { path: '', redirect: '/page/pages' },
      { path: "pages", component: () => import('@/views/pages/content/pages/pos-pages.vue') },
    ]
  },
  {
    path: '/reports',
    component: () => import('@/views/pages/reports/pos-reports.vue'),
    children: [
      { path: '', redirect: '/reports/purchase-report' },
      { path: "purchase-report", component: () => import('@/views/pages/reports/purchase-report.vue') },
      { path: "invoice-report", component:() => import('@/views/pages/reports/invoice-report.vue') },
      { path: "expense-report", component: () => import('@/views/pages/reports/expense-report.vue') },
      { path: "income-report", component: () => import('@/views/pages/reports/income-report.vue') },
      { path: "tax-report", component: () => import('@/views/pages/reports/tax-report/tax-report.vue') },
      { path: "annual-report", component: () => import('@/views/pages/reports/annual-report.vue') },
      { path: "sales-tax", component: () => import('@/views/pages/reports/tax-report/salestax-report.vue') },
      { path: "profit-and-loss", component: () => import('@/views/pages/reports/profit-and-loss.vue') },
    ]
  },
  {
    path: '/product-report',
    component: () => import('@/views/pages/reports/product-report/pos-productreport.vue'),
    children: [
      { path: '', redirect: '/product-report/product-report' },
      { path: "product-report", component: () => import('@/views/pages/reports/product-report/product-report.vue') },
      { path: "product-expiry-report", component: () => import('@/views/pages/reports/product-report/product-expiry-report.vue') },
      { path: "product-quantity-alert", component: () => import('@/views/pages/reports/product-report/product-quantity-alert.vue') }
    ]
  },
  {
    path: '/customer-report',
    component: () => import('@/views/pages/reports/customer-report/pos-customerreport.vue'),
    children: [
      { path: '', redirect: '/customer-report/customer-report' },
      { path: "customer-report", component: () => import('@/views/pages/reports/customer-report/customer-report.vue') },
      { path: "customer-due-report", component: () => import('@/views/pages/reports/customer-report/customer-due-report.vue') },
    ]
  },
  {
    path: '/supplier-report',
    component: () => import('@/views/pages/reports/supplier-report/pos-supplierreport.vue'),
    children: [
      { path: '', redirect: '/supplier-report/supplier-report' },
      { path: "supplier-report", component: () => import('@/views/pages/reports/supplier-report/supplier-report.vue') },
      { path: "supplier-due-report", component: () => import('@/views/pages/reports/supplier-report/supplier-due-report.vue') },
    ]
  },
  {
    path: '/inventory-report',
    component: () => import('@/views/pages/reports/inventory-report/pos-inventoryreport.vue'),
    children: [
      { path: '', redirect: '/inventory-report/inventory-report' },
      { path: "inventory-report", component: () => import('@/views/pages/reports/inventory-report/inventory-report.vue') },
      { path: "stock-history", component: () => import('@/views/pages/reports/inventory-report/stock-history.vue') },
      { path: "sold-stock", component: () => import('@/views/pages/reports/inventory-report/sold-stock.vue') },
    ]
  },
  {
    path: '/sales-report',
    component: () => import('@/views/pages/reports/sales-report/pos-salesreport.vue'),
    children: [
      { path: '', redirect: '/sales-report/sales-report' },
      { path: "sales-report", component: () => import('@/views/pages/reports/sales-report/sales-report.vue') },
      { path: "best-sellers", component: () => import('@/views/pages/reports/sales-report/best-sellers.vue') },
    ]
  },
  {
    path: '/icons',
    component: () => import('@/views/pages/uiinterface/icons/ui-icons.vue'),
    children: [
      { path: '', redirect: '/icons/icon-fontawesome' },
      { path: "icon-fontawesome", component: () => import('@/views/pages/uiinterface/icons/icon-fontawesome.vue') },
      { path: "icon-feather", component: () => import('@/views/pages/uiinterface/icons/icon-feather.vue') },
      { path: "icon-ionic", component: () => import('@/views/pages/uiinterface/icons/icon-ionic.vue') },
      { path: "icon-material", component: () => import('@/views/pages/uiinterface/icons/icon-material.vue') },
      { path: "icon-pe7", component: () => import('@/views/pages/uiinterface/icons/icon-pe7.vue') },
      { path: "icon-weather", component: () => import('@/views/pages/uiinterface/icons/icon-weather.vue') },
      { path: "icon-typicon", component: () => import('@/views/pages/uiinterface/icons/icon-typicon.vue') },
      { path: "icon-flag", component: () => import('@/views/pages/uiinterface/icons/icon-flag.vue') },
      { path: "icon-tabler", component: () => import('@/views/pages/uiinterface/icons/icon-tabler.vue') },
      { path: "icon-bootstrap", component: () => import('@/views/pages/uiinterface/icons/icon-bootstrap.vue') },
      { path: "icon-remix", component: () => import('@/views/pages/uiinterface/icons/icon-remix.vue') },
    ]
  },
  {
    path: '/baseui',
    component: () => import('@/views/pages/uiinterface/baseui/base-ui.vue'),
    children: [
      { path: '', redirect: '/baseui/ui-alerts' },
      { path: "ui-alerts", component: () => import('@/views/pages/uiinterface/baseui/ui-alerts.vue') },
      { path: "ui-accordion", component: () => import('@/views/pages/uiinterface/baseui/ui-accordion.vue') },
      { path: "ui-avatar", component: () => import('@/views/pages/uiinterface/baseui/ui-avatar.vue') },
      { path: "ui-badges", component: () => import('@/views/pages/uiinterface/baseui/ui-badges.vue') },
      { path: "ui-borders", component: () => import('@/views/pages/uiinterface/baseui/ui-borders.vue') },
      { path: "ui-buttons", component: () => import('@/views/pages/uiinterface/baseui/ui-buttons.vue') },
      { path: "ui-buttons-group", component: () => import('@/views/pages/uiinterface/baseui/ui-buttons-group.vue') },
      { path: "ui-breadcrumb", component: () => import('@/views/pages/uiinterface/baseui/ui-breadcrumb.vue') },
      { path: "ui-cards", component: () => import('@/views/pages/uiinterface/baseui/ui-cards.vue') },
      { path: "ui-carousel", component: () => import('@/views/pages/uiinterface/baseui/carousel/ui-carousel.vue') },
      { path: "ui-colors", component: () => import('@/views/pages/uiinterface/baseui/ui-colors.vue') },
      { path: "ui-dropdowns", component: () => import('@/views/pages/uiinterface/baseui/ui-dropdowns.vue') },
      { path: "ui-grid", component: () => import('@/views/pages/uiinterface/baseui/ui-grid.vue') },
      { path: "ui-images", component: () => import('@/views/pages/uiinterface/baseui/ui-images.vue') },
      { path: "ui-lightbox", component: () => import('@/views/pages/uiinterface/baseui/lightbox/ui-lightbox.vue')},
      { path: "ui-nav-tabs", component: () => import('@/views/pages/uiinterface/baseui/ui-nav-tabs.vue')},
      { path: "ui-media", component: () => import('@/views/pages/uiinterface/baseui/ui-media.vue')},
      { path: "ui-modals", component: () => import('@/views/pages/uiinterface/baseui/ui-modals.vue')},
      { path: "ui-offcanvas", component: () => import('@/views/pages/uiinterface/baseui/ui-offcanvas.vue')},
      { path: "ui-pagination", component: () => import('@/views/pages/uiinterface/baseui/ui-pagination.vue')},
      { path: "ui-popovers", component: () => import('@/views/pages/uiinterface/baseui/ui-popovers.vue')},
      { path: "ui-progress", component: () => import('@/views/pages/uiinterface/baseui/ui-progress.vue')},
      { path: "ui-placeholders", component: () => import('@/views/pages/uiinterface/baseui/ui-placeholders.vue')},
      { path: "ui-rangeslider", component: () => import('@/views/pages/uiinterface/baseui/ui-rangeslider.vue')},
      { path: "ui-spinner", component: () => import('@/views/pages/uiinterface/baseui/ui-spinner.vue')},
      { path: "ui-sortable", component: () => import('@/views/pages/uiinterface/baseui/ui-sortable.vue')},
      { path: "ui-tooltips", component: () => import('@/views/pages/uiinterface/baseui/ui-tooltips.vue')},
      { path: "ui-typography", component: () => import('@/views/pages/uiinterface/baseui/ui-typography.vue')},
      { path: "ui-video", component: () => import('@/views/pages/uiinterface/baseui/ui-video.vue')},
    ]
  },
  {
    path: '/advancedui',
    component: () => import('@/views/pages/uiinterface/advancedUI/advanced-ui.vue'),
    children: [
      { path: '', redirect: '/advancedui/ui-ribbon' },
      { path: "ui-ribbon", component: () => import('@/views/pages/uiinterface/advancedUI/ui-ribbon.vue') },
      { path: "ui-clipboard", component: () => import('@/views/pages/uiinterface/advancedUI/ui-clipboard.vue') },
      { path: "ui-drag-drop", component: () => import('@/views/pages/uiinterface/advancedUI/ui-drag-drop.vue') },
      { path: "ui-text-editor", component: () => import('@/views/pages/uiinterface/advancedUI/ui-text-editor.vue') },
      { path: "ui-counter", component: () => import('@/views/pages/uiinterface/advancedUI/ui-counter.vue') },
      { path: "ui-scrollbar", component: () => import('@/views/pages/uiinterface/advancedUI/ui-scrollbar.vue') },
      { path: "ui-rating", component: () => import('@/views/pages/uiinterface/advancedUI/ui-rating.vue') },
      { path: "ui-stickynote", component: () => import('@/views/pages/uiinterface/advancedUI/ui-stickynote.vue') },
      { path: "ui-timeline", component: () => import('@/views/pages/uiinterface/advancedUI/ui-timeline.vue') }
    ]
  },
  {
    path: '/tables',
    component: () => import('@/views/pages/uiinterface/tables/ui-tables.vue'),
    children: [
      { path: '', redirect: '/tables/data-tables' },
      { path: "data-tables", component: () => import('@/views/pages/uiinterface/tables/data-tables.vue') },
      { path: "tables-basic", component: () => import('@/views/pages/uiinterface/tables/tables-basic.vue') }
    ]
  },
  {
    path: '/charts',
    component: () => import('@/views/pages/uiinterface/charts/ui-charts.vue'),
    children: [
      { path: '', redirect: '/charts/chart-apex' },
      { path: "chart-apex", component: () => import('@/views/pages/uiinterface/charts/apex/chart-apex.vue') },
      { path: "chart-c3", component: () => import('@/views/pages/uiinterface/charts/c3/chart-c3.vue') },
      { path: "chart-flot", component: () => import('@/views/pages/uiinterface/charts/flot/chart-flot.vue') },
      { path: "chart-js", component: () => import('@/views/pages/uiinterface/charts/js/chart-js.vue') },
      { path: "chart-morris", component: () => import('@/views/pages/uiinterface/charts/morris/chart-morris.vue') }
    ]
  },
  {
    path: '/forms',
    component: () => import('@/views/pages/uiinterface/forms/ui-forms.vue'),
    children: [
      { path: '', redirect: '/forms/form-basic-inputs' },
      { path: "form-basic-inputs", component: () => import('@/views/pages/uiinterface/forms/form-elements/formbasic/formbasic-input.vue') },
      { path: "form-checkbox-radios", component: () => import('@/views/pages/uiinterface/forms/form-elements/formbasic/formbasic-input.vue') },
      { path: "form-grid-gutters", component: () => import('@/views/pages/uiinterface/forms/form-elements/form-grid-gutters.vue') },
      { path: "form-input-groups", component: () => import('@/views/pages/uiinterface/forms/form-elements/forminput/form-input.vue') },
      { path: "form-select", component: () => import('@/views/pages/uiinterface/forms/form-elements/form-select.vue') },
      { path: "form-mask", component: () => import('@/views/pages/uiinterface/forms/form-elements/formmask/formmask.vue') },
      { path: "form-fileupload", component: () => import('@/views/pages/uiinterface/forms/form-elements/formfile-upload.vue') },
      { path: "form-horizontal", component: () => import('@/views/pages/uiinterface/forms/layouts/form-horizontal.vue') },
      { path: "form-vertical", component: () => import('@/views/pages/uiinterface/forms/layouts/form-vertical.vue') },
      { path: "form-floating-labels", component: () => import('@/views/pages/uiinterface/forms/layouts/form-floating-labels.vue') },
      { path: "form-validation", component: () => import('@/views/pages/uiinterface/forms/form-validation.vue') },
      { path: "form-select2", component: () => import('@/views/pages/uiinterface/forms/form-select2.vue') },
      { path: "form-wizard", component: () => import('@/views/pages/uiinterface/forms/form-wizard.vue')  },
      { path: "form-pickers", component: () => ('@/views/pages/uiinterface/forms/form-pickers.vue') },
    ]
  },
  {
    path: '/maps',
    component: () => import('@/views/pages/uiinterface/maps/ui-maps.vue'),
    children: [
      { path: '', redirect: '/maps/maps-vector' },
      { path: "maps-vector", component: () => import('@/views/pages/uiinterface/maps/maps-vector.vue') },
      { path: "maps-leaflet", component: () => import('@/views/pages/uiinterface/maps/maps-leaflet.vue') },
    ]
  },
  {
    path: '/pos',
    component: () => import('@/views/pages/pos/pos-index.vue'),
    children: [
      { path: '', redirect: '/pos/pos-1' },
      { path: "pos-1", component: () => import('@/views/pages/pos/pos-1/pos-one.vue') },
      { path: "pos-2", component: () => import('@/views/pages/pos/pos-2/pos-two.vue') },
      { path: "pos-3", component: () => import('@/views/pages/pos/pos-3/pos-three.vue') },
      { path: "pos-5", component: () => import('@/views/pages/pos/pos-5/pos-5.vue') },
      { path: "pos-4", component: () => import('@/views/pages/pos/pos-4/pos-4.vue') },
    ]
  },
  {
    path: '/call',
    component: () => import('@/views/pages/application/call/pos-call.vue'),
    children: [
      { path: '', redirect: '/call/video-call' },
      { path: "video-call", component: () => import('@/views/pages/application/call/video-call.vue') },
      { path: "audio-call", component: () => import('@/views/pages/application/call/audio-call.vue') },
      { path: "call-history", component: () => import('@/views/pages/application/call/call-history.vue') },
    ]
  },
  {
    path: '/dashboard',
    component: () => import('@/views/pages/dashboard/pos-dashboard.vue'),
    children: [
      { path: '', redirect: '/dashboard/admin-dashboard' },
      { path: "admin-dashboard", component: () => import('@/views/pages/dashboard/admin-dashboard.vue') },
      { path: "admin-dashboard-2", component: () => import('@/views/pages/dashboard/admin-dashboard-two.vue') },
      { path: "sales-dashboard", component: () => import('@/views/pages/dashboard/sales-dashboard.vue') },
    ]
  },
  {
    path: '/stock',
    component: () => import('@/views/pages/stock/pos-stock.vue'),
    children: [
      { path: '', redirect: '/stock/manage-stocks' },
      { path: "manage-stocks", component: () => import('@/views/pages/stock/manage-stocks.vue') },
      { path: "stock-adjustment", component: () => import('@/views/pages/stock/stock-adjustment.vue') },
      { path: "stock-transfer", component: () => import('@/views/pages/stock/stock-transfer.vue') },
    ]
  },
  {
    path: '/leaves',
    component: () => import('@/views/pages/hrm/leaves/pos-leaves.vue'),
    children: [
      { path: '', redirect: '/leaves/leaves-admin' },
      { path: "leaves-admin", component: () => import('@/views/pages/hrm/leaves/leaves-admin.vue') },
      { path: "leaves-employee", component: () => import('@/views/pages/hrm/leaves/leaves-employee.vue') },
      { path: "leave-types", component: () => import('@/views/pages/hrm/leaves/leave-types.vue') },
    ]
  },
  {
    path: '/payroll',
    component: () => import('@/views/pages/hrm/payroll/pay-roll.vue'),
    children: [
      { path: '', redirect: '/payroll/employee-salary' },
      { path: "employee-salary", component: () => import('@/views/pages/hrm/payroll/employee-salary.vue') },
      { path: "payslip", component: () => import('@/views/pages/hrm/payroll/pay-slip.vue') },
    ]
  },
  {
    path: '/hrm',
    component: () => import('@/views/pages/hrm/pos-hrm.vue'),
    children: [
      { path: '', redirect: '/hrm/employees-grid' },
      { path: "employees-grid", component: () => import('@/views/pages/hrm/employees-grid.vue') },
      { path: "employees-list", component: () => import('@/views/pages/hrm/employees-list.vue') },
      { path: "employee-details", component: () => import('@/views/pages/hrm/employee-details.vue') },
      { path: "add-employee", component: () => import('@/views/pages/hrm/add-employee.vue') },
      { path: "edit-employee", component: () => import('@/views/pages/hrm/edit-employee.vue') },
      { path: "department-grid", component: () => import('@/views/pages/hrm/department-grid.vue') },
      { path: "department-list", component: () => import('@/views/pages/hrm/department-list.vue') },
      { path: "designation", component: () => import('@/views/pages/hrm/pos-designation.vue') },
      { path: "shift", component: () => import('@/views/pages/hrm/pos-shift.vue') },
      { path: "attendance-employee", component: () => import('@/views/pages/hrm/attendance-employee.vue') },
      { path: "attendance-admin", component: () => import('@/views/pages/hrm/attendance-admin.vue') },
      { path: "holidays", component: () => import('@/views/pages/hrm/pos-holidays.vue') },
    ]
  },

  {
    path: '/purchases',
    component: () => import('@/views/pages/purchases/pos-purchases.vue'),
    children: [
      { path: '', redirect: '/purchases/purchase-list' },
      { path: "purchase-list", component: () => import('@/views/pages/purchases/purchase-list.vue') },
      { path: "purchase-order-report", component: () => import('@/views/pages/purchases/purchase-order-report.vue') },
      { path: "purchase-returns", component: () => import('@/views/pages/purchases/purchase-returns.vue') },
    ]
  },
  {
    path: '/sales',
    component: () => import('@/views/pages/sales/pos-sales.vue'),
    children: [
      { path: '', redirect: '/sales/sales-list' },
      { path: "sales-list", component: () => import('@/views/pages/sales/sales-list.vue') },
      { path: "online-orders", component: () => import('@/views/pages/sales/online-orders.vue') },
      { path: "pos-orders", component: () => import('@/views/pages/sales/pos-orders.vue') },
    ]
  },
  {
    path: '/super-admin',
    component: () => import('@/views/pages/super-admin/super-admin.vue'),
    children: [
      { path: '', redirect: '/super-admin/dashboard' },
      { path: "dashboard", component: () => import('@/views/pages/super-admin/dashboard/super-dashboard.vue') },
      { path: "companies", component: () => import('@/views/pages/super-admin/companies/companies.vue') },
      { path: "subscription", component: () => import('@/views/pages/super-admin/subscription/subscription-list.vue') },
      { path: "packages", component: () => import('@/views/pages/super-admin/packages/packages-list.vue') },
      { path: "domain", component: () => import('@/views/pages/super-admin/domain/domain-list.vue') },
      { path: "purchase-transaction", component: () => import('@/views/pages/super-admin/purchase/purchase-transaction.vue') },
    ]
  },
  {
    path: '/ecommerce',
    component: () => import('@/views/pages/application/ecommerce/ecommerce-index.vue'),
    children: [
      { path: '', redirect: '/ecommerce/products' },
      { path: "products", component: () => import('@/views/pages/application/ecommerce/products/products-index.vue') },
      { path: "add-product", component: () => import('@/views/pages/application/ecommerce/products/add-product.vue') },
      { path: "edit-product", component: () => import('@/views/pages/application/ecommerce/products/edit-product.vue') },
      { path: "orders", component: () => import('@/views/pages/application/ecommerce/orders-list.vue') },
      { path: "customers", component: () => import('@/views/pages/application/ecommerce/customers-list.vue') },
      { path: "cart", component: () => import('@/views/pages/application/ecommerce/cart-list.vue') },
      { path: "checkout", component: () => import('@/views/pages/application/ecommerce/checkout-index.vue') },
      { path: "wishlist", component: () => import('@/views/pages/application/ecommerce/wishlist-index.vue') },
      { path: "reviews", component: () => import('@/views/pages/application/ecommerce/reviews-list.vue') },
    ]
  },
  {
    path: '/layouts',
    component: () => import('@/views/pages/layouts/layouts.vue'),
    children: [
      { path: '', redirect: '/layouts/layout-horizontal' },
      { path: "layout-horizontal", component: () => import('@/views/pages/layouts/layout-horizontal.vue') },
      { path: "layout-detached", component: () => import('@/views/pages/layouts/layout-detached.vue') },
      { path: "layout-two-column", component: () => import('@/views/pages/layouts/layout-two-column.vue') },
      { path: "layout-hovered", component: () => import('@/views/pages/layouts/layout-hovered.vue') },
      { path: "layout-boxed", component: () => import('@/views/pages/layouts/layout-boxed.vue') },
      { path: "layout-dark", component: () => import('@/views/pages/layouts/layout-dark.vue') },
      { path: "layout-rtl", component: () => import('@/views/pages/layouts/layout-rtl.vue') },
    ]
  },
  {
    path: '/discount',
    component: () => import('@/views/pages/promo/discount/discount-index.vue'),
    children: [
      { path: '', redirect: '/discount/discount-plan' },
      { path: "discount-plan", component: () => import('@/views/pages/promo/discount/discount-plan.vue') },
      { path: "discount-list", component: () => import('@/views/pages/promo/discount/discount-list.vue') },
    ]
  },
];

export const router = createRouter({
  history: createWebHistory('/vue/template/'),
    linkActiveClass: 'active',
    routes,
}); 

router.beforeEach((to, from, next) => {
// Scroll to the top of the page
window.scrollTo({ top: 0, behavior: 'smooth' });
// Continue with the navigation
next();
});
