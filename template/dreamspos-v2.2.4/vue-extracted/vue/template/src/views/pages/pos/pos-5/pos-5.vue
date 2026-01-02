<template>  
  <pos-header></pos-header>
  <layout-sidebar></layout-sidebar>

  <div class="page-wrapper pos-pg-wrapper ms-0">
    <div class="content pos-design p-0">
      <div class="row align-items-start pos-wrapper">
        <!-- Products -->
        <div class="col-md-12 col-lg-6">
          <div class="pos-categories tabs_wrapper">
            <div
              class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4"
            >
              <div>
                <h5 class="mb-1">Welcome, Wesley Adrian</h5>
                <p>December 24, 2024</p>
              </div>
              <div class="d-flex align-items-center flex-wrap gap-3">
                <div class="input-icon-start pos-search position-relative">
                  <span class="input-icon-addon">
                    <i class="ti ti-search"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search Product"
                  />
                </div>
                <a href="#" class="btn btn-sm btn-primary">View All Categories</a>
              </div>
            </div>
            <pos5-carousel></pos5-carousel>
          </div>
        </div>
        <!-- /Products -->

        <!-- Order Details -->
        <div class="col-md-12 col-lg-6 ps-0 theiaStickySidebar">
          <aside class="product-order-list">
            <div class="customer-info">
              <div
                class="order-head bg-light d-flex align-items-center justify-content-between w-100 mb-3"
              >
                <div>
                  <h3>Order List</h3>
                  <span>Transaction ID : #65565</span>
                </div>
                <div>
                  <a class="link-danger fs-16" href="javascript:void(0);"
                    ><i class="ti ti-trash-x-filled"></i
                  ></a>
                </div>
              </div>
              <div class="row g-3">
                <div class="col-md-4">
                  <div class="input-icon-end position-relative">
                    <a-date-picker v-model:value="value1" class="datetimepicker form-control" />
                    <span class="input-icon-addon">
                      <i class="ti ti-calendar text-gray-7"></i>
                    </span>
                  </div>
                </div>
                <div class="col-md-4">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Type Ref Number"
                  />
                </div>
                <div class="col-md-4">
                  <vue-select
                    :options="ShopPro"
                    v-model="selected"
                    placeholder="Search Shop"
                  />
                </div>
                <div class="col-md-12">
                  <div class="d-flex align-items-center gap-2">
                    <div class="w-100">
                      <vue-select
                        :options="WalkCust"
                        v-model="selectedOne"
                        placeholder="Walk in Customer"
                      />
                    </div>
                    <a
                      href="#"
                      class="btn btn-primary btn-icon"
                      data-bs-toggle="modal"
                      data-bs-target="#create"
                      ><i class="ti ti-user-plus"></i
                    ></a>
                  </div>
                </div>
                <div class="col-md-6">
                  <vue-select :options="EuroUsd" v-model="selectedTwo" placeholder="USD" />
                </div>
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Currency Exchange Rate"
                  />
                </div>
              </div>
            </div>
            <div class="product-added block-section">
              <div class="d-flex align-items-center justify-content-between gap-3 mb-3">
                <h5 class="d-flex align-items-center mb-0">Order Details</h5>
                <div
                  class="badge bg-light text-gray-9 fs-12 fw-semibold py-2 border rounded"
                >
                  Items : <span class="text-teal">3</span>
                </div>
              </div>
              <div class="product-wrap">
                <div class="empty-cart">
                  <div class="mb-1">
                    <img src="@/assets/img/icons/empty-cart.svg" alt="img" />
                  </div>
                  <p class="fw-bold">No Products Selected</p>
                </div>
                <div class="product-list border-0 p-0">
                  <div class="table-responsive">
                    <table class="table table-borderless">
                      <thead>
                        <tr>
                          <th class="bg-transparent fw-bold">Product</th>
                          <th class="bg-transparent fw-bold">Batch No</th>
                          <th class="bg-transparent fw-bold">Price</th>
                          <th class="bg-transparent fw-bold">QTY</th>
                          <th class="bg-transparent fw-bold">Sub Total</th>
                          <th class="bg-transparent fw-bold text-end"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h6 class="fs-16 fw-medium mb-1">
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#products"
                                >Iphone 11S</a
                              >
                            </h6>
                            In Stock: 10
                          </td>
                          <td>
                            <input type="text" class="form-control" />
                          </td>
                          <td class="fw-bold">$400</td>
                          <td>
                            <counter-index></counter-index>
                          </td>
                          <td class="fw-bold">$400</td>
                          <td class="text-end">
                            <a
                              class="btn-icon delete-icon"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#delete"
                            >
                              <i class="ti ti-trash"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h6 class="fs-16 fw-medium mb-1">
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#products"
                                >Samsung Galaxy S21</a
                              >
                            </h6>
                            In Stock: 06
                          </td>
                          <td>
                            <input type="text" class="form-control" />
                          </td>
                          <td class="fw-bold">$400</td>
                          <td>
                            <counter-index></counter-index>
                          </td>
                          <td class="fw-bold">$400</td>
                          <td class="text-end">
                            <a
                              class="btn-icon delete-icon"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#delete"
                            >
                              <i class="ti ti-trash"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h6 class="fs-16 fw-medium mb-1">
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#products"
                                >Red Boot Shoes</a
                              >
                            </h6>
                            In Stock: 04
                          </td>
                          <td>
                            <input type="text" class="form-control" />
                          </td>
                          <td class="fw-bold">$600</td>
                          <td>
                            <counter-index></counter-index>
                          </td>
                          <td class="fw-bold">$600</td>
                          <td class="text-end">
                            <a
                              class="btn-icon delete-icon"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#delete"
                            >
                              <i class="ti ti-trash"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="block-section order-method bg-light m-0">
              <div class="order-total">
                <div class="table-responsive">
                  <table class="table table-borderless">
                    <tbody>
                      <tr>
                        <td>Sub Total</td>
                        <td class="text-end">$1250</td>
                      </tr>
                      <tr>
                        <td>
                          Shipping<a
                            href="#"
                            class="ms-3 link-default"
                            data-bs-toggle="modal"
                            data-bs-target="#shipping-cost"
                            ><i class="ti ti-edit"></i
                          ></a>
                        </td>
                        <td class="text-end">$35</td>
                      </tr>
                      <tr>
                        <td>
                          Tax<a
                            href="#"
                            class="ms-3 link-default"
                            data-bs-toggle="modal"
                            data-bs-target="#order-tax"
                            ><i class="ti ti-edit"></i
                          ></a>
                        </td>
                        <td class="text-end">$25</td>
                      </tr>
                      <tr>
                        <td>
                          Coupon<a
                            href="#"
                            class="ms-3 link-default"
                            data-bs-toggle="modal"
                            data-bs-target="#coupon-code"
                            ><i class="ti ti-edit"></i
                          ></a>
                        </td>
                        <td class="text-end">$25</td>
                      </tr>
                      <tr>
                        <td>
                          <span class="text-danger">Discount</span
                          ><a
                            href="#"
                            class="ms-3 link-default"
                            data-bs-toggle="modal"
                            data-bs-target="#discount"
                            ><i class="ti ti-edit"></i
                          ></a>
                        </td>
                        <td class="text-danger text-end">-$24</td>
                      </tr>
                      <tr>
                        <td>Grand Total</td>
                        <td class="text-end">$56590</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="row gx-2">
                <div class="col-sm-4">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-orange d-flex align-items-center justify-content-center w-100 mb-2"
                    data-bs-toggle="modal"
                    data-bs-target="#hold-order"
                    ><i class="ti ti-player-pause me-2"></i>Hold</a
                  >
                  <a
                    href="javascript:void(0);"
                    class="btn btn-secondary d-flex align-items-center justify-content-center w-100 mb-2"
                    data-bs-toggle="modal"
                    data-bs-target="#orders"
                    ><i class="ti ti-shopping-cart me-2"></i>View Orders</a
                  >
                </div>
                <div class="col-sm-4">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-info d-flex align-items-center justify-content-center w-100 mb-2"
                    ><i class="ti ti-trash me-2"></i>Void</a
                  >
                  <a
                    href="javascript:void(0);"
                    class="btn btn-indigo d-flex align-items-center justify-content-center w-100 mb-2"
                    data-bs-toggle="modal"
                    data-bs-target="#reset"
                    ><i class="ti ti-reload me-2"></i>Reset</a
                  >
                </div>
                <div class="col-sm-4">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-cyan d-flex align-items-center justify-content-center w-100 mb-2"
                    data-bs-toggle="modal"
                    data-bs-target="#payment-completed"
                    ><i class="ti ti-cash-banknote me-2"></i>Payment</a
                  >
                  <a
                    href="javascript:void(0);"
                    class="btn btn-danger d-flex align-items-center justify-content-center w-100 mb-2"
                    data-bs-toggle="modal"
                    data-bs-target="#recents"
                    ><i class="ti ti-refresh-dot me-2"></i>Transaction</a
                  >
                </div>
              </div>
            </div>
            <div class="block-section payment-method">
              <h5 class="mb-2">Select Payment</h5>
              <div
                class="row align-items-center justify-content-center methods g-2 mb-4"
              >
                <div class="col-sm-6 col-md-4 col-xl d-flex">
                  <a
                    href="javascript:void(0);"
                    class="payment-item flex-fill"
                    data-bs-toggle="modal"
                    data-bs-target="#payment-cash"
                  >
                    <img src="@/assets/img/icons/cash-icon.svg" alt="img" />
                    <p class="fw-medium">Cash</p>
                  </a>
                </div>
                <div class="col-sm-6 col-md-4 col-xl d-flex">
                  <a
                    href="javascript:void(0);"
                    class="payment-item flex-fill"
                    data-bs-toggle="modal"
                    data-bs-target="#payment-card"
                  >
                    <img src="@/assets/img/icons/card.svg" alt="img" />
                    <p class="fw-medium">Card</p>
                  </a>
                </div>
                <div class="col-sm-6 col-md-4 col-xl d-flex">
                  <a
                    href="javascript:void(0);"
                    class="payment-item flex-fill"
                    data-bs-toggle="modal"
                    data-bs-target="#payment-points"
                  >
                    <img src="@/assets/img/icons/points.svg" alt="img" />
                    <p class="fw-medium">Points</p>
                  </a>
                </div>
                <div class="col-sm-6 col-md-4 col-xl d-flex">
                  <a
                    href="javascript:void(0);"
                    class="payment-item flex-fill"
                    data-bs-toggle="modal"
                    data-bs-target="#payment-deposit"
                  >
                    <img src="@/assets/img/icons/deposit.svg" alt="img" />
                    <p class="fw-medium">Deposit</p>
                  </a>
                </div>
                <div class="col-sm-6 col-md-4 col-xl d-flex">
                  <a
                    href="javascript:void(0);"
                    class="payment-item flex-fill"
                    data-bs-toggle="modal"
                    data-bs-target="#payment-cheque"
                  >
                    <img src="@/assets/img/icons/cheque.svg" alt="img" />
                    <p class="fw-medium">Cheque</p>
                  </a>
                </div>
              </div>
              <div class="btn-block m-0">
                <a class="btn btn-teal w-100" href="javascript:void(0);">
                  Pay : $56590.00
                </a>
              </div>
            </div>
          </aside>
        </div>
        <!-- /Order Details -->
      </div>
    </div>
  </div>
  <pos5-modal></pos5-modal>
</template>
<script>
import { ref } from "vue";
const value1 = ref();
export default {
  data() {
    return {
      value1,
      selected: "Search Shop",
      selectedOne: "Walk in Customer",
      selectedTwo: "USD",
      ShopPro: [
        {label: "Search Shop", value: "Search Shop"},
        {label: "Iphone 14 64GB", value: "Iphone 14 64GB"},
        {label: "MacBook Pro", value: "MacBook Pro"},
        {label: "Rolex Tribute", value: "Rolex Tribute"},
        {label: "Red Nike Angelo", value: "Red Nike Angelo"},
        {label: "Airpod 2", value: "Airpod 2"},
        {label: "Oldest", value: "Oldest"},
      ],
      WalkCust: [
        {label: "Walk in Customer", value: "Walk in Customer"}, 
        {label: "John", value: "John"}, 
        {label: "Smith", value: "Smith"}, 
        {label: "Ana", value: "Ana"}, 
        {label: "Elza", value: "Elza"}
      ],
      EuroUsd: [
        {label: "USD", value: "USD"}, 
        {label: "EURO", value: "EURO"}
      ],
    };
  },
};
</script>
