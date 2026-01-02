<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="table-tab">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <router-link to="/reports/tax-report" class="nav-link" 
              >Purchase tax</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/reports/sales-tax" class="nav-link">Sales Tax</router-link>
          </li>
        </ul>
      </div>
      <div>
        <div class="page-header">
          <div class="add-item d-flex">
            <div class="page-title">
              <h4>Purchase Tax</h4>
              <h6>View Reports of Purchase Tax</h6>
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
            <form @submit.prevent="submitForm">
              <div class="row align-items-end">
                <div class="col-lg-10">
                  <div class="row">
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label class="form-label">Choose Date</label>
                        <div class="input-icon-start position-relative">
                          <input
                            type="text"
                            ref="dateRangeInput"
                            class="form-control date-range bookingrange"
                            placeholder="dd/mm/yyyy - dd/mm/yyyy"
                          />
                          <span class="input-icon-left">
                            <i class="ti ti-calendar"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label class="form-label">Store</label>
                        <vue-select :options="BazarSel" v-model="selected" placeholder="All" />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label class="form-label">Supplier</label>
                        <vue-select :options="ApexComp" v-model="selectedOne" placeholder="All" />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label class="form-label">Payment Method</label>
                        <vue-select :options="PayMe" v-model="selectedTwo" placeholder="All" />
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
              <h4>Purchase Tax Report</h4>
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
                    <th>Reference</th>
                    <th>Supplier</th>
                    <th>Date</th>
                    <th>Store</th>
                    <th>Amount</th>
                    <th>Payment Method</th>
                    <th>Discount</th>
                    <th>Tax Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><a href="#" class="text-orange">#4237300</a></td>
                    <td>Apex Computers</td>
                    <td>24 Dec 2024</td>
                    <td>Electro Mart</td>
                    <td>$200</td>
                    <td>Stripe</td>
                    <td>$200</td>
                    <td>$200</td>
                  </tr>
                  <tr>
                    <td><a href="#" class="text-orange">#7590325</a></td>
                    <td>Beats Headphones</td>
                    <td>10 Dec 2024</td>
                    <td>Quantum Gadgets</td>
                    <td>$50</td>
                    <td>Paypal</td>
                    <td>$50</td>
                    <td>$50</td>
                  </tr>
                  <tr>
                    <td><a href="#" class="text-orange">#9814521</a></td>
                    <td>Dazzle Shoes</td>
                    <td>27 Nov 2024</td>
                    <td>Prime Bazaar</td>
                    <td>$800</td>
                    <td>Cash</td>
                    <td>$800</td>
                    <td>$800</td>
                  </tr>
                  <tr>
                    <td><a href="#" class="text-orange">#8745225</a></td>
                    <td>Best Accessories</td>
                    <td>18 Nov 2024</td>
                    <td>Gadget World</td>
                    <td>$100</td>
                    <td>Paypal</td>
                    <td>$100</td>
                    <td>$100</td>
                  </tr>
                  <tr>
                    <td><a href="#" class="text-orange">#4237022</a></td>
                    <td>A-Z Store</td>
                    <td>06 Nov 2024</td>
                    <td>Volt Vault</td>
                    <td>$700</td>
                    <td>Cash</td>
                    <td>$700</td>
                    <td>$700</td>
                  </tr>
                  <tr>
                    <td><a href="#" class="text-orange">#8744439</a></td>
                    <td>Hatimi Hardwares</td>
                    <td>25 Oct 2024</td>
                    <td>Elite Retail</td>
                    <td>$1000</td>
                    <td>Cash</td>
                    <td>$1000</td>
                    <td>$1000</td>
                  </tr>
                  <tr>
                    <td><a href="#" class="text-orange">#7590365</a></td>
                    <td>Aesthetic Bags</td>
                    <td>14 Oct 2024</td>
                    <td>Prime Mart</td>
                    <td>$1200</td>
                    <td>Paypal</td>
                    <td>$1200</td>
                    <td>$1200</td>
                  </tr>
                  <tr>
                    <td><a href="#" class="text-orange">#8745478</a></td>
                    <td>Alpha Mobiles</td>
                    <td>03 Oct 2024</td>
                    <td>NeoTech Store</td>
                    <td>$750</td>
                    <td>Stripe</td>
                    <td>$750</td>
                    <td>$750</td>
                  </tr>
                  <tr>
                    <td><a href="#" class="text-orange">#7590321</a></td>
                    <td>Sigma Chairs</td>
                    <td>20 Sep 2024</td>
                    <td>Urban Mart</td>
                    <td>$450</td>
                    <td>Stripe</td>
                    <td>$450</td>
                    <td>$450</td>
                  </tr>
                  <tr>
                    <td><a href="#" class="text-orange">#8745245</a></td>
                    <td>Zenith Bags</td>
                    <td>10 Sep 2024</td>
                    <td>Travel Mart</td>
                    <td>$300</td>
                    <td>Cash</td>
                    <td>$300</td>
                    <td>$300</td>
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
        <a href="javascript:void(0);" class="text-orange">Dreams</a>
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
      BazarSel: [
        {label: "All", value: "All"}, 
        {label: "Electro Mart", value: "Electro Mart"}, 
        {label: "Quantum Gadgets", value: "Quantum Gadgets"}, 
        {label: "Prime Bazaar", value: "Prime Bazaar"}, 
      ],
      ApexComp: [
        {label: "All", value: "All"}, 
        {label: "Apex Computers", value: "Apex Computers"}, 
        {label: "Beats Headphones", value: "Beats Headphones"}, 
        {label: "Dazzle Shoes", value: "Dazzle Shoes"}, 
      ],
      PayMe: [
        {label: "All", value: "All"}, 
        {label: "Stripe", value: "Stripe"}, 
        {label: "Paypal", value: "Paypal"}, 
        {label: "Cash", value: "Cash"}, 
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
