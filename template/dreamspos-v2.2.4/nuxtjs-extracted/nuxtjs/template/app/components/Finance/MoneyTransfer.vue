<template>

  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4 class="fw-bold">Money Transfer</h4>
            <h6>Manage Money Transfer List</h6>
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
            class="btn btn-primary text-white"
            data-bs-toggle="modal"
            data-bs-target="#add-money-transfer"
            ><i class="ti ti-circle-plus me-1"></i>Add Money Transfer</a
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
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <a-table
              class="table datanew"
              :columns="columns"
              :data-source="data"
              :row-selection="rowSelection"
            >
              <template #bodyCell="{ column }">
                <template v-if="column.key === 'action'">
                  <div class="action-table-data">
                    <div class="edit-delete-action">
                      <a
                        class="me-2 p-2 mb-0"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-money-transfer"
                      >
                        <vue-feather type="edit" class="edit"></vue-feather>
                      </a>
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#delete-modal"
                        class="me-0 p-2 mb-0"
                        href="javascript:void(0);"
                      >
                        <vue-feather type="trash-2" class="trash-2"></vue-feather>
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
      <p class="mb-0 text-gray-9">
        {{ new Date().getFullYear() }} © DreamsPOS. All Right Reserved
      </p>
      <p>
        Designed &amp; Developed By
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>

  <ModalMoneyTransferModal />
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
    title: "Reference Number",
    dataIndex: "Reference_Number",
    sorter: {
      compare: (a, b) => {
        a = a.Reference_Number.toLowerCase();
        b = b.Reference_Number.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "From Account",
    dataIndex: "From_Account",
    sorter: {
      compare: (a, b) => {
        a = a.From_Account.toLowerCase();
        b = b.From_Account.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "To Account",
    dataIndex: "To_Account",
    sorter: {
      compare: (a, b) => {
        a = a.To_Account.toLowerCase();
        b = b.To_Account.toLowerCase();
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
const rowSelection = {
  onChange: () => {},
  onSelect: () => {},
  onSelectAll: () => {},
};
const data = [
  {
    key: "1",
    Date: "24 Dec 2024",
    Reference_Number: "#MT842",
    From_Account: "3298784309485",
    To_Account: "4598489498498",
    Amount: "$200",
  },
  {
    key: "2",
    Date: "10 Dec 2024",
    Reference_Number: "#MT821",
    From_Account: "5475878970090",
    To_Account: "4494048448994",
    Amount: "$50",
  },
  {
    key: "3",
    Date: "27 Nov 2024",
    Reference_Number: "#MT847",
    From_Account: "3255465758698",
    To_Account: "6599481186468",
    Amount: "$800",
  },
  {
    key: "4",
    Date: "18 Nov 2024",
    Reference_Number: "#MT874",
    From_Account: "4353689870544",
    To_Account: "1948948498149",
    Amount: "$100",
  },
  {
    key: "5",
    Date: "06 Nov 2024",
    Reference_Number: "#MT887",
    From_Account: "4324356677889",
    To_Account: "1686941868478",
    Amount: "$700",
  },
  {
    key: "6",
    Date: "25 Oct 2024",
    Reference_Number: "#MT856",
    From_Account: "2343547586900",
    To_Account: "1658179744894",
    Amount: "$1000",
  },
  {
    key: "7",
    Date: "14 Oct 2024",
    Reference_Number: "#MT822",
    From_Account: "3453647664889",
    To_Account: "1418454896454",
    Amount: "$1200",
  },
  {
    key: "8",
    Date: "03 Oct 2024",
    Reference_Number: "#MT844",
    From_Account: "3354456565687",
    To_Account: "4418848484848",
    Amount: "$750",
  },
  {
    key: "9",
    Date: "20 Sep 2024",
    Reference_Number: "#MT832",
    From_Account: "3456565767787",
    To_Account: "6148484454564",
    Amount: "$450",
  },
  {
    key: "10",
    Date: "10 Sep 2024",
    Reference_Number: "#MT855",
    From_Account: "3434565776768",
    To_Account: "7781848484894",
    Amount: "$300",
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
