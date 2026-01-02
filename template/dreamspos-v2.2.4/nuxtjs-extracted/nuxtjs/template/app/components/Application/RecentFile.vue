<template>
  <!-- Recent Files -->
  <div class="border-bottom mb-4">
    <div class="d-flex align-items-center justify-content-between mb-2">
      <h4 class="mb-2">
        <a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview">Recent Files</a>
      </h4>
      <div class="dropdown mb-2">
        <a
          href="javascript:void(0);"
          class="dropdown-toggle btn btn-white"
          data-bs-toggle="dropdown"
        >
          Last Modified
        </a>
        <ul class="dropdown-menu dropdown-menu-end p-3">
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1"
              >Newest to Oldest</a
            >
          </li>
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1"
              >Last Modified</a
            >
          </li>
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1"
              >Oldest to Newest</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="owl-carousel files-carousel">
      <Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
        <Slide v-for="item in RecentFile" :key="item.id">
          <div class="files-wrap">
            <div
              class="bg-secondary-transparent p-5 d-flex align-items-center justify-content-center files-icon"
            >
              <i :class="item.Class"></i>
            </div>
            <div
              class="bg-white d-flex align-items-center justify-content-between p-3 files-content"
            >
              <h6 class="fw-medium">{{ item.Name }}</h6>
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
  <!-- /Recent Files -->
</template>
<script>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import RecentFile from "@/assets/json/recent-file.json";
export default {
  data() {
    return {
      RecentFile: RecentFile,
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
          snapAlign: "start",
        },
      },
    };
  },
  components: {
    Carousel,
    Slide,
  },
};
</script>
