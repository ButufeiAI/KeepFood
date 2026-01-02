<template>
  <ul class="tabs owl-carousel pos-category3 mb-4">
    <Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
      <Slide v-for="item in pos4Carousel" :key="item.id">
        <li
          :id="item.IdName"
          :class="{ active: activeTab === item.IdName }"
          @click="setActiveTab(item.IdName)"
        >
          <a href="javascript:void(0);">
            <img :src="getImageUrl(item.Image)"
              alt="Categories"
            />
          </a>
          <h6>
            <a href="javascript:void(0);">{{ item.Name }}</a>
          </h6>
        </li>
      </Slide>
    </Carousel>
  </ul>
  <div class="pos-products">
    <div class="tabs_container">
      <div
        v-if="activeTab === 'all'"
        class="tab_content active"
        data-tab="all"
        :style="{ display: activeTab === 'all' ? 'block' : 'none' }"
      >
        <all-pos4></all-pos4>
      </div>
      <div
        v-if="activeTab === 'headphones'"
        class="tab_content"
        data-tab="headphones"
        :style="{ display: activeTab === 'headphones' ? 'block' : 'none' }"
      >
        <headphones-pos4></headphones-pos4>
      </div>

      <div
        v-if="activeTab === 'shoes'"
        class="tab_content"
        data-tab="shoes"
        :style="{ display: activeTab === 'shoes' ? 'block' : 'none' }"
      >
        <shoes-pos4></shoes-pos4>
      </div>

      <div
        v-if="activeTab === 'mobiles'"
        class="tab_content"
        data-tab="mobiles"
        :style="{ display: activeTab === 'mobiles' ? 'block' : 'none' }"
      >
        <mobiles-pos4></mobiles-pos4>
      </div>

      <div
        v-if="activeTab === 'watches'"
        class="tab_content"
        data-tab="watches"
        :style="{ display: activeTab === 'watches' ? 'block' : 'none' }"
      >
        <watches-pos4></watches-pos4>
      </div>

      <div
        v-if="activeTab === 'laptops'"
        class="tab_content"
        data-tab="laptops"
        :style="{ display: activeTab === 'laptops' ? 'block' : 'none' }"
      >
        <laptops-pos4></laptops-pos4>
      </div>

      <div
        v-if="activeTab === 'homeneed'"
        class="tab_content"
        data-tab="homeneed"
        :style="{ display: activeTab === 'homeneed' ? 'block' : 'none' }"
      >
        <homeneed-pos4></homeneed-pos4>
      </div>
      <div
        v-if="activeTab === 'headphonesone'"
        class="tab_content"
        data-tab="headphonesone"
        :style="{ display: activeTab === 'headphonesone' ? 'block' : 'none' }"
      >
        <headphonesone-pos4></headphonesone-pos4>
      </div>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import pos4Carousel from "@/assets/json/pos4-carousel.json";
export default {
  data() {
    return {
      activeTab: "all",
      pos4Carousel: pos4Carousel,
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
        loop: true,
      },
      breakpoints: {
        575: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        767: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        991: {
          itemsToShow: 6,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 8,
          snapAlign: "start",
        },
      },
    };
  },
  methods: {
    setActiveTab(tabName) {
      this.activeTab = tabName;
    },
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/categories/${imageName}`, import.meta.url).href;
    },
  },
  components: {
    Carousel,
    Slide,
  },
};
</script>
