<template>
  <!-- details popup -->
  <div class="modal fade" id="user-profile-new">
    <div class="modal-dialog history-modal-profile">
      <div class="modal-content">
        <div class="page-wrapper details-blk">
          <div class="content">
            <div class="text-center right-sidebar-profile mb-3">
              <figure class="avatar">
                <img
                  class="rounded-circle"
                  src="@/assets/img/users/user-08.jpg"
                  alt="image"
                />
              </figure>
              <div class="chat-options chat-option-profile">
                <ul class="list-inline">
                  <li class="list-inline-item">
                    <router-link
                      to="/call/video-call"
                      class="bg-secondary-transparent p-2 d-flex align-items-center rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title=""
                      data-bs-original-title="Video Call"
                    >
                      <vue-feather type="video"></vue-feather>
                    </router-link>
                  </li>
                  <li class="list-inline-item">
                    <router-link
                      to="/application/chat"
                      class="bg-primary p-2 d-flex align-items-center rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title=""
                      data-bs-original-title="Chat"
                    >
                      <vue-feather type="message-square"></vue-feather>
                    </router-link>
                  </li>
                  <li class="list-inline-item">
                    <router-link
                      to="/call/audio-call"
                      class="profile-open bg-secondary-transparent p-2 d-flex align-items-center rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title=""
                      data-bs-original-title="Voice Call"
                    >
                      <vue-feather type="phone"></vue-feather>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="modal-profile-detail">
              <div class="row">
                <div class="col-lg-6">
                  <div class="modal-userlist">
                    <ul>
                      <li>Name<span>Thomas</span></li>
                      <li>Phone<span>+1 25182 94528</span></li>
                      <li>Email<span>thomas@example.com</span></li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="modal-userlist d-flex justify-content-center">
                    <ul>
                      <li>Total Calls<span>20</span></li>
                      <li>Average Call Timing<span>0.30</span></li>
                      <li>Average Waiting Time<span>00.5</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /details popup -->

  <!-- Delete -->
  <div class="modal fade modal-default" id="delete">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body p-0">
          <div class="success-wrap text-center">
            <form @submit.prevent="submitForm">
              <div class="icon-success bg-danger-transparent text-danger mb-2">
                <i class="ti ti-trash"></i>
              </div>
              <h3 class="mb-2">Delete History</h3>
              <p class="fs-16 mb-3">
                Are you sure you want to delete contact from call history?
              </p>
              <div
                class="d-flex align-items-center justify-content-center gap-2 flex-wrap"
              >
                <button
                  type="button"
                  class="btn btn-md btn-secondary"
                  data-bs-dismiss="modal"
                >
                  No, Cancel
                </button>
                <button type="submit" class="btn btn-md btn-primary">Yes, Delete</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete -->
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    submitForm() {
      this.$router.push("/call/call-history");
    },
  },
};
</script>
