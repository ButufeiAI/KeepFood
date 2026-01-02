<script>
const columns = [
  {
    sorter: true,
  },
  {
    title: "From Warehouse",
    dataIndex: "From_Warehouse",
    sorter: {
      compare: (a, b) => {
        a = a.From_Warehouse.toLowerCase();
        b = b.From_Warehouse.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "To Warehouse",
    dataIndex: "To_Warehouse",
    sorter: {
      compare: (a, b) => {
        a = a.To_Warehouse.toLowerCase();
        b = b.To_Warehouse.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "No of Products",
    dataIndex: "Products",
    sorter: {
      compare: (a, b) => {
        a = a.Products.toLowerCase();
        b = b.Products.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Quantity transfered",
    dataIndex: "Quantity",
    sorter: {
      compare: (a, b) => {
        a = a.Quantity.toLowerCase();
        b = b.Quantity.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Ref Number",
    dataIndex: "Number",
    sorter: {
      compare: (a, b) => {
        a = a.Number.toLowerCase();
        b = b.Number.toLowerCase();
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
    title: "",
    key: "action",
    sorter: true,
  },
];

const data = [
  {
    "Id": "",
    "From_Warehouse": "Lavish Warehouse",
    "To_Warehouse": "North Zone Warehouse",
    "Products": "20",
    "Quantity": "15",
    "Number": "#458924",
    "Date": "24 Dec 2024"
  },
  {
    "Id": "",
    "From_Warehouse": "Lobar Handy",
    "To_Warehouse": "Selosy",
    "Products": "4",
    "Quantity": "14",
    "Number": "#145445",
    "Date": "25 Jul 2023"
  },
  {
    "Id": "",
    "From_Warehouse": "Quaint Warehouse",
    "To_Warehouse": "Logerro",
    "Products": "21",
    "Quantity": "10",
    "Number": "#135478",
    "Date": "28 Jul 2023"
  },
  {
    "Id": "",
    "From_Warehouse": "Traditional Warehouse",
    "To_Warehouse": "Vesloo",
    "Products": "15",
    "Quantity": "14",
    "Number": "#145124",
    "Date": "24 Jul 2023"
  },
  {
    "Id": "",
    "From_Warehouse": "Cool Warehouse",
    "To_Warehouse": "Crompy",
    "Products": "14",
    "Quantity": "74",
    "Number": "#474541",
    "Date": "15 Jul 2023"
  },
  {
    "Id": "",
    "From_Warehouse": "Overflow Warehouse",
    "To_Warehouse": "Quaint Warehouse",
    "Products": "30",
    "Quantity": "20",
    "Number": "#366713",
    "Date": "06 Nov 2024"
  },
  {
    "Id": "",
    "From_Warehouse": "Nova Storage Hub",
    "To_Warehouse": "Traditional Warehouse",
    "Products": "10",
    "Quantity": "6",
    "Number": "#327814",
    "Date": "25 Oct 2024"
  },
  {
    "Id": "",
    "From_Warehouse": "Retail Supply Hub",
    "To_Warehouse": "Overflow Warehouse",
    "Products": "70",
    "Quantity": "60",
    "Number": "#274509",
    "Date": "14 Oct 2024"
  },
  {
    "Id": "",
    "From_Warehouse": "EdgeWare Solutions",
    "To_Warehouse": "Lavish Warehouse",
    "Products": "35",
    "Quantity": "30",
    "Number": "#239073",
    "Date": "03 Oct 2024"
  },
  {
    "Id": "",
    "From_Warehouse": "North Zone Warehouse",
    "To_Warehouse": "Fulfillment Hub",
    "Products": "15",
    "Quantity": "10",
    "Number": "#187204",
    "Date": "20 Sep 2024"
  },
  {
    "Id": "",
    "From_Warehouse": "Fulfillment Hub",
    "To_Warehouse": "EdgeWare Solutions",
    "Products": "45",
    "Quantity": "35",
    "Number": "#139064",
    "Date": "10 Sep 2024"
  },
  {
    "Id": "",
    "From_Warehouse": "Retail Supply Hub",
    "To_Warehouse": "Overflow Warehouse",
    "Products": "70",
    "Quantity": "60",
    "Number": "#274509",
    "Date": "14 Oct 2024"
  }
];

export default {
  data() {
    return {
      filter: false,
      columns,
      data,
      isLayoutBoxVisible: false,
      Oldest: ["Sort by Date", "Newest", "Oldest"],
      Cool: [
        "Warehouse From",
        "Lobar Handy",
        "Quaint Warehouse",
        "Traditional Warehouse",
        "Cool Warehouse",
      ],
      Crompy: ["Warehouse To", "Selosy", "Logerro", "Vesloo", "Crompy"],
    };
  },
  methods: {
    toggleLayoutBox() {
      this.isLayoutBoxVisible = !this.isLayoutBoxVisible;
    },
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>

<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>

  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4>Stock Transfer</h4>
            <h6>Manage your stock transfer</h6>
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
          <a href="#" class="btn btn-primary btn-md d-inline-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add-units">
            <vue-feather type="plus-circle" class="me-2"></vue-feather>Add New
          </a>
        </div>
        <div class="page-btn import">
          <a
            href="javascript:void(0);"
            class="btn btn-secondary color"
            data-bs-toggle="modal"
            data-bs-target="#view-notes"
            ><vue-feather type="download" class="me-2"></vue-feather>Import Transfer</a
          >
        </div>
      </div>
      <!-- /product list -->
      <div class="card table-list-card">
        <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
          <div class="search-set">
            <div class="search-input">
              <a href="javascript:void(0);" class="btn-searchset"><i class="ti ti-search fs-14 feather-search"></i></a>
              <input type="search" class="form-control form-control-sm" placeholder="Search">
            </div>
          </div>
          <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
            <div class="dropdown me-2">
              <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                From Warehouse
              </a>
              <ul class="dropdown-menu  dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Lavish Warehouse</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Quaint Warehouse</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Traditional Warehouse</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Cool Warehouse</a>
                </li>
              </ul>
            </div>
            <div class="dropdown me-2">
              <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                To Warehouse
              </a>
              <ul class="dropdown-menu  dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">North Zone Warehouse</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Nova Storage Hub</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Cool Warehouse</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Retail Supply Hub</a>
                </li>
              </ul>
            </div>
            <div class="dropdown">
              <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                Sort By : Last 7 Days
              </a>
              <ul class="dropdown-menu  dropdown-menu-end p-3">
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
        <div class="card-body">
          <div class="table-responsive">
            <a-table :columns="columns" :data-source="data" :row-selection="{}">
              <template #bodyCell="{ column }">
                <template v-if="column.key === 'action'">
                  <div class="action-table-data">
                    <div class="edit-delete-action d-flex align-items-center justify-content-center">
                      <a class="me-2 p-2 d-flex align-items-center justify-content-between border rounded" href="#" data-bs-toggle="modal" data-bs-target="#edit-units">
                        <i data-feather="edit" class="feather-edit"></i>
                      </a>
                      <a class="p-2 d-flex align-items-center justify-content-between border rounded" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete">
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
  </div>

  <stock-transfer-modal></stock-transfer-modal>
</template>
