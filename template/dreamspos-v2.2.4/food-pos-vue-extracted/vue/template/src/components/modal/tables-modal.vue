<template>
    <!-- Add Category -->
    <div class="modal fade" id="add_table">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 p-4 pb-3">
                    <h4 class="modal-title">Add Table</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form action="#">                             
                    <div class="modal-body p-4 pt-1">  
                        <div class="mb-3">
                            <label class="form-label">Table Name<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Floor<span class="text-danger"> *</span></label>
                            <vue-select 
                                :options="Floor"
                                v-model="selected"
                                placeholder="Select"
                            />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Table Size<span class="text-danger"> *</span></label>
                            <vue-select 
                                :options="TableSize"
                                v-model="selectedOne"
                                placeholder="Select"
                            />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">No of Guests<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Status<span class="text-danger"> *</span></label>
                            <vue-select 
                                :options="Status"
                                v-model="selectedTwo"
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
    <div class="modal fade" id="edit_table">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 p-4 pb-3">
                    <h4 class="modal-title">Edit Table</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form action="#">                             
                    <div class="modal-body p-4 pt-1">  
                        <div class="mb-3">
                            <label class="form-label">Table Name<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" value="Table 1">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Floor<span class="text-danger"> *</span></label>
                            <vue-select 
                                :options="Floor"
                                v-model="selectedThree"
                                placeholder="Select"
                            />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Table Size<span class="text-danger"> *</span></label>
                            <vue-select 
                                :options="TableSize"
                                v-model="selectedFour"
                                placeholder="Select"
                            />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">No of Guests<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" value="6">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Status<span class="text-danger"> *</span></label>
                            <vue-select 
                                :options="Status"
                                v-model="selectedFive"
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
                        <a href="#" class="btn btn-danger w-100">Delete</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Modal  -->     
    
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
                    <label class="form-label">Category<span class="text-danger"> *</span></label>
                    <div class="dropdown">
                        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between" data-bs-toggle="dropdown" data-bs-auto-close="outside">
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
                                        <input class="form-check-input m-0 me-2" type="checkbox">Sea Food
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Pizza
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Salads
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Tacos
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Burgers
                                    </label>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-label">Status<span class="text-danger"> *</span></label>
                    <vue-select 
                        :options="StatusOne"
                        v-model="selectedSix"
                        placeholder="Select"
                    />
                </div>
            </div>
            <div class="d-flex align-items-center gap-2 mt-auto">
                <a href="#" class="btn btn-light w-100">Reset</a>
                <a href="#" class="btn btn-primary w-100">Apply</a>
            </div>
        </div>
    </div>
    <!-- End Filter -->
</template>

<script>
export default {
    data() {
        return {
            selected: [],
            selectedOne: [],
            selectedTwo: [],
            selectedThree: "1st",
            selectedFour: "Table 1",
            selectedFive: "Available",
            selectedSix: [],
            Floor: [
                { label: "Select", value: "Select" },
                { label: "1st", value: "1st" },
                { label: "2nd", value: "2nd" },
                { label: "3rd", value: "3rd" },
            ],
            TableSize: [
                { label: "Select", value: "Select" },
                { label: "Table 1", value: "Table 1" },
                { label: "Table 2", value: "Table 2" },
                { label: "Table 3", value: "Table 3" },
                { label: "Table 4", value: "Table 4" },
                { label: "Table 5", value: "Table 5" },
                { label: "Table 6", value: "Table 6" },
            ],
            Status: [
                { label: "Select", value: "Select" },
                { label: "Available", value: "Available" },
                { label: "Booked", value: "Booked" },
            ],
            StatusOne: [
                { label: "Select", value: "Select" },
                { label: "Active", value: "Active" },
                { label: "Inactive", value: "Inactive" },
            ],
        }
    }
}
</script>