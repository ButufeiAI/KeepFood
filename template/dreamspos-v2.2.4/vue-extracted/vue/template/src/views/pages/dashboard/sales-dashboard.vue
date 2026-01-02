<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>

  <div class="page-wrapper">
    <div class="content">
      <div class="welcome d-lg-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center welcome-text">
          <h3 class="d-flex align-items-center"><img src="@/assets/img/icons/hi.svg" alt="img">&nbsp;Hi John Smilga,</h3>&nbsp;<h6>here's what's happening with your store today.</h6>
        </div>
        <div class="d-flex align-items-center">
          <div class="input-icon-start position-relative me-2">
            <span class="input-icon-addon fs-16 text-gray-9">
              <i class="ti ti-calendar"></i>
            </span>
            <input type="text" class="form-control date-range bookingrange" ref="dateRangeInput" placeholder="Search Product">
          </div>
          <ul class="table-top-head">
            <li>
              <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"><i class="ti ti-refresh"></i></a>
            </li>
            <li>
              <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" @click="toggleHeader" id="collapse-header"><i class="ti ti-chevron-up"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row sales-cards">
        <div class="col-xl-6 col-sm-12 col-12 d-flex">
          <div
            class="card d-flex align-items-center justify-content-between flex-fill mb-4"
          >
            <div>
              <h6>Weekly Earning</h6>
              <h3>$<span class="counters" data-count="95000.45">95000.45</span></h3>
              <p class="sales-range">
                <span class="text-success"
                  ><vue-feather type="chevron-up"></vue-feather>48%&nbsp;</span
                >increase compare to last week
              </p>
            </div>
            <img src="@/assets/img/icons/weekly-earning.svg" alt="img" />
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12 d-flex">
          <div class="card color-info bg-primary flex-fill mb-4">
            <div class="mb-2">
              <img src="@/assets/img/icons/total-sales.svg" alt="img" />
            </div>
            <h3 class="counters" data-count="10000.00">10,000+</h3>
            <p>No of Total Sales</p>
            <vue-feather
              type="rotate-ccw"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Refresh"
            ></vue-feather>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12 d-flex">
          <div class="card color-info bg-secondary flex-fill mb-4">
            <div class="mb-2">
              <img src="@/assets/img/icons/purchased-earnings.svg" alt="img" />
            </div>
            <h3 class="counters" data-count="800.00">800+</h3>
            <p>No of Total Sales</p>
            <vue-feather
              type="rotate-ccw"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Refresh"
            ></vue-feather>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-12 col-xl-4 d-flex">
          <div class="card flex-fill w-100 mb-4">
            <div class="card-header d-flex justify-content-between align-items-center">
              <h4 class="card-title mb-0">Best Seller</h4>
              <a href="javascript:void(0);" class="btn btn-outline-light btn-sm"
                >View All</a
              >
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-borderless best-seller">
                  <tbody>
                    <tr>
                      <td class="pt-0 ps-0">
                        <div class="d-flex align-items-center">
                          <router-link to="/inventory/product-list" class="avatar avatar-lg me-2">
                            <img src="@/assets/img/products/stock-img-01.png" alt="img">
                          </router-link>
                          <div>
                            <h6><router-link to="/inventory/product-list" class="fw-bold">Lenovo 3rd Generation</router-link></h6>
                            <p>$4420</p>
                          </div>
                        </div>
                      </td>
                      <td class="pt-0">
                        <p class="text-gray-9 mb-1">Sales</p>
                        <p class="text-gray-9 fw-medium">6547</p>
                      </td>
                    </tr>
                    <tr>
                      <td class="ps-0">
                        <div class="d-flex align-items-center">
                          <router-link to="/inventory/product-list" class="avatar avatar-lg me-2">
                            <img src="@/assets/img/products/stock-img-02.png" alt="img">
                          </router-link>
                          <div>
                            <h6><router-link to="/inventory/product-list" class="fw-bold">Bold V3.2</router-link></h6>
                            <p>$1474</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p class="text-gray-9 mb-1">Sales</p>
                        <p class="text-gray-9 fw-medium">3474</p>
                      </td>
                    </tr>
                    <tr>
                      <td class="ps-0">
                        <div class="d-flex align-items-center">
                          <router-link to="/inventory/product-list" class="avatar avatar-lg me-2">
                            <img src="@/assets/img/products/stock-img-06.png" alt="img">
                          </router-link>
                          <div>
                            <h6><router-link to="/inventory/product-list" class="fw-bold">Nike Jordan</router-link></h6>
                            <p>$8784</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p class="text-gray-9 mb-1">Sales</p>
                        <p class="text-gray-9 fw-medium">1478</p>
                      </td>
                    </tr>
                    <tr>
                      <td class="ps-0">
                        <div class="d-flex align-items-center">
                          <router-link to="/inventory/product-list" class="avatar avatar-lg me-2">
                            <img src="@/assets/img/products/stock-img-03.png" alt="img">
                          </router-link>
                          <div>
                            <h6><router-link to="/inventory/product-list" class="fw-bold">Apple Series 5 Watch</router-link></h6>
                            <p>$3240</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p class="text-gray-9 mb-1">Sales</p>
                        <p class="text-gray-9 fw-medium">987</p>
                      </td>
                    </tr>
                    <tr>
                      <td class="ps-0">
                        <div class="d-flex align-items-center">
                          <router-link to="/inventory/product-list" class="avatar avatar-lg me-2">
                            <img src="@/assets/img/products/stock-img-04.png" alt="img">
                          </router-link>
                          <div>
                            <h6><router-link to="/inventory/product-list" class="fw-bold">Amazon Echo Dot</router-link></h6>
                            <p>$597</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p class="text-gray-9 mb-1">Sales</p>
                        <p class="text-gray-9 fw-medium">784</p>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-xl-8 d-flex">
          <div class="card flex-fill w-100 mb-4">
            <div class="card-header d-flex justify-content-between align-items-center">
              <h4 class="card-title mb-0">Recent Transactions</h4>
              <router-link
                to="/super-admin/purchase-transaction"
                class="btn btn-outline-light btn-sm"
                >View All</router-link
              >
            </div>
            <div class="card-body p-0">
              <div class="table-responsive">
                <table class="table table-borderless recent-transactions">
                  <thead class="thead-light">
                    <tr>
                      <th>#</th>
                      <th>Order Details</th>
                      <th>Payment</th>
                      <th>Status</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <div class="d-flex align-items-center">
                          <router-link to="/inventory/product-list" class="avatar avatar-lg me-2">
                            <img src="@/assets/img/products/stock-img-05.png" alt="img">
                          </router-link>
                          <div>
                            <h6><router-link to="/inventory/product-list" class="fw-bold">Lobar Handy</router-link></h6>
                            <span class="d-flex align-items-center"><i class="ti ti-clock"></i>15 Mins</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span class="d-block head-text">Paypal</span>
                        <span class="text-blue">#416645453773</span>
                      </td>
                      <td><span class="badge badge-success badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Success</span></td>
                      <td class="fs-16 fw-bold text-gray-9">$1,099.00</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <div class="d-flex align-items-center">
                          <router-link to="/inventory/product-list" class="avatar avatar-lg me-2">
                            <img src="@/assets/img/products/expire-product-01.png" alt="img">
                          </router-link>
                          <div>
                            <h6><router-link to="/inventory/product-list" class="fw-bold">Red Premium Handy</router-link></h6>
                            <span class="d-flex align-items-center"><i class="ti ti-clock"></i>15 Mins</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span class="d-block head-text">Apple Pay</span>
                        <span class="text-blue">#147784454554</span>
                      </td>
                      <td><span class="badge badge-danger badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Cancelled</span></td>
                      <td class="fs-16 fw-bold text-gray-9">$600.55</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <div class="d-flex align-items-center">
                          <router-link to="/inventory/product-list" class="avatar avatar-lg me-2">
                            <img src="@/assets/img/products/expire-product-02.png" alt="img">
                          </router-link>
                          <div>
                            <h6><router-link to="/inventory/product-list" class="fw-bold">Iphone 14 Pro</router-link></h6>
                            <span class="d-flex align-items-center"><i class="ti ti-clock"></i>15 Mins</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span class="d-block head-text">Stripe</span>
                        <span class="text-blue">#147784454554</span>
                      </td>
                      <td><span class="badge badge-cyan badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Completed</span></td>
                      <td class="fs-16 fw-bold text-gray-9">$1,099.00</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <div class="d-flex align-items-center">
                          <router-link to="/inventory/product-list" class="avatar avatar-lg me-2">
                            <img src="@/assets/img/products/expire-product-03.png" alt="img">
                          </router-link>
                          <div>
                            <h6><router-link to="/inventory/product-list" class="fw-bold">Black Slim 200</router-link></h6>
                            <span class="d-flex align-items-center"><i class="ti ti-clock"></i>15 Mins</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span class="d-block head-text">PayU</span>
                        <span class="text-blue">#147784454554</span>
                      </td>
                      <td><span class="badge badge-success badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Success</span></td>
                      <td class="fs-16 fw-bold text-gray-9">$1,569.00</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>
                        <div class="d-flex align-items-center">
                          <router-link to="/inventory/product-list" class="avatar avatar-lg me-2">
                            <img src="@/assets/img/products/expire-product-04.png" alt="img">
                          </router-link>
                          <div>
                            <h6><a to="/inventory/product-list" class="fw-bold">Woodcraft Sandal</a></h6>
                            <span class="d-flex align-items-center"><i class="ti ti-clock"></i>15 Mins</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span class="d-block head-text">Paytm</span>
                        <span class="text-blue">#147784454554</span>
                      </td>
                      <td><span class="badge badge-success badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Success</span></td>
                      <td class="fs-16 fw-bold text-gray-9">$1,478.00</td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Button trigger modal -->
      <div class="row sales-board">
        <div class="col-md-12 col-lg-7 col-sm-12 col-12 d-flex">
          <div class="card flex-fill flex-fill">
            <div class="card-header d-flex justify-content-between align-items-center">
              <h5 class="card-title mb-0">Sales Analytics</h5>
              <div class="graph-sets">
                <div class="dropdown dropdown-wraper">
                  <button
                    class="btn btn-white btn-sm dropdown-toggle d-flex align-items-center"
                    type="button"
                    id="dropdown-sales"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <vue-feather type="calendar"></vue-feather>2023
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdown-sales">
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item">2023</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item">2022</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item">2021</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card-body pt-1 pb-0">
              <div id="sales-analysis" class="chart-set">
                <apexchart
                  type="area"
                  height="300"
                  :options="salesAnalysis.sline"
                  :series="salesAnalysis.series"
                ></apexchart>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-lg-5 col-sm-12 col-12 d-flex">
          <!-- World Map -->
          <div class="card flex-fill">
            <div class="card-header d-flex justify-content-between align-items-center">
              <h5 class="card-title mb-0">Sales by Countries</h5>
              <div class="graph-sets">
                <div class="dropdown dropdown-wraper">
                  <button
                    class="btn btn-white btn-sm dropdown-toggle d-flex align-items-center"
                    type="button"
                    id="dropdown-country-sales"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    This Week
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdown-country-sales">
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item">This Month</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item">This Year</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div id="sales_db_world_map" style="height: 265px">
                <vector-map></vector-map>
              </div>
              <p class="sales-range">
                <span class="text-success"
                  ><vue-feather type="chevron-up" class="feather-16"></vue-feather
                  >48%&nbsp;</span
                >increase compare to last week
              </p>
            </div>
          </div>
          <!-- /World Map -->
        </div>
      </div>
    </div>

    <div
      class="copyright-footer d-flex align-items-center justify-content-between border-top bg-white gap-3 flex-wrap"
    >
      <p class="fs-13 text-gray-9 mb-0">
        {{ new Date().getFullYear() }} © DreamsPOS. All Right Reserved
      </p>
      <p>
        Designed & Developed By Dreams
        <a href="javascript:void(0);" class="link-primary">Dreams</a>
      </p>
    </div>
  </div>
