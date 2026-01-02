<template>
  <div class="main-wrapper">
    <div class="account-content">
      <div class="row login-wrapper m-0">
        <div class="col-lg-6 p-0">
          <div class="login-content">
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
                    If you forgot your password, well, then we’ll email you instructions
                    to reset your password.
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
                    Return to<router-link to="/signin-2" class="hover-a">
                      login
                    </router-link>
                  </h4>
                </div>
                <div class="form-setlogin or-text">
                  <h4>OR</h4>
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
        <div class="col-lg-6 p-0">
          <div class="login-img">
            <img src="@/assets/img/authentication/authentication-03.svg" alt="img" />
          </div>
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
      this.$router.push("/signin-2");
    },
  },
};
</script>
