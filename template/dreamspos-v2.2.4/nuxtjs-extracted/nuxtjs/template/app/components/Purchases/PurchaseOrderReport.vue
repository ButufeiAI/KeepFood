<script>
const columns = [
  {
    sorter: true,
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
    title: "Purchased amount",
    dataIndex: "Purchased_amount",
    sorter: {
      compare: (a, b) => {
        a = a.Purchased_amount.toLowerCase();
        b = b.Purchased_amount.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Purchased QTY",
    dataIndex: "Purchased_QTY",
    sorter: {
      compare: (a, b) => {
        a = a.Purchased_QTY.toLowerCase();
        b = b.Purchased_QTY.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Instock QTY",
    dataIndex: "Instock_QTY",
    sorter: {
      compare: (a, b) => {
        a = a.Instock_QTY.toLowerCase();
        b = b.Instock_QTY.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
];
const data = [
 {
   "Id": "1",
   "Image": "stock-img-01.png",
   "Product_Name": "Lenovo IdeaPad 3",
   "Purchased_amount": "$1000",
   "Purchased_QTY": "40",
   "Instock_QTY": "30"
 },
 {
   "Id": "2",
   "Image": "stock-img-06.png",
   "Product_Name": "Beats Pro",
   "Purchased_amount": "$1500",
   "Purchased_QTY": "25",
   "Instock_QTY": "18"
 },
 {
   "Id": "3",
   "Image": "stock-img-02.png",
   "Product_Name": "Nike Jordan",
   "Purchased_amount": "$1500",
   "Purchased_QTY": "30",
   "Instock_QTY": "35"
 },
 {
   "Id": "4",
   "Image": "stock-img-03.png",
   "Product_Name": "Apple Series 5 Watch",
   "Purchased_amount": "$2000",
   "Purchased_QTY": "28",
   "Instock_QTY": "30"
 },
 {
   "Id": "5",
   "Image": "stock-img-04.png",
   "Product_Name": "Amazon Echo Dot",
   "Purchased_amount": "$800",
   "Purchased_QTY": "15",
   "Instock_QTY": "10"
 },
 {
   "Id": "6",
   "Image": "stock-img-05.png",
   "Product_Name": "Sanford Chair Sofa",
   "Purchased_amount": "$750",
   "Purchased_QTY": "20",
   "Instock_QTY": "15"
 },
 {
   "Id": "7",
   "Image": "expire-product-01.png",
   "Product_Name": "Red Premium Satchel",
   "Purchased_amount": "$1300",
   "Purchased_QTY": "35",
   "Instock_QTY": "40"
 },
 {
   "Id": "8",
   "Image": "expire-product-02.png",
   "Product_Name": "Iphone 14 Pro",
   "Purchased_amount": "$1100",
   "Purchased_QTY": "45",
   "Instock_QTY": "35"
 },
 {
   "Id": "9",
   "Image": "expire-product-03.png",
   "Product_Name": "Gaming Chair",
   "Purchased_amount": "$2300",
   "Purchased_QTY": "22",
   "Instock_QTY": "20"
 },
 {
   "Id": "10",
   "Image": "expire-product-04.png",
   "Product_Name": "Borealis Backpack",
   "Purchased_amount": "$1700",
   "Purchased_QTY": "18",
   "Instock_QTY": "25"
 }
]


export default {
  data() {
    return {
      filter: false,
      columns,
      data,
    };
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
    getImageUrl(imageName) {
      return new URL(`/assets/img/products/${imageName}`, import.meta.url).href;
    },
  },
};
</script>

<template>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4>Purchase order report</h4>
            <h6>Manage your Purchase order report</h6>
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
      </div>

      <!-- /product list -->
      <div class="card">
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
            <a-table class="table datanew" :columns="columns" :data-source="data" :row-selection="{}">
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'Product_Name'">
                  <div class="d-flex align-items-center p-3 px-2">
                    <a class="avatar avatar-md me-2">
                      <img :src="getImageUrl(record.Image)" alt="product">
                    </a>
                    <a href="javascript:void(0);">{{record.Product_Name}}</a>
                  </div>
                </template>
              </template>
            </a-table>
          </div>
        </div>
      </div>
      <!-- /product list -->
    </div>
    <div class="copyright-footer d-flex align-items-center justify-content-between border-top bg-white gap-3 flex-wrap">
			<p class="fs-13 text-gray-9 mb-0">{{ new Date().getFullYear() }} © DreamsPOS. All Right Reserved</p>
			<p>Designed & Developed By Dreams <a href="javascript:void(0);" class="link-primary">Dreams</a></p>
		</div>
  </div>
</template>
