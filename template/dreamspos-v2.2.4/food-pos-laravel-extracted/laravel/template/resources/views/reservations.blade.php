<?php $page = 'reservations'; ?>
@extends('layout.mainlayout')
@section('content')

    <!-- ========================
        Start Page Content
    ========================= -->

    <div class="page-wrapper">

        <!-- Start Content -->
        <div class="content">

            <!-- Page Header -->
            <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-3 mb-4">
                <div class="flex-grow-1">
                    <h3 class="mb-0">Reservations <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle ms-2"><i class="icon-refresh-ccw"></i></a></h3>
                </div>
                <div class="gap-2 d-flex align-items-center flex-wrap">
                    <div class="input-group input-group-flat w-auto">
                        <input type="text" class="form-control" placeholder="Search">
                        <span class="input-group-text">
                            <i class="icon-search text-dark"></i>
                        </span>
                    </div>
                    <a href="#" class="btn btn-primary d-inline-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_reservation"><i class="icon-circle-plus me-1"></i>Add New</a>
                </div>
            </div>
            <!-- End Page Header -->

            <!-- start row -->
            <div class="row">
                <!-- Item 1 -->
                <div class="col-xxl-4 col-xl-6 col-sm-6">
                    <div class="card">
                    <div class="card-body">
                        <div class="d-flex align-items-center gap-2 mb-3 flex-wrap">
                            <div class="bg-dark reservation-date rounded p-2 text-center flex-shrink-0">
                                <p class="text-white fw-semibold mb-0 position-relative">Dec 15  <span class="fs-13 fw-normal d-block mt-1">2025</span></p>
                            </div>
                            <div>
                                <h6 class="mb-2 fw-semibold">John Doe</h6>
                                <div class="d-flex align-items-center gap-2 flex-wrap">
                                    <p class="d-flex align-items-center mb-0"><i class="icon-clock me-1 text-dark me-1"></i> 10:45 </p>
                                    <span class="even-line"></span>
                                    <p class="d-flex align-items-center mb-0"><i class="icon-sofa me-1 text-dark me-1"></i> Table : 5 </p>
                                    <span class="even-line"></span>
                                    <p class="d-flex align-items-center mb-0"><i class="icon-users-round me-1 text-dark me-1"></i> Guests : 4 </p>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 pb-3 border-bottom-dashed">
                            <p class="mb-3 d-flex align-items-center justify-content-between gap-2 flex-wrap">Created on <span class="text-dark">9 Nov 2025, 2:30PM</span></p>
                            <p class="mb-0 d-flex align-items-center justify-content-between gap-2 flex-wrap">Status <span class="badge badge-soft-success">Booked</span></p>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                            <a href="#" class="btn btn-outline-light">View Note</a>
                            <div class="d-flex align-items-center gap-2">
                                <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle text-dark" data-bs-toggle="modal" data-bs-target="#edit_reservation"><i class="icon-pencil-line"></i></a>
                                <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle text-danger" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                <!-- Item 2 -->
                <div class="col-xxl-4 col-xl-6 col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex align-items-center flex-wrap gap-2  mb-3">
                                <div class="bg-dark reservation-date rounded p-2 text-center flex-shrink-0">
                                    <p class="text-white fw-semibold mb-0 position-relative">Nov 08  <span class="fs-13 fw-normal d-block mt-1">2025</span></p>
                                </div>
                                <div>
                                    <h6 class="mb-2 fw-semibold">Christopher Adams</h6>
                                    <div class="d-flex align-items-center flex-wrap gap-2">
                                        <p class="d-flex align-items-center mb-0"><i class="icon-clock me-1 text-dark me-1"></i> 10:10 </p>
                                        <span class="even-line"></span>
                                        <p class="d-flex align-items-center mb-0"><i class="icon-sofa me-1 text-dark me-1"></i> Table : 5 </p>
                                        <span class="even-line"></span>
                                        <p class="d-flex align-items-center mb-0"><i class="icon-users-round me-1 text-dark me-1"></i> Guests : 7 </p>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3 pb-3 border-bottom-dashed">
                                <p class="mb-3 d-flex align-items-center justify-content-between gap-2 flex-wrap">Created on <span class="text-dark">16 Nov 2025, 2:30PM</span></p>
                                <p class="mb-0 d-flex align-items-center justify-content-between gap-2 flex-wrap">Status <span class="badge badge-soft-danger">Cancelled</span></p>
                            </div>
                            <div class="d-flex align-items-center justify-content-between">
                                <a href="#" class="btn btn-outline-light">View Note</a>
                                <div class="d-flex align-items-center gap-2">
                                <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle text-dark" data-bs-toggle="modal" data-bs-target="#edit_reservation"><i class="icon-pencil-line"></i></a>
                                <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle text-danger" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Item 3 -->
                <div class="col-xxl-4 col-xl-6 col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex align-items-center gap-2 flex-wrap mb-3">
                                <div class="bg-dark reservation-date rounded p-2 text-center flex-shrink-0">
                                    <p class="text-white fw-semibold mb-0 position-relative">Nov 07  <span class="fs-13 fw-normal d-block mt-1">2025</span></p>
                                </div>
                                <div>
                                    <h6 class="mb-2 fw-semibold">Daniel Mitchell</h6>
                                    <div class="d-flex align-items-center flex-wrap gap-2">
                                        <p class="d-flex align-items-center mb-0"><i class="icon-clock me-1 text-dark me-1"></i> 10:31 </p>
                                        <span class="even-line"></span>
                                        <p class="d-flex align-items-center mb-0"><i class="icon-sofa me-1 text-dark me-1"></i> Table : 9 </p>
                                        <span class="even-line"></span>
                                        <p class="d-flex align-items-center mb-0"><i class="icon-users-round me-1 text-dark me-1"></i> Guests : 3 </p>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3 pb-3 border-bottom-dashed">
                                <p class="mb-3 d-flex align-items-center justify-content-between gap-2 flex-wrap">Created on <span class="text-dark">02 Aug 2025, 2:30PM</span></p>
                                <p class="mb-0 d-flex align-items-center justify-content-between gap-2 flex-wrap">Status <span class="badge badge-soft-danger">Cancelled</span></p>
                            </div>
                            <div class="d-flex align-items-center justify-content-between">
                                <a href="#" class="btn btn-outline-light">View Note</a>
                                <div class="d-flex align-items-center gap-2">
                                <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle text-dark" data-bs-toggle="modal" data-bs-target="#edit_reservation"><i class="icon-pencil-line"></i></a>
                                <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle text-danger" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Item 4 -->
                <div class="col-xxl-4 col-xl-6 col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex align-items-center gap-2 flex-wrap mb-3">
                                <div class="bg-dark reservation-date rounded p-2 text-center flex-shrink-0">
                                    <p class="text-white fw-semibold mb-0 position-relative">Nov 06  <span class="fs-13 fw-normal d-block mt-1">2025</span></p>
                                </div>
                                <div>
                                    <h6 class="mb-2 fw-semibold">Emily Parker</h6>
                                    <div class="d-flex align-items-center flex-wrap gap-2">
                                        <p class="d-flex align-items-center mb-0"><i class="icon-clock me-1 text-dark me-1"></i> 10:40 </p>
                                        <span class="even-line"></span>
                                        <p class="d-flex align-items-center mb-0"><i class="icon-sofa me-1 text-dark me-1"></i> Table : 2 </p>
                                        <span class="even-line"></span>
                                        <p class="d-flex align-items-center mb-0"><i class="icon-users-round me-1 text-dark me-1"></i> Guests : 3 </p>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3 pb-3 border-bottom-dashed">
                                <p class="mb-3 d-flex align-items-center justify-content-between gap-2 flex-wrap">Created on <span class="text-dark">02 Aug 2025, 2:30PM</span></p>
                                <p class="mb-0 d-flex align-items-center justify-content-between gap-2 flex-wrap">Status <span class="badge badge-soft-success">Booked</span></p>
                            </div>
                            <div class="d-flex align-items-center justify-content-between">
                                <a href="#" class="btn btn-outline-light">View Note</a>
                                <div class="d-flex align-items-center gap-2">
                                <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle text-dark" data-bs-toggle="modal" data-bs-target="#edit_reservation"><i class="icon-pencil-line"></i></a>
                                <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle text-danger" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Item 5 -->
                <div class="col-xxl-4 col-xl-6 col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex align-items-center gap-2 flex-wrap mb-3">
                                <div class="bg-dark reservation-date rounded p-2 text-center flex-shrink-0">
                                    <p class="text-white fw-semibold mb-0 position-relative">Nov 05  <span class="fs-13 fw-normal d-block mt-1">2025</span></p>
                                </div>
                                <div>
                                    <h6 class="mb-2 fw-semibold">Jennifer Brooks</h6>
                                    <div class="d-flex align-items-center flex-wrap gap-2">
                                        <p class="d-flex align-items-center mb-0"><i class="icon-clock me-1 text-dark me-1"></i> 10:45 </p>
                                        <span class="even-line"></span>
                                        <p class="d-flex align-items-center mb-0"><i class="icon-sofa me-1 text-dark me-1"></i> Table : 2 </p>
                                        <span class="even-line"></span>
                                        <p class="d-flex align-items-center mb-0"><i class="icon-users-round me-1 text-dark me-1"></i> Guests : 1 </p>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3 pb-3 border-bottom-dashed">
                                <p class="mb-3 d-flex align-items-center justify-content-between gap-2 flex-wrap">Created on <span class="text-dark">11 Nov 2025, 4:00PM</span></p>
                                <p class="mb-0 d-flex align-items-center justify-content-between gap-2 flex-wrap">Status <span class="badge badge-soft-success">Booked</span></p>
                            </div>
                            <div class="d-flex align-items-center justify-content-between">
                                <a href="#" class="btn btn-outline-light">View Note</a>
                                <div class="d-flex align-items-center gap-2">
                                <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle text-dark" data-bs-toggle="modal" data-bs-target="#edit_reservation"><i class="icon-pencil-line"></i></a>
                                <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle text-danger" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Item 6 -->
                <div class="col-xxl-4 col-xl-6 col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex align-items-center gap-2 flex-wrap mb-3">
                                <div class="bg-dark reservation-date rounded p-2 text-center flex-shrink-0">
                                    <p class="text-white fw-semibold mb-0 position-relative">Nov 04  <span class="fs-13 fw-normal d-block mt-1">2025</span></p>
                                </div>
                                <div>
                                    <h6 class="mb-2 fw-semibold">Matthew Collins</h6>
                                    <div class="d-flex align-items-center flex-wrap gap-2">
                                        <p class="d-flex align-items-center mb-0"><i class="icon-clock me-1 text-dark me-1"></i> 10:43 </p>
                                        <span class="even-line"></span>
                                        <p class="d-flex align-items-center mb-0"><i class="icon-sofa me-1 text-dark me-1"></i> Table : 4 </p>
                                        <span class="even-line"></span>
                                        <p class="d-flex align-items-center mb-0"><i class="icon-users-round me-1 text-dark me-1"></i> Guests : 3 </p>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3 pb-3 border-bottom-dashed">
                                <p class="mb-3 d-flex align-items-center justify-content-between gap-2 flex-wrap">Created on <span class="text-dark">12 Nov 2025, 4:00PM</span></p>
                                <p class="mb-0 d-flex align-items-center justify-content-between gap-2 flex-wrap">Status <span class="badge badge-soft-success">Booked</span></p>
                            </div>
                            <div class="d-flex align-items-center justify-content-between">
                                <a href="#" class="btn btn-outline-light">View Note</a>
                                <div class="d-flex align-items-center gap-2">
                                <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle text-dark" data-bs-toggle="modal" data-bs-target="#edit_reservation"><i class="icon-pencil-line"></i></a>
                                <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle text-danger" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Item 7 -->
                <div class="col-xxl-4 col-xl-6 col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex align-items-center gap-2 flex-wrap mb-3">
                                <div class="bg-dark reservation-date rounded p-2 text-center flex-shrink-0">
                                    <p class="text-white fw-semibold mb-0 position-relative">Nov 03  <span class="fs-13 fw-normal d-block mt-1">2025</span></p>
                                </div>
                                <div>
                                    <h6 class="mb-2 fw-semibold">Jacob Morgan</h6>
                                    <div class="d-flex align-items-center flex-wrap gap-2">
                                        <p class="d-flex align-items-center mb-0"><i class="icon-clock me-1 text-dark me-1"></i> 10:15 </p>
                                        <span class="even-line"></span>
                                        <p class="d-flex align-items-center mb-0"><i class="icon-sofa me-1 text-dark me-1"></i> Table : 5 </p>
                                        <span class="even-line"></span>
                                        <p class="d-flex align-items-center mb-0"><i class="icon-users-round me-1 text-dark me-1"></i> Guests : 4 </p>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3 pb-3 border-bottom-dashed">
                                <p class="mb-3 d-flex align-items-center justify-content-between gap-2 flex-wrap">Created on <span class="text-dark">15 Dec 2025, 3:30PM</span></p>
                                <p class="mb-0 d-flex align-items-center justify-content-between gap-2 flex-wrap">Status <span class="badge badge-soft-success">Booked</span></p>
                            </div>
                            <div class="d-flex align-items-center justify-content-between">
                                <a href="#" class="btn btn-outline-light">View Note</a>
                                <div class="d-flex align-items-center gap-2">
                                <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle text-dark" data-bs-toggle="modal" data-bs-target="#edit_reservation"><i class="icon-pencil-line"></i></a>
                                <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle text-danger" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Item 8 -->
                <div class="col-xxl-4 col-xl-6 col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex align-items-center gap-2 flex-wrap mb-3">
                                <div class="bg-dark reservation-date rounded p-2 text-center flex-shrink-0">
                                    <p class="text-white fw-semibold mb-0 position-relative">Nov 02  <span class="fs-13 fw-normal d-block mt-1">2025</span></p>
                                </div>
                                <div>
                                    <h6 class="mb-2 fw-semibold">Olivia Reed</h6>
                                    <div class="d-flex align-items-center flex-wrap gap-2">
                                        <p class="d-flex align-items-center mb-0"><i class="icon-clock me-1 text-dark me-1"></i> 10:45 </p>
                                        <span class="even-line"></span>
                                        <p class="d-flex align-items-center mb-0"><i class="icon-sofa me-1 text-dark me-1"></i> Table : 12 </p>
                                        <span class="even-line"></span>
                                        <p class="d-flex align-items-center mb-0"><i class="icon-users-round me-1 text-dark me-1"></i> Guests : 8 </p>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3 pb-3 border-bottom-dashed">
                                <p class="mb-3 d-flex align-items-center justify-content-between gap-2 flex-wrap">Created on <span class="text-dark">22 Jan 2026, 2:00PM</span></p>
                                <p class="mb-0 d-flex align-items-center justify-content-between gap-2 flex-wrap">Status <span class="badge badge-soft-success">Booked</span></p>
                            </div>
                            <div class="d-flex align-items-center justify-content-between">
                                <a href="#" class="btn btn-outline-light">View Note</a>
                                <div class="d-flex align-items-center gap-2">
                                <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle text-dark" data-bs-toggle="modal" data-bs-target="#edit_reservation"><i class="icon-pencil-line"></i></a>
                                <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle text-danger" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Item 9 -->
                <div class="col-xxl-4 col-xl-6 col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex align-items-center gap-2 flex-wrap mb-3">
                                <div class="bg-dark reservation-date rounded p-2 text-center flex-shrink-0">
                                    <p class="text-white fw-semibold mb-0 position-relative">Nov 01  <span class="fs-13 fw-normal d-block mt-1">2025</span></p>
                                </div>
                                <div>
                                    <h6 class="mb-2 fw-semibold">Ethan Sullivan</h6>
                                    <div class="d-flex align-items-center flex-wrap gap-2">
                                        <p class="d-flex align-items-center mb-0"><i class="icon-clock me-1 text-dark me-1"></i> 10:49 </p>
                                        <span class="even-line"></span>
                                        <p class="d-flex align-items-center mb-0"><i class="icon-sofa me-1 text-dark me-1"></i> Table : 7 </p>
                                        <span class="even-line"></span>
                                        <p class="d-flex align-items-center mb-0"><i class="icon-users-round me-1 text-dark me-1"></i> Guests : 5 </p>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3 pb-3 border-bottom-dashed">
                                <p class="mb-3 d-flex align-items-center justify-content-between gap-2 flex-wrap">Created on <span class="text-dark">28 Feb 2026, 4:15PM</span></p>
                                <p class="mb-0 d-flex align-items-center justify-content-between gap-2 flex-wrap">Status <span class="badge badge-soft-success">Booked</span></p>
                            </div>
                            <div class="d-flex align-items-center justify-content-between">
                                <a href="#" class="btn btn-outline-light">View Note</a>
                                <div class="d-flex align-items-center gap-2">
                                <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle text-dark" data-bs-toggle="modal" data-bs-target="#edit_reservation"><i class="icon-pencil-line"></i></a>
                                <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle text-danger" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Item 10 -->
                <div class="col-xxl-4 col-xl-6 col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex align-items-center gap-2 flex-wrap mb-3">
                                <div class="bg-dark reservation-date rounded p-2 text-center flex-shrink-0">
                                    <p class="text-white fw-semibold mb-0 position-relative">Oct 28  <span class="fs-13 fw-normal d-block mt-1">2025</span></p>
                                </div>
                                <div>
                                    <h6 class="mb-2 fw-semibold">John Morgan</h6>
                                    <div class="d-flex align-items-center flex-wrap gap-2">
                                        <p class="d-flex align-items-center mb-0"><i class="icon-clock me-1 text-dark me-1"></i> 10:00 </p>
                                        <span class="even-line"></span>
                                        <p class="d-flex align-items-center mb-0"><i class="icon-sofa me-1 text-dark me-1"></i> Table : 5 </p>
                                        <span class="even-line"></span>
                                        <p class="d-flex align-items-center mb-0"><i class="icon-users-round me-1 text-dark me-1"></i> Guests : 4 </p>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3 pb-3 border-bottom-dashed">
                                <p class="mb-3 d-flex align-items-center justify-content-between gap-2 flex-wrap">Created on <span class="text-dark">15 Dec 2025, 3:30PM</span></p>
                                <p class="mb-0 d-flex align-items-center justify-content-between gap-2 flex-wrap">Status <span class="badge badge-soft-success">Booked</span></p>
                            </div>
                            <div class="d-flex align-items-center justify-content-between">
                                <a href="#" class="btn btn-outline-light">View Note</a>
                                <div class="d-flex align-items-center gap-2">
                                <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle text-dark" data-bs-toggle="modal" data-bs-target="#edit_reservation"><i class="icon-pencil-line"></i></a>
                                <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle text-danger" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Item 11 -->
                <div class="col-xxl-4 col-xl-6 col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex align-items-center gap-2 flex-wrap mb-3">
                                <div class="bg-dark reservation-date rounded p-2 text-center flex-shrink-0">
                                    <p class="text-white fw-semibold mb-0 position-relative">Oct 27  <span class="fs-13 fw-normal d-block mt-1">2025</span></p>
                                </div>
                                <div>
                                    <h6 class="mb-2 fw-semibold">Steave Rogers</h6>
                                    <div class="d-flex align-items-center flex-wrap gap-2">
                                        <p class="d-flex align-items-center mb-0"><i class="icon-clock me-1 text-dark me-1"></i> 10:30 </p>
                                        <span class="even-line"></span>
                                        <p class="d-flex align-items-center mb-0"><i class="icon-sofa me-1 text-dark me-1"></i> Table : 7 </p>
                                        <span class="even-line"></span>
                                        <p class="d-flex align-items-center mb-0"><i class="icon-users-round me-1 text-dark me-1"></i> Guests : 7 </p>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3 pb-3 border-bottom-dashed">
                                <p class="mb-3 d-flex align-items-center justify-content-between gap-2 flex-wrap">Created on <span class="text-dark">22 Jan 2026, 2:00PM</span></p>
                                <p class="mb-0 d-flex align-items-center justify-content-between gap-2 flex-wrap">Status <span class="badge badge-soft-purple">Paid</span></p>
                            </div>
                            <div class="d-flex align-items-center justify-content-between">
                                <a href="#" class="btn btn-outline-light">View Note</a>
                                <div class="d-flex align-items-center gap-2">
                                <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle text-dark" data-bs-toggle="modal" data-bs-target="#edit_reservation"><i class="icon-pencil-line"></i></a>
                                <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle text-danger" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Item 12 -->
                <div class="col-xxl-4 col-xl-6 col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex align-items-center gap-2 flex-wrap mb-3">
                                <div class="bg-dark reservation-date rounded p-2 text-center flex-shrink-0">
                                    <p class="text-white fw-semibold mb-0 position-relative">Oct 26  <span class="fs-13 fw-normal d-block mt-1">2025</span></p>
                                </div>
                                <div>
                                    <h6 class="mb-2 fw-semibold">Ethan Royond</h6>
                                    <div class="d-flex align-items-center flex-wrap gap-2">
                                        <p class="d-flex align-items-center mb-0"><i class="icon-clock me-1 text-dark me-1"></i> 10:30 </p>
                                        <span class="even-line"></span>
                                        <p class="d-flex align-items-center mb-0"><i class="icon-sofa me-1 text-dark me-1"></i> Table : 3 </p>
                                        <span class="even-line"></span>
                                        <p class="d-flex align-items-center mb-0"><i class="icon-users-round me-1 text-dark me-1"></i> Guests : 3 </p>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3 pb-3 border-bottom-dashed">
                                <p class="mb-3 d-flex align-items-center justify-content-between gap-2 flex-wrap">Created on <span class="text-dark">28 Feb 2026, 4:15PM</span></p>
                                <p class="mb-0 d-flex align-items-center justify-content-between gap-2 flex-wrap">Status <span class="badge badge-soft-purple">Paid</span></p>
                            </div>
                                <div class="d-flex align-items-center justify-content-between">
                                <a href="#" class="btn btn-outline-light">View Note</a>
                                <div class="d-flex align-items-center gap-2">
                                    <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle text-dark" data-bs-toggle="modal" data-bs-target="#edit_reservation"><i class="icon-pencil-line"></i></a>
                                    <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle text-danger" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <!-- end row -->

            <!-- Pagination start -->
            <nav class="pagination-nav">
                <ul class="pagination justify-content-center">
                    <li class="page-item">
                        <a class="page-link d-flex align-items-center" href="javascript:void(0);" aria-label="Previous">
                            <span aria-hidden="true" class="me-1"><i class="icon-chevron-left"></i></span>
                            Pre
                        </a>
                    </li>
                    <li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a></li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                    <li class="page-item">
                        <a class="page-link d-flex align-items-center" href="javascript:void(0);" aria-label="Previous">
                            Next
                            <span aria-hidden="true" class="ms-1"><i class="icon-chevron-right"></i></span>
                        </a>
                    </li>
                </ul>
            </nav>
            <!-- Pagination end -->

        </div>
        <!-- End Content -->

    </div>

    <!-- ========================
        End Page Content
    ========================= -->

@endsection
