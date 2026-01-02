<template>
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
    
    <div class="page-wrapper">
        <div class="content">
            <div class="page-header">
                <div class="add-item d-flex">
                    <div class="page-title">
                        <h4 class="fw-bold">Customers</h4>
                        <h6>Manage your customers</h6>
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
                    <a href="#" class="btn btn-primary text-white" data-bs-toggle="modal" data-bs-target="#add-units"><i class="ti ti-circle-plus me-1"></i>Add Customer</a>
                </div>
            </div>
            <!-- /product list -->
            <div class="card table-list-card">
                <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                    <div class="search-set">
                        <div class="search-input">
                            <a href="#" class="btn-searchset"><i data-feather="search" class="feather-search"></i></a>
                            <input type="search" class="form-control form-control-sm" placeholder="Search">
                        </div>
                    </div>
                    <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                                
                        <div class="dropdown me-2">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                Status
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
                    <div class="table-responsive">
                        <a-table
                            class="table datatable thead-light"
                            :columns="columns"
                            :data-source="data"
                            :row-selection="rowSelection"
                        >
                            <template #bodyCell="{ column, record }">
                                <template v-if="column.key === 'Customer'">
                                    <div class="d-flex align-items-center">
                                        <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                            <img :src="getImageUrl(record.Image)" alt="product">
                                        </a>
                                        <a href="javascript:void(0);">{{record.Customer}}</a>
                                    </div>
                                </template>
                                <template v-if="column.key === 'Status'">
                                    <span class="d-inline-flex align-items-center p-1 pe-2 rounded-1 text-white bg-success fs-10"><i class="ti ti-point-filled me-1 fs-11"></i>{{record.Status}}</span>
                                </template>
                                <template v-if="column.key === 'action'">
                                    <div class="d-flex">
                                        <div class="edit-delete-action d-flex align-items-center">
                                            <a class="me-2 p-2 d-flex align-items-center border rounded" href="#">
                                                <i data-feather="eye" class="feather-eye"></i>
                                            </a>
                                            <a class="me-2 p-2 d-flex align-items-center border rounded" href="#" data-bs-toggle="modal" data-bs-target="#edit-units">
                                                <i data-feather="edit" class="feather-edit"></i>
                                            </a>
                                            <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="p-2 d-flex align-items-center border rounded" href="javascript:void(0);">
                                                <i data-feather="trash-2" class="feather-trash-2"></i>
                                            </a>
                                        </div>                                        
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
            <p class="mb-0 text-gray-9">2014-2025 © DreamsPOS. All Right Reserved</p>
            <p>Designed &amp; Developed By <a href="javascript:void(0);" class="text-primary">Dreams</a></p>
        </div>
    </div>

    <customers-modal></customers-modal>
</template>

<script>
const data = [
 {
   "ID": "1",
   "Code": "CU001",
   "Image": "user-33.png",
   "Customer": "Carl Evans",
   "Email": "carlevans@example.com",
   "Phone": "12163547758",
   "Country": "Germany",
   "Status": "Active"
 },
 {
   "ID": "2",
   "Code": "CU002",
   "Image": "user-02.jpg",
   "Customer": "Minerva Rameriz",
   "Email": "rameriz@example.com",
   "Phone": "11367529510",
   "Country": "Japan",
   "Status": "Active"
 },
 {
   "ID": "3",
   "Code": "CU003",
   "Image": "user-34.jpg",
   "Customer": "Robert Lamon",
   "Email": "robert@example.com",
   "Phone": "15362789414",
   "Country": "USA",
   "Status": "Active"
 },
 {
   "ID": "4",
   "Code": "CU004",
   "Image": "user-35.jpg",
   "Customer": "Patricia Lewis",
   "Email": "patricia@example.com",
   "Phone": "18513094627",
   "Country": "Austria",
   "Status": "Active"
 },
 {
   "ID": "5",
   "Code": "CU005",
   "Image": "user-36.jpg",
   "Customer": "Mark Joslyn",
   "Email": "markjoslyn@example.com",
   "Phone": "14678219025",
   "Country": "Turkey",
   "Status": "Active"
 },
 {
   "ID": "6",
   "Code": "CU006",
   "Image": "user-37.jpg",
   "Customer": "Marsha Betts",
   "Email": "marshabetts@example.com",
   "Phone": "10913278319",
   "Country": "Mexico",
   "Status": "Active"
 },
 {
   "ID": "7",
   "Code": "CU007",
   "Image": "user-28.jpg",
   "Customer": "Daniel Jude",
   "Email": "daieljude@example.com",
   "Phone": "19125852947",
   "Country": "France",
   "Status": "Active"
 },
 {
   "ID": "8",
   "Code": "CU008",
   "Image": "user-38.jpg",
   "Customer": "Emma Bates",
   "Email": "emmabates@example.com",
   "Phone": "13671835209",
   "Country": "Greece",
   "Status": "Active"
 },
 {
   "ID": "9",
   "Code": "CU009",
   "Image": "user-39.jpg",
   "Customer": "Richard Fralick",
   "Email": "richard@example.com",
   "Phone": "19756194733",
   "Country": "Italy",
   "Status": "Active"
 },
 {
   "ID": "10",
   "Code": "CU010",
   "Image": "user-40.jpg",
   "Customer": "Michelle Robison",
   "Email": "robinson@example.com",
   "Phone": "19167850925",
   "Country": "China",
   "Status": "Active"
 }
]

const columns = [
    {
        sorter: false,
    },
    {
        title: "Code",
        dataIndex: "Code",
        sorter: {
            compare: (a, b) => {
                a = a.Code.toLowerCase();
                b = b.Code.toLowerCase();
                return a > b ? -1 : b > a ? 1 : 0;
            },
        },
    },
    {
        title: "Customer",
        dataIndex: "Customer",
        key: "Customer",
        sorter: {
            compare: (a, b) => {
                a = a.Customer.toLowerCase();
                b = b.Customer.toLowerCase();
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
        title: "Phone",
        dataIndex: "Phone",
        sorter: {
            compare: (a, b) => {
                a = a.Phone.toLowerCase();
                b = b.Phone.toLowerCase();
                return a > b ? -1 : b > a ? 1 : 0;
            },
        },
    },
    {
        title: "Country",
        dataIndex: "Country",
        sorter: {
            compare: (a, b) => {
                a = a.Country.toLowerCase();
                b = b.Country.toLowerCase();
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
                a = a.status.toLowerCase();
                b = b.status.toLowerCase();
                return a > b ? -1 : b > a ? 1 : 0;
            },
        },
    },
    {
        title: "",
        key: "action",
        sorter: true,
    },
]

const rowSelection = {
    onChange: () => {},
    onSelect: () => {},
    onSelectAll: () => {},
};

export default {
    data() {
        return {
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
            return new URL(`/src/assets/img/users/${imageName}`, import.meta.url).href;
        },
    },
}
</script>