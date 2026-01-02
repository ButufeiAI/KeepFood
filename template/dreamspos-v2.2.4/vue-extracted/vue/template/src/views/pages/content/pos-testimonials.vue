<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4>Testimonials</h4>
            <h6>Manage your testimonials</h6>
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
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" @click="toggleHeader"><i class="ti ti-chevron-up"></i></a>
          </li>
        </ul>
        <div class="page-btn">
          <a
            href="#"
            class="btn btn-primary btn-md d-inline-flex align-items-center"
            data-bs-toggle="modal"
            data-bs-target="#add-testimonial"
            ><vue-feather type="plus-circle" class="me-2"></vue-feather>Add Testimonial</a
          >
        </div>
      </div>
      <!-- product list -->
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
        <div class="card-body pb-0">
          <div class="custom-datatable-filter table-responsive">
            <a-table
              class="table datatable thead-light"
              :columns="columns"
              :data-source="data"
              :row-selection="rowSelection"
            >
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'Author'">
                  <div class="d-flex align-items-center">
                    <a href="#" class="avatar avatar-md"
                      ><img
                        :src="getImageUrl(record.Image)"
                        class="img-fluid"
                        alt="img"
                    /></a>
                    <div class="ms-2">
                      <p class="text-dark mb-0">
                        <a href="#">{{ record.Author }}</a>
                      </p>
                    </div>
                  </div>
                </template>
                <template v-else-if="column.key === 'Rating'">
                  <div>
                    <span><i class="ti ti-star-filled text-warning ms-1"></i></span>
                    <span><i class="ti ti-star-filled text-warning ms-1"></i></span>
                    <span><i class="ti ti-star-filled text-warning ms-1"></i></span>
                    <span><i class="ti ti-star-filled text-warning ms-1"></i></span>
                    <span><i class="ti ti-star-filled text-warning ms-1"></i></span>
                  </div>
                </template>
                <template v-else-if="column.key === 'action'">
                  <div class="action-table-data">
                    <div class="edit-delete-action">
                      <a
                        class="me-2 p-2"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-testimonial"
                      >
                        <i data-feather="edit" class="feather-edit"></i>
                      </a>
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#delete-modal"
                        class="p-2"
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
      <p class="mb-0">{{ new Date().getFullYear() }} © DreamsPOS. All Right Reserved</p>
      <p>
        Designed &amp; Developed By
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>
  <testimonials-modal></testimonials-modal>
</template>
<script>
const columns = [
  {
    title: "Author",
    dataIndex: "Author",
    key: "Author",
    sorter: {
      compare: (a, b) => {
        a = a.Author.toLowerCase();
        b = b.Author.toLowerCase();
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
    title: "Content",
    dataIndex: "Content",
    sorter: {
      compare: (a, b) => {
        a = a.Content.toLowerCase();
        b = b.Content.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Rating",
    dataIndex: "Rating",
    key: "Rating",
    sorter: false,
  },
  {
    title: "Created Date",
    dataIndex: "CreatedDate",
    sorter: true,
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
    Author: "Carl Evans",
    Image: "user-32.jpg",
    Role: "Manager",
    Content: "This POS system has streamlined our operations and improved efficiency!",
    CreatedDate: "24 Dec 2024",
  },
  {
    key: "2",
    Author: "Minerva Rameriz",
    Image: "user-02.jpg",
    Role: "Salesman",
    Content: "The POS system makes processing sales fast and effortless",
    CreatedDate: "25 Dec 2024",
  },
  {
    key: "3",
    Author: "Robert Lamon",
    Image: "user-01.jpg",
    Role: "Supervisor",
    Content: "Easy to track sales and team performance in real-time",
    CreatedDate: "24 Dec 2024",
  },
  {
    key: "4",
    Author: "Patricia Lewis",
    Image: "user-04.jpg",
    Role: "Store Keeper",
    Content: "This system saves me time by automating many inventory tasks",
    CreatedDate: "27 Dec 2024",
  },
  {
    key: "5",
    Author: "Mark Joslyn",
    Image: "user-08.jpg",
    Role: "Manager",
    Content: "It’s easy to manage sales, inventory, and staff with this POS system!",
    CreatedDate: "28 Dec 2024",
  },
  {
    key: "6",
    Author: "Marsha Betts",
    Image: "user-10.jpg",
    Role: "Inventory Manager",
    Content: "Real-time inventory updates make stock management a breeze",
    CreatedDate: "30 Dec 2024",
  },
  {
    key: "7",
    Author: "Daniel Jude",
    Image: "user-28.jpg",
    Role: "Delivery Biker",
    Content: "POS integration makes tracking deliveries easy!",
    CreatedDate: "14 Dec 2024",
  },
  {
    key: "8",
    Author: "Emma Bates",
    Image: "user-17.jpg",
    Role: "Cashier",
    Content: "Quick and easy to use - checkouts have never been faster!",
    CreatedDate: "24 Dec 2024",
  },
  {
    key: "9",
    Author: "Richard Fralick",
    Image: "user-20.jpg",
    Role: "Accountant",
    Content: "Transaction tracking is simplified, making reconciliation faster.",
    CreatedDate: "10 Dec 2024",
  },
  {
    key: "10",
    Author: "Michelle Robison",
    Image: "user-29.jpg",
    Role: "Manager",
    Content: "Our team is more organized, and customer checkouts are faster than ever.",
    CreatedDate: "16 Dec 2024",
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
