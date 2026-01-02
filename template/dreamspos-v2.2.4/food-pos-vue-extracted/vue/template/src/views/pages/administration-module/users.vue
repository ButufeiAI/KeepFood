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
                    <h3 class="mb-0">Users <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle ms-2"><i class="icon-refresh-ccw"></i></a></h3>
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
                    <a href="#" class="btn btn-primary d-inline-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_users"><i class="icon-circle-plus me-1"></i>Add New</a>
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
                                <template v-if="column.key === 'Name'">
                                    <div class="d-flex align-items-center">
                                        <a href="#" class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2">
                                            <img :src="getImageUrl(record.Image)" alt="category" class="img-fluid">
                                        </a>
                                        <h6 class="fs-14 fw-normal mb-0"><a href="#">{{ record.Name }}</a></h6>
                                    </div>
                                </template>
                                <template v-if="column.key === 'PhoneNumber'">
                                    <p class="text-dark mb-0">{{ record.PhoneNumber }}</p>
                                </template>
                                <template v-if="column.key === 'Status'">
                                    <span class="badge badge-soft-success">{{ record.Status }}</span>
                                </template>
                                <template v-if="column.key === 'action'">
                                    <template v-if="record.Name === 'John Smith'">
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2 disabled" data-bs-toggle="modal" data-bs-target="#user_permission">
                                            <i class="icon-shield"></i>
                                        </a>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2 disabled" data-bs-toggle="modal" data-bs-target="#edit_users">
                                            <i class="icon-pencil-line"></i>
                                        </a>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle disabled" data-bs-toggle="modal" data-bs-target="#delete_modal">
                                            <i class="icon-trash-2"></i>
                                        </a>
                                    </template>
                                    <template v-else>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#user_permission">
                                            <i class="icon-shield"></i>
                                        </a>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#edit_users">
                                            <i class="icon-pencil-line"></i>
                                        </a>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal" @click="setDelete(record)">
                                            <i class="icon-trash-2"></i>
                                        </a>
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

    <uses-modal></uses-modal>
    
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

const data = [
    {
        "Image": "user-01.jpg",
        "Name": "John Smith",
        "Role": "Admin / Owner",
        "PhoneNumber": "+1 23456 78901",
        "Status": "Active",
    },
    {
        "Image": "user-02.jpg",
        "Name": "Emily Johnson",
        "Role": "Supervisor",
        "PhoneNumber": "+1 34567 89012",
        "Status": "Active",
    },
    {
        "Image": "user-03.jpg",
        "Name": "David Williams",
        "Role": "Cashier",
        "PhoneNumber": "+1 45678 90123",
        "Status": "Active",
    },
    {
        "Image": "user-04.jpg",
        "Name": "Ashley Brown",
        "Role": "Chef",
        "PhoneNumber": "+1 56789 01234",
        "Status": "Active",
    },
    {
        "Image": "user-05.jpg",
        "Name": "Michael Davis",
        "Role": "Waiter",
        "PhoneNumber": "+1 67890 12345",
        "Status": "Active",
    },
    {
        "Image": "user-06.jpg",
        "Name": "Brittany Miller",
        "Role": "Delivery",
        "PhoneNumber": "+1 78901 23456",
        "Status": "Active",
    },
    {
        "Image": "user-07.jpg",
        "Name": "Christopher Wilson",
        "Role": "Accountant",
        "PhoneNumber": "+1 89012 34567",
        "Status": "Active",
    },
    {
        "Image": "user-08.jpg",
        "Name": "Jessica Moore",
        "Role": "System Operator",
        "PhoneNumber": "+1 90123 45678",
        "Status": "Active",
    },
    {
        "Image": "user-09.jpg",
        "Name": "Matthew Taylor",
        "Role": "Chef",
        "PhoneNumber": "+1 01234 56789",
        "Status": "Active",
    },
    {
        "Image": "user-10.jpg",
        "Name": "Sarah Anderson",
        "Role": "Chef",
        "PhoneNumber": "+1 12345 67890",
        "Status": "Active",
    }
]

const columns = [
    {
        title: "Name",
        dataIndex: "Name",
        key: "Name",
        sorter: {
            compare: (a, b) => (a.Name.toLowerCase() > b.Name.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Role",
        dataIndex: "Role",
        sorter: {
            compare: (a, b) => (a.Role.toLowerCase() > b.Role.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Phone Number",
        dataIndex: "PhoneNumber",
        key: "PhoneNumber",
        sorter: {
            compare: (a, b) => (a.PhoneNumber.toLowerCase() > b.PhoneNumber.toLowerCase() ? -1 : 1),
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
            return new URL(`/src/assets/img/users/${imageName}`, import.meta.url).href;
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
                    record.Name.toLowerCase().includes(query) ||
                    record.Role.toLowerCase().includes(query) ||
                    record.PhoneNumber.toLowerCase().includes(query) ||
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