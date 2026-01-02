<template>
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <div class="page-wrapper">
        <div class="content">
            <div class="page-header">
                <div class="add-item d-flex">
                    <div class="page-title">
                        <h4 class="fw-bold">Contacts</h4>
                        <h6>Manage your contacts</h6>
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
                    <a href="#" class="btn btn-primary text-white" data-bs-toggle="modal" data-bs-target="#add-units"><i class="ti ti-circle-plus me-1"></i>Add Contact</a>
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
                        <a-table :columns="columns" :data-source="data" :row-selection="{}">
                            <template #bodyCell="{ column, record }">
                                <template v-if="column.key === 'Name'">
                                    <div class="d-flex align-items-center">
                                        <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                            <img :src="getImageUrl(record.Image)" alt="product">
                                        </a>
                                        <a href="javascript:void(0);">{{record.Name}}</a>
                                    </div>
                                </template>
                                <template v-else-if="column.key === 'Status'">
                                    <span class="d-inline-flex align-items-center p-1 pe-2 rounded-1 text-white bg-success fs-10">
                                        <i class="ti ti-point-filled me-1 fs-11"></i>{{record.Status}}
                                    </span>
                                </template>
                                <template v-else-if="column.key === 'action'">
                                    <div class="d-flex">
                                        <div class="edit-delete-action d-flex align-items-center">
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

    <contacts-modal></contacts-modal>
</template>

<script>
const data = [
 {
   "Id": "1",
   "Image": "user-33.png",
   "Name": "Carl Evans",
   "Email": "carlevans@example.com",
   "Phone": "12163547758",
   "Role": "Admin",
   "Status": "Active"
 },
 {
   "Id": "2",
   "Image": "user-02.jpg",
   "Name": "Minerva Rameriz",
   "Email": "rameriz@example.com",
   "Phone": "11367529510",
   "Role": "Manager",
   "Status": "Active"
 },
 {
   "Id": "3",
   "Image": "user-34.jpg",
   "Name": "Robert Lamon",
   "Email": "robert@example.com",
   "Phone": "15362789414",
   "Role": "Salesman",
   "Status": "Active"
 },
 {
   "Id": "4",
   "Image": "user-35.jpg",
   "Name": "Patricia Lewis",
   "Email": "patricia@example.com",
   "Phone": "18513094627",
   "Role": "Supervisor",
   "Status": "Active"
 },
 {
   "Id": "5",
   "Image": "user-36.jpg",
   "Name": "Mark Joslyn",
   "Email": "markjoslyn@example.com",
   "Phone": "14678219025",
   "Role": "Store Keeper",
   "Status": "Active"
 },
 {
   "Id": "6",
   "Image": "user-37.jpg",
   "Name": "Marsha Betts",
   "Email": "marshabetts@example.com",
   "Phone": "10913278319",
   "Role": "Purchase",
   "Status": "Active"
 },
 {
   "Id": "7",
   "Image": "user-28.jpg",
   "Name": "Daniel Jude",
   "Email": "daieljude@example.com",
   "Phone": "19125852947",
   "Role": "Delivery Biker",
   "Status": "Active"
 },
 {
   "Id": "8",
   "Image": "user-38.jpg",
   "Name": "Emma Bates",
   "Email": "emmabates@example.com",
   "Phone": "13671835209",
   "Role": "Maintenance",
   "Status": "Active"
 },
 {
   "Id": "9",
   "Image": "user-39.jpg",
   "Name": "Richard Fralick",
   "Email": "richard@example.com",
   "Phone": "19756194733",
   "Role": "Quality Analyst",
   "Status": "Active"
 },
 {
   "Id": "10",
   "Image": "user-40.jpg",
   "Name": "Michelle Robison",
   "Email": "robinson@example.com",
   "Phone": "19167850925",
   "Role": "Accountant",
   "Status": "Active"
 }
]

const columns = [
    {
        sorter: true,
    },
    {
        title: "Name",
        dataIndex: "Name",
        key: "Name",
        sorter: {
            compare: (a, b) => {
                a = a.Name.toLowerCase();
                b = b.Name.toLowerCase();
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
        title: "Role",
        dataIndex: "Role",
        sorter: {
            compare: (a, b) => {
                a = a.Role.toLowerCase();
                b = b.Role.toLowerCase();
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
                a = a.Status.toLowerCase();
                b = b.Status.toLowerCase();
                return a > b ? -1 : b > a ? 1 : 0;
            },
        },
    },
    {
        title: "Action",
        key: "action",
        sorter: true,
    },
]

export default {
    data() {
        return {
            columns,
            data,
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