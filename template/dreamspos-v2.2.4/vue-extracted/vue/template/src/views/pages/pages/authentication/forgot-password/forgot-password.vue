<template>
  <div class="main-wrapper">
    <div class="account-content">
      <div class="login-wrapper forgot-pass-wrap bg-img">
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
                <h3>Forgot password?</h3>
                <h4>
                  If you forgot your password, well, then we’ll email you instructions to
                  reset your password.
                </h4>
              </div>
              <div class="mb-3">
                <label class="form-label"
                  >Email <span class="text-danger"> *</span></label
                >
                <div class="input-group">
                  <input type="text" value="" class="form-control border-end-0" />
                  <span class="input-group-text border-start-0">
                    <i class="ti ti-mail"></i>
                  </span>
                </div>
              </div>
              <div class="form-login">
                <button type="submit" class="btn btn-login">Sign Up</button>
              </div>
              <div class="signinform text-center">
                <h4>
                  Return to<router-link to="/" class="hover-a"> login </router-link>
                </h4>
              </div>
              <div class="form-setlogin or-text">
                <h4>OR</h4>
              </div>
              <div
                class="my-4 d-flex justify-content-center align-items-center copyright-text"
              >
                <p>Copyright &copy; {{ new Date().getFullYear() }} DreamsPOS</p>
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
        document.body.classList.add("account-page");
      } else {
        document.body.classList.remove("account-page");
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
      this.$router.push("/");
    },
  },
};
</script>
