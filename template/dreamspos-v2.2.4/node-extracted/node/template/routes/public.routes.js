const public_routes = {};

// ------------- ( Authentication ) --------------------

public_routes.login = "/login";
public_routes.signin_2 = "/signin-2";
public_routes.signin_3 = "/signin-3";
public_routes.forgot_password = "/forgot-password";
public_routes.forgot_password_2 = "/forgot-password-2";
public_routes.forgot_password_3 = "/forgot-password-3";
public_routes.register = "/register";
public_routes.register_2 = "/register-2";
public_routes.register_3 = "/register-3";
public_routes.reset_password = "/reset-password";
public_routes.reset_password_2 = "/reset-password-2";
public_routes.reset_password_3 = "/reset-password-3";
public_routes.email_verification = "/email-verification";
public_routes.email_verification_2 = "/email-verification-2";
public_routes.email_verification_3 = "/email-verification-3";
public_routes.success = "/success";
public_routes.success_2 = "/success-2";
public_routes.success_3 = "/success-3";
public_routes.two_step_verification = "/two-step-verification";
public_routes.two_step_verification_2 = "/two-step-verification-2";
public_routes.two_step_verification_3 = "/two-step-verification-3";
public_routes.lock_screen = "/lock-screen";
public_routes.pageNotFount = "/error-404";
public_routes.serverError = "/error-500";
public_routes.coming_soon = "/coming-soon";
public_routes.under_maintenance = "/under-maintenance";


// ------------- ( Main Menu ) --------------------

public_routes.admin_dashboard = "/index";
public_routes.admin_dashboard_2 = "/admin-dashboard-2";
public_routes.sales_dashboard = "/sales-dashboard";


// ------------- ( Super Admin ) --------------------

public_routes.dashboard = "/dashboard";
public_routes.companies = "/companies";
public_routes.subscription = "/subscription";
public_routes.packages = "/packages";
public_routes.domain = "/domain";
public_routes.purchase_transaction = "/purchase-transaction";


// ------------- ( Application ) --------------------

public_routes.chat = "/chat";
public_routes.video_call = "/video-call";
public_routes.audio_call = "/audio-call";
public_routes.call_history = "/call-history";
public_routes.calendar = "/calendar";
public_routes.contacts = "/contacts";
public_routes.email = "/email";
public_routes.email_reply = "/email-reply";
public_routes.todo = "/todo";
public_routes.todo_list = "/todo-list";
public_routes.notes = "/notes";
public_routes.file_manager = "/file-manager";
public_routes.projects = "/projects";
public_routes.products = "/products";
public_routes.orders = "/orders";
public_routes.customers = "/customers";
public_routes.cart = "/cart";
public_routes.checkout = "/checkout";
public_routes.wishlist = "/wishlist";
public_routes.reviews = "/reviews";
public_routes.social_feed = "/social-feed";
public_routes.search_list = "/search-list";


// ------------- ( Theme Layout ) --------------------

public_routes.layout_horizontal = "/layout-horizontal";
public_routes.layout_detached = "/layout-detached";
public_routes.layout_two_column = "/layout-two-column";
public_routes.layout_hovered = "/layout-hovered";
public_routes.layout_boxed = "/layout-boxed";
public_routes.layout_rtl = "/layout-rtl";
public_routes.layout_dark = "/layout-dark";


// ------------- ( Inventory ) --------------------

public_routes.product_list = "/product-list";
public_routes.add_product = "/add-product";
public_routes.edit_product = "/edit-product";
public_routes.expired_products = "/expired-products";
public_routes.low_stocks = "/low-stocks";
public_routes.category_list = "/category-list";
public_routes.sub_categories = "/sub-categories";
public_routes.brand_list = "/brand-list";
public_routes.units = "/units";
public_routes.varriant_attributes = "/varriant-attributes";
public_routes.warranty = "/warranty";
public_routes.barcode = "/barcode";
public_routes.qrcode = "/qrcode";
public_routes.product_details = "/product-details";


// ------------- ( Stock ) --------------------

public_routes.manage_stocks = "/manage-stocks";
public_routes.stock_adjustment = "/stock-adjustment";
public_routes.stock_transfer = "/stock-transfer";


// ------------- ( Sales ) --------------------

public_routes.online_orders = "/online-orders";
public_routes.pos_orders = "/pos-orders";
public_routes.invoice = "/invoice";
public_routes.invoice_details = "/invoice-details";
public_routes.sales_returns = "/sales-returns";
public_routes.quotation_list = "/quotation-list";
public_routes.pos = "/pos";
public_routes.pos_2 = "/pos-2";
public_routes.pos_3 = "/pos-3";
public_routes.pos_4 = "/pos-4";
public_routes.pos_5 = "/pos-5";


// ------------- ( Promo ) --------------------

public_routes.coupons = "/coupons";
public_routes.gift_cards = "/gift-cards";
public_routes.discount_plan = "/discount-plan";
public_routes.discount = "/discount";


