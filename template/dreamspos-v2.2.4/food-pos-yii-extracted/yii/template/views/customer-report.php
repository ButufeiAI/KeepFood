    <!-- ========================
        Start Page Content
    ========================= -->

    <div class="page-wrapper">

        <!-- Start Content -->
        <div class="content">

            <!-- Page Header -->
            <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-3 mb-4">
                <div class="flex-grow-1">
                    <h3 class="mb-0">Reports <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle ms-2"><i class="icon-refresh-ccw"></i></a></h3>
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
                </div>
            </div>
            <!-- End Page Header -->

            <!-- Tabs -->
            <ul class="nav nav-tabs nav-bordered nav-bordered-primary mb-4" role="tablist">
                <li class="nav-item">
                    <a href="earning-report" class="nav-link d-flex align-items-center"><i class="icon-badge-dollar-sign me-2"></i>Earning Report</a>
                </li>
                <li class="nav-item">
                    <a href="order-report" class="nav-link d-flex align-items-center"><i class="icon-list-todo me-2"></i>Order Report</a>
                </li>
                <li class="nav-item">
                    <a href="sales-report" class="nav-link d-flex align-items-center"><i class="icon-shopping-bag me-2"></i>Sales Report</a>
                </li>
                <li class="nav-item">
                    <a href="customer-report" class="nav-link d-flex align-items-center active"><i class="icon-users me-2"></i>Customer Report</a>
                </li>
                <li class="nav-item">
                    <a href="audit-report" class="nav-link d-flex align-items-center"><i class="icon-hourglass me-2"></i>Audit Logs</a>
                </li>
            </ul>
            <!-- Tabs -->

            <!-- card start -->
            <div class="card mb-0">
                <div class="card-body">


                    <div class="border-bottom sales-report-filter-wrap">
                        <div class="report-filter">
                            <div class="mb-3">
                                <label class="form-label">Start Date<span class="text-danger ms-1">*</span></label>
                                <div class="input-group w-auto input-group-flat">
                                    <input type="text" class="form-control" data-provider="flatpickr" data-date-format="d/m/Y" placeholder="dd/mm/yyyy">
                                    <span class="input-group-text">
                                        <i class="icon-calendar-fold"></i>
                                    </span>
                                </div>
                            </div>
                        </div> <!-- end col -->
                        <div class="report-filter">
                            <div class="mb-3">
                                <label class="form-label">End Date<span class="text-danger ms-1">*</span></label>
                                <div class="input-group w-auto input-group-flat">
                                    <input type="text" class="form-control" data-provider="flatpickr" data-date-format="d/m/Y" placeholder="dd/mm/yyyy">
                                    <span class="input-group-text">
                                        <i class="icon-calendar-fold"></i>
                                    </span>
                                </div>
                            </div>
                        </div> <!-- end col -->
                        <div class="report-filter">
                            <div class="mb-3">
                                <label class="form-label">Customer<span class="text-danger ms-1">*</span></label>
                                <div class="dropdown">
                                    <a href="#" class="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                        Select
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end p-3 w-100">
                                        <h6 class="fs-14 fw-semibold mb-3">Customer</h6>
                                        <div class="input-icon-end input-icon position-relative mb-3">
                                            <span class="input-icon-addon">
                                                <i class="icon-search text-dark"></i>
                                            </span>
                                            <input type="text" class="form-control form-control-md" placeholder="Search">
                                        </div>
                                        <div class="vstack gap-2">
                                            <div>
                                                <label class="d-flex align-items-center">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">Walk-in Customer
                                                </label>
                                            </div>
                                            <div>
                                                <label class="d-flex align-items-center">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">Sue Allen
                                                </label>
                                            </div>
                                            <div>
                                                <label class="d-flex align-items-center">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">Frank Barrett
                                                </label>
                                            </div>
                                            <div>
                                                <label class="d-flex align-items-center">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">Kelley Davis
                                                </label>
                                            </div>
                                            <div>
                                                <label class="d-flex align-items-center">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">Jim Vickers
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> <!-- end col -->
                        <div class="report-filter">
                            <div class="mb-3">
                                <a href="#" class="btn btn-primary d-inline-flex align-items-center">Submit</a>
                            </div>
                        </div> <!-- end col -->
                    </div>

                    <div class="d-flex align-items-center flex-wrap gap-3 justify-content-between mb-4">

                        <div class="search-input">
                            <span class="btn-searchset"><i class="icon-search fs-14"></i></span>
                        </div>

                        <div class="d-flex align-items-center gap-2 flex-wrap">

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
                                    <th>Customer ID</th>
                                    <th>Customer</th>
                                    <th>Total Orders</th>
                                    <th>Grand Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#CUS0016</td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a href="#" class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2 bg-light border">
                                            <i class="icon-user fs-16 text-dark"></i>
                                            </a>
                                            <h6 class="fs-14 fw-normal mb-0"><a href="#">Walk-in Customer</a></h6>
                                        </div>
                                    </td>
                                    <td>32</td>
                                    <td>
                                        $1000
                                    </td>
                                </tr>
                                <tr>
                                    <td>#CUS0015</td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a href="#" class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2 bg-light border">
                                            <img src="assets/img/profiles/avatar-33.jpg" alt="category" class="img-fluid">
                                            </a>
                                            <h6 class="fs-14 fw-normal mb-0"><a href="#">Sue Allen</a></h6>
                                        </div>
                                    </td>
                                    <td>45</td>
                                    <td>
                                        $1500
                                    </td>
                                </tr>
                                <tr>
                                    <td>#CUS0014</td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a href="#" class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2 bg-light border">
                                            <img src="assets/img/profiles/avatar-34.jpg" alt="category" class="img-fluid">
                                            </a>
                                            <h6 class="fs-14 fw-normal mb-0"><a href="#">Frank Barrett</a></h6>
                                        </div>
                                    </td>
                                    <td>70</td>
                                    <td>
                                        $1200
                                    </td>
                                </tr>
                                <tr>
                                    <td>#CUS0013</td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a href="#" class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2 bg-light border">
                                            <img src="assets/img/profiles/avatar-35.jpg" alt="category" class="img-fluid">
                                            </a>
                                            <h6 class="fs-14 fw-normal mb-0"><a href="#">Kelley Davis</a></h6>
                                        </div>
                                    </td>
                                    <td>53</td>
                                    <td>
                                        $800
                                    </td>
                                </tr>
                                <tr>
                                    <td>#CUS0012</td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a href="#" class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2 bg-light border">
                                            <img src="assets/img/profiles/avatar-36.jpg" alt="category" class="img-fluid">
                                            </a>
                                            <h6 class="fs-14 fw-normal mb-0"><a href="#">Jim Vickers</a></h6>
                                        </div>
                                    </td>
                                    <td>34</td>
                                    <td>
                                        $750
                                    </td>
                                </tr>
                                <tr>
                                    <td>#CUS0011</td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a href="#" class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2 bg-light border">
                                            <img src="assets/img/profiles/avatar-37.jpg" alt="category" class="img-fluid">
                                            </a>
                                            <h6 class="fs-14 fw-normal mb-0"><a href="#">Nancy Chapman</a></h6>
                                        </div>
                                    </td>
                                    <td>40</td>
                                    <td>
                                        $1300
                                    </td>
                                </tr>
                                <tr>
                                    <td>#CUS0010</td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a href="#" class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2 bg-light border">
                                            <img src="assets/img/profiles/avatar-38.jpg" alt="category" class="img-fluid">
                                            </a>
                                            <h6 class="fs-14 fw-normal mb-0"><a href="#">Ron Jude</a></h6>
                                        </div>
                                    </td>
                                    <td>55</td>
                                    <td>
                                        $1100
                                    </td>
                                </tr>
                                <tr>
                                    <td>#CUS0009</td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a href="#" class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2 bg-light border">
                                            <img src="assets/img/profiles/avatar-39.jpg" alt="category" class="img-fluid">
                                            </a>
                                            <h6 class="fs-14 fw-normal mb-0"><a href="#">Andrea Aponte</a></h6>
                                        </div>
                                    </td>
                                    <td>35</td>
                                    <td>
                                        $600
                                    </td>
                                </tr>
                                <tr>
                                    <td>#CUS0008</td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a href="#" class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2 bg-light border">
                                            <img src="assets/img/profiles/avatar-40.jpg" alt="category" class="img-fluid">
                                            </a>
                                            <h6 class="fs-14 fw-normal mb-0"><a href="#">David Belcher</a></h6>
                                        </div>
                                    </td>
                                    <td>27</td>
                                    <td>
                                        $1300
                                    </td>
                                </tr>
                                <tr>
                                    <td>#CUS0007</td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a href="#" class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2 bg-light border">
                                            <img src="assets/img/profiles/avatar-41.jpg" alt="category" class="img-fluid">
                                            </a>
                                            <h6 class="fs-14 fw-normal mb-0"><a href="#">Julie Kangas</a></h6>
                                        </div>
                                    </td>
                                    <td>22</td>
                                    <td>
                                        $800
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
