<template>
  <!--add popup -->
  <div class="modal fade" id="add-sales-new">
    <div class="modal-dialog add-centered">
      <div class="modal-content">
        <div class="page-wrapper p-0 m-0">
          <div class="content p-0">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title">
                <h4>Add Purchase Return</h4>
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
                        <label class="form-label">Supplier</label>
                        <div class="row">
                          <div class="col-lg-10 col-sm-10 col-10">
                            <vue-select
                              :options="Choose"
                              v-model="selected"
                              placeholder="Choose"
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
                          <vue-feather
                            type="calendar"
                            class="info-img"
                          ></vue-feather>
                          <a-date-picker
                            v-model:value="value1"
                            class="datetimepicker form-control"
                          />
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
                        <label class="form-label"
                          >Product<span class="text-danger ms-1">*</span></label
                        >
                        <div class="input-groupicon select-code">
                          <input
                            type="text"
                            placeholder="Search Product"
                            class="form-control p-2"
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
                  <div class="modal-body-table mt-3">
                    <div class="table-responsive no-pagination">
                      <table class="table datanew bg-light-9 p-3">
                        <thead>
                          <tr>
                            <th class="bg-secondary-transparent p-3">Image</th>
                            <th>Date</th>
                            <th>Supplier</th>
                            <th>Reference</th>
                            <th>Status</th>
                            <th>Total ($)</th>
                            <th>Paid ($)</th>
                            <th>Due ($)</th>
                            <th>Payment Status</th>
                          </tr>
                        </thead>
                        <tbody></tbody>
                      </table>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-3 col-sm-6 col-12">
                      <div class="mb-3">
                        <label class="form-label"
                          >Order Tax<span class="text-danger ms-1"
                            >*</span
                          ></label
                        >
                        <div class="input-groupicon select-code">
                          <input
                            type="text"
                            value="0"
                            class="form-control p-2"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12">
                      <div class="mb-3">
                        <label class="form-label"
                          >Discount<span class="text-danger ms-1"
                            >*</span
                          ></label
                        >
                        <div class="input-groupicon select-code">
                          <input
                            type="text"
                            value="0"
                            class="form-control p-2"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12">
                      <div class="mb-3">
                        <label class="form-label"
                          >Shipping<span class="text-danger ms-1"
                            >*</span
                          ></label
                        >
                        <div class="input-groupicon select-code">
                          <input
                            type="text"
                            value="0"
                            class="form-control p-2"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12">
                      <div class="input-blocks mb-5">
                        <label>Status</label>
                        <vue-select
                          :options="Pending"
                          v-model="selectedTwo"
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="input-blocks summer-description-box">
                        <label>Description</label>
                        <div class="editor pages-editor">
                          <div class="editor three-line">
                            <div class="editor-container">
                              <div ref="editorRef" class="quill-editor" />
                            </div>
                          </div>
                        </div>
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

  <!--Edit popup -->
  <div class="modal fade" id="edit-sales-new">
    <div class="modal-dialog add-centered">
      <div class="modal-content">
        <div class="page-wrapper p-0 m-0">
          <div class="content p-0">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title">
                <h4>Edit Purchase Return</h4>
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
                        <label class="form-label">Supplier</label>
                        <div class="row">
                          <div class="col-lg-10 col-sm-10 col-10">
                            <vue-select
                              :options="Modern"
                              v-model="selectedThree"
                              placeholder="Apex Computers"
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
                          <vue-feather
                            type="calendar"
                            class="info-img"
                          ></vue-feather>
                          <a-date-picker
                            v-model:value="value1"
                            class="datetimepicker form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-12">
                      <div class="input-blocks">
                        <label class="form-label">Reference No.</label>
                        <input type="text" class="form-control" value="PT001" />
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
                            placeholder="Search Product"
                            class="form-control p-2"
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
                  <div class="table-responsive no-pagination">
                    <table class="table datanew">
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Date</th>
                          <th>Supplier</th>
                          <th>Reference</th>
                          <th>Status</th>
                          <th>Grand Total ($)</th>
                          <th>Paid ($)</th>
                          <th>Due ($)</th>
                          <th>Payment Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a class="product-img">
                              <img
                                src="@/assets/img/products/product1.jpg"
                                alt="product"
                              />
                            </a>
                          </td>
                          <td>2/27/2022</td>
                          <td>Apex Computers</td>
                          <td>PT001</td>
                          <td>
                            <span class="badges bg-lightgreen">Received</span>
                          </td>
                          <td>550</td>
                          <td>120</td>
                          <td>550</td>
                          <td>
                            <span class="badges bg-lightgreen">Paid</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a class="product-img">
                              <img
                                src="@/assets/img/products/product5.jpg"
                                alt="product"
                              />
                            </a>
                          </td>
                          <td>3/24/2022</td>
                          <td>Best Power Tools</td>
                          <td>PT0011</td>
                          <td>
                            <span class="badges bg-lightred">Pending</span>
                          </td>
                          <td>2580</td>
                          <td>1250</td>
                          <td>2580</td>
                          <td>
                            <span class="badges bg-lightred">Unpaid</span>
                          </td>
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
                        <label class="form-label"
                          >Order Tax<span class="text-danger ms-1"
                            >*</span
                          ></label
                        >
                        <div class="input-groupicon select-code">
                          <input
                            type="text"
                            value="0"
                            class="form-control p-2"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12">
                      <div class="mb-3">
                        <label class="form-label"
                          >Discount<span class="text-danger ms-1"
                            >*</span
                          ></label
                        >
                        <div class="input-groupicon select-code">
                          <input
                            type="text"
                            value="0"
                            class="form-control p-2"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12">
                      <div class="mb-3">
                        <label class="form-label"
                          >Shipping<span class="text-danger ms-1"
                            >*</span
                          ></label
                        >
                        <div class="input-groupicon select-code">
                          <input
                            type="text"
                            value="0"
                            class="form-control p-2"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12">
                      <div class="input-blocks mb-5">
                        <label>Status</label>
                        <vue-select
                          :options="Pending"
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
  </div>
  <!-- Edit popup -->

  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content p-5 px-3 text-center">
            <span
              class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"
              ><i class="ti ti-trash fs-24 text-danger"></i
            ></span>
            <h4 class="fs-20 fw-bold mb-2 mt-1">Delete Purchase Return</h4>
            <p class="mb-0 fs-16">
              Are you sure you want to delete purchase return?
            </p>
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
                class="btn btn-primary fs-13 fw-medium p-2 px-3"
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
      selectedThree: [],
      Choose: [
        { label: "Choose", value: "Choose" },
        { label: "Apex Computers", value: "Apex Computers" },
        { label: "Modern Automobile", value: "Modern Automobile" },
        { label: "AIM Infotech", value: "AIM Infotech" },
      ],
      Pending: [
        { label: "Choose", value: "Choose" },
        { label: "Pending", value: "Pending" },
        { label: "Received", value: "Received" },
      ],
      Modern: [
        { label: "Apex Computers", value: "Apex Computers" },
        { label: "Modern Automobile", value: "Modern Automobile" },
        { label: "AIM Infotech", value: "AIM Infotech" },
      ],
    };
  },
  mounted() {
    this.initQuill();
  },
  methods: {
    submitForm() {
      this.$router.push("/purchases/purchase-returns");
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
