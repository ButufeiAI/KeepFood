import { createApp } from "vue";
import { router } from './router';
import App from "@/App.vue";
import VueApexCharts from "vue3-apexcharts";
import VueSelect from "vue3-select-component";
import DatePicker from "vue3-datepicker";
import Antd from "ant-design-vue";
import VueFeather from "vue-feather";
import "ant-design-vue/dist/reset.css";
import { IconHome } from '@tabler/icons-vue';
import FlagIcon from "vue-flag-icon";
import VueEasyLightbox from "vue-easy-lightbox"

/********* Layout component**********/
import Header from "@/views/layouts/layouts-header.vue";
import HeaderRtl from "@/views/layouts/layout-rtl-header.vue";
import Sidebar from "@/views/layouts/layouts-sidebar.vue";
import FilesSidebar from "@/views/layouts/files-sidebar.vue";
import Settings_Sidebar from "@/views/layouts/settings-sidebar.vue";
import TwoCol_Sidebar from "@/views/layouts/two-col-sidebar.vue";
import ThemeSettings from "@/views/layouts/theme-settings.vue"; 
import verticalSidebar from "@/views/layouts/vertical-sidebar.vue";
import PosHeader from "@/views/layouts/pos-header.vue";
import HorizontalHeader from "@/views/layouts/horizontal-header.vue";
import PosLoader from "@/views/layouts/pos-loader.vue";

/********* Breadcrumb component**********/
import Breadcrumb from "@/components/breadcrumb/layout-breadcrumb.vue";
import CounterIndex from "@/components/counter-index.vue";
import PosCounter from "@/views/pages/pos/pos-counter.vue";
import CheckCounter from "@/views/pages/application/ecommerce/check-counter.vue";
import PosCounter2 from "@/views/pages/pos/pos-2/pos-counter-2.vue";

/********* Page component**********/

import Product_Header from "@/views/pages/inventory/product-list/product-header.vue";
import Inputsize from "@/views/pages/uiinterface/forms/form-elements/formbasic/input-size.vue";
import Carouselthree from "@/views/pages/uiinterface/baseui/carousel/carousel-three.vue";
import Carouseltwo from "@/views/pages/uiinterface/baseui/carousel/carousel-two.vue";
import Carouselone from "@/views/pages/uiinterface/baseui/carousel/carousel-one.vue";
import LightBoxOne from "@/views/pages/uiinterface/baseui/lightbox/lightbox-one.vue";
import LightBoxTwo from "@/views/pages/uiinterface/baseui/lightbox/lightbox-two.vue";
import Payment from "@/views/pages/reports/supplier-report/pos-payment.vue";
import Return from "@/views/pages/reports/supplier-report/pos-return.vue";
import Salestax_Report from "@/views/pages/reports/tax-report/salestax-report.vue";
import Out_Of_Stocks from "@/views/pages/inventory/low-stocks/out-of-stocks.vue";
import socialImage from '@/views/pages/application/social-image.vue';
import socialCarousel from '@/views/pages/application/social-carousel.vue';
import allKanban from '@/views/pages/application/kanban-view/all-kanban.vue';
import highKanban from '@/views/pages/application/kanban-view/high-kanban.vue';
import lowKanban from '@/views/pages/application/kanban-view/low-kanban.vue';
import mediumKanban from '@/views/pages/application/kanban-view/medium-kanban.vue';
import NotesCarousel from "@/views/pages/application/notes-carousel.vue";
import VectorMap from "@/views/pages/dashboard/vector-map.vue";


