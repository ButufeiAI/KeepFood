<template>
    <!-- ========================
        Start Page Content
    ========================= -->
        
    <div class="page-wrapper">

        <!-- Start Content -->
        <div class="content">

            <!-- Page Header -->
            <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-3 mb-4">
                <div class="flex-grow-1">
                    <h3 class="mb-0">Reports <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle ms-2"><i class="icon-refresh-ccw"></i></a></h3>
                </div>
                <div class="gap-2 d-flex align-items-center flex-wrap">
                    <div class="dropdown">
                        <a href="#" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                            <i class="icon-upload me-1"></i>Export
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end p-3">
                            <li>
                                <a href="#" class="dropdown-item rounded">Export as PDF</a>
                            </li>
                            <li>
                                <a href="#" class="dropdown-item rounded">Export as Excel</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- End Page Header -->

            <!-- Tabs -->
            <ul class="nav nav-tabs nav-bordered nav-bordered-primary mb-4" role="tablist">
                <li class="nav-item">                                             
                    <router-link to="/administration/earning-report" class="nav-link d-flex align-items-center"><i class="icon-badge-dollar-sign me-2"></i>Earning Report</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/administration/order-report" class="nav-link d-flex align-items-center"><i class="icon-list-todo me-2"></i>Order Report</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/administration/sales-report" class="nav-link d-flex align-items-center"><i class="icon-shopping-bag me-2"></i>Sales Report</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/administration/customer-report" class="nav-link d-flex align-items-center active"><i class="icon-users me-2"></i>Customer Report</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/administration/audit-report" class="nav-link d-flex align-items-center"><i class="icon-hourglass me-2"></i>Audit Logs</router-link>
                </li>
            </ul>  
            <!-- Tabs -->

            <!-- card start -->
            <div class="card mb-0">
                <div class="card-body">
                    

                    <div class="border-bottom sales-report-filter-wrap">
                        <div class="report-filter">
                            <div class="mb-3">
                                <label class="form-label">Start Date<span class="text-danger ms-1">*</span></label>
                                <div class="input-group w-auto input-group-flat">
                                    <a-date-picker  v-model="valueOne"  class="form-control" placeholder="dd/mm/yyyy" />
                                    <span class="input-group-text">
                                        <i class="icon-calendar-fold"></i>
                                    </span>
                                </div>
                            </div>
                        </div> <!-- end col -->
                        <div class="report-filter">
                            <div class="mb-3">
                                <label class="form-label">End Date<span class="text-danger ms-1">*</span></label>
                                <div class="input-group w-auto input-group-flat">
                                    <a-date-picker v-model="valueTwo" class="form-control" placeholder="dd/mm/yyyy" />
                                    <span class="input-group-text">
                                        <i class="icon-calendar-fold"></i>
                                    </span>
                                </div>
                            </div>
                        </div> <!-- end col -->
                        <div class="report-filter">
                            <div class="mb-3">
                                <label class="form-label">Customer<span class="text-danger ms-1">*</span></label>
                                <div class="dropdown">
                                    <a href="#" class="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                        Select
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end p-3 w-100">
                                        <h6 class="fs-14 fw-semibold mb-3">Customer</h6>
                                        <div class="input-icon-end input-icon position-relative mb-3">
                                            <span class="input-icon-addon">
                                                <i class="icon-search text-dark"></i>
                                            </span>
                                            <input type="text" class="form-control form-control-md" placeholder="Search">
                                        </div>  
                                        <div class="vstack gap-2">
                                            <div>
                                                <label class="d-flex align-items-center">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">Walk-in Customer
                                                </label>
                                            </div>
                                            <div>
                                                <label class="d-flex align-items-center">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">Sue Allen
                                                </label>
                                            </div>
                                            <div>
                                                <label class="d-flex align-items-center">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">Frank Barrett
                                                </label>
                                            </div>
                                            <div>
                                                <label class="d-flex align-items-center">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">Kelley Davis
                                                </label>
                                            </div>
                                            <div>
                                                <label class="d-flex align-items-center">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">Jim Vickers
                                                </label>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div> <!-- end col -->
                        <div class="report-filter">
                            <div class="mb-3">
                                <a href="#" class="btn btn-primary d-inline-flex align-items-center">Submit</a>
                            </div>
                        </div> <!-- end col -->
                    </div>

                    <div class="d-flex align-items-center flex-wrap gap-3 justify-content-between mb-4">
                        <div class="input-icon input-icon-start position-relative">
                            <span class="input-icon-addon addon-search text-dark"><i class="icon-search fs-14"></i></span>
                            <input
                                type="text"
                                class="form-control search-addon"
                                placeholder="Search"
                                v-model="searchQuery"
                            />
                        </div>
                        <div class="d-flex align-items-center gap-3 flex-wrap">

                            <!-- sort by -->
                            <div class="dropdown">
                                <a href="#" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                    Sort by : Newest
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item">Newest</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item">Oldest</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item">Ascending</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item">Descending</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <!-- table start -->
                    <div class="table-responsive table-nowrap">
                        <a-table
                            class="table table-nowrap datatable"
                            :columns="columns"
                            :data-source="paginatedData"
                            :pagination="false"
                        >
                            <template #bodyCell="{ column, record }">
                                <template v-if="column.key === 'Customer'">
                                    <template v-if="record.Customer === 'Walk-in Customer'">
                                        <div class="d-flex align-items-center">
                                            <a href="#" class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2 bg-light border">
                                            <i class="icon-user fs-16 text-dark"></i>
                                            </a>
                                            <h6 class="fs-14 fw-normal mb-0"><a href="#">{{ record.Customer }}</a></h6>
                                        </div>
                                    </template>
                                    <template v-else>
                                        <div class="d-flex align-items-center">
                                            <a href="#" class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2 bg-light border">
                                            <img :src="getImageUrl(record.Image)" alt="category" class="img-fluid">
                                            </a>
                                            <h6 class="fs-14 fw-normal mb-0"><a href="#">{{ record.Customer}}</a></h6>
                                        </div>
                                    </template>
                                </template>
                            </template>
                        </a-table>
                    </div>
                    <!-- table end -->

                    <BasePagination
                        :currentPage="currentPage"
                        :pageSize="pageSize"
                        :pageSizeOptions="pageSizeOptions"
                        :totalPages="totalPages"
                        @update:currentPage="onPageChange"
                        @update:pageSize="onPageSizeChange"
                    />

                </div>

            </div>
            <!-- card start -->
                            
        </div>
        <!-- End Content -->  

    </div>

    <!-- ========================
        End Page Content
    ========================= -->
