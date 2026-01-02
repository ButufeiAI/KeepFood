<template>
    <!-- Show Coupons -->
    <div class="modal fade" id="show_coupon">
        <div class="modal-dialog modal-dialog-centered modal-md">
            <div class="modal-content">
                <div class="modal-header border-0 p-4 pb-3">
                    <h4 class="modal-title">Coupon Code</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form action="#">                             
                    <div class="modal-body p-4 pt-1">             
                        <div class="p-4 bg-light border rounded border-dashed d-flex align-items-center justify-content-between mb-3">
                            <h6 class="mb-0" id="copytext">SEAFOOD10</h6>
                            <span class="copytoclipboard" data-bs-toggle="tooltip" data-bs-placement="top" title="Copy to Clipboard" @click="copyText"><i class="icon-copy fw-semibold "></i></span>
                        </div>
                        <div class="d-flex align-items-center justify-content-between gap-2 pt-1">
                            <button type="button" class="btn btn-light w-100" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </form>     
            </div>
        </div>
    </div>
    <!-- Show Coupons End -->

    <!-- Add Coupon -->
    <div class="modal fade" id="add_coupon">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 p-4 pb-3">
                    <h4 class="modal-title">Add Coupon</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form action="#">                             
                    <div class="modal-body p-4 pt-1">    
                        <div class="mb-3">
                            <label class="form-label">Coupon Code<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Valid Category<span class="text-danger"> *</span></label>
                            <vue-select 
                                :options="Category"
                                v-model="selected"
                                placeholder="Select"
                            />
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label class="form-label">Discount Type<span class="text-danger"> *</span></label>
                                    <vue-select 
                                        :options="Discount"
                                        v-model="selectedOne"
                                        placeholder="Select"
                                    />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label class="form-label">Discount Amount<span class="text-danger"> *</span></label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label class="form-label">Start Date<span class="text-danger ms-1">*</span></label>
                                    <div class="input-group w-auto input-group-flat">
                                        <a-date-picker  v-model="valueOne"  class="form-control" placeholder="dd/mm/yyyy" />
                                        <span class="input-group-text">
                                            <i class="icon-calendar-fold"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label class="form-label">Expiry Date<span class="text-danger ms-1">*</span></label>
                                    <div class="input-group w-auto input-group-flat">
                                        <a-date-picker  v-model="valueTwo"  class="form-control" placeholder="dd/mm/yyyy" />
                                        <span class="input-group-text">
                                            <i class="icon-calendar-fold"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="d-flex align-items-center justify-content-between gap-2 pt-1">
                            <button type="button" class="btn btn-light w-100" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary w-100">Save</button>
                        </div>
                    </div>
                </form>     
            </div>
        </div>
    </div>
    <!-- Add coupons End -->

    <!-- Edit coupons -->
    <div class="modal fade" id="edit_coupon">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 p-4 pb-3">
                    <h4 class="modal-title">Edit Coupon</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form action="#">                             
                    <div class="modal-body p-4 pt-1">    
                        <div class="mb-3">
                            <label class="form-label">Coupon Code<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" value="SEAFOOD10">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Valid Category<span class="text-danger"> *</span></label>
                            <vue-select 
                                :options="Category"
                                v-model="selectedTwo"
                                placeholder="Select"
                            />
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label class="form-label">Discount Type<span class="text-danger"> *</span></label>
                                    <vue-select 
                                        :options="Discount"
                                        v-model="selectedThree"
                                        placeholder="Select"
                                    />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label class="form-label">Discount Amount<span class="text-danger"> *</span></label>
                                    <input type="text" class="form-control" value="10%">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label class="form-label">Start Date<span class="text-danger ms-1">*</span></label>
                                    <div class="input-group w-auto input-group-flat">
                                        <a-date-picker  v-model="valueThree" class="form-control" placeholder="01 Jan 2025" />
                                        <span class="input-group-text">
                                            <i class="icon-calendar-fold"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label class="form-label">Expiry Date<span class="text-danger ms-1">*</span></label>
                                    <div class="input-group w-auto input-group-flat">
                                        <a-date-picker  v-model="valueFour" class="form-control" placeholder="31 Jan 2025" />
                                        <span class="input-group-text">
                                            <i class="icon-calendar-fold"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="d-flex align-items-center justify-content-between gap-2 pt-1">
                            <button type="button" class="btn btn-light w-100" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary w-100">Save</button>
                        </div>
                    </div>
                </form>     
            </div>
        </div>
    </div>
    <!-- Edit coupons End --> 

    <!-- Start Filter -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="filter-offcanvas">
        <div class="offcanvas-header pb-0">
            <div class="border-bottom d-flex align-items-center justify-content-between w-100 pb-3">
                <h4 class="offcanvas-title mb-0">Filter</h4>
                <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" aria-label="Close"><i class="icon-x"></i></button>
            </div>
        </div>
        <div class="offcanvas-body d-flex flex-column pt-3">
            <div>
                <div class="mb-3">
                    <label class="form-label">Discount Type<span class="text-danger"> *</span></label>
                    <div class="dropdown">
                        <a href="#" class="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                            Select
                        </a>
                        <div class="dropdown-menu dropdown-menu-end p-3 w-100">
                            <h6 class="fs-14 fw-semibold mb-3">Category</h6>
                            <div class="input-icon-end input-icon position-relative mb-3">
                                <span class="input-icon-addon">
                                    <i class="icon-search text-dark"></i>
                                </span>
                                <input type="text" class="form-control form-control-md" placeholder="Search">
                            </div>  
                            <div class="vstack gap-2">
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Percentage
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Fixed Amount
                                    </label>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-label">Valid Category<span class="text-danger"> *</span></label>
                    <div class="dropdown">
                        <a href="#" class="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                            Select
                        </a>
                        <div class="dropdown-menu dropdown-menu-end p-3 w-100">
                            <h6 class="fs-14 fw-semibold mb-3">Category</h6>
                            <div class="input-icon-end input-icon position-relative mb-3">
                                <span class="input-icon-addon">
                                    <i class="icon-search text-dark"></i>
                                </span>
                                <input type="text" class="form-control form-control-md" placeholder="Search">
                            </div>  
                            <div class="vstack gap-2">
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Sea Foods
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Pizza Orders
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Salads
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">All Categories
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Combo Meals
                                    </label>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-label">Date Range<span class="text-danger"> *</span></label>
                    <div class="input-icon input-icon-start position-relative">
                        <input type="text" class="form-control ps-2" ref="dateRangeInput" />
                        <span class="input-icon-addon text-dark">
                            <i class="icon-calendar-fold text-gray-5 fs-14 text-end"></i>
                        </span>
                    </div>
                </div>
                <div class="mb-0">
                    <label class="form-label">Status<span class="text-danger"> *</span></label>
                    <div class="dropdown">
                        <a href="#" class="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                            Select
                        </a>
                        <div class="dropdown-menu dropdown-menu-end p-3 w-100">
                            <h6 class="fs-14 fw-semibold mb-3">Category</h6>
                            <div class="input-icon-end input-icon position-relative mb-3">
                                <span class="input-icon-addon">
                                    <i class="icon-search text-dark"></i>
                                </span>
                                <input type="text" class="form-control form-control-md" placeholder="Search">
                            </div>  
                            <div class="vstack gap-2">
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Active
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Expired
                                    </label>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex align-items-center gap-2 mt-auto offcanvas-footer border-0">
                <a href="#" class="btn btn-light w-100">Reset</a>
                <a href="#" class="btn btn-primary w-100">Apply</a>
            </div>
            
        </div>
    </div>
    <!-- End Filter -->
