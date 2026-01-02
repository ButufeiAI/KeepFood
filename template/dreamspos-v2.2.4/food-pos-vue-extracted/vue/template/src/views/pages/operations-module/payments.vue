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
                    <h3 class="mb-0">Payments <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle ms-2"><i class="icon-refresh-ccw"></i></a></h3>
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

            <!-- card start -->
            <div class="card mb-0">
                <div class="card-body">
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
                        <div class="d-flex align-items-center gap-2 flex-wrap">      
                            
                            <!-- filter -->
                            <a href="#" class="btn btn-white d-inline-flex align-items-center" data-bs-toggle="offcanvas" data-bs-target="#filter-offcanvas" aria-controls="filter-offcanvas">
                                <i class="icon-funnel me-2"></i>Filter
                            </a>

                            <!-- column -->
                            <div class="dropdown">
                                <a href="#" class="btn btn-icon btn-white" data-bs-toggle="dropdown" data-bs-auto-close="outside"><i class="icon-columns-3"></i></a>
                                <div class="dropdown-menu dropdown-menu-md dropdown-menu-end p-3">
                                    <h5 class="mb-3">Column</h5>
                                    <div>
                                        <draggable 
                                            v-model="columns"
                                            @start="drag=true" 
                                            @end="drag=false"
                                            item-key="key"
                                        >
                                            <div class="mb-3" v-for="element in columns" :key="element.key">
                                                <label class="d-flex align-items-center">
                                                    <i class="icon-grip-vertical me-2"></i>
                                                    <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                                    {{element.title}}
                                                </label>
                                            </div>
                                        </draggable>
                                    </div>
                                </div>
                            </div>

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
                                <template v-if="column.key === 'TransactionID'">
                                    <a href="#">{{ record.TransactionID }}</a>
                                </template>
                                <template v-if="column.key === 'OrderID'">
                                    <a href="#">{{ record.OrderID }}</a>
                                </template>
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
                                            <h6 class="fs-14 fw-normal mb-0"><a href="#">{{ record.Customer }}</a></h6>
                                        </div>
                                    </template>
                                </template>
                                <template v-if="column.key === 'GrandTotal'">
                                    <p class="text-dark fw-medium mb-0">{{ record.GrandTotal }}</p>
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

    <payments-modal></payments-modal>
</template>

<script>
import BasePagination from '@/components/BasePagination.vue';
import { VueDraggableNext } from 'vue-draggable-next';

const columns = [
    {
        title: "Transaction ID",
        dataIndex: "TransactionID",
        key: "TransactionID",
        sorter: {
            compare: (a, b) => (a.TransactionID.toLowerCase() > b.TransactionID.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Order ID",
        dataIndex: "OrderID",
        key: "OrderID",
        sorter: {
            compare: (a, b) => (a.OrderID.toLowerCase() > b.OrderID.toLowerCase() ? -1 : 1),
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
        title: "Customer",
        dataIndex: "Customer",
        key: "Customer",
        sorter: {
            compare: (a, b) => (a.Customer.toLowerCase() > b.Customer.toLowerCase() ? -1 : 1),
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
]

const data = [
    {
        "TransactionID": "#23588",
        "OrderID": "#57005",
        "TokenNo": "16",
        "Customer": "Walk-in Customer",
        "Type": "Dine In",
        "Menus": "3",
        "GrandTotal": "$34.50"
    },
    {
        "TransactionID": "#23587",
        "OrderID": "#57004",
        "TokenNo": "15",
        "Image": "avatar-33.jpg",
        "Customer": "Sue Allen",
        "Type": "Take Away",
        "Menus": "7",
        "GrandTotal": "$78.20"
    },
    {
        "TransactionID": "#23586",
        "OrderID": "#57003",
        "TokenNo": "14",
        "Image": "avatar-34.jpg",
        "Customer": "Frank Barrett",
        "Type": "Delivery",
        "Menus": "4",
        "GrandTotal": "$45.10"
    },
    {
        "TransactionID": "#23585",
        "OrderID": "#57002",
        "TokenNo": "13",
        "Image": "avatar-35.jpg",
        "Customer": "Kelley Davis",
        "Type": "Dine In",
        "Menus": "9",
        "GrandTotal": "$92.80"
    },
    {
        "TransactionID": "#23584",
        "OrderID": "#57001",
        "TokenNo": "12",
        "Image": "avatar-36.jpg",
        "Customer": "Jim Vickers",
        "Type": "Take Away",
        "Menus": "6",
        "GrandTotal": "$61.40"
    },
    {
        "TransactionID": "#23583",
        "OrderID": "#57000",
        "TokenNo": "11",
        "Image": "avatar-37.jpg",
        "Customer": "Nancy Chapman",
        "Type": "Take Away",
        "Menus": "5",
        "GrandTotal": "$57.20"
    },
    {
        "TransactionID": "#23582",
        "OrderID": "#56999",
        "TokenNo": "10",
        "Image": "avatar-38.jpg",
        "Customer": "Ron Jude",
        "Type": "Take Away",
        "Menus": "4",
        "GrandTotal": "$45.30"
    },
    {
        "TransactionID": "#23581",
        "OrderID": "#56998",
        "TokenNo": "9",
        "Image": "avatar-39.jpg",
        "Customer": "Andrea Aponte",
        "Type": "Take Away",
        "Menus": "7",
        "GrandTotal": "$72.60"
    },
    {
        "TransactionID": "#23580",
        "OrderID": "#56997",
        "TokenNo": "8",
        "Image": "avatar-40.jpg",
        "Customer": "David Belcher",
        "Type": "Take Away",
        "Menus": "3",
        "GrandTotal": "$32.10"
    },
    {
        "TransactionID": "#23579",
        "OrderID": "#56996",
        "TokenNo": "7",
        "Image": "avatar-41.jpg",
        "Customer": "Julie Kangas",
        "Type": "Take Away",
        "Menus": "4",
        "GrandTotal": "$40.30"
    }
]

export default {
    components: {
        BasePagination,
        draggable: VueDraggableNext,
    },
    data() {
        return {
            searchQuery: "",
            data,
            columns,
            currentPage: 1,
            pageSize: 10,
            pageSizeOptions: [5, 10, 20, 50],
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
    },
    computed: {
        filteredPages() {
            const query = this.searchQuery.toLowerCase();
            return this.data.filter((record) => {
                return (
                    record.TransactionID.toLowerCase().includes(query) ||
                    record.OrderID.toLowerCase().includes(query) ||
                    record.TokenNo.toLowerCase().includes(query) ||
                    record.Customer.toLowerCase().includes(query) ||
                    record.Type.toLowerCase().includes(query) ||
                    record.Menus.toLowerCase().includes(query) ||
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