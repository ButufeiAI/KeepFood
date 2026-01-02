<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="d-flex flex-wrap justify-content-between align-items-center mb-3">
        <ul
          class="nav nav-pills low-stock-tab d-flex me-2 mb-0"
          id="pills-tab"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Bank Accounts
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Account Type
            </button>
          </li>
        </ul>
      </div>

      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div class="page-header">
            <div class="add-item d-flex">
              <div class="page-title">
                <h4 class="fw-bold">Bank Accounts</h4>
                <h6>Manage your Accounts List</h6>
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
                data-bs-target="#add-bank-account"
                ><i class="ti ti-circle-plus me-1"></i>Add Account</a
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
                      <a href="javascript:void(0);" class="dropdown-item rounded-1"
                        >Active</a
                      >
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
                    Sort By : Latest
                  </a>
                  <ul class="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item rounded-1"
                        >Latest</a
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
                  </ul>
                </div>
              </div>
            </div>
            <div class="card-body p-0">
              <div class="table-responsive">
                <account-list-table></account-list-table>
              </div>
            </div>
          </div>
          <!-- /product list -->
        </div>
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <div class="page-header">
            <div class="add-item d-flex">
              <div class="page-title">
                <h4 class="fw-bold">Accounts Type</h4>
                <h6>Manage your Accounts Type</h6>
              </div>
            </div>
            <ul class="table-top-head">
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
                  id="collapse-header2"
                  ><i class="ti ti-chevron-up"></i
                ></a>
              </li>
            </ul>
            <div class="page-btn">
              <a
                href="#"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#add-account-type"
                ><i class="ti ti-circle-plus me-1"></i>Add Account Type</a
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
                  <span class="btn-searchset"
                    ><i class="ti ti-search fs-14 feather-search"></i
                  ></span>
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
                      <a href="javascript:void(0);" class="dropdown-item rounded-1"
                        >Active</a
                      >
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
                <account-type-table></account-type-table>
              </div>
            </div>
          </div>
          <!-- /product list -->
        </div>
      </div>
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

  <account-list-modal></account-list-modal>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
