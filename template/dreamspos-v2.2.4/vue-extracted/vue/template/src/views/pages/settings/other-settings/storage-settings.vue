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
                <h4>Storage</h4>
              </div>
              <div class="card-body pb-0">
                <div class="row">
                  <div class="col-md-6 d-flex">
                    <div class="card flex-fill">
                      <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between">
                          <div class="d-flex align-items-center">
                            <span class="system-app-icon">
                              <img
                                src="@/assets/img/icons/storage-icon-01.svg"
                                alt="Img"
                              />
                            </span>
                            <h6>Local Storage</h6>
                          </div>
                          <div class="d-flex align-items-center">
                            <a href="javascript:void(0);"
                              ><vue-feather type="settings" class="me-2"></vue-feather
                            ></a>
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
                  </div>
                  <div class="col-md-6 d-flex">
                    <div class="card flex-fill">
                      <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between">
                          <div class="d-flex align-items-center">
                            <span class="system-app-icon">
                              <img
                                src="@/assets/img/icons/storage-icon-02.svg"
                                alt="Img"
                              />
                            </span>
                            <h6>AWS</h6>
                          </div>
                          <div class="d-flex align-items-center">
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#aws-config"
                              ><vue-feather type="settings" class="me-2"></vue-feather
                            ></a>
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
      <p class="mb-0">{{ new Date().getFullYear() }} © DreamsPOS. All Right Reserved</p>
      <p>
        Designed &amp; Developed By
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>
  <storage-settings-modal></storage-settings-modal>
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
