<template>
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <div class="page-wrapper">
        <div class="content">
            <div class="page-header">
                <div class="add-item d-flex">
                    <div class="page-title">
                        <h4>Subscriptions</h4>
                        <h6>Manage your subscriptions</h6>
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
            </div>

            <div class="row">
                <div class="col-xl-3 col-md-6 d-flex">
                    <div class="card flex-fill">
                        <div class="card-body ">
                            <div class="border-bottom pb-3 mb-3">
                                <div class="row align-items-center">
                                    <div class="col-7">
                                        <div>
                                            <span class="fs-14 fw-normal text-truncate mb-1">Total Transaction</span>
                                            <h5>$5,340</h5>
                                        </div>
                                    </div>
                                    <div class="col-5">
                                        <div>
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
                            <div class="d-flex">
                                <p class="fs-12 fw-normal d-flex align-items-center text-truncate">
                                    <span class="text-primary fs-12 d-flex align-items-center me-1">
                                    <i class="ti ti-arrow-wave-right-up me-1"></i>+19.01%</span>from
                                    last week
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 d-flex">
                    <div class="card flex-fill">
                        <div class="card-body ">
                            <div class="border-bottom pb-3 mb-3">
                                <div class="row align-items-center">
                                    <div class="col-7">
                                        <div>
                                            <span class="fs-14 fw-normal text-truncate mb-1">Total Subscribers</span>
                                            <h5>600</h5>
                                        </div>
                                    </div>
                                    <div class="col-5">
                                        <div>
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
                            <div class="d-flex">
                                <p class="fs-12 fw-normal d-flex align-items-center text-truncate">
                                    <span class="text-primary fs-12 d-flex align-items-center me-1">
                                    <i class="ti ti-arrow-wave-right-up me-1"></i>+19.01%</span>from
                                    last week
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 d-flex">
                    <div class="card flex-fill">
                        <div class="card-body ">
                            <div class="border-bottom pb-3 mb-3">
                                <div class="row align-items-center">
                                    <div class="col-7">
                                        <div>
                                            <span class="fs-14 fw-normal text-truncate mb-1">Active Subscribers</span>
                                            <h5>560</h5>
                                        </div>
                                    </div>
                                    <div class="col-5">
                                        <div>
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
                            <div class="d-flex">
                                <p class="fs-12 fw-normal d-flex align-items-center text-truncate">
                                    <span class="text-primary fs-12 d-flex align-items-center me-1">
                                    <i class="ti ti-arrow-wave-right-up me-1"></i>+19.01%</span>from
                                    last week
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 d-flex">
                    <div class="card flex-fill">
                        <div class="card-body ">
                            <div class="border-bottom pb-3 mb-3">
                                <div class="row align-items-center">
                                    <div class="col-7">
                                        <div>
                                            <span class="fs-14 fw-normal text-truncate mb-1">Expired Subscribers</span>
                                            <h5>40</h5>
                                        </div>
                                    </div>
                                    <div class="col-5">
                                        <div>
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
                            <div class="d-flex">
                                <p class="fs-12 fw-normal d-flex align-items-center text-truncate">
                                    <span class="text-primary fs-12 d-flex align-items-center me-1">
                                    <i class="ti ti-arrow-wave-right-up me-1"></i>+19.01%</span>from
                                    last week
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- /product list -->
            <div class="card table-list-card">
                <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                    <div class="search-set">
                        <div class="search-input">
                            <a href="javascript:void(0);" class="btn-searchset"><i class="ti ti-search fs-14 feather-search"></i></a>
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
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Advanced (Monthly)</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Basic (Yearly)</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Enterprise (Monthly)</a>
                                </li>
                            </ul>
                        </div>
                        <div class="dropdown me-2">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                Select Status
                            </a>
                            <ul class="dropdown-menu  dropdown-menu-end p-3">
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Paid</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Unpaid</a>
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
                        <subscription-table></subscription-table>
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

    <subscription-modal></subscription-modal>
</template>

<script>
import { totalChart, activeChart, inactiveChart, locationChart } from "./data";
export default {
  data() {
    return {
      totalChart: totalChart,
      activeChart: activeChart,
      inactiveChart: inactiveChart,
      locationChart: locationChart,
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
