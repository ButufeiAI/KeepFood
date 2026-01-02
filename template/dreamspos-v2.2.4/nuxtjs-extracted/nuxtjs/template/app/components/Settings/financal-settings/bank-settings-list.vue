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
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" @click="toggleHeader"><i class="ti ti-chevron-up"></i></a>
          </li>
        </ul>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="settings-wrapper d-flex">
            <div class="sidebars settings-sidebar theiaStickySidebar" id="sidebar2">
              <CommonSettingsSidebar/>
            </div>
            <div class="settings-page-wrap w-50">
              <div class="setting-title">
                <h4>Bank Account</h4>
              </div>
              <div class="page-header bank-settings justify-content-end">
                <NuxtLink to="bank-settings-list" class="btn-list me-2 active"
                  ><vue-feather type="list" class="list"></vue-feather
                ></NuxtLink>
                <NuxtLink to="bank-settings-grid" class="btn-grid"
                  ><vue-feather type="grid" class="grid"></vue-feather
                ></NuxtLink>
                <div class="page-btn">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-added"
                    data-bs-toggle="modal"
                    data-bs-target="#add-account"
                    ><vue-feather type="plus-circle" class="me-2"></vue-feather>Add New
                    Account</a
                  >
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="card table-list-card">
                    <div class="card-body">
                      <div class="table-top">
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
                        <div class="search-path">
                          <div class="d-flex align-items-center">
                            <a
                              class="btn btn-filter"
                              id="filter_search"
                              v-on:click="filter = !filter"
                              :class="{ setclose: filter }"
                            >
                              <vue-feather
                                type="filter"
                                class="filter-icon"
                              ></vue-feather>
                              <span
                                ><img src="@/assets/img/icons/closes.svg" alt="img"
                              /></span>
                            </a>
                          </div>
                        </div>
                        <div class="form-sort">
                          <vue-feather type="sliders" class="info-img"></vue-feather>
                          <vue-select
                            :options="BankSort"
                            v-model="selected"
                            placeholder="Sort by Date"
                          />
                        </div>
                      </div>
                      <!-- /Filter -->
                      <div
                        class="card"
                        :style="{ display: filter ? 'block' : 'none' }"
                        id="filter_inputs"
                      >
                        <div class="card-body pb-0">
                          <div class="row">
                            <div class="col-lg-4 col-sm-6 col-12">
                              <div class="input-blocks">
                                <vue-feather type="user" class="info-img"></vue-feather>
                                <vue-select
                                  :options="BankChoose"
                                  v-model="selectedOne"
                                  placeholder="Choose Name"
                                />
                              </div>
                            </div>
                            <div class="col-lg-4 col-sm-6 col-12">
                              <div class="input-blocks">
                                <vue-feather type="edit-2" class="info-img"></vue-feather>
                                <vue-select
                                  :options="BankChooseBank"
                                  v-model="selectedTwo"
                                  placeholder="Choose Bank"
                                />
                              </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 col-12 ms-auto">
                              <div class="input-blocks">
                                <a class="btn btn-filters ms-auto">
                                  <i data-feather="search" class="feather-search"></i>
                                  Search
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Filter -->
                      <div class="table-responsive">
                        <a-table
                          class="table datanew"
                          :columns="columns"
                          :data-source="data"
                          :row-selection="{}"
                        >
                          <template #bodyCell="{ column, record }">
                            <template v-if="column.key === 'Name'">
                              <div>{{ record.Name }}</div>
                            </template>
                            <template v-else-if="column.key === 'action'">
                              <div class="action-table-data">
                                <div class="edit-delete-action">
                                  <a
                                    class="me-2 p-2"
                                    href="javascript:void(0);"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit-account"
                                  >
                                    <i data-feather="edit" class="feather-edit"></i>
                                  </a>
                                  <a
                                    class="confirm-text p-2"
                                    @click="showConfirmation"
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
      <p class="mb-0 text-gray-9">
        {{ new Date().getFullYear() }} &copy; DreamsPOS. All Right Reserved
      </p>
      <p>
        Designed &amp; Developed by
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>
</template>

<script>
const columns = [
  {
    title: "Name",
    dataIndex: "Name",
    key: "Name",
    sorter: {
      compare: (a, b) => {
        a = a.Name.toLowerCase();
        b = b.Name.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Bank",
    dataIndex: "Bank",
    sorter: {
      compare: (a, b) => {
        a = a.Bank.toLowerCase();
        b = b.Bank.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Branch",
    dataIndex: "Branch",
    sorter: {
      compare: (a, b) => {
        a = a.Branch.toLowerCase();
        b = b.Branch.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Account No",
    dataIndex: "AccountNo",
    key: "AccountNo",
    sorter: {
      compare: (a, b) => {
        a = a.AccountNo.toLowerCase();
        b = b.AccountNo.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "IFSC",
    dataIndex: "IFSC",
    sorter: {
      compare: (a, b) => {
        a = a.IFSC.toLowerCase();
        b = b.IFSC.toLowerCase();
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
    Name: "Mathew",
    Bank: "HDFC",
    Branch: "Bringham",
    AccountNo: "**** **** 1832",
    IFSC: "124547",
    CreatedOn: "12 Jul 2023",
  },
  {
    Name: "Toby Lando",
    Bank: "SBI",
    Branch: "Leicester",
    AccountNo: "**** **** 1596",
    IFSC: "156723",
    CreatedOn: "17 Aug 2023",
  },
  {
    Name: "John Smith",
    Bank: "KVB",
    Branch: "Bristol",
    AccountNo: "**** **** 1982",
    IFSC: "198367",
    CreatedOn: "08 Sep 2023",
  },
  {
    Name: "Andrew",
    Bank: "Swiss Bank",
    Branch: "Nottingham",
    AccountNo: "**** **** 1796",
    IFSC: "186730",
    CreatedOn: "21 Oct 2023",
  },
  {
    Name: "Robert",
    Bank: "Canara Bank",
    Branch: "Norwich",
    AccountNo: "**** **** 1645",
    IFSC: "146026",
    CreatedOn: "03 Nov 2023",
  },
];

export default {
  data() {
    return {
      filter: false,
      selected: [],
      selectedOne: [],
      selectedTwo: [],
      BankSort: [
        {label: "Sort by Date", value: "Sort by Date"}, 
        {label: "Newest", value: "Newest"}, 
        {label: "Oldest", value: "Oldest"}
      ],
      BankChooseBank: [
        {label: "Choose Bank", value: "Choose Bank"}, 
        {label: "HDFC", value: "HDFC"}, 
        {label: "Swiss Bank", value: "Swiss Bank"}, 
        {label: "Canara Bank", value: "Canara Bank"}, 
      ],
      BankChoose: [
        {label: "Choose Name", value: "Choose Name"},
        {label: "Mathew", value: "Mathew"},
        {label: "John Smith", value: "John Smith"},
        {label: "Andrew", value: "Andrew"},
      ],
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
