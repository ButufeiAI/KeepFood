<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4>Designation</h4>
            <h6>Manage your designation</h6>
          </div>
        </div>
        <ul class="table-top-head">
          <li class="me-2">
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"
              ><img src="@/assets/img/icons/pdf.svg" alt="img"
            /></a>
          </li>
          <li class="me-2">
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"
              ><img src="@/assets/img/icons/excel.svg" alt="img"
            /></a>
          </li>
          <li class="me-2">
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"
              ><i class="ti ti-refresh"></i
            ></a>
          </li>
          <li class="me-2">
            <a
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Collapse"
              id="collapse-header"
              @click="toggleHeader"
              ><i class="ti ti-chevron-up"></i
            ></a>
          </li>
        </ul>
        <div class="page-btn">
          <a
            href="#"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#add-department"
            ><i class="ti ti-circle-plus me-1"></i>Add Designation</a
          >
        </div>
      </div>
      <!-- /product list -->
      <div class="card table-list-card">
        <div
          class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3"
        >
          <div class="search-set">
            <div class="search-input">
              <a href="javascript:void(0);" class="btn-searchset"
                ><i class="ti ti-search fs-14 feather-search"></i
              ></a>
              <input
                type="search"
                class="form-control form-control-sm"
                placeholder="Search"
              />
            </div>
          </div>
          <div
            class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3"
          >
            <div class="dropdown me-2">
              <a
                href="javascript:void(0);"
                class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                Department
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Sales</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Inventory</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Finance</a
                  >
                </li>
              </ul>
            </div>
            <div class="dropdown me-2">
              <a
                href="javascript:void(0);"
                class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                Select Status
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Inactive</a
                  >
                </li>
              </ul>
            </div>
            <div class="dropdown">
              <a
                href="javascript:void(0);"
                class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                Sort By : Last 7 Days
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Recently Added</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Ascending</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Desending</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Last Month</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Last 7 Days</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card-body pb-0">
          <div class="table-responsive">
            <a-table
              class="table datanew"
              :columns="columns"
              :data-source="data"
              :row-selection="rowSelection"
            >
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'Designation'">
                  <span class="text-gray-900">{{ record.Designation }}</span>
                </template>
                <template v-if="column.key === 'Members'">
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="avatar-list-stacked avatar-group-sm">
                      <span class="avatar avatar-rounded">
                        <img
                          class="border border-white"
                          src="@/assets/img/profiles/avatar-15.jpg"
                          alt="img"
                        />
                      </span>
                      <span class="avatar avatar-rounded">
                        <img
                          class="border border-white"
                          src="@/assets/img/profiles/avatar-16.jpg"
                          alt="img"
                        />
                      </span>
                      <span class="avatar avatar-rounded">
                        <img
                          class="border border-white"
                          src="@/assets/img/profiles/avatar-18.jpg"
                          alt="img"
                        />
                      </span>
                      <a
                        class="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative"
                        href="javascript:void(0);"
                      >
                        <img src="@/assets/img/profiles/avatar-17.jpg" alt="img" />
                        <span
                          class="position-absolute top-50 start-50 translate-middle text-center"
                          >+2</span
                        >
                      </a>
                    </div>
                  </div>
                </template>
                <template v-if="column.key === 'Status'">
                  <span :class="record.Class">
                    <i class="ti ti-point-filled me-1"></i>{{ record.Status }}
                  </span>
                </template>
                <template v-if="column.key === 'action'">
                  <div class="action-table-data">
                    <div class="edit-delete-action">
                      <a
                        class="me-2 p-2"
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-department"
                      >
                        <i data-feather="edit" class="feather-edit"></i>
                      </a>
                      <a
                        class="p-2"
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#delete-modal"
                      >
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
    <div
      class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3"
    >
      <p class="mb-0">{{ new Date().getFullYear() }} © DreamsPOS. All Right Reserved</p>
      <p>
        Designed &amp; Developed By
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>
  <designation-modal></designation-modal>
