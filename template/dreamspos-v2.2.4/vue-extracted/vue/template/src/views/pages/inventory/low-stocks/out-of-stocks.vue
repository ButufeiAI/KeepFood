<template>
  <div
    class="tab-pane fade"
    id="pills-profile"
    role="tabpanel"
    aria-labelledby="pills-profile-tab"
  >
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
                      <i data-feather="edit" class="feather-edit"></i>
                    </a>
                    <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="p-2" href="javascript:void(0);">
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
    Store: "Crinol",
    Product: "Lenovo 3rd Generation",
    Category: "Laptop",
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
      OutSort: ["Sort by Date", "Newest", "Oldest"],
      OutWarehouse: ["Choose Warehouse", "Lavish Warehouse", "Traditional Warehouse"],
      OutCategory: ["Choose Category", "Laptop", "Shoe", "Speaker"],
      OutChoose: [
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
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/products/${imageName}`, import.meta.url).href;
    },
  }
};
</script>
