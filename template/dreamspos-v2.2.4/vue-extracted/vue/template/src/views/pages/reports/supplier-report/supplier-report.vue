<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="table-tab">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <router-link class="nav-link" to="/supplier-report/supplier-report"
              >Supplier Report</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/supplier-report/supplier-due-report"
              >Supplier Due</router-link
            >
          </li>
        </ul>
      </div>
      <div>
        <div class="page-header">
          <div class="add-item d-flex">
            <div class="page-title">
              <h4>Supplier Report</h4>
              <h6>View Reports of Supplier</h6>
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
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label class="form-label">Supplier</label>
                        <vue-select
                          :options="SupplBeats"
                          v-model="selected"
                          placeholder="All"
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label class="form-label">Status</label>
                        <vue-select :options="PendSat" v-model="selectedOne" placeholder="All" />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label class="form-label">Payment Method</label>
                        <vue-select :options="PaySup" v-model="selectedTwo" placeholder="All" />
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
          <div class="card-body">
            <div
              class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3"
            >
              <div>
                <h4>Supplier Report</h4>
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
            <div class="table-responsive">
              <table class="table datatable">
                <thead class="thead-light">
                  <tr>
                    <th>Reference</th>
                    <th>ID</th>
                    <th>Supplier</th>
                    <th>Total Items</th>
                    <th>Amount</th>
                    <th>Payment Method</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><a href="#" class="text-primary">INV/PO2025</a></td>
                    <td>SU001</td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a href="#" class="avatar avatar-md me-2">
                          <img src="@/assets/img/supplier/supplier-01.png" alt="Img" />
                        </a>
                        <h6 class="fw-medium"><a href="#">Apex Computers</a></h6>
                      </div>
                    </td>
                    <td>10</td>
                    <td>$1000</td>
                    <td>Cash</td>
                    <td>
                      <span
                        class="badge badge-success d-inline-flex align-items-center badge-xs"
                      >
                        Received
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="#" class="text-primary">INV/PO2031</a></td>
                    <td>SU002</td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a href="#" class="avatar avatar-md me-2">
                          <img src="@/assets/img/supplier/supplier-02.png" alt="Img" />
                        </a>
                        <h6 class="fw-medium"><a href="#">Beats Headphones</a></h6>
                      </div>
                    </td>
                    <td>15</td>
                    <td>$1500</td>
                    <td>Paypal</td>
                    <td>
                      <span
                        class="badge badge-cyan d-inline-flex align-items-center badge-xs"
                      >
                        Pending
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="#" class="text-primary">INV/PO2042</a></td>
                    <td>SU003</td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a href="#" class="avatar avatar-md me-2">
                          <img src="@/assets/img/supplier/supplier-03.png" alt="Img" />
                        </a>
                        <h6 class="fw-medium"><a href="#">Dazzle Shoes</a></h6>
                      </div>
                    </td>
                    <td>22</td>
                    <td>$1500</td>
                    <td>Paypal</td>
                    <td>
                      <span
                        class="badge badge-success d-inline-flex align-items-center badge-xs"
                      >
                        Received
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="#" class="text-primary">INV/PO2033</a></td>
                    <td>SU004</td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a href="#" class="avatar avatar-md me-2">
                          <img src="@/assets/img/supplier/supplier-04.png" alt="Img" />
                        </a>
                        <h6 class="fw-medium"><a href="#">Best Accessories</a></h6>
                      </div>
                    </td>
                    <td>14</td>
                    <td>$2000</td>
                    <td>Stripe</td>
                    <td>
                      <span
                        class="badge badge-warning d-inline-flex align-items-center badge-xs"
                      >
                        Ordered
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="#" class="text-primary">INV/PO2042</a></td>
                    <td>SU005</td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a href="#" class="avatar avatar-md me-2">
                          <img src="@/assets/img/supplier/supplier-05.png" alt="Img" />
                        </a>
                        <h6 class="fw-medium"><a href="#">A-Z Store</a></h6>
                      </div>
                    </td>
                    <td>12</td>
                    <td>$800</td>
                    <td>Paypal</td>
                    <td>
                      <span
                        class="badge badge-success d-inline-flex align-items-center badge-xs"
                      >
                        Received
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="#" class="text-primary">INV/PO2011</a></td>
                    <td>SU006</td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a href="#" class="avatar avatar-md me-2">
                          <img src="@/assets/img/supplier/supplier-06.png" alt="Img" />
                        </a>
                        <h6 class="fw-medium"><a href="#">Hatimi Hardwares</a></h6>
                      </div>
                    </td>
                    <td>45</td>
                    <td>$750</td>
                    <td>Cash</td>
                    <td>
                      <span
                        class="badge badge-cyan d-inline-flex align-items-center badge-xs"
                      >
                        Pending
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="#" class="text-primary">INV/PO2014</a></td>
                    <td>SU007</td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a href="#" class="avatar avatar-md me-2">
                          <img src="@/assets/img/supplier/supplier-07.png" alt="Img" />
                        </a>
                        <h6 class="fw-medium"><a href="#">Aesthetic Bags</a></h6>
                      </div>
                    </td>
                    <td>21</td>
                    <td>$1300</td>
                    <td>Credit Card</td>
                    <td>
                      <span
                        class="badge badge-success d-inline-flex align-items-center badge-xs"
                      >
                        Received
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="#" class="text-primary">INV/PO2047</a></td>
                    <td>SU009</td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a href="#" class="avatar avatar-md me-2">
                          <img src="@/assets/img/supplier/supplier-09.png" alt="Img" />
                        </a>
                        <h6 class="fw-medium"><a href="#">Sigma Chairs</a></h6>
                      </div>
                    </td>
                    <td>25</td>
                    <td>$2300</td>
                    <td>Credit Card</td>
                    <td>
                      <span
                        class="badge badge-warning d-inline-flex align-items-center badge-xs"
                      >
                        Ordered
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="#" class="text-primary">INV/PO2017</a></td>
                    <td>SU010</td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a href="#" class="avatar avatar-md me-2">
                          <img src="@/assets/img/supplier/supplier-10.png" alt="Img" />
                        </a>
                        <h6 class="fw-medium"><a href="#">Zenith Bags</a></h6>
                      </div>
                    </td>
                    <td>15</td>
                    <td>$1700</td>
                    <td>Stripe</td>
                    <td>
                      <span
                        class="badge badge-cyan d-inline-flex align-items-center badge-xs"
                      >
                        Pending
                      </span>
                    </td>
                  </tr>
                  <tr class="bg-secondary-transparent">
                    <td class="bg-secondary-transparent"><h6>Total</h6></td>
                    <td class="bg-secondary-transparent"></td>
                    <td class="bg-secondary-transparent"></td>
                    <td class="bg-secondary-transparent"></td>
                    <td class="bg-secondary-transparent"><h6>$33268.53</h6></td>
                    <td class="bg-secondary-transparent"></td>
                    <td class="bg-secondary-transparent"></td>
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
      SupplBeats: [
        {label: "All", value: "All"},
        {label: "Apex Computers", value: "Apex Computers"},
        {label: "Beats Headphones", value: "Beats Headphones"},
        {label: "Dazzle Shoes", value: "Dazzle Shoes"},
      ],
      PendSat: [
        {label: "All", value: "All"},
        {label: "Received", value: "Received"},
        {label: "Ordered", value: "Ordered"},
      ],
      PaySup: [
        {label: "All", value: "All"},
        {label: "Cash", value: "Cash"},
        {label: "Paypal", value: "Paypal"},
        {label: "Credit Card", value: "Credit Card"},
        {label: "Stripe", value: "Stripe"},
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
