<template>
  <!-- Add discount plan-->
  <div class="modal fade" id="add-units">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Add Discount</h4>
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
        <form @submit.prevent="submitForm">
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-4">
                <div class="mb-3">
                  <label class="form-label"
                    >Discount Name <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="mb-3">
                  <label class="form-label"
                    >Discount Plan <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="Discountplan"
                    v-model="selected"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="mb-3">
                  <label class="form-label"
                    >Applicable For <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="Applicable"
                    v-model="selectedOne"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="mb-3">
                  <label class="form-label"
                    >Valid From <span class="text-danger">*</span></label
                  >

                  <div class="input-groupicon calender-input">
                    <a-date-picker v-model:value="value1" class="datetimepicker form-control p-2" />
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="mb-3">
                  <label class="form-label"
                    >Valid Till <span class="text-danger">*</span></label
                  >

                  <div class="input-groupicon calender-input">
                    <a-date-picker v-model:value="value2" class="datetimepicker form-control p-2" />
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="mb-3">
                  <label class="form-label"
                    >Discount Type <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="Discounttype"
                    v-model="selectedTwo"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div>
                  <label class="form-label"
                    >Valid on Following Days <span class="text-danger">*</span></label
                  >
                  <div class="d-flex align-items-center flex-wrap row-gap-3">
                    <div class="form-check form-check-md d-flex align-items-center me-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkebox-md"
                        checked=""
                      />
                      <label class="form-check-label" for="checkebox-md"> Monday </label>
                    </div>
                    <div class="form-check form-check-md d-flex align-items-center me-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkebox-md1"
                      />
                      <label class="form-check-label" for="checkebox-md1">
                        Tuesday
                      </label>
                    </div>
                    <div class="form-check form-check-md d-flex align-items-center me-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkebox-md2"
                      />
                      <label class="form-check-label" for="checkebox-md2">
                        Wednesday
                      </label>
                    </div>
                    <div class="form-check form-check-md d-flex align-items-center me-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkebox-md3"
                      />
                      <label class="form-check-label" for="checkebox-md3">
                        Thursday
                      </label>
                    </div>
                    <div class="form-check form-check-md d-flex align-items-center me-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkebox-md4"
                      />
                      <label class="form-check-label" for="checkebox-md4"> Friday </label>
                    </div>
                    <div class="form-check form-check-md d-flex align-items-center me-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkebox-md5"
                      />
                      <label class="form-check-label" for="checkebox-md5">
                        Saturday
                      </label>
                    </div>
                    <div class="form-check form-check-md d-flex align-items-center">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkebox-md6"
                      />
                      <label class="form-check-label" for="checkebox-md6"> Sunday </label>
                    </div>
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
              Add Discount Plan
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add discount plan -->

  <!-- Edit discount plan -->
  <div class="modal fade" id="edit-units">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Edit Discount</h4>
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
        <form @submit.prevent="submitForm">
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-4">
                <div class="mb-3">
                  <label class="form-label"
                    >Discount Name <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="mb-3">
                  <label class="form-label"
                    >Discount Plan <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="Discountplan"
                    v-model="selectedThree"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="mb-3">
                  <label class="form-label"
                    >Applicable For <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="Applicable"
                    v-model="selectedFour"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="mb-3">
                  <label class="form-label"
                    >Valid From <span class="text-danger">*</span></label
                  >

                  <div class="input-groupicon calender-input">
                    <a-date-picker v-model:value="value3" class="datetimepicker form-control p-2" />
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="mb-3">
                  <label class="form-label"
                    >Valid Till <span class="text-danger">*</span></label
                  >

                  <div class="input-groupicon calender-input">
                    <a-date-picker v-model:value="value4" class="datetimepicker form-control p-2" />
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="mb-3">
                  <label class="form-label"
                    >Discount Type <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="Discounttype"
                    v-model="selectedFive"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div>
                  <label class="form-label"
                    >Valid on Following Days <span class="text-danger">*</span></label
                  >
                  <div class="d-flex align-items-center flex-wrap row-gap-3">
                    <div class="form-check form-check-md d-flex align-items-center me-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkebox-md7"
                        checked=""
                      />
                      <label class="form-check-label" for="checkebox-md7"> Monday </label>
                    </div>
                    <div class="form-check form-check-md d-flex align-items-center me-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkebox-md8"
                      />
                      <label class="form-check-label" for="checkebox-md8">
                        Tuesday
                      </label>
                    </div>
                    <div class="form-check form-check-md d-flex align-items-center me-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkebox-md9"
                      />
                      <label class="form-check-label" for="checkebox-md9">
                        Wednesday
                      </label>
                    </div>
                    <div class="form-check form-check-md d-flex align-items-center me-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkebox-md10"
                      />
                      <label class="form-check-label" for="checkebox-md10">
                        Thursday
                      </label>
                    </div>
                    <div class="form-check form-check-md d-flex align-items-center me-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkebox-md11"
                      />
                      <label class="form-check-label" for="checkebox-md11">
                        Friday
                      </label>
                    </div>
                    <div class="form-check form-check-md d-flex align-items-center me-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkebox-md12"
                      />
                      <label class="form-check-label" for="checkebox-md12">
                        Saturday
                      </label>
                    </div>
                    <div class="form-check form-check-md d-flex align-items-center">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkebox-md13"
                      />
                      <label class="form-check-label" for="checkebox-md13">
                        Sunday
                      </label>
                    </div>
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
  <!-- /Edit discount plan -->

  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content p-5 px-3 text-center">
            <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"
              ><i class="ti ti-trash fs-24 text-danger"></i
            ></span>
            <h4 class="fs-20 fw-bold mb-2 mt-1">Delete Discount</h4>
            <p class="mb-0 fs-16">Are you sure you want to delete discount?</p>
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
import { ref } from "vue";
const value1 = ref();
const value2 = ref();
const value3 = ref();
const value4 = ref();
export default {
  data() {
    return {
      value1,
      value2,
      value3,
      value4,
      selected: [],
      selectedOne: [],
      selectedTwo: [],
      selectedThree: [],
      selectedFour: [],
      selectedFive: [],
      Discountplan: [
        {label: "Select", value: "Select"}, 
        {label: "Standard", value: "Standard"}, 
        {label: "Membership", value: "Membership"}, 
      ],
      Applicable: [
        {label: "Select", value: "Select"}, 
        {label: "All Customers", value: "All Customers"}, 
      ],
      Discounttype: [
        {label: "Select", value: "Select"}, 
        {label: "Rupess", value: "Rupess"}, 
        {label: "Percentage", value: "Percentage"}, 
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/discount/discount-list");
    },
  },
};
</script>
