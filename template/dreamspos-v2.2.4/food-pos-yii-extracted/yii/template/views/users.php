    <!-- ========================
        Start Page Content
    ========================= -->

    <div class="page-wrapper">

        <!-- Start Content -->
        <div class="content">

            <!-- Page Header -->
            <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-3 mb-4">
                <div class="flex-grow-1">
                    <h3 class="mb-0">Users <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle ms-2"><i class="icon-refresh-ccw"></i></a></h3>
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
                    <a href="#" class="btn btn-primary d-inline-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_users"><i class="icon-circle-plus me-1"></i>Add New</a>
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
                                    <div id="drag-container">
                                        <div class="mb-3 drag-item" draggable="true">
                                            <label class="d-flex align-items-center">
                                                <i class="icon-grip-vertical me-2"></i>
                                                <input class="form-check-input m-0 me-2" type="checkbox">
                                                Name
                                            </label>
                                        </div>
                                        <div class="mb-3 drag-item" draggable="true">
                                            <label class="d-flex align-items-center">
                                                <i class="icon-grip-vertical me-2"></i>
                                                <input class="form-check-input m-0 me-2" type="checkbox">
                                                Role
                                            </label>
                                        </div>
                                        <div class="mb-3 drag-item" draggable="true">
                                            <label class="d-flex align-items-center">
                                                <i class="icon-grip-vertical me-2"></i>
                                                <input class="form-check-input m-0 me-2" type="checkbox">
                                                Phone Number
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
                                    <th>Name</th>
                                    <th>Role</th>
                                    <th>Phone Number</th>
                                        <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a href="#" class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2">
                                                <img src="assets/img/users/user-01.jpg" alt="category" class="img-fluid">
                                            </a>
                                            <h6 class="fs-14 fw-normal mb-0"><a href="#">John Smith</a></h6>
                                        </div>
                                    </td>
                                    <td>Admin / Owner</td>
                                    <td>
                                        <p class="text-dark mb-0">+1 23456 78901</p>
                                    </td>
                                    <td>
                                        <span class="badge badge-soft-success">Active</span>
                                    </td>
                                        <td>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2 disabled" data-bs-toggle="modal" data-bs-target="#user_permission"><i class="icon-shield"></i></a>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2 disabled" data-bs-toggle="modal" data-bs-target="#edit_users"><i class="icon-pencil-line"></i></a>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle disabled" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a href="#" class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2">
                                                <img src="assets/img/users/user-02.jpg" alt="category" class="img-fluid">
                                            </a>
                                            <h6 class="fs-14 fw-normal mb-0"><a href="#">Emily Johnson</a></h6>
                                        </div>
                                    </td>
                                    <td>Supervisor</td>
                                    <td>
                                        <p class="text-dark mb-0">+1 34567 89012</p>
                                    </td>
                                    <td>
                                        <span class="badge badge-soft-success">Active</span>
                                    </td>
                                    <td>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#user_permission"><i class="icon-shield"></i></a>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#edit_users"><i class="icon-pencil-line"></i></a>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a href="#" class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2">
                                                <img src="assets/img/users/user-03.jpg" alt="category" class="img-fluid">
                                            </a>
                                            <h6 class="fs-14 fw-normal mb-0"><a href="#">David Williams</a></h6>
                                        </div>
                                    </td>
                                    <td>Cashier</td>
                                    <td>
                                        <p class="text-dark mb-0">+1 45678 90123</p>
                                    </td>
                                    <td>
                                        <span class="badge badge-soft-success">Active</span>
                                    </td>
                                        <td>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#user_permission"><i class="icon-shield"></i></a>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#edit_users"><i class="icon-pencil-line"></i></a>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a href="#" class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2">
                                                <img src="assets/img/users/user-04.jpg" alt="category" class="img-fluid">
                                            </a>
                                            <h6 class="fs-14 fw-normal mb-0"><a href="#">Ashley Brown</a></h6>
                                        </div>
                                    </td>
                                    <td>Chef</td>
                                    <td>
                                        <p class="text-dark mb-0">+1 56789 01234</p>
                                    </td>
                                    <td>
                                        <span class="badge badge-soft-success">Active</span>
                                    </td>
                                        <td>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#user_permission"><i class="icon-shield"></i></a>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#edit_users"><i class="icon-pencil-line"></i></a>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a href="#" class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2">
                                                <img src="assets/img/users/user-05.jpg" alt="category" class="img-fluid">
                                            </a>
                                            <h6 class="fs-14 fw-normal mb-0"><a href="#">Michael Davis</a></h6>
                                        </div>
                                    </td>
                                    <td>Waiter</td>
                                    <td>
                                        <p class="text-dark mb-0">+1 67890 12345</p>
                                    </td>
                                    <td>
                                        <span class="badge badge-soft-success">Active</span>
                                    </td>
                                        <td>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#user_permission"><i class="icon-shield"></i></a>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#edit_users"><i class="icon-pencil-line"></i></a>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a href="#" class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2">
                                                <img src="assets/img/users/user-06.jpg" alt="category" class="img-fluid">
                                            </a>
                                            <h6 class="fs-14 fw-normal mb-0"><a href="#">Brittany Miller</a></h6>
                                        </div>
                                    </td>
                                    <td>Delivery</td>
                                    <td>
                                        <p class="text-dark mb-0">+1 78901 23456</p>
                                    </td>
                                    <td>
                                        <span class="badge badge-soft-success">Active</span>
                                    </td>
                                        <td>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#user_permission"><i class="icon-shield"></i></a>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#edit_users"><i class="icon-pencil-line"></i></a>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a href="#" class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2">
                                                <img src="assets/img/users/user-07.jpg" alt="category" class="img-fluid">
                                            </a>
                                            <h6 class="fs-14 fw-normal mb-0"><a href="#">Christopher Wilson</a></h6>
                                        </div>
                                    </td>
                                    <td>Accountant</td>
                                    <td>
                                        <p class="text-dark mb-0">+1 89012 34567</p>
                                    </td>
                                    <td>
                                        <span class="badge badge-soft-success">Active</span>
                                    </td>
                                        <td>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#user_permission"><i class="icon-shield"></i></a>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#edit_users"><i class="icon-pencil-line"></i></a>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a href="#" class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2">
                                                <img src="assets/img/users/user-08.jpg" alt="category" class="img-fluid">
                                            </a>
                                            <h6 class="fs-14 fw-normal mb-0"><a href="#">Jessica Moore</a></h6>
                                        </div>
                                    </td>
                                    <td>System Operator</td>
                                    <td>
                                        <p class="text-dark mb-0">+1 90123 45678</p>
                                    </td>
                                    <td>
                                        <span class="badge badge-soft-success">Active</span>
                                    </td>
                                        <td>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#user_permission"><i class="icon-shield"></i></a>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#edit_users"><i class="icon-pencil-line"></i></a>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a href="#" class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2">
                                                <img src="assets/img/users/user-09.jpg" alt="category" class="img-fluid">
                                            </a>
                                            <h6 class="fs-14 fw-normal mb-0"><a href="#">Matthew Taylor</a></h6>
                                        </div>
                                    </td>
                                    <td>Chef</td>
                                    <td>
                                        <p class="text-dark mb-0">+1 01234 56789</p>
                                    </td>
                                    <td>
                                        <span class="badge badge-soft-success">Active</span>
                                    </td>
                                        <td>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#user_permission"><i class="icon-shield"></i></a>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#edit_users"><i class="icon-pencil-line"></i></a>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a href="#" class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2">
                                                <img src="assets/img/users/user-10.jpg" alt="category" class="img-fluid">
                                            </a>
                                            <h6 class="fs-14 fw-normal mb-0"><a href="#">Sarah Anderson</a></h6>
                                        </div>
                                    </td>
                                    <td>Chef</td>
                                    <td>
                                        <p class="text-dark mb-0">+1 12345 67890</p>
                                    </td>
                                    <td>
                                        <span class="badge badge-soft-success">Active</span>
                                    </td>
                                        <td>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#user_permission"><i class="icon-shield"></i></a>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle me-2" data-bs-toggle="modal" data-bs-target="#edit_users"><i class="icon-pencil-line"></i></a>
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
