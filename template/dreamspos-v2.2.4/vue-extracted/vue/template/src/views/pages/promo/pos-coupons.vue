<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>

  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4>Coupons</h4>
            <h6>Manage Your Coupons</h6>
          </div>
        </div>
        <ul class="table-top-head">
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"
              ><img src="@/assets/img/icons/pdf.svg" alt="img"
            /></a>
          </li>
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"
              ><img src="@/assets/img/icons/excel.svg" alt="img"
            /></a>
          </li>
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"
              ><i class="ti ti-refresh"></i
            ></a>
          </li>
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" @click="toggleHeader"><i class="ti ti-chevron-up"></i></a>
          </li>
        </ul>
        <div class="page-btn">
          <a href="#" class="btn btn-primary btn-md d-inline-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add-units">
            <vue-feather type="plus-circle" class="me-2"></vue-feather>Add Coupons
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
              Type
              </a>
              <ul class="dropdown-menu  dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Fixed</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Percentage</a>
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
            <a-table :columns="columns" :data-source="data" :row-selection="{}">
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'Name'">
                  <div class="text-gray-9">{{record.Name}}</div>
                </template>
                <template v-else-if="column.key === 'Code'">
                  <div><span class="badge purple-badge">{{record.Code}}</span></div>
                </template>
                <template v-else-if="column.key === 'Status'">
                  <div><span class="badge table-badge bg-success fw-medium fs-10">{{record.Status}}</span></div>
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
  </div>

  <coupons-modal></coupons-modal>
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
    title: "Code",
    dataIndex: "Code",
    key: "Code",
    sorter: {
      compare: (a, b) => {
        a = a.Code.toLowerCase();
        b = b.Code.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Description",
    dataIndex: "Description",
    sorter: {
      compare: (a, b) => {
        a = a.Description.toLowerCase();
        b = b.Description.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Type",
    dataIndex: "Type",
    sorter: {
      compare: (a, b) => {
        a = a.Type.toLowerCase();
        b = b.Type.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Discount",
    dataIndex: "Discount",
    sorter: {
      compare: (a, b) => {
        a = a.Discount.toLowerCase();
        b = b.Discount.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Limit",
    dataIndex: "Limit",
    sorter: {
      compare: (a, b) => {
        a = a.Limit.toLowerCase();
        b = b.Limit.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Valid",
    dataIndex: "Valid",
    sorter: {
      compare: (a, b) => {
        a = a.Valid.toLowerCase();
        b = b.Valid.toLowerCase();
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
];
const data = [
 {
   "Id": "1",
   "Name": "New Year Blast",
   "Code": "NEWYEAR30",
   "Description": "30% off on New Year",
   "Type": "Percentage",
   "Discount": "30%",
   "Limit": "1",
   "Valid": "04 Jan 2025",
   "Status": "Active"
 },
 {
   "Id": "2",
   "Name": "Christmas Cheer",
   "Code": "CHRISTMAS100",
   "Description": "$100 off holiday packages",
   "Type": "Fixed Amount",
   "Discount": "$100",
   "Limit": "1",
   "Valid": "27 Dec 2024",
   "Status": "Active"
 },
 {
   "Id": "3",
   "Name": "Spooky Savings",
   "Code": "HALLOWEEN20",
   "Description": "20% off on Halloween items",
   "Type": "Percentage",
   "Discount": "20%",
   "Limit": "2",
   "Valid": "28 Nov 2024",
   "Status": "Active"
 },
 {
   "Id": "4",
   "Name": "Black Friday",
   "Code": "BLACKFRIDAY50",
   "Description": "50% off electronics",
   "Type": "Percentage",
   "Discount": "50%",
   "Limit": "4",
   "Valid": "18 Nov 2024",
   "Status": "Inactive"
 },
 {
   "Id": "5",
   "Name": "Golden Years Deal",
   "Code": "SENIOR20",
   "Description": "20% off for senior citizens",
   "Type": "Percentage",
   "Discount": "20%",
   "Limit": "3",
   "Valid": "06 Nov 2024",
   "Status": "Active"
 },
 {
   "Id": "6",
   "Name": "Thanksgiving Special",
   "Code": "THANKS10",
   "Description": "10% off for Thanksgiving",
   "Type": "Percentage",
   "Discount": "10%",
   "Limit": "1",
   "Valid": "31 Oct 2024",
   "Status": "Active"
 },
 {
   "Id": "7",
   "Name": "New Year Blast",
   "Code": "STUDENT10",
   "Description": "10% off for students",
   "Type": "Percentage",
   "Discount": "10%",
   "Limit": "2",
   "Valid": "14 Oct 2024",
   "Status": "Active"
 },
 {
   "Id": "8",
   "Name": "Big Saver Deal",
   "Code": "SAVE50",
   "Description": "$50 off orders over $300",
   "Type": "Fixed Amount",
   "Discount": "$50",
   "Limit": "3",
   "Valid": "03 Oct 2024",
   "Status": "Inactive"
 },
 {
   "Id": "9",
   "Name": "Weekend Exclusive",
   "Code": "WEEKENDSALE",
   "Description": "Exclusive15% off on weekends",
   "Type": "Percentage",
   "Discount": "15%",
   "Limit": "4",
   "Valid": "29 Sep 2024",
   "Status": "Active"
 },
 {
   "Id": "10",
   "Name": "Welcome Delight",
   "Code": "WELCOME10",
   "Description": "10% off for first-time users",
   "Type": "Percentage",
   "Discount": "10%",
   "Limit": "1",
   "Valid": "10 Sep 2024",
   "Status": "Active"
 },
 {
   "Id": "11",
   "Name": "New Year Blast",
   "Code": "NEWYEAR30",
   "Description": "30% off on New Year",
   "Type": "Percentage",
   "Discount": "30%",
   "Limit": "1",
   "Valid": "04 Jan 2025",
   "Status": "Active"
 },
 {
   "Id": "12",
   "Name": "Christmas Cheer",
   "Code": "CHRISTMAS100",
   "Description": "$100 off holiday packages",
   "Type": "Fixed Amount",
   "Discount": "$100",
   "Limit": "1",
   "Valid": "27 Dec 2024",
   "Status": "Active"
 },
 {
   "Id": "13",
   "Name": "Spooky Savings",
   "Code": "HALLOWEEN20",
   "Description": "20% off on Halloween items",
   "Type": "Percentage",
   "Discount": "20%",
   "Limit": "2",
   "Valid": "28 Nov 2024",
   "Status": "Active"
 },
 {
   "Id": "14",
   "Name": "Black Friday",
   "Code": "BLACKFRIDAY50",
   "Description": "50% off electronics",
   "Type": "Percentage",
   "Discount": "50%",
   "Limit": "4",
   "Valid": "18 Nov 2024",
   "Status": "Inactive"
 },
 {
   "Id": "15",
   "Name": "Golden Years Deal",
   "Code": "SENIOR20",
   "Description": "20% off for senior citizens",
   "Type": "Percentage",
   "Discount": "20%",
   "Limit": "3",
   "Valid": "06 Nov 2024",
   "Status": "Active"
 },
 {
   "Id": "16",
   "Name": "Thanksgiving Special",
   "Code": "THANKS10",
   "Description": "10% off for Thanksgiving",
   "Type": "Percentage",
   "Discount": "10%",
   "Limit": "1",
   "Valid": "31 Oct 2024",
   "Status": "Active"
 }
];
import { ref } from "vue";
const currentDate = ref(new Date());
export default {
  data() {
    return {
      columns,
      data,
      isLayoutBoxVisible: false,
      filter: false,
      CouponsSort: ["Sort by Date", "Newest", "Oldest"],
      Couponsname: [
        "Choose Name",
        "Coupons 21",
        "First Offer",
        "Offer 40",
        "Subscription",
      ],
      Couponstype: ["Choose Type", "Fixed", "Percentage"],
      startdate: currentDate,
      dateFormat: "dd-MM-yyyy",
    };
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
    toggleLayoutBox() {
      this.isLayoutBoxVisible = !this.isLayoutBoxVisible;
    },
  },
};
</script>
