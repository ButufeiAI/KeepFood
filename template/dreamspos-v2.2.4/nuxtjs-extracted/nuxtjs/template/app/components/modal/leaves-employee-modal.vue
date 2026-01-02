<template>
  <!-- Add Leave -->
  <div class="modal fade" id="add-units">
    <div class="modal-dialog modal-dialog-centered custom-modal-two">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title">
                <h4>Apply Leave</h4>
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
                <div class="row">
                  <div class="col-lg-12">
                    <div class="input-blocks">
                      <label>Start Date</label>

                      <div class="input-groupicon calender-input">
                        <a-date-picker v-model:value="value1" class="datetimepicker form-control" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label">Select Leave Type </label>
                      <vue-select
                        :options="LamonLeav"
                        v-model="selected"
                        placeholder="Choose"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="apply-leave">
                      <div class="leave-apply">
                        <div class="leave-date">
                          <span>Day 1</span>
                          <p>16 Aug 2023</p>
                        </div>
                        <div class="leave-time">
                          <div class="input-blocks mb-0">
                            <vue-select
                              :options="LeavType"
                              v-model="selectedOne"
                              placeholder="Full Day"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="leave-apply">
                        <div class="leave-date">
                          <span>Day 1</span>
                          <p>16 Aug 2023</p>
                        </div>
                        <div class="leave-time">
                          <div class="input-blocks mb-0">
                            <vue-select
                              :options="FullleaveFull"
                              v-model="selectedTwo"
                              placeholder="Full Day"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3 summer-description-box mb-0">
                      <label class="form-label">Reason</label>
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
                <div class="modal-footer-btn">
                  <button
                    type="button"
                    class="btn btn-cancel me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="submit" class="btn btn-submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Leave -->

  <!-- Edit Leave -->
  <div class="modal fade" id="edit-units">
    <div class="modal-dialog modal-dialog-centered custom-modal-two">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title">
                <h4>Edit Leave</h4>
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
                <div class="row">
                  <div class="col-lg-12">
                    <div class="input-blocks">
                      <label class="form-label">Start Date</label>

                      <div class="input-groupicon calender-input">
                        <a-date-picker v-model:value="value2" class="datetimepicker form-control" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label">Select Leave Type </label>
                      <vue-select
                        :options="LamonLeav"
                        v-model="selectedThree"
                        placeholder="Sick Leave"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="apply-leave">
                      <div class="leave-apply">
                        <div class="leave-date">
                          <span>Day 1</span>
                          <p>16 Aug 2023</p>
                        </div>
                        <div class="leave-time">
                          <div class="input-blocks mb-0">
                            <vue-select
                              :options="Fullleaveone"
                              v-model="selectedFour"
                              placeholder="Full Day"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="leave-apply">
                        <div class="leave-date">
                          <span>Day 1</span>
                          <p>16 Aug 2023</p>
                        </div>
                        <div class="leave-time">
                          <div class="input-blocks mb-0">
                            <vue-select
                              :options="FullleaveFUllone"
                              v-model="selectedFive"
                              placeholder="Full Day"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3 summer-description-box mb-0">
                      <label class="form-label">Reason</label>
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
                <div class="modal-footer-btn">
                  <button
                    type="button"
                    class="btn btn-cancel me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="submit" class="btn btn-submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit Leave -->

  <!-- Rejected Reason -->
  <div class="modal fade" id="rejected-reason">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title">
                <h4>Reason For Rejection</h4>
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
              <p>
                The Jordan brand is owned by Nike (owned by the Knight family), as, at the
                time, the company was building its strategy to work with athletes to
                launch shows that could inspire consumers.Although Jordan preferred
                Converse and Adidas, they simply could not match the offer Nike made.
                Jordan also signed with Nike because he loved the way they wanted to
                market him with the banned colored shoes. Nike promised to cover the fine
                Jordan would receive from the NBA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Rejected Reason -->

  <!-- Add Leave -->
  <div class="modal fade" id="add-leave">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Apply Leave</h4>
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
                    >Employee <span class="text-danger">*</span></label
                  >
                  <vue-select :options="LamonLeav" v-model="selectedSix" placeholder="Select" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Leave Type <span class="text-danger">*</span></label
                  >
                  <vue-select :options="LeavType" v-model="selectedSeven" placeholder="Select" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="row">
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
                      <label class="form-label"
                        >To <span class="text-danger"> *</span></label
                      >
                      <div class="input-addon-right position-relative">
                        <a-date-picker v-model:value="value4" class="datetimepicker form-control" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <div class="input-addon-right position-relative">
                        <a-date-picker v-model:value="value5" class="datetimepicker form-control" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <vue-select
                        :options="HalfDay"
                        v-model="selectedEight"
                        placeholder="Select"
                      ></vue-select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="bg-light rounded p-3 pb-0">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">No of Days</label>
                        <input type="text" class="form-control" readonly />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">Remaining Leaves</label>
                        <input type="text" class="form-control" readonly />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="summer-description-box mb-0">
                  <label class="form-label">Reason</label>
                  <div id="summernote2">
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
  <!-- /Add Leave -->

  <!-- Edit Leave -->
  <div class="modal fade" id="edit-leave">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Edit Leave</h4>
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
                    >Employee <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="LamonLeavOne"
                    v-model="selectedNine"
                    placeholder="Carl Evans"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Leave Type <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="LeavTypeOne"
                    v-model="selectedTen"
                    placeholder="Sick Leave"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >From <span class="text-danger"> *</span></label
                      >
                      <div class="input-addon-right position-relative">
                        <a-date-picker v-model:value="value6" class="datetimepicker form-control" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >To <span class="text-danger"> *</span></label
                      >
                      <div class="input-addon-right position-relative">
                        <a-date-picker v-model:value="value7" class="datetimepicker form-control" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <div class="input-addon-right position-relative">
                        <a-date-picker v-model:value="value8" class="datetimepicker form-control" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <vue-select
                        :options="HalfDayOne"
                        v-model="selectedEleven"
                        placeholder="Full Day"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="bg-light rounded p-3 pb-0">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">No of Days</label>
                        <input
                          type="text"
                          class="form-control"
                          value="01"
                          readonly
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">Remaining Leaves</label>
                        <input
                          type="text"
                          class="form-control"
                          value="08"
                          readonly
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="summer-description-box mb-0">
                  <label class="form-label">Reason</label>
                  <div id="summernote">
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
  <!-- /Edit Leave -->

  <!-- delete modal -->
  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content p-5 px-3 text-center">
            <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"
              ><i class="ti ti-trash fs-24 text-danger"></i
            ></span>
            <h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Leave</h4>
            <p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete leave?</p>
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
import { ref } from "vue";
import Quill from "quill";
import "quill/dist/quill.snow.css";
const value1 = ref();
const value2 = ref();
const value3 = ref();
const value4 = ref();
const value5 = ref();
const value6 = ref();
const value7 = ref();
const value8 = ref();

