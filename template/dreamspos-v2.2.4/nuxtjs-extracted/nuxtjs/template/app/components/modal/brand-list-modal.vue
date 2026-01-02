<template>
  <!-- Add Brand -->
  <div class="modal fade" id="add-brand">
    <div class="modal-dialog modal-dialog-centered custom-modal-two">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title">
                <h4>Create Brand</h4>
              </div>
              <button
                type="button"
                class="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body custom-modal-body new-employee-field">
              <form @submit.prevent="submitForm">
                <div class="mb-3">
                  <label class="form-label">Brand</label>
                  <input type="text" class="form-control" />
                </div>
                <label class="form-label">Logo</label>
                <div class="profile-pic-upload mb-3">
                  <div class="profile-pic brand-pic">
                    <span
                      ><vue-feather
                        type="plus-circle"
                        class="plus-down-add"
                      ></vue-feather>
                      Add Image</span
                    >
                  </div>
                  <div class="image-upload mb-0">
                    <input type="file" />
                    <div class="image-uploads">
                      <h4>Change Image</h4>
                    </div>
                  </div>
                </div>
                <div class="mb-0">
                  <div
                    class="status-toggle modal-status d-flex justify-content-between align-items-center"
                  >
                    <span class="status-label">Status</span>
                    <input type="checkbox" id="user2" class="check" checked="" />
                    <label for="user2" class="checktoggle"></label>
                  </div>
                </div>
                <div class="modal-footer-btn">
                  <button
                    type="button"
                    class="btn btn-cancel me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="submit" class="btn btn-submit">Create Brand</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Brand -->

  <!-- Edit Brand -->
  <div class="modal fade" id="edit-brand">
    <div class="modal-dialog modal-dialog-centered custom-modal-two">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title">
                <h4>Edit Brand</h4>
              </div>
              <button
                type="button"
                class="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body custom-modal-body new-employee-field">
              <form @submit.prevent="submitForm">
                <div class="mb-3">
                  <label class="form-label">Brand</label>
                  <input type="text" class="form-control" value="Boat" />
                </div>
                <label class="form-label">Logo</label>
                <div class="profile-pic-upload mb-3">
                  <div class="profile-pic brand-pic">
                    <span><img src="@/assets/img/brand/brand-icon-02.png" alt="" /></span>
                    <a href="javascript:void(0);" class="remove-photo"
                      ><vue-feather type="x" class="x-square-add"></vue-feather
                    ></a>
                  </div>
                  <div class="image-upload mb-0">
                    <input type="file" />
                    <div class="image-uploads">
                      <h4>Change Image</h4>
                    </div>
                  </div>
                </div>
                <div class="mb-0">
                  <div
                    class="status-toggle modal-status d-flex justify-content-between align-items-center"
                  >
                    <span class="status-label">Status</span>
                    <input type="checkbox" id="user4" class="check" checked="" />
                    <label for="user4" class="checktoggle"></label>
                  </div>
                </div>
                <div class="modal-footer-btn">
                  <button
                    type="button"
                    class="btn btn-cancel me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="submit" class="btn btn-submit">Save Changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Edit Brand -->

  <!-- delete modal -->
  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content p-5 px-3 text-center">
            <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>
            <h4 class="fs-20 fw-bold mb-2 mt-1">Delete Brand</h4>
            <p class="mb-0 fs-16">Are you sure you want to delete brand?</p>
            <div class="modal-footer-btn mt-3 d-flex justify-content-center">
              <button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3">Yes Delete</button>
            </div>						
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- delete modal -->
</template>


<script>
export default {
  methods: {
    submitForm() {
      this.$router.push("/inventory/brand-list");
    },
  },
}
</script>
