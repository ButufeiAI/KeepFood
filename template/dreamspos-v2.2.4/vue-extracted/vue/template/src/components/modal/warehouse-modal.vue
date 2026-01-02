<template>
  <!-- Add Warehouse -->
  <div class="modal fade" id="add-warehouse">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Add Warehouse</h4>
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
                  <label class="form-label"
                    >Warehouse <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Contact Person <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="Contact"
                    v-model="selected"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Email <span class="text-danger">*</span></label
                  >
                  <input type="email" class="form-control" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Phone <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">Phone(Work)</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Address <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-6 col-sm-10 col-10">
                <div class="mb-3">
                  <label class="form-label"
                    >City <span class="text-danger">*</span></label
                  >
                  <vue-select :options="City" v-model="selectedOne" placeholder="Select" />
                </div>
              </div>
              <div class="col-lg-6 col-sm-10 col-10">
                <div class="mb-3">
                  <label class="form-label"
                    >State <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="State"
                    v-model="selectedTwo"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-10 col-10">
                <div class="mb-3">
                  <label class="form-label"
                    >Country <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="Country"
                    v-model="selectedThree"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Postal Code <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-0">
                  <div
                    class="status-toggle modal-status d-flex justify-content-between align-items-center"
                  >
                    <span class="status-label">Status</span>
                    <input type="checkbox" id="users5" class="check" checked />
                    <label for="users5" class="checktoggle mb-0"></label>
                  </div>
                </div>
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
              Add Warehouse
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Warehouse -->

  <!-- Edit Warehouse -->
  <div class="modal fade" id="edit-warehouse">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Edit Warehouse</h4>
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
                  <label class="form-label"
                    >Warehouse <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" value="Lavish Warehouse" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Contact Person <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="Contact"
                    v-model="selectedFour"
                    placeholder="Steven"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Email <span class="text-danger">*</span></label
                  >
                  <input
                    type="email"
                    class="form-control"
                    value="electromart@example.com"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Phone <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" value="+12498345785" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">Phone(Work)</label>
                  <input type="text" class="form-control" value="+17538647943" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Address <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" value="46 Perry Street" />
                </div>
              </div>
              <div class="col-lg-6 col-sm-10 col-10">
                <div class="mb-3">
                  <label class="form-label"
                    >City <span class="text-danger">*</span></label
                  >
                  <vue-select :options="City" v-model="selectedFive" placeholder="Varrel" />
                </div>
              </div>
              <div class="col-lg-6 col-sm-10 col-10">
                <div class="mb-3">
                  <label class="form-label"
                    >State <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="State"
                    v-model="selectedSix"
                    placeholder="Bavaria"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-10 col-10">
                <div class="mb-3">
                  <label class="form-label"
                    >Country <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="Country"
                    v-model="selectedSeven"
                    placeholder="Germany"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Postal Code <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" value="10176" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-0">
                  <div
                    class="status-toggle modal-status d-flex justify-content-between align-items-center"
                  >
                    <span class="status-label">Status</span>
                    <input type="checkbox" id="users6" class="check" checked />
                    <label for="users6" class="checktoggle mb-0"></label>
                  </div>
                </div>
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
  <!-- /Edit Warehouse -->

  <!-- Delete Modal -->
  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content p-5">
        <div class="modal-body text-center p-0">
          <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"
            ><i class="ti ti-trash fs-24 text-danger"></i
          ></span>
          <h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Warehouse</h4>
          <p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete warehouse?</p>
          <div class="d-flex justify-content-center mt-3">
            <a
              class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <router-link
              to="/people/warehouse"
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
    return {
      selected: [],
      selectedOne: [],
      selectedTwo: [],
      selectedThree: [],
      selectedFour: "Steven",
      selectedFive: "Varrel",
      selectedSix: "Bavaria",
      selectedSeven: "Germany",
      Contact: [
        {label: "Select", value: "Select"}, 
        {label: "Steven", value: "Steven"}, 
        {label: "Gravely", value: "Gravely"}
      ],
      City: [
        {label: "Select", value: "Select"}, 
        {label: "Varrel", value: "Varrel"}, 
        {label: "Los Angels", value: "Los Angels"}, 
        {label: "Munich", value: "Munich"}, 
      ],
      State: [
        {label: "Select", value: "Select"}, 
        {label: "Bavaria", value: "Bavaria"}, 
        {label: "New York City", value: "New York City"}, 
        {label: "California", value: "California"}, 
      ],
      Country: [
        {label: "Select", value: "Select"}, 
        {label: "Germany", value: "Germany"}, 
        {label: "Mexico", value: "Mexico"}, 
        {label: "United States", value: "United States"}, 
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/people/warehouse");
    },
  },
};
</script>
