<template>
    <!-- Print details modal -->
    <div class="modal fade" id="print_order">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <h4 class="modal-title">Print Reciept</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <div class="modal-body"> 
                    <!-- Item 1 -->
                    <div class="mb-3 pb-3 border-bottom">
                        <h5 class="mb-3 fs-16">Order Info</h5>
                        <h6 class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-3">Date & Time <span class="fw-medium text-dark">25/11/2025 - 08:45 PM</span> </h6>
                        <h6 class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-3"> Order No <span class="fw-medium text-dark"> #54654</span> </h6>
                        <h6 class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-3"> Token No <span class="fw-medium text-dark"> 20</span> </h6>
                        <h6 class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-3"> No of Items <span class="fw-medium text-dark"> 4</span> </h6>
                        <h6 class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-0"> Order Type<span class="fw-medium text-dark"> Dine In (TabIe 4) </span> </h6>
                    </div>

                    <!-- Item 2 -->
                    <div class="mb-3 pb-3 border-bottom">
                        <h5 class="mb-3 fs-16">Ordered Menus</h5>
                        <h6 class="fs-14 fw-normal d-flex align-items-start justify-content-between mb-3 flex-column gap-2">Grilled Chicken ×1 
                            <div class="bg-light rounded py-1 px-2">
                                <p class="mb-0 fw-medium d-flex align-items-center text-dark"> <i class="icon-badge-info me-1"></i> Notes : Extra Spicy,  With extra Pepperoni</p>
                            </div>
                        </h6>
                        <h6 class="fs-14 fw-normal d-flex align-items-start justify-content-between mb-3 flex-column gap-2"> Chicken Taco ×2 
                        </h6>
                        <h6 class="fs-14 fw-normal d-flex align-items-start justify-content-between mb-3 flex-column gap-2"> Lobster Thermidor ×1 
                            <div class="bg-light rounded py-1 px-2">
                                <p class="mb-0 fw-medium d-flex align-items-center text-dark"> <i class="icon-badge-info me-1"></i> Notes : Extra Spicy, Remove Scalp</p>
                            </div> </h6>
                        <h6 class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-0"> Grilled Chicken ×1 </h6>
                    </div>

                    <!-- Item 3 -->
                    <div class="mb-3 pb-3 border-bottom">
                        <h6 class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-3">Sub Total<span class="fw-medium text-dark">$267</span> </h6>
                        <h6 class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-3"> Tax (10%)<span class="fw-medium text-dark"> $268</span> </h6>
                        <h6 class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-0"> Service Charge <span class="fw-medium text-dark"> $15</span> </h6>
                    </div>
                    <h5 class="mb-0 d-flex align-items-center justify-content-between">Total <span>$274</span></h5>
                </div>

                <div class="modal-footer d-flex align-items-center justify-content-between flex-nowrap gap-2">
                    <button type="button" class="btn btn-light w-100 m-0" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary w-100 m-0">Print</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Start Modal  -->
    <div class="modal fade" id="cooking_started_modal">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">
                <div class="modal-body text-center p-4">
                    <div class="mb-4">
                        <span class="avatar avatar-xxl rounded-circle bg-success-subtle">
                            <img src="@/assets/img/icons/start-icon.svg" alt="trash" class="img-fluid w-auto h-auto">
                        </span>
                    </div>
                    <h4 class="mb-1">Cooking Started</h4>
                    <p class="mb-4">Vegetarian Lasagna Cooking has
                        begun in the kitchen.</p>
                    <div class="d-flex justify-content-between gap-2">
                        <router-link to="/main-menu/kitchen" class="btn btn-primary w-100">Close</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Modal  --> 

    <!-- Start Modal  -->
    <div class="modal fade" id="cooking_done_modal">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">
                <div class="modal-body text-center p-4">
                    <div class="mb-4">
                        <span class="avatar avatar-xxl rounded-circle bg-success-subtle">
                            <img src="@/assets/img/icons/checked-img.svg" alt="trash" class="img-fluid w-auto h-auto">
                        </span>
                    </div>
                    <h4 class="mb-1">Cooking Completed</h4>
                    <p class="mb-4">Order <span class="text-dark fw-semibold">#14751</span> has been completed & ready in kitchen to serve</p>
                    <div class="d-flex justify-content-between gap-2">
                        <router-link to="/main-menu/kitchen" class="btn btn-primary w-100">Close</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Modal  --> 

    <!-- Start Modal  -->
    <div class="modal fade" id="order_pause">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">
                <div class="modal-body text-center p-4">
                    <div class="mb-4">
                        <span class="avatar avatar-xxl rounded-circle bg-success-subtle">
                            <img src="@/assets/img/icons/pause-icon.svg" alt="trash" class="img-fluid w-auto h-auto">
                        </span>
                    </div>
                    <h4 class="mb-1">Order Paused</h4>
                    <p class="mb-4">Order <span class="text-dark fw-semibold">#14751</span> has been paused in the kitchen</p>
                    <div class="d-flex justify-content-between gap-2">
                        <router-link to="/main-menu/kitchen" class="btn btn-primary w-100">Close</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Modal  --> 
</template>