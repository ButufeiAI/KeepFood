<template>
  <div class="main-wrapper">
    <div class="account-content">
      <div class="login-wrapper reset-pass-wrap bg-img">
        <div class="login-content authent-content">
          <form @submit.prevent="submitForm">
            <div class="login-userset">
              <div class="login-logo logo-normal">
                <img src="@/assets/img/logo.svg" alt="img" />
              </div>
              <router-link to="/dashboard" class="login-logo logo-white">
                <img src="@/assets/img/logo-white.svg" alt="Img" />
              </router-link>
              <div class="login-userheading">
                <h3>Reset password?</h3>
                <h4>Enter New Password & Confirm Password to get inside</h4>
              </div>
              <div class="mb-3">
                <label class="form-label"
                  >Old Password <span class="text-danger"> *</span></label
                >
                <div class="pass-group">
                  <input type="password" class="pass-input form-control" />
                  <span class="ti toggle-password ti-eye-off text-gray-9"></span>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label"
                  >New Password <span class="text-danger"> *</span></label
                >
                <div class="pass-group">
                  <input type="password" class="pass-inputs form-control" />
                  <span class="ti toggle-passwords ti-eye-off text-gray-9"></span>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label"
                  >Confirm Password <span class="text-danger"> *</span></label
                >
                <div class="pass-group">
                  <input type="password" class="pass-inputa form-control" />
                  <span class="ti toggle-passworda ti-eye-off text-gray-9"></span>
                </div>
              </div>
              <div class="form-login">
                <button type="submit" class="btn btn-login">Change Password</button>
              </div>
              <div class="signinform text-center">
                <h4>
                  Return to
                  <router-link to="/signin" class="hover-a"> login </router-link>
                </h4>
              </div>
              <div
                class="my-4 d-flex justify-content-center align-items-center copyright-text"
              >
                <p>Copyright &copy; 2025 DreamsPOS</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";

export default {
  setup() {
    const isAccountPage = ref(true);
    const updateBodyClass = (isAccountPage) => {
      if (isAccountPage) {
        document.body.classList.add("account-page", "bg-white");
      } else {
        document.body.classList.remove("account-page", "bg-white");
      }
    };
    onMounted(() => {
      updateBodyClass(isAccountPage.value);
    });
    onBeforeUnmount(() => {
      updateBodyClass(false);
    });

    watch(isAccountPage, (newValue) => {
      updateBodyClass(newValue);
    });

    return {
      isAccountPage,
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/success");
    },
  },
};
</script>
