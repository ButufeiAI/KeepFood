<template>
    <div class="delivery-slider">
        <Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints" ref="AllCarousel">
            <Slide>
                <!-- Item -->
                <div class="slide-item w-100 me-3">
                    <div class="order-item">
                        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                            <div>
                                <p class="fs-12 mb-1">#65698</p>
                                <h6 class="fs-14 fw-semibold mb-1">Liam O'Connor</h6>
                                <p class="fs-13 mb-0 d-flex align-items-center gap-2">11:10 AM<span class="even-line"></span>Table 1</p>
                            </div>
                            <div class="text-end">
                                <span class="badge bg-light text-dark d-flex align-items-center mb-3"><i class="icon-check-check text-dark me-1"></i>Delivery</span>
                                <div class="time badge bg-success rounded-pill fs-12 fw-normal">
                                    <span class="me-1"><i class="icon-clock-arrow-up"></i></span>
                                    45 Mins
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between gap-3">
                            <div class="progress-item">
                                <div class="progress-bar bg-success" style="width: 80%;"></div>
                            </div>
                            <p class="mb-0 fs-10 fw-normal d-flex align-items-center"><i class="icon-clock me-1"></i>33:00</p>
                        </div>
                    </div>
                </div>
            </Slide>
            <Slide>
                <!-- Item 1 -->
                <div class="slide-item w-100 me-3">
                    <div class="order-item">
                        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                            <div>
                                <p class="fs-12 mb-1">#14589</p>
                                <h6 class="fs-14 fw-semibold mb-1">James Smith</h6>
                                <p class="fs-13 mb-0">11:30 AM</p>
                            </div>
                            <div class="text-end">
                                <span class="badge bg-light text-dark d-flex align-items-center mb-3"><i class="icon-check-check text-dark me-1"></i>Delivery</span>
                                <div class="time badge bg-success rounded-pill fs-12 fw-normal">
                                    <span class="me-1"><i class="icon-clock-arrow-up"></i></span>
                                    12 Mins
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between gap-3">
                            <div class="progress-item">
                                <div class="progress-bar bg-success" style="width: 10%;"></div>
                            </div>
                            <p class="mb-0 fs-10 fw-normal d-flex align-items-center"><i class="icon-clock me-1"></i>20:00</p>
                        </div>
                    </div>
                </div>	
            </Slide>	
            <Slide>
                <!-- Item -->
                <div class="slide-item w-100 me-3">
                    <div class="order-item">
                        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                            <div>
                                <p class="fs-12 mb-1">#56998</p>
                                <h6 class="fs-14 fw-semibold mb-1">Maria Gonzalez</h6>
                                <p class="fs-13 mb-0">11:45 AM</p>
                            </div>
                            <div class="text-end">
                                <span class="badge bg-light text-dark d-flex align-items-center mb-3"><i class="icon-check-check text-dark me-1"></i>Delivery</span>
                                <div class="time badge bg-danger rounded-pill fs-12 fw-normal">
                                    <span class="me-1"><i class="icon-clock-arrow-up"></i></span>
                                    -8 Mins
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between gap-3">
                            <div class="progress-item">
                                <div class="progress-bar bg-danger" style="width: 100%;"></div>
                            </div>
                            <p class="mb-0 fs-10 fw-normal d-flex align-items-center"><i class="icon-clock me-1"></i>49:33</p>
                        </div>
                    </div>
                </div>
            </Slide>
            <Slide>
                <!-- Item -->
                <div class="slide-item w-100 me-3">
                    <div class="order-item">
                        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                            <div>
                                <p class="fs-12 mb-1">#14589</p>
                                <h6 class="fs-14 fw-semibold mb-1">James Smith</h6>
                                <p class="fs-13 mb-0">11:30 AM</p>
                            </div>
                            <div class="text-end">
                                <span class="badge bg-light text-dark d-flex align-items-center mb-3"><i class="icon-check-check text-dark me-1"></i>Delivery</span>
                                <div class="time badge bg-success rounded-pill fs-12 fw-normal">
                                    <span class="me-1"><i class="icon-clock-arrow-up"></i></span>
                                    12 Mins
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between gap-3">
                            <div class="progress-item">
                                <div class="progress-bar bg-success" style="width: 10%;"></div>
                            </div>
                            <p class="mb-0 fs-10 fw-normal d-flex align-items-center"><i class="icon-clock me-1"></i>20:00</p>
                        </div>
                    </div>
                </div>	
            </Slide>
            <Slide>
                <!-- Item -->
                <div class="slide-item w-100 me-3">
                    <div class="order-item">
                        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                            <div>
                                <p class="fs-12 mb-1">#96589</p>
                                <h6 class="fs-14 fw-semibold mb-1">Sophia Kim</h6>
                                <p class="fs-13 mb-0">11:20 AM</p>
                            </div>
                            <div class="text-end">
                                <span class="badge bg-light text-dark d-flex align-items-center mb-3"><i class="icon-check-check text-dark me-1"></i>Delivery</span>
                                <div class="time badge bg-success rounded-pill fs-12 fw-normal">
                                    <span class="me-1"><i class="icon-clock-arrow-up"></i></span>
                                    22 Mins
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between gap-3">
                            <div class="progress-item">
                                <div class="progress-bar bg-success" style="width: 70%;"></div>
                            </div>
                            <p class="mb-0 fs-10 fw-normal d-flex align-items-center"><i class="icon-clock me-1"></i>70:00</p>
                        </div>
                    </div>
                </div>
            </Slide>
        </Carousel>        
    </div>
</template>


<script>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default {
    methods: {
        next() {
            this.$refs.AllCarousel.next();
        },
        prev() {
            this.$refs.AllCarousel.prev();
        },
    },
    data() {
        return {
            settings: {
                itemsToShow: 1,
                snapAlign: "center",
                loop: true,
            },
            breakpoints: {
                575: {
                    itemsToShow: 1,
                    snapAlign: "center",
                },
                767: {
                    itemsToShow: 1,
                    snapAlign: "center",
                },
                991: {
                    itemsToShow: 2,
                    snapAlign: "center",
                },
                1024: {
                    itemsToShow: 3,
                    snapAlign: "start",
                },
            },
        };
    },
    components: {
        Carousel,
        Slide,
    },
};
</script>
