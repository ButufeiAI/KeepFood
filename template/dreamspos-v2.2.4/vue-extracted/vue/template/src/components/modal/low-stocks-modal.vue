<template>
  <!-- Send Mail -->
  <div class="modal fade" id="send-email">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="success-email-send modal-body .custom-modal-body text-center">
          <span class="rounded-circle d-inline-flex p-2 bg-success-transparent mb-2"
            ><i class="ti ti-checks fs-24 text-success"></i
          ></span>
          <h4 class="fs-20 fw-semibold">Success</h4>
          <p>Email Sent Successfully</p>
          <a
            href="#"
            class="btn btn-primary p-1 px-2 fs-13 fw-normal"
            data-bs-dismiss="modal"
            >Close</a
          >
        </div>
      </div>
    </div>
  </div>
  <!-- /Send Mail -->

  <!-- Edit Low Stock -->
  <div class="modal fade" id="edit-stock">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header">
              <div class="page-title">
                <h4>Edit Low Stocks</h4>
              </div>
              <button
                type="button"
                class="close bg-danger text-white fs-16"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" class="fs-16">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="submitForm">
                <div class="row">
                  <div class="col-sm-6 mb-3">
                    <label class="form-label">Warehouse<span class="text-danger ms-1">*</span></label>
                    <vue-select
                      :options="Warehouse"
                      v-model="selected"
                      placeholder="Choose"
                    />
                  </div>
                  <div class="col-sm-6 mb-3">
                    <label class="form-label"
                      >Store<span class="text-danger ms-1">*</span></label
                    >
                    <vue-select :options="Store" v-model="selectedOne" placeholder="Choose" />
                  </div>
                  <div class="col-sm-6 mb-3">
                    <label class="form-label"
                      >SKU<span class="text-danger ms-1">*</span></label
                    >
                    <input type="text" class="form-control" value="PT001" />
                  </div>
                  <div class="col-sm-6 mb-3">
                    <label class="form-label"
                      >Category<span class="text-danger ms-1">*</span></label
                    >
                    <vue-select
                      :options="Category"
                      v-model="selectedTwo"
                      placeholder="Choose"
                    />
                  </div>
                  <div class="col-12 mb-3">
                    <label class="form-label"
                      >Product Name<span class="text-danger ms-1">*</span></label
                    >
                    <input type="text" class="form-control" value="Lenevo 3rd Gen" />
                  </div>
                  <div class="col-sm-6 mb-3">
                    <label class="form-label"
                      >Qty<span class="text-danger ms-1">*</span></label
                    >
                    <input type="text" class="form-control" value="15" />
                  </div>
                  <div class="col-sm-6 mb-3">
                    <label class="form-label"
                      >Qty Alert<span class="text-danger ms-1">*</span></label
                    >
                    <input type="text" class="form-control" value="10" />
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
  <!-- / Edit Low Stock -->

  <!-- delete modal -->
  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content p-5 px-3 text-center">
            <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"
              ><i class="ti ti-trash fs-24 text-danger"></i
            ></span>
            <h4 class="fs-20 fw-bold mb-2 mt-1">Delete Product</h4>
            <p class="mb-0 fs-16">
              Are you sure you want to delete product from low stock?
            </p>
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
  <!-- / delete modal -->
</template>

<script>
export default {
  data() {
    return {
      selected: [],
      selectedOne: [],
      selectedTwo: [],
      Warehouse: [
        {label: "Choose", value: "Choose"}, 
        {label: "Lavish Warehouse", value: "Lavish Warehouse"}
      ],
      Store: [
        {label: "Choose", value: "Choose"}, 
        {label: "Electro Mart", value: "Electro Mart"}
      ],
      Category: [
        {label: "Choose", value: "Choose"}, 
        {label: "Laptop", value: "Laptop"}
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/inventory/low-stocks");
    },
  },
};
</script>
