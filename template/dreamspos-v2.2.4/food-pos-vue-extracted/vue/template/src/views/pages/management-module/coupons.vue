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
                    <h3 class="mb-0">Coupons<a href="#" class="btn btn-icon btn-sm btn-white rounded-circle ms-2"><i class="icon-refresh-ccw"></i></a></h3>
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
                    <a href="#" class="btn btn-primary d-inline-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_coupon"><i class="icon-circle-plus me-1"></i>Add New</a>
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
                                <template v-if="column.key === 'Status'">
                                    <span class="badge"
                                        :class="[
                                            { 
                                                'badge-soft-success': record.Status === 'Active', 
                                                'badge-soft-danger': record.Status === 'Expired'
                                            },
                                        ]"
                                    >
                                        {{record.Status}}
                                    </span>
                                </template>
                                <template v-if="column.key === 'action'">
                                    <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#show_coupon">
                                        <i class="icon-eye"></i>
                                    </a>
                                    <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#edit_coupon">
                                        <i class="icon-pencil-line"></i>
                                    </a>
                                    <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal" @click="setDelete(record)">
                                        <i class="icon-trash-2"></i>
                                    </a>
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

    <coupons-modal></coupons-modal>

    <!-- Start Modal  -->
    <div class="modal fade" id="delete_modal">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">
                <div class="modal-body text-center p-4">
                    <div class="mb-4">
                        <span class="avatar avatar-xxl rounded-circle bg-danger-subtle">
                            <img src="@/assets/img/icons/trash-icon.svg" alt="trash" class="img-fluid w-auto h-auto">
                        </span>
                    </div>
                    <h4 class="mb-1">Delete Confirmation</h4>
                    <p class="mb-4">Are you sure you want to delete?</p>
                    <div class="d-flex justify-content-center gap-2">
                        <a href="#" class="btn btn-light w-100" data-bs-dismiss="modal">Close</a>
                        <a href="#" class="btn btn-danger w-100" data-bs-dismiss="modal" @click="deleteItem">Delete</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Modal  -->  
</template>

<script>
import BasePagination from '@/components/BasePagination.vue';
import { VueDraggableNext } from 'vue-draggable-next';

const columns = [
    {
        title: "Coupon Code",
        dataIndex: "Coupon_Code",
        key: "Coupon_Code",
        sorter: {
            compare: (a, b) => (a.Coupon_Code.toLowerCase() > b.Coupon_Code.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Valid Category",
        dataIndex: "Valid_Category",
        sorter: {
            compare: (a, b) => (a.Valid_Category.toLowerCase() > b.Valid_Category.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Discount Type",
        dataIndex: "Discount_Type",
        sorter: {
            compare: (a, b) => (a.Discount_Type.toLowerCase() > b.Discount_Type.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Discount Amount",
        dataIndex: "Discount_Amount",
        sorter: {
            compare: (a, b) => (a.Discount_Amount.toLowerCase() > b.Discount_Amount.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Duration",
        dataIndex: "Duration",
        sorter: {
            compare: (a, b) => (a.Duration.toLowerCase() > b.Duration.toLowerCase() ? -1 : 1),
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
    {
        title: "Action",
        key: "action",
        sorter: false,
    },
]

const data = [
    {
        "Coupon_Code": "SEAFOOD10",
        "Valid_Category": "Sea Foods",
        "Discount_Type": "Percentage",
        "Discount_Amount": "10%",
        "Duration": "01 Jan 2025 - 31 Dec 2025",
        "Status": "Active"
    },
    {
        "Coupon_Code": "PIZZA20",
        "Valid_Category": "Pizza Orders",
        "Discount_Type": "Fixed Amount",
        "Discount_Amount": "20%",
        "Duration": "15 Feb 2025 - 20 Nov 2025",
        "Status": "Active"
    },
    {
        "Coupon_Code": "SALAD15",
        "Valid_Category": "Salads",
        "Discount_Type": "Percentage",
        "Discount_Amount": "15%",
        "Duration": "22 Mar 2025 - 25 Nov 2025",
        "Status": "Active"
    },
    {
        "Coupon_Code": "TACO5",
        "Valid_Category": "Salads",
        "Discount_Type": "Percentage",
        "Discount_Amount": "$5",
        "Duration": "15 Apr 2025 - 10 Oct 2025",
        "Status": "Expired"
    },
    {
        "Coupon_Code": "WEEKEND25",
        "Valid_Category": "All Categories",
        "Discount_Type": "Percentage",
        "Discount_Amount": "25%",
        "Duration": "03 May 2025 - 13 Nov 2025",
        "Status": "Active"
    },
    {
        "Coupon_Code": "COMBO50",
        "Valid_Category": "Combo Meals",
        "Discount_Type": "Percentage",
        "Discount_Amount": "5%",
        "Duration": "05 Jun 2025 - 20 Dec 2025",
        "Status": "Active"
    },
    {
        "Coupon_Code": "HOLIDAY30",
        "Valid_Category": "All Categories",
        "Discount_Type": "Fixed Amount",
        "Discount_Amount": "$30",
        "Duration": "10 Jul 2025 - 15 Dec 2025",
        "Status": "Active"
    },
    {
        "Coupon_Code": "SWEET10",
        "Valid_Category": "Desserts",
        "Discount_Type": "Percentage",
        "Discount_Amount": "10%",
        "Duration": "18 Aug 2025 - 25 Dec 2025",
        "Status": "Active"
    },
    {
        "Coupon_Code": "FAMILYFEAST",
        "Valid_Category": "All Categories",
        "Discount_Type": "Fixed Amount",
        "Discount_Amount": "$100",
        "Duration": "04 Sep 2025 - 10 Oct 2025",
        "Status": "Expired"
    },
    {
        "Coupon_Code": "FIRSTORDER",
        "Valid_Category": "All Categories",
        "Discount_Type": "Fixed Amount",
        "Discount_Amount": "$50",
        "Duration": "01 Nov 2025 - 31 Dec 2025",
        "Status": "Active"
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
                    record.Coupon_Code.toLowerCase().includes(query) ||
                    record.Valid_Category.toLowerCase().includes(query) ||
                    record.Discount_Type.toLowerCase().includes(query) ||
                    record.Discount_Amount.toLowerCase().includes(query) ||
                    record.Duration.toLowerCase().includes(query) ||
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