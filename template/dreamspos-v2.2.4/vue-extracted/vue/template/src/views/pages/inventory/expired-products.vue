<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4>Expired Products</h4>
            <h6>Manage your expired products</h6>
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
              class="table datanew"
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
                      <a data-bs-toggle="modal" data-bs-target="#add-units" class="me-2 p-2" href="javascript:void(0);">
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
  <expired-products-modal></expired-products-modal>
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
    title: "Product",
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
    title: "Manufactured Date",
    dataIndex: "ManufacturedDate",
    sorter: {
      compare: (a, b) => {
        a = a.ManufacturedDate.toLowerCase();
        b = b.ManufacturedDate.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Expired Date",
    dataIndex: "ExpiredDate",
    sorter: {
      compare: (a, b) => {
        a = a.ExpiredDate.toLowerCase();
        b = b.ExpiredDate.toLowerCase();
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
    Image: "stock-img-01.png",
    ManufacturedDate: "24 Dec 2024",
    ExpiredDate: "20 Dec 2026",
  },
  {
    Product: "Bold V3.2",
    SKU: "PT002",
    Image: "stock-img-06.png",
    ManufacturedDate: "10 Dec 2024",
    ExpiredDate: "07 Dec 2026",
  },
  {
    Product: "Nike Jordan",
    SKU: "PT003",
    Image: "stock-img-02.png",
    ManufacturedDate: "27 Nov 2024",
    ExpiredDate: "20 Nov 2026",
  },
  {
    Product: "Apple Series 5 Watch",
    SKU: "PT004",
    Image: "stock-img-03.png",
    ManufacturedDate: "18 Nov 2024",
    ExpiredDate: "15 Nov 2026",
  },
  {
    Product: "Amazon Echo Dot",
    SKU: "PT005",
    Image: "stock-img-04.png",
    ManufacturedDate: "06 Nov 2024",
    ExpiredDate: "04 Nov 2026",
  },
  {
    Product: "Lobar Handy",
    SKU: "PT006",
    Image: "stock-img-05.png",
    ManufacturedDate: "25 Oct 2024",
    ExpiredDate: "20 Oct 2026",
  },
  {
    Product: "Red Premium Handy",
    SKU: "PT007",
    Image: "stock-img-01.png",
    ManufacturedDate: "14 Oct 2024",
    ExpiredDate: "10 Oct 2026",
  },
  {
    Product: "Iphone 14 Pro",
    SKU: "PT008",
    Image: "stock-img-02.png",
    ManufacturedDate: "03 Oct 2024",
    ExpiredDate: "01 Oct 2026",
  },
  {
    Product: "Black Slim 200",
    SKU: "PT009",
    Image: "stock-img-03.png",
    ManufacturedDate: "20 Sep 2024",
    ExpiredDate: "16 Sep 2026",
  },
  {
    Product: "Woodcraft Sandal",
    SKU: "PT010",
    Image: "stock-img-04.png",
    ManufacturedDate: "10 Sep 2024",
    ExpiredDate: "06 Sep 2026",
  },
];
export default {
  data() {
    return {
      Sortbydate: ["Sort by Date", "Newest", "Oldest"],
      LenovoType: ["Choose Type", "Lenovo 3rd Generation", "Nike Jordan"],
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
  }
};
</script>
