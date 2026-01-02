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
                <h4 class="fs-18 fw-bold">Company Settings</h4>
              </div>
              <div class="card-body">
                <form @submit.prevent="submitForm">
                  <div class="border-bottom mb-3">
                    <div class="card-title-head">
                      <h6 class="fs-16 fw-bold mb-2">
                        <span class="fs-16 me-2"><i class="ti ti-building"></i></span>
                        Company Information
                      </h6>
                    </div>
                    <div class="row">
                      <div class="col-xl-4 col-lg-6 col-md-4">
                        <div class="mb-3">
                          <label class="form-label">
                            Company Name <span class="text-danger">*</span>
                          </label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-xl-4 col-lg-6 col-md-4">
                        <div class="mb-3">
                          <label class="form-label">
                            Company Email Address <span class="text-danger">*</span>
                          </label>
                          <input type="email" class="form-control" />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="mb-3">
                          <label class="form-label">
                            Phone Number <span class="text-danger">*</span>
                          </label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="mb-3">
                          <label class="form-label">
                            Fax <span class="text-danger">*</span>
                          </label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="mb-3">
                          <label class="form-label">
                            Website <span class="text-danger">*</span>
                          </label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="border-bottom mb-3 pb-3">
                    <div class="card-title-head">
                      <h6 class="fs-16 fw-bold mb-2">
                        <span class="fs-16 me-2"><i class="ti ti-photo"></i></span>
                        Company Images
                      </h6>
                    </div>
                    <div class="row align-items-center gy-3">
                      <div class="col-xl-9">
                        <div class="row gy-3 align-items-center">
                          <div class="col-lg-4">
                            <div class="logo-info">
                              <h6 class="fw-medium">Company Icon</h6>
                              <p>Upload Icon of your Company</p>
                            </div>
                          </div>
                          <div class="col-lg-8">
                            <div class="profile-pic-upload mb-0 justify-content-lg-end">
                              <div class="new-employee-field">
                                <div class="mb-0">
                                  <div class="image-upload mb-0">
                                    <input type="file" />
                                    <div class="image-uploads">
                                      <h4>
                                        <i class="ti ti-upload me-1"></i>Upload Image
                                      </h4>
                                    </div>
                                  </div>
                                  <span class="mt-1"
                                    >Recommended size is 450px x 450px. Max size
                                    5mb.</span
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3">
                        <div class="new-logo ms-xl-auto">
                          <a href="#">
                            <img src="@/assets/img/logo-small.png" alt="Logo" />
                            <span><i class="ti ti-x"></i></span>
                          </a>
                        </div>
                      </div>
                      <div class="col-xl-9">
                        <div class="row gy-3 align-items-center">
                          <div class="col-lg-4">
                            <div class="logo-info">
                              <h6 class="fw-medium">Favicon</h6>
                              <p>Upload Favicon of your Company</p>
                            </div>
                          </div>
                          <div class="col-lg-8">
                            <div class="profile-pic-upload mb-0 justify-content-lg-end">
                              <div class="new-employee-field">
                                <div class="mb-0">
                                  <div class="image-upload mb-0">
                                    <input type="file" />
                                    <div class="image-uploads">
                                      <h4>
                                        <i class="ti ti-upload me-1"></i>Upload Image
                                      </h4>
                                    </div>
                                  </div>
                                  <span class="mt-1"
                                    >Recommended size is 450px x 450px. Max size
                                    5mb.</span
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3">
                        <div class="new-logo ms-xl-auto">
                          <a href="#">
                            <img src="@/assets/img/logo-small.png" alt="Logo" />
                            <span><i class="ti ti-x"></i></span>
                          </a>
                        </div>
                      </div>
                      <div class="col-xl-9">
                        <div class="row gy-3 align-items-center">
                          <div class="col-lg-4">
                            <div class="logo-info">
                              <h6 class="fw-medium">Company Logo</h6>
                              <p>Upload Logo of your Company</p>
                            </div>
                          </div>
                          <div class="col-lg-8">
                            <div class="profile-pic-upload mb-0 justify-content-lg-end">
                              <div class="new-employee-field">
                                <div class="mb-0">
                                  <div class="image-upload mb-0">
                                    <input type="file" />
                                    <div class="image-uploads">
                                      <h4>
                                        <i class="ti ti-upload me-1"></i>Upload Image
                                      </h4>
                                    </div>
                                  </div>
                                  <span class="mt-1"
                                    >Recommended size is 450px x 450px. Max size
                                    5mb.</span
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3">
                        <div class="new-logo ms-xl-auto">
                          <a href="#">
                            <img
                              src="@/assets/img/products/company-logo.svg"
                              alt="Logo"
                            />
                            <span><i class="ti ti-x"></i></span>
                          </a>
                        </div>
                      </div>
                      <div class="col-xl-9">
                        <div class="row gy-3 align-items-center">
                          <div class="col-lg-4">
                            <div class="logo-info">
                              <h6 class="fw-medium">Company Dark Logo</h6>
                              <p>Upload Logo of your Company</p>
                            </div>
                          </div>
                          <div class="col-lg-8">
                            <div class="profile-pic-upload mb-0 justify-content-lg-end">
                              <div class="new-employee-field">
                                <div class="mb-0">
                                  <div class="image-upload mb-0">
                                    <input type="file" />
                                    <div class="image-uploads">
                                      <h4>
                                        <i class="ti ti-upload me-1"></i>Upload Image
                                      </h4>
                                    </div>
                                  </div>
                                  <span class="mt-1"
                                    >Recommended size is 450px x 450px. Max size
                                    5mb.</span
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3">
                        <div class="new-logo ms-xl-auto">
                          <a href="#" class="bg-secondary">
                            <img src="@/assets/img/products/white-logo.svg" alt="Logo" />
                            <span><i class="ti ti-x"></i></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="company-address">
                    <div class="card-title-head">
                      <h6 class="fs-16 fw-bold mb-2">
                        <span class="fs-16 me-2"><i class="ti ti-map-pin"></i></span>
                        Address Information
                      </h6>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="mb-3">
                          <label class="form-label">
                            Address <span class="text-danger">*</span>
                          </label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label">
                            Country <span class="text-danger">*</span>
                          </label>
                          <vue-select
                            :options="Indiacom"
                            v-model="selected"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label">
                            State <span class="text-danger">*</span>
                          </label>
                          <vue-select
                            :options="Alska"
                            v-model="selectedOne"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label">
                            City <span class="text-danger">*</span>
                          </label>
                          <vue-select
                            :options="CityAnc"
                            v-model="selectedTwo"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label">
                            Postal Code <span class="text-danger">*</span>
                          </label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="text-end settings-bottom-btn mt-0">
                    <button type="button" class="btn btn-secondary me-2">Cancel</button>
                    <button type="submit" class="btn btn-primary">Save Changes</button>
                  </div>
                </form>
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
    return {
      selected: [],
      selectedOne: [],
      selectedTwo: [],
      CityAnc: [
        {label: "Select", value: "Select"}, 
        {label: "Anchorage", value: "Anchorage"}, 
        {label: "Tijuana", value: "Tijuana"},
        {label: "Hobart", value: "Hobart"}
      ],
      Indiacom: [
        {label: "Select", value: "Select"}, 
        {label: "USA", value: "USA"}, 
        {label: "India", value: "India"}, 
        {label: "French", value: "French"}, 
        {label: "Australia", value: "Australia"}, 
      ],
      Alska: [
        {label: "Select", value: "Select"}, 
        {label: "Alaska", value: "Alaska"}, 
        {label: "Mexico", value: "Mexico"}, 
        {label: "Tasmania", value: "Tasmania"}, 
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/website-settings/company-settings");
    },
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
