<template>
    <!-- ========================
        Start Page Content
    ========================= -->
        
    <div class="page-wrapper">

        <!-- Start Content -->
        <div class="content">

            <!-- Page Header -->
            <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-3 mb-4">
                <div class="flex-grow-1">
                    <h3 class="mb-0">Payment Types <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle ms-2"><i class="icon-refresh-ccw"></i></a></h3>
                </div>
            </div>
            <!-- End Page Header -->

            <div>
                <!-- card start -->
                <div class="card">
                    <div class="card-body">
                        <form action="#">

                            <!-- start row -->
                            <div class="row">

                                <div class="col-md-6 col-lg-4">
                                    <div class="card flex-fill">
                                        <div class="card-body">
                                            <div class="w-100 d-flex justify-content-between align-items-center">
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar avatar-md bg-light p-2 me-2">
                                                        <img src="@/assets/img/icons/dollar-sign.svg" alt="Img" class="custom-line-img-two">
                                                    </div>
                                                    <p class="mb-0 text-dark">Cash</p>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <div class="form-check form-switch mb-0">
                                                        <label class="form-check-label" for="switchCheckChecked"></label>
                                                        <input class="form-check-input" type="checkbox" role="switch" id="switchCheckChecked" checked>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> <!-- end col -->

                                <div class="col-md-6 col-lg-4">
                                    <div class="card flex-fill">
                                        <div class="card-body">
                                            <div class="w-100 d-flex justify-content-between align-items-center">
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar avatar-md bg-light p-2 me-2">
                                                        <img src="@/assets/img/icons/credit-card.svg" alt="Img" class="custom-line-img-two"> 
                                                    </div>
                                                    <p class="mb-0 text-dark">Card</p>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <div class="form-check form-switch mb-0">
                                                        <label class="form-check-label" for="switchCheckChecked1"></label>
                                                        <input class="form-check-input" type="checkbox" role="switch" id="switchCheckChecked1" checked>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> <!-- end col -->

                                <div class="col-md-6 col-lg-4">
                                    <div class="card flex-fill">
                                        <div class="card-body">
                                            <div class="w-100 d-flex justify-content-between align-items-center">
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar avatar-md bg-light p-2 me-2">
                                                        <img src="@/assets/img/icons/wallet.svg" alt="Img" class="custom-line-img-two">
                                                    </div>
                                                    <p class="mb-0 text-dark">Wallet</p>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <div class="form-check form-switch mb-0">
                                                        <label class="form-check-label" for="switchCheckChecked2"></label>
                                                        <input class="form-check-input" type="checkbox" role="switch" id="switchCheckChecked2" checked>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> <!-- end col -->

                                <div class="col-md-6 col-lg-4">
                                    <div class="card flex-fill">
                                        <div class="card-body">
                                            <div class="w-100 d-flex justify-content-between align-items-center">
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar avatar-md bg-light p-2 me-2">
                                                        <img src="@/assets/img/icons/russian-ruble.svg" alt="Img" class="custom-line-img-two">
                                                    </div>
                                                    <p class="mb-0 text-dark">Paypal</p>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <div class="form-check form-switch mb-0">
                                                        <label class="form-check-label" for="switchCheckChecked3"></label>
                                                        <input class="form-check-input" type="checkbox" role="switch" id="switchCheckChecked3" checked>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> <!-- end col -->

                                <div class="col-md-6 col-lg-4">
                                    <div class="card flex-fill">
                                        <div class="card-body">
                                            <div class="w-100 d-flex justify-content-between align-items-center">
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar avatar-md bg-light p-2 me-2">
                                                        <img src="@/assets/img/icons/qr-code.svg" alt="Img" class="custom-line-img-two">
                                                    </div>
                                                    <p class="mb-0 text-dark">QR Reader</p>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <div class="form-check form-switch mb-0">
                                                        <label class="form-check-label" for="switchCheckChecked4"></label>
                                                        <input class="form-check-input" type="checkbox" role="switch" id="switchCheckChecked4" checked>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> <!-- end col -->

                                <div class="col-md-6 col-lg-4">
                                    <div class="card flex-fill">
                                        <div class="card-body">
                                            <div class="w-100 d-flex justify-content-between align-items-center">
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar avatar-md bg-light p-2 me-2">
                                                        <img src="@/assets/img/icons/receipt-text.svg" alt="Img" class="custom-line-img-two">
                                                    </div>
                                                    <p class="mb-0 text-dark">Card Reader</p>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <div class="form-check form-switch mb-0">
                                                        <label class="form-check-label" for="switchCheckChecked5"></label>
                                                        <input class="form-check-input" type="checkbox" role="switch" id="switchCheckChecked5" checked>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> <!-- end col -->

                                <div class="col-md-6 col-lg-4">
                                    <div class="card flex-fill mb-0">
                                        <div class="card-body">
                                            <div class="w-100 d-flex justify-content-between align-items-center">
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar avatar-md bg-light p-2 me-2">
                                                        <img src="@/assets/img/icons/landmark.svg" alt="Img" class="custom-line-img-two">
                                                    </div>
                                                    <p class="mb-0 text-dark">Bank</p>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <div class="form-check form-switch mb-0">
                                                        <label class="form-check-label" for="switchCheckChecked6"></label>
                                                        <input class="form-check-input" type="checkbox" role="switch" id="switchCheckChecked6" checked>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> <!-- end col -->

                            </div>
                            <!-- end row -->

                            <div class="d-flex align-items-center justify-content-end flex-wrap row-gap-2 border-top mt-4 pt-4">
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
</template>