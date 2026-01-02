<template>
  <!-- Add discount plan-->
  <div class="modal fade" id="add-units">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header">
              <div class="page-title">
                <h4>Add Discount Plan</h4>
              </div>
              <button
                type="button"
                class="close bg-danger text-white fs-16"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="submitForm">
                <div class="mb-3">
                  <label class="form-label"
                    >Plan Name<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-3 add-product">
                  <div class="add-newplus">
                    <label class="form-label"
                      >Customer<span class="text-danger ms-1">*</span></label
                    >
                    <a href="javascript:void(0);"
                      ><i class="ti ti-circle-plus me-1"></i
                      ><span>Add New</span></a
                    >
                  </div>
                  <vue-select
                    :options="Customer"
                    v-model="selected"
                    placeholder="Choose"
                  />
                </div>

                <div class="mb-0">
                  <div
                    class="status-toggle modal-status d-flex justify-content-between align-items-center"
                  >
                    <span class="status-label">Status</span>
                    <input type="checkbox" id="user2" class="check" />
                    <label for="user2" class="checktoggle"></label>
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
                Add Discount Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add discount plan -->

  <!-- Edit discount plan -->
  <div class="modal fade" id="edit-units">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header">
              <div class="page-title">
                <h4>Edit Discount Plan</h4>
              </div>
              <button
                type="button"
                class="close bg-danger text-white fs-16"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="submitForm">
                <div class="mb-3">
                  <label class="form-label"
                    >Plan Name<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" value="Standard Plan" />
                </div>

                <div class="mb-3 add-product">
                  <div class="add-newplus">
                    <label class="form-label"
                      >Customer<span class="text-danger ms-1">*</span></label
                    >
                    <a href="javascript:void(0);"
                      ><i class="ti ti-circle-plus me-1"></i
                      ><span>Add New</span></a
                    >
                  </div>
                  <vue-select
                    :options="Customers"
                    v-model="selectedOne"
                    placeholder="All Customers"
                  />
                </div>

                <div class="mb-0">
                  <div
                    class="status-toggle modal-status d-flex justify-content-between align-items-center"
                  >
                    <span class="status-label">Status</span>
                    <input type="checkbox" id="user3" class="check" />
                    <label for="user3" class="checktoggle"></label>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn me-1 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
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
  <!-- /Edit discount plan -->

  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content p-5 px-3 text-center">
            <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"
              ><i class="ti ti-trash fs-24 text-danger"></i
            ></span>
            <h4 class="fs-20 fw-bold mb-2 mt-1">Delete Discount Plan</h4>
            <p class="mb-0 fs-16">Are you sure you want to delete discount plan?</p>
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
      selectedOne: "All Customers",
      Customer: [
        {label: "Choose", value: "Choose"}, 
        {label: "Lenovo", value: "Lenovo"},
        {label: "Electronics", value: "Electronics"}
      ],
      Customers: [
        {label: "All Customers", value: "All Customers"}, 
        {label: "All Customers", value: "All Customers"}, 
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/discount/discount-plan");
    },
  },
};
</script>
