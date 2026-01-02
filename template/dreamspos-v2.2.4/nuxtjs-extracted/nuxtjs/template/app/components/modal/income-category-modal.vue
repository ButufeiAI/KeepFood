<template>
  <!-- Add income-->
  <div class="modal fade" id="add-income-category">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header">
              <div class="page-title">
                <h4>Add Income Category</h4>
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
            <div class="modal-body">
              <form @submit.prevent="submitForm">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="mb-3 position-relative">
                      <label class="form-label"
                        >Code<span class="text-danger ms-1">*</span></label
                      >
                      <input type="text" class="form-control list" />
                      <button type="submit" class="btn btn-primaryadd btn-generate">
                        Generate
                      </button>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <label class="form-label"
                      >Enter Name<span class="text-danger ms-1">*</span></label
                    >
                    <input type="text" class="form-control" value="Investment" />
                  </div>
                </div>
              </form>
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
                Add Category
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add income-->

  <!-- Edit income-->
  <div class="modal fade" id="edit-income-category">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header">
              <div class="page-title">
                <h4>Edit Income Category</h4>
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
            <div class="modal-body">
              <form @submit.prevent="submitForm">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="mb-3 position-relative">
                      <label class="form-label"
                        >Code<span class="text-danger ms-1">*</span></label
                      >
                      <input type="text" class="form-control list" />
                      <button type="submit" class="btn btn-primaryadd btn-generate">
                        Generate
                      </button>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <label class="form-label"
                      >Enter Name<span class="text-danger ms-1">*</span></label
                    >
                    <input type="text" class="form-control" value="Investment" />
                  </div>
                </div>
              </form>
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
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit income -->

  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content p-5 px-3 text-center">
            <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"
              ><i class="ti ti-trash fs-24 text-danger"></i
            ></span>
            <h4 class="fs-20 fw-bold mb-2 mt-1">Delete Income Category</h4>
            <p class="mb-0 fs-16">Are you sure you want to delete income category?</p>
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
    return {};
  },
  methods: {
    submitForm() {
      this.$router.push("/income/income-category");
    },
  },
};
</script>
