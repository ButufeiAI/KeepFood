<template>
  <!-- Add Plan -->
  <div class="modal fade" id="add_plans">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add New Plan</h4>
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
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-md-12">
                <div
                  class="d-flex align-items-center flex-wrap row-gap-3 bg-light w-100 rounded p-3 mb-4"
                >
                  <div
                    class="d-flex align-items-center justify-content-center avatar avatar-xxl rounded-circle border border-dashed me-2 flex-shrink-0 text-dark frames"
                  >
                    <img
                      src="@/assets/img/profiles/avatar-30.jpg"
                      alt="img"
                      class="rounded-circle"
                    />
                  </div>
                  <div class="profile-upload">
                    <div class="mb-2">
                      <h6 class="mb-1">Upload Profile Image</h6>
                      <p class="fs-12">Image should be below 4 mb</p>
                    </div>
                    <div class="profile-uploader d-flex align-items-center">
                      <div class="drag-upload-btn btn btn-sm btn-primary me-2">
                        Upload
                        <input type="file" class="form-control image-sign" multiple="" />
                      </div>
                      <a href="javascript:void(0);" class="btn btn-secondary btn-sm"
                        >Cancel</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Plan Name<span class="text-danger"> *</span></label
                  >
                  <vue-select :options="PlanName" v-model="selected" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Plan Type<span class="text-danger"> *</span></label
                  >
                  <vue-select :options="PlanType" v-model="selectedOne" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Plan Position<span class="text-danger"> *</span></label
                  >
                  <vue-select
                    :options="PlanPosition"
                    v-model="selectedTwo"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Plan Currency<span class="text-danger"> *</span></label
                  >
                  <vue-select
                    :options="PlanCurrency"
                    v-model="selectedThree"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <div class="d-flex justify-content-between">
                    <label class="form-label"
                      >Plan Currency<span class="text-danger"> *</span></label
                    >
                    <span class="text-primary"
                      ><i class="fa-solid fa-circle-exclamation me-2"></i>Set 0 for
                      free</span
                    >
                  </div>
                  <vue-select :options="PlanFree" v-model="selectedFour" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-3">
                <div class="mb-3">
                  <label class="form-label"
                    >Discount Type<span class="text-danger"> *</span></label
                  >
                  <div class="pass-group">
                    <vue-select
                      :options="DiscountType"
                      v-model="selectedFive"
                      placeholder="Select"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="mb-3">
                  <label class="form-label"
                    >Discount<span class="text-danger"> *</span></label
                  >
                  <div class="pass-group">
                    <input type="text" class="form-control" />
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="mb-3">
                  <label class="form-label">Limitations Invoices</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-3">
                <div class="mb-3">
                  <label class="form-label">Max Customers</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-3">
                <div class="mb-3">
                  <label class="form-label">Product</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-3">
                <div class="mb-3">
                  <label class="form-label">Supplier</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <h6>Plan Modules</h6>
                  <div class="form-check d-flex align-items-center">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Select All
                    </label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Employees
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Invoices
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Reports
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Contacts
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Clients
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Estimates
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Goals
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Deals
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Projects
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Payments
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Assets
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Leads
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Tickets
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Taxes
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Activities
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Pipelines
                    </label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 me-2 text-dark fw-medium">
                      Access Trial
                    </label>
                    <div class="form-check form-switch me-2">
                      <input
                        class="form-check-input me-2"
                        type="checkbox"
                        role="switch"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row align-items-center gx-3">
                <div class="col-md-4">
                  <div class="d-flex align-items-center mb-3">
                    <div class="flex-fill">
                      <label class="form-label">Trial Days</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="d-block align-items-center ms-3">
                    <label class="form-check-label mt-0 me-2 text-dark">
                      Is Recommended
                    </label>
                    <div class="form-check form-switch me-2">
                      <input
                        class="form-check-input me-2"
                        type="checkbox"
                        role="switch"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="mb-3">
                    <label class="form-label"
                      >Status<span class="text-danger"> *</span></label
                    >
                    <vue-select
                      :options="Status"
                      v-model="selectedSix"
                      placeholder="Select"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Description</label>
                  <textarea class="form-control"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Add Plan</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Plan -->

  <!-- Edit Plan -->
  <div class="modal fade" id="edit_plans">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Plan</h4>
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
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-md-12">
                <div
                  class="d-flex align-items-center flex-wrap row-gap-3 bg-light w-100 rounded p-3 mb-4"
                >
                  <div
                    class="d-flex align-items-center justify-content-center avatar avatar-xxl rounded-circle border border-dashed me-2 flex-shrink-0 text-dark frames"
                  >
                    <img
                      src="@/assets/img/profiles/avatar-30.jpg"
                      alt="img"
                      class="rounded-circle"
                    />
                  </div>
                  <div class="profile-upload">
                    <div class="mb-2">
                      <h6 class="mb-1">Upload Profile Image</h6>
                      <p class="fs-12">Image should be below 4 mb</p>
                    </div>
                    <div class="profile-uploader d-flex align-items-center">
                      <div class="drag-upload-btn btn btn-sm btn-primary me-2">
                        Upload
                        <input type="file" class="form-control image-sign" multiple="" />
                      </div>
                      <a href="javascript:void(0);" class="btn btn-secondary btn-sm"
                        >Cancel</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Plan Name<span class="text-danger"> *</span></label
                  >
                  <vue-select
                    :options="PlanName"
                    v-model="selectedSeven"
                    placeholder="Advanced"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Plan Type<span class="text-danger"> *</span></label
                  >
                  <vue-select
                    :options="PlanType"
                    v-model="selectedEight"
                    placeholder="Monthly"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Plan Position<span class="text-danger"> *</span></label
                  >
                  <vue-select
                    :options="PlanPosition"
                    v-model="selectedNine"
                    placeholder="1"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Plan Currency<span class="text-danger"> *</span></label
                  >
                  <vue-select
                    :options="PlanCurrency"
                    v-model="selectedTen"
                    placeholder="EURO"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <div class="d-flex justify-content-between">
                    <label class="form-label"
                      >Plan Currency<span class="text-danger"> *</span></label
                    >
                    <span class="text-primary"
                      ><i class="fa-solid fa-circle-exclamation me-2"></i>Set 0 for
                      free</span
                    >
                  </div>
                  <vue-select :options="PlanFree" v-model="selectedEleven" placeholder="Fixed" />
                </div>
              </div>
              <div class="col-md-3">
                <div class="mb-3">
                  <label class="form-label"
                    >Discount Type<span class="text-danger"> *</span></label
                  >
                  <div class="pass-group">
                    <vue-select
                      :options="DiscountType"
                      v-model="selectedTwelve"
                      placeholder="Percentage"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="mb-3">
                  <label class="form-label"
                    >Discount<span class="text-danger"> *</span></label
                  >
                  <div class="pass-group">
                    <input type="text" class="form-control" />
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="mb-3">
                  <label class="form-label">Limitations Invoices</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-3">
                <div class="mb-3">
                  <label class="form-label">Max Customers</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-3">
                <div class="mb-3">
                  <label class="form-label">Product</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-3">
                <div class="mb-3">
                  <label class="form-label">Supplier</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <h6>Plan Modules</h6>
                  <div class="form-check d-flex align-items-center">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Select All
                    </label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Employees
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Invoices
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Reports
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Contacts
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Clients
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Estimates
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Goals
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Deals
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Projects
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Payments
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Assets
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Leads
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Tickets
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Taxes
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Activities
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Pipelines
                    </label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 me-2 text-dark fw-medium">
                      Access Trial
                    </label>
                    <div class="form-check form-switch me-2">
                      <input
                        class="form-check-input me-2"
                        type="checkbox"
                        role="switch"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row align-items-center gx-3">
                <div class="col-md-4">
                  <div class="d-flex align-items-center mb-3">
                    <div class="flex-fill">
                      <label class="form-label">Trial Days</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="d-block align-items-center ms-3">
                    <label class="form-check-label mt-0 me-2 text-dark">
                      Is Recommended
                    </label>
                    <div class="form-check form-switch me-2">
                      <input
                        class="form-check-input me-2"
                        type="checkbox"
                        role="switch"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="mb-3">
                    <label class="form-label"
                      >Status<span class="text-danger"> *</span></label
                    >
                    <vue-select
                      :options="Status"
                      v-model="selectedThirteen"
                      placeholder="Active"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Description</label>
                  <textarea class="form-control"></textarea>
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
  <!-- /Edit Plan -->

  <!-- Delete Modal -->
  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content p-5 px-3 text-center">
            <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>
            <h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Package</h4>
            <p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete package?</p>
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
      selectedFour: [],
      selectedFive: [],
      selectedSix: [],
      selectedSeven: "Advanced",
      selectedEight: "Monthly",
      selectedNine: "1",
      selectedTen: "EURO",
      selectedEleven: "Fixed",
      selectedTwelve: "Percentage",
      selectedThirteen: "Active",
      PlanName: [
        {label: "Select", value: "Select"}, 
        {label: "Advanced", value: "Advanced"}, 
        {label: "Basic", value: "Basic"}, 
        {label: "Enterprise", value: "Enterprise"}, 
      ],
      PlanType: [
        {label: "Select", value: "Select"}, 
        {label: "Monthly", value: "Monthly"}, 
        {label: "Yearly", value: "Yearly"}, 
      ],
      PlanPosition: [
        {label: "Select", value: "Select"}, 
        {label: "1", value: "1"}, 
        {label: "2", value: "2"}, 
        {label: "3", value: "3"}, 
      ],
      PlanCurrency: [
        {label: "Select", value: "Select"}, 
        {label: "USD", value: "USD"}, 
        {label: "EURO", value: "EURO"}, 
      ],
      PlanFree: [
        {label: "Select", value: "Select"}, 
        {label: "Fixed", value: "Fixed"}, 
        {label: "Percentage", value: "Percentage"}, 
      ],
      DiscountType: [
        {label: "Select", value: "Select"}, 
        {label: "Fixed", value: "Fixed"}, 
        {label: "Percentage", value: "Percentage"},
      ],
      Status: [
        {label: "Select", value: "Select"}, 
        {label: "Active", value: "Active"}, 
        {label: "Inactive", value: "Inactive"},
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/super-admin/packages");
    },
  },
};
</script>
