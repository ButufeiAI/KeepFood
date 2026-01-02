    <!-- ========================
        Start Page Content
    ========================= -->

    <div class="page-wrapper">

        <!-- Start Content -->
        <div class="content">

            <!-- Page Header -->
            <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-3 mb-4">
                <div class="flex-grow-1">
                    <h3 class="mb-0">Store Settings <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle ms-2"><i class="icon-refresh-ccw"></i></a></h3>
                </div>
            </div>
            <!-- End Page Header -->

            <div>
                <!-- card start -->
                <div class="card mb-0">
                    <div class="card-body">
                        <form action="store_settings">

                            <!-- start row -->
                            <div class="row">

                                <div class="col-xl-12">
                                    <div class="mb-3 d-flex align-items-center flex-wrap gap-3">
                                        <div class="avatar avatar-3xl border bg-light">
                                            <i class="icon-images fs-28 text-dark"></i>
                                        </div>
                                        <div>
                                            <label class="form-label mb-1">Upload Store Image</label>
                                            <p class="fs-13 mb-3">Image should be with in 5 MB</p>
                                            <div class="d-flex align-items-center">
                                                <div class="btn btn-icon btn-sm btn-white rounded-circle position-relative me-2">
                                                    <input type="file" class="form-control position-absolute w-100 h-100 top-0 start-0 opacity-0">
                                                    <i class="icon-upload"></i>
                                                </div>
                                                <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle text-danger"><i class="icon-trash-2"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div> <!-- end col -->

                                <div class="col-md-12">
                                    <div class="mb-3">
                                        <label class="form-label">Store Name<span class="text-danger ms-1">*</span></label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div> <!-- end col -->
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Address 1<span class="text-danger ms-1">*</span></label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div> <!-- end col -->

                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Address 2</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div> <!-- end col -->

                                <div class="col-md-3">
                                    <div class="mb-3">
                                        <label class="form-label">Country<span class="text-danger ms-1">*</span></label>
                                        <select class="select">
                                            <option>Select</option>
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>Germany</option>
                                            <option>France</option>
                                        </select>
                                    </div>
                                </div> <!-- end col -->

                                <div class="col-md-3">
                                    <div class="mb-3">
                                        <label class="form-label">State<span class="text-danger ms-1">*</span></label>
                                        <select class="select">
                                            <option>Select</option>
                                            <option>California</option>
                                            <option>New York</option>
                                            <option>Texas</option>
                                            <option>Florida</option>
                                        </select>
                                    </div>
                                </div> <!-- end col -->

                                <div class="col-md-3">
                                    <div class="mb-3">
                                        <label class="form-label">City<span class="text-danger ms-1">*</span></label>
                                        <select class="select">
                                            <option>Select</option>
                                            <option>Los Angeles</option>
                                            <option>San Diego</option>
                                            <option>Fresno</option>
                                            <option>San Francisco</option>
                                        </select>
                                    </div>
                                </div> <!-- end col -->

                                <div class="col-md-3">
                                    <div class="mb-3">
                                        <label class="form-label">Pincode<span class="text-danger ms-1">*</span></label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div> <!-- end col -->


                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Email<span class="text-danger ms-1">*</span></label>
                                        <input type="email" class="form-control">
                                    </div>
                                </div> <!-- end col -->

                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Phone<span class="text-danger ms-1">*</span></label>
                                        <input type="tel" class="form-control" id="phone" name="phone">
                                    </div>
                                </div> <!-- end col -->

                                <div class="col-md-12">
                                    <div class="mb-3">
                                        <label class="form-label">Currency<span class="text-danger ms-1">*</span></label>
                                        <select class="select">
                                            <option>Select</option>
                                            <option>USD</option>
                                            <option>AED</option>
                                            <option>EUR</option>
                                            <option>INR</option>
                                        </select>
                                    </div>
                                </div> <!-- end col -->

                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <div class="form-check form-switch mb-3">
                                            <input class="form-check-input" type="checkbox" role="switch" id="switchCheckChecked" checked>
                                            <label class="form-check-label" for="switchCheckChecked">Enable QR Menu</label>
                                        </div>
                                        <div class="form-check form-switch mb-3">
                                            <input class="form-check-input" type="checkbox" role="switch" id="switchCheckChecked1" checked>
                                            <label class="form-check-label" for="switchCheckChecked1">Enable Take Away</label>
                                        </div>
                                        <div class="form-check form-switch mb-3">
                                            <input class="form-check-input" type="checkbox" role="switch" id="switchCheckChecked2" checked>
                                            <label class="form-check-label" for="switchCheckChecked2">Enable Dine In</label>
                                        </div>
                                        <div class="form-check form-switch mb-0">
                                            <input class="form-check-input" type="checkbox" role="switch" id="switchCheckChecked3">
                                            <label class="form-check-label" for="switchCheckChecked3">Enable Reservation</label>
                                        </div>
                                    </div>
                                </div> <!-- end col -->

                                <div class="col-md-6">
                                    <div class="mb-0">
                                        <div class="form-check form-switch mb-3">
                                            <input class="form-check-input" type="checkbox" role="switch" id="switchCheckChecked4" checked>
                                            <label class="form-check-label" for="switchCheckChecked4">Enable Order Via QR Menu</label>
                                        </div>
                                        <div class="form-check form-switch mb-3">
                                            <input class="form-check-input" type="checkbox" role="switch" id="switchCheckChecked5" checked>
                                            <label class="form-check-label" for="switchCheckChecked5">Enable Delivery</label>
                                        </div>
                                        <div class="form-check form-switch mb-0">
                                            <input class="form-check-input" type="checkbox" role="switch" id="switchCheckChecked6" checked>
                                            <label class="form-check-label" for="switchCheckChecked6">Enable Table</label>
                                        </div>
                                    </div>
                                </div> <!-- end col -->

                            </div>
                            <!-- end row -->

                            <div class="d-flex align-items-center justify-content-end flex-wrap row-gap-2 border-top mt-2 pt-4">
                                <button type="button" class="btn btn-light me-2">Cancel</button>
                                <button type="submit" class="btn btn-primary">Save Changes</button>
                            </div>

                        </form>
                    </div> <!-- end card body -->

                </div>
                <!-- card start -->
            </div>

        </div>
        <!-- End Content -->

    </div>

    <!-- ========================
        End Page Content
    ========================= -->
