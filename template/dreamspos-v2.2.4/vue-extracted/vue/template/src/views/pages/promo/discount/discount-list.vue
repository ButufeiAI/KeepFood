<template>
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <div class="page-wrapper">
        <div class="content">
            <div class="page-header">
                <div class="add-item d-flex">
                    <div class="page-title">
                        <h4 class="fw-bold">Discount</h4>
                        <h6>Manage your discount</h6>
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
                        <a-table class="table datanew" :columns="columns" :data-source="data" :row-selection="{}">
                            <template #bodyCell="{ column, record }">
                                <template v-if="column.key === 'Status'">
                                    <div class="text-gray-9">Weekend Deal</div>	
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
            <!-- /product list -->
        </div>
        <div class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
            <p class="mb-0 text-gray-9">2014-2025 © DreamsPOS. All Right Reserved</p>
            <p>Designed &amp; Developed By <a href="javascript:void(0);" class="text-primary">Dreams</a></p>
        </div>
    </div>

    <discount-list-modal></discount-list-modal>
</template>

<script>

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
    title: "Value",
    dataIndex: "Value",
    sorter: {
      compare: (a, b) => {
        a = a.Value.toLowerCase();
        b = b.Value.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Discount_Plan",
    dataIndex: "Discount_Plan",
    sorter: {
      compare: (a, b) => {
        a = a.Discount_Plan.toLowerCase();
        b = b.Discount_Plan.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Valitidy",
    dataIndex: "Valitidy",
    sorter: {
      compare: (a, b) => {
        a = a.Valitidy.toLowerCase();
        b = b.Valitidy.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Days",
    dataIndex: "Days",
    sorter: {
      compare: (a, b) => {
        a = a.Days.toLowerCase();
        b = b.Days.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Products",
    dataIndex: "Products",
    sorter: {
      compare: (a, b) => {
        a = a.Products.toLowerCase();
        b = b.Products.toLowerCase();
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
   "Id": "1",
   "Name": "Weekend Deal",
   "Value": "70 (Percentage)",
   "Discount_Plan": "Standard",
   "Valitidy": "22 May 2025 - 24 Jun 2025",
   "Days": "Sat,Sun",
   "Products": "All Products",
   "Status": "Active",
 },
 {
   "Id": "2",
   "Name": "Loyalty Reward",
   "Value": "40 (Flat)",
   "Discount_Plan": "Membership",
   "Valitidy": "16 Apr 2025 - 16 May 2025",
   "Days": "Mon,Tue,Thu,Fri",
   "Products": "Specific Products",
   "Status": "Active",
 },
 {
   "Id": "3",
   "Name": "Flash Sale",
   "Value": "60 (Percentage)",
   "Discount_Plan": "Standard",
   "Valitidy": "20 Mar 2025 - 20 Apr 2025",
   "Days": "Thu,Fri,Sat,Sun",
   "Products": "All Products",
   "Status": "Active",
 },
 {
   "Id": "4",
   "Name": "Super Saver",
   "Value": "80 (Percentage)",
   "Discount_Plan": "Standard",
   "Valitidy": "15 Feb 2025 - 15 Apr 2025",
   "Days": "Mon,Tue,Wed",
   "Products": "All Products",
   "Status": "Active",
 },
 {
   "Id": "5",
   "Name": "Surprise Savings",
   "Value": "50 (Flat)",
   "Discount_Plan": "Standard",
   "Valitidy": "24 Jan 2025 - 24 Mar 2025",
   "Days": "Mon,Tue,Thu,Sat",
   "Products": "Specific Products",
   "Status": "Active",
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