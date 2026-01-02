<template>
  <!-- Add Adjustment -->
  <div class="modal fade" id="add-units">
    <div class="modal-dialog modal-dialog-centered stock-adjust-modal">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title">
                <h4>Add Adjustment</h4>
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
                <div class="input-blocks search-form">
                  <label>Product</label>
                  <input type="text" class="form-control" />
                  <vue-feather type="search"></vue-feather>
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="input-blocks">
                      <label>Warehouse</label>
                      <vue-select :options="Quaint" v-model="selected" placeholder="Choose" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-blocks">
                      <label>Reference Number</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="modal-body-table">
                      <div class="table-responsive">
                        <table class="table datanew">
                          <thead>
                            <tr>
                              <th>Product</th>
                              <th>SKU</th>
                              <th>Category</th>
                              <th>Qty</th>
                              <th>Type</th>
                              <th class="no-sort">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div class="productimgname">
                                  <a
                                    href="javascript:void(0);"
                                    class="product-img stock-img"
                                  >
                                    <img
                                      src="@/assets/img/products/stock-img-02.png"
                                      alt="product"
                                    />
                                  </a>
                                  <a href="javascript:void(0);">Nike Jordan</a>
                                </div>
                              </td>
                              <td>PT002</td>
                              <td>Nike</td>
                              <td>
                                <div class="product-quantity">
                                  <span class="quantity-btn"
                                    ><i
                                      data-feather="minus-circle"
                                      class="feather-search"
                                    ></i
                                  ></span>
                                  <input type="text" class="quntity-input" value="2" />
                                  <span class="quantity-btn"
                                    >+<i
                                      data-feather="plus-circle"
                                      class="plus-circle"
                                    ></i
                                  ></span>
                                </div>
                              </td>
                              <td>
                                <vue-select
                                  :options="Addition"
                                  v-model="selectedOne"
                                  placeholder="Addition"
                                />
                              </td>
                              <td class="action-table-data">
                                <div class="edit-delete-action">
                                  <a
                                    class="me-2 p-2"
                                    href="javascript:void(0);"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit-units"
                                  >
                                    <i data-feather="edit" class="feather-edit"></i>
                                  </a>
                                  <a
                                    class="confirm-text p-2"
                                    @click="showConfirmation"
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
                  <div class="col-lg-12">
                    <div class="input-blocks">
                      <label>Responsible Person</label>
                      <vue-select :options="Gravely" v-model="selectedTwo" placeholder="Choose" />
                    </div>
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="input-blocks summer-description-box">
                    <label>Notes</label>
                    <textarea class="form-control"></textarea>
                  </div>
                </div>
                <div class="modal-footer-btn">
                  <button
                    type="button"
                    class="btn btn-cancel me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="submit" class="btn btn-submit">Create Adjustment</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Adjustment -->

  <!-- Edit Adjustment -->
  <div class="modal fade" id="edit-units">
    <div class="modal-dialog modal-dialog-centered stock-adjust-modal">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title">
                <h4>Edit Adjustment</h4>
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
                <div class="input-blocks search-form">
                  <label>Product</label>
                  <input type="text" class="form-control" value="Nike Jordan" />
                  <vue-feather type="search"></vue-feather>
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="input-blocks">
                      <label>Warehouse</label>
                      <vue-select :options="Handy" v-model="selectedThree" placeholder="Lobar Handy" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-blocks">
                      <label>Reference Number</label>
                      <input type="text" class="form-control" value="PT002" />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="modal-body-table">
                      <div class="table-responsive">
                        <table class="table">
											<thead>
												<tr>
													<th>Product</th>
													<th>SKU</th>
													<th>Category</th>
													<th>Qty</th>
													<th>Type</th>
													<th></th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<div class="d-flex align-items-center">
															<a href="javascript:void(0);" class="avatar avatar-md me-2">
																<img src="@/assets/img/products/stock-img-02.png" alt="product">
															</a>
															<a href="javascript:void(0);">Nike Jordan</a>
														</div>												
													</td>
													<td>PT002</td>
													<td>Nike</td>
													<td>
														<div class="product-quantity border-0 bg-gray-transparent">
															<span class="quantity-btn" @click="decrementQuantity"><vue-feather type="minus-circle" class="feather-search"></vue-feather></span>
															<input type="text" class="quntity-input bg-transparent" v-model.number="editQuantity">
															<span class="quantity-btn" @click="incrementQuantity">+<vue-feather type="plus-circle" class="plus-circle"></vue-feather></span>
														</div>
													</td>
													<td>
														<div class="edit-delete-action d-flex align-items-center">
															<a class="p-2 border rounded d-flex align-items-center" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete">
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
                  <div class="col-lg-12">
                    <div class="input-blocks">
                      <label>Responsible Person</label>
                      <vue-select
                        :options="Gravely"
                        v-model="selectedFive"
                        placeholder="Steven"
                      />
                    </div>
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="input-blocks summer-description-box">
                    <label>Notes</label>
                    <textarea class="form-control">
The Jordan brand is owned by Nike (owned by the Knight family), as, at the time, the company was building its strategy to work with athletes to launch shows that could inspire consumers.Although Jordan preferred Converse and Adidas, they simply could not match the offer Nike made. </textarea
                    >
                  </div>
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
  <!-- /Edit Adjustment -->

  <!-- View Notes -->
  <div class="modal fade" id="view-notes">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title">
                <h4>Notes</h4>
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
              <p>
                The Jordan brand is owned by Nike (owned by the Knight family), as, at the
                time, the company was building its strategy to work with athletes to
                launch shows that could inspire consumers.Although Jordan preferred
                Converse and Adidas, they simply could not match the offer Nike made.
                Jordan also signed with Nike because he loved the way they wanted to
                market him with the banned colored shoes. Nike promised to cover the fine
                Jordan would receive from the NBA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /View Notes -->

  <!-- Delete -->
  <div class="modal fade modal-default" id="delete">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body p-0">
          <div class="success-wrap text-center">
            <form @submit.prevent="submitForm">
              <div class="icon-success bg-danger-transparent text-danger mb-2">
                <i class="ti ti-trash"></i>
              </div>
              <h3 class="mb-2">Delete Stock Adjustment</h3>
              <p class="fs-16 mb-3">Are you sure you want to delete stock adjustment?</p>
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
export default {
  data() {
    return {
      selected: [],
      selectedOne: "Addition",
      selectedTwo: [],
      selectedThree: "Lobar Handy",
      selectedFour: "Addition",
      selectedFive: "Steven",
      editQuantity: 2,
      Quaint: [
        {label: "Choose", value: "Choose"}, 
        {label: "Lobar Handy", value: "Lobar Handy"}, 
        {label: "Quaint Warehouse", value: "Quaint Warehouse"}
      ],
      Addition: [
        {label: "Addition", value: "Addition"}, 
        {label: "Addition", value: "Addition"}, 
        {label: "Addition", value: "Addition"}, 
      ],
      Gravely: [
        {label: "Choose", value: "Choose"}, 
        {label: "Steven", value: "Steven"}, 
        {label: "Gravely", value: "Gravely"}, 
      ],
      Handy: [
        {label: "Lobar Handy", value: "Lobar Handy"}, 
        {label: "Quaint Warehouse", value: "Quaint Warehouse"}
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/stock/stock-adjustment");
    },
    incrementQuantity() {
      this.editQuantity = (this.editQuantity || 0) + 1;
    },
    decrementQuantity() {
      if (this.editQuantity > 0) {
        this.editQuantity = this.editQuantity - 1;
      }
    },
  },
};
</script>
