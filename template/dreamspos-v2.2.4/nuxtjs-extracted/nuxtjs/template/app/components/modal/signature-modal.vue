<template>
  <!-- Add Custom Field -->
  <div class="modal fade" id="add-custom-field">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Add Signature</h4>
          </div>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body">
            <div class="row new-employee-field">
              <div class="col-lg-12">
                <div class="profile-pic-upload">
                  <div class="profile-pic me-3">
                    <span><i data-feather="plus-circle"></i>Add Image</span>
                  </div>
                  <div class="mb-0">
                    <div class="image-upload mb-0">
                      <input type="file" />
                      <div class="image-uploads">
                        <h4>Upload Image</h4>
                      </div>
                    </div>
                    <p class="mt-2">Image format should be png and jpg</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <div class="custom-control custom-checkbox">
                    <label class="checkboxs ps-4 mb-0 pb-0 line-height-1">
                      <input type="checkbox" class="form-control" />
                      <span class="checkmarks"></span>Mark as Default
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label">Signature Name<span> *</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-12">
                <div
                  class="status-toggle modal-status d-flex justify-content-between align-items-center"
                >
                  <span class="status-label">Status</span>
                  <input type="checkbox" id="user2" class="check" checked="" />
                  <label for="user2" class="checktoggle"></label>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Add Signature</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Custom Field -->

  <!-- Edit Custom Field -->
  <div class="modal fade" id="edit-custom-field">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Edit Signature</h4>
          </div>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="submitForm">
            <div class="row new-employee-field">
              <div class="col-lg-12">
                <div class="profile-pic-upload">
                  <div class="profile-pic me-3 border-0">
											<span><img src="@/assets/img/users/user-06.jpg" alt="Img" class="rounded"></span>
										</div>  
                  <div class="mb-0">
                    <div class="image-upload mb-0">
                      <input type="file" />
                      <div class="image-uploads">
                        <h4>Change Image</h4>
                      </div>
                    </div>
                    <p class="mt-2">Image format should be png and jpg</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <div class="custom-control custom-checkbox">
                    <label class="checkboxs ps-4 mb-0 pb-0 line-height-1">
                      <input type="checkbox" class="form-control" />
                      <span class="checkmarks"></span>Mark as Default
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label">Signature Name<span> *</span></label>
                  <input type="text" class="form-control" value="Allen" />
                </div>
              </div>
              <div class="col-lg-12">
                <div
                  class="status-toggle modal-status d-flex justify-content-between align-items-center"
                >
                  <span class="status-label">Status</span>
                  <input type="checkbox" id="user3" class="check" checked="" />
                  <label for="user3" class="checktoggle"></label>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary me-2"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="submit" class="btn btn-primary">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit Custom Field -->

  <!-- delete modal -->
  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content p-5 px-3 text-center">
            <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"
              ><i class="ti ti-trash fs-24 text-danger"></i
            ></span>
            <h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Signature</h4>
            <p class="text-gray-6 mb-0 fs-16">
              Are you sure you want to delete signature?
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
    return {};
  },
  methods: {
    submitForm() {
      this.$router.push("/app-settings/signatures");
    },
  },
};
</script>
