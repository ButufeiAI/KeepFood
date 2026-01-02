<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4>Warehouses</h4>
            <h6>Manage your warehouses</h6>
          </div>
        </div>
        <ul class="table-top-head">
          <li class="me-2">
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"
              ><img src="@/assets/img/icons/pdf.svg" alt="img"
            /></a>
          </li>
          <li class="me-2">
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"
              ><img src="@/assets/img/icons/excel.svg" alt="img"
            /></a>
          </li>
          <li class="me-2">
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"
              ><i class="ti ti-refresh"></i
            ></a>
          </li>
          <li class="me-2">
            <a
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Collapse"
              @click="toggleHeader"
              id="collapse-header"
              ><i class="ti ti-chevron-up"></i
            ></a>
          </li>
        </ul>
        <div class="page-btn">
          <a
            href="#"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#add-warehouse"
            ><i class="ti ti-circle-plus me-1"></i>Add Warehouse</a
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
                <template v-if="column.key === 'ContactPerson'">
                  <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" class="avatar avatar-md">
                      <img
                        :src="getImageUrl(record.Image)"
                        alt="product"
                      />
                    </a>
                    <div class="ms-2">
                      <p class="mb-0">
                        <a href="#" class="text-default">{{ record.ContactPerson }}</a>
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
                        data-bs-target="#edit-warehouse"
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
  <warehouse-modal></warehouse-modal>
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
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
    title: "Contact Person",
    dataIndex: "ContactPerson",
    key: "ContactPerson",
    sorter: {
      compare: (a, b) => {
        a = a.ContactPerson.toLowerCase();
        b = b.ContactPerson.toLowerCase();
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
    title: "Total Products",
    dataIndex: "TotalProducts",
    sorter: {
      compare: (a, b) => {
        a = a.TotalProducts.toLowerCase();
        b = b.TotalProducts.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Stock",
    dataIndex: "Stock",
    sorter: {
      compare: (a, b) => {
        a = a.Stock.toLowerCase();
        b = b.Stock.toLowerCase();
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
    title: "Created On",
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
const rowSelection = {
  onChange: () => {},
  onSelect: () => {},
  onSelectAll: () => {},
};
const data = [
  {
    key: "1",
    Warehouse: "Lavish Warehouse",
    Image: "avatar-01.png",
    ContactPerson: "Chad Taylor",
    Phone: "12498345785",
    TotalProducts: "10",
    Stock: "600",
    Qty: "80",
    CreatedOn: "24 Dec 2024",
    Status: "Active",
  },
  {
    key: "2",
    Warehouse: "Quaint Warehouse",
    Image: "avatar-02.png",
    ContactPerson: "Jenny Ellis",
    Phone: "13178964582",
    TotalProducts: "15",
    Stock: "300",
    Qty: "85",
    CreatedOn: "10 Dec 2024",
    Status: "Active",
  },
  {
    key: "3",
    Warehouse: "Traditional Warehouse",
    Image: "avatar-03.png",
    ContactPerson: "Leon Baxter",
    Phone: "12796183487",
    TotalProducts: "12",
    Stock: "400",
    Qty: "70",
    CreatedOn: "27 Nov 2024",
    Status: "Active",
  },
  {
    key: "4",
    Warehouse: "Cool Warehouse",
    Image: "avatar-04.png",
    ContactPerson: "Karen Flores",
    Phone: "17538647943",
    TotalProducts: "20",
    Stock: "320",
    Qty: "65",
    CreatedOn: "18 Nov 2024",
    Status: "Active",
  },
  {
    key: "5",
    Warehouse: "Overflow Warehouse",
    Image: "avatar-05.png",
    ContactPerson: "Michael Dawson",
    Phone: "13798132475",
    TotalProducts: " 8",
    Stock: "170",
    Qty: "80",
    CreatedOn: "06 Nov 2024",
    Status: "Active",
  },
  {
    key: "6",
    Warehouse: "Nova Storage Hub",
    Image: "avatar-06.png",
    ContactPerson: "Karen Galvan",
    Phone: "17596341894",
    TotalProducts: "13",
    Stock: "220",
    Qty: "75",
    CreatedOn: "25 Oct 2024",
    Status: "Active",
  },
  {
    key: "7",
    Warehouse: "Retail Supply Hub",
    Image: "avatar-07.png",
    ContactPerson: "Thomas Ward",
    Phone: "12973548678",
    TotalProducts: "17",
    Stock: "310",
    Qty: "60",
    CreatedOn: "14 Oct 2024",
    Status: "Active",
  },
  {
    key: "8",
    Warehouse: "EdgeWare Solutions",
    Image: "avatar-08.png",
    ContactPerson: "Aliza Duncan",
    Phone: "13147858357",
    TotalProducts: "22",
    Stock: "450",
    Qty: "50",
    CreatedOn: "03 Oct 2024",
    Status: "Active",
  },
  {
    key: "9",
    Warehouse: "North Zone Warehouse",
    Image: "avatar-09.png",
    ContactPerson: "James Higham",
    Phone: "11978348626",
    TotalProducts: "24",
    Stock: "270",
    Qty: "70",
    CreatedOn: "20 Sep 2024",
    Status: "Active",
  },
  {
    key: "10",
    Warehouse: "Fulfillment Hub",
    Image: "avatar-10.png",
    ContactPerson: "Jada Robinson",
    Phone: "12678934561",
    TotalProducts: "14",
    Stock: "300",
    Qty: "45",
    CreatedOn: "10 Sep 2024",
    Status: "Active",
  },
];
export default {
  data() {
    return {
      startdate: currentDate,
      dateFormat: "dd-MM-yyyy",
      isLayoutBoxVisible: false,
      filter: false,
      WarSort: ["Sort by Date", "Newest", "Oldest"],
      Choosestatuswar: ["Choose Status", "Active", "Inactive"],
      Chooseperson: ["Choose Person", "Steven", "Gravely"],
      Choosewar: ["Choose Warehouse", "Legendary", "Determined", "Sincere", "Pretty"],
      data,
      columns,
      rowSelection,
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
      return new URL(`/src/assets/img/warehouse/${imageName}`, import.meta.url).href;
    },
  },
};
</script>
