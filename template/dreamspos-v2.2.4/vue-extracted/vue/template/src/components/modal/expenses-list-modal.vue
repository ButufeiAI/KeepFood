<template>
  <div>
    <div class="modal fade" id="add-expense">
      <div class="modal-dialog modal-dialog-centered custom-modal-two">
        <div class="modal-content">
          <div class="page-wrapper-new p-0">
            <div class="content">
              <div class="modal-header border-0 custom-modal-header">
                <div class="page-title">
                  <h4>Add Expense</h4>
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
                <div class="row">
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label">Expense Category</label>
                      <vue-select
                        :options="ChooseExpense"
                        v-model="selected"
                        placeholder="Choose"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-blocks date-group">
                      <a-date-picker v-model:value="value3" class="datetimepicker form-control" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label">Amount</label>
                      <input type="text" class="form-control" placeholder="$" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label">Reference</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label">Expense For</label>
                      <input type="text" class="form-control" />
                      <span class="unlimited-text">0 for Unlimited</span>
                    </div>
                  </div>
                  <!-- Editor -->
                  <div class="col-md-12">
                    <div class="edit-add card">
                      <div class="edit-add">
                        <label class="form-label">Description</label>
                      </div>
                      <div class="card-body-list input-blocks mb-0">
                        <textarea class="form-control"></textarea>
                      </div>
                      <p>Maximum 600 Characters</p>
                    </div>
                  </div>
                  <!-- /Editor -->
                </div>
                <div class="modal-footer-btn">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-cancel me-2"
                    data-bs-dismiss="modal"
                    >Cancel</a
                  >
                  <router-link to="/expenses/expenses-list" class="btn btn-submit"
                    >Submit</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="edit-expense">
      <div class="modal-dialog modal-dialog-centered custom-modal-two">
        <div class="modal-content">
          <div class="page-wrapper-new p-0">
            <div class="content">
              <div class="modal-header border-0 custom-modal-header">
                <div class="page-title">
                  <h4>Edit Expense</h4>
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
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">Expense Category</label>
                        <vue-select
                          :options="ChooseExpenseOne"
                          v-model="selectedOne"
                          placeholder="Employee Benefits"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="input-blocks date-group">
                        <a-date-picker v-model:value="value4" class="datetimepicker form-control" />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">Amount</label>
                        <input type="text" class="form-control" value="$550.00" />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">Reference</label>
                        <input type="text" class="form-control" value="55544" />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="mb-3 input-blocks">
                        <label class="form-label">Expense For</label>
                        <input type="text" class="form-control" />
                        <span class="unlimited-text">0 for Unlimited</span>
                      </div>
                    </div>
                    <!-- Editor -->
                    <div class="col-md-12">
                      <div class="edit-add card">
                        <div class="edit-add">
                          <label class="form-label">Description</label>
                        </div>
                        <div class="card-body-list input-blocks mb-0">
                          <textarea class="form-control">Employee Vehicle</textarea>
                        </div>
                        <p>Maximum 600 Characters</p>
                      </div>
                    </div>
                    <!-- /Editor -->
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
  </div>

  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content p-5 px-3 text-center">
            <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"
              ><i class="ti ti-trash fs-24 text-danger"></i
            ></span>
            <h4 class="fs-20 fw-bold mb-2 mt-1">Delete Expense</h4>
            <p class="mb-0 fs-16">Are you sure you want to delete expense?</p>
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
const value3 = ref();
const value4 = ref();
export default {
  data() {
    return {
      value4,
      value3,
      selected: [],
      selectedOne: "Employee Benefits",
      ChooseExpense: [
        {label: "Choose", value: "Choose"}, 
        {label: "Foods & Snacks", value: "Foods & Snacks"}, 
        {label: "Employee Benefits", value: "Employee Benefits"}
      ],
      ChooseExpenseOne: [
        {label: "Employee Benefits", value: "Employee Benefits"},
        {label: "Foods & Snacks", value: "Foods & Snacks"}, 
        {label: "Employee Benefits", value: "Employee Benefits"}
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/expenses/expenses-list");
    },
  },
};
</script>
