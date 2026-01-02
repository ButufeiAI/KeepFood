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
                    <router-link to="/administration/order-report" class="nav-link d-flex align-items-center active"><i class="icon-list-todo me-2"></i>Order Report</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/administration/sales-report" class="nav-link d-flex align-items-center"><i class="icon-shopping-bag me-2"></i>Sales Report</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/administration/customer-report" class="nav-link d-flex align-items-center"><i class="icon-users me-2"></i>Customer Report</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/administration/audit-report" class="nav-link d-flex align-items-center"><i class="icon-hourglass me-2"></i>Audit Logs</router-link>
                </li>
            </ul>  
            <!-- Tabs -->

            <!-- card start -->
            <div class="card mb-0">
                <div class="card-body">
                    

                    <div class="border-bottom order-report-filter-wrap">
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
                        </div>
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
                                <template v-if="column.key === 'GrandTotal'">
                                    <div class="fw-medium text-dark">{{ record.GrandTotal }}</div>
                                </template>
                                <template v-if="column.key === 'Status'">
                                    <span class="badge badge-soft-success">{{ record.Status }}</span>
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
        title: "Order ID",
        dataIndex: "OrderID",
        sorter: {
            compare: (a, b) => (a.OrderID.toLowerCase() > b.OrderID.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Date",
        dataIndex: "Date",
        sorter: {
            compare: (a, b) => (a.Date.toLowerCase() > b.Date.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Customer",
        dataIndex: "Customer",
        sorter: {
            compare: (a, b) => (a.Customer.toLowerCase() > b.Customer.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Token No",
        dataIndex: "TokenNo",
        sorter: {
            compare: (a, b) => (a.TokenNo.toLowerCase() > b.TokenNo.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Type",
        dataIndex: "Type",
        sorter: {
            compare: (a, b) => (a.Type.toLowerCase() > b.Type.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Menus",
        dataIndex: "Menus",
        sorter: {
            compare: (a, b) => (a.Menus.toLowerCase() > b.Menus.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Grand Total",
        dataIndex: "GrandTotal",
        key: "GrandTotal",
        sorter: {
            compare: (a, b) => (a.GrandTotal.toLowerCase() > b.GrandTotal.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Status",
        dataIndex: "Status",
        key: "Status",
        sorter: {
            compare: (a, b) => (a.Status.toLowerCase() > b.Status.toLowerCase() ? -1 : 1),
        },
    },
]

const data = [
    {
        "OrderID": "#23588",
        "Date": "01 Nov 2025",
        "Customer": "Walk-in Customer",
        "TokenNo": "16",
        "Type": "Dine In",
        "Menus": "3",
        "GrandTotal": "$34.50",
        "Status": "Paid"
    },
    {
        "OrderID": "#23587",
        "Date": "01 Nov 2025",
        "Customer": "Sue Allen",
        "TokenNo": "15",
        "Type": "Take Away",
        "Menus": "7",
        "GrandTotal": "$78.20",
        "Status": "Paid"
    },
    {
        "OrderID": "#23586",
        "Date": "01 Nov 2025",
        "Customer": "Frank Barrett",
        "TokenNo": "14",
        "Type": "Dine In",
        "Menus": "4",
        "GrandTotal": "$45.10",
        "Status": "Paid"
    },
    {
        "OrderID": "#23585",
        "Date": "01 Nov 2025",
        "Customer": "Kelley Davis",
        "TokenNo": "13",
        "Type": "Take Away",
        "Menus": "9",
        "GrandTotal": "$92.80",
        "Status": "Paid"
    },
    {
        "OrderID": "#23584",
        "Date": "01 Nov 2025",
        "Customer": "Jim Vickers",
        "TokenNo": "12",
        "Type": "Dine In",
        "Menus": "6",
        "GrandTotal": "$61.40",
        "Status": "Paid"
    },
    {
        "OrderID": "#23583",
        "Date": "01 Nov 2025",
        "Customer": "Nancy Chapman",
        "TokenNo": "11",
        "Type": "Take Away",
        "Menus": "5",
        "GrandTotal": "$57.20",
        "Status": "Paid"
    },
    {
        "OrderID": "#23582",
        "Date": "31 Oct 2025",
        "Customer": "Ron Jude",
        "TokenNo": "10",
        "Type": "Take Away",
        "Menus": "4",
        "GrandTotal": "$45.30",
        "Status": "Paid"
    },
    {
        "OrderID": "#23581",
        "Date": "31 Oct 2025",
        "Customer": "Andrea Aponte",
        "TokenNo": "9",
        "Type": "Take Away",
        "Menus": "7",
        "GrandTotal": "$72.60",
        "Status": "Paid"
    },
    {
        "OrderID": "#23588",
        "Date": "31 Oct 2025",
        "Customer": "David Belcher",
        "TokenNo": "8",
        "Type": "Take Away",
        "Menus": "3",
        "GrandTotal": "$32.10",
        "Status": "Paid"
    },
    {
        "OrderID": "#23588",
        "Date": "31 Oct 2025",
        "Customer": "Julie Kangas",
        "TokenNo": "7",
        "Type": "Take Away",
        "Menus": "4",
        "GrandTotal": "$40.30",
        "Status": "Paid"
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
                    record.OrderID.toLowerCase().includes(query) ||
                    record.Date.toLowerCase().includes(query) ||
                    record.Customer.toLowerCase().includes(query) ||
                    record.TokenNo.toLowerCase().includes(query) ||
                    record.Type.toLowerCase().includes(query) ||
                    record.Menus.toLowerCase().includes(query) ||
                    record.GrandTotal.toLowerCase().includes(query) ||
                    record.Status.toLowerCase().includes(query)
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