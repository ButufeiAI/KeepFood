<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4>Employees</h4>
            <h6>Manage your employees</h6>
          </div>
        </div>
        <ul class="table-top-head">
          <li>
            <div class="d-flex me-2 pe-2 border-end">
              <router-link to="/hrm/employees-list" class="btn-list active bg-primary me-2"><i data-feather="list"
                  class="feather-list text-white"></i></router-link>
              <router-link to="/hrm/employees-grid" class="btn-grid me-2"><i data-feather="grid"
                  class="feather-grid"></i></router-link>
            </div>
          </li>
          <li class="me-2">
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="@/assets/img/icons/pdf.svg"
                alt="img" /></a>
          </li>
          <li class="me-2">
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="@/assets/img/icons/excel.svg"
                alt="img" /></a>
          </li>
          <li class="me-2">
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"><i class="ti ti-refresh"></i></a>
          </li>
          <li class="me-2">
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header"
              @click="toggleHeader"><i class="ti ti-chevron-up"></i></a>
          </li>
        </ul>
        <div class="page-btn">
          <router-link to="/hrm/add-employee" class="btn btn-primary"><i class="ti ti-circle-plus me-1"></i>Add
            Employee</router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-3 col-md-6">
          <div class="card bg-purple border-0">
            <div class="card-body d-flex align-items-center justify-content-between">
              <div>
                <p class="mb-1 text-white">Total Employee</p>
                <h4 class="text-white">1007</h4>
              </div>
              <div>
                <span class="avatar avatar-lg bg-purple-900"><i class="ti ti-users-group"></i></span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="card bg-teal border-0">
            <div class="card-body d-flex align-items-center justify-content-between">
              <div>
                <p class="mb-1 text-white">Active</p>
                <h4 class="text-white">1007</h4>
              </div>
              <div>
                <span class="avatar avatar-lg bg-teal-900"><i class="ti ti-user-star"></i></span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="card bg-secondary border-0">
            <div class="card-body d-flex align-items-center justify-content-between">
              <div>
                <p class="mb-1 text-white">Inactive</p>
                <h4 class="text-white">1007</h4>
              </div>
              <div>
                <span class="avatar avatar-lg bg-secondary-900"><i class="ti ti-user-exclamation"></i></span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="card bg-info border-0">
            <div class="card-body d-flex align-items-center justify-content-between">
              <div>
                <p class="mb-1 text-white">New Joiners</p>
                <h4 class="text-white">67</h4>
              </div>
              <div>
                <span class="avatar avatar-lg bg-info-900"><i class="ti ti-user-check"></i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- product list -->
      <div class="card table-list-card">
        <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
          <div class="search-set">
            <div class="search-input">
              <a href="javascript:void(0);" class="btn-searchset"><i class="ti ti-search fs-14 feather-search"></i></a>
              <input type="search" class="form-control form-control-sm" placeholder="Search" />
            </div>
          </div>
          <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
            <div class="dropdown me-2">
              <a href="javascript:void(0);"
                class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                Select Employees
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Anthony Lewis</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Brian Villalobos</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Harvey Smith</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Stephan Peralt</a>
                </li>
              </ul>
            </div>
            <div class="dropdown me-2">
              <a href="javascript:void(0);"
                class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                Designation
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">System Admin</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Designer</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Tech Lead</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Database administrator</a>
                </li>
              </ul>
            </div>
            <div class="dropdown me-2">
              <a href="javascript:void(0);"
                class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                Select Status
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">New Joiners</a>
                </li>
              </ul>
            </div>
            <div class="dropdown">
              <a href="javascript:void(0);"
                class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                Sort By : Last 7 Days
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
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
        <div class="card-body pb-0">
          <div class="custom-datatable-filter table-responsive">
            <a-table class="table datanew" :columns="columns" :data-source="data" :row-selection="rowSelection">
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'ID'">
                  <router-link to="/hrm/employee-details">{{ record.ID }}</router-link>
                </template>
                <template v-if="column.key === 'Employee'">
                  <div class="d-flex align-items-center">
                    <router-link to="/hrm/employee-details" class="avatar avatar-md"><img
                        :src="getImageUrl(record.Image)" class="img-fluid" alt="img" /></router-link>
                    <div class="ms-2">
                      <p class="text-dark mb-0">
                        <router-link to="/hrm/employee-details">{{
                          record.Employee
                        }}</router-link>
                      </p>
                    </div>
                  </div>
                </template>
                <template v-if="column.key === 'Status'">
                  <span class="badge badge-success d-inline-flex align-items-center badge-xs">
                    <i class="ti ti-point-filled me-1"></i>{{ record.Status }}
                  </span>
                </template>
                <template v-if="column.key === 'action'">
                  <div class="edit-delete-action d-flex align-items-center">
                    <router-link class="me-2 d-flex align-items-center border rounded p-2" to="/hrm/employee-details">
                      <i data-feather="eye" class="feather-eye"></i>
                    </router-link>
                    <router-link class="me-2 p-2 d-flex align-items-center border rounded" to="/hrm/edit-employee">
                      <i data-feather="edit" class="feather-edit"></i>
                    </router-link>
                    <a data-bs-toggle="modal" data-bs-target="#delete-modal"
                      class="p-2 d-flex align-items-center border rounded" href="javascript:void(0);">
                      <i data-feather="trash-2" class="feather-trash-2"></i>
                    </a>
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
      <p class="mb-0">2014-2025 © DreamsPOS. All Right Reserved</p>
      <p>
        Designed &amp; Developed By
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>
  <!-- delete modal -->
  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content p-5 px-3 text-center">
            <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i
                class="ti ti-trash fs-24 text-danger"></i></span>
            <h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Employee</h4>
            <p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete employee?</p>
            <div class="modal-footer-btn mt-3 d-flex justify-content-center">
              <button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                data-bs-dismiss="modal">Cancel</button>
              <button type="submit" class="btn btn-submit fs-13 fw-medium p-2 px-3">Yes Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /delete modal -->
