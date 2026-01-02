<template>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4>FAQ</h4>
            <h6>Manage your FAQ</h6>
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
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" @click="toggleHeader"><i class="ti ti-chevron-up"></i></a>
          </li>
        </ul>
        <div class="page-btn">
          <a
            href="#"
            class="btn btn-primary btn-md d-inline-flex align-items-center"
            data-bs-toggle="modal"
            data-bs-target="#add-faq"
            ><i class="ti ti-circle-plus me-1"></i>Add FAQ</a
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
                Category
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >General</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Features</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Hardware</a
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
              class="table datatable thead-light"
              :columns="columns"
              :data-source="data"
              :row-selection="rowSelection"
            >
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'Questions'">
                  <div>{{ record.Questions }}</div>
                </template>
                <template v-if="column.key === 'action'">
                  <div class="action-table-data">
                    <div class="edit-delete-action">
                      <a
                        class="me-2 p-2"
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-faq"
                      >
                        <vue-feather type="edit"></vue-feather>
                      </a>
                      <a
                        class="p-2"
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#delete-modal"
                      >
                        <vue-feather type="trash-2"></vue-feather>
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
  <faq-modal></faq-modal>
</template>
<script>
const columns = [
  {
    title: "Questions",
    dataIndex: "Questions",
    key: "Questions",
    sorter: {
      compare: (a, b) => {
        a = a.Questions.toLowerCase();
        b = b.Questions.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Answers",
    dataIndex: "Answers",
    sorter: {
      compare: (a, b) => {
        a = a.Answers.toLowerCase();
        b = b.Answers.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Category",
    dataIndex: "Category",
    key: "Category",
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
    Questions: "What is a POS platform?",
    Answers:
      "A software system that processes sales, manages inventory, and handles transactions.	",
    Category: "General",
  },
  {
    key: "2",
    Questions: "Who uses it?",
    Answers: "Retailers, restaurants, and service businesses.",
    Category: "General",
  },
  {
    key: "3",
    Questions: "What are the key features?",
    Answers: "Billing, inventory tracking, CRM, employee management, and reports.",
    Category: "Features",
  },
  {
    key: "4",
    Questions: "Does it support multiple payment methods?",
    Answers:
      "Yes, including cash, credit/debit cards, mobile wallets, and online payments.",
    Category: "Features",
  },
  {
    key: "5",
    Questions: "Does it support barcode scanning?",
    Answers: "Yes, barcode scanners can be integrated for faster checkouts.",
    Category: "Features",
  },
  {
    key: "6",
    Questions: "Does it work with thermal receipt printers?",
    Answers: "Yes, many POS platforms support thermal and standard receipt printers.",
    Category: "Hardware",
  },
  {
    key: "7",
    Questions: "Is a POS platform secure?",
    Answers: "Yes, it uses encryption, authentication, and secure payment processing.",
    Category: "Secure",
  },
  {
    key: "8",
    Questions: "Can a POS platform track inventory?",
    Answers:
      "Yes, it helps track stock levels, manage suppliers, and set reorder alerts.",
    Category: "Features",
  },
  {
    key: "9",
    Questions: "Can a POS platform generate reports?",
    Answers: "Yes, it provides sales, inventory, and customer analytics reports.",
    Category: "Secure",
  },
  {
    key: "10",
    Questions: "Does it work with thermal receipt printers?",
    Answers: "Yes, many POS platforms support thermal and standard receipt printers.",
    Category: "Hardware",
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
