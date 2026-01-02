<template>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4 class="fw-bold">Edit Product</h4>
            <h6>Edit Your product</h6>
          </div>
        </div>
        <ul class="table-top-head">
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"><i class="ti ti-refresh"></i></a>
          </li>
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header"><i
                class="ti ti-chevron-up"></i></a>
          </li>
        </ul>
        <div class="page-btn mt-0">
          <NuxtLink to="/inventory/product-list" class="btn btn-secondary"><i data-feather="arrow-left" class="me-2"></i>Back to
            Product</NuxtLink>
        </div>
      </div>

      <form class="add-product-form">
        <div class="add-product">
          <div class="accordions-items-seperate" id="accordionSpacingExample">
            <div class="accordion-item border mb-4">
              <h2 class="accordion-header" id="headingSpacingOne">
                <div class="accordion-button collapsed bg-white" data-bs-toggle="collapse" data-bs-target="#SpacingOne"
                  aria-expanded="true" aria-controls="SpacingOne">
                  <div class="d-flex align-items-center justify-content-between flex-fill">
                    <h5 class="d-flex align-items-center"><i data-feather="info"
                        class="text-primary me-2"></i><span>Product Information</span></h5>
                  </div>
                </div>
              </h2>
              <div id="SpacingOne" class="accordion-collapse collapse show" aria-labelledby="headingSpacingOne">
                <div class="accordion-body border-top">
                  <div class="row">
                    <div class="col-sm-6 col-12">
                      <div class="mb-3">
                        <label class="form-label">Store<span class="text-danger ms-1">*</span></label>
                        <vue-select
                          :options="Store"
                          v-model="selected"
                          placeholder="Electro Mart"
                        ></vue-select>
                      </div>
                    </div>
                    <div class="col-sm-6 col-12">
                      <div class="mb-3">
                        <label class="form-label">Warehouse<span class="text-danger ms-1">*</span></label>
                        <vue-select
                          :options="Warehouse"
                          v-model="selectedOne"
                          placeholder="Lavish Warehouse"
                        ></vue-select>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6 col-12">
                      <div class="mb-3">
                        <label class="form-label">Product Name<span class="text-danger ms-1">*</span></label>
                        <input type="text" class="form-control" value="Lenovo 3rd Generation">
                      </div>
                    </div>
                    <div class="col-sm-6 col-12">
                      <div class="mb-3">
                        <label class="form-label">Slug<span class="text-danger ms-1">*</span></label>
                        <input type="text" class="form-control" value="computers">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6 col-12">
                      <div class="mb-3 list position-relative">
                        <label class="form-label">SKU<span class="text-danger ms-1">*</span></label>
                        <input type="text" class="form-control list" value="LNV-IP3-8GB-256SSD-BLK">
                        <button type="submit" class="btn btn-primaryadd">
                          Generate
                        </button>
                      </div>
                    </div>
                    <div class="col-sm-6 col-12">
                      <div class="mb-3">
                        <label class="form-label">Selling Type<span class="text-danger ms-1">*</span></label>
                        <vue-select
                          :options="Selling"
                          v-model="selectedTwo"
                          placeholder="Choose"
                        ></vue-select>
                      </div>
                    </div>
                  </div>
                  <div class="addservice-info">
                    <div class="row">
                      <div class="col-sm-6 col-12">
                        <div class="mb-3">
                          <div class="add-newplus">
                            <label class="form-label">Category<span class="text-danger ms-1">*</span></label>
                            <a href="javascript:void(0);" data-bs-toggle="modal"
                              data-bs-target="#add-product-category"><i data-feather="plus-circle"
                                class="plus-down-add"></i><span>Add
                                New</span></a>
                          </div>
                          <vue-select
                            :options="Category"
                            v-model="selectedThree"
                            placeholder="Computers"
                          ></vue-select>
                        </div>
                      </div>
                      <div class="col-sm-6 col-12">
                        <div class="mb-3">
                          <label class="form-label">Sub Category<span class="text-danger ms-1">*</span></label>
                          <vue-select
                            :options="Subcategory"
                            v-model="selectedFour"
                            placeholder="Laptop"
                          ></vue-select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="add-product-new">
                    <div class="row">
                      <div class="col-sm-6 col-12">
                        <div class="mb-3">
                          <div class="add-newplus">
                            <label class="form-label">Brand<span class="text-danger ms-1">*</span></label>
                          </div>
                          <vue-select
                            :options="Brand"
                            v-model="selectedFive"
                            placeholder="Lenevo"
                          ></vue-select>
                        </div>
                      </div>
                      <div class="col-sm-6 col-12">
                        <div class="mb-3">
                          <div class="add-newplus">
                            <label class="form-label">Unit<span class="text-danger ms-1">*</span></label>
                          </div>
                          <vue-select
                            :options="Unit"
                            v-model="selectedSix"
                            placeholder="Pcs"
                          ></vue-select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="mb-3">
                        <div class="add-newplus">
                          <label class="form-label">Barcode Symbology<span class="text-danger ms-1">*</span></label>
                        </div>
                        <vue-select
                          :options="Barcode"
                          v-model="selectedSeven"
                          placeholder="Code 128"
                        ></vue-select>
                      </div>
                    </div>
                    <div class="col-lg-6 col-sm-6 col-12">
                      <div class="mb-3 list position-relative">
                        <label class="form-label">Item Code<span class="text-danger ms-1">*</span></label>
                        <input type="text" class="form-control list" value="PT001">
                        <button type="submit" class="btn btn-primaryadd">
                          Generate
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- Editor -->
                  <div class="col-lg-12">
                    <div class="summer-description-box">
                      <label class="form-label">Description</label>
                      <div class="editor pages-editor">
                        <div class="editor three-line">
                          <div class="editor-container">
                            <div ref="editorRef" class="quill-editor" />
                          </div>
                        </div>
                      </div>
                      <p class="fs-14 mt-1">Maximum 60 Words</p>
                    </div>
                  </div>
                  <!-- /Editor -->
                </div>
              </div>
            </div>
            <div class="accordion-item border mb-4">
              <h2 class="accordion-header" id="headingSpacingTwo">
                <div class="accordion-button collapsed bg-white" data-bs-toggle="collapse" data-bs-target="#SpacingTwo"
                  aria-expanded="true" aria-controls="SpacingTwo">
                  <div class="d-flex align-items-center justify-content-between flex-fill">
                    <h5 class="d-flex align-items-center"><i data-feather="life-buoy"
                        class="text-primary me-2"></i><span>Pricing & Stocks</span></h5>
                  </div>
                </div>
              </h2>
              <div id="SpacingTwo" class="accordion-collapse collapse show" aria-labelledby="headingSpacingTwo">
                <div class="accordion-body border-top">
                  <div class="mb-3s">
                    <label class="form-label">Product Type<span class="text-danger ms-1">*</span></label>
                    <div class="single-pill-product mb-3">
                      <ul class="nav nav-pills" id="pills-tab1" role="tablist">
                        <li class="nav-item" role="presentation">
                          <span class="custom_radio me-4 mb-0 active" id="pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
                            <input type="radio" class="form-control" name="payment">
                            <span class="checkmark"></span> Single Product</span>
                        </li>
                        <li class="nav-item" role="presentation">
                          <span class="custom_radio me-2 mb-0" id="pills-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-profile" role="tab" aria-controls="pills-profile"
                            aria-selected="false">
                            <input type="radio" class="form-control" name="sign">
                            <span class="checkmark"></span> Variable Product</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                      aria-labelledby="pills-home-tab">
                      <div class="single-product">
                        <div class="row">
                          <div class="col-lg-4 col-sm-6 col-12">
                            <div class="mb-3">
                              <label class="form-label">Quantity<span class="text-danger ms-1">*</span></label>
                              <input type="text" class="form-control" value="20">
                            </div>
                          </div>
                          <div class="col-lg-4 col-sm-6 col-12">
                            <div class="mb-3">
                              <label class="form-label">Price<span class="text-danger ms-1">*</span></label>
                              <input type="text" class="form-control" value="650">
                            </div>
                          </div>
                          <div class="col-lg-4 col-sm-6 col-12">
                            <div class="mb-3">
                              <label class="form-label">Tax Type<span class="text-danger ms-1">*</span></label>
                              <vue-select
                                :options="Tax"
                                v-model="selectedEight"
                                placeholder="Select"
                              ></vue-select>
                            </div>
                          </div>
                          <div class="col-lg-4 col-sm-6 col-12">
                            <div class="mb-3">
                              <label class="form-label">Product Tax<span class="text-danger ms-1">*</span></label>
                              <vue-select
                                :options="ProductTax"
                                v-model="selectedNine"
                                placeholder="Select"
                              ></vue-select>
                            </div>
                          </div>

                          <div class="col-lg-4 col-sm-6 col-12">
                            <div class="mb-3">
                              <label class="form-label">Discount Type<span class="text-danger ms-1">*</span></label>
                              <vue-select
                                :options="Discount"
                                v-model="selectedTen"
                                placeholder="Select"
                              ></vue-select>
                            </div>
                          </div>
                          <div class="col-lg-4 col-sm-6 col-12">
                            <div class="mb-3">
                              <label class="form-label">Discount Value<span class="text-danger ms-1">*</span></label>
                              <input class="form-control" type="text" value="10">
                            </div>
                          </div>
                          <div class="col-lg-4 col-sm-6 col-12">
                            <div class="mb-3">
                              <label class="form-label">Quantity Alert<span class="text-danger ms-1">*</span></label>
                              <input type="text" class="form-control" value="15">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                      <div class="row select-color-add">
                        <div class="col-lg-6 col-sm-6 col-12">
                          <div class="mb-3">
                            <label class="form-label">Variant Attribute <span class="text-danger ms-1">*</span></label>
                            <div class="row">
                              <div class="col-lg-10 col-sm-10 col-10">
                                <vue-select
                                  :options="Variant"
                                  v-model="selectedEleven"
                                  placeholder="Choose"
                                ></vue-select>
                              </div>
                              <div class="col-lg-2 col-sm-2 col-2 ps-0">
                                <div class="add-icon tab">
                                  <a class="btn btn-filter" data-bs-toggle="modal"
                                    data-bs-target="#add-variant-attribute"><i
                                      class="feather feather-plus-circle"></i></a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="selected-hide-color" id="input-show">
                            <label class="form-label">Variant Attribute <span class="text-danger ms-1">*</span></label>
                            <div class="row align-items-center">
                              <div class="col-lg-10 col-sm-10 col-10">
                                <div class="mb-3">
                                  <input class="input-tags form-control" id="inputBox" type="text" data-role="tagsinput"
                                    name="specialist" value="red, black">
                                </div>
                              </div>
                              <div class="col-lg-2 col-sm-2 col-2 ps-0">
                                <div class="mb-3 ">
                                  <a href="javascript:void(0);" class="remove-color"><i
                                      class="far fa-trash-alt"></i></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="modal-body-table border" id="variant-table">
                        <div class="table-responsive">
                          <table class="table border">
                            <thead>
                              <tr>
                                <th>Variantion</th>
                                <th>Variant Value</th>
                                <th>SKU</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th class="no-sort"></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <div class="add-product">
                                    <input type="text" class="form-control" value="color">
                                  </div>
                                </td>
                                <td>
                                  <div class="add-product">
                                    <input type="text" class="form-control" value="red">
                                  </div>
                                </td>
                                <td>
                                  <div class="add-product">
                                    <input type="text" class="form-control" value="1234">
                                  </div>
                                </td>
                                <td>
                                  <div class="product-quantity">
                                    <EcommerceCheckCounter />
                                  </div>
                                </td>
                                <td>
                                  <div class="add-product">
                                    <input type="text" class="form-control" value="50000">
                                  </div>
                                </td>
                                <td class="action-table-data">
                                  <div class="edit-delete-action">
                                    <div class="input-block add-lists">
                                      <label class="checkboxs">
                                        <input type="checkbox" checked>
                                        <span class="checkmarks"></span>
                                      </label>
                                    </div>
                                    <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal"
                                      data-bs-target="#add-variation">
                                      <i data-feather="plus" class="feather-edit"></i>
                                    </a>
                                    <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="p-2"
                                      href="javascript:void(0);">
                                      <i data-feather="trash-2" class="feather-trash-2"></i>
                                    </a>
                                  </div>

                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="add-product">
                                    <input type="text" class="form-control" value="color">
                                  </div>
                                </td>
                                <td>
                                  <div class="add-product">
                                    <input type="text" class="form-control" value="black">
                                  </div>
                                </td>
                                <td>
                                  <div class="add-product">
                                    <input type="text" class="form-control" value="2345">
                                  </div>
                                </td>
                                <td>
                                  <div class="product-quantity">
                                    <EcommerceCheckCounter />
                                  </div>
                                </td>
                                <td>
                                  <div class="add-product">
                                    <input type="text" class="form-control" value="50000">
                                  </div>
                                </td>
                                <td class="action-table-data">
                                  <div class="edit-delete-action">
                                    <div class="input-block add-lists">
                                      <label class="checkboxs">
                                        <input type="checkbox" checked>
                                        <span class="checkmarks"></span>
                                      </label>
                                    </div>
                                    <a class="me-2 p-2" href="#" data-bs-toggle="modal" data-bs-target="#add-variation">
                                      <i data-feather="plus" class="feather-edit"></i>
                                    </a>
                                    <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="p-2"
                                      href="javascript:void(0);">
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
            <div class="accordion-item border mb-4">
              <h2 class="accordion-header" id="headingSpacingThree">
                <div class="accordion-button collapsed bg-white" data-bs-toggle="collapse"
                  data-bs-target="#SpacingThree" aria-expanded="true" aria-controls="SpacingThree">
                  <div class="d-flex align-items-center justify-content-between flex-fill">
                    <h5 class="d-flex align-items-center"><i data-feather="image"
                        class="text-primary me-2"></i><span>Images</span></h5>
                  </div>
                </div>
              </h2>
              <div id="SpacingThree" class="accordion-collapse collapse show" aria-labelledby="headingSpacingThree">
                <div class="accordion-body border-top">
                  <div class="text-editor add-list add">
                    <div class="col-lg-12">
                      <div class="add-choosen">
                        <div class="mb-3">
                          <div class="image-upload image-upload-two">
                            <input type="file">
                            <div class="image-uploads">
                              <i data-feather="plus-circle" class="plus-down-add me-0"></i>
                              <h4>Add Images</h4>
                            </div>
                          </div>
                        </div>
                        <div class="phone-img">
                          <img src="@/assets/img/products/phone-add-2.png" alt="image">
                          <a href="javascript:void(0);"><i data-feather="x" class="x-square-add remove-product"></i></a>
                        </div>

                        <div class="phone-img">
                          <img src="@/assets/img/products/phone-add-1.png" alt="image">
                          <a href="javascript:void(0);"><i data-feather="x" class="x-square-add remove-product"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item border mb-4">
              <h2 class="accordion-header" id="headingSpacingFour">
                <div class="accordion-button collapsed bg-white" data-bs-toggle="collapse" data-bs-target="#SpacingFour"
                  aria-expanded="true" aria-controls="SpacingFour">
                  <div class="d-flex align-items-center justify-content-between flex-fill">
                    <h5 class="d-flex align-items-center"><i data-feather="list"
                        class="text-primary me-2"></i><span>Custom Fields</span></h5>
                  </div>
                </div>
              </h2>
              <div id="SpacingFour" class="accordion-collapse collapse show" aria-labelledby="headingSpacingFour">
                <div class="accordion-body border-top">
                  <div>
                    <div class="p-3 bg-light rounded d-flex align-items-center border mb-3">
                      <div class=" d-flex align-items-center">
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" id="warranties" value="option1">
                          <label class="form-check-label" for="warranties">Warranties</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" id="manufacturer" value="option2">
                          <label class="form-check-label" for="manufacturer">Manufacturer</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" id="expiry" value="option2">
                          <label class="form-check-label" for="expiry">Expiry</label>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-6 col-12">
                        <div class="mb-3">
                          <label class="form-label">Warranty<span class="text-danger ms-1">*</span></label>
                          <vue-select
                            :options="Warranty"
                            v-model="selectedTwelve"
                            placeholder="Replacement Warranty"
                          />
                        </div>
                      </div>
                      <div class="col-sm-6 col-12">
                        <div class="mb-3 add-product">
                          <label class="form-label">Manufacturer<span class="text-danger ms-1">*</span></label>
                          <input type="text" class="form-control" value="Lenovo">
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-6 col-12">
                        <div class="mb-3">
                          <label class="form-label">Manufactured Date<span class="text-danger ms-1">*</span></label>

                          <div class="input-groupicon calender-input">
                            <i data-feather="calendar" class="info-img"></i>
                            <input type="text" class="datetimepicker form-control" value="20 Dec 2024">
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-12">
                        <div class="mb-3">
                          <label class="form-label">Expiry On<span class="text-danger ms-1">*</span></label>

                          <div class="input-groupicon calender-input">
                            <i data-feather="calendar" class="info-img"></i>
                            <input type="text" class="datetimepicker form-control" value="18 Dec 2034">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="d-flex align-items-center justify-content-end mb-4">
            <button type="button" class="btn btn-secondary me-2">Cancel</button>
            <button type="submit" class="btn btn-primary">Save Changes</button>
          </div>
        </div>
      </form>


    </div>
    <div class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
      <p class="mb-0 text-gray-9">2014 - 2025 &copy; DreamsPOS. All Right Reserved</p>
      <p>Designed &amp; Developed by <a href="javascript:void(0);" class="text-primary">Dreams</a></p>
    </div>
  </div>
  <ModalAddProductModal />
