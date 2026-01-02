<template>
  <div class="main-wrapper" :class="posWrapperClass">
    <template v-if="shouldShowHeaderAndSidebar">
      <layout-header />
      <layout-sidebar />
    </template>
    
    <template v-if="shouldShowPosHeader">
      <pos-header />
    </template>

    <router-view />

  </div>
</template>

<script>

export default {
  computed: {
    // Hide header and sidebar on login/register pages
    shouldShowHeaderAndSidebar() {
      const path = this.$route.path
      return !(
        path === "/" ||
        path.includes("/login") ||
        path.includes("/register") ||
        path.includes("/forgot-password") ||
        path.includes("/email-verification") ||
        path.includes("/otp") ||
        path.includes("/reset-password") ||
        path.includes("/main-menu/pos") 
      )
    },
    shouldShowPosHeader() {
      return this.$route.path.includes("/main-menu/pos")
    },
    posWrapperClass() {
      const path = this.$route.path
      if (path === "/main-menu/pos") {
        return "pos-wrapper"
      }
      return ""
    },
  },
}
</script>
