<template>
  <div class="card">
    <div class="card-body">
      <div class="d-flex align-items-center mb-3">
        <h5 class="me-2">Popular Channels</h5>
        <div class="owl-nav custom-nav nav-control"></div>
      </div>
      <div class="channels-slider owl-carousel">
        <Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
          <Slide v-for="item in SocialCarousel" :key="item.id">
            <a href="javascript:void(0);">
              <img :src="getImageUrl(item.Image)" alt="Img" /> </a
          ></Slide>
        </Carousel>
      </div>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import SocialCarousel from "@/assets/json/social-carousel.json";
export default {
  data() {
    return {
      SocialCarousel: SocialCarousel,
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
        loop: true,
      },
      breakpoints: {
        575: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        767: {
          itemsToShow: 4,
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
  components: {
    Carousel,
    Slide,
  },
  methods: {
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/icons/${imageName}`, import.meta.url).href;
    },
  }
};
</script>
