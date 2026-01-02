<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4>Holiday</h4>
            <h6>Manage your holidays</h6>
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
            data-bs-target="#add-holiday"
            ><i class="ti ti-circle-plus me-1"></i>Add Holiday</a
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
          </div>
        </div>
        <div class="card-body pb-0">
          <div class="custom-datatable-filter table-responsive">
            <a-table
              class="table datanew"
              :columns="columns"
              :data-source="data"
              :row-selection="rowSelection"
            >
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'Status'">
                  <div>
                    <span
                      class="badge badge-success d-inline-flex align-items-center badge-xs"
                    >
                      <i class="ti ti-point-filled me-1"></i>{{ record.Status }}
                    </span>
                  </div>
                </template>
                <template v-else-if="column.key === 'action'">
                  <div class="action-table-data">
                    <div class="edit-delete-action">
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#edit-holiday"
                        class="me-2 p-2"
                        href="javascript:void(0);"
                      >
                        <i data-feather="edit" class="feather-edit"></i>
                      </a>
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#delete-modal"
                        class="p-2"
                        href="javascript:void(0);"
                      >
                        <i data-feather="trash-2" class="feather-trash-2"></i>
                      </a>
                    </div>
                  </div>
                </template>
              </template>
            </a-table>
          </div>
          <!-- /product list -->
        </div>
      </div>
    </div>
    <div
      class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3"
    >
      <p class="mb-0">
        {{ new Date().getFullYear() }} &copy; DreamsPOS. All Right Reserved
      </p>
      <p>
        Designed &amp; Developed by
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>
  <holiday-modal></holiday-modal>
</template>
<script>
const columns = [
  {
    title: " Type",
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
    Type: "Newyear",
    Date: "01 Jan 2024",
    Description: "First day of the new year",
    Status: "Active",
  },
  {
    key: "2",
    Type: "Martin Luther King Jr. Day",
    Date: "15 Jan 2025",
    Description: "Celebrating the civil rights leader",
    Status: "Active",
  },
  {
    key: "3",
    Type: "Presidents' Day",
    Date: "19 Feb 2025",
    Description: "Honoring past US Presidents",
    Status: "Active",
  },
  {
    key: "4",
    Type: "Good Friday",
    Date: "29 Mar 2025",
    Description: "Holiday before Easter",
    Status: "Active",
  },
  {
    key: "5",
    Type: "Easter Monday",
    Date: "01 Apr 2025",
    Description: "Holiday after Easter",
    Status: "Active",
  },
  {
    key: "6",
    Type: "Memorial Day",
    Date: "27 May 2025",
    Description: "Honors military personnel",
    Status: "Active",
  },
  {
    key: "7",
    Type: "Independence Day",
    Date: "04 Jul 2025",
    Description: "Celebrates Independence",
    Status: "Active",
  },
  {
    key: "8",
    Type: "Labour Day",
    Date: "02 Sep 2025",
    Description: "Honors working people",
    Status: "Active",
  },
  {
    key: "9",
    Type: "Veterans Day",
    Date: "02 Sep 2025",
    Description: "Honors working people",
    Status: "Active",
  },
  {
    key: "10",
    Type: "Christmas Day",
    Date: "25 Dec 2025",
    Description: "Celebration of Christmas",
    Status: "Active",
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
