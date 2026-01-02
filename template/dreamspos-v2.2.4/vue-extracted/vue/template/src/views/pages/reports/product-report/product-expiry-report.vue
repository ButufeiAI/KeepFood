<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="table-tab">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <router-link class="nav-link" to="/product-report/product-report"
              >Product Report</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/product-report/product-expiry-report"
              >Product Expiry Report</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/product-report/product-quantity-alert"
              >Product Quantity Alert</router-link
            >
          </li>
        </ul>
      </div>
      <div>
        <div class="page-header">
          <div class="add-item d-flex">
            <div class="page-title">
              <h4>Product Expiry Report</h4>
              <h6>View Reports of Products</h6>
            </div>
          </div>
          <ul class="table-top-head">
            <li class="me-2">
              <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"
                ><i class="ti ti-refresh"></i
              ></a>
            </li>
            <li>
              <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" @click="toggleHeader"><i class="ti ti-chevron-up"></i></a>
            </li>
          </ul>
        </div>
        <div class="card border-0">
          <div class="card-body pb-1">
            <form action="#">
              <div class="row align-items-end">
                <div class="col-lg-10">
                  <div class="row">
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label class="form-label">Choose Date</label>
                        <div class="input-icon-start position-relative">
                          <input
                            type="text"
                            class="form-control date-range bookingrange"
                            placeholder="dd/mm/yyyy - dd/mm/yyyy"
                            ref="dateRangeInput"
                          />
                          <span class="input-icon-left">
                            <i class="ti ti-calendar"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-9">
                      <div class="row">
                        <div class="col-lg-3 col-md-4 col-sm-6">
                          <div class="mb-3">
                            <label class="form-label">Store</label>
                            <vue-select
                              :options="GadgetsSto"
                              v-model="selected"
                              placeholder="All"
                            />
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                          <div class="mb-3">
                            <label class="form-label">Category</label>
                            <vue-select
                              :options="ElectSel"
                              v-model="selectedOne"
                              placeholder="All"
                            />
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                          <div class="mb-3">
                            <label class="form-label">Brand</label>
                            <vue-select
                              :options="BrandPro"
                              v-model="selectedTwo"
                              placeholder="All"
                            />
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                          <div class="mb-3">
                            <label class="form-label">Product</label>
                            <vue-select
                              :options="ProductPro"
                              v-model="selectedThree"
                              placeholder="All"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-2">
                  <div class="mb-3">
                    <button class="btn btn-primary w-100" type="submit">
                      Generate Report
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <!-- /product list -->
        <div class="card table-list-card no-search">
          <div
            class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3"
          >
            <div>
              <h4>Product Expiry Report</h4>
            </div>
            <ul class="table-top-head">
              <li class="me-2">
                <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"
                  ><img src="@/assets/img/icons/pdf.svg" alt="img"
                /></a>
              </li>
              <li class="me-2">
                <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"
                  ><img src="@/assets/img/icons/excel.svg" alt="img"
                /></a>
              </li>
              <li>
                <a data-bs-toggle="tooltip" data-bs-placement="top" title="Print"
                  ><i class="ti ti-printer"></i
                ></a>
              </li>
            </ul>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table datatable">
                <thead class="thead-light">
                  <tr>
                    <th>SKU</th>
                    <th>Serial No</th>
                    <th>Product Name</th>
                    <th>Manufactured Date</th>
                    <th>Expired Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><a href="#" class="text-orange">PT001</a></td>
                    <td>LNV-IP3-8GB-256SSD-BL</td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a href="#" class="avatar avatar-md"
                          ><img
                            src="@/assets/img/products/stock-img-01.png"
                            class="img-fluid"
                            alt="img"
                        /></a>
                        <div class="ms-2">
                          <p class="text-dark mb-0"><a href="#">Lenovo IdeaPad 3</a></p>
                        </div>
                      </div>
                    </td>
                    <td>24 Dec 2024</td>
                    <td>20 Dec 2026</td>
                  </tr>
                  <tr>
                    <td><a href="#" class="text-orange">PT002</a></td>
                    <td>LNV-IP3-8GB-256SSD-BL</td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a href="#" class="avatar avatar-md"
                          ><img
                            src="@/assets/img/products/stock-img-06.png"
                            class="img-fluid"
                            alt="img"
                        /></a>
                        <div class="ms-2">
                          <p class="text-dark mb-0"><a href="#">Beats Pro </a></p>
                        </div>
                      </div>
                    </td>
                    <td>25 Dec 2024</td>
                    <td>21 Dec 2026</td>
                  </tr>
                  <tr>
                    <td><a href="#" class="text-orange">PT003</a></td>
                    <td>LNV-IP3-8GB-256SSD-BL</td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a href="#" class="avatar avatar-md"
                          ><img
                            src="@/assets/img/products/stock-img-02.png"
                            class="img-fluid"
                            alt="img"
                        /></a>
                        <div class="ms-2">
                          <p class="text-dark mb-0"><a href="#">Nike Jordan</a></p>
                        </div>
                      </div>
                    </td>
                    <td>26 Dec 2024</td>
                    <td>22 Dec 2026</td>
                  </tr>
                  <tr>
                    <td><a href="#" class="text-orange">PT004</a></td>
                    <td>LNV-IP3-8GB-256SSD-BL</td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a href="#" class="avatar avatar-md"
                          ><img
                            src="@/assets/img/products/stock-img-03.png"
                            class="img-fluid"
                            alt="img"
                        /></a>
                        <div class="ms-2">
                          <p class="text-dark mb-0">
                            <a href="#">Apple Series 5 Watch</a>
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>30 Dec 2024</td>
                    <td>25 Dec 2026</td>
                  </tr>
                  <tr>
                    <td><a href="#" class="text-orange">PT005</a></td>
                    <td>LNV-IP3-8GB-256SSD-BL</td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a href="#" class="avatar avatar-md"
                          ><img
                            src="@/assets/img/products/stock-img-04.png"
                            class="img-fluid"
                            alt="img"
                        /></a>
                        <div class="ms-2">
                          <p class="text-dark mb-0"><a href="#">Amazon Echo Dot</a></p>
                        </div>
                      </div>
                    </td>
                    <td>28 Dec 2024</td>
                    <td>26 Dec 2026</td>
                  </tr>
                  <tr>
                    <td><a href="#" class="text-orange">PT006</a></td>
                    <td>LNV-IP3-8GB-256SSD-BL</td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a href="#" class="avatar avatar-md"
                          ><img
                            src="@/assets/img/products/stock-img-05.png"
                            class="img-fluid"
                            alt="img"
                        /></a>
                        <div class="ms-2">
                          <p class="text-dark mb-0"><a href="#">Sanford Chair Sofa</a></p>
                        </div>
                      </div>
                    </td>
                    <td>24 Dec 2024</td>
                    <td>29 Dec 2026</td>
                  </tr>
                  <tr>
                    <td><a href="#" class="text-orange">PT007</a></td>
                    <td>LNV-IP3-8GB-256SSD-BL</td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a href="#" class="avatar avatar-md"
                          ><img
                            src="@/assets/img/products/expire-product-01.png"
                            class="img-fluid"
                            alt="img"
                        /></a>
                        <div class="ms-2">
                          <p class="text-dark mb-0">
                            <a href="#">Red Premium Satchel</a>
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>15 Dec 2024</td>
                    <td>30 Dec 2026</td>
                  </tr>
                  <tr>
                    <td><a href="#" class="text-orange">PT008</a></td>
                    <td>LNV-IP3-8GB-256SSD-BL</td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a href="#" class="avatar avatar-md"
                          ><img
                            src="@/assets/img/products/expire-product-02.png"
                            class="img-fluid"
                            alt="img"
                        /></a>
                        <div class="ms-2">
                          <p class="text-dark mb-0"><a href="#">Iphone 14 Pro</a></p>
                        </div>
                      </div>
                    </td>
                    <td>24 Dec 2024</td>
                    <td>20 Dec 2026</td>
                  </tr>
                  <tr>
                    <td><a href="#" class="text-orange">PT009</a></td>
                    <td>LNV-IP3-8GB-256SSD-BL</td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a href="#" class="avatar avatar-md"
                          ><img
                            src="@/assets/img/products/expire-product-03.png"
                            class="img-fluid"
                            alt="img"
                        /></a>
                        <div class="ms-2">
                          <p class="text-dark mb-0"><a href="#">Gaming Chair</a></p>
                        </div>
                      </div>
                    </td>
                    <td>30 Dec 2024</td>
                    <td>20 Dec 2026</td>
                  </tr>
                  <tr>
                    <td><a href="#" class="text-orange">PT010</a></td>
                    <td>LNV-IP3-8GB-256SSD-BL</td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a href="#" class="avatar avatar-md"
                          ><img
                            src="@/assets/img/products/expire-product-04.png"
                            class="img-fluid"
                            alt="img"
                        /></a>
                        <div class="ms-2">
                          <p class="text-dark mb-0"><a href="#">Borealis Backpack</a></p>
                        </div>
                      </div>
                    </td>
                    <td>24 Dec 2024</td>
                    <td>20 Dec 2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- /product list -->
      </div>
    </div>
    <div
      class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3"
    >
      <p class="mb-0">2014-2025 © DreamsPOS. All Right Reserved</p>
      <p>
        Designed &amp; Developed By
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>
</template>
<script>
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { ref } from "vue";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
export default {
  data() {
    return {
      selected: "All",
      selectedOne: "All",
      selectedTwo: "All",
      selectedThree: "All",
      GadgetsSto: [
        {label: "All", value: "All"}, 
        {label: "Electro Mart", value: "Electro Mart"}, 
        {label: "Quantum Gadgets", value: "Quantum Gadgets"}, 
        {label: "Prime Bazaar", value: "Prime Bazaar"}, 
      ],
      ElectSel: [
        {label: "All", value: "All"}, 
        {label: "Computers", value: "Computers"}, 
        {label: "Electronics", value: "Electronics"}, 
        {label: "Shoe", value: "Shoe"}, 
      ],
      BrandPro: [
        {label: "All", value: "All"}, 
        {label: "Lenovo", value: "Lenovo"}, 
        {label: "Beats", value: "Beats"},
        {label: "Nike", value: "Nike"}
      ],
      ProductPro: [
        {label: "All", value: "All"}, 
        {label: "Lenovo ideaPad 3", value: "Lenovo ideaPad 3"}, 
        {label: "Beats Pro", value: "Beats Pro"}, 
        {label: "Nike Jordan", value: "Nike Jordan"}, 
      ],
    };
  },
  setup() {
    const dateRangeInput = ref(null);
    function booking_range(start, end) {
      return start.format("M/D/YYYY") + " - " + end.format("M/D/YYYY");
    }

    onMounted(() => {
      if (dateRangeInput.value) {
        const start = moment().subtract(6, "days");
        const end = moment();

        new DateRangePicker(
          dateRangeInput.value,
          {
            startDate: start,
            endDate: end,
            ranges: {
              Today: [moment(), moment()],
              Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
              "Last 7 Days": [moment().subtract(6, "days"), moment()],
              "Last 30 Days": [moment().subtract(29, "days"), moment()],
              "This Month": [moment().startOf("month"), moment().endOf("month")],
              "Last Month": [
                moment().subtract(1, "month").startOf("month"),
                moment().subtract(1, "month").endOf("month"),
              ],
            },
          },
          booking_range
        );

        booking_range(start, end);
      }
    });

    return {
      dateRangeInput,
    };
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
