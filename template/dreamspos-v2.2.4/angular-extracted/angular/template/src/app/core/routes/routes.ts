import { EmailVerification } from "../../features/auth/email-verification/email-verification";

export const routes = {
//AUTH
    login:'/auth/login',
    register:'/auth/register',
    forgotPassword:'/auth/forgot-password',
    emailVerification:'/auth/email-verification',
    otp:'/auth/otp',
    resetPassword:'/auth/reset-password',

//PAGES
    //Main
    index:'/index',
    orders:'/orders',
    kanbanView:'/kanban-view',
    kitchen:'/kitchen',
    reservations:'/reservations',
    pos:'/pos',

    //MENU MANAGEMENT
    categories:'/categories',
    coupons:'/coupons',
    items:'/items',
    addons:'/addons',

    //Operations
    table:'/table',
    customer:'/customer',
    invoices:'/invoices',
    payments:'/payments',

    //Administration
    users:'/users',
    rolePermission:'/role-permission',
    earningReport:'/earning-report',
    orderReport:'/order-report',
    salesReport:'/sales-report',
    customerReport:'/customer-report',
    auditReport:'/audit-report',

    //Settings
    storeSettings:'store-settings',
    deliverySettings:'delivery-settings',
    integrationsSettings:'integrations-settings',
    notificationsSettings:'notifications-settings',
    paymentSettings:'payment-settings',
    printSettings:'print-settings',
    taxSettings:'tax-settings',
}