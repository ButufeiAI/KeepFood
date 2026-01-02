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
              <form @submit.prevent="submitForm">
                <div class="card-header">
                  <h4>POS Settings</h4>
                </div>
                <div class="card-body">
                  <div class="localization-info">
                    <div class="row align-items-center">
                      <div class="col-sm-4">
                        <div class="setting-info">
                          <h6>POS Printer</h6>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="localization-select">
                          <vue-select :options="Aselect" v-model="selected" placeholder="A4" />
                        </div>
                      </div>
                    </div>
                    <div class="row align-items-center">
                      <div class="col-sm-4">
                        <div class="setting-info">
                          <h6>Payment Method</h6>
                        </div>
                      </div>
                      <div class="col-sm-8">
                        <div
                          class="localization-select pos-payment-method d-flex align-items-center mb-0 w-100"
                        >
                          <div class="custom-control custom-checkbox">
                            <label class="checkboxs mb-0 pb-0 line-height-1">
                              <input type="checkbox" />
                              <span class="checkmarks"></span>COD
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <label class="checkboxs mb-0 pb-0 line-height-1">
                              <input type="checkbox" />
                              <span class="checkmarks"></span>Cheque
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <label class="checkboxs mb-0 pb-0 line-height-1">
                              <input type="checkbox" />
                              <span class="checkmarks"></span>Card
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <label class="checkboxs mb-0 pb-0 line-height-1">
                              <input type="checkbox" />
                              <span class="checkmarks"></span>Paypal
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <label class="checkboxs mb-0 pb-0 line-height-1">
                              <input type="checkbox" />
                              <span class="checkmarks"></span>Bank Transfer
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <label class="checkboxs mb-0 pb-0 line-height-1">
                              <input type="checkbox" />
                              <span class="checkmarks"></span>Cash
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row align-items-center">
                      <div class="col-sm-4">
                        <div class="setting-info">
                          <h6>Enable Sound Effect</h6>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="localization-select d-flex align-items-center">
                          <div
                            class="status-toggle modal-status d-flex justify-content-between align-items-center me-3"
                          >
                            <input type="checkbox" id="user4" class="check" checked />
                            <label for="user4" class="checktoggle"></label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-end">
                    <button
                      type="button"
                      class="btn btn-cancel me-2"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="submit" class="btn btn-submit">Save Changes</button>
                  </div>
                </div>
              </form>
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
</template>
<script>
export default {
  data() {
    return {
      selected: "A4",
      Aselect: [
        {label: "A4", value: "A4"}, 
        {label: "A5", value: "A5"}, 
        {label: "A6", value: "A6"}
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/app-settings/pos-settings");
    },
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
