<template>
  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content pb-0">
      <!-- Page Header -->
      <div class="breadcrumb-arrow mb-4">
        <h4 class="mb-1">Form Wizard</h4>
        <div class="text-end">
          <ol class="breadcrumb m-0 py-0">
            <li class="breadcrumb-item"> <NuxtLink to="/dashboard/admin-dashboard">Home</NuxtLink></li>
            <li class="breadcrumb-item"><a href="javascript:void(0);">Base UI</a></li>
            <li class="breadcrumb-item active">Form Wizard</li>
          </ol>
        </div>
      </div>
      <!-- End Page Header -->

      <!-- start row -->
      <div class="row">
        <!-- Basic Wizard -->
        <div class="col-lg-6">
          <div class="card">
            <div class="card-header d-flex align-items-center">
              <h4 class="header-title">A Basic Wizard</h4>
            </div>
            <div class="card-body">
              <form @submit.prevent="submitForm">
                <div id="basicwizard">
                  <ul class="nav nav-pills nav-justified form-wizard-header mb-4">
                    <li v-for="(step, index) in steps" :key="index" class="nav-item">
                      <a href="javascript:void(0)" 
                         class="nav-link rounded-0 py-2" 
                         :class="{ 
                           'active': currentStep === index
                         }">
                        <i :class="[
                            'fs-18 align-middle me-1',
                            index === 0 ? '' :
                            index === 1 ? '' : ''
                          ]"></i>
                        <span class="d-none d-sm-inline">{{ step }}</span>
                      </a>
                    </li>
                  </ul>

                <!-- Step 1: Account -->
                <div v-show="currentStep === 0" class="tab-pane">
                  <div class="row">
                    <div class="col-12">
                      <div class="row mb-3">
                        <label class="col-md-3 col-form-label" for="userName">User Name</label>
                        <div class="col-md-9">
                          <input type="text" class="form-control" id="userName" v-model="formData.userName" required>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <label class="col-md-3 col-form-label" for="password">Password</label>
                        <div class="col-md-9">
                          <input type="password" id="password" class="form-control" v-model="formData.password" required>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <label class="col-md-3 col-form-label" for="confirm">Confirm Password</label>
                        <div class="col-md-9">
                          <input type="password" id="confirm" class="form-control" v-model="formData.confirm" required>
                          <small v-if="!isPasswordMatch && formData.confirm" class="text-danger">
                            Passwords do not match
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Step 2: Profile -->
                <div v-show="currentStep === 1" class="tab-pane">
                  <div class="row">
                    <div class="col-12">
                      <div class="row mb-3">
                        <label class="col-md-3 col-form-label" for="name">First Name</label>
                        <div class="col-md-9">
                          <input type="text" id="name" class="form-control" v-model="formData.name" required>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <label class="col-md-3 col-form-label" for="surname">Last Name</label>
                        <div class="col-md-9">
                          <input type="text" id="surname" class="form-control" v-model="formData.surname" required>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <label class="col-md-3 col-form-label" for="email">Email</label>
                        <div class="col-md-9">
                          <input type="email" id="email" class="form-control" v-model="formData.email" required>
                          <small v-if="!isStep2Valid && formData.email" class="text-danger">
                            Please enter a valid email address
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Step 3: Finish -->
                <div v-show="currentStep === 2" class="tab-pane">
                  <div class="row">
                    <div class="col-12">
                      <div class="text-center">
                        <h2 class="mt-0"><i class="bi bi-check-circle text-success"></i></h2>
                        <h3 class="mt-0">Thank you!</h3>
                        <p class="w-75 mb-2 mx-auto">You are about to submit the form.</p>
                        <div class="mb-3">
                          <div class="form-check d-inline-block">
                            <input type="checkbox" class="form-check-input fs-15" id="customCheck1" v-model="formData.agreeTerms" required>
                            <label class="form-check-label" for="customCheck1">I agree with the Terms and Conditions</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Navigation Buttons -->
                <div class="d-flex justify-content-between pt-3">
                  <button type="button" class="btn btn-primary" @click="prevStep" :disabled="currentStep === 0">
                    <i class="bi bi-arrow-left me-1"></i> Previous
                  </button>
                  
                  <button v-if="currentStep < steps.length - 1" 
                          type="button" 
                          class="btn btn-primary" 
                          @click="nextStep"
                          :disabled="(currentStep === 0 && !isStep1Valid) || (currentStep === 1 && !isStep2Valid)">
                    Next <i class="bi bi-arrow-right ms-1"></i>
                  </button>
                  
                  <button v-else 
                          type="submit" 
                          class="btn btn-primary"
                          :disabled="!formData.agreeTerms">
                    <i class="bi bi-check2-circle me-1"></i> Submit
                  </button>
                </div>
                </div>
              </form>
            </div> <!-- end card-body -->
          </div> <!-- end card -->
        </div> <!-- end col -->

        <div class="col-lg-6">
          <div class="card">
            <div class="card-header d-flex align-items-center">
              <h4 class="header-title">Wizard With Progress Bar</h4>
            </div>
            <div class="card-body">
              <form @submit.prevent="submitProgressForm">
                <!-- Progress Bar Wizard Steps -->
                <ul class="nav nav-pills nav-justified form-wizard-header mb-3">
                  <li v-for="(step, index) in progressSteps" :key="'progress-' + index" class="nav-item">
                    <a href="javascript:void(0)" 
                       class="nav-link rounded-0 py-2" 
                       :class="{ 'active': currentProgressStep === index }"
                       @click="goToProgressStep(index)">
                      <i :class="[
                        'fs-18 align-middle me-1',
                        index === 0 ? '' :
                        index === 1 ? '' :
                        ''
                      ]"></i>
                      <span class="d-none d-sm-inline">{{ step }}</span>
                    </a>
                  </li>
                </ul>

                <!-- Progress Bar -->
                <div class="progress mb-3" style="height: 7px;">
                  <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" 
                       :style="{ width: progressPercentage + '%' }"></div>
                </div>

                <!-- Step 1: Account -->
                <div v-show="currentProgressStep === 0" class="tab-pane">
                  <div class="row">
                    <div class="col-12">
                      <div class="row mb-3">
                        <label class="col-md-3 col-form-label" for="userName1">User Name</label>
                        <div class="col-md-9">
                          <input type="text" class="form-control" id="userName1" v-model="progressFormData.userName" required>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <label class="col-md-3 col-form-label" for="password1"> Password</label>
                        <div class="col-md-9">
                          <input type="password" id="password1" class="form-control" v-model="progressFormData.password" required>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <label class="col-md-3 col-form-label" for="confirm1">Re Password</label>
                        <div class="col-md-9">
                          <input type="password" id="confirm1" class="form-control" v-model="progressFormData.confirm" required>
                          <small v-if="!isProgressPasswordMatch && progressFormData.confirm" class="text-danger">
                            Passwords do not match
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Step 2: Profile -->
                <div v-show="currentProgressStep === 1" class="tab-pane">
                  <div class="row">
                    <div class="col-12">
                      <div class="row mb-3">
                        <label class="col-md-3 col-form-label" for="name1">First Name</label>
                        <div class="col-md-9">
                          <input type="text" id="name1" class="form-control" v-model="progressFormData.name" required>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <label class="col-md-3 col-form-label" for="surname1">Last Name</label>
                        <div class="col-md-9">
                          <input type="text" id="surname1" class="form-control" v-model="progressFormData.surname" required>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <label class="col-md-3 col-form-label" for="email1">Email</label>
                        <div class="col-md-9">
                          <input type="email" id="email1" class="form-control" v-model="progressFormData.email" required>
                          <small v-if="!isProgressStep2Valid && progressFormData.email" class="text-danger">
                            Please enter a valid email address
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Step 3: Finish -->
                <div v-show="currentProgressStep === 2" class="tab-pane">
                  <div class="row">
                    <div class="col-12">
                      <div class="text-center">
                        <h2 class="mt-0"><i class="bi bi-check-circle text-success"></i></h2>
                        <h3 class="mt-0">Thank you!</h3>
                        <p class="w-75 mb-2 mx-auto">You are about to submit the form with a progress bar.</p>
                        <div class="mb-3">
                          <div class="form-check d-inline-block">
                            <input type="checkbox" class="form-check-input fs-15" id="customCheck3" v-model="progressFormData.agreeTerms" required>
                            <label class="form-check-label" for="customCheck3">I agree with the Terms and Conditions</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Navigation Buttons -->
                <div class="d-flex wizard justify-content-between flex-wrap gap-2 mt-3">
                  <div class="first">
                    <a href="javascript:void(0);" class="btn btn-primary" @click.prevent="goToProgressStep(0)" :class="{ disabled: currentProgressStep === 0 }">
                      First
                    </a>
                  </div>
                  <div class="d-flex flex-wrap gap-2">
                    <div class="previous">
                      <a href="javascript:void(0);" class="btn btn-primary" @click.prevent="prevProgressStep" :class="{ disabled: currentProgressStep === 0 }">
                        <i class="bx bx-left-arrow-alt me-2"></i>Back To Previous
                      </a>
                    </div>
                    <div class="next" v-if="currentProgressStep < progressSteps.length - 1">
                      <a href="javascript:void(0);" class="btn btn-primary mt-3 mt-md-0" @click.prevent="nextProgressStep" :class="{ disabled: (currentProgressStep === 0 && !isProgressStep1Valid) || (currentProgressStep === 1 && !isProgressStep2Valid) }">
                        Next Step<i class="bx bx-right-arrow-alt ms-2"></i>
                      </a>
                    </div>
                    <div class="last" v-else>
                      <a href="javascript:void(0);" class="btn btn-primary mt-3 mt-md-0" @click.prevent="submitProgressForm" :class="{ disabled: !progressFormData.agreeTerms }">
                        Finish
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div> <!-- end card-body -->
          </div> <!-- end card -->
        </div> <!-- end col -->

        <div class="col-lg-6">
          <div class="card">
            <div class="card-header d-flex align-items-center">
              <h4 class="header-title">Wizard With Form Validation</h4>
            </div>

            <div class="card-body">
              <form @submit.prevent="submitValidationForm">
                <!-- Validation Wizard Steps -->
                <ul class="nav nav-pills nav-justified form-wizard-header mb-3">
                  <li v-for="(step, index) in validationSteps" :key="'validation-' + index" class="nav-item">
                    <a href="javascript:void(0)" 
                       class="nav-link rounded-0 py-2" 
                       :class="{ 'active': currentValidationStep === index }"
                       @click="goToValidationStep(index)">
                      <i :class="[
                        'fs-18 align-middle me-1',
                        index === 0 ? '' :
                        index === 1 ? '' :
                        ''
                      ]"></i>
                      <span class="d-none d-sm-inline">{{ step }}</span>
                    </a>
                  </li>
                </ul>

                <!-- Step 1: Account -->
                <div v-show="currentValidationStep === 0" class="tab-pane">
                  <div class="row">
                    <div class="col-12">
                      <div class="row mb-3">
                        <label class="col-md-3 col-form-label" for="userName3">User Name</label>
                        <div class="col-md-9">
                          <input 
                            type="text" 
                            class="form-control" 
                            id="userName3" 
                            v-model="validationFormData.userName" 
                            @blur="validationTouched.userName = true"
                            required>
                          <div v-if="currentValidationStep === 0 && !validationFormData.userName && validationTouched.userName" class="text-danger">
                            Username is required
                          </div>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <label class="col-md-3 col-form-label" for="password3">Password</label>
                        <div class="col-md-9">
                          <input 
                            type="password" 
                            id="password3" 
                            class="form-control" 
                            v-model="validationFormData.password" 
                            @blur="validationTouched.password = true"
                            required>
                          <div v-if="currentValidationStep === 0 && !validationFormData.password && validationTouched.password" class="text-danger">
                            Password is required
                          </div>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <label class="col-md-3 col-form-label" for="confirm3">Confirm Password</label>
                        <div class="col-md-9">
                          <input 
                            type="password" 
                            id="confirm3" 
                            class="form-control" 
                            v-model="validationFormData.confirm" 
                            @blur="validationTouched.confirm = true"
                            required>
                          <div v-if="!isValidationPasswordMatch && validationFormData.confirm" class="text-danger">
                            Passwords do not match
                          </div>
                          <div v-else-if="currentValidationStep === 0 && !validationFormData.confirm && validationTouched.confirm" class="text-danger">
                            Please confirm your password
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Step 2: Profile -->
                <div v-show="currentValidationStep === 1" class="tab-pane">
                  <div class="row">
                    <div class="col-12">
                      <div class="row mb-3">
                        <label class="col-md-3 col-form-label" for="name3">First Name</label>
                        <div class="col-md-9">
                          <input 
                            type="text" 
                            id="name3" 
                            class="form-control" 
                            v-model="validationFormData.name" 
                            @blur="validationTouched.name = true"
                            required>
                          <div v-if="currentValidationStep === 1 && !validationFormData.name && validationTouched.name" class="text-danger">
                            First name is required
                          </div>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <label class="col-md-3 col-form-label" for="surname3">Last Name</label>
                        <div class="col-md-9">
                          <input 
                            type="text" 
                            id="surname3" 
                            class="form-control" 
                            v-model="validationFormData.surname" 
                            @blur="validationTouched.surname = true"
                            required>
                          <div v-if="currentValidationStep === 1 && !validationFormData.surname && validationTouched.surname" class="text-danger">
                            Last name is required
                          </div>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <label class="col-md-3 col-form-label" for="email3">Email</label>
                        <div class="col-md-9">
                          <input 
                            type="email" 
                            id="email3" 
                            class="form-control" 
                            v-model="validationFormData.email" 
                            @blur="validationTouched.email = true"
                            required>
                          <div v-if="!isValidationEmailValid && validationFormData.email" class="text-danger">
                            Please enter a valid email address
                          </div>
                          <div v-else-if="currentValidationStep === 1 && !validationFormData.email && validationTouched.email" class="text-danger">
                            Email is required
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Step 3: Finish -->
                <div v-show="currentValidationStep === 2" class="tab-pane">
                  <div class="row">
                    <div class="col-12">
                      <div class="text-center">
                        <h2 class="mt-0"><i class="bi bi-check-circle text-success"></i></h2>
                        <h3 class="mt-0">Thank you!</h3>
                        <p class="w-75 mb-2 mx-auto">
                          Quisque nec turpis at urna dictum luctus. Suspendisse convallis
                          dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet.
                        </p>
                        <div class="mb-3">
                          <div class="form-check d-inline-block">
                            <input 
                              type="checkbox" 
                              class="form-check-input fs-15" 
                              id="agreeTerms3" 
                              v-model="validationFormData.agreeTerms" 
                              @change="validationTouched.agreeTerms = true"
                              required>
                            <label class="form-check-label" for="agreeTerms3">I agree with the Terms and Conditions</label>
                            <div v-if="currentValidationStep === 2 && !validationFormData.agreeTerms && validationTouched.agreeTerms" class="text-danger mt-2">
                              You must agree to the terms and conditions
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Navigation Buttons -->
                <div class="d-flex wizard justify-content-between flex-wrap gap-2 mt-3">
                  <div class="first">
                    <a href="javascript:void(0);" class="btn btn-primary" @click.prevent="goToFirstStep" :class="{ disabled: currentValidationStep === 0 }">
                      First
                    </a>
                  </div>
                  <div class="d-flex flex-wrap gap-2">
                    <div class="previous">
                      <a href="javascript:void(0);" class="btn btn-primary" @click.prevent="prevValidationStep" :class="{ disabled: currentValidationStep === 0 }">
                        <i class="bx bx-left-arrow-alt me-2"></i>Back To Previous
                      </a>
                    </div>
                    <div class="next" v-if="currentValidationStep < validationSteps.length - 1">
                      <a href="javascript:void(0);" class="btn btn-primary mt-3 mt-md-0" @click.prevent="nextValidationStep" :class="{ disabled: isNextButtonDisabled }">
                        Next Step<i class="bx bx-right-arrow-alt ms-2"></i>
                      </a>
                    </div>
                  </div>
                  <div class="last" v-if="currentValidationStep === validationSteps.length - 1">
                    <a href="javascript:void(0);" class="btn btn-primary mt-3 mt-md-0" @click.prevent="submitValidationForm" :class="{ disabled: !validationFormData.agreeTerms }">
                      Finish
                    </a>
                  </div>
                </div>
              </form>

            </div> <!-- end card-body -->
          </div> <!-- end card -->
        </div> <!-- end col -->

      </div>
      <!-- end row -->

    </div>
    <!-- End Content -->

    <!-- Start Footer -->
    <footer class="footer text-center">
      <p class="mb-0 text-dark">2025 &copy; <a href="javascript:void(0);" class="link-primary">Dreams EMR</a> - All
        Rights Reserved.</p>
    </footer>
    <!-- End Footer -->

  </div>
