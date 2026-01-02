// plugins/global.ts
import { defineNuxtPlugin } from '#app'
import VueApexCharts from "vue3-apexcharts";
import VueSelect from "vue3-select-component";
import DatePicker from "vue3-datepicker";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import VueEasyLightbox from "vue-easy-lightbox";
import VueFeather from 'vue-feather'
import Vue3Autocounter from 'vue3-autocounter';

// ✅ Import global CSS here
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
import 'remixicon/fonts/remixicon.css';
import '@tabler/icons-webfont/dist/tabler-icons.css';
import 'leaflet/dist/leaflet.css';
import "vue3-select-component/styles";
import "@/assets/css/feather.css"; 
import '@/assets/scss/main.scss'

// Common layout components

import LayoutsHeader from '~/components/common/layouts-header.vue';
import LayoutsSidebar from '~/components/common/layouts-sidebar.vue';
import VerticalSidebar from '~/components/common/vertical-sidebar.vue';


export default defineNuxtPlugin((nuxtApp) => {
  const app = nuxtApp.vueApp

  // ✅ Register global components

  // Common layout components
  app.component("layout-header", LayoutsHeader);
  app.component("layout-sidebar", LayoutsSidebar);
  app.component('vertical-sidebar', VerticalSidebar)

  app.component('vue3-autocounter', Vue3Autocounter)
  app.component("VueFeather", VueFeather);
  app.component("vue-select", VueSelect);
  app.component("date-picker", DatePicker);

  // ✅ Use plugins
  app.use(VueApexCharts);
  app.use(VueEasyLightbox);
  app.use(Antd);
})
