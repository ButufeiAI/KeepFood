<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4>Shifts</h4>
            <h6>Manage your shifts</h6>
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
            data-bs-target="#add-shift"
            ><i class="ti ti-circle-plus me-1"></i>Add Shift</a
          >
        </div>
      </div>
      <!-- /product list -->
      <div class="card table-list-card">
        <div class="card-body">
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
                    <a href="javascript:void(0);" class="dropdown-item rounded-1"
                      >Active</a
                    >
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
          <div class="table-responsive">
            <a-table
              class="table datanew"
              :columns="columns"
              :data-source="data"
              :row-selection="rowSelection"
            >
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'Status'">
                  <span
                    class="badge badge-success d-inline-flex align-items-center badge-xs"
                  >
                    <i class="ti ti-point-filled me-1"></i>{{ record.Status }}
                  </span>
                </template>
                <template v-if="column.key === 'action'">
                  <div class="action-table-data">
                    <div class="edit-delete-action">
                      <a
                        class="me-2 p-2"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-units"
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
  <shift-modal></shift-modal>
</template>
<script>
const columns = [
  {
    title: "Shift Name",
    dataIndex: "ShiftName",
    key: "ShiftName",
    sorter: {
      compare: (a, b) => {
        a = a.ShiftName.toLowerCase();
        b = b.ShiftName.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Time",
    dataIndex: "Time",
    key: "Time",
    sorter: {
      compare: (a, b) => {
        a = a.Time.toLowerCase();
        b = b.Time.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Week Off",
    dataIndex: "WeekOff",
    key: "WeekOff",
    sorter: {
      compare: (a, b) => {
        a = a.WeekOff.toLowerCase();
        b = b.WeekOff.toLowerCase();
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
    ShiftName: "Fixed",
    Time: "09:00 AM - 6:00 PM",
    WeekOff: "Sunday, Monday",
    Class: "badge badge-linesuccess",
    CreatedOn: "04 Aug 2023",
    Status: "Active",
  },
  {
    key: "2",
    ShiftName: "Rotating",
    Time: "06:00 AM - 3:00 PM",
    WeekOff: "Saturday, Sunday",
    Class: "badges-inactive",
    CreatedOn: "21 July 2023",
    Status: "Inactive",
  },
  {
    key: "3",
    ShiftName: "Split",
    Time: "03:00 AM - 9:00 PM",
    WeekOff: "Tuesday, Saturday",
    Class: "badge badge-linesuccess",
    CreatedOn: "31 Jan 2022",
    Status: "Active",
  },
  {
    key: "4",
    ShiftName: "On-Call",
    Time: "09:00 AM - 6:00 PM",
    WeekOff: "Monday",
    Class: "badge badge-linesuccess",
    CreatedOn: "15 May 2023",
    Status: "Active",
  },
  {
    key: "5",
    ShiftName: "Weekend",
    Time: "06:00 AM - 3:00 PM",
    WeekOff: "Friday",
    Class: "badge badge-linesuccess",
    CreatedOn: "04 Aug 2023",
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
