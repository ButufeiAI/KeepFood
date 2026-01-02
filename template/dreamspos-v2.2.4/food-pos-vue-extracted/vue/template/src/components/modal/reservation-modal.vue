<template>
    <!-- Add reservation modal -->
    <div class="modal fade" id="add_reservation">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <h4 class="modal-title">Add  Reservation</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <div class="modal-body"> 
                    <form action="#">
                        <div class="row g-4">
                            <div class="col-lg-12">
                                <div>
                                    <label class="form-label">Customer <span class="text-danger"> *</span></label>
                                    <div class="input-item d-flex align-items-center gap-2">
                                        <vue-select 
                                            :options="Customer"
                                            v-model="selected"
                                            placeholder="Select"
                                        />
                                        <button class="btn btn-primary btn-icon" data-bs-toggle="modal" data-bs-target="#add_customer"><i class="icon-plus"></i></button>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <label class="form-label">Date & Time <span class="text-danger ms-1">*</span></label>
                                <div class="input-group w-auto input-group-flat">
                                    <a-date-picker  v-model="valueOne"  class="form-control" placeholder="dd/mm/yyyy" />
                                    <span class="input-group-text">
                                        <i class="icon-calendar-fold"></i>
                                    </span>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <label class="form-label">Table <span class="text-danger"> *</span></label>
                                <vue-select 
                                    :options="Table"
                                    v-model="selectedOne"
                                    placeholder="Select"
                                />
                            </div>

                            <div class="col-lg-6">
                                <label class="form-label">No of Guests <span class="text-danger"> *</span></label>
                                <input type="number" class="form-control">
                            </div>

                            <div class="col-lg-6">
                                <label class="form-label">Status <span class="text-danger"> *</span></label>
                                <vue-select 
                                    :options="Status"
                                    v-model="selectedTwo"
                                    placeholder="Select"
                                />
                            </div>

                            <div class="col-lg-12">
                                <label class="form-label">Notes<span class="text-danger"> *</span></label>
                                <textarea rows="4" class="form-control"></textarea>
                            </div>
                        </div>
                    </form>
                </div>

                <div class="modal-footer d-flex align-items-center justify-content-between flex-nowrap gap-2">
                    <button type="button" class="btn btn-light w-100 m-0" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary w-100 m-0">Save Reservation</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Edit reservation modal -->
    <div class="modal fade" id="edit_reservation">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <h4 class="modal-title">Edit  Reservation</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <div class="modal-body"> 
                    <form action="#">
                        <div class="row g-4">
                            <div class="col-lg-12">
                                <div>
                                    <label class="form-label">Customer <span class="text-danger"> *</span></label>
                                    <vue-select 
                                        :options="Customer"
                                        v-model="selectedThree"
                                        placeholder="Select"
                                    />
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <label class="form-label">Date & Time <span class="text-danger ms-1">*</span></label>
                                <div class="input-group w-auto input-group-flat">
                                    <a-date-picker  v-model="valueTwo"  class="form-control" placeholder="10/05/2025" />
                                    <span class="input-group-text">
                                        <i class="icon-calendar-fold"></i>
                                    </span>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <label class="form-label">Table <span class="text-danger"> *</span></label>
                                <vue-select 
                                    :options="Table"
                                    v-model="selectedFour"
                                    placeholder="Select"
                                />
                            </div>

                            <div class="col-lg-6">
                                <label class="form-label">No of Guests <span class="text-danger"> *</span></label>
                                <input type="number" class="form-control" value="10">
                            </div>

                            <div class="col-lg-6">
                                <label class="form-label">Status <span class="text-danger"> *</span></label>
                                <vue-select 
                                    :options="Status"
                                    v-model="selectedFive"
                                    placeholder="Select"
                                />
                            </div>

                            <div class="col-lg-12">
                                <label class="form-label">Notes<span class="text-danger"> *</span></label>
                                <textarea rows="4" class="form-control"></textarea>
                            </div>
                        </div>
                    </form>
                </div>

                <div class="modal-footer d-flex align-items-center justify-content-between flex-nowrap gap-2">
                    <button type="button" class="btn btn-light w-100 m-0" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary w-100 m-0">Save Reservation</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Add Customer modal -->
    <div class="modal fade" id="add_customer">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <h4 class="modal-title">Add  Customer</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <div class="modal-body"> 
                    <form action="#">
                        <div class="row g-4">
                            <div class="col-lg-12">
                                <div>
                                    <label class="form-label">Customer Name <span class="text-danger"> *</span></label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div>
                                    <label class="form-label">Phone <span class="text-danger"> *</span></label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div>
                                    <label class="form-label">Email <span class="text-danger"> *</span></label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <label class="form-label">Date Of Birth<span class="text-danger ms-1">*</span></label>
                                <div class="input-group w-auto input-group-flat">
                                    <a-date-picker  v-model="valueThree"  class="form-control" placeholder="dd/mm/yyyy" />
                                    <span class="input-group-text">
                                        <i class="icon-calendar-fold"></i>
                                    </span>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <label class="form-label">Gender<span class="text-danger"> *</span></label>
                                <vue-select 
                                    :options="Gender"
                                    v-model="selectedSix"
                                    placeholder="Select"
                                />
                            </div>
                        </div>
                    </form>
                </div>

                <div class="modal-footer d-flex align-items-center justify-content-between flex-nowrap gap-2">
                    <button type="button" class="btn btn-light w-100 m-0" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary w-100 m-0">Save Customer</button>
                </div>
            </div>
        </div>
    </div>

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
                        <router-link to="/main-menu/reservations" class="btn btn-danger w-100">Delete</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Modal  --> 
</template>

<script>
import { ref } from "vue";
const valueOne = ref();
const valueTwo = ref();
const valueThree = ref();

export default {
    data() {
        return {
            valueOne,
            valueTwo,
            valueThree,
            selected: [],
            selectedOne: [],
            selectedTwo: [],
            selectedThree: "Adrian Hawk ( +1 66898 98985 )",
            selectedFour: "Ethan Sullivan",
            selectedFive: "Booked",
            selectedSix: [],
            Customer: [
                { label: "Select", value: "Select" },
                { label: "Adrian Hawk ( +1 66898 98985 )", value: "Adrian Hawk ( +1 66898 98985 )" },
                { label: "Adam Clark - +1 45474 21456", value: "Adam Clark - +1 45474 21456" },
                { label: "Create “Ad”", value: "Create “Ad”" },
            ],
            Table: [
                { label: "Select", value: "Select" },
                { label: "Ethan Sullivan", value: "Ethan Sullivan" },
                { label: "Matthew Collins", value: "Matthew Collins" },
                { label: "Olivia Reed", value: "Olivia Reed" },
            ],
            Status: [
                { label: "Select", value: "Select" },
                { label: "Booked", value: "Booked" },
                { label: "Cancelled", value: "Cancelled" },
                { label: "Paid", value: "Paid" },
            ],
            Gender: [
                { label: "Select", value: "Select" },
                { label: "Male", value: "Male" },
                { label: "Female", value: "Female" },
            ]
        }
    }
}
</script>