<template>
  <!-- Import Product -->
  <div class="modal fade" id="view-notes">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header">
              <div class="page-title">
                <h4>Import Product</h4>
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
            <div class="modal-body">
              <form @submit.prevent="submitForm">
                <div class="modal-top">
                  <div class="row">
                    <div class="col-12">
                      <div class="input-blocks">
                        <label>Product<span class="ms-1 text-danger">*</span></label>
                        <vue-select
                          :options="Product"
                          v-model="selected"
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6 col-12">
                      <div class="input-blocks">
                        <label>Category<span class="ms-1 text-danger">*</span></label>
                        <vue-select
                          :options="Category"
                          v-model="selectedOne"
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6 col-12">
                      <div class="input-blocks">
                        <label>Sub Category<span class="ms-1 text-danger">*</span></label>
                        <select class="select">
                          <option>Choose</option>
                          <option>Lenovo</option>
                          <option>Bolt</option>
                          <option>Nike</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-12 col-sm-6 col-12">
                      <div class="row">
                        <div>
                          <div class="modal-footer-btn download-file">
                            <a href="javascript:void(0)" class="btn btn-submit"
                              >Download Sample File</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="input-blocks image-upload-down">
                        <label> Upload CSV File</label>
                        <div class="image-upload download">
                          <input type="file" />
                          <div class="image-uploads">
                            <img src="@/assets/img/download-img.png" alt="img" />
                            <h4>Drag and drop a <span>file to upload</span></h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12 col-sm-6 col-12">
                      <div class="mb-3">
                        <label class="form-label"
                          >Created by<span class="ms-1 text-danger">*</span></label
                        >
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="mb-3 input-blocks">
                        <label class="form-label">Description</label>
                        <textarea class="form-control"></textarea>
                        <p class="mt-1">Maximum 60 Characters</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-btns">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="modal-footer-btn">
                        <button
                          type="button"
                          class="btn btn-cancel me-2 p-2 px-3"
                          data-bs-dismiss="modal"
                        >
                          Cancel
                        </button>
                        <button type="submit" class="btn btn-submit p-2 px-3">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Import Product -->

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
              <h3 class="mb-2">Delete Order</h3>
              <p class="fs-16 mb-3">
                Are you sure you want to delete order from order list?
              </p>
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
export default {
  data() {
    return {
      selected: [],
      selectedOne: [],
      Product: [
        {label: "Choose", value: "Choose"}, 
        {label: "Bold V3.2", value: "Bold V3.2"}, 
        {label: "Nike Jordan", value: "Nike Jordan"}, 
        {label: "Iphone 14 Pro", value: "Iphone 14 Pro"}
      ],
      Category: [
        {label: "Choose", value: "Choose"}, 
        {label: "Laptop", value: "Laptop"}, 
        {label: "Electronics", value: "Electronics"}, 
        {label: "Shoe", value: "Shoe"}, 
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/ecommerce/product-list");
    },
  },
};
</script>
