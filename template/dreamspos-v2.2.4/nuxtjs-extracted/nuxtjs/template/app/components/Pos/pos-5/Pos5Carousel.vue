<template>
  <ul class="tabs owl-carousel pos-category4 mb-4">
    <Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
      <Slide v-for="item in pos5Carousel" :key="item.id">
        <li
          :id="item.IdName"
          :class="{ active: activeTab === item.IdName }"
          @click="setActiveTab(item.IdName)"
        >
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
        <all-pos5></all-pos5>
      </div>
      <div
        v-if="activeTab === 'headphones'"
        class="tab_content"
        data-tab="headphones"
        :style="{ display: activeTab === 'headphones' ? 'block' : 'none' }"
      >
        <headphones-pos5></headphones-pos5>
      </div>

      <div
        v-if="activeTab === 'shoes'"
        class="tab_content"
        data-tab="shoes"
        :style="{ display: activeTab === 'shoes' ? 'block' : 'none' }"
      >
        <shoes-pos5></shoes-pos5>
      </div>
      <div
        v-if="activeTab === 'mobiles'"
        class="tab_content"
        data-tab="mobiles"
        :style="{ display: activeTab === 'mobiles' ? 'block' : 'none' }"
      >
        <mobiles-pos5></mobiles-pos5>
      </div>

      <div
        v-if="activeTab === 'watches'"
        class="tab_content"
        data-tab="watches"
        :style="{ display: activeTab === 'watches' ? 'block' : 'none' }"
      >
        <watches-pos5></watches-pos5>
      </div>

      <div
        v-if="activeTab === 'laptops'"
        class="tab_content"
        data-tab="laptops"
        :style="{ display: activeTab === 'laptops' ? 'block' : 'none' }"
      >
        <laptops-pos5></laptops-pos5>
      </div>

      <div
        v-if="activeTab === 'homeneed'"
        class="tab_content"
        data-tab="homeneed"
        :style="{ display: activeTab === 'homeneed' ? 'block' : 'none' }"
      >
        <homeneed-pos5></homeneed-pos5>
      </div>
      <div
        v-if="activeTab === 'headphonesone'"
        class="tab_content"
        data-tab="headphonesone"
        :style="{ display: activeTab === 'headphonesone' ? 'block' : 'none' }"
      >
        <headphones-pos5></headphones-pos5>
      </div>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import pos5Carousel from "@/assets/json/pos5-carousel.json";
export default {
  data() {
    return {
      activeTab: "all",
      pos5Carousel: pos5Carousel,
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
          itemsToShow: 5,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 6,
          snapAlign: "start",
        },
      },
    };
  },
  methods: {
    setActiveTab(tabName) {
      this.activeTab = tabName;
    },
  },
  components: {
    Carousel,
    Slide,
  },
};
</script>
