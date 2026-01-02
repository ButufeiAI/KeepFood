<template>
    <!-- Two Col Sidebar -->
    <div class="two-col-sidebar" id="two-col-sidebar">
        <div class="sidebar sidebar-twocol">
            <div class="twocol-mini">
                <div class="sidebar-left slimscroll">
                    <div class="nav flex-column align-items-center nav-pills" id="sidebar-tabs" role="tablist"
                        aria-orientation="vertical">
                        <a href="#" class="nav-link" :class="{ active: activeTab === 'dashboard' }" title="Dashboard" @click.prevent="setActiveTab('dashboard')">
                            <i class="ti ti-smart-home"></i>
                        </a>
                        <a href="#" class="nav-link " :class="{ active: activeTab === 'super-admin' }" title="Super Admin" @click.prevent="setActiveTab('super-admin')">
                            <i class="ti ti-user-star"></i>
                        </a>
                        <a href="#" class="nav-link " :class="{ active: activeTab === 'application' }" title="Apps" @click.prevent="setActiveTab('application')">
                            <i class="ti ti-layout-grid-add"></i>
                        </a>
                        <a href="#" class="nav-link" :class="{ active: activeTab === 'layout' }" title="Layout" @click.prevent="setActiveTab('layout')">
                            <i class="ti ti-layout-board-split"></i>
                        </a>
                        <a href="#" class="nav-link" :class="{ active: activeTab === 'inventory' }" title="Inventory" @click.prevent="setActiveTab('inventory')">
                            <i class="ti ti-table-plus"></i>
                        </a>
                        <a href="#" class="nav-link" :class="{ active: activeTab === 'stock' }" title="Stock" @click.prevent="setActiveTab('stock')">
                            <i class="ti ti-stack-3"></i>
                        </a>
                        <a href="#" class="nav-link" :class="{ active: activeTab === 'sales' }" title="Sales" @click.prevent="setActiveTab('sales')">
                            <i class="ti ti-device-laptop"></i>
                        </a>
                        <a href="#" class="nav-link" :class="{ active: activeTab === 'finance' }" title="Finance" @click.prevent="setActiveTab('finance')">
                            <i class="ti ti-shopping-cart-dollar"></i>
                        </a>
                        <a href="#" class="nav-link" :class="{ active: activeTab === 'hrm' }" title="Hrm" @click.prevent="setActiveTab('hrm')">
                            <i class="ti ti-cash"></i>
                        </a>
                        <a href="#" class="nav-link" :class="{ active: activeTab === 'reports' }" title="Reports" @click.prevent="setActiveTab('reports')">
                            <i class="ti ti-license"></i>
                        </a>
                        <a href="#" class="nav-link" :class="{ active: activeTab === 'pages' }" title="Pages" @click.prevent="setActiveTab('pages')">
                            <i class="ti ti-page-break"></i>
                        </a>
                        <a href="#" class="nav-link" :class="{ active: activeTab === 'settings' }" title="Settings" @click.prevent="setActiveTab('settings')">
                            <i class="ti ti-lock-check"></i>
                        </a>
                        <a href="#" class="nav-link " :class="{ active: activeTab === 'ui-elements' }" title="UI Elements" @click.prevent="setActiveTab('ui-elements')">
                            <i class="ti ti-ux-circle"></i>
                        </a>
                        <a href="#" class="nav-link" :class="{ active: activeTab === 'extras' }" title="Extras" @click.prevent="setActiveTab('extras')">
                            <i class="ti ti-vector-triangle"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="sidebar-right">
                <div class="sidebar-scroll">
                    <div class="text-center rounded bg-light p-3 mb-3 user-profile">
                        <div class="avatar avatar-lg online mb-3">
                            <img src="@/assets/img/customer/customer15.jpg" alt="Img" class="img-fluid rounded-circle">
                        </div>
                        <h6 class="fs-12 fw-bold mb-1">Adrian Herman</h6>
                        <p class="fs-10 mb-0">System Admin</p>
                    </div>
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade" :class="{ show: activeTab === 'dashboard', active: activeTab === 'dashboard' }" id="dashboard">
                            <ul>
                                <li class="menu-title"><span>MAIN</span></li>
                                <li><NuxtLink to="/dashboard/admin-dashboard" class="active">Admin Dashboard</NuxtLink></li>
                                <li><NuxtLink to="/dashboard/admin-dashboard-2">Admin Dashboard 2</NuxtLink></li>
                                <li><NuxtLink to="/dashboard/sales-dashboard">Sales Dashboard</NuxtLink></li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" :class="{ show: activeTab === 'super-admin', active: activeTab === 'super-admin' }" id="super-admin">
                            <ul>
                                <li class="menu-title"><span>SUPER ADMIN</span></li>
                                <li><NuxtLink to="/super-admin/dashboard">Dashboard</NuxtLink></li>
                                <li><NuxtLink to="/super-admin/companies">Companies</NuxtLink></li>
                                <li><NuxtLink to="/super-admin/subscription">Subscriptions</NuxtLink></li>
                                <li><NuxtLink to="/super-admin/packages">Packages</NuxtLink></li>
                                <li><NuxtLink to="/super-admin/domain">Domain</NuxtLink></li>
                                <li><NuxtLink to="/super-admin/purchase-transaction">Purchase Transaction</NuxtLink></li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" :class="{ show: activeTab === 'application', active: activeTab === 'application' }" id="application">
                            <ul>
                                <li><NuxtLink to="/application/chat">Chat</NuxtLink></li>
                                <li class="submenu submenu-two"><a href="javascript:void(0);">Call<span class="menu-arrow inside-submenu"></span></a>
                                    <ul>
                                        <li><NuxtLink to="/call/video-call">Video Call</NuxtLink></li>
                                        <li><NuxtLink to="/call/audio-call">Audio Call</NuxtLink></li>
                                        <li><NuxtLink to="/call/call-history">Call History</NuxtLink></li>
                                    </ul>
                                </li>
                                <li><NuxtLink to="/application/calendar">Calendar</NuxtLink></li>
                                <li><NuxtLink to="/application/contacts">Contacts</NuxtLink></li>
                                <li><NuxtLink to="/application/email">Email</NuxtLink></li>
                                <li><NuxtLink to="/application/todo">To Do</NuxtLink></li>
                                <li><NuxtLink to="/application/notes">Notes</NuxtLink></li>
                                <li><NuxtLink to="/application/file-manager">File Manager</NuxtLink></li>
                                <li><NuxtLink to="/application/projects">Projects</NuxtLink></li>
                                <li class="submenu submenu-two"><a href="javascript:void(0);">Ecommerce<span class="menu-arrow inside-submenu"></span></a>
                                    <ul>
                                        <li><NuxtLink to="/ecommerce/products">Products</NuxtLink></li>
                                        <li><NuxtLink to="/ecommerce/orders">Orders</NuxtLink></li>
                                        <li><NuxtLink to="/ecommerce/customers">Customers</NuxtLink></li>
                                        <li><NuxtLink to="/ecommerce/cart">Cart</NuxtLink></li>
                                        <li><NuxtLink to="/ecommerce/checkout">Checkout</NuxtLink></li>
                                        <li><NuxtLink to="/ecommerce/wishlist">Wishlist</NuxtLink></li>
                                        <li><NuxtLink to="/ecommerce/reviews">Reviews</NuxtLink></li>
                                    </ul>
                                </li>
                                <li><NuxtLink to="/application/social-feed">Social Feed</NuxtLink></li>
                                <li><NuxtLink to="/application/search-list">Search List</NuxtLink></li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" :class="{ show: activeTab === 'layout', active: activeTab === 'layout' }" id="layout">
                            <ul>
                                <li class="menu-title"><span>LAYOUT</span></li>
                                <li><NuxtLink to="/layouts/layout-horizontal">Horizontal</NuxtLink></li>
                                <li><NuxtLink to="/layouts/layout-detached">Detached</NuxtLink></li>
                                <li><NuxtLink to="/layouts/layout-two-column">Two Column</NuxtLink></li>
                                <li><NuxtLink to="/layouts/layout-hovered">Hovered</NuxtLink></li>
                                <li><NuxtLink to="/layouts/layout-boxed">Boxed</NuxtLink></li>
                                <li><NuxtLink to="/layouts/layout-rtl">RTL</NuxtLink></li>
                                <li><NuxtLink to="/layouts/layout-dark">Dark</NuxtLink></li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" :class="{ show: activeTab === 'inventory', active: activeTab === 'inventory' }" id="inventory">
                            <ul>
                                <li class="menu-title"><span>Inventory</span></li>
                                <li><NuxtLink to="/inventory/product-list"><span>Products</span></NuxtLink></li>
                                <li><NuxtLink to="/inventory/add-product"><span>Create Product</span></NuxtLink></li>
                                <li><NuxtLink to="/inventory/expired-products"><span>Expired Products</span></NuxtLink></li>
                                <li><NuxtLink to="/inventory/low-stocks"><span>Low Stocks</span></NuxtLink></li>
                                <li><NuxtLink to="/inventory/category-list"><span>Category</span></NuxtLink></li>
                                <li><NuxtLink to="/inventory/sub-categories"><span>Sub Category</span></NuxtLink></li>
                                <li><NuxtLink to="/inventory/brand-list"><span>Brands</span></NuxtLink></li>
                                <li><NuxtLink to="/inventory/units"><span>Units</span></NuxtLink></li>
                                <li><NuxtLink to="/inventory/varriant-attributes"><span>Variant Attributes</span></NuxtLink></li>
                                <li><NuxtLink to="/inventory/warranty"><span>Warranties</span></NuxtLink></li>
                                <li><NuxtLink to="/inventory/barcode"><span>Print Barcode</span></NuxtLink></li>
                                <li><NuxtLink to="/inventory/qrcode"><span>Print QR Code</span></NuxtLink></li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" :class="{ show: activeTab === 'stock', active: activeTab === 'stock' }" id="stock">
                            <ul>
                                <li class="menu-title"><span>Stock</span></li>
                                <li><NuxtLink to="/stock/manage-stocks"><span>Manage Stock</span></NuxtLink></li>
                                <li><NuxtLink to="/stock/stock-adjustment"><span>Stock Adjustment</span></NuxtLink></li>
                                <li><NuxtLink to="/stock/stock-transfer"><span>Stock Transfer</span></NuxtLink></li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" :class="{ show: activeTab === 'sales', active: activeTab === 'sales' }" id="sales">
                            <ul>
                                <li class="menu-title"><span>Sales</span></li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Sales</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><NuxtLink to="/sales/online-orders">Online Orders</NuxtLink></li>
                                        <li><NuxtLink to="/sales/pos-orders">POS Orders</NuxtLink></li>
                                    </ul>
                                </li>
                                <li><NuxtLink to="/sale/invoice"><span>Invoices</span></NuxtLink></li>
                                <li><NuxtLink to="/sale/sale-returns"><span>Sales Return</span></NuxtLink></li>
                                <li><NuxtLink to="/sale/quotation-list"><span>Quotation</span></NuxtLink></li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>POS</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><NuxtLink to="/pos/pos-1">POS 1</NuxtLink></li>
                                        <li><NuxtLink to="/pos/pos-2">POS 2</NuxtLink></li>
                                        <li><NuxtLink to="/pos/pos-3">POS 3</NuxtLink></li>
                                        <li><NuxtLink to="/pos/pos-4">POS 4</NuxtLink></li>
                                        <li><NuxtLink to="/pos/pos-5">POS 5</NuxtLink></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" :class="{ show: activeTab === 'finance', active: activeTab === 'finance' }" id="finance">
                            <ul>
                                <li class="menu-title"><span>FINANCE & ACCOUNTS</span></li>
                                <li><NuxtLink to="/coupons"><span>Coupons</span></NuxtLink></li>
                                <li><NuxtLink to="/gift-cards"><span>Gift Cards</span></NuxtLink></li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Discount</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><NuxtLink to="/discount/discount-plan">Discount Plan</NuxtLink></li>
                                        <li><NuxtLink to="/discount/discount-list">Discount</NuxtLink></li>
                                    </ul>
                                </li>
                                <li><NuxtLink to="/purchases/purchase-list"><span>Purchases</span></NuxtLink></li>
                                <li><NuxtLink to="/purchases/purchase-order-report"><span>Purchase Order</span></NuxtLink></li>
                                <li><NuxtLink to="/purchases/purchase-returns"><span>Purchase Return</span></NuxtLink></li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Expenses</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><NuxtLink to="/expenses/expenses-list">Expenses</NuxtLink></li>
                                        <li><NuxtLink to="/expenses/expenses-category">Expense Category</NuxtLink></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Income</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><NuxtLink to="/income/income-list">Income</NuxtLink></li>
                                        <li><NuxtLink to="/income/income-category">Income Category</NuxtLink></li>
                                    </ul>
                                </li>
                                <li><NuxtLink to="/finance/account-list"><span>Bank Accounts</span></NuxtLink></li>
                                <li><NuxtLink to="/finance/money-transfer"><span>Money Transfer</span></NuxtLink></li>
                                <li><NuxtLink to="/finance/balance-sheet"><span>Balance Sheet</span></NuxtLink></li>
                                <li><NuxtLink to="/finance/trial-balance"><span>Trial Balance</span></NuxtLink></li>
                                <li><NuxtLink to="/finance/cash-flow"><span>Cash Flow</span></NuxtLink></li>
                                <li><NuxtLink to="/finance/account-statement"><span>Account Statement</span></NuxtLink></li>
                                <li><NuxtLink to="/ecommerce/customers"><span>Customers</span></NuxtLink></li>
                                <li><NuxtLink to="/people/billers"><span>Billers</span></NuxtLink></li>
                                <li><NuxtLink to="/people/suppliers"><span>Suppliers</span></NuxtLink></li>
                                <li><NuxtLink to="/people/store-list"><span>Stores</span></NuxtLink></li>
                                <li><NuxtLink to="/people/warehouse"><span>Warehouses</span></NuxtLink></li>						
                            </ul>
                        </div>
                        <div class="tab-pane fade" :class="{ show: activeTab === 'hrm', active: activeTab === 'hrm' }" id="hrm">
                            <ul>
                                <li class="menu-title"><span>Hrm</span></li>
                                <li><NuxtLink to="/hrm/employees-grid"><span>Employees</span></NuxtLink></li>
                                <li><NuxtLink to="/hrm/department-grid"><span>Departments</span></NuxtLink></li>
                                <li><NuxtLink to="/hrm/designation"><span>Designation</span></NuxtLink></li>
                                <li><NuxtLink to="/hrm/shift"><span>Shifts</span></NuxtLink></li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Attendence</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><NuxtLink to="/hrm/attendance-employee">Employee</NuxtLink></li>
                                        <li><NuxtLink to="/hrm/attendance-admin">Admin</NuxtLink></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Leaves</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><NuxtLink to="/leaves/leaves-admin">Admin Leaves</NuxtLink></li>
                                        <li><NuxtLink to="/leaves/leaves-employee">Employee Leaves</NuxtLink></li>
                                        <li><NuxtLink to="/leaves/leave-types">Leave Types</NuxtLink></li>
                                    </ul>
                                </li>
                                <li><NuxtLink to="/hrm/holidays"><span>Holidays</span></NuxtLink>
                                </li>
                                <li class="submenu">
                                    <NuxtLink to="/payroll/employee-salary"><span>Payroll</span><span class="menu-arrow"></span></NuxtLink>
                                    <ul>
                                        <li><NuxtLink to="/payroll/employee-salary">Employee Salary</NuxtLink></li>
                                        <li><NuxtLink to="/payroll/payslip">Payslip</NuxtLink></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" :class="{ show: activeTab === 'reports', active: activeTab === 'reports' }" id="reports">
                            <ul>
                                <li class="menu-title"><span>Reports</span></li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Sales Report</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><NuxtLink to="/sales-report/sales-report">Sales Report</NuxtLink></li>
                                        <li><NuxtLink to="/sales-report/best-sellers">Best Seller</NuxtLink></li>
                                    </ul>
                                </li>
                                <li><NuxtLink to="/reports/purchase-report"><span>Purchase report</span></NuxtLink></li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Inventory Report</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><NuxtLink to="/inventory-report/inventory-report">Inventory Report</NuxtLink></li>
                                        <li><NuxtLink to="/inventory-report/stock-history">Stock History</NuxtLink></li>
                                        <li><NuxtLink to="/inventory-report/sold-stock">Sold Stock</NuxtLink></li>
                                    </ul>
                                </li>
                                <li><NuxtLink to="/reports/invoice-report"><span>Invoice Report</span></NuxtLink></li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Supplier Report</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><NuxtLink to="/supplier-report/supplier-report">Supplier Report</NuxtLink></li>
                                        <li><NuxtLink to="/supplier-report/supplier-due-report">Supplier Due Report</NuxtLink></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Customer Report</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><NuxtLink to="/customer-report/customer-report">Customer Report</NuxtLink></li>
                                        <li><NuxtLink to="/customer-report/customer-due-report">Customer Due Report</NuxtLink></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Product Report</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><NuxtLink to="/product-report/product-report">Product Report</NuxtLink></li>
                                        <li><NuxtLink to="/product-report/product-expiry-report">Product Expiry Report</NuxtLink></li>
                                        <li><NuxtLink to="/product-report/product-quantity-alert">Product Quantity Alert</NuxtLink></li>
                                    </ul>
                                </li>
                                <li><NuxtLink to="/reports/expense-report"><span>Expense Report</span></NuxtLink></li>
                                <li><NuxtLink to="/reports/income-report"><span>Income Report</span></NuxtLink></li>
                                <li><NuxtLink to="/reports/tax-report"><span>Tax Report</span></NuxtLink></li>
                                <li><NuxtLink to="/reports/profit-and-loss"><span>Profit & Loss</span></NuxtLink></li>
                                <li><NuxtLink to="/reports/annual-report"><span>Annual Report</span></NuxtLink></li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" :class="{ show: activeTab === 'pages', active: activeTab === 'pages' }" id="pages">
                            <ul>
                                <li class="menu-title"><span>Pages</span></li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Pages</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><NuxtLink to="/page/pages">Pages</NuxtLink></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Blog</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><NuxtLink to="/blog/all-blog">All Blog</NuxtLink></li>
                                        <li><NuxtLink to="/blog/blog-tag">Blog Tags</NuxtLink></li>
                                        <li><NuxtLink to="/blog/blog-categories">Categories</NuxtLink></li>
                                        <li><NuxtLink to="/blog/blog-comments">Blog Comments</NuxtLink></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Location</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><NuxtLink to="/location/countries">Countries</NuxtLink></li>
                                        <li><NuxtLink to="/location/states">States</NuxtLink></li>
                                        <li><NuxtLink to="/location/cities">Cities</NuxtLink></li>
                                    </ul>
                                </li>
                                <li><NuxtLink to="/content/testimonials"><span>Testimonials</span></NuxtLink></li>
                                <li><NuxtLink to="/content/faq"><span>FAQ</span></NuxtLink></li>
                                <li><NuxtLink to="/users/users-list"><span>Users</span></NuxtLink></li>
                                <li><NuxtLink to="/users/roles-permissions"><span>Roles & Permissions</span></NuxtLink></li>
                                <li><NuxtLink to="/users/delete-account"><span>Delete Account Request</span></NuxtLink></li>
                                <li><NuxtLink to="/pages/profile"><span>Profile</span></NuxtLink></li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Authentication</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li class="submenu submenu-two"><a href="javascript:void(0);">Login<span class="menu-arrow inside-submenu"></span></a>
                                            <ul>
                                                <li><NuxtLink to="/">Cover</NuxtLink></li>
                                                <li><NuxtLink to="/authentication/signin-2">Illustration</NuxtLink></li>
                                                <li><NuxtLink to="/authentication/signin-3">Basic</NuxtLink></li>
                                            </ul>
                                        </li>
                                        <li class="submenu submenu-two"><a href="javascript:void(0);">Register<span class="menu-arrow inside-submenu"></span></a>
                                            <ul>
                                                <li><NuxtLink to="/authentication/register">Cover</NuxtLink></li>
                                                <li><NuxtLink to="/authentication/register-2">Illustration</NuxtLink></li>
                                                <li><NuxtLink to="/authentication/register-3">Basic</NuxtLink></li>
                                            </ul>
                                        </li>
                                        <li class="submenu submenu-two"><a href="javascript:void(0);">Forgot Password<span class="menu-arrow inside-submenu"></span></a>
                                            <ul>
                                                <li><NuxtLink to="/authentication/forgot-password">Cover</NuxtLink></li>
                                                <li><NuxtLink to="/authentication/forgot-password-2">Illustration</NuxtLink></li>
                                                <li><NuxtLink to="/authentication/forgot-password-3">Basic</NuxtLink></li>
                                            </ul>
                                        </li>
                                        <li class="submenu submenu-two"><a href="javascript:void(0);">Reset Password<span class="menu-arrow inside-submenu"></span></a>
                                            <ul>
                                                <li><NuxtLink to="/authentication/reset-password">Cover</NuxtLink></li>
                                                <li><NuxtLink to="/authentication/reset-password-2">Illustration</NuxtLink></li>
                                                <li><NuxtLink to="/authentication/reset-password-3">Basic</NuxtLink></li>
                                            </ul>
                                        </li>
                                        <li class="submenu submenu-two"><a href="javascript:void(0);">Email Verification<span class="menu-arrow inside-submenu"></span></a>
                                            <ul>
                                                <li><NuxtLink to="/authentication/email-verification">Cover</NuxtLink></li>
                                                <li><NuxtLink to="/authentication/email-verification-2">Illustration</NuxtLink></li>
                                                <li><NuxtLink to="/authentication/email-verification-3">Basic</NuxtLink></li>
                                            </ul>
                                        </li>
                                        <li class="submenu submenu-two"><a href="javascript:void(0);">2 Step Verification<span class="menu-arrow inside-submenu"></span></a>
                                            <ul>
                                                <li><NuxtLink to="/authentication/two-step-verification">Cover</NuxtLink></li>
                                                <li><NuxtLink to="/authentication/two-step-verification-2">Illustration</NuxtLink></li>
                                                <li><NuxtLink to="/authentication/two-step-verification-3">Basic</NuxtLink></li>
                                            </ul>
                                        </li>
                                        <li><NuxtLink to="/authentication/lock-screen">Lock Screen</NuxtLink></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Error Pages</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><NuxtLink to="/error/error-404">404 Error </NuxtLink></li>
                                        <li><NuxtLink to="/error/error-500">500 Error </NuxtLink></li>
                                    </ul>
                                </li>
                                <li>
                                    <NuxtLink to="/pages/blank-page"><span>Blank Page</span> </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/pages/pricing"><span>Pricing</span> </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/pages/coming-soon"><span>Coming Soon</span> </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/pages/under-maintenance"><span>Under Maintenance</span> </NuxtLink>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" :class="{ show: activeTab === 'settings', active: activeTab === 'settings' }" id="settings">
                            <ul>
                                <li class="menu-title"><span>Settings</span></li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>General Settings</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><NuxtLink to="/settings/general-settings">Profile</NuxtLink></li>
                                        <li><NuxtLink to="/settings/security-settings">Security</NuxtLink></li>
                                        <li><NuxtLink to="/settings/notification">Notifications</NuxtLink></li>
                                        <li><NuxtLink to="/settings/connected-apps">Connected Apps</NuxtLink></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Website Settings</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><NuxtLink to="/website-settings/system-settings">System Settings</NuxtLink></li>
                                        <li><NuxtLink to="/website-settings/company-settings">Company Settings </NuxtLink></li>
                                        <li><NuxtLink to="/website-settings/localization-settings">Localization</NuxtLink></li>
                                        <li><NuxtLink to="/website-settings/prefixes">Prefixes</NuxtLink></li>
                                        <li><NuxtLink to="/website-settings/preference">Preference</NuxtLink></li>
                                        <li><NuxtLink to="/website-settings/appearance">Appearance</NuxtLink></li>
                                        <li><NuxtLink to="/website-settings/social-authentication">Social Authentication</NuxtLink></li>
                                        <li><NuxtLink to="/website-settings/language-settings">Language</NuxtLink></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:void(0);">
                                        <span>App Settings</span><span class="menu-arrow"></span>
                                    </a>
                                    <ul>
                                        <li class="submenu submenu-two"><a href="javascript:void(0);">Invoice<span class="menu-arrow inside-submenu"></span></a>
                                            <ul>
                                                <li><NuxtLink to="/app-settings/invoice-settings">Invoice Settings</NuxtLink></li>
                                                <li><NuxtLink to="/app-settings/invoice-templates">Invoice Template</NuxtLink></li>
                                            </ul>
                                        </li>
                                        <li><NuxtLink to="/app-settings/printer-settings">Printer</NuxtLink></li>
                                        <li><NuxtLink to="/app-settings/pos-settings">POS</NuxtLink></li>
                                        <li><NuxtLink to="/app-settings/custom-fields">Custom Fields</NuxtLink></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:void(0);">
                                        <span>System Settings</span><span class="menu-arrow"></span>
                                    </a>
                                    <ul>
                                        <li class="submenu submenu-two"><a href="javascript:void(0);">Email<span class="menu-arrow inside-submenu"></span></a>
                                            <ul>
                                                <li><NuxtLink to="/system-settings/email-settings">Email Settings</NuxtLink></li>
                                                <li><NuxtLink to="/system-settings/email-templates">Email Template</NuxtLink></li>
                                            </ul>
                                        </li>
                                        <li class="submenu submenu-two"><a href="javascript:void(0);">SMS<span class="menu-arrow inside-submenu"></span></a>
                                            <ul>
                                                <li><NuxtLink to="/system-settings/sms-settings">SMS Settings</NuxtLink></li>
                                                <li><NuxtLink to="/system-settings/sms-templates">SMS Template</NuxtLink></li>
                                            </ul>
                                        </li>
                                        <li><NuxtLink to="/system-settings/otp-settings">OTP</NuxtLink></li>
                                        <li><NuxtLink to="/system-settings/gdpr-settings">GDPR Cookies</NuxtLink></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:void(0);">
                                        <span>Financial Settings</span><span class="menu-arrow"></span>
                                    </a>
                                    <ul>
                                        <li><NuxtLink to="/financial-settings/payment-gateway-settings">Payment Gateway</NuxtLink></li>
                                        <li><NuxtLink to="/financial-settings/bank-settings-grid">Bank Accounts</NuxtLink></li>
                                        <li><NuxtLink to="/financial-settings/tax-rates">Tax Rates</NuxtLink></li>
                                        <li><NuxtLink to="/financial-settings/currency-settings">Currencies</NuxtLink></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:void(0);">
                                        <span>Other Settings</span><span class="menu-arrow"></span>
                                    </a>
                                    <ul>
                                        <li><NuxtLink to="/other-settings/storage-settings">Storage</NuxtLink></li>
                                        <li><NuxtLink to="/other-settings/ban-ip-address">Ban IP Address</NuxtLink></li>
                                    </ul>
                                </li>
                                <li>
                                    <NuxtLink to="/"><span>Logout</span> </NuxtLink>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" :class="{ show: activeTab === 'ui-elements', active: activeTab === 'ui-elements' }" id="ui-elements">
                            <ul>
                                <li class="menu-title"><span>Ui Interface</span></li>
                                <li class="submenu">
                                    <a href="javascript:void(0);">
                                        <span>Base UI</span><span class="menu-arrow"></span>
                                    </a>
                                    <ul>
                                        <li><NuxtLink to="/baseui/ui-alerts">Alerts</NuxtLink></li>
                                        <li><NuxtLink to="/baseui/ui-accordion">Accordion</NuxtLink></li>
                                        <li><NuxtLink to="/baseui/ui-avatar">Avatar</NuxtLink></li>
                                        <li><NuxtLink to="/baseui/ui-badges">Badges</NuxtLink></li>
                                        <li><NuxtLink to="/baseui/ui-borders">Border</NuxtLink></li>
                                        <li><NuxtLink to="/baseui/ui-buttons">Buttons</NuxtLink></li>
                                        <li><NuxtLink to="/baseui/ui-buttons-group">Button Group</NuxtLink></li>
                                        <li><NuxtLink to="/baseui/ui-breadcrumb">Breadcrumb</NuxtLink></li>
                                        <li><NuxtLink to="/baseui/ui-cards">Card</NuxtLink></li>
                                        <li><NuxtLink to="/baseui/ui-carousel">Carousel</NuxtLink></li>
                                        <li><NuxtLink to="/baseui/ui-colors">Colors</NuxtLink></li>
                                        <li><NuxtLink to="/baseui/ui-dropdowns">Dropdowns</NuxtLink></li>
                                        <li><NuxtLink to="/baseui/ui-grid">Grid</NuxtLink></li>
                                        <li><NuxtLink to="/baseui/ui-images">Images</NuxtLink></li>
                                        <li><NuxtLink to="/baseui/ui-lightbox">Lightbox</NuxtLink></li>
                                        <li><NuxtLink to="/baseui/ui-media">Media</NuxtLink></li>
                                        <li><NuxtLink to="/baseui/ui-modals">Modals</NuxtLink></li>
                                        <li><NuxtLink to="/baseui/ui-offcanvas">Offcanvas</NuxtLink></li>
                                        <li><NuxtLink to="/baseui/ui-pagination">Pagination</NuxtLink></li>
                                        <li><NuxtLink to="/baseui/ui-progress">Progress</NuxtLink></li>
                                        <li><NuxtLink to="/baseui/ui-placeholders">Placeholders</NuxtLink></li>
                                        <li><NuxtLink to="/baseui/ui-spinner">Spinner</NuxtLink></li>
                                        <li><NuxtLink to="/baseui/ui-tooltips">Tooltips</NuxtLink></li>
                                        <li><NuxtLink to="/baseui/ui-typography">Typography</NuxtLink></li>
                                        <li><NuxtLink to="/baseui/ui-video">Video</NuxtLink></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:void(0);">
                                        <span>Advanced UI</span><span class="menu-arrow"></span>
                                    </a>
                                    <ul>
                                        <li><NuxtLink to="/advancedui/ui-ribbon">Ribbon</NuxtLink></li>
                                        <li><NuxtLink to="/advancedui/ui-clipboard">Clipboard</NuxtLink></li>
                                        <li><NuxtLink to="/advancedui/ui-drag-drop">Drag & Drop</NuxtLink></li>
                                        <li><NuxtLink to="/advancedui/ui-rating">Rating</NuxtLink></li>
                                        <li><NuxtLink to="/advancedui/ui-text-editor">Text Editor</NuxtLink></li>
                                        <li><NuxtLink to="/advancedui/ui-counter">Counter</NuxtLink></li>
                                        <li><NuxtLink to="/advancedui/ui-scrollbar">Scrollbar</NuxtLink></li>
                                        <li><NuxtLink to="/advancedui/ui-stickynote">Sticky Note</NuxtLink></li>
                                        <li><NuxtLink to="/advancedui/ui-timeline">Timeline</NuxtLink></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:void(0);">
                                        <span>Charts</span><span class="menu-arrow"></span>
                                    </a>
                                    <ul>
                                        <li><NuxtLink to="/charts/chart-apex">Apex Charts</NuxtLink></li>
                                        <li><NuxtLink to="/charts/chart-c3">Chart C3</NuxtLink></li>
                                        <li><NuxtLink to="/charts/chart-js">Chart Js</NuxtLink></li>
                                        <li><NuxtLink to="/charts/chart-morris">Morris Charts</NuxtLink></li>
                                        <li><NuxtLink to="/charts/chart-flot">Flot Charts</NuxtLink></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:void(0);">
                                        <span>Icons</span><span class="menu-arrow"></span>
                                    </a>
                                    <ul>
                                        <li><NuxtLink to="/icons/icon-fontawesome">Fontawesome Icons</NuxtLink></li>
                                        <li><NuxtLink to="/icons/icon-feather">Feather Icons</NuxtLink></li>
                                        <li><NuxtLink to="/icons/icon-ionic">Ionic Icons</NuxtLink></li>
                                        <li><NuxtLink to="/icons/icon-material">Material Icons</NuxtLink></li>
                                        <li><NuxtLink to="/icons/icon-pe7">Pe7 Icons</NuxtLink></li>
                                        <li><NuxtLink to="/icons/icon-weather">Weather Icons</NuxtLink></li>
                                        <li><NuxtLink to="/icons/icon-typicon">Typicon Icons</NuxtLink></li>
                                        <li><NuxtLink to="/icons/icon-flag">Flag Icons</NuxtLink></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:void(0);">
                                        <span>Forms</span><span class="menu-arrow"></span>
                                    </a>
                                    <ul>
                                        <li class="submenu submenu-two">
                                            <a href="javascript:void(0);">Form Elements<span class="menu-arrow inside-submenu"></span></a>
                                            <ul>
                                                <li><NuxtLink to="/forms/form-basic-inputs">Basic Inputs</NuxtLink></li>
                                                <li><NuxtLink to="/forms/form-checkbox-radios">Checkbox & Radios</NuxtLink></li>
                                                <li><NuxtLink to="/forms/form-input-groups">Input Groups</NuxtLink></li>
                                                <li><NuxtLink to="/forms/form-grid-gutters">Grid & Gutters</NuxtLink></li>
                                                <li><NuxtLink to="/forms/form-select">Form Select</NuxtLink></li>
                                                <li><NuxtLink to="/forms/form-mask">Input Masks</NuxtLink></li>
                                                <li><NuxtLink to="/forms/form-fileupload">File Uploads</NuxtLink></li>
                                            </ul>
                                        </li>
                                        <li class="submenu submenu-two">
                                            <a href="javascript:void(0);">Layouts<span class="menu-arrow inside-submenu"></span></a>
                                            <ul>
                                                <li><NuxtLink to="/forms/form-horizontal">Horizontal Form</NuxtLink></li>
                                                <li><NuxtLink to="/forms/form-vertical">Vertical Form</NuxtLink></li>
                                                <li><NuxtLink to="/forms/form-floating-labels">Floating Labels</NuxtLink></li>
                                            </ul>
                                        </li>
                                        <li><NuxtLink to="/forms/form-validation">Form Validation</NuxtLink></li>
                                        <li><NuxtLink to="/forms/form-select2">Select2</NuxtLink></li>
                                        <li><NuxtLink to="/forms/form-wizard">Form Wizard</NuxtLink></li>
                                        <li><NuxtLink to="/forms/form-pickers">Form Picker</NuxtLink></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Tables</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><NuxtLink to="/tables/tables-basic">Basic Tables </NuxtLink></li>
                                        <li><NuxtLink to="/tables/data-tables">Data Table </NuxtLink></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Maps</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><NuxtLink to="/maps/maps-vector">Vector</NuxtLink></li>
                                        <li><NuxtLink to="/maps/maps-leaflet">Leaflet</NuxtLink></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" :class="{ show: activeTab === 'extras', active: activeTab === 'extras' }" id="extras">
                            <ul>
                                <li class="menu-title"><span>Help</span></li>
                                <li><a href="https://dreamspos.dreamstechnologies.com/documentation/yii.html" target="_blank"><span>Documentation</span></a></li>
                                <li><a href="https://dreamspos.dreamstechnologies.com/documentation/changelog.html" target="_blank"><span>Changelog v2.2.3</span></a></li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Multi Level</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><a href="javascript:void(0);">Level 1.1</a></li>
                                        <li class="submenu submenu-two"><a href="javascript:void(0);">Level 1.2<span class="menu-arrow inside-submenu"></span></a>
                                            <ul>
                                                <li><a href="javascript:void(0);">Level 2.1</a></li>
                                                <li class="submenu submenu-two submenu-three"><a href="javascript:void(0);">Level 2.2<span class="menu-arrow inside-submenu inside-submenu-two"></span></a>
                                                    <ul>
                                                        <li><a href="javascript:void(0);">Level 3.1</a></li>
                                                        <li><a href="javascript:void(0);">Level 3.2</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Two Col Sidebar -->
</template>

<script>
export default {
    name: 'TwoColSidebar',
    data(){
        return{
            activeTab: 'dashboard',
        }
    },
    methods:{
        setActiveTab(tab){
            this.activeTab = tab;
        }
    }
}
</script>