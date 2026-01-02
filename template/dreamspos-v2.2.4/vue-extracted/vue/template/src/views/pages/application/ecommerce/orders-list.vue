<template>
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <div class="page-wrapper">
        <div class="content">
            <div class="page-header">
                <div class="add-item d-flex">
                    <div class="page-title">
                        <h4 class="fw-bold">Order List</h4>
                        <h6>Manage your orders</h6>
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
            </div>
            
            <!-- /product list -->
            <div class="card table-list-card">
                <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                    <div class="search-set">
                        <div class="search-input">
                            <a href="javascript:void(0);" class="btn-searchset"><i class="ti ti-search fs-14 feather-search"></i></a>
                            <input type="search" class="form-control form-control-sm" placeholder="Search">
                        </div>
                    </div>
                    <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                        <div class="dropdown me-2">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                Product
                            </a>
                            <ul class="dropdown-menu  dropdown-menu-end p-3">
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Lenovo IdeaPad 3</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Beats Pro </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Nike Jordan</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Apple Series 5 Watch</a>
                                </li>
                            </ul>
                        </div>
                        <div class="dropdown me-2">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                Created By
                            </a>
                            <ul class="dropdown-menu  dropdown-menu-end p-3">
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">James Kirwin</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Francis Chang</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Antonio Engle</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Leo Kelly</a>
                                </li>
                            </ul>
                        </div>
                        <div class="dropdown me-2">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                Category
                            </a>
                            <ul class="dropdown-menu  dropdown-menu-end p-3">
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Computers</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Electronics</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Shoe</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Electronics</a>
                                </li>
                            </ul>
                        </div>
                        <div class="dropdown me-2">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                Brand
                            </a>
                            <ul class="dropdown-menu  dropdown-menu-end p-3">
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Lenovo</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Beats</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Nike</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Apple</a>
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
                    <div class="custom-datatable-filter table-responsive">
                        <a-table
                            class="table datatable thead-light"
                            :columns="columns"
                            :data-source="data"
                            :row-selection="rowSelection"
                        >
                            <template #bodyCell="{ column, record }">
                                <template v-if="column.key === 'Customer'">
                                    <div class="userimgname">
                                        <span class="avatar avatar-sm">
                                            <a href="javascript:void(0);" >
                                                <img :src="getImageUrl(record.Image)" alt="product">
                                            </a>
                                        </span>
                                        <a href="javascript:void(0);">{{record.Customer}}</a>
                                    </div>
                                </template>
                                <template v-if="column.key === 'Status'">
                                    <span :class="record.BadgeClass" class="fs-10 text-white p-1 rounded"><i class="ti ti-point-filled me-1"></i>{{record.Status}}</span>
                                </template>
                                <template v-if="column.key === 'action'">
                                    <div class="d-flex">
                                        <div class="edit-delete-action d-flex align-items-center">
                                            <router-link class="me-2 edit-icon  d-flex align-items-center border rounded p-2" to="/invoice-details">
                                                <i data-feather="eye" class="feather-eye"></i>
                                            </router-link>
                                            <router-link class="me-2 p-2 d-flex align-items-center border rounded" to="/ecommerce/edit-product" >
                                                <i data-feather="edit" class="feather-edit"></i>
                                            </router-link>
                                            <a class="p-2 d-flex align-items-center border rounded" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete">
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

    <orders-modal></orders-modal>
</template>

