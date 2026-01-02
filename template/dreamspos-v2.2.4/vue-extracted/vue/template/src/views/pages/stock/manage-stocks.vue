<script>
const columns = [
  {
    sorter: true,
  },
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
    title: "Person",
    dataIndex: "Person",
    key: "Person",
    sorter: {
      compare: (a, b) => {
        a = a.Person.toLowerCase();
        b = b.Person.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Qty",
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
    title: "",
    key: "action",
    sorter: true,
  },
];

const data = [
 {
   "Id": "1",
   "Warehouse": "Lavish Warehouse",
   "Store": "Electro Mart",
   "Product_img": "stock-img-01.png",
   "Product_Name": "Lenovo IdeaPad 3",
   "Date": "24 Dec 2024",
   "Person_img": "user-30.jpg",
   "Person": "James Kirwin",
   "Quantity": "100"
 },
 {
   "Id": "2",
   "Warehouse": "Quaint Warehouse",
   "Store": "Quantum Gadgets",
   "Product_img": "stock-img-06.png",
   "Product_Name": "Beats Pro",
   "Date": "10 Dec 2024",
   "Person_img": "user-13.jpg",
   "Person": "Francis Chang",
   "Quantity": "140"
 },
 {
   "Id": "3",
   "Warehouse": "Lobar Handy",
   "Store": "Selosy",
   "Product_img": "stock-img-02.png",
   "Product_Name": "Nike Jordan",
   "Date": "25 Jul 2023",
   "Person_img": "user-08.jpg",
   "Person": "Steven",
   "Quantity": "120"
 },
 {
   "Id": "4",
   "Warehouse": "Quaint Warehouse",
   "Store": "Logerro",
   "Product_img": "stock-img-03.png",
   "Product_Name": "Apple Series 5 Watch",
   "Date": "28 Jul 2023",
   "Person_img": "user-04.jpg",
   "Person": "Gravely",
   "Quantity": "130"
 },
 {
   "Id": "5",
   "Warehouse": "Traditional Warehouse",
   "Store": "Vesloo",
   "Product_img": "stock-img-04.png",
   "Product_Name": "Amazon Echo Dot",
   "Date": "24 Jul 2023",
   "Person_img": "user-09.jpg",
   "Person": "Kevin",
   "Quantity": "140"
 },
 {
   "Id": "6",
   "Warehouse": "Cool Warehouse",
   "Store": "Crompy",
   "Product_img": "stock-img-05.png",
   "Product_Name": "Lobar Handy",
   "Date": "15 Jul 2023",
   "Person_img": "user-10.jpg",
   "Person": "Grillo",
   "Quantity": "150"
 },
 {
   "Id": "7",
   "Warehouse": "Retail Supply Hub",
   "Store": "Prime Mart",
   "Product_img": "expire-product-01.png",
   "Product_Name": "Red Premium Satchel",
   "Date": "14 Oct 2024",
   "Person_img": "user-08.jpg",
   "Person": "Gary Hennessy",
   "Quantity": "700"
 },
 {
   "Id": "8",
   "Warehouse": "EdgeWare Solutions",
   "Store": "NeoTech Store",
   "Product_img": "expire-product-02.png",
   "Product_Name": "Iphone 14 Pro",
   "Date": "03 Oct 2024",
   "Person_img": "user-04.jpg",
   "Person": "Eleanor Panek",
   "Quantity": "630"
 },
 {
   "Id": "9",
   "Warehouse": "North Zone Warehouse",
   "Store": "Urban Mart",
   "Product_img": "expire-product-03.png",
   "Product_Name": "Gaming Chair",
   "Date": "20 Sep 2024",
   "Person_img": "user-13.jpg",
   "Person": "William Levy",
   "Quantity": "410"
 },
 {
   "Id": "",
   "Warehouse": "Fulfillment Hub",
   "Store": "Travel Mart",
   "Product_img": "expire-product-04.png",
   "Product_Name": "Borealis Backpack",
   "Date": "10 Sep 2024",
   "Person_img": "user-16.jpg",
   "Person": "Charlotte Klotz",
   "Quantity": "550"
 }
];

export default {
  data() {
    return {
      isLayoutBoxVisible: false,
      filter: false,
      data,
      columns,
      Newest: ["Sort by Date", "Newest", "Oldest"],
      Warehouse: [
        "Choose Warehouse",
        "Lobar Handy",
        "Quaint Warehouse",
        "Traditional Warehouse",
        "Cool Warehouse",
      ],
      Product: [
        "Choose Product",
        "Nike Jordan",
        "Apple Series 5 Watch",
        "Amazon Echo Dot",
        "Lobar Handy",
      ],
      Person: ["Choose Person", "Steven", "Gravely"],
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
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/products/${imageName}`, import.meta.url).href;
    },
    getImageUrlOne(imageName) {
      return new URL(`/src/assets/img/users/${imageName}`, import.meta.url).href;
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
            <h4>Manage Stock</h4>
            <h6>Manage your stock</h6>
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
          <a
            href="javascript:void(0);"
            class="btn btn-added"
            data-bs-toggle="modal"
            data-bs-target="#add-units"
            ><vue-feather type="plus-circle" class="me-2"></vue-feather>Add New</a
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
                Warehouse
              </a>
              <ul class="dropdown-menu  dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Lavish Warehouse</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Quaint Warehouse </a>
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
                Store
              </a>
              <ul class="dropdown-menu  dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Electro Mart</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Quantum Gadgets</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Prime Bazaar</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Gadget World</a>
                </li>
              </ul>
            </div>
            <div class="dropdown me-2">
              <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                Person
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
            <a-table :columns="columns" :data-source="data" :row-selection="{}">
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'Product_Name'">
                  <div class="productimgname">
                    <a href="javascript:void(0);" class="avatar avatar-md me-2">
                      <img :src="getImageUrl(record.Product_img)"
                        alt="product"
                      />
                    </a>
                    <a href="javascript:void(0);">{{ record.Product_Name }}</a>
                  </div>
                </template>
                <template v-else-if="column.key === 'Person'">
                  <div class="userimgname d-flex">
                    <a href="javascript:void(0);" class="avatar avatar-md me-2">
                      <img :src="getImageUrlOne(record.Person_img)"
                        alt="product"
                      />
                    </a>
                    <a href="javascript:void(0);">{{record.Person}}</a>
                  </div>
                </template>
                <template v-else-if="column.key === 'action'">
                  <div class="d-flex">
                    <div class="d-flex align-items-center edit-delete-action">
                      <a class="me-2 border rounded d-flex align-items-center p-2" href="#" data-bs-toggle="modal" data-bs-target="#edit-units">
                        <i data-feather="edit" class="feather-edit"></i>
                      </a>
                      <a class="p-2 border rounded d-flex align-items-center" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete">
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

  <manage-stocks-modal></manage-stocks-modal>
</template>
