<template>
    <!-- Add Category -->
    <div class="modal fade" id="add_category">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 p-4 pb-3">
                    <h4 class="modal-title">Add Category</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form action="#">                             
                    <div class="modal-body p-4 pt-1">             
                        <div class="mb-3 d-flex align-items-center flex-wrap gap-3">
                            <div class="avatar avatar-3xl border bg-light">
                                <i class="icon-images fs-28 text-dark"></i>
                            </div>
                            <div>
                                <label class="form-label">Category Image<span class="text-danger"> *</span></label>
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
                        <div class="mb-3">
                            <label class="form-label">Category Name<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="d-flex align-items-center justify-content-between gap-2 pt-1">
                            <button type="button" class="btn btn-light w-100" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary w-100" data-bs-dismiss="modal">Save</button>
                        </div>
                    </div>
                </form>     
            </div>
        </div>
    </div>
    <!-- Add Category End -->

    <!-- Edit Category -->
    <div class="modal fade" id="edit_category">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 p-4 pb-3">
                    <h4 class="modal-title">Edit Category</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form action="#">                             
                    <div class="modal-body p-4 pt-1">             
                        <div class="mb-3 d-flex align-items-center flex-wrap gap-3">
                            <div class="avatar avatar-3xl avatar-rounded border">
                                <img src="@/assets/img/category/category-01.png" alt="category" class="img-fluid">
                            </div>
                            <div>
                                <label class="form-label">Category Image<span class="text-danger"> *</span></label>
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
                            <label class="form-label">Category Name<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" value="Sea Food">
                        </div>
                        <div class="d-flex align-items-center justify-content-between gap-2 pt-1">
                            <button type="button" class="btn btn-light w-100" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary w-100" data-bs-dismiss="modal">Save</button>
                        </div>
                    </div>
                </form>     
            </div>
        </div>
    </div>
    <!-- Edit Category End -->

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
                        :options="Status"
                        v-model="selected"
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
    data(){
        return {
            selected : [],
            Status: [
                { label: "Select", value: "Select" },
                { label: "Active", value: "Active" },
                { label: "Expired", value: "Expired" },
            ]
        }
    }
}
</script>