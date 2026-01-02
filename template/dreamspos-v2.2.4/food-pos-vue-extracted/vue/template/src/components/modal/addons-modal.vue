<template>
    <!-- Add Addon -->
    <div class="modal fade" id="add_modifier">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 p-4 pb-3">
                    <h4 class="modal-title">Add Addon</h4>
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
                            <label class="form-label">Item<span class="text-danger"> *</span></label>
                            <vue-select 
                                :options="Item"
                                v-model="selected"
                                placeholder="Select"
                            />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Addon<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Price<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Description<span class="text-danger"> *</span></label>
                            <textarea rows="4" class="form-control"></textarea>
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
    <!-- Add Addon End -->

    <!-- Edit Addon -->
    <div class="modal fade" id="edit_modifier">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 p-4 pb-3">
                    <h4 class="modal-title">Edit Addon</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form action="#">                             
                    <div class="modal-body p-4 pt-1">             
                        <div class="mb-3 d-flex align-items-center flex-wrap gap-3">
                            <div class="avatar avatar-3xl border bg-light">
                                <img src="@/assets/img/items/food-02.jpg" alt="addon" class="img-fluid">
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
                            <label class="form-label">Item<span class="text-danger"> *</span></label>
                            <vue-select 
                                :options="Item"
                                v-model="selectedOne"
                                placeholder="Select"
                            />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Addon<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" value="Extra Cheese">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Price<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" value="$10">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Description<span class="text-danger"> *</span></label>
                            <textarea rows="4" class="form-control">Extra cheese for your pizza.</textarea>
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
    <!-- Edit Addon End -->

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
                    <label class="form-label">Item<span class="text-danger"> *</span></label>
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
                                        <input class="form-check-input m-0 me-2" type="checkbox">Pizza
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Sea Food
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Salad
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Sauce
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Topping
                                    </label>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-label">Addon<span class="text-danger"> *</span></label>
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
                                        <input class="form-check-input m-0 me-2" type="checkbox">Extra Cheese
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Grilled Shrimp
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Avocado Slices
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Spicy Mayo
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Crispy Bacon Bits
                                    </label>
                                </div>
                            </div>  
                        </div>
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
export default {
    data(){
        return {
            selected: [],
            selectedOne: "Pizza",
            Item: [
                { label: "Select", value: "Select" },
                { label: "Pizza", value: "Pizza" },
                { label: "Sea Food", value: "Sea Food" },
                { label: "Salad", value: "Salad" },
                { label: "Sauce", value: "Sauce" },
                { label: "Topping", value: "Topping" },

            ]
        }
    }
}
</script>