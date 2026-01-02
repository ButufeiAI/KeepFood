<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper notes-page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4>Print QR Code</h4>
            <h6>Manage your QR code</h6>
          </div>
        </div>
        <div class="d-flex align-items-center">
          <ul class="table-top-head">
            <li>
              <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"
                ><i class="ti ti-refresh"></i
              ></a>
            </li>
            <li>
              <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" @click="toggleHeader"><i class="ti ti-chevron-up"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="barcode-content-list">
        <form>
          <div class="row">
            <div class="col-lg-6 col-12">
              <div class="row seacrh-barcode-item">
                <div class="col-sm-6 mb-3 seacrh-barcode-item-one">
                  <label class="form-label">Warehouse</label>
                  <vue-select
                    :options="Choosebarcode"
                    v-model="selected"
                    placeholder="Manufacture"
                  />
                </div>
                <div class="col-sm-6 mb-3 seacrh-barcode-item-one">
                  <label class="form-label">Select Store</label>
                  <vue-select
                    :options="Choosebarstore"
                    v-model="selectedOne"
                    placeholder="Choose"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="input-blocks search-form seacrh-barcode-item">
                <div class="searchInput">
                  <label class="form-label">Product</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search Product by Codename"
                  />
                  <div class="resultBox"></div>
                  <div class="icon"><i class="fas fa-search"></i></div>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div class="col-lg-12">
          <div class="modal-body-table search-modal-header">
            <div class="table-responsive">
              <a-table
                class="table datanew"
                :columns="columns"
                :data-source="data"
                :row-selection="{}"
              >
                <template #bodyCell="{ column, record }">
                  <template v-if="column.key === 'Product'">
                    <div class="productimgname">
                      <a href="javascript:void(0);" class="product-img stock-img">
                        <img :src="getImageUrl(record.Image)"
                          alt="product"
                        />
                      </a>
                      <a href="javascript:void(0);">{{ record.Product }}</a>
                    </div>
                  </template>
                  <template v-else-if="column.key === 'Qty'">
                    <div
                      v-for="(product, index) in products"
                      :key="index"
                      class="product-item"
                    >
                      <div class="product-quantity">
                        <span class="quantity-btn" @click="updateQuantity(index, '-')">
                          <vue-feather type="minus-circle" class="search"></vue-feather>
                        </span>
                        <input
                          type="text"
                          :id="'quantity-' + index"
                          class="quantity-input"
                          v-model="product.quantity"
                        />
                        <span class="quantity-btn" @click="updateQuantity(index, '+')">
                          +<vue-feather
                            type="plus-circle"
                            class="plus-circle"
                          ></vue-feather>
                        </span>
                      </div>
                    </div>
                  </template>
                  <template v-else-if="column.key === 'action'">
                    <div class="action-table-data justify-content-center">
                      <div class="edit-delete-action">
                        <a
                          class="confirm-text barcode-delete-icon"
                          @click="showConfirmation"
                          href="javascript:void(0);"
                        >
                          <i data-feather="trash-2" class="feather-trash-2"></i>
                        </a>
                      </div>
                    </div>
                  </template>
                </template>
              </a-table>
            </div>
          </div>
        </div>

        <div class="paper-search-size">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <form class="mb-0">
                <label class="form-label">Paper Size</label>
                <vue-select :options="Paper" v-model="selectedTwo" placeholder="Choose" />
              </form>
            </div>
            <div class="col-lg-6 pt-3">
              <div class="row">
                <div class="col-sm-4">
                  <div class="search-toggle-list">
                    <p>Reference Number</p>
                    <div class="input-blocks m-0">
                      <div
                        class="status-toggle modal-status d-flex justify-content-between align-items-center"
                      >
                        <input type="checkbox" id="user7" class="check" checked />
                        <label for="user7" class="checktoggle mb-0"> </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="search-barcode-button">
          <a
            href="javascript:void(0);"
            class="btn btn-submit me-2"
            data-bs-toggle="modal"
            data-bs-target="#prints-barcode"
          >
            <span><i class="fas fa-eye me-2"></i></span>
            Generate Barcode</a
          >
          <a href="javascript:void(0);" class="btn btn-cancel me-2">
            <span><i class="fas fa-power-off me-2"></i></span>
            Reset Barcode</a
          >
          <a href="javascript:void(0);" class="btn btn-cancel close-btn">
            <span><i class="fas fa-print me-2"></i></span>
            Print Barcode</a
          >
        </div>
      </div>
    </div>
    <div
      class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3"
    >
      <p class="mb-0 text-gray-9">
        {{ new Date().getFullYear() }} &copy; DreamsPOS. All Right Reserved
      </p>
      <p>
        Designed &amp; Developed by
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>
  <barcode-modal></barcode-modal>
</template>
<script>
const columns = [
  {
    title: "Product",
    dataIndex: "Product",
    key: "Product",
    sorter: {
      compare: (a, b) => {
        a = a.Product.toLowerCase();
        b = b.Product.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "SKU",
    dataIndex: "SKU",
    sorter: {
      compare: (a, b) => {
        a = a.SKU.toLowerCase();
        b = b.SKU.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Code",
    dataIndex: "Code",
    sorter: {
      compare: (a, b) => {
        a = a.Code.toLowerCase();
        b = b.Code.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Qty",
    dataIndex: "Qty",
    key: "Qty",
    sorter: {
      compare: (a, b) => {
        a = a.Qty.toLowerCase();
        b = b.Qty.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Action",
    key: "action",
    sorter: true,
  },
];
const data = [
  {
    Product: "Nike Jordan",
    SKU: "PT002",
    Code: "HG3FK",
    Image: "stock-img-02.png",
  },
];
import { ref } from "vue";
export default {
  data() {
    const initialQuantity = 10;
    const quantities = Array(length).fill(initialQuantity);
    return {
      selected: [],
      selectedOne: [],
      selectedTwo: [],
      Choosebarcode: [
        {label: "Choose", value: "Choose"}, 
        {label: "Manufacture", value: "Manufacture"}, 
        {label: "Transport", value: "Transport"}, 
        {label: "Customs", value: "Customs"}, 
      ],
      Paper: [
        {label: "Choose", value: "Choose"}, 
        {label: "Recent1", value: "Recent1"}, 
        {label: "Recent2", value: "Recent2"}, 
      ],
      Choosebarstore: [
        {label: "Choose", value: "Choose"}, 
        {label: "Online", value: "Online"}, 
        {label: "offline", value: "offline"}, 
      ],
      data,
      columns,
      quantities: ref(quantities),
      products: [{ quantity: 4 }],
    };
  },
  methods: {
    updateQuantity(index, action) {
      const currentQuantity = this.products[index].quantity;

      if (action === "+" && currentQuantity >= 0) {
        this.products[index].quantity = currentQuantity + 1;
      } else if (action === "-" && currentQuantity > 0) {
        this.products[index].quantity = currentQuantity - 1;
      }
    },
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/products/${imageName}`, import.meta.url).href;
    },
  },
};
</script>
