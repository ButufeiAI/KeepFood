<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4>Expense List</h4>
            <h6>Manage Your Expenses</h6>
          </div>
        </div>
        <ul class="table-top-head">
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="@/assets/img/icons/pdf.svg"
                alt="img" /></a>
          </li>
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="@/assets/img/icons/excel.svg"
                alt="img" /></a>
          </li>
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Print"><i data-feather="printer"
                class="feather-printer"></i></a>
          </li>
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"><i class="ti ti-refresh"></i></a>
          </li>
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header"
              @click="toggleHeader"><i class="ti ti-chevron-up"></i></a>
          </li>
        </ul>
        <div class="page-btn">
          <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-expense"><i
              class="ti ti-circle-plus me-1"></i>Add Expense</a>
        </div>
      </div>

      <!-- /product list -->
      <div class="card table-list-card">
        <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
          <div class="search-set">
            <div class="search-input">
              <a href="#" class="btn-searchset"><i data-feather="search" class="feather-search"></i></a>
              <input type="search" class="form-control form-control-sm" placeholder="Search" />
            </div>
          </div>
          <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
            <div class="dropdown me-2">
              <a href="javascript:void(0);"
                class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                Category
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Utilities</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Office Supplies</a>
                </li>
              </ul>
            </div>
            <div class="dropdown me-2">
              <a href="javascript:void(0);"
                class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                Status
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table datatable">
              <thead class="thead-light">
                <tr>
                  <th class="no-sort">
                    <label class="checkboxs">
                      <input type="checkbox" id="select-all">
                      <span class="checkmarks"></span>
                    </label>
                  </th>
                  <th>Reference</th>
                  <th>Expense Name</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th class="no-sort"></th>
                </tr>
              </thead>
              <tbody class="Expense-list-blk">
                <tr>
                  <td>
                    <label class="checkboxs">
                      <input type="checkbox">
                      <span class="checkmarks"></span>
                    </label>
                  </td>
                  <td>EX849</td>
                  <td class="text-gray-9 p-2">Electricity Payment</td>
                  <td>Utilities</td>
                  <td>Electricity Bill</td>
                  <td>24 Dec 2024</td>
                  <td>$200</td>
                  <td><span class="badges status-badge fs-10 p-1 px-2 rounded-1">Approved</span></td>
                  <td class="action-table-data p-2">
                    <div class="edit-delete-action">
                      <a class="me-2 p-2 mb-0" href="javascript:void(0);">
                        <vue-feather type="eye" class="action-eye"></vue-feather>
                      </a>
                      <a class="me-2 p-2 mb-0" data-bs-toggle="modal" data-bs-target="#edit-expense">
                        <i data-feather="edit" class="feather-edit"></i>
                      </a>
                      <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="me-3 p-2 mb-0"
                        href="javascript:void(0);">
                        <vue-feather type="trash-2" class="trash-2"></vue-feather>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="checkboxs">
                      <input type="checkbox">
                      <span class="checkmarks"></span>
                    </label>
                  </td>
                  <td>EX848</td>
                  <td class="text-gray-9 p-2">Stationery Purchase</td>
                  <td>Office Supplies</td>
                  <td>Stationery items for office</td>
                  <td>10 Dec 2024</td>
                  <td>$50</td>
                  <td><span class="badges status-badge badge-pending fs-10 p-1 px-2 rounded-1">Pending</span></td>
                  <td class="action-table-data p-2">
                    <div class="edit-delete-action">
                      <a class="me-2 p-2 mb-0" href="javascript:void(0);">
                        <vue-feather type="eye" class="action-eye"></vue-feather>
                      </a>
                      <a class="me-2 p-2 mb-0" data-bs-toggle="modal" data-bs-target="#edit-expense">
                        <i data-feather="edit" class="feather-edit"></i>
                      </a>
                      <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="me-3 p-2 mb-0"
                        href="javascript:void(0);">
                        <vue-feather type="trash-2" class="trash-2"></vue-feather>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="checkboxs">
                      <input type="checkbox">
                      <span class="checkmarks"></span>
                    </label>
                  </td>
                  <td>EX847</td>
                  <td class="text-gray-9 p-2">AC Repair Service</td>
                  <td>Repairs & Maintenance</td>
                  <td>AC Repair for Office</td>
                  <td>27 Nov 2024</td>
                  <td>$800</td>
                  <td><span class="badges status-badge fs-10 p-1 px-2 rounded-1">Approved</span></td>
                  <td class="action-table-data p-2">
                    <div class="edit-delete-action">
                      <a class="me-2 p-2 mb-0" href="javascript:void(0);">
                        <vue-feather type="eye" class="action-eye"></vue-feather>
                      </a>
                      <a class="me-2 p-2 mb-0" data-bs-toggle="modal" data-bs-target="#edit-expense">
                        <i data-feather="edit" class="feather-edit"></i>
                      </a>
                      <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="me-3 p-2 mb-0"
                        href="javascript:void(0);">
                        <vue-feather type="trash-2" class="trash-2"></vue-feather>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="checkboxs">
                      <input type="checkbox">
                      <span class="checkmarks"></span>
                    </label>
                  </td>
                  <td>EX846</td>
                  <td class="text-gray-9 p-2">Social Media Promotion</td>
                  <td>Marketing</td>
                  <td>Social Media Ads Campaign</td>
                  <td>18 Nov 2024</td>
                  <td>$100</td>
                  <td><span class="badges status-badge fs-10 p-1 px-2 rounded-1">Approved</span></td>
                  <td class="action-table-data p-2">
                    <div class="edit-delete-action">
                      <a class="me-2 p-2 mb-0" href="javascript:void(0);">
                        <vue-feather type="eye" class="action-eye"></vue-feather>
                      </a>
                      <a class="me-2 p-2 mb-0" data-bs-toggle="modal" data-bs-target="#edit-expense">
                        <i data-feather="edit" class="feather-edit"></i>
                      </a>
                      <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="me-3 p-2 mb-0"
                        href="javascript:void(0);">
                        <vue-feather type="trash-2" class="trash-2"></vue-feather>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="checkboxs">
                      <input type="checkbox">
                      <span class="checkmarks"></span>
                    </label>
                  </td>
                  <td>EX845</td>
                  <td class="text-gray-9 p-2">Client Meeting</td>
                  <td>Travel Expenses</td>
                  <td>Travel fare for client meeting</td>
                  <td>06 Nov 2024</td>
                  <td>$700</td>
                  <td><span class="badges status-badge fs-10 p-1 px-2 rounded-1">Approved</span></td>
                  <td class="action-table-data p-2">
                    <div class="edit-delete-action">
                      <a class="me-2 p-2 mb-0" href="javascript:void(0);">
                        <vue-feather type="eye" class="action-eye"></vue-feather>
                      </a>
                      <a class="me-2 p-2 mb-0" data-bs-toggle="modal" data-bs-target="#edit-expense">
                        <i data-feather="edit" class="feather-edit"></i>
                      </a>
                      <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="me-3 p-2 mb-0"
                        href="javascript:void(0);">
                        <vue-feather type="trash-2" class="trash-2"></vue-feather>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="checkboxs">
                      <input type="checkbox">
                      <span class="checkmarks"></span>
                    </label>
                  </td>
                  <td>EX844</td>
                  <td class="text-gray-9 p-2">Team Lunch</td>
                  <td>Employee Benefits</td>
                  <td>Team Lunch at Restaurant</td>
                  <td>25 Oct 2024</td>
                  <td>$1000</td>
                  <td><span class="badges status-badge badge-pending fs-10 p-1 px-2 rounded-1">Pending</span></td>
                  <td class="action-table-data p-2">
                    <div class="edit-delete-action">
                      <a class="me-2 p-2 mb-0" href="javascript:void(0);">
                        <vue-feather type="eye" class="action-eye"></vue-feather>
                      </a>
                      <a class="me-2 p-2 mb-0" data-bs-toggle="modal" data-bs-target="#edit-expense">
                        <i data-feather="edit" class="feather-edit"></i>
                      </a>
                      <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="me-3 p-2 mb-0"
                        href="javascript:void(0);">
                        <vue-feather type="trash-2" class="trash-2"></vue-feather>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="checkboxs">
                      <input type="checkbox">
                      <span class="checkmarks"></span>
                    </label>
                  </td>
                  <td>EX843</td>
                  <td class="text-gray-9 p-2">Business Flight Ticket</td>
                  <td>Travel Expenses</td>
                  <td>Flight tickets for meetings</td>
                  <td>14 Oct 2024</td>
                  <td>$1200</td>
                  <td><span class="badges status-badge fs-10 p-1 px-2 rounded-1">Approved</span></td>
                  <td class="action-table-data p-2">
                    <div class="edit-delete-action">
                      <a class="me-2 p-2 mb-0" href="javascript:void(0);">
                        <vue-feather type="eye" class="action-eye"></vue-feather>
                      </a>
                      <a class="me-2 p-2 mb-0" data-bs-toggle="modal" data-bs-target="#edit-expense">
                        <i data-feather="edit" class="feather-edit"></i>
                      </a>
                      <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="me-3 p-2 mb-0"
                        href="javascript:void(0);">
                        <vue-feather type="trash-2" class="trash-2"></vue-feather>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="checkboxs">
                      <input type="checkbox">
                      <span class="checkmarks"></span>
                    </label>
                  </td>
                  <td>EX842</td>
                  <td class="text-gray-9 p-2">Chair Purchase</td>
                  <td>Office Supplies</td>
                  <td>Ergonomic chairs for staff</td>
                  <td>03 Oct 2024</td>
                  <td>$750</td>
                  <td><span class="badges status-badge fs-10 p-1 px-2 rounded-1">Approved</span></td>
                  <td class="action-table-data p-2">
                    <div class="edit-delete-action">
                      <a class="me-2 p-2 mb-0" href="javascript:void(0);">
                        <vue-feather type="eye" class="action-eye"></vue-feather>
                      </a>
                      <a class="me-2 p-2 mb-0" data-bs-toggle="modal" data-bs-target="#edit-expense">
                        <i data-feather="edit" class="feather-edit"></i>
                      </a>
                      <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="me-3 p-2 mb-0"
                        href="javascript:void(0);">
                        <vue-feather type="trash-2" class="trash-2"></vue-feather>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="checkboxs">
                      <input type="checkbox">
                      <span class="checkmarks"></span>
                    </label>
                  </td>
                  <td>EX841</td>
                  <td class="text-gray-9 p-2">Plumbing Service</td>
                  <td>Repairs & Maintenance</td>
                  <td>Plumbing repairs in office</td>
                  <td>20 Sep 2024</td>
                  <td>$450</td>
                  <td><span class="badges status-badge fs-10 p-1 px-2 rounded-1">Approved</span></td>
                  <td class="action-table-data p-2">
                    <div class="edit-delete-action">
                      <a class="me-2 p-2 mb-0" href="javascript:void(0);">
                        <vue-feather type="eye" class="action-eye"></vue-feather>
                      </a>
                      <a class="me-2 p-2 mb-0" data-bs-toggle="modal" data-bs-target="#edit-expense">
                        <i data-feather="edit" class="feather-edit"></i>
                      </a>
                      <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="me-3 p-2 mb-0"
                        href="javascript:void(0);">
                        <vue-feather type="trash-2" class="trash-2"></vue-feather>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="checkboxs">
                      <input type="checkbox">
                      <span class="checkmarks"></span>
                    </label>
                  </td>
                  <td>EX840</td>
                  <td class="text-gray-9 p-2">Internet Bill Payment</td>
                  <td>Utilities</td>
                  <td>Monthly internet subscription</td>
                  <td>10 Sep 2024</td>
                  <td>$300</td>
                  <td><span class="badges status-badge badge-pending fs-10 p-1 px-2 rounded-1">Pending</span></td>
                  <td class="action-table-data p-2">
                    <div class="edit-delete-action">
                      <a class="me-2 p-2 mb-0" href="javascript:void(0);">
                        <vue-feather type="eye" class="action-eye"></vue-feather>
                      </a>
                      <a class="me-2 p-2 mb-0" data-bs-toggle="modal" data-bs-target="#edit-expense">
                        <i data-feather="edit" class="feather-edit"></i>
                      </a>
                      <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="me-3 p-2 mb-0"
                        href="javascript:void(0);">
                        <vue-feather type="trash-2" class="trash-2"></vue-feather>
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- /product list -->
    </div>
    <div class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
      <p class="mb-0 text-gray-9">
        {{ new Date().getFullYear() }} &copy; DreamsPOS. All Right Reserved
      </p>
      <p>
        Designed &amp; Developed by
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>
  <expenses-list-modal></expenses-list-modal>
