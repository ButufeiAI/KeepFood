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
                    <h3 class="mb-0">Permissions <a href="#"
                            class="btn btn-icon btn-sm btn-white rounded-circle ms-2"><i
                                class="icon-refresh-ccw"></i></a></h3>
                </div>
                <div class="gap-2 d-flex align-items-center flex-wrap">
                    <a href="#" class="btn btn-primary d-inline-flex align-items-center" data-bs-toggle="modal"
                        data-bs-target="#add_role"><i class="icon-circle-plus me-1"></i>Add New</a>
                </div>
            </div>
            <!-- End Page Header -->

            <!-- card start -->
            <div class="row justify-content-center">
                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h6 class="fs-20 fw-bold mb-4">Roles</h6>
                            <div class="roles-sidebar d-flex align-items-start">
                                <ul class="nav flex-column nav-pills me-3 w-100" id="v-pills-tab" role="tablist"
                                    aria-orientation="vertical">
                                    <li>
                                        <a href="#" class="nav-link active" id="v-pills-admin-tab"
                                            data-bs-toggle="pill" data-bs-target="#v-pills-admin" type="button"
                                            role="tab" aria-controls="v-pills-admin" aria-selected="true">Admin</a>
                                    </li>
                                    <li>
                                        <a href="#" class="nav-link" id="v-pills-supervisor-tab"
                                            data-bs-toggle="pill" data-bs-target="#v-pills-supervisor" type="button"
                                            role="tab" aria-controls="v-pills-supervisor"
                                            aria-selected="true">Supervisor</a>
                                    </li>
                                    <li>
                                        <a href="#" class="nav-link" id="v-pills-cashier-tab" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-cashier" type="button" role="tab"
                                            aria-controls="v-pills-cashier" aria-selected="true">Cashier</a>
                                    </li>
                                    <li>
                                        <a href="#" class="nav-link" id="v-pills-chef-tab" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-chef" type="button" role="tab"
                                            aria-controls="v-pills-chef" aria-selected="true">Chef</a>
                                    </li>
                                    <li>
                                        <a href="#" class="nav-link" id="v-pills-waiter-tab" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-waiter" type="button" role="tab"
                                            aria-controls="v-pills-waiter" aria-selected="true">Waiter</a>
                                    </li>
                                    <li>
                                        <a href="#" class="nav-link" id="v-pills-accountant-tab"
                                            data-bs-toggle="pill" data-bs-target="#v-pills-accountant" type="button"
                                            role="tab" aria-controls="v-pills-accountant"
                                            aria-selected="true">Accountant</a>
                                    </li>
                                    <li>
                                        <a href="#" class="nav-link mb-0" id="v-pills-systemoperator-tab"
                                            data-bs-toggle="pill" data-bs-target="#v-pills-systemoperator"
                                            type="button" role="tab" aria-controls="v-pills-systemoperator"
                                            aria-selected="true">System Operator</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-admin" role="tabpanel"
                            aria-labelledby="v-pills-admin-tab" tabindex="0">
                            <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-4">
                                <div class="flex-grow-1">
                                    <h5 class="fs-16 fw-bold mb-0">Role : Admin </h5>
                                </div>
                                <div class="form-check form-check-md">
                                    <input class="form-check-input" type="checkbox" id="select-all">
                                    <label for="select-all">Revert All</label>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <div class="table-responsive" id="v-pills-tabContent">
                                        <table class="table m-0 table-nowrap bg-white border">
                                            <thead>
                                                <tr>
                                                    <th>Module</th>
                                                    <th>View</th>
                                                    <th>Add</th>
                                                    <th>Edit</th>
                                                    <th>Delete</th>
                                                    <th>Export</th>
                                                    <th>Approved/Void</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="text-dark fw-medium">Dashboard</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">POS</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Hold/Resume Sale</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Refund / Return</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Products</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Categories</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Customers</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Reports</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Settings</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>

                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>

                                    <div class="d-flex align-items-center justify-content-end flex-wrap row-gap-2 border-top mt-4 pt-4">
                                        <button type="button" class="btn btn-light me-2">Cancel</button>
                                        <button type="submit" class="btn btn-primary">Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-supervisor" role="tabpanel"
                            aria-labelledby="v-pills-supervisor-tab" tabindex="0">
                            <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-4">
                                <div class="flex-grow-1">
                                    <h5 class="fs-16 fw-bold mb-0">Role : Supervisor </h5>
                                </div>
                                <div class="form-check form-check-md">
                                    <input class="form-check-input" type="checkbox" id="select-all">
                                    <label for="select-all">Revert All</label>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <div class="table-responsive" id="v-pills-tabContent">
                                        <table class="table m-0 table-nowrap bg-white border">
                                            <thead>
                                                <tr>
                                                    <th>Modules</th>
                                                    <th>Allow All</th>
                                                    <th>Read</th>
                                                    <th>Write</th>
                                                    <th>Create</th>
                                                    <th>Delete</th>
                                                    <th>Import</th>
                                                    <th>Export</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="text-dark fw-medium">Dashboard</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">POS</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Hold/Resume Sale</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Refund / Return</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Products</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Categories</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Customers</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Reports</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Settings</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-end flex-wrap row-gap-2 border-top mt-4 pt-4">
                                        <button type="button" class="btn btn-light me-2">Cancel</button>
                                        <button type="submit" class="btn btn-primary">Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-cashier" role="tabpanel"
                            aria-labelledby="v-pills-cashier-tab" tabindex="0">
                            <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-4">
                                <div class="flex-grow-1">
                                    <h5 class="fs-16 fw-bold mb-0">Role : Cashier </h5>
                                </div>
                                <div class="form-check form-check-md">
                                    <input class="form-check-input" type="checkbox" id="select-all">
                                    <label for="select-all">Revert All</label>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <div class="table-responsive" id="v-pills-tabContent">
                                        <table class="table m-0 table-nowrap bg-white border">
                                            <thead>
                                                <tr>
                                                    <th>Modules</th>
                                                    <th>Allow All</th>
                                                    <th>Read</th>
                                                    <th>Write</th>
                                                    <th>Create</th>
                                                    <th>Delete</th>
                                                    <th>Import</th>
                                                    <th>Export</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="text-dark fw-medium">Dashboard</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">POS</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Hold/Resume Sale</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Refund / Return</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Products</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Categories</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Customers</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Reports</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Settings</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-end flex-wrap row-gap-2 border-top mt-4 pt-4">
                                            <button type="button" class="btn btn-light me-2">Cancel</button>
                                        <button type="submit" class="btn btn-primary">Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-chef" role="tabpanel"
                            aria-labelledby="v-pills-chef-tab" tabindex="0">
                            <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-4">
                                <div class="flex-grow-1">
                                    <h5 class="fs-16 fw-bold mb-0">Role : Chef </h5>
                                </div>
                                <div class="form-check form-check-md">
                                    <input class="form-check-input" type="checkbox" id="select-all">
                                    <label for="select-all">Revert All</label>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <div class="table-responsive" id="v-pills-tabContent">
                                        <table class="table m-0 table-nowrap bg-white border">
                                            <thead>
                                                <tr>
                                                    <th>Modules</th>
                                                    <th>Allow All</th>
                                                    <th>Read</th>
                                                    <th>Write</th>
                                                    <th>Create</th>
                                                    <th>Delete</th>
                                                    <th>Import</th>
                                                    <th>Export</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="text-dark fw-medium">Dashboard</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">POS</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Hold/Resume Sale</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Refund / Return</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Products</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Categories</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Customers</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Reports</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Settings</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-end flex-wrap row-gap-2 border-top mt-4 pt-4">
                                            <button type="button" class="btn btn-light me-2">Cancel</button>
                                        <button type="submit" class="btn btn-primary">Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-waiter" role="tabpanel"
                            aria-labelledby="v-pills-waiter-tab" tabindex="0">
                            <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-4">
                                <div class="flex-grow-1">
                                    <h5 class="fs-16 fw-bold mb-0">Role : Waiter </h5>
                                </div>
                                <div class="form-check form-check-md">
                                    <input class="form-check-input" type="checkbox" id="select-all">
                                    <label for="select-all">Revert All</label>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <div class="table-responsive" id="v-pills-tabContent">
                                        <table class="table m-0 table-nowrap bg-white border">
                                            <thead>
                                                <tr>
                                                    <th>Modules</th>
                                                    <th>Allow All</th>
                                                    <th>Read</th>
                                                    <th>Write</th>
                                                    <th>Create</th>
                                                    <th>Delete</th>
                                                    <th>Import</th>
                                                    <th>Export</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="text-dark fw-medium">Dashboard</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">POS</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Hold/Resume Sale</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Refund / Return</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Products</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Categories</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Customers</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Reports</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Settings</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-end flex-wrap row-gap-2 border-top mt-4 pt-4">
                                            <button type="button" class="btn btn-light me-2">Cancel</button>
                                        <button type="submit" class="btn btn-primary">Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-accountant" role="tabpanel"
                            aria-labelledby="v-pills-accountant-tab" tabindex="0">
                            <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-4">
                                <div class="flex-grow-1">
                                    <h5 class="fs-16 fw-bold mb-0">Role : Accountant </h5>
                                </div>
                                <div class="form-check form-check-md">
                                    <input class="form-check-input" type="checkbox" id="select-all">
                                    <label for="select-all">Revert All</label>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <div class="table-responsive" id="v-pills-tabContent">
                                        <table class="table m-0 table-nowrap bg-white border">
                                            <thead>
                                                <tr>
                                                    <th>Modules</th>
                                                    <th>Allow All</th>
                                                    <th>Read</th>
                                                    <th>Write</th>
                                                    <th>Create</th>
                                                    <th>Delete</th>
                                                    <th>Import</th>
                                                    <th>Export</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="text-dark fw-medium">Dashboard</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">POS</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Hold/Resume Sale</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Refund / Return</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Products</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Categories</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Customers</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Reports</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Settings</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-end flex-wrap row-gap-2 border-top mt-4 pt-4">
                                            <button type="button" class="btn btn-light me-2">Cancel</button>
                                        <button type="submit" class="btn btn-primary">Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-systemoperator" role="tabpanel"
                            aria-labelledby="v-pills-systemoperator-tab" tabindex="0">
                            <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-4">
                                <div class="flex-grow-1">
                                    <h5 class="fs-16 fw-bold mb-0">Role : System Operator </h5>
                                </div>
                                <div class="form-check form-check-md">
                                    <input class="form-check-input" type="checkbox" id="select-all">
                                    <label for="select-all">Revert All</label>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <div class="table-responsive" id="v-pills-tabContent">
                                        <table class="table m-0 table-nowrap bg-white border">
                                            <thead>
                                                <tr>
                                                    <th>Modules</th>
                                                    <th>Allow All</th>
                                                    <th>Read</th>
                                                    <th>Write</th>
                                                    <th>Create</th>
                                                    <th>Delete</th>
                                                    <th>Import</th>
                                                    <th>Export</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="text-dark fw-medium">Dashboard</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">POS</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Hold/Resume Sale</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Refund / Return</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Products</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Categories</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Customers</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Reports</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-dark fw-medium">Settings</td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-md">
                                                            <input class="form-check-input" type="checkbox">
                                                        </div>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-end flex-wrap row-gap-2 border-top mt-4 pt-4">
                                        <button type="button" class="btn btn-light me-2">Cancel</button>
                                        <button type="submit" class="btn btn-primary">Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

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
