<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content settings-content">
      <div class="page-header settings-pg-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4>Settings</h4>
            <h6>Manage your settings on portal</h6>
          </div>
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
      <div class="row">
        <div class="col-xl-12">
          <div class="settings-wrapper d-flex">
            <settings-sidebar></settings-sidebar>
            <div class="card flex-fill mb-0">
              <div class="card-header">
                <h4 class="fs-18 fw-bold">Connected Apps</h4>
              </div>
              <div class="card-body pb-0">
                <div class="row">
                  <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                    <div class="card">
                      <div class="card-body">
                        <div
                          class="d-flex align-items-center justify-content-between mb-3"
                        >
                          <div class="app-icon">
                            <img src="@/assets/img/icons/app-icon-01.svg" alt="Img" />
                          </div>
                          <div class="connect-btn">
                            <a href="javascript:void(0);" class="badge bg-outline-success"
                              >Connected</a
                            >
                          </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                          <div>
                            <h5 class="fs-16 fw-medium">Calendar</h5>
                          </div>
                          <div
                            class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2"
                          >
                            <input type="checkbox" id="user1" class="check" checked />
                            <label for="user1" class="checktoggle"> </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                    <div class="card">
                      <div class="card-body">
                        <div
                          class="d-flex align-items-center justify-content-between mb-3"
                        >
                          <div class="app-icon">
                            <img src="@/assets/img/icons/app-icon-02.svg" alt="Img" />
                          </div>
                          <div class="connect-btn">
                            <a href="javascript:void(0);" class="badge bg-outline-success"
                              >Connected</a
                            >
                          </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                          <div>
                            <h5 class="fs-16 fw-medium">Figma</h5>
                          </div>
                          <div
                            class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2"
                          >
                            <input type="checkbox" id="user2" class="check" checked />
                            <label for="user2" class="checktoggle"> </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                    <div class="card">
                      <div class="card-body">
                        <div
                          class="d-flex align-items-center justify-content-between mb-3"
                        >
                          <div class="app-icon">
                            <img src="@/assets/img/icons/app-icon-03.svg" alt="Img" />
                          </div>
                          <div class="connect-btn">
                            <a href="javascript:void(0);" class="badge bg-outline-success"
                              >Connected</a
                            >
                          </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                          <div>
                            <h5 class="fs-16 fw-medium">Dropbox</h5>
                          </div>
                          <div
                            class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2"
                          >
                            <input type="checkbox" id="user3" class="check" checked />
                            <label for="user3" class="checktoggle"> </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                    <div class="card">
                      <div class="card-body">
                        <div
                          class="d-flex align-items-center justify-content-between mb-3"
                        >
                          <div class="app-icon">
                            <img src="@/assets/img/icons/app-icon-04.svg" alt="Img" />
                          </div>
                          <div class="connect-btn">
                            <a href="javascript:void(0);" class="badge bg-outline-success"
                              >Connected</a
                            >
                          </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                          <div>
                            <h5 class="fs-16 fw-medium">Slack</h5>
                          </div>
                          <div
                            class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2"
                          >
                            <input type="checkbox" id="user4" class="check" checked />
                            <label for="user4" class="checktoggle"> </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                    <div class="card">
                      <div class="card-body">
                        <div
                          class="d-flex align-items-center justify-content-between mb-3"
                        >
                          <div class="app-icon">
                            <img src="@/assets/img/icons/app-icon-05.svg" alt="Img" />
                          </div>
                          <div class="connect-btn">
                            <a href="javascript:void(0);" class="badge bg-outline-success"
                              >Connected</a
                            >
                          </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                          <div>
                            <h5 class="fs-16 fw-medium">Github</h5>
                          </div>
                          <div
                            class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2"
                          >
                            <input type="checkbox" id="user5" class="check" checked />
                            <label for="user5" class="checktoggle"> </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                    <div class="card">
                      <div class="card-body">
                        <div
                          class="d-flex align-items-center justify-content-between mb-3"
                        >
                          <div class="app-icon">
                            <img src="@/assets/img/icons/app-icon-06.svg" alt="Img" />
                          </div>
                          <div class="connect-btn">
                            <a href="javascript:void(0);" class="badge bg-outline-success"
                              >Connected</a
                            >
                          </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                          <div>
                            <h5 class="fs-16 fw-medium">Figma</h5>
                          </div>
                          <div
                            class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2"
                          >
                            <input type="checkbox" id="user6" class="check" checked />
                            <label for="user6" class="checktoggle"> </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3"
    >
      <p class="mb-0">2014 - 2025 &copy; DreamsPOS. All Right Reserved</p>
      <p>
        Designed &amp; Developed by
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>
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
