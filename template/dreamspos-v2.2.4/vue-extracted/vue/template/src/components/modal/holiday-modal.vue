<template>
  <!-- Add Holiday -->
  <div class="modal fade" id="add-holiday">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Add Holiday</h4>
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
                    >Holiday <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label"
                    >From <span class="text-danger"> *</span></label
                  >
                  <div class="input-addon-right position-relative">
                    <a-date-picker v-model:value="value1" class="datetimepicker form-control" />
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">To <span class="text-danger"> *</span></label>
                  <div class="input-addon-right position-relative">
                    <a-date-picker v-model:value="value2" class="datetimepicker form-control" />
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label">No of Days</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="summer-description-box mb-3">
                  <label class="form-label"
                    >Description <span class="text-danger"> *</span></label
                  >
                  <div id="summernote1">
                   <div class="editor pages-editor">
                    <div class="editor three-line">
                      <div class="editor-container">
                        <div ref="editorRef" class="quill-editor" />
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="m-0">
              <div
                class="status-toggle modal-status d-flex justify-content-between align-items-center"
              >
                <span class="status-label">Status</span>
                <input type="checkbox" id="user5" class="check" checked />
                <label for="user5" class="checktoggle"> </label>
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
              Add Holiday
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Holiday -->

  <!-- Edit Holiday -->
  <div class="modal fade" id="edit-holiday">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Edit Holiday</h4>
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
                    >Holiday <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" value="New Year" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label"
                    >From <span class="text-danger"> *</span></label
                  >
                  <div class="input-addon-right position-relative">
                    <a-date-picker v-model:value="value3" class="datetimepicker form-control" />
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">To <span class="text-danger"> *</span></label>
                  <div class="input-addon-right position-relative">
                    <a-date-picker v-model:value="value4" class="datetimepicker form-control" />
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label">No of Days</label>
                  <input type="text" class="form-control" value="01" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="summer-description-box mb-3">
                  <label class="form-label"
                    >Description <span class="text-danger"> *</span></label
                  >
                  <div id="summernote1">
                    <div class="editor pages-editor">
                      <div class="editor three-line">
                        <div class="editor-container">
                          <div ref="editorRefOne" class="quill-editor" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="m-0">
              <div
                class="status-toggle modal-status d-flex justify-content-between align-items-center"
              >
                <span class="status-label">Status</span>
                <input
                  type="checkbox"
                  id="user6"
                  class="check"
                  value="First day of the new year"
                  checked
                />
                <label for="user6" class="checktoggle"> </label>
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
  <!-- /Edit Holiday -->

  <!-- Delete Modal -->
  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content p-5">
        <div class="modal-body text-center p-0">
          <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"
            ><i class="ti ti-trash fs-24 text-danger"></i
          ></span>
          <h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Holiday</h4>
          <p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete holiday?</p>
          <div class="d-flex justify-content-center mt-3">
            <a
              class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <router-link to="holidays" class="btn btn-primary fs-13 fw-medium p-2 px-3"
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
import { ref } from "vue";
const value1 = ref();
const value2 = ref();
const value3 = ref();
const value4 = ref();
import Quill from "quill";
import "quill/dist/quill.snow.css";
export default {
  data() {
    return {
      value1,
      value2,
      value3,
      value4,
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/hrm/holidays");
    },
  },
  mounted() {
    this.initQuill();
  },
  methods: {
    submitForm() {
      this.$router.push("/hrm/department-list");
    },
    initQuill() {
      const quill = new Quill(this.$refs.editorRef, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline"],
            ["image", "code-block"],
          ],
        },
      });
      const quillone = new Quill(this.$refs.editorRefOne, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline"],
            ["image", "code-block"],
          ],
        },
      });

      quill.on("text-change", () => {
        this.content = quill.root.innerHTML;
      });
      quillone.on("text-change", () => {
        this.content = quillone.root.innerHTML;
      });
    },
  },
};
</script>
