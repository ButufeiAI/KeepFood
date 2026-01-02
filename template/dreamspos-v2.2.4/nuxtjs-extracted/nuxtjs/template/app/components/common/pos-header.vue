<template>
  <!-- Header -->
  <div class="header pos-header">
    <!-- Logo -->
    <div class="header-left active">
      <NuxtLink to="/dashboard/admin-dashboard" class="logo logo-normal">
        <img src="@/assets/img/logo.svg" alt="Img" />
      </NuxtLink>
      <NuxtLink to="/dashboard/admin-dashboard" class="logo logo-white">
        <img src="@/assets/img/logo-white.svg" alt="Img" />
      </NuxtLink>
      <NuxtLink to="/dashboard/admin-dashboard" class="logo-small">
        <img src="@/assets/img/logo-small.png" alt="Img" />
      </NuxtLink>
    </div>
    <!-- /Logo -->

    <a id="mobile_btn" class="mobile_btn d-none" href="#sidebar">
      <span class="bar-icon">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </a>

    <!-- Header Menu -->
    <ul class="nav user-menu">
      <!-- Search -->
      <li class="nav-item time-nav">
        <span class="bg-teal text-white d-inline-flex align-items-center"
          ><img
            src="@/assets/img/icons/clock-icon.svg"
            alt="img"
            class="me-2"
          />09:25:32</span
        >
      </li>
      <!-- /Search -->

      <li class="nav-item pos-nav">
        <NuxtLink
          to="/dashboard/admin-dashboard"
          class="btn btn-purple btn-md d-inline-flex align-items-center"
        >
          <i class="ti ti-world me-1"></i>Dashboard
        </NuxtLink>
      </li>

      <!-- Select Store -->
      <li class="nav-item dropdown has-arrow main-drop select-store-dropdown">
        <a
          href="javascript:void(0);"
          class="dropdown-toggle nav-link select-store"
          data-bs-toggle="dropdown"
        >
          <span class="user-info">
            <span class="user-letter">
              <img
                src="@/assets/img/store/store-01.png"
                alt="Store Logo"
                class="img-fluid"
              />
            </span>
            <span class="user-detail">
              <span class="user-name">Freshmart</span>
            </span>
          </span>
        </a>
        <div class="dropdown-menu dropdown-menu-right">
          <a href="javascript:void(0);" class="dropdown-item">
            <img
              src="@/assets/img/store/store-01.png"
              alt="Store Logo"
              class="img-fluid"
            />Freshmart
          </a>
          <a href="javascript:void(0);" class="dropdown-item">
            <img
              src="@/assets/img/store/store-02.png"
              alt="Store Logo"
              class="img-fluid"
            />Grocery Apex
          </a>
          <a href="javascript:void(0);" class="dropdown-item">
            <img
              src="@/assets/img/store/store-03.png"
              alt="Store Logo"
              class="img-fluid"
            />Grocery Bevy
          </a>
          <a href="javascript:void(0);" class="dropdown-item">
            <img
              src="@/assets/img/store/store-04.png"
              alt="Store Logo"
              class="img-fluid"
            />Grocery Eden
          </a>
        </div>
      </li>
      <!-- /Select Store -->

      <li class="nav-item nav-item-box">
        <a
          href="#"
          data-bs-toggle="modal"
          data-bs-target="#calculator"
          class="bg-orange border-orange text-white"
          ><i class="ti ti-calculator"></i
        ></a>
      </li>
      <li class="nav-item nav-item-box">
        <a
          href="javascript:void(0);"
          id="btnFullscreen"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-title="Maximize"
          @click="initFullScreen"
        >
          <i class="ti ti-maximize"></i>
        </a>
      </li>
      <li
        class="nav-item nav-item-box"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-title="Cash Register"
      >
        <a href="#" data-bs-toggle="modal" data-bs-target="#cash-register"
          ><i class="ti ti-cash"></i
        ></a>
      </li>
      <li
        class="nav-item nav-item-box"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-title="Print Last Reciept"
      >
        <a href="#"><i class="ti ti-printer"></i></a>
      </li>
      <li
        class="nav-item nav-item-box"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-title="Today’s Sale"
      >
        <a href="#" data-bs-toggle="modal" data-bs-target="#today-sale"
          ><i class="ti ti-progress"></i
        ></a>
      </li>
      <li
        class="nav-item nav-item-box"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-title="Today’s Profit"
      >
        <a href="#" data-bs-toggle="modal" data-bs-target="#today-profit"
          ><i class="ti ti-chart-infographic"></i
        ></a>
      </li>
      <li
        class="nav-item nav-item-box"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-title="POS Settings"
      >
        <NuxtLink to="/app-settings/pos-settings"
          ><i class="ti ti-settings"></i
        ></NuxtLink>
      </li>
      <li class="nav-item dropdown has-arrow main-drop profile-nav">
        <a href="javascript:void(0);" class="nav-link userset" data-bs-toggle="dropdown">
          <span class="user-info p-0">
            <span class="user-letter">
              <img src="@/assets/img/profiles/avator1.jpg" alt="Img" class="img-fluid" />
            </span>
          </span>
        </a>
        <div class="dropdown-menu menu-drop-user">
          <div class="profilename">
            <div class="profileset">
              <span class="user-img"
                ><img src="@/assets/img/profiles/avator1.jpg" alt="Img" />
                <span class="status online"></span
              ></span>
              <div class="profilesets">
                <h6>John Smilga</h6>
                <h5>Super Admin</h5>
              </div>
            </div>
            <hr class="m-0" />
            <NuxtLink class="dropdown-item" to="/pages/profile"
              ><i class="me-2" data-feather="user"></i>My Profile</NuxtLink
            >
            <NuxtLink class="dropdown-item" to="/settings/general-settings"
              ><i class="me-2" data-feather="settings"></i>Settings</NuxtLink
            >
            <hr class="m-0" />
            <NuxtLink class="dropdown-item logout pb-0" to="/"
              ><img
                src="@/assets/img/icons/log-out.svg"
                class="me-2"
                alt="img"
              />Logout</NuxtLink
            >
          </div>
        </div>
      </li>
    </ul>
    <!-- /Header Menu -->

    <!-- Mobile Menu -->
    <div class="dropdown mobile-user-menu">
      <a
        href="javascript:void(0);"
        class="nav-link dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        ><i class="fa fa-ellipsis-v"></i
      ></a>
      <div class="dropdown-menu dropdown-menu-right">
        <NuxtLink class="dropdown-item" to="/pages/profile">My Profile</NuxtLink>
        <NuxtLink class="dropdown-item" to="/settings/general-settings"
          >Settings</NuxtLink
        >
        <NuxtLink class="dropdown-item" to="/">Logout</NuxtLink>
      </div>
    </div>
    <!-- /Mobile Menu -->
  </div>
  <!-- Header -->
  <CommonThemeSettings></CommonThemeSettings>
  <CommonPosLoader></CommonPosLoader>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    initFullScreen() {
      document.body.classList.toggle("fullscreen-enable");
      if (
        !document.fullscreenElement &&
        /* alternative standard method */
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
  },
  computed: {
    shouldHideThemeSettings() {
    const hiddenLayouts = [
        "/layouts/layout-horizontal",
        "/layouts/layout-detached",
        "/layouts/layout-two-column",
        "/layouts/layout-hovered",
        "/layouts/layout-boxed",
        "/layouts/layout-dark",
        "/layouts/layout-rtl",
    ];
    return hiddenLayouts.includes(this.$route.path);
    },
  },
};
</script>
