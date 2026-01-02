<template>
    <ModulesAuthenticationLogin />
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount } from "vue";

export default defineComponent({
  name: "LoginPage",
  setup() {
    onMounted(() => {
      document.body.classList.add("account-page");
    });

    onBeforeUnmount(() => {
      document.body.classList.remove("account-page");
    });
  },
});
</script>
