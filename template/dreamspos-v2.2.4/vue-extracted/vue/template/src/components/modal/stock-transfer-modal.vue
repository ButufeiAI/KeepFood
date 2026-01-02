<template>
  <!-- Add Stock -->
  <div class="modal fade" id="add-units">
    <div class="modal-dialog modal-dialog-centered stock-adjust-modal">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title">
                <h4>Add Transfer</h4>
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
                      <label>Warehouse From</label>
                      <vue-select :options="Lobar" v-model="selected" placeholder="Choose" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-blocks">
                      <label>Warehouse To</label>
                      <vue-select
                        :options="Logerro"
                        v-model="selectedOne"
                        placeholder="Choose"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="input-blocks">
                      <label>Responsible Person</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="input-blocks search-form mb-3">
                      <label>Product</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Select Product"
                      />
                      <i data-feather="search" class="feather-search"></i>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="input-blocks search-form mb-0">
                      <label>Notes</label>
                      <textarea class="form-control"></textarea>
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
                <h4>Edit Transfer</h4>
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
                      <label>Warehouse From</label>
                      <vue-select
                        :options="Quaint"
                        v-model="selectedTwo"
                        placeholder="Lobar Handy"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-blocks">
                      <label>Warehouse To</label>
                      <vue-select
                        :options="Logerro"
                        v-model="selectedThree"
                        placeholder="Selosy"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="input-blocks">
                      <label>Reference No</label>
                      <input type="text" class="form-control" value="32434545" />
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
                      <i data-feather="search" class="feather-search"></i>
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
                    <div class="input-blocks search-form mb-0">
                      <label>Notes</label>
                      <textarea class="form-control">
The Jordan brand is owned by Nike (owned by the Knight family), as, at the time, the company was building its strategy to work with athletes to launch shows that could inspire consumers.Although Jordan preferred Converse and Adidas, they simply could not match the offer Nike made. </textarea
                      >
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

  <!-- Import Transfer -->
  <div class="modal fade" id="view-notes">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title">
                <h4>Import Transfer</h4>
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
          <div class="modal-body custom-modal-body">
            <form @submit.prevent="submitForm">
              <div class="row">
                <div class="col-lg-4 col-sm-6 col-12">
                  <div class="input-blocks">
                    <label>From</label>
                    <vue-select :options="Store" v-model="selectedFour" placeholder="Choose" />
                  </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-12">
                  <div class="input-blocks">
                    <label>To</label>
                    <vue-select :options="Storetwo" v-model="selectedFive" placeholder="Choose" />
                  </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-12">
                  <div class="input-blocks">
                    <label>Satus</label>
                    <vue-select :options="Sent" v-model="selectedSix" placeholder="Choose" />
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
                    <label class="form-label">Shipping</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3 summer-description-box transfer">
                  <label class="form-label">Description</label>
                  <div class="editor pages-editor">
                    <div class="editor three-line">
                      <div class="editor-container">
                        <div ref="editorRef" class="quill-editor" />
                      </div>
                    </div>
                  </div>
                  <p>Maximum 60 Characters</p>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="modal-footer-btn">
                  <button
                    type="button"
                    class="btn btn-cancel me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="submit" class="btn btn-submit">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Import Transfer -->

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
              <h3 class="mb-2">Delete Stock Transfer</h3>
              <p class="fs-16 mb-3">Are you sure you want to delete stock transfer?</p>
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
import Quill from "quill";
import "quill/dist/quill.snow.css";
export default {
  data() {
    return {
      selected: [],
      selectedOne: [],
      selectedTwo: "Lobar Handy",
      selectedThree: "Selosy",
      selectedFour: [],
      selectedFive: [],
      selectedSix: [],
      Lobar: [
        {label: "Choose", value: "Choose"},
        {label: "Lobar Handy", value: "Lobar Handy"}, 
        {label: "Quaint Warehouse", value: "Quaint Warehouse"}
      ],
      Logerro: [
        {label: "Choose", value: "Choose"}, 
        {label: "Selosy", value: "Selosy"}, 
        {label: "Logerro", value: "Logerro"}
      ],
      Quaint: [
        {label: "Lobar Handy", value: "Lobar Handy"}, 
        {label: "Quaint Warehouse", value: "Quaint Warehouse"}
      ],
      Store: [
        {label: "Choose", value: "Choose"}, 
        {label: "Store 1", value: "Store 1"}
      ],
      Storetwo: [
        {label: "Choose", value: "Choose"}, 
        {label: "Store 2", value: "Store 2"}
      ],
      Sent: [
        {label: "Choose", value: "Choose"}, 
        {label: "Sent", value: "Sent"}, 
        {label: "Pending", value: "Pending"}
      ],
      content: "Type your message",
    };
  },
  mounted() {
    this.initQuill();
  },
  methods: {
    submitForm() {
      this.$router.push("/stock/stock-transfer");
    },
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

      quill.on("text-change", () => {
        this.content = quill.root.innerHTML;
      });
    },
  },
};
</script>
