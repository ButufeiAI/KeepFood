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
                <h4 class="fs-18 fw-bold">Notification</h4>
              </div>
              <div class="card-body">
                <div>
                  <div class="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <h6 class="fw-medium">Mobile Push Notifications</h6>
                    </div>
                    <div class="status-toggle modal-status">
                      <input type="checkbox" id="user1" class="check" checked />
                      <label for="user1" class="checktoggle"> </label>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <h6 class="fw-medium">Desktop Notifications</h6>
                    </div>
                    <div class="status-toggle modal-status">
                      <input type="checkbox" id="user2" class="check" checked />
                      <label for="user2" class="checktoggle"> </label>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <h6 class="fw-medium">Email Notifications</h6>
                    </div>
                    <div class="status-toggle modal-status">
                      <input type="checkbox" id="user3" class="check" checked />
                      <label for="user3" class="checktoggle"> </label>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <h6 class="fw-medium">MSMS Notifications</h6>
                    </div>
                    <div
                      class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2"
                    >
                      <input type="checkbox" id="user4" class="check" checked />
                      <label for="user4" class="checktoggle"> </label>
                    </div>
                  </div>
                  <div class="table-responsive notification-table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>General Notification</th>
                          <th>Push</th>
                          <th>SMS</th>
                          <th>Email</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Payment</td>
                          <td>
                            <div class="status-toggle modal-status">
                              <input type="checkbox" id="users4" class="check" checked />
                              <label for="users4" class="checktoggle"></label>
                            </div>
                          </td>
                          <td>
                            <div class="status-toggle modal-status">
                              <input type="checkbox" id="users5" class="check" checked />
                              <label for="users5" class="checktoggle"></label>
                            </div>
                          </td>
                          <td>
                            <div class="status-toggle modal-status">
                              <input type="checkbox" id="users6" class="check" checked />
                              <label for="users6" class="checktoggle"></label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Transaction</td>
                          <td>
                            <div class="status-toggle modal-status">
                              <input type="checkbox" id="user5" class="check" checked />
                              <label for="user5" class="checktoggle"></label>
                            </div>
                          </td>
                          <td>
                            <div class="status-toggle modal-status">
                              <input type="checkbox" id="user6" class="check" checked />
                              <label for="user6" class="checktoggle"></label>
                            </div>
                          </td>
                          <td>
                            <div class="status-toggle modal-status">
                              <input type="checkbox" id="user7" class="check" checked />
                              <label for="user7" class="checktoggle"></label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Email Verification</td>
                          <td>
                            <div class="status-toggle modal-status">
                              <input type="checkbox" id="user8" class="check" checked />
                              <label for="user8" class="checktoggle"></label>
                            </div>
                          </td>
                          <td>
                            <div class="status-toggle modal-status">
                              <input type="checkbox" id="user9" class="check" checked />
                              <label for="user9" class="checktoggle"></label>
                            </div>
                          </td>
                          <td>
                            <div class="status-toggle modal-status">
                              <input type="checkbox" id="user10" class="check" checked />
                              <label for="user10" class="checktoggle"></label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>OTP</td>
                          <td>
                            <div class="status-toggle modal-status">
                              <input type="checkbox" id="user11" class="check" checked />
                              <label for="user11" class="checktoggle"></label>
                            </div>
                          </td>
                          <td>
                            <div class="status-toggle modal-status">
                              <input type="checkbox" id="user12" class="check" checked />
                              <label for="user12" class="checktoggle"></label>
                            </div>
                          </td>
                          <td>
                            <div class="status-toggle modal-status">
                              <input type="checkbox" id="user13" class="check" checked />
                              <label for="user13" class="checktoggle"></label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Activity</td>
                          <td>
                            <div class="status-toggle modal-status">
                              <input type="checkbox" id="user14" class="check" checked />
                              <label for="user14" class="checktoggle"></label>
                            </div>
                          </td>
                          <td>
                            <div class="status-toggle modal-status">
                              <input type="checkbox" id="user15" class="check" checked />
                              <label for="user15" class="checktoggle"></label>
                            </div>
                          </td>
                          <td>
                            <div class="status-toggle modal-status">
                              <input type="checkbox" id="user16" class="check" checked />
                              <label for="user16" class="checktoggle"></label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Account</td>
                          <td>
                            <div class="status-toggle modal-status">
                              <input type="checkbox" id="user17" class="check" checked />
                              <label for="user17" class="checktoggle"></label>
                            </div>
                          </td>
                          <td>
                            <div class="status-toggle modal-status">
                              <input type="checkbox" id="user18" class="check" checked />
                              <label for="user18" class="checktoggle"></label>
                            </div>
                          </td>
                          <td>
                            <div class="status-toggle modal-status">
                              <input type="checkbox" id="user19" class="check" checked />
                              <label for="user19" class="checktoggle"></label>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
