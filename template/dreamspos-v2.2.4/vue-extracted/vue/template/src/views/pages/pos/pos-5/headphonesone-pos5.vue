<template>
  <div class="row row-cols-xxl-5">
    <div
      v-for="(product, index) in products"
      :key="index"
      class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3"
    >
      <div
        :class="['product-info card', { active: product.isActive }]"
        @click="toggleActive(product)"
      >
        <a href="javascript:void(0);" class="product-image">
          <img :src="getImageUrl(product.image)" alt="Products" />
        </a>
        <div class="product-content">
          <h6 class="fs-14 fw-bold mb-1">
            <a href="javascript:void(0);">{{ product.name }}</a>
          </h6>
          <div class="d-flex align-items-center justify-content-between">
            <h6 class="text-teal fs-14 fw-bold">{{ formatPrice(product.price) }}</h6>
            <p class="text-pink">{{ product.quantity }} Pcs</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [
        {
          name: "Apple Airpods 2",
          price: 120,
          quantity: 25,
          image: "pos-product-02.jpg",
          isActive: true,
        },
        {
          name: "Sonic Aura X7",
          price: 1200,
          quantity: 15,
          image: "pos-product-15.jpg",
          isActive: false,
        },
      ],
      showActiveOnly: false,
    };
  },
  computed: {
    filteredProducts() {
      if (this.showActiveOnly) {
        return this.products.filter((product) => product.isActive);
      }
      return this.products;
    },
  },
  methods: {
    toggleActive(product) {
      product.isActive = !product.isActive;
    },
    formatPrice(price) {
      return `$${price.toFixed(2)}`;
    },
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/products/${imageName}`, import.meta.url).href;
    },
  },
};
</script>
