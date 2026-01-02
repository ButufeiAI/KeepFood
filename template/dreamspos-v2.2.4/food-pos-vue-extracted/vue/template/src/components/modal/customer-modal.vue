<template>
    <!-- Add Category -->
    <div class="modal fade" id="add_customer">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 p-4 pb-3">
                    <h4 class="modal-title">Add Customer</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form action="#">                             
                    <div class="modal-body p-4 pt-1">             
                        <div class="mb-3 d-flex align-items-center flex-wrap gap-3">
                            <div class="avatar avatar-3xl border bg-light">
                                <i class="icon-images fs-28 text-dark"></i>
                            </div>
                            <div>
                                <label class="form-label">Customer Image<span class="text-danger"> *</span></label>
                                <p class="fs-13 mb-3">Image should be with in 5 MB</p>
                                <div class="d-flex align-items-center">
                                    <div class="btn btn-icon btn-sm btn-white rounded-circle position-relative me-2">
                                        <input type="file" class="form-control position-absolute w-100 h-100 top-0 start-0 opacity-0">
                                        <i class="icon-upload"></i>
                                    </div>
                                    <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle text-danger"><i class="icon-trash-2 text-danger"></i></a>
                                </div>
                            </div>                                        
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Customer Name<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Phone<span class="text-danger"> *</span></label>
                            <input type="number" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Email<span class="text-danger"> *</span></label>
                            <input type="mail" class="form-control">
                        </div>
                        <div class="row algin-items-center justify-content-center">
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label class="form-label">Date Of Birth</label>
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
                                    <label class="form-label">Gender</label>
                                    <vue-select 
                                        :options="Gender"
                                        v-model="selected"
                                        placeholder="Select"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Status</label>
                            <vue-select 
                                :options="Status"
                                v-model="selectedOne"
                                placeholder="Select"
                            />
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
    <!-- Add Category End -->

    <!-- Edit Category -->
    <div class="modal fade" id="edit_customer">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 p-4 pb-3">
                    <h4 class="modal-title">Edit Customer</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form action="#">                             
                    <div class="modal-body p-4 pt-1">             
                        <div class="mb-3 d-flex align-items-center flex-wrap gap-3">
                            <div class="avatar avatar-3xl avatar-rounded border">
                                <img src="@/assets/img/profiles/avatar-32.jpg" alt="category" class="img-fluid">
                            </div>
                            <div>
                                <label class="form-label">Customer Image<span class="text-danger"> *</span></label>
                                <p class="fs-13 mb-3">Image should be with in 5 MB</p>
                                <div class="d-flex align-items-center">
                                    <div class="btn btn-icon btn-sm btn-white rounded-circle position-relative me-2">
                                        <input type="file" class="form-control position-absolute w-100 h-100 top-0 start-0 opacity-0">
                                        <i class="icon-pencil-line"></i>
                                    </div>
                                    <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle text-danger"><i class="icon-trash-2"></i></a>
                                </div>
                            </div>                                        
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Customer Name<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" value="Adrian James">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Phone<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" value="+1 56985 65895">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Email<span class="text-danger"> *</span></label>
                            <input type="mail" class="form-control" value="adrian@example.com">
                        </div>
                        <div class="row algin-items-center justify-content-center">
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label class="form-label">Date Of Birth</label>
                                    <div class="input-group w-auto input-group-flat">
                                        <a-date-picker  v-model="valueTwo"  class="form-control" placeholder="25/12/2025" />
                                        <span class="input-group-text">
                                            <i class="icon-calendar-fold"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label class="form-label">Gender</label>
                                    <vue-select 
                                        :options="Gender"
                                        v-model="selectedTwo"
                                        placeholder="Select"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Status</label>
                            <vue-select 
                                :options="Status"
                                v-model="selectedThree"
                                placeholder="Select"
                            />
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
    <!-- Edit Category End -->

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
                    <div class="d-flex justify-content-center gap-2">
                        <a href="javascript:void(0);" class="btn btn-light w-100" data-bs-dismiss="modal">Close</a>
                        <router-link to="/operations/customer" class="btn btn-danger w-100">Delete</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Modal  -->   
     
    <!-- Customer Details -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="view_details">
        <div class="offcanvas-header d-flex align-items-center justify-content-between border-bottom">
            <h4 class="offcanvas-title mb-0">Customer Details</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" aria-label="Close"><i class="icon-x"></i></button>
        </div>
        <form action="#" class="d-flex flex-column overflow-y-auto h-100">
            <div class="offcanvas-body p-0">
                <div class="border-bottom p-4">
                <div class="mb-4 d-flex align-items-center justify-content-between gap-3">
                    <div class="d-flex align-items-center">
                        <span class="avatar avatar-xxl border me-3 flex-shrink-0">
                            <img src="@/assets/img/profiles/avatar-09.jpg" alt="customer" class="img-fluid">
                        </span>
                        <div>
                            <h6 class="fs-14 fw-semibold mb-0">David Belcher</h6>
                            <p class="fs-13 mb-0">Last Login : 25 Jan 2025</p>
                        </div>  
                    </div>     
                    <span class="badge badge-soft-success">Active</span>                                 
                </div>
                <div>
                    <div class="d-sm-flex align-items-center justify-content-between gap-2 flex-wrap mb-3">
                        <span class="d-flex align-items-center"><i class="icon-mail text-dark me-1"></i>Email</span>
                        <span class="text-dark">david@example.com</span>
                    </div>
                    <div class="d-sm-flex align-items-center justify-content-between gap-2 flex-wrap mb-3">
                        <span class="d-flex align-items-center"><i class="icon-phone text-dark me-1"></i>Phone</span>
                        <span class="text-dark">+1 14524 54595</span>
                    </div>
                    <div class="d-sm-flex align-items-center justify-content-between gap-2 flex-wrap mb-3">
                        <span class="d-flex align-items-center"><i class="icon-map-pin-check-inside text-dark me-1"></i>Address</span>
                        <span class="text-wrap-1 text-dark">301 Market Street, Riverside Drive, FL 33128, USA</span>
                    </div>
                    <div class="d-sm-flex align-items-center justify-content-between gap-2 flex-wrap">
                        <span class="d-flex align-items-center"><i class="icon-user text-dark me-1"></i>Gender</span>
                        <span class="text-dark">Male</span>
                    </div>
                </div>
                </div>
                <div class="p-4">
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <h5>Orders</h5>
                        <span class="badge bg-light text-dark fw-semibold">Orders : 02</span>
                    </div>
                    <div class="border p-3 rounded mb-3">
                        <div class="row align-items-center border-bottom flex-wrap g-3 pb-3 mb-3">
                            <div class="col-sm-4">
                                <h6 class="fs-14 fw-semibold mb-1">#56998</h6>
                                <span>15 Sep 2025</span>
                            </div>
                            <div class="col-sm-4">
                                <p class="mb-1">Order total</p>
                                <span class="text-dark fw-medium">$350</span>
                            </div>
                            <div class="col-sm-4 text-sm-end">
                                <span class="badge badge-soft-orange">Pending</span>
                            </div>
                        </div>
                        <div class="row g-3">
                            <div class="col-sm-4">
                                <p class="mb-1">Order Type</p>
                                <span class="text-dark fw-medium">Dine-In (T4)</span>
                            </div>
                            <div class="col-sm-4">
                                <p class="mb-1">No of Guests</p>
                                <span class="text-dark fw-medium">4</span>
                            </div>
                            <div class="col-sm-4">
                                <p class="mb-1">No of Items</p>
                                <span class="text-dark fw-medium">8</span>
                            </div>
                        </div>
                    </div>
                    <div class="border p-3 rounded">
                        <div class="row align-items-center border-bottom flex-wrap g-3 pb-3 mb-3">
                            <div class="col-sm-4">
                                <h6 class="fs-14 fw-semibold mb-1">#25654</h6>
                                <span>21 Sep 2025</span>
                            </div>
                            <div class="col-sm-4">
                                <p class="mb-1">Order total</p>
                                <span class="text-dark fw-medium">$620</span>
                            </div>
                            <div class="col-sm-4 text-sm-end">
                                <span class="badge badge-soft-success">Completed</span>
                            </div>
                        </div>
                        <div class="row g-3">
                            <div class="col-sm-4">
                                <p class="mb-1">Order Type</p>
                                <span class="text-dark fw-medium">Take Away</span>
                            </div>
                            <div class="col-sm-4">
                                <p class="mb-1">No of Guests</p>
                                <span class="text-dark fw-medium">8</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="offcanvas-footer d-flex align-items-center gap-2 pt-2 border-0">
                <button type="button" class="btn btn-dark d-flex align-items-center w-100" data-bs-toggle="modal" data-bs-target="#edit_customer"><i class="icon-pencil-line me-1"></i>Edit Customer</button>
            </div>            
        </form>
    </div>
    <!-- End Customer Details -->
    
</template>

<script>
import { ref } from "vue";
const valueOne = ref();
const valueTwo = ref();

export default {
    data() {
        return {
            valueOne,
            valueTwo,
            selected: [],
            selectedOne: [],
            selectedTwo: "Male",
            selectedThree: "Active",
            Gender: [
                { label: "Select", value: "Select" },
                { label: "Male", value: "Male" },
                { label: "Female", value: "Female" },
            ],
            Status: [
                { label: "Select", value: "Select" },
                { label: "Active", value: "Active" },
                { label: "Disabled", value: "Disabled" },
            ],
        }
    }
}
</script>