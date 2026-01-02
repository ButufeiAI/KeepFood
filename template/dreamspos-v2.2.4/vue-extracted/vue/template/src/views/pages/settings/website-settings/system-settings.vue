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
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"><i class="ti ti-refresh"></i></a>
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
                <h4 class="fs-18 fw-bold">System Settings</h4>
              </div>
              <div class="card-body pb-0">
                <div class="row">
                  <div class="col-xl-6 col-lg-12 col-md-6 d-flex">
                    <div class="card flex-fill">
                      <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between mb-2">
                          <div class="d-flex align-items-center">
                            <span class="system-app-icon">
                              <img src="@/assets/img/icons/app-icon-07.svg" alt="Img">
                            </span>
                            <div class="security-title">
                              <h5 class="fs-16 fw-medium">Google Captcha</h5>
                            </div>
                          </div>
                          <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                            <input type="checkbox" id="user1" class="check" checked>
                            <label for="user1" class="checktoggle">	</label>
                          </div>
                        </div>
                        <p class="fs-14 mb-3">Captcha helps protect you from spam and password decryption</p>
                        <div>
                          <a href="#" class="btn btn-outline-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#google-captcha"><i class="ti ti-tool me-1"></i>View Integration</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-12 col-md-6 d-flex">
                    <div class="card flex-fill">
                      <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between mb-2">
                          <div class="d-flex align-items-center">
                            <span class="system-app-icon">
                              <img src="@/assets/img/icons/app-icon-08.svg" alt="Img">
                            </span>
                            <div class="security-title">
                              <h5 class="fs-16 fw-medium">Google Analytics</h5>
                            </div>
                          </div>
                          <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                            <input type="checkbox" id="user2" class="check" checked>
                            <label for="user2" class="checktoggle">	</label>
                          </div>
                        </div>
                        <p class="fs-14 mb-3">Provides statistics and basic analytical tools for SEO and marketing purposes.</p>
                        <div>
                          <a href="#" class="btn btn-outline-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#google-analytics"><i class="ti ti-tool me-1"></i>View Integration</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-12 col-md-6 d-flex">
                    <div class="card flex-fill">
                      <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between mb-2">
                          <div class="d-flex align-items-center">
                            <span class="system-app-icon">
                              <img src="@/assets/img/icons/app-icon-09.svg" alt="Img">
                            </span>
                            <div class="security-title">
                              <h5 class="fs-16 fw-medium">Google Adsense Code</h5>
                            </div>
                          </div>
                          <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                            <input type="checkbox" id="user3" class="check" checked>
                            <label for="user3" class="checktoggle">	</label>
                          </div>
                        </div>
                        <p class="fs-14 mb-3">Provides a way for publishers to earn money from their online content.</p>
                        <div>
                          <a href="#" class="btn btn-outline-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#google-adsense"><i class="ti ti-tool me-1"></i>View Integration</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-12 col-md-6 d-flex">
                    <div class="card flex-fill">
                      <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between mb-2">
                          <div class="d-flex align-items-center">
                            <span class="system-app-icon">
                              <img src="@/assets/img/icons/app-icon-10.svg" alt="Img">
                            </span>
                            <div class="security-title">
                              <h5 class="fs-16 fw-medium">Google Map</h5>
                            </div>
                          </div>
                          <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                            <input type="checkbox" id="user4" class="check" checked>
                            <label for="user4" class="checktoggle">	</label>
                          </div>
                        </div>
                        <p class="fs-14 mb-3">Provides detailed information about geographical regions and sites worldwide.</p>
                        <div>
                          <a href="#" class="btn btn-outline-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#configure-google-map"><i class="ti ti-tool me-1"></i>View Integration</a>
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
    <div class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
      <p class="mb-0">2014 - 2025 &copy; DreamsPOS. All Right Reserved</p>
      <p>Designed &amp; Developed by <a href="javascript:void(0);" class="text-primary">Dreams</a></p>
    </div>
  </div>
  <system-settings-modal></system-settings-modal>
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
