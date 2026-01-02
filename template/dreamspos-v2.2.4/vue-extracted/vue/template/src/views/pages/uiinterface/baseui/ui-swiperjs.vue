<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="page-title">
          <h4>Swiper JS</h4>
        </div>
      </div>

      <div class="row">
        <!-- Basic Swiper -->
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">Basic Swiper</div>
            </div>
            <div class="card-body">
              <Swiper
                :modules="[Navigation, Pagination]"
                pagination
                navigation
                class="swiper-basic"
              >
                <SwiperSlide>
                  <img src="@/assets/img/img-01.jpg" alt="Img" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="@/assets/img/img-02.jpg" alt="Img" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="@/assets/img/img-03.jpg" alt="Img" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

        <!-- Swiper with Navigation -->
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">Swiper With Navigation</div>
            </div>
            <div class="card-body">
              <Swiper :modules="[Navigation]" navigation class="swiper-navigation">
                <SwiperSlide>
                  <img src="@/assets/img/img-01.jpg" alt="Img" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="@/assets/img/img-02.jpg" alt="Img" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="@/assets/img/img-03.jpg" alt="Img" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

        <!-- Swiper with Pagination -->
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">Swiper with Pagination</div>
            </div>
            <div class="card-body">
              <Swiper :modules="[Pagination]" pagination class="pagination">
                <SwiperSlide>
                  <img src="@/assets/img/img-04.jpg" alt="Img" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="@/assets/img/img-05.jpg" alt="Img" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="@/assets/img/img-01.jpg" alt="Img" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

        <!-- Swiper with Scrollbar -->
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">Scrollbar Swiper</div>
            </div>
            <div class="card-body">
              <Swiper :modules="[Scrollbar]" scrollbar class="scrollbar-swiper">
                <SwiperSlide>
                  <img src="@/assets/img/img-05.jpg" alt="Img" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="@/assets/img/img-03.jpg" alt="Img" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="@/assets/img/img-02.jpg" alt="Img" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

        <!-- Swiper with Effect Cube -->
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">Effect Cube</div>
            </div>
            <div class="card-body">
              <Swiper :modules="[EffectCube]" effect="cube" class="swiper-effect-cube">
                <SwiperSlide>
                  <img src="@/assets/img/img-03.jpg" alt="Img" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="@/assets/img/img-04.jpg" alt="Img" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="@/assets/img/img-05.jpg" alt="Img" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

        <!-- Swiper with Effect Fade -->
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">Effect Fade</div>
            </div>
            <div class="card-body">
              <Swiper :modules="[EffectFade]" effect="fade" class="swiper-fade">
                <SwiperSlide>
                  <img src="@/assets/img/img-05.jpg" alt="Img" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="@/assets/img/img-03.jpg" alt="Img" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="@/assets/img/img-04.jpg" alt="Img" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

        <!-- Add more sliders following the same structure -->
      </div>
      <!-- Start:: row-2 -->
      <div class="row">
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">Effect Coverflow</div>
            </div>
            <div class="card-body">
              <div class="swiper swiper-overflow">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="@/assets/img/img-01.jpg" alt="Img" />
                  </div>
                  <div class="swiper-slide">
                    <img src="@/assets/img/img-02.jpg" alt="Img" />
                  </div>
                  <div class="swiper-slide">
                    <img src="@/assets/img/img-03.jpg" alt="Img" />
                  </div>
                  <div class="swiper-slide">
                    <img src="@/assets/img/img-04.jpg" alt="Img" />
                  </div>
                  <div class="swiper-slide">
                    <img src="@/assets/img/img-05.jpg" alt="Img" />
                  </div>
                  <div class="swiper-slide">
                    <img src="@/assets/img/img-01.jpg" alt="Img" />
                  </div>
                  <div class="swiper-slide">
                    <img src="@/assets/img/img-02.jpg" alt="Img" />
                  </div>
                  <div class="swiper-slide">
                    <img src="@/assets/img/img-03.jpg" alt="Img" />
                  </div>
                </div>
                <div class="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End:: row-2 -->

      <!-- Start:: row-3 -->
      <div class="row">
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">Thumbs Gallery</div>
            </div>
            <div class="card-body">
              <div class="swiper swiper-preview">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="@/assets/img/img-01.jpg" alt="Img" />
                  </div>
                  <div class="swiper-slide">
                    <img src="@/assets/img/img-02.jpg" alt="Img" />
                  </div>
                  <div class="swiper-slide">
                    <img src="@/assets/img/img-03.jpg" alt="Img" />
                  </div>
                  <div class="swiper-slide">
                    <img src="@/assets/img/img-04.jpg" alt="Img" />
                  </div>
                  <div class="swiper-slide">
                    <img src="@/assets/img/img-05.jpg" alt="Img" />
                  </div>
                  <div class="swiper-slide">
                    <img src="@/assets/img/img-01.jpg" alt="Img" />
                  </div>
                  <div class="swiper-slide">
                    <img src="@/assets/img/img-02.jpg" alt="Img" />
                  </div>
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
              </div>
              <div class="swiper swiper-view">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="@/assets/img/img-01.jpg" alt="Img" />
                  </div>
                  <div class="swiper-slide">
                    <img src="@/assets/img/img-02.jpg" alt="Img" />
                  </div>
                  <div class="swiper-slide">
                    <img src="@/assets/img/img-03.jpg" alt="Img" />
                  </div>
                  <div class="swiper-slide">
                    <img src="@/assets/img/img-04.jpg" alt="Img" />
                  </div>
                  <div class="swiper-slide">
                    <img src="@/assets/img/img-05.jpg" alt="Img" />
                  </div>
                  <div class="swiper-slide">
                    <img src="@/assets/img/img-01.jpg" alt="Img" />
                  </div>
                  <div class="swiper-slide">
                    <img src="@/assets/img/img-02.jpg" alt="Img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End:: row-3 -->
    </div>
  </div>
  <!-- /Page Wrapper -->
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

// Import necessary Swiper modules
import { Navigation, Pagination, Scrollbar, EffectCube, EffectFade } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
    Navigation,
    Pagination,
    Scrollbar,
    EffectCube,
    EffectFade,
  },
};
</script>