</template>

<script>
import { ref } from "vue";
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";

const valueOne = ref();
const valueTwo = ref();
const valueThree = ref();
const valueFour = ref();

export default {
    data(){
        return {
            valueOne,
            valueTwo,
            valueThree,
            valueFour,
            selected: [],
            selectedOne: [],
            selectedTwo: "Pizza",
            selectedThree: "Percentage",
            Category: [
                { label: "Select", value: "Select" },
                { label: "Pizza", value: "Pizza" },
                { label: "Sea Food", value: "Sea Food" },
                { label: "Salad", value: "Salad" },
                { label: "Sauce", value: "Sauce" },
                { label: "Topping", value: "Topping" },
            ],
            Discount: [
                { label: "Select", value: "Select" },
                { label: "Percentage", value: "Percentage" },
                { label: "Fixed Amount", value: "Fixed Amount" },
            ]
        }
    },
    methods: {
        copyText() {
            const text = document.getElementById("copytext").innerText;

            navigator.clipboard.writeText(text)
            .then(() => alert("Copied to clipboard!"))
            .catch(err => console.error("Failed to copy:", err));
        }
    },
    setup() {
        const dateRangeInput = ref(null);

        // Move the function declaration outside of the onMounted callback
        function booking_range(start, end) {
            return start.format("M/D/YYYY") + " - " + end.format("M/D/YYYY");
        }

        onMounted(() => {
            if (dateRangeInput.value) {
                const start = moment().subtract(6, "days");
                const end = moment();

                new DateRangePicker(
                dateRangeInput.value,
                    {
                        startDate: start,
                        endDate: end,
                        ranges: {
                        Today: [moment(), moment()],
                        Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
                        "Last 7 Days": [moment().subtract(6, "days"), moment()],
                        "Last 30 Days": [moment().subtract(29, "days"), moment()],
                        "This Month": [moment().startOf("month"), moment().endOf("month")],
                        "Last Month": [
                            moment().subtract(1, "month").startOf("month"),
                            moment().subtract(1, "month").endOf("month"),
                        ],
                        },
                    },
                    booking_range
                );

                booking_range(start, end);
            }
        });
        
        return {
            dateRangeInput,
        };
    },
}
</script>