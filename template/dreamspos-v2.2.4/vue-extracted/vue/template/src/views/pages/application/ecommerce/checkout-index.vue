<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>

  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4 class="fw-bold">Checkout</h4>
            <h6>Manage your checkout</h6>
          </div>
        </div>
        <ul class="table-top-head">
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"
              ><i class="ti ti-refresh"></i
            ></a>
          </li>
          <li>
            <a
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Collapse"
              id="collapse-header"
              @click="toggleHeader"
              ><i class="ti ti-chevron-up"></i
            ></a>
          </li>
        </ul>
      </div>

      <div class="row mb-3">
        <div class="col-md-7">
          <div class="card">
            <div class="card-head border-bottom p-3">
              <h3>Billing Address</h3>
            </div>
            <div class="card-body">
              <form @submit.prevent="submitForm">
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >First Name <span class="ms-1 text-danger">*</span></label
                      >
                      <input type="text" class="form-control" required />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >Second Name <span class="ms-1 text-danger">*</span></label
                      >
                      <input type="text" class="form-control" required />
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label"
                    >Email <span class="ms-1 text-danger">*</span></label
                  >
                  <input type="email" class="form-control mb-3" required />
                </div>
                <div class="mb-3">
                  <label class="form-label"
                    >Address <span class="ms-1 text-danger">*</span></label
                  >
                  <input type="text" class="form-control mb-3" required />
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >City<span class="ms-1 text-danger">*</span></label
                      >
                      <vue-select :options="City" v-model="selected" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >State<span class="ms-1 text-danger">*</span></label
                      >
                      <vue-select :options="State" v-model="selectedOne" placeholder="Select" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >Country<span class="ms-1 text-danger">*</span></label
                      >
                      <vue-select :options="Country" v-model="selectedTwo" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >Postal Code<span class="ms-1 text-danger">*</span></label
                      >
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <div class="mb-3">
            <div class="d-flex align-items-center justify-content-between mb-2">
              <h4 class="fs-16 fw-bold">Order Details</h4>
              <div class="d-flex align-items-center bg-white p-1 rounded">
                <p class="mb-0 fs-12 text-gray-9 fw-semibold me-1">Items:</p>
                <span class="text-success fw-semibold fs-12">4</span>
              </div>
            </div>
            <table class="checkout table p-2">
              <thead>
                <tr>
                  <th class="bg-white fw-bold">Product</th>
                  <th class="bg-white fw-bold">QTY</th>
                  <th class="bg-white fw-bold">Price</th>
                  <th class="no-sort bg-white"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="checkout-edit d-flex align-items-center">
                      <p class="mb-0 fs-16 text-gray-9 fw-medium me-2">Iphone 11S</p>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-product"
                        ><vue-feather type="edit"></vue-feather
                      ></a>
                    </div>
                    <p class="mb-0">Price : $400</p>
                  </td>
                  <td>
                    <div
                      class="checkout product-quantity border-0 bg-secondary-transparent"
                    >
                      <checkout-counter></checkout-counter>
                    </div>
                  </td>
                  <td class="fw-bold">$400</td>
                  <td>
                    <div
                      class="checkout-delete edit-delete-action d-flex align-items-center"
                    >
                      <a
                        class="p-2"
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#delete"
                      >
                        <i data-feather="trash-2" class="feather-trash-2"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="checkout-edit d-flex align-items-center">
                      <p class="mb-0 fs-16 text-gray-9 fw-medium me-2">
                        Samsung Galaxy S21
                      </p>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-product"
                        ><vue-feather type="edit"></vue-feather
                      ></a>
                    </div>
                    <p class="mb-0">Price : $400</p>
                  </td>
                  <td>
                    <div
                      class="checkout product-quantity border-0 bg-secondary-transparent"
                    >
                      <checkout-counter></checkout-counter>
                    </div>
                  </td>
                  <td class="fw-bold">$400</td>
                  <td>
                    <div
                      class="checkout-delete edit-delete-action d-flex align-items-center"
                    >
                      <a
                        class="p-2"
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#delete"
                      >
                        <i data-feather="trash-2" class="feather-trash-2"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="checkout-edit d-flex align-items-center">
                      <p class="mb-0 fs-16 text-gray-9 fw-medium me-2">Red Boot Shoes</p>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-product"
                        ><vue-feather type="edit"></vue-feather
                      ></a>
                    </div>
                    <p class="mb-0">Price : $200</p>
                  </td>
                  <td>
                    <div
                      class="checkout product-quantity border-0 bg-secondary-transparent"
                    >
                      <checkout-counter></checkout-counter>
                    </div>
                  </td>
                  <td class="fw-bold">$600</td>
                  <td>
                    <div
                      class="checkout-delete edit-delete-action d-flex align-items-center"
                    >
                      <a
                        class="p-2"
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#delete"
                      >
                        <i data-feather="trash-2" class="feather-trash-2"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="checkout-edit d-flex align-items-center">
                      <p class="mb-0 fs-16 text-gray-9 fw-medium me-2">Iphone 11S</p>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-product"
                        ><vue-feather type="edit"></vue-feather
                      ></a>
                    </div>
                    <p class="mb-0">Price : $400</p>
                  </td>
                  <td>
                    <div
                      class="checkout product-quantity border-0 bg-secondary-transparent"
                    >
                      <checkout-counter></checkout-counter>
                    </div>
                  </td>
                  <td class="fw-bold">$400</td>
                  <td>
                    <div
                      class="checkout-delete edit-delete-action d-flex align-items-center"
                    >
                      <a
                        class="p-2"
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#delete"
                      >
                        <i data-feather="trash-2" class="feather-trash-2"></i>
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="mb-3 p-3 bg-white">
            <div class="card mb-0">
              <div class="card-body">
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <p class="mb-0 fs-16">Sub Total</p>
                  <p class="fs-16">$1250</p>
                </div>
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <p class="mb-0 fs-16">Shipping</p>
                  <p class="fs-16">$35</p>
                </div>
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <p class="mb-0 fs-16">Tax (15%)</p>
                  <p class="fs-16">$25</p>
                </div>
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <p class="mb-0 fs-16">Discount (5%)</p>
                  <p class="fs-16 fw-medium text-danger">-$24</p>
                </div>
              </div>
              <div class="card-footer bg-secondary-transparent">
                <div class="d-flex align-items-center justify-content-between">
                  <p class="mb-0 fs-16 text-gray-9 fw-bold">Grand Total</p>
                  <p class="fs-16 text-gray-9 fw-bold">$56590</p>
                </div>
              </div>
            </div>
          </div>

          <div class="block-section payment-method p-3 bg-white">
            <h5 class="mb-2">Select Payment</h5>
            <div class="row align-items-center justify-content-center methods g-2 mb-4">
              <div class="col-sm-6 col-md-4 col-xl d-flex">
                <a href="javascript:void(0);" class="checkout payment-item flex-fill">
                  <img src="@/assets/img/icons/cash-icon.svg" alt="img" />
                  <p class="fw-medium">Cash</p>
                </a>
              </div>
              <div class="col-sm-6 col-md-4 col-xl d-flex">
                <a href="javascript:void(0);" class="checkout payment-item flex-fill">
                  <img src="@/assets/img/icons/card.svg" alt="img" />
                  <p class="fw-medium">Card</p>
                </a>
              </div>
              <div class="col-sm-6 col-md-4 col-xl d-flex">
                <a href="javascript:void(0);" class="checkout payment-item flex-fill">
                  <img src="@/assets/img/icons/points.svg" alt="img" />
                  <p class="fw-medium">Points</p>
                </a>
              </div>
              <div class="col-sm-6 col-md-4 col-xl d-flex">
                <a href="javascript:void(0);" class="checkout payment-item flex-fill">
                  <img src="@/assets/img/icons/deposit.svg" alt="img" />
                  <p class="fw-medium">Deposit</p>
                </a>
              </div>
              <div class="col-sm-6 col-md-4 col-xl d-flex">
                <a href="javascript:void(0);" class="checkout payment-item flex-fill">
                  <img src="@/assets/img/icons/cheque.svg" alt="img" />
                  <p class="fw-medium">Cheque</p>
                </a>
              </div>
            </div>
            <div class="d-grid btn-block m-0">
              <a class="btn btn-teal" href="javascript:void(0);"> Pay : $56590.00 </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3"
    >
      <p class="mb-0 text-gray-9">2014-2025 © DreamsPOS. All Right Reserved</p>
      <p>
        Designed &amp; Developed By
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>

  <checkout-modal></checkout-modal>
</template>

<script>
export default {
  data() {
    return {
      selected: [],
      selectedOne: [],
      selectedTwo: [],
      City: [
        {label: "Select", value: "Select"}, 
        {label: "Delhi", value: "CoimDelhibatore"}, 
        {label: "Goa", value: "Goa"}, 
      ],
      State: [
        {label: "Select", value: "Select"}, 
        {label: "Tamil Nadu", value: "Tamil Nadu"}, 
        {label: "Delhi", value: "CoimDelhibatore"}, 
        {label: "Goa", value: "Goa"},
      ],
      Country: [
        {label: "Select", value: "Select"}, 
        {label: "USA", value: "USA"}, 
        {label: "India", value: "India"}, 
        {label: "England", value: "England"}, 
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/ecommerce/checkout");
    },
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
