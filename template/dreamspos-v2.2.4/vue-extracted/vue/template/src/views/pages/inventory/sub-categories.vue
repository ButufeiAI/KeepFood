<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4>Sub Category list</h4>
            <h6>Manage your subcategories</h6>
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
          <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-category"><i class="ti ti-circle-plus me-1"></i>Add Sub Category</a>
        </div>
      </div>

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
            <div class="dropdown">
              <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                Status
              </a>
              <ul class="dropdown-menu  dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>
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
                <template v-if="column.key === 'Image'">
                  <a class="avatar avatar-md me-2">
                    <img :src="getImageUrl(record.Image)"
                      alt="product"
                    />
                  </a>
                </template>
                <template v-else-if="column.key === 'Status'">
                  <span class="badge bg-success fw-medium fs-10">{{record.Status}}</span>
                </template>
                <template v-else-if="column.key === 'action'">
                  <div class="action-table-data">
                    <div class="edit-delete-action">
                      <a
                        class="me-2 p-2"
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-category"
                      >
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
  <sub-categories-modal></sub-categories-modal>
</template>
<script>
const columns = [
  {
    title: "Image",
    dataIndex: "Image",
    key: "Image",
    sorter: {
      compare: (a, b) => {
        a = a.Image.toLowerCase();
        b = b.Image.toLowerCase();
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
    title: "Parent category",
    dataIndex: "Parentcategory",
    sorter: {
      compare: (a, b) => {
        a = a.Parentcategory.toLowerCase();
        b = b.Parentcategory.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Category Code",
    dataIndex: "CategoryCode",
    sorter: {
      compare: (a, b) => {
        a = a.CategoryCode.toLowerCase();
        b = b.CategoryCode.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Description",
    dataIndex: "Description",
    sorter: {
      compare: (a, b) => {
        a = a.Description.toLowerCase();
        b = b.Description.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status",
    sorter: {
      compare: (a, b) => {
        a = a.Status.toLowerCase();
        b = b.Status.toLowerCase();
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
    Image: "product1.jpg",
    Category: "Computers",
    Parentcategory: "Computers",
    CategoryCode: "CT001",
    Description: "Computers Description",
    Status: "Active",
  },
  {
    Image: "product2.jpg",
    Category: "Fruits",
    Parentcategory: "Fruits",
    CategoryCode: "CT002",
    Description: "Fruits Description",
    Status: "Active",
  },
  {
    Image: "product3.jpg",
    Category: "Fruits",
    Parentcategory: "Fruits",
    CategoryCode: "CT003",
    Description: "Fruits Description",
    Status: "Active",
  },
  {
    Image: "product4.jpg",
    Category: "Fruits",
    Parentcategory: "Fruits",
    CategoryCode: "CT004",
    Description: "Fruits Description",
    Status: "Active",
  },
  {
    Image: "product5.jpg",
    Category: "Accessories",
    Parentcategory: "Accessories",
    CategoryCode: "CT005",
    Description: "Accessories Description",
    Status: "Active",
  },
  {
    Image: "product6.jpg",
    Category: "Shoes",
    Parentcategory: "Shoes",
    CategoryCode: "CT006",
    Description: "Shoes Description",
    Status: "Active",
  },
  {
    Image: "product7.jpg",
    Category: "Fruits",
    Parentcategory: "Fruits",
    CategoryCode: "CT007",
    Description: "Fruits Description",
    Status: "Active",
  },
  {
    Image: "product8.jpg",
    Category: "Fruits",
    Parentcategory: "Fruits",
    CategoryCode: "CT008",
    Description: "Fruits Description",
    Status: "Active",
  },
  {
    Image: "product9.jpg",
    Category: "Computers",
    Parentcategory: "Computers",
    CategoryCode: "CT009",
    Description: "Computers Description",
    Status: "Active",
  },
  {
    Image: "product10.jpg",
    Category: "Health Care",
    Parentcategory: "Health Care",
    CategoryCode: "CT0010",
    Description: "Health Care Description",
    Status: "Active",
  },
  {
    Image: "product4.jpg",
    Category: "Fruits",
    Parentcategory: "Fruits",
    CategoryCode: "CT004",
    Description: "Fruits Description",
    Status: "Active",
  },
  {
    Image: "product5.jpg",
    Category: "Accessories",
    Parentcategory: "Accessories",
    CategoryCode: "CT005",
    Description: "Accessories Description",
    Status: "Active",
  },
  {
    Image: "product6.jpg",
    Category: "Shoes",
    Parentcategory: "Shoes",
    CategoryCode: "CT006",
    Description: "Shoes Description",
    Status: "Active",
  },
  {
    Image: "product7.jpg",
    Category: "Fruits",
    Parentcategory: "Fruits",
    CategoryCode: "CT007",
    Description: "Fruits Description",
    Status: "Active",
  },
  {
    Image: "product8.jpg",
    Category: "Fruits",
    Parentcategory: "Fruits",
    CategoryCode: "CT008",
    Description: "Fruits Description",
    Status: "Active",
  },
  {
    Image: "product9.jpg",
    Category: "Computers",
    Parentcategory: "Computers",
    CategoryCode: "CT009",
    Description: "Computers Description",
    Status: "Active",
  },
  {
    Image: "product10.jpg",
    Category: "Health Care",
    Parentcategory: "Health Care",
    CategoryCode: "CT0010",
    Description: "Health Care Description",
    Status: "Active",
  },
];
export default {
  data() {
    return {
      filter: false,
      SubCategorySort: ["Sort by Date", "Newest", "Oldest"],
      SubCategorySelect: ["Choose Category", "Laptop", "Electronics", "Shoe"],
      SubCategoryfru: ["Choose Subcategory", "Fruits"],
      SubCategorycode: ["Category Code", "CT001", "CT002"],
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
