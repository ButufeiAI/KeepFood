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
                    <h3 class="mb-0">Invoices <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle ms-2"><i class="icon-refresh-ccw"></i></a></h3>
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
                                <template v-if="column.key === 'InvoiceID'">
                                    <router-link to="/operations/invoice-details">{{ record.InvoiceID }}</router-link>
                                </template>
                                <template v-if="column.key === 'Customer'">
                                    <div class="d-flex align-items-center">
                                        <a href="#" class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2">
                                            <img :src="getImageUrl(record.Image)" alt="category" class="img-fluid">
                                        </a>
                                        <h6 class="fs-14 fw-normal mb-0"><a href="#">{{record.Customer}}</a></h6>
                                    </div>
                                </template>
                                <template v-if="column.key === 'Status'">
                                    <span class="badge badge-soft-success">{{record.Status}}</span>
                                </template>
                                <template v-if="column.key === 'action'">
                                    <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2"><i class="icon-download"></i></a>
                                    <router-link to="/operations/invoice-details" class="btn btn-icon btn-sm btn-white rounded-circle me-2"><i class="icon-eye"></i></router-link>
                                    <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal" @click="setDelete(record)"><i class="icon-trash-2"></i></a>
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

    <invoice-modal></invoice-modal>

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
        title: "Invoice ID",
        dataIndex: "InvoiceID",
        key: "InvoiceID",
        sorter: {
            compare: (a, b) => (a.InvoiceID.toLowerCase() > b.InvoiceID.toLowerCase() ? -1 : 1),
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
        title: "Date",
        dataIndex: "Date",
        key: "Date",
        sorter: {
            compare: (a, b) => (a.Date.toLowerCase() > b.Date.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Order Type",
        dataIndex: "OrderType",
        key: "OrderType",
        sorter: {
            compare: (a, b) => (a.OrderType.toLowerCase() > b.OrderType.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Amount",
        dataIndex: "Amount",
        key: "Amount",
        sorter: {
            compare: (a, b) => (a.Amount.toLowerCase() > b.Amount.toLowerCase() ? -1 : 1),
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
        "InvoiceID": "#INV0016",
        "Image": "avatar-32.jpg",
        "Customer": "Adrian James",
        "Date": "01 Nov 2025",
        "OrderType": "Dine In",
        "Amount": "$1000",
        "Status": "Paid"
    },
    {
        "InvoiceID": "#INV0015",
        "Image": "avatar-33.jpg",
        "Customer": "Sue Allen",
        "Date": "04 Sep 2025",
        "OrderType": "Take Away",
        "Amount": "$1500",
        "Status": "Paid"
    },
    {
        "InvoiceID": "#INV0014",
        "Image": "avatar-34.jpg",
        "Customer": "Frank Barrett",
        "Date": "18 Aug 2025",
        "OrderType": "Delivery",
        "Amount": "$1200",
        "Status": "Paid"
    },
    {
        "InvoiceID": "#INV0013",
        "Image": "avatar-35.jpg",
        "Customer": "Kelley Davis",
        "Date": "10 Jul 2025",
        "OrderType": "Dine In",
        "Amount": "$800",
        "Status": "Paid"
    },
    {
        "InvoiceID": "#INV0012",
        "Image": "avatar-36.jpg",
        "Customer": "Jim Vickers",
        "Date": "05 Jun 2025",
        "OrderType": "Delivery",
        "Amount": "$750",
        "Status": "Paid"
    },
    {
        "InvoiceID": "#INV0011",
        "Image": "avatar-37.jpg",
        "Customer": "Nancy Chapman",
        "Date": "03 May 2025",
        "OrderType": "Dine In",
        "Amount": "$1300",
        "Status": "Paid"
    },
    {
        "InvoiceID": "#INV0010",
        "Image": "avatar-38.jpg",
        "Customer": "Ron Jude",
        "Date": "15 Apr 2025",
        "OrderType": "Take Away",
        "Amount": "$1100",
        "Status": "Paid"
    },
    {
        "InvoiceID": "#INV0009",
        "Image": "avatar-39.jpg",
        "Customer": "Andrea Aponte",
        "Date": "22 Mar 2025",
        "OrderType": "Delivery",
        "Amount": "$600",
        "Status": "Paid"
    },
    {
        "InvoiceID": "#INV0008",
        "Image": "avatar-40.jpg",
        "Customer": "David Belcher",
        "Date": "15 Feb 2025",
        "OrderType": "Take Away",
        "Amount": "$1300",
        "Status": "Paid"
    },
    {
        "InvoiceID": "#INV0007",
        "Image": "avatar-41.jpg",
        "Customer": "Julie Kangas",
        "Date": "01 Jan 2025",
        "OrderType": "Dine In",
        "Amount": "$800",
        "Status": "Paid"
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
                    record.InvoiceID.toLowerCase().includes(query) ||
                    record.Customer.toLowerCase().includes(query) ||
                    record.Date.toLowerCase().includes(query) ||
                    record.OrderType.toLowerCase().includes(query) ||
                    record.Amount.toLowerCase().includes(query) ||
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