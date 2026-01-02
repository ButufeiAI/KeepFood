import { createApp } from "vue";
import { router } from './router';
import App from "./App.vue";
import Antd from 'ant-design-vue';
import Vue3Select from 'vue3-select-component'
import VueApexCharts from "vue3-apexcharts";

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import '@tabler/icons-webfont/dist/tabler-icons.css';
import "ant-design-vue/dist/reset.css";
import "@/assets/icons/lucide/lucide.css"
import '@/assets/scss/main.scss'

// ---------- Layout Component ---------- //

import LayoutsHeader from "@/views/layouts/layouts-header.vue";
import LayoutsSidebar from "@/views/layouts/layouts-sidebar.vue";
import PosHeader from "@/views/layouts/pos-header.vue";
import PosCounter from "@/components/pos-counter.vue";


// ---------- Pages Component ---------- //

import AllOrder from "@/views/pages/main-module/pos-page/all-order.vue";
import DineIn from "@/views/pages/main-module/pos-page/dine-in.vue";
import TakeAway from "@/views/pages/main-module/pos-page/take-away.vue";
import Delivery from "@/views/pages/main-module/pos-page/delivery.vue";
import AllTable from "@/views/pages/main-module/pos-page/all-table.vue";

// ---------- Modal Component ---------- //

import AddonsModal from "@/components/modal/addons-modal.vue";
import CategoriesModal from "@/components/modal/categories-modal.vue";
import ItemsModal from "@/components/modal/items-modal.vue";
import CouponsModal from "@/components/modal/coupons-modal.vue";
import OrdersModal from "@/components/modal/orders-modal.vue";
import KitchenModal from "@/components/modal/kitchen-modal.vue";
import ReservationModal from "@/components/modal/reservation-modal.vue";
import TablesModal from "@/components/modal/tables-modal.vue";
import CustomerModal from "@/components/modal/customer-modal.vue";
import InvoicesModal from "@/components/modal/invoices-modal.vue";
import PaymentsModal from "@/components/modal/payments-modal.vue";
import UsersModal from "@/components/modal/users-modal.vue";
import RolePermissionModal from "@/components/modal/role-permission-modal.vue";
import TaxSettingsModal from "@/components/modal/tax-settings-modal.vue";
import PosModal from "@/components/modal/pos-modal.vue";


const app = createApp(App);

// ---------- Layout Component ---------- //

app.component('layout-header', LayoutsHeader)
app.component('layout-sidebar', LayoutsSidebar)
app.component('pos-header', PosHeader)
app.component('pos-counter', PosCounter)

// ---------- Pages Component ---------- //
app.component('all-order', AllOrder)
app.component('dine-in', DineIn)
app.component('take-away', TakeAway)
app.component('delivery', Delivery)
app.component('all-table', AllTable)


// ---------- Modal Component ---------- //

app.component('addons-modal', AddonsModal)
app.component('categories-modal', CategoriesModal)
app.component('items-modal', ItemsModal)
app.component('coupons-modal', CouponsModal)
app.component('orders-modal', OrdersModal)
app.component('kitchen-modal', KitchenModal)
app.component('reservation-modal', ReservationModal)
app.component('tables-modal', TablesModal)
app.component('customer-modal', CustomerModal)
app.component('invoice-modal', InvoicesModal)
app.component('payments-modal', PaymentsModal)
app.component('uses-modal', UsersModal)
app.component('role-permission-modal', RolePermissionModal)
app.component('tax-settings-modal', TaxSettingsModal)
app.component('pos-modal', PosModal)


app.use(Antd)
app.use(VueApexCharts)
app.component('vue-select', Vue3Select);
app.use(router).mount('#app'); 
