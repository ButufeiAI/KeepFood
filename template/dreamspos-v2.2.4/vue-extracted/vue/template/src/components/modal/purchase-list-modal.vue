<template>
  <!-- Add Purchase -->
  <div class="modal fade" id="add-units">
    <div class="modal-dialog purchase modal-dialog-centered stock-adjust-modal">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title">
                <h4>Add Purchase</h4>
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
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="input-blocks add-product">
                      <label>Supplier Name</label>
                      <div class="row">
                        <div class="col-lg-10 col-sm-10 col-10">
                          <vue-select
                            :options="Customer"
                            v-model="selected"
                            placeholder="Select Customer"
                          />
                        </div>
                        <div class="col-lg-2 col-sm-2 col-2 ps-0">
                          <div class="add-icon tab">
                            <a href="javascript:void(0);"
                              ><vue-feather
                                type="plus-circle"
                                class="feather-plus-circles"
                              ></vue-feather
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="input-blocks">
                      <label>Purchase Date</label>

                      <div class="input-groupicon calender-input">
                        <i data-feather="calendar" class="info-img"></i>
                        <a-date-picker
                          v-model:value="value1"
                          class="datetimepicker form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="input-blocks">
                      <label>Product Name</label>
                      <vue-select
                        :options="Mobile"
                        v-model="selectedOne"
                        placeholder="Choose"
                      />
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="input-blocks">
                      <label>Reference No</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="row">
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
                          <img
                            src="@/assets/img/icons/qrcode-scan.svg"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="modal-body-table mt-3">
                      <div class="table-responsive">
                        <table class="table datatable rounded-1">
                          <thead>
                            <tr>
                              <th class="bg-secondary-transparent p-3">
                                Product
                              </th>
                              <th class="bg-secondary-transparent p-3">Qty</th>
                              <th class="bg-secondary-transparent p-3">
                                Purchase Price($)
                              </th>
                              <th class="bg-secondary-transparent p-3">
                                Discount($)
                              </th>
                              <th class="bg-secondary-transparent p-3">
                                Tax(%)
                              </th>
                              <th class="bg-secondary-transparent p-3">
                                Tax Amount($)
                              </th>
                              <th class="bg-secondary-transparent p-3">
                                Unit Cost($)
                              </th>
                              <th class="bg-secondary-transparent p-3">
                                Total Cost(%)
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <td class="p-0"></td>
                              <td class="p-0"></td>
                              <td class="p-0"></td>
                              <td class="p-0"></td>
                              <td class="p-0"></td>
                              <td class="p-0"></td>
                              <td class="p-0"></td>
                              <td class="p-0"></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <div class="mb-3">
                        <label class="form-label"
                          >Order Tax<span class="text-danger ms-1"
                            >*</span
                          ></label
                        >
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <div class="mb-3">
                        <label class="form-label"
                          >Discount<span class="text-danger ms-1"
                            >*</span
                          ></label
                        >
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <div class="mb-3">
                        <label class="form-label"
                          >Shipping<span class="text-danger ms-1"
                            >*</span
                          ></label
                        >
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <div class="input-blocks">
                        <label>Status</label>
                        <vue-select
                          :options="Received"
                          v-model="selectedTwo"
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="input-blocks summer-description-box">
                    <label>Notes</label>
                    <div class="editor pages-editor">
                      <div class="editor three-line">
                        <div class="editor-container">
                          <div ref="editorRefTwo" class="quill-editor" />
                        </div>
                      </div>
                    </div>
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
  </div>
  <!-- /Add Purchase -->

  <!-- Edit Purchase -->
  <div class="modal fade" id="edit-units">
    <div class="modal-dialog purchase modal-dialog-centered stock-adjust-modal">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title">
                <h4>Edit Purchase</h4>
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
                <div>
                  <div class="row">
                    <div class="col-lg-3 col-sm-6 col-12">
                      <div class="input-blocks">
                        <label>Supplier Name</label>
                        <div class="row">
                          <div class="col-lg-10 col-sm-10 col-10">
                            <vue-select
                              :options="Dazzle"
                              v-model="selectedThree"
                              placeholder="Dazzle shoes"
                            />
                          </div>
                          <div class="col-lg-2 col-sm-2 col-2 ps-0">
                            <div class="add-icon tab">
                              <a href="javascript:void(0);"
                                ><vue-feather
                                  type="plus-circle"
                                  class="feather-plus-circles"
                                ></vue-feather
                              ></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12">
                      <div class="input-blocks">
                        <label>Purchase Date </label>
                        <div class="input-groupicon">
                          <a-date-picker
                            v-model:value="value1"
                            class="datetimepicker form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12">
                      <div class="input-blocks">
                        <label>Product Name</label>
                        <vue-select
                          :options="Jordan"
                          v-model="selectedFour"
                          placeholder="Nike Jordan"
                        />
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12">
                      <div class="input-blocks">
                        <label>Reference No.</label>
                        <input
                          type="text"
                          class="form-control"
                          value="010203"
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
                            <img
                              src="@/assets/img/icons/qrcode-scan.svg"
                              alt="img"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="modal-body-table">
                        <div class="table-responsive">
                          <table class="table">
                            <thead>
                              <tr>
                                <th>Product Name</th>
                                <th>QTY</th>
                                <th>Purchase Price($)</th>
                                <th>Discount($)</th>
                                <th>Tax %</th>
                                <th>Tax Amount($)</th>
                                <th class="text-end">Unit Cost($)</th>
                                <th class="text-end">Total Cost ($)</th>
                                <th></th>
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
                                    <a href="javascript:void(0);"
                                      >Nike Jordan</a
                                    >
                                  </div>
                                </td>
                                <td>
                                  <div class="product-quantity">
                                    <span class="quantity-btn"
                                      >+<i
                                        data-feather="plus-circle"
                                        class="plus-circle"
                                      ></i
                                    ></span>
                                    <input
                                      type="text"
                                      class="quntity-input"
                                      value="10"
                                    />
                                    <span class="quantity-btn"
                                      ><i
                                        data-feather="minus-circle"
                                        class="feather-search"
                                      ></i
                                    ></span>
                                  </div>
                                </td>
                                <td>2000</td>
                                <td>500.00</td>
                                <td>0.00</td>
                                <td>0.00</td>
                                <td>0.00</td>
                                <td>1500</td>
                                <td>
                                  <a class="delete-set"
                                    ><img
                                      src="@/assets/img/icons/delete.svg"
                                      alt="svg"
                                  /></a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12 float-md-right">
                      <div class="total-order">
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
                          <li class="total">
                            <h4>Grand Total</h4>
                            <h5>$1500.00</h5>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <div class="mb-3">
                        <label class="form-label"
                          >Order Tax<span class="text-danger ms-1"
                            >*</span
                          ></label
                        >
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <div class="mb-3">
                        <label class="form-label"
                          >Discount<span class="text-danger ms-1"
                            >*</span
                          ></label
                        >
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <div class="mb-3">
                        <label class="form-label"
                          >Shipping<span class="text-danger ms-1"
                            >*</span
                          ></label
                        >
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12">
                      <div class="input-blocks">
                        <label>Status</label>
                        <vue-select
                          :options="Ordered"
                          v-model="selectedFive"
                          placeholder="Sent"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="input-blocks summer-description-box">
                    <label>Description</label>
                    <div class="editor pages-editor">
                      <div class="editor three-line">
                        <div class="editor-container">
                          <div ref="editorRefOne" class="quill-editor" />
                        </div>
                      </div>
                    </div>
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
                    <button type="submit" class="btn btn-submit">
                      Save Changes
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
  <!-- /Edit Purchase -->

  <!-- Import Purchase -->
  <div class="modal fade" id="view-notes">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title">
                <h4>Import Purchase</h4>
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
                  <div class="col-lg-6 col-sm-6 col-12">
                    <div class="input-blocks">
                      <label>Supplier Name</label>
                      <div class="row">
                        <div class="col-lg-10 col-sm-10 col-10">
                          <vue-select
                            :options="Apex"
                            v-model="selectedSix"
                            placeholder="Choose"
                          />
                        </div>
                        <div class="col-lg-2 col-sm-2 col-2 ps-0">
                          <div class="add-icon tab">
                            <a href="javascript:void(0);"
                              ><vue-feather
                                type="plus-circle"
                                class="feather-plus-circles"
                              ></vue-feather
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-12">
                    <div class="input-blocks">
                      <label>Purchase Status </label>
                      <vue-select
                        :options="Pending"
                        v-model="selectedSeven"
                        placeholder="Choose"
                      />
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
                  <div class="col-lg-4 col-sm-6 col-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >Order Tax<span class="text-danger ms-1">*</span></label
                      >
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6 col-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >Discount<span class="text-danger ms-1">*</span></label
                      >
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6 col-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >Shipping<span class="text-danger ms-1">*</span></label
                      >
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="input-blocks summer-description-box transfer">
                  <label>Description</label>
                  <div class="editor pages-editor">
                    <div class="editor three-line">
                      <div class="editor-container">
                        <div ref="editorRef" class="quill-editor" />
                      </div>
                    </div>
                  </div>
                  <p>Maximum 60 Characters</p>
                </div>
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Import Purchase -->

  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content p-5 px-3 text-center">
            <span
              class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"
              ><i class="ti ti-trash fs-24 text-danger"></i
            ></span>
            <h4 class="fs-20 fw-bold mb-2 mt-1">Delete Purchase</h4>
            <p class="mb-0 fs-16">Are you sure you want to delete purchase?</p>
            <div class="modal-footer-btn mt-3 d-flex justify-content-center">
              <button
                type="button"
                class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="btn btn-submit fs-13 fw-medium p-2 px-3"
              >
                Yes Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
