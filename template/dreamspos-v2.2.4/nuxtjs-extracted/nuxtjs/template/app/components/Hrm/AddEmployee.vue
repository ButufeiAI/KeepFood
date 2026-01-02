<template>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4>Add Employee</h4>
            <h6>Create new Employee</h6>
          </div>
        </div>
        <ul class="table-top-head">
          <li class="me-2">
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"
              ><i class="ti ti-refresh"></i
            ></a>
          </li>
          <li class="me-2">
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" @click="toggleHeader"><i class="ti ti-chevron-up"></i></a>
          </li>
          <li>
            <div class="page-btn">
              <NuxtLink to="/hrm/employees-list" class="btn btn-secondary w-100"
                ><vue-feather type="arrow-left" class="me-2"></vue-feather>Back to
                List</NuxtLink
              >
            </div>
          </li>
        </ul>
      </div>
      <!-- /product list -->
      <form action="#">
        <div class="accordion-card-one accordion" id="accordionExample">
          <div class="accordion-item">
            <div class="accordion-header p-3" id="headingOne">
              <div
                class="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-controls="collapseOne"
              >
                <div
                  class="addproduct-icon d-flex align-items-center justify-content-between flex-fill"
                >
                  <h5 class="d-inline-flex align-items-center">
                    <i class="ti ti-users text-primary me-2"></i
                    ><span>Employee Information</span>
                  </h5>
                  <a href="javascript:void(0);"
                    ><i data-feather="chevron-down" class="chevron-down-add"></i
                  ></a>
                </div>
              </div>
            </div>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div class="new-employee-field">
                  <div class="profile-pic-upload">
                    <div class="profile-pic">
                      <span
                        ><i class="ti ti-circle-plus me-1"></i> Profile
                        Photo</span
                      >
                    </div>
                    <div class="input-blocks mb-0">
                      <div class="image-upload mb-0">
                        <input type="file" />
                        <div class="image-uploads">
                          <h4>Change Image</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >First Name<span class="text-danger ms-1">*</span></label
                        >
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Last Name<span class="text-danger ms-1">*</span></label
                        >
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Email<span class="text-danger ms-1">*</span></label
                        >
                        <input type="email" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Contact Number<span class="text-danger ms-1">*</span></label
                        >
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Emp Code<span class="text-danger ms-1">*</span></label
                        >
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="input-blocks">
                        <label class="form-label"
                          >Date of Birth<span class="text-danger ms-1">*</span></label
                        >
                        <div class="input-groupicon calender-input">
                          <a-date-picker v-model:value="value1" class="datetimepicker form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Gender<span class="text-danger ms-1">*</span></label
                        >
                        <vue-select
                          :options="Empmale"
                          v-model="selected"
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Nationality<span class="text-danger ms-1">*</span></label
                        >
                        <vue-select :options="EmpNat" v-model="selectedOne" placeholder="Choose" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="input-blocks">
                        <label>Joining Date<span class="text-danger ms-1">*</span></label>
                        <div class="input-groupicon calender-input">
                          <a-date-picker v-model:value="value1" class="datetimepicker form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <div class="add-newplus">
                          <label class="form-label"
                            >Shift<span class="text-danger ms-1">*</span></label
                          >
                          <a href="#"
                            ><span
                              ><vue-feather
                                type="plus-circle"
                                class="plus-down-add"
                              ></vue-feather
                              >Add new</span
                            ></a
                          >
                        </div>
                        <vue-select :options="ChoEmp" v-model="selectedTwo" placeholder="Choose" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Department<span class="text-danger ms-1">*</span></label
                        >
                        <vue-select :options="DepEmp" v-model="selectedThree" placeholder="Choose" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Designation<span class="text-danger ms-1">*</span></label
                        >
                        <vue-select :options="DesEmp" v-model="selectedFour" placeholder="Choose" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Blood Group<span class="text-danger ms-1">*</span></label
                        >
                        <vue-select
                          :options="BloodEmp"
                          v-model="selectedFive"
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                  </div>
                  <!-- Editor -->
                  <div class="col-lg-12">
                    <div class="input-blocks summer-description-box transfer mb-3">
                      <label>About</label>
                      <div id="summernote">
                        <div class="editor pages-editor">
                          <div class="editor three-line">
                            <div class="editor-container">
                              <div ref="editorRef" class="quill-editor" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <p class="mt-1">Maximum 60 Characters</p>
                    </div>
                  </div>
                  <!-- /Editor -->
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <div class="accordion-header p-3" id="headingThree">
              <div
                class="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-controls="collapseThree"
              >
                <div
                  class="addproduct-icon d-flex align-items-center justify-content-between flex-fill"
                >
                  <h5 class="d-inline-flex align-items-center">
                    <i data-feather="map-pin" class="feather-edit text-primary me-2"></i
                    ><span>Address Information</span>
                  </h5>
                  <a href="javascript:void(0);"
                    ><i data-feather="chevron-down" class="chevron-down-add"></i
                  ></a>
                </div>
              </div>
            </div>
            <div
              id="collapseThree"
              class="accordion-collapse collapse show"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div class="other-info">
                  <div class="row">
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Address</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Country</label>
                        <vue-select
                          :options="ChooseEmpCou"
                          v-model="selectedSix"
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">State</label>
                        <vue-select
                          :options="ChooseEmpSta"
                          v-model="selectedSeven"
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">City</label>
                        <vue-select
                          :options="ChooseEmpCity"
                          v-model="selectedEight"
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Zipcode</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <div class="accordion-header p-3" id="heading4">
              <div
                class="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-controls="collapseFour"
              >
                <div
                  class="addproduct-icon d-flex align-items-center justify-content-between flex-fill"
                >
                  <h5 class="d-inline-flex align-items-center">
                    <i data-feather="info" class="feather-edit text-primary me-2"></i
                    ><span>Emergency Information</span>
                  </h5>
                  <a href="javascript:void(0);"
                    ><i data-feather="chevron-down" class="chevron-down-add"></i
                  ></a>
                </div>
              </div>
            </div>
            <div
              id="collapseFour"
              class="accordion-collapse collapse show"
              aria-labelledby="heading4"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div class="other-info">
                  <div class="row">
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Emergency Contact Number 1</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Relation</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Name</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Emergency Contact Number 2</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Relation</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Name</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <div class="accordion-header p-3" id="heading5">
              <div
                class="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-controls="collapseFive"
              >
                <div
                  class="addproduct-icon d-flex align-items-center justify-content-between flex-fill"
                >
                  <h5 class="d-inline-flex align-items-center">
                    <i class="ti ti-building-bank feather-edit text-primary me-2"></i
                    ><span>Bank Information</span>
                  </h5>
                  <a href="javascript:void(0);"
                    ><i data-feather="chevron-down" class="chevron-down-add"></i
                  ></a>
                </div>
              </div>
            </div>
            <div
              id="collapseFive"
              class="accordion-collapse collapse show"
              aria-labelledby="heading5"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div class="other-info">
                  <div class="row">
                    <div class="col-lg-3 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Bank Name</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Account Number</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">IFSC</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Branch</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <div class="accordion-header p-3" id="heading6">
              <div
                class="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-controls="collapseTwo"
              >
                <div
                  class="addproduct-icon d-flex align-items-center justify-content-between flex-fill"
                >
                  <h5 class="d-inline-flex align-items-center">
                    <i data-feather="info" class="feather-edit text-primary me-2"></i
                    ><span>Password</span>
                  </h5>
                  <a href="javascript:void(0);"
                    ><i data-feather="chevron-down" class="chevron-down-add"></i
                  ></a>
                </div>
              </div>
            </div>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse show"
              aria-labelledby="heading6"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div class="pass-info">
                  <div class="row">
                    <div class="col-lg-4 col-md-6"> 
                      <div class="input-blocks mb-md-0 mb-sm-3">
                        <label>Password</label>
                        <div class="pass-group">
                          <input :type="showPassword ? 'text' : 'password'" class="form-control pass-input" />
                          <span class="toggle-password" @click="toggleShow">
                            <i :class="{ 'fas fa-eye': showPassword, 'fas fa-eye-slash': !showPassword, }"
                            ></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6"> 
                      <div class="input-blocks mb-0">
                        <label>Confirm Password</label>
                        <div class="pass-group">
                          <input :type="showPassword1 ? 'text' : 'password'" class="form-control pass-inputa" />
                          <span class="toggle-passworda" @click="toggleShow1">
                            <i :class="{ 'fas fa-eye': showPassword1, 'fas fa-eye-slash': !showPassword1, }"
                            ></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /product list -->

        <div class="text-end mb-3">
          <button type="button" class="btn btn-secondary me-2">Cancel</button>
          <button type="submit" class="btn btn-primary">Add Employee</button>
        </div>
      </form>
    </div>

    <div
      class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3"
    >
      <p class="mb-0">
        {{ new Date().getFullYear() }} &copy; DreamsPOS. All Right Reserved
      </p>
      <p>
        Designed &amp; Developed By
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
const value1 = ref();
const value2 = ref();
import Quill from "quill";
import "quill/dist/quill.snow.css";

