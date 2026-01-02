<template>
  <!-- Add Testimonial -->
  <div class="modal fade" id="add-testimonial">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Add Testimonial</h4>
          </div>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body">
            <div class="new-employee-field">
              <div class="profile-pic-upload">
                <div class="profile-pic">
                  <span
                    ><i class="ti ti-circle-plus me-1"></i> Add
                    Image</span
                  >
                </div>
                <div class="mb-3">
                  <div class="image-upload mb-0">
                    <input type="file" />
                    <div class="image-uploads">
                      <h4>Upload Image</h4>
                    </div>
                  </div>
                  <p class="mt-2">JPEG, PNG up to 2 MB</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12 mb-3">
                <label class="form-label"
                  >Author <span class="text-danger ms-1">*</span></label
                >
                <input type="email" class="form-control" />
              </div>
              <div class="col-lg-12 mb-3">
                <label class="form-label"
                  >Role <span class="text-danger ms-1">*</span></label
                >
                <vue-select
                  :options="Supervisorsel"
                  v-model="selected"
                  placeholder="Select"
                />
              </div>
              <div class="col-lg-12">
                <label class="form-label"
                  >Ratings <span class="text-danger ms-1">*</span></label
                >
                <vue-select :options="RatingSel" v-model="selectedOne" placeholder="Select" />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3">
              Add Testimonial
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Testimonial -->
  <!-- Edit Testimonial -->
  <div class="modal fade" id="edit-testimonial">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Edit Testimonial</h4>
          </div>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body">
            <div class="new-employee-field">
              <div class="profile-pic-upload">
                <div class="profile-pic">
                  <span
                    ><vue-feather type="plus-circle" class="plus-down-add"></vue-feather>
                    Add Image</span
                  >
                </div>
                <div class="mb-3">
                  <div class="image-upload mb-0">
                    <input type="file" />
                    <div class="image-uploads">
                      <h4>Upload Image</h4>
                    </div>
                  </div>
                  <p class="mt-2">JPEG, PNG up to 2 MB</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12 mb-3">
                <label class="form-label"
                  >Author <span class="text-danger ms-1">*</span></label
                >
                <input type="email" class="form-control" value="Carl Evans" />
              </div>
              <div class="col-lg-12 mb-3">
                <label class="form-label"
                  >Role <span class="text-danger ms-1">*</span></label
                >
                <vue-select
                  :options="SupervisorselEdit"
                  v-model="selectedTwo"
                  placeholder="Manager"
                />
              </div>
              <div class="col-lg-12">
                <label class="form-label"
                  >Ratings <span class="text-danger ms-1">*</span></label
                >
                <vue-select
                  :options="RatingSelEdit"
                  v-model="selectedThree"
                  placeholder="Select"
                />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Edit Testimonial -->

  <!-- delete modal -->
  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content p-5 px-3 text-center">
            <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"
              ><i class="ti ti-trash fs-24 text-danger"></i
            ></span>
            <h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Employee</h4>
            <p class="text-gray-6 mb-0 fs-16">
              Are you sure you want to delete employee?
            </p>
            <div class="modal-footer-btn mt-3 d-flex justify-content-center">
              <button
                type="button"
                class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="submit" class="btn btn-submit fs-13 fw-medium p-2 px-3">
                Yes Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /delete modal -->
</template>
<script>
export default {
  data() {
    return {
      selected: [],
      selectedOne: [],
      selectedTwo: "Manager",
      selectedThree: [],
      Supervisorsel: [
        {label: "Select", value: "Select"}, 
        {label: "Manager", value: "Manager"}, 
        {label: "Supervisor", value: "Supervisor"}
      ],
      RatingSel: [
        {label: "Select", value: "Select"}, 
        {label: "5 Star", value: "5 Star"}, 
        {label: "4 Star", value: "4 Star"}
      ],
      SupervisorselEdit: [
        {label: "Select", value: "Select"}, 
        {label: "Manager", value: "Manager"}, 
        {label: "Supervisor", value: "Supervisor"}
      ],
      RatingSelEdit: [
        {label: "Select", value: "Select"}, 
        {label: "5 Star", value: "5 Star"}, 
        {label: "4 Star", value: "4 Star"}
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/content/testimonials");
    },
  },
};
</script>
