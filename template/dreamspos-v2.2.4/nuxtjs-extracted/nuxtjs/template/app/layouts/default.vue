<template>
  <div class="main-wrapper" :class="posWrapperClass">
    <template v-if="shouldShowHeaderAndSidebar">
      <CommonLayoutsHeader />
      <CommonLayoutsSidebar />
    </template>

    <template v-if="shouldShowPosHeader">
      <CommonPosHeader />
    </template>
    
    <template v-if="shouldShowRTLHeader">
      <CommonLayoutRtlHeader />
    </template>

    <slot />
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",

  computed: {
    // Hide header and sidebar on login/register pages
    shouldShowHeaderAndSidebar() {
      const path = this.$route.path
      return !(
        path === "/" ||
        path.includes("/login") ||
        path.includes("/register") ||
        path.includes("/coming-soon") ||
        path.includes("/under-maintenance") ||
        path.includes("/error-404") ||
        path.includes("/error-500") ||
        path.includes("/signin-2") || 
        path.includes("/signin-3") ||
        path.includes("/register-2") ||
        path.includes("/register-3") ||
        path.includes("/forgot-password") ||
        path.includes("/forgot-password-2") ||
        path.includes("/forgot-password-3") ||
        path.includes("/reset-password") ||
        path.includes("/reset-password-2") ||
        path.includes("/reset-password-3") ||
        path.includes("/email-verification") ||
        path.includes("/email-verification-2") ||
        path.includes("/email-verification-3") ||
        path.includes("/two-step-verification") ||
        path.includes("/two-step-verification-2") ||
        path.includes("/two-step-verification-3") ||
        path.includes("/lock-screen")
      )
    },

    shouldShowPosHeader() {
      return this.$route.path.includes("/pos/")
    },
    shouldShowRTLHeader() {
      return this.$route.path.includes("/layout-rtl")
    },

    posWrapperClass() {
      const path = this.$route.path
      if (path === "/pos/pos-1") {
        return "pos-five"
      } else if (path === "/pos/pos-5") {
        return "pos-three pos-four"
      } else if (path === "/pos/pos-3") {
        return "pos-two"
      } else if (path === "/pos/pos-4") {
        return "pos-three"
      }
      return ""
    },
  },

  watch: {
    "$route.path"(newPath) {
      if (newPath === "/pos/pos-2" || newPath === "/pos/pos-3") {
        document.body.classList.add("pos-page")
      } else {
        document.body.classList.remove("pos-page")
      }
    },
  },

  mounted() {
    const path = this.$route.path
    if (path === "/pos/pos-2" || path === "/pos/pos-3") {
      document.body.classList.add("pos-page")
    }
  },

  beforeUnmount() {
    document.body.classList.remove("pos-page")
  },
}
</script>