// ------------- ( Purchases ) --------------------

public_routes.purchase_list = "/purchase-list";
public_routes.purchase_order_report = "/purchase-order-report";
public_routes.purchase_returns = "/purchase-returns";


// ------------- ( Pages ) --------------------

public_routes.blank_page = "/blank-page";
public_routes.pricing = "/pricing";
public_routes.profile = "/profile";


// ------------- ( User Management ) --------------------

public_routes.users = "/users";
public_routes.roles_permissions = "/roles-permissions";
public_routes.delete_account = "/delete-account";
public_routes.permissions = "/permissions";

// ------------- ( Settings ) --------------------

public_routes.generalSettings = "/general-settings";
public_routes.connectedApps = "/connected-apps";
public_routes.notification = "/notification";
public_routes.securitySettings = "/security-settings";
public_routes.systemSettings = "/system-settings";
public_routes.companySettings = "/company-settings";
public_routes.localizationSettings = "/localization-settings";
public_routes.prefixes = "/prefixes";
public_routes.preference = "/preference";
public_routes.appearance = "/appearance";
public_routes.socialAuthentication = "/social-authentication";
public_routes.languageSettings = "/language-settings";
public_routes.languageSettingsweb = "/language-settings-web";
public_routes.invoiceSettings = "/invoice-settings";
public_routes.invoiceTemplates = "/invoice-templates";
public_routes.printerSettings = "/printer-settings";
public_routes.posSettings = "/pos-settings";
public_routes.signatures = "/signatures";
public_routes.customFields = "/custom-fields";
public_routes.emailSettings = "/email-settings";
public_routes.emailTemplates = "/email-templates";
public_routes.smsTemplates = "/sms-templates";
public_routes.smsSettings = "/sms-settings";
public_routes.otpSettings = "/otp-settings";
public_routes.gdprSettings = "/gdpr-settings";
public_routes.paymentGatewaySettings = "/payment-gateway-settings";
public_routes.bankSettingsGrid = "/bank-settings-grid";
public_routes.taxRates = "/tax-rates";
public_routes.currencySettings = "/currency-settings";
public_routes.storageSettings = "/storage-settings";
public_routes.banIpAddress = "/ban-ip-address";

public_routes.faq = "/faq"
public_routes.testimonials = "/testimonials"

public_routes.cities = "/cities"
public_routes.states = "/states"
public_routes.countries = "/countries"

public_routes.blogComments = "/blog-comments"
public_routes.blogCategories = "/blog-categories"
public_routes.blogTag = "/blog-tag"
public_routes.blogDetails = "/blog-details"
public_routes.allBlog = "/all-blog"
public_routes.pages = "/pages"

public_routes.annualReport = "/annual-report"
public_routes.taxReports = "/tax-reports"
public_routes.incomeReport = "/income-report"
public_routes.expenseReport = "/expense-report"
public_routes.salesTax = "/sales-tax"
public_routes.profitAndLoss = "/profit-and-loss"
public_routes.productquantityAlert = "/product-quantity-alert"
public_routes.productexpiryReport = "/product-expiry-report"
public_routes.productReport = "/product-report"
public_routes.customerdueReport = "/customer-due-report"
public_routes.customerReport = "/customer-report"
public_routes.supplierdueReport = "/supplier-due-report"
public_routes.supplierReport = "/supplier-report"
public_routes.invoiceReport = "/invoice-report"
public_routes.inventoryReport = "/inventory-report"
public_routes.stockHistory = "/stock-history"
public_routes.soldStock = "/sold-stock"
public_routes.purchaseReport = "/purchase-report"
public_routes.bestSeller = "/best-seller"
public_routes.salesReport = "/sales-report"

public_routes.employeeSalary = "/employee-salary"
public_routes.payslip = "/payslip"
public_routes.holidays = "/holidays"
public_routes.leavesAdmin = "/leaves-admin"
public_routes.leavesEmployee = "/leaves-employee"
public_routes.leaveTypes = "/leave-types"
public_routes.attendanceEmployee = "/attendance-employee"
public_routes.attendanceAdmin = "/attendance-admin"
public_routes.shift = "/shift"
public_routes.designation = "/designation"
public_routes.departmentGrid = "/department-grid"
public_routes.departmentList = "/department-list"
public_routes.employeesGrid = "/employees-grid"
public_routes.employeesList = "/employees-list"
public_routes.employeeDetails = "/employee-details"
public_routes.addEmployee = "/add-employee"
public_routes.editEmployee = "/edit-employee"
public_routes.warehouse = "/warehouse"
public_routes.suppliers = "/suppliers"
public_routes.billers = "/billers"
public_routes.customers = "/customers"
public_routes.storeList = "/store-list"
public_routes.expenseList = "/expense-list"
public_routes.expenseCategory = "/expense-category"
public_routes.income = "/income"
public_routes.incomeCategory = "/income-category"
public_routes.accountList = "/account-list"
public_routes.moneyTransfer = "/money-transfer"
public_routes.balanceSheet = "/balance-sheet"
public_routes.trialBalance = "/trial-balance"
public_routes.cashFlow = "/cash-flow"
public_routes.accountStatement = "/account-statement"
public_routes.activities = "/activities"

