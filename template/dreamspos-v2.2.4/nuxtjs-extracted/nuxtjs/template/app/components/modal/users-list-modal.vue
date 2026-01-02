<template>
  <!-- Add User -->
  <div class="modal fade" id="add-user">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header">
              <div class="page-title">
                <h4>Add User</h4>
              </div>
              <button
                type="button"
                class="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body custom-modal-body p-3">
              <form @submit.prevent="submitForm">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="new-employee-field">
                      <div class="profile-pic-upload mb-2">
                        <div class="profile-pic">
                          <span><i class="ti ti-circle-plus me-1"></i>Add Image</span>
                        </div>
                        <div class="mb-0">
                          <div class="image-upload mb-0">
                            <input type="file" />
                            <div class="image-uploads">
                              <h4>Upload Image</h4>
                            </div>
                          </div>
                          <p class="fs-13 mt-2">JPEG, PNG up to 2 MB</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >User<span class="text-danger ms-1">*</span></label
                      >
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >Role<span class="text-danger ms-1">*</span></label
                      >
                      <vue-select :options="ListUs" v-model="selected" placeholder="Choose" />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >Email<span class="text-danger ms-1">*</span></label
                      >
                      <input type="email" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >Phone<span class="text-danger ms-1">*</span></label
                      >
                      <input type="tel" class="form-control" />
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >Password<span class="text-danger ms-1">*</span></label
                      >
                      <div class="pass-group">
                        <input 
                          :type="showPassword ? 'text' : 'password'" 
                          class="pass-input form-control" 
                          v-model="password"
                        />
                        <span class="toggle-password" @click="toggleShow">
                          <i :class="showPassword ? 'ti ti-eye' : 'ti ti-eye-off'"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >Confirm Password<span class="text-danger ms-1">*</span></label
                      >
                      <div class="pass-group">
                        <input 
                          :type="showPassword1 ? 'text' : 'password'" 
                          class="pass-input form-control" 
                          v-model="confirmPassword"
                        />
                        <span class="toggle-password" @click="toggleShow1">
                          <i :class="showPassword1 ? 'ti ti-eye' : 'ti ti-eye-off'"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div
                      class="status-toggle modal-status d-flex justify-content-between align-items-center"
                    >
                      <span class="status-label">Status</span>
                      <input type="checkbox" id="user1" class="check" checked="" />
                      <label for="user1" class="checktoggle"> </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3">
                Add User
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add User -->

  <!-- Edit User -->
  <div class="modal fade" id="edit-user">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header">
              <div class="page-title">
                <h4>Edit User</h4>
              </div>
              <button
                type="button"
                class="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body custom-modal-body p-3">
              <form @submit.prevent="submitForm">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="new-employee-field">
                      <div class="profile-pic-upload image-field">
                        <div class="profile-pic p-2">
                          <img
                            src="@/assets/img/users/user-49.png"
                            class="object-fit-cover h-100 rounded-1"
                            alt="user"
                          />
                          <button type="button" class="close rounded-1">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="mb-3">
                          <div class="image-upload mb-0">
                            <input type="file" />
                            <div class="image-uploads">
                              <h4>Change Image</h4>
                            </div>
                          </div>
                          <p class="mt-2">JPEG, PNG up to 2 MB</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >User<span class="text-danger ms-1">*</span></label
                      >
                      <input type="text" class="form-control" value="Henry Bryant" />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >Role<span class="text-danger ms-1">*</span></label
                      >
                      <vue-select
                        :options="ListUsOne"
                        v-model="selectedOne"
                        placeholder="Admin"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >Email<span class="text-danger ms-1">*</span></label
                      >
                      <input
                        type="email"
                        class="form-control"
                        value="henry@example.com"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >Phone<span class="text-danger ms-1">*</span></label
                      >
                      <input type="tel" class="form-control" value="+12498345785" />
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >Password<span class="text-danger ms-1">*</span></label
                      >
                      <div class="pass-group">
                        <input
                          :type="showPassword2 ? 'text' : 'password'"
                          class="pass-input form-control"
                          v-model="editPassword"
                        />
                        <span class="toggle-password" @click="toggleShow2">
                          <i :class="showPassword2 ? 'ti ti-eye' : 'ti ti-eye-off'"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >Confirm Password<span class="text-danger ms-1">*</span></label
                      >
                      <div class="pass-group">
                        <input
                          :type="showPassword3 ? 'text' : 'password'"
                          class="pass-input form-control"
                          v-model="editConfirmPassword"
                        />
                        <span class="toggle-password" @click="toggleShow3">
                          <i :class="showPassword3 ? 'ti ti-eye' : 'ti ti-eye-off'"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div
                      class="status-toggle modal-status d-flex justify-content-between align-items-center"
                    >
                      <span class="status-label">Status</span>
                      <input type="checkbox" id="user2" class="check" checked="" />
                      <label for="user2" class="checktoggle"> </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit User -->

  <!-- delete modal -->
  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content p-5 px-3 text-center">
            <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"
              ><i class="ti ti-trash fs-24 text-danger"></i
            ></span>
            <h4 class="fs-20 fw-bold mb-2 mt-1">Delete User</h4>
            <p class="mb-0 fs-16">Are you sure you want to delete user?</p>
            <div class="modal-footer-btn mt-3 d-flex justify-content-center">
              <button
                type="button"
                class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3">
                Yes Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: [],
      selectedOne: [],
      password: '',
      confirmPassword: '',
      passwordError: '',
      confirmPasswordError: '',
      editPassword: '',
      editConfirmPassword: '',
      editPasswordError: '',
      editConfirmPasswordError: '',
      showPassword: false,
      showPassword1: false,
      showPassword2: false,
      showPassword3: false,
      ListUs: [
        {label: "Choose", value: "Choose"}, 
        {label: "Manager", value: "Manager"}, 
        {label: "Admin", value: "Admin"}
      ],
      ListUsOne: [
        {label: "Admin", value: "Admin"}, 
        {label: "Manager", value: "Manager"}, 
        {label: "Store Keeper", value: "Store Keeper"}, 
      ],
    };
  },
  watch: {
    password() {
      this.validatePassword();
      if (this.confirmPassword) {
        this.validateConfirmPassword();
      }
    },
    confirmPassword() {
      this.validateConfirmPassword();
    },
    editPassword() {
      this.validateEditPassword();
      if (this.editConfirmPassword) {
        this.validateEditConfirmPassword();
      }
    },
    editConfirmPassword() {
      this.validateEditConfirmPassword();
    },
  },
  methods: {
    validatePassword() {
      this.passwordError = '';
      if (!this.password) {
        this.passwordError = 'Password is required.';
        return false;
      }
      if (this.password.length < 6) {
        this.passwordError = 'Password must be at least 6 characters long.';
        return false;
      }
      return true;
    },
    validateConfirmPassword() {
      this.confirmPasswordError = '';
      if (!this.confirmPassword) {
        this.confirmPasswordError = 'Confirm password is required.';
        return false;
      }
      if (this.password !== this.confirmPassword) {
        this.confirmPasswordError = 'Passwords do not match.';
        return false;
      }
      return true;
    },
    validateEditPassword() {
      this.editPasswordError = '';
      if (!this.editPassword) {
        this.editPasswordError = 'Password is required.';
        return false;
      }
      if (this.editPassword.length < 6) {
        this.editPasswordError = 'Password must be at least 6 characters long.';
        return false;
      }
      return true;
    },
    validateEditConfirmPassword() {
      this.editConfirmPasswordError = '';
      if (!this.editConfirmPassword) {
        this.editConfirmPasswordError = 'Confirm password is required.';
        return false;
      }
      if (this.editPassword !== this.editConfirmPassword) {
        this.editConfirmPasswordError = 'Passwords do not match.';
        return false;
      }
      return true;
    },
    submitForm(event) {
      // Clear previous errors
      this.passwordError = '';
      this.confirmPasswordError = '';
      this.editPasswordError = '';
      this.editConfirmPasswordError = '';
      
      // Check which form is being submitted by checking the closest modal
      const form = event.target.closest('form');
      const modal = form.closest('.modal');
      
      if (modal && modal.id === 'add-user') {
        // Validate Add User form
        const isPasswordValid = this.validatePassword();
        const isConfirmPasswordValid = this.validateConfirmPassword();
        
        if (!isPasswordValid || !isConfirmPasswordValid) {
          return;
        }
      } else if (modal && modal.id === 'edit-user') {
        // Validate Edit User form
        const isEditPasswordValid = this.validateEditPassword();
        const isEditConfirmPasswordValid = this.validateEditConfirmPassword();
        
        if (!isEditPasswordValid || !isEditConfirmPasswordValid) {
          return;
        }
      }
      
      this.$router.push("/users/users-list");
    },
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    toggleShow1() {
      this.showPassword1 = !this.showPassword1;
    },
    toggleShow2() {
      this.showPassword2 = !this.showPassword2;
    },
    toggleShow3() {
      this.showPassword3 = !this.showPassword3;
    },
  },
};
</script>