export default {
  data() {
    return {
      value1,
      value2,
      value3,
      value4,
      value5,
      value6,
      value7,
      value8,
      selected: [],
      selectedOne: "Full Day",
      selectedTwo: "Full Day",
      selectedThree: "Sick Leave",
      selectedFour: "Full Day",
      selectedFive: "Full Day",
      selectedSix: [],
      selectedSeven: [],
      selectedEight: [],
      selectedNine: "Carl Evans",
      selectedTen: "Sick Leave",
      selectedEleven: "Full Day",
      HalfDay: [
        {label: "Select", value: "Select"}, 
        {label: "Full Day", value: "Full Day"}, 
        {label: "Half Day", value: "Half Day"}
      ],
      LeavType: [
        {label: "Select", value: "Select"}, 
        {label: "Sick Leave", value: "Sick Leave"}, 
        {label: "Casual Leave", value: "Casual Leave"}
      ],
      LamonLeav: [
        {label: "Select", value: "Select"}, 
        {label: "Carl Evans", value: "Carl Evans"},
        {label: "Minerva Rameriz", value: "Minerva Rameriz"}, 
        {label: "Robert Lamon", value: "Robert Lamon"}
      ],
      HalfDayOne: [
        {label: "Select", value: "Select"}, 
        {label: "Full Day", value: "Full Day"}, 
        {label: "Half Day", value: "Half Day"}
      ],
      LeavTypeOne: [
        {label: "Select", value: "Select"}, 
        {label: "Sick Leave", value: "Sick Leave"}, 
        {label: "Casual Leave", value: "Casual Leave"}
      ],
      LamonLeavOne: [
        {label: "Select", value: "Select"}, 
        {label: "Carl Evans", value: "Carl Evans"}, 
        {label: "Minerva Rameriz", value: "Minerva Rameriz"}, 
        {label: "Robert Lamon", value: "Robert Lamon"}
      ],
      FullleaveFull: [
        {label: "Select", value: "Select"}, 
        {label: "Full Day", value: "Full Day"}, 
        {label: "Half Day", value: "Half Day"}
      ],
      Fullleaveone: [
        {label: "Select", value: "Select"}, 
        {label: "Full Day", value: "Full Day"}, 
        {label: "Half Day", value: "Half Day"}
      ],
      FullleaveFUllone: [
        {label: "Select", value: "Select"}, 
        {label: "Full Day", value: "Full Day"}, 
        {label: "Half Day", value: "Half Day"}
      ],
    };
  },
  mounted() {
    this.initQuill();
  },
  methods: {
    submitForm() {
      this.$router.push("/leaves/leaves-employee");
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