</template>
<script>
const columns = [
  {
    title: "ID",
    dataIndex: "ID",
    key: "ID",
    sorter: {
      compare: (a, b) => {
        a = a.ID.toLowerCase();
        b = b.ID.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Employee",
    dataIndex: "Employee",
    key: "Employee",
    sorter: {
      compare: (a, b) => {
        a = a.Employee.toLowerCase();
        b = b.Employee.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Designation",
    dataIndex: "Designation",
    sorter: {
      compare: (a, b) => {
        a = a.Designation.toLowerCase();
        b = b.Designation.toLowerCase();
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
    title: "Shift",
    dataIndex: "Shift",
    sorter: {
      compare: (a, b) => {
        a = a.Shift.toLowerCase();
        b = b.Shift.toLowerCase();
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
    ID: "EMP001",
    Employee: "Carl Evans",
    Image: "user-32.jpg",
    Designation: "Designer",
    Email: "carlevans@example.com",
    Phone: "12163547758",
    Shift: "Regular",
    Status: "Active",
  },
  {
    key: "2",
    ID: "EMP002",
    Employee: "Minerva Rameriz",
    Image: "user-02.jpg",
    Designation: "Administrator",
    Email: "rameriz@example.com",
    Phone: "11367529510",
    Shift: "Regular",
    Status: "Active",
  },
  {
    key: "3",
    ID: "EMP003",
    Employee: "Robert Lamon",
    Image: "user-01.jpg",
    Designation: "Developer",
    Email: "robert@example.com",
    Phone: "15362789414",
    Shift: "Regular",
    Status: "Active",
  },
  {
    key: "4",
    ID: "EMP004",
    Employee: "Patricia Lewis",
    Image: "user-04.jpg",
    Designation: "HR Manager",
    Email: "patricia@example.com",
    Phone: "18513094627",
    Shift: "Night Shift",
    Status: "Active",
  },
  {
    key: "5",
    ID: "EMP005",
    Employee: "Mark Joslyn",
    Image: "user-08.jpg",
    Designation: "Designer",
    Email: "markjoslyn@example.com",
    Phone: "14678219025",
    Shift: "Mid Shift",
    Status: "Active",
  },
  {
    key: "6",
    ID: "EMP006",
    Employee: "Marsha Betts",
    Image: "user-10.jpg",
    Designation: "Developer",
    Email: "marshabetts@example.com",
    Phone: "10913278319",
    Shift: "Mid Shift",
    Status: "Active",
  },
  {
    key: "7",
    ID: "EMP007",
    Employee: "Daniel Jude",
    Image: "user-28.jpg",
    Designation: "Administrator",
    Email: "daieljude@example.com",
    Phone: "19125852947",
    Shift: "Regular",
    Status: "Active",
  },
  {
    key: "8",
    ID: "EMP008",
    Employee: "Emma Bates",
    Image: "user-17.jpg",
    Designation: "HR Assistant",
    Email: "emmabates@example.com",
    Phone: "13671835209",
    Shift: "Regular",
    Status: "Active",
  },
  {
    key: "9",
    ID: "EMP009",
    Employee: "Richard Fralick",
    Image: "user-20.jpg",
    Designation: "Designer",
    Email: "richard@example.com",
    Phone: "19756194733",
    Shift: "Regular",
    Status: "Active",
  },
  {
    key: "10",
    ID: "EMP010",
    Employee: "Michelle Robison",
    Image: "user-29.jpg",
    Designation: "HR Manager",
    Email: "robinson@example.com",
    Phone: "19167850925",
    Shift: "Regular",
    Status: "Inactive",
  },
];
const rowSelection = {
  onChange: () => { },
  onSelect: () => { },
  onSelectAll: () => { },
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
