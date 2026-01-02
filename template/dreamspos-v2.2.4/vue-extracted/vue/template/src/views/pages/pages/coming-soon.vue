<template>
  <div class="error-page">
    <div class="comming-soon-pg w-100">
      <div class="coming-soon-box">
        <div class="pos-logo">
          <img src="@/assets/img/logo-small.png" alt="" />
        </div>
        <span>Our Website is</span>
        <h1><span> COMING </span> SOON</h1>
        <p>Please check back later, We are working hard to get everything just right.</p>
        <ul v-if="showCountdown" class="coming-soon-timer">
          <li><span class="days">{{ days }}</span>days</li>
          <li class="seperate-dot">:</li>
          <li><span class="hours">{{ hours }}</span>Hrs</li>
          <li class="seperate-dot">:</li>
          <li><span class="minutes">{{ minutes }}</span>Min</li>
          <li class="seperate-dot">:</li>
          <li><span class="seconds">{{ seconds }}</span>Sec</li>
        </ul>
        <div v-if="expiredMessage" class="expired-message">
          <h2>{{ expiredMessage }}</h2>
        </div>
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
export default {
    data() {
        return {
        showCountdown: true,
        days: 52,
        hours: 21,
        minutes: 2,
        seconds: 20,
        expiredMessage: "",
        };
    },
    mounted() {
        this.setCountdown();
    },
    methods: {
        setCountdown() {
            let countdownDate = new Date("dec 02, 2027 14:31:40").getTime();

            let updateCount = setInterval(() => {
                let todayDate = new Date().getTime();
                let distance = countdownDate - todayDate;

                if (distance >= 0) {
                    this.showCountdown = true;
                    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
                } else {
                clearInterval(updateCount);
                    this.showCountdown = false;
                    // Set expired message as HTML content
                    this.expiredMessage = "EXPIRED";
                }
            }, 1000);
        },
    },
};
</script>