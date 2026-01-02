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
              <div class="card-header d-flex align-items-center justify-content-between">
                <h4>Custom Fields</h4>
                <div class="page-btn">
                  <a
                    href="#"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#add-custom-field"
                    ><i class="ti ti-circle-plus me-1"></i>Add New Field</a
                  >
                </div>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table border">
                    <thead class="thead-light">
                      <tr>
                        <th>Module</th>
                        <th>Label</th>
                        <th>Type</th>
                        <th>Default Value</th>
                        <th>Required/Disable</th>
                        <th>Status</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <h6>Product</h6>
                        </td>
                        <td>Weight</td>
                        <td>Number</td>
                        <td>0</td>
                        <td>Required</td>
                        <td>
                          <span
                            class="badge badge-success d-inline-flex align-items-center badge-xs"
                          >
                            <i class="ti ti-point-filled me-1"></i>Active
                          </span>
                        </td>
                        <td class="action-table-data">
                          <div class="edit-delete-action">
                            <a
                              class="me-2 p-2"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-custom-field"
                            >
                              <i data-feather="edit" class="feather-edit"></i>
                            </a>
                            <a
                              class="p-2"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-modal"
                            >
                              <i data-feather="trash-2" class="feather-trash-2"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>Customer</h6>
                        </td>
                        <td>Type</td>
                        <td>Select</td>
                        <td>Regular</td>
                        <td>Required</td>
                        <td>
                          <span
                            class="badge badge-success d-inline-flex align-items-center badge-xs"
                          >
                            <i class="ti ti-point-filled me-1"></i>Active
                          </span>
                        </td>
                        <td class="action-table-data">
                          <div class="edit-delete-action">
                            <a
                              class="me-2 p-2"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-custom-field"
                            >
                              <i data-feather="edit" class="feather-edit"></i>
                            </a>
                            <a
                              class="p-2"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-modal"
                            >
                              <i data-feather="trash-2" class="feather-trash-2"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>Supplier</h6>
                        </td>
                        <td>Type</td>
                        <td>Select</td>
                        <td>-</td>
                        <td>Required</td>
                        <td>
                          <span
                            class="badge badge-success d-inline-flex align-items-center badge-xs"
                          >
                            <i class="ti ti-point-filled me-1"></i>Active
                          </span>
                        </td>
                        <td class="action-table-data">
                          <div class="edit-delete-action">
                            <a
                              class="me-2 p-2"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-custom-field"
                            >
                              <i data-feather="edit" class="feather-edit"></i>
                            </a>
                            <a
                              class="p-2"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-modal"
                            >
                              <i data-feather="trash-2" class="feather-trash-2"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>Biller</h6>
                        </td>
                        <td>Type</td>
                        <td>Select</td>
                        <td>Utility</td>
                        <td>Required</td>
                        <td>
                          <span
                            class="badge badge-success d-inline-flex align-items-center badge-xs"
                          >
                            <i class="ti ti-point-filled me-1"></i>Active
                          </span>
                        </td>
                        <td class="action-table-data">
                          <div class="edit-delete-action">
                            <a
                              class="me-2 p-2"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-custom-field"
                            >
                              <i data-feather="edit" class="feather-edit"></i>
                            </a>
                            <a
                              class="p-2"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-modal"
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
      <p class="mb-0">
        {{ new Date().getFullYear() }} &copy; DreamsPOS. All Right Reserved
      </p>
      <p>
        Designed &amp; Developed by
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>

  <custom-fields-modal></custom-fields-modal>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    submitForm() {
      this.$router.push("/app-settings/custom-fields");
    },
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
