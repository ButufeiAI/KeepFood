<template>
  <div id="app">
    <div class="main-wrapper" :class="posWrapperClass">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    // Check if the current route is the authentication route (e.g., '/')
    posWrapperClass() {
      if (this.$route.path === "/pos/pos-1") {
        return "pos-five";
      } else if (this.$route.path === "/pos/pos-5") {
        return "pos-three pos-four";
      } else if (this.$route.path === "/pos/pos-3") {
        return "pos-two";
      }
      return "";
    },
  },
  watch: {
    "$route.path"(newPath) {
      if (newPath === "/pos/pos-2" || newPath === "/pos/pos-3") {
        document.body.classList.add("pos-page");
      } else {
        document.body.classList.remove("pos-page");
      }
    },
  },
  mounted() {
    // Call once when component is mounted
    if (this.$route.path === "/pos/pos-2" || this.$route.path === "/pos/pos-3") {
      document.body.classList.add("pos-page");
    }
  },
  beforeUnmount() {
    // Cleanup when component unmounts
    document.body.classList.remove("pos-page");
  },
};
</script>