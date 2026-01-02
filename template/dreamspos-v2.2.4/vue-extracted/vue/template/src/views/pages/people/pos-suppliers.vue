<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4>Supplier List</h4>
            <h6>Manage Your Supplier</h6>
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
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#add-supplier"
            ><i class="ti ti-circle-plus me-1"></i>Add Supplier</a
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
                Select Status
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
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >New Joiners</a
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
                <template v-if="column.key === 'SupplierName'">
                  <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" class="avatar avatar-md">
                      <img :src="getImageUrl(record.Image)"
                        alt="product"
                      />
                    </a>
                    <div class="ms-2">
                      <p class="text-gray-9 mb-0">
                        <a href="#">{{ record.SupplierName }}</a>
                      </p>
                    </div>
                  </div>
                </template>
                <template v-else-if="column.key === 'Status'">
                  <span
                    class="badge badge-success d-inline-flex align-items-center badge-xs"
                  >
                    <i class="ti ti-point-filled me-1"></i>{{ record.Status }}
                  </span>
                </template>
                <template v-else-if="column.key === 'action'">
                  <div class="action-table-data">
                    <div class="edit-delete-action">
                      <a class="me-2 p-2" href="#">
                        <i data-feather="eye" class="feather-eye"></i>
                      </a>
                      <a
                        class="me-2 p-2"
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-supplier"
                      >
                        <i data-feather="edit" class="feather-edit"></i>
                      </a>
                      <a
                        class="p-2"
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#delete-modal"
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
      <p class="mb-0">
        {{ new Date().getFullYear() }} &copy; DreamsPOS. All Right Reserved
      </p>
      <p>
        Designed &amp; Developed by
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>
  <suppliers-modal></suppliers-modal>
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
    title: "Supplier",
    dataIndex: "SupplierName",
    key: "SupplierName",
    sorter: {
      compare: (a, b) => {
        a = a.SupplierName.toLowerCase();
        b = b.SupplierName.toLowerCase();
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
    title: "Country",
    dataIndex: "Country",
    sorter: {
      compare: (a, b) => {
        a = a.Country.toLowerCase();
        b = b.Country.toLowerCase();
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
const rowSelection = {
  onChange: () => {},
  onSelect: () => {},
  onSelectAll: () => {},
};
const data = [
  {
    key: "1",
    SupplierName: "Apex Computers",
    Code: "SU001",
    Email: "apexcomputers@example.com",
    Image: "supplier-01.png",
    Phone: "12163547758",
    Country: "Germany",
    Status: "Active",
  },
  {
    key: "2",
    SupplierName: "Beats Headphones",
    Code: "SU002",
    Email: "beatsheadphones@example.com",
    Image: "supplier-02.png",
    Phone: "16372895190",
    Country: "Mexico",
    Status: "Active",
  },
  {
    key: "3",
    SupplierName: "Dazzle Shoes",
    Code: "SU003",
    Email: "dazzleshoes@example.com",
    Image: "supplier-03.png",
    Phone: "17589201739",
    Country: "France",
    Status: "Active",
  },
  {
    key: "4",
    SupplierName: "Best Accessories",
    Code: "SU004",
    Email: "bestaccessories@example.com",
    Image: "supplier-04.png",
    Phone: "18934092467",
    Country: "Italy",
    Status: "Active",
  },
  {
    key: "5",
    SupplierName: "A-Z Store",
    Code: "SU005",
    Email: "atozstore@example.com",
    Image: "supplier-05.png",
    Phone: "12568749035",
    Country: "Belgium",
    Status: "Active",
  },
  {
    key: "6",
    SupplierName: "Hatimi Hardwares",
    Code: "SU006",
    Email: "hatimihardwares@example.com",
    Image: "supplier-06.png",
    Phone: "19054674627",
    Country: "Austria",
    Status: "Active",
  },
  {
    key: "7",
    SupplierName: "Aesthetic Bags",
    Code: "SU007",
    Email: "aestheticbags@example.com",
    Image: "supplier-07.png",
    Phone: "18943670365",
    Country: "India",
    Status: "Active",
  },
  {
    key: "8",
    SupplierName: "Alpha Mobiles",
    Code: "SU008",
    Email: "alphamobiles@example.com",
    Image: "supplier-08.png",
    Phone: "16473894103",
    Country: "Greece",
    Status: "Active",
  },
  {
    key: "9",
    SupplierName: "Sigma Chairs",
    Code: "SU009",
    Email: "sigmachairs@example.com",
    Image: "supplier-09.png",
    Phone: "17590274536",
    Country: "Japan",
    Status: "Active",
  },
  {
    key: "10",
    SupplierName: "Zenith Bags",
    Code: "SU010",
    Email: "zenithbags@example.com",
    Image: "supplier-10.png",
    Phone: "12564098473",
    Country: "China",
    Status: "Active",
  },
  {
    key: "11",
    SupplierName: "Aesthetic Bags",
    Code: "SU011",
    Email: "aestheticbags@example.com",
    Image: "supplier-07.png",
    Phone: "18943670365",
    Country: "India",
    Status: "Active",
  },
  {
    key: "12",
    SupplierName: "A-Z Store",
    Code: "SU012",
    Email: "atozstore@example.com",
    Image: "supplier-05.png",
    Phone: "12568749035",
    Country: "Angola",
    Status: "Active",
  },
  {
    key: "13",
    SupplierName: "Dazzle Shoes",
    Code: "SU013",
    Email: "dazzleshoes@example.com",
    Image: "supplier-03.png",
    Phone: "17589201739",
    Country: "Albania",
    Status: "Active",
  },
];
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
      return new URL(`/src/assets/img/supplier/${imageName}`, import.meta.url).href;
    },
  },
};
</script>
