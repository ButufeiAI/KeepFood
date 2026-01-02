<template>
  <div class="page-wrapper">
    <div class="content">
      <InventoryProductListProductHeader />

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
                Product
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
                Created By
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
                Brand
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
          <div class="custom-datatable-filter table-responsive">
            <a-table
              class="table datanew table-hover table-center mb-0"
              :columns="columns"
              :data-source="data"
              :row-selection="{}"
            >
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'Product'">
                  <div class="productimgname">
                    <a href="javascript:void(0);" class="avatar avatar-md me-2">
                      <img :src="getImageUrl(record.Image)"
                        alt="product"
                      />
                    </a>
                    <a href="javascript:void(0);">{{ record.Product }} </a>
                  </div>
                </template>

                <template v-else-if="column.key === 'CreatedBy'">
                  <div class="userimgname">
                    <span class="avatar avatar-sm me-2">
                      <a href="javascript:void(0);">
                        <img :src="getImageUrlOne(record.UserImage)" alt="product">
                      </a>
                    </span>
                      <a href="javascript:void(0);">{{ record.CreatedBy }}</a>
                  </div>
                </template>
                <template v-else-if="column.key === 'action'">
                  <div class="action-table-data">
                    <div class="edit-delete-action">
                      <NuxtLink class="me-2 edit-icon p-2" to="/inventory/product-details">
                        <vue-feather type="eye" class="action-eye"></vue-feather>
                      </NuxtLink>
                      <NuxtLink class="me-2 p-2" to="/inventory/edit-product">
                        <vue-feather type="edit"></vue-feather>
                      </NuxtLink>
                      <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="p-2" href="javascript:void(0);">
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
      <p class="mb-0 text-gray-9">
        {{ new Date().getFullYear() }} &copy; DreamsPOS. All Right Reserved
      </p>
      <p>
        Designed &amp; Developed by
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>
  <ModalProductListModal />
</template>
<script>
const columns = [
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
    title: "Created by",
    dataIndex: "CreatedBy",
    key: "CreatedBy",
    sorter: {
      compare: (a, b) => {
        a = a.CreatedBy.toLowerCase();
        b = b.CreatedBy.toLowerCase();
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
    Product: "Lenovo 3rd Generation",
    SKU: "PT001",
    Category: "Computers",
    Brand: "Lenovo",
    Price: "$600",
    Unit: "Pc",
    Qty: "100",
    Image: "stock-img-01.png",
    UserImage: "user-30.jpg",
    CreatedBy: "James Kirwin",
  },
  {
    Product: "Bold V3.2",
    SKU: "PT002",
    Category: "Electronics",
    Brand: "Bolt",
    Price: "$160",
    Unit: "Pc",
    Qty: "140",
    Image: "stock-img-06.png",
    UserImage: "user-13.jpg",
    CreatedBy: "Francis Chang",
  },
  {
    Product: "Nike Jordan",
    SKU: "PT003",
    Category: "Shoe",
    Brand: "Nike",
    Price: "$110",
    Unit: "Pc",
    Qty: "780",
    Image: "stock-img-02.png",
    UserImage: "user-11.jpg",
    CreatedBy: "Antonio Engle",
  },
  {
    Product: "Apple Series 5 Watch",
    SKU: "PT004",
    Category: "Electronics",
    Brand: "Apple",
    Price: "$120",
    Unit: "Pc",
    Qty: "450",
    Image: "stock-img-03.png",
    UserImage: "user-03.jpg",
    CreatedBy: "Leo Kelly",
  },
  {
    Product: "Amazon Echo Dot",
    SKU: "PT005",
    Category: "Electronics",
    Brand: "Amazon",
    Price: "$80",
    Unit: "Pc",
    Qty: "477",
    Image: "stock-img-04.png",
    UserImage: "user-02.jpg",
    CreatedBy: "Annette Walker",
  },
  {
    Product: "Lobar Handy",
    SKU: "PT006",
    Category: "Furnitures",
    Brand: "Woodmart",
    Price: "$320",
    Unit: "Kg",
    Qty: "145",
    Image: "stock-img-05.png",
    UserImage: "user-05.jpg",
    CreatedBy: "John Weaver",
  },
  {
    Product: "Red Premium Handy",
    SKU: "PT007",
    Category: "Bags",
    Brand: "Versace",
    Price: "$60",
    Unit: "Pc",
    Qty: "747",
    Image: "stock-img-01.png",
    UserImage: "user-08.jpg",
    CreatedBy: "Gary Hennessy",
  },
  {
    Product: "Iphone 14 Pro",
    SKU: "PT008",
    Category: "Phone",
    Brand: "Apple",
    Price: "$540",
    Unit: "Pc",
    Qty: "897",
    Image: "stock-img-02.png",
    UserImage: "user-04.jpg",
    CreatedBy: "Eleanor Panek",
  },
  {
    Product: "Gaming Chair",
    SKU: "PT009",
    Category: "Furniture",
    Brand: "Arlime",
    Price: "$200",
    Unit: "Pc",
    Qty: "741",
    Image: "expire-product-03.png",
    UserImage: "user-01.jpg",
    CreatedBy: "William Levy",
  },
  {
    Product: "Borealis Backpack",
    SKU: "PT010",
    Category: "Bags",
    Brand: "The North Face",
    Price: "$45",
    Unit: "Pc",
    Qty: "148",
    Image: "expire-product-04.png",
    UserImage: "user-10.jpg",
    CreatedBy: "Charlotte Klotz",
  },
  {
    Product: "Borealis Backpack",
    SKU: "PT010",
    Category: "Bags",
    Brand: "The North Face",
    Price: "$45",
    Unit: "Pc",
    Qty: "550",
    Image: "expire-product-04.png",
    UserImage: "user-10.jpg",
    CreatedBy: "Charlotte Klotz",
  },
];
export default {
  data() {
    return {
      filter: false,
      Sortby: ["Sort by Date", "14 09 23", "11 09 23"],
      ChooseFilter: ["Choose Product", "Lenovo 3rd Generation", "Nike Jordan"],
      CategroyFilter: ["Laptop", "Shoe"],
      CategroySubFilter: ["Choose Sub Categroy", "Computers", "Fruits"],
      BrandFilter: ["Lenovo", "Nike"],
      PriceFilter: ["Price", "$12500.00", "$12500.00"],
      data,
      columns,
    };
  },
  methods: {
    getImageUrl(imageName) {
      return new URL(`/assets/img/products/${imageName}`, import.meta.url).href;
    },
    getImageUrlOne(imageName) {
      return new URL(`/assets/img/users/${imageName}`, import.meta.url).href;
    },
  }
};
</script>
