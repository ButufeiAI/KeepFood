<template>
  <!-- Add Todo -->
  <div class="modal fade" id="add_todo">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add New Todo</h4>
          <button
            type="button"
            class="btn-close custom-btn-close p-0"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body">
            <div class="row">
              <div class="col-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Todo Title<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Tag<span class="text-danger ms-1">*</span></label
                  >
                  <vue-select :options="Tags" v-model="selected" placeholder="Select" />
                </div>
              </div>
              <div class="col-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Priority<span class="text-danger ms-1">*</span></label
                  >
                  <vue-select
                    :options="Priority"
                    v-model="selectedOne"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3 summer-description-box notes-summernote">
                  <label class="form-label"
                    >Descriptions<span class="text-danger ms-1">*</span></label
                  >
                  <div class="summernote"></div>
                </div>
              </div>
              <div class="col-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Add Assignee<span class="text-danger ms-1">*</span></label
                  >
                  <vue-select
                    :options="Assignee"
                    v-model="selectedTwo"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="mb-0">
                  <label class="form-label"
                    >Status<span class="text-danger ms-1">*</span></label
                  >
                  <vue-select :options="Status" v-model="selectedThree" placeholder="Select" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Add New Todo</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Todo -->

  <!-- Edit Todo -->
  <div class="modal fade" id="edit_todo">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Todo</h4>
          <button
            type="button"
            class="btn-close custom-btn-close p-0"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body">
            <div class="row">
              <div class="col-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Todo Title<span class="text-danger ms-1">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    value="Update calendar and schedule"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Tag<span class="text-danger ms-1">*</span></label
                  >
                  <vue-select :options="Tags" v-model="selectedFour" placeholder="Internal" />
                </div>
              </div>
              <div class="col-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Priority<span class="text-danger ms-1">*</span></label
                  >
                  <vue-select
                    :options="Priority"
                    v-model="selectedFive"
                    placeholder="High"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3 summer-description-box notes-summernote">
                  <label class="form-label"
                    >Descriptions<span class="text-danger ms-1">*</span></label
                  >
                  <div class="summernote"></div>
                </div>
              </div>
              <div class="col-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Add Assignee<span class="text-danger ms-1">*</span></label
                  >
                  <vue-select
                    :options="Assignee"
                    v-model="selectedSix"
                    placeholder="Sophie"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="mb-0">
                  <label class="form-label"
                    >Status<span class="text-danger ms-1">*</span></label
                  >
                  <vue-select
                    :options="Assignee"
                    v-model="selectedSeven"
                    placeholder="Completed"
                  />
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
  <!-- /Edit Todo -->

  <!-- Todo Details -->
  <div class="modal fade" id="view_todo">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark">
          <h4 class="modal-title text-white">Respond to any pending messages</h4>
          <span class="badge badge-danger d-inline-flex align-items-center"
            ><i class="ti ti-square me-1"></i>Urgent</span
          >
          <span><i class="ti ti-star-filled text-warning"></i></span>
          <a href="#"><i class="ti ti-trash text-white"></i></a>
          <button
            type="button"
            class="btn-close custom-btn-close bg-transparent fs-16 text-white position-static"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <div class="modal-body">
          <h5 class="mb-2">Task Details</h5>
          <div class="border rounded mb-3 p-2">
            <div class="row row-gap-3">
              <div class="col-md-4">
                <div class="text-center">
                  <span class="d-block mb-1">Created On</span>
                  <p class="text-dark">22 July 2025</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="text-center">
                  <span class="d-block mb-1">Due Date</span>
                  <p class="text-dark">22 July 2025</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="text-center">
                  <span class="d-block mb-1">Status</span>
                  <span
                    class="badge badge-soft-success align-items-center justify-content-center"
                  >
                    <i class="fas fa-circle fs-6 me-1"></i>Completed
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <h5 class="mb-2">Description</h5>
            <p>
              Hiking is a long, vigorous walk, usually on trails or footpaths in the
              countryside. Walking for pleasure developed in Europe during the eighteenth
              century. Religious pilgrimages have existed much longer but they involve
              walking long distances for a spiritual purpose associated with specific
              religions and also we achieve inner peace while we hike at a local park.
            </p>
          </div>
          <div class="mb-3">
            <h5 class="mb-2">Tags</h5>
            <div class="d-flex align-items-center">
              <span class="badge badge-danger me-2">Internal</span>
              <span class="badge badge-success me-2">Projects</span>
              <span class="badge badge-secondary">Reminder</span>
            </div>
          </div>
          <div>
            <h5 class="mb-2">Assignee</h5>
            <div class="avatar-list-stacked avatar-group-sm">
              <span class="avatar avatar-rounded">
                <img
                  class="border border-white"
                  src="@/assets/img/profiles/avatar-23.jpg"
                  alt="img"
                />
              </span>
              <span class="avatar avatar-rounded">
                <img
                  class="border border-white"
                  src="@/assets/img/profiles/avatar-24.jpg"
                  alt="img"
                />
              </span>
              <span class="avatar avatar-rounded">
                <img
                  class="border border-white"
                  src="@/assets/img/profiles/avatar-25.jpg"
                  alt="img"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Todo Details -->

  <!-- Delete Modal -->
  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content p-5 px-3 text-center">
            <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>
            <h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Todo</h4>
            <p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete todo?</p>
            <div class="modal-footer-btn mt-3 d-flex justify-content-center">
              <button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3">Yes Delete</button>
            </div>						
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
      selectedFour: "Internal",
      selectedFive: "High",
      selectedSix: "Sophie",
      selectedSeven: "Completed",
      Tags: [
        {label: "Select", value: "Select"}, 
        {label: "Internal", value: "Internal"}, 
        {label: "Projects", value: "Projects"}, 
        {label: "Meetings", value: "Meetings"}, 
        {label: "Reminder", value: "Reminder"}, 
      ],
      Priority: [
        {label: "Select", value: "Select"}, 
        {label: "Medium", value: "Medium"}, 
        {label: "High", value: "High"}, 
        {label: "Low", value: "Low"}, 
      ],
      Assignee: [
        {label: "Select", value: "Select"}, 
        {label: "Sophie", value: "Sophie"}, 
        {label: "Cameron", value: "Cameron"}, 
        {label: "Doris", value: "Doris"}, 
        {label: "Rufana", value: "Rufana"}, 
      ],
      Status: [
        {label: "Select", value: "Select"}, 
        {label: "Completed", value: "Completed"}, 
        {label: "Pending", value: "Pending"}, 
        {label: "Onhold", value: "Onhold"}, 
        {label: "Inprogress", value: "Inprogress"}, 
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/application/todo");
    },
  },
};
</script>
