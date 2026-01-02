<template>
  <div class="main-wrapper">
    <div class="account-content">
      <div class="login-wrapper register-wrap bg-img">
        <div class="login-content authent-content">
          <form @submit.prevent="handleRegister">
            <div class="login-userset">
              <div class="login-logo logo-normal">
                <img src="@/assets/img/logo.svg" alt="img">
              </div>
              <NuxtLink to="/dashboard/admin-dashboard" class="login-logo logo-white">
                <img src="@/assets/img/logo-white.svg" alt="Img">
              </NuxtLink>
              <div class="login-userheading">
                <h3>Register</h3>
                <h4>Create New Dreamspos Account</h4>
              </div>
              <div v-if="errorMessage" class="mb-3">
                <div class="alert alert-danger" role="alert">
                  {{ errorMessage }}
                </div>
              </div>
              <div v-if="successMessage" class="mb-3">
                <div class="alert alert-success" role="alert">
                  {{ successMessage }}
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">Name <span class="text-danger"> *</span></label>
                <div class="input-group">
                  <input type="text" v-model="name" class="form-control border-end-0">
                  <span class="input-group-text border-start-0">
                    <i class="ti ti-user"></i>
                  </span>
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
              <div class="mb-3">
                <label class="form-label">Confirm Password <span class="text-danger"> *</span></label>
                <div class="pass-group">
                  <input :type="showConfirmPassword ? 'text' : 'password'" v-model="confirmPassword" class="pass-inputs form-control">
                  <span class="ti toggle-passwords" :class="showConfirmPassword ? 'ti-eye text-gray-9' : 'ti-eye-off text-gray-9'" @click="toggleConfirmPassword"></span>
                </div>
              </div>
              <div class="form-login authentication-check">
                <div class="row">
                  <div class="col-sm-8">
                    <div class="custom-control custom-checkbox justify-content-start">
                      <div class="custom-control custom-checkbox">
                        <label class="checkboxs ps-4 mb-0 pb-0 line-height-1">
                          <input type="checkbox" v-model="agreeToTerms">
                          <span class="checkmarks"></span>I agree to the <a href="#" class="text-primary">Terms &
                            Privacy</a>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-login">
                <button type="submit" class="btn btn-login" :disabled="isLoading">
                  <span v-if="isLoading">Creating Account...</span>
                  <span v-else>Sign Up</span>
                </button>
              </div>
              <div class="signinform">
                <h4>Already have an account ? <NuxtLink to="/" class="hover-a">Sign In Instead</NuxtLink></h4>
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
  name: 'PosRegister',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeToTerms: false,
      errorMessage: '',
      successMessage: '',
      isLoading: false,
      showPassword: false,
      showConfirmPassword: false
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    toggleConfirmPassword() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },
    handleRegister() {
      // Clear previous messages
      this.errorMessage = '';
      this.successMessage = '';
      this.isLoading = true;

      // Basic validation
      if (!this.name.trim()) {
        this.errorMessage = 'Name is required.';
        this.isLoading = false;
        return;
      }

      if (!this.email.trim()) {
        this.errorMessage = 'Email is required.';
        this.isLoading = false;
        return;
      }

      // Simple email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.email)) {
        this.errorMessage = 'Please enter a valid email address.';
        this.isLoading = false;
        return;
      }

      if (!this.password) {
        this.errorMessage = 'Password is required.';
        this.isLoading = false;
        return;
      }

      if (this.password.length < 6) {
        this.errorMessage = 'Password must be at least 6 characters long.';
        this.isLoading = false;
        return;
      }

      if (this.password !== this.confirmPassword) {
        this.errorMessage = 'Passwords do not match.';
        this.isLoading = false;
        return;
      }

      if (!this.agreeToTerms) {
        this.errorMessage = 'You must agree to the Terms & Privacy.';
        this.isLoading = false;
        return;
      }

      // Simulate API delay
      setTimeout(() => {
        // Store registered user credentials in localStorage
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        
        // Check if email already exists
        const emailExists = registeredUsers.some(user => user.email === this.email.trim());
        if (emailExists) {
          this.errorMessage = 'This email is already registered. Please use a different email.';
          this.isLoading = false;
          return;
        }
        
        // Add new user to registered users
        registeredUsers.push({
          email: this.email.trim(),
          password: this.password,
          name: this.name.trim()
        });
        
        // Save to localStorage
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
        
        // Fake registration - simulate success
        this.successMessage = 'Account created successfully! Redirecting to sign in...';
        this.isLoading = false;
        
        // Redirect to sign in page after 2 seconds with email as query parameter
        // Only pass email if it's valid
        setTimeout(() => {
          if (this.email && this.email.trim()) {
            this.$router.push({
              path: '/',
              query: { email: this.email.trim() }
            });
          } else {
            this.$router.push('/');
          }
        }, 2000);
      }, 1000);
    }
  }
};
</script>