import SubscriptionTable from "@/views/pages/super-admin/subscription/subscription-table.vue";
import PackagesTable from "@/views/pages/super-admin/packages/packages-table.vue";
import DomainTable from "@/views/pages/super-admin/domain/domain-table.vue";
import PurchaseTable from "@/views/pages/super-admin/purchase/purchase-table.vue";
import CallHistoryTable from "@/views/pages/application/call/call-history-table.vue";
import recentFile from '@/views/pages/application/files/recent-file.vue';
import recentFolder from '@/views/pages/application/files/recent-folder.vue';
import recentVideo from '@/views/pages/application/files/recent-video.vue';
import AllPos1 from "@/views/pages/pos/pos-1/all-pos1.vue";
import headphonesPos1 from "@/views/pages/pos/pos-1/headphones-pos1.vue";
import shoesPos1 from "@/views/pages/pos/pos-1/shoes-pos1.vue";
import mobilesPos1 from "@/views/pages/pos/pos-1/mobiles-pos1.vue";
import watchesPos1 from "@/views/pages/pos/pos-1/watches-pos1.vue";
import laptopsPos1 from "@/views/pages/pos/pos-1/laptops-pos1.vue";
import appliancesPos1 from "@/views/pages/pos/pos-1/appliances-pos1.vue";
import AllPos2 from "@/views/pages/pos/pos-2/all-pos2.vue";
import headphonesPos2 from "@/views/pages/pos/pos-2/headphones-pos2.vue";
import shoesPos2 from "@/views/pages/pos/pos-2/shoes-pos2.vue";
import mobilesPos2 from "@/views/pages/pos/pos-2/mobiles-pos2.vue";
import watchesPos2 from "@/views/pages/pos/pos-2/watches-pos2.vue";
import laptopsPos2 from "@/views/pages/pos/pos-2/laptops-pos2.vue";
import AllPos4 from "@/views/pages/pos/pos-4/all-pos4.vue";
import shoesPos4 from "@/views/pages/pos/pos-4/shoes-pos4.vue";
import homeneedPos4 from "@/views/pages/pos/pos-4/homeneed-pos4.vue";
import laptopsPos4 from "@/views/pages/pos/pos-4/laptops-pos4.vue";
import watchesPos4 from "@/views/pages/pos/pos-4/watches-pos4.vue";
import mobilesPos4 from "@/views/pages/pos/pos-4/mobiles-pos4.vue";
import headphonesPos4 from "@/views/pages/pos/pos-4/headphones-pos4.vue";
import headphonesonePos4 from "@/views/pages/pos/pos-4/headphonesone-pos4.vue";
import AllPos5 from "@/views/pages/pos/pos-5/all-pos5.vue";
import shoesPos5 from "@/views/pages/pos/pos-5/shoes-pos5.vue";
import homeneedPos5 from "@/views/pages/pos/pos-5/homeneed-pos5.vue";
import laptopsPos5 from "@/views/pages/pos/pos-5/laptops-pos5.vue";
import watchesPos5 from "@/views/pages/pos/pos-5/watches-pos5.vue";
import mobilesPos5 from "@/views/pages/pos/pos-5/mobiles-pos5.vue";
import headphonesPos5 from "@/views/pages/pos/pos-5/headphones-pos5.vue";
import headphonesonePos5 from "@/views/pages/pos/pos-5/headphonesone-pos5.vue";
import Pos5Carousel from "@/views/pages/pos/pos-5/pos5-carousel.vue";
import Pos4Carousel from "@/views/pages/pos/pos-4/pos4-carousel.vue";
import AccountListTable from "@/views/pages/finance/account-list-table.vue";
import AccountTypeTable from "@/views/pages/finance/account-type-table.vue";

