<?php $page = 'pos'; ?>
@extends('layout.mainlayout')
@section('content')

    <!-- ========================
        Start Page Content
    ========================= -->

    <div class="page-wrapper">

        <!-- Start Content-->
        <div class="content">

            <!-- start row -->
            <div class="row g-0">
                <div class="col-lg-8 pos-left">

                    <div class="slider-wrapper mb-4 pb-4 border-bottom">

                        <div class="d-flex align-items-center flex-wrap gap-3 mb-4">
                                <h3 class="mb-0">Recent Orders</h3>
                            <div class="d-flex align-items-center flex-wrap  justify-content-between gap-2 flex-fill">
                                <ul class="nav nav-tabs nav-tabs-solid border-0 align-items-center flex-wrap gap-2" role="tablist">
                                    <li class="nav-item">
                                        <a href="#" class="nav-link active shadow-sm" data-bs-toggle="tab" data-bs-target="#all">All Orders</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link shadow-sm" data-bs-toggle="tab"  data-bs-target="#dinein">Dine In</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link shadow-sm" data-bs-toggle="tab"  data-bs-target="#takeaway">Take Away</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link shadow-sm" data-bs-toggle="tab"  data-bs-target="#delivery">Delivery</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link shadow-sm" data-bs-toggle="tab"  data-bs-target="#table">Table</a>
                                    </li>
                                </ul>
                                <div class="d-flex align-items-center gap-2">
                                    <button type="button" class="slick-arrow all-prev"><i class="icon-arrow-left"></i></button>
                                    <button type="button" class="slick-arrow all-next"><i class="icon-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>

                        <div class="tab-content">

                            <!-- Tab -->
                            <div class="tab-pane fade active show" id="all">

                                <div class="all-slider">

                                    <!-- Item -->
                                    <div class="slide-item">
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

                                    <!-- Item -->
                                    <div class="slide-item">
                                        <div class="order-item">
                                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                                <div>
                                                    <p class="fs-12 mb-1">#56998</p>
                                                    <h6 class="fs-14 fw-semibold mb-1">Maria Gonzalez</h6>
                                                    <p class="fs-13 mb-0">11:45 AM</p>
                                                </div>
                                                <div class="text-end">
                                                    <span class="badge bg-light text-dark d-flex align-items-center mb-3"><i class="icon-check-check text-dark me-1"></i>Take Away</span>
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

                                    <!-- Item -->
                                    <div class="slide-item">
                                        <div class="order-item">
                                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                                <div>
                                                    <p class="fs-12 mb-1">#65698</p>
                                                    <h6 class="fs-14 fw-semibold mb-1">Liam O'Connor</h6>
                                                    <p class="fs-13 mb-0 d-flex align-items-center gap-2">11:10 AM<span class="even-line"></span>Table 1</p>
                                                </div>
                                                <div class="text-end">
                                                    <span class="badge bg-light text-dark d-flex align-items-center mb-3"><i class="icon-wine text-dark me-1"></i>Dine In</span>
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

                                    <!-- Item -->
                                    <div class="slide-item">
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

                                    <!-- Item 1 -->
                                    <div class="slide-item">
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

                                </div>

                            </div>

                            <!-- Tab -->
                            <div class="tab-pane fade" id="dinein">

                                <div class="dinein-slider">

                                    <!-- Item -->
                                    <div class="slide-item">
                                        <div class="order-item">
                                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                                <div>
                                                    <p class="fs-12 mb-1">#96589</p>
                                                    <h6 class="fs-14 fw-semibold mb-1">Sophia Kim</h6>
                                                    <p class="fs-13 mb-0">11:20 AM</p>
                                                </div>
                                                <div class="text-end">
                                                    <span class="badge bg-light text-dark d-flex align-items-center mb-3"><i class="icon-wine text-dark me-1"></i>Dine In</span>
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

                                    <!-- Item -->
                                    <div class="slide-item">
                                        <div class="order-item">
                                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                                <div>
                                                    <p class="fs-12 mb-1">#56998</p>
                                                    <h6 class="fs-14 fw-semibold mb-1">Maria Gonzalez</h6>
                                                    <p class="fs-13 mb-0">11:45 AM</p>
                                                </div>
                                                <div class="text-end">
                                                    <span class="badge bg-light text-dark d-flex align-items-center mb-3"><i class="icon-wine text-dark me-1"></i>Dine In</span>
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

                                    <!-- Item -->
                                    <div class="slide-item">
                                        <div class="order-item">
                                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                                <div>
                                                    <p class="fs-12 mb-1">#14589</p>
                                                    <h6 class="fs-14 fw-semibold mb-1">James Smith</h6>
                                                    <p class="fs-13 mb-0">11:30 AM</p>
                                                </div>
                                                <div class="text-end">
                                                    <span class="badge bg-light text-dark d-flex align-items-center mb-3"><i class="icon-wine text-dark me-1"></i>Dine In</span>
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

                                    <!-- Item -->
                                    <div class="slide-item">
                                        <div class="order-item">
                                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                                <div>
                                                    <p class="fs-12 mb-1">#65698</p>
                                                    <h6 class="fs-14 fw-semibold mb-1">Liam O'Connor</h6>
                                                    <p class="fs-13 mb-0 d-flex align-items-center gap-2">11:10 AM<span class="even-line"></span>Table 1</p>
                                                </div>
                                                <div class="text-end">
                                                    <span class="badge bg-light text-dark d-flex align-items-center mb-3"><i class="icon-wine text-dark me-1"></i>Dine In</span>
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

                                    <!-- Item 1 -->
                                    <div class="slide-item">
                                        <div class="order-item">
                                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                                <div>
                                                    <p class="fs-12 mb-1">#14589</p>
                                                    <h6 class="fs-14 fw-semibold mb-1">James Smith</h6>
                                                    <p class="fs-13 mb-0">11:30 AM</p>
                                                </div>
                                                <div class="text-end">
                                                    <span class="badge bg-light text-dark d-flex align-items-center mb-3"><i class="icon-wine text-dark me-1"></i>Dine In</span>
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

                                </div>

                            </div>

                                <!-- Tab -->
                            <div class="tab-pane fade" id="takeaway">

                                <div class="takeaway-slider">

                                    <!-- Item -->
                                    <div class="slide-item">
                                        <div class="order-item">
                                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                                <div>
                                                    <p class="fs-12 mb-1">#56998</p>
                                                    <h6 class="fs-14 fw-semibold mb-1">Maria Gonzalez</h6>
                                                    <p class="fs-13 mb-0">11:45 AM</p>
                                                </div>
                                                <div class="text-end">
                                                    <span class="badge bg-light text-dark d-flex align-items-center mb-3"><i class="icon-check-check text-dark me-1"></i>Take Away</span>
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

                                    <!-- Item -->
                                    <div class="slide-item">
                                        <div class="order-item">
                                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                                <div>
                                                    <p class="fs-12 mb-1">#14589</p>
                                                    <h6 class="fs-14 fw-semibold mb-1">James Smith</h6>
                                                    <p class="fs-13 mb-0">11:30 AM</p>
                                                </div>
                                                <div class="text-end">
                                                    <span class="badge bg-light text-dark d-flex align-items-center mb-3"><i class="icon-check-check text-dark me-1"></i>Take Away</span>
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

                                    <!-- Item 1 -->
                                    <div class="slide-item">
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

                                    <!-- Item -->
                                    <div class="slide-item">
                                        <div class="order-item">
                                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                                <div>
                                                    <p class="fs-12 mb-1">#96589</p>
                                                    <h6 class="fs-14 fw-semibold mb-1">Sophia Kim</h6>
                                                    <p class="fs-13 mb-0">11:20 AM</p>
                                                </div>
                                                <div class="text-end">
                                                    <span class="badge bg-light text-dark d-flex align-items-center mb-3"><i class="icon-check-check text-dark me-1"></i>Take Away</span>
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

                                    <!-- Item -->
                                    <div class="slide-item">
                                        <div class="order-item">
                                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                                <div>
                                                    <p class="fs-12 mb-1">#65698</p>
                                                    <h6 class="fs-14 fw-semibold mb-1">Liam O'Connor</h6>
                                                    <p class="fs-13 mb-0 d-flex align-items-center gap-2">11:10 AM<span class="even-line"></span>Table 1</p>
                                                </div>
                                                <div class="text-end">
                                                    <span class="badge bg-light text-dark d-flex align-items-center mb-3"><i class="icon-check-check text-dark me-1"></i>Take Away</span>
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

                                </div>

                            </div>

                            <!-- Tab -->
                            <div class="tab-pane fade" id="delivery">

                                <div class="delivery-slider">

                                    <!-- Item -->
                                    <div class="slide-item">
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

                                    <!-- Item 1 -->
                                    <div class="slide-item">
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

                                    <!-- Item -->
                                    <div class="slide-item">
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

                                    <!-- Item -->
                                    <div class="slide-item">
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

                                    <!-- Item -->
                                    <div class="slide-item">
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

                                </div>

                            </div>

                            <!-- Tab -->
                            <div class="tab-pane fade" id="table">

                                <div class="table-slider">

                                    <!-- Item -->
                                    <div class="slide-item">
                                        <div class="order-item">
                                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                                <div>
                                                    <p class="fs-12 mb-1">#65698</p>
                                                    <h6 class="fs-14 fw-semibold mb-1">Liam O'Connor</h6>
                                                    <p class="fs-13 mb-0 d-flex align-items-center gap-2">11:10 AM<span class="even-line"></span>Table 1</p>
                                                </div>
                                                <div class="text-end">
                                                    <span class="badge bg-light text-dark d-flex align-items-center mb-3"><i class="icon-concierge-bell text-dark me-1"></i>Table</span>
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

                                    <!-- Item 1 -->
                                    <div class="slide-item">
                                        <div class="order-item">
                                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                                <div>
                                                    <p class="fs-12 mb-1">#14589</p>
                                                    <h6 class="fs-14 fw-semibold mb-1">James Smith</h6>
                                                    <p class="fs-13 mb-0">11:30 AM</p>
                                                </div>
                                                <div class="text-end">
                                                    <span class="badge bg-light text-dark d-flex align-items-center mb-3"><i class="icon-concierge-bell text-dark me-1"></i>Table</span>
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

                                    <!-- Item -->
                                    <div class="slide-item">
                                        <div class="order-item">
                                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                                <div>
                                                    <p class="fs-12 mb-1">#56998</p>
                                                    <h6 class="fs-14 fw-semibold mb-1">Maria Gonzalez</h6>
                                                    <p class="fs-13 mb-0">11:45 AM</p>
                                                </div>
                                                <div class="text-end">
                                                    <span class="badge bg-light text-dark d-flex align-items-center mb-3"><i class="icon-concierge-bell text-dark me-1"></i>Table</span>
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

                                    <!-- Item -->
                                    <div class="slide-item">
                                        <div class="order-item">
                                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                                <div>
                                                    <p class="fs-12 mb-1">#14589</p>
                                                    <h6 class="fs-14 fw-semibold mb-1">James Smith</h6>
                                                    <p class="fs-13 mb-0">11:30 AM</p>
                                                </div>
                                                <div class="text-end">
                                                    <span class="badge bg-light text-dark d-flex align-items-center mb-3"><i class="icon-concierge-bell text-dark me-1"></i>Table</span>
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

                                    <!-- Item -->
                                    <div class="slide-item">
                                        <div class="order-item">
                                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                                <div>
                                                    <p class="fs-12 mb-1">#96589</p>
                                                    <h6 class="fs-14 fw-semibold mb-1">Sophia Kim</h6>
                                                    <p class="fs-13 mb-0">11:20 AM</p>
                                                </div>
                                                <div class="text-end">
                                                    <span class="badge bg-light text-dark d-flex align-items-center mb-3"><i class="icon-concierge-bell text-dark me-1"></i>Table</span>
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

                                </div>

                            </div>

                        </div>

                    </div>

                    <!-- Menu Item -->
                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                        <div class="d-flex align-items-center gap-2 flex-wrap">
                            <h5 class="mb-0 me-2">Menu Categories</h5>

                        </div>
                        <div class="d-flex align-items-center gap-2 flex-wrap orders-list">
                                <label class="d-flex align-items-center fs-14 text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                    <span class="dot success me-1"></span>
                                    Veg
                                </label>
                                <label class="d-flex align-items-center fs-14 text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <span class="dot me-1"></span>
                                    Non Veg
                                </label>
                                <label class="d-flex align-items-center fs-14 text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <span class="dot warning me-1"></span>
                                    Egg
                                </label>
                            </div>
                        <div class="d-flex align-items-center gap-2 flex-wrap">
                            <div class="input-group input-group-flat w-auto">
                                <input type="text" class="form-control" placeholder="Search">
                                <span class="input-group-text">
                                    <i class="icon-search text-dark"></i>
                                </span>
                            </div>
                            <a href="#" class="btn btn-icon btn-sm btn-outline-white rounded-circle" aria-label="refresh"><i class="icon-refresh-ccw"></i></a>
                            <a href="#" class="btn btn-icon btn-sm btn-outline-white rounded-circle" aria-label="refresh"><i class="icon-list-filter"></i></a>
                            <div class="d-flex align-items-center gap-2">
                                <button type="button" class="slick-arrow category-prev"><i class="icon-arrow-left"></i></button>
                                <button type="button" class="slick-arrow category-next"><i class="icon-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>

                    <!-- Category Slider -->
                    <ul class="nav nav-tabs nav-tabs-solid category-tab border-0 category-slider mb-4" role="tablist">
                        <li class="nav-item">
                            <a href="#all-menu" class="nav-link active shadow" data-bs-toggle="tab">
                                <div class="avatar avatar-lg rounded-circle flex-shrink-0">
                                    <img src="{{URL::asset('build/img/food/food-1.png')}}" alt="food" class="img-fluid">
                                </div>
                                <div>
                                    <h6 class="fs-14 fw-semibold mb-1">All Menus</h6>
                                    <p class="text-body fw-normal mb-0">200 Menus</p>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#seafood-menu" class="nav-link shadow" data-bs-toggle="tab">
                                <div class="avatar avatar-lg rounded-circle flex-shrink-0">
                                    <img src="{{URL::asset('build/img/food/food-2.png')}}" alt="food" class="img-fluid">
                                </div>
                                <div>
                                    <h6 class="fs-14 fw-semibold mb-1">Sea Food</h6>
                                    <p class="text-body fw-normal mb-0">200 Menus</p>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#pizza-menu" class="nav-link shadow-sm" data-bs-toggle="tab">
                                <div class="avatar avatar-lg rounded-circle flex-shrink-0">
                                    <img src="{{URL::asset('build/img/food/food-3.png')}}" alt="food" class="img-fluid">
                                </div>
                                <div>
                                    <h6 class="fs-14 fw-semibold mb-1">Pizza</h6>
                                    <p class="text-body fw-normal mb-0">180 Menus</p>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#salad-menu" class="nav-link shadow-sm" data-bs-toggle="tab">
                                <div class="avatar avatar-lg rounded-circle flex-shrink-0">
                                    <img src="{{URL::asset('build/img/food/food-4.png')}}" alt="food" class="img-fluid">
                                </div>
                                <div>
                                    <h6 class="fs-14 fw-semibold mb-1">Salads</h6>
                                    <p class="text-body fw-normal mb-0">180 Menus</p>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#tacos-menu" class="nav-link shadow-sm" data-bs-toggle="tab">
                                <div class="avatar avatar-lg rounded-circle flex-shrink-0">
                                    <img src="{{URL::asset('build/img/food/food-5.png')}}" alt="food" class="img-fluid">
                                </div>
                                <div>
                                    <h6 class="fs-14 fw-semibold mb-1">Tacos</h6>
                                    <p class="text-body fw-normal mb-0">150 Menus</p>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#soup-menu" class="nav-link shadow-sm" data-bs-toggle="tab">
                                <div class="avatar avatar-lg rounded-circle flex-shrink-0">
                                    <img src="{{URL::asset('build/img/food/food-6.png')}}" alt="food" class="img-fluid">
                                </div>
                                <div>
                                    <h6 class="fs-14 fw-semibold mb-1">Soups</h6>
                                    <p class="text-body fw-normal mb-0">180 Menus</p>
                                </div>
                            </a>
                        </li>
                    </ul>

                    <div class="tab-content">

                        <!-- Tab Item -->
                        <div class="tab-pane fade show active" id="all-menu">
                            <div class="row g-3">

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="{{URL::asset('build/img/items/food-01.jpg')}}" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                            <span class="badge bg-danger"><i class="icon-crown text-white"></i>Trending</span>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Sea Food</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Grilled Salmon Steak</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$80</p>
                                                <div class="quantity-control">
                                                    <button type="button" class="minus-btn"><i class="icon-minus"></i></button>
                                                    <input type="text" class="quantity-input" value="1" aria-label="Quantity">
                                                    <button type="button" class="add-btn"><i class="icon-plus"></i></button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="{{URL::asset('build/img/items/food-02.jpg')}}" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                            <span class="badge bg-indigo"><i class="icon-flame text-white"></i>Must Try</span>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Pizza</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-success me-1"></i> Veg</span>
                                                </div>
                                            </div>
                                            <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Cheese Burst Pizza</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$66</p>
                                                <div class="quantity-control">
                                                    <button type="button" class="minus-btn"><i class="icon-minus"></i></button>
                                                    <input type="text" class="quantity-input" value="1" aria-label="Quantity">
                                                    <button type="button" class="add-btn"><i class="icon-plus"></i></button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="{{URL::asset('build/img/items/food-03.jpg')}}" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Sea Food</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Garlic Butter Shrimp</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$25</p>
                                                <div class="quantity-control">
                                                    <button type="button" class="minus-btn"><i class="icon-minus"></i></button>
                                                    <input type="text" class="quantity-input" value="1" aria-label="Quantity">
                                                    <button type="button" class="add-btn"><i class="icon-plus"></i></button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="{{URL::asset('build/img/items/food-04.jpg')}}" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Tacos</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Chicken Taco</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark"><span class="text-body text-decoration-line-through">$38</span> $33</p>
                                                <div class="quantity-control">
                                                    <button type="button" class="minus-btn"><i class="icon-minus"></i></button>
                                                    <input type="text" class="quantity-input" value="1" aria-label="Quantity">
                                                    <button type="button" class="add-btn"><i class="icon-plus"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="{{URL::asset('build/img/items/food-10.jpg')}}" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Soups</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Tomato Basil Soup</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark"><span class="text-body text-decoration-line-through">$38</span> $33</p>
                                                <div class="quantity-control">
                                                    <button type="button" class="minus-btn"><i class="icon-minus"></i></button>
                                                    <input type="text" class="quantity-input" value="1" aria-label="Quantity">
                                                    <button type="button" class="add-btn"><i class="icon-plus"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="{{URL::asset('build/img/items/food-05.jpg')}}" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Sushi</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Vegetable Roll</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$66</p>
                                                <div class="quantity-control">
                                                    <button type="button" class="minus-btn"><i class="icon-minus"></i></button>
                                                    <input type="text" class="quantity-input" value="1" aria-label="Quantity">
                                                    <button type="button" class="add-btn"><i class="icon-plus"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="{{URL::asset('build/img/items/food-16.jpg')}}" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Beverages</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Lemon Mint Juice</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$96</p>
                                                <div class="quantity-control">
                                                    <button type="button" class="minus-btn"><i class="icon-minus"></i></button>
                                                    <input type="text" class="quantity-input" value="1" aria-label="Quantity">
                                                    <button type="button" class="add-btn"><i class="icon-plus"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="{{URL::asset('build/img/items/food-05.jpg')}}" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                            <span class="badge bg-indigo"><i class="icon-flame text-white"></i>Must Try</span>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Salads</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Grilled Chicken</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$49</p>
                                                <div class="quantity-control">
                                                    <button type="button" class="minus-btn"><i class="icon-minus"></i></button>
                                                    <input type="text" class="quantity-input" value="1" aria-label="Quantity">
                                                    <button type="button" class="add-btn"><i class="icon-plus"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="{{URL::asset('build/img/items/food-09.jpg')}}" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Soups</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Shrimp Tom Yum</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$25</p>
                                                <div class="quantity-control">
                                                    <button type="button" class="minus-btn"><i class="icon-minus"></i></button>
                                                    <input type="text" class="quantity-input" value="1" aria-label="Quantity">
                                                    <button type="button" class="add-btn"><i class="icon-plus"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="{{URL::asset('build/img/items/food-08.jpg')}}" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Pizza</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Corn Pizza</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$96</p>
                                                <div class="quantity-control">
                                                    <button type="button" class="minus-btn"><i class="icon-minus"></i></button>
                                                    <input type="text" class="quantity-input" value="1" aria-label="Quantity">
                                                    <button type="button" class="add-btn"><i class="icon-plus"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="{{URL::asset('build/img/items/food-07.jpg')}}" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Soups</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Chicken Noodle Soup</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$45</p>
                                                <div class="quantity-control">
                                                    <button type="button" class="minus-btn"><i class="icon-minus"></i></button>
                                                    <input type="text" class="quantity-input" value="1" aria-label="Quantity">
                                                    <button type="button" class="add-btn"><i class="icon-plus"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="{{URL::asset('build/img/items/food-05.jpg')}}" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Sea Food</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Lobster Thermidor</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$56</p>
                                                <div class="quantity-control">
                                                    <button type="button" class="minus-btn"><i class="icon-minus"></i></button>
                                                    <input type="text" class="quantity-input" value="1" aria-label="Quantity">
                                                    <button type="button" class="add-btn"><i class="icon-plus"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <!-- Tab Item -->
                        <div class="tab-pane fade" id="seafood-menu">
                            <div class="row g-3">

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="{{URL::asset('build/img/items/food-01.jpg')}}" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                            <span class="badge bg-danger"><i class="icon-crown text-white"></i>Trending</span>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Sea Food</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Grilled Salmon Steak</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$80</p>
                                                <div class="quantity-control">
                                                    <button type="button" class="minus-btn"><i class="icon-minus"></i></button>
                                                    <input type="text" class="quantity-input" value="1" aria-label="Quantity">
                                                    <button type="button" class="add-btn"><i class="icon-plus"></i></button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="{{URL::asset('build/img/items/food-03.jpg')}}" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Sea Food</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Garlic Butter Shrimp</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$25</p>
                                                <div class="quantity-control">
                                                    <button type="button" class="minus-btn"><i class="icon-minus"></i></button>
                                                    <input type="text" class="quantity-input" value="1" aria-label="Quantity">
                                                    <button type="button" class="add-btn"><i class="icon-plus"></i></button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="{{URL::asset('build/img/items/food-05.jpg')}}" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Sushi</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Vegetable Roll</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$66</p>
                                                <div class="quantity-control">
                                                    <button type="button" class="minus-btn"><i class="icon-minus"></i></button>
                                                    <input type="text" class="quantity-input" value="1" aria-label="Quantity">
                                                    <button type="button" class="add-btn"><i class="icon-plus"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="{{URL::asset('build/img/items/food-05.jpg')}}" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Sea Food</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Lobster Thermidor</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$56</p>
                                                <div class="quantity-control">
                                                    <button type="button" class="minus-btn"><i class="icon-minus"></i></button>
                                                    <input type="text" class="quantity-input" value="1" aria-label="Quantity">
                                                    <button type="button" class="add-btn"><i class="icon-plus"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                            <!-- Tab Item -->
                        <div class="tab-pane fade" id="pizza-menu">
                            <div class="row g-3">

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="{{URL::asset('build/img/items/food-02.jpg')}}" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                            <span class="badge bg-indigo"><i class="icon-flame text-white"></i>Must Try</span>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Pizza</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-success me-1"></i> Veg</span>
                                                </div>
                                            </div>
                                            <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Cheese Burst Pizza</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$66</p>
                                                <div class="quantity-control">
                                                    <button type="button" class="minus-btn"><i class="icon-minus"></i></button>
                                                    <input type="text" class="quantity-input" value="1" aria-label="Quantity">
                                                    <button type="button" class="add-btn"><i class="icon-plus"></i></button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="{{URL::asset('build/img/items/food-08.jpg')}}" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Pizza</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Corn Pizza</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$96</p>
                                                <div class="quantity-control">
                                                    <button type="button" class="minus-btn"><i class="icon-minus"></i></button>
                                                    <input type="text" class="quantity-input" value="1" aria-label="Quantity">
                                                    <button type="button" class="add-btn"><i class="icon-plus"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <!-- Tab Item -->
                        <div class="tab-pane fade" id="salad-menu">
                            <div class="row g-3">

                                    <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="{{URL::asset('build/img/items/food-05.jpg')}}" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                            <span class="badge bg-indigo"><i class="icon-flame text-white"></i>Must Try</span>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Salads</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Grilled Chicken</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$49</p>
                                                <div class="quantity-control">
                                                    <button type="button" class="minus-btn"><i class="icon-minus"></i></button>
                                                    <input type="text" class="quantity-input" value="1" aria-label="Quantity">
                                                    <button type="button" class="add-btn"><i class="icon-plus"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="{{URL::asset('build/img/items/food-07.jpg')}}" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Soups</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Chicken Noodle Soup</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$45</p>
                                                <div class="quantity-control">
                                                    <button type="button" class="minus-btn"><i class="icon-minus"></i></button>
                                                    <input type="text" class="quantity-input" value="1" aria-label="Quantity">
                                                    <button type="button" class="add-btn"><i class="icon-plus"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <!-- Tab Item -->
                        <div class="tab-pane fade" id="tacos-menu">
                            <div class="row g-3">

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="{{URL::asset('build/img/items/food-04.jpg')}}" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Tacos</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Chicken Taco</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark"><span class="text-body text-decoration-line-through">$38</span> $33</p>
                                                <div class="quantity-control">
                                                    <button type="button" class="minus-btn"><i class="icon-minus"></i></button>
                                                    <input type="text" class="quantity-input" value="1" aria-label="Quantity">
                                                    <button type="button" class="add-btn"><i class="icon-plus"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <!-- Tab Item -->
                        <div class="tab-pane fade" id="soup-menu">
                            <div class="row g-3">

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="{{URL::asset('build/img/items/food-10.jpg')}}" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Soups</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Tomato Basil Soup</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark"><span class="text-body text-decoration-line-through">$38</span> $33</p>
                                                <div class="quantity-control">
                                                    <button type="button" class="minus-btn"><i class="icon-minus"></i></button>
                                                    <input type="text" class="quantity-input" value="1" aria-label="Quantity">
                                                    <button type="button" class="add-btn"><i class="icon-plus"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="{{URL::asset('build/img/items/food-09.jpg')}}" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Soups</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Shrimp Tom Yum</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$25</p>
                                                <div class="quantity-control">
                                                    <button type="button" class="minus-btn"><i class="icon-minus"></i></button>
                                                    <input type="text" class="quantity-input" value="1" aria-label="Quantity">
                                                    <button type="button" class="add-btn"><i class="icon-plus"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="{{URL::asset('build/img/items/food-07.jpg')}}" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Soups</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Chicken Noodle Soup</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$45</p>
                                                <div class="quantity-control">
                                                    <button type="button" class="minus-btn"><i class="icon-minus"></i></button>
                                                    <input type="text" class="quantity-input" value="1" aria-label="Quantity">
                                                    <button type="button" class="add-btn"><i class="icon-plus"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

                <div class="col-lg-4">
                    <div class="pos-right">

                        <!-- Title  -->
                        <div class="p-3 d-flex align-items-center justify-content-between flex-wrap border-bottom">
                            <h6 class="mb-0">Order #56998</h6>
                            <p class="mb-0">08 Oct, 2025, 12:44 PM</p>
                        </div>

                        <!-- Tabs  -->
                        <div class="item border-bottom">
                            <!-- Tabs -->
                            <ul class="nav nav-tabs nav-tabs-solid border-0 mb-3 align-items-center justify-content-between flex-wrap gap-1 pos-tab" role="tablist">
                                <li class="nav-item flex-fill">
                                    <a href="#order-tab1" class="nav-link active justify-content-center shadow-sm" data-bs-toggle="tab"><i class="icon-wine"></i>Dine In</a>
                                </li>
                                <li class="nav-item flex-fill">
                                    <a href="#order-tab2" class="nav-link justify-content-center shadow-sm" data-bs-toggle="tab"><i class="icon-shopping-bag"></i>Take Away</a>
                                </li>
                                <li class="nav-item flex-fill">
                                    <a href="#order-tab3" class="nav-link flex-fill justify-content-center shadow-sm" data-bs-toggle="tab"><i class="icon-check-check"></i>Delivery</a>
                                </li>
                                <li class="nav-item flex-fill">
                                    <a href="#order-tab4" class="nav-link flex-fill justify-content-center shadow-sm" data-bs-toggle="tab"><i class="icon-land-plot"></i>Table</a>
                                </li>
                            </ul>

                            <div class="tab-content">

                                <!-- TAb 1 -->
                                <div class="tab-pane show active" id="order-tab1">

                                    <!-- Start row -->
                                    <div class="row g-2">
                                        <div class="col-lg-5">
                                            <select class="select">
                                                <option>Waiter</option>
                                                <option>Andrew Fletcher</option>
                                                <option>Morgan Evans</option>
                                                <option>Maria Gonzalez</option>
                                            </select>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="input-item d-flex align-items-center gap-2">
                                                    <select class="select2">
                                                    <option>Select Customer</option>
                                                    <option>Sue Allen</option>
                                                    <option>Frank Barrett</option>
                                                    <option>Jim Vickers</option>
                                                </select>
                                                <button class="btn btn-primary btn-icon" data-bs-toggle="modal" data-bs-target="#add_customer"><i class="icon-plus"></i></button>
                                            </div>
                                        </div>
                                        <div class="col-lg-1">
                                            <div class="d-flex align-items-center justify-content-end">
                                                <button class="border-0 btn btn-icon bg-transparent fs-16 text-dark" data-bs-toggle="modal" data-bs-target="#edit_customer"><i class="icon-pencil-line"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- TAb 2 -->
                                <div class="tab-pane show" id="order-tab2">

                                    <!-- Start row -->
                                    <div class="row g-2">
                                        <div class="col-lg-11">
                                            <div class="input-item d-flex align-items-center gap-2">
                                                    <select class="select2">
                                                    <option>Select Customer</option>
                                                    <option>Sue Allen</option>
                                                    <option>Frank Barrett</option>
                                                    <option>Jim Vickers</option>
                                                </select>
                                                <button class="btn btn-primary btn-icon" data-bs-toggle="modal" data-bs-target="#add_customer"><i class="icon-plus"></i></button>
                                            </div>
                                        </div>
                                        <div class="col-lg-1">
                                            <div class="d-flex align-items-center justify-content-end">
                                                <button class="border-0 btn btn-icon bg-transparent fs-16 text-dark" data-bs-toggle="modal" data-bs-target="#edit_customer"><i class="icon-pencil-line"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- TAb 3 -->
                                <div class="tab-pane show" id="order-tab3">

                                    <!-- Start row -->
                                    <div class="row g-2">
                                        <div class="col-lg-11">
                                            <div class="input-item d-flex align-items-center gap-2">
                                                    <select class="select2">
                                                    <option>Select Customer</option>
                                                    <option>Sue Allen</option>
                                                    <option>Frank Barrett</option>
                                                    <option>Jim Vickers</option>
                                                </select>
                                                <button class="btn btn-primary btn-icon" data-bs-toggle="modal" data-bs-target="#add_customer"><i class="icon-plus"></i></button>
                                            </div>
                                        </div>
                                        <div class="col-lg-1">
                                            <div class="d-flex align-items-center justify-content-end">
                                                <button class="border-0 btn btn-icon bg-transparent fs-16 text-dark" data-bs-toggle="modal" data-bs-target="#edit_customer"><i class="icon-pencil-line"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- TAb 4 -->
                                <div class="tab-pane show" id="order-tab4">

                                    <!-- Start row -->
                                    <div class="row g-2">
                                        <div class="col-lg-5">
                                            <select class="select">
                                                <option>Table</option>
                                                <option>Table 1 </option>
                                                <option>Table 2</option>
                                                <option>Table 3</option>
                                            </select>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="input-item d-flex align-items-center gap-2">
                                                <select class="select2">
                                                    <option>Select Customer</option>
                                                    <option>Sue Allen</option>
                                                    <option>Frank Barrett</option>
                                                    <option>Jim Vickers</option>
                                                </select>
                                                <button class="btn btn-primary btn-icon" data-bs-toggle="modal" data-bs-target="#add_customer"><i class="icon-plus"></i></button>
                                            </div>
                                        </div>
                                        <div class="col-lg-1">
                                            <div class="d-flex align-items-center justify-content-end">
                                                <button class="border-0 btn btn-icon bg-transparent fs-16 text-dark" data-bs-toggle="modal" data-bs-target="#edit_customer"><i class="icon-pencil-line"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <!-- Ordered Item -->
                        <div class="p-3 border-bottom">
                            <div class="d-flex align-items-center justify-content-between mb-4 gap-2 flex-wrap">
                                <h6 class="mb-0">Ordered Menus</h6>
                                <p class="mb-0 d-flex align-items-center text-dark">Total Menus : <span class="d-flex align-items-center justify-content-center fs-14 btn btn-icon btn-xs rounded-circle border flex-shrink-0 ms-1 text-dark">4</span></p>
                            </div>

                            <div class="menu-item active p-2 rounded border shadow mb-3">
                                <div class="d-flex align-items-center justify-content-between flex-wrap flex-xl-nowrap gap-2">
                                    <a href="#" class="d-flex align-items-center overflow-hidden" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                        <div class="avatar avatar-lg flex-shrink-0 me-2">
                                            <img src="{{URL::asset('build/img/items/food-04.jpg')}}" alt="food-img" class="img-fluid rounded">
                                        </div>
                                        <div class="overflow-hidden">
                                            <h6 class="mb-1 fs-14 fw-semibold text-truncate mb-2">Chicken Taco</h6>
                                            <p class="badge badge-md bg-light text-dark mb-0">Medium</p>
                                        </div>
                                    </a>
                                    <div class="d-flex align-items-center gap-2 flex-shrink-0">
                                        <div class="quantity-control">
                                            <button type="button" class="minus-btn"><i class="icon-minus"></i></button>
                                            <input type="text" class="quantity-input" value="2" aria-label="Quantity">
                                            <button type="button" class="add-btn"><i class="icon-plus"></i></button>
                                        </div>
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#add_notes" class="btn btn-xs fs-12 py-1 px-2 btn-white">Add Note</a>
                                        <a href="#" class="btn btn-xs btn-icon fs-12 btn-light close-icon rounded-circle"><i class="icon-x"></i></a>
                                    </div>
                                </div>
                                <div id="collapseOne" class="collapse show">
                                    <div class="pt-2 mt-2 border-top">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="text-center">
                                                <span class="fs-12 mb-1 d-block fw-medium text-dark">Item Rate</span>
                                                <p class="mb-0 fs-14 fw-normal">$33</p>
                                            </div>
                                            <div class="text-center">
                                                <span class="fs-12 mb-1 d-block fw-medium text-dark">Amount</span>
                                                <p class="mb-0 fs-14 fw-normal">$66</p>
                                            </div>
                                            <div class="text-center">
                                                <span class="fs-12 mb-1 d-block fw-medium text-dark">Total</span>
                                                <p class="mb-0 fs-14 fw-semibold text-dark">$66</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="menu-item p-2 rounded border shadow mb-3">
                                <div class="d-flex align-items-center justify-content-between flex-wrap flex-xl-nowrap gap-2">
                                    <a href="#" class="d-flex align-items-center overflow-hidden" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                        <div class="avatar avatar-lg flex-shrink-0 me-2">
                                            <img src="{{URL::asset('build/img/items/food-01.jpg')}}" alt="food-img" class="img-fluid rounded">
                                        </div>
                                        <div class="overflow-hidden">
                                            <h6 class="mb-1 fs-14 fw-semibold text-truncate mb-2">Grilled Chicken</h6>
                                            <p class="badge badge-md bg-light text-dark mb-0">Small: 250 gms</p>
                                        </div>
                                    </a>
                                    <div class="d-flex align-items-center gap-2 justify-content-end flex-shrink-0">
                                        <div class="quantity-control">
                                            <button type="button" class="minus-btn"><i class="icon-minus"></i></button>
                                            <input type="text" class="quantity-input" value="1" aria-label="Quantity">
                                            <button type="button" class="add-btn"><i class="icon-plus"></i></button>
                                        </div>
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#add_notes" class="btn btn-xs fs-12 py-1 px-2 btn-white">Add Note</a>
                                        <a href="#" class="btn btn-xs btn-icon fs-12 btn-light close-icon rounded-circle"><i class="icon-x"></i></a>
                                    </div>
                                </div>
                                <div id="collapseTwo" class="collapse">
                                    <div class="pt-2 mt-2 border-top">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="text-center">
                                                <span class="fs-12 mb-1 d-block fw-medium text-dark">Item Rate</span>
                                                <p class="mb-0 fs-14 fw-normal">$13</p>
                                            </div>
                                            <div class="text-center">
                                                <span class="fs-12 mb-1 d-block fw-medium text-dark">Amount</span>
                                                <p class="mb-0 fs-14 fw-normal">$26</p>
                                            </div>
                                            <div class="text-center">
                                                <span class="fs-12 mb-1 d-block fw-medium text-dark">Total</span>
                                                <p class="mb-0 fs-14 fw-semibold text-dark">$46</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="menu-item p-2 rounded border shadow mb-3">
                                <div class="d-flex align-items-center justify-content-between flex-wrap flex-xl-nowrap gap-2">
                                    <a href="#" class="d-flex align-items-center overflow-hidden" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                        <div class="avatar avatar-lg flex-shrink-0 me-2">
                                            <img src="{{URL::asset('build/img/items/food-20.jpg')}}" alt="food-img" class="img-fluid rounded">
                                        </div>
                                        <div class="overflow-hidden">
                                            <h6 class="mb-1 fs-14 fw-semibold text-truncate mb-2">Lobster Thermidor</h6>
                                            <p class="badge badge-md bg-light text-dark mb-0">Half Lobster : 300 gms</p>
                                        </div>
                                    </a>
                                    <div class="d-flex align-items-center gap-2 justify-content-end flex-shrink-0">
                                        <div class="quantity-control">
                                            <button type="button" class="minus-btn"><i class="icon-minus"></i></button>
                                            <input type="text" class="quantity-input" value="1" aria-label="Quantity">
                                            <button type="button" class="add-btn"><i class="icon-plus"></i></button>
                                        </div>
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#add_notes" class="btn btn-xs fs-12 py-1 px-2 btn-white">Add Note</a>
                                        <a href="#" class="btn btn-xs btn-icon fs-12 btn-light close-icon rounded-circle"><i class="icon-x"></i></a>
                                    </div>
                                </div>
                                <div id="collapseThree" class="collapse">
                                    <div class="pt-2 mt-2 border-top">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="text-center">
                                                <span class="fs-12 mb-1 d-block fw-medium text-dark">Item Rate</span>
                                                <p class="mb-0 fs-14 fw-normal">$33</p>
                                            </div>
                                            <div class="text-center">
                                                <span class="fs-12 mb-1 d-block fw-medium text-dark">Amount</span>
                                                <p class="mb-0 fs-14 fw-normal">$66</p>
                                            </div>
                                            <div class="text-center">
                                                <span class="fs-12 mb-1 d-block fw-medium text-dark">Total</span>
                                                <p class="mb-0 fs-14 fw-semibold text-dark">$66</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="menu-item p-2 rounded border shadow mb-3">
                                <div class="d-flex align-items-center justify-content-between flex-wrap flex-xl-nowrap gap-2">
                                    <a href="#" class="d-flex align-items-center overflow-hidden" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                                        <div class="avatar avatar-lg flex-shrink-0 me-2">
                                            <img src="{{URL::asset('build/img/items/food-08.jpg')}}" alt="food-img" class="img-fluid rounded">
                                        </div>
                                        <div class="overflow-hidden">
                                            <h6 class="mb-1 fs-14 fw-semibold text-truncate mb-2">Spinach & Corn Pizza</h6>
                                            <p class="badge badge-md bg-light text-dark mb-0">Small: 6 inches</p>
                                        </div>
                                    </a>
                                    <div class="d-flex align-items-center gap-2 justify-content-end flex-shrink-0">
                                        <div class="quantity-control">
                                            <button type="button" class="minus-btn"><i class="icon-minus"></i></button>
                                            <input type="text" class="quantity-input" value="1" aria-label="Quantity">
                                            <button type="button" class="add-btn"><i class="icon-plus"></i></button>
                                        </div>
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#add_notes" class="btn btn-xs fs-12 py-1 px-2 btn-white">Add Note</a>
                                        <a href="#" class="btn btn-xs btn-icon fs-12 btn-light close-icon rounded-circle"><i class="icon-x"></i></a>
                                    </div>
                                </div>
                                <div id="collapseFour" class="collapse">
                                    <div class="pt-2 mt-2 border-top">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="text-center">
                                                <span class="fs-12 mb-1 d-block fw-medium text-dark">Item Rate</span>
                                                <p class="mb-0 fs-14 fw-normal">$30</p>
                                            </div>
                                            <div class="text-center">
                                                <span class="fs-12 mb-1 d-block fw-medium text-dark">Amount</span>
                                                <p class="mb-0 fs-14 fw-normal">$30</p>
                                            </div>
                                            <div class="text-center">
                                                <span class="fs-12 mb-1 d-block fw-medium text-dark">Total</span>
                                                <p class="mb-0 fs-14 fw-semibold text-dark">$30</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="price-item">
                                <h6 class="mb-3">Payment Summary</h6>
                                <p class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-2">Sub Total<span class="fw-medium text-dark">$267</span> </p>
                                <p class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-0">Tax (18%)<span class="fw-medium text-dark">$26.7</span> </p>
                            </div>
                        </div>

                        <!-- Paid Item -->
                        <div class="p-3 border-bottom d-flex align-items-center justify-content-between gap-2 flex-wrap">
                            <h5 class="mb-0">Amount to be Paid</h5>
                            <h5 class="mb-0">$274</h5>
                        </div>

                        <!-- Order Item -->
                        <div class="p-3">
                            <a href="#" class="btn btn-primary w-100 mb-4" data-bs-toggle="modal" data-bs-target="#order_modal">Place an Order</a>
                            <!-- start row -->
                            <div class="row g-3">
                                <div class="col-sm-4">
                                    <a href="#" class="btn btn-outline-light btn-sm d-flex align-items-center gap-1 shadow-sm" data-bs-toggle="modal" data-bs-target="#print_reciept"><i class="icon-printer"></i>Print</a>
                                </div>
                                <div class="col-sm-4">
                                    <a href="#" class="btn btn-outline-light btn-sm d-flex align-items-center gap-1 shadow-sm"  data-bs-toggle="modal" data-bs-target="#view_invoices"><i class="icon-file-chart-column"></i>Invoice</a>
                                </div>
                                <div class="col-sm-4">
                                    <a href="#" class="btn btn-outline-light btn-sm d-flex align-items-center gap-1 shadow-sm" data-bs-toggle="modal" data-bs-target="#draft_details"><i class="icon-files"></i>Draft</a>
                                </div>
                                <div class="col-sm-4">
                                    <a href="#" class="btn btn-outline-light btn-sm d-flex align-items-center gap-1 shadow-sm" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-x"></i>Cancel</a>
                                </div>
                                <div class="col-sm-4">
                                    <a href="#" class="btn btn-outline-light btn-sm d-flex align-items-center gap-1 shadow-sm"><i class="icon-zap"></i>Void</a>
                                </div>
                                <div class="col-sm-4">
                                    <a href="#" class="btn btn-outline-light btn-sm d-flex align-items-center gap-1 shadow-sm" data-bs-toggle="modal" data-bs-target="#transactions_details"><i class="icon-file-chart-line"></i>Tranactions</a>
                                </div>
                            </div>
                            <!-- end row -->

                        </div>
                    </div>
                </div>
            </div>
            <!-- end row -->

        </div>
        <!-- End Content-->

    </div>

    <!-- ========================
        End Page Content
    ========================= -->

@endsection