</template>

<script>
import { ref } from "vue";
const valueOne = ref();
const valueTwo = ref();
import BasePagination from '@/components/BasePagination.vue';

const columns = [
    {
        title: "Customer ID",
        dataIndex: "CustomerID",
        sorter: {
            compare: (a, b) => (a.CustomerID.toLowerCase() > b.CustomerID.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Customer",
        dataIndex: "Customer",
        key: "Customer",
        sorter: {
            compare: (a, b) => (a.Customer.toLowerCase() > b.Customer.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Total Orders",
        dataIndex: "TotalOrders",
        sorter: {
            compare: (a, b) => (a.TotalOrders.toLowerCase() > b.TotalOrders.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Grand Total",
        dataIndex: "GrandTotal",
        sorter: {
            compare: (a, b) => (a.GrandTotal.toLowerCase() > b.GrandTotal.toLowerCase() ? -1 : 1),
        },
    },
]
const data = [
    {
        "CustomerID": "#CUS0016",
        "Customer": "Walk-in Customer",
        "TotalOrders": "32",
        "GrandTotal": "$1000"
    },
    {
        "CustomerID": "#CUS0015",
        "Image": "avatar-33.jpg",
        "Customer": "Sue Allen",
        "TotalOrders": "45",
        "GrandTotal": "$1500"
    },
    {
        "CustomerID": "#CUS0014",
        "Image": "avatar-34.jpg",
        "Customer": "Frank Barrett",
        "TotalOrders": "70",
        "GrandTotal": "$1200"
    },
    {
        "CustomerID": "#CUS0013",
        "Image": "avatar-35.jpg",
        "Customer": "Kelley Davis",
        "TotalOrders": "53",
        "GrandTotal": "$800"
    },
    {
        "CustomerID": "#CUS0012",
        "Image": "avatar-36.jpg",
        "Customer": "Jim Vickers",
        "TotalOrders": "34",
        "GrandTotal": "$750"
    },
    {
        "CustomerID": "#CUS0011",
        "Image": "avatar-37.jpg",
        "Customer": "Nancy Chapman",
        "TotalOrders": "40",
        "GrandTotal": "$1300"
    },
    {
        "CustomerID": "#CUS0010",
        "Image": "avatar-38.jpg",
        "Customer": "Ron Jude",
        "TotalOrders": "55",
        "GrandTotal": "$1100"
    },
    {
        "CustomerID": "#CUS0009",
        "Image": "avatar-39.jpg",
        "Customer": "Andrea Aponte",
        "TotalOrders": "35",
        "GrandTotal": "$600"
    },
    {
        "CustomerID": "#CUS0008",
        "Image": "avatar-40.jpg",
        "Customer": "David Belcher",
        "TotalOrders": "27",
        "GrandTotal": "$1300"
    },
    {
        "CustomerID": "#CUS0007",
        "Image": "avatar-41.jpg",
        "Customer": "Julie Kangas",
        "TotalOrders": "22",
        "GrandTotal": "$800"
    }
]

export default {
    components: {
        BasePagination,
    },
    data(){
        return {
            valueOne,
            valueTwo,
            searchQuery: "",
            data,
            columns,
            currentPage: 1,
            pageSize: 10,
            pageSizeOptions: [5, 10, 20, 50],
            itemToDelete: null,
        }
    },
    methods: {
        getImageUrl(imageName) {
            return new URL(`/src/assets/img/profiles/${imageName}`, import.meta.url).href;
        },
        onPageChange(page) {
            this.currentPage = page;
        },
        onPageSizeChange(size) {
            this.pageSize = Number(size);
            this.currentPage = 1;
        },
        setDelete(record) {
            this.itemToDelete = record;
        },
        deleteItem() {
            if (this.itemToDelete) {
                this.data = this.data.filter(item => item !== this.itemToDelete);
                this.itemToDelete = null;
            }
        },
    },
    computed: {
        filteredPages() {
            const query = this.searchQuery.toLowerCase();
            return this.data.filter((record) => {
                return (
                    record.CustomerID.toLowerCase().includes(query) ||
                    record.Customer.toLowerCase().includes(query) ||
                    record.TotalOrders.toLowerCase().includes(query) ||
                    record.GrandTotal.toLowerCase().includes(query) 
                );
            });
        },
        paginatedData() {
            const start = (this.currentPage - 1) * this.pageSize;
            return this.filteredPages.slice(start, start + this.pageSize);
        },
        totalPages() {
            return Math.ceil(this.filteredPages.length / this.pageSize) || 1;
        },
    },
}
</script>