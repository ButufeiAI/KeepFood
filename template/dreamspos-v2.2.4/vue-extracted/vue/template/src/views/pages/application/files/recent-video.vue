<template>
  <div class="border-bottom mb-4">
    <div class="d-flex align-items-center justify-content-between mb-2">
      <h4 class="mb-2">Recent Videos</h4>
      <div class="dropdown mb-2">
        <a
          href="javascript:void(0);"
          class="dropdown-toggle btn btn-white"
          data-bs-toggle="dropdown"
        >
          Last 7 Days
        </a>
        <ul class="dropdown-menu dropdown-menu-end p-3">
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 7 Days</a>
          </li>
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 1 month</a>
          </li>
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 1 year</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="owl-carousel video-section">
      <Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
        <Slide v-for="item in DemoDw" :key="item.id">
          <div class="video-wrap">
            <video
              width="100"
              height="100"
              class="js-player"
              crossorigin
              playsinline
              :poster="getImageUrl(item.Image)"
            >
              <source
                src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
                type="video/mp4"
              />
            </video>
            <div class="d-flex align-items-center justify-content-between video-content">
              <h6 class="fw-medium">
                <a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview">{{
                  item.Title
                }}</a>
              </h6>
              <div class="d-flex align-items-center">
                <a href="javascript:void(0);" class="rating-select">
                  <i class="ti ti-star-filled filled"></i>
                </a>
                <div class="dropdown ms-2">
                  <a
                    href="javascript:void(0);"
                    class="d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    <i class="ti ti-dots"></i>
                  </a>
                  <ul class="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#preview"
                        class="dropdown-item rounded-1"
                        ><i class="ti ti-folder-open me-2"></i>Preview</a
                      >
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item rounded-1"
                        ><i class="ti ti-copy me-2"></i>Duplicate</a
                      >
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item rounded-1"
                        ><i class="ti ti-arrow-left-right me-2"></i>Move</a
                      >
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item rounded-1"
                        ><i class="ti ti-user-plus me-2"></i>Invite</a
                      >
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item rounded-1"
                        ><i class="ti ti-share-3 me-2"></i>Share Link</a
                      >
                    </li>
                    <li><hr class="dropdown-divider my-2" /></li>
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item rounded-1"
                        ><i class="ti ti-eye me-2"></i>View Details</a
                      >
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item rounded-1"
                        ><i class="ti ti-download me-2"></i>Download</a
                      >
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item rounded-1"
                        ><i class="ti ti-trash-x me-2"></i>Delete</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import DemoDw from "@/assets/json/demo_dw.json";
export default {
  data() {
    return {
      title: "File Manager",
      text: "Dashboard",
      text1: "Application",
      DemoDw: DemoDw,
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
          itemsToShow: 1,
          snapAlign: "center",
        },
        991: {
          itemsToShow: 2,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 3,
          snapAlign: "center",
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
      return new URL(`/src/assets/img/file-manager/${imageName}`, import.meta.url).href;
    },
  }
};
</script>