/********* Modal component**********/
import ManageStocksModal from "@/components/modal/manage-stocks-modal.vue";
import StockTransferModal from "@/components/modal/stock-transfer-modal.vue";
import StockAdjustmentModal from "@/components/modal/stock-adjustment-modal.vue";
import purchaseListModal from "@/components/modal/purchase-list-modal.vue";
import purchaseReturnsModal from "@/components/modal/purchase-returns-modal.vue";
import ProductlistModal from "@/components/modal/product-list-modal.vue";
import AddProductModal from "@/components/modal/add-product-modal.vue";
import ExpiredProductsModal from "@/components/modal/expired-products-modal.vue";
import ExpensesListModal from "@/components/modal/expenses-list-modal.vue";
import CustomersModal from "@/components/modal/customers-modal.vue";
import CategoryListModal from "@/components/modal/category-list-modal.vue";
import SubCategoriesModal from "@/components/modal/sub-categories-modal.vue";
import BrandListModal from "@/components/modal/brand-list-modal.vue";
import WarrantyModal from "@/components/modal/warranty-modal.vue";
import UnitsModal from "@/components/modal/units-modal.vue";
import VariantAttributesModal from "@/components/modal/varriant-attributes-modal.vue";
import BarcodeModal from "@/components/modal/barcode-modal.vue";
import UsersListModal from "@/components/modal/users-list-modal.vue";
import RolesPermissionsModal from "@/components/modal/roles-permissions-modal.vue";
import WarehouseModal from "@/components/modal/warehouse-modal.vue";
import SalesListModal from "@/components/modal/sales-list-modal.vue";
import SalesReturnsModal from "@/components/modal/sales-returns-modal.vue";
import SuppliersModal from "@/components/modal/suppliers-modal.vue";
import StoreListModal from "@/components/modal/store-list-modal.vue";
import CitiesModal from "@/components/modal/cities-modal.vue";
import StatesModal from "@/components/modal/states-modal.vue";
import CountriesModal from "@/components/modal/countries-modal.vue";
import CalendarModal from "@/components/modal/calendar-modal.vue";
import PosModal from "@/components/modal/pos-modal.vue";
import calculatorModal from "@/components/modal/calculator-modal.vue";
import TodoModal from "@/components/modal/todo-modal.vue";
import QuotationListModal from "@/components/modal/quotation-list-modal.vue";
import DepartmentGridModal from "@/components/modal/department-grid-modal.vue";
import DepartmentListModal from "@/components/modal/department-list-modal.vue";
import DesignationModal from "@/components/modal/designation-modal.vue";
import ShiftModal from "@/components/modal/shift-modal.vue";
import LeaveTypesModal from "@/components/modal/leave-types-modal.vue";
import LeavesEmployeeModal from "@/components/modal/leaves-employee-modal.vue";
import HolidayModal from "@/components/modal/holiday-modal.vue";
import PayrollListModal from "@/components/modal/payroll-list-modal.vue";
import SystemSettingsModal from "@/components/modal/system-settings-modal.vue";
import SocialModal from "@/components/modal/social-modal.vue";
import LanguageSettingsWebModal from "@/components/modal/language-settings-web-modal.vue";
import EmailSettingsModal from "@/components/modal/email-settings-modal.vue";
import SmsGatewayModal from "@/components/modal/sms-gateway-modal.vue";
import CustomFieldsModal from "@/components/modal/custom-fields-modal.vue";
import PaymentGatewaySettingsModal from "@/components/modal/payment-gateway-settings-modal.vue";
import PrinterModal from "@/components/modal/printer-modal.vue";
import BankSettingsGridModal from "@/components/modal/bank-settings-grid-modal.vue";
import TaxRatesModal from "@/components/modal/tax-rates-modal.vue";
import CurrencySettingsModal from "@/components/modal/currency-settings-modal.vue";
import StorageSettingsModal from "@/components/modal/storage-settings-modal.vue";
import BanIpAddressModal from "@/components/modal/ban-ip-address-modal.vue";
import FileManagerModal from "@/components/modal/file-manager-modal.vue";
import NotesModal from "@/components/modal/notes-modal.vue";
import SecuritySettingsModal from "@/components/modal/security-settings-modal.vue";
import signatureModal from "@/components/modal/signature-modal.vue";
import CompaniesModal from "@/components/modal/companies-modal.vue";
import SubscriptionModal from "@/components/modal/subscription-modal.vue";
import PackagesModal from "@/components/modal/packages-modal.vue";
import DomainModal from "@/components/modal/domain-modal.vue";
import PurchaseModal from "@/components/modal/purchase-modal.vue";
import CallHistoryModal from "@/components/modal/call-history-modal.vue";
import ContactsModal from "@/components/modal/contacts-modal.vue";
import faqModal from "@/components/modal/faq-modal.vue";
import testimonialsModal from "@/components/modal/testimonials-modal.vue";
import blogCategoriesModal from "@/components/modal/blog-categories-modal.vue";
import pagesModal from "@/components/modal/pages-modal.vue";
import TodoListModal from "@/components/modal/todo-list-modal.vue";
import ProductsModal from "@/components/modal/products-modal.vue";
import OrdersModal from "@/components/modal/orders-modal.vue";
import CheckoutModal from "./components/modal/checkout-modal.vue";
import WishlistModal from "./components/modal/wishlist-modal.vue";
import ReviewsModal from "./components/modal/reviews-modal.vue";
import pos5Modal from "@/components/modal/pos-5-modal.vue";
import PosOneModal from "@/components/modal/pos-one-modal.vue";
import PosTwoModal from "@/components/modal/pos-two-modal.vue";
import LowStocksModal from "@/components/modal/low-stocks-modal.vue";
import CouponsModal from "@/components/modal/coupons-modal.vue";
import GiftCardsModal from "@/components/modal/gift-cards-modal.vue";
import DiscountPlanModal from "@/components/modal/discount-plan-modal.vue";
import DiscountListModal from "@/components/modal/discount-list-modal.vue";
import ExpensesCategoryModal from "@/components/modal/expenses-category-modal.vue";
import IncomeListModal from "@/components/modal/income-list-modal.vue";
import IncomeCategoryModal from "@/components/modal/income-category-modal.vue";
import AccountListModal from "@/components/modal/account-list-modal.vue";
import MoneyTransferModal from "@/components/modal/money-transfer-modal.vue";
import BillersModal from "@/components/modal/billers-modal.vue";
import onlineOrdersModal from "@/components/modal/online-orders-modal.vue";
import AllBlogModal from "@/components/modal/all-blog-modal.vue";
import DashboardModal from "@/components/modal/dashboard-modal.vue";
import blogTagsModal from "@/components/modal/blog-tags-modal.vue";



