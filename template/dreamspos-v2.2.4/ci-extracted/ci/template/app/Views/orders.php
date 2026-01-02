<?= $this->extend('layouts/mainlayout') ?>

<?= $this->section('content') ?>

    <!-- ========================
        Start Page Content
    ========================= -->

    <div class="page-wrapper">

        <!-- Start Content -->
        <div class="content">

            <!-- Page Header -->
            <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-3 mb-4">
                <div class="flex-grow-1">
                    <h3 class="mb-0">Orders <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle ms-2"><i class="icon-refresh-ccw"></i></a></h3>
                </div>
                <div class="gap-2 d-flex align-items-center flex-wrap">
                    <div class="daterangepick custom-date form-control w-auto d-flex align-items-center justify-content-between">
                        <i class="icon-calendar-fold text-dark fs-14 me-2"></i>
                        <span class="reportrange-picker"></span>
                    </div>
                    <a href="<?php echo base_url('pos'); ?>" class="btn btn-primary d-inline-flex align-items-center"><i class="icon-circle-plus me-1"></i>Add New</a>
                </div>
            </div>
            <!-- End Page Header -->

            <!-- Start row -->
            <div class="row orders-list-four">
                <div class="col-xxl-2 col-lg-4 col-md-4 col-sm-6">
                    <div class="card">
                        <div class="card-body p-3">
                            <div class="d-flex align-items-center justify-content-between flex-wrap">
                                <div>
                                    <span class="fs-13 fw-medium mb-1 d-block">Confirmed</span>
                                    <h4 class="mb-0">98</h4>
                                </div>
                                <div class="avatar bg-soft-secondary fs-20 rounded-circle flex-shrink-0">
                                    <i class="icon-bookmark-check"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end col -->

                <div class="col-xxl-2 col-lg-4 col-md-4 col-sm-6">
                    <div class="card">
                        <div class="card-body p-3">
                            <div class="d-flex align-items-center justify-content-between flex-wrap">
                                <div>
                                    <span class="fs-13 fw-medium mb-1 d-block">Pending</span>
                                    <h4 class="mb-0">32</h4>
                                </div>
                                <div class="avatar bg-soft-primary fs-20 rounded-circle flex-shrink-0">
                                    <i class="icon-circle-arrow-out-down-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end col -->

                <div class="col-xxl-2 col-lg-4 col-md-4 col-sm-6">
                    <div class="card">
                        <div class="card-body p-3">
                            <div class="d-flex align-items-center justify-content-between flex-wrap">
                                <div>
                                    <span class="fs-13 fw-medium mb-1 d-block">Processing</span>
                                    <h4 class="mb-0">66</h4>
                                </div>
                                <div class="avatar bg-soft-orange fs-20 rounded-circle flex-shrink-0">
                                    <i class="icon-loader"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end col -->

                <div class="col-xxl-2 col-lg-4 col-md-4 col-sm-6">
                    <div class="card">
                        <div class="card-body p-3">
                            <div class="d-flex align-items-center justify-content-between flex-wrap">
                                <div>
                                    <span class="fs-13 fw-medium mb-1 d-block">Out For Delivery</span>
                                    <h4 class="mb-0">45</h4>
                                </div>
                                <div class="avatar bg-soft-purple fs-20 rounded-circle flex-shrink-0">
                                    <i class="icon-bike"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end col -->

                <div class="col-xxl-2 col-lg-4 col-md-4 col-sm-6">
                    <div class="card">
                        <div class="card-body p-3">
                            <div class="d-flex align-items-center justify-content-between flex-wrap">
                                <div>
                                    <span class="fs-13 fw-medium mb-1 d-block">Delivered</span>
                                    <h4 class="mb-0">69</h4>
                                </div>
                                <div class="avatar badge-soft-success fs-20 rounded-circle flex-shrink-0">
                                    <i class="icon-send"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end col -->

                <div class="col-xxl-2 col-lg-4 col-md-4 col-sm-6">
                    <div class="card">
                        <div class="card-body p-3">
                            <div class="d-flex align-items-center justify-content-between flex-wrap">
                                <div>
                                    <span class="fs-13 fw-medium mb-1 d-block">Cancelled</span>
                                    <h4 class="mb-0">18</h4>
                                </div>
                                <div class="avatar bg-soft-danger fs-20 rounded-circle flex-shrink-0">
                                    <i class="icon-user-x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end col -->
            </div>
            <!-- End row -->

            <!-- Start Tabs -->
            <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 pb-4 mb-4 border-bottom">
                <ul class="nav nav-tabs nav-tabs-solid border-0" role="tablist">
                    <li class="nav-item">
                        <a href="#order-tab1" class="nav-link active" data-bs-toggle="tab">All Orders (48)</a>
                    </li>
                    <li class="nav-item">
                        <a href="#order-tab2" class="nav-link" data-bs-toggle="tab">Pending (12)</a>
                    </li>
                    <li class="nav-item">
                        <a href="#order-tab3" class="nav-link" data-bs-toggle="tab">In Progress (12)</a>
                    </li>
                    <li class="nav-item">
                        <a href="#order-tab4" class="nav-link" data-bs-toggle="tab">Completed (22)</a>
                    </li>
                    <li class="nav-item">
                        <a href="#order-tab5" class="nav-link" data-bs-toggle="tab">Cancelled (2)</a>
                    </li>
                </ul>

                <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
                    <div class="active-item d-flex align-items-center justify-content-between gap-1 p-1 border rounded bg-white">
                        <a href="<?php echo base_url('orders'); ?>" class="btn btn-sm btn-icon btn-primary" aria-label="grid"><i class="icon-grid-2x2"></i></a>
                        <a href="<?php echo base_url('kanban-view'); ?>" class="btn btn-sm btn-icon" aria-label="kanban"><i class="icon-square-kanban"></i></a>
                    </div>
                    <div class="input-group input-group-flat w-auto">
                        <input type="text" class="form-control" placeholder="Search">
                        <span class="input-group-text">
                            <i class="icon-search text-dark"></i>
                        </span>
                    </div>
                </div>
            </div>
            <!-- End Tabs -->

            <div class="tab-content">

                <!-- TAb 1 -->
                <div class="tab-pane show active" id="order-tab1">
                    <!-- Start row -->
                    <div class="row">

                        <!-- Item 1 -->
                        <div class="col-xxl-4 col-xl-6 col-md-6 d-flex">
                            <!-- Start card -->
                            <div class="card flex-fill">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
                                        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                            <div class="avatar avatar-lg bg-primary rounded-circle">
                                                <i class="icon-shopping-bag"></i>
                                            </div>
                                            <div>
                                                <h6 class="mb-1 fs-14 fw-semibold"><a href="#" data-bs-toggle="offcanvas" data-bs-target="#view_details">#56998</a></h6>
                                                <p class="mb-0 d-flex align-items-center gap-2">Dine In <span class="text-light">|</span> Table No : 3</p>
                                            </div>
                                        </div>
                                        <div class="dropstart">
                                            <button class="btn btn-sm btn-icon btn-white rounded-circle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                                <i class="icon-ellipsis-vertical"></i>
                                            </button>
                                            <ul class="dropdown-menu p-3">
                                                <li>
                                                    <a href="<?php echo base_url('pos'); ?>" class="dropdown-item rounded d-flex align-items-center"><i class="icon-pencil-line me-2"></i>Edit Order</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded d-flex align-items-center"><i class="icon-check-check me-2"></i>CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-x me-2"></i>Cancel</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#pay_complete_order"><i class="icon-pointer me-2"></i>Pay & CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#print_reciept"><i class="icon-printer me-2"></i>Print Receipt</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between mb-3">
                                        <p class="mb-0 fs-14 fw-semibold text-dark"><span class="fw-normal">Token No :</span> 24</p>
                                        <h6 class="mb-0 fw-semibold d-flex align-items-center gap-1"><i class="icon-clock fs-14"></i> 06:24 PM</h6>
                                    </div>
                                    <div class="mb-3 pb-3 border-bottom">
                                        <div class="orders-list">
                                            <div class="orders text-dark mb-3">
                                                <p><span class="dot"></span>Grilled Chicken </p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="orders text-dark mb-2">
                                                <p><span class="dot"></span>Chicken Taco - Medium</p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="bg-light rounded py-1 px-2 mb-3">
                                                <p class="mb-0 fw-medium d-flex align-items-center text-dark"> <i class="icon-badge-info me-1"></i> Notes : Extra Spicy</p>
                                            </div>
                                            <div class="orders text-dark mb-3">
                                                <p><span class="dot"></span>Lobster Thermidor</p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="more-menu">
                                                <div class="orders text-dark mb-3">
                                                    <p><span class="dot"></span>Caesar Salad</p>
                                                    <span class="line"></span>
                                                    <p class="text-dark">×1</p>
                                                </div>
                                                <div class="orders text-dark mb-3">
                                                    <p><span class="dot"></span>Pumpkin Soup</p>
                                                    <span class="line"></span>
                                                    <p class="text-dark">×1</p>
                                                </div>
                                            </div>
                                            <div class="view-all mt-1">
                                                <button class="fw-semibold fs-14 mb-0 text-primary viewall-button">+2 More Items</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                        <p class="badge badge-soft-success mb-0">Billed</p>
                                        <div class="dropdown">
                                            <a href="#" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                                Pending
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-end p-3">
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Pending</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Preparing</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Served</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Delivered</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">CanceI</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Item 2 -->
                        <div class="col-xxl-4 col-xl-6 col-md-6 d-flex">
                            <!-- Start card -->
                            <div class="card flex-fill">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
                                        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                            <div class="avatar avatar-lg bg-primary rounded-circle">
                                                <i class="icon-shopping-bag"></i>
                                            </div>
                                            <div>
                                                <h6 class="mb-1 fs-14 fw-semibold"><a href="#" data-bs-toggle="offcanvas" data-bs-target="#view_details">#57001</a></h6>
                                                <p class="mb-0 d-flex align-items-center gap-2">Take Away</p>
                                            </div>
                                        </div>
                                        <div class="dropstart">
                                            <button class="btn btn-sm btn-icon btn-white rounded-circle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                                <i class="icon-ellipsis-vertical"></i>
                                            </button>
                                            <ul class="dropdown-menu p-3">
                                                <li>
                                                    <a href="<?php echo base_url('pos'); ?>" class="dropdown-item rounded d-flex align-items-center"><i class="icon-pencil-line me-2"></i>Edit Order</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded d-flex align-items-center"><i class="icon-check-check me-2"></i>CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-x me-2"></i>Cancel</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#pay_complete_order"><i class="icon-pointer me-2"></i>Pay & CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#print_reciept"><i class="icon-printer me-2"></i>Print Receipt</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between mb-3">
                                        <p class="mb-0 fs-14 fw-semibold text-dark"><span class="fw-normal">Token No :</span> 25</p>
                                        <h6 class="mb-0 fw-semibold d-flex align-items-center gap-1"><i class="icon-clock fs-14"></i> 06:55 PM</h6>
                                    </div>
                                    <div class="mb-3 pb-3 border-bottom">
                                        <div class="orders-list">
                                            <div class="orders text-dark mb-3">
                                                <p><span class="dot success"></span>Vegan Burger </p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="orders text-dark mb-2">
                                                <p><span class="dot success"></span>Sweet Potato Fries</p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="bg-light rounded py-1 px-2 mb-3">
                                                <p class="mb-0 fw-medium d-flex align-items-center text-dark"> <i class="icon-badge-info me-1"></i> Notes : Extra Spicy</p>
                                            </div>
                                            <div class="orders text-dark mb-3">
                                                <p><span class="dot success"></span>Chocolate Lava Cake</p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="more-menu">
                                                <div class="orders text-dark mb-3">
                                                    <p><span class="dot success"></span>Caesar Salad</p>
                                                    <span class="line"></span>
                                                    <p class="text-dark">×1</p>
                                                </div>
                                                <div class="orders text-dark mb-3">
                                                    <p><span class="dot success"></span>Pumpkin Soup</p>
                                                    <span class="line"></span>
                                                    <p class="text-dark">×1</p>
                                                </div>
                                            </div>
                                            <div class="view-all mt-1">
                                                <button class="fw-semibold fs-14 mb-0 text-primary viewall-button">+2 More Items</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                        <p class="badge badge-soft-success mb-0">Billed</p>
                                        <div class="dropdown">
                                            <a href="#" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                                Pending
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-end p-3">
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Pending</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Preparing</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Served</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Delivered</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">CanceI</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Item 3 -->
                        <div class="col-xxl-4 col-xl-6 col-md-6 d-flex">
                            <!-- Start card -->
                            <div class="card flex-fill">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
                                        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                            <div class="avatar avatar-lg bg-primary rounded-circle">
                                                <i class="icon-shopping-bag"></i>
                                            </div>
                                            <div>
                                                <h6 class="mb-1 fs-14 fw-semibold"><a href="#" data-bs-toggle="offcanvas" data-bs-target="#view_details">#57002</a></h6>
                                                <p class="mb-0 d-flex align-items-center gap-2">Delivery</p>
                                            </div>
                                        </div>
                                        <div class="dropstart">
                                            <button class="btn btn-sm btn-icon btn-white rounded-circle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                                <i class="icon-ellipsis-vertical"></i>
                                            </button>
                                            <ul class="dropdown-menu p-3">
                                                <li>
                                                    <a href="<?php echo base_url('pos'); ?>" class="dropdown-item rounded d-flex align-items-center"><i class="icon-pencil-line me-2"></i>Edit Order</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded d-flex align-items-center"><i class="icon-check-check me-2"></i>CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-x me-2"></i>Cancel</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#pay_complete_order"><i class="icon-pointer me-2"></i>Pay & CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#print_reciept"><i class="icon-printer me-2"></i>Print Receipt</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between mb-3">
                                        <p class="mb-0 fs-14 fw-semibold text-dark"><span class="fw-normal">Token No :</span> 26</p>
                                        <h6 class="mb-0 fw-semibold d-flex align-items-center gap-1"><i class="icon-clock fs-14"></i> 07:00 PM</h6>
                                    </div>
                                    <div class="mb-3 pb-3 border-bottom">
                                        <div class="orders-list">
                                            <div class="orders text-dark mb-3">
                                                <p><span class="dot success"></span>Margherita Pizza </p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="orders text-dark mb-2">
                                                <p><span class="dot success"></span>Pasta Primavera</p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="bg-light rounded py-1 px-2 mb-3">
                                                <p class="mb-0 fw-medium d-flex align-items-center text-dark"> <i class="icon-badge-info me-1"></i> Notes : Extra Spicy</p>
                                            </div>
                                            <div class="orders text-dark mb-3">
                                                <p><span class="dot success"></span>Grilled Salmon Steak</p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>

                                            <div class="more-menu">
                                                <div class="orders text-dark mb-3">
                                                    <p><span class="dot success"></span>Cheese Burst Pizza</p>
                                                    <span class="line"></span>
                                                    <p class="text-dark">×1</p>
                                                </div>
                                                <div class="orders text-dark mb-3">
                                                    <p><span class="dot success"></span>Chicken Noodle Soup</p>
                                                    <span class="line"></span>
                                                    <p class="text-dark">×1</p>
                                                </div>
                                            </div>
                                            <div class="view-all mt-1">
                                                <button class="fw-semibold fs-14 mb-0 text-primary viewall-button">+2 More Items</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                        <p class="badge badge-soft-success mb-0">Billed</p>
                                        <div class="dropdown">
                                            <a href="#" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                                Pending
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-end p-3">
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Pending</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Preparing</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Served</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Delivered</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">CanceI</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Item 4 -->
                        <div class="col-xxl-4 col-xl-6 col-md-6 d-flex">
                            <!-- Start card -->
                            <div class="card flex-fill">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
                                        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                            <div class="avatar avatar-lg bg-primary rounded-circle">
                                                <i class="icon-shopping-bag"></i>
                                            </div>
                                            <div>
                                                <h6 class="mb-1 fs-14 fw-semibold"><a href="#" data-bs-toggle="offcanvas" data-bs-target="#view_details">#57004</a></h6>
                                                <p class="mb-0 d-flex align-items-center gap-2">Take Away</p>
                                            </div>
                                        </div>
                                        <div class="dropstart">
                                            <button class="btn btn-sm btn-icon btn-white rounded-circle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                                <i class="icon-ellipsis-vertical"></i>
                                            </button>
                                            <ul class="dropdown-menu p-3">
                                                <li>
                                                    <a href="<?php echo base_url('pos'); ?>" class="dropdown-item rounded d-flex align-items-center"><i class="icon-pencil-line me-2"></i>Edit Order</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded d-flex align-items-center"><i class="icon-check-check me-2"></i>CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-x me-2"></i>Cancel</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#pay_complete_order"><i class="icon-pointer me-2"></i>Pay & CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#print_reciept"><i class="icon-printer me-2"></i>Print Receipt</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between mb-3">
                                        <p class="mb-0 fs-14 fw-semibold text-dark"><span class="fw-normal">Token No :</span> 28</p>
                                        <h6 class="mb-0 fw-semibold d-flex align-items-center gap-1"><i class="icon-clock fs-14"></i> 07:30 PM</h6>
                                    </div>
                                    <div class="mb-3 pb-3 border-bottom">
                                        <div class="orders-list">
                                            <div class="orders text-dark mb-3">
                                                <p><span class="dot success"></span>Margherita Pizza </p>
                                                <span class="line"></span>
                                                <p class="text-dark">×2</p>
                                            </div>
                                            <div class="orders text-dark mb-2">
                                                <p><span class="dot success"></span>Caesar Salad</p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="bg-light rounded py-1 px-2 mb-3">
                                                <p class="mb-0 fw-medium d-flex align-items-center text-dark"> <i class="icon-badge-info me-1"></i> Notes : Extra Spicy</p>
                                            </div>
                                            <div class="orders text-dark mb-3">
                                                <p><span class="dot success"></span>Corn Pizza</p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="more-menu">
                                                <div class="orders text-dark mb-3">
                                                    <p><span class="dot success"></span>Shrimp Tom Yum</p>
                                                    <span class="line"></span>
                                                    <p class="text-dark">×1</p>
                                                </div>
                                                <div class="orders text-dark mb-3">
                                                    <p><span class="dot success"></span>Tomato Basil Soup</p>
                                                    <span class="line"></span>
                                                    <p class="text-dark">×1</p>
                                                </div>
                                            </div>
                                            <div class="view-all mt-1">
                                                <button class="fw-semibold fs-14 mb-0 text-primary viewall-button">+2 More Items</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                        <p class="badge badge-soft-purple mb-0">Paid</p>
                                        <div class="dropdown">
                                            <a href="#" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                                Pending
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-end p-3">
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Pending</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Preparing</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Served</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Delivered</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">CanceI</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Item 5 -->
                        <div class="col-xxl-4 col-xl-6 col-md-6 d-flex">
                            <!-- Start card -->
                            <div class="card flex-fill">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
                                        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                            <div class="avatar avatar-lg bg-primary rounded-circle">
                                                <i class="icon-shopping-bag"></i>
                                            </div>
                                            <div>
                                                <h6 class="mb-1 fs-14 fw-semibold"><a href="#" data-bs-toggle="offcanvas" data-bs-target="#view_details">#57003</a></h6>
                                                <p class="mb-0 d-flex align-items-center gap-2">Dine In <span class="text-light">|</span> Table No : 7</p>
                                            </div>
                                        </div>
                                        <div class="dropstart">
                                            <button class="btn btn-sm btn-icon btn-white rounded-circle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                                <i class="icon-ellipsis-vertical"></i>
                                            </button>
                                            <ul class="dropdown-menu p-3">
                                                <li>
                                                    <a href="<?php echo base_url('pos'); ?>" class="dropdown-item rounded d-flex align-items-center"><i class="icon-pencil-line me-2"></i>Edit Order</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded d-flex align-items-center"><i class="icon-check-check me-2"></i>CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-x me-2"></i>Cancel</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#pay_complete_order"><i class="icon-pointer me-2"></i>Pay & CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#print_reciept"><i class="icon-printer me-2"></i>Print Receipt</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between mb-3">
                                        <p class="mb-0 fs-14 fw-semibold text-dark"><span class="fw-normal">Token No :</span> 27</p>
                                        <h6 class="mb-0 fw-semibold d-flex align-items-center gap-1"><i class="icon-clock fs-14"></i> 07:15 PM</h6>
                                    </div>
                                    <div class="mb-3 pb-3 border-bottom">
                                        <div class="orders-list">
                                            <div class="orders text-dark mb-3">
                                                <p><span class="dot success"></span>Steak Frites</p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="orders text-dark mb-2">
                                                <p><span class="dot success"></span>Mushroom Risotto</p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="bg-light rounded py-1 px-2 mb-3">
                                                <p class="mb-0 fw-medium d-flex align-items-center text-dark"> <i class="icon-badge-info me-1"></i> Notes : Extra Spicy</p>
                                            </div>
                                            <div class="orders text-dark mb-3">
                                                <p><span class="dot success"></span>Tiramisu</p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="more-menu">
                                                <div class="orders text-dark mb-3">
                                                    <p><span class="dot success"></span>Quinoa Salad</p>
                                                    <span class="line"></span>
                                                    <p class="text-dark">×1</p>
                                                </div>
                                                <div class="orders text-dark mb-3">
                                                    <p><span class="dot success"></span>Lemon Mint Juice</p>
                                                    <span class="line"></span>
                                                    <p class="text-dark">×1</p>
                                                </div>
                                            </div>
                                            <div class="view-all mt-1">
                                                <button class="fw-semibold fs-14 mb-0 text-primary viewall-button">+2 More Items</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                        <p class="badge badge-soft-success mb-0">Billed</p>
                                        <div class="dropdown">
                                            <a href="#" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                                Pending
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-end p-3">
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Pending</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Preparing</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Served</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Delivered</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">CanceI</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Item 6 -->
                        <div class="col-xxl-4 col-xl-6 col-md-6 d-flex">
                            <!-- Start card -->
                            <div class="card flex-fill">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
                                        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                            <div class="avatar avatar-lg bg-primary rounded-circle">
                                                <i class="icon-shopping-bag"></i>
                                            </div>
                                            <div>
                                                <h6 class="mb-1 fs-14 fw-semibold"><a href="#" data-bs-toggle="offcanvas" data-bs-target="#view_details">#57005 </a></h6>
                                                <p class="mb-0 d-flex align-items-center gap-2">Dine In <span class="text-light">|</span> Table No : 9</p>
                                            </div>
                                        </div>
                                        <div class="dropstart">
                                            <button class="btn btn-sm btn-icon btn-white rounded-circle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                                <i class="icon-ellipsis-vertical"></i>
                                            </button>
                                            <ul class="dropdown-menu p-3">
                                                <li>
                                                    <a href="<?php echo base_url('pos'); ?>" class="dropdown-item rounded d-flex align-items-center"><i class="icon-pencil-line me-2"></i>Edit Order</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded d-flex align-items-center"><i class="icon-check-check me-2"></i>CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-x me-2"></i>Cancel</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#pay_complete_order"><i class="icon-pointer me-2"></i>Pay & CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#print_reciept"><i class="icon-printer me-2"></i>Print Receipt</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between mb-3">
                                        <p class="mb-0 fs-14 fw-semibold text-dark"><span class="fw-normal">Token No :</span> 29</p>
                                        <h6 class="mb-0 fw-semibold d-flex align-items-center gap-1"><i class="icon-clock fs-14"></i> 07:25 PM</h6>
                                    </div>
                                    <div class="mb-3 pb-3 border-bottom">
                                        <div class="orders-list">
                                            <div class="orders text-dark mb-3">
                                                <p><span class="dot"></span>Lobster Pasta</p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="orders text-dark mb-2">
                                                <p><span class="dot"></span>Garlic Bread</p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="bg-light rounded py-1 px-2 mb-3">
                                                <p class="mb-0 fw-medium d-flex align-items-center text-dark"> <i class="icon-badge-info me-1"></i> Notes : Extra Spicy</p>
                                            </div>
                                            <div class="orders text-dark mb-3">
                                                <p><span class="dot"></span>Chicken Taco</p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="more-menu">
                                                <div class="orders text-dark mb-3">
                                                    <p><span class="dot"></span>Garlic Butter Shrimp</p>
                                                    <span class="line"></span>
                                                    <p class="text-dark">×1</p>
                                                </div>
                                                <div class="orders text-dark mb-3">
                                                    <p><span class="dot"></span>Cheese Burst Pizza</p>
                                                    <span class="line"></span>
                                                    <p class="text-dark">×1</p>
                                                </div>
                                            </div>
                                            <div class="view-all mt-1">
                                                <button class="fw-semibold fs-14 mb-0 text-primary viewall-button">+2 More Items</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                        <p class="badge badge-soft-purple mb-0">Paid</p>
                                        <div class="dropdown">
                                            <a href="#" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                                Pending
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-end p-3">
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Pending</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Preparing</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Served</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Delivered</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">CanceI</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- End row -->
                </div>

                <!-- TAb 2 -->
                <div class="tab-pane show" id="order-tab2">
                    <!-- Start row -->
                    <div class="row">

                        <!-- Item 1 -->
                        <div class="col-xxl-4 col-xl-6 col-md-6 d-flex">
                            <!-- Start card -->
                            <div class="card flex-fill">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
                                        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                            <div class="avatar avatar-lg bg-primary rounded-circle">
                                                <i class="icon-shopping-bag"></i>
                                            </div>
                                            <div>
                                                <h6 class="mb-1 fs-14 fw-semibold"><a href="#" data-bs-toggle="offcanvas" data-bs-target="#view_details">#56998</a></h6>
                                                <p class="mb-0 d-flex align-items-center gap-2">Dine In <span class="text-light">|</span> Table No : 3</p>
                                            </div>
                                        </div>
                                        <div class="dropstart">
                                            <button class="btn btn-sm btn-icon btn-white rounded-circle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                                <i class="icon-ellipsis-vertical"></i>
                                            </button>
                                            <ul class="dropdown-menu p-3">
                                                <li>
                                                    <a href="<?php echo base_url('pos'); ?>" class="dropdown-item rounded d-flex align-items-center"><i class="icon-pencil-line me-2"></i>Edit Order</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded d-flex align-items-center"><i class="icon-check-check me-2"></i>CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-x me-2"></i>Cancel</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#pay_complete_order"><i class="icon-pointer me-2"></i>Pay & CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#print_reciept"><i class="icon-printer me-2"></i>Print Receipt</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between mb-3">
                                        <p class="mb-0 fs-14 fw-semibold text-dark"><span class="fw-normal">Token No :</span> 24</p>
                                        <h6 class="mb-0 fw-semibold d-flex align-items-center gap-1"><i class="icon-clock fs-14"></i> 06:24 PM</h6>
                                    </div>
                                    <div class="mb-3 pb-3 border-bottom">
                                        <div class="orders-list">
                                            <div class="orders text-dark mb-3">
                                                <p><span class="dot"></span>Grilled Chicken </p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="orders text-dark mb-2">
                                                <p><span class="dot"></span>Chicken Taco - Medium</p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="bg-light rounded py-1 px-2 mb-3">
                                                <p class="mb-0 fw-medium d-flex align-items-center text-dark"> <i class="icon-badge-info me-1"></i> Notes : Extra Spicy</p>
                                            </div>
                                            <div class="orders text-dark mb-3">
                                                <p><span class="dot"></span>Lobster Thermidor</p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="more-menu">
                                                <div class="orders text-dark mb-3">
                                                    <p><span class="dot"></span>Caesar Salad</p>
                                                    <span class="line"></span>
                                                    <p class="text-dark">×1</p>
                                                </div>
                                                <div class="orders text-dark mb-3">
                                                    <p><span class="dot"></span>Pumpkin Soup</p>
                                                    <span class="line"></span>
                                                    <p class="text-dark">×1</p>
                                                </div>
                                            </div>
                                            <div class="view-all mt-1">
                                                <button class="fw-semibold fs-14 mb-0 text-primary viewall-button">+2 More Items</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                        <p class="badge badge-soft-success mb-0">Billed</p>
                                        <div class="dropdown">
                                            <a href="#" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                                Pending
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-end p-3">
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Pending</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Preparing</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Served</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Delivered</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">CanceI</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Item 2 -->
                        <div class="col-xxl-4 col-xl-6 col-md-6 d-flex">
                            <!-- Start card -->
                            <div class="card flex-fill">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
                                        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                            <div class="avatar avatar-lg bg-primary rounded-circle">
                                                <i class="icon-shopping-bag"></i>
                                            </div>
                                            <div>
                                                <h6 class="mb-1 fs-14 fw-semibold"><a href="#" data-bs-toggle="offcanvas" data-bs-target="#view_details">#57001</a></h6>
                                                <p class="mb-0 d-flex align-items-center gap-2">Take Away</p>
                                            </div>
                                        </div>
                                        <div class="dropstart">
                                            <button class="btn btn-sm btn-icon btn-white rounded-circle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                                <i class="icon-ellipsis-vertical"></i>
                                            </button>
                                            <ul class="dropdown-menu p-3">
                                                <li>
                                                    <a href="<?php echo base_url('pos'); ?>" class="dropdown-item rounded d-flex align-items-center"><i class="icon-pencil-line me-2"></i>Edit Order</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded d-flex align-items-center"><i class="icon-check-check me-2"></i>CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-x me-2"></i>Cancel</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#pay_complete_order"><i class="icon-pointer me-2"></i>Pay & CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#print_reciept"><i class="icon-printer me-2"></i>Print Receipt</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between mb-3">
                                        <p class="mb-0 fs-14 fw-semibold text-dark"><span class="fw-normal">Token No :</span> 25</p>
                                        <h6 class="mb-0 fw-semibold d-flex align-items-center gap-1"><i class="icon-clock fs-14"></i> 06:55 PM</h6>
                                    </div>
                                    <div class="mb-3 pb-3 border-bottom">
                                        <div class="orders-list">
                                            <div class="orders text-dark mb-3">
                                                <p><span class="dot success"></span>Vegan Burger </p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="orders text-dark mb-2">
                                                <p><span class="dot success"></span>Sweet Potato Fries</p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="bg-light rounded py-1 px-2 mb-3">
                                                <p class="mb-0 fw-medium d-flex align-items-center text-dark"> <i class="icon-badge-info me-1"></i> Notes : Extra Spicy</p>
                                            </div>
                                            <div class="orders text-dark mb-3">
                                                <p><span class="dot success"></span>Chocolate Lava Cake</p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="more-menu">
                                                <div class="orders text-dark mb-3">
                                                    <p><span class="dot success"></span>Caesar Salad</p>
                                                    <span class="line"></span>
                                                    <p class="text-dark">×1</p>
                                                </div>
                                                <div class="orders text-dark mb-3">
                                                    <p><span class="dot success"></span>Tomato Basil Soup</p>
                                                    <span class="line"></span>
                                                    <p class="text-dark">×1</p>
                                                </div>
                                            </div>
                                            <div class="view-all mt-1">
                                                <button class="fw-semibold fs-14 mb-0 text-primary viewall-button">+2 More Items</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                        <p class="badge badge-soft-success mb-0">Billed</p>
                                        <div class="dropdown">
                                            <a href="#" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                                Pending
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-end p-3">
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Pending</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Preparing</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Served</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Delivered</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">CanceI</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Item 3 -->
                        <div class="col-xxl-4 col-xl-6 col-md-6 d-flex">
                            <!-- Start card -->
                            <div class="card flex-fill">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
                                        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                            <div class="avatar avatar-lg bg-primary rounded-circle">
                                                <i class="icon-shopping-bag"></i>
                                            </div>
                                            <div>
                                                <h6 class="mb-1 fs-14 fw-semibold"><a href="#" data-bs-toggle="offcanvas" data-bs-target="#view_details">#57002</a></h6>
                                                <p class="mb-0 d-flex align-items-center gap-2">Delivery</p>
                                            </div>
                                        </div>
                                        <div class="dropstart">
                                            <button class="btn btn-sm btn-icon btn-white rounded-circle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                                <i class="icon-ellipsis-vertical"></i>
                                            </button>
                                            <ul class="dropdown-menu p-3">
                                                <li>
                                                    <a href="<?php echo base_url('pos'); ?>" class="dropdown-item rounded d-flex align-items-center"><i class="icon-pencil-line me-2"></i>Edit Order</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded d-flex align-items-center"><i class="icon-check-check me-2"></i>CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-x me-2"></i>Cancel</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#pay_complete_order"><i class="icon-pointer me-2"></i>Pay & CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#print_reciept"><i class="icon-printer me-2"></i>Print Receipt</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between mb-3">
                                        <p class="mb-0 fs-14 fw-semibold text-dark"><span class="fw-normal">Token No :</span> 26</p>
                                        <h6 class="mb-0 fw-semibold d-flex align-items-center gap-1"><i class="icon-clock fs-14"></i> 07:00 PM</h6>
                                    </div>
                                    <div class="mb-3 pb-3 border-bottom">
                                        <div class="orders-list">
                                            <div class="orders text-dark mb-3">
                                                <p><span class="dot"></span>Grilled Chicken </p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="orders text-dark mb-2">
                                                <p><span class="dot"></span>Chicken Noodle</p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="bg-light rounded py-1 px-2 mb-3">
                                                <p class="mb-0 fw-medium d-flex align-items-center text-dark"> <i class="icon-badge-info me-1"></i> Notes : Extra Spicy</p>
                                            </div>
                                            <div class="orders text-dark mb-3">
                                                <p><span class="dot"></span>Grilled Salmon Steak</p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>

                                            <div class="more-menu">
                                                <div class="orders text-dark mb-3">
                                                    <p><span class="dot"></span>Cheese Burst Pizza</p>
                                                    <span class="line"></span>
                                                    <p class="text-dark">×1</p>
                                                </div>
                                                <div class="orders text-dark mb-3">
                                                    <p><span class="dot"></span>Chicken Noodle Soup</p>
                                                    <span class="line"></span>
                                                    <p class="text-dark">×1</p>
                                                </div>
                                            </div>
                                            <div class="view-all mt-1">
                                                <button class="fw-semibold fs-14 mb-0 text-primary viewall-button">+2 More Items</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                        <p class="badge badge-soft-success mb-0">Billed</p>
                                        <div class="dropdown">
                                            <a href="#" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                                Pending
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-end p-3">
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Pending</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Preparing</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Served</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Delivered</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">CanceI</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End row -->
                </div>

                <!-- TAb 3 -->
                <div class="tab-pane show" id="order-tab3">
                    <!-- Start row -->
                    <div class="row">

                        <!-- Item 2 -->
                        <div class="col-xxl-4 col-xl-6 col-md-6 d-flex">
                            <!-- Start card -->
                            <div class="card flex-fill">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
                                        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                            <div class="avatar avatar-lg bg-primary rounded-circle">
                                                <i class="icon-shopping-bag"></i>
                                            </div>
                                            <div>
                                                <h6 class="mb-1 fs-14 fw-semibold"><a href="#" data-bs-toggle="offcanvas" data-bs-target="#view_details">#57001</a></h6>
                                                <p class="mb-0 d-flex align-items-center gap-2">Take Away</p>
                                            </div>
                                        </div>
                                        <div class="dropstart">
                                            <button class="btn btn-sm btn-icon btn-white rounded-circle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                                <i class="icon-ellipsis-vertical"></i>
                                            </button>
                                            <ul class="dropdown-menu p-3">
                                                <li>
                                                    <a href="<?php echo base_url('pos'); ?>" class="dropdown-item rounded d-flex align-items-center"><i class="icon-pencil-line me-2"></i>Edit Order</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded d-flex align-items-center"><i class="icon-check-check me-2"></i>CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-x me-2"></i>Cancel</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#pay_complete_order"><i class="icon-pointer me-2"></i>Pay & CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#print_reciept"><i class="icon-printer me-2"></i>Print Receipt</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between mb-3">
                                        <p class="mb-0 fs-14 fw-semibold text-dark"><span class="fw-normal">Token No :</span> 25</p>
                                        <h6 class="mb-0 fw-semibold d-flex align-items-center gap-1"><i class="icon-clock fs-14"></i> 06:55 PM</h6>
                                    </div>
                                    <div class="mb-3 pb-3 border-bottom">
                                        <div class="orders-list">
                                            <div class="orders text-dark mb-3">
                                                <p><span class="dot success"></span>Vegan Burger </p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="orders text-dark mb-2">
                                                <p><span class="dot success"></span>Sweet Potato Fries</p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="bg-light rounded py-1 px-2 mb-3">
                                                <p class="mb-0 fw-medium d-flex align-items-center text-dark"> <i class="icon-badge-info me-1"></i> Notes : Extra Spicy</p>
                                            </div>
                                            <div class="orders text-dark mb-3">
                                                <p><span class="dot success"></span>Chocolate Lava Cake</p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="more-menu">
                                                <div class="orders text-dark mb-3">
                                                    <p><span class="dot success"></span>Caesar Salad</p>
                                                    <span class="line"></span>
                                                    <p class="text-dark">×1</p>
                                                </div>
                                                <div class="orders text-dark mb-3">
                                                    <p><span class="dot success"></span>Pumpkin Soup</p>
                                                    <span class="line"></span>
                                                    <p class="text-dark">×1</p>
                                                </div>
                                            </div>
                                            <div class="view-all mt-1">
                                                <button class="fw-semibold fs-14 mb-0 text-primary viewall-button">+2 More Items</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                        <p class="badge badge-soft-success mb-0">Billed</p>
                                        <div class="dropdown">
                                            <a href="#" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                                Pending
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-end p-3">
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Pending</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Preparing</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Served</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Delivered</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">CanceI</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Item 3 -->
                        <div class="col-xxl-4 col-xl-6 col-md-6 d-flex">
                            <!-- Start card -->
                            <div class="card flex-fill">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
                                        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                            <div class="avatar avatar-lg bg-primary rounded-circle">
                                                <i class="icon-shopping-bag"></i>
                                            </div>
                                            <div>
                                                <h6 class="mb-1 fs-14 fw-semibold"><a href="#" data-bs-toggle="offcanvas" data-bs-target="#view_details">#57002</a></h6>
                                                <p class="mb-0 d-flex align-items-center gap-2">Delivery</p>
                                            </div>
                                        </div>
                                        <div class="dropstart">
                                            <button class="btn btn-sm btn-icon btn-white rounded-circle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                                <i class="icon-ellipsis-vertical"></i>
                                            </button>
                                            <ul class="dropdown-menu p-3">
                                                <li>
                                                    <a href="<?php echo base_url('pos'); ?>" class="dropdown-item rounded d-flex align-items-center"><i class="icon-pencil-line me-2"></i>Edit Order</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded d-flex align-items-center"><i class="icon-check-check me-2"></i>CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-x me-2"></i>Cancel</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#pay_complete_order"><i class="icon-pointer me-2"></i>Pay & CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#print_reciept"><i class="icon-printer me-2"></i>Print Receipt</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between mb-3">
                                        <p class="mb-0 fs-14 fw-semibold text-dark"><span class="fw-normal">Token No :</span> 26</p>
                                        <h6 class="mb-0 fw-semibold d-flex align-items-center gap-1"><i class="icon-clock fs-14"></i> 07:00 PM</h6>
                                    </div>
                                    <div class="mb-3 pb-3 border-bottom">
                                        <div class="orders-list">
                                            <div class="orders text-dark mb-3">
                                                <p><span class="dot"></span>Grilled Chicken </p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="orders text-dark mb-2">
                                                <p><span class="dot"></span>Chicken Noodle</p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="bg-light rounded py-1 px-2 mb-3">
                                                <p class="mb-0 fw-medium d-flex align-items-center text-dark"> <i class="icon-badge-info me-1"></i> Notes : Extra Spicy</p>
                                            </div>
                                            <div class="orders text-dark mb-3">
                                                <p><span class="dot"></span>Grilled Salmon Steak</p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>

                                            <div class="more-menu">
                                                <div class="orders text-dark mb-3">
                                                    <p><span class="dot"></span>Cheese Burst Pizza</p>
                                                    <span class="line"></span>
                                                    <p class="text-dark">×1</p>
                                                </div>
                                                <div class="orders text-dark mb-3">
                                                    <p><span class="dot"></span>Chicken Noodle Soup</p>
                                                    <span class="line"></span>
                                                    <p class="text-dark">×1</p>
                                                </div>
                                            </div>
                                            <div class="view-all mt-1">
                                                <button class="fw-semibold fs-14 mb-0 text-primary viewall-button">+2 More Items</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                        <p class="badge badge-soft-success mb-0">Billed</p>
                                        <div class="dropdown">
                                            <a href="#" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                                Pending
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-end p-3">
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Pending</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Preparing</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Served</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Delivered</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">CanceI</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End row -->
                </div>

                <!-- TAb 4 -->
                <div class="tab-pane show" id="order-tab4">
                    <!-- Start row -->
                    <div class="row">

                        <!-- Item 2 -->
                        <div class="col-xxl-4 col-xl-6 col-md-6 d-flex">
                            <!-- Start card -->
                            <div class="card flex-fill">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
                                        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                            <div class="avatar avatar-lg bg-primary rounded-circle">
                                                <i class="icon-shopping-bag"></i>
                                            </div>
                                            <div>
                                                <h6 class="mb-1 fs-14 fw-semibold"><a href="#" data-bs-toggle="offcanvas" data-bs-target="#view_details">#57001</a></h6>
                                                <p class="mb-0 d-flex align-items-center gap-2">Take Away</p>
                                            </div>
                                        </div>
                                        <div class="dropstart">
                                            <button class="btn btn-sm btn-icon btn-white rounded-circle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                                <i class="icon-ellipsis-vertical"></i>
                                            </button>
                                            <ul class="dropdown-menu p-3">
                                                <li>
                                                    <a href="<?php echo base_url('pos'); ?>" class="dropdown-item rounded d-flex align-items-center"><i class="icon-pencil-line me-2"></i>Edit Order</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded d-flex align-items-center"><i class="icon-check-check me-2"></i>CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-x me-2"></i>Cancel</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#pay_complete_order"><i class="icon-pointer me-2"></i>Pay & CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#print_reciept"><i class="icon-printer me-2"></i>Print Receipt</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between mb-3">
                                        <p class="mb-0 fs-14 fw-semibold text-dark"><span class="fw-normal">Token No :</span> 25</p>
                                        <h6 class="mb-0 fw-semibold d-flex align-items-center gap-1"><i class="icon-clock fs-14"></i> 06:55 PM</h6>
                                    </div>
                                    <div class="mb-3 pb-3 border-bottom">
                                        <div class="orders-list">
                                            <div class="orders text-dark mb-3">
                                                <p><span class="dot success"></span>Vegan Burger </p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="orders text-dark mb-2">
                                                <p><span class="dot success"></span>Sweet Potato Fries</p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="bg-light rounded py-1 px-2 mb-3">
                                                <p class="mb-0 fw-medium d-flex align-items-center text-dark"> <i class="icon-badge-info me-1"></i> Notes : Extra Spicy</p>
                                            </div>
                                            <div class="orders text-dark mb-3">
                                                <p><span class="dot success"></span>Chocolate Lava Cake</p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="more-menu">
                                                <div class="orders text-dark mb-3">
                                                    <p><span class="dot success"></span>Caesar Salad</p>
                                                    <span class="line"></span>
                                                    <p class="text-dark">×1</p>
                                                </div>
                                                <div class="orders text-dark mb-3">
                                                    <p><span class="dot success"></span>Pumpkin Soup</p>
                                                    <span class="line"></span>
                                                    <p class="text-dark">×1</p>
                                                </div>
                                            </div>
                                            <div class="view-all mt-1">
                                                <button class="fw-semibold fs-14 mb-0 text-primary viewall-button">+2 More Items</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                        <p class="badge badge-soft-success mb-0">Billed</p>
                                        <div class="dropdown">
                                            <a href="#" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                                Pending
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-end p-3">
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Pending</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Preparing</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Served</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Delivered</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">CanceI</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Item 3 -->
                        <div class="col-xxl-4 col-xl-6 col-md-6 d-flex">
                            <!-- Start card -->
                            <div class="card flex-fill">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
                                        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                            <div class="avatar avatar-lg bg-primary rounded-circle">
                                                <i class="icon-shopping-bag"></i>
                                            </div>
                                            <div>
                                                <h6 class="mb-1 fs-14 fw-semibold"><a href="#" data-bs-toggle="offcanvas" data-bs-target="#view_details">#57002</a></h6>
                                                <p class="mb-0 d-flex align-items-center gap-2">Delivery</p>
                                            </div>
                                        </div>
                                        <div class="dropstart">
                                            <button class="btn btn-sm btn-icon btn-white rounded-circle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                                <i class="icon-ellipsis-vertical"></i>
                                            </button>
                                            <ul class="dropdown-menu p-3">
                                                <li>
                                                    <a href="<?php echo base_url('pos'); ?>" class="dropdown-item rounded d-flex align-items-center"><i class="icon-pencil-line me-2"></i>Edit Order</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded d-flex align-items-center"><i class="icon-check-check me-2"></i>CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-x me-2"></i>Cancel</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#pay_complete_order"><i class="icon-pointer me-2"></i>Pay & CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#print_reciept"><i class="icon-printer me-2"></i>Print Receipt</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between mb-3">
                                        <p class="mb-0 fs-14 fw-semibold text-dark"><span class="fw-normal">Token No :</span> 26</p>
                                        <h6 class="mb-0 fw-semibold d-flex align-items-center gap-1"><i class="icon-clock fs-14"></i> 07:00 PM</h6>
                                    </div>
                                    <div class="mb-3 pb-3 border-bottom">
                                        <div class="orders-list">
                                            <div class="orders text-dark mb-3">
                                                <p><span class="dot"></span>Chicken Noodle Soup </p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="orders text-dark mb-2">
                                                <p><span class="dot"></span>Grilled Chicken</p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="bg-light rounded py-1 px-2 mb-3">
                                                <p class="mb-0 fw-medium d-flex align-items-center text-dark"> <i class="icon-badge-info me-1"></i> Notes : Extra Spicy</p>
                                            </div>
                                            <div class="orders text-dark mb-3">
                                                <p><span class="dot"></span>Grilled Salmon Steak</p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>

                                            <div class="more-menu">
                                                <div class="orders text-dark mb-3">
                                                    <p><span class="dot"></span>Grilled Burst Chiken</p>
                                                    <span class="line"></span>
                                                    <p class="text-dark">×1</p>
                                                </div>
                                                <div class="orders text-dark mb-3">
                                                    <p><span class="dot"></span>Chicken Noodle</p>
                                                    <span class="line"></span>
                                                    <p class="text-dark">×1</p>
                                                </div>
                                            </div>
                                            <div class="view-all mt-1">
                                                <button class="fw-semibold fs-14 mb-0 text-primary viewall-button">+2 More Items</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                        <p class="badge badge-soft-success mb-0">Billed</p>
                                        <div class="dropdown">
                                            <a href="#" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                                Pending
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-end p-3">
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Pending</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Preparing</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Served</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Delivered</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">CanceI</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Item 6 -->
                        <div class="col-xxl-4 col-xl-6 col-md-6 d-flex">
                            <!-- Start card -->
                            <div class="card flex-fill">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
                                        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                            <div class="avatar avatar-lg bg-primary rounded-circle">
                                                <i class="icon-shopping-bag"></i>
                                            </div>
                                            <div>
                                                <h6 class="mb-1 fs-14 fw-semibold"><a href="#" data-bs-toggle="offcanvas" data-bs-target="#view_details">#57005 </a></h6>
                                                <p class="mb-0 d-flex align-items-center gap-2">Dine In <span class="text-light">|</span> Table No : 9</p>
                                            </div>
                                        </div>
                                        <div class="dropstart">
                                            <button class="btn btn-sm btn-icon btn-white rounded-circle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                                <i class="icon-ellipsis-vertical"></i>
                                            </button>
                                            <ul class="dropdown-menu p-3">
                                                <li>
                                                    <a href="<?php echo base_url('pos'); ?>" class="dropdown-item rounded d-flex align-items-center"><i class="icon-pencil-line me-2"></i>Edit Order</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded d-flex align-items-center"><i class="icon-check-check me-2"></i>CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-x me-2"></i>Cancel</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#pay_complete_order"><i class="icon-pointer me-2"></i>Pay & CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#print_reciept"><i class="icon-printer me-2"></i>Print Receipt</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between mb-3">
                                        <p class="mb-0 fs-14 fw-semibold text-dark"><span class="fw-normal">Token No :</span> 29</p>
                                        <h6 class="mb-0 fw-semibold d-flex align-items-center gap-1"><i class="icon-clock fs-14"></i> 07:25 PM</h6>
                                    </div>
                                    <div class="mb-3 pb-3 border-bottom">
                                        <div class="orders-list">
                                            <div class="orders text-dark mb-3">
                                                <p><span class="dot success"></span>Shrimp Tom Yum</p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="orders text-dark mb-2">
                                                <p><span class="dot success"></span>Garlic Bread</p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="bg-light rounded py-1 px-2 mb-3">
                                                <p class="mb-0 fw-medium d-flex align-items-center text-dark"> <i class="icon-badge-info me-1"></i> Notes : Extra Spicy</p>
                                            </div>
                                            <div class="orders text-dark mb-3">
                                                <p><span class="dot success"></span>Quinoa Salad</p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="more-menu">
                                                <div class="orders text-dark mb-3">
                                                    <p><span class="dot success"></span>Garlic Butter Shrimp</p>
                                                    <span class="line"></span>
                                                    <p class="text-dark">×1</p>
                                                </div>
                                                <div class="orders text-dark mb-3">
                                                    <p><span class="dot success"></span>Cheese Burst Pizza</p>
                                                    <span class="line"></span>
                                                    <p class="text-dark">×1</p>
                                                </div>
                                            </div>
                                            <div class="view-all mt-1">
                                                <button class="fw-semibold fs-14 mb-0 text-primary viewall-button">+2 More Items</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                        <p class="badge badge-soft-purple mb-0">Paid</p>
                                        <div class="dropdown">
                                            <a href="#" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                                Pending
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-end p-3">
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Pending</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Preparing</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Served</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Delivered</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">CanceI</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End row -->
                </div>

                <!-- TAb 5 -->
                <div class="tab-pane show" id="order-tab5">
                    <!-- Start row -->
                    <div class="row">

                        <!-- Item 3 -->
                        <div class="col-xxl-4 col-xl-6 col-md-6 d-flex">
                            <!-- Start card -->
                            <div class="card flex-fill">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
                                        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                            <div class="avatar avatar-lg bg-primary rounded-circle">
                                                <i class="icon-shopping-bag"></i>
                                            </div>
                                            <div>
                                                <h6 class="mb-1 fs-14 fw-semibold"><a href="#" data-bs-toggle="offcanvas" data-bs-target="#view_details">#57002</a></h6>
                                                <p class="mb-0 d-flex align-items-center gap-2">Delivery</p>
                                            </div>
                                        </div>
                                        <div class="dropstart">
                                            <button class="btn btn-sm btn-icon btn-white rounded-circle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                                <i class="icon-ellipsis-vertical"></i>
                                            </button>
                                            <ul class="dropdown-menu p-3">
                                                <li>
                                                    <a href="<?php echo base_url('pos'); ?>" class="dropdown-item rounded d-flex align-items-center"><i class="icon-pencil-line me-2"></i>Edit Order</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded d-flex align-items-center"><i class="icon-check-check me-2"></i>CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-x me-2"></i>Cancel</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#pay_complete_order"><i class="icon-pointer me-2"></i>Pay & CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#print_reciept"><i class="icon-printer me-2"></i>Print Receipt</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between mb-3">
                                        <p class="mb-0 fs-14 fw-semibold text-dark"><span class="fw-normal">Token No :</span> 26</p>
                                        <h6 class="mb-0 fw-semibold d-flex align-items-center gap-1"><i class="icon-clock fs-14"></i> 07:00 PM</h6>
                                    </div>
                                    <div class="mb-3 pb-3 border-bottom">
                                        <div class="orders-list">
                                            <div class="orders text-dark mb-3">
                                                <p><span class="dot"></span>Chicken Taco </p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="orders text-dark mb-2">
                                                <p><span class="dot"></span>Chicken Soup</p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="bg-light rounded py-1 px-2 mb-3">
                                                <p class="mb-0 fw-medium d-flex align-items-center text-dark"> <i class="icon-badge-info me-1"></i> Notes : Extra Spicy</p>
                                            </div>
                                            <div class="orders text-dark mb-3">
                                                <p><span class="dot"></span>Grilled Salmon Steak</p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>

                                            <div class="more-menu">
                                                <div class="orders text-dark mb-3">
                                                    <p><span class="dot"></span>Chicken Noodle</p>
                                                    <span class="line"></span>
                                                    <p class="text-dark">×1</p>
                                                </div>
                                                <div class="orders text-dark mb-3">
                                                    <p><span class="dot"></span>Chicken Noodle Soup</p>
                                                    <span class="line"></span>
                                                    <p class="text-dark">×1</p>
                                                </div>
                                            </div>
                                            <div class="view-all mt-1">
                                                <button class="fw-semibold fs-14 mb-0 text-primary viewall-button">+2 More Items</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                        <p class="badge badge-soft-success mb-0">Billed</p>
                                        <div class="dropdown">
                                            <a href="#" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                                Pending
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-end p-3">
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Pending</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Preparing</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Served</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Delivered</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">CanceI</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Item 6 -->
                        <div class="col-xxl-4 col-xl-6 col-md-6 d-flex">
                            <!-- Start card -->
                            <div class="card flex-fill">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
                                        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                            <div class="avatar avatar-lg bg-primary rounded-circle">
                                                <i class="icon-shopping-bag"></i>
                                            </div>
                                            <div>
                                                <h6 class="mb-1 fs-14 fw-semibold"><a href="#" data-bs-toggle="offcanvas" data-bs-target="#view_details">#57005 </a></h6>
                                                <p class="mb-0 d-flex align-items-center gap-2">Dine In <span class="text-light">|</span> Table No : 9</p>
                                            </div>
                                        </div>
                                        <div class="dropstart">
                                            <button class="btn btn-sm btn-icon btn-white rounded-circle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                                <i class="icon-ellipsis-vertical"></i>
                                            </button>
                                            <ul class="dropdown-menu p-3">
                                                <li>
                                                    <a href="<?php echo base_url('pos'); ?>" class="dropdown-item rounded d-flex align-items-center"><i class="icon-pencil-line me-2"></i>Edit Order</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded d-flex align-items-center"><i class="icon-check-check me-2"></i>CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-x me-2"></i>Cancel</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#pay_complete_order"><i class="icon-pointer me-2"></i>Pay & CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#print_reciept"><i class="icon-printer me-2"></i>Print Receipt</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between mb-3">
                                        <p class="mb-0 fs-14 fw-semibold text-dark"><span class="fw-normal">Token No :</span> 29</p>
                                        <h6 class="mb-0 fw-semibold d-flex align-items-center gap-1"><i class="icon-clock fs-14"></i> 07:25 PM</h6>
                                    </div>
                                    <div class="mb-3 pb-3 border-bottom">
                                        <div class="orders-list">
                                            <div class="orders text-dark mb-3">
                                                <p><span class="dot success"></span>Lobster Pasta</p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="orders text-dark mb-2">
                                                <p><span class="dot success"></span>Garlic Bread</p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="bg-light rounded py-1 px-2 mb-3">
                                                <p class="mb-0 fw-medium d-flex align-items-center text-dark"> <i class="icon-badge-info me-1"></i> Notes : Extra Spicy</p>
                                            </div>
                                            <div class="orders text-dark mb-3">
                                                <p><span class="dot success"></span>Chicken Taco</p>
                                                <span class="line"></span>
                                                <p class="text-dark">×1</p>
                                            </div>
                                            <div class="more-menu">
                                                <div class="orders text-dark mb-3">
                                                    <p><span class="dot success"></span>Garlic Butter Shrimp</p>
                                                    <span class="line"></span>
                                                    <p class="text-dark">×1</p>
                                                </div>
                                                <div class="orders text-dark mb-3">
                                                    <p><span class="dot success"></span>Cheese Burst Pizza</p>
                                                    <span class="line"></span>
                                                    <p class="text-dark">×1</p>
                                                </div>
                                            </div>
                                            <div class="view-all mt-1">
                                                <button class="fw-semibold fs-14 mb-0 text-primary viewall-button">+2 More Items</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                        <p class="badge badge-soft-purple mb-0">Paid</p>
                                        <div class="dropdown">
                                            <a href="#" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                                Pending
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-end p-3">
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Pending</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Preparing</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Served</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">Delivered</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">CompIete</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown-item rounded">CanceI</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End row -->
                </div>

            </div>

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

<?= $this->endSection() ?>
