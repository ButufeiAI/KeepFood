<template>
  <!-- Edit Product -->
  <div
    class="modal fade modal-default pos-modal"
    id="edit-product"
    aria-labelledby="edit-product"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Product</h5>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body pb-1">
            <div class="row">
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Product Name <span class="text-danger">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    value="Red Nike Laser Show"
                    disabled
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-12 col-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Product Price <span class="text-danger">*</span></label
                  >
                  <div class="input-icon-start position-relative">
                    <span class="input-icon-addon text-gray-9">
                      <i class="ti ti-currency-dollar"></i>
                    </span>
                    <input type="text" class="form-control" value="1800" />
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-sm-12 col-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Tax Type <span class="text-danger">*</span></label
                  >
                  <vue-select :options="Taxtype" v-model="selected" placeholder="Exclusive" />
                </div>
              </div>
              <div class="col-lg-6 col-sm-12 col-12">
                <div class="mb-3">
                  <label class="form-label">Tax <span class="text-danger">*</span></label>
                  <div class="input-icon-start position-relative">
                    <span class="input-icon-addon text-gray-9">
                      <i class="ti ti-percentage"></i>
                    </span>
                    <input type="text" class="form-control" value="15" />
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-sm-12 col-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Discount Type <span class="text-danger">*</span></label
                  >
                  <vue-select :options="Discount" v-model="selectedOne" placeholder="Percentage" />
                </div>
              </div>
              <div class="col-lg-6 col-sm-12 col-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Discount <span class="text-danger">*</span></label
                  >
                  <input type="text" class="form-control" value="15" />
                </div>
              </div>
              <div class="col-lg-6 col-sm-12 col-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Sale Unit <span class="text-danger">*</span></label
                  >
                  <vue-select :options="Sale" v-model="selectedTwo" placeholder="Kilogram" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer d-flex justify-content-end flex-wrap gap-2">
            <button
              type="button"
              class="btn btn-md btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="submit" class="btn btn-md btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Edit Product -->

  <!-- Delete Product -->
  <div class="modal fade modal-default" id="delete">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body p-0">
          <div class="success-wrap text-center">
            <form>
              <div class="icon-success bg-danger-transparent text-danger mb-2">
                <i class="ti ti-trash"></i>
              </div>
              <h3 class="mb-2">Are you Sure ?</h3>
              <p class="fs-16 mb-3">The current order will be deleted as no payment has been made so far.
              </p>
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
		<!-- /Delete Product -->
</template>

<script>
export default {
  data() {
    return {
      selected: "Exclusive",
      selectedOne: "Percentage",
      selectedTwo: "Kilogram",
      Taxtype: [
        {label: "Exclusive", value: "Exclusive"}, 
        {label: "Inclusive", value: "Inclusive"}
      ],
      Discount: [
        {label: "Percentage", value: "Percentage"}, 
        {label: "Early payment discounts", value: "Early payment discounts"}
      ],
      Sale: [
        {label: "Kilogram", value: "Kilogram"}, 
        {label: "Grams", value: "Grams"}, 
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/ecommerce/checkout");
    },
  },
};
</script>
