<template>
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <div class="page-wrapper">
        <div class="content">
            <div class="page-header">
                <div class="add-item d-flex">
                    <div class="page-title">
                        <h4>Companies</h4>
                        <h6>Manage your companies</h6>
                    </div>
                </div>
                <ul class="table-top-head">
                    <li>
                        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="@/assets/img/icons/pdf.svg" alt="img"></a>
                    </li>
                    <li>
                        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="@/assets/img/icons/excel.svg" alt="img"></a>
                    </li>
                    <li>
                        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"><i class="ti ti-refresh"></i></a>
                    </li>
                    <li>
                        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" @click="toggleHeader"><i class="ti ti-chevron-up"></i></a>
                    </li>
                </ul>
                <div class="page-btn">
                    <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add_company"><i class="ti ti-circle-plus me-1"></i> Add Company</a>
                </div>
            </div>

            <div class="row">

                <!-- Total Companies -->
                <div class="col-lg-3 col-md-6 d-flex">
                    <div class="card flex-fill">
                        <div class="card-body d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center overflow-hidden">
                                <span class="avatar avatar-lg bg-primary flex-shrink-0">
                                    <i class="ti ti-building fs-16"></i>
                                </span>
                                <div class="ms-2 overflow-hidden">
                                    <p class="fs-12 fw-medium mb-1 text-truncate">Total Companies</p>
                                    <h4>950</h4>
                                </div>
                            </div>
                            <div id="total-chart">
                                <apexchart
                                    type="area"
                                    width="50"
                                    :options="totalChart.total"
                                    :series="totalChart.series"
                                >
                                </apexchart>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Total Companies -->

                <!-- Total Companies -->
                <div class="col-lg-3 col-md-6 d-flex">
                    <div class="card flex-fill">
                        <div class="card-body d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center overflow-hidden">
                                <span class="avatar avatar-lg bg-success flex-shrink-0">
                                    <i class="ti ti-building fs-16"></i>
                                </span>
                                <div class="ms-2 overflow-hidden">
                                    <p class="fs-12 fw-medium mb-1 text-truncate">Active Companies</p>
                                    <h4>920</h4>
                                </div>
                            </div>
                            <div id="active-chart">
                                <apexchart
                                    type="area"
                                    width="50"
                                    :options="activeChart.active"
                                    :series="activeChart.series"
                                >
                                </apexchart>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Total Companies -->

                <!-- Inactive Companies -->
                <div class="col-lg-3 col-md-6 d-flex">
                    <div class="card flex-fill">
                        <div class="card-body d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center overflow-hidden">
                                <span class="avatar avatar-lg bg-danger flex-shrink-0">
                                    <i class="ti ti-building fs-16"></i>
                                </span>
                                <div class="ms-2 overflow-hidden">
                                    <p class="fs-12 fw-medium mb-1 text-truncate">Inactive Companies</p>
                                    <h4>30</h4>
                                </div>
                            </div>
                            <div id="inactive-chart">
                                <apexchart
                                    type="area"
                                    width="50"
                                    :options="inactiveChart.inactive"
                                    :series="inactiveChart.series"
                                >
                                </apexchart>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Inactive Companies -->

                <!-- Company Location -->
                <div class="col-lg-3 col-md-6 d-flex">
                    <div class="card flex-fill">
                        <div class="card-body d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center overflow-hidden">
                                <span class="avatar avatar-lg bg-skyblue flex-shrink-0">
                                    <i class="ti ti-map-pin-check fs-16"></i>
                                </span>
                                <div class="ms-2 overflow-hidden">
                                    <p class="fs-12 fw-medium mb-1 text-truncate">Company Location</p>
                                    <h4>180</h4>
                                </div>
                            </div>
                            <div id="location-chart">
                                <apexchart
                                    type="area"
                                    width="50"
                                    :options="locationChart.location"
                                    :series="locationChart.series"
                                >
                                </apexchart>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Company Location -->

            </div>

            <!-- /product list -->
            <div class="card table-list-card">
                <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                    <div class="search-set">
                        <div class="search-input">
                            <a href="javascript:void(0);" class="btn-searchset">
                                <i class="ti ti-search fs-14 feather-search"></i>
                            </a>
                            <input type="search" class="form-control form-control-sm" placeholder="Search">
                        </div>
                    </div>
                    <div class="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                        <div class="dropdown me-2">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                Select Plan
                            </a>
                            <ul class="dropdown-menu  dropdown-menu-end p-3">
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Advance</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Basic</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Enterprise</a>
                                </li>
                            </ul>
                        </div>
                        <div class="dropdown me-2">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                Select Status
                            </a>
                            <ul class="dropdown-menu  dropdown-menu-end p-3">
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>
                                </li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                Sort By : Last 7 Days
                            </a>
                            <ul class="dropdown-menu  dropdown-menu-end p-3">
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Recently Added</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Ascending</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Desending</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Last Month</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 7 Days</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="custom-datatable-filter table-responsive">
                        <a-table
                            class="table datatable thead-light"
                            :columns="columns"
                            :data-source="data"
                            :row-selection="rowSelection"
                        >
                        <template #bodyCell="{ column, record }">
                            <template v-if="column.key === 'CompanyName'">
                                <div class="d-flex align-items-center file-name-icon">
                                    <a href="#" class="avatar avatar-md border rounded-circle">
                                        <img :src="getImageUrl(record.Image)" class="img-fluid" alt="img">
                                    </a>
                                    <div class="ms-2">
                                        <h6 class="fw-medium"><a href="#">{{ record.CompanyName }}</a></h6>
                                    </div>
                                </div>
                            </template>
                            <template v-if="column.key === 'Plan'">
                                <div class="d-flex align-items-center justify-content-between">
                                    <p class="mb-0 me-2">{{ record.Plan }}</p>
                                    <a href="#" data-bs-toggle="modal" class="badge badge-purple badge-xs" data-bs-target="#upgrade_info">Upgrade</a>
                                </div>
                            </template>
                            <template v-if="column.key === 'Status'">
                                <span class="badge badge-success d-inline-flex align-items-center badge-xs">
                                    <i class="ti ti-point-filled me-1"></i>{{record.Status}}
                                </span>
                            </template>
                            <template v-if="column.key === 'action'">
                                <div class="action-icon d-inline-flex align-items-center">
                                    <a href="#" class="p-2 d-flex align-items-center border rounded me-2"  data-bs-toggle="modal" data-bs-target="#company_detail"><i class="ti ti-eye"></i></a>
                                    <a href="#" class="p-2 d-flex align-items-center border rounded me-2" data-bs-toggle="modal" data-bs-target="#edit_company"><i class="ti ti-edit"></i></a>
                                    <a href="javascript:void(0);" class="p-2 d-flex align-items-center border rounded" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="ti ti-trash"></i></a>
                                </div>
                            </template>
                        </template>
                    </a-table>
                </div>
            </div>
        </div>
            <!-- /product list -->
        </div>
        <div class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
            <p class="mb-0 text-gray-9">{{ new Date().getFullYear() }} © DreamsPOS. All Right Reserved</p>
            <p>Designed &amp; Developed By <a href="javascript:void(0);" class="text-primary">Dreams</a></p>
        </div>
    </div>

    <companies-modal></companies-modal>
