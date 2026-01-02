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
                    <h3 class="mb-0">Addons<a href="#" class="btn btn-icon btn-sm btn-white rounded-circle ms-2"><i class="icon-refresh-ccw"></i></a></h3>
                </div>
                <div class="gap-2 d-flex align-items-center flex-wrap">
                    <div class="dropdown">
                        <a href="#" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                            <i class="icon-upload me-1"></i>Export
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end p-3">
                            <li>
                                <a href="#" class="dropdown-item rounded">Export as PDF</a>
                            </li>
                            <li>
                                <a href="#" class="dropdown-item rounded">Export as Excel</a>
                            </li>
                        </ul>
                    </div>
                    <a href="#" class="btn btn-primary d-inline-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_modifier"><i class="icon-circle-plus me-1"></i>Add New</a>
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
                            <a href="#" class="btn btn-white d-inline-flex align-items-center" data-bs-toggle="offcanvas" data-bs-target="#filter-offcanvas" aria-controls="filter-offcanvas">
                                <i class="icon-funnel me-2"></i>Filter
                            </a>

                            <!-- column -->
                            <div class="dropdown">
                                <a href="#" class="btn btn-icon btn-white" data-bs-toggle="dropdown" data-bs-auto-close="outside"><i class="icon-columns-3"></i></a>
                                <div class="dropdown-menu dropdown-menu-md dropdown-menu-end p-3 pb-0">
                                    <h5 class="mb-3">Column</h5>
                                    <div>
                                        <div id="drag-container">
                                            <div class="mb-3 drag-item" draggable="true">
                                                <label class="d-flex align-items-center">
                                                    <i class="icon-grip-vertical me-2"></i>
                                                    <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                                Item
                                                </label>
                                            </div>
                                            <div class="mb-3 drag-item" draggable="true">
                                                <label class="d-flex align-items-center">
                                                    <i class="icon-grip-vertical me-2"></i>
                                                    <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                                    Addon
                                                </label>
                                            </div>
                                            <div class="mb-3 drag-item" draggable="true">
                                                <label class="d-flex align-items-center">
                                                    <i class="icon-grip-vertical me-2"></i>
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    Price
                                                </label>
                                            </div>
                                            <div class="mb-3 drag-item" draggable="true">
                                                <label class="d-flex align-items-center">
                                                    <i class="icon-grip-vertical me-2"></i>
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    Status
                                                </label>
                                            </div>
                                            <div class="mb-3 drag-item" draggable="true">
                                                <label class="d-flex align-items-center">
                                                    <i class="icon-grip-vertical me-2"></i>
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    Actions
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- sort by -->
                            <div class="dropdown">
                                <a href="#" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
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
                                    <th>Item</th>
                                    <th>Addon</th>
                                    <th>Price</th>
                                        <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        Pizza
                                    </td>
                                    <td>Extra Cheese</td>
                                    <td>
                                        $10
                                    </td>
                                    <td>
                                        <span class="badge badge-soft-success">Active</span>
                                    </td>
                                        <td>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#edit_modifier"><i class="icon-pencil-line"></i></a>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Sauce</td>
                                    <td>Garlic Butter Sauce</td>
                                    <td>$5</td>
                                    <td>
                                        <span class="badge badge-soft-success">Active</span>
                                    </td>
                                        <td>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#edit_modifier"><i class="icon-pencil-line"></i></a>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Sea Food</td>
                                    <td>Grilled Shrimp</td>
                                    <td>$20</td>
                                    <td>
                                        <span class="badge badge-soft-success">Active</span>
                                    </td>
                                        <td>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#edit_modifier"><i class="icon-pencil-line"></i></a>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Salad</td>
                                    <td>Avocado Slices</td>
                                    <td>$5</td>
                                    <td>
                                        <span class="badge badge-soft-success">Active</span>
                                    </td>
                                        <td>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#edit_modifier"><i class="icon-pencil-line"></i></a>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Sauce</td>
                                    <td>Spicy Mayo</td>
                                    <td>$10</td>
                                    <td>
                                        <span class="badge badge-soft-success">Active</span>
                                    </td>
                                        <td>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#edit_modifier"><i class="icon-pencil-line"></i></a>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Topping</td>
                                    <td>Crispy Bacon Bits</td>
                                    <td>$5</td>
                                    <td>
                                        <span class="badge badge-soft-success">Active</span>
                                    </td>
                                        <td>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#edit_modifier"><i class="icon-pencil-line"></i></a>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Side Dish</td>
                                    <td>Side Fries</td>
                                    <td>$10</td>
                                    <td>
                                        <span class="badge badge-soft-success">Active</span>
                                    </td>
                                        <td>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#edit_modifier"><i class="icon-pencil-line"></i></a>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Topping</td>
                                    <td>Guacamole</td>
                                    <td>$12</td>
                                    <td>
                                        <span class="badge badge-soft-success">Active</span>
                                    </td>
                                        <td>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#edit_modifier"><i class="icon-pencil-line"></i></a>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Sauce</td>
                                    <td>Extra Dressing</td>
                                    <td>$15</td>
                                    <td>
                                        <span class="badge badge-soft-success">Active</span>
                                    </td>
                                        <td>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#edit_modifier"><i class="icon-pencil-line"></i></a>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Garnish</td>
                                    <td>Lemon Wedge</td>
                                    <td>$10</td>
                                    <td>
                                        <span class="badge badge-soft-success">Active</span>
                                    </td>
                                        <td>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#edit_modifier"><i class="icon-pencil-line"></i></a>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
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
