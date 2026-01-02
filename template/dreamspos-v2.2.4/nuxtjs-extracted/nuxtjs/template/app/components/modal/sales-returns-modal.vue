<template>
  <!-- add popup -->
  <div class="modal fade" id="add-sales-new">
    <div class="modal-dialog add-centered">
      <div class="modal-content">
        <div class="page-wrapper p-0 m-0">
          <div class="content p-0">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title">
                <h4>Add Sales Return</h4>
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
            <div class="card">
              <div class="card-body">
                <form @submit.prevent="submitForm">
                  <div class="row">
                    <div class="col-lg-4 col-sm-6 col-12">
                      <div class="input-blocks">
                        <label class="form-label">Customer Name</label>
                        <div class="row">
                          <div class="col-lg-10 col-sm-10 col-10">
                            <vue-select
                              :options="Bruklin"
                              v-model="selected"
                              placeholder="Choose Customer"
                            />
                          </div>
                          <div class="col-lg-2 col-sm-2 col-2 ps-0">
                            <div class="add-icon">
                              <a href="javascript:void(0);" class="choose-add"
                                ><vue-feather
                                  type="plus-circle"
                                  class="plus"
                                ></vue-feather
                              ></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-12">
                      <div class="input-blocks">
                        <label>Date</label>
                        <div class="input-groupicon calender-input">
                          <vue-feather type="calendar" class="info-img"></vue-feather>
                          <a-date-picker v-model:value="value1" class="datetimepicker form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-12">
                      <div class="input-blocks">
                        <label class="form-label">Reference No.</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-12 col-sm-6 col-12">
											<div class="mb-3">
												<label class="form-label">Product<span class="text-danger ms-1">*</span></label>
												<div class="input-groupicon select-code">
													<input type="text" class="form-control" placeholder="Please type product code and select">
													<div class="addonset">
														<img src="@/assets/img/icons/qrcode-scan.svg" alt="img">
													</div>
												</div>
											</div>
										</div>
                  </div>
                  <div class="table-responsive no-pagination">
                    <table class="table datanew">
                      <thead>
                        <tr>
                          <th>Product Name</th>
                          <th>Net Unit Price($)</th>
                          <th>Stock</th>
                          <th>QTY</th>
                          <th>Discount($)</th>
                          <th>Tax %</th>
                          <th>Subtotal ($)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div class="row">
                    <div class="col-lg-6 ms-auto">
                      <div class="total-order w-100 max-widthauto m-auto mb-4">
                        <ul>
                          <li>
                            <h4>Order Tax</h4>
                            <h5>$ 0.00</h5>
                          </li>
                          <li>
                            <h4>Discount</h4>
                            <h5>$ 0.00</h5>
                          </li>
                          <li>
                            <h4>Shipping</h4>
                            <h5>$ 0.00</h5>
                          </li>
                          <li>
                            <h4>Grand Total</h4>
                            <h5>$ 0.00</h5>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-sm-6 col-12">
											<div class="mb-3">
												<label class="form-label">Order Tax<span class="text-danger ms-1">*</span></label>
												<div class="input-groupicon select-code">
													<input type="text" value="0" class="form-control p-2">
												</div>
												
											</div>
										</div>
										<div class="col-lg-3 col-sm-6 col-12">
											<div class="mb-3">
												<label class="form-label">Discount<span class="text-danger ms-1">*</span></label>
												<div class="input-groupicon select-code">
													<input type="text" value="0" class="form-control p-2">
												</div>
											</div>
										</div>
										<div class="col-lg-3 col-sm-6 col-12">
											<div class="mb-3">
												<label class="form-label">Shipping<span class="text-danger ms-1">*</span></label>
												<div class="input-groupicon select-code">
													<input type="text" value="0" class="form-control p-2">
												</div>
											</div>
										</div>
                    <div class="col-lg-3 col-sm-6 col-12">
                      <div class="input-blocks mb-5">
                        <label>Status</label>
                        <vue-select
                          :options="Received"
                          v-model="selectedOne"
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 text-end">
                      <button
                        type="button"
                        class="btn btn-cancel add-cancel me-3"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button type="submit" class="btn btn-submit add-sale">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /add popup -->

  <!-- Edit popup -->
  <div class="modal fade" id="edit-sales-new">
    <div class="modal-dialog add-centered">
      <div class="modal-content">
        <div class="page-wrapper p-0 m-0">
          <div class="content p-0">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title">
                <h4>Add Sales Return</h4>
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
            <div class="card">
              <div class="card-body">
                <form @submit.prevent="submitForm">
                  <div class="row">
                    <div class="col-lg-4 col-sm-6 col-12">
                      <div class="input-blocks">
                        <label class="form-label">Customer Name</label>
                        <div class="row">
                          <div class="col-lg-10 col-sm-10 col-10">
                            <vue-select
                              :options="Benjamin"
                              v-model="selectedTwo"
                              placeholder="Thomas"
                            />
                          </div>
                          <div class="col-lg-2 col-sm-2 col-2 ps-0">
                            <div class="add-icon">
                              <a href="javascript:void(0);" class="choose-add"
                                ><vue-feather
                                  type="plus-circle"
                                  class="plus"
                                ></vue-feather
                              ></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-12">
                      <div class="input-blocks">
                        <label>Date</label>
                        <div class="input-groupicon calender-input">
                          <vue-feather type="calendar" class="info-img"></vue-feather>
                          <a-date-picker v-model:value="value1" class="datetimepicker form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-12">
                      <div class="input-blocks">
                        <label class="form-label">Reference No.</label>
                        <input type="text" class="form-control" value="555444" />
                      </div>
                    </div>
                    <div class="col-lg-12 col-sm-6 col-12">
											<div class="mb-3">
												<label class="form-label">Product<span class="text-danger ms-1">*</span></label>
												<div class="input-groupicon select-code">
													<input type="text" class="form-control" placeholder="Please type product code and select">
													<div class="addonset">
														<img src="@/assets/img/icons/qrcode-scan.svg" alt="img">
													</div>
												</div>
											</div>
										</div>
                  </div>
                  <div class="table-responsive no-pagination">
                    <table class="table datanew">
                      <thead>
                        <tr>
                          <th>Product Name</th>
                          <th>Net Unit Price($)</th>
                          <th>Stock</th>
                          <th>QTY</th>
                          <th>Discount($)</th>
                          <th>Tax %</th>
                          <th>Subtotal ($)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="productimgname">
                              <a href="javascript:void(0);" class="product-img">
                                <img
                                  src="@/assets/img/products/product6.jpg"
                                  alt="product"
                                />
                              </a>
                              <a href="javascript:void(0);">Apple Earpods</a>
                            </div>
                          </td>
                          <td>300</td>
                          <td>400</td>
                          <td>500</td>
                          <td>100</td>
                          <td>50</td>
                          <td>300</td>
                        </tr>
                        <tr>
                          <td>
                            <div class="productimgname">
                              <a href="javascript:void(0);" class="product-img">
                                <img
                                  src="@/assets/img/products/product7.jpg"
                                  alt="product"
                                />
                              </a>
                              <a href="javascript:void(0);">Apple Earpods</a>
                            </div>
                          </td>
                          <td>150</td>
                          <td>500</td>
                          <td>300</td>
                          <td>100</td>
                          <td>50</td>
                          <td>300</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div class="row">
                    <div class="col-lg-6 ms-auto">
                      <div class="total-order w-100 max-widthauto m-auto mb-4">
                        <ul>
                          <li>
                            <h4>Order Tax</h4>
                            <h5>$ 0.00</h5>
                          </li>
                          <li>
                            <h4>Discount</h4>
                            <h5>$ 0.00</h5>
                          </li>
                          <li>
                            <h4>Shipping</h4>
                            <h5>$ 0.00</h5>
                          </li>
                          <li>
                            <h4>Grand Total</h4>
                            <h5>$ 0.00</h5>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-sm-6 col-12">
											<div class="mb-3">
												<label class="form-label">Order Tax<span class="text-danger ms-1">*</span></label>
												<div class="input-groupicon select-code">
													<input type="text" value="0" class="form-control p-2">
												</div>
												
											</div>
										</div>
										<div class="col-lg-3 col-sm-6 col-12">
											<div class="mb-3">
												<label class="form-label">Discount<span class="text-danger ms-1">*</span></label>
												<div class="input-groupicon select-code">
													<input type="text" value="0" class="form-control p-2">
												</div>
											</div>
										</div>
										<div class="col-lg-3 col-sm-6 col-12">
											<div class="mb-3">
												<label class="form-label">Shipping<span class="text-danger ms-1">*</span></label>
												<div class="input-groupicon select-code">
													<input type="text" value="0" class="form-control p-2">
												</div>
											</div>
										</div>
                    <div class="col-lg-3 col-sm-6 col-12">
                      <div class="input-blocks mb-5">
                        <label>Status</label>
                        <vue-select
                          :options="Received"
                          v-model="selectedThree"
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 text-end">
                      <button
                        type="button"
                        class="btn btn-cancel add-cancel me-3"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button type="submit" class="btn btn-submit add-sale">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit popup -->

   <!-- Delete -->
  <div class="modal fade modal-default" id="delete">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body p-0">
          <div class="success-wrap text-center">
            <form>
              <div class="icon-success bg-danger-transparent text-danger mb-2">
                <i class="ti ti-trash"></i>
              </div>
              <h3 class="mb-2">Delete Sales Return</h3>
              <p class="fs-16 mb-3">Are you sure you want to delete sales return?</p>
              <div class="d-flex align-items-center justify-content-center gap-2 flex-wrap">
                <button type="button" class="btn btn-md btn-secondary" data-bs-dismiss="modal">No, Cancel</button>
                <button type="submit" class="btn btn-md btn-primary">Yes, Delete</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete -->
</template>

<script>
import { ref } from "vue";
const value1 = ref();
export default {
  data() {
    return {
      value1,
      selected: [],
      selectedOne: [],
      selectedTwo: [],
      selectedThree: [],
      Bruklin: [
        {label: "Choose Customer", value: "Choose Customer"}, 
        {label: "Thomas", value: "Thomas"}, 
        {label: "Benjamin", value: "Benjamin"}, 
        {label: "Bruklin", value: "Bruklin"}
      ],
      Received: [
        {label: "Choose", value: "Choose"}, 
        {label: "Pending", value: "Pending"}, 
        {label: "Received", value: "Received"}, 
      ],
      Benjamin: [
        {label: "Thomas", value: "Thomas"}, 
        {label: "Benjamin", value: "Benjamin"}, 
        {label: "Bruklin", value: "Bruklin"}
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/sale/sale-returns");
    },
  },
};
</script>
