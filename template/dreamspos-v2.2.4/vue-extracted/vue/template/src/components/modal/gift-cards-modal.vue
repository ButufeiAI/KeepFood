<template>
  <!-- Add gift -->
  <div class="modal fade" id="add-units">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header">
              <div class="page-title">
                <h4>Add Gift Card</h4>
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
            <div class="modal-body">
              <form @submit.prevent="submitForm">
                <div class="mb-3">
                  <label class="form-label"
                    >Gift Card<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>

                <div class="mb-3 add-product">
                  <div class="add-newplus">
                    <label class="form-label"
                      >Customer<span class="text-danger ms-1">*</span></label
                    >
                    <a href="javascript:void(0);"
                      ><i class="ti ti-circle-plus me-1"></i
                      ><span>Add New</span></a
                    >
                  </div>
                  <vue-select
                    :options="Customer"
                    v-model="selected"
                    placeholder="Choose"
                  />
                </div>

                <div class="row">
                  <div class="col-md-6 col-12 mb-2">
                    <div class="mb-3">
                      <label class="form-label"
                        >Issued Date<span class="text-danger ms-1">*</span></label
                      >

                      <div class="input-groupicon calender-input">
                        <a-date-picker v-model:value="value1" class="datetimepicker form-control p-2" />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-12 mb-2">
                    <div class="mb-3">
                      <label class="form-label"
                        >Expiry Date<span class="text-danger ms-1">*</span></label
                      >

                      <div class="input-groupicon calender-input">
                        <a-date-picker v-model:value="value2" class="datetimepicker form-control" />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 col-12 mb-2">
                    <div class="mb-3">
                      <label class="form-label"
                        >Amount<span class="text-danger ms-1">*</span></label
                      >
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6 col-12 mb-2">
                    <div class="mb-3">
                      <label class="form-label"
                        >Balance<span class="text-danger ms-1">*</span></label
                      >
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>

                <div class="mb-0">
                  <div
                    class="status-toggle modal-status d-flex justify-content-between align-items-center"
                  >
                    <span class="status-label">Status</span>
                    <input type="checkbox" id="user2" class="check" />
                    <label for="user2" class="checktoggle"></label>
                  </div>
                </div>
              </form>
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
                Add Gift Card
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add gift -->

  <!-- Edit gift -->
  <div class="modal fade" id="edit-units">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header">
              <div class="page-title">
                <h4>Edit Gift Card</h4>
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
            <div class="modal-body">
              <form @submit.prevent="submitForm">
                <div class="mb-3">
                  <label class="form-label"
                    >Gift Card<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" value="GFT1110" />
                </div>

                <div class="mb-3 add-product">
                  <div class="add-newplus">
                    <label class="form-label"
                      >Customer<span class="text-danger ms-1">*</span></label
                    >
                    <a href="javascript:void(0);"
                      ><i class="ti ti-circle-plus me-1"></i
                      ><span>Add New</span></a
                    >
                  </div>
                  <vue-select
                    :options="Customers"
                    v-model="selectedOne"
                    placeholder="Carl Evans"
                  />
                </div>

                <div class="row">
                  <div class="col-md-6 col-12 mb-2">
                    <div class="mb-3">
                      <label class="form-label"
                        >Issued Date<span class="text-danger ms-1">*</span></label
                      >

                      <div class="input-groupicon calender-input">
                        <a-date-picker v-model:value="value1" class="datetimepicker form-control" />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-12 mb-2">
                    <div class="mb-3">
                      <label class="form-label"
                        >Expiry Date<span class="text-danger ms-1">*</span></label
                      >

                      <div class="input-groupicon calender-input">
                        <a-date-picker v-model:value="value2" class="datetimepicker form-control" />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 col-12 mb-2">
                    <div class="mb-3">
                      <label class="form-label"
                        >Amount<span class="text-danger ms-1">*</span></label
                      >
                      <input type="text" class="form-control" value="$200" />
                    </div>
                  </div>
                  <div class="col-md-6 col-12 mb-2">
                    <div class="mb-3">
                      <label class="form-label"
                        >Balance<span class="text-danger ms-1">*</span></label
                      >
                      <input type="text" class="form-control" value="$100" />
                    </div>
                  </div>
                </div>

                <div class="mb-0">
                  <div
                    class="status-toggle modal-status d-flex justify-content-between align-items-center"
                  >
                    <span class="status-label">Status</span>
                    <input type="checkbox" id="user3" class="check" />
                    <label for="user3" class="checktoggle"></label>
                  </div>
                </div>
              </form>
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
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit gift -->

  <!-- gift card details -->
  <div class="modal fade" id="gift-card-details">
    <div class="modal-dialog modal-dialog-centered gift-card-details">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header">
              <div class="page-title">
                <h4>Gift Card Details</h4>
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
            <div class="modal-body">
              <div class="gift-card-header border p-3 rounded-1 bg-light">
                <div class="row row-gap-3">
                  <div class="col-6 col-sm-4 col-md-3">
                    <p class="mb-0 fw-medium text-gray-9">Gift Card</p>
                    <p>GFT1110</p>
                  </div>
                  <div class="col-6 col-sm-4 col-md-3">
                    <p class="mb-0 fw-medium text-gray-9">Amount</p>
                    <p>$200</p>
                  </div>
                  <div class="col-6 col-sm-4 col-md-3">
                    <p class="mb-0 fw-medium text-gray-9">Balance</p>
                    <p>$100</p>
                  </div>
                  <div class="col-6 col-sm-4 col-md-3">
                    <p class="mb-0 fw-medium text-gray-9">Customer</p>
                    <div class="userimgname d-flex align-items-center">
                      <span class="avatar avatar-sm">
                        <a href="javascript:void(0);" class="product-img w-75">
                          <img src="@/assets/img/users/user-33.png" alt="user" />
                        </a>
                      </span>
                      <a href="javascript:void(0);">Carl Evans</a>
                    </div>
                  </div>
                  <div class="col-6 col-sm-4 col-md-3">
                    <p class="mb-0 fw-medium text-gray-9">Issued Date</p>
                    <p>24 Dec 2024</p>
                  </div>
                  <div class="col-6 col-sm-4 col-md-3">
                    <p class="mb-0 fw-medium text-gray-9">Expiry Date</p>
                    <p>24 Jan 2025</p>
                  </div>
                  <div class="col-6 col-sm-4 col-md-3">
                    <p class="mb-0 fw-medium text-gray-9">Issued By</p>
                    <p>Admin</p>
                  </div>
                  <div class="col-6 col-sm-4 col-md-3">
                    <p class="mb-0 fw-medium text-gray-9">Status</p>
                    <span class="p-1 pe-2 rounded-1 text-white bg-success fs-10"
                      ><i class="ti ti-point-filled me-1 fs-11"></i>Active</span
                    >
                  </div>
                </div>
              </div>
              <div class="gift-card-body mt-3">
                <h4>Transaction Details</h4>
                <div class="table-responsive no-pagination mt-2">
                  <table class="table datatable border">
                    <thead class="thead-light">
                      <tr>
                        <th>
                          Date<i class="ti ti-arrows-up-down fs-11 fw-medium ms-1"></i>
                        </th>
                        <th>Transaction Type</th>
                        <th>Store</th>
                        <th>
                          Amount<i class="ti ti-arrows-up-down fs-11 fw-medium ms-1"></i>
                        </th>
                        <th>
                          Balance<i class="ti ti-arrows-up-down fs-11 fw-medium ms-1"></i>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="p-3">16 Jan 2025</td>
                        <td class="p-3">Purchase</td>
                        <td class="p-3">Electro Mart</td>
                        <td class="p-3">$75</td>
                        <td class="p-3">$100</td>
                      </tr>
                      <tr>
                        <td class="p-3">04 Jan 2025</td>
                        <td class="p-3">Refund</td>
                        <td class="p-3">Online</td>
                        <td class="p-3">$25</td>
                        <td class="p-3">$175</td>
                      </tr>
                      <tr>
                        <td class="p-3">26 Dec 2024</td>
                        <td class="p-3">Purchase</td>
                        <td class="p-3">Gadget World</td>
                        <td class="p-3">$50</td>
                        <td class="p-3">$150</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- gift card details -->

  <!-- delete modal -->
  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content p-5 px-3 text-center">
            <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"
              ><i class="ti ti-trash fs-24 text-danger"></i
            ></span>
            <h4 class="fs-20 fw-bold mb-2 mt-1">Delete Gift Card</h4>
            <p class="mb-0 fs-16">Are you sure you want to delete gift card?</p>
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

export default {
  data() {
    return {
      value1,
      value2,
      selected: [],
      selectedOne: "Carl Evans",
      Customer: [
        {label: "Choose", value: "Choose"}, 
        {label: "Lenovo", value: "Lenovo"}, 
        {label: "Electronics", value: "Electronics"}, 
      ],
      Customers: [
        {label: "Carl Evans", value: "Carl Evans"},
        {label: "Minerva Rameriz", value: "Minerva Rameriz"},
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/gift-cards");
    },
  },
};
</script>
