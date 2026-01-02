<template>
  <div class="" :class="['sidebar', sidebarClass]" id="sidebar">
    <!-- Logo -->
    <div class="sidebar-logo active">
      <NuxtLink to="/dashboard/admin-dashboard" class="logo logo-normal">
        <img src="@/assets/img/logo.svg" alt="Img" />
      </NuxtLink>
      <NuxtLink to="/dashboard/admin-dashboard" class="logo logo-white">
        <img src="@/assets/img/logo-white.svg" alt="Img" />
      </NuxtLink>
      <NuxtLink to="/dashboard/admin-dashboard" class="logo-small">
        <img src="@/assets/img/logo-small.png" alt="Img" />
      </NuxtLink>
      <a id="toggle_btn" href="#" @click="toggleSidebar">
        <i class="ti ti-chevrons-left"></i>
      </a>
    </div>
    <!-- /Logo -->

    <!-- Modern Profile -->
    <div class="modern-profile p-3 pb-0">
      <div class="text-center rounded bg-light p-3 mb-4 user-profile">
        <div class="avatar avatar-lg online mb-3">
          <img
            src="@/assets/img/customer/customer15.jpg"
            alt="Img"
            class="img-fluid rounded-circle"
          />
        </div>
        <h6 class="fs-14 fw-bold mb-1">Adrian Herman</h6>
        <p class="fs-12 mb-0">System Admin</p>
      </div>
      <div class="sidebar-nav mb-3">
        <ul
          class="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified bg-transparent"
          role="tablist"
        >
          <li class="nav-item"><a class="nav-link active border-0" href="#">Menu</a></li>
          <li class="nav-item">
            <NuxtLink class="nav-link border-0" to="/application/chat"
              >Chats</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link border-0" to="/application/email"
              >Inbox</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
    <!-- /Modern Profile -->

    <!-- Sidebar Header -->
    <div class="sidebar-header p-3 pb-0 pt-2">
      <div
        class="text-center rounded bg-light p-2 mb-4 sidebar-profile d-flex align-items-center"
      >
        <div class="avatar avatar-md online">
          <img
            src="@/assets/img/customer/customer15.jpg"
            alt="Img"
            class="img-fluid rounded-circle"
          />
        </div>
        <div class="text-start sidebar-profile-info ms-2">
          <h6 class="fs-14 fw-bold mb-1">Adrian Herman</h6>
          <p class="fs-12">System Admin</p>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-between menu-item mb-3">
        <div>
          <NuxtLink to="/dashboard/admin-dashboard" class="btn btn-sm btn-icon bg-light">
            <i class="ti ti-layout-grid-remove"></i>
          </NuxtLink>
        </div>
        <div>
          <NuxtLink to="/application/chat" class="btn btn-sm btn-icon bg-light">
            <i class="ti ti-brand-hipchat"></i>
          </NuxtLink>
        </div>
        <div>
          <NuxtLink
            to="/application/email"
            class="btn btn-sm btn-icon bg-light position-relative"
          >
            <i class="ti ti-message"></i>
          </NuxtLink>
        </div>
        <div class="notification-item">
          <NuxtLink
            to="/activities"
            class="btn btn-sm btn-icon bg-light position-relative"
          >
            <i class="ti ti-bell"></i>
            <span class="notification-status-dot"></span>
          </NuxtLink>
        </div>
        <div class="me-0">
          <NuxtLink
            to="/settings/general-settings"
            class="btn btn-sm btn-icon bg-light"
          >
            <i class="ti ti-settings"></i>
          </NuxtLink>
        </div>
      </div>
    </div>
    <!-- /Sidebar Header -->

    <!-- Sidebar Inner -->
    <simplebar id="scrollbar" class="h-100" ref="scrollbar">
      <div class="sidebar-inner slimscroll flex-fill">      
          <div id="sidebar-menu" class="sidebar-menu">
            <CommonVerticalSidebar />
          </div>      
      </div>
    </simplebar>
    <!-- /Sidebar Inner -->
  </div>
  <CommonTwoColSidebar />
  <CommonHorizontalHeader />
  <CommonPosLoader />
</template>

<script>
import simplebar from "simplebar-vue";
import "simplebar-vue/dist/simplebar.min.css";

export default {
  components: {
    simplebar,
  },
  data() {
    return {
      sidebarClass: "",
    };
  },
  watch: {
    "$route.path"(newPath) {
      if (newPath.startsWith("/pos/pos-1") || 
        newPath.startsWith("/pos/pos-2") ||
        newPath.startsWith("/pos/pos-3") ||
        newPath.startsWith("/pos/pos-4") ||
        newPath.startsWith("/pos/pos-5") 
      ) {
        this.sidebarClass = "d-none";
      } else {
        this.sidebarClass = "";
      }
    },
  },
  mounted() {
    this.initMouseoverListener();
     // Run once when the component is mounted
    if (this.$route.path.startsWith("/pos/pos-1") || 
        this.$route.path.startsWith("/pos/pos-2") ||
        this.$route.path.startsWith("/pos/pos-3") ||
        this.$route.path.startsWith("/pos/pos-4") ||
        this.$route.path.startsWith("/pos/pos-5")
      ) 
      {
      this.sidebarClass = "d-none";
    }
  },
  methods: {
    toggleSidebar() {
      const body = document.body;
      body.classList.toggle("mini-sidebar");
    },
    initMouseoverListener() {
      document.addEventListener("mouseover", this.handleMouseover);
    },
    handleMouseover(e) {
      e.stopPropagation();

      const body = document.body;
      const toggleBtn = document.getElementById("toggle_btn");

      if (body.classList.contains("mini-sidebar") && this.isElementVisible(toggleBtn)) {
        const target = e.target.closest(".sidebar, .header-left");

        if (target) {
          body.classList.add("expand-menu");
          this.slideDownSubmenu();
        } else {
          body.classList.remove("expand-menu");
          this.slideUpSubmenu();
        }

        e.preventDefault();
      }
    },
    isElementVisible(element) {
      return element.offsetWidth > 0 || element.offsetHeight > 0;
    },
    slideDownSubmenu() {
      // Force show all submenus when expanding in mini-sidebar mode
      const subdropElements = document.querySelectorAll(".subdrop");
      subdropElements.forEach(element => {
        const submenu = element.nextElementSibling;
        if (submenu && submenu.tagName.toLowerCase() === "ul") {
          submenu.style.display = "block";
          submenu.classList.remove("d-none");
          submenu.classList.add("d-block");
        }
      });
    },
    slideUpSubmenu() {
      // Hide all submenus when collapsing in mini-sidebar mode
      const subdropElements = document.querySelectorAll(".subdrop");
      subdropElements.forEach(element => {
        const submenu = element.nextElementSibling;
        if (submenu && submenu.tagName.toLowerCase() === "ul") {
          submenu.style.display = "none";
          submenu.classList.remove("d-block");
          submenu.classList.add("d-none");
        }
      });
    },
  },
  beforeUnmount() {
    document.removeEventListener("mouseover", this.handleMouseover);
  },
};
</script>
