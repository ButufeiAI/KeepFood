<template>
  <!-- Add FAQ -->
  <div class="modal fade" id="add-faq">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Add Faq</h4>
          </div>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body">
            <div class="row">
              <div class="mb-3">
                <label class="form-label"
                  >Category <span class="text-danger">*</span></label
                >
                <input type="text" class="form-control" />
              </div>
              <div class="mb-3">
                <label class="form-label"
                  >Question <span class="text-danger">*</span></label
                >
                <input type="text" class="form-control" />
              </div>
              <div class="mb-3">
                <label class="form-label"
                  >Answer <span class="text-danger">*</span></label
                >
                <textarea class="form-control" rows="3"></textarea>
              </div>
              <div
                class="status-toggle modal-status d-flex justify-content-between align-items-center"
              >
                <span class="status-label">Status</span>
                <input type="checkbox" id="users6" class="check" checked />
                <label for="users6" class="checktoggle mb-0"></label>
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
              Add Faq
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add FAQ -->

  <!-- Edit FAQ -->
  <div class="modal fade" id="edit-faq">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Edit Faq</h4>
          </div>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body">
            <div class="row">
              <div class="mb-3">
                <label class="form-label"
                  >Category <span class="text-danger">*</span></label
                >
                <input type="text" class="form-control" value="General" />
              </div>
              <div class="mb-3">
                <label class="form-label"
                  >Question <span class="text-danger">*</span></label
                >
                <input type="text" class="form-control" value="What is a POS platform?" />
              </div>
              <div class="mb-3">
                <label class="form-label"
                  >Answer <span class="text-danger">*</span></label
                >
                <textarea class="form-control" rows="3">
A software system that processes sales, manages inventory, and handles transactions.</textarea
                >
              </div>
              <div
                class="status-toggle modal-status d-flex justify-content-between align-items-center"
              >
                <span class="status-label">Status</span>
                <input type="checkbox" id="users7" class="check" checked />
                <label for="users7" class="checktoggle mb-0"></label>
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
  <!-- /Edit FAQ -->

  <!-- Delete Modal -->
  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content p-5">
        <div class="modal-body text-center p-0">
          <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"
            ><i class="ti ti-trash fs-24 text-danger"></i
          ></span>
          <h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Faq</h4>
          <p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete faq?</p>
          <div class="d-flex justify-content-center mt-3">
            <a
              class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <router-link to="/faq" class="btn btn-primary fs-13 fw-medium p-2 px-3"
              >Yes Delete</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Modal -->
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    submitForm() {
      this.$router.push("/content/faq");
    },
  },
};
</script>
