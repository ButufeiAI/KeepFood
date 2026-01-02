<template>
  <div class="card-body">
    <!-- Quote -->
    <div class="mb-2">
      <p class="text-dark fw-medium">
        "Believe in yourself and all that you are. Know that there is something inside you
        that is greater than any obstacle.
        <a href="javascript:void(0);" class="text-info link-hover">#MotivationMonday</a>
        <a href="javascript:void(0);" class="text-info link-hover">#Inspiration</a>
        🌟"
      </p>
    </div>

    <!-- Main Image -->
    <div class="mb-2">
      <img src="@/assets/img/social/social-feed-01.jpg" class="rounded" alt="Img" />
    </div>
    <div class="d-flex flex-wrap gap-3 mb-3">
      <div v-for="(image, index) in galleryImages" :key="image.src">
        <div class="img-full-view">
          <a href="javascript:void(0);" class="image-popup-desc" @click="openLightbox(index)">
            <img :src="getImageUrl(image.thumb)" class="rounded img-fluid w-100" :alt="`gallery-item-${index}`"
              style="width: 120px; height: 120px; object-fit: cover" />
            <span class="avatar avatar-md avatar-rounded"><i class="ti ti-eye fs-20"></i></span>
          </a>
        </div>
      </div>
    </div>
    <VueEasyLightbox
      :visible="lightboxVisible"
      :imgs="lightboxImages"
      :index="lightboxIndex"
      @hide="closeLightbox"
    />

    <!-- Like, Comment, Share Section -->
    <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
      <div class="d-flex align-items-center flex-wrap row-gap-3">
        <a href="javascript:void(0);" class="d-inline-flex align-items-center me-3">
          <i class="ti ti-heart me-2"></i>340K Likes
        </a>
        <a href="javascript:void(0);" class="d-inline-flex align-items-center me-3">
          <i class="ti ti-message-dots me-2"></i>45 Comments
        </a>
        <a href="javascript:void(0);" class="d-inline-flex align-items-center">
          <i class="ti ti-share-3 me-2"></i>28 Share
        </a>
      </div>
      <div class="d-flex align-items-center">
        <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle">
          <i class="ti ti-heart-filled text-danger"></i>
        </a>
        <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle">
          <i class="ti ti-share"></i>
        </a>
        <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle">
          <i class="ti ti-message-star"></i>
        </a>
        <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle">
          <i class="ti ti-bookmark-filled text-warning"></i>
        </a>
      </div>
    </div>

    <!-- Comment Section -->
    <div class="d-flex align-items-start">
      <a href="javascript:void(0);" class="avatar avatar-rounded me-2 flex-shrink-0">
        <img src="@/assets/img/users/user-11.jpg" alt="Img" />
      </a>
      <input type="text" class="form-control" placeholder="Enter Comments" />
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";

export default {
  components: {
    VueEasyLightbox,
  },
  setup() {
    const galleryImages = ref([
      { thumb: "gallery-01.jpg", src: "gallery-01.jpg" },
      { thumb: "gallery-02.jpg", src: "gallery-02.jpg" },
      { thumb: "gallery-03.jpg", src: "gallery-03.jpg" },
      { thumb: "gallery-04.jpg", src: "gallery-04.jpg" },
    ]);

    const lightboxVisible = ref(false);
    const lightboxIndex = ref(0);

    const getImageUrl = (imageName) => {
      return new URL(`/assets/img/social/${imageName}`, import.meta.url).href;
    };

    const openLightbox = (index) => {
      lightboxIndex.value = index;
      lightboxVisible.value = true;
    };

    const closeLightbox = () => {
      lightboxVisible.value = false;
    };

    const lightboxImages = computed(() =>
      galleryImages.value.map((image) => getImageUrl(image.src))
    );

    return {
      galleryImages,
      lightboxVisible,
      lightboxIndex,
      getImageUrl,
      openLightbox,
      closeLightbox,
      lightboxImages,
    };
  },
};
</script>
