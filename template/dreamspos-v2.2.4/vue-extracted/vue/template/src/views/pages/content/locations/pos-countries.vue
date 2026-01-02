<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4>Countries</h4>
            <h6>Manage Your Countries</h6>
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
            data-bs-target="#add-country"
            ><i class="ti ti-circle-plus me-1"></i>Add Country</a
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
          <div class="custom-datatable-filter table-responsive">
            <a-table
              class="table datatable thead-light"
              :columns="columns"
              :data-source="data"
              :row-selection="rowSelection"
            >
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'CountryName'">
                  <div class="text-gray-9">{{ record.CountryName }}</div>
                </template>
                <template v-if="column.key === 'Status'">
                  <span
                    class="badge badge-success d-inline-flex align-items-center badge-xs"
                  >
                    <i class="ti ti-point-filled me-1"></i>Active
                  </span>
                </template>
                <template v-if="column.key === 'action'">
                  <div class="action-table-data">
                    <div class="edit-delete-action">
                      <a
                        class="me-2 p-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-country"
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
  <countries-modal></countries-modal>
</template>
<script>
const rowSelection = {
  onChange: () => {},
  onSelect: () => {},
  onSelectAll: () => {},
};
const columns = [
  {
    title: "Country Name",
    dataIndex: "CountryName",
    key: "CountryName",
    sorter: {
      compare: (a, b) => {
        a = a.CountryName.toLowerCase();
        b = b.CountryName.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Country Code",
    dataIndex: "CountryCode",
    sorter: {
      compare: (a, b) => {
        a = a.CountryCode.toLowerCase();
        b = b.CountryCode.toLowerCase();
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
    CountryName: "United States",
    CountryCode: "US",
  },
  {
    key: "2",
    CountryName: "Canada",
    CountryCode: "CA",
  },
  {
    key: "3",
    CountryName: "United Kingdom",
    CountryCode: "UK",
  },
  {
    key: "4",
    CountryName: "Germany",
    CountryCode: "DE",
  },
  {
    key: "5",
    CountryName: "France",
    CountryCode: "FR",
  },
  {
    key: "6",
    CountryName: "Argentina",
    CountryCode: "AR",
  },
  {
    key: "7",
    CountryName: "India",
    CountryCode: "IN",
  },
  {
    key: "8",
    CountryName: "Italy",
    CountryCode: "IT",
  },
  {
    key: "9",
    CountryName: "New Zealand",
    CountryCode: "NZ",
  },
  {
    key: "10",
    CountryName: "Australia",
    CountryCode: "AU",
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
