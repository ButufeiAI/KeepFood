import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/pages/authentication/login.vue'),
    meta: { title: 'Login | POS Food - Bootstrap 5 Admin Dashboard' },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/pages/authentication/register.vue'),
    meta: { title: 'Register | POS Food - Bootstrap 5 Admin Dashboard' },
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('@/views/pages/authentication/forgot-password.vue'),
    meta: { title: 'Forgot Password | POS Food - Bootstrap 5 Admin Dashboard' },
  },
  {
    path: '/email-verification',
    name: 'email-verification',
    component: () => import('@/views/pages/authentication/email-verification.vue'),
    meta: { title: 'Email Verification | POS Food - Bootstrap 5 Admin Dashboard' },
  },
  {
    path: '/otp',
    name: 'otp',
    component: () => import('@/views/pages/authentication/otp.vue'),
    meta: { title: 'OTP | POS Food - Bootstrap 5 Admin Dashboard' },
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: () => import('@/views/pages/authentication/reset-password.vue'),
    meta: { title: 'Reset Password | POS Food - Bootstrap 5 Admin Dashboard' },
  },
  {
    path: '/main-menu',
    component: () => import('@/views/pages/main-module/main-menu.vue'),
    children: [
      { path: '', redirect: '/main-menu/dashboard' },
      { path: "dashboard", component: () => import('@/views/pages/main-module/dashboard.vue'), meta: { title: 'Dashboard | POS Food - Bootstrap 5 Admin Dashboard' }, },
      { path: "orders", component: () => import('@/views/pages/main-module/orders.vue'), meta: { title: 'Orders | POS Food - Bootstrap 5 Admin Dashboard' }, },
      { path: "kanban-view", component: () => import('@/views/pages/main-module/kanban-view.vue'), meta: { title: 'Kanban View | POS Food - Bootstrap 5 Admin Dashboard' }, },
      { path: "kitchen", component: () => import('@/views/pages/main-module/kitchen.vue'), meta: { title: 'Kitchen | POS Food - Bootstrap 5 Admin Dashboard' }, },
      { path: "reservations", component: () => import('@/views/pages/main-module/reservations.vue'), meta: { title: 'Reservations | POS Food - Bootstrap 5 Admin Dashboard' }, },
      { path: "pos", component: () => import('@/views/pages/main-module/pos-page/pos.vue'), meta: { title: 'POS | POS Food - Bootstrap 5 Admin Dashboard' }, },
    ]
  },
  {
    path: '/menu-management',
    component: () => import('@/views/pages/management-module/menu-management.vue'),
    children: [
      { path: '', redirect: '/menu-management/categories' },
      { path: "categories", component: () => import('@/views/pages/management-module/categories.vue'), meta: { title: 'Categories | POS Food - Bootstrap 5 Admin Dashboard' }, },
      { path: "addons", component: () => import('@/views/pages/management-module/addons.vue'), meta: { title: 'Addons | POS Food - Bootstrap 5 Admin Dashboard' }, },
      { path: "items", component: () => import('@/views/pages/management-module/items.vue'), meta: { title: 'Items | POS Food - Bootstrap 5 Admin Dashboard' }, },
      { path: "coupons", component: () => import('@/views/pages/management-module/coupons.vue'), meta: { title: 'Coupons | POS Food - Bootstrap 5 Admin Dashboard' }, },
    ]
  },
  {
    path: '/operations',
    component: () => import('@/views/pages/operations-module/operations.vue'),
    children: [
      { path: '', redirect: '/operations/table' },
      { path: "table", component: () => import('@/views/pages/operations-module/table.vue'), meta: { title: 'Tables | POS Food - Bootstrap 5 Admin Dashboard' }, },
      { path: "customer", component: () => import('@/views/pages/operations-module/customer.vue'), meta: { title: 'Customers | POS Food - Bootstrap 5 Admin Dashboard' }, },
      { path: "invoices", component: () => import('@/views/pages/operations-module/invoices.vue'), meta: { title: 'Invoices | POS Food - Bootstrap 5 Admin Dashboard' }, },
      { path: "payments", component: () => import('@/views/pages/operations-module/payments.vue'), meta: { title: 'Payments | POS Food - Bootstrap 5 Admin Dashboard' }, },
      { path: "invoice-details", component: () => import('@/views/pages/operations-module/invoice-details.vue'), meta: { title: 'Invoice Details | POS Food - Bootstrap 5 Admin Dashboard' }, },
    ]
  },
  {
    path: '/administration',
    component: () => import('@/views/pages/administration-module/administration.vue'),
    children: [
      { path: '', redirect: '/administration/users' },
      { path: "users", component: () => import('@/views/pages/administration-module/users.vue'), meta: { title: 'Users | POS Food - Bootstrap 5 Admin Dashboard' }, },
      { path: "role-permission", component: () => import('@/views/pages/administration-module/role-permission.vue'), meta: { title: 'Role Permission | POS Food - Bootstrap 5 Admin Dashboard' }, },
      { path: "earning-report", component: () => import('@/views/pages/administration-module/earning-report.vue'), meta: { title: 'Earning Report | POS Food - Bootstrap 5 Admin Dashboard' }, },
      { path: "order-report", component: () => import('@/views/pages/administration-module/order-report.vue'), meta: { title: 'Order Report | POS Food - Bootstrap 5 Admin Dashboard' }, },
      { path: "sales-report", component: () => import('@/views/pages/administration-module/sales-report.vue'), meta: { title: 'Sales Report | POS Food - Bootstrap 5 Admin Dashboard' }, },
      { path: "customer-report", component: () => import('@/views/pages/administration-module/customer-report.vue'), meta: { title: 'Customer Report | POS Food - Bootstrap 5 Admin Dashboard' }, },
      { path: "audit-report", component: () => import('@/views/pages/administration-module/audit-report.vue'), meta: { title: 'Audit Report | POS Food - Bootstrap 5 Admin Dashboard' }, },
    ]
  },
  {
    path: '/settings',
    component: () => import('@/views/pages/settings-module/settings.vue'),
    children: [
      { path: '', redirect: '/settings/store-settings' },
      { path: "store-settings", component: () => import('@/views/pages/settings-module/store-settings.vue'), meta: { title: 'Store Settings | POS Food - Bootstrap 5 Admin Dashboard' }, },
      { path: "tax-settings", component: () => import('@/views/pages/settings-module/tax-settings.vue'), meta: { title: 'Tax Settings | POS Food - Bootstrap 5 Admin Dashboard' }, },
      { path: "print-settings", component: () => import('@/views/pages/settings-module/print-settings.vue'), meta: { title: 'Print Settings | POS Food - Bootstrap 5 Admin Dashboard' }, },
      { path: "payment-settings", component: () => import('@/views/pages/settings-module/payment-settings.vue'), meta: { title: 'Payment Settings | POS Food - Bootstrap 5 Admin Dashboard' }, },
      { path: "delivery-settings", component: () => import('@/views/pages/settings-module/delivery-settings.vue'), meta: { title: 'Delivery Settings | POS Food - Bootstrap 5 Admin Dashboard' }, },
      { path: "notifications-settings", component: () => import('@/views/pages/settings-module/notifications-settings.vue'), meta: { title: 'Notifications Settings | POS Food - Bootstrap 5 Admin Dashboard' }, },
      { path: "integrations-settings", component: () => import('@/views/pages/settings-module/integrations-settings.vue'), meta: { title: 'Integrations Settings | POS Food - Bootstrap 5 Admin Dashboard' }, },
    ]
  },
  { path: '/:pathMatch(.*)*', redirect: '/login' },
]

export const router = createRouter({
  history: createWebHistory('/food-pos/vue/template/'),
  linkActiveClass: 'active',
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'POS Food - Bootstrap 5 Admin Dashboard'
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' })
  next()
})