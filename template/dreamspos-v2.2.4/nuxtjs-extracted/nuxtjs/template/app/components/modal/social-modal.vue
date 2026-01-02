<template>
  <!-- Connect Facebook -->
  <div class="modal fade" id="fb-connect">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header">
              <div class="page-title">
                <h4>Facebook Login Settings</h4>
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
            <form @submit.prevent="submitForm">
              <div class="modal-body">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label fw-medium">App ID <span> *</span></label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label fw-medium"
                        >App Secret <span> *</span></label
                      >
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-0">
                      <label class="form-label fw-medium"
                        >Login Redirect URL <span> *</span></label
                      >
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary me-2"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" class="btn btn-submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Connect Facebook -->

  <!-- Connect Twitter -->
  <div class="modal fade" id="twitter-connect">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header">
              <div class="page-title">
                <h4>Twitter Login Settings</h4>
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
            <form @submit.prevent="submitForm">
              <div class="modal-body">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label fw-medium mb-1"
                        >Consumer Key (API Key) <span> *</span></label
                      >
                      <input type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label fw-medium mb-1"
                        >Consumer Secret (Secret Key) <span> *</span></label
                      >
                      <input type="text" class="form-control" />
                    </div>
                    <div class="mb-0">
                      <label class="form-label fw-medium mb-1"
                        >Login Redirect URL <span> *</span></label
                      >
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary me-2"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" class="btn btn-submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Connect Twitter -->

  <!-- Connect Google -->
  <div class="modal fade" id="google-connect">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header">
              <div class="page-title">
                <h4>Google Login Settings</h4>
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
            <form @submit.prevent="submitForm">
              <div class="modal-body">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label fw-medium mb-1"
                        >Client ID <span> *</span></label
                      >
                      <input type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label fw-medium mb-1"
                        >Client Secret Key <span> *</span></label
                      >
                      <input type="text" class="form-control" />
                    </div>
                    <div class="mb-0">
                      <label class="form-label fw-medium mb-1"
                        >Login Redirect URL <span> *</span></label
                      >
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary me-2"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" class="btn btn-submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Connect Google -->

  <!-- Connect Linkedin -->
  <div class="modal fade" id="linkedin-connect">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header">
              <div class="page-title">
                <h4>LinkedIn Login Settings</h4>
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
            <form @submit.prevent="submitForm">
              <div class="modal-body">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label fw-medium mb-1"
                        >Client ID <span> *</span></label
                      >
                      <input type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label fw-medium mb-1"
                        >Client Secret Key <span> *</span></label
                      >
                      <input type="text" class="form-control" />
                    </div>
                    <div class="mb-0">
                      <label class="form-label fw-medium mb-1"
                        >Login Redirect URL <span> *</span></label
                      >
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary me-2"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" class="btn btn-submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Connect Linkedin -->
</template>

<script>
export default {
  methods: {
    submitForm() {
      this.$router.push("/website-settings/social-authentication");
    },
  },
};
</script>