import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "boxicons/css/boxicons.min.css";
import "pe7-icon/dist/dist/pe-icon-7-stroke.css";
import "typicons.font/src/font/typicons.css";
import "weathericons/css/weather-icons.css";
import "ionicons-npm/css/ionicons.css";
import "@/assets/css/sticky.css";
import '@/assets/css/tabler-icons.css'
import 'remixicon/fonts/remixicon.css';
import 'leaflet/dist/leaflet.css';
import "@/assets/css/feather.css"; 
import '@/assets/scss/main.scss'


const app = createApp(App);

/********* Layout component**********/
app.component("layout-header", Header);
app.component("layout-rtl-header", HeaderRtl);
app.component("layout-sidebar", Sidebar);
app.component("files-sidebar", FilesSidebar);
app.component("settings-sidebar", Settings_Sidebar);
app.component("two-col-sidebar", TwoCol_Sidebar);
app.component("theme-settings", ThemeSettings);
app.component('vertical-sidebar', verticalSidebar)
app.component('pos-header', PosHeader)
app.component('horizontal-header', HorizontalHeader)
app.component('pos-loader', PosLoader)

/********* Breadcrumb component**********/
app.component("layout-breadcrumb", Breadcrumb);
app.component('counter-index', CounterIndex)
app.component('pos-counter', PosCounter)
app.component('checkout-counter', CheckCounter)
app.component('pos-counter-2', PosCounter2)

