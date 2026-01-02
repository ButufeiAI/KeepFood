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
            <div class="card flex-fill mb-0 w-50">
              <div class="card-header d-flex align-items-center">
                <h5 class="card-title flex-grow-1 mb-0">Ban IP Address</h5>
                <div class="flex-shrink-0">
                  <button
                    class="btn btn-primary add-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#add-banip"
                  >
                    <i class="ti ti-circle-plus me-1"></i>Add Ban IP Address
                  </button>
                </div>
              </div>
              <div class="card-body p-0">
                <div class="table-responsive">
                  <table class="table">
                    <thead class="thead-light">
                      <tr>
                        <th>IP Address</th>
                        <th>Reason</th>
                        <th>Created On</th>
                        <th class="no-sort text-end"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-gray-9 fw-medium">211.11.0.25</td>
                        <td>
                          <p>Suspicious Activity</p>
                        </td>
                        <td>25 Apr 2025</td>
                        <td class="action-table-data justify-content-end">
                          <div class="edit-delete-action">
                            <a
                              class="me-2 p-2"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-banip"
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
                        </td>
                      </tr>
                      <tr>
                        <td class="text-gray-9 fw-medium">211.03.0.11</td>
                        <td>
                          <p>Spam or Abuse</p>
                        </td>
                        <td>18 Mar 2025</td>
                        <td class="action-table-data justify-content-end">
                          <div class="edit-delete-action">
                            <a
                              class="me-2 p-2"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-banip"
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
                        </td>
                      </tr>
                      <tr>
                        <td class="text-gray-9 fw-medium">211.24.0.17</td>
                        <td>
                          <p>Unauthorized Access</p>
                        </td>
                        <td>06 Feb 2025</td>
                        <td class="action-table-data justify-content-end">
                          <div class="edit-delete-action">
                            <a
                              class="me-2 p-2"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-banip"
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
                        </td>
                      </tr>
                      <tr>
                        <td class="text-gray-9 fw-medium">211.12.0.34</td>
                        <td>
                          <p>Violation of Terms</p>
                        </td>
                        <td>02 Jan 2025</td>
                        <td class="action-table-data justify-content-end">
                          <div class="edit-delete-action">
                            <a
                              class="me-2 p-2"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-banip"
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
  <ban-ip-address-modal></ban-ip-address-modal>
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
