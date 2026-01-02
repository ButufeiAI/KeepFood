<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4>Roles & Permission</h4>
            <h6>Manage your roles</h6>
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
          <a
            href="#"
            class="btn btn-primary btn-md d-inline-flex align-items-center"
            data-bs-toggle="modal"
            data-bs-target="#add-units"
            ><i class="ti ti-circle-plus me-1"></i>Add Role</a
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
                Status
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
                <template v-if="column.key === 'RoleName'">
                  <div>{{ record.RoleName }}</div>
                </template>
                <template v-else-if="column.key === 'Status'">
                  <span
                    class="badge badge-success d-inline-flex align-items-center badge-xs"
                  >
                    <i class="ti ti-point-filled me-1"></i>Active
                  </span>
                </template>
                <template v-else-if="column.key === 'action'">
                  <div class="action-icon d-inline-flex">
                    <router-link
                      to="/users/permissions"
                      class="me-2 d-flex align-items-center p-2 border rounded"
                      ><i class="ti ti-shield"></i
                    ></router-link>
                    <a
                      href="#"
                      class="me-2 d-flex align-items-center p-2 border rounded"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_role"
                      ><i class="ti ti-edit"></i
                    ></a>
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                      class="d-flex align-items-center p-2 border rounded"
                      ><i class="ti ti-trash"></i
                    ></a>
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
  <roles-permissions-modal></roles-permissions-modal>
</template>
<script>
const columns = [
  {
    title: "Role",
    dataIndex: "RoleName",
    key: "RoleName",
    sorter: {
      compare: (a, b) => {
        a = a.RoleName.toLowerCase();
        b = b.RoleName.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Created Date",
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
    sorter: true,
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
    RoleName: "Admin",
    CreatedOn: "12 Sep 2024",
  },
  {
    key: "2",
    RoleName: "Manager",
    CreatedOn: "24 Oct 2024",
  },
  {
    key: "3",
    RoleName: "Salesman",
    CreatedOn: "18 Feb 2024",
  },
  {
    key: "4",
    RoleName: "Supervisor",
    CreatedOn: "17 Oct 2024",
  },
  {
    key: "5",
    RoleName: "Store Keeper",
    CreatedOn: "20 Jul 2024",
  },
  {
    key: "6",
    RoleName: "Inventory Manager",
    CreatedOn: "10 Apr 2024",
  },
  {
    key: "7",
    RoleName: "Delivery Biker",
    CreatedOn: "29 Aug 2024",
  },
  {
    key: "8",
    RoleName: "Employee",
    CreatedOn: "22 Feb 2024",
  },
  {
    key: "9",
    RoleName: "Cashier",
    CreatedOn: "03 Nov 2024",
  },
  {
    key: "10",
    RoleName: "Quality Analyst",
    CreatedOn: "17 Dec 2024",
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
