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
                  <h4>GDPR Cookies</h4>
                </div>
                <div class="card-body">
                  <div class="localization-info">
                    <div class="row">
                      <div class="col-sm-4">
                        <div class="setting-info">
                          <h6>Cookies Consent Text</h6>
                        </div>
                      </div>
                      <div class="col-sm-8">
                        <div class="mb-3">
                          <textarea
                            rows="4"
                            class="form-control"
                            placeholder="Type your message"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="row align-items-center">
                      <div class="col-sm-4">
                        <div class="setting-info">
                          <h6>Cookies Position</h6>
                          <p>Your can configure the type</p>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="localization-select">
                          <vue-select
                            :options="LeftSel"
                            v-model="selected"
                            placeholder="Left"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row align-items-center">
                      <div class="col-sm-4">
                        <div class="setting-info">
                          <h6>Agree Button Text</h6>
                          <p>Your can configure the text here</p>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="localization-select d-flex align-items-center">
                          <div class="mb-3">
                            <input type="text" class="form-control" value="Agree" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row align-items-center">
                      <div class="col-sm-4">
                        <div class="setting-info">
                          <h6>Decline Button Text</h6>
                          <p>Your can configure the text here</p>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="localization-select d-flex align-items-center">
                          <div class="mb-3">
                            <input type="text" class="form-control" value="Decline" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row align-items-center">
                      <div class="col-sm-4">
                        <div class="setting-info">
                          <h6>Show Decline Button</h6>
                          <p>Your can configure the text here</p>
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
                    <div class="row align-items-center">
                      <div class="col-sm-4">
                        <div class="setting-info">
                          <h6>Link for Cookies Page</h6>
                          <p>Your can configure the link here</p>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="localization-select d-flex align-items-center w-100">
                          <div class="mb-3 w-100">
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-end">
                    <button type="button" class="btn btn-secondary me-2">Cancel</button>
                    <button type="submit" class="btn btn-primary">Save Changes</button>
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
      selected: "Left",
      LeftSel: [
        {label: "Left", value: "Left"}, 
        {label: "Center", value: "Center"}, 
        {label: "Right", value: "Right"}
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/system-settings/gdpr-settings");
    },
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