</template>
<script>
import { ref } from "vue";
const value1 = ref();
const value2 = ref();
import Quill from "quill";
import "quill/dist/quill.snow.css";

export default {
  data() {
    return {
      quillInitAttempts: 0,
      selected: "Electro Mart",
      selectedOne: "Lavish Warehouse",
      selectedTwo: "Online",
      selectedThree: "Computers",
      selectedFour: "Laptop",
      selectedFive: "Lenova",
      selectedSix: "Pcs",
      selectedSeven: "Select",
      selectedEight: "Sales",
      selectedNine: "Percentage",
      selectedTen: "Choose",
      selectedEleven: "Choose", 
      selectedTwelve: "Replacement Warranty",
      Warranty: [
        { label: "Select", value: "Select" },
        { label: "Replacement Warranty", value: "Replacement Warranty" },
        { label: "On-Site Warranty", value: "On-Site Warranty" },
        { label: "Accidental Protection Plan", value: "Accidental Protection Plan" },
      ],
      Variant: [
        { label: "Select", value: "Select" },
        { label: "Color", value: "Color" },
        { label: "Red", value: "Red" },
        { label: "Black", value: "Black" },
      ],
      Discount: [
        { label: "Select", value: "Select" },
        { label: "Percentage", value: "Percentage" },
        { label: "Flat", value: "Flat" },
      ],
      Tax : [
        { label: "Select", value: "Select" },
        { label: "Exclusive", value: "Exclusive" },
        { label: "Inclusive", value: "Inclusive" },
      ],
      ProductTax: [
        { label: "Select", value: "Select" },
        { label: "No Tax", value: "No Tax" },
        { label: "10%", value: "10%" },
        { label: "15%", value: "15%" },
        { label: "20%", value: "20%" },
        { label: "Gst 18%", value: "Gst 18%" },
      ],
      Store: [
        { label: "Select", value: "Select" },
        { label: "Electro Mart", value: "Electro Mart" },
        { label: "Quantum Gadgets", value: "Quantum Gadgets" },
        { label: "Gadget World", value: "Gadget World" },
        { label: "Volt Vault", value: "Volt Vault" },
        { label: "Elite Retail", value: "Elite Retail" },
        { label: "Prime Mart", value: "Prime Mart" },
        { label: "NeoTech Store", value: "NeoTech Store" },
      ],
      Warehouse: [
        { label: "Select", value: "Select" },
        { label: "Lavish Warehouse", value: "Lavish Warehouse" },
        { label: "Overflow Warehouse", value: "Overflow Warehouse" },
        { label: "Traditional Warehouse", value: "Traditional Warehouse" },
        { label: "Cool Warehouse", value: "Cool Warehouse" },
        { label: "Overflow Warehouse", value: "Overflow Warehouse" },
        { label: "Nova Storage Hub", value: "Nova Storage Hub" },
        { label: "Retail Supply Hub", value: "Retail Supply Hub" },
        { label: "EdgeWare Solutions", value: "EdgeWare Solutions" },
      ],
      Selling : [
        { label: "Select", value: "Select" },
        { label: "Online", value: "Online" },
        { label: "POS", value: "POS" },
      ],
      Category: [
        { label: "Select", value: "Select" },
        { label: "Computers", value: "Computers" },
        { label: "Electronics", value: "Electronics" },
        { label: "Phone", value: "Phone" },
        { label: "Shoe", value: "Shoe" },
        { label: "Cosmetics", value: "Cosmetics" },
        { label: "Groceries", value: "Groceries" },
        { label: "Furniture", value: "Furniture" },
        { label: "Bags", value: "Bags" },
      ],
      Subcategory: [
        { label: "Select", value: "Select" },
        { label: "Laptop", value: "Laptop" },
        { label: "Desktop", value: "Desktop" },
        { label: "Sneakers", value: "Sneakers" },
        { label: "Formals", value: "Formals" },
        { label: "Wearables", value: "Wearables" },
        { label: "Speakers", value: "Speakers" },
        { label: "Handbags", value: "Handbags" },
        { label: "Travel", value: "Travel" },
        { label: "Sofa", value: "Sofa" },
      ],
      Brand: [
        { label: "Select", value: "Select" },
        { label: "Lenovo", value: "Lenovo" },
        { label: "Dell", value: "Dell" },
        { label: "HP", value: "HP" },
        { label: "Apple", value: "Apple" },
        { label: "Samsung", value: "Samsung" },
      ],
      Unit: [
        { label: "Select", value: "Select" },
        { label: "Kg", value: "Kg" },
        { label: "Pcs", value: "Pcs" },
        { label: "L", value: "L" },
        { label: "Dz", value: "Dz" },
        { label: "Bx", value: "Bx" },
      ],
      Barcode: [
        { label: "Select", value: "Select" },
        { label: "Code 128", value: "Code 128" },
        { label: "Code 39", value: "Code 39" },
        { label: "UPC-A", value: "UPC-A" },
        { label: "UPC-E", value: "UPC-E" },
        { label: "EAN-8", value: "EAN-8" },
        { label: "EAN-13", value: "EAN-13" },
      ],
      tags: [
        { label: "red", value: "red" },
        { label: "black", value: "black" }
      ],
      value1,
      value2,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initQuill();
    });
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
    initQuill() {
      if (!this.$refs.editorRef) {
        console.error("");
        return;
      }
      
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