export default {
  data() {
    return {
      selected: [],
      selectedOne: [],
      selectedTwo: [],
      selectedThree: [],
      selectedFour: [],
      selectedFive: [],
      selectedSix: [],
      selectedSeven: [],
      selectedEight: [],
      ChooseEmpCou: [
        {label: "Choose", value: "Choose"}, 
        {label: "United Kingdom", value: "United Kingdom"}, 
        {label: "USA", value: "USA"}, 
      ],
      BloodEmp: [
        {label: "Choose", value: "Choose"}, 
        {label: "A+", value: "A+"}, 
        {label: "A-", value: "A-"}, 
        {label: "B+", value: "B+"}, 
        {label: "B-", value: "B-"}, 
        {label: "O+", value: "O+"}, 
        {label: "AB+", value: "AB+"}, 
        {label: "AB-", value: "AB-"}, 
      ],
      DesEmp: [
        {label: "Choose", value: "Choose"}, 
        {label: "Designer", value: "Designer"}, 
        {label: "Developer", value: "Developer"}, 
        {label: "Tester", value: "Tester"}, 
      ],
      DepEmp: [
        {label: "Choose", value: "Choose"}, 
        {label: "UI/UX", value: "UI/UX"}, 
        {label: "Support", value: "Support"}, 
        {label: "HR", value: "HR"}, 
        {label: "Enginnering", value: "Enginnering"}, 
      ],
      ChoEmp: [
        {label: "Choose", value: "Choose"}, 
        {label: "Regular", value: "Regular"}, 
      ],
      EmpNat: [
        {label: "Choose", value: "Choose"}, 
      ],
      Empmale: [
        {label: "Choose", value: "Choose"}, 
        {label: "Male", value: "Male"}, 
        {label: "Female", value: "Female"},
      ],
      ChooseEmpCity: [
        {label: "Choose", value: "Choose"}, 
        {label: "Los Angeles", value: "Los Angeles"}, 
        {label: "New Jersey", value: "New Jersey"}, 
      ],
      ChooseEmpSta: [
        {label: "Choose", value: "Choose"}, 
        {label: "California", value: "California"}, 
        {label: "Paris", value: "Paris"}
      ],
      value1,
      value2,
      showPassword: false,
      showPassword1: false,
    };
  },
  mounted() {
    this.initQuill();
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
    },
    buttonLabel1() {
      return this.showPassword1 ? "Hide" : "Show";
    },
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    toggleShow1() {
      this.showPassword1 = !this.showPassword1;
    },
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
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

      quill.on("text-change", () => {
        this.content = quill.root.innerHTML;
      });
    },
  },
};
</script>
