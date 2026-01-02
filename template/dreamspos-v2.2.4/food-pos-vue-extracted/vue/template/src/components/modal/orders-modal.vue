<template>
    <!-- Print details modal -->
    <div class="modal fade" id="print_reciept">
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
                        <h6 class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-3">Grilled Chicken ×1 <span class="fw-medium text-dark">$49</span> </h6>
                        <h6 class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-3"> Chicken Taco ×2 <span class="fw-medium text-dark"> $66</span> </h6>
                        <h6 class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-3"> Lobster Thermidor ×1 <span class="fw-medium text-dark"> $76</span> </h6>
                        <h6 class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-0"> Grilled Chicken ×1 <span class="fw-medium text-dark"> $62</span> </h6>
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

    <!-- Pay & Complete Order modal -->
    <div class="modal fade" id="pay_complete_order">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <h4 class="modal-title">Pay & Complete Order</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <div class="modal-body"> 
                    <div class="p-3 border rounded mb-4">
                        <h3 class="text-center mb-0">Final Total : $274</h3>
                    </div>
                    <!-- start row -->
                    <div class="row g-4">
                        <div class="col-lg-6 border-end">
                            <!-- Item 1 -->
                            <div class="mb-3 pb-3 border-bottom">
                                <h5 class="mb-3 fs-16">Order Info</h5>
                                <h6 class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-3"> Order No <span class="fw-medium text-dark"> #54654</span> </h6>
                                <h6 class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-3"> No of Items <span class="fw-medium text-dark"> 4</span> </h6>
                                <h6 class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-0"> Order Type<span class="fw-medium text-dark"> Dine In (TabIe 4) </span> </h6>
                            </div>

                            <!-- Item 2 -->
                            <div class="mb-3 pb-3 border-bottom orders-list">
                                <h5 class="mb-3 fs-16">Ordered Menus</h5>
                                <h6 class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-3 orders-two">Grilled Chicken ×1 <span class="line"></span><span class="fw-medium text-dark">$49</span> </h6>
                                <h6 class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-3 orders-two"> Chicken Taco ×2 <span class="line"></span><span class="fw-medium text-dark"> $66</span> </h6>
                                <h6 class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-3 orders-two"> Lobster Thermidor ×1 <span class="line"></span><span class="fw-medium text-dark"> $76</span> </h6>
                                <h6 class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-0 orders-two"> Grilled Chicken ×1 <span class="line"></span><span class="fw-medium text-dark"> $62</span> </h6>
                            </div>

                            <!-- Item 3 -->
                            <div>
                                <h6 class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-3">Sub Total<span class="fw-medium text-dark">$267</span> </h6>
                                <h6 class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-3"> Tax (10%)<span class="fw-medium text-dark"> $268</span> </h6>
                                <h6 class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-3"> Discount (15%)<span class="fw-medium text-dark"> $26.7</span> </h6>
                                <h6 class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-3"> Service Charge <span class="fw-medium text-dark"> $15</span> </h6>
                                <h6 class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-3"> Coupon (FIRSTORDER) <span class="fw-medium text-danger"> -$45</span> </h6>
                                <h6 class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-0"> Tip <span class="fw-medium text-dark"> $20</span> </h6>
                            </div>

                        </div>
                        <!-- end cold -->
                        <div class="col-lg-6">
                            <div>
                                <h6 class="mb-3">Payment Type</h6>   
                                <ul class="nav nav-tabs nav-tabs-solid border-0 flex-nowrap mb-4" role="tablist">
                                    <li class="nav-item w-100">                                             
                                        <a href="#order-tab6" class="nav-link active d-flex align-items-center justify-content-center w-100" data-bs-toggle="tab"><i class="icon-dollar-sign me-1"></i>Cash</a>
                                    </li>
                                    <li class="nav-item w-100">
                                        <a href="#order-tab7" class="nav-link d-flex align-items-center justify-content-center w-100" data-bs-toggle="tab"><i class="icon-credit-card me-1"></i>Card</a>
                                    </li>
                                    <li class="nav-item w-100">
                                        <a href="#order-tab8" class="nav-link d-flex align-items-center justify-content-center w-100" data-bs-toggle="tab"><i class="icon-scan-text me-1"></i>Scan</a>
                                    </li>
                                </ul>

                                <div class="tab-content">
                                    <!-- Item 1 -->
                                    <div class="tab-pane show active" id="order-tab6">
                                        <div class="d-flex align-items-center justify-content-between gap-3 flex-wrap mb-4 fw-medium text-dark">Discount <span class="line"></span> <a href="#" class="btn btn-sm btn-outline-light d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#calculator"><i class="icon-plus me-1"></i>Add</a> </div>
                                        <div class="d-flex align-items-center justify-content-between gap-3 flex-wrap mb-4 fw-medium text-dark">Tips <span class="line"></span><a href="#" class="btn btn-sm btn-outline-light d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_tips_calci"><i class="icon-plus me-1"></i>Add</a> </div>
                                        <div class="d-flex align-items-center justify-content-between gap-3 flex-wrap mb-4 fw-medium text-dark">Coupon <span class="line"></span><a href="#" class="btn btn-sm btn-outline-light d-flex align-items-center"><i class="icon-plus me-1"></i>Add</a> </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="mb-4">
                                                    <label class="form-label">Given Amount<span class="text-danger"> *</span></label>
                                                    <input type="text" class="form-control" value="300">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="mb-4">
                                                    <label class="form-label">Balance<span class="text-danger"> *</span></label>
                                                    <input type="text" class="form-control" value="26">
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label class="form-label fw-semibold">Note</label>
                                            <textarea rows="4" class="form-control"></textarea>
                                        </div>
                                    </div>
                                    <!-- Item 2 -->
                                    <div class="tab-pane" id="order-tab7">
                                        <div class="d-flex align-items-center justify-content-between gap-3 flex-wrap mb-4 fw-medium text-dark">Discount <span class="line"></span> <a href="#" class="btn btn-sm btn-outline-light d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#calculator"><i class="icon-plus me-1"></i>Add</a> </div>
                                        <div class="d-flex align-items-center justify-content-between gap-3 flex-wrap mb-4 fw-medium text-dark">Tips <span class="line"></span><a href="#" class="btn btn-sm btn-outline-light d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_tips_calci"><i class="icon-plus me-1"></i>Add</a> </div>
                                        <div class="d-flex align-items-center justify-content-between gap-3 flex-wrap mb-4 fw-medium text-dark">Coupon <span class="line"></span><a href="#" class="btn btn-sm btn-outline-light d-flex align-items-center"><i class="icon-plus me-1"></i>Add</a> </div>
                                        <div class="mb-4 text-center p-4 border rounded d-flex align-items-center justify-content-center flex-column gap-2">
                                            <img src="@/assets/img/icons/mobile-phone.svg" alt="Mobile" class="img-fluid d-block custom-line-img-two">
                                            Tap or Swipe your card to pay
                                        </div>
                                        <div>
                                            <label class="form-label fw-semibold">Note</label>
                                            <textarea rows="4" class="form-control"></textarea>
                                        </div>
                                    </div>
                                    <!-- Item 3 -->
                                    <div class="tab-pane" id="order-tab8">
                                        <div class="d-flex align-items-center justify-content-between gap-3 flex-wrap mb-4 fw-medium text-dark">Discount <span class="line"></span> <a href="#" class="btn btn-sm btn-outline-light d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#calculator"><i class="icon-plus me-1"></i>Add</a> </div>
                                        <div class="d-flex align-items-center justify-content-between gap-3 flex-wrap mb-4 fw-medium text-dark">Tips <span class="line"></span><a href="#" class="btn btn-sm btn-outline-light d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_tips_calci"><i class="icon-plus me-1"></i>Add</a> </div>
                                        <div class="d-flex align-items-center justify-content-between gap-3 flex-wrap mb-4 fw-medium text-dark">Coupon <span class="line"></span><a href="#" class="btn btn-sm btn-outline-light d-flex align-items-center"><i class="icon-plus me-1"></i>Add</a> </div>
                                        <div class="mb-4 text-center p-4 border rounded d-flex align-items-center justify-content-center flex-column gap-2">
                                            <img src="@/assets/img/icons/qr-img.svg" alt="Mobile" class="img-fluid d-block custom-line-img-two">
                                            Scan with your UPI app to pay
                                        </div>
                                        <div>
                                            <label class="form-label fw-semibold">Note</label>
                                            <textarea rows="4" class="form-control"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end row -->
                </div>

                <div class="modal-footer d-flex align-items-center justify-content-end flex-nowrap gap-2">
                    <button type="button" class="btn btn-light m-0" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary m-0">Pay & Complete Order</button>
                </div>
            </div>
        </div>
    </div>

    <!-- start offcanvas -->
    <div class="offcanvas offcanvas-offset offcanvas-end" tabindex="-1"  id="view_details">
        <div class="offcanvas-header d-block border-bottom">
            <div class="d-flex align-items-center justify-content-between">
            <h4 class="title mb-0">Order : #22154</h4>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i class="icon-x"></i></button></div>
        </div>
        <div class="offcanvas-body">

            <!-- Item 1 -->
            <div class="card">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">
                        <h6 class="mb-0">Order Status</h6>
                        <h6 class="mb-0 fw-semibold d-flex align-items-center gap-1"><i class="icon-clock fs-14"></i> 06:24 PM</h6>
                    </div>
                    <div class="orders-list-two">
                        <!-- start row -->
                        <div class="row g-3">
                            <div class="col-sm-4">
                                <div class="status-item text-center">
                                    <div class="avatar bg-primary rounded-circle mb-2">
                                        <i class="icon-check"></i>
                                    </div>
                                    <p class="mb-0">Accepted</p>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="status-item text-center">
                                    <div class="avatar bg-warning rounded-circle mb-2">
                                        <i class="icon-cooking-pot"></i>
                                    </div>
                                    <p class="mb-0">In Kitchen</p>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="status-item text-center">
                                    <div class="avatar bg-light rounded-circle mb-2 text-dark">
                                        <i class="icon-flag"></i>
                                    </div>
                                    <p class="mb-0">Completed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Item 2 -->
            <div class="mb-4 pb-4 border-bottom">
                <h5 class="mb-3 fs-16">Order Info</h5>
                <h6 class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-3 text-body">Date & Time <span class="fw-medium text-dark">25/11/2025 - 08:45 PM</span> </h6>
                <h6 class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-3 text-body"> Order No <span class="fw-medium text-dark"> #54654</span> </h6>
                <h6 class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-3 text-body"> Token No <span class="fw-medium text-dark"> 20</span> </h6>
                <h6 class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-3 text-body"> No of Items <span class="fw-medium text-dark"> 4</span> </h6>
                <h6 class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-0 text-body"> Order Type<span class="fw-medium text-dark"> Dine In (TabIe 4) </span> </h6>
            </div>

            <!-- Item 3 -->
            <div class="mb-4 pb-4 border-bottom orders-list-three">
                <h5 class="mb-3 fs-16">Items</h5>
                <div class="status-item mb-4 d-flex align-items-center justify-content-start gap-2">
                    <div class="avatar bg-success rounded-circle flex-shrink-0">
                        <i class="icon-flag"></i>
                    </div>
                    <div>
                        <p class="d-flex align-items-center gap-2 mb-2 text-dark fw-medium">Margherita Pizza <span>x1</span></p>
                        <div class="bg-light rounded py-1 px-2">
                            <p class="mb-0 fw-medium d-flex align-items-center text-dark"> <i class="icon-badge-info me-1"></i> Notes : Extra Spicy,  With extra Pepperoni</p>
                        </div>
                    </div>
                </div>

                <div class="status-item mb-4 d-flex align-items-center justify-content-start gap-2">
                    <div class="avatar bg-warning rounded-circle flex-shrink-0">
                        <i class="icon-cooking-pot"></i>
                    </div>
                    <p class="d-flex align-items-center gap-2 mb-0 text-dark fw-medium">Pasta Primavera <span>x1</span></p>
                </div>

                <div class="status-item d-flex align-items-center justify-content-start gap-2">
                    <div class="avatar bg-warning rounded-circle flex-shrink-0">
                        <i class="icon-cooking-pot"></i>
                    </div>
                    <p class="d-flex align-items-center gap-2 mb-0 text-dark fw-medium">Chocolate Lava Cake <span>x2</span></p>
                </div>
            </div>

            <!-- Item 4 -->
            <div class="mb-4 pb-4 border-bottom">
                <h6 class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-3">Sub Total<span class="fw-medium text-dark">$267</span> </h6>
                <h6 class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-3"> Tax (10%)<span class="fw-medium text-dark"> $268</span> </h6>
                <h6 class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-0"> Service Charge <span class="fw-medium text-dark"> $15</span> </h6>
            </div>
            <h5 class="mb-0 d-flex align-items-center justify-content-between">Total <span>$274</span></h5>

        </div>
    </div>
    <!-- End Wrapper -->

    <!-- Start Modal  -->
    <div class="modal fade" id="delete_modal">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">
                <div class="modal-body text-center p-4">
                    <div class="mb-4">
                        <span class="avatar avatar-xxl rounded-circle bg-danger-subtle">
                            <img src="@/assets/img/icons/trash-icon.svg" alt="trash" class="img-fluid w-auto h-auto">
                        </span>
                    </div>
                    <h4 class="mb-1">Delete Confirmation</h4>
                    <p class="mb-4">Are you sure you want to delete?</p>
                    <div class="d-flex justify-content-between gap-2">
                        <a href="#" class="btn btn-light w-100" data-bs-dismiss="modal">Close</a>
                        <router-link to="/main-menu/orders" class="btn btn-danger w-100">Delete</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Modal  --> 

    <!-- Calculator -->
    <div class="modal fade pos-modal calci" id="calculator" tabindex="-1"  aria-hidden="true">
        <div class="modal-dialog modal-md modal-dialog-centered" role="document">
            <div class="modal-content">
                    <div class="modal-header border-0">
                    <h4 class="modal-title">Add Discount</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <div class="modal-body py-0">
                    <div class="calculator-wrap" @keydown="handleKey">
                        <div>						
                            <div>
                                <label class="form-label">Amount<span class="text-danger"> *</span></label>
                                <input class="input form-control" type="text" v-model="input" placeholder="Amount or %" readonly>
                            </div>
                        </div>
                        <div class="calculator-body d-flex justify-content-between">
                            <div class="text-center">
                                <button class="btn btn-clear" @click="clr()">C</button>
                                <button class="btn btn-number" @click="dis('7')">7</button>
                                <button class="btn btn-number" @click="dis('4')">4</button>
                                <button class="btn btn-number" @click="dis('1')">1</button>
                                <button class="btn btn-number" @click="dis(',')">,</button>
                            </div>
                            <div class="text-center">
                                <button class="btn btn-expression" @click="dis('/')">÷</button>
                                <button class="btn btn-number" @click="dis('8')">8</button>
                                <button class="btn btn-number" @click="dis('5')">5</button>
                                <button class="btn btn-number" @click="dis('2')">2</button>
                                <button class="btn btn-number" @click="dis('00')">00</button>									
                            </div>
                            <div class="text-center">
                                <button class="btn btn-expression" @click="dis('%')">%</button>
                                <button class="btn btn-number" @click="dis('9')">9</button>
                                <button class="btn btn-number" @click="dis('6')">6</button>
                                <button class="btn btn-number" @click="dis('3')">3</button>
                                <button class="btn btn-number" @click="dis('.')">.</button>									
                            </div>
                            <div class="text-center">
                                <button class="btn btn-clear" @click="back()"><i class="icon-arrow-left"></i></button>
                                <button class="btn btn-expression" @click="dis('*')">x</button>
                                <button class="btn btn-expression" @click="dis('-')">-</button>
                                <button class="btn btn-expression" @click="dis('+')">+</button>
                                <button class="btn btn-clear" @click="solve()">=</button>									
                            </div>
                        </div>							
                    </div>
                </div>
                <div class="modal-footer d-flex align-items-center justify-content-between flex-nowrap gap-2">
                    <button type="button" class="btn btn-light w-100 m-0" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary w-100 m-0">Submit</button>
                </div>
            </div>
        </div>
    </div>
    <!-- /Calculator -->
</template>

<script>
export default {
    data() {
        return {
        input: ""
        };
    },

    methods: {
        handleKey(event) {
            if (/[0-9+\-*/%.]/.test(event.key)) {
                this.input += event.key;
            } else if (event.key === "Backspace" || event.key === "Delete") {
                this.back();
            } else if (event.key === "Enter") {
                this.solve();
            } else if (event.key === "c") {
                this.clr();
            }
        },

        solve() {
            try {
                this.input = new Function("return " + this.input)();
            } catch (e) {
                this.input = "Error";
            }
        },

        clr() {
            this.input = "";
        },

        back() {
            this.input = this.input.slice(0, -1);
        },

        dis(val) {
            this.input += val;
        }
    },

    mounted() {
        // enable keyboard input
        window.addEventListener("keydown", this.handleKey);
    },

    beforeUnmount() {
        window.removeEventListener("keydown", this.handleKey);
    }
};
</script>
