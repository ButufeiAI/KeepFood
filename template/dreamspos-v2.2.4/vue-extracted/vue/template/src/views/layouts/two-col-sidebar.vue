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
                                <li><router-link to="/dashboard/" class="active">Admin Dashboard</router-link></li>
                                <li><router-link to="/dashboard/admin-dashboard-2">Admin Dashboard 2</router-link></li>
                                <li><router-link to="/dashboard/sales-dashboard">Sales Dashboard</router-link></li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" :class="{ show: activeTab === 'super-admin', active: activeTab === 'super-admin' }" id="super-admin">
                            <ul>
                                <li class="menu-title"><span>SUPER ADMIN</span></li>
                                <li><router-link to="/super-admin/dashboard">Dashboard</router-link></li>
                                <li><router-link to="/super-admin/companies">Companies</router-link></li>
                                <li><router-link to="/super-admin/subscription">Subscriptions</router-link></li>
                                <li><router-link to="/super-admin/packages">Packages</router-link></li>
                                <li><router-link to="/super-admin/domain">Domain</router-link></li>
                                <li><router-link to="/super-admin/purchase-transaction">Purchase Transaction</router-link></li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" :class="{ show: activeTab === 'application', active: activeTab === 'application' }" id="application">
                            <ul>
                                <li><router-link to="/application/chat">Chat</router-link></li>
                                <li class="submenu submenu-two"><a href="javascript:void(0);">Call<span class="menu-arrow inside-submenu"></span></a>
                                    <ul>
                                        <li><router-link to="/call/video-call">Video Call</router-link></li>
                                        <li><router-link to="/call/audio-call">Audio Call</router-link></li>
                                        <li><router-link to="/call/call-history">Call History</router-link></li>
                                    </ul>
                                </li>
                                <li><router-link to="/application/calendar">Calendar</router-link></li>
                                <li><router-link to="/application/contacts">Contacts</router-link></li>
                                <li><router-link to="/application/email">Email</router-link></li>
                                <li><router-link to="/application/todo">To Do</router-link></li>
                                <li><router-link to="/application/notes">Notes</router-link></li>
                                <li><router-link to="/application/file-manager">File Manager</router-link></li>
                                <li><router-link to="/application/projects">Projects</router-link></li>
                                <li class="submenu submenu-two"><a href="javascript:void(0);">Ecommerce<span class="menu-arrow inside-submenu"></span></a>
                                    <ul>
                                        <li><router-link to="/ecommerce/products">Products</router-link></li>
                                        <li><router-link to="/ecommerce/orders">Orders</router-link></li>
                                        <li><router-link to="/ecommerce/customers">Customers</router-link></li>
                                        <li><router-link to="/ecommerce/cart">Cart</router-link></li>
                                        <li><router-link to="/ecommerce/checkout">Checkout</router-link></li>
                                        <li><router-link to="/ecommerce/wishlist">Wishlist</router-link></li>
                                        <li><router-link to="/ecommerce/reviews">Reviews</router-link></li>
                                    </ul>
                                </li>
                                <li><router-link to="/application/social-feed">Social Feed</router-link></li>
                                <li><router-link to="/application/search-list">Search List</router-link></li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" :class="{ show: activeTab === 'layout', active: activeTab === 'layout' }" id="layout">
                            <ul>
                                <li class="menu-title"><span>LAYOUT</span></li>
                                <li><router-link to="/layouts/layout-horizontal">Horizontal</router-link></li>
                                <li><router-link to="/layouts/layout-detached">Detached</router-link></li>
                                <li><router-link to="/layouts/layout-two-column">Two Column</router-link></li>
                                <li><router-link to="/layouts/layout-hovered">Hovered</router-link></li>
                                <li><router-link to="/layouts/layout-boxed">Boxed</router-link></li>
                                <li><router-link to="/layouts/layout-rtl">RTL</router-link></li>
                                <li><router-link to="/layouts/layout-dark">Dark</router-link></li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" :class="{ show: activeTab === 'inventory', active: activeTab === 'inventory' }" id="inventory">
                            <ul>
                                <li class="menu-title"><span>Inventory</span></li>
                                <li><router-link to="/inventory/product-list"><span>Products</span></router-link></li>
                                <li><router-link to="/inventory/add-product"><span>Create Product</span></router-link></li>
                                <li><router-link to="/inventory/expired-products"><span>Expired Products</span></router-link></li>
                                <li><router-link to="/inventory/low-stocks"><span>Low Stocks</span></router-link></li>
                                <li><router-link to="/inventory/category-list"><span>Category</span></router-link></li>
                                <li><router-link to="/inventory/sub-categories"><span>Sub Category</span></router-link></li>
                                <li><router-link to="/inventory/brand-list"><span>Brands</span></router-link></li>
                                <li><router-link to="/inventory/units"><span>Units</span></router-link></li>
                                <li><router-link to="/inventory/varriant-attributes"><span>Variant Attributes</span></router-link></li>
                                <li><router-link to="/inventory/warranty"><span>Warranties</span></router-link></li>
                                <li><router-link to="/inventory/barcode"><span>Print Barcode</span></router-link></li>
                                <li><router-link to="/inventory/qrcode"><span>Print QR Code</span></router-link></li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" :class="{ show: activeTab === 'stock', active: activeTab === 'stock' }" id="stock">
                            <ul>
                                <li class="menu-title"><span>Stock</span></li>
                                <li><router-link to="/stock/manage-stocks"><span>Manage Stock</span></router-link></li>
                                <li><router-link to="/stock/stock-adjustment"><span>Stock Adjustment</span></router-link></li>
                                <li><router-link to="/stock/stock-transfer"><span>Stock Transfer</span></router-link></li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" :class="{ show: activeTab === 'sales', active: activeTab === 'sales' }" id="sales">
                            <ul>
                                <li class="menu-title"><span>Sales</span></li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Sales</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><router-link to="/sales/online-orders">Online Orders</router-link></li>
                                        <li><router-link to="/sales/pos-orders">POS Orders</router-link></li>
                                    </ul>
                                </li>
                                <li><router-link to="/invoice"><span>Invoices</span></router-link></li>
                                <li><router-link to="/sales-returns"><span>Sales Return</span></router-link></li>
                                <li><router-link to="/quotation-list"><span>Quotation</span></router-link></li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>POS</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><router-link to="/pos/pos-1">POS 1</router-link></li>
                                        <li><router-link to="/pos/pos-2">POS 2</router-link></li>
                                        <li><router-link to="/pos/pos-3">POS 3</router-link></li>
                                        <li><router-link to="/pos/pos-4">POS 4</router-link></li>
                                        <li><router-link to="/pos/pos-5">POS 5</router-link></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/food-pos/vue/template/login" target="_blank">POS 6</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" :class="{ show: activeTab === 'finance', active: activeTab === 'finance' }" id="finance">
                            <ul>
                                <li class="menu-title"><span>FINANCE & ACCOUNTS</span></li>
                                <li><router-link to="/coupons"><span>Coupons</span></router-link></li>
                                <li><router-link to="/gift-cards"><span>Gift Cards</span></router-link></li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Discount</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><router-link to="/discount/discount-plan">Discount Plan</router-link></li>
                                        <li><router-link to="/discount/discount-list">Discount</router-link></li>
                                    </ul>
                                </li>
                                <li><router-link to="/purchases/purchase-list"><span>Purchases</span></router-link></li>
                                <li><router-link to="/purchases/purchase-order-report"><span>Purchase Order</span></router-link></li>
                                <li><router-link to="/purchases/purchase-returns"><span>Purchase Return</span></router-link></li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Expenses</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><router-link to="/expenses/expenses-list">Expenses</router-link></li>
                                        <li><router-link to="/expenses/expenses-category">Expense Category</router-link></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Income</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><router-link to="/income/income-list">Income</router-link></li>
                                        <li><router-link to="/income/income-category">Income Category</router-link></li>
                                    </ul>
                                </li>
                                <li><router-link to="/finance/account-list"><span>Bank Accounts</span></router-link></li>
                                <li><router-link to="/finance/money-transfer"><span>Money Transfer</span></router-link></li>
                                <li><router-link to="/finance/balance-sheet"><span>Balance Sheet</span></router-link></li>
                                <li><router-link to="/finance/trial-balance"><span>Trial Balance</span></router-link></li>
                                <li><router-link to="/finance/cash-flow"><span>Cash Flow</span></router-link></li>
                                <li><router-link to="/finance/account-statement"><span>Account Statement</span></router-link></li>
                                <li><router-link to="/ecommerce/customers"><span>Customers</span></router-link></li>
                                <li><router-link to="/people/billers"><span>Billers</span></router-link></li>
                                <li><router-link to="/people/suppliers"><span>Suppliers</span></router-link></li>
                                <li><router-link to="/people/store-list"><span>Stores</span></router-link></li>
                                <li><router-link to="/people/warehouse"><span>Warehouses</span></router-link></li>						
                            </ul>
                        </div>
                        <div class="tab-pane fade" :class="{ show: activeTab === 'hrm', active: activeTab === 'hrm' }" id="hrm">
                            <ul>
                                <li class="menu-title"><span>Hrm</span></li>
                                <li><router-link to="/hrm/employees-grid"><span>Employees</span></router-link></li>
                                <li><router-link to="/hrm/department-grid"><span>Departments</span></router-link></li>
                                <li><router-link to="/hrm/designation"><span>Designation</span></router-link></li>
                                <li><router-link to="/hrm/shift"><span>Shifts</span></router-link></li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Attendence</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><router-link to="/hrm/attendance-employee">Employee</router-link></li>
                                        <li><router-link to="/hrm/attendance-admin">Admin</router-link></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Leaves</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><router-link to="/leaves/leaves-admin">Admin Leaves</router-link></li>
                                        <li><router-link to="/leaves/leaves-employee">Employee Leaves</router-link></li>
                                        <li><router-link to="/leaves/leave-types">Leave Types</router-link></li>
                                    </ul>
                                </li>
                                <li><router-link to="/hrm/holidays"><span>Holidays</span></router-link>
                                </li>
                                <li class="submenu">
                                    <router-link to="/payroll/employee-salary"><span>Payroll</span><span class="menu-arrow"></span></router-link>
                                    <ul>
                                        <li><router-link to="/payroll/employee-salary">Employee Salary</router-link></li>
                                        <li><router-link to="/payroll/payslip">Payslip</router-link></li>
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
                                        <li><router-link to="/sales-report/sales-report">Sales Report</router-link></li>
                                        <li><router-link to="/sales-report/best-sellers">Best Seller</router-link></li>
                                    </ul>
                                </li>
                                <li><router-link to="/reports/purchase-report"><span>Purchase report</span></router-link></li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Inventory Report</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><router-link to="/inventory-report/inventory-report">Inventory Report</router-link></li>
                                        <li><router-link to="/inventory-report/stock-history">Stock History</router-link></li>
                                        <li><router-link to="/inventory-report/sold-stock">Sold Stock</router-link></li>
                                    </ul>
                                </li>
                                <li><router-link to="/reports/invoice-report"><span>Invoice Report</span></router-link></li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Supplier Report</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><router-link to="/supplier-report/supplier-report">Supplier Report</router-link></li>
                                        <li><router-link to="/supplier-report/supplier-due-report">Supplier Due Report</router-link></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Customer Report</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><router-link to="/customer-report/customer-report">Customer Report</router-link></li>
                                        <li><router-link to="/customer-report/customer-due-report">Customer Due Report</router-link></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Product Report</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><router-link to="/product-report/product-report">Product Report</router-link></li>
                                        <li><router-link to="/product-report/product-expiry-report">Product Expiry Report</router-link></li>
                                        <li><router-link to="/product-report/product-quantity-alert">Product Quantity Alert</router-link></li>
                                    </ul>
                                </li>
                                <li><router-link to="/reports/expense-report"><span>Expense Report</span></router-link></li>
                                <li><router-link to="/reports/income-report"><span>Income Report</span></router-link></li>
                                <li><router-link to="/reports/tax-report"><span>Tax Report</span></router-link></li>
                                <li><router-link to="/reports/profit-and-loss"><span>Profit & Loss</span></router-link></li>
                                <li><router-link to="/reports/annual-report"><span>Annual Report</span></router-link></li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" :class="{ show: activeTab === 'pages', active: activeTab === 'pages' }" id="pages">
                            <ul>
                                <li class="menu-title"><span>Pages</span></li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Pages</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><router-link to="/page/pages">Pages</router-link></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Blog</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><router-link to="/blog/all-blog">All Blog</router-link></li>
                                        <li><router-link to="/blog/blog-tag">Blog Tags</router-link></li>
                                        <li><router-link to="/blog/blog-categories">Categories</router-link></li>
                                        <li><router-link to="/blog/blog-comments">Blog Comments</router-link></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Location</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><router-link to="/location/countries">Countries</router-link></li>
                                        <li><router-link to="/location/states">States</router-link></li>
                                        <li><router-link to="/location/cities">Cities</router-link></li>
                                    </ul>
                                </li>
                                <li><router-link to="/content/testimonials"><span>Testimonials</span></router-link></li>
                                <li><router-link to="/content/faq"><span>FAQ</span></router-link></li>
                                <li><router-link to="/users/users-list"><span>Users</span></router-link></li>
                                <li><router-link to="/users/roles-permissions"><span>Roles & Permissions</span></router-link></li>
                                <li><router-link to="/users/delete-account"><span>Delete Account Request</span></router-link></li>
                                <li><router-link to="/pages/profile"><span>Profile</span></router-link></li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Authentication</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li class="submenu submenu-two"><a href="javascript:void(0);">Login<span class="menu-arrow inside-submenu"></span></a>
                                            <ul>
                                                <li><router-link to="/">Cover</router-link></li>
                                                <li><router-link to="/authentication/signin-2">Illustration</router-link></li>
                                                <li><router-link to="/authentication/signin-3">Basic</router-link></li>
                                            </ul>
                                        </li>
                                        <li class="submenu submenu-two"><a href="javascript:void(0);">Register<span class="menu-arrow inside-submenu"></span></a>
                                            <ul>
                                                <li><router-link to="/register">Cover</router-link></li>
                                                <li><router-link to="/authentication/register-2">Illustration</router-link></li>
                                                <li><router-link to="/authentication/register-3">Basic</router-link></li>
                                            </ul>
                                        </li>
                                        <li class="submenu submenu-two"><a href="javascript:void(0);">Forgot Password<span class="menu-arrow inside-submenu"></span></a>
                                            <ul>
                                                <li><router-link to="/forgot-password">Cover</router-link></li>
                                                <li><router-link to="/authentication/forgot-password-2">Illustration</router-link></li>
                                                <li><router-link to="/authentication/forgot-password-3">Basic</router-link></li>
                                            </ul>
                                        </li>
                                        <li class="submenu submenu-two"><a href="javascript:void(0);">Reset Password<span class="menu-arrow inside-submenu"></span></a>
                                            <ul>
                                                <li><router-link to="/reset-password">Cover</router-link></li>
                                                <li><router-link to="/authentication/reset-password-2">Illustration</router-link></li>
                                                <li><router-link to="/authentication/reset-password-3">Basic</router-link></li>
                                            </ul>
                                        </li>
                                        <li class="submenu submenu-two"><a href="javascript:void(0);">Email Verification<span class="menu-arrow inside-submenu"></span></a>
                                            <ul>
                                                <li><router-link to="/email-verification">Cover</router-link></li>
                                                <li><router-link to="/authentication/email-verification-2">Illustration</router-link></li>
                                                <li><router-link to="/authentication/email-verification-3">Basic</router-link></li>
                                            </ul>
                                        </li>
                                        <li class="submenu submenu-two"><a href="javascript:void(0);">2 Step Verification<span class="menu-arrow inside-submenu"></span></a>
                                            <ul>
                                                <li><router-link to="/two-step-verification">Cover</router-link></li>
                                                <li><router-link to="/authentication/two-step-verification-2">Illustration</router-link></li>
                                                <li><router-link to="/authentication/two-step-verification-3">Basic</router-link></li>
                                            </ul>
                                        </li>
                                        <li><router-link to="/authentication/lock-screen">Lock Screen</router-link></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Error Pages</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><router-link to="/error/error-404">404 Error </router-link></li>
                                        <li><router-link to="/error/error-500">500 Error </router-link></li>
                                    </ul>
                                </li>
                                <li>
                                    <router-link to="/pages/blank-page"><span>Blank Page</span> </router-link>
                                </li>
                                <li>
                                    <router-link to="/pages/pricing"><span>Pricing</span> </router-link>
                                </li>
                                <li>
                                    <router-link to="/pages/coming-soon"><span>Coming Soon</span> </router-link>
                                </li>
                                <li>
                                    <router-link to="/pages/under-maintenance"><span>Under Maintenance</span> </router-link>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" :class="{ show: activeTab === 'settings', active: activeTab === 'settings' }" id="settings">
                            <ul>
                                <li class="menu-title"><span>Settings</span></li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>General Settings</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><router-link to="/settings/general-settings">Profile</router-link></li>
                                        <li><router-link to="/settings/security-settings">Security</router-link></li>
                                        <li><router-link to="/settings/notification">Notifications</router-link></li>
                                        <li><router-link to="/settings/connected-apps">Connected Apps</router-link></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Website Settings</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><router-link to="/website-settings/system-settings">System Settings</router-link></li>
                                        <li><router-link to="/website-settings/company-settings">Company Settings </router-link></li>
                                        <li><router-link to="/website-settings/localization-settings">Localization</router-link></li>
                                        <li><router-link to="/website-settings/prefixes">Prefixes</router-link></li>
                                        <li><router-link to="/website-settings/preference">Preference</router-link></li>
                                        <li><router-link to="/website-settings/appearance">Appearance</router-link></li>
                                        <li><router-link to="/website-settings/social-authentication">Social Authentication</router-link></li>
                                        <li><router-link to="/website-settings/language-settings">Language</router-link></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:void(0);">
                                        <span>App Settings</span><span class="menu-arrow"></span>
                                    </a>
                                    <ul>
                                        <li class="submenu submenu-two"><a href="javascript:void(0);">Invoice<span class="menu-arrow inside-submenu"></span></a>
                                            <ul>
                                                <li><router-link to="/app-settings/invoice-settings">Invoice Settings</router-link></li>
                                                <li><router-link to="/app-settings/invoice-templates">Invoice Template</router-link></li>
                                            </ul>
                                        </li>
                                        <li><router-link to="/app-settings/printer-settings">Printer</router-link></li>
                                        <li><router-link to="/app-settings/pos-settings">POS</router-link></li>
                                        <li><router-link to="/app-settings/custom-fields">Custom Fields</router-link></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:void(0);">
                                        <span>System Settings</span><span class="menu-arrow"></span>
                                    </a>
                                    <ul>
                                        <li class="submenu submenu-two"><a href="javascript:void(0);">Email<span class="menu-arrow inside-submenu"></span></a>
                                            <ul>
                                                <li><router-link to="/system-settings/email-settings">Email Settings</router-link></li>
                                                <li><router-link to="/system-settings/email-templates">Email Template</router-link></li>
                                            </ul>
                                        </li>
                                        <li class="submenu submenu-two"><a href="javascript:void(0);">SMS<span class="menu-arrow inside-submenu"></span></a>
                                            <ul>
                                                <li><router-link to="/system-settings/sms-settings">SMS Settings</router-link></li>
                                                <li><router-link to="/system-settings/sms-templates">SMS Template</router-link></li>
                                            </ul>
                                        </li>
                                        <li><router-link to="/system-settings/otp-settings">OTP</router-link></li>
                                        <li><router-link to="/system-settings/gdpr-settings">GDPR Cookies</router-link></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:void(0);">
                                        <span>Financial Settings</span><span class="menu-arrow"></span>
                                    </a>
                                    <ul>
                                        <li><router-link to="/financial-settings/payment-gateway-settings">Payment Gateway</router-link></li>
                                        <li><router-link to="/financial-settings/bank-settings-grid">Bank Accounts</router-link></li>
                                        <li><router-link to="/financial-settings/tax-rates">Tax Rates</router-link></li>
                                        <li><router-link to="/financial-settings/currency-settings">Currencies</router-link></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:void(0);">
                                        <span>Other Settings</span><span class="menu-arrow"></span>
                                    </a>
                                    <ul>
                                        <li><router-link to="/other-settings/storage-settings">Storage</router-link></li>
                                        <li><router-link to="/other-settings/ban-ip-address">Ban IP Address</router-link></li>
                                    </ul>
                                </li>
                                <li>
                                    <router-link to="/"><span>Logout</span> </router-link>
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
                                        <li><router-link to="/baseui/ui-alerts">Alerts</router-link></li>
                                        <li><router-link to="/baseui/ui-accordion">Accordion</router-link></li>
                                        <li><router-link to="/baseui/ui-avatar">Avatar</router-link></li>
                                        <li><router-link to="/baseui/ui-badges">Badges</router-link></li>
                                        <li><router-link to="/baseui/ui-borders">Border</router-link></li>
                                        <li><router-link to="/baseui/ui-buttons">Buttons</router-link></li>
                                        <li><router-link to="/baseui/ui-buttons-group">Button Group</router-link></li>
                                        <li><router-link to="/baseui/ui-breadcrumb">Breadcrumb</router-link></li>
                                        <li><router-link to="/baseui/ui-cards">Card</router-link></li>
                                        <li><router-link to="/baseui/ui-carousel">Carousel</router-link></li>
                                        <li><router-link to="/baseui/ui-colors">Colors</router-link></li>
                                        <li><router-link to="/baseui/ui-dropdowns">Dropdowns</router-link></li>
                                        <li><router-link to="/baseui/ui-grid">Grid</router-link></li>
                                        <li><router-link to="/baseui/ui-images">Images</router-link></li>
                                        <li><router-link to="/baseui/ui-lightbox">Lightbox</router-link></li>
                                        <li><router-link to="/baseui/ui-media">Media</router-link></li>
                                        <li><router-link to="/baseui/ui-modals">Modals</router-link></li>
                                        <li><router-link to="/baseui/ui-offcanvas">Offcanvas</router-link></li>
                                        <li><router-link to="/baseui/ui-pagination">Pagination</router-link></li>
                                        <li><router-link to="/baseui/ui-progress">Progress</router-link></li>
                                        <li><router-link to="/baseui/ui-placeholders">Placeholders</router-link></li>
                                        <li><router-link to="/baseui/ui-spinner">Spinner</router-link></li>
                                        <li><router-link to="/baseui/ui-tooltips">Tooltips</router-link></li>
                                        <li><router-link to="/baseui/ui-typography">Typography</router-link></li>
                                        <li><router-link to="/baseui/ui-video">Video</router-link></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:void(0);">
                                        <span>Advanced UI</span><span class="menu-arrow"></span>
                                    </a>
                                    <ul>
                                        <li><router-link to="/advancedui/ui-ribbon">Ribbon</router-link></li>
                                        <li><router-link to="/advancedui/ui-clipboard">Clipboard</router-link></li>
                                        <li><router-link to="/advancedui/ui-drag-drop">Drag & Drop</router-link></li>
                                        <li><router-link to="/advancedui/ui-rating">Rating</router-link></li>
                                        <li><router-link to="/advancedui/ui-text-editor">Text Editor</router-link></li>
                                        <li><router-link to="/advancedui/ui-counter">Counter</router-link></li>
                                        <li><router-link to="/advancedui/ui-scrollbar">Scrollbar</router-link></li>
                                        <li><router-link to="/advancedui/ui-stickynote">Sticky Note</router-link></li>
                                        <li><router-link to="/advancedui/ui-timeline">Timeline</router-link></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:void(0);">
                                        <span>Charts</span><span class="menu-arrow"></span>
                                    </a>
                                    <ul>
                                        <li><router-link to="/charts/chart-apex">Apex Charts</router-link></li>
                                        <li><router-link to="/charts/chart-c3">Chart C3</router-link></li>
                                        <li><router-link to="/charts/chart-js">Chart Js</router-link></li>
                                        <li><router-link to="/charts/chart-morris">Morris Charts</router-link></li>
                                        <li><router-link to="/charts/chart-flot">Flot Charts</router-link></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:void(0);">
                                        <span>Icons</span><span class="menu-arrow"></span>
                                    </a>
                                    <ul>
                                        <li><router-link to="/icons/icon-fontawesome">Fontawesome Icons</router-link></li>
                                        <li><router-link to="/icons/icon-feather">Feather Icons</router-link></li>
                                        <li><router-link to="/icons/icon-ionic">Ionic Icons</router-link></li>
                                        <li><router-link to="/icons/icon-material">Material Icons</router-link></li>
                                        <li><router-link to="/icons/icon-pe7">Pe7 Icons</router-link></li>
                                        <li><router-link to="/icons/icon-weather">Weather Icons</router-link></li>
                                        <li><router-link to="/icons/icon-typicon">Typicon Icons</router-link></li>
                                        <li><router-link to="/icons/icon-flag">Flag Icons</router-link></li>
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
                                                <li><router-link to="/forms/form-basic-inputs">Basic Inputs</router-link></li>
                                                <li><router-link to="/forms/form-checkbox-radios">Checkbox & Radios</router-link></li>
                                                <li><router-link to="/forms/form-input-groups">Input Groups</router-link></li>
                                                <li><router-link to="/forms/form-grid-gutters">Grid & Gutters</router-link></li>
                                                <li><router-link to="/forms/form-select">Form Select</router-link></li>
                                                <li><router-link to="/forms/form-mask">Input Masks</router-link></li>
                                                <li><router-link to="/forms/form-fileupload">File Uploads</router-link></li>
                                            </ul>
                                        </li>
                                        <li class="submenu submenu-two">
                                            <a href="javascript:void(0);">Layouts<span class="menu-arrow inside-submenu"></span></a>
                                            <ul>
                                                <li><router-link to="/forms/form-horizontal">Horizontal Form</router-link></li>
                                                <li><router-link to="/forms/form-vertical">Vertical Form</router-link></li>
                                                <li><router-link to="/forms/form-floating-labels">Floating Labels</router-link></li>
                                            </ul>
                                        </li>
                                        <li><router-link to="/forms/form-validation">Form Validation</router-link></li>
                                        <li><router-link to="/forms/form-select2">Select2</router-link></li>
                                        <li><router-link to="/forms/form-wizard">Form Wizard</router-link></li>
                                        <li><router-link to="/forms/form-pickers">Form Picker</router-link></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Tables</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><router-link to="/tables/tables-basic">Basic Tables </router-link></li>
                                        <li><router-link to="/tables/data-tables">Data Table </router-link></li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:void(0);"><span>Maps</span><span class="menu-arrow"></span></a>
                                    <ul>
                                        <li><router-link to="/maps/maps-vector">Vector</router-link></li>
                                        <li><router-link to="/maps/maps-leaflet">Leaflet</router-link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" :class="{ show: activeTab === 'extras', active: activeTab === 'extras' }" id="extras">
                            <ul>
                                <li class="menu-title"><span>Help</span></li>
                                <li><a href="https://dreamspos.dreamstechnologies.com/documentation/yii.html" target="_blank"><span>Documentation</span></a></li>
                                <li><a href="https://dreamspos.dreamstechnologies.com/documentation/changelog.html" target="_blank"><span>Changelog v2.2.4</span></a></li>
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