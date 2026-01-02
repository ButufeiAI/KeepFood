<template>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="page-title me-auto">
          <h4 class="fw-bold">Low Stocks</h4>
          <h6>Manage your low stocks</h6>
        </div>
        <ul class="table-top-head low-stock-top-head">
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="@/assets/img/icons/pdf.svg" alt="img"></a>
          </li>
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="@/assets/img/icons/excel.svg" alt="img"></a>
          </li>
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"><i class="ti ti-refresh"></i></a>
          </li>
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" @click="toggleHeader"><i class="ti ti-chevron-up"></i></a>
          </li>
          <li>
            <a href="#" class="btn btn-secondary w-auto shadow-none" data-bs-toggle="modal" data-bs-target="#send-email"><i data-feather="mail" class="feather-mail me-2"></i>Send Email</a>
          </li>
        </ul>
      </div>
      <div class="table-tab">
        <div class="d-flex flex-wrap justify-content-between align-items-center mb-3">
          <ul class="nav nav-pills low-stock-tab d-flex me-2 mb-0" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Low Stocks</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Out of Stocks</button>
            </li>            
          </ul>
          <div class="notify d-flex bg-white p-1 px-2 border rounded">
            <div class="status-toggle text-secondary d-flex justify-content-between align-items-center">
              <input type="checkbox" id="user2" class="check" checked="">
              <label for="user2" class="checktoggle me-2">checkbox</label>
              Notify
            </div>
          </div>
        </div>
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active"  id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <!-- /product list -->
            <div class="card table-list-card">
              <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                <div class="search-set">
                  <div class="search-input">
                    <a href="#" class="btn-searchset"><i data-feather="search" class="feather-search"></i></a>
                    <input type="search" class="form-control form-control-sm" placeholder="Search">
                  </div>
                </div>
        
                <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                  <div class="dropdown me-2">
                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                      Warehouse
                    </a>
                    <ul class="dropdown-menu  dropdown-menu-end p-3">
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Lenovo IdeaPad 3</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Beats Pro </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Nike Jordan</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Apple Series 5 Watch</a>
                      </li>
                    </ul>
                  </div>
                  <div class="dropdown me-2">
                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                      Store
                    </a>
                    <ul class="dropdown-menu  dropdown-menu-end p-3">
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">James Kirwin</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Francis Chang</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Antonio Engle</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Leo Kelly</a>
                      </li>
                    </ul>
                  </div>
                  <div class="dropdown me-2">
                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                      Category
                    </a>
                    <ul class="dropdown-menu  dropdown-menu-end p-3">
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Computers</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Electronics</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Shoe</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Electronics</a>
                      </li>
                    </ul>
                  </div>
                  <div class="dropdown me-2">
                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                      Product
                    </a>
                    <ul class="dropdown-menu  dropdown-menu-end p-3">
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Lenovo</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Beats</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Nike</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Apple</a>
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
                  <a-table
                    class="table datanew table-hover table-center mb-0"
                    :columns="columns"
                    :data-source="data"
                    :row-selection="{}"
                  >
                    <template #bodyCell="{ column, record }">
                      <template v-if="column.key === 'Product'">
                        <div class="productimgname">
                          <a href="javascript:void(0);" class="product-img stock-img">
                            <img :src="getImageUrl(record.Image)"
                              alt="product"
                            />
                          </a>
                          <a href="javascript:void(0);">{{ record.Product }} </a>
                        </div>
                      </template>
                      <template v-else-if="column.key === 'action'">
                        <div class="action-table-data">
                          <div class="edit-delete-action">
                            <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-stock">
                              <vue-feather type="edit" class="edit"></vue-feather>
                            </a>
                            <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="p-2" href="javascript:void(0);">
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
          <InventoryOutOfStocks />
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
  <ModalLowStocksModal />
</template>
<script>
const columns = [
  {
    title: "Warehouse",
    dataIndex: "Warehouse",
    sorter: {
      compare: (a, b) => {
        a = a.Warehouse.toLowerCase();
        b = b.Warehouse.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Store",
    dataIndex: "Store",
    sorter: {
      compare: (a, b) => {
        a = a.Store.toLowerCase();
        b = b.Store.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Product Name",
    dataIndex: "Product",
    key: "Product",
    sorter: {
      compare: (a, b) => {
        a = a.Product.toLowerCase();
        b = b.Product.toLowerCase();
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
    title: "SKU",
    dataIndex: "SKU",
    sorter: {
      compare: (a, b) => {
        a = a.SKU.toLowerCase();
        b = b.SKU.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Qty",
    dataIndex: "Qty",
    sorter: {
      compare: (a, b) => {
        a = a.Qty.toLowerCase();
        b = b.Qty.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Qty Alert",
    dataIndex: "QtyAlert",
    sorter: {
      compare: (a, b) => {
        a = a.QtyAlert.toLowerCase();
        b = b.QtyAlert.toLowerCase();
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
    Warehouse: "Lavish Warehouse",
    Store: "Electro Mart",
    Product: "Lenovo 3rd Generation",
    Category: "Computers",
    SKU: "PT001",
    Image: "stock-img-01.png",
    Qty: "15",
    QtyAlert: "10",
  },
  {
    Warehouse: "Lobar Handy",
    Store: "Selosy",
    Product: "Nike Jordan",
    Category: "Shoe",
    SKU: "PT002",
    Image: "stock-img-02.png",
    Qty: "17",
    QtyAlert: "8",
  },
  {
    Warehouse: "Quaint Warehouse",
    Store: "Logerro",
    Product: "Apple Series 5 Watch",
    Category: "Electronics",
    SKU: "PT003",
    Image: "stock-img-03.png",
    Qty: "14",
    QtyAlert: "12",
  },
  {
    Warehouse: "Traditional Warehouse",
    Store: "Vesloo",
    Product: "Amazon Echo Dot",
    Category: "Speaker",
    SKU: "PT004",
    Image: "stock-img-04.png",
    Qty: "20",
    QtyAlert: "15",
  },
  {
    Warehouse: "Cool Warehouse",
    Store: "Crompy",
    Product: "Lobar Handy",
    Category: "Furnitures",
    SKU: "PT005",
    Image: "stock-img-05.png",
    Qty: "18",
    QtyAlert: "13",
  },
];
export default {
  data() {
    return {
      filter: false,
      LowSort: ["Sort by Date", "Newest", "Oldest"],
      LowWarehouse: ["Choose Warehouse", "Lavish Warehouse", "Traditional Warehouse"],
      LowCategory: ["Choose Category", "Laptop", "Shoe", "Speaker"],
      LowChoose: [
        "Choose Product",
        "Lenovo 3rd Generation",
        "Nike Jordan",
        "Amazon Echo Dot",
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
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/products/${imageName}`, import.meta.url).href;
    },
  },
};
</script>