</template>

<script>
import { salesAnalysis } from "./data";
import SalesBest from "@/assets/json/sales-best.json";
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { ref } from "vue";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
export default {
  data() {
    return {
      target1: 95000.45,
      duration: 2000,
      SalesBest: SalesBest,
      salesAnalysis: salesAnalysis,
    };
  },
  setup() {
    const counter1 = ref(0); // Current counter value
    const target1 = 95000.45; // Target value
    const duration = 20; // Animation duration in milliseconds
    const dateRangeInput = ref(null);

    // Move the function declaration outside of the onMounted callback
    function booking_range(start, end) {
      return start.format("M/D/YYYY") + " - " + end.format("M/D/YYYY");
    }

    const animateCounter = (target, counterRef) => {
      let current = 0;
      const step = target / (duration / 50); // Calculate the increment step

      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target; // Ensure the counter stops at the target value
          clearInterval(interval); // Stop the interval when the target is reached
        }
        counterRef.value = Math.floor(current); // Update the reactive counter value
      }, 50); // Update every 50ms
    };
    onMounted(() => {
      animateCounter(target1, counter1);
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
      counter1,
      dateRangeInput,
    };
  },
  mounted() {
    this.startCounter();
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
    startCounter() {
      this.animateCounter(this.target1, "counter1");
    },
    animateCounter(target, counterName) {
      let current = 0;
      const step = target / (this.duration / 50);

      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        this[counterName] = Math.floor(current);
      }, 50);
    },
  },
};
</script>
