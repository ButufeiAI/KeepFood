<template>
  <!-- Add Warranty -->
  <div class="modal fade" id="add-units">
    <div class="modal-dialog modal-dialog-centered custom-modal-two">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title">
                <h4>Add Warrranty</h4>
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
            <div class="modal-body custom-modal-body">
              <form @submit.prevent="submitForm">
                <div class="mb-3">
                  <label class="form-label">Name</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label">Duration</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-blocks">
                      <label class="form-label">Periods</label>
                      <vue-select
                        :options="ChoosePeriods"
                        v-model="selected"
                        placeholder="Choose"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3 input-blocks">
                      <label class="form-label">Description</label>
                      <textarea class="form-control"></textarea>
                    </div>
                  </div>
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
                <div class="modal-footer-btn">
                  <button
                    type="button"
                    class="btn btn-cancel me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="submit" class="btn btn-submit">Create Warrenty</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Warranty -->

  <!-- Edit Warranty -->
  <div class="modal fade" id="edit-units">
    <div class="modal-dialog modal-dialog-centered custom-modal-two">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title">
                <h4>Edit Warrranty</h4>
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
            <div class="modal-body custom-modal-body">
              <form @submit.prevent="submitForm">
                <div class="mb-3">
                  <label class="form-label">Name</label>
                  <input type="text" class="form-control" value="Piece" />
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label">Duration</label>
                      <input type="text" class="form-control" value="3" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-blocks">
                      <label class="form-label">Periods</label>
                      <vue-select
                        :options="ChoosePeriodsOne"
                        v-model="selectedOne"
                        placeholder="Month"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3 input-blocks">
                      <label class="form-label">Description</label>
                      <textarea class="form-control">
Repairs or a replacement for a faulty product within a specified time period after it was purchased.</textarea
                      >
                    </div>
                  </div>
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
  <!-- /Edit Warranty -->

  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content p-5 px-3 text-center">
            <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>
            <h4 class="fs-20 fw-bold mb-2 mt-1">Delete Warranty</h4>
            <p class="mb-0 fs-16">Are you sure you want to delete warranty?</p>
            <div class="modal-footer-btn mt-3 d-flex justify-content-center">
              <button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3">Yes Delete</button>
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
      selectedOne: "Month",
      ChoosePeriods: [
        {label: "Choose", value: "Choose"}, 
        {label: "Month", value: "Month"}, 
        {label: "Year", value: "Year"}, 
      ],
      ChoosePeriodsOne: [
        {label: "Month", value: "Month"}, 
        {label: "Year", value: "Year"}, 
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/inventory/warranty");
    },
  },
};
</script>
