<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4>Departments</h4>
            <h6>Manage your departments</h6>
          </div>
        </div>
        <ul class="table-top-head">
          <li>
            <div class="d-flex me-2 pe-2 border-end">
              <router-link
                to="/hrm/department-list"
                class="btn-list active bg-primary me-2"
                ><i data-feather="list" class="feather-list text-white"></i
              ></router-link>
              <router-link to="/hrm/department-grid" class="btn-grid me-2"
                ><i data-feather="grid" class="feather-grid"></i
              ></router-link>
            </div>
          </li>
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
            ><i class="ti ti-circle-plus me-1"></i>Add Department</a
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
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >New Joiners</a
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
                <template v-if="column.key === 'HOD'">
                  <div class="d-flex align-items-center">
                    <a href="#" class="avatar avatar-md"
                      ><img
                        :src="getImageUrl(record.Image)"
                        class="img-fluid"
                        alt="img"
                    /></a>
                    <div class="ms-2">
                      <p class="text-dark mb-0">
                        <a href="#">{{ record.HOD }}</a>
                      </p>
                    </div>
                  </div>
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
  <department-grid-modal></department-grid-modal>
</template>
<script>
const columns = [
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
    title: "HOD",
    dataIndex: "HOD",
    key: "HOD",
    sorter: {
      compare: (a, b) => {
        a = a.HOD.toLowerCase();
        b = b.HOD.toLowerCase();
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
    title: "TotalMembers",
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
    Department: "Inventory",
    HOD: "Mitchum Daniel",
    Image: "user-01.jpg",
    Members: 2,
    TotalMembers: 7,
    CreatedOn: "25 Jan 2024",
    Status: "Active",
    Class: "badge badge-success d-inline-flex align-items-center badge-xs",
  },
  {
    key: "2",
    Department: "Human Resources",
    HOD: "Susan Lopez",
    Image: "user-02.jpg",
    Members: 2,
    TotalMembers: 5,
    CreatedOn: "29 Jan 2024",
    Status: "Active",
    Class: "badge badge-success d-inline-flex align-items-center badge-xs",
  },
  {
    key: "3",
    Department: "Admin",
    HOD: "Robert Grossman",
    Image: "user-03.jpg",
    Members: 2,
    TotalMembers: 6,
    CreatedOn: "13 Feb 2024",
    Status: "Active",
    Class: "badge badge-success d-inline-flex align-items-center badge-xs",
  },
  {
    key: "4",
    Department: "Sales",
    HOD: "Janet Hembre",
    Image: "user-06.jpg",
    Members: 2,
    TotalMembers: 8,
    CreatedOn: "27 Feb 2024",
    Status: "Active",
    Class: "badge badge-success d-inline-flex align-items-center badge-xs",
  },
  {
    key: "5",
    Department: "Russell Belle",
    HOD: "Russell Belle",
    Image: "user-04.jpg",
    Members: 2,
    TotalMembers: 4,
    CreatedOn: "02 Mar 2024",
    Status: "Active",
    Class: "badge badge-success d-inline-flex align-items-center badge-xs",
  },
  {
    key: "6",
    Department: "Quality Assurance",
    HOD: "Edward Muniz",
    Image: "user-05.jpg",
    Members: 2,
    TotalMembers: 10,
    CreatedOn: "17 Mar 2023",
    Status: "Active",
    Class: "badge badge-success d-inline-flex align-items-center badge-xs",
  },
  {
    key: "7",
    Department: "Finance",
    HOD: "Susan Moore",
    Image: "user-07.jpg",
    Members: 2,
    TotalMembers: 3,
    CreatedOn: "20 Mar 2024",
    Status: "Active",
    Class: "badge badge-success d-inline-flex align-items-center badge-xs",
  },
  {
    key: "8",
    Department: "Maintenance",
    HOD: "Travis Marcotte",
    Image: "user-08.jpg",
    Members: 2,
    TotalMembers: 7,
    CreatedOn: "03 Oct 2024",
    Status: "Active",
    Class: "badge badge-success d-inline-flex align-items-center badge-xs",
  },
  {
    key: "9",
    Department: "R&D",
    HOD: "Travis Marcotte",
    Image: "user-11.jpg",
    Members: 2,
    TotalMembers: 10,
    CreatedOn: "20 Sep 2024",
    Status: "Active",
    Class: "badge badge-success d-inline-flex align-items-center badge-xs",
  },
  {
    key: "10",
    Department: "IT Support",
    HOD: "Malinda Ruiz",
    Image: "user-13.jpg",
    Members: 2,
    TotalMembers: 10,
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
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/users/${imageName}`, import.meta.url).href;
    },
  },
};
</script>
