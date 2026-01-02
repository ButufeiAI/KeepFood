<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>

  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4 class="fw-bold">Income</h4>
            <h6>Manage your income</h6>
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
            data-bs-target="#add-income"
            ><i class="ti ti-circle-plus me-1"></i>Add Income</a
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
              <a href="#" class="btn-searchset"
                ><i data-feather="search" class="feather-search"></i
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
            <div class="dropdown me-2 mt-4">
              <div class="input-groupicon calender-input balance-sheet-date">
                <a-date-picker v-model:value="value1" class="datetimepicker form-control" />
              </div>
            </div>
            <div class="dropdown">
              <a
                href="javascript:void(0);"
                class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                Select Store
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Distribution center</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Intelligent warehouse</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Mahin Logistics</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Allcargo Logistics</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <a-table
              class="table datanew"
              :columns="columns"
              :data-source="data"
              :row-selection="{}"
            >
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'Store'">
                  <div class="text-gray-9">{{ record.Store }}</div>
                </template>
                <template v-else-if="column.key === 'action'">
                  <div class="action-table-data">
                    <div class="edit-delete-action">
                      <a
                        class="me-2 p-2 mb-0"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-units"
                      >
                        <i data-feather="edit" class="feather-edit"></i>
                      </a>
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#delete-modal"
                        class="me-0 p-2 mb-0"
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
      <p class="mb-0 text-gray-9">2014-2025 © DreamsPOS. All Right Reserved</p>
      <p>
        Designed &amp; Developed By
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>

  <income-list-modal></income-list-modal>
</template>

<script>
const columns = [
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
    title: "Store",
    dataIndex: "Store",
    key: "Store",
    sorter: {
      compare: (a, b) => {
        a = a.Store.toLowerCase();
        b = b.Store.toLowerCase();
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
    title: "Notes",
    dataIndex: "Notes",
    sorter: {
      compare: (a, b) => {
        a = a.Notes.toLowerCase();
        b = b.Notes.toLowerCase();
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
    title: "",
    key: "action",
    sorter: true,
  },
];

const data = [
  {
    Id: "1",
    Date: "24 Dec 2024",
    Reference: "IN849",
    Store: "Distribution center",
    Category: "Foreign investment",
    Notes: "Categorize income derived",
    Amount: "$200",
  },
  {
    Id: "2",
    Date: "10 Dec 2024",
    Reference: "IN848",
    Store: "Intelligent warehouse",
    Category: "Product Export",
    Notes: "Services that have been verified",
    Amount: "$50",
  },
  {
    Id: "3",
    Date: "27 Nov 2024",
    Reference: "IN847",
    Store: "Mahin Logistics",
    Category: "Installation",
    Notes: "POS Installation for Store",
    Amount: "$800",
  },
  {
    Id: "4",
    Date: "06 Nov 2024",
    Reference: "IN845",
    Store: "Bonded warehouse",
    Category: "Local Sale",
    Notes: "Travel fare for client meeting",
    Amount: "$700",
  },
  {
    Id: "5",
    Date: "25 Oct 2024",
    Reference: "IN844",
    Store: "Budget warehouse",
    Category: "Service Fees",
    Notes: "Services that have been verified",
    Amount: "$1000",
  },
  {
    Id: "6",
    Date: "14 Oct 2024",
    Reference: "IN843",
    Store: "Gati Limited",
    Category: "Return/Refund Income",
    Notes: "Flight tickets for meetings",
    Amount: "$1200",
  },
  {
    Id: "7",
    Date: "03 Oct 2024",
    Reference: "IN842",
    Store: "Storeroom Halls",
    Category: "Foreign investment",
    Notes: "Services that have been verified",
    Amount: "$750",
  },
  {
    Id: "8",
    Date: "20 Sep 2024",
    Reference: "IN841",
    Store: "Strongbox",
    Category: "Product Export",
    Notes: "Categorize income derived in office",
    Amount: "$450",
  },
  {
    Id: "9",
    Date: "10 Sep 2024",
    Reference: "IN840",
    Store: "Total Quality Logistics",
    Category: "Return/Refund Income",
    Notes: "Services that have been verified",
    Amount: "$300",
  },
];
import { ref } from "vue";
const value1 = ref();
export default {
  data() {
    return {
      data,
      columns,
      value1,
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
