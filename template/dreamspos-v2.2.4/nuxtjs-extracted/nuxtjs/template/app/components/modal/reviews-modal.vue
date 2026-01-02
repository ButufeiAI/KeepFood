<template>
  <!-- Add Review -->
  <div class="modal fade" id="add-review">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Add Review</h4>
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
                    <p class="mb-0 mt-1 fs-13">JPEG, PNG up to 2 MB</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="mb-3">
                <label class="form-label">Author <i class="text-danger ms-1">*</i></label>
                <input type="text" class="form-control" />
              </div>
              <div class="mb-3">
                <label class="form-label"
                  >Product <i class="text-danger ms-1">*</i></label
                >
                <input type="text" class="form-control" />
              </div>
              <div class="mb-3">
                <label class="form-label"
                  >Ratings <i class="text-danger ms-1">*</i></label
                >
                <div class="d-flex align-items-center">
                  <span><i class="ti ti-star-filled text-light-transparent"></i></span>
                  <span><i class="ti ti-star-filled text-light-transparent"></i></span>
                  <span><i class="ti ti-star-filled text-light-transparent"></i></span>
                  <span><i class="ti ti-star-filled text-light-transparent"></i></span>
                  <span><i class="ti ti-star-filled text-light-transparent"></i></span>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">Review <i class="text-danger ms-1">*</i></label>
                <textarea class="form-control"></textarea>
              </div>

              <div class="d-flex align-items-center justify-content-between">
                <label class="form-label">Status</label>
                <label class="switch">
                  <input type="checkbox" checked />
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Review -->

  <!-- Edit Review -->
  <div class="modal fade" id="edit-review">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Edit Review</h4>
          </div>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body">
            <div class="new-employee-field">
              <div class="profile-pic-upload">
                <div
                  class="profile-pic edit-review people-profile-pic p-2 border rounded"
                >
                  <img src="@/assets/img/users/user-08.jpg" alt="Img" />
                  <a href="javascript:void(0);"
                    ><i data-feather="x-square" class="x-square-add"></i
                  ></a>
                </div>
                <div class="mb-3">
                  <div class="image-upload mb-0">
                    <input type="file" />
                    <div class="image-uploads">
                      <h4>Change Image</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">Author <i class="text-danger ms-1">*</i></label>
              <input type="text" class="form-control" value="Carl Evans" />
            </div>
            <div class="mb-3">
              <label class="form-label">Product <i class="text-danger ms-1">*</i></label>
              <input type="text" class="form-control" value="Lenovo IdeaPad 3" />
            </div>
            <div class="mb-3">
              <label class="form-label">Ratings <i class="text-danger ms-1">*</i></label>
              <div class="d-flex align-items-center">
                <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                <span><i class="ti ti-star-filled text-warning me-1"></i></span>
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">Review <i class="text-danger ms-1">*</i></label>
              <textarea class="form-control">
Sleek design and excellent battery life</textarea
              >
            </div>

            <div class="d-flex align-items-center justify-content-between">
              <label class="form-label">Status</label>
              <label class="switch">
                <input type="checkbox" checked />
                <span class="slider round"></span>
              </label>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Edit Review -->

  <!-- Delete Review -->
  <div class="modal fade modal-default" id="delete_review">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body p-0">
          <div class="success-wrap text-center">
            <form @submit.prevent="submitForm">
              <div class="icon-success bg-danger-transparent text-danger mb-2">
                <i class="ti ti-trash"></i>
              </div>
              <h3 class="mb-2">Delete Review</h3>
              <p class="fs-16 mb-3">Are you sure you want to delete review?</p>
              <div
                class="d-flex align-items-center justify-content-center gap-2 flex-wrap"
              >
                <button
                  type="button"
                  class="btn btn-md btn-secondary"
                  data-bs-dismiss="modal"
                >
                  No, Cancel
                </button>
                <button type="submit" class="btn btn-md btn-primary">Yes, Delete</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Review -->
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    submitForm() {
      this.$router.push("/ecommerce/reviews");
    },
  },
};
</script>
