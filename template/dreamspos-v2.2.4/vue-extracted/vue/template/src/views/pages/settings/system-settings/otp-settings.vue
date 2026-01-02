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
                  <h4>OTP</h4>
                </div>
                <div class="card-body">
                  <div class="localization-info">
                    <div class="row align-items-center">
                      <div class="col-sm-4">
                        <div class="setting-info">
                          <h6>OTP Type</h6>
                          <p>Your can configure the type</p>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="localization-select">
                          <vue-select :options="OtpSMS" v-model="selected" placeholder="SMS" />
                        </div>
                      </div>
                    </div>
                    <div class="row align-items-center">
                      <div class="col-sm-4">
                        <div class="setting-info">
                          <h6>OTP Digit Limit</h6>
                          <p>Select size of the format</p>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="localization-select">
                          <vue-select
                            :options="OtpSMSOne"
                            v-model="selectedOne"
                            placeholder="4"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row align-items-center">
                      <div class="col-sm-4">
                        <div class="setting-info">
                          <h6>OTP Expire Time</h6>
                          <p>Select expire time of OTP</p>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="localization-select">
                          <vue-select
                            :options="OtpMin"
                            v-model="selectedTwo"
                            placeholder="5 Mins"
                          />
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
      selected: "SMS",
      selectedOne: "4",
      selectedTwo: "5 Mins",
      OtpSMS: [
        {label: "SMS", value: "SMS"}, 
        {label: "Email", value: "Email"}
      ],
      OtpSMSOne: [
        {label: "4", value: "4"}, 
        {label: "5", value: "5"}, 
      ],
      OtpMin: [
        {label: "5 Mins", value: "5 Mins"}, 
        {label: "10 Mins", value: "10 Mins"}, 
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/system-settings/otp-settings");
    },
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
