<template>
  <!-- Add Customer -->
  <div class="modal fade" id="add-units">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Add Contact</h4>
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
              <div class="col-lg-6 mb-3">
                <label class="form-label"
                  >First Name<span class="text-danger ms-1">*</span></label
                >
                <input type="text" class="form-control" />
              </div>
              <div class="col-lg-6 mb-3">
                <label class="form-label"
                  >Last Name<span class="text-danger ms-1">*</span></label
                >
                <input type="text" class="form-control" />
              </div>
              <div class="col-lg-12 mb-3">
                <label class="form-label"
                  >Email<span class="text-danger ms-1">*</span></label
                >
                <input type="email" class="form-control" />
              </div>
              <div class="col-lg-12 mb-3">
                <label class="form-label"
                  >Phone<span class="text-danger ms-1">*</span></label
                >
                <input type="tel" class="form-control" />
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Contact Type <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="ContactType"
                    v-model="selected"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div
                  class="status-toggle modal-status d-flex justify-content-between align-items-center"
                >
                  <span class="status-label">Status</span>
                  <input type="checkbox" id="user2" class="check" checked="" />
                  <label for="user2" class="checktoggle"> </label>
                </div>
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
              Add Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Customer -->

  <!-- Edit Customer -->
  <div class="modal fade" id="edit-units">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Edit Contact</h4>
          </div>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body">
            <div class="new-employee-field">
              <div class="profile-pic-upload image-field">
                <div class="profile-pic p-2">
                  <img
                    src="@/assets/img/users/user-41.jpg"
                    class="object-fit-cover h-100 rounded-1"
                    alt="user"
                  />
                  <button type="button" class="close rounded-1">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="mb-3">
                  <div class="image-upload mb-0">
                    <input type="file" />
                    <div class="image-uploads">
                      <h4>Change Image</h4>
                    </div>
                  </div>
                  <p class="mt-2">JPEG, PNG up to 2 MB</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 mb-3">
                <label class="form-label"
                  >First Name<span class="text-danger ms-1">*</span></label
                >
                <input type="text" class="form-control" value="Carl" />
              </div>
              <div class="col-lg-6 mb-3">
                <label class="form-label"
                  >Last Name<span class="text-danger ms-1">*</span></label
                >
                <input type="text" class="form-control" value="Evans" />
              </div>
              <div class="col-lg-12 mb-3">
                <label class="form-label"
                  >Email<span class="text-danger ms-1">*</span></label
                >
                <input type="email" class="form-control" value="carlevans@example.com" />
              </div>
              <div class="col-lg-12 mb-3">
                <label class="form-label"
                  >Phone<span class="text-danger ms-1">*</span></label
                >
                <input type="tel" class="form-control" value="+12163547758 " />
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Contact Type <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="ContactType"
                    v-model="selectedOne"
                    placeholder="Admin"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div
                  class="status-toggle modal-status d-flex justify-content-between align-items-center"
                >
                  <span class="status-label">Status</span>
                  <input type="checkbox" id="user1" class="check" checked="" />
                  <label for="user1" class="checktoggle"> </label>
                </div>
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
  <!-- /Edit Customer -->

  <!-- delete modal -->
  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content p-5 px-3 text-center">
            <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"
              ><i class="ti ti-trash fs-24 text-danger"></i
            ></span>
            <h4 class="fs-20 fw-bold mb-2 mt-1">Delete Contact</h4>
            <p class="mb-0 fs-16">Are you sure you want to delete contact?</p>
            <div class="modal-footer-btn mt-3 d-flex justify-content-center">
              <button
                type="button"
                class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3">
                Yes Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: [],
      selectedOne: "Admin",
      ContactType: [
        {label: "Select", value: "Select"}, 
        {label: "Admin", value: "Admin"}, 
        {label: "Salesman", value: "Salesman"}
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/application/contacts");
    },
  },
};
</script>
