<template>
  <!-- Page Wrapper -->
  <div class="page-wrapper cardhead">
    <div class="content">
      <!-- Page Header -->
      <layout-breadcrumb :title="title" :text="text" :text1="text1" />
      <!-- /Page Header -->

      <div class="row">
        <div class="col-xxl-4 col-xl-6">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">Basic Rater</div>
            </div>
            <div class="card-body">
              <div class="d-flex flex-wrap align-items-center justify-content-between">
                <p class="fs-14 mb-0 fw-semibold">
                  Show Some <span class="text-danger">&#10084;</span> with rating :
                </p>
                <star-rating 
                  :star-size="20" 
                  :show-rating="false"
                  v-model="basicRating"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-xl-6">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">5 star rater with steps</div>
            </div>
            <div class="card-body">
              <div class="d-flex flex-wrap align-items-center justify-content-between">
                <p class="fs-14 mb-0 fw-semibold">Dont forget to rate the product :</p>
                <star-rating 
                  :star-size="20" 
                  :show-rating="false"
                  v-model="stepRating"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-xl-12">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">Custom messages</div>
            </div>
            <div class="card-body">
              <div class="d-flex flex-wrap align-items-center justify-content-between">
                <p class="fs-14 mb-0 fw-semibold">
                  Your rating is much appreciated&#128079; :
                </p>
                <star-rating 
                  :star-size="20" 
                  :max-rating="10" 
                  :show-rating="false"
                  v-model="customRating"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-6 col-xl-6">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">
                Unlimited number of stars readOnly
              </div>
            </div>
            <div class="card-body">
              <div class="d-flex flex-wrap align-items-center justify-content-between">
                <p class="fs-14 mb-0 fw-semibold">Thanks for rating :</p>
                <star-rating 
                  :star-size="20" 
                  :max-rating="10"
                  :show-rating="true"
                  :read-only="true"
                  :rating="10"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-6 col-xl-6">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">
                5 Star rater with custom isBusyText and simulated backend
              </div>
            </div>
            <div class="card-body">
              <div class="d-flex flex-wrap align-items-center justify-content-between">
                <p class="fs-14 mb-0 fw-semibold">Thanks for rating :</p>
                <star-rating 
                  :star-size="20" 
                  :show-rating="false"
                  :increment="0.5"
                  v-model="incrementRating"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-xl-6">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">On hover event</div>
            </div>
            <div class="card-body">
              <div class="d-flex flex-wrap align-items-center justify-content-between">
                <p class="fs-14 mb-0 fw-semibold">Please give your valuable rating :</p>
                <div class="d-flex flex-wrap align-items-center">
                  <star-rating :star-size="20" :show-rating="false" v-model="hoverRating" />
                  <span class="live-rating badge bg-success-transparent ms-3">{{ hoverRating || 1 }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-xl-6">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">Clear/reset rater</div>
            </div>
            <div class="card-body">
              <div class="d-flex flex-wrap align-items-center justify-content-between">
                <p class="fs-14 mb-0 fw-semibold">Thank You so much for your support :</p>
                <div class="d-flex flex-wrap align-items-center">
                  <star-rating :star-size="20" :show-rating="false" v-model="resetRating" />
                  <button class="btn btn-icon btn-sm btn-danger-light ms-3" id="rater-reset-button"
                    data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Reset" @click="resetRatingValue">
                    <vue-feather type="rotate-cw" class="feather-16"></vue-feather>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Page Wrapper -->
</template>
<script>
import StarRating from "vue3-star-ratings";

export default {
  components: {
    StarRating,
  },
  data() {
    return {
      title: "Rating",
      text: "Dashboard",
      text1: "Rating",
      basicRating: 0,
      stepRating: 3,
      customRating: 0,
      incrementRating: 3.5,
      hoverRating: 1,
      resetRating: 0,
    };
  },
  methods: {
    resetRatingValue() {
      this.resetRating = 0;
    },
  },
  mounted() {
    // Initialize Bootstrap tooltips
    if (typeof bootstrap !== 'undefined') {
      const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
      tooltipTriggerList.forEach((tooltipTriggerEl) => {
        new bootstrap.Tooltip(tooltipTriggerEl);
      });
    }
  },
};
</script>
