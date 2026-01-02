<template>
  <!-- Add Stock -->
  <div class="modal fade" id="add-units">
    <div class="modal-dialog modal-dialog-centered stock-adjust-modal">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title">
                <h4>Add Stock</h4>
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
                    <div class="input-blocks">
                      <label>Warehouse</label>
                      <vue-select :options="Choose" v-model="selected" placeholder="Choose" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-blocks">
                      <label>Shop</label>
                      <vue-select :options="Selosy" v-model="selectedOne" placeholder="Choose" />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="input-blocks">
                      <label>Responsible Person</label>
                      <vue-select :options="Steven" v-model="selectedTwo" placeholder="Choose" />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="input-blocks search-form mb-0">
                      <label>Product</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Select Product"
                      />
                      <vue-feather type="search"></vue-feather>
                    </div>
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
                  <button type="submit" class="btn btn-submit">Create</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Stock -->

  <!-- Edit Stock -->
  <div class="modal fade" id="edit-units">
    <div class="modal-dialog modal-dialog-centered stock-adjust-modal">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title">
                <h4>Edit Stock</h4>
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
                  <i data-feather="search" class="feather-search"></i>
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
                      <label>Shop</label>
                      <vue-select :options="Logerro" v-model="selectedFour" placeholder="Selosy" />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="input-blocks">
                      <label>Responsible Person</label>
                      <vue-select :options="Gravely" v-model="selectedFive" placeholder="Steven" />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="input-blocks search-form mb-3">
                      <label>Product</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Select Product"
                        value="Nike Jordan"
                      />
                      <vue-feather type="search"></vue-feather>
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
                                    href="javascript:void(0);"
                                    @click="showConfirmation"
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
  <!-- /Edit Stock -->

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
              <h3 class="mb-2">Delete Stock</h3>
              <p class="fs-16 mb-3">Are you sure you want to delete product from stock?</p>
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
      selectedOne: [],
      selectedTwo: [],
      selectedThree: [],
      selectedFour: [],
      selectedFive: [],
      Choose: [
        {label: "Choose", value: "Choose"}, 
        {label: "Lobar Handy", value: "Lobar Handy"}, 
        {label: "Quaint Warehouse", value: "Quaint Warehouse"}
      ],
      Selosy: [
        {label: "Choose", value: "Choose"}, 
        {label: "Selosy", value: "Selosy"}, 
        {label: "Logerro", value: "Logerro"}
      ],
      Steven: [
        {label: "Choose", value: "Choose"}, 
        {label: "Steven", value: "Steven"}, 
        {label: "Gravely", value: "Gravely"}
      ],
      Handy: [
        {label: "Lobar Handy", value: "Lobar Handy"}, 
        {label: "Quaint Warehouse", value: "Quaint Warehouse"}
      ],
      Logerro: [
        {label: "Selosy", value: "Selosy"}, 
        {label: "Logerro", value: "Logerro"}
      ],
      Gravely: [
        {label: "Steven", value: "Steven"}, 
        {label: "Gravely", value: "Gravely"}
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/stock/manage-stocks");
    },
  },
};
</script>
