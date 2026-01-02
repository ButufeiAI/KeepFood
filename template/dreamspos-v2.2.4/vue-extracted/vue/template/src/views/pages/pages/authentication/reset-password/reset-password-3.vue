<template>
  <div class="main-wrapper">
    <div class="account-content">
      <div class="login-wrapper login-new">
        <div class="row w-100">
          <div class="col-lg-5 mx-auto">
            <div class="login-content user-login">
              <div class="login-logo">
                <img src="@/assets/img/logo.svg" alt="img" />
                <router-link to="/dashboard" class="login-logo logo-white">
                  <img src="@/assets/img/logo-white.svg" alt="Img" />
                </router-link>
              </div>
              <form @submit.prevent="submitForm">
                <div class="card">
                  <div class="card-body p-5">
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
                    <div class="signinform text-center mb-0">
                      <h4>
                        Return to
                        <router-link to="/signin-3" class="hover-a"> login </router-link>
                      </h4>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="my-4 d-flex justify-content-center align-items-center copyright-text">
          <p>Copyright &copy; 2025 DreamsPOS</p>
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
      this.$router.push("/success-3");
    },
  },
};
</script>