/********* Page component**********/
app.component("product-header", Product_Header);
app.component("input-size", Inputsize);
app.component("carousel-one", Carouselone);
app.component("carousel-two", Carouseltwo);
app.component("carousel-three", Carouselthree);
app.component("lightbox-one", LightBoxOne);
app.component("lightbox-two", LightBoxTwo);
app.component("pos-payment", Payment);
app.component("pos-return", Return);
app.component("salestax-report", Salestax_Report);
app.component("out-of-stocks", Out_Of_Stocks);
app.component('social-image',socialImage)
app.component('social-carousel',socialCarousel)
app.component('all-kanban',allKanban)
app.component('high-kanban',highKanban)
app.component('low-kanban',lowKanban)
app.component('medium-kanban',mediumKanban)
app.component("notes-carousel", NotesCarousel);
app.component("vector-map", VectorMap);

app.component('subscription-table', SubscriptionTable)
app.component('packages-table', PackagesTable)
app.component('domain-table', DomainTable)
app.component('purchase-table', PurchaseTable)
app.component('call-history-table', CallHistoryTable)
app.component('recent-file',recentFile)
app.component('recent-folder',recentFolder)
app.component('recent-video',recentVideo)
app.component('all-pos1',AllPos1)
app.component('headphones-pos1',headphonesPos1)
app.component('shoes-pos1',shoesPos1)
app.component('mobiles-pos1',mobilesPos1)
app.component('watches-pos1',watchesPos1)
app.component('laptops-pos1',laptopsPos1)
app.component('appliances-pos1',appliancesPos1)
app.component('all-pos2',AllPos2)
app.component('headphones-pos2',headphonesPos2)
app.component('shoes-pos2',shoesPos2)
app.component('mobiles-pos2',mobilesPos2)
app.component('watches-pos2',watchesPos2)
app.component('laptops-pos2',laptopsPos2)
app.component('all-pos4',AllPos4)
app.component('homeneed-pos4',homeneedPos4)
app.component('headphones-pos4',headphonesPos4)
app.component('headphonesone-pos4',headphonesonePos4)
app.component('shoes-pos4',shoesPos4)
app.component('laptops-pos4',laptopsPos4)
app.component('watches-pos4',watchesPos4)
app.component('mobiles-pos4',mobilesPos4)
app.component('all-pos5',AllPos5)
app.component('homeneed-pos5',homeneedPos5)
app.component('headphones-pos5',headphonesPos5)
app.component('headphonesone-pos5',headphonesonePos5)
app.component('shoes-pos5',shoesPos5)
app.component('laptops-pos5',laptopsPos5)
app.component('watches-pos5',watchesPos5)
app.component('mobiles-pos5',mobilesPos5)
app.component('pos5-carousel',Pos5Carousel)
app.component('pos4-carousel',Pos4Carousel)
app.component('account-list-table', AccountListTable)
app.component('account-type-table', AccountTypeTable)

