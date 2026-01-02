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
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="settings-wrapper d-flex">
            <settings-sidebar></settings-sidebar>
            <div class="card flex-fill mb-0">
              <div class="card-header d-flex align-items-center justify-content-between">
                <h4>Email Settings</h4>
                <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#test-mail">
                    Send test email
                  </a>
              </div>
              <div class="card-body pb-0">
                <div class="row">
                  <div class="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">
                    <div class="card">
                      <div class="card-body">
                        <div class="flex-column align-items-start">
                          <div
                            class="d-flex align-items-center justify-content-between w-100 mb-3"
                          >
                            <h5>PHP Mailer</h5>
                            <span class="badge bg-outline-success">Connected</span>
                          </div>
                          <p class="mb-3">
                            Used to send emails safely and easily via PHP code from a web
                            server.
                          </p>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                          <div>
                            <a
                              href="#"
                              class="btn btn-outline-secondary"
                              data-bs-toggle="modal"
                              data-bs-target="#php-mail"
                            >
                              <i class="ti ti-tool me-2"></i>View Integration
                            </a>
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
                  <div class="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">
                    <div class="card">
                      <div class="card-body">
                        <div class="flex-column align-items-start">
                          <div
                            class="d-flex align-items-center justify-content-between w-100 mb-3"
                          >
                            <h5>SMTP</h5>
                            <span class="badge bg-outline-success">Connected</span>
                          </div>
                          <p class="mb-3">
                            SMTP is used to send, relay or forward messages from a mail
                            client.
                          </p>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                          <div>
                            <a
                              href="#"
                              class="btn btn-outline-secondary"
                              data-bs-toggle="modal"
                              data-bs-target="#smtp-mail"
                            >
                              <i class="ti ti-tool me-2"></i>View Integration
                            </a>
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
                  <div class="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">
                    <div class="card">
                      <div class="card-body">
                        <div class="flex-column align-items-start">
                          <div
                            class="d-flex align-items-center justify-content-between w-100 mb-3"
                          >
                            <h5>SendGrid</h5>
                            <span class="badge bg-outline-success">Connected</span>
                          </div>
                          <p class="mb-3">
                            Cloud-based email marketing tool that assists marketers and
                            developers .
                          </p>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                          <div>
                            <a
                              href="#"
                              class="btn btn-outline-secondary"
                              data-bs-toggle="modal"
                              data-bs-target="#send-grid"
                            >
                              <i class="ti ti-tool me-2"></i>Connect
                            </a>
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
      <p class="mb-0">
        {{ new Date().getFullYear() }} &copy; DreamsPOS. All Right Reserved
      </p>
      <p>
        Designed &amp; Developed by
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>
  <email-settings-modal></email-settings-modal>
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
