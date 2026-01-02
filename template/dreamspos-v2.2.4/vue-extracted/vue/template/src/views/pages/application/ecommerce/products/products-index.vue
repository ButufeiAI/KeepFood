<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>

  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4 class="fw-bold">Product List</h4>
            <h6>Manage your products</h6>
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
              ><i class="ti ti-chevron-up"></i
            ></a>
          </li>
        </ul>
        <div class="page-btn">
          <router-link to="/ecommerce/add-product" class="btn btn-primary"
            ><i class="ti ti-circle-plus me-1"></i>Add Product</router-link
          >
        </div>
        <div class="page-btn import">
          <a
            href="#"
            class="btn btn-primary color"
            data-bs-toggle="modal"
            data-bs-target="#view-notes"
            ><i data-feather="download" class="me-2"></i>Import Product</a
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
                Product
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Lenovo IdeaPad 3</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Beats Pro
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Nike Jordan</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Apple Series 5 Watch</a
                  >
                </li>
              </ul>
            </div>
            <div class="dropdown me-2">
              <a
                href="javascript:void(0);"
                class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                Created By
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >James Kirwin</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Francis Chang</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Antonio Engle</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Leo Kelly</a
                  >
                </li>
              </ul>
            </div>
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
                    >Computers</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Electronics</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Shoe</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Electronics</a
                  >
                </li>
              </ul>
            </div>
            <div class="dropdown me-2">
              <a
                href="javascript:void(0);"
                class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                Brand
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Lenovo</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Beats</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Nike</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Apple</a
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
        <div class="card-body">
          <div class="custom-datatable-filter table-responsive">
            <a-table
              class="table datatable thead-light"
              :columns="columns"
              :data-source="data"
              :row-selection="rowSelection"
            >
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'Product_Name'">
                  <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" class="avatar avatar-md me-2">
                      <img :src="getImageUrl(record.Image)" alt="product" />
                    </a>
                    <a href="javascript:void(0);">{{ record.Product_Name }}</a>
                  </div>
                </template>
                <template v-if="column.key === 'Created_By'">
                  <div class="d-flex align-items-center">
                    <span>
                      <a
                        href="javascript:void(0);"
                        class="avatar avatar-md me-2"
                      >
                        <img
                          :src="getImageUrlOne(record.UserImg)"
                          alt="product"
                        />
                      </a>
                    </span>
                    <a href="javascript:void(0);">{{ record.Created_By }}</a>
                  </div>
                </template>
                <template v-if="column.key === 'action'">
                  <div class="action-table-data">
                    <div class="edit-delete-action">
                      <router-link
                        class="me-2 edit-icon p-2"
                        to="/ecommerce/product-details"
                      >
                        <i data-feather="eye" class="feather-eye"></i>
                      </router-link>
                      <router-link
                        class="me-2 p-2"
                        to="/ecommerce/edit-product"
                      >
                        <i data-feather="edit" class="feather-edit"></i>
                      </router-link>
                      <a class="p-2" href="javascript:void(0);">
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

  <products-modal></products-modal>
</template>

