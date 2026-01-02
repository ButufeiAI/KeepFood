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
                    <h3 class="mb-0">Categories <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle ms-2"><i class="icon-refresh-ccw"></i></a></h3>
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
                    <a href="#" class="btn btn-primary d-inline-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_category"><i class="icon-circle-plus me-1"></i>Add New</a>
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
                                <a href="javascript:void(0);" class="btn btn-icon btn-white" data-bs-toggle="dropdown" data-bs-auto-close="outside"><i class="icon-columns-3"></i></a>
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
                                <template v-if="column.key === 'Category'">
                                    <div class="d-flex align-items-center">
                                        <a href="#" class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2">
                                            <img :src="getImageUrl(record.Image)" alt="category" class="img-fluid">
                                        </a>
                                        <h6 class="fs-14 fw-normal mb-0">{{record.Category}}</h6>
                                    </div>
                                </template>
                                <template v-if="column.key === 'Status'">
                                    <div class="d-flex align-items-center">
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
                                    </div>
                                </template>
                                <template v-if="column.key === 'action'">
                                    <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#edit_category">
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

    <categories-modal></categories-modal>

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
        title: "Category",
        dataIndex: "Category",
        key: "Category",
        sorter: {
            compare: (a, b) => (a.Category.toLowerCase() > b.Category.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "No of Items",
        dataIndex: "No_of_Items",
        key: "No_of_Items",
        sorter: {
            compare: (a, b) => (a.No_of_Items.toLowerCase() > b.No_of_Items.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Created On",
        dataIndex: "Created_On",
        sorter: {
            compare: (a, b) => (a.Created_On.toLowerCase() > b.Created_On.toLowerCase() ? -1 : 1),
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
        "Image": "category-01.png",
        "Category": "Sea Food",
        "No_of_Items": "28",
        "Created_On": "February 15, 2025",
        "Status": "Active"
    },
    {
        "Image": "category-02.png",
        "Category": "Pizza",
        "No_of_Items": "42",
        "Created_On": "March 10, 2025",
        "Status": "Active"
    },
    {
        "Image": "category-03.png",
        "Category": "Salads",
        "No_of_Items": "66",
        "Created_On": "April 5, 2025",
        "Status": "Active"
    },
    {
        "Image": "category-04.png",
        "Category": "Tacos",
        "No_of_Items": "48",
        "Created_On": "May 20, 2025",
        "Status": "Expired"
    },
    {
        "Image": "category-05.png",
        "Category": "Burgers",
        "No_of_Items": "24",
        "Created_On": "June 30, 2025",
        "Status": "Active"
    },
    {
        "Image": "category-06.png",
        "Category": "Ice Cream",
        "No_of_Items": "36",
        "Created_On": "July 18, 2025",
        "Status": "Active"
    },
    {
        "Image": "category-07.png",
        "Category": "Pasta",
        "No_of_Items": "48",
        "Created_On": "August 12, 2025",
        "Status": "Active"
    },
    {
        "Image": "category-08.png",
        "Category": "Beverages",
        "No_of_Items": "32",
        "Created_On": "September 19, 2025",
        "Status": "Active"
    },
    {
        "Image": "category-09.png",
        "Category": "Steaks",
        "No_of_Items": "22",
        "Created_On": "October 7, 2025",
        "Status": "Expired"
    },
    {
        "Image": "category-10.png",
        "Category": "Soups",
        "No_of_Items": "18",
        "Created_On": "November 25, 2025",
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
        getImageUrl(imageName) {
            return new URL(`/src/assets/img/category/${imageName}`, import.meta.url).href;
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
                    record.Category.toLowerCase().includes(query) ||
                    record.No_of_Items.toLowerCase().includes(query) ||
                    record.Created_On.toLowerCase().includes(query) ||
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