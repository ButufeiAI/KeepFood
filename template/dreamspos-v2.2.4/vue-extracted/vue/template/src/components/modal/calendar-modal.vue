<template>
  <!-- Add New Event -->
  <div class="modal fade" id="add_event">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add New Event</h4>
          <button type="button" class="btn-close custom-btn-close p-0" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="row">
              <div class="col-12">
                <div class="mb-3">
                  <label class="form-label">Event Name<span class="text-danger ms-1">*</span></label>
                  <input type="text" class="form-control">
                </div>
              </div>
              <div class="col-12">
                <div class="mb-3">
                  <label class="form-label">Event Date<span class="text-danger ms-1">*</span></label>
                  <div class="input-icon-end position-relative">
                    <a-date-picker v-model:value="value1" class="datetimepicker form-control" />
                    <span class="input-icon-addon">
                      <i class="ti ti-calendar text-gray-7"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Start Time<span class="text-danger ms-1">*</span></label>
                  <div class="input-icon-end position-relative">
                    <a-time-picker v-model:value="value2" class="form-control timepicker" />
                    <span class="input-icon-addon">
                      <i class="ti ti-clock text-gray-7"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">End Time<span class="text-danger ms-1">*</span></label>
                  <div class="input-icon-end position-relative">
                    <a-time-picker v-model:value="value3" class="form-control timepicker" />
                    <span class="input-icon-addon">
                      <i class="ti ti-clock text-gray-7"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="mb-3">
                  <label class="form-label">Event Location<span class="text-danger ms-1">*</span></label>
                  <input type="text" class="form-control">
                </div>
                <div class="mb-0">
                  <label class="form-label">Descriptions<span class="text-danger ms-1">*</span></label>
                  <textarea class="form-control" rows="3"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>
            <button type="submit" class="btn btn-primary">Add Event</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add New Event -->

  <!-- Event -->
  <div class="modal fade" id="event_modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header modal-bg">
          <div class="modal-title text-gray-9"><span id="eventTitle"></span></div>
          <button type="button" class="btn-close p-0 custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        <div class="modal-body">
          <p class="d-flex align-items-center fw-medium text-dark mb-3"><i
              class="ti ti-calendar-check text-default me-2"></i>26 Jul,2024 to 31 Jul,2024</p>
          <p class="d-flex align-items-center fw-medium text-dark mb-3"><i
              class="ti ti-calendar-check text-default me-2"></i>11:00 AM to 12:15 PM</p>
          <p class="d-flex align-items-center fw-medium text-dark mb-3"><i
              class="ti ti-map-pin-bolt text-default me-2"></i>Las Vegas, US</p>
          <p class="d-flex align-items-center fw-medium text-dark mb-0"><i
              class="ti ti-calendar-check text-default me-2"></i>A recurring or repeating event is simply any event that
            you will occur more than once on your calendar.</p>
        </div>
      </div>
    </div>
  </div>
  <!-- /Event -->
</template>
<script>
import { ref } from 'vue';
const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(null);
export default {
  data() {
    return {
      value1,
      value2,
      value3,
    };
  },
};
</script>