</template>
<script>
// import '@/assets/css/form-wizard.css'
export default {
  data() {
    return {
      // Basic Wizard
      steps: ['Account', 'Profile', 'Finish'],
      currentStep: 0,
      formData: {
        userName: '',
        password: '',
        confirm: '',
        name: '',
        surname: '',
        email: '',
        agreeTerms: false
      },

      // Progress Wizard
      progressSteps: ['Account', 'Profile', 'Finish'],
      currentProgressStep: 0,
      progressFormData: {
        userName: '',
        password: '',
        confirm: '',
        name: '',
        surname: '',
        email: '',
        agreeTerms: false
      },

      // Validation Wizard
      validationSteps: ['Account', 'Profile', 'Finish'],
      currentValidationStep: 0,
      validationFormData: {
        userName: '',
        password: '',
        confirm: '',
        name: '',
        surname: '',
        email: '',
        agreeTerms: false
      },
      validationTouched: {
        userName: false,
        password: false,
        confirm: false,
        name: false,
        surname: false,
        email: false,
        agreeTerms: false
      }
    };
  },
  computed: {
    // Basic Wizard validations
    isPasswordMatch() {
      return this.formData.password === this.formData.confirm;
    },
    isStep1Valid() {
      return this.formData.userName && 
             this.formData.password && 
             this.formData.confirm && 
             this.isPasswordMatch;
    },
    isStep2Valid() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return this.formData.name && 
             this.formData.surname && 
             this.formData.email && 
             emailRegex.test(this.formData.email);
    },

    // Progress Wizard validations
    progressPercentage() {
      return ((this.currentProgressStep + 1) / this.progressSteps.length) * 100;
    },
    isProgressPasswordMatch() {
      return this.progressFormData.password === this.progressFormData.confirm;
    },
    isProgressStep1Valid() {
      return this.progressFormData.userName && 
             this.progressFormData.password && 
             this.progressFormData.confirm && 
             this.isProgressPasswordMatch;
    },
    isProgressStep2Valid() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return this.progressFormData.name && 
             this.progressFormData.surname && 
             this.progressFormData.email && 
             emailRegex.test(this.progressFormData.email);
    },

    // Validation Wizard validations
    isValidationPasswordMatch() {
      return this.validationFormData.password === this.validationFormData.confirm;
    },
    isValidationEmailValid() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(this.validationFormData.email);
    },
    isNextButtonDisabled() {
      if (this.currentValidationStep === 0) {
        return !this.validationFormData.userName || 
               !this.validationFormData.password || 
               !this.validationFormData.confirm || 
               !this.isValidationPasswordMatch;
      } else if (this.currentValidationStep === 1) {
        return !this.validationFormData.name || 
               !this.validationFormData.surname || 
               !this.validationFormData.email || 
               !this.isValidationEmailValid;
      }
      return false;
    }
  },
  methods: {
    // Basic Wizard methods
    nextStep() {
      if (this.currentStep < this.steps.length - 1) {
        this.currentStep++;
      }
    },
    prevStep() {
      if (this.currentStep > 0) {
        this.currentStep--;
      }
    },
    submitForm() {
      console.log('Form submitted:', this.formData);
      alert('Form submitted successfully!');
      // Reset form if needed
      this.currentStep = 0;
      this.formData = {
        userName: '',
        password: '',
        confirm: '',
        name: '',
        surname: '',
        email: '',
        agreeTerms: false
      };
    },

    // Progress Wizard methods
    nextProgressStep() {
      if (this.currentProgressStep < this.progressSteps.length - 1) {
        this.currentProgressStep++;
      }
    },
    prevProgressStep() {
      if (this.currentProgressStep > 0) {
        this.currentProgressStep--;
      }
    },
    goToProgressStep(index) {
      if (index >= 0 && index < this.progressSteps.length) {
        this.currentProgressStep = index;
      }
    },
    submitProgressForm() {
      console.log('Progress form submitted:', this.progressFormData);
      alert('Progress form submitted successfully!');
      // Reset form if needed
      this.currentProgressStep = 0;
      this.progressFormData = {
        userName: '',
        password: '',
        confirm: '',
        name: '',
        surname: '',
        email: '',
        agreeTerms: false
      };
    },

    // Validation Wizard methods
    nextValidationStep() {
      if (this.currentValidationStep < this.validationSteps.length - 1) {
        // Mark fields as touched when moving to next step
        if (this.currentValidationStep === 0) {
          this.validationTouched.userName = true;
          this.validationTouched.password = true;
          this.validationTouched.confirm = true;
        } else if (this.currentValidationStep === 1) {
          this.validationTouched.name = true;
          this.validationTouched.surname = true;
          this.validationTouched.email = true;
        }
        
        if (!this.isNextButtonDisabled) {
          this.currentValidationStep++;
        }
      }
    },
    prevValidationStep() {
      if (this.currentValidationStep > 0) {
        this.currentValidationStep--;
      }
    },
    goToValidationStep(index) {
      if (index >= 0 && index < this.validationSteps.length) {
        this.currentValidationStep = index;
      }
    },
    goToFirstStep() {
      this.currentValidationStep = 0;
    },
    submitValidationForm() {
      if (this.validationFormData.agreeTerms) {
        this.validationTouched.agreeTerms = true;
        console.log('Validation form submitted:', this.validationFormData);
        alert('Validation form submitted successfully!');
        // Reset form if needed
        this.currentValidationStep = 0;
        this.validationFormData = {
          userName: '',
          password: '',
          confirm: '',
          name: '',
          surname: '',
          email: '',
          agreeTerms: false
        };
        this.validationTouched = {
          userName: false,
          password: false,
          confirm: false,
          name: false,
          surname: false,
          email: false,
          agreeTerms: false
        };
      } else {
        this.validationTouched.agreeTerms = true;
      }
    }
  }
};
</script>
