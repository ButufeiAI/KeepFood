<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>

  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4 class="fw-bold">Billers</h4>
            <h6>Manage your billers</h6>
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
              @click="toggleHeader"
              ><i class="ti ti-chevron-up"></i
            ></a>
          </li>
        </ul>
        <div class="page-btn">
          <a
            href="#"
            class="btn btn-primary text-white"
            data-bs-toggle="modal"
            data-bs-target="#add-biller"
            ><i class="ti ti-circle-plus me-1"></i>Add Biller</a
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
              <a href="#" class="btn-searchset"
                ><i data-feather="search" class="feather-search"></i
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
                Status
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Inactive</a
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
          <div class="table-responsive">
            <a-table
              class="table datanew"
              :columns="columns"
              :data-source="data"
              :row-selection="rowSelection"
            >
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'Biller'">
                  <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" class="avatar avatar-md me-2">
                      <img :src="getImageUrl(record.Image)"
                        alt="product"
                      />
                    </a>
                    <a href="javascript:void(0);">{{ record.Biller }}</a>
                  </div>
                </template>
                <template v-else-if="column.key === 'Country'">
                  <span
                    class="d-inline-flex align-items-center p-1 pe-2 rounded-1 text-white bg-success fs-10"
                  >
                    <i class="ti ti-point-filled me-1 fs-11"></i>{{ record.Country }}
                  </span>
                </template>
                <template v-else-if="column.key === 'action'">
                  <div class="d-flex">
                    <div class="edit-delete-action d-flex align-items-center">
                      <a
                        class="me-2 p-2 d-flex align-items-center border rounded"
                        href="#"
                      >
                        <i data-feather="eye" class="feather-eye"></i>
                      </a>
                      <a
                        class="me-2 p-2 d-flex align-items-center border rounded"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-biller"
                      >
                        <i data-feather="edit" class="feather-edit"></i>
                      </a>
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#delete-modal"
                        class="p-2 d-flex align-items-center border rounded"
                        href="javascript:void(0);"
                      >
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
      <p class="mb-0 text-gray-9">2014-2025 © DreamsPOS. All Right Reserved</p>
      <p>
        Designed &amp; Developed By
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>

  <billers-modal></billers-modal>
</template>

<script>
const columns = [
  {
    title: "Code",
    dataIndex: "Code",
    sorter: {
      compare: (a, b) => {
        a = a.Code.toLowerCase();
        b = b.Code.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Biller",
    dataIndex: "Biller",
    key: "Biller",
    sorter: {
      compare: (a, b) => {
        a = a.Biller.toLowerCase();
        b = b.Biller.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Company Name",
    dataIndex: "Company_Name",
    sorter: {
      compare: (a, b) => {
        a = a.Company_Name.toLowerCase();
        b = b.Company_Name.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Email",
    dataIndex: "Email",
    sorter: {
      compare: (a, b) => {
        a = a.Email.toLowerCase();
        b = b.Email.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Phone",
    dataIndex: "Phone",
    sorter: {
      compare: (a, b) => {
        a = a.Phone.toLowerCase();
        b = b.Phone.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Phone",
    dataIndex: "PhoneOne",
    sorter: {
      compare: (a, b) => {
        a = a.PhoneOne.toLowerCase();
        b = b.PhoneOne.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Country",
    dataIndex: "Country",
    key: "Country",
    sorter: {
      compare: (a, b) => {
        a = a.Country.toLowerCase();
        b = b.Country.toLowerCase();
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
    key: "1",
    Code: "BI001",
    Image: "user-42.png",
    Biller: "Shaun Farley",
    Company_Name: "GreenTech Industries",
    Email: "shaun@example.com",
    Phone: "18647961254",
    PhoneOne: "USA",
    Country: "Active",
  },
  {
    key: "2",
    Code: "BI002",
    Image: "user-02.jpg",
    Biller: "Jenny Ellis",
    Company_Name: "BlueSky Logistics",
    Email: "jenny@example.com",
    Phone: "13197521863",
    PhoneOne: "Germany",
    Country: "Active",
  },
  {
    key: "3",
    Code: "BI003",
    Image: "user-43.png",
    Biller: "Leon Baxter",
    Company_Name: "EcoFarm Organics",
    Email: "leon@example.com",
    Phone: "18496275831",
    PhoneOne: "Japan",
    Country: "Active",
  },
  {
    key: "4",
    Code: "BI004",
    Image: "user-35.jpg",
    Biller: "Karen Flores",
    Company_Name: "SmartTech Solutions",
    Email: "karen@example.com",
    Phone: "18731498524",
    PhoneOne: "Austria",
    Country: "Active",
  },
  {
    key: "5",
    Code: "BI005",
    Image: "user-44.png",
    Biller: "Michael Dawson",
    Company_Name: "Fresh Supplies",
    Email: "michael@example.com",
    Phone: "12876928738",
    PhoneOne: "Turkey",
    Country: "Active",
  },
  {
    key: "6",
    Code: "BI006",
    Image: "user-37.jpg",
    Biller: "Karen Galvan",
    Company_Name: "BrightSource Lighting",
    Email: "karen@example.com",
    Phone: "17534896148",
    PhoneOne: "Mexico",
    Country: "Active",
  },
  {
    key: "7",
    Code: "BI007",
    Image: "user-44.png",
    Biller: "Thomas Ward",
    Company_Name: "GlobalTech Industries",
    Email: "thomas@example.com",
    Phone: "16482479624",
    PhoneOne: "France",
    Country: "Active",
  },
  {
    key: "8",
    Code: "BI008",
    Image: "user-38.jpg",
    Biller: "Aliza Duncan",
    Company_Name: "HealthWell Pharma",
    Email: "aliza@example.com",
    Phone: "13175964827",
    PhoneOne: "Greece",
    Country: "Active",
  },
  {
    key: "9",
    Code: "BI009",
    Image: "user-45.png",
    Biller: "James Higham",
    Company_Name: "HomeStyle Furnishings",
    Email: "james@example.com",
    Phone: "13875196482",
    PhoneOne: "Italy",
    Country: "Active",
  },
  {
    key: "10",
    Code: "BI010",
    Image: "user-40.jpg",
    Biller: "Jada Robinson",
    Company_Name: "EcoLogistics Partners",
    Email: "robinson@example.com",
    Phone: "17586143284",
    PhoneOne: "China",
    Country: "Active",
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
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/users/${imageName}`, import.meta.url).href;
    },
  },
};
</script>
