<template>
  <!-- Add Store -->
  <div class="modal fade" id="add-store">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Add Store</h4>
          </div>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label"
                >Store Name <span class="text-danger">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label"
                >User Name <span class="text-danger">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
            <div class="input-blocks mb-3">
              <label class="form-label"
                >Password <span class="text-danger"> *</span></label
              >
              <div class="pass-group">
                <input type="password" class="pass-input form-control" />
                <span class="ti toggle-password ti-eye-off"></span>
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">Email <span class="text-danger">*</span></label>
              <input type="email" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label">Phone <span class="text-danger">*</span></label>
              <input type="text" class="form-control" />
            </div>
            <div class="mb-0">
              <div
                class="status-toggle modal-status d-flex justify-content-between align-items-center"
              >
                <span class="status-label">Status</span>
                <input type="checkbox" id="user2" class="check" checked />
                <label for="user2" class="checktoggle"></label>
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
              Add Store
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Store -->

  <!-- Edit Store -->
  <div class="modal fade" id="edit-store">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Edit Store</h4>
          </div>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label"
                >Store Name <span class="text-danger">*</span></label
              >
              <input type="text" class="form-control" value="Electro Mart" />
            </div>
            <div class="mb-3">
              <label class="form-label"
                >User Name <span class="text-danger">*</span></label
              >
              <input type="text" class="form-control" value="johnsmith" />
            </div>
            <div class="input-blocks mb-3">
              <label class="form-label"
                >Password <span class="text-danger"> *</span></label
              >
              <div class="pass-group">
                <input type="password" class="pass-input form-control" value="********" />
                <span class="ti toggle-password ti-eye-off"></span>
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">Email <span class="text-danger">*</span></label>
              <input type="email" class="form-control" value="electromart@example.com" />
            </div>
            <div class="mb-3">
              <label class="form-label">Phone <span class="text-danger">*</span></label>
              <input type="text" class="form-control" value="+12498345785" />
            </div>
            <div class="mb-0">
              <div
                class="status-toggle modal-status d-flex justify-content-between align-items-center"
              >
                <span class="status-label">Status</span>
                <input type="checkbox" id="user1" class="check" checked />
                <label for="user1" class="checktoggle"></label>
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
              save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Edit Store -->

  <!-- Delete Modal -->
  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content p-5">
        <div class="modal-body text-center p-0">
          <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"
            ><i class="ti ti-trash fs-24 text-danger"></i
          ></span>
          <h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Store</h4>
          <p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete store?</p>
          <div class="d-flex justify-content-center mt-3">
            <a
              class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <router-link
              to="/people/store-list"
              class="btn btn-primary fs-13 fw-medium p-2 px-3"
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
      this.$router.push("/people/store-list");
    },
  },
};
</script>
