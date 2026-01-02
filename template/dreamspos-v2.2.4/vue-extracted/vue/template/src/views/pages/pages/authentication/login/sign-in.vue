<template>
  <div class="main-wrapper">
    <div class="account-content">
      <div class="login-wrapper bg-img">
        <div class="login-content authent-content">
          <form @submit.prevent="handleLogin">
            <div class="login-userset">
              <div class="login-logo logo-normal">
                <img src="@/assets/img/logo.svg" alt="img">
              </div>
              <router-link to="/dashboard" class="login-logo logo-white">
                <img src="@/assets/img/logo-white.svg" alt="Img" />
              </router-link>
              <div class="login-userheading">
                <h3>Sign In</h3>
                <h4 class="fs-16">Access the Dreamspos panel using your email and passcode.</h4>
              </div>
              <div v-if="errorMessage" class="mb-3">
                <div class="alert alert-danger" role="alert">
                  {{ errorMessage }}
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">Email <span class="text-danger"> *</span></label>
                <div class="input-group">
                  <input type="text" v-model="email" class="form-control border-end-0">
                  <span class="input-group-text border-start-0">
                    <i class="ti ti-mail"></i>
                  </span>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">Password <span class="text-danger"> *</span></label>
                <div class="pass-group">
                  <input :type="showPassword ? 'text' : 'password'" v-model="password" class="pass-input form-control">
                  <span class="ti toggle-password" :class="showPassword ? 'ti-eye text-gray-9' : 'ti-eye-off text-gray-9'" @click="togglePassword"></span>
                </div>
              </div>
              <div class="form-login authentication-check">
                <div class="row">
                  <div class="col-12 d-flex align-items-center justify-content-between">
                    <div class="custom-control custom-checkbox">
                      <label class="checkboxs ps-4 mb-0 pb-0 line-height-1 fs-16 text-gray-6">
                        <input type="checkbox" v-model="rememberMe" class="form-control">
                        <span class="checkmarks"></span>Remember me
                      </label>
                    </div>
                    <div class="text-end">
                      <router-link class="text-orange fs-16 fw-medium" to="/forgot-password">Forgot Password?</router-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-login">
                <button type="submit" class="btn btn-primary w-100" :disabled="isLoading">
                  <span v-if="isLoading">Signing In...</span>
                  <span v-else>Sign In</span>
                </button>
              </div>
              <div class="signinform">
                <h4>New on our platform?<router-link to="/register" class="hover-a"> Create an account</router-link></h4>
              </div>
              <div class="form-setlogin or-text">
                <h4>OR</h4>
              </div>
              <div class="mt-2">
                <div class="d-flex align-items-center justify-content-center flex-wrap">
                  <div class="text-center me-2 flex-fill">
                    <a href="javascript:void(0);"
                      class="br-10 p-2 btn btn-info d-flex align-items-center justify-content-center">
                      <img class="img-fluid m-1" src="@/assets/img/icons/facebook-logo.svg" alt="Facebook">
                    </a>
                  </div>
                  <div class="text-center me-2 flex-fill">
                    <a href="javascript:void(0);"
                      class="btn btn-white br-10 p-2  border d-flex align-items-center justify-content-center">
                      <img class="img-fluid m-1" src="@/assets/img/icons/google-logo.svg" alt="Facebook">
                    </a>
                  </div>
                  <div class="text-center flex-fill">
                    <a href="javascript:void(0);"
                      class="bg-dark br-10 p-2 btn btn-dark d-flex align-items-center justify-content-center">
                      <img class="img-fluid m-1" src="@/assets/img/icons/apple-logo.svg" alt="Apple">
                    </a>
                  </div>
                </div>
              </div>
              <div class="my-4 d-flex justify-content-center align-items-center copyright-text">
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
export default {
  name: 'SignIn',
  data() {
    return {
      email: 'admin@example.com',
      password: '123456',
      rememberMe: false,
      errorMessage: '',
      isLoading: false,
      showPassword: false
    };
  },
  mounted() {
    // Check if email is passed as query parameter from registration
    if (this.$route.query.email) {
      this.email = this.$route.query.email;
    }
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    handleLogin() {
      // Clear previous error
      this.errorMessage = '';
      this.isLoading = true;

      // Simulate API delay
      setTimeout(() => {
        let isAuthenticated = false;
        
        // Check default admin credentials
        if (this.email === 'admin@example.com' && this.password === '123456') {
          isAuthenticated = true;
        } else {
          // Check registered users from localStorage
          const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
          const user = registeredUsers.find(
            user => user.email === this.email.trim() && user.password === this.password
          );
          
          if (user) {
            isAuthenticated = true;
          }
        }
        
        
        if (isAuthenticated) {
          // Success - redirect to dashboard
          this.$router.push('/dashboard');
        } else {
          // Show error message
          this.errorMessage = 'Invalid email or password. Please try again.';
          this.isLoading = false;
        }
      }, 1000);
    }
  }
};
</script>