<script>
const data = [
 {
   "Id": "1",
   "Order_ID": "5655898",
   "Image": "user-30.jpg",
   "Customer": "James Kirwin",
   "Payment_Type": "PayPal",
   "Amount": "$600",
   "Date_Time": "24 Dec 2024, 04:12 PM",
   "BadgeClass": "bg-success",
   "Status": "Completed"
 },
 {
   "Id": "2",
   "Order_ID": "5573158",
   "Image": "user-13.jpg",
   "Customer": "Francis Chang",
   "Payment_Type": "PayPal",
   "Amount": "$160",
   "Date_Time": "10 Dec 2024, 10:30 AM",
   "BadgeClass": "bg-cyan",
   "Status": "Pending"
 },
 {
   "Id": "3",
   "Order_ID": "4837512",
   "Image": "user-11.jpg",
   "Customer": "Antonio Engle",
   "Payment_Type": "Debit Card",
   "Amount": "$110",
   "Date_Time": "27 Nov 2024, 03:15 PM",
   "BadgeClass": "bg-success",
   "Status": "Completed"
 },
 {
   "Id": "4",
   "Order_ID": "4628754",
   "Image": "user-32.jpg",
   "Customer": "Leo Kelly",
   "Payment_Type": "PayPal",
   "Amount": "$120",
   "Date_Time": "18 Nov 2024, 09:00 AM",
   "BadgeClass": "bg-success",
   "Status": "Completed"
 },
 {
   "Id": "5",
   "Order_ID": "4279685",
   "Image": "user-02.jpg",
   "Customer": "Annette Walker",
   "Payment_Type": "PayPal",
   "Amount": "$80",
   "Date_Time": "06 Nov 2024, 10:45 AM",
   "BadgeClass": "bg-purple",
   "Status": "Proccessing"
 },
 {
   "Id": "6",
   "Order_ID": "3754250",
   "Image": "user-05.jpg",
   "Customer": "John Weaver",
   "Payment_Type": "Debit Card",
   "Amount": "$320",
   "Date_Time": "25 Oct 2024, 06:30 PM",
   "BadgeClass": "bg-success",
   "Status": "Completed"
 },
 {
   "Id": "7",
   "Order_ID": "3459687",
   "Image": "user-08.jpg",
   "Customer": "Gary Hennessy",
   "Payment_Type": "PayPal",
   "Amount": "$60",
   "Date_Time": "14 Oct 2024, 02:45 PM",
   "BadgeClass": "bg-success",
   "Status": "Completed"
 },
 {
   "Id": "8",
   "Order_ID": "2186348",
   "Image": "user-04.jpg",
   "Customer": "Eleanor Panek",
   "Payment_Type": "Credit Card",
   "Amount": "$540",
   "Date_Time": "14 Oct 2024, 02:45 PM",
   "BadgeClass": "bg-cyan",
   "Status": "Pending"
 },
 {
   "Id": "9",
   "Order_ID": "3754250",
   "Image": "user-09.jpg",
   "Customer": "William Levy",
   "Payment_Type": "PayPal",
   "Amount": "$200",
   "Date_Time": "03 Oct 2024, 11:20 AM",
   "BadgeClass": "bg-success",
   "Status": "Completed"
 },
 {
   "Id": "10",
   "Order_ID": "2973542",
   "Image": "user-10.jpg",
   "Customer": "Charlotte Klotz",
   "Payment_Type": "Credit Card",
   "Amount": "$45",
   "Date_Time": "20 Sep 2024, 07:10 PM",
   "BadgeClass": "bg-success",
   "Status": "Completed"
 },
 {
   "Id": "11",
   "Order_ID": "3754250",
   "Image": "user-10.jpg",
   "Customer": "Charlotte Klotz",
   "Payment_Type": "Debit Card",
   "Amount": "$45",
   "Date_Time": "14 Oct 2024, 02:45 PM",
   "BadgeClass": "bg-cyan",
   "Status": "Pending"
 }
]

const columns = [
    {
        sorter: false,
    },
    {
        title: "Order ID",
        dataIndex: "Order_ID",
        sorter: {
            compare: (a, b) => {
                a = a.Order_ID.toLowerCase();
                b = b.Order_ID.toLowerCase();
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
        title: "Payment Type",
        dataIndex: "Payment_Type",
        sorter: {
            compare: (a, b) => {
                a = a.Payment_Type.toLowerCase();
                b = b.Payment_Type.toLowerCase();
                return a > b ? -1 : b > a ? 1 : 0;
            },
        },
    },
    {
        title: "Amount",
        dataIndex: "Amount",
        sorter: {
            compare: (a, b) => {
                a = a.Amount.toLowerCase();
                b = b.Amount.toLowerCase();
                return a > b ? -1 : b > a ? 1 : 0;
            },
        },
    },
    {
        title: "Date & Time",
        dataIndex: "Date_Time",
        sorter: {
            compare: (a, b) => {
                a = a.Date_Time.toLowerCase();
                b = b.Date_Time.toLowerCase();
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
    data(){
        return{
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