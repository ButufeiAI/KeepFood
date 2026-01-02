<template>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="page-title">
          <h4>Product Details</h4>
          <h6>Full details of a product</h6>
        </div>
      </div>
      <!-- /add -->
      <div class="row">
        <div class="col-lg-8 col-sm-12">
          <div class="card">
            <div class="card-body">
              <div class="bar-code-view">
										<div class="product-details-barcode">
											<img src="@/assets/img/barcode/barcode1.png" class="barcode" alt="barcode">
											<img src="@/assets/img/barcode/barcode1-white.png" class="barcode-white" alt="barcode">
										</div>
										<a class="printimg">
											<i class="ti ti-printer fs-24 text-dark"></i>
										</a>
									</div>
              <div class="productdetails">
                <ul class="product-bar">
                  <li>
                    <h4>Product</h4>
                    <h6>Macbook pro</h6>
                  </li>
                  <li>
                    <h4>Category</h4>
                    <h6>Computers</h6>
                  </li>
                  <li>
                    <h4>Sub Category</h4>
                    <h6>None</h6>
                  </li>
                  <li>
                    <h4>Brand</h4>
                    <h6>None</h6>
                  </li>
                  <li>
                    <h4>Unit</h4>
                    <h6>Piece</h6>
                  </li>
                  <li>
                    <h4>SKU</h4>
                    <h6>PT0001</h6>
                  </li>
                  <li>
                    <h4>Minimum Qty</h4>
                    <h6>5</h6>
                  </li>
                  <li>
                    <h4>Quantity</h4>
                    <h6>50</h6>
                  </li>
                  <li>
                    <h4>Tax</h4>
                    <h6>0.00 %</h6>
                  </li>
                  <li>
                    <h4>Discount Type</h4>
                    <h6>Percentage</h6>
                  </li>
                  <li>
                    <h4>Price</h4>
                    <h6>1500.00</h6>
                  </li>
                  <li>
                    <h4>Status</h4>
                    <h6>Active</h6>
                  </li>
                  <li>
                    <h4>Description</h4>
                    <h6>
                      Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s,
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-12">
          <div class="card">
            <div class="card-body">
              <div class="slider-product-details">
                <div class="owl-carousel owl-theme product-slide">
                  <Carousel ref="carousel" :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
                    <Slide v-for="(item, index) in productImages" :key="index">
                      <div class="slider-product">
                        <img :src="getImageUrl(item.image)" :alt="item.name" />
                        <h4 class="text-dark">{{ item.name }}</h4>
                        <h6 class="text-dark">{{ item.size }}</h6>
                      </div>
                    </Slide>
                    <template #addons>
                    <!-- <Navigation /> -->
                    </template>
                  </Carousel>
                </div>
                <div class="product-nav-controls d-flex align-items-center justify-content-between">
                    <button class="product-prev"><vue-feather type="chevron-left" class="left" @click="prev()"></vue-feather></button>
                    <button class="product-next"><vue-feather type="chevron-right" class="right" @click="next()"></vue-feather></button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- /add -->
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
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      productImages: [
        {
          image: "product69.jpg",
          name: "macbookpro.jpg",
          size: "581kb",
        },
        {
          image: "product69.jpg",
          name: "macbookpro.jpg",
          size: "581kb",
        },
      ],
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      breakpoints: {
        700: {
          itemsToShow: 1,
          snapAlign: "center",
        },
      },
    };
  },
  methods: {
    getImageUrl(imageName) {
      return new URL(`/assets/img/products/${imageName}`, import.meta.url).href;
    },
    prev() {
      this.$refs.carousel.prev();
    },
    next() {
      this.$refs.carousel.next();
    },
  },
};
</script>
