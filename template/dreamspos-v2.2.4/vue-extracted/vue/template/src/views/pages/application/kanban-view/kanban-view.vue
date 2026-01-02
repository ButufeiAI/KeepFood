<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content">
      <!-- Breadcrumb -->
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4>Projects</h4>
            <h6>Manage your tasks</h6>
          </div>
        </div>
        <div
          class="d-flex flex-sm-row flex-column align-items-sm-center align-items-start"
        >
          <div class="form-sort me-2 mb-sm-0 mb-3">
            <i data-feather="" class="feather feather-sliders info-img"></i>
            <vue-select :options="TopKan" v-model="selected" placeholder="Sort by Date" />
          </div>
          <ul class="table-top-head">
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
      </div>
      <div class="card">
        <div
          class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3"
        >
          <h4>Projects</h4>
          <div class="d-flex align-items-center flex-wrap row-gap-3">
            <div class="avatar-list-stacked avatar-group-sm me-3">
              <span class="avatar avatar-rounded">
                <img
                  class="border border-white"
                  src="@/assets/img/profiles/avatar-19.jpg"
                  alt="img"
                />
              </span>
              <span class="avatar avatar-rounded">
                <img
                  class="border border-white"
                  src="@/assets/img/profiles/avatar-29.jpg"
                  alt="img"
                />
              </span>
              <span class="avatar avatar-rounded">
                <img
                  class="border border-white"
                  src="@/assets/img/profiles/avatar-16.jpg"
                  alt="img"
                />
              </span>
              <span class="avatar avatar-rounded bg-primary fs-12"> 1+ </span>
            </div>
            <div class="d-flex align-items-center me-3">
              <p class="mb-0 me-3 pe-3 border-end fs-14">
                Total Task : <span class="text-dark"> 55 </span>
              </p>
              <p class="mb-0 me-3 pe-3 border-end fs-14">
                Pending : <span class="text-dark"> 15 </span>
              </p>
              <p class="mb-0 fs-14">Completed : <span class="text-dark"> 40 </span></p>
            </div>
            <div class="input-icon-start position-relative">
              <span class="input-icon-addon">
                <i class="ti ti-search"></i>
              </span>
              <input type="text" class="form-control" placeholder="Search Project" />
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-lg-4">
              <div class="d-flex align-items-center flex-wrap row-gap-3 mb-3">
                <h6 class="me-2">Priority</h6>
                <ul
                  class="nav nav-pills border d-inline-flex p-1 rounded bg-light todo-tabs"
                  id="pills-tab"
                  role="tablist"
                >
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link btn btn-sm btn-icon py-3 d-flex align-items-center justify-content-center w-auto active"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-selected="true"
                    >
                      All
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link btn btn-sm btn-icon py-3 d-flex align-items-center justify-content-center w-auto"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      High
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link btn btn-sm btn-icon py-3 d-flex align-items-center justify-content-center w-auto"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-medium"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      Medium
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link btn btn-sm btn-icon py-3 d-flex align-items-center justify-content-center w-auto"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-low"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      Low
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-8">
              <div
                class="d-flex align-items-center justify-content-lg-end flex-wrap row-gap-3 mb-3"
              >
                <div class="input-icon w-120 position-relative me-2">
                  <a-date-picker v-model:value="value1" class="datetimepicker form-control" />
                </div>
                <div class="input-icon w-120 position-relative me-2">
                  <a-date-picker v-model:value="value2" class="datetimepicker form-control" />
                </div>
                <div class="dropdown me-2">
                  <a
                    href="javascript:void(0);"
                    class="dropdown-toggle btn btn-white d-inline-flex align-items-center p-2"
                    data-bs-toggle="dropdown"
                  >
                    Select Status
                  </a>
                  <ul class="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item rounded-1"
                        >Inprogress</a
                      >
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item rounded-1"
                        >On-hold</a
                      >
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item rounded-1"
                        >Completed</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="d-flex align-items-center border p-2 rounded">
                  <span class="d-inline-flex me-2">Sort By : </span>
                  <div class="dropdown">
                    <a
                      href="javascript:void(0);"
                      class="dropdown-toggle btn btn-white d-inline-flex align-items-center border-0 bg-transparent p-0 text-dark"
                      data-bs-toggle="dropdown"
                    >
                      Created Date
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end p-3">
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1"
                          >Created Date</a
                        >
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1"
                          >Last 7 Days</a
                        >
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1"
                          >Due Date</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-content" id="pills-tabContent">
            <all-kanban></all-kanban>

            <high-kanban></high-kanban>

            <medium-kanban></medium-kanban>

            <low-kanban></low-kanban>
          </div>
        </div>
      </div>
    </div>
    <div
      class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3"
    >
      <p class="mb-0">2014 - 2025 &copy; SmartHR.</p>
      <p>
        Designed &amp; Developed By
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>
  <!-- /Page Wrapper -->
</template>
<script>
import { ref } from "vue";
const value1 = ref();
const value2 = ref();
export default {
  data() {
    return {
      value1,
      value2,
      title: "Kanban View",
      text: "Applications",
      text1: "Kanban View",
      selected: [],
      TopKan: [
        {label: "Sort by Date", value: "Sort by Date",},
        {label: "Ascending", value: "Ascending",},
        {label: "Descending", value: "Descending",},
        {label: "Recently Viewed", value: "Recently Viewed",},
        {label: "Recently Added", value: "Recently Added",},
        {label: "Creation Date", value: "Creation Date",},
      ],
    };
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