</template>

<script>

const columns = [
  {
    sorter: false,
  },
  {
    title: "Company Name",
    dataIndex: "CompanyName",
    key: "CompanyName",
    sorter: {
      compare: (a, b) => {
        a = a.CompanyName.toLowerCase();
        b = b.CompanyName.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Email",
    dataIndex: "Email",
    sorter: {
      compare: (a, b) => {
        a = a.Email.toLowerCase();
        b = b.Email.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Accoun tURL",
    dataIndex: "AccountURL",
    key: "AccountURL",
    sorter: {
      compare: (a, b) => {
        a = a.AccountURL.toLowerCase();
        b = b.AccountURL.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Plan",
    dataIndex: "Plan",
    key: "Plan",
    sorter: {
      compare: (a, b) => {
        a = a.Plan.toLowerCase();
        b = b.Plan.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "CreatedDate",
    dataIndex: "CreatedDate",
    sorter: {
      compare: (a, b) => {
        a = a.CreatedDate.toLowerCase();
        b = b.CreatedDate.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status",
    sorter: {
      compare: (a, b) => {
        a = a.Status.toLowerCase();
        b = b.Status.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "",
    key: "action",
    sorter: true,
  },
];
const data = [
  {
    CompanyName: "BrightWave Innovations",
    Email: "michael@example.com",
    AccountURL: "bwi.example.com",
    Plan: "Advanced (Monthly)",
    CreatedDate: "12 Sep 2024",
    Image: "company-01.svg",
    Status: "Active",
  },
  {
    CompanyName: "Stellar Dynamics",
    Email: "sophie@example.com",
    AccountURL: "sd.example.com",
    Plan: "Basic (Yearly)",
    CreatedDate: "24 Oct 2024",
    Image: "company-02.svg",
    Status: "Active",
  },
  {
    CompanyName: "Quantum Nexus",
    Email: "cameron@example.com",
    AccountURL: "qn.example.com",
    Plan: "Advanced (Monthly)",
    CreatedDate: "18 Feb 2024",
    Image: "company-03.svg",
    Status: "Active",
  },
  {
    CompanyName: "EcoVision Enterprises",
    Email: "doris@example.com",
    AccountURL: "eve.example.com",
    Plan: "Advanced (Monthly)",
    CreatedDate: "17 Oct 2024",
    Image: "company-04.svg",
    Status: "Active",
  },
  {
    CompanyName: "Aurora Technologies",
    Email: "thomas@example.com",
    AccountURL: "at.example.com",
    Plan: "Enterprise (Monthly)",
    CreatedDate: "20 Jul 2024",
    Image: "company-05.svg",
    Status: "Active",
  },
  {
    CompanyName: "BlueSky Ventures",
    Email: "kathleen@example.com",
    AccountURL: "bsv.example.com",
    Plan: "Advanced (Monthly)",
    CreatedDate: "10 Apr 2024",
    Image: "company-06.svg",
    Status: "Active",
  },
  {
    CompanyName: "TerraFusion Energy",
    Email: "bruce@example.com",
    AccountURL: "tfe.example.com",
    Plan: "Enterprise (Yearly)",
    CreatedDate: "29 Aug 2024",
    Image: "company-07.svg",
    Status: "Active",
  },
  {
    CompanyName: "UrbanPulse Design",
    Email: "estelle@example.com",
    AccountURL: "upd.example.com",
    Plan: "Basic (Monthly)",
    CreatedDate: "22 Feb 2024",
    Image: "company-08.svg",
    Status: "Inactive",
  },
  {
    CompanyName: "Nimbus Networks",
    Email: "stephen@example.com",
    AccountURL: "nn.example.com",
    Plan: "Basic (Yearly)",
    CreatedDate: "03 Nov 2024",
    Image: "company-09.svg",
    Status: "Active",
  },
  {
    CompanyName: "Epicurean Delights",
    Email: "angela@example.com",
    AccountURL: "ed.example.com",
    Plan: "Advanced (Monthly)",
    CreatedDate: "17 Dec 2024",
    Image: "company-10.svg",
    Status: "Active",
  },
];
const rowSelection = {
  onChange: () => {},
  onSelect: () => {},
  onSelectAll: () => {},
};

import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { ref } from "vue";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
import { totalChart, activeChart, inactiveChart, locationChart } from "./data";

export default {
    data() {
        return {
            totalChart: totalChart,
            activeChart: activeChart,
            inactiveChart: inactiveChart,
            locationChart: locationChart,
            data,
            columns,
            rowSelection,
        }
    },
    methods: {
        toggleHeader() {
            document.getElementById("collapse-header").classList.toggle("active");
            document.body.classList.toggle("header-collapse");
        },
        getImageUrl(imageName) {
            return new URL(`/src/assets/img/company/${imageName}`, import.meta.url).href;
        },
    },
    setup() {
        const dateRangeInput = ref(null);
        // Move the function declaration outside of the onMounted callback
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
}
</script>