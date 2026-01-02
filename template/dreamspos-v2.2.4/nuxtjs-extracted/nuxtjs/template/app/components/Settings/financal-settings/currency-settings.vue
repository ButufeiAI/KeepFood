<template>
  <div class="page-wrapper">
    <div class="content settings-content">
      <div class="page-header settings-pg-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4>Settings</h4>
            <h6>Manage your settings on portal</h6>
          </div>
        </div>
        <ul class="table-top-head">
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
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="settings-wrapper d-flex">
            <CommonSettingsSidebar/>
            <div class="card flex-fill mb-0 w-50">
              <div class="card-header d-flex align-items-center justify-content-between">
                <h4>Currency</h4>
                <div class="page-btn">
                  <a
                    href="#"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#add-currency"
                    ><i class="ti ti-circle-plus me-1"></i>Add New Currency</a
                  >
                </div>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <a-table
                    class="table datatable"
                    :columns="columns"
                    :data-source="data"
                    :row-selection="{}"
                  >
                    <template #bodyCell="{ column, record }">
                      <template v-if="column.key === 'CurrencyName'">
                        <div>{{ record.CurrencyName }}</div>
                      </template>
                      <template v-else-if="column.key === 'action'">
                        <div class="action-table-data justify-content-end">
                          <div class="edit-delete-action">
                            <a
                              class="me-2 p-2"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-currency"
                            >
                              <i data-feather="edit" class="feather-edit"></i>
                            </a>
                            <a class="p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">
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
          </div>
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
  <ModalCurrencySettingsModal/>
</template>
<script>
const columns = [
  {
    title: "Currency Name",
    dataIndex: "CurrencyName",
    key: "CurrencyName",
    sorter: {
      compare: (a, b) => {
        a = a.CurrencyName.toLowerCase();
        b = b.CurrencyName.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Code",
    dataIndex: "Code",
    sorter: {
      compare: (a, b) => {
        a = a.Code.toLowerCase();
        b = b.Code.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Symbol",
    dataIndex: "Symbol",
    sorter: {
      compare: (a, b) => {
        a = a.Symbol.toLowerCase();
        b = b.Symbol.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Exchange Rate",
    dataIndex: "ExchangeRate",
    key: "ExchangeRate",
    sorter: {
      compare: (a, b) => {
        a = a.ExchangeRate.toLowerCase();
        b = b.ExchangeRate.toLowerCase();
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
    title: "Action",
    key: "action",
    sorter: true,
  },
];
const data = [
  {
    CurrencyName: "Euro",
    Code: "EUR",
    Symbol: "€",
    ExchangeRate: "Default",
    CreatedOn: "12 Jul 2023",
  },
  {
    CurrencyName: "England Pound",
    Code: "GBP",
    Symbol: "£",
    ExchangeRate: "Default",
    CreatedOn: "14 Jul 2023",
  },
  {
    CurrencyName: "India Rupee",
    Code: "INR",
    Symbol: "₹",
    ExchangeRate: "76.154",
    CreatedOn: "14 Mar 2023",
  },
  {
    CurrencyName: "US Dollar",
    Code: "USD",
    Symbol: "$",
    ExchangeRate: "Default",
    CreatedOn: "10 Jan 2023",
  },
];

export default {
  data() {
    return {
      filter: false,
      CurrenSort: ["Sort by Date", "Newest", "Oldest"],
      NameSort: ["Choose Name", "Euro", "England Pound"],
      data,
      columns,
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
