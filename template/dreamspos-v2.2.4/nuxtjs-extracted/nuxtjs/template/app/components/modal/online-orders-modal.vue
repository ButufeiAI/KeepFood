<template>
  <!--add popup -->
  <div class="modal fade" id="add-sales-new">
    <div class="modal-dialog add-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Add Sales</h4>
          </div>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form action="#">
          <div class="card border-0">
            <div class="card-body pb-0">
              <div class="table-responsive no-pagination mb-3">
                <table class="table datanew">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Qty</th>
                      <th>Purchase Price($)</th>
                      <th>Discount($)</th>
                      <th>Tax(%)</th>
                      <th>Tax Amount($)</th>
                      <th>Unit Cost($)</th>
                      <th>Total Cost(%)</th>
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
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="row">
                <div class="col-lg-4 col-sm-6 col-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >Customer Name<span class="text-danger ms-1">*</span></label
                    >
                    <div class="row">
                      <div class="col-lg-10 col-sm-10 col-10">
                        <vue-select
                          :options="CustmSele"
                          v-model="selected"
                          placeholder="Select"
                        />
                      </div>
                      <div class="col-lg-2 col-sm-2 col-2 ps-0">
                        <div class="add-icon">
                          <a href="#" class="bg-dark text-white p-2 rounded"
                            ><vue-feather type="plus-circle" class="plus"></vue-feather
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >Date<span class="text-danger ms-1">*</span></label
                    >
                    <div class="input-groupicon calender-input">
                      <a-date-picker v-model:value="value1" class="datetimepicker form-control" />
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >Supplier<span class="text-danger ms-1">*</span></label
                    >
                    <vue-select
                      :options="SupplierSeleOne"
                      v-model="selectedOne"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-6 col-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >Product<span class="text-danger ms-1">*</span></label
                    >
                    <div class="input-groupicon select-code">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Please type product code and select"
                      />
                      <div class="addonset">
                        <img src="@/assets/img/icons/qrcode-scan.svg" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6 ms-auto">
                  <div class="total-order w-100 max-widthauto m-auto mb-4">
                    <ul class="border-1 rounded-2">
                      <li class="border-bottom">
                        <h4 class="border-end">Order Tax</h4>
                        <h5>$ 0.00</h5>
                      </li>
                      <li class="border-bottom">
                        <h4 class="border-end">Discount</h4>
                        <h5>$ 0.00</h5>
                      </li>
                      <li class="border-bottom">
                        <h4 class="border-end">Shipping</h4>
                        <h5>$ 0.00</h5>
                      </li>
                      <li class="border-bottom">
                        <h4 class="border-end">Grand Total</h4>
                        <h5>$ 0.00</h5>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-3 col-sm-6 col-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >Order Tax<span class="text-danger ms-1">*</span></label
                    >
                    <div class="input-groupicon select-code">
                      <input type="text" value="0" class="form-control p-2" />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >Discount<span class="text-danger ms-1">*</span></label
                    >
                    <div class="input-groupicon select-code">
                      <input type="text" value="0" class="form-control p-2" />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-12">
                  <div class="mb-3">
                    <label class="form-label"
                      >Shipping<span class="text-danger ms-1">*</span></label
                    >
                    <div class="input-groupicon select-code">
                      <input type="text" value="0" class="form-control p-2" />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-12">
                  <div class="mb-3 mb-5">
                    <label class="form-label"
                      >Status<span class="text-danger ms-1">*</span></label
                    >
                    <vue-select :options="StatuCom" v-model="selectedTwo" placeholder="Select" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary add-cancel me-3"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="submit" class="btn btn-primary add-sale">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /add popup -->

  <!-- details popup -->
  <div class="modal fade" id="sales-details-new">
    <div class="modal-dialog sales-details-modal">
      <div class="modal-content">
        <div class="page-header p-4 border-bottom mb-0">
          <div class="add-item d-flex align-items-center">
            <div class="page-title modal-datail">
              <h4 class="mb-0 me-2">Sales Detail</h4>
            </div>
          </div>
          <ul class="table-top-head">
            <li>
              <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"
                ><img src="@/assets/img/icons/pdf.svg" alt="img"
              /></a>
            </li>
            <li>
              <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"
                ><img src="@/assets/img/icons/printer.svg" alt="img"
              /></a>
            </li>
          </ul>
          <div class="page-btn">
            <a href="#" class="btn btn-secondary"
              ><i data-feather="arrow-left" class="me-2"></i> Back to Sales</a
            >
          </div>
        </div>

        <form action="#">
          <div class="card border-0">
            <div class="card-body pb-0">
              <div
                class="invoice-box table-height"
                style="
                  max-width: 1600px;
                  width: 100%;
                  padding: 0;
                  font-size: 14px;
                  line-height: 24px;
                  color: #555;
                "
              >
                <div class="row sales-details-items d-flex">
                  <div class="col-md-4 details-item">
                    <h6>Customer Info</h6>
                    <h4 class="mb-1">Carl Evans</h4>
                    <p class="mb-0">3103 Trainer Avenue Peoria, IL 61602</p>
                    <p class="mb-0">Email<span>carlevans241@example.com</span></p>
                    <p class="mb-0">Phone<span>+1 987 471 6589</span></p>
                  </div>
                  <div class="col-md-4 details-item">
                    <h6>Company Info</h6>
                    <h4 class="mb-1">DGT</h4>
                    <p class="mb-0">2077 Chicago Avenue Orosi, CA 93647</p>
                    <p class="mb-0">Email<span>admin@example.com</span></p>
                    <p class="mb-0">Phone<span>+1 893 174 0385</span></p>
                  </div>
                  <div class="col-md-4 details-item">
                    <h6>Invoice Info</h6>
                    <p class="mb-0">
                      Reference: <span class="fs-16 text-primary ms-2">#SL0101</span>
                    </p>
                    <p class="mb-0">
                      Reference: <span class="ms-2 text-gray-9">Dec 24, 2024</span>
                    </p>
                    <p class="mb-0">
                      Status: <span class="badge badge-success ms-2">Completed</span>
                    </p>
                    <p class="mb-0">
                      Payment Status:
                      <span
                        class="badge badge-soft-success shadow-none badge-xs d-inline-flex align-items-center ms-2"
                      >
                        <i class="ti ti-point-filled"></i>Paid</span
                      >
                    </p>
                  </div>
                </div>
                <h5 class="order-text">Order Summary</h5>
                <div class="table-responsive no-pagination mb-3">
                  <table class="table datanew">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Purchase Price($)</th>
                        <th>Discount($)</th>
                        <th>Tax(%)</th>
                        <th>Tax Amount($)</th>
                        <th>Unit Cost($)</th>
                        <th>Total Cost(%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="avatar avatar-md me-2">
                              <img
                                src="@/assets/img/products/stock-img-02.png"
                                alt="product"
                              />
                            </a>
                            <a href="javascript:void(0);">Nike Jordan</a>
                          </div>
                        </td>
                        <td>2000</td>
                        <td>500</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>1500</td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="avatar avatar-md me-2">
                              <img
                                src="@/assets/img/products/stock-img-03.png"
                                alt="product"
                              />
                            </a>
                            <a href="javascript:void(0);">Apple Series 5 Watch</a>
                          </div>
                        </td>
                        <td>3000</td>
                        <td>400</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>1700</td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="avatar avatar-md me-2">
                              <img
                                src="@/assets/img/products/stock-img-05.png"
                                alt="product"
                              />
                            </a>
                            <a href="javascript:void(0);">Lobar Handy</a>
                          </div>
                        </td>
                        <td>2500</td>
                        <td>500</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>2000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="row">
                <div class="row">
                  <div class="col-lg-6 ms-auto">
                    <div class="total-order w-100 max-widthauto m-auto mb-4">
                      <ul class="border-1 rounded-1">
                        <li class="border-bottom">
                          <h4 class="border-end">Order Tax</h4>
                          <h5>$ 0.00</h5>
                        </li>
                        <li class="border-bottom">
                          <h4 class="border-end">Discount</h4>
                          <h5>$ 0.00</h5>
                        </li>
                        <li class="border-bottom">
                          <h4 class="border-end">Grand Total</h4>
                          <h5>$ 5200.00</h5>
                        </li>
                        <li class="border-bottom">
                          <h4 class="border-end">Paid</h4>
                          <h5>$ 5200.00</h5>
                        </li>
                        <li class="border-bottom">
                          <h4 class="border-end">Due</h4>
                          <h5>$ 0.00</h5>
                        </li>
                      </ul>
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
  <!-- /details popup -->

  <!-- edit popup -->
  <div class="modal fade" id="edit-sales-new">
    <div class="modal-dialog edit-sales-modal">
      <div class="modal-content">
        <div class="page-wrapper p-0 m-0">
          <div class="content p-0">
            <div class="page-header p-4 mb-0">
              <div class="add-item new-sale-items d-flex">
                <div class="page-title">
                  <h4>Edit Sales</h4>
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
            </div>
            <form action="#">
              <div class="card border-0">
                <div class="card-body pb-0">
                  <div class="table-responsive no-pagination mb-3">
                    <table class="table datanew">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Qty</th>
                          <th>Purchase Price($)</th>
                          <th>Discount($)</th>
                          <th>Tax(%)</th>
                          <th>Tax Amount($)</th>
                          <th>Unit Cost($)</th>
                          <th>Total Cost(%)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                <img
                                  src="@/assets/img/products/stock-img-02.png"
                                  alt="product"
                                />
                              </a>
                              <a href="javascript:void(0);">Nike Jordan</a>
                            </div>
                          </td>
                          <td>
                            <div class="product-quantity bg-gray-transparent border-0">
                              <span class="quantity-btn"
                                >+<i class="ti ti-circle-plus me-1"></i
                              ></span>
                              <input
                                type="text"
                                class="quntity-input form-control bg-transparent"
                                value="2"
                              />
                              <span class="quantity-btn"
                                ><i data-feather="minus-circle" class="feather-search"></i
                              ></span>
                            </div>
                          </td>
                          <td>2000</td>
                          <td>500</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>1500</td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                <img
                                  src="@/assets/img/products/stock-img-03.png"
                                  alt="product"
                                />
                              </a>
                              <a href="javascript:void(0);">Apple Series 5 Watch</a>
                            </div>
                          </td>
                          <td>
                            <div class="product-quantity bg-gray-transparent border-0">
                              <span class="quantity-btn"
                                >+<i class="ti ti-circle-plus me-1"></i
                              ></span>
                              <input
                                type="text"
                                class="quntity-input form-control bg-transparent"
                                value="2"
                              />
                              <span class="quantity-btn"
                                ><i data-feather="minus-circle" class="feather-search"></i
                              ></span>
                            </div>
                          </td>
                          <td>3000</td>
                          <td>400</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>1700</td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                <img
                                  src="@/assets/img/products/stock-img-05.png"
                                  alt="product"
                                />
                              </a>
                              <a href="javascript:void(0);">Lobar Handy</a>
                            </div>
                          </td>
                          <td>
                            <div class="product-quantity bg-gray-transparent border-0">
                              <span class="quantity-btn"
                                >+<i class="ti ti-circle-plus me-1"></i
                              ></span>
                              <input
                                type="text"
                                class="quntity-input form-control bg-transparent"
                                value="2"
                              />
                              <span class="quantity-btn"
                                ><i data-feather="minus-circle" class="feather-search"></i
                              ></span>
                            </div>
                          </td>
                          <td>2500</td>
                          <td>500</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>2000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="row">
                    <div class="col-lg-4 col-sm-6 col-12">
                      <div class="mb-3">
                        <label class="form-label"
                          >Customer Name<span class="text-danger ms-1">*</span></label
                        >
                        <div class="row">
                          <div class="col-lg-10 col-sm-10 col-10">
                            <vue-select
                              :options="ThosNa"
                              v-model="selectedThree"
                              placeholder="Thomas"
                            />
                          </div>
                          <div class="col-lg-2 col-sm-2 col-2 ps-0">
                            <div class="add-icon">
                              <a href="#" class="bg-dark text-white p-2 rounded"
                                ><i class="ti ti-circle-plus me-1"></i
                              ></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-12">
                      <div class="mb-3">
                        <label class="form-label"
                          >Date<span class="text-danger ms-1">*</span></label
                        >
                        <div class="input-groupicon calender-input">
                          <a-date-picker v-model:value="value2" class="datetimepicker form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-12">
                      <div class="mb-3">
                        <label class="form-label"
                          >Supplier<span class="text-danger ms-1">*</span></label
                        >
                        <vue-select
                          :options="ShoNam"
                          v-model="selectedFour"
                          placeholder="Dazzle Shoes"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 col-sm-6 col-12">
                      <div class="mb-3">
                        <label class="form-label"
                          >Product Name<span class="text-danger ms-1">*</span></label
                        >
                        <div class="input-groupicon select-code">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Please type product code and select"
                          />
                          <div class="addonset">
                            <img src="@/assets/img/icons/scanners.svg" alt="img" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-6 ms-auto">
                      <div class="total-order w-100 max-widthauto m-auto mb-4">
                        <ul class="border-1 rounded-1">
                          <li class="border-bottom">
                            <h4 class="border-end">Order Tax</h4>
                            <h5>$ 0.00</h5>
                          </li>
                          <li class="border-bottom">
                            <h4 class="border-end">Discount</h4>
                            <h5>$ 0.00</h5>
                          </li>
                          <li class="border-bottom">
                            <h4 class="border-end">Shipping</h4>
                            <h5>$ 0.00</h5>
                          </li>
                          <li class="border-bottom">
                            <h4 class="border-end">Grand Total</h4>
                            <h5>$5200.00</h5>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-sm-6 col-12">
                      <div class="mb-3">
                        <label class="form-label"
                          >Order Tax<span class="text-danger ms-1">*</span></label
                        >
                        <div class="input-groupicon select-code">
                          <input type="text" class="form-control" placeholder="0" />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12">
                      <div class="mb-3">
                        <label class="form-label"
                          >Discount<span class="text-danger ms-1">*</span></label
                        >
                        <div class="input-groupicon select-code">
                          <input type="text" class="form-control" placeholder="0" />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12">
                      <div class="mb-3">
                        <label class="form-label"
                          >Shipping<span class="text-danger ms-1">*</span></label
                        >
                        <div class="input-groupicon select-code">
                          <input type="text" class="form-control" placeholder="0" />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12">
                      <div class="mb-3 mb-5">
                        <label class="form-label"
                          >Status<span class="text-danger ms-1">*</span></label
                        >
                        <select class="select">
                          <option>Choose</option>
                          <option>Completed</option>
                          <option>Inprogress</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="mb-3">
                        <label class="form-label"
                          >Notes<span class="text-danger ms-1">*</span></label
                        >
                        <textarea class="form-control"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary add-cancel me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" class="btn btn-primary add-sale">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /edit popup -->

  <!-- show payment Modal -->
  <div class="modal fade" id="showpayment">
    <div class="modal-dialog modal-dialog-centered stock-adjust-modal">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Show Payments</h4>
          </div>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-lg-12">
              <div class="modal-body-table total-orders p-0">
                <div class="table-responsive rounded">
                  <table class="table datatable">
                    <thead class="thead-light">
                      <tr>
                        <th>Date</th>
                        <th>Reference</th>
                        <th>Amount</th>
                        <th>Paid By</th>
                        <th class="no-sort"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>19 Jan 2023</td>
                        <td>INV/SL0101</td>
                        <td>$1500</td>
                        <td>Cash</td>
                        <td>
                          <div class="edit-delete-action d-flex align-items-center">
                            <a
                              class="me-3 p-2 border rounded d-flex align-items-center"
                              href="javascript:void(0);"
                            >
                              <i data-feather="printer" class="feather-rotate-ccw"></i>
                            </a>
                            <a
                              class="me-3 p-2 border rounded d-flex align-items-center"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#editpayment"
                            >
                              <i data-feather="edit" class="feather-edit"></i>
                            </a>
                            <a
                              class="p-2 border rounded d-flex align-items-center"
                              href="javascript:void(0);"
                            >
                              <i data-feather="trash-2" class="feather-trash-2"></i>
                            </a>
                          </div>
                        </td>
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
  <!-- show payment Modal -->

  <!-- Create payment Modal -->
  <div class="modal fade" id="createpayment">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Create Payments</h4>
          </div>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form action="#">
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">
                    Date<span class="text-danger ms-1">*</span></label
                  >
                  <div class="input-groupicon calender-input">
                    <a-date-picker v-model:value="value3" class="datetimepicker form-control" />
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-sm-12 col-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Reference<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 col-sm-12 col-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Received Amount<span class="text-danger ms-1">*</span></label
                  >
                  <div class="input-groupicon doller-input">
                    <i data-feather="dollar-sign" class="info-img"></i>
                    <input type="text" class="form-control ps-4" />
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-12 col-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Paying Amount<span class="text-danger ms-1">*</span></label
                  >
                  <div class="input-groupicon doller-input">
                    <i data-feather="dollar-sign" class="info-img"></i>
                    <input type="text" class="form-control ps-4" />
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-12 col-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Payment type<span class="text-danger ms-1">*</span></label
                  >
                  <vue-select :options="OnliCash" v-model="selectedFive" placeholder="Select" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label">Description</label>
                  <div id="summernote">
                    <div class="editor pages-editor">
                      <div class="editor three-line">
                        <div class="editor-container">
                          <div ref="editorRef" class="quill-editor" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>Maximum 60 Characters</p>
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
  <!-- Create payment Modal -->

  <!-- edit payment Modal -->
  <div class="modal fade" id="editpayment">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Edit Payments</h4>
          </div>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form action="#">
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Date<span class="text-danger ms-1">*</span></label
                  >
                  <div class="input-groupicon calender-input">
                    <a-date-picker v-model:value="value4" class="datetimepicker form-control" />
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-sm-12 col-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Reference<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" value="INV/SL0101" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 col-sm-12 col-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Received Amount<span class="text-danger ms-1">*</span></label
                  >
                  <div class="input-groupicon calender-input">
                    <i data-feather="dollar-sign" class="info-img"></i>
                    <input type="text" class="form-control" value="1500" />
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-12 col-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Paying Amount<span class="text-danger ms-1">*</span></label
                  >
                  <div class="input-groupicon calender-input">
                    <i data-feather="dollar-sign" class="info-img"></i>
                    <input type="text" class="form-control" value="1500" />
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-12 col-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Payment type<span class="text-danger ms-1">*</span></label
                  >
                  <vue-select :options="ProgrSel" v-model="selectedSix" placeholder="Cash" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3 summer-description-box transfer">
                  <label class="form-label">Description</label>
                  <div id="summernote2">
                    <div class="editor pages-editor">
                      <div class="editor three-line">
                        <div class="editor-container">
                          <div ref="editorRefOne" class="quill-editor" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p>Maximum 60 Characters</p>
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
  <!-- edit payment Modal -->

  <!-- Delete -->
  <div class="modal fade modal-default" id="delete">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body p-0">
          <div class="success-wrap text-center">
            <form action="#">
              <div class="icon-success bg-danger-transparent text-danger mb-2">
                <i class="ti ti-trash"></i>
              </div>
              <h3 class="mb-2">Delete Sale</h3>
              <p class="fs-16 mb-3">Are you sure you want to delete sale?</p>
              <div
                class="d-flex align-items-center justify-content-center gap-2 flex-wrap"
              >
                <button
                  type="button"
                  class="btn btn-md btn-secondary"
                  data-bs-dismiss="modal"
                >
                  No, Cancel
                </button>
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
import {ref} from 'vue';
const value1 = ref();
const value2 = ref();
const value3 = ref();
const value4 = ref();
import Quill from "quill";
import "quill/dist/quill.snow.css";

export default {
  data() {
    return {
      selected: [],
      selectedOne: [],
      selectedTwo: [],
      selectedThree: "Thomas",
      selectedFour: "Dazzle Shoes",
      selectedFive: [],
      selectedSix: "Cash",
      SupplierSele: [
        {label: "Select", value: "Select"}, 
        {label: "Supplier Name", value: "Supplier Name"}
      ],
      SupplierSeleOne: [
        {label: "Select", value: "Select"}, 
        {label: "Supplier Name", value: "Supplier Name"}
      ],
      CustmSele: [
        {label: "Select", value: "Select"}, 
        {label: "Customer Name", value: "Customer Name"}
      ],
      StatuCom: [
        {label: "Select", value: "Select"}, 
        {label: "Completed", value: "Completed"}, 
        {label: "Inprogress", value: "Inprogress"}, 
      ],
      ThosNa: [
        {label: "Thomas", value: "Thomas"}, 
        {label: "Name", value: "Name"}, 
      ],
      ShoNam: [
        {label: "Dazzle Shoes", value: "Dazzle Shoes"}, 
        {label: "Supplier Name", value: "Supplier Name"}
      ],
      OnliCash: [
        {label: "Select", value: "Select"}, 
        {label: "Online", value: "Online"}, 
        {label: "Cash", value: "Cash"}, 
      ],
      ProgrSel: [
        {label: "Cash", value: "Cash"}, 
        {label: "Online", value: "Online"}, 
        {label: "Inprogress", value: "Inprogress"}, 
      ],
      value1,
      value2,
      value3,
      value4,
    };
  },
  mounted() {
    this.initQuill();
  },
  methods: {
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
