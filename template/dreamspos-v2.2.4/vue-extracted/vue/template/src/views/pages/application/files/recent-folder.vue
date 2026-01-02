<template>
  <div class="border-bottom mb-4">
    <div class="d-flex align-items-center justify-content-between mb-2">
      <h4 class="mb-2">Recent Folders</h4>
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
    <div class="owl-carousel folders-carousel">
      <Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
        <Slide v-for="item in RecentFolder" :key="item.id">
          <div
            class="folder-wrap bg-white d-flex align-items-center justify-content-between"
          >
            <div class="d-flex align-items-center">
              <span class="text-warning fs-30">
                <i class="ti ti-folder-filled"></i>
              </span>
              <div class="ms-2">
                <h6 class="mb-1">
                  <a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview">{{
                    item.Name
                  }}</a>
                </h6>
                <div class="d-flex align-items-center">
                  <p class="fs-12 mb-0 me-2">{{ item.GB }}</p>
                  <p class="fs-12 mb-0 d-flex align-items-center">
                    <i class="ti ti-circle-filled fs-6 me-2 text-title"></i
                    >{{ item.Files }}
                  </p>
                </div>
              </div>
            </div>
            <div class="d-flex align-items-center">
              <div class="avatar-list-stacked avatar-group-sm">
                <span class="avatar avatar-rounded">
                  <img
                    class="border border-white"
                    :src="getImageUrl(item.Image)"
                    alt="img"
                  />
                </span>
                <span class="avatar avatar-rounded">
                  <img
                    class="border border-white" :src="getImageUrl(item.ImageOne)"
                    alt="img"
                  />
                </span>
              </div>
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
        </Slide>
      </Carousel>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import RecentFolder from "@/assets/json/recent-folder.json";
export default {
  data() {
    return {
      RecentFolder: RecentFolder,
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
          itemsToShow: 2,
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
      return new URL(`/src/assets/img/profiles/${imageName}`, import.meta.url).href;
    },
  }
};
</script>
