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
                    <h3 class="mb-0">Store Settings <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle ms-2"><i class="icon-refresh-ccw"></i></a></h3>
                </div>
                <div class="gap-2 d-flex align-items-center flex-wrap">
                    <a href="#" class="btn btn-primary d-inline-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_tax"><i class="icon-circle-plus me-1"></i>Add New</a>
                </div>
            </div>
            <!-- End Page Header -->

            <!-- card start -->
            <div class="card mb-0">
                <div class="card-body">

                    <!-- table start -->
                    <div class="table-responsive table-nowrap">
                        <a-table
                            class="table table-nowrap datatable"
                            :columns="columns"
                            :data-source="paginatedData"
                            :pagination="false"
                        >
                            <template #bodyCell="{ column, record }">
                                <template v-if="column.key === 'Title'">
                                    <div>{{record.Title}}</div>
                                </template>
                                <template v-if="column.key === 'action'">
                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#edit_tax"><i class="icon-pencil-line"></i></a>
                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle text-danger" data-bs-toggle="modal" data-bs-target="#delete_modal" @click="setDelete(record)"><i class="icon-trash-2"></i></a>
                                </template>
                            </template>
                        </a-table>
                    </div>
                    <!-- table end -->
                </div>

            </div>
            <!-- card start -->
                            
        </div>
        <!-- End Content -->  

    </div>

    <!-- ========================
        End Page Content
    ========================= -->

    <tax-settings-modal></tax-settings-modal>
    
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
                        <a href="javascript:void(0);" class="btn btn-light w-100" data-bs-dismiss="modal">Close</a>
                        <router-link to="/settings/tax-settings" class="btn btn-danger w-100" data-bs-dismiss="modal" @click="deleteItem">Delete</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Modal  -->
</template>

<script>
const columns = [
    {
        title: "#",
        dataIndex: "Title",
        key: "Title",
        sorter: {
            compare: (a, b) => (a.Title.toLowerCase() > b.Title.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Tax Name",
        dataIndex: "TaxName",
        sorter: {
            compare: (a, b) => (a.TaxName.toLowerCase() > b.TaxName.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Rate",
        dataIndex: "Rate",
        sorter: {
            compare: (a, b) => (a.Rate.toLowerCase() > b.Rate.toLowerCase() ? -1 : 1),
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
        title: "Action",
        key: "action",
        sorter: false,
    },
]
const data = [
 {
   "Title": "1",
   "TaxName": "CGST",
   "Rate": "9%",
   "Type": "Inclusive / Exclusive",
 },
 {
   "Title": "2",
   "TaxName": "SGST",
   "Rate": "9%",
   "Type": "Inclusive / Exclusive",
 },
 {
   "Title": "3",
   "TaxName": "IGST",
   "Rate": "18%",
   "Type": "Inclusive / Exclusive",
 },
 {
   "Title": "4",
   "TaxName": "VAT",
   "Rate": "10%",
   "Type": "Exclusive",
 },
 {
   "Title": "5",
   "TaxName": "Service Tax",
   "Rate": "15%",
   "Type": "Exclusive",
 }
]
export default {
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
                    record.Title.toLowerCase().includes(query) ||
                    record.TaxName.toLowerCase().includes(query) ||
                    record.Rate.toLowerCase().includes(query) ||
                    record.Type.toLowerCase().includes(query) 
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