<template>
  <!-- Add Printer -->
  <div class="modal fade" id="add-printer">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Add Printer</h4>
          </div>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label">Printer Name <span> *</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label">Connection Type <span> *</span></label>
                  <vue-select
                    :options="Chooseprint"
                    v-model="selected"
                    placeholder="Choose"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label">IP Address <span> *</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-0">
                  <label class="form-label">Port <span> *</span></label>
                  <input type="text" class="form-control" />
                </div>
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
  <!-- /Add Printer -->

  <!-- Edit Printer -->
  <div class="modal fade" id="edit-printer">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Add Printer</h4>
          </div>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label">Printer Name <span> *</span></label>
                  <input type="text" class="form-control" value="HP Printer" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label">Connection Type <span> *</span></label>
                  <vue-select
                    :options="ChooseprintOne"
                    v-model="selectedOne"
                    placeholder="Network"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label">IP Address <span> *</span></label>
                  <input type="text" class="form-control" value="151.00.1.22" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-0">
                  <label class="form-label">Port <span> *</span></label>
                  <input type="text" class="form-control" value="900" />
                </div>
              </div>
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
  <!-- /Edit Printer -->

  <!-- delete modal -->
  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content p-5 px-3 text-center">
            <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"
              ><i class="ti ti-trash fs-24 text-danger"></i
            ></span>
            <h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Printer</h4>
            <p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete printer?</p>
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
    return {
      selected: [],
      selectedOne: "Network",
      Chooseprint: [
        {label: "Choose", value: "Choose"}, 
        {label: "Network", value: "Network"}, 
        {label: "IP Address", value: "IP Address"}, 
        {label: "Port", value: "Port"}, 
      ],
      ChooseprintOne: [
        {label: "Network", value: "Network"}, 
        {label: "IP Address", value: "IP Address"}, 
        {label: "Port", value: "Port"}, 
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/app-settings/invoice-settings");
    },
  },
};
</script>
