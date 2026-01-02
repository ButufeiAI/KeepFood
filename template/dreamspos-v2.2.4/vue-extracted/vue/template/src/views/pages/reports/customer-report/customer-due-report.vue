<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="table-tab">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <router-link class="nav-link" to="/customer-report/customer-report"
              >Customer Report</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/customer-report/customer-due-report"
              >Customer Due</router-link
            >
          </li>
        </ul>
      </div>
      <div>
        <div class="page-header">
          <div class="add-item d-flex">
            <div class="page-title">
              <h4>Customer Due Report</h4>
              <h6>View Reports of Customer</h6>
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
                        <label class="form-label">Customer</label>
                        <vue-select
                          :options="EvansCustom"
                          v-model="selected"
                          placeholder="All"
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label class="form-label">Payment Method</label>
                        <vue-select :options="StripPay" v-model="selectedOne" placeholder="All" />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label class="form-label">Payment Status</label>
                        <vue-select :options="PaidComp" v-model="selectedTwo" placeholder="All" />
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
              <h4>Customer Due Report</h4>
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
                    <th>Code</th>
                    <th>Customer</th>
                    <th>Total Amount</th>
                    <th>Paid</th>
                    <th>Due</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><a href="#" class="text-orange">INV2025</a></td>
                    <td>CU001</td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a href="#" class="avatar avatar-md"
                          ><img
                            src="@/assets/img/users/user-32.jpg"
                            class="img-fluid"
                            alt="img"
                        /></a>
                        <div class="ms-2">
                          <p class="text-dark mb-0"><a href="#">Carl Evans</a></p>
                        </div>
                      </div>
                    </td>
                    <td>$1000</td>
                    <td>$1000</td>
                    <td>$0.0</td>
                    <td>
                      <span
                        class="badge badge-success d-inline-flex align-items-center badge-xs"
                      >
                        <i class="ti ti-point-filled me-1"></i>Paid
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="#" class="text-orange">INV2031</a></td>
                    <td>CU002</td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a href="#" class="avatar avatar-md"
                          ><img
                            src="@/assets/img/users/user-02.jpg"
                            class="img-fluid"
                            alt="img"
                        /></a>
                        <div class="ms-2">
                          <p class="text-dark mb-0"><a href="#">Minerva Rameriz</a></p>
                        </div>
                      </div>
                    </td>
                    <td>$1500</td>
                    <td>$1500</td>
                    <td>$0.0</td>
                    <td>
                      <span
                        class="badge badge-success d-inline-flex align-items-center badge-xs"
                      >
                        <i class="ti ti-point-filled me-1"></i>Paid
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="#" class="text-orange">INV2042</a></td>
                    <td>CU003</td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a href="#" class="avatar avatar-md"
                          ><img
                            src="@/assets/img/users/user-01.jpg"
                            class="img-fluid"
                            alt="img"
                        /></a>
                        <div class="ms-2">
                          <p class="text-dark mb-0"><a href="#">Robert Lamon</a></p>
                        </div>
                      </div>
                    </td>
                    <td>$1600</td>
                    <td>$1600</td>
                    <td>$0.0</td>
                    <td>
                      <span
                        class="badge badge-success d-inline-flex align-items-center badge-xs"
                      >
                        <i class="ti ti-point-filled me-1"></i>Paid
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="#" class="text-orange">INV2033</a></td>
                    <td>CU004</td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a href="#" class="avatar avatar-md"
                          ><img
                            src="@/assets/img/users/user-04.jpg"
                            class="img-fluid"
                            alt="img"
                        /></a>
                        <div class="ms-2">
                          <p class="text-dark mb-0"><a href="#">Patricia Lewis</a></p>
                        </div>
                      </div>
                    </td>
                    <td>$700</td>
                    <td>$700</td>
                    <td>$0.0</td>
                    <td>
                      <span
                        class="badge badge-success d-inline-flex align-items-center badge-xs"
                      >
                        <i class="ti ti-point-filled me-1"></i>Paid
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="#" class="text-orange">INV2042</a></td>
                    <td>CU005</td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a href="#" class="avatar avatar-md"
                          ><img
                            src="@/assets/img/users/user-08.jpg"
                            class="img-fluid"
                            alt="img"
                        /></a>
                        <div class="ms-2">
                          <p class="text-dark mb-0"><a href="#">Mark Joslyn</a></p>
                        </div>
                      </div>
                    </td>
                    <td>$1000</td>
                    <td>$1000</td>
                    <td>$0.0</td>
                    <td>
                      <span
                        class="badge badge-success d-inline-flex align-items-center badge-xs"
                      >
                        <i class="ti ti-point-filled me-1"></i>Paid
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="#" class="text-orange">INV2011</a></td>
                    <td>CU006</td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a href="#" class="avatar avatar-md"
                          ><img
                            src="@/assets/img/users/user-10.jpg"
                            class="img-fluid"
                            alt="img"
                        /></a>
                        <div class="ms-2">
                          <p class="text-dark mb-0"><a href="#">Marsha Betts</a></p>
                        </div>
                      </div>
                    </td>
                    <td>$2000</td>
                    <td>$2000</td>
                    <td>$0.0</td>
                    <td>
                      <span
                        class="badge badge-success d-inline-flex align-items-center badge-xs"
                      >
                        <i class="ti ti-point-filled me-1"></i>Paid
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="#" class="text-orange">INV2014</a></td>
                    <td>CU007</td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a href="#" class="avatar avatar-md"
                          ><img
                            src="@/assets/img/users/user-28.jpg"
                            class="img-fluid"
                            alt="img"
                        /></a>
                        <div class="ms-2">
                          <p class="text-dark mb-0"><a href="#">Daniel Jude</a></p>
                        </div>
                      </div>
                    </td>
                    <td>$600</td>
                    <td>$600</td>
                    <td>$0.0</td>
                    <td>
                      <span
                        class="badge badge-purple d-inline-flex align-items-center badge-xs"
                      >
                        <i class="ti ti-point-filled me-1"></i>Overdue
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="#" class="text-orange">INV2056</a></td>
                    <td>CU008</td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a href="#" class="avatar avatar-md"
                          ><img
                            src="@/assets/img/users/user-17.jpg"
                            class="img-fluid"
                            alt="img"
                        /></a>
                        <div class="ms-2">
                          <p class="text-dark mb-0"><a href="#">Emma Bates</a></p>
                        </div>
                      </div>
                    </td>
                    <td>$1000</td>
                    <td>$1000</td>
                    <td>$0.0</td>
                    <td>
                      <span
                        class="badge badge-danger d-inline-flex align-items-center badge-xs"
                      >
                        <i class="ti ti-point-filled me-1"></i>Unpaid
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="#" class="text-orange">INV2047</a></td>
                    <td>CU009</td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a href="#" class="avatar avatar-md"
                          ><img
                            src="@/assets/img/users/user-20.jpg"
                            class="img-fluid"
                            alt="img"
                        /></a>
                        <div class="ms-2">
                          <p class="text-dark mb-0"><a href="#">Richard Fralick</a></p>
                        </div>
                      </div>
                    </td>
                    <td>$500</td>
                    <td>$500</td>
                    <td>$0.0</td>
                    <td>
                      <span
                        class="badge badge-success d-inline-flex align-items-center badge-xs"
                      >
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr class="bg-secondary-transparent">
                    <td class="bg-secondary-transparent"><h6>Total</h6></td>
                    <td class="bg-secondary-transparent"></td>
                    <td class="bg-secondary-transparent"></td>
                    <td class="bg-secondary-transparent"><h6>33268</h6></td>
                    <td class="bg-secondary-transparent"><h6>$33268.53</h6></td>
                    <td class="bg-secondary-transparent"><h6>$0.0</h6></td>
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
      EvansCustom: [
        {label: "All", value: "All"}, 
        {label: "Carl Evans", value: "Carl Evans"}, 
        {label: "Robert Lamon", value: "Robert Lamon"}, 
      ],
      StripPay: [
        {label: "All", value: "All"}, 
        {label: "Cash", value: "Cash"}, 
        {label: "Paypal", value: "Paypal"}, 
        {label: "Stripe", value: "Stripe"}, 
      ],
      PaidComp: [
        {label: "All", value: "All"}, 
        {label: "Completed", value: "Completed"}, 
        {label: "Unpaid", value: "Unpaid"}, 
        {label: "Paid", value: "Paid"}, 
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
