<template>
  <div class="error-page">
    <div class="comming-soon-pg w-100">
      <div class="coming-soon-box">
        <div class="pos-logo">
          <img src="@/assets/img/logo-small.png" alt="" />
        </div>
        <span>Our Website is</span>
        <h1 v-if="!countdown().expired"><span> COMING </span> SOON</h1>
        <h1 v-else><span> EXPIRED </span></h1>
        <p v-if="!countdown().expired">Please check back later, We are working hard to get everything just right.</p>
        <ul v-if="!countdown().expired" class="coming-soon-timer">
          <li><span class="days">{{ countdown().days }}</span>days</li>
          <li class="seperate-dot">:</li>
          <li><span class="hours">{{ countdown().hours }}</span>Hrs</li>
          <li class="seperate-dot">:</li>
          <li><span class="minutes">{{ countdown().minutes }}</span>Min</li>
          <li class="seperate-dot">:</li>
          <li><span class="seconds">{{ countdown().seconds }}</span>Sec</li>
        </ul>
        <div class="subscribe-form">
          <div class="mb-3">
            <label class="form-label">Subscribe to get notified!</label>
            <input type="email" class="form-control" placeholder="Enter Your Email" />
            <a href="" class="btn btn-primary subscribe-btn">Subscribe</a>
          </div>
        </div>
        <ul class="social-media-icons">
          <li>
            <a href="javascript:void(0);"><i class="fab fa-facebook-f"></i></a>
          </li>
          <li>
            <a href="javascript:void(0);"><i class="fab fa-instagram"></i></a>
          </li>
          <li>
            <a href="javascript:void(0);"><i class="fab fa-twitter"></i></a>
          </li>
          <li>
            <a href="javascript:void(0);"><i class="fab fa-pinterest-p"></i></a>
          </li>
          <li>
            <a href="javascript:void(0);"><i class="fab fa-linkedin"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  setup() {
    const countdownValue = ref({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      expired: false
    });
    let countdownInterval;

    const updateCountdown = () => {
      const targetDate = new Date('Dec 2, 2026 0:00:00').getTime();
      const now = Date.now();
      const distance = targetDate - now;

      if (distance <= 0) {
        countdownValue.value = { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
        clearInterval(countdownInterval);
        return;
      }

      countdownValue.value = {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
        expired: false
      };
    };

    onMounted(() => {
      updateCountdown(); // Initial call
      countdownInterval = setInterval(updateCountdown, 1000);
    });

    onBeforeUnmount(() => {
      if (countdownInterval) {
        clearInterval(countdownInterval);
      }
    });

    const countdown = () => countdownValue.value;

    return {
      countdown
    };
  }
};
</script>