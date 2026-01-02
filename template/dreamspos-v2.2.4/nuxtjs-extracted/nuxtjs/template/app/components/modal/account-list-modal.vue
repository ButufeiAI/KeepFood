<template>
  <!-- Add ac-->
  <div class="modal fade" id="add-bank-account">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header">
              <div class="page-title">
                <h4>Create Account</h4>
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
                    <div class="mb-3">
                      <label class="form-label"
                        >Account Holder Name<span class="text-danger ms-1">*</span></label
                      >
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >Account Number<span class="text-danger ms-1">*</span></label
                      >
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >Account Type<span class="text-danger ms-1">*</span></label
                      >
                      <vue-select
                        :options="Accounttype"
                        v-model="selected"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >Opening Balance<span class="text-danger ms-1">*</span></label
                      >
                      <input type="text" class="form-control" value="$200" />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label">Description</label>
                      <textarea class="form-control"></textarea>
                      <p class="fs-14 mt-1">Maximum 60 Words</p>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >Account Status<span class="text-danger ms-1">*</span></label
                      >
                      <vue-select
                        :options="Accountstatus"
                        v-model="selectedOne"
                        placeholder="Active"
                      />
                    </div>
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
                Add Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add ac-->

  <!-- Edit ac-->
  <div class="modal fade" id="edit-units">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header">
              <div class="page-title">
                <h4>Edit Account</h4>
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
                    <div class="mb-3">
                      <label class="form-label"
                        >Account Holder Name<span class="text-danger ms-1">*</span></label
                      >
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >Account Number<span class="text-danger ms-1">*</span></label
                      >
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >Account Type<span class="text-danger ms-1">*</span></label
                      >
                      <vue-select
                        :options="Accounttype"
                        v-model="selectedTwo"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >Opening Balance<span class="text-danger ms-1">*</span></label
                      >
                      <input type="text" class="form-control" value="$200" />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label">Description</label>
                      <textarea class="form-control"></textarea>
                      <p class="fs-14 mt-1">Maximum 60 Words</p>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <label class="form-label"
                      >Account Status<span class="text-danger ms-1">*</span></label
                    >
                    <vue-select
                      :options="Accountstatus"
                      v-model="selectedThree"
                      placeholder="Active"
                    />
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
  <!-- /Edit ac -->

  <!-- Add ac type-->
  <div class="modal fade" id="add-units2">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header">
              <div class="page-title">
                <h4>Create Account</h4>
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
                    <div class="mb-3">
                      <label class="form-label"
                        >Account Type Name<span class="text-danger ms-1">*</span></label
                      >
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <label class="form-label"
                      >Account Status<span class="text-danger ms-1">*</span></label
                    >
                    <vue-select
                      :options="Accountstatus"
                      v-model="selectedFour"
                      placeholder="Active"
                    />
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
                Add Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add ac type-->

  <!-- delete modal -->
  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content p-5 px-3 text-center">
            <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"
              ><i class="ti ti-trash fs-24 text-danger"></i
            ></span>
            <h4 class="fs-20 fw-bold mb-2 mt-1">Delete Account</h4>
            <p class="mb-0 fs-16">Are you sure you want to delete account?</p>
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
      selectedOne: [],
      selectedTwo: [],
      selectedThree: [],
      selectedFour: [],
      Accounttype: [
        {label: "Select", value: "Select"}, 
        {label: "Current Account", value: "Current Account"}, 
        {label: "Salary Account", value: "Salary Account"}, 
      ],
      Accountstatus: [
        {label: "Active", value: "Active"}, 
        {label: "Closed", value: "Closed"}, 
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/income/income-category");
    },
  },
};
</script>