</template>
<script>
const columns = [
  {
    title: "Designation",
    dataIndex: "Designation",
    key: "Designation",
    sorter: {
      compare: (a, b) => {
        a = a.Designation.toLowerCase();
        b = b.Designation.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Department",
    dataIndex: "Department",
    sorter: {
      compare: (a, b) => {
        a = a.Department.toLowerCase();
        b = b.Department.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Members",
    dataIndex: "Members",
    key: "Members",
    sorter: {
      compare: (a, b) => {
        a = a.Members.toLowerCase();
        b = b.Members.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Total Members",
    dataIndex: "TotalMembers",
    sorter: {
      compare: (a, b) => {
        a = a.TotalMembers.toLowerCase();
        b = b.TotalMembers.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Created On",
    dataIndex: "CreatedOn",
    sorter: {
      compare: (a, b) => {
        a = a.CreatedOn.toLowerCase();
        b = b.CreatedOn.toLowerCase();
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
    key: "1",
    Designation: "Sales Manager",
    Department: "Sales",
    Members: 2,
    TotalMembers: "07",
    CreatedOn: "24 Dec 2024",
    Status: "Active",
    Class: "badge badge-success d-inline-flex align-items-center badge-xs",
  },
  {
    key: "2",
    Designation: "Inventory Manager",
    Department: "Inventory",
    Members: 2,
    TotalMembers: "10",
    CreatedOn: "10 Dec 2024",
    Status: "Active",
    Class: "badge badge-success d-inline-flex align-items-center badge-xs",
  },
  {
    key: "3",
    Designation: "Accountant",
    Department: "Finance",
    Members: 2,
    TotalMembers: "05",
    CreatedOn: "27 Nov 2024",
    Status: "Active",
    Class: "badge badge-success d-inline-flex align-items-center badge-xs",
  },
  {
    key: "4",
    Designation: "System Administrator",
    Department: "Admin",
    Members: 2,
    TotalMembers: "10",
    CreatedOn: "18 Nov 2024",
    Status: "Active",
    Class: "badge badge-success d-inline-flex align-items-center badge-xs",
  },
  {
    key: "5",
    Designation: "HR Manager",
    Department: "Human Resources",
    Members: 2,
    TotalMembers: "06",
    CreatedOn: "06 Nov 2024",
    Status: "Active",
    Class: "badge badge-success d-inline-flex align-items-center badge-xs",
  },
  {
    key: "6",
    Designation: "Marketing Manager",
    Department: "Marketing",
    Members: 2,
    TotalMembers: "12",
    CreatedOn: "25 Oct 2024",
    Status: "Active",
    Class: "badge badge-success d-inline-flex align-items-center badge-xs",
  },
  {
    key: "7",
    Designation: "QA Analyst",
    Department: "Quality Assurance",
    Members: 2,
    TotalMembers: "08",
    CreatedOn: "14 Oct 2024",
    Status: "Active",
    Class: "badge badge-success d-inline-flex align-items-center badge-xs",
  },
  {
    key: "8",
    Designation: "Research Analyst",
    Department: "R&D",
    Members: 2,
    TotalMembers: "07",
    CreatedOn: "03 Oct 2024",
    Status: "Active",
    Class: "badge badge-success d-inline-flex align-items-center badge-xs",
  },
  {
    key: "9",
    Designation: "Support Engineer",
    Department: "IT Support",
    Members: 2,
    TotalMembers: "10",
    CreatedOn: "20 Sep 2024",
    Status: "Active",
    Class: "badge badge-success d-inline-flex align-items-center badge-xs",
  },
  {
    key: "10",
    Designation: "Content Writer",
    Department: "Content Creation",
    Members: 2,
    TotalMembers: "08",
    CreatedOn: "10 Sep 2024",
    Status: "Inactive",
    Class: "badge badge-danger d-inline-flex align-items-center badge-xs",
  },
];
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
