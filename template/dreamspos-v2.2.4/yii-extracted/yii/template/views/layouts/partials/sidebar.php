<?php
use yii\helpers\Html;
use yii\helpers\Url;

$path = Yii::$app->request->getPathInfo();
// Handle root path - if empty, treat as index page
$page = empty($path) ? 'index' : basename($path);
?>

<?php if($page !== 'pos' && $page !== 'pos-2' && $page !== 'pos-3' && $page !== 'pos-4' && $page !== 'pos-5') {?>
	<!-- Sidebar -->
	<div class="sidebar" id="sidebar">
<?php }?>	
<?php if($page === 'pos' || $page === 'pos-2' || $page === 'pos-3' || $page === 'pos-4' || $page === 'pos-5') {?>
	<!-- Sidebar -->
	<div class="sidebar d-none" id="sidebar">
<?php }?>
		<!-- Logo -->
		<div class="sidebar-logo">
			<a href="index" class="logo logo-normal">
				<img src="assets/img/logo.svg" alt="Img">
			</a>
			<a href="index" class="logo logo-white">
				<img src="assets/img/logo-white.svg" alt="Img">
			</a>
			<a href="index" class="logo-small">
				<img src="assets/img/logo-small.png" alt="Img">
			</a>
			<a href="index" class="logo-small-white">
				<img src="assets/img/logo-small-white.png" alt="Img">
			</a>			
			<a id="toggle_btn" href="javascript:void(0);">
				<i data-feather="chevrons-left" class="feather-16"></i>
			</a>
		</div>
		<!-- /Logo -->
		<div class="modern-profile p-3 pb-0">
			<div class="text-center rounded bg-light p-3 mb-4 user-profile">
				<div class="avatar avatar-lg online mb-3">
					<img src="assets/img/customer/customer15.jpg" alt="Img" class="img-fluid rounded-circle">
				</div>
				<h6 class="fs-14 fw-bold mb-1">Adrian Herman</h6>
				<p class="fs-12 mb-0">System Admin</p>
			</div>
			<div class="sidebar-nav mb-3">
				<ul class="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified bg-transparent" role="tablist">
					<li class="nav-item"><a class="nav-link active border-0" href="#">Menu</a></li>
					<li class="nav-item"><a class="nav-link border-0" href="chat">Chats</a></li>
					<li class="nav-item"><a class="nav-link border-0" href="email">Inbox</a></li>
				</ul>
			</div>
		</div>
		<div class="sidebar-header p-3 pb-0 pt-2">
			<div class="text-center rounded bg-light p-2 mb-4 sidebar-profile d-flex align-items-center">
				<div class="avatar avatar-md onlin">
					<img src="assets/img/customer/customer15.jpg" alt="Img" class="img-fluid rounded-circle">
				</div>
				<div class="text-start sidebar-profile-info ms-2">
					<h6 class="fs-14 fw-bold mb-1">Adrian Herman</h6>
					<p class="fs-12">System Admin</p>
				</div>
			</div>
			<div class="d-flex align-items-center justify-content-between menu-item mb-3">
				<div>
					<a href="index" class="btn btn-sm btn-icon bg-light">
						<i class="ti ti-layout-grid-remove"></i>
					</a>
				</div>
				<div>
					<a href="chat" class="btn btn-sm btn-icon bg-light">
						<i class="ti ti-brand-hipchat"></i>
					</a>
				</div>
				<div>
					<a href="email" class="btn btn-sm btn-icon bg-light position-relative">
						<i class="ti ti-message"></i>
					</a>
				</div>
				<div class="notification-item">
					<a href="activities" class="btn btn-sm btn-icon bg-light position-relative">
						<i class="ti ti-bell"></i>
						<span class="notification-status-dot"></span>
					</a>
				</div>
				<div class="me-0">
					<a href="general-settings" class="btn btn-sm btn-icon bg-light">
						<i class="ti ti-settings"></i>
					</a>
				</div>
			</div>
		</div>
		<div class="sidebar-inner slimscroll">
			<div id="sidebar-menu" class="sidebar-menu">
				<ul>
					<li class="submenu-open">
						<h6 class="submenu-hdr">Main</h6>
						<ul>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?php echo ($page =='index' || $page == '/' || $page == 'admin-dashboard'|| $page == 'sales-dashboard') ? 'active subdrop' : '' ;?>"><i class="ti ti-layout-grid fs-16 me-2"></i><span>Dashboard</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="index" class="<?php echo ($page =='index'||$page == '/') ? 'active' : '' ;?>">Admin Dashboard</a></li>
									<li><a href="admin-dashboard" class="<?php echo ($page =='admin-dashboard') ? 'active' : '' ;?>">Admin Dashboard 2</a></li>
									<li><a href="sales-dashboard" class="<?php echo ($page =='sales-dashboard') ? 'active' : '' ;?>">Sales Dashboard</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?php echo ($page =='dashboard' ||$page == 'companies' ||$page == 'subscription' ||$page =='packages' ||$page =='domain' ||$page =='purchase-transaction') ? 'active subdrop' : '' ;?> "><i class="ti ti-user-edit fs-16 me-2"></i><span>Super Admin</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="dashboard" class="<?php echo ($page =='dashboard') ? 'active' : '' ;?>">Dashboard</a></li>
									<li><a href="companies" class="<?php echo ($page =='companies') ? 'active' : '' ;?>">Companies</a></li>
									<li><a href="subscription" class="<?php echo ($page =='subscription') ? 'active' : '' ;?>">Subscriptions</a></li>
									<li><a href="packages" class="<?php echo ($page =='packages') ? 'active' : '' ;?>">Packages</a></li>
									<li><a href="domain" class="<?php echo ($page =='domain') ? 'active' : '' ;?>">Domain</a></li>
									<li><a href="purchase-transaction" class="<?php echo ($page =='purchase-transaction') ? 'active' : '' ;?>">Purchase Transaction</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?php echo ($page =='chat'||$page == 'audio-call'||$page == 'call-history'||$page =='video-call'||$page =='calendar'||$page =='contacts'||$page =='email' || $page =='email-reply'||$page =='todo' || $page =='todo-list' ||$page =='notes'||$page == 'file-manager'||$page == 'projects'||$page == 'products'||$page == 'orders'||$page == 'customers'||$page == 'cart'||$page =='checkout'||$page =='wishlist'||$page =='reviews'||$page =='social-feed'||$page =='search-list') ? 'active subdrop' : '' ;?> "><i class="ti ti-brand-apple-arcade fs-16 me-2"></i><span>Application</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="chat" class="<?php echo ($page =='chat') ? 'active' : '' ;?>">Chat</a></li>
									<li class="submenu submenu-two"><a href="javascript:void(0);" class="<?php echo ($page =='video-call' || $page == 'call-history' || $page == 'audio-call') ? 'active subdrop' : '' ;?>">Call<span class="menu-arrow inside-submenu"></span></a>
										<ul>
											<li><a href="video-call" class="<?php echo ($page =='video-call') ? 'active' : '' ;?>">Video Call</a></li>
											<li><a href="audio-call" class="<?php echo ($page =='audio-call') ? 'active' : '' ;?>">Audio Call</a></li>
											<li><a href="call-history" class="<?php echo ($page =='call-history') ? 'active' : '' ;?>">Call History</a></li>
										</ul>
									</li>
									<li><a href="calendar" class="<?php echo ($page =='calendar') ? 'active' : '' ;?>">Calendar</a></li>
									<li><a href="contacts" class="<?php echo ($page =='contacts') ? 'active' : '' ;?>">Contacts</a></li>
									<li><a href="email" class="<?php echo ($page =='email' || $page =='email-reply') ? 'active' : '' ;?>">Email</a></li>
									<li><a href="todo" class="<?php echo ($page =='todo' || $page =='todo-list') ? 'active' : '' ;?>">To Do</a></li>
									<li><a href="notes" class="<?php echo ($page =='notes') ? 'active' : '' ;?>">Notes</a></li>
									<li><a href="file-manager" class="<?php echo ($page =='file-manager') ? 'active' : '' ;?>">File Manager</a></li>
									<li><a href="projects" class="<?php echo ($page =='projects') ? 'active' : '' ;?>">Projects</a></li>
									<li class="submenu submenu-two"><a href="javascript:void(0);" class="<?php echo ($page =='products' || $page == 'orders' || $page == 'customers' || $page == 'cart' || $page == 'checkout' || $page == 'wishlist' || $page == 'reviews') ? 'active subdrop' : '' ;?>">Ecommerce<span class="menu-arrow inside-submenu"></span></a>
										<ul>
											<li><a href="products" class="<?php echo ($page =='products') ? 'active' : '' ;?>">Products</a></li>
											<li><a href="orders" class="<?php echo ($page =='orders') ? 'active' : '' ;?>">Orders</a></li>
											<li><a href="customers" class="<?php echo ($page =='customers') ? 'active' : '' ;?>">Customers</a></li>
											<li><a href="cart" class="<?php echo ($page =='cart') ? 'active' : '' ;?>">Cart</a></li>
											<li><a href="checkout" class="<?php echo ($page =='checkout') ? 'active' : '' ;?>">Checkout</a></li>
											<li><a href="wishlist" class="<?php echo ($page =='wishlist') ? 'active' : '' ;?>">Wishlist</a></li>
											<li><a href="reviews" class="<?php echo ($page =='reviews') ? 'active' : '' ;?>">Reviews</a></li>
										</ul>
									</li>
									<li><a href="social-feed" class="<?php echo ($page =='social-feed') ? 'active' : '' ;?>">Social Feed</a></li>
									<li><a href="search-list" class="<?php echo ($page =='search-list') ? 'active' : '' ;?>">Search List</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?php echo ($page =='layout-horizontal' || $page == 'layout-detached'|| $page == 'layout-two-column' || $page == 'layout-hovered' || $page == 'layout-boxed' || $page == 'layout-rtl' || $page == 'layout-dark') ? 'active subdrop' : '' ;?>"><i class="ti ti-layout-sidebar-right-collapse fs-16 me-2"></i><span>Layouts</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="layout-horizontal" class="<?php echo ($page =='layout-horizontal') ? 'active' : '' ;?>">Horizontal</a></li>
									<li><a href="layout-detached" class="<?php echo ($page =='layout-detached') ? 'active' : '' ;?>">Detached</a></li>
									<li><a href="layout-two-column" class="<?php echo ($page =='layout-two-column') ? 'active' : '' ;?>">Two Column</a></li>
									<li><a href="layout-hovered" class="<?php echo ($page =='layout-hovered') ? 'active' : '' ;?>">Hovered</a></li>
									<li><a href="layout-boxed" class="<?php echo ($page =='layout-boxed') ? 'active' : '' ;?>">Boxed</a></li>
									<li><a href="layout-rtl" class="<?php echo ($page =='layout-rtl') ? 'active' : '' ;?>">RTL</a></li>
									<li><a href="layout-dark" class="<?php echo ($page =='layout-dark') ? 'active' : '' ;?>">Dark</a></li>
								</ul>
							</li>
						</ul>
					</li>
					<li class="submenu-open">
						<h6 class="submenu-hdr">Inventory</h6>
						<ul>
							<li class="<?php echo ($page =='product-list' || $page =='product-details' || $page =='edit-product') ? 'active' : '' ;?>"><a href="product-list"><i data-feather="box"></i><span>Products</span></a></li>
							<li class="<?php echo ($page =='add-product') ? 'active' : '' ;?>"><a href="add-product"><i class="ti ti-table-plus fs-16 me-2"></i><span>Create Product</span></a></li>
							<li class="<?php echo ($page =='expired-products') ? 'active' : '' ;?>"><a href="expired-products"><i class="ti ti-progress-alert fs-16 me-2"></i><span>Expired Products</span></a></li>
							<li class="<?php echo ($page =='low-stocks') ? 'active' : '' ;?>"><a href="low-stocks"><i class="ti ti-trending-up-2 fs-16 me-2"></i><span>Low Stocks</span></a></li>
							<li class="<?php echo ($page =='category-list') ? 'active' : '' ;?>"><a href="category-list"><i class="ti ti-list-details fs-16 me-2"></i><span>Category</span></a></li>
							<li class="<?php echo ($page =='sub-categories') ? 'active' : '' ;?>"><a href="sub-categories"><i class="ti ti-carousel-vertical fs-16 me-2"></i><span>Sub Category</span></a></li>
							<li class="<?php echo ($page =='brand-list') ? 'active' : '' ;?>"><a href="brand-list"><i class="ti ti-triangles fs-16 me-2"></i><span>Brands</span></a></li>
							<li class="<?php echo ($page =='units') ? 'active' : '' ;?>"><a href="units"><i class="ti ti-brand-unity fs-16 me-2"></i><span>Units</span></a></li>
							<li class="<?php echo ($page =='varriant-attributes') ? 'active' : '' ;?>"><a href="varriant-attributes"><i class="ti ti-checklist fs-16 me-2"></i><span>Variant Attributes</span></a></li>
							<li class="<?php echo ($page =='warranty') ? 'active' : '' ;?>"><a href="warranty"><i class="ti ti-certificate fs-16 me-2"></i><span>Warranties</span></a></li>
							<li class="<?php echo ($page =='barcode') ? 'active' : '' ;?>"><a href="barcode"><i class="ti ti-barcode fs-16 me-2"></i><span>Print Barcode</span></a></li>
							<li class="<?php echo ($page =='qrcode') ? 'active' : '' ;?>"><a href="qrcode"><i class="ti ti-qrcode fs-16 me-2"></i><span>Print QR Code</span></a></li>
						</ul>
					</li>
					<li class="submenu-open">
						<h6 class="submenu-hdr">Stock</h6>
						<ul>
							<li class="<?php echo ($page =='manage-stocks') ? 'active' : '' ;?>"><a href="manage-stocks"><i class="ti ti-stack-3 fs-16 me-2"></i><span>Manage Stock</span></a></li>
							<li class="<?php echo ($page =='stock-adjustment') ? 'active' : '' ;?>"><a href="stock-adjustment"><i class="ti ti-stairs-up fs-16 me-2"></i><span>Stock Adjustment</span></a></li>
							<li class="<?php echo ($page =='stock-transfer') ? 'active' : '' ;?>"><a href="stock-transfer"><i class="ti ti-stack-pop fs-16 me-2"></i><span>Stock Transfer</span></a></li>
						</ul>
					</li>
					<li class="submenu-open">
						<h6 class="submenu-hdr">Sales</h6>
						<ul>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?php echo ($page =='online-orders' || $page == 'pos-orders') ? 'active subdrop' : '' ;?>"><i class="ti ti-layout-grid fs-16 me-2"></i><span>Sales</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="online-orders" class="<?php echo ($page =='online-orders') ? 'active' : '' ;?>">Online Orders</a></li>
									<li><a href="pos-orders" class="<?php echo ($page =='pos-orders') ? 'active' : '' ;?>">POS Orders</a></li>
								</ul>
							</li>
							<li class="<?php echo ($page =='invoice' || $page =='invoice-details') ? 'active' : '' ;?>"><a href="invoice"><i class="ti ti-file-invoice fs-16 me-2"></i><span>Invoices</span></a></li>
							<li class="<?php echo ($page =='sales-returns') ? 'active' : '' ;?>"><a href="sales-returns"><i class="ti ti-receipt-refund fs-16 me-2"></i><span>Sales Return</span></a></li>
							<li class="<?php echo ($page =='quotation-list') ? 'active' : '' ;?>"><a href="quotation-list"><i class="ti ti-files fs-16 me-2"></i><span>Quotation</span></a></li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?php echo ($page =='pos' || $page == 'pos-2' || $page == 'pos-3' || $page == 'pos-4' || $page == 'pos-5') ? 'active subdrop' : '' ;?>"><i class="ti ti-device-laptop fs-16 me-2"></i><span>POS</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="pos" class="<?php echo ($page =='pos') ? 'active' : '' ;?>">POS 1</a></li>
									<li><a href="pos-2" class="<?php echo ($page =='pos-2') ? 'active' : '' ;?>">POS 2</a></li>
									<li><a href="pos-3" class="<?php echo ($page =='pos-3') ? 'active' : '' ;?>">POS 3</a></li>
									<li><a href="pos-4" class="<?php echo ($page =='pos-4') ? 'active' : '' ;?>">POS 4</a></li>
									<li><a href="pos-5" class="<?php echo ($page =='pos-5') ? 'active' : '' ;?>">POS 5</a></li>
									<li><a href="https://dreamspos.dreamstechnologies.com/food-pos/yii/template/web/index" target="_blank">POS 6</a></li>								
								</ul>
							</li>
						</ul>
					</li>
					<li class="submenu-open">
						<h6 class="submenu-hdr">Promo</h6>
						<ul>
							<li class="<?php echo ($page =='coupons') ? 'active' : '' ;?>"><a href="coupons"><i class="ti ti-ticket fs-16 me-2"></i><span>Coupons</span></a></li>
							<li class="<?php echo ($page =='gift-cards') ? 'active' : '' ;?>"><a href="gift-cards"><i class="ti ti-cards fs-16 me-2"></i><span>Gift Cards</span></a></li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?php echo ($page =='discount-plan' || $page == 'discount') ? 'active subdrop' : '' ;?>"><i class="ti ti-file-percent fs-16 me-2"></i><span>Discount</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="discount-plan" class="<?php echo ($page =='discount-plan') ? 'active' : '' ;?>">Discount Plan</a></li>
									<li><a href="discount" class="<?php echo ($page =='discount') ? 'active' : '' ;?>">Discount</a></li>
								</ul>
							</li>
						</ul>
					</li>
					<li class="submenu-open">
						<h6 class="submenu-hdr">Purchases</h6>
						<ul>
							<li class="<?php echo ($page =='purchase-list') ? 'active' : '' ;?>"><a href="purchase-list"><i class="ti ti-shopping-bag fs-16 me-2"></i><span>Purchases</span></a></li>
							<li class="<?php echo ($page =='purchase-order-report') ? 'active' : '' ;?>"><a href="purchase-order-report"><i class="ti ti-file-unknown fs-16 me-2"></i><span>Purchase Order</span></a></li>
							<li class="<?php echo ($page =='purchase-returns') ? 'active' : '' ;?>"><a href="purchase-returns"><i class="ti ti-file-upload fs-16 me-2"></i><span>Purchase Return</span></a></li>
						</ul>
					</li>
					<li class="submenu-open">
						<h6 class="submenu-hdr">Finance & Accounts</h6>
						<ul>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?php echo ($page =='expense-list' || $page == 'expense-category') ? 'active subdrop' : '' ;?>"><i class="ti ti-file-stack fs-16 me-2"></i><span>Expenses</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="expense-list" class="<?php echo ($page =='expense-list') ? 'active' : '' ;?>">Expenses</a></li>
									<li><a href="expense-category" class="<?php echo ($page =='expense-category') ? 'active' : '' ;?>">Expense Category</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?php echo ($page =='income' || $page == 'income-category') ? 'active subdrop' : '' ;?>"><i class="ti ti-file-pencil fs-16 me-2"></i><span>Income</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="income" class="<?php echo ($page =='income') ? 'active' : '' ;?>">Income</a></li>
									<li><a href="income-category" class="<?php echo ($page =='income-category') ? 'active' : '' ;?>">Income Category</a></li>
								</ul>
							</li>
							<li class="<?php echo ($page =='account-list') ? 'active' : '' ;?>"><a href="account-list"><i class="ti ti-building-bank fs-16 me-2"></i><span>Bank Accounts</span></a></li>
							<li class="<?php echo ($page =='money-transfer') ? 'active' : '' ;?>"><a href="money-transfer"><i class="ti ti-moneybag fs-16 me-2"></i><span>Money Transfer</span></a></li>
							<li class="<?php echo ($page =='balance-sheet' || $page =='balance-sheet-v2') ? 'active' : '' ;?>"><a href="balance-sheet"><i class="ti ti-report-money fs-16 me-2"></i><span>Balance Sheet</span></a></li>
							<li class="<?php echo ($page =='trial-balance') ? 'active' : '' ;?>"><a href="trial-balance"><i class="ti ti-alert-circle fs-16 me-2"></i><span>Trial Balance</span></a></li>
							<li class="<?php echo ($page =='cash-flow' || $page =='cash-flow-v2') ? 'active' : '' ;?>"><a href="cash-flow"><i class="ti ti-zoom-money fs-16 me-2"></i><span>Cash Flow</span></a></li>
							<li class="<?php echo ($page =='account-statement') ? 'active' : '' ;?>"><a href="account-statement"><i class="ti ti-file-infinity fs-16 me-2"></i><span>Account Statement</span></a></li>

						</ul>
					</li>
					<li class="submenu-open">
						<h6 class="submenu-hdr">Peoples</h6>
						<ul>
							<li class="<?php echo ($page =='customers') ? 'active' : '' ;?>"><a href="customers"><i class="ti ti-users-group fs-16 me-2"></i><span>Customers</span></a></li>
							<li class="<?php echo ($page =='billers') ? 'active' : '' ;?>"><a href="billers"><i class="ti ti-user-up fs-16 me-2"></i><span>Billers</span></a></li>
							<li class="<?php echo ($page =='suppliers') ? 'active' : '' ;?>"><a href="suppliers"><i class="ti ti-user-dollar fs-16 me-2"></i><span>Suppliers</span></a></li>
							<li class="<?php echo ($page =='store-list') ? 'active' : '' ;?>"><a href="store-list"><i class="ti ti-home-bolt fs-16 me-2"></i><span>Stores</span></a></li>
							<li class="<?php echo ($page =='warehouse') ? 'active' : '' ;?>"><a href="warehouse"><i class="ti ti-archive fs-16 me-2"></i><span>Warehouses</span></a>
							</li>
						</ul>
					</li>
					<li class="submenu-open">
						<h6 class="submenu-hdr">HRM</h6>
						<ul>
							<li class="<?php echo ($page =='employees-grid' || $page =='add-employee' || $page =='edit-employee' || $page =='employee-details' || $page =='employees-list') ? 'active' : '' ;?>"><a href="employees-grid"><i class="ti ti-user fs-16 me-2"></i><span>Employees</span></a></li>
							<li class="<?php echo ($page =='department-grid' || $page =='department-list') ? 'active' : '' ;?>"><a href="department-grid"><i class="ti ti-compass fs-16 me-2"></i><span>Departments</span></a></li>
							<li class="<?php echo ($page =='designation') ? 'active' : '' ;?>"><a href="designation"><i class="ti ti-git-merge fs-16 me-2"></i><span>Designation</span></a></li>
							<li class="<?php echo ($page =='shift') ? 'active' : '' ;?>"><a href="shift"><i class="ti ti-arrows-shuffle fs-16 me-2"></i><span>Shifts</span></a></li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?php echo ($page =='attendance-employee' || $page == 'attendance-admin') ? 'active subdrop' : '' ;?>"><i class="ti ti-user-cog fs-16 me-2"></i><span>Attendence</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="attendance-employee" class="<?php echo ($page =='attendance-employee') ? 'active' : '' ;?>">Employee</a></li>
									<li><a href="attendance-admin" class="<?php echo ($page =='attendance-admin') ? 'active' : '' ;?>">Admin</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?php echo ($page =='leaves-admin' || $page == 'leaves-employee' || $page == 'leave-types') ? 'active subdrop' : '' ;?>"><i class="ti ti-calendar fs-16 me-2"></i><span>Leaves</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="leaves-admin" class="<?php echo ($page =='leaves-admin') ? 'active' : '' ;?>">Admin Leaves</a></li>
									<li><a href="leaves-employee" class="<?php echo ($page =='leaves-employee') ? 'active' : '' ;?>">Employee Leaves</a></li>
									<li><a href="leave-types" class="<?php echo ($page =='leave-types') ? 'active' : '' ;?>">Leave Types</a></li>
								</ul>
							</li>
							<li class="<?php echo ($page =='holidays') ? 'active' : '' ;?>"><a href="holidays"><i class="ti ti-calendar-share fs-16 me-2"></i><span>Holidays</span></a>
							</li>
							<li class="submenu">
								<a href="employee-salary" class="<?php echo ($page =='employee-salary' || $page == 'payslip') ? 'active subdrop' : '' ;?>"><i class="ti ti-file-dollar fs-16 me-2"></i><span>Payroll</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="employee-salary" class="<?php echo ($page =='employee-salary') ? 'active' : '' ;?>">Employee Salary</a></li>
									<li><a href="payslip" class="<?php echo ($page =='payslip') ? 'active' : '' ;?>">Payslip</a></li>
								</ul>
							</li>
						</ul>
					</li>
					<li class="submenu-open">
						<h6 class="submenu-hdr">Reports</h6>
						<ul>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?php echo ($page =='sales-report' || $page == 'best-seller') ? 'active subdrop' : '' ;?>"><i class="ti ti-chart-bar fs-16 me-2"></i><span>Sales Report</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="sales-report" class="<?php echo ($page =='sales-report') ? 'active' : '' ;?>">Sales Report</a></li>
									<li><a href="best-seller" class="<?php echo ($page =='best-seller') ? 'active' : '' ;?>">Best Seller</a></li>
								</ul>
							</li>
							<li class="<?php echo ($page =='purchase-report') ? 'active' : '' ;?>"><a href="purchase-report"><i class="ti ti-chart-pie-2 fs-16 me-2"></i><span>Purchase report</span></a></li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?php echo ($page =='inventory-report' || $page == 'stock-history' || $page == 'sold-stock') ? 'active subdrop' : '' ;?>"><i class="ti ti-triangle-inverted fs-16 me-2"></i><span>Inventory Report</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="inventory-report" class="<?php echo ($page =='inventory-report') ? 'active' : '' ;?>">Inventory Report</a></li>
									<li><a href="stock-history" class="<?php echo ($page =='stock-history') ? 'active' : '' ;?>">Stock History</a></li>
									<li><a href="sold-stock" class="<?php echo ($page =='sold-stock') ? 'active' : '' ;?>">Sold Stock</a></li>
								</ul>
							</li>
							<li class="<?php echo ($page =='invoice-report') ? 'active' : '' ;?>"><a href="invoice-report"><i class="ti ti-businessplan fs-16 me-2"></i><span>Invoice Report</span></a></li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?php echo ($page =='supplier-report' || $page == 'supplier-due-report') ? 'active subdrop' : '' ;?>"><i class="ti ti-user-star fs-16 me-2"></i><span>Supplier Report</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="supplier-report" class="<?php echo ($page =='supplier-report') ? 'active' : '' ;?>">Supplier Report</a></li>
									<li><a href="supplier-due-report" class="<?php echo ($page =='supplier-due-report') ? 'active' : '' ;?>">Supplier Due Report</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?php echo ($page =='customer-report' || $page == 'customer-due-report') ? 'active subdrop' : '' ;?>"><i class="ti ti-report fs-16 me-2"></i><span>Customer Report</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="customer-report" class="<?php echo ($page =='customer-report') ? 'active' : '' ;?>">Customer Report</a></li>
									<li><a href="customer-due-report" class="<?php echo ($page =='customer-due-report') ? 'active' : '' ;?>">Customer Due Report</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?php echo ($page =='product-report' || $page == 'product-expiry-report' || $page == 'product-quantity-alert') ? 'active subdrop' : '' ;?>"><i class="ti ti-report-analytics fs-16 me-2"></i><span>Product Report</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="product-report" class="<?php echo ($page =='product-report') ? 'active' : '' ;?>">Product Report</a></li>
									<li><a href="product-expiry-report" class="<?php echo ($page =='product-expiry-report') ? 'active' : '' ;?>">Product Expiry Report</a></li>
									<li><a href="product-quantity-alert" class="<?php echo ($page =='product-quantity-alert') ? 'active' : '' ;?>">Product Quantity Alert</a></li>
								</ul>
							</li>
							<li class="<?php echo ($page =='expense-report') ? 'active' : '' ;?>"><a href="expense-report"><i class="ti ti-file-vector fs-16 me-2"></i><span>Expense Report</span></a></li>
							<li class="<?php echo ($page =='income-report') ? 'active' : '' ;?>"><a href="income-report"><i class="ti ti-chart-ppf fs-16 me-2"></i><span>Income Report</span></a></li>
							<li class="<?php echo ($page =='tax-reports' || $page =='sales-tax') ? 'active' : '' ;?>"><a href="tax-reports"><i class="ti ti-chart-dots-2 fs-16 me-2"></i><span>Tax Report</span></a></li>
							<li class="<?php echo ($page =='profit-and-loss') ? 'active' : '' ;?>"><a href="profit-and-loss"><i class="ti ti-chart-donut fs-16 me-2"></i><span>Profit & Loss</span></a></li>
							<li class="<?php echo ($page =='annual-report') ? 'active' : '' ;?>"><a href="annual-report"><i class="ti ti-report-search fs-16 me-2"></i><span>Annual Report</span></a></li>
						</ul>
					</li>
					<li class="submenu-open">
						<h6 class="submenu-hdr">Content (CMS)</h6>
						<ul>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?php echo ($page =='pages') ? 'active subdrop' : '' ;?>"><i class="ti ti-page-break fs-16 me-2"></i><span>Pages</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="pages" class="<?php echo ($page =='pages') ? 'active' : '' ;?>">Pages</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?php echo ($page =='all-blog' || $page == 'blog-details' || $page == 'blog-tag' || $page == 'blog-categories' || $page == 'blog-comments') ? 'active subdrop' : '' ;?>"><i class="ti ti-wallpaper fs-16 me-2"></i><span>Blog</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="all-blog" class="<?php echo ($page =='all-blog' || $page == 'blog-details') ? 'active' : '' ;?>">All Blog</a></li>
									<li><a href="blog-tag" class="<?php echo ($page =='blog-tag') ? 'active' : '' ;?>">Blog Tags</a></li>
									<li><a href="blog-categories" class="<?php echo ($page =='blog-categories') ? 'active' : '' ;?>">Categories</a></li>
									<li><a href="blog-comments" class="<?php echo ($page =='blog-comments') ? 'active' : '' ;?>">Blog Comments</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?php echo ($page =='countries' || $page == 'states' || $page == 'cities') ? 'active subdrop' : '' ;?>"><i class="ti ti-map-pin fs-16 me-2"></i><span>Location</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="countries" class="<?php echo ($page =='countries') ? 'active' : '' ;?>">Countries</a></li>
									<li><a href="states" class="<?php echo ($page =='states') ? 'active' : '' ;?>">States</a></li>
									<li><a href="cities" class="<?php echo ($page =='cities') ? 'active' : '' ;?>">Cities</a></li>
								</ul>
							</li>
							<li class="<?php echo ($page =='testimonials') ? 'active' : '' ;?>"><a href="testimonials"><i class="ti ti-star fs-16 me-2"></i><span>Testimonials</span></a></li>
							<li class="<?php echo ($page =='faq') ? 'active' : '' ;?>"><a href="faq"><i class="ti ti-help-circle fs-16 me-2"></i><span>FAQ</span></a></li>

						</ul>
					</li>
					<li class="submenu-open">
						<h6 class="submenu-hdr">User Management</h6>
						<ul>
							<li class="<?php echo ($page =='users') ? 'active' : '' ;?>"><a href="users"><i class="ti ti-shield-up fs-16 me-2"></i><span>Users</span></a></li>
							<li class="<?php echo ($page =='roles-permissions' || $page =='permissions') ? 'active' : '' ;?>"><a href="roles-permissions"><i class="ti ti-jump-rope fs-16 me-2"></i><span>Roles & Permissions</span></a></li>
							<li class="<?php echo ($page =='delete-account') ? 'active' : '' ;?>"><a href="delete-account"><i class="ti ti-trash-x fs-16 me-2"></i><span>Delete Account Request</span></a></li>
						</ul>
					</li>
					<li class="submenu-open">
						<h6 class="submenu-hdr">Pages</h6>
						<ul>
							<li class="<?php echo ($page =='profile') ? 'active' : '' ;?>"><a href="profile"><i class="ti ti-user-circle fs-16 me-2"></i><span>Profile</span></a></li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?php echo ($page =='signin' || $page == 'signin-2' || $page == 'signin-3' || $page =='register' || $page == 'register-2' || $page == 'register-3' || $page =='forgot-password' || $page == 'forgot-password-2' || $page == 'forgot-password-3'|| $page =='reset-password' || $page == 'reset-password-2' || $page == 'reset-password-3' 
								|| $page =='email-verification' || $page == 'email-verification-2' || $page == 'email-verification-3' || $page =='two-step-verification' || $page == 'two-step-verification-2' || $page == 'two-step-verification-3' ) ? 'active subdrop' : '' ;?>"><i class="ti ti-shield fs-16 me-2"></i><span>Authentication</span><span class="menu-arrow"></span></a>
								<ul>
									<li class="submenu submenu-two"><a href="javascript:void(0);" class="<?php echo ($page =='signin' || $page == 'signin-2' || $page == 'signin-3') ? 'active subdrop' : '' ;?>">Login<span class="menu-arrow inside-submenu"></span></a>
										<ul>
											<li><a href="signin" class="<?php echo ($page =='signin') ? 'active' : '' ;?>">Cover</a></li>
											<li><a href="signin-2" class="<?php echo ($page =='signin-2') ? 'active' : '' ;?>">Illustration</a></li>
											<li><a href="signin-3" class="<?php echo ($page =='signin-3') ? 'active' : '' ;?>">Basic</a></li>
										</ul>
									</li>
									<li class="submenu submenu-two"><a href="javascript:void(0);" class="<?php echo ($page =='register' || $page == 'register-2' || $page == 'register-3') ? 'active subdrop' : '' ;?>">Register<span class="menu-arrow inside-submenu"></span></a>
										<ul>
											<li><a href="register" class="<?php echo ($page =='register') ? 'active' : '' ;?>">Cover</a></li>
											<li><a href="register-2" class="<?php echo ($page =='register-2') ? 'active' : '' ;?>">Illustration</a></li>
											<li><a href="register-3" class="<?php echo ($page =='register-3') ? 'active' : '' ;?>">Basic</a></li>
										</ul>
									</li>
									<li class="submenu submenu-two"><a href="javascript:void(0);" class="<?php echo ($page =='forgot-password' || $page == 'forgot-password-2' || $page == 'forgot-password-3') ? 'active subdrop' : '' ;?>">Forgot Password<span class="menu-arrow inside-submenu"></span></a>
										<ul>
											<li><a href="forgot-password" class="<?php echo ($page =='forgot-password') ? 'active' : '' ;?>">Cover</a></li>
											<li><a href="forgot-password-2" class="<?php echo ($page =='forgot-password-2') ? 'active' : '' ;?>">Illustration</a></li>
											<li><a href="forgot-password-3" class="<?php echo ($page =='forgot-password-3') ? 'active' : '' ;?>">Basic</a></li>
										</ul>
									</li>
									<li class="submenu submenu-two"><a href="javascript:void(0);" class="<?php echo ($page =='reset-password' || $page == 'reset-password-2' || $page == 'reset-password-3') ? 'active subdrop' : '' ;?>">Reset Password<span class="menu-arrow inside-submenu"></span></a>
										<ul>
											<li><a href="reset-password" class="<?php echo ($page =='reset-password') ? 'active' : '' ;?>">Cover</a></li>
											<li><a href="reset-password-2" class="<?php echo ($page =='reset-password-2') ? 'active' : '' ;?>">Illustration</a></li>
											<li><a href="reset-password-3" class="<?php echo ($page =='reset-password-3') ? 'active' : '' ;?>">Basic</a></li>
										</ul>
									</li>
									<li class="submenu submenu-two"><a href="javascript:void(0);" class="<?php echo ($page =='email-verification' || $page == 'email-verification-2' || $page == 'email-verification-3') ? 'active subdrop' : '' ;?>">Email Verification<span class="menu-arrow inside-submenu"></span></a>
										<ul>
											<li><a href="email-verification" class="<?php echo ($page =='email-verification') ? 'active' : '' ;?>">Cover</a></li>
											<li><a href="email-verification-2" class="<?php echo ($page =='email-verification-2') ? 'active' : '' ;?>">Illustration</a></li>
											<li><a href="email-verification-3" class="<?php echo ($page =='email-verification-3') ? 'active' : '' ;?>">Basic</a></li>
										</ul>
									</li>
									<li class="submenu submenu-two"><a href="javascript:void(0);" class="<?php echo ($page =='two-step-verification' || $page == 'two-step-verification-2' || $page == 'two-step-verification-3') ? 'active subdrop' : '' ;?>">2 Step Verification<span class="menu-arrow inside-submenu"></span></a>
										<ul>
											<li><a href="two-step-verification" class="<?php echo ($page =='two-step-verification') ? 'active' : '' ;?>">Cover</a></li>
											<li><a href="two-step-verification-2" class="<?php echo ($page =='two-step-verification-2') ? 'active' : '' ;?>">Illustration</a></li>
											<li><a href="two-step-verification-3" class="<?php echo ($page =='two-step-verification-3') ? 'active' : '' ;?>">Basic</a></li>
										</ul>
									</li>
									<li><a href="lock-screen" class="<?php echo ($page =='lock-screen') ? 'active' : '' ;?>">Lock Screen</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?php echo ($page =='error-404' || $page == 'error-500') ? 'active subdrop' : '' ;?>"><i class="ti ti-file-x fs-16 me-2"></i><span>Error Pages</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="error-404" class="<?php echo ($page =='error-404') ? 'active' : '' ;?>">404 Error </a></li>
									<li><a href="error-500" class="<?php echo ($page =='error-500') ? 'active' : '' ;?>">500 Error </a></li>
								</ul>
							</li>
							<li class="<?php echo ($page =='blank-page') ? 'active' : '' ;?>">
								<a href="blank-page"><i class="ti ti-file fs-16 me-2"></i><span>Blank Page</span> </a>
							</li>
							<li class="<?php echo ($page =='pricing') ? 'active' : '' ;?>">
								<a href="pricing"><i class="ti ti-currency-dollar fs-16 me-2"></i><span>Pricing</span> </a>
							</li>
							<li class="<?php echo ($page =='coming-soon') ? 'active' : '' ;?>">
								<a href="coming-soon"><i class="ti ti-send fs-16 me-2"></i><span>Coming Soon</span> </a>
							</li>
							<li class="<?php echo ($page =='under-maintenance') ? 'active' : '' ;?>">
								<a href="under-maintenance"><i class="ti ti-alert-triangle fs-16 me-2"></i><span>Under Maintenance</span> </a>
							</li>
						</ul>
					</li>
					<li class="submenu-open">
						<h6 class="submenu-hdr">Settings</h6>
						<ul>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?php echo ($page =='general-settings' || $page == 'security-settings' || $page == 'notification' || $page =='activities' || $page == 'connected-apps') ? 'active subdrop' : '' ;?>"><i class="ti ti-settings fs-16 me-2"></i><span>General Settings</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="general-settings" class="<?php echo ($page =='general-settings') ? 'active' : '' ;?>">Profile</a></li>
									<li><a href="security-settings" class="<?php echo ($page =='security-settings') ? 'active' : '' ;?>">Security</a></li>
									<li><a href="notification" class="<?php echo ($page =='notification' || $page =='activities') ? 'active' : '' ;?>">Notifications</a></li>
									<li><a href="connected-apps" class="<?php echo ($page =='connected-apps') ? 'active' : '' ;?>">Connected Apps</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?php echo ($page =='system-settings' || $page == 'company-settings' || $page == 'localization-settings' || $page == 'prefixes' || $page == 'preference' || $page == 'appearance' || $page == 'social-authentication' || $page == 'language-settings' || $page =='language-settings-web') ? 'active subdrop' : '' ;?>"><i class="ti ti-world fs-16 me-2"></i><span>Website Settings</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="system-settings" class="<?php echo ($page =='system-settings') ? 'active' : '' ;?>">System Settings</a></li>
									<li><a href="company-settings" class="<?php echo ($page =='company-settings') ? 'active' : '' ;?>">Company Settings </a></li>
									<li><a href="localization-settings" class="<?php echo ($page =='localization-settings') ? 'active' : '' ;?>">Localization</a></li>
									<li><a href="prefixes" class="<?php echo ($page =='prefixes') ? 'active' : '' ;?>">Prefixes</a></li>
									<li><a href="preference" class="<?php echo ($page =='preference') ? 'active' : '' ;?>">Preference</a></li>
									<li><a href="appearance" class="<?php echo ($page =='appearance') ? 'active' : '' ;?>">Appearance</a></li>
									<li><a href="social-authentication" class="<?php echo ($page =='social-authentication') ? 'active' : '' ;?>">Social Authentication</a></li>
									<li><a href="language-settings" class="<?php echo ($page =='language-settings' || $page =='language-settings-web') ? 'active' : '' ;?>">Language</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?php echo ($page =='invoice-settings' || $page == 'invoice-templates' || $page == 'printer-settings' || $page == 'pos-settings' || $page == 'signatures' || $page == 'custom-fields') ? 'active subdrop' : '' ;?>"><i class="ti ti-device-mobile fs-16 me-2"></i>
									<span>App Settings</span><span class="menu-arrow"></span>
								</a>
								<ul>
									<li class="submenu submenu-two"><a href="javascript:void(0);" class="<?php echo ($page =='invoice-settings' || $page == 'invoice-templates') ? 'active subdrop' : '' ;?>">Invoice<span class="menu-arrow inside-submenu"></span></a>
										<ul>
											<li><a href="invoice-settings" class="<?php echo ($page =='invoice-settings') ? 'active' : '' ;?>">Invoice Settings</a></li>
											<li><a href="invoice-templates" class="<?php echo ($page =='invoice-templates') ? 'active' : '' ;?>">Invoice Template</a></li>
										</ul>
									</li>
									<li><a href="printer-settings" class="<?php echo ($page =='printer-settings') ? 'active' : '' ;?>">Printer</a></li>
									<li><a href="pos-settings" class="<?php echo ($page =='pos-settings') ? 'active' : '' ;?>">POS</a></li>
									<li><a href="signatures" class="<?php echo ($page =='signatures') ? 'active' : '' ;?>">Signatures</a></li>
									<li><a href="custom-fields" class="<?php echo ($page =='custom-fields') ? 'active' : '' ;?>">Custom Fields</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?php echo ($page =='email-settings' || $page == 'email-templates' || $page =='sms-settings' || $page == 'sms-templates' || $page == 'otp-settings'  || $page == 'gdpr-settings'  ) ? 'active subdrop' : '' ;?>"><i class="ti ti-device-desktop fs-16 me-2"></i>
									<span>System Settings</span><span class="menu-arrow"></span>
								</a>
								<ul>
									<li class="submenu submenu-two"><a href="javascript:void(0);" class="<?php echo ($page =='email-settings' || $page == 'email-templates') ? 'active subdrop' : '' ;?>">Email<span class="menu-arrow inside-submenu"></span></a>
										<ul>
											<li><a href="email-settings" class="<?php echo ($page =='email-settings') ? 'active' : '' ;?>">Email Settings</a></li>
											<li><a href="email-templates" class="<?php echo ($page =='email-templates') ? 'active' : '' ;?>">Email Template</a></li>
										</ul>
									</li>
									<li class="submenu submenu-two"><a href="javascript:void(0);" class="<?php echo ($page =='sms-settings' || $page == 'sms-templates') ? 'active subdrop' : '' ;?>">SMS<span class="menu-arrow inside-submenu"></span></a>
										<ul>
											<li><a href="sms-settings" class="<?php echo ($page =='sms-settings') ? 'active' : '' ;?>">SMS Settings</a></li>
											<li><a href="sms-templates" class="<?php echo ($page =='sms-templates') ? 'active' : '' ;?>">SMS Template</a></li>
										</ul>
									</li>
									<li><a href="otp-settings" class="<?php echo ($page =='otp-settings') ? 'active' : '' ;?>">OTP</a></li>
									<li><a href="gdpr-settings" class="<?php echo ($page =='gdpr-settings') ? 'active' : '' ;?>">GDPR Cookies</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?php echo ($page =='payment-gateway-settings' || $page == 'bank-settings-grid' || $page =='bank-settings-list' || $page == 'tax-rates' || $page == 'currency-settings') ? 'active subdrop' : '' ;?>"><i class="ti ti-settings-dollar fs-16 me-2"></i>
									<span>Financial Settings</span><span class="menu-arrow"></span>
								</a>
								<ul>
									<li><a href="payment-gateway-settings" class="<?php echo ($page =='payment-gateway-settings') ? 'active' : '' ;?>">Payment Gateway</a></li>
									<li><a href="bank-settings-grid" class="<?php echo ($page =='bank-settings-grid' || $page =='bank-settings-list') ? 'active' : '' ;?>">Bank Accounts</a></li>
									<li><a href="tax-rates" class="<?php echo ($page =='tax-rates') ? 'active' : '' ;?>">Tax Rates</a></li>
									<li><a href="currency-settings" class="<?php echo ($page =='currency-settings') ? 'active' : '' ;?>">Currencies</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?php echo ($page =='storage-settings' || $page == 'ban-ip-address') ? 'active subdrop' : '' ;?>"><i class="ti ti-settings-2 fs-16 me-2"></i>
									<span>Other Settings</span><span class="menu-arrow"></span>
								</a>
								<ul>
									<li><a href="storage-settings" class="<?php echo ($page =='storage-settings') ? 'active' : '' ;?>">Storage</a></li>
									<li><a href="ban-ip-address" class="<?php echo ($page =='ban-ip-address') ? 'active' : '' ;?>">Ban IP Address</a></li>
								</ul>
							</li>
							<li class="<?php echo ($page =='signin') ? 'active' : '' ;?>">
								<a href="signin"><i class="ti ti-logout fs-16 me-2"></i><span>Logout</span> </a>
							</li>
						</ul>
					</li>
					<li class="submenu-open">
						<h6 class="submenu-hdr">UI Interface</h6>
						<ul>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?php echo ($page =='ui-alerts' || $page == 'ui-accordion' || $page == 'ui-avatar' || $page == 'ui-badges' || $page == 'ui-borders' || $page == 'ui-buttons' || $page == 'ui-buttons-group' || $page == 'ui-breadcrumb' || $page == 'ui-cards' || $page == 'ui-carousel' || $page == 'ui-colors' || $page == 'ui-dropdowns' || $page == 'ui-grid' || $page == 'ui-images' || $page == 'ui-lightbox' || $page == 'ui-media' || $page == 'ui-modals'
								|| $page == 'ui-offcanvas' || $page == 'ui-pagination' || $page == 'ui-popovers' || $page == 'ui-progress' || $page == 'ui-placeholders' || $page == 'ui-rangeslider' || $page == 'ui-spinner' || $page == 'ui-sweetalerts' || $page == 'ui-nav-tabs' || $page == 'ui-toasts' || $page == 'ui-tooltips' || $page == 'ui-typography' || $page == 'ui-video' || $page == 'ui-sortable' || $page == 'ui-swiperjs') ? 'active subdrop' : '' ;?>">
									<i class="ti ti-vector-bezier fs-16 me-2"></i><span>Base UI</span><span class="menu-arrow"></span>
								</a>
								<ul>
									<li><a href="ui-alerts" class="<?php echo ($page =='ui-alerts') ? 'active' : '' ;?>">Alerts</a></li>
									<li><a href="ui-accordion" class="<?php echo ($page =='ui-accordion') ? 'active' : '' ;?>">Accordion</a></li>
									<li><a href="ui-avatar" class="<?php echo ($page =='ui-avatar') ? 'active' : '' ;?>">Avatar</a></li>
									<li><a href="ui-badges" class="<?php echo ($page =='ui-badges') ? 'active' : '' ;?>">Badges</a></li>
									<li><a href="ui-borders" class="<?php echo ($page =='ui-borders') ? 'active' : '' ;?>">Border</a></li>
									<li><a href="ui-buttons" class="<?php echo ($page =='ui-buttons') ? 'active' : '' ;?>">Buttons</a></li>
									<li><a href="ui-buttons-group" class="<?php echo ($page =='ui-buttons-group') ? 'active' : '' ;?>">Button Group</a></li>
									<li><a href="ui-breadcrumb" class="<?php echo ($page =='ui-breadcrumb') ? 'active' : '' ;?>">Breadcrumb</a></li>
									<li><a href="ui-cards" class="<?php echo ($page =='ui-cards') ? 'active' : '' ;?>">Card</a></li>
									<li><a href="ui-carousel" class="<?php echo ($page =='ui-carousel') ? 'active' : '' ;?>">Carousel</a></li>
									<li><a href="ui-colors" class="<?php echo ($page =='ui-colors') ? 'active' : '' ;?>">Colors</a></li>
									<li><a href="ui-dropdowns" class="<?php echo ($page =='ui-dropdowns') ? 'active' : '' ;?>">Dropdowns</a></li>
									<li><a href="ui-grid" class="<?php echo ($page =='ui-grid') ? 'active' : '' ;?>">Grid</a></li>
									<li><a href="ui-images" class="<?php echo ($page =='ui-images') ? 'active' : '' ;?>">Images</a></li>
									<li><a href="ui-lightbox" class="<?php echo ($page =='ui-lightbox') ? 'active' : '' ;?>">Lightbox</a></li>
									<li><a href="ui-media" class="<?php echo ($page =='ui-media') ? 'active' : '' ;?>">Media</a></li>
									<li><a href="ui-modals" class="<?php echo ($page =='ui-modals') ? 'active' : '' ;?>">Modals</a></li>
									<li><a href="ui-offcanvas" class="<?php echo ($page =='ui-offcanvas') ? 'active' : '' ;?>">Offcanvas</a></li>
									<li><a href="ui-pagination" class="<?php echo ($page =='ui-pagination') ? 'active' : '' ;?>">Pagination</a></li>
									<li><a href="ui-popovers" class="<?php echo ($page =='ui-popovers') ? 'active' : '' ;?>">Popovers</a></li>
									<li><a href="ui-progress" class="<?php echo ($page =='ui-progress') ? 'active' : '' ;?>">Progress</a></li>
									<li><a href="ui-placeholders" class="<?php echo ($page =='ui-placeholders') ? 'active' : '' ;?>">Placeholders</a></li>
									<li><a href="ui-rangeslider" class="<?php echo ($page =='ui-rangeslider') ? 'active' : '' ;?>">Range Slider</a></li>
									<li><a href="ui-spinner" class="<?php echo ($page =='ui-spinner') ? 'active' : '' ;?>">Spinner</a></li>
									<li><a href="ui-sweetalerts" class="<?php echo ($page =='ui-sweetalerts') ? 'active' : '' ;?>">Sweet Alerts</a></li>
									<li><a href="ui-nav-tabs" class="<?php echo ($page =='ui-nav-tabs') ? 'active' : '' ;?>">Tabs</a></li>
									<li><a href="ui-toasts" class="<?php echo ($page =='ui-toasts') ? 'active' : '' ;?>">Toasts</a></li>
									<li><a href="ui-tooltips" class="<?php echo ($page =='ui-tooltips') ? 'active' : '' ;?>">Tooltips</a></li>
									<li><a href="ui-typography" class="<?php echo ($page =='ui-typography') ? 'active' : '' ;?>">Typography</a></li>
									<li><a href="ui-video" class="<?php echo ($page =='ui-video') ? 'active' : '' ;?>">Video</a></li>
									<li><a href="ui-sortable" class="<?php echo ($page =='ui-sortable') ? 'active' : '' ;?>">Sortable</a></li>
									<li><a href="ui-swiperjs" class="<?php echo ($page =='ui-swiperjs') ? 'active' : '' ;?>">Swiperjs</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?php echo ($page =='ui-ribbon' || $page == 'ui-clipboard' || $page == 'ui-drag-drop' || $page == 'ui-rangeslider' || $page == 'ui-rating' || $page == 'ui-text-editor' || $page == 'ui-counter' || $page == 'ui-scrollbar' || $page == 'ui-stickynote' || $page == 'ui-timeline') ? 'active subdrop' : '' ;?>">
									<i data-feather="layers"></i><span>Advanced UI</span><span class="menu-arrow"></span>
								</a>
								<ul>
									<li><a href="ui-ribbon" class="<?php echo ($page =='ui-ribbon') ? 'active' : '' ;?>">Ribbon</a></li>
									<li><a href="ui-clipboard" class="<?php echo ($page =='ui-clipboard') ? 'active' : '' ;?>">Clipboard</a></li>
									<li><a href="ui-drag-drop" class="<?php echo ($page =='ui-drag-drop') ? 'active' : '' ;?>">Drag & Drop</a></li>
									<li><a href="ui-rangeslider" class="<?php echo ($page =='ui-rangeslider') ? 'active' : '' ;?>">Range Slider</a></li>
									<li><a href="ui-rating" class="<?php echo ($page =='ui-rating') ? 'active' : '' ;?>">Rating</a></li>
									<li><a href="ui-text-editor" class="<?php echo ($page =='ui-text-editor') ? 'active' : '' ;?>">Text Editor</a></li>
									<li><a href="ui-counter" class="<?php echo ($page =='ui-counter') ? 'active' : '' ;?>">Counter</a></li>
									<li><a href="ui-scrollbar" class="<?php echo ($page =='ui-scrollbar') ? 'active' : '' ;?>">Scrollbar</a></li>
									<li><a href="ui-stickynote" class="<?php echo ($page =='ui-stickynote') ? 'active' : '' ;?>">Sticky Note</a></li>
									<li><a href="ui-timeline" class="<?php echo ($page =='ui-timeline') ? 'active' : '' ;?>">Timeline</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?php echo ($page =='chart-apex' || $page == 'chart-c3' || $page == 'chart-js' || $page == 'chart-morris' || $page == 'chart-flot' || $page == 'chart-peity') ? 'active subdrop' : '' ;?>"><i class="ti ti-chart-infographic fs-16 me-2"></i>
									<span>Charts</span><span class="menu-arrow"></span>
								</a>
								<ul>
									<li><a href="chart-apex" class="<?php echo ($page =='chart-apex') ? 'active' : '' ;?>">Apex Charts</a></li>
									<li><a href="chart-c3" class="<?php echo ($page =='chart-c3') ? 'active' : '' ;?>">Chart C3</a></li>
									<li><a href="chart-js" class="<?php echo ($page =='chart-js') ? 'active' : '' ;?>">Chart Js</a></li>
									<li><a href="chart-morris" class="<?php echo ($page =='chart-morris') ? 'active' : '' ;?>">Morris Charts</a></li>
									<li><a href="chart-flot" class="<?php echo ($page =='chart-flot') ? 'active' : '' ;?>">Flot Charts</a></li>
									<li><a href="chart-peity" class="<?php echo ($page =='chart-peity') ? 'active' : '' ;?>">Peity Charts</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?php echo ($page =='icon-fontawesome' || $page == 'icon-feather' || $page == 'icon-ionic' || $page == 'icon-material' || $page == 'icon-pe7' || $page == 'icon-simpleline' || $page == 'icon-themify' || $page == 'icon-weather' || $page == 'icon-typicon' || $page == 'icon-flag' || $page == 'icon-tabler' || $page == 'icon-bootstrap' || $page == 'icon-remix') ? 'active subdrop' : '' ;?>"><i class="ti ti-icons fs-16 me-2"></i>
									<span>Icons</span><span class="menu-arrow"></span>
								</a>
								<ul>
									<li><a href="icon-fontawesome" class="<?php echo ($page =='icon-fontawesome') ? 'active' : '' ;?>">Fontawesome Icons</a></li>
									<li><a href="icon-feather" class="<?php echo ($page =='icon-feather') ? 'active' : '' ;?>">Feather Icons</a></li>
									<li><a href="icon-ionic" class="<?php echo ($page =='icon-ionic') ? 'active' : '' ;?>">Ionic Icons</a></li>
									<li><a href="icon-material" class="<?php echo ($page =='icon-material') ? 'active' : '' ;?>">Material Icons</a></li>
									<li><a href="icon-pe7" class="<?php echo ($page =='icon-pe7') ? 'active' : '' ;?>">Pe7 Icons</a></li>
									<li><a href="icon-simpleline" class="<?php echo ($page =='icon-simpleline') ? 'active' : '' ;?>">Simpleline Icons</a></li>
									<li><a href="icon-themify" class="<?php echo ($page =='icon-themify') ? 'active' : '' ;?>">Themify Icons</a></li>
									<li><a href="icon-weather" class="<?php echo ($page =='icon-weather') ? 'active' : '' ;?>">Weather Icons</a></li>
									<li><a href="icon-typicon" class="<?php echo ($page =='icon-typicon') ? 'active' : '' ;?>">Typicon Icons</a></li>
									<li><a href="icon-flag" class="<?php echo ($page =='icon-flag') ? 'active' : '' ;?>">Flag Icons</a></li>
									<li><a href="icon-tabler" class="<?php echo ($page =='icon-tabler') ? 'active' : '' ;?>">Tabler Icons</a></li>
									<li><a href="icon-bootstrap" class="<?php echo ($page =='icon-bootstrap') ? 'active' : '' ;?>">Bootstrap Icons</a></li>
									<li><a href="icon-remix" class="<?php echo ($page =='icon-remix') ? 'active' : '' ;?>">Remix Icons</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?php echo ($page =='form-basic-inputs' || $page == 'form-checkbox-radios' || $page == 'form-input-groups' || $page == 'form-grid-gutters' || $page == 'form-select' || $page == 'form-fileupload' || $page == 'form-mask' || $page =='form-horizontal' || $page == 'form-vertical' || $page == 'form-floating-labels' || $page == 'form-mask' || $page == 'form-validation' || $page == 'form-select2' || $page == 'form-wizard' || $page == 'form-pickers') ? 'active subdrop' : '' ;?>">
									<i class="ti ti-input-search fs-16 me-2"></i><span>Forms</span><span class="menu-arrow"></span>
								</a>
								<ul>
									<li class="submenu submenu-two">
										<a href="javascript:void(0);" class="<?php echo ($page =='form-basic-inputs' || $page == 'form-checkbox-radios' || $page == 'form-input-groups' || $page == 'form-grid-gutters' || $page == 'form-select' || $page == 'form-fileupload' || $page == 'form-mask') ? 'active subdrop' : '' ;?>">Form Elements<span class="menu-arrow inside-submenu"></span></a>
										<ul>
											<li><a href="form-basic-inputs" class="<?php echo ($page =='form-basic-inputs') ? 'active' : '' ;?>">Basic Inputs</a></li>
											<li><a href="form-checkbox-radios" class="<?php echo ($page =='form-checkbox-radios') ? 'active' : '' ;?>">Checkbox & Radios</a></li>
											<li><a href="form-input-groups" class="<?php echo ($page =='form-input-groups') ? 'active' : '' ;?>">Input Groups</a></li>
											<li><a href="form-grid-gutters" class="<?php echo ($page =='form-grid-gutters') ? 'active' : '' ;?>">Grid & Gutters</a></li>
											<li><a href="form-select" class="<?php echo ($page =='form-select') ? 'active' : '' ;?>">Form Select</a></li>
											<li><a href="form-mask" class="<?php echo ($page =='form-mask') ? 'active' : '' ;?>">Input Masks</a></li>
											<li><a href="form-fileupload" class="<?php echo ($page =='form-fileupload') ? 'active' : '' ;?>">File Uploads</a></li>
										</ul>
									</li>
									<li class="submenu submenu-two">
										<a href="javascript:void(0);" class="<?php echo ($page =='form-horizontal' || $page == 'form-vertical' || $page == 'form-floating-labels') ? 'active subdrop' : '' ;?>">Layouts<span class="menu-arrow inside-submenu"></span></a>
										<ul>
											<li><a href="form-horizontal" class="<?php echo ($page =='form-horizontal') ? 'active' : '' ;?>">Horizontal Form</a></li>
											<li><a href="form-vertical" class="<?php echo ($page =='form-vertical') ? 'active' : '' ;?>">Vertical Form</a></li>
											<li><a href="form-floating-labels" class="<?php echo ($page =='form-floating-labels') ? 'active' : '' ;?>">Floating Labels</a></li>
										</ul>
									</li>
									<li><a href="form-validation" class="<?php echo ($page =='form-validation') ? 'active' : '' ;?>">Form Validation</a></li>
									<li><a href="form-select2" class="<?php echo ($page =='form-select2') ? 'active' : '' ;?>">Select2</a></li>
									<li><a href="form-wizard" class="<?php echo ($page =='form-wizard') ? 'active' : '' ;?>">Form Wizard</a></li>
									<li><a href="form-pickers" class="<?php echo ($page =='form-pickers') ? 'active' : '' ;?>">Form Picker</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?php echo ($page =='tables-basic' || $page == 'data-tables') ? 'active subdrop' : '' ;?>"><i class="ti ti-table fs-16 me-2"></i><span>Tables</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="tables-basic" class="<?php echo ($page =='tables-basic') ? 'active' : '' ;?>">Basic Tables </a></li>
									<li><a href="data-tables" class="<?php echo ($page =='data-tables') ? 'active' : '' ;?>">Data Table </a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?php echo ($page =='maps-vector' || $page == 'maps-leaflet') ? 'active subdrop' : '' ;?>"><i class="ti ti-map-pin-pin fs-16 me-2"></i><span>Maps</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="maps-vector" class="<?php echo ($page =='maps-vector') ? 'active' : '' ;?>">Vector</a></li>
									<li><a href="maps-leaflet" class="<?php echo ($page =='maps-leaflet') ? 'active' : '' ;?>">Leaflet</a></li>
								</ul>
							</li>
						</ul>
					</li>
					<li class="submenu-open">
						<h6 class="submenu-hdr">Help</h6>
						<ul>
							<li><a href="https://dreamspos.dreamstechnologies.com/documentation/yii.html" target="_blank"><i class="ti ti-file-text fs-16 me-2"></i><span>Documentation</span></a></li>
							<li><a href="https://dreamspos.dreamstechnologies.com/documentation/changelog.html" target="_blank"><i class="ti ti-exchange fs-16 me-2"></i><span>Changelog </span><span class="badge bg-primary badge-xs text-white fs-10 ms-2">v2.2.4</span></a></li>
							<li class="submenu">
								<a href="javascript:void(0);"><i class="ti ti-menu-2 fs-16 me-2"></i><span>Multi Level</span><span class="menu-arrow"></span></a>
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
					</li>
				</ul>
			</div>
		</div>
	</div>
	<!-- /Sidebar -->

