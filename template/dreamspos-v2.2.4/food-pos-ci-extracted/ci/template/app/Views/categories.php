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
                    <h3 class="mb-0">Categories <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle ms-2"><i class="icon-refresh-ccw"></i></a></h3>
                </div>
                <div class="gap-2 d-flex align-items-center flex-wrap">
                    <div class="dropdown">
                        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                            <i class="icon-upload me-1"></i>Export
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end p-3">
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item rounded">Export as PDF</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item rounded">Export as Excel</a>
                            </li>
                        </ul>
                    </div>
                    <a href="#" class="btn btn-primary d-inline-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_category"><i class="icon-circle-plus me-1"></i>Add New</a>
                </div>
            </div>
            <!-- End Page Header -->

            <!-- card start -->
            <div class="card mb-0">
                <div class="card-body">
                    <div class="d-flex align-items-center flex-wrap gap-3 justify-content-between mb-4">

                        <div class="search-input">
                            <span class="btn-searchset"><i class="icon-search fs-14"></i></span>
                        </div>

                        <div class="d-flex align-items-center gap-2 flex-wrap">

                            <!-- filter -->
                            <a href="javascript:void(0);" class="btn btn-white d-inline-flex align-items-center" data-bs-toggle="offcanvas" data-bs-target="#filter-offcanvas" aria-controls="filter-offcanvas">
                                <i class="icon-funnel me-2"></i>Filter
                            </a>

                            <!-- column -->
                            <div class="dropdown">
                                <a href="javascript:void(0);" class="btn btn-icon btn-white" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <i class="icon-columns-3"></i>
                                </a>

                                <div class="dropdown-menu dropdown-menu-md dropdown-menu-end p-3 pb-0">
                                    <h5 class="mb-3">Column</h5>
                                    <div id="drag-container">
                                        <div class="mb-3 drag-item" draggable="true">
                                            <label class="d-flex align-items-center">
                                                <i class="icon-grip-vertical me-2"></i>
                                                <input class="form-check-input m-0 me-2" type="checkbox">
                                                Category
                                            </label>
                                        </div>
                                        <div class="mb-3 drag-item" draggable="true">
                                            <label class="d-flex align-items-center">
                                                <i class="icon-grip-vertical me-2"></i>
                                                <input class="form-check-input m-0 me-2" type="checkbox">
                                                No of Items
                                            </label>
                                        </div>
                                        <div class="mb-3 drag-item" draggable="true">
                                            <label class="d-flex align-items-center">
                                                <i class="icon-grip-vertical me-2"></i>
                                                <input class="form-check-input m-0 me-2" type="checkbox">
                                                Created On
                                            </label>
                                        </div>
                                        <div class="mb-3 drag-item" draggable="true">
                                            <label class="d-flex align-items-center">
                                                <i class="icon-grip-vertical me-2"></i>
                                                <input class="form-check-input m-0 me-2" type="checkbox">
                                                Status
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- sort by -->
                            <div class="dropdown">
                                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                    Sort by : Newest
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item">Newest</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item">Oldest</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item">Ascending</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item">Descending</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- table start -->
                    <div class="table-responsive table-nowrap">
                        <table class="table mb-0 border datatable">
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>No of Items</th>
                                    <th>Created On</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2">
                                                <img src="<?php echo base_url('assets/img/category/category-01.png'); ?>" alt="category" class="img-fluid">
                                            </div>
                                            <h6 class="fs-14 fw-normal mb-0">Sea Food</h6>
                                        </div>
                                    </td>
                                    <td>28</td>
                                    <td>February 15, 2025</td>
                                    <td>
                                        <span class="badge badge-soft-success">Active</span>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#edit_category"><i class="icon-pencil-line"></i></a>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2">
                                                <img src="<?php echo base_url('assets/img/category/category-02.png'); ?>" alt="category" class="img-fluid">
                                            </div>
                                            <h6 class="fs-14 fw-normal mb-0">Pizza</h6>
                                        </div>
                                    </td>
                                    <td>42</td>
                                    <td>March 10, 2025</td>
                                    <td>
                                        <span class="badge badge-soft-success">Active</span>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#edit_category"><i class="icon-pencil-line"></i></a>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2">
                                                <img src="<?php echo base_url('assets/img/category/category-03.png'); ?>" alt="category" class="img-fluid">
                                            </div>
                                            <h6 class="fs-14 fw-normal mb-0">Salads</h6>
                                        </div>
                                    </td>
                                    <td>66</td>
                                    <td>April 5, 2025</td>
                                    <td>
                                        <span class="badge badge-soft-success">Active</span>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#edit_category"><i class="icon-pencil-line"></i></a>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2">
                                                <img src="<?php echo base_url('assets/img/category/category-04.png'); ?>" alt="category" class="img-fluid">
                                            </div>
                                            <h6 class="fs-14 fw-normal mb-0">Tacos</h6>
                                        </div>
                                    </td>
                                    <td>48</td>
                                    <td>May 20, 2025</td>
                                    <td>
                                        <span class="badge badge-soft-danger">Expired</span>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#edit_category"><i class="icon-pencil-line"></i></a>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2">
                                                <img src="<?php echo base_url('assets/img/category/category-05.png'); ?>" alt="category" class="img-fluid">
                                            </div>
                                            <h6 class="fs-14 fw-normal mb-0">Burgers</h6>
                                        </div>
                                    </td>
                                    <td>24</td>
                                    <td>June 30, 2025</td>
                                    <td>
                                        <span class="badge badge-soft-success">Active</span>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#edit_category"><i class="icon-pencil-line"></i></a>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2">
                                                <img src="<?php echo base_url('assets/img/category/category-06.png'); ?>" alt="category" class="img-fluid">
                                            </div>
                                            <h6 class="fs-14 fw-normal mb-0">Ice Cream</h6>
                                        </div>
                                    </td>
                                    <td>36</td>
                                    <td>July 18, 2025</td>
                                    <td>
                                        <span class="badge badge-soft-success">Active</span>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#edit_category"><i class="icon-pencil-line"></i></a>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2">
                                                <img src="<?php echo base_url('assets/img/category/category-07.png'); ?>" alt="category" class="img-fluid">
                                            </div>
                                            <h6 class="fs-14 fw-normal mb-0">Pasta</h6>
                                        </div>
                                    </td>
                                    <td>48</td>
                                    <td>August 12, 2025</td>
                                    <td>
                                        <span class="badge badge-soft-success">Active</span>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#edit_category"><i class="icon-pencil-line"></i></a>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2">
                                                <img src="<?php echo base_url('assets/img/category/category-08.png'); ?>" alt="category" class="img-fluid">
                                            </div>
                                            <h6 class="fs-14 fw-normal mb-0">Beverages</h6>
                                        </div>
                                    </td>
                                    <td>32</td>
                                    <td>September 19, 2025</td>
                                    <td>
                                        <span class="badge badge-soft-success">Active</span>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#edit_category"><i class="icon-pencil-line"></i></a>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2">
                                                <img src="<?php echo base_url('assets/img/category/category-09.png'); ?>" alt="category" class="img-fluid">
                                            </div>
                                            <h6 class="fs-14 fw-normal mb-0">Steaks</h6>
                                        </div>
                                    </td>
                                    <td>22</td>
                                    <td>October 7, 2025</td>
                                    <td>
                                        <span class="badge badge-soft-danger">Expired</span>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#edit_category"><i class="icon-pencil-line"></i></a>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2">
                                                <img src="<?php echo base_url('assets/img/category/category-10.png'); ?>" alt="category" class="img-fluid rounded-circle">
                                            </div>
                                            <h6 class="fs-14 fw-normal mb-0">Soups</h6>
                                        </div>
                                    </td>
                                    <td>18</td>
                                    <td>November 25, 2025</td>
                                    <td>
                                        <span class="badge badge-soft-success">Active</span>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#edit_category"><i class="icon-pencil-line"></i></a>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- table end -->
                </div>

            </div>
            <!-- card start -->

        </div>
        <!-- End Content -->

    </div>

    <!-- ========================
        End Page Content
    ========================= -->

<?= $this->endSection() ?>
