<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>

  <div class="page-wrapper cardhead">
    <div class="content container-fluid">
      <!-- Page Header -->
      <layout-breadcrumb :title="title" :text="text" :text1="text1" />
      <!-- /Page Header -->

      <div class="row">
        <!-- Counter -->
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5>Clients</h5>
              <vue3-autocounter
                class="counter"
                ref="counter1"
                :startAmount="1000"
                :delay="3"
                :endAmount="3000"
                :duration="5"
                separator=","
                :autoinit="true"
              />
            </div>
          </div>
        </div>
        <!-- /Counter -->

        <!-- Counter -->
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5>Total Sales</h5>
              <vue3-autocounter
                class="counter"
                ref="counter2"
                :startAmount="3000"
                :delay="3"
                :endAmount="10000"
                :duration="5"
                separator=","
                :autoinit="true"
              />
            </div>
          </div>
        </div>
        <!-- /Counter -->

        <!-- Counter -->
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5>Total Projects</h5>
              <vue3-autocounter
                class="counter"
                ref="counter3"
                :startAmount="5000"
                :delay="3"
                :endAmount="15000"
                :duration="5"
                separator=","
                :autoinit="true"
              />
            </div>
          </div>
        </div>
        <!-- /Counter -->

        <!-- Counter -->
        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Count Down</h5>
            </div>
            <div class="card-body">
              <h6>Time Count from 3</h6>
              <vue3-autocounter
                ref="counter4"
                :startAmount="1"
                :endAmount="3"
                :duration="50"
                prefix="00 Days 00 : "
                decimalSeparator=" : "
                :decimals="2"
                :autoinit="true"
              />
            </div>
          </div>
        </div>
        <!-- /Counter -->

        <!-- Counter -->
        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Count Up</h5>
            </div>
            <div class="card-body">
              <h6>Time Counting From 0</h6>
              <vue3-autocounter
                ref="counter5"
                :startAmount="0"
                :endAmount="3"
                :duration="100"
                prefix="00 Days 00 : "
                decimalSeparator=" : "
                :decimals="2"
                :autoinit="true"
              />
            </div>
          </div>
        </div>
        <!-- /Counter -->

        <!-- Counter -->
        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Count Inbetween</h5>
            </div>
            <div class="card-body">
              <h6>Time counting from 30 to 20</h6>
              <vue3-autocounter
                ref="counter6"
                :startAmount="30"
                :endAmount="20"
                :duration="1000"
                prefix="00 Days 00 : "
                decimalSeparator=" : "
                :decimals="2"
                :autoinit="true"
              />
            </div>
          </div>
        </div>
        <!-- /Counter -->

        <!-- Counter -->
        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Count Callback</h5>
            </div>
            <div class="card-body">
              <h6>Count from 10 to 0 and calls timer end callback</h6>
              <vue3-autocounter
                ref="counter7"
                :startAmount="0"
                :endAmount="3"
                :duration="100"
                prefix="00 Days 00 : "
                decimalSeparator=" : "
                :decimals="2"
                :autoinit="true"
              />
            </div>
          </div>
        </div>
        <!-- /Counter -->

        <!-- Counter -->
        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Custom Output</h5>
            </div>
            <div class="card-body">
              <h6>Changed output pattern</h6>
              <vue3-autocounter
                ref="counter8"
                :startAmount="10"
                :endAmount="60"
                :duration="2000"
                prefix="02 Days 23 Hour : "
                decimalSeparator=" : "
                :decimals="2"
                :autoinit="true"
              />
            </div>
          </div>
        </div>
        <!-- /Counter -->
      </div>
    </div>
  </div>
</template>
<script>
import Vue3Autocounter from 'vue3-autocounter';

export default {
  components: {
    Vue3Autocounter
  },
  data() {
    return {
      title: "Counter",
      text: "Dashboard",
      text1: "Counter",
    };
  },
};
</script>
