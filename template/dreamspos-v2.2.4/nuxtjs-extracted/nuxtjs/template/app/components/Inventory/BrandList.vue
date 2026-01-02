<template>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4>Brand</h4>
            <h6>Manage your brands</h6>
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
            data-bs-target="#add-brand"
            ><vue-feather type="plus-circle" class="me-2"></vue-feather>Add New Brand</a
          >
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
            <div class="dropdown">
              <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                Sort By : Latest
              </a>
              <ul class="dropdown-menu  dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Latest</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Ascending</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Desending</a>
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
                <template v-if="column.key === 'Brand'">
                  <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" class="avatar avatar-md bg-light-900 p-1 me-2">
                      <img class="object-fit-contain" :src="getImageUrl(record.Logo)" alt="img">
                    </a>
                    <a href="javascript:void(0);">{{record.Brand}}</a>
                  </div>
                </template>
                <template v-else-if="column.key === 'Status'">
                  <span class="badge table-badge bg-success fw-medium fs-10">{{record.Status}}</span>
                </template>
                <template v-else-if="column.key === 'action'">
                  <div class="action-table-data">
                    <div class="edit-delete-action">
                      <a class="me-2 p-2" href="#" data-bs-toggle="modal" data-bs-target="#edit-brand">
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
  <brand-list-modal></brand-list-modal>
</template>
<script>
const columns = [
  {
    title: "Brand",
    dataIndex: "Brand",
    key: "Brand",
    sorter: {
      compare: (a, b) => {
        a = a.Brand.toLowerCase();
        b = b.Brand.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Created Date",
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
    Brand: "Lenevo",
    Logo: "brand-icon-01.png",
    CreatedOn: "25 May 2024",
    Status: "Active",
  },
  {
    Brand: "Boat",
    Logo: "brand-icon-02.png",
    CreatedOn: "24 Jun 2024",
    Status: "Active",
  },
  {
    Brand: "Nike",
    Logo: "brand-icon-03.png",
    CreatedOn: "23 Jul 2024",
    Status: "Active",
  },
  {
    Brand: "Apple",
    Logo: "brand-icon-04.png",
    CreatedOn: "22 Aug 2024",
    Status: "Active",
  },
  {
    Brand: "Amazon",
    Logo: "brand-icon-05.png",
    CreatedOn: "21 Sep 2024",
    Status: "Active",
  },
  {
    Brand: "Woodmart",
    Logo: "brand-icon-06.png",
    CreatedOn: "20 Sep 2024",
    Status: "Active",
  },
  {
    Brand: "Versace",
    Logo: "brand-icon-07.png",
    CreatedOn: "20 Sep 2024",
    Status: "Active",
  },
  {
    Brand: "Lava",
    Logo: "brand-icon-08.png",
    CreatedOn: "20 Sep 2024",
    Status: "Active",
  },
  {
    Brand: "Bently",
    Logo: "brand-icon-09.png",
    CreatedOn: "20 Sep 2024",
    Status: "Active",
  },
  {
    Brand: "Nilkamal",
    Logo: "brand-icon-10.png",
    CreatedOn: "20 Sep 2024",
    Status: "Active",
  },
];
import { ref } from "vue";
const currentDate = ref(new Date());
export default {
  data() {
    return {
      filter: false,
      startdate: currentDate,
      dateFormat: "dd-MM-yyyy",
      BrandSort: ["Sort by Date", "Newest", "Oldest"],
      ChooseBrand: ["Choose Brand", "Lenevo", "Boat", "Nike"],
      BrandStatus: ["Choose Status", "Active", "Inactive"],
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
      return new URL(`/assets/img/brand/${imageName}`, import.meta.url).href;
    },
  },
};
</script>