// ---------- ( Base UI ) -----------------

public_routes.ui_carousel = "/ui-carousel";
public_routes.ui_cards = "/ui-cards";
public_routes.ui_breadcrumb = "/ui-breadcrumb";
public_routes.ui_buttons_group = "/ui-buttons-group";
public_routes.ui_buttons = "/ui-buttons";
public_routes.ui_borders = "/ui-borders";
public_routes.ui_badges = "/ui-badges";
public_routes.ui_avatar = "/ui-avatar";
public_routes.ui_accordion = "/ui-accordion";
public_routes.ui_alerts = "/ui-alerts";
public_routes.ui_progress = "/ui-progress";
public_routes.ui_popovers = "/ui-popovers";
public_routes.ui_pagination = "/ui-pagination";
public_routes.ui_offcanvas = "/ui-offcanvas";
public_routes.ui_modals = "/ui-modals";
public_routes.ui_media = "/ui-media";
public_routes.ui_lightbox = "/ui-lightbox";
public_routes.ui_images = "/ui-images";
public_routes.ui_grid = "/ui-grid";
public_routes.ui_dropdowns = "/ui-dropdowns";
public_routes.ui_colors = "/ui-colors";
public_routes.ui_video = "/ui-video";
public_routes.ui_typography = "/ui-typography";
public_routes.ui_tooltips = "/ui-tooltips";
public_routes.ui_toasts = "/ui-toasts";
public_routes.ui_nav_tabs = "/ui-nav-tabs";
public_routes.ui_sweetalerts = "/ui-sweetalerts";
public_routes.ui_spinner = "/ui-spinner";
public_routes.ui_placeholders = "/ui-placeholders";
public_routes.ui_sortable = "/ui-sortable";
public_routes.ui_swiperjs = "/ui-swiperjs";

// ---------- ( Advanced UI ) ----------------

public_routes.ui_ribbon = "/ui-ribbon";
public_routes.ui_clipboard = "/ui-clipboard";
public_routes.ui_drag_drop = "/ui-drag-drop";
public_routes.ui_rangeslider = "/ui-rangeslider";
public_routes.ui_rating = "/ui-rating";
public_routes.ui_text_editor = "/ui-text-editor";
public_routes.ui_counter = "/ui-counter";
public_routes.ui_scrollbar = "/ui-scrollbar";
public_routes.ui_stickynote = "/ui-stickynote";
public_routes.ui_timeline = "/ui-timeline";

// ---------- ( charts ) ----------------

public_routes.chart_apex = "/chart-apex";
public_routes.chart_js = "/chart-js";
public_routes.chart_morris = "/chart-morris";
public_routes.chart_flot = "/chart-flot";
public_routes.chart_peity = "/chart-peity";
public_routes.chart_c3 = "/chart-c3";

// ----------- ( Icons ) --------------

public_routes.icon_fontawesome = "/icon-fontawesome";
public_routes.icon_feather = "/icon-feather";
public_routes.icon_ionic = "/icon-ionic";
public_routes.icon_material = "/icon-material";
public_routes.icon_pe7 = "/icon-pe7";
public_routes.icon_simpleline = "/icon-simpleline";
public_routes.icon_themify = "/icon-themify";
public_routes.icon_weather = "/icon-weather";
public_routes.icon_typicon = "/icon-typicon";
public_routes.icon_flag = "/icon-flag";
public_routes.icon_tabler = "/icon-tabler";
public_routes.icon_bootstrap = "/icon-bootstrap";
public_routes.icon_remix = "/icon-remix";

// --------------- ( Maps ) ----------------

public_routes.maps_vector = "/maps-vector"
public_routes.maps_leaflet = "/maps-leaflet"

// --------------- ( Forms ) ----------------

public_routes.form_basic_inputs = "/form-basic-inputs";
public_routes.form_input_groups = "/form-input-groups";
public_routes.form_horizontal = "/form-horizontal";
public_routes.form_vertical = "/form-vertical";
public_routes.form_mask = "/form-mask";
public_routes.form_validation = "/form-validation";
public_routes.form_checkbox_radios = "/form-checkbox-radios";
public_routes.form_grid_gutters = "/form-grid-gutters";
public_routes.form_select = "/form-select";
public_routes.form_floating_labels = "/form-floating-labels";
public_routes.form_wizard = "/form-wizard";
public_routes.form_formSelected2 = "/form-select2";
public_routes.form_fileUpload = "/form-fileupload";
public_routes.form_elements = "/form-elements";
public_routes.form_pickers = "/form-pickers";

// ---------- ( Tables ) -----------------

public_routes.tables_basic = "/tables-basic";
public_routes.data_tables = "/data-tables";


module.exports = public_routes