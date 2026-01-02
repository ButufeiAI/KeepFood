<?php
$page = $this->getRequest()->getParam('pass')[0] ?? 'index';

// Helper function to check if current page matches
$isActive = function ($pages) use ($page) {
    $pages = is_array($pages) ? $pages : [$pages];
    return in_array($page, $pages) ? 'active' : '';
};

// Helper function for submenu parent with subdrop
$isActiveSubmenu = function ($pages) use ($page) {
    $pages = is_array($pages) ? $pages : [$pages];
    return in_array($page, $pages) ? 'active subdrop' : '';
};
?>

<?php if($page !== 'pos' && $page !== 'pos_2' && $page !== 'pos_3' && $page !== 'pos_4' && $page !== 'pos_5') {?>
   	<!-- Horizontal Sidebar -->
	<div class="sidebar sidebar-horizontal" id="horizontal-menu">
<?php }?>
<?php if($page === 'pos' || $page === 'pos_2' || $page === 'pos_3' || $page === 'pos_4' || $page === 'pos_5') {?>
   	<!-- Horizontal Sidebar -->
	<div class="sidebar sidebar-horizontal d-none" id="horizontal-menu">
<?php }?>
		<div id="sidebar-menu-3" class="sidebar-menu">
			<div class="main-menu">
				<ul class="nav-menu">
					<li class="submenu">
						<a href="index" class="<?= $isActiveSubmenu(['index', '/', 'admin_dashboard', 'sales_dashboard', 'dashboard', 'companies', 'subscription', 'packages', 'domain', 'purchase_transaction', 'chat', 'audio_call', 'call_history', 'video_call', 'calendar', 'contacts', 'email', 'email_reply', 'todo', 'todo_list', 'notes', 'file_manager', 'projects', 'products', 'orders', 'customers', 'cart', 'checkout', 'wishlist', 'reviews', 'social_feed', 'search_list', 'layout_horizontal', 'layout_detached', 'layout_two_column', 'layout_hovered', 'layout_boxed', 'layout_rtl', 'layout_dark']) ?>"><i class="ti ti-layout-grid fs-16 me-2"></i><span> Main Menu</span> <span class="menu-arrow"></span></a>
						<ul>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['index', '/', 'admin_dashboard', 'sales_dashboard']) ?>"><span>Dashboard</span> <span class="menu-arrow"></span></a>
								<ul>
									<li><a href="index" class="<?= $isActive(['index', '/']) ?>">Admin Dashboard</a></li>
									<li><a href="admin_dashboard" class="<?= $isActive('admin_dashboard') ?>">Admin Dashboard 2</a></li>
									<li><a href="sales_dashboard" class="<?= $isActive('sales_dashboard') ?>">Sales Dashboard</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['dashboard', 'companies', 'subscription', 'packages', 'domain', 'purchase_transaction']) ?> "><span>Super Admin</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="dashboard" class="<?= $isActive('dashboard') ?>">Dashboard</a></li>
									<li><a href="companies" class="<?= $isActive('companies') ?>">Companies</a></li>
									<li><a href="subscription" class="<?= $isActive('subscription') ?>">Subscriptions</a></li>
									<li><a href="packages" class="<?= $isActive('packages') ?>">Packages</a></li>
									<li><a href="domain" class="<?= $isActive('domain') ?>">Domain</a></li>
									<li><a href="purchase_transaction" class="<?= $isActive('purchase_transaction') ?>">Purchase Transaction</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['chat', 'audio_call', 'call_history', 'video_call', 'calendar', 'contacts', 'email', 'email_reply', 'todo', 'todo_list', 'notes', 'file_manager', 'projects', 'products', 'orders', 'customers', 'cart', 'checkout', 'wishlist', 'reviews', 'social_feed', 'search_list']) ?> "><span>Application</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="chat" class="<?= $isActive('chat') ?>">Chat</a></li>
									<li class="submenu submenu-two"><a href="javascript:void(0);" class="<?= $isActiveSubmenu(['video_call', 'call_history', 'audio_call']) ?>">Call<span class="menu-arrow inside-submenu"></span></a>
										<ul>
											<li><a href="video_call" class="<?= $isActive('video_call') ?>">Video Call</a></li>
											<li><a href="audio_call" class="<?= $isActive('audio_call') ?>">Audio Call</a></li>
											<li><a href="call_history" class="<?= $isActive('call_history') ?>">Call History</a></li>
										</ul>
									</li>
									<li><a href="calendar" class="<?= $isActive('calendar') ?>">Calendar</a></li>
									<li><a href="contacts" class="<?= $isActive('contacts') ?>">Contacts</a></li>
									<li><a href="email" class="<?= $isActive(['email', 'email_reply']) ?>">Email</a></li>
									<li><a href="todo" class="<?= $isActive(['todo', 'todo_list']) ?>">To Do</a></li>
									<li><a href="notes" class="<?= $isActive('notes') ?>">Notes</a></li>
									<li><a href="file_manager" class="<?= $isActive('file_manager') ?>">File Manager</a></li>
									<li><a href="projects" class="<?= $isActive('projects') ?>">Projects</a></li>
									<li class="submenu submenu-two"><a href="javascript:void(0);" class="<?= $isActiveSubmenu(['products', 'orders', 'customers', 'cart', 'checkout', 'wishlist', 'reviews']) ?>">Ecommerce<span class="menu-arrow inside-submenu"></span></a>
										<ul>
											<li><a href="products" class="<?= $isActive('products') ?>">Products</a></li>
											<li><a href="orders" class="<?= $isActive('orders') ?>">Orders</a></li>
											<li><a href="customers" class="<?= $isActive('customers') ?>">Customers</a></li>
											<li><a href="cart" class="<?= $isActive('cart') ?>">Cart</a></li>
											<li><a href="checkout" class="<?= $isActive('checkout') ?>">Checkout</a></li>
											<li><a href="wishlist" class="<?= $isActive('wishlist') ?>">Wishlist</a></li>
											<li><a href="reviews" class="<?= $isActive('reviews') ?>">Reviews</a></li>
										</ul>
									</li>
									<li><a href="social_feed" class="<?= $isActive('social_feed') ?>">Social Feed</a></li>
									<li><a href="search_list" class="<?= $isActive('search_list') ?>">Search List</a></li>
								</ul>
							</li>	
							<li class="submenu">
								<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['layout_horizontal', 'layout_detached', 'layout_two_column', 'layout_hovered', 'layout_boxed', 'layout_rtl', 'layout_dark']) ?>"><span>Layouts</span><span class="menu-arrow inside-submenu"></span></a>
								<ul>
									<li><a href="layout_horizontal" class="<?= $isActive('layout_horizontal') ?>">Horizontal</a></li>
									<li><a href="layout_detached" class="<?= $isActive('layout_detached') ?>">Detached</a></li>
									<li><a href="layout_two_column" class="<?= $isActive('layout_two_column') ?>">Two Column</a></li>
									<li><a href="layout_hovered" class="<?= $isActive('layout_hovered') ?>">Hovered</a></li>
									<li><a href="layout_boxed" class="<?= $isActive('layout_boxed') ?>">Boxed</a></li>
									<li><a href="layout_rtl" class="<?= $isActive('layout_rtl') ?>">RTL</a></li>
									<li><a href="layout_dark" class="<?= $isActive('layout_dark') ?>">Dark</a></li>
								</ul>
							</li>								
						</ul>
					</li>											
					<li class="submenu">
						<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['product_list', 'edit_product', 'product_details', 'add_product', 'expired_products', 'low_stocks', 'category_list', 'sub_categories', 'brand_list', 'varriant_attributes', 'units', 'warranty', 'barcode', 'qrcode']) ?>"><i class="ti ti-brand-unity fs-16 me-2"></i><span> Inventory
							</span> <span class="menu-arrow"></span></a>
						<ul>
							<li><a href="product_list" class="<?= $isActive(['product_list', 'product_details', 'edit_product']) ?>">Products</a></li>
							<li><a href="add_product" class="<?= $isActive('add_product') ?>">Create Product</a></li>
							<li><a href="expired_products" class="<?= $isActive('expired_products') ?>">Expired Products</a></li>
							<li><a href="low_stocks" class="<?= $isActive('low_stocks') ?>">Low Stocks</a></li>
							<li><a href="category_list" class="<?= $isActive('category_list') ?>">Category</a></li>
							<li><a href="sub_categories" class="<?= $isActive('sub_categories') ?>">Sub Category</a></li>
							<li><a href="brand_list" class="<?= $isActive('brand_list') ?>">Brands</a></li>
							<li><a href="units" class="<?= $isActive('units') ?>">Units</a></li>
							<li><a href="varriant_attributes" class="<?= $isActive('varriant_attributes') ?>">Variant Attributes</a></li>
							<li><a href="warranty" class="<?= $isActive('warranty') ?>">Warranties</a></li>
							<li><a href="barcode" class="<?= $isActive('barcode') ?>">Print Barcode</a></li>
							<li><a href="qrcode" class="<?= $isActive('qrcode') ?>">Print QR Code</a></li>
						</ul>
					</li>
					<li class="submenu">
						<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['manage_stocks', 'stock_adjustment', 'stock_transfer', 'online_orders', 'pos_orders', 'invoice', 'invoice_details', 'sales_returns', 'quotation_list', 'pos', 'pos_2', 'pos_3', 'pos_4', 'pos_5', 'coupons', 'gift_cards', 'discount_plan', 'discount', 'purchase_list', 'purchase_order_report', 'purchase_returns', 'expense_list', 'expense_category', 'income', 'income_category', 'account_list', 'money_transfer', 'balance_sheet', 'balance_sheet_v2', 'trial_balance', 'cash_flow', 'cash_flow_v2', 'account_statement']) ?>"><i class="ti ti-layout-grid fs-16 me-2"></i><span>Sales &amp; Purchase</span> <span class="menu-arrow"></span></a>
						<ul>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['manage_stocks', 'stock_adjustment', 'stock_transfer']) ?>"><span>Stock</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="manage_stocks" class="<?= $isActive('manage_stocks') ?>">Manage Stock</a></li>
									<li><a href="stock_adjustment" class="<?= $isActive('stock_adjustment') ?>">Stock Adjustment</a></li>
									<li><a href="stock_transfer" class="<?= $isActive('stock_transfer') ?>">Stock Transfer</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['online_orders', 'pos_orders', 'invoice', 'invoice_details', 'sales_returns', 'quotation_list', 'pos', 'pos_2', 'pos_3', 'pos_4', 'pos_5']) ?>"><span>Sales</span><span class="menu-arrow"></span></a>
								<ul>
									<li class="submenu">
										<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['online_orders', 'pos_orders']) ?>"><span>Sales</span><span class="menu-arrow"></span></a>
										<ul>
											<li><a href="online_orders" class="<?= $isActive('online_orders') ?>">Online Orders</a></li>
											<li><a href="pos_orders" class="<?= $isActive('pos_orders') ?>">POS Orders</a></li>
										</ul>
									</li>
									<li><a href="invoice" class="<?= $isActive(['invoice', 'invoice_details']) ?>">Invoices</a></li>
									<li><a href="sales_returns" class="<?= $isActive('sales_returns') ?>">Sales Return</a></li>
									<li><a href="quotation_list" class="<?= $isActive('quotation_list') ?>">Quotation</a></li>
									<li class="submenu">
										<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['pos', 'pos_2', 'pos_3', 'pos_4', 'pos_5']) ?>"><span>POS</span><span class="menu-arrow"></span></a>
										<ul>
											<li><a href="pos" class="<?= $isActive('pos') ?>">POS 1</a></li>
											<li><a href="pos_2" class="<?= $isActive('pos_2') ?>">POS 2</a></li>
											<li><a href="pos_3" class="<?= $isActive('pos_3') ?>">POS 3</a></li>
											<li><a href="pos_4" class="<?= $isActive('pos_4') ?>">POS 4</a></li>
											<li><a href="pos_5" class="<?= $isActive('pos_5') ?>">POS 5</a></li>
											<li><a href="https://dreamspos.dreamstechnologies.com/food-pos/cakephp/template/index" target="_blank">POS 6</a></li>
										</ul>
									</li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['coupons', 'gift_cards', 'discount_plan', 'discount']) ?>"><span>Promo</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="coupons" class="<?= $isActive('coupons') ?>"><span>Coupons</span></a></li>
									<li><a href="gift_cards" class="<?= $isActive('gift_cards') ?>"><span>Gift Cards</span></a></li>
									<li class="submenu">
										<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['discount_plan', 'discount']) ?>"><span>Discount</span><span class="menu-arrow"></span></a>
										<ul>
											<li><a href="discount_plan" class="<?= $isActive('discount_plan') ?>">Discount Plan</a></li>
											<li><a href="discount" class="<?= $isActive('discount') ?>">Discount</a></li>
										</ul>
									</li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['purchase_list', 'purchase_order_report', 'purchase_returns']) ?>"><span>Purchase</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="purchase_list" class="<?= $isActive('purchase_list') ?>"><span>Purchases</span></a></li>
									<li><a href="purchase_order_report" class="<?= $isActive('purchase_order_report') ?>"><span>Purchase Order</span></a></li>
									<li><a href="purchase_returns" class="<?= $isActive('purchase_returns') ?>"><span>Purchase Return</span></a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['expense_list', 'expense_category']) ?>"><span>Expenses</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="expense_list" class="<?= $isActive('expense_list') ?>">Expenses</a></li>
									<li><a href="expense_category" class="<?= $isActive('expense_category') ?>">Expense Category</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['income', 'income_category']) ?>"><span>Income</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="income" class="<?= $isActive('income') ?>">Income</a></li>
									<li><a href="income_category" class="<?= $isActive('income_category') ?>">Income Category</a></li>
								</ul>
							</li>
							<li><a href="account_list" class="<?= $isActive('account_list') ?>"><span>Bank Accounts</span></a></li>
							<li><a href="money_transfer" class="<?= $isActive('money_transfer') ?>"><span>Money Transfer</span></a></li>
							<li><a href="balance_sheet" class="<?= $isActive(['balance_sheet', 'balance_sheet_v2']) ?>"><span>Balance Sheet</span></a></li>
							<li><a href="trial_balance" class="<?= $isActive('trial_balance') ?>"><span>Trial Balance</span></a></li>
							<li><a href="cash_flow" class="<?= $isActive(['cash_flow', 'cash_flow_v2']) ?>"><span>Cash Flow</span></a></li>
							<li><a href="account_statement" class="<?= $isActive('account_statement') ?>"><span>Account Statement</span></a></li>
						</ul>
					</li>
					<li class="submenu">
						<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['ui_alerts', 'ui_accordion', 'ui_avatar', 'ui_badges', 'ui_borders', 'ui_buttons', 'ui_buttons_group', 'ui_breadcrumb', 'ui_cards', 'ui_carousel', 'ui_colors', 'ui_dropdowns', 'ui_grid', 'ui_images', 'ui_lightbox', 'ui_media', 'ui_modals', 'ui_offcanvas', 'ui_pagination', 'ui_popovers', 'ui_progress', 'ui_placeholders', 'ui_rangeslider', 'ui_spinner', 'ui_sweetalerts', 'ui_nav_tabs', 'ui_toasts', 'ui_tooltips', 'ui_typography', 'ui_video', 'ui_sortable', 'ui_swiperjs', 'ui_ribbon', 'ui_clipboard', 'ui_drag_drop', 'ui_rating', 'ui_text_editor', 'ui_counter', 'ui_scrollbar', 'ui_stickynote', 'ui_timeline', 'chart_apex', 'chart_c3', 'chart_js', 'chart_morris', 'chart_flot', 'chart_peity', 'icon_fontawesome', 'icon_feather', 'icon_ionic', 'icon_material', 'icon_pe7', 'icon_simpleline', 'icon_themify', 'icon_weather', 'icon_typicon', 'icon_flag', 'icon_tabler', 'icon_bootstrap', 'icon_remix', 'form_basic_inputs', 'form_checkbox_radios', 'form_input_groups', 'form_grid_gutters', 'form_select', 'form_fileupload', 'form_mask', 'form_horizontal', 'form_vertical', 'form_floating_labels', 'form_validation', 'form_select2', 'form_wizard', 'form_pickers', 'tables_basic', 'data_tables', 'maps_vector', 'maps_leaflet']) ?>"><i class="ti ti-users-group fs-16 me-2"></i><span>UI Interface</span> <span class="menu-arrow"></span></a>
						<ul>																
							<li class="submenu">
								<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['ui_alerts', 'ui_accordion', 'ui_avatar', 'ui_badges', 'ui_borders', 'ui_buttons', 'ui_buttons_group', 'ui_breadcrumb', 'ui_cards', 'ui_carousel', 'ui_colors', 'ui_dropdowns', 'ui_grid', 'ui_images', 'ui_lightbox', 'ui_media', 'ui_modals', 'ui_offcanvas', 'ui_pagination', 'ui_popovers', 'ui_progress', 'ui_placeholders', 'ui_rangeslider', 'ui_spinner', 'ui_sweetalerts', 'ui_nav_tabs', 'ui_toasts', 'ui_tooltips', 'ui_typography', 'ui_video', 'ui_sortable', 'ui_swiperjs']) ?>"><span>Base UI</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="ui_alerts" class="<?= $isActive('ui_alerts') ?>">Alerts</a></li>
									<li><a href="ui_accordion" class="<?= $isActive('ui_accordion') ?>">Accordion</a></li>
									<li><a href="ui_avatar" class="<?= $isActive('ui_avatar') ?>">Avatar</a></li>
									<li><a href="ui_badges" class="<?= $isActive('ui_badges') ?>">Badges</a></li>
									<li><a href="ui_borders" class="<?= $isActive('ui_borders') ?>">Border</a></li>
									<li><a href="ui_buttons" class="<?= $isActive('ui_buttons') ?>">Buttons</a></li>
									<li><a href="ui_buttons_group" class="<?= $isActive('ui_buttons_group') ?>">Button Group</a></li>
									<li><a href="ui_breadcrumb" class="<?= $isActive('ui_breadcrumb') ?>">Breadcrumb</a></li>
									<li><a href="ui_cards" class="<?= $isActive('ui_cards') ?>">Card</a></li>
									<li><a href="ui_carousel" class="<?= $isActive('ui_carousel') ?>">Carousel</a></li>
									<li><a href="ui_colors" class="<?= $isActive('ui_colors') ?>">Colors</a></li>
									<li><a href="ui_dropdowns" class="<?= $isActive('ui_dropdowns') ?>">Dropdowns</a></li>
									<li><a href="ui_grid" class="<?= $isActive('ui_grid') ?>">Grid</a></li>
									<li><a href="ui_images" class="<?= $isActive('ui_images') ?>">Images</a></li>
									<li><a href="ui_lightbox" class="<?= $isActive('ui_lightbox') ?>">Lightbox</a></li>
									<li><a href="ui_media" class="<?= $isActive('ui_media') ?>">Media</a></li>
									<li><a href="ui_modals" class="<?= $isActive('ui_modals') ?>">Modals</a></li>
									<li><a href="ui_offcanvas" class="<?= $isActive('ui_offcanvas') ?>">Offcanvas</a></li>
									<li><a href="ui_pagination" class="<?= $isActive('ui_pagination') ?>">Pagination</a></li>
									<li><a href="ui_popovers" class="<?= $isActive('ui_popovers') ?>">Popovers</a></li>
									<li><a href="ui_progress" class="<?= $isActive('ui_progress') ?>">Progress</a></li>
									<li><a href="ui_placeholders" class="<?= $isActive('ui_placeholders') ?>">Placeholders</a></li>
									<li><a href="ui_rangeslider" class="<?= $isActive('ui_rangeslider') ?>">Range Slider</a></li>
									<li><a href="ui_spinner" class="<?= $isActive('ui_spinner') ?>">Spinner</a></li>
									<li><a href="ui_sweetalerts" class="<?= $isActive('ui_sweetalerts') ?>">Sweet Alerts</a></li>
									<li><a href="ui_nav_tabs" class="<?= $isActive('ui_nav_tabs') ?>">Tabs</a></li>
									<li><a href="ui_toasts" class="<?= $isActive('ui_toasts') ?>">Toasts</a></li>
									<li><a href="ui_tooltips" class="<?= $isActive('ui_tooltips') ?>">Tooltips</a></li>
									<li><a href="ui_typography" class="<?= $isActive('ui_typography') ?>">Typography</a></li>
									<li><a href="ui_video" class="<?= $isActive('ui_video') ?>">Video</a></li>
									<li><a href="ui_sortable" class="<?= $isActive('ui_sortable') ?>">Sortable</a></li>
									<li><a href="ui_swiperjs" class="<?= $isActive('ui_swiperjs') ?>">Swiperjs</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['ui_ribbon', 'ui_clipboard', 'ui_drag_drop', 'ui_rangeslider', 'ui_rating', 'ui_text_editor', 'ui_counter', 'ui_scrollbar', 'ui_stickynote', 'ui_timeline']) ?>"><span>Advanced UI</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="ui_ribbon" class="<?= $isActive('ui_ribbon') ?>">Ribbon</a></li>
									<li><a href="ui_clipboard" class="<?= $isActive('ui_clipboard') ?>">Clipboard</a></li>
									<li><a href="ui_drag_drop" class="<?= $isActive('ui_drag_drop') ?>">Drag & Drop</a></li>
									<li><a href="ui_rangeslider" class="<?= $isActive('ui_rangeslider') ?>">Range Slider</a></li>
									<li><a href="ui_rating" class="<?= $isActive('ui_rating') ?>">Rating</a></li>
									<li><a href="ui_text_editor" class="<?= $isActive('ui_text_editor') ?>">Text Editor</a></li>
									<li><a href="ui_counter" class="<?= $isActive('ui_counter') ?>">Counter</a></li>
									<li><a href="ui_scrollbar" class="<?= $isActive('ui_scrollbar') ?>">Scrollbar</a></li>
									<li><a href="ui_stickynote" class="<?= $isActive('ui_stickynote') ?>">Sticky Note</a></li>
									<li><a href="ui_timeline" class="<?= $isActive('ui_timeline') ?>">Timeline</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['chart_apex', 'chart_c3', 'chart_js', 'chart_morris', 'chart_flot', 'chart_peity']) ?>"><span>Charts</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="chart_apex" class="<?= $isActive('chart_apex') ?>">Apex Charts</a></li>
									<li><a href="chart_c3" class="<?= $isActive('chart_c3') ?>">Chart C3</a></li>
									<li><a href="chart_js" class="<?= $isActive('chart_js') ?>">Chart Js</a></li>
									<li><a href="chart_morris" class="<?= $isActive('chart_morris') ?>">Morris Charts</a></li>
									<li><a href="chart_flot" class="<?= $isActive('chart_flot') ?>">Flot Charts</a></li>
									<li><a href="chart_peity" class="<?= $isActive('chart_peity') ?>">Peity Charts</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['icon_fontawesome', 'icon_feather', 'icon_ionic', 'icon_material', 'icon_pe7', 'icon_simpleline', 'icon_themify', 'icon_weather', 'icon_typicon', 'icon_flag', 'icon_tabler', 'icon_bootstrap', 'icon_remix']) ?>"><span>Icons</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="icon_fontawesome" class="<?= $isActive('icon_fontawesome') ?>">Fontawesome Icons</a></li>
									<li><a href="icon_feather" class="<?= $isActive('icon_feather') ?>">Feather Icons</a></li>
									<li><a href="icon_ionic" class="<?= $isActive('icon_ionic') ?>">Ionic Icons</a></li>
									<li><a href="icon_material" class="<?= $isActive('icon_material') ?>">Material Icons</a></li>
									<li><a href="icon_pe7" class="<?= $isActive('icon_pe7') ?>">Pe7 Icons</a></li>																
									<li><a href="icon_simpleline" class="<?= $isActive('icon_simpleline') ?>">Simpleline Icons</a></li>
									<li><a href="icon_themify" class="<?= $isActive('icon_themify') ?>">Themify Icons</a></li>
									<li><a href="icon_weather" class="<?= $isActive('icon_weather') ?>">Weather Icons</a></li>
									<li><a href="icon_typicon" class="<?= $isActive('icon_typicon') ?>">Typicon Icons</a></li>
									<li><a href="icon_flag" class="<?= $isActive('icon_flag') ?>">Flag Icons</a></li>
									<li><a href="icon_tabler" class="<?= $isActive('icon_tabler') ?>">Tabler Icons</a></li>
									<li><a href="icon_bootstrap" class="<?= $isActive('icon_bootstrap') ?>">Bootstrap Icons</a></li>
									<li><a href="icon_remix" class="<?= $isActive('icon_remix') ?>">Remix Icons</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['form_basic_inputs', 'form_checkbox_radios', 'form_input_groups', 'form_grid_gutters', 'form_select', 'form_fileupload', 'form_mask', 'form_horizontal', 'form_vertical', 'form_floating_labels', 'form_validation', 'form_select2', 'form_wizard', 'form_pickers']) ?>"><span> Forms</span><span class="menu-arrow"></span></a>
								<ul>
									<li class="submenu submenu-two">
										<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['form_basic_inputs', 'form_checkbox_radios', 'form_input_groups', 'form_grid_gutters', 'form_select', 'form_fileupload', 'form_mask']) ?>"><span>Form Elements</span><span class="menu-arrow inside-submenu"></span></a>
										<ul>
											<li><a href="form_basic_inputs" class="<?= $isActive('form_basic_inputs') ?>">Basic Inputs</a></li>
											<li><a href="form_checkbox_radios" class="<?= $isActive('form_checkbox_radios') ?>">Checkbox & Radios</a></li>
											<li><a href="form_input_groups" class="<?= $isActive('form_input_groups') ?>">Input Groups</a></li>
											<li><a href="form_grid_gutters" class="<?= $isActive('form_grid_gutters') ?>">Grid & Gutters</a></li>
											<li><a href="form_select" class="<?= $isActive('form_select') ?>">Form Select</a></li>
											<li><a href="form_mask" class="<?= $isActive('form_mask') ?>">Input Masks</a></li>
											<li><a href="form_fileupload" class="<?= $isActive('form_fileupload') ?>">File Uploads</a></li>
										</ul>
									</li>
									<li class="submenu submenu-two">
										<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['form_horizontal', 'form_vertical', 'form_floating_labels']) ?>"><span> Layouts</span><span class="menu-arrow inside-submenu"></span></a>
										<ul>
											<li><a href="form_horizontal" class="<?= $isActive('form_horizontal') ?>">Horizontal Form</a></li>
											<li><a href="form_vertical" class="<?= $isActive('form_vertical') ?>">Vertical Form</a></li>
											<li><a href="form_floating_labels" class="<?= $isActive('form_floating_labels') ?>">Floating Labels</a></li>
										</ul>
									</li>
										<li><a href="form_validation" class="<?= $isActive('form_validation') ?>">Form Validation</a></li>
										<li><a href="form_select2" class="<?= $isActive('form_select2') ?>">Select2</a></li>
										<li><a href="form_wizard" class="<?= $isActive('form_wizard') ?>">Form Wizard</a></li>
										<li><a href="form_pickers" class="<?= $isActive('form_pickers') ?>">Form Picker</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['tables_basic', 'data_tables']) ?>"><span>Tables</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="tables_basic" class="<?= $isActive('tables_basic') ?>">Basic Tables </a></li>
									<li><a href="data_tables" class="<?= $isActive('data_tables') ?>">Data Table </a></li>
								</ul>
							</li>
							<li  class="submenu">
								<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['maps_vector', 'maps_leaflet']) ?>"><span>Maps</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="maps_vector" class="<?= $isActive('maps_vector') ?>">Vector</a></li>
									<li><a href="maps_leaflet" class="<?= $isActive('maps_leaflet') ?>">Leaflet</a></li>
								</ul>
							</li>
						</ul>
					</li>
					<li class="submenu">
						<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['signin', 'signin_2', 'signin_3', 'register', 'register_2', 'register_3', 'forgot_password', 'forgot_password_2', 'forgot_password_3', 'reset_password', 'reset_password_2', 'reset_password_3', 'email_verification', 'email_verification_2', 'email_verification_3', 'two_step_verification', 'two_step_verification_2', 'two_step_verification_3', 'blank_page', 'pricing', 'pages', 'all_blog', 'blog_details', 'blog_tag', 'blog_categories', 'blog_comments', 'countries', 'states', 'cities', 'testimonials', 'faq', 'employees_grid', 'department_grid', 'designation', 'shift', 'attendance_employee', 'attendance_admin', 'leaves_admin', 'leaves_employee', 'leave_types', 'holidays', 'employee_salary', 'payslip', 'add_employee', 'edit_employee', 'employee_details', 'employees_list', 'department_list']) ?>"><i class="ti ti-page-break fs-16 me-2"></i><span>Pages</span> <span class="menu-arrow"></span></a>
						<ul>
							<li><a href="profile" class="<?= $isActive('profile') ?>"><span>Profile</span></a></li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['signin', 'signin_2', 'signin_3', 'register', 'register_2', 'register_3', 'forgot_password', 'forgot_password_2', 'forgot_password_3', 'reset_password', 'reset_password_2', 'reset_password_3', 'email_verification', 'email_verification_2', 'email_verification_3', 'two_step_verification', 'two_step_verification_2', 'two_step_verification_3']) ?>"><span>Authentication</span><span class="menu-arrow"></span></a>
								<ul>
									<li class="submenu submenu-two"><a href="javascript:void(0);" class="<?= $isActiveSubmenu(['signin', 'signin_2', 'signin_3']) ?>">Login<span class="menu-arrow inside-submenu"></span></a>
										<ul>
											<li><a href="signin" class="<?= $isActive('signin') ?>">Cover</a></li>
											<li><a href="signin_2" class="<?= $isActive('signin_2') ?>">Illustration</a></li>
											<li><a href="signin_3" class="<?= $isActive('signin_3') ?>">Basic</a></li>
										</ul>
									</li>
									<li class="submenu submenu-two"><a href="javascript:void(0);" class="<?= $isActiveSubmenu(['register', 'register_2', 'register_3']) ?>">Register<span class="menu-arrow inside-submenu"></span></a>
										<ul>
											<li><a href="register" class="<?= $isActive('register') ?>">Cover</a></li>
											<li><a href="register_2" class="<?= $isActive('register_2') ?>">Illustration</a></li>
											<li><a href="register_3" class="<?= $isActive('register_3') ?>">Basic</a></li>
										</ul>
									</li>
									<li class="submenu submenu-two"><a href="javascript:void(0);" class="<?= $isActiveSubmenu(['forgot_password', 'forgot_password_2', 'forgot_password_3']) ?>">Forgot Password<span class="menu-arrow inside-submenu"></span></a>
										<ul>
											<li><a href="forgot_password" class="<?= $isActive('forgot_password') ?>">Cover</a></li>
											<li><a href="forgot_password_2" class="<?= $isActive('forgot_password_2') ?>">Illustration</a></li>
											<li><a href="forgot_password_3" class="<?= $isActive('forgot_password_3') ?>">Basic</a></li>
										</ul>
									</li>
									<li class="submenu submenu-two"><a href="javascript:void(0);" class="<?= $isActiveSubmenu(['reset_password', 'reset_password_2', 'reset_password_3']) ?>">Reset Password<span class="menu-arrow inside-submenu"></span></a>
										<ul>
											<li><a href="reset_password" class="<?= $isActive('reset_password') ?>">Cover</a></li>
											<li><a href="reset_password_2" class="<?= $isActive('reset_password_2') ?>">Illustration</a></li>
											<li><a href="reset_password_3" class="<?= $isActive('reset_password_3') ?>">Basic</a></li>
										</ul>
									</li>
									<li class="submenu submenu-two"><a href="javascript:void(0);" class="<?= $isActiveSubmenu(['email_verification', 'email_verification_2', 'email_verification_3']) ?>">Email Verification<span class="menu-arrow inside-submenu"></span></a>
										<ul>
											<li><a href="email_verification" class="<?= $isActive('email_verification') ?>">Cover</a></li>
											<li><a href="email_verification_2" class="<?= $isActive('email_verification_2') ?>">Illustration</a></li>
											<li><a href="email_verification_3" class="<?= $isActive('email_verification_3') ?>">Basic</a></li>
										</ul>
									</li>
									<li class="submenu submenu-two"><a href="javascript:void(0);" class="<?= $isActiveSubmenu(['two_step_verification', 'two_step_verification_2', 'two_step_verification_3']) ?>">2 Step Verification<span class="menu-arrow inside-submenu"></span></a>
										<ul>
											<li><a href="two_step_verification" class="<?= $isActive('two_step_verification') ?>">Cover</a></li>
											<li><a href="two_step_verification_2" class="<?= $isActive('two_step_verification_2') ?>">Illustration</a></li>
											<li><a href="two_step_verification_3" class="<?= $isActive('two_step_verification_3') ?>">Basic</a></li>
										</ul>
									</li>
									<li><a href="lock_screen" class="<?= $isActive('lock_screen') ?>">Lock Screen</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['error_404', 'error_500']) ?>"><span>Error</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="error_404" class="<?= $isActive('error_404') ?>">404 Error </a></li>
									<li><a href="error_500" class="<?= $isActive('error_500') ?>">500 Error </a></li>
								</ul>
							</li>
							<li><a href="blank_page" class="<?= $isActive('blank_page') ?>"><span>Blank Page</span> </a></li>
							<li><a href="pricing" class="<?= $isActive('pricing') ?>"><span>Pricing</span> </a></li>
							<li><a href="coming_soon" class="<?= $isActive('coming_soon') ?>"><span>Coming Soon</span> </a></li>
							<li><a href="under_maintenance" class="<?= $isActive('under_maintenance') ?>"><span>Under Maintenance</span> </a></li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['pages', 'all_blog', 'blog_details', 'blog_tag', 'blog_categories', 'blog_comments', 'countries', 'states', 'cities', 'testimonials', 'faq']) ?>"><span>Content</span><span class="menu-arrow"></span></a>
								<ul>
									<li class="submenu">
										<a href="javascript:void(0);" class="<?= $isActiveSubmenu('pages') ?>"><span>Pages</span><span class="menu-arrow"></span></a>
										<ul>
										<li><a href="pages" class="<?= $isActive('pages') ?>">Pages</a></li>
										</ul>
									</li>
									<li class="submenu">
										<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['all_blog', 'blog_details', 'blog_tag', 'blog_categories', 'blog_comments']) ?>"><span>Blog</span><span class="menu-arrow"></span></a>
										<ul>
											<li><a href="all_blog" class="<?= $isActive(['all_blog', 'blog_details']) ?>">All Blog</a></li>
											<li><a href="blog_tag" class="<?= $isActive('blog_tag') ?>">Blog Tags</a></li>
											<li><a href="blog_categories" class="<?= $isActive('blog_categories') ?>">Categories</a></li>
											<li><a href="blog_comments" class="<?= $isActive('blog_comments') ?>">Blog Comments</a></li>
										</ul>
									</li>
									<li class="submenu">
										<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['countries', 'states', 'cities']) ?>"><span>Location</span><span class="menu-arrow"></span></a>
										<ul>
											<li><a href="countries" class="<?= $isActive('countries') ?>">Countries</a></li>
											<li><a href="states" class="<?= $isActive('states') ?>">States</a></li>
											<li><a href="cities" class="<?= $isActive('cities') ?>">Cities</a></li>
										</ul>
									</li>
									<li><a href="testimonials" class="<?= $isActive('testimonials') ?>"><span>Testimonials</span></a></li>
									<li><a href="faq" class="<?= $isActive('faq') ?>"><span>FAQ</span></a></li>
	
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['employees_grid', 'add_employee', 'edit_employee', 'employee_details', 'employees_list', 'department_grid', 'designation', 'shift', 'department_list']) ?>"><span>Employees</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="employees_grid" class="<?= $isActive(['employees_grid', 'add_employee', 'edit_employee', 'employee_details', 'employees_list']) ?>"><span>Employees</span></a></li>
									<li><a href="department_grid" class="<?= $isActive(['department_grid', 'department_list']) ?>"><span>Departments</span></a></li>
									<li><a href="designation" class="<?= $isActive('designation') ?>"><span>Designation</span></a></li>
									<li><a href="shift" class="<?= $isActive('shift') ?>"><span>Shifts</span></a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['attendance_employee', 'attendance_admin']) ?>"><span>Attendence</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="attendance_employee" class="<?= $isActive('attendance_employee') ?>">Employee</a></li>
									<li><a href="attendance_admin" class="<?= $isActive('attendance_admin') ?>">Admin</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['leaves_admin', 'leaves_employee', 'leave_types', 'holidays']) ?>"><span>Leaves &amp; Holidays</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="leaves_admin" class="<?= $isActive('leaves_admin') ?>">Admin Leaves</a></li>
									<li><a href="leaves_employee" class="<?= $isActive('leaves_employee') ?>">Employee Leaves</a></li>
									<li><a href="leave_types" class="<?= $isActive('leave_types') ?>">Leave Types</a></li>
									<li><a href="holidays" class="<?= $isActive('holidays') ?>"><span>Holidays</span></a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['employee_salary', 'payslip']) ?>"><span>Payroll</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="employee_salary" class="<?= $isActive('employee_salary') ?>">Employee Salary</a></li>
									<li><a href="payslip" class="<?= $isActive('payslip') ?>">Payslip</a></li>
								</ul>
							</li>
						</ul>
					</li>
					<li class="submenu">
						<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['sales_report', 'best_seller', 'inventory_report', 'stock_history', 'sold_stock', 'supplier_report', 'supplier_due_report', 'customer_report', 'customer_due_report', 'product_report', 'product_expiry_report', 'product_quantity_alert']) ?>"><i class="ti ti-chart-bar fs-16 me-2"></i><span>Reports</span><span class="menu-arrow"></span></a>
						<ul>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['sales_report', 'best_seller']) ?>"><span>Sales Report</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="sales_report" class="<?= $isActive('sales_report') ?>">Sales Report</a></li>
									<li><a href="best_seller" class="<?= $isActive('best_seller') ?>">Best Seller</a></li>
								</ul>
							</li>
							<li><a href="purchase_report" class="<?= $isActive('purchase_report') ?>"><span>Purchase report</span></a></li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['inventory_report', 'stock_history', 'sold_stock']) ?>"><span>Inventory Report</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="inventory_report" class="<?= $isActive('inventory_report') ?>">Inventory Report</a></li>
									<li><a href="stock_history" class="<?= $isActive('stock_history') ?>">Stock History</a></li>
									<li><a href="sold_stock" class="<?= $isActive('sold_stock') ?>">Sold Stock</a></li>
								</ul>
							</li>
							<li><a href="invoice_report" class="<?= $isActive('invoice_report') ?>"><span>Invoice Report</span></a></li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['supplier_report', 'supplier_due_report']) ?>"><span>Supplier Report</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="supplier_report" class="<?= $isActive('supplier_report') ?>">Supplier Report</a></li>
									<li><a href="supplier_due_report" class="<?= $isActive('supplier_due_report') ?>">Supplier Due Report</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['customer_report', 'customer_due_report']) ?>"><span>Customer Report</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="customer_report" class="<?= $isActive('customer_report') ?>">Customer Report</a></li>
									<li><a href="customer_due_report" class="<?= $isActive('customer_due_report') ?>">Customer Due Report</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['product_report', 'product_expiry_report', 'product_quantity_alert']) ?>"><span>Product Report</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="product_report" class="<?= $isActive('product_report') ?>">Product Report</a></li>
									<li><a href="product_expiry_report" class="<?= $isActive('product_expiry_report') ?>">Product Expiry Report</a></li>
									<li><a href="product_quantity_alert" class="<?= $isActive('product_quantity_alert') ?>">Product Quantity Alert</a></li>
								</ul>
							</li>
							<li><a href="expense_report" class="<?= $isActive('expense_report') ?>"><span>Expense Report</span></a></li>
							<li><a href="income_report" class="<?= $isActive('income_report') ?>"><span>Income Report</span></a></li>
							<li><a href="tax_reports" class="<?= $isActive(['tax_reports', 'sales_tax']) ?>"><span>Tax Report</span></a></li>
							<li><a href="profit_and_loss" class="<?= $isActive('profit_and_loss') ?>"><span>Profit & Loss</span></a></li>
							<li><a href="annual_report" class="<?= $isActive('annual_report') ?>"><span>Annual Report</span></a></li>
						</ul>
					</li>
					<li class="submenu">
						<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['general_settings', 'security_settings', 'notification', 'activities', 'connected_apps', 'system_settings', 'company_settings', 'localization_settings', 'prefixes', 'preference', 'appearance', 'social_authentication', 'language_settings', 'invoice_settings', 'language_settings_web', 'invoice_templates', 'printer_settings', 'pos_settings', 'signatures', 'custom_fields', 'email_settings', 'email_templates', 'sms_settings', 'sms_templates', 'otp_settings', 'gdpr_settings', 'payment_gateway_settings', 'bank_settings_grid', 'bank_settings_list', 'tax_rates', 'currency_settings', 'storage_settings', 'ban_ip_address']) ?>"><i class="ti ti-settings fs-16 me-2"></i><span>Settings</span><span class="menu-arrow"></span></a>
						<ul>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['general_settings', 'security_settings', 'notification', 'activities', 'connected_apps']) ?>"><span>General Settings</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="general_settings" class="<?= $isActive('general_settings') ?>">Profile</a></li>
									<li><a href="security_settings" class="<?= $isActive('security_settings') ?>">Security</a></li>
									<li><a href="notification" class="<?= $isActive(['notification', 'activities']) ?>">Notifications</a></li>
									<li><a href="connected_apps" class="<?= $isActive('connected_apps') ?>">Connected Apps</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['system_settings', 'company_settings', 'localization_settings', 'prefixes', 'preference', 'appearance', 'social_authentication', 'language_settings', 'language_settings_web']) ?>"><span>Website Settings</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="system_settings" class="<?= $isActive('system_settings') ?>">System Settings</a></li>
									<li><a href="company_settings" class="<?= $isActive('company_settings') ?>">Company Settings </a></li>
									<li><a href="localization_settings" class="<?= $isActive('localization_settings') ?>">Localization</a></li>
									<li><a href="prefixes" class="<?= $isActive('prefixes') ?>">Prefixes</a></li>
									<li><a href="preference" class="<?= $isActive('preference') ?>">Preference</a></li>
									<li><a href="appearance" class="<?= $isActive('appearance') ?>">Appearance</a></li>
									<li><a href="social_authentication" class="<?= $isActive('social_authentication') ?>">Social Authentication</a></li>
									<li><a href="language_settings" class="<?= $isActive(['language_settings', 'language_settings_web']) ?>">Language</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['invoice_settings', 'invoice_templates', 'printer_settings', 'pos_settings', 'signatures', 'custom_fields']) ?>"><span>App Settings</span><span class="menu-arrow"></span></a>
								<ul>
									<li class="submenu submenu-two"><a href="javascript:void(0);" class="<?= $isActiveSubmenu(['invoice_settings', 'invoice_templates']) ?>">Invoice<span class="menu-arrow inside-submenu"></span></a>
										<ul>
										<li><a href="invoice_settings" class="<?= $isActive('invoice_settings') ?>">Invoice Settings</a></li>
										<li><a href="invoice_templates" class="<?= $isActive('invoice_templates') ?>">Invoice Template</a></li>
										</ul>
									</li>
										<li><a href="printer_settings" class="<?= $isActive('printer_settings') ?>">Printer</a></li>
										<li><a href="pos_settings" class="<?= $isActive('pos_settings') ?>">POS</a></li>
										<li><a href="signatures" class="<?= $isActive('signatures') ?>">Signatures</a></li>
										<li><a href="custom_fields" class="<?= $isActive('custom_fields') ?>">Custom Fields</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['email_settings', 'email_templates', 'sms_settings', 'sms_templates', 'otp_settings', 'gdpr_settings']) ?>"><span>System Settings</span><span class="menu-arrow"></span></a>
								<ul>
									<li class="submenu submenu-two"><a href="javascript:void(0);" class="<?= $isActiveSubmenu(['email_settings', 'email_templates']) ?>">Email<span class="menu-arrow inside-submenu"></span></a>
										<ul>
											<li><a href="email_settings" class="<?= $isActive('email_settings') ?>">Email Settings</a></li>
											<li><a href="email_templates" class="<?= $isActive('email_templates') ?>">Email Template</a></li>
										</ul>
									</li>
									<li class="submenu submenu-two"><a href="javascript:void(0);" class="<?= $isActiveSubmenu(['sms_settings', 'sms_templates']) ?>">SMS<span class="menu-arrow inside-submenu"></span></a>
										<ul>
											<li><a href="sms_settings" class="<?= $isActive('sms_settings') ?>">SMS Settings</a></li>
											<li><a href="sms_templates" class="<?= $isActive('sms_templates') ?>">SMS Template</a></li>
										</ul>
									</li>
									<li><a href="otp_settings" class="<?= $isActive('otp_settings') ?>">OTP</a></li>
									<li><a href="gdpr_settings" class="<?= $isActive('gdpr_settings') ?>">GDPR Cookies</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['payment_gateway_settings', 'bank_settings_grid', 'bank_settings_list', 'tax_rates', 'currency_settings']) ?>"><span>Financial Settings</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="payment_gateway_settings" class="<?= $isActive('payment_gateway_settings') ?>">Payment Gateway</a></li>
									<li><a href="bank_settings_grid" class="<?= $isActive(['bank_settings_grid', 'bank_settings_list']) ?>">Bank Accounts</a></li>
									<li><a href="tax_rates" class="<?= $isActive('tax_rates') ?>">Tax Rates</a></li>
									<li><a href="currency_settings" class="<?= $isActive('currency_settings') ?>">Currencies</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['storage_settings', 'ban_ip_address']) ?>"><span>Other Settings</span><span class="menu-arrow"></span></a>
								<ul>
								<li><a href="storage_settings" class="<?= $isActive('storage_settings') ?>">Storage</a></li>
								<li><a href="ban_ip_address" class="<?= $isActive('ban_ip_address') ?>">Ban IP Address</a></li>
								</ul>
							</li>
							<li>
								<a href="signin" class="<?= $isActive('signin') ?>"><span>Logout</span> </a>
							</li>
						</ul>
					</li>
					<li class="submenu">
						<a href="javascript:void(0);"  class="<?= $isActiveSubmenu(['billers', 'suppliers', 'store_list', 'warehouse', 'users', 'roles_permissions', 'permissions', 'delete_account']) ?>"><i class="ti ti-circle-plus fs-16 me-2"></i><span>More</span><span class="menu-arrow"></span></a>
						<ul>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['billers', 'suppliers', 'store_list', 'warehouse']) ?>"><span>People</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="customers"><span>Customers</span></a></li>
									<li><a href="billers" class="<?= $isActive('billers') ?>"><span>Billers</span></a></li>
									<li><a href="suppliers" class="<?= $isActive('suppliers') ?>"><span>Suppliers</span></a></li>
									<li><a href="store_list" class="<?= $isActive('store_list') ?>"><span>Stores</span></a></li>
									<li><a href="warehouse" class="<?= $isActive('warehouse') ?>"><span>Warehouses</span></a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" class="<?= $isActiveSubmenu(['users', 'roles_permissions', 'permissions', 'delete_account']) ?>"><span>User Management</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="users" class="<?= $isActive('users') ?>"><span>Users</span></a></li>
									<li><a href="roles_permissions" class="<?= $isActive(['roles_permissions', 'permissions']) ?>"><span>Roles & Permissions</span></a></li>
									<li><a href="delete_account" class="<?= $isActive('delete_account') ?>"><span>Delete Account Request</span></a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);"><span>Help</span><span class="menu-arrow"></span></a>
								<ul>
									<li><a href="https://dreamspos.dreamstechnologies.com/documentation/cakephp.html" target="_blank"><span>Documentation</span></a></li>
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
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<!-- /Horizontal Sidebar -->