<script>
const data = [
  {
    SKU: "PT001",
    Image: "stock-img-01.png",
    Product_Name: "Lenovo IdeaPad 3",
    Category: "Computers",
    Brand: "Lenovo",
    Price: "$600",
    Unit: "Pc",
    Qty: "100",
    UserImg: "user-30.jpg",
    Created_By: "James Kirwin",
  },
  {
    SKU: "PT002",
    Image: "stock-img-06.png",
    Product_Name: "Beats Pro",
    Category: "Electronics",
    Brand: "Beats",
    Price: "$160",
    Unit: "Pc",
    Qty: "140",
    UserImg: "user-13.jpg",
    Created_By: "Francis Chang",
  },
  {
    SKU: "PT003",
    Image: "stock-img-02.png",
    Product_Name: "Nike Jordan",
    Category: "Shoe",
    Brand: "Nike",
    Price: "$110",
    Unit: "Pc",
    Qty: "300",
    UserImg: "user-11.jpg",
    Created_By: "Antonio Engle",
  },
  {
    SKU: "PT004",
    Image: "stock-img-03.png",
    Product_Name: "Apple Series 5 Watch",
    Category: "Electronics",
    Brand: "Apple",
    Price: "$120",
    Unit: "Pc",
    Qty: "450",
    UserImg: "user-32.jpg",
    Created_By: "Leo Kelly",
  },
  {
    SKU: "PT005",
    Image: "stock-img-04.png",
    Product_Name: "Amazon Echo Dot",
    Category: "Electronics",
    Brand: "Amazon",
    Price: "$80",
    Unit: "Pc",
    Qty: "320",
    UserImg: "user-02.jpg",
    Created_By: "Annette Walker",
  },
  {
    SKU: "PT006",
    Image: "stock-img-05.png",
    Product_Name: "Sanford Chair Sofa",
    Category: "Furnitures",
    Brand: "Modern Wave",
    Price: "$320",
    Unit: "Pc",
    Qty: "650",
    UserImg: "user-05.jpg",
    Created_By: "John Weaver",
  },
  {
    SKU: "PT007",
    Image: "expire-product-01.png",
    Product_Name: "Red Premium Satchel",
    Category: "Bags",
    Brand: "Dior",
    Price: "$60",
    Unit: "Pc",
    Qty: "700",
    UserImg: "user-08.jpg",
    Created_By: "Gary Hennessy",
  },
  {
    SKU: "PT008",
    Image: "expire-product-02.png",
    Product_Name: "Iphone 14 Pro",
    Category: "Phone",
    Brand: "Apple",
    Price: "$540",
    Unit: "Pc",
    Qty: "630",
    UserImg: "user-04.jpg",
    Created_By: "Eleanor Panek",
  },
  {
    SKU: "PT009",
    Image: "expire-product-03.png",
    Product_Name: "Gaming Chair",
    Category: "Furniture",
    Brand: "Arlime",
    Price: "$200",
    Unit: "Pc",
    Qty: "410",
    UserImg: "user-09.jpg",
    Created_By: "William Levy",
  },
  {
    SKU: "PT010",
    Image: "expire-product-04.png",
    Product_Name: "Borealis Backpack",
    Category: "Bags",
    Brand: "The North Face",
    Price: "$45",
    Unit: "Pc",
    Qty: "550",
    UserImg: "user-10.jpg",
    Created_By: "Charlotte Klotz",
  },
  {
    SKU: "PT010",
    Image: "expire-product-04.png",
    Product_Name: "Borealis Backpack",
    Category: "Bags",
    Brand: "The North Face",
    Price: "$45",
    Unit: "Pc",
    Qty: "550",
    UserImg: "user-10.jpg",
    Created_By: "Charlotte Klotz",
  },
];

const columns = [
  {
    sorter: false,
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
    title: "Product Name",
    dataIndex: "Product_Name",
    key: "Product_Name",
    sorter: {
      compare: (a, b) => {
        a = a.Product_Name.toLowerCase();
        b = b.Product_Name.toLowerCase();
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
    title: "Brand",
    dataIndex: "Brand",
    sorter: {
      compare: (a, b) => {
        a = a.Brand.toLowerCase();
        b = b.Brand.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Price",
    dataIndex: "Price",
    sorter: {
      compare: (a, b) => {
        a = a.Price.toLowerCase();
        b = b.Price.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Unit",
    dataIndex: "Unit",
    sorter: {
      compare: (a, b) => {
        a = a.Unit.toLowerCase();
        b = b.Unit.toLowerCase();
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
    title: "Created By",
    dataIndex: "Created_By",
    key: "Created_By",
    sorter: {
      compare: (a, b) => {
        a = a.Created_By.toLowerCase();
        b = b.Created_By.toLowerCase();
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

export default {
  data() {
    return {
      data,
      columns,
      rowSelection,
    };
  },
  methods: {
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/products/${imageName}`, import.meta.url)
        .href;
    },
    getImageUrlOne(imageName) {
      return new URL(`/src/assets/img/users/${imageName}`, import.meta.url)
        .href;
    },
  },
};
</script>