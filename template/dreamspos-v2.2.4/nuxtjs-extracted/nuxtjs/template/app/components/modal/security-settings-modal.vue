<template>
  <!-- Change Password -->
  <div class="modal fade" id="change-password">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Change Password</h4>
          </div>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-lg-12">
              <div class="input-blocks">
                <label class="fw-medium"
                  >Current Password <span class="text-danger">*</span></label
                >
                <div class="pass-group">
                    <input :type="showPassword ? 'text' : 'password'" v-model="password" class="pass-input form-control">
                    <span class="ti toggle-password" :class="showPassword ? 'ti-eye text-gray-9' : 'ti-eye-off text-gray-9'" @click="togglePassword"></span>
                  </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="input-blocks">
                <label class="fw-medium"
                  >New Password <span class="text-danger">*</span></label
                >
                <div class="pass-group" id="passwordInput">
                  <input type="password" class="form-control settings-pass-inputs" />
                  <span class="toggle-passwords ti ti-eye-off"></span>
                  <span class="pass-checked"></span>
                </div>
                <div class="password-strength" id="passwordStrength">
                  <span id="poor"></span>
                  <span id="weak"></span>
                  <span id="strong"></span>
                  <span id="heavy"></span>
                </div>
                <div id="passwordInfo"></div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="input-blocks mb-0">
                <label class="fw-medium"
                  >Confirm Password <span class="text-danger">*</span></label
                >
                <div class="pass-group">
                  <input type="password" class="form-control settings-pass-inputa" />
                  <span class="toggle-passworda ti ti-eye-off"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <a
            href="javascript:void(0);"
            class="btn btn-secondary me-2"
            data-bs-dismiss="modal"
            >Cancel</a
          >
          <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal"
            >Save Changes</a
          >
        </div>
      </div>
    </div>
  </div>
  <!-- /Change Password -->

  <!-- Change Phone Number -->
  <div class="modal fade" id="phone-verification">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Change Phone Number</h4>
          </div>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-lg-12">
              <div class="input-blocks">
                <label class="fw-medium"
                  >Current Phone Number <span class="text-danger">*</span></label
                >
                <input class="form-control" id="phone" name="phone" type="tel" v-model="currentPhone" />
              </div>
            </div>
            <div class="col-lg-12">
              <div class="input-blocks">
                <label class="fw-medium"
                  >New Phone Number <span class="text-danger">*</span></label
                >
                <input class="form-control" id="phone2" name="phone2" type="tel" v-model="newPhone" />
              </div>
            </div>
            <div class="col-lg-12">
              <div class="input-blocks">
                <p class="fs-14">
                  <i class="ti ti-info-circle me-1"></i> New phone number only updated
                  once you verified
                </p>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="input-blocks mb-0">
                <label class="fw-medium"
                  >Current Password <span class="text-danger">*</span></label
                >
                <div class="pass-group">
                    <input :type="showPassword ? 'text' : 'password'" v-model="password" class="pass-input form-control">
                    <span class="ti toggle-password" :class="showPassword ? 'ti-eye text-gray-9' : 'ti-eye-off text-gray-9'" @click="togglePassword"></span>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <a
            href="javascript:void(0);"
            class="btn btn-secondary me-2"
            data-bs-dismiss="modal"
            >Cancel</a
          >
          <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal"
            >Save Changes</a
          >
        </div>
      </div>
    </div>
  </div>
  <!-- /Change Phone Number -->

  <!-- Change Email -->
  <div class="modal fade" id="email-verification">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Change Email</h4>
          </div>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-lg-12">
              <div class="input-blocks">
                <label class="fw-medium"
                  >Current Email <span class="text-danger">*</span></label
                >
                <input class="form-control" type="text" />
              </div>
            </div>
            <div class="col-lg-12">
              <div class="input-blocks">
                <label class="fw-medium"
                  >New Email <span class="text-danger">*</span></label
                >
                <input class="form-control" type="text" />
              </div>
            </div>
            <div class="col-lg-12">
              <div class="input-blocks">
                <p class="fs-14">
                  <i class="ti ti-info-circle me-1"></i> New email address only updated
                  once you verified
                </p>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="input-blocks mb-0">
                <label class="fw-medium"
                  >Current Password <span class="text-danger">*</span></label
                >
                <div class="pass-group">
                    <input :type="showPassword ? 'text' : 'password'" v-model="password" class="pass-input form-control">
                    <span class="ti toggle-password" :class="showPassword ? 'ti-eye text-gray-9' : 'ti-eye-off text-gray-9'" @click="togglePassword"></span>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <a
            href="javascript:void(0);"
            class="btn btn-secondary me-2"
            data-bs-dismiss="modal"
            >Cancel</a
          >
          <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal"
            >Save Changes</a
          >
        </div>
      </div>
    </div>
  </div>
  <!-- /Change Email -->

  <!-- Device Management -->
  <div class="modal device-management-modal fade" id="device-management">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Device Management</h4>
          </div>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-12">
              <div class="device-management-table">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Device</th>
                        <th>Date</th>
                        <th>Location</th>
                        <th>IP Address</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Chrome - Windows</td>
                        <td>15 May 2025, 10:30 AM</td>
                        <td>Newyork / USA</td>
                        <td>232.222.12.72</td>
                        <td>
                          <a href="javascript:void(0);" class="btn">
                            <i class="ti ti-trash"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>Safari Macos</td>
                        <td>10 Apr 2025, 05:15 PM</td>
                        <td>Newyork / USA</td>
                        <td>224.111.12.75</td>
                        <td>
                          <a href="javascript:void(0);" class="btn">
                            <i class="ti ti-trash"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>Firefox Windows</td>
                        <td>15 Mar 2025, 02:40 PM</td>
                        <td>Newyork / USA</td>
                        <td>111.222.13.28</td>
                        <td>
                          <a href="javascript:void(0);" class="btn">
                            <i class="ti ti-trash"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>Safari Macos</td>
                        <td>15 Jan 2025, 08:00 AM</td>
                        <td>Newyork / USA</td>
                        <td>333.555.10.54</td>
                        <td>
                          <a href="javascript:void(0);" class="btn">
                            <i class="ti ti-trash"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Device Management -->

  <!-- Account Activity -->
  <div class="modal device-management-modal fade" id="account-activity">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Account Activity</h4>
          </div>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-12">
              <div class="device-management-table">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Device</th>
                        <th>Location</th>
                        <th>IP Address</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>15 May 2025, 10:30 AM</td>
                        <td>Chrome - Windows</td>
                        <td>Newyork / USA</td>
                        <td>232.222.12.72</td>
                        <td>
                          <a href="javascript:void(0);" class="btn">
                            <i class="ti ti-logout"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>10 Apr 2025, 05:15 PM</td>
                        <td>Safari Macos</td>
                        <td>Newyork / USA</td>
                        <td>224.111.12.75</td>
                        <td>
                          <a href="javascript:void(0);" class="btn">
                            <i class="ti ti-logout"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>15 Mar 2025, 02:40 PM</td>
                        <td>Firefox Windows</td>
                        <td>Newyork / USA</td>
                        <td>111.222.13.28</td>
                        <td>
                          <a href="javascript:void(0);" class="btn">
                            <i class="ti ti-logout"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>15 Jan 2025, 08:00 AM</td>
                        <td>Safari Macos</td>
                        <td>Newyork / USA</td>
                        <td>333.555.10.54</td>
                        <td>
                          <a href="javascript:void(0);" class="btn">
                            <i class="ti ti-logout"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Account Activity -->

  <!-- Delete Account -->
  <div class="modal delete-account-modal fade" id="delete-account">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header custom-modal-header">
          <div class="page-title">
            <h4>Delete Account</h4>
          </div>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="delete-header">
            <h4 class="fs-16 fw-medium mb-1">Why Are You Deleting Your Account?</h4>
            <p class="fs-16">
              We're sorry to see you go! To help us improve, please let us know your
              reason for deleting your account
            </p>
          </div>
          <div class="form-check d-flex mb-2">
            <input class="form-check-input" type="radio" name="delete" id="del-acc1" />
            <label class="form-check-label fs-14 ms-2" for="del-acc1">
              <span class="text-gray-9 fw-medium">No longer using the service</span>
              <span class="d-block text-default"
                >I no longer need this service and won’t be using it in the future.</span
              >
            </label>
          </div>
          <div class="form-check d-flex mb-2">
            <input class="form-check-input" type="radio" name="delete" id="del-acc2" />
            <label class="form-check-label fs-14 ms-2" for="del-acc2">
              <span class="text-gray-9 fw-medium">Privacy concerns</span>
              <span class="d-block text-default"
                >I am concerned about how my data is handled and want to remove my
                information.</span
              >
            </label>
          </div>
          <div class="form-check d-flex mb-2">
            <input class="form-check-input" type="radio" name="delete" id="del-acc3" />
            <label class="form-check-label fs-14 ms-2" for="del-acc3">
              <span class="text-gray-9 fw-medium">Too many notifications/emails</span>
              <span class="d-block text-default"
                >I’m overwhelmed by the volume of notifications or emails and would like
                to reduce them.</span
              >
            </label>
          </div>
          <div class="form-check d-flex mb-2">
            <input class="form-check-input" type="radio" name="delete" id="del-acc4" />
            <label class="form-check-label fs-14 ms-2" for="del-acc4">
              <span class="text-gray-9 fw-medium">Poor user experience</span>
              <span class="d-block text-default"
                >I’ve had difficulty using the platform, and it didn’t meet my
                expectations.</span
              >
            </label>
          </div>
          <div class="form-check d-flex mb-2">
            <input
              class="form-check-input"
              type="radio"
              name="delete"
              id="del-acc5"
              checked
            />
            <label class="form-check-label fs-14 ms-2" for="del-acc5">
              <span class="text-gray-9 fw-medium">Other (Please specify)</span>
            </label>
          </div>
          <div class="ms-4">
            <textarea class="form-control" rows="3"></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <a
            href="javascript:void(0);"
            class="btn btn-secondary me-2"
            data-bs-dismiss="modal"
            >Cancel</a
          >
          <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal"
            >Delete Account</a
          >
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Account -->
</template>
<script>
export default {
  data() {
    return {
      showPassword: false,
      password: '',
      currentPhone: '',
      newPhone: '',
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>