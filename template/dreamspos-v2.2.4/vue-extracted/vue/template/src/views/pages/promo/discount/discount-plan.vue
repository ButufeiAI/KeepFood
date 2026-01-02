<template>
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <div class="page-wrapper">
        <div class="content">
            <div class="page-header">
                <div class="add-item d-flex">
                    <div class="page-title">
                        <h4 class="fw-bold">Discount Plan</h4>
                        <h6>Manage your discount plans</h6>
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
                    <a href="#" class="btn btn-primary btn-md d-inline-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add-units">
                        <vue-feather type="plus-circle" class="me-2"></vue-feather>Add Discount Plan
                    </a>
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
                                Customer
                            </a>
                            <ul class="dropdown-menu  dropdown-menu-end p-3">
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">All Customers</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Members Only</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">High-Spending Customers</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Online Customers</a>
                                </li>
                            </ul>
                        </div>	
                        <div class="dropdown me-2">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                Status
                            </a>
                            <ul class="dropdown-menu  dropdown-menu-end p-3">
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Redeemed</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Expired</a>
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
                    <a-table :columns="columns" :data-source="data" :row-selection="{}">
                        <template #bodyCell="{ column, record }">
                            <template v-if="column.key === 'Plan_Name'">
                                <div class="text-gray-9">{{record.Plan_Name}}</div>		
                            </template>							
                            <template v-else-if="column.key === 'Status'">
                                <span class="badge table-badge bg-success fw-medium fs-10">{{record.Status}}</span>
                            </template>
                            <template v-else-if="column.key === 'action'">
                                <div class="action-table-data">
                                    <div class="edit-delete-action">										
                                        <a class="me-2 p-2" href="#" data-bs-toggle="modal" data-bs-target="#edit-units">
                                            <i data-feather="edit" class="feather-edit"></i>
                                        </a>
                                        <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="p-2" href="javascript:void(0);">
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
    </div>
    <div class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
        <p class="mb-0 text-gray-9">2014-2025 © DreamsPOS. All Right Reserved</p>
        <p>Designed &amp; Developed By <a href="javascript:void(0);" class="text-primary">Dreams</a></p>
    </div>

    <discount-plan-modal></discount-plan-modal>
</template>

<script>

const columns = [
  {
    sorter: true,
  },
  {
    title: "Plan Name",
    dataIndex: "Plan_Name",
    key: "Plan_Name",
    sorter: {
      compare: (a, b) => {
        a = a.Plan_Name.toLowerCase();
        b = b.Plan_Name.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Customers",
    dataIndex: "Customers",
    sorter: {
      compare: (a, b) => {
        a = a.Customers.toLowerCase();
        b = b.Customers.toLowerCase();
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

const data = [
 {
   "Id": "",
   "Plan_Name": "Standard Plan",
   "Customers": "All Customers",
   "Status": "Active"
 },
 {
   "Id": "",
   "Plan_Name": "Membership Plan",
   "Customers": "Members Only",
   "Status": "Active"
 },
 {
   "Id": "",
   "Plan_Name": "Premium Plan",
   "Customers": "High-Spending Customers",
   "Status": "Active"
 },
 {
   "Id": "",
   "Plan_Name": "Seasonal Plan",
   "Customers": "All Customers",
   "Status": "Active"
 },
 {
   "Id": "",
   "Plan_Name": "Student Plan",
   "Customers": "Students",
   "Status": "Active"
 },
 {
   "Id": "",
   "Plan_Name": "Free Shipping Plan",
   "Customers": "Online Customers",
   "Status": "Active"
 },
 {
   "Id": "",
   "Plan_Name": "Celebration Plan",
   "Customers": "All Customers",
   "Status": "Active"
 }
]

const rowSelection = {
    onChange: () => {},
    onSelect: () => {},
    onSelectAll: () => {},
};

export default {
    data() {
        return {
            columns,
            data,
            rowSelection,
        }
    },
    methods: {
        toggleHeader() {
            document.getElementById("collapse-header").classList.toggle("active");
            document.body.classList.toggle("header-collapse");
        },
    },
}
</script>