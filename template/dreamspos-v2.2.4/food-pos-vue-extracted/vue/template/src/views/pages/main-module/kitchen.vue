<template>
    <!-- ========================
        Start Page Content
    ========================= -->
        
    <div class="page-wrapper">

        <!-- Start Content -->
        <div class="content">

            <!-- Page Header -->
                <div class="d-flex align-items-sm-center justify-content-between flex-sm-row flex-column flex-wrap gap-3 mb-4">
                    <div>
                        <h3 class="mb-0">Kitchen <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle ms-2"><i class="icon-refresh-ccw"></i></a></h3>
                    </div>
                    <div class="d-flex align-items-center justify-content-center gap-3 flex-wrap">
                        <!-- Item 1 -->
                        <div class="d-inline-flex align-items-center justify-content-between rounded-pill bg-white ps-2 pe-3 py-2 gap-3 border">
                            <div class="d-flex align-items-center gap-2">
                                <div class="avatar avatar-sm rounded-circle bg-gray">
                                    <i class="icon-newspaper fs-14"></i>
                                </div>
                                <p class="mb-0 text-dark fw-medium">New Order</p>
                            </div>
                            <h5 class="fs-18px fw-semibold mb-0">02</h5>
                        </div>
    
                        <!-- Item 2 -->
                        <div class="d-inline-flex align-items-center justify-content-between rounded-pill bg-white ps-2 pe-3 py-2 gap-3 border">
                            <div class="d-flex align-items-center gap-2">
                                <div class="avatar avatar-sm rounded-circle bg-secondary">
                                    <i class="icon-package-2 fs-14"></i>
                                </div>
                                <p class="mb-0 text-dark fw-medium">In Kitchen</p>
                            </div>
                            <h5 class="fs-18px fw-semibold mb-0">03</h5>
                        </div>
    
                        <!-- Item 3 -->
                        <div class="d-inline-flex align-items-center justify-content-between rounded-pill bg-white ps-2 pe-3 py-2 gap-3 border">
                            <div class="d-flex align-items-center gap-2">
                                <div class="avatar avatar-sm rounded-circle bg-danger">
                                    <i class="icon-clock-alert fs-14"></i>
                                </div>
                                <p class="mb-0 text-dark fw-medium">Delayed</p>
                            </div>
                            <h5 class="fs-18px fw-semibold mb-0">01</h5>
                        </div>
    
                        <!-- Item 4 -->
                        <div class="d-inline-flex align-items-center justify-content-between rounded-pill bg-white ps-2 pe-3 py-2 gap-3 border">
                            <div class="d-flex align-items-center gap-2">
                                <div class="avatar avatar-sm rounded-circle bg-success">
                                    <i class="icon-check-check fs-14"></i>
                                </div>
                                <p class="mb-0 text-dark fw-medium">Completed</p>
                            </div>
                            <h5 class="fs-18px fw-semibold mb-0">02</h5>
                        </div>
                    </div>
                    <div class="gap-2 d-flex align-items-center flex-wrap">
                        <div class="input-group input-group-flat w-auto">
                            <input type="text" class="form-control" placeholder="Search">
                            <span class="input-group-text">
                                <i class="icon-search text-dark"></i>
                            </span>
                        </div>
                    </div>
				</div>
				<!-- End Page Header -->

            <!-- start row -->
            <div class="row g-4">

                <!-- start col -->
                <div class="col-xl-4 col-lg-6 col-md-6 d-flex">
                    <!-- start card -->
                    <div class="card flex-fill mb-0">
                        <div class="card-header bg-gray">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <div class="d-flex align-items-center gap-2">
                                    <div class="avatar rounded-circle bg-white">
                                        <i class="icon-hand-platter fs-24 text-dark"></i>
                                    </div>
                                    <p class="mb-0 text-white fw-semibold fs-14px">Jennifer Brooks  
                                        <span class="fs-13 fw-normal d-block mt-1">Dine In</span> 
                                    </p>
                                </div>
                                <span class="badge bg-white text-center text-dark">#14751</span>
                            </div>
                        </div>
                        <div class="card-body border-bottom">
                            <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                <h6 class="mb-0 fw-normal fs-14">Token No : <span class="fw-semibold">31</span> </h6>
                                <p class="mb-0 fw-normal text-dark">15 Nov 2025, 06:00 PM</p>
                            </div>
                        </div>

                        <div class="card-body">
                            <div class="orders-list mb-4">
                                <div class="border-bottom-dashed mb-3 pb-3">
                                    <div class="orders text-dark mb-2">
                                        <p><span class="dot success"></span>Mediterranean Salad -  Regular</p>
                                        <p class="text-dark">×1</p>
                                    </div>
                                    <div class="bg-light rounded py-1 px-2">
                                        <p class="mb-0 fw-medium d-flex align-items-center text-dark"> <i class="icon-badge-info me-1"></i> Notes : Extra Spicy</p>
                                    </div>
                                </div>
                                <div class="orders text-dark mb-3 pb-3 border-bottom-dashed">
                                    <p><span class="dot success"></span>Lobster Thermidor</p>
                                    <p class="text-dark">×1</p>
                                </div>
                                <div class="orders text-dark mb-0">
                                    <p><span class="dot success"></span>Caesar Salad</p>
                                    <p class="text-dark">×1</p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center justify-content-between gap-3">
                                <div class="progress-item">
                                    <div class="progress-bar bg-success" style="width: 10%;"></div>
                                </div>
                                <p class="mb-0 fw-normal d-flex align-items-center"><i class="icon-clock me-1"></i> 20:00</p>
                            </div>
                            
                        </div>

                        <div class="card-footer d-flex align-items-center justify-content-between gap-2 pt-0 border-0 flex-wrap flex-xl-nowrap">
                            <a href="#" class="btn btn-light w-100 timer-btn" :class="{ 'running': timer1.running }" @click="toggleTimer1" data-bs-toggle="modal" data-bs-target="#cooking_started_modal">
                                <i :class="timer1.running ? 'icon-pause' : 'icon-play'" class="me-2"></i>
                                <span class="label">{{ timer1.running ? 'Pause' : 'Play' }}</span>
                                <span class="ps-1 fw-semibold time">{{ formatTime(timer1.seconds) }}</span>
                            </a>
                            <a href="#" class="btn btn-outline-light w-100"  data-bs-toggle="modal" data-bs-target="#cooking_done_modal">
                                <i class="icon-check-check me-2"></i> 
                                <span>Mark Done</span>
                            </a>
                        </div>
                    </div>
                    <!-- end card -->
                </div>
                <!-- end col -->

                <!-- start col -->
                <div class="col-xl-4 col-lg-6 col-md-6 d-flex">
                    <!-- start card -->
                    <div class="card flex-fill mb-0">
                        <div class="card-header bg-secondary">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <div class="d-flex align-items-center gap-2">
                                    <div class="avatar rounded-circle bg-white">
                                        <i class="icon-hand-platter fs-24 text-dark"></i>
                                    </div>
                                    <p class="mb-0 text-white fw-semibold fs-14px">Elijah Thompson  
                                        <span class="fs-13 fw-normal d-block mt-1">Take Away</span> 
                                    </p>
                                </div>
                                <span class="badge bg-white text-center text-dark">#14351</span>
                            </div>
                        </div>
                        <div class="card-body border-bottom">
                            <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                <h6 class="mb-0 fw-normal fs-14">Token No : <span class="fw-semibold">11</span> </h6>
                                <p class="mb-0 fw-normal text-dark">19 Nov 2025, 03:25 PM</p>
                            </div>
                        </div>

                        <div class="card-body">
                            <div class="orders-list mb-4">
                                <div class="border-bottom-dashed mb-3 pb-3">
                                    <div class="orders text-dark mb-2">
                                        <p><span class="dot"></span>Chicken Skewers</p>
                                        <p class="text-dark">×1</p>
                                    </div>
                                    <div class="bg-light rounded py-1 px-2">
                                        <p class="mb-0 fw-medium d-flex align-items-center text-dark"> <i class="icon-badge-info me-1"></i> Notes : Extra Spicy</p>
                                    </div>
                                </div>
                                <div class="orders text-dark mb-3 pb-3 border-bottom-dashed">
                                    <p><span class="dot"></span>Chicken Roll</p>
                                    <p class="text-dark">×1</p>
                                </div>
                                <div class="orders text-dark mb-0">
                                    <p><span class="dot"></span>Chicken Taco</p>
                                    <p class="text-dark">×1</p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center justify-content-between gap-3">
                                <div class="progress-item">
                                    <div class="progress-bar bg-success" style="width: 50%;"></div>
                                </div>
                                <p class="mb-0 fw-normal d-flex align-items-center"><i class="icon-clock me-1"></i> 50:00</p>
                            </div>
                            
                        </div>

                        <div class="card-footer d-flex align-items-center justify-content-between gap-2 pt-0 border-0 flex-wrap flex-xl-nowrap">
                            <a href="#" class="btn btn-light w-100 timer-btn" :class="{ 'running': timer2.running }" @click="toggleTimer2" data-bs-toggle="modal" data-bs-target="#order_pause">
                                <i :class="timer2.running ? 'icon-pause' : 'icon-play'" class="me-2"></i>
                                <span class="label">{{ timer2.running ? 'Pause' : 'Play' }}</span>
                                <span class="ps-1 fw-semibold time">{{ formatTime(timer2.seconds) }}</span>
                            </a>
                            <a href="#" class="btn btn-outline-light w-100"  data-bs-toggle="modal" data-bs-target="#cooking_done_modal">
                                <i class="icon-check-check me-2"></i> 
                                <span>Mark Done</span>
                            </a>
                        </div>
                        
                    </div>
                    <!-- end card -->
                </div>
                <!-- end col -->

                <!-- start col -->
                <div class="col-xl-4 col-lg-6 col-md-6 d-flex">
                    <!-- start card -->
                    <div class="card flex-fill mb-0">
                        <div class="card-header bg-warning">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <div class="d-flex align-items-center gap-2">
                                    <div class="avatar rounded-circle bg-white">
                                        <i class="icon-hand-platter fs-24 text-dark"></i>
                                    </div>
                                    <p class="mb-0 text-white fw-semibold fs-14px">Walk in Customer  
                                        <span class="fs-13 fw-normal d-block mt-1">Dine In</span> 
                                    </p>
                                </div>
                                <span class="badge bg-white text-center text-dark">#23896</span>
                            </div>
                        </div>
                        <div class="card-body border-bottom">
                            <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                <h6 class="mb-0 fw-normal fs-14">Token No : <span class="fw-semibold">07</span> </h6>
                                <p class="mb-0 fw-normal text-dark">15 Nov 2025, 05:15 PM</p>
                            </div>
                        </div>

                        <div class="card-body">
                            <div class="orders-list mb-4">
                                <div class="border-bottom-dashed mb-3 pb-3">
                                    <div class="orders text-dark mb-2">
                                        <p><span class="dot Chicken"></span>Margherita Pizza  - Regular</p>
                                        <p class="text-dark">×1</p>
                                    </div>
                                        <div class="bg-light rounded py-1 px-2">
                                            <p class="mb-0 fw-medium d-flex align-items-center text-dark"> <i class="icon-badge-info me-1"></i> Notes : Add More Onion, with extra Spicy</p>
                                        </div>
                                </div>
                                <div class="orders text-dark mb-3 pb-3 border-bottom-dashed">
                                    <p><span class="dot Chicken"></span>Caesar Salad</p>
                                    <p class="text-dark">×1</p>
                                </div>
                                <div class="orders text-dark mb-0">
                                    <p><span class="dot Chicken"></span>Apple Pie</p>
                                    <p class="text-dark">×1</p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center justify-content-between gap-3">
                                <div class="progress-item">
                                    <div class="progress-bar bg-success" style="width: 5%;"></div>
                                </div>
                                <p class="mb-0 fw-normal d-flex align-items-center"><i class="icon-clock me-1"></i> 15:00</p>
                            </div>
                            
                        </div>

                        <div class="card-footer d-flex align-items-center justify-content-between gap-2 pt-0 border-0 flex-wrap flex-xl-nowrap">
                            <a href="#" class="btn btn-light w-100 timer-btn" :class="{ 'running': timer3.running }" @click="toggleTimer3" data-bs-toggle="modal" data-bs-target="#cooking_started_modal">
                                <i :class="timer3.running ? 'icon-pause' : 'icon-play'" class="me-2"></i>
                                <span class="label">{{ timer3.running ? 'Pause' : 'Play' }}</span>
                                <span class="ps-1 fw-semibold time">{{ formatTime(timer3.seconds) }}</span>
                            </a>
                            <a href="#" class="btn btn-outline-light w-100"  data-bs-toggle="modal" data-bs-target="#cooking_done_modal">
                                <i class="icon-check-check me-2"></i> 
                                <span>Mark Done</span>
                            </a>
                        </div>
                        
                    </div>
                    <!-- end card -->
                </div>
                <!-- end col -->

                <!-- start col -->
                <div class="col-xl-4 col-lg-6 col-md-6 d-flex">
                    <!-- start card -->
                    <div class="card flex-fill mb-0">
                        <div class="card-header bg-danger">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <div class="d-flex align-items-center gap-2">
                                    <div class="avatar rounded-circle bg-white">
                                        <i class="icon-hand-platter fs-24 text-dark"></i>
                                    </div>
                                    <p class="mb-0 text-white fw-semibold fs-14px">Walk in Customer  
                                        <span class="fs-13 fw-normal d-block mt-1">Dine In</span> 
                                    </p>
                                </div>
                                <span class="badge bg-white text-center text-dark">#23896</span>
                            </div>
                        </div>
                        <div class="card-body border-bottom">
                            <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                <h6 class="mb-0 fw-normal fs-14">Token No : <span class="fw-semibold">42</span> </h6>
                                <p class="mb-0 fw-normal text-dark">15 Nov 2025, 03:22 PM</p>
                            </div>
                        </div>

                        <div class="card-body">
                            <div class="orders-list mb-4">
                                <div class="border-bottom-dashed mb-3 pb-3">
                                    <div class="orders text-dark mb-2">
                                        <p><span class="dot Chicken"></span>Pesto Pasta</p>
                                        <p class="text-dark">×2</p>
                                    </div>
                                    <div class="bg-light rounded py-1 px-2">
                                        <p class="mb-0 fw-medium d-flex align-items-center text-dark"> <i class="icon-badge-info me-1"></i> Notes : Need extra Spicy</p>
                                    </div>
                                </div>
                                <div class="orders text-dark mborder-bottom-dashed mb-3 pb-3">
                                    <p><span class="dot Chicken"></span>Basil pesto, pine nuts</p>
                                    <p class="text-dark">×1</p>
                                </div>
                                <div class="orders text-dark mb-0">
                                    <p><span class="dot Chicken"></span>Lemon Tart</p>
                                    <p class="text-dark">×1</p>
                                </div>
                            </div>
                            <p class="text-center text-danger mb-3 d-flex align-items-center justify-content-center fw-medium"> <i class="icon-clock-alert me-1"></i> Delayed By 5 Mins</p>
                            <div class="d-flex align-items-center justify-content-between gap-3">
                                <div class="progress-item">
                                    <div class="progress-bar bg-success" style="width: 75%;"></div>
                                </div>
                                <p class="mb-0 fw-normal d-flex align-items-center"><i class="icon-clock me-1"></i> 15:00</p>
                            </div>
                            
                        </div>

                        <div class="card-footer d-flex align-items-center justify-content-between gap-2 pt-0 border-0 flex-wrap flex-xl-nowrap">
                            <a href="#" class="btn btn-light w-100 timer-btn" :class="{ 'running': timer4.running }" @click="toggleTimer4" data-bs-toggle="modal" data-bs-target="#cooking_started_modal">
                                <i :class="timer4.running ? 'icon-pause' : 'icon-play'" class="me-2"></i>
                                <span class="label">{{ timer4.running ? 'Pause' : 'Play' }}</span>
                                <span class="ps-1 fw-semibold time">{{ formatTime(timer4.seconds) }}</span>
                            </a>
                            <a href="#" class="btn btn-outline-light w-100"  data-bs-toggle="modal" data-bs-target="#cooking_done_modal">
                                <i class="icon-check-check me-2"></i> 
                                <span>Mark Done</span>
                            </a>
                        </div>
                        
                    </div>
                    <!-- end card -->
                </div>
                <!-- end col -->

                <!-- start col -->
                <div class="col-xl-4 col-lg-6 col-md-6 d-flex">
                    <!-- start card -->
                    <div class="card flex-fill mb-0">
                        <div class="card-header bg-success">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <div class="d-flex align-items-center gap-2">
                                    <div class="avatar rounded-circle bg-white">
                                        <i class="icon-hand-platter fs-24 text-dark"></i>
                                    </div>
                                    <p class="mb-0 text-white fw-semibold fs-14px">Morgan Evans  
                                        <span class="fs-13 fw-normal d-block mt-1">Dine In</span> 
                                    </p>
                                </div>
                                <span class="badge bg-white text-center text-dark">#74758</span>
                            </div>
                        </div>
                        <div class="card-body border-bottom">
                            <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                <h6 class="mb-0 fw-normal fs-14">Token No : <span class="fw-semibold">30</span> </h6>
                                <p class="mb-0 fw-normal text-dark">15 Nov 2025, 02:45 PM</p>
                            </div>
                        </div>

                        <div class="card-body">
                            <div class="orders-list mb-4">
                                <div class="border-bottom-dashed mb-3 pb-3">
                                    <div class="orders text-dark mb-2">
                                        <p><span class="dot"></span>Spicy Tofu Stir-Fry</p>
                                        <p class="text-dark">×1</p>
                                    </div>
                                    <div class="bg-light rounded py-1 px-2">
                                        <p class="mb-0 fw-medium d-flex align-items-center text-dark"> <i class="icon-badge-info me-1"></i> Notes : Add More Onion, with extra Spicy</p>
                                    </div>
                                </div>
                                <div class="orders text-dark mb-3 pb-3 border-bottom-dashed">
                                    <p><span class="dot"></span>Grilled Chicken</p>
                                    <p class="text-dark">×1</p>
                                </div>
                                <div class="orders text-dark mb-0">
                                    <p><span class="dot"></span>Chicken Soup</p>
                                    <p class="text-dark">×1</p>
                                </div>
                            </div>
                            <p class="text-center text-danger mb-3 d-flex align-items-center justify-content-center fw-medium"> <i class="icon-clock-alert me-1"></i> 25:15 Mins - Served Before 5 Mins</p>
                            <div class="d-flex align-items-center justify-content-between gap-3">
                                <div class="progress-item">
                                    <div class="progress-bar bg-success" style="width: 85%;"></div>
                                </div>
                                <p class="mb-0 fw-normal d-flex align-items-center"><i class="icon-clock me-1"></i> 12:00</p>
                            </div>
                            
                        </div>

                        <div class="card-footer d-flex align-items-center justify-content-between gap-2 pt-0 border-0 flex-wrap flex-xl-nowrap">
                            <a href="#" class="btn btn-outline-light w-100"  data-bs-toggle="modal" data-bs-target="#print_order">
                                <i class="icon-printer me-2"></i> 
                                Print Order
                            </a>
                        </div>
                        
                    </div>
                    <!-- end card -->
                </div>
                <!-- end col -->

                <!-- start col -->
                <div class="col-xl-4 col-lg-6 col-md-6 d-flex">
                    <!-- start card -->
                    <div class="card flex-fill mb-0">
                        <div class="card-header bg-success">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <div class="d-flex align-items-center gap-2">
                                    <div class="avatar rounded-circle bg-white">
                                        <i class="icon-hand-platter fs-24 text-dark"></i>
                                    </div>
                                    <p class="mb-0 text-white fw-semibold fs-14px">Walk in Customer  
                                        <span class="fs-13 fw-normal d-block mt-1">Delivery</span> 
                                    </p>
                                </div>
                                <span class="badge bg-white text-center text-dark">#35658</span>
                            </div>
                        </div>
                        <div class="card-body border-bottom">
                            <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                <h6 class="mb-0 fw-normal fs-14">Token No : <span class="fw-semibold">40</span> </h6>
                                <p class="mb-0 fw-normal text-dark">14 Nov 2025, 09:12 AM</p>
                            </div>
                        </div>

                        <div class="card-body">
                            <div class="orders-list mb-4">
                                <div class="border-bottom-dashed mb-3 pb-3">
                                    <div class="orders text-dark mb-2">
                                        <p><span class="dot success"></span>Cheesecake</p>
                                        <p class="text-dark">×2</p>
                                    </div>
                                    <div class="bg-light rounded py-1 px-2">
                                        <p class="mb-0 fw-medium d-flex align-items-center text-dark"> <i class="icon-badge-info me-1"></i> Notes : Add More Cheese, with extra Spicy</p>
                                    </div>
                                </div>
                                <div class="orders text-dark mb-3 pb-3 border-bottom-dashed">
                                    <p><span class="dot success"></span>Creamy, graham</p>
                                    <p class="text-dark">×1</p>
                                </div>
                                <div class="orders text-dark mb-0">
                                    <p><span class="dot success"></span>Chicken Lollipop</p>
                                    <p class="text-dark">×1</p>
                                </div>
                            </div>
                            <p class="text-center text-danger mb-3 d-flex align-items-center justify-content-center fw-medium"> <i class="icon-clock-alert me-1"></i> 25:15 Mins - Served Before 10 Mins</p>
                            <div class="d-flex align-items-center justify-content-between gap-3">
                                <div class="progress-item">
                                    <div class="progress-bar bg-success" style="width: 90%;"></div>
                                </div>
                                <p class="mb-0 fw-normal d-flex align-items-center"><i class="icon-clock me-1"></i> 40:00</p>
                            </div>
                            
                        </div>

                        <div class="card-footer d-flex align-items-center justify-content-between gap-2 pt-0 border-0 flex-wrap flex-xl-nowrap">
                            <a href="#" class="btn btn-outline-light w-100"  data-bs-toggle="modal" data-bs-target="#print_order">
                                <i class="icon-printer me-2"></i> 
                                Print Order
                            </a>
                        </div>
                        
                    </div>
                    <!-- end card -->
                </div>
                <!-- end col -->
            </div>
            <!-- end row -->

        </div>
        <!-- End Content -->  

    </div>

    <!-- ========================
        End Page Content
    ========================= -->

    <kitchen-modal></kitchen-modal>
</template>

<script>
export default {
    data() {
        return {
            timer1: { seconds: 0, running: false, interval: null },
            timer2: { seconds: 0, running: false, interval: null },
            timer3: { seconds: 0, running: false, interval: null },
            timer4: { seconds: 0, running: false, interval: null },
        };
    },
    methods: {
        formatTime(sec) {
            const m = String(Math.floor(sec / 60)).padStart(2, "0");
            const s = String(sec % 60).padStart(2, "0");
            return `${m}:${s}`;
        },

        toggle(timer) {
            if (timer.running) {
                clearInterval(timer.interval);
                timer.interval = null;
                timer.running = false;
            return;
        }

        timer.running = true;
            timer.interval = setInterval(() => {
                timer.seconds++;
            }, 1000);
        },

        toggleTimer1() { this.toggle(this.timer1); },
        toggleTimer2() { this.toggle(this.timer2); },
        toggleTimer3() { this.toggle(this.timer3); },
        toggleTimer4() { this.toggle(this.timer4); },
    },
    beforeUnmount() {
        [this.timer1, this.timer2, this.timer3, this.timer4]
        .forEach(t => clearInterval(t.interval));
    },
};
</script>
