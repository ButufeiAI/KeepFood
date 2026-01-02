<template>
  <!-- Add Supplier -->
  <div class="modal fade" id="add-supplier">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Add Supplier</h4>
          </div>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-12">
                <div class="new-employee-field">
                  <div class="profile-pic-upload mb-2">
                    <div class="profile-pic">
                      <span
                        ><i class="ti ti-circle-plus me-1"></i>Add
                        Image</span
                      >
                    </div>
                    <div class="mb-0">
                      <div class="image-upload mb-2">
                        <input type="file" />
                        <div class="image-uploads">
                          <h4>Upload Image</h4>
                        </div>
                      </div>
                      <p>JPEG, PNG up to 2 MB</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label"
                    >First Name <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Last Name <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" />
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
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Phone <span class="text-danger">*</span></label
                  >
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
                  <vue-select :options="City" v-model="selected" placeholder="Select" />
                </div>
              </div>
              <div class="col-lg-6 col-sm-10 col-10">
                <div class="mb-3">
                  <label class="form-label"
                    >State <span class="text-danger">*</span></label
                  >
                  <vue-select :options="State" v-model="selectedOne" placeholder="Select" />
                </div>
              </div>
              <div class="col-lg-6 col-sm-10 col-10">
                <div class="mb-3">
                  <label class="form-label"
                    >Country <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="Country"
                    v-model="selectedTwo"
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
              Add Supplier
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Supplier -->

  <!-- Edit Supplier -->
  <div class="modal fade" id="edit-supplier">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="content">
          <div class="modal-header">
            <div class="page-title">
              <h4>Edit Supplier</h4>
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
          <form @submit.prevent="submitForm">
            <div class="modal-body">
              <div class="row">
                <div class="col-lg-12">
                  <div class="new-employee-field">
                    <div class="profile-pic-upload edit-pic">
                      <div class="profile-pic">
                        <span
                          ><img src="@/assets/img/supplier/edit-supplier.jpg" alt="Img"
                        /></span>
                        <div class="close-img">
                          <i data-feather="x" class="info-img"></i>
                        </div>
                      </div>
                      <div class="mb-0">
                        <div class="image-upload mb-0">
                          <input type="file" />
                          <div class="image-uploads">
                            <h4>Change Image</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >First Name <span class="text-danger">*</span></label
                    >
                    <input type="text" class="form-control" value="Apex" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >Last Name <span class="text-danger">*</span></label
                    >
                    <input type="text" class="form-control" value="Computers" />
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
                      value="carlevans@example.com"
                    />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >Phone <span class="text-danger">*</span></label
                    >
                    <input type="text" class="form-control" value="+15964712634" />
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
                    <vue-select
                      :options="City"
                      v-model="selectedThree"
                      placeholder="Los Angels"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-10 col-10">
                  <div class="mb-3">
                    <label class="form-label"
                      >State <span class="text-danger">*</span></label
                    >
                    <vue-select
                      :options="State"
                      v-model="selectedFour"
                      placeholder="California"
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
                      v-model="selectedFive"
                      placeholder="United States"
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
  </div>
  <!-- /Edit Supplier -->

  <!-- Delete Modal -->
  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content p-5">
        <div class="modal-body text-center p-0">
          <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"
            ><i class="ti ti-trash fs-24 text-danger"></i
          ></span>
          <h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Supplier</h4>
          <p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete supplier?</p>
          <div class="d-flex justify-content-center mt-3">
            <a
              class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <router-link
              to="/people/suppliers"
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
      selectedThree: "Los Angels",
      selectedFour: "California",
      selectedFive: "United States",
      City: [
        {label: "Select", value: "Select"}, 
        {label: "Varrel", value: "Varrel"}, 
        {label: "Los Angels", value: "Los Angels"}, 
        {label: "Munich", value: "Munich"}
      ],
      State: [
        {label: "Select", value: "Select"}, 
        {label: "Bavaria", value: "Bavaria"}, 
        {label: "New York City", value: "New York City"}, 
        {label: "California", value: "California"}
      ],
      Country: [
        {label: "Select", value: "Select"}, 
        {label: "Germany", value: "Germany"}, 
        {label: "Mexico", value: "Mexico"}, 
        {label: "United States", value: "United States"}
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/people/suppliers");
    },
  },
};
</script>
