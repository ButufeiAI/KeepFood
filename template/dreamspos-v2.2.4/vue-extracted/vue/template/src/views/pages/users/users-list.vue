<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4 class="fw-bold">Users</h4>
            <h6>Manage your users</h6>
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
            href="#"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#add-user"
            ><i class="ti ti-circle-plus me-1"></i>Add User</a
          >
        </div>
      </div>

      <!-- /product list -->
      <div class="card">
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
            <div class="dropdown">
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
          </div>
        </div>
        <div class="card-body p-0">
          <div class="table-responsive">
            <a-table
              :columns="columns"
              :data-source="data"
              :row-selection="rowSelection"
              class="table datatable thead-light"
            >
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'UserName'">
                  <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" class="avatar avatar-md me-2">
                      <img :src="getImageUrl(record.Image)"
                        alt="product"
                      />
                    </a>
                    <a href="javascript:void(0);">{{ record.UserName }}</a>
                  </div>
                </template>
                <template v-else-if="column.key === 'Status'">
                  <span
                    class="d-inline-flex align-items-center p-1 pe-2 rounded-1 text-white bg-success fs-10"
                    ><i class="ti ti-point-filled me-1 fs-11"></i>Active</span
                  >
                </template>
                <template v-else-if="column.key === 'action'">
                  <div class="action-table-data">
                    <div class="edit-delete-action">
                      <a class="me-2 p-2 mb-0" href="javascript:void(0);">
                        <i data-feather="eye" class="action-eye"></i>
                      </a>
                      <a
                        class="me-2 p-2 mb-0"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-user"
                      >
                        <i data-feather="edit" class="feather-edit"></i>
                      </a>
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#delete-modal"
                        class="p-2 mb-0"
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
      <p class="mb-0 text-gray-9">
        {{ new Date().getFullYear() }} &copy; DreamsPOS. All Right Reserved
      </p>
      <p>
        Designed &amp; Developed by
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>
  <users-list-modal></users-list-modal>
</template>
<script>
const columns = [
  {
    title: "User Name",
    dataIndex: "UserName",
    key: "UserName",
    sorter: {
      compare: (a, b) => {
        a = a.UserName.toLowerCase();
        b = b.UserName.toLowerCase();
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
    title: "Role",
    dataIndex: "Role",
    sorter: {
      compare: (a, b) => {
        a = a.Role.toLowerCase();
        b = b.Role.toLowerCase();
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
    sorter: false,
  },
];
const data = [
  {
    key: "1",
    UserName: "Henry Bryant",
    Phone: "+12498345785",
    Email: "henry@example.com",
    Role: "Admin",
    Image: "user-47.png",
  },
  {
    key: "2",
    UserName: "Jenny Ellis",
    Phone: "+13178964582",
    Email: "jenny@example.com",
    Role: "Manager",
    Image: "user-02.jpg",
  },
  {
    key: "3",
    UserName: "Leon Baxter",
    Phone: "+12796183487",
    Email: "leon@example.com",
    Role: "Salesman",
    Image: "user-43.png",
  },
  {
    key: "4",
    UserName: "Karen Flores",
    Phone: "+17538647943",
    Email: "karen@example.com",
    Role: "Supervisor",
    Image: "user-35.jpg",
  },
  {
    key: "5",
    UserName: "Michael Dawson",
    Phone: "+13798132475",
    Email: "michael@example.com",
    Role: "Store Keeper",
    Image: "user-44.png",
  },
  {
    key: "6",
    UserName: "Karen Galvan",
    Phone: "+17596341894",
    Email: "karen@example.com",
    Role: "Purchase",
    Image: "user-37.jpg",
  },
  {
    key: "7",
    UserName: "Thomas Ward",
    Phone: "+12973548678",
    Email: "thomas@example.com",
    Role: "Delivery Biker",
    Image: "user-48.png",
  },
  {
    key: "8",
    UserName: "Aliza Duncan",
    Phone: "+13147858357",
    Email: "aliza@example.com",
    Role: "Maintenance",
    Image: "user-38.jpg",
  },
  {
    key: "9",
    UserName: "James Higham",
    Phone: "+11978348626",
    Email: "james@example.com",
    Role: "Quality Analyst",
    Image: "user-45.png",
  },
  {
    key: "10",
    UserName: "Jada Robinson",
    Phone: "+12678934561",
    Email: "robinson@example.com",
    Role: "Accountant",
    Image: "user-40.jpg",
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
