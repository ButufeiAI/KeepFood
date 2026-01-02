<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content settings-content">
      <div class="page-header settings-pg-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4>Settings</h4>
            <h6>Manage your settings on portal</h6>
          </div>
        </div>
        <ul class="table-top-head">
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"
              ><i class="ti ti-refresh"></i
            ></a>
          </li>
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" @click="toggleHeader"><i class="ti ti-chevron-up"></i></a>
          </li>
        </ul>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="settings-wrapper d-flex">
            <settings-sidebar></settings-sidebar>
            <div class="card flex-fill mb-0">
              <div class="card-header">
                <h4 class="fs-18 fw-bold">Appearance</h4>
              </div>
              <div class="card-body pb-0">
                <div class="appearance-settings">
                  <div class="row">
                    <div class="col-xl-4 col-lg-12 col-md-4">
                      <div class="setting-info mb-4">
                        <h6>Select Theme</h6>
                        <p>Choose accent colour of website</p>
                      </div>
                    </div>
                    <div class="col-xl-8 col-lg-12 col-md-8">
                      <div class="theme-type-images d-flex align-items-center mb-4">
                        <div
                          v-for="(image, index) in themeImages"
                          :key="index"
                          class="theme-image"
                          @click="selectTheme(index)"
                          :class="{ active: selectedThemeIndex === index }"
                        >
                          <div class="theme-image-set">
                            <img :src="getImageUrl(image.src)"
                              alt=""
                            />
                          </div>
                          <h6>{{ image.label }}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xl-4 col-lg-12 col-md-4">
                      <div class="setting-info mb-4">
                        <h6>Accent Color</h6>
                        <p>Choose accent colour of website</p>
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-12 col-md-4">
                      <div class="theme-colors mb-4">
                        <ul>
                          <li v-for="(color, index) in themeColors" :key="index">
                            <span
                              :class="generateClass(color)"
                              @click="setActiveColor(index)"
                            ></span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xl-4 col-lg-12 col-md-4">
                      <div class="setting-info mb-4">
                        <h6>Expand Sidebar</h6>
                        <p>Choose accent colour of website</p>
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-12 col-md-4">
                      <div
                        class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2"
                      >
                        <input type="checkbox" id="user1" class="check" checked />
                        <label for="user1" class="checktoggle"> </label>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xl-4 col-lg-12 col-md-4">
                      <div class="setting-info mb-4">
                        <h6>Sidebar Size</h6>
                        <p>Select size of the sidebar to display</p>
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-12 col-md-4">
                      <div class="localization-select">
                        <vue-select
                          :options="AppearanceSelect"
                          v-model="selected"
                          placeholder="Small - 85px"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xl-4 col-lg-12 col-md-4">
                      <div class="setting-info mb-4">
                        <h6>Font Family</h6>
                        <p>Select font family of website</p>
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-12 col-md-4">
                      <div class="localization-select">
                        <vue-select
                          :options="AppNu"
                          v-model="selectedOne"
                          placeholder="Nunito"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3"
    >
      <p class="mb-0">{{ new Date().getFullYear() }} © DreamsPOS. All Right Reserved</p>
      <p>
        Designed &amp; Developed By
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: "Small - 85px",
      selectedOne: "Nunito",
      AppNu: [
        {label: "Nunito", value: "Nunito"}, 
        {label: "Poppins", value: "Poppins"},
      ],
      AppearanceSelect: [
        {label: "Small - 85px", value: "Small - 85px"}, 
        {label: "Large - 250px", value: "Large - 250px"}
      ],
      themeImages: [
        { src: "theme-img-08.jpg", label: "Light" },
        { src: "theme-img-09.jpg", label: "Dark" },
        { src: "theme-img-10.jpg", label: "Automatic" },
      ],
      selectedThemeIndex: null,
      themeColors: [
        { name: "themecolorset defaultcolor", isActive: true },
        { name: "themecolorset theme-violet", isActive: false },
        { name: "themecolorset theme-blue", isActive: false },
        { name: "themecolorset theme-brown", isActive: false },
      ],
    };
  },
  methods: {
    selectTheme(index) {
      this.selectedThemeIndex = index;
    },
    setActiveColor(index) {
      // Reset isActive for all themeColors
      this.themeColors.forEach((color, i) => {
        color.isActive = i === index;
      });

      // Set the activeTheme to the name of the clicked color
      this.activeTheme = this.themeColors[index].name;
    },
    generateClass(color) {
      return color.name + (color.isActive ? " active" : "");
    },
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/theme/${imageName}`, import.meta.url).href;
    },
  },
};
</script>
