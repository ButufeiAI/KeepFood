<template>
  <div class="row row-cols-xxl-5 g-3">
    <div
      v-for="(product, index) in products"
      :key="index"
      class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl"
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
          name: "Charger Cable",
          price: 30,
          quantity: 40,
          image: "pos-product-01.jpg",
          isActive: false,
        },
        {
          name: "Apple Airpods 2",
          price: 120,
          quantity: 25,
          image: "pos-product-02.jpg",
          isActive: true,
        },
        {
          name: "Vacuum Cleaner",
          price: 800,
          quantity: 12,
          image: "pos-product-03.jpg",
          isActive: false,
        },
        {
          name: "Realme 8 Pro",
          price: 700,
          quantity: 18,
          image: "pos-product-04.jpg",
          isActive: false,
        },
        {
          name: "Vacuum Robot",
          price: 600,
          quantity: 35,
          image: "pos-product-05.jpg",
          isActive: false,
        },
        {
          name: "Kicken Mixer",
          price: 300,
          quantity: 8,
          image: "pos-product-06.jpg",
          isActive: false,
        },
        {
          name: "Apple Watch Series 9",
          price: 300,
          quantity: 8,
          image: "pos-product-07.jpg",
          isActive: false,
        },
        {
          name: "Bracelet",
          price: 1430,
          quantity: 13,
          image: "pos-product-08.jpg",
          isActive: false,
        },
        {
          name: "YETI Flask",
          price: 1560,
          quantity: 30,
          image: "pos-product-09.jpg",
          isActive: false,
        },
        {
          name: "Osmo Med Kit",
          price: 410,
          quantity: 15,
          image: "pos-product-10.jpg",
          isActive: false,
        },
        {
          name: "Celestique Perfume",
          price: 150,
          quantity: 45,
          image: "pos-product-11.jpg",
          isActive: false,
        },
        {
          name: "Dell XPS 13",
          price: 1140,
          quantity: 22,
          image: "pos-product-12.jpg",
          isActive: false,
        },
        {
          name: "Cheese Snack",
          price: 15,
          quantity: 55,
          image: "pos-product-13.jpg",
          isActive: false,
        },
        {
          name: "Blue Boot Shoes",
          price: 320,
          quantity: 30,
          image: "pos-product-14.jpg",
          isActive: false,
        },
        {
          name: "Sonic Aura X7",
          price: 230,
          quantity: 20,
          image: "pos-product-15.jpg",
          isActive: false,
        },
        {
          name: "Brown Formal Shoes",
          price: 160,
          quantity: 13,
          image: "pos-product-16.jpg",
          isActive: false,
        },
        {
          name: "Apple Iphone 13",
          price: 1200,
          quantity: 15,
          image: "pos-product-17.jpg",
          isActive: false,
        },
        {
          name: "PixelCrafter 3000",
          price: 900,
          quantity: 20,
          image: "pos-product-18.jpg",
          isActive: false,
        },
        {
          name: "Citrify Orange Juice",
          price: 80,
          quantity: 16,
          image: "pos-product-19.jpg",
          isActive: false,
        },
        {
          name: "Aroma Coffee Maker",
          price: 170,
          quantity: 35,
          image: "pos-product-20.jpg",
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