</template>
<script>
const columns = [
  {
    title: "Reference",
    dataIndex: "Reference",
    sorter: {
      compare: (a, b) => {
        a = a.Reference.toLowerCase();
        b = b.Reference.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Expense Name",
    dataIndex: "Expense_Name",
    sorter: {
      compare: (a, b) => {
        a = a.Expense_Name.toLowerCase();
        b = b.Expense_Name.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Category",
    dataIndex: "Category",
    sorter: {
      compare: (a, b) => {
        a = a.Category.toLowerCase();
        b = b.Category.toLowerCase();
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
    title: "Date",
    dataIndex: "Date",
    sorter: {
      compare: (a, b) => {
        a = a.Date.toLowerCase();
        b = b.Date.toLowerCase();
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
    title: "Status",
    dataIndex: "Status",
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
const rowSelection = {
  onChange: () => { },
  onSelect: () => { },
  onSelectAll: () => { },
};
const data = [
  {
    key: "1",
    Reference: "EX849",
    Expense_Name: "Electricity Payment",
    Category: "Utilities",
    Description: "Electricity Bill",
    Date: "24 Dec 2024",
    Amount: "$200",
    StatusClass: "",
    Status: "Approved",
  },
  {
    key: "2",
    Reference: "EX848",
    Expense_Name: "Stationery Purchase",
    Category: "Office Supplies",
    Description: "Stationery items for office",
    Date: "10 Dec 2024",
    Amount: "$50",
    StatusClass: "",
    Status: "Pending",
  },
  {
    key: "3",
    Reference: "EX847",
    Expense_Name: "AC Repair Service",
    Category: "Repairs & Maintenance",
    Description: "AC Repair for Office",
    Date: "27 Nov 2024",
    Amount: "$800",
    StatusClass: "",
    Status: "Approved",
  },
  {
    key: "4",
    Reference: "EX846",
    Expense_Name: "Social Media Promotion",
    Category: "Marketing",
    Description: "Social Media Ads Campaign",
    Date: "18 Nov 2024",
    Amount: "$100",
    StatusClass: "",
    Status: "Approved",
  },
  {
    key: "5",
    Reference: "EX845",
    Expense_Name: "Client Meeting",
    Category: "Travel Expenses",
    Description: "Travel fare for client meeting",
    Date: "06 Nov 2024",
    Amount: "$700",
    StatusClass: "",
    Status: "Approved",
  },
  {
    key: "6",
    Reference: "EX844",
    Expense_Name: "Team Lunch",
    Category: "Employee Benefits",
    Description: "Team Lunch at Restaurant",
    Date: "25 Oct 2024",
    Amount: "$1000",
    StatusClass: "",
    Status: "Pending",
  },
  {
    key: "7",
    Reference: "EX843",
    Expense_Name: "Business Flight Ticket",
    Category: "Travel Expenses",
    Description: "Flight tickets for meetings",
    Date: "14 Oct 2024",
    Amount: "$1200",
    StatusClass: "",
    Status: "Approved",
  },
  {
    key: "8",
    Reference: "EX842",
    Expense_Name: "Chair Purchase",
    Category: "Office Supplies",
    Description: "Ergonomic chairs for staff",
    Date: "03 Oct 2024",
    Amount: "$750",
    StatusClass: "",
    Status: "Approved",
  },
  {
    key: "9",
    Reference: "EX841",
    Expense_Name: "Plumbing Service",
    Category: "Repairs & Maintenance",
    Description: "Plumbing repairs in office",
    Date: "20 Sep 2024",
    Amount: "$450",
    StatusClass: "",
    Status: "Approved",
  },
  {
    key: "10",
    Reference: "EX840",
    Expense_Name: "Internet Bill Payment",
    Category: "Utilities",
    Description: "Monthly internet subscription",
    Date: "10 Sep 2024",
    Amount: "$300",
    StatusClass: "",
    Status: "Pending",
  },
];
export default {
  data() {
    return {
      data,
      columns,
      rowSelection,
    };
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