/********* Modal component**********/
app.component("manage-stocks-modal", ManageStocksModal);
app.component("stock-transfer-modal", StockTransferModal);
app.component("stock-adjustment-modal", StockAdjustmentModal);
app.component("purchase-list-modal", purchaseListModal);
app.component("purchase-returns-modal", purchaseReturnsModal);
app.component("product-list-modal", ProductlistModal);
app.component("add-product-modal", AddProductModal);
app.component("expired-products-modal", ExpiredProductsModal);
app.component("expenses-list-modal", ExpensesListModal);
app.component("customers-modal", CustomersModal);
app.component("category-list-modal", CategoryListModal);
app.component("sub-categories-modal", SubCategoriesModal);
app.component("brand-list-modal", BrandListModal);
app.component("warranty-modal", WarrantyModal);
app.component("units-modal", UnitsModal);
app.component("varriant-attributes-modal", VariantAttributesModal);
app.component("barcode-modal", BarcodeModal);
app.component("users-list-modal", UsersListModal);
app.component("roles-permissions-modal", RolesPermissionsModal);
app.component("warehouse-modal", WarehouseModal);
app.component("sales-list-modal", SalesListModal);
app.component("sales-returns-modal", SalesReturnsModal);
app.component("suppliers-modal", SuppliersModal);
app.component("store-list-modal", StoreListModal);
app.component("cities-modal", CitiesModal);
app.component("states-modal", StatesModal);
app.component("countries-modal", CountriesModal);
app.component("calendar-modal", CalendarModal);
app.component("calculator-modal", calculatorModal);
app.component("pos-modal", PosModal);
app.component("todo-modal", TodoModal);
app.component("quotation-list-modal", QuotationListModal);
app.component("department-grid-modal", DepartmentGridModal);
app.component("department-list-modal", DepartmentListModal);
app.component("designation-modal", DesignationModal);
app.component("shift-modal", ShiftModal);
app.component("leave-types-modal", LeaveTypesModal);
app.component("leaves-employee-modal", LeavesEmployeeModal);
app.component("holiday-modal", HolidayModal);
app.component("payroll-list-modal", PayrollListModal);
app.component("system-settings-modal", SystemSettingsModal);
app.component("social-modal", SocialModal);
app.component("language-settings-web-modal", LanguageSettingsWebModal);
app.component("email-settings-modal", EmailSettingsModal);
app.component("sms-gateway-modal", SmsGatewayModal);
app.component("custom-fields-modal", CustomFieldsModal);
app.component("payment-gateway-settings-modal", PaymentGatewaySettingsModal);
app.component("printer-modal", PrinterModal);
app.component("bank-settings-grid-modal", BankSettingsGridModal);
app.component("tax-rates-modal", TaxRatesModal);
app.component("currency-settings-modal", CurrencySettingsModal);
app.component("storage-settings-modal", StorageSettingsModal);
app.component("ban-ip-address-modal", BanIpAddressModal);
app.component("file-manager-modal", FileManagerModal);
app.component("notes-modal", NotesModal);
app.component("security-settings-modal",SecuritySettingsModal)
app.component("signature-modal",signatureModal)
app.component('companies-modal', CompaniesModal)
app.component('subscription-modal', SubscriptionModal)
app.component('packages-modal', PackagesModal)
app.component('domain-modal', DomainModal)
app.component('purchase-modal', PurchaseModal)
app.component('call-history-modal', CallHistoryModal)
app.component('contacts-modal', ContactsModal)
app.component('faq-modal',faqModal)
app.component('testimonials-modal',testimonialsModal)
app.component('blog-categories-modal',blogCategoriesModal)
app.component('pages-modal',pagesModal)
app.component('todo-list-modal', TodoListModal)
app.component('products-modal', ProductsModal)
app.component('orders-modal', OrdersModal)
app.component('checkout-modal', CheckoutModal)
app.component('wishlist-modal', WishlistModal)
app.component('reviews-modal', ReviewsModal)
app.component('pos5-modal', pos5Modal)
app.component('pos-one-modal', PosOneModal)
app.component('pos-two-modal', PosTwoModal)
app.component('low-stocks-modal', LowStocksModal)
app.component('coupons-modal', CouponsModal)
app.component('gift-cards-modal', GiftCardsModal)
app.component('discount-plan-modal', DiscountPlanModal)
app.component('discount-list-modal', DiscountListModal)
app.component('expenses-category-modal', ExpensesCategoryModal)
app.component('income-list-modal', IncomeListModal)
app.component('income-category-modal', IncomeCategoryModal)
app.component('account-list-modal', AccountListModal)
app.component('money-transfer-modal', MoneyTransferModal)
app.component('billers-modal', BillersModal)
app.component('online-orders-modal',onlineOrdersModal)
app.component('all-blog-modal', AllBlogModal)
app.component('dashboard-modal', DashboardModal)
app.component('blog-tags-modal', blogTagsModal)

app.component(VueFeather.name, VueFeather);
app.component("vue-select", VueSelect);
app.component("date-picker", DatePicker);
app.component('IconHome', IconHome);
app.use(VueApexCharts);
app.use(FlagIcon)
app.use(VueEasyLightbox)
.use(Antd)
app.use(router).mount('#app'); 