const value1 = ref();

import Quill from "quill";
import "quill/dist/quill.snow.css";
export default {
  data() {
    return {
      value1,
      selected: [],
      selectedOne: [],
      selectedTwo: [],
      selectedThree: "Dazzle shoes",
      selectedFour: "Nike Jordan",
      selectedFive: "Sent",
      selectedSix: [],
      selectedSeven: [],
      content: "Type your message",
      contentOne: "These shoes are made with the highest quality materials.",
      contentTwo: "Type your message",
      Customer: [
        { label: "Select Customer", value: "Select Customer" },
        { label: "Apex Computers", value: "Apex Computers" },
        { label: "Dazzle Shoes", value: "Dazzle Shoes" },
        { label: "Best Accessories", value: "Best Accessories" },
      ],
      Mobile: [
        { label: "Choose", value: "Choose" },
        { label: "Shoe", value: "Shoe" },
        { label: "Mobile", value: "Mobile" },
      ],
      Received: [
        { label: "Choose", value: "Choose" },
        { label: "Received", value: "Received" },
        { label: "Pending", value: "Pending" },
      ],
      Dazzle: [
        { label: "Dazzle Shoes", value: "Dazzle Shoes" },
        { label: "Apex Computers", value: "Apex Computers" },
        { label: "Beats Headphones", value: "Beats Headphones" },
      ],
      Jordan: [{ label: "Nike Jordan", value: "Nike Jordan" }],
      Ordered: [
        { label: "Sent", value: "Sent" },
        { label: "Ordered", value: "Ordered" },
      ],
      Apex: [
        { label: "Choose", value: "Choose" },
        { label: "Apex Computers", value: "Apex Computers" },
        { label: "Apex Computers", value: "Apex Computers" },
      ],
      Pending: [
        { label: "Choose", value: "Choose" },
        { label: "Received", value: "Received" },
        { label: "Ordered", value: "Ordered" },
        { label: "Pending", value: "Pending" },
      ],
    };
  },
  mounted() {
    this.initQuill();
  },
  methods: {
    submitForm() {
      this.$router.push("/purchases/purchase-list");
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
      const quillTwo = new Quill(this.$refs.editorRefTwo, {
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
      quillTwo.on("text-change", () => {
        this.content = quillTwo.root.innerHTML;
      });
    },
  },
};
</script>
