<template>
  <!-- Add Department -->
  <div class="modal fade" id="add-department">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Add Payroll</h4>
          </div>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-6 col-12">
                <div class="mb-3">
                  <label class="form-label">Select Employee <span>*</span></label>
                  <vue-select :options="Choopayli" v-model="selected" placeholder="Choose" />
                </div>
              </div>
              <div class="text-title">
                <h5 class="mb-2">Salary Information</h5>
              </div>
              <div class="mb-3">
                <label class="form-label">Basic Salary <span>*</span></label>
                <input type="text" class="text-form form-control" />
              </div>
              <div class="mb-3 pb-3 border-bottom">
                <p class="fw-semibold text-gray-9 mb-2">Status</p>
                <div class="d-flex align-items-center">
                  <div class="form-check me-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="Radio"
                      id="Radio-sm1"
                      checked
                    />
                    <label class="form-check-label" for="Radio-sm1"> Paid </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="Radio"
                      id="Radio-sm2"
                    />
                    <label class="form-check-label" for="Radio-sm2"> Unpaid </label>
                  </div>
                </div>
              </div>
              <div class="payroll-title">
                <p class="fw-semibold text-gray-9 mb-2">Allowances</p>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="mb-3">
                  <label class="form-label">HRA Allowance <span>*</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="mb-3">
                  <label class="form-label">Conveyance <span>*</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="mb-3">
                  <label class="form-label">Medical Allowance <span>*</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="mb-3">
                  <label class="form-label">Bonus <span>*</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="d-flex align-items-end border-bottom mb-3">
                <div class="mb-3 flex-grow-1">
                  <label class="form-label">Others</label>
                  <input type="text" class="text-form form-control" />
                </div>
                <div class="subadd-btn mb-3 ms-3">
                  <a href="#" class="btn btn-icon btn-secondary btn-add"
                    ><i class="ti ti-circle-plus fs-16"></i
                  ></a>
                </div>
              </div>
              <div class="payroll-title">
                <p class="fw-semibold text-gray-9 mb-2">Deductions</p>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="mb-3">
                  <label class="form-label">PF <span>*</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="mb-3">
                  <label class="form-label">Professional Tax <span>*</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="mb-3">
                  <label class="form-label">TDS <span>*</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="mb-3">
                  <label class="form-label">Loans & Others <span>*</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="d-flex align-items-end border-bottom mb-3">
                <div class="mb-3 flex-grow-1">
                  <label class="form-label">Others</label>
                  <input type="text" class="text-form form-control" />
                </div>
                <div class="subadd-btn mb-3 ms-3">
                  <a href="#" class="btn btn-icon btn-secondary btn-add"
                    ><i class="ti ti-circle-plus fs-16"></i
                  ></a>
                </div>
              </div>
              <div class="payroll-title">
                <p class="fw-semibold text-gray-9 mb-2">Deductions</p>
              </div>
              <div class="col-lg-4 col-sm-6 col-12">
                <div class="mb-3">
                  <label class="form-label">Total Allowance <span>*</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 col-12">
                <div class="mb-3">
                  <label class="form-label">Total Deduction <span>*</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 col-12">
                <div class="mb-3">
                  <label class="form-label">Net Salary <span>*</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="d-flex align-items-center justify-content-end">
                  <button type="button" class="btn btn-previw me-2">Preview</button>
                  <button type="button" class="btn btn-reset me-2">Reset</button>
                  <button type="submit" class="btn btn-save">Save</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Department -->

  <!-- Edit Department -->
  <div class="modal fade" id="edit-department">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Edit Payroll</h4>
          </div>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-6 col-12">
                <div class="mb-3">
                  <label class="form-label">Select Employee <span>*</span></label>
                  <vue-select
                    :options="ChoopayliOne"
                    v-model="selectedOne"
                    placeholder="Choose"
                  />
                </div>
              </div>
              <div class="text-title">
                <h5 class="mb-2">Salary Information</h5>
              </div>
              <div class="mb-3">
                <label class="form-label">Basic Salary <span>*</span></label>
                <input type="text" class="text-form form-control" />
              </div>
              <div class="mb-3 pb-3 border-bottom">
                <p class="fw-semibold text-gray-9 mb-2">Status</p>
                <div class="d-flex align-items-center">
                  <div class="form-check me-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="Radio"
                      id="Radio-sm3"
                      checked
                    />
                    <label class="form-check-label" for="Radio-sm3"> Paid </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="Radio"
                      id="Radio-sm4"
                    />
                    <label class="form-check-label" for="Radio-sm4"> Unpaid </label>
                  </div>
                </div>
              </div>
              <div class="payroll-title">
                <p class="fw-semibold text-gray-9 mb-2">Allowances</p>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="mb-3">
                  <label class="form-label">HRA Allowance <span>*</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="mb-3">
                  <label class="form-label">Conveyance <span>*</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="mb-3">
                  <label class="form-label">Medical Allowance <span>*</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="mb-3">
                  <label class="form-label">Bonus <span>*</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="d-flex align-items-end border-bottom mb-3">
                <div class="mb-3 flex-grow-1">
                  <label class="form-label">Others</label>
                  <input type="text" class="text-form form-control" />
                </div>
                <div class="subadd-btn mb-3 ms-3">
                  <a href="#" class="btn btn-icon btn-secondary btn-add"
                    ><i class="ti ti-circle-plus fs-16"></i
                  ></a>
                </div>
              </div>
              <div class="payroll-title">
                <p class="fw-semibold text-gray-9 mb-2">Deductions</p>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="mb-3">
                  <label class="form-label">PF <span>*</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="mb-3">
                  <label class="form-label">Professional Tax <span>*</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="mb-3">
                  <label class="form-label">TDS <span>*</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-12">
                <div class="mb-3">
                  <label class="form-label">Loans & Others <span>*</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="d-flex align-items-end border-bottom mb-3">
                <div class="mb-3 flex-grow-1">
                  <label class="form-label">Others</label>
                  <input type="text" class="text-form form-control" />
                </div>
                <div class="subadd-btn mb-3 ms-3">
                  <a href="#" class="btn btn-icon btn-secondary btn-add"
                    ><i class="ti ti-circle-plus fs-16"></i
                  ></a>
                </div>
              </div>
              <div class="payroll-title">
                <p class="fw-semibold text-gray-9 mb-2">Deductions</p>
              </div>
              <div class="col-lg-4 col-sm-6 col-12">
                <div class="mb-3">
                  <label class="form-label">Total Allowance <span>*</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 col-12">
                <div class="mb-3">
                  <label class="form-label">Total Deduction <span>*</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 col-12">
                <div class="mb-3">
                  <label class="form-label">Net Salary <span>*</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="d-flex align-items-center justify-content-end">
                  <button type="button" class="btn btn-previw me-2">Preview</button>
                  <button type="button" class="btn btn-reset me-2">Reset</button>
                  <button type="submit" class="btn btn-save">Save</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Edit Department -->

  <!-- delete modal -->
  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content p-5 px-3 text-center">
            <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"
              ><i class="ti ti-trash fs-24 text-danger"></i
            ></span>
            <h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Employee Salary</h4>
            <p class="text-gray-6 mb-0 fs-16">
              Are you sure you want to delete employee salary?
            </p>
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
      selectedOne: [],
      Choopayli: [
        {label: "Choose", value: "Choose"}, 
        {label: "Computers", value: "Computers"}
      ],
      ChoopayliOne: [
        {label: "Choose", value: "Choose"}, 
        {label: "Computers", value: "Computers"}
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/payroll/employee-salary");
    },
  },
};
</script>
