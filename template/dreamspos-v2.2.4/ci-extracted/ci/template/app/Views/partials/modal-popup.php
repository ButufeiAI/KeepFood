<?php
$link = $_SERVER[ 'PHP_SELF' ];
$link_array = explode( '/', $link );
$page = end( $link_array );
if ($page === '' || $page === 'index.php') $page = 'index';
?>

<?php if ($page == 'addons') {   ?>
    <!-- Add Addon -->
    <div class="modal fade" id="add_modifier">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 p-4 pb-3">
                    <h4 class="modal-title">Add Addon</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form action="<?php echo base_url('addons'); ?>">
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
                                        <i class="icon-pencil-line"></i>
                                    </div>
                                    <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle text-danger"><i class="icon-trash-2"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Item<span class="text-danger"> *</span></label>
                            <select class="select">
                                <option>Select</option>
                                <option>Pizza</option>
                                <option>Sea Food</option>
                                <option>Salad</option>
                                <option>Sauce</option>
                                <option>Topping</option>
                            </select>
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
                <form action="<?php echo base_url('addons'); ?>">
                    <div class="modal-body p-4 pt-1">
                        <div class="mb-3 d-flex align-items-center flex-wrap gap-3">
                            <div class="avatar avatar-3xl border bg-light">
                                <img src="<?php echo base_url('assets/img/items/food-02.jpg'); ?>" alt="addon" class="img-fluid">
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
                            <select class="select">
                                <option>Select</option>
                                <option selected>Pizza</option>
                                <option>Sea Food</option>
                                <option>Salad</option>
                                <option>Sauce</option>
                                <option>Topping</option>
                            </select>
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

    <!-- Start Modal  -->
    <div class="modal fade" id="delete_modal">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">
                <div class="modal-body text-center p-4">
                    <div class="mb-4">
                        <span class="avatar avatar-xxl rounded-circle bg-danger-subtle">
                            <img src="<?php echo base_url('assets/img/icons/trash-icon.svg'); ?>" alt="trash" class="img-fluid w-auto h-auto">
                        </span>
                    </div>
                    <h4 class="mb-1">Delete Confirmation</h4>
                    <p class="mb-4">Are you sure you want to delete?</p>
                    <div class="d-flex justify-content-center gap-2">
                        <a href="#" class="btn btn-light w-100" data-bs-dismiss="modal">Close</a>
                        <a href="<?php echo base_url('addons'); ?>" class="btn btn-danger w-100">Delete</a>
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

                <div class="d-flex align-items-center gap-2 mt-auto border-0">
                    <a href="#" class="btn btn-light w-100">Reset</a>
                    <a href="#" class="btn btn-primary w-100">Apply</a>
                </div>

        </div>
    </div>
    <!-- End Filter -->
<?php }?>

<?php if ($page == 'categories') {   ?>
    <!-- Add Category -->
    <div class="modal fade" id="add_category">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 p-4 pb-3">
                    <h4 class="modal-title">Add Category</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form action="<?php echo base_url('categories'); ?>">
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
                            <button type="submit" class="btn btn-primary w-100">Save</button>
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
                <form action="<?php echo base_url('categories'); ?>">
                    <div class="modal-body p-4 pt-1">
                        <div class="mb-3 d-flex align-items-center flex-wrap gap-3">
                            <div class="avatar avatar-3xl avatar-rounded border">
                                <img src="<?php echo base_url('assets/img/category/category-01.png'); ?>" alt="category" class="img-fluid">
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
                            <img src="<?php echo base_url('assets/img/icons/trash-icon.svg'); ?>" alt="trash" class="img-fluid w-auto h-auto">
                        </span>
                    </div>
                    <h4 class="mb-1">Delete Confirmation</h4>
                    <p class="mb-4">Are you sure you want to delete?</p>
                    <div class="d-flex justify-content-center gap-2">
                        <a href="#" class="btn btn-light w-100" data-bs-dismiss="modal">Close</a>
                        <a href="<?php echo base_url('categories'); ?>" class="btn btn-danger w-100">Delete</a>
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
                    <select class="select">
                        <option>Select</option>
                        <option>Active</option>
                        <option>Expired</option>
                    </select>
                </div>
            </div>
            <div class="d-flex align-items-center gap-2 mt-auto">
                <a href="#" class="btn btn-light w-100">Reset</a>
                <a href="#" class="btn btn-primary w-100">Apply</a>
            </div>
        </div>
    </div>
    <!-- End Filter -->
<?php }?>

<?php if ($page == 'coupons') {   ?>
    <!-- Show Coupons -->
    <div class="modal fade" id="show_coupon">
        <div class="modal-dialog modal-dialog-centered modal-md">
            <div class="modal-content">
                <div class="modal-header border-0 p-4 pb-3">
                    <h4 class="modal-title">Coupon Code</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form action="<?php echo base_url('coupons'); ?>">
                    <div class="modal-body p-4 pt-1">
                        <div class="p-4 bg-light border rounded border-dashed d-flex align-items-center justify-content-between mb-3">
                            <h6 class="mb-0" id="copytext">SEAFOOD10</h6>
                            <span class="copytoclipboard" data-bs-toggle="tooltip" data-bs-placement="top" title="Copy to Clipboard"><i class="icon-copy fw-semibold "></i></span>
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
                <form action="<?php echo base_url('coupons'); ?>">
                    <div class="modal-body p-4 pt-1">
                        <div class="mb-3">
                            <label class="form-label">Coupon Code<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Valid Category<span class="text-danger"> *</span></label>
                            <select class="select">
                                <option>Select</option>
                                <option>Pizza</option>
                                <option>Sea Food</option>
                                <option>Salad</option>
                                <option>Sauce</option>
                                <option>Topping</option>
                            </select>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label class="form-label">Discount Type<span class="text-danger"> *</span></label>
                                    <select class="select">
                                        <option>Select</option>
                                        <option>Percentage</option>
                                        <option>Fixed Amount</option>
                                    </select>
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
                                        <input type="text" class="form-control" data-provider="flatpickr" data-date-format="d/m/Y" placeholder="dd/mm/yyyy">
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
                                        <input type="text" class="form-control" data-provider="flatpickr" data-date-format="d/m/Y" placeholder="dd/mm/yyyy">
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
                <form action="<?php echo base_url('coupons'); ?>">
                    <div class="modal-body p-4 pt-1">
                        <div class="mb-3">
                            <label class="form-label">Coupon Code<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" value="SEAFOOD10">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Valid Category<span class="text-danger"> *</span></label>
                            <select class="select">
                                <option>Select</option>
                                <option selected>Pizza</option>
                                <option>Sea Food</option>
                                <option>Salad</option>
                                <option>Sauce</option>
                                <option>Topping</option>
                            </select>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label class="form-label">Discount Type<span class="text-danger"> *</span></label>
                                    <select class="select">
                                        <option>Select</option>
                                        <option selected>Percentage</option>
                                        <option>Fixed Amount</option>
                                    </select>
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
                                        <input type="text" class="form-control" data-provider="flatpickr" data-date-format="d/m/Y" value="01 Jan 2025">
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
                                        <input type="text" class="form-control" data-provider="flatpickr" data-date-format="d/m/Y" value="31 Jan 2025">
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

    <!-- Start Modal  -->
    <div class="modal fade" id="delete_modal">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">
                <div class="modal-body text-center p-4">
                    <div class="mb-4">
                        <span class="avatar avatar-xxl rounded-circle bg-danger-subtle">
                            <img src="<?php echo base_url('assets/img/icons/trash-icon.svg'); ?>" alt="trash" class="img-fluid w-auto h-auto">
                        </span>
                    </div>
                    <h4 class="mb-1">Delete Confirmation</h4>
                    <p class="mb-4">Are you sure you want to delete?</p>
                    <div class="d-flex justify-content-center gap-2">
                        <a href="#" class="btn btn-light w-100" data-bs-dismiss="modal">Close</a>
                        <a href="<?php echo base_url('coupons'); ?>" class="btn btn-danger w-100">Delete</a>
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

                    <div class="daterangepick custom-date form-control w-auto d-flex align-items-center justify-content-between">
                        <span class="reportrange-picker"></span> <i class="icon-calendar-fold text-gray-5 fs-14 text-end"></i>
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

                <div class="d-flex align-items-center gap-2 mt-auto border-0">
                    <a href="#" class="btn btn-light w-100">Reset</a>
                    <a href="#" class="btn btn-primary w-100">Apply</a>
                </div>

        </div>
    </div>
    <!-- End Filter -->
<?php }?>

<?php if ($page == 'customer') {   ?>
    <!-- Add Category -->
    <div class="modal fade" id="add_customer">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 p-4 pb-3">
                    <h4 class="modal-title">Add Customer</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form action="<?php echo base_url('customer'); ?>">
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
                                    <label class="form-label">Date of Birth</label>
                                    <div class="input-group w-auto input-group-flat">
                                        <input type="text" class="form-control" data-provider="flatpickr" data-date-format="d/m/Y" placeholder="dd/mm/yyyy">
                                        <span class="input-group-text">
                                            <i class="icon-calendar-fold"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                        <label class="form-label">Gender</label>
                                    <select class="select">
                                        <option>Select</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Status</label>
                            <select class="select">
                                <option>Select</option>
                                <option>Active</option>
                                <option>Disabled</option>
                            </select>
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
                <form action="<?php echo base_url('customer'); ?>">
                    <div class="modal-body p-4 pt-1">
                        <div class="mb-3 d-flex align-items-center flex-wrap gap-3">
                            <div class="avatar avatar-3xl border bg-light">
                                <img src="<?php echo base_url('assets/img/profiles/avatar-32.jpg'); ?>" alt="category" class="img-fluid">
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
                                    <label class="form-label">Date of Birth</label>
                                    <div class="input-group w-auto input-group-flat">
                                        <input type="text" class="form-control" data-provider="flatpickr" data-date-format="d/m/Y" placeholder="dd/mm/yyyy" value="25/12/2025">
                                        <span class="input-group-text">
                                            <i class="icon-calendar-fold"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                        <label class="form-label">Gender</label>
                                    <select class="select">
                                        <option>Select</option>
                                        <option selected>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Status</label>
                            <select class="select">
                                <option>Select</option>
                                <option selected>Active</option>
                                <option>Disabled</option>
                            </select>
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
                            <img src="<?php echo base_url('assets/img/icons/trash-icon.svg'); ?>" alt="trash" class="img-fluid w-auto h-auto">
                        </span>
                    </div>
                    <h4 class="mb-1">Delete Confirmation</h4>
                    <p class="mb-4">Are you sure you want to delete?</p>
                    <div class="d-flex justify-content-center gap-2">
                        <a href="#" class="btn btn-light w-100" data-bs-dismiss="modal">Close</a>
                        <a href="<?php echo base_url('customer'); ?>" class="btn btn-danger w-100">Delete</a>
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
                    <select class="select">
                        <option>Select</option>
                        <option>Active</option>
                        <option>Inactive</option>
                    </select>
                </div>
            </div>
            <div class="d-flex align-items-center gap-2 mt-auto">
                <a href="#" class="btn btn-light w-100">Reset</a>
                <a href="#" class="btn btn-primary w-100">Apply</a>
            </div>
        </div>
    </div>
    <!-- End Filter -->

    <!-- Customer Details -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="view_details">
        <div class="offcanvas-header d-flex align-items-center justify-content-between border-bottom">
            <h4 class="offcanvas-title mb-0">Customer Details</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" aria-label="Close"><i class="icon-x"></i></button>
        </div>
        <form action="<?php echo base_url('customer'); ?>" class="d-flex flex-column overflow-y-auto h-100">
            <div class="offcanvas-body p-0">
                <div class="border-bottom p-4">
                <div class="mb-4 d-flex align-items-center justify-content-between gap-3">
                    <div class="d-flex align-items-center">
                        <span class="avatar avatar-xxl border me-3 flex-shrink-0">
                            <img src="<?php echo base_url('assets/img/profiles/avatar-09.jpg'); ?>" alt="customer" class="img-fluid">
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
<?php }?>

<?php if ($page == 'invoices') {   ?>
    <!-- Start Modal  -->
    <div class="modal fade" id="delete_modal">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">
                <div class="modal-body text-center p-4">
                    <div class="mb-4">
                        <span class="avatar avatar-xxl rounded-circle bg-danger-subtle">
                            <img src="<?php echo base_url('assets/img/icons/trash-icon.svg'); ?>" alt="trash" class="img-fluid w-auto h-auto">
                        </span>
                    </div>
                    <h4 class="mb-1">Delete Confirmation</h4>
                    <p class="mb-4">Are you sure you want to delete?</p>
                    <div class="d-flex justify-content-center gap-2">
                        <a href="#" class="btn btn-light w-100" data-bs-dismiss="modal">Close</a>
                        <a href="<?php echo base_url('invoices'); ?>" class="btn btn-danger w-100">Delete</a>
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
                    <label class="form-label">Customer<span class="text-danger"> *</span></label>
                    <div class="dropdown">
                        <a href="#" class="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                            Select
                        </a>
                        <div class="dropdown-menu dropdown-menu-end p-3 w-100">
                            <h6 class="fs-14 fw-semibold mb-3">Customer</h6>
                            <div class="input-icon-end input-icon position-relative mb-3">
                                <span class="input-icon-addon">
                                    <i class="icon-search text-dark"></i>
                                </span>
                                <input type="text" class="form-control form-control-md" placeholder="Search">
                            </div>
                            <div class="vstack gap-2">
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Adrian James
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Sue Allen
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Frank Barrett
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Kelley Davis
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Jim Vickers
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-label">Order Type<span class="text-danger"> *</span></label>
                    <div class="dropdown">
                        <a href="#" class="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                            Select
                        </a>
                        <div class="dropdown-menu dropdown-menu-end p-3 w-100">
                            <h6 class="fs-14 fw-semibold mb-3">Order Type</h6>
                            <div class="input-icon-end input-icon position-relative mb-3">
                                <span class="input-icon-addon">
                                    <i class="icon-search text-dark"></i>
                                </span>
                                <input type="text" class="form-control form-control-md" placeholder="Search">
                            </div>
                            <div class="vstack gap-2">
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Dine In
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Take Away
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Delivery
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-label">Date Range<span class="text-danger"> *</span></label>
                    <div class="daterangepick custom-date form-control w-auto d-flex align-items-center justify-content-between">
                        <span class="reportrange-picker"></span> <i class="icon-calendar-fold text-gray-5 fs-14 text-end"></i>
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-label">Status<span class="text-danger"> *</span></label>
                    <select class="select">
                        <option>Select</option>
                        <option>Paid</option>
                        <option>Unpaid</option>
                    </select>
                </div>
            </div>

                <div class="d-flex align-items-center gap-2 mt-auto border-0">
                    <a href="#" class="btn btn-light w-100">Reset</a>
                    <a href="#" class="btn btn-primary w-100">Apply</a>
                </div>

        </div>
    </div>
    <!-- End Filter -->
<?php }?>

<?php if ($page == 'items') {   ?>
    <!-- Items Details -->
    <div class="modal fade" id="items_details">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header p-4 pb-0 border-0 mb-3">
                    <div class="border-bottom d-flex align-items-center justify-content-between flex-fill  pb-3 ">
                        <h4 class="modal-title">Item Details</h4>
                        <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                    </div>
                </div>
                <form action="<?php echo base_url('items'); ?>">
                    <div class="modal-body p-4 pt-1">
                        <div class="row row-gap-3">
                            <div class="col-lg-6 col-sm-12">
                                <div class="bg-light p-3 rounded">
                                    <img src="<?php echo base_url('assets/img/items/food-17.jpg'); ?>" alt="item" class="img-fluid w-100">
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-12">
                                <div class="mb-3">
                                    <h5>Chicken Taco</h5>
                                    <p>Tender grilled chicken wrapped in soft tortillas, topped with fresh lettuce, salsa, and creamy sauce.</p>
                                </div>
                                <div class="mb-3 pb-3 border-bottom size-tabs">
                                    <h6>Sizes</h6>
                                    <div class="d-flex gap-3">
                                        <div class="size-tab">
                                            <h6 class="fs-13 mb-0 fw-medium">Small</h6>
                                        </div>
                                        <div class="size-tab">
                                            <h6 class="fs-13 mb-0 fw-medium">Medium</h6>
                                        </div>
                                        <div class="size-tab">
                                            <h6 class="fs-13 mb-0 fw-medium">Regular</h6>
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <h6 class="mb-3">Add-ons & Upgrades</h6>
                                    <div class="row row-gap-md-4 row-gap-sm-3">
                                        <div class="col-lg-6">
                                            <div class="items-card">
                                                <div class="d-flex align-items-center">
                                                    <span class="avatar avatar-lg border rounded-circle me-1"><img src="<?php echo base_url('assets/img/items/food-17.jpg'); ?>" alt="item" class="img-fluid rounded-circle"></span>
                                                    <h6 class="fs-12 fw-medium mb-0">Extra Chicken</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="items-card">
                                                <div class="d-flex align-items-center">
                                                    <span class="avatar avatar-lg border rounded-circle me-1"><img src="<?php echo base_url('assets/img/items/food-18.jpg'); ?>" alt="item" class="img-fluid rounded-circle"></span>
                                                    <h6 class="fs-12 fw-medium mb-0 text-nowrap">Premium Tortilla</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="items-card">
                                                <div class="d-flex align-items-center">
                                                    <span class="avatar avatar-lg border rounded-circle me-1"><img src="<?php echo base_url('assets/img/items/food-19.jpg'); ?>" alt="item" class="img-fluid rounded-circle"></span>
                                                    <h6 class="fs-12 fw-medium mb-0 text-nowrap">Cheese Upgrade</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Items Details End -->

    <!-- Add Item -->
    <div class="modal fade" id="add_item">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header border-0 p-4">
                    <div class="d-flex align-items-center justify-content-between flex-fill pb-3 border-bottom">
                        <h4 class="modal-title">Add Item</h4>
                        <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                    </div>
                </div>
                <form action="<?php echo base_url('items'); ?>">
                    <div class="modal-body p-4 pt-1">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="mb-3 d-flex align-items-center flex-wrap gap-3">
                                    <div class="avatar avatar-3xl border bg-light">
                                        <i class="icon-images fs-28 text-dark"></i>
                                    </div>
                                    <div>
                                        <label class="form-label">Item Image<span class="text-danger"> *</span></label>
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
                            </div>
                            <div class="col-lg-12">
                                <div class="mb-3">
                                    <label class="form-label">Item Name<span class="text-danger"> *</span></label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="mb-3">
                                    <label class="form-label">Description<span class="text-danger"> *</span></label>
                                    <textarea  rows="4" class="form-control mb-2"></textarea>
                                    <span>Add Minimum 200 Characters</span>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label class="form-label">Price<span class="text-danger"> *</span></label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label class="form-label">Net Price<span class="text-danger"> *</span></label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label class="form-label">Category<span class="text-danger"> *</span></label>
                                    <select class="select">
                                        <option>Select</option>
                                        <option>Sea Food</option>
                                        <option>Pizza</option>
                                        <option>Salads</option>
                                        <option>Tacos</option>
                                        <option>Burgers</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label class="form-label">Tax<span class="text-danger"> *</span></label>
                                    <select class="select">
                                        <option>Select</option>
                                        <option>CGST(9%)</option>
                                        <option>SGST(9%)</option>
                                        <option>IGST(18%)</option>
                                        <option>VAT(10%)</option>
                                        <option>Service Tax(15%)</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-card-one accordion mb-3" id="accordionExample">
                            <div class="accordion-item pb-3">
                                <div class="accordion-header" id="headingOne">
                                    <div class="accordion-button p-3 pb-0" data-bs-toggle="collapse" data-bs-target="#collapseOne"  aria-controls="collapseOne">
                                        <div class="addproduct-icon d-flex align-items-center justify-content-between w-100">
                                            <div class="d-flex align-items-center">
                                                <h5 class="mb-0"><span>Variations</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body border-0 pb-0">
                                    <div id="group1" class="rowsContainer"></div>
                                    <!-- TEMPLATE for this group -->
                                    <div id="group1-template" class="row d-none rowTemplate">
                                        <div class="col-lg-5">
                                            <div class="mb-3">
                                                <label class="form-label">Size<span class="text-danger"> *</span></label>
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-lg-5">
                                            <div class="mb-3">
                                                <label class="form-label">Price<span class="text-danger"> *</span></label>
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-lg-2 d-flex align-items-center gap-2 mt-3">
                                            <span class="btn btn-icon btn-sm btn-white rounded-circle deleteRowBtn">
                                                <i class="icon-trash-2 text-danger"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" class="addRowBtn btn btn-light btn-sm" data-target="group1">
                                        <i class="icon-plus"></i>Add
                                    </a>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-card-one accordion mb-3" id="accordionExample2">
                            <div class="accordion-item pb-3">
                                <div class="accordion-header" id="heading2">
                                    <div class="accordion-button p-3 pb-0" data-bs-toggle="collapse" data-bs-target="#collapse2"  aria-controls="collapse2">
                                        <div class="addproduct-icon d-flex align-items-center justify-content-between w-100">
                                            <div class="d-flex align-items-center">
                                                <h5 class="mb-0"><span>Add Ons</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordionExample2">
                                <div class="accordion-body border-0 pb-0">
                                    <div id="group2" class="rowsContainer"></div>
                                    <!-- TEMPLATE for this group -->
                                    <div id="group2-template" class="row d-none rowTemplate">
                                        <div class="col-lg-5">
                                            <div class="mb-3">
                                                <label class="form-label">Name<span class="text-danger"> *</span></label>
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-lg-5">
                                            <div class="mb-3">
                                                <label class="form-label">Price($)<span class="text-danger"> *</span></label>
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-lg-2 d-flex align-items-center gap-2 mt-3">
                                            <span class="btn btn-icon btn-sm btn-white rounded-circle deleteRowBtn">
                                                <i class="icon-trash-2 text-danger"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" class="addRowBtn btn btn-light btn-sm" data-target="group2">
                                        <i class="icon-plus"></i>Add
                                    </a>

                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-end gap-2">
                            <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary">Save Item</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Add Item End -->

    <!-- Edit Item -->
    <div class="modal fade" id="edit_item">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header border-0 p-4">
                    <div class="d-flex align-items-center justify-content-between flex-fill pb-3 border-bottom">
                        <h4 class="modal-title">Edit Item</h4>
                        <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                    </div>
                </div>
                <form action="<?php echo base_url('items'); ?>">
                    <div class="modal-body p-4 pt-1">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="mb-3 d-flex align-items-center flex-wrap gap-3">
                                    <div class="avatar avatar-3xl border bg-light mb-3">
                                        <img src="<?php echo base_url('assets/img/items/food-10.jpg'); ?>" alt="item" class="img-fluid rounded">
                                    </div>
                                    <div>
                                        <label class="form-label">Item Image<span class="text-danger"> *</span></label>
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
                            </div>
                            <div class="col-lg-12">
                                <div class="mb-3">
                                        <label class="form-label">Item Name<span class="text-danger"> *</span></label>
                                    <input type="text" class="form-control" value="Pasta">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="mb-3">
                                        <label class="form-label">Description<span class="text-danger"> *</span></label>
                                    <textarea  rows="4" class="form-control mb-2">Pasta is a traditional Italian dish made from wheat flour, water, or eggs, shaped into a variety of forms.
                                    </textarea>
                                    <span>Add Minimum 200 Characters</span>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                        <label class="form-label">Price<span class="text-danger"> *</span></label>
                                    <input type="text" class="form-control" value="$96">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                        <label class="form-label">Net Price<span class="text-danger"> *</span></label>
                                    <input type="text" class="form-control" value="$96">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                        <label class="form-label">Category<span class="text-danger"> *</span></label>
                                        <select class="select">
                                        <option>Select</option>
                                        <option>Sea Food</option>
                                        <option>Pizza</option>
                                        <option selected>Salads</option>
                                        <option>Tacos</option>
                                        <option>Burgers</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                        <label class="form-label">Tax<span class="text-danger"> *</span></label>
                                        <select class="select">
                                        <option>Select</option>
                                        <option selected>CGST(9%)</option>
                                        <option>SGST(9%)</option>
                                        <option>IGST(18%)</option>
                                        <option>VAT(10%)</option>
                                        <option>Service Tax(15%)</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-card-one accordion mb-3" id="accordionExample3">
                            <div class="accordion-item pb-3">
                                <div class="accordion-header" id="heading3">
                                    <div class="accordion-button p-3 pb-0" data-bs-toggle="collapse" data-bs-target="#collapse3"  aria-controls="collapse3">
                                        <div class="addproduct-icon d-flex align-items-center justify-content-between w-100">
                                            <div class="d-flex align-items-center">
                                                <h5 class="mb-0"><span>Variations</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="collapse3" class="accordion-collapse collapse show" aria-labelledby="heading3" data-bs-parent="#accordionExample3">
                                <div class="accordion-body border-0 pb-0">
                                    <div id="group3" class="rowsContainer"></div>
                                    <!-- TEMPLATE for this group -->
                                    <div class="row">
                                        <div class="col-lg-5">
                                            <div class="mb-3">
                                                <label class="form-label">Size<span class="text-danger"> *</span></label>
                                                <input type="text" class="form-control" value="M">
                                            </div>
                                        </div>
                                        <div class="col-lg-5">
                                            <div class="mb-3">
                                                <label class="form-label">Price<span class="text-danger"> *</span></label>
                                                <input type="text" class="form-control" value="22.25">
                                            </div>
                                        </div>
                                        <div class="col-lg-2 d-flex align-items-center gap-2 mt-3">
                                            <span class="btn btn-icon btn-sm btn-white rounded-circle deleteRowBtn">
                                                <i class="icon-trash-2 text-danger"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div id="group3-template" class="row d-none rowTemplate">
                                        <div class="col-lg-5">
                                            <div class="mb-3">
                                                <label class="form-label">Size<span class="text-danger"> *</span></label>
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-lg-5">
                                            <div class="mb-3">
                                                <label class="form-label">Price($)<span class="text-danger"> *</span></label>
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-lg-2 d-flex align-items-center gap-2 mt-3">
                                            <span class="btn btn-icon btn-sm btn-white rounded-circle deleteRowBtn">
                                                <i class="icon-trash-2 text-danger"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" class="addRowBtn btn btn-light btn-sm" data-target="group3">
                                        <i class="icon-plus"></i>Add
                                    </a>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-card-one accordion mb-3" id="accordionExample4">
                            <div class="accordion-item pb-3">
                                <div class="accordion-header" id="heading4">
                                    <div class="accordion-button p-3 pb-0" data-bs-toggle="collapse" data-bs-target="#collapse4"  aria-controls="collapse4">
                                        <div class="addproduct-icon d-flex align-items-center justify-content-between w-100">
                                            <div class="d-flex align-items-center">
                                                <h5 class="mb-0"><span>Add Ons</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="collapse4" class="accordion-collapse collapse show" aria-labelledby="heading4" data-bs-parent="#accordionExample4">
                                <div class="accordion-body border-0 pb-0">
                                    <div id="group4" class="rowsContainer"></div>
                                    <!-- TEMPLATE for this group -->
                                    <div class="row">
                                        <div class="col-lg-5">
                                            <div class="mb-3">
                                                <label class="form-label">Name<span class="text-danger"> *</span></label>
                                                <input type="text" class="form-control" value="Extra Cheese">
                                            </div>
                                        </div>
                                        <div class="col-lg-5">
                                            <div class="mb-3">
                                                <label class="form-label">Price($)<span class="text-danger"> *</span></label>
                                                <input type="text" class="form-control" value="2.50">
                                            </div>
                                        </div>
                                        <div class="col-lg-2 d-flex align-items-center gap-2 mt-3">
                                            <span class="btn btn-icon btn-sm btn-white rounded-circle deleteRowBtn">
                                                <i class="icon-trash-2 text-danger"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div id="group4-template" class="row d-none rowTemplate">
                                        <div class="col-lg-5">
                                            <div class="mb-3">
                                                <label class="form-label">Name<span class="text-danger"> *</span></label>
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-lg-5">
                                            <div class="mb-3">
                                                <label class="form-label">Price($)<span class="text-danger"> *</span></label>
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-lg-2 d-flex align-items-center gap-2 mt-3">
                                            <span class="btn btn-icon btn-sm btn-white rounded-circle deleteRowBtn">
                                                <i class="icon-trash-2 text-danger"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" class="addRowBtn btn btn-light btn-sm" data-target="group4">
                                        <i class="icon-plus"></i>Add
                                    </a>

                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-end gap-2">
                            <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary">Save Item</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Edit Item end -->

    <!-- Start Modal  -->
    <div class="modal fade" id="delete_item">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">
                <div class="modal-body text-center p-4">
                    <div class="mb-4">
                        <span class="avatar avatar-xxl rounded-circle bg-danger-subtle">
                            <img src="<?php echo base_url('assets/img/icons/trash-icon.svg'); ?>" alt="trash" class="img-fluid w-auto h-auto">
                        </span>
                    </div>
                    <h4 class="mb-1">Delete Confirmation</h4>
                    <p class="mb-4">Are you sure you want to delete?</p>
                    <div class="d-flex justify-content-center gap-2">
                        <a href="#" class="btn btn-light w-100" data-bs-dismiss="modal">Close</a>
                        <a href="<?php echo base_url('items'); ?>" class="btn btn-danger w-100">Delete</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Modal  -->

    <!-- Start Modal  -->
    <div class="modal fade" id="hide_item">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">
                <div class="modal-body text-center p-4">
                    <div class="mb-4">
                        <span class="avatar avatar-xxl rounded-circle bg-info-subtle">
                            <img src="<?php echo base_url('assets/img/icons/hide.svg'); ?>" alt="trash" class="img-fluid w-auto h-auto">
                        </span>
                    </div>
                    <h4 class="mb-1">Hide Item Confirmation</h4>
                    <p class="mb-4">Are you sure you want to hide?</p>
                    <div class="d-flex justify-content-center gap-2">
                        <a href="#" class="btn btn-light w-100" data-bs-dismiss="modal">Close</a>
                        <a href="<?php echo base_url('items'); ?>" class="btn btn-info w-100">Hide</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Modal  -->
<?php }?>

<?php if ($page == 'kanban-view') {   ?>
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
                                            <img src="<?php echo base_url('assets/img/icons/mobile-phone.svg'); ?>" alt="Mobile" class="img-fluid d-block custom-line-img-two">
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
                                            <img src="<?php echo base_url('assets/img/icons/qr-img.svg'); ?>" alt="Mobile" class="img-fluid d-block custom-line-img-two">
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
                            <img src="<?php echo base_url('assets/img/icons/trash-icon.svg'); ?>" alt="trash" class="img-fluid w-auto h-auto">
                        </span>
                    </div>
                    <h4 class="mb-1">Delete Confirmation</h4>
                    <p class="mb-4">Are you sure you want to delete?</p>
                    <div class="d-flex justify-content-between gap-2">
                        <a href="#" class="btn btn-light w-100" data-bs-dismiss="modal">Close</a>
                        <a href="<?php echo base_url('orders'); ?>" class="btn btn-danger w-100">Delete</a>
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
                    <div class="calculator-wrap">
                        <div>
                            <div>
                                <label class="form-label">Amount<span class="text-danger"> *</span></label>
                                <input class="input form-control" type="text" placeholder="Amount or %" readonly>
                            </div>
                        </div>
                        <div class="calculator-body d-flex justify-content-between">
                            <div class="text-center">
                                <button class="btn btn-clear" onclick="clr()">C</button>
                                <button class="btn btn-number" onclick="dis('7')">7</button>
                                <button class="btn btn-number" onclick="dis('4')">4</button>
                                <button class="btn btn-number" onclick="dis('1')">1</button>
                                <button class="btn btn-number" onclick="dis(',')">,</button>
                            </div>
                            <div class="text-center">
                                <button class="btn btn-expression" onclick="dis('/')">÷</button>
                                <button class="btn btn-number" onclick="dis('8')">8</button>
                                <button class="btn btn-number" onclick="dis('5')">5</button>
                                <button class="btn btn-number" onclick="dis('2')">2</button>
                                <button class="btn btn-number" onclick="dis('00')">00</button>
                            </div>
                            <div class="text-center">
                                <button class="btn btn-expression" onclick="dis('%')">%</button>
                                <button class="btn btn-number" onclick="dis('9')">9</button>
                                <button class="btn btn-number" onclick="dis('6')">6</button>
                                <button class="btn btn-number" onclick="dis('3')">3</button>
                                <button class="btn btn-number" onclick="dis('.')">.</button>
                            </div>
                            <div class="text-center">
                                <button class="btn btn-clear" onclick="back()"><i class="icon-arrow-left"></i></button>
                                <button class="btn btn-expression" onclick="dis('*')">x</button>
                                <button class="btn btn-expression" onclick="dis('-')">-</button>
                                <button class="btn btn-expression" onclick="dis('+')">+</button>
                                <button class="btn btn-clear" onclick="solve()">=</button>
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
<?php }?>

<?php if ($page == 'kitchen') {   ?>
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
                        <span class="avatar avatar-xxl rounded-circle bg-orange-subtle">
                            <img src="<?php echo base_url('assets/img/icons/start-icon.svg'); ?>" alt="trash" class="img-fluid w-auto h-auto">
                        </span>
                    </div>
                    <h4 class="mb-1">Cooking Started</h4>
                    <p class="mb-4">Vegetarian Lasagna Cooking has
                        begun in the kitchen.</p>
                    <div class="d-flex justify-content-between gap-2">
                        <a href="#" class="btn btn-primary w-100" data-bs-dismiss="modal">Close</a>
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
                            <img src="<?php echo base_url('assets/img/icons/checked-img.svg'); ?>" alt="trash" class="img-fluid w-auto h-auto">
                        </span>
                    </div>
                    <h4 class="mb-1">Cooking Completed</h4>
                    <p class="mb-4">Order <span class="text-dark fw-semibold">#14751</span> has been completed & ready in kitchen to serve</p>
                    <div class="d-flex justify-content-between gap-2">
                        <a href="#" class="btn btn-primary w-100" data-bs-dismiss="modal">Close</a>
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
                        <span class="avatar avatar-xxl rounded-circle bg-info-subtle">
                            <img src="<?php echo base_url('assets/img/icons/pause-icon.svg'); ?>" alt="trash" class="img-fluid w-auto h-auto">
                        </span>
                    </div>
                    <h4 class="mb-1">Order Paused</h4>
                    <p class="mb-4">Order <span class="text-dark fw-semibold">#14751</span> has been paused in the kitchen</p>
                    <div class="d-flex justify-content-between gap-2">
                        <a href="#" class="btn btn-primary w-100" data-bs-dismiss="modal">Close</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Modal  -->
<?php }?>

<?php if ($page == 'orders') {   ?>
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
                                            <img src="<?php echo base_url('assets/img/icons/mobile-phone.svg'); ?>" alt="Mobile" class="img-fluid d-block custom-line-img-two">
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
                                            <img src="<?php echo base_url('assets/img/icons/qr-img.svg'); ?>" alt="Mobile" class="img-fluid d-block custom-line-img-two">
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
                            <img src="<?php echo base_url('assets/img/icons/trash-icon.svg'); ?>" alt="trash" class="img-fluid w-auto h-auto">
                        </span>
                    </div>
                    <h4 class="mb-1">Delete Confirmation</h4>
                    <p class="mb-4">Are you sure you want to delete?</p>
                    <div class="d-flex justify-content-between gap-2">
                        <a href="#" class="btn btn-light w-100" data-bs-dismiss="modal">Close</a>
                        <a href="<?php echo base_url('orders'); ?>" class="btn btn-danger w-100">Delete</a>
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
                    <div class="calculator-wrap">
                        <div>
                            <div>
                                <label class="form-label">Amount<span class="text-danger"> *</span></label>
                                <input class="input form-control" type="text" placeholder="Amount or %" readonly>
                            </div>
                        </div>
                        <div class="calculator-body d-flex justify-content-between">
                            <div class="text-center">
                                <button class="btn btn-clear" onclick="clr()">C</button>
                                <button class="btn btn-number" onclick="dis('7')">7</button>
                                <button class="btn btn-number" onclick="dis('4')">4</button>
                                <button class="btn btn-number" onclick="dis('1')">1</button>
                                <button class="btn btn-number" onclick="dis(',')">,</button>
                            </div>
                            <div class="text-center">
                                <button class="btn btn-expression" onclick="dis('/')">÷</button>
                                <button class="btn btn-number" onclick="dis('8')">8</button>
                                <button class="btn btn-number" onclick="dis('5')">5</button>
                                <button class="btn btn-number" onclick="dis('2')">2</button>
                                <button class="btn btn-number" onclick="dis('00')">00</button>
                            </div>
                            <div class="text-center">
                                <button class="btn btn-expression" onclick="dis('%')">%</button>
                                <button class="btn btn-number" onclick="dis('9')">9</button>
                                <button class="btn btn-number" onclick="dis('6')">6</button>
                                <button class="btn btn-number" onclick="dis('3')">3</button>
                                <button class="btn btn-number" onclick="dis('.')">.</button>
                            </div>
                            <div class="text-center">
                                <button class="btn btn-clear" onclick="back()"><i class="icon-arrow-left"></i></button>
                                <button class="btn btn-expression" onclick="dis('*')">x</button>
                                <button class="btn btn-expression" onclick="dis('-')">-</button>
                                <button class="btn btn-expression" onclick="dis('+')">+</button>
                                <button class="btn btn-clear" onclick="solve()">=</button>
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
<?php }?>

<?php if ($page == 'payments') {   ?>
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
                    <label class="form-label">Customer<span class="text-danger"> *</span></label>
                    <div class="dropdown">
                        <a href="#" class="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                            Select
                        </a>
                        <div class="dropdown-menu dropdown-menu-end p-3 w-100">
                            <h6 class="fs-14 fw-semibold mb-3">Customer</h6>
                            <div class="input-icon-end input-icon position-relative mb-3">
                                <span class="input-icon-addon">
                                    <i class="icon-search text-dark"></i>
                                </span>
                                <input type="text" class="form-control form-control-md" placeholder="Search">
                            </div>
                            <div class="vstack gap-2">
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Adrian James
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Sue Allen
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Frank Barrett
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Kelley Davis
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Jim Vickers
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-label">Type<span class="text-danger"> *</span></label>
                    <div class="dropdown">
                        <a href="#" class="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                            Select
                        </a>
                        <div class="dropdown-menu dropdown-menu-end p-3 w-100">
                            <h6 class="fs-14 fw-semibold mb-3">Type</h6>
                            <div class="input-icon-end input-icon position-relative mb-3">
                                <span class="input-icon-addon">
                                    <i class="icon-search text-dark"></i>
                                </span>
                                <input type="text" class="form-control form-control-md" placeholder="Search">
                            </div>
                            <div class="vstack gap-2">
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Dine In
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Take Away
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Delivery
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                <div class="d-flex align-items-center gap-2 mt-auto border-0">
                    <a href="#" class="btn btn-light w-100">Reset</a>
                    <a href="#" class="btn btn-primary w-100">Apply</a>
                </div>

        </div>
    </div>
    <!-- End Filter -->
<?php }?>

<?php if ($page == 'pos') {   ?>
    <!-- Order Modal  -->
    <div class="modal fade" id="order_modal">
        <div class="modal-dialog modal-dialog-centered modal-md">
            <div class="modal-content">
                <div class="modal-body text-center p-4">
                    <div class="mb-4">
                        <span class="avatar avatar-xxl rounded-circle bg-success-subtle shadow-lg">
                            <img src="<?php echo base_url('assets/img/icons/checked-img.svg'); ?>" alt="trash" class="img-fluid w-auto h-auto">
                        </span>
                    </div>
                    <h4 class="mb-1">Order Sent to Kitchen</h4>
                    <div class="d-flex align-items-center justify-content-center gap-2 mb-4">
                        <p class="mb-0"> Token No : <span class="text-dark">7</span> </p>
                        <span class="even-line"></span>
                        <p class="mb-0"> Order ID : <span class="text-dark">#26598</span> </p>
                    </div>
                    <div class="d-flex justify-content-between gap-2">
                        <a href="<?php echo base_url('pos'); ?>" class="btn btn-light w-100">Close</a>
                        <a href="<?php echo base_url('pos'); ?>" class="btn btn-primary w-100">Print Token</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Modal  -->

    <!-- Add Note modal -->
    <div class="modal fade" id="add_notes">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <h4 class="modal-title">Add Note</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form action="<?php echo base_url('pos'); ?>">
                    <div class="modal-body">
                        <label class="form-label">Notes<span class="text-danger"> *</span></label>
                        <textarea rows="4" class="form-control"></textarea>
                        <p class="fw-medium mb-0 mt-1">Add Minimum 200 Characters</p>
                    </div>
                    <div class="modal-footer d-flex align-items-center justify-content-between flex-nowrap gap-2">
                        <button type="button" class="btn btn-light w-100 m-0" data-bs-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-primary w-100 m-0">Add Note</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Add Details modal -->
    <div class="modal fade" id="items_details">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">

                <div class="modal-body p-4">

                    <!-- start row -->
                    <div class="row g-4">
                        <div class="col-lg-6">
                            <div class="items-img p-3 border rounded bg-light">
                                <img src="<?php echo base_url('assets/img/food/food-img-1.png'); ?>" alt="food" class="img-fluid img-1">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="items-content">
                                <h4 class="mb-2">Chicken Taco</h4>
                                <p class="mb-3">Tender grilled chicken wrapped in soft tortillas, topped with fresh lettuce, salsa, and creamy sauce.</p>
                                <div class="items-info mb-4 pb-4 border-bottom">
                                    <h6 class="fw-semibold mb-3">Sizes</h6>
                                    <div class="d-flex align-items-center flex-wrap gap-2 size-group">
                                        <div class="size-tab">
                                            <button class="tag d-flex align-items-center justify-content-between gap-3">Small <span>$28</span> </button>
                                        </div>
                                        <div class="size-tab">
                                            <button class="tag d-flex align-items-center justify-content-between gap-3">Medium <span>$28</span></button>
                                        </div>
                                        <div class="size-tab">
                                            <button class="tag d-flex align-items-center justify-content-between gap-3">Regular <span>$28</span></button>
                                        </div>
                                    </div>
                                </div>

                                <div class="mb-4 pb-4 border-bottom">
                                    <h6 class="fw-semibold mb-3">Add-ons & Upgrades</h6>
                                    <div class="upgrade-slider">
                                        <div class="slider-item">
                                            <div class="d-flex align-items-center gap-2 border p-2 rounded addon-item">
                                                <div class="avatar rounded-circle border">
                                                    <img src="<?php echo base_url('assets/img/food/food-1.png'); ?>" alt="food" class="img-fluid img-1">
                                                </div>
                                                <div>
                                                    <p class="fw-medium mb-1 text-dark">Extra Chicken</p>
                                                    <p class="mb-0 fw-medium">$2</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="slider-item">
                                            <div class="d-flex align-items-center gap-2 border p-2 rounded addon-item">
                                                <div class="avatar rounded-circle border">
                                                    <img src="<?php echo base_url('assets/img/food/food-2.png'); ?>" alt="food" class="img-fluid img-1">
                                                </div>
                                                <div>
                                                    <p class="fw-medium mb-1 text-dark">Grilled Chicken</p>
                                                    <p class="mb-0 fw-medium">$8</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="slider-item">
                                            <div class="d-flex align-items-center gap-2 border p-2 rounded addon-item">
                                                <div class="avatar rounded-circle border">
                                                    <img src="<?php echo base_url('assets/img/food/food-3.png'); ?>" alt="food" class="img-fluid img-1">
                                                </div>
                                                <div>
                                                    <p class="fw-medium mb-1 text-dark">Chicken Soup</p>
                                                    <p class="mb-0 fw-medium">$2</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h5 class="mb-4 d-flex align-items-center justify-content-between">Total <span>$274</span></h5>
                                    <div class="d-flex align-items-center gap-3">
                                        <div class="quantity-control">
                                            <button type="button" class="minus-btn"><i class="icon-minus"></i></button>
                                            <input type="text" class="quantity-input" value="1" aria-label="Quantity">
                                            <button type="button" class="add-btn"><i class="icon-plus"></i></button>
                                        </div>
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#item_view" class="btn btn-primary w-100 d-flex align-items-center gap-2"> <i class="icon-shopping-bag"></i> Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end row -->
                </div>
            </div>
        </div>
    </div>

    <!-- Transactions Details modal -->
    <div class="modal fade" id="transactions_details">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <h4 class="modal-title">Transactions</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <div class="modal-body p-4">

                    <ul class="nav nav-tabs nav-tabs-solid border-0 mb-3 pb-3 border-bottom align-items-center flex-wrap gap-3" role="tablist">
                        <li class="nav-item">
                            <a href="#order-tab15" class="nav-link active shadow-sm fw-medium d-flex  gap-2 align-items-center" data-bs-toggle="tab"><i class="icon-circle-dollar-sign"></i>Sale</a>
                        </li>
                        <li class="nav-item">
                            <a href="#order-tab16" class="nav-link shadow-sm fw-medium d-flex align-items-center gap-2" data-bs-toggle="tab"><i class="icon-file-scan"></i>Draft</a>
                        </li>
                    </ul>

                    <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap mb-3">
                        <div class="input-group input-group-flat w-auto">
                            <input type="text" class="form-control" placeholder="Search">
                            <span class="input-group-text">
                                <i class="icon-search text-dark"></i>
                            </span>
                        </div>
                        <!-- sort by -->
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                Sort by : Newest
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end p-3">
                                <li>
                                        <a href="javascript:void(0);" class="dropdown-item">Newest</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item">Oldest</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item">Ascending</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item">Descending</a>
                                    </li>
                            </ul>
                        </div>
                    </div>

                    <div class="tab-content">
                        <div class="tab-pane show active" id="order-tab15">
                            <!-- table start -->
                            <div class="table-responsive table-nowrap">
                                <table class="table mb-0 border">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Ref</th>
                                            <th>Customer</th>
                                            <th>Grand Total</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                01 Nov 2025
                                            </td>
                                            <td>#23588</td>
                                            <td>Walk-in Customer</td>
                                            <td>
                                                $34.50
                                            </td>
                                            <td>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2"><i class="icon-printer"></i></a>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle"><i class="icon-trash-2"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                01 Nov 2025
                                            </td>
                                            <td>#23587</td>
                                            <td>Sue Allen</td>
                                            <td>$78.20</td>
                                            <td>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2"><i class="icon-printer"></i></a>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle"><i class="icon-trash-2"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                01 Nov 2025
                                            </td>
                                            <td>#23586</td>
                                            <td>Frank Barrett</td>
                                            <td>$45.10</td>
                                            <td>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2"><i class="icon-printer"></i></a>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle"><i class="icon-trash-2"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                01 Nov 2025
                                            </td>
                                            <td>#23585</td>
                                            <td>Kelley Davis</td>
                                            <td>$92.80</td>
                                            <td>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2"><i class="icon-printer"></i></a>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle"><i class="icon-trash-2"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                01 Nov 2025
                                            </td>
                                            <td>#23584</td>
                                            <td>Jim Vickers</td>
                                            <td>$61.40</td>
                                            <td>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2"><i class="icon-printer"></i></a>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle"><i class="icon-trash-2"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                01 Nov 2025
                                            </td>
                                            <td>#23583</td>
                                            <td>Nancy Chapman</td>
                                            <td>$57.20</td>
                                            <td>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2"><i class="icon-printer"></i></a>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle"><i class="icon-trash-2"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                01 Nov 2025
                                            </td>
                                            <td>#23582</td>
                                            <td>Ron Jude</td>
                                            <td>$45.30</td>
                                            <td>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2"><i class="icon-printer"></i></a>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle"><i class="icon-trash-2"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                31 Oct 2025
                                            </td>
                                            <td>#23581</td>
                                            <td>Andrea Aponte</td>
                                            <td>$72.60</td>
                                            <td>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2"><i class="icon-printer"></i></a>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle"><i class="icon-trash-2"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                31 Oct 2025
                                            </td>
                                            <td>#23580</td>
                                            <td>David Belcher</td>
                                            <td>$32.10</td>
                                            <td>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2"><i class="icon-printer"></i></a>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle"><i class="icon-trash-2"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                31 Oct 2025
                                            </td>
                                            <td>#23579</td>
                                            <td>Julie Kangas</td>
                                            <td>$40.30</td>
                                            <td>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2"><i class="icon-printer"></i></a>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle"><i class="icon-trash-2"></i></a>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <!-- table end -->
                        </div>

                        <div class="tab-pane show" id="order-tab16">
                            <!-- table start -->
                            <div class="table-responsive table-nowrap">
                                <table class="table mb-0 border">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Ref</th>
                                            <th>Customer</th>
                                            <th>Grand Total</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                01 Dec 2025
                                            </td>
                                            <td>#23588</td>
                                            <td>Walk-in Customer</td>
                                            <td>
                                                $34.50
                                            </td>
                                            <td>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2"><i class="icon-pencil-line"></i></a>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle"><i class="icon-printer"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                01 Nov 2025
                                            </td>
                                            <td>#23588</td>
                                            <td>Walk-in Customer</td>
                                            <td>
                                                $34.50
                                            </td>
                                            <td>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2"><i class="icon-pencil-line"></i></a>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle"><i class="icon-printer"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                01 Nov 2025
                                            </td>
                                            <td>#23587</td>
                                            <td>Sue Allen</td>
                                            <td>
                                                $54.50
                                            </td>
                                            <td>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2"><i class="icon-pencil-line"></i></a>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle"><i class="icon-printer"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                01 Nov 2025
                                            </td>
                                            <td>#23586</td>
                                            <td>Frank Barrett</td>
                                            <td>
                                                $94.50
                                            </td>
                                            <td>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2"><i class="icon-pencil-line"></i></a>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle"><i class="icon-printer"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                01 Nov 2025
                                            </td>
                                            <td>#23584</td>
                                            <td>Kelley Davis</td>
                                            <td>
                                                $14.50
                                            </td>
                                            <td>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2"><i class="icon-pencil-line"></i></a>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle"><i class="icon-printer"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                01 Nov 2025
                                            </td>
                                            <td>#23588</td>
                                            <td>Walk-in Customer</td>
                                            <td>
                                                $34.50
                                            </td>
                                            <td>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2"><i class="icon-pencil-line"></i></a>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle"><i class="icon-printer"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                01 Nov 2025
                                            </td>
                                            <td>#23588</td>
                                            <td>Jim Vickers</td>
                                            <td>
                                                $19.50
                                            </td>
                                            <td>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2"><i class="icon-pencil-line"></i></a>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle"><i class="icon-printer"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                01 Nov 2025
                                            </td>
                                            <td>#23582</td>
                                            <td>Nancy Chapman</td>
                                            <td>
                                                $34.50
                                            </td>
                                            <td>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2"><i class="icon-pencil-line"></i></a>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle"><i class="icon-printer"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                31 Dec 2025
                                            </td>
                                            <td>#23579</td>
                                            <td>Ron Jude</td>
                                            <td>
                                                $34.50
                                            </td>
                                            <td>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2"><i class="icon-pencil-line"></i></a>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle"><i class="icon-printer"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                01 Nov 2025
                                            </td>
                                            <td>#23588</td>
                                            <td>Walk-in Customer</td>
                                            <td>
                                                $34.50
                                            </td>
                                            <td>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2"><i class="icon-pencil-line"></i></a>
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle"><i class="icon-printer"></i></a>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <!-- table end -->
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <!-- Transactions Details modal -->
    <div class="modal fade" id="draft_details">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <h4 class="modal-title">Draft</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <div class="modal-body p-4">

                    <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap mb-3">
                        <div class="input-group input-group-flat w-auto">
                            <input type="text" class="form-control" placeholder="Search">
                            <span class="input-group-text">
                                <i class="icon-search text-dark"></i>
                            </span>
                        </div>

                        <!-- sort by -->
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                Sort by : Newest
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end p-3">
                                <li>
                                        <a href="javascript:void(0);" class="dropdown-item">Newest</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item">Oldest</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item">Ascending</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item">Descending</a>
                                    </li>
                            </ul>
                        </div>
                    </div>

                    <!-- table start -->
                    <div class="table-responsive table-nowrap">
                        <table class="table mb-0 border">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Ref</th>
                                    <th>Customer</th>
                                    <th>Grand Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        01 Dec 2025
                                    </td>
                                    <td>#23588</td>
                                    <td>Walk-in Customer</td>
                                    <td>
                                        $34.50
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2"><i class="icon-pencil-line"></i></a>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle"><i class="icon-printer"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        01 Nov 2025
                                    </td>
                                    <td>#23588</td>
                                    <td>Walk-in Customer</td>
                                    <td>
                                        $34.50
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2"><i class="icon-pencil-line"></i></a>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle"><i class="icon-printer"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        01 Nov 2025
                                    </td>
                                    <td>#23587</td>
                                    <td>Sue Allen</td>
                                    <td>
                                        $54.50
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2"><i class="icon-pencil-line"></i></a>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle"><i class="icon-printer"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        01 Nov 2025
                                    </td>
                                    <td>#23586</td>
                                    <td>Frank Barrett</td>
                                    <td>
                                        $94.50
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2"><i class="icon-pencil-line"></i></a>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle"><i class="icon-printer"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        01 Nov 2025
                                    </td>
                                    <td>#23584</td>
                                    <td>Kelley Davis</td>
                                    <td>
                                        $14.50
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2"><i class="icon-pencil-line"></i></a>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle"><i class="icon-printer"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        01 Nov 2025
                                    </td>
                                    <td>#23588</td>
                                    <td>Walk-in Customer</td>
                                    <td>
                                        $34.50
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2"><i class="icon-pencil-line"></i></a>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle"><i class="icon-printer"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        01 Nov 2025
                                    </td>
                                    <td>#23588</td>
                                    <td>Jim Vickers</td>
                                    <td>
                                        $19.50
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2"><i class="icon-pencil-line"></i></a>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle"><i class="icon-printer"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        01 Nov 2025
                                    </td>
                                    <td>#23582</td>
                                    <td>Nancy Chapman</td>
                                    <td>
                                        $34.50
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2"><i class="icon-pencil-line"></i></a>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle"><i class="icon-printer"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        31 Dec 2025
                                    </td>
                                    <td>#23579</td>
                                    <td>Ron Jude</td>
                                    <td>
                                        $34.50
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2"><i class="icon-pencil-line"></i></a>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle"><i class="icon-printer"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        01 Nov 2025
                                    </td>
                                    <td>#23588</td>
                                    <td>Walk-in Customer</td>
                                    <td>
                                        $34.50
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle me-2"><i class="icon-pencil-line"></i></a>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-white rounded-circle"><i class="icon-printer"></i></a>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <!-- table end -->

                </div>
            </div>
        </div>
    </div>

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

    <!-- Add Customer modal -->
    <div class="modal fade" id="add_customer">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <h4 class="modal-title">Add  Customer</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form action="<?php echo base_url('pos'); ?>">
                    <div class="modal-body pt-0">

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
                                <label class="form-label">Date of Birth<span class="text-danger ms-1">*</span></label>
                                <div class="input-group w-auto input-group-flat">
                                    <input type="text" class="form-control" data-provider="flatpickr" data-date-format="d/m/Y" placeholder="dd/mm/yyyy">
                                    <span class="input-group-text">
                                        <i class="icon-calendar-fold"></i>
                                    </span>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <label class="form-label">Gender<span class="text-danger"> *</span></label>
                                <select class="select">
                                    <option>Select</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Otherwise</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer d-flex align-items-center justify-content-between flex-nowrap gap-2">
                        <button type="button" class="btn btn-light w-100 m-0" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary w-100 m-0">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Edit Customer modal -->
    <div class="modal fade" id="edit_customer">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <h4 class="modal-title">Edit  Customer</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form action="<?php echo base_url('pos'); ?>">
                    <div class="modal-body pt-0">

                        <div class="row g-4">
                            <div class="col-lg-12">
                                <div>
                                    <label class="form-label">Customer Name <span class="text-danger"> *</span></label>
                                    <input type="text" class="form-control" value="Steave Rogers">
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div>
                                    <label class="form-label">Phone <span class="text-danger"> *</span></label>
                                    <input type="text" class="form-control" value="+123456 87485">
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div>
                                    <label class="form-label">Email <span class="text-danger"> *</span></label>
                                    <input type="text" class="form-control" value="suppoert@gmail.com">
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <label class="form-label">Date of Birth<span class="text-danger ms-1">*</span></label>
                                <div class="input-group w-auto input-group-flat">
                                    <input type="text" class="form-control" data-provider="flatpickr" data-date-format="d/m/Y" value="10/05/2025">
                                    <span class="input-group-text">
                                        <i class="icon-calendar-fold"></i>
                                    </span>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <label class="form-label">Gender<span class="text-danger"> *</span></label>
                                <select class="select">
                                    <option>Select</option>
                                    <option selected>Male</option>
                                    <option>Female</option>
                                    <option>Otherwise</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer d-flex align-items-center justify-content-between flex-nowrap gap-2">
                        <button type="button" class="btn btn-light w-100 m-0" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary w-100 m-0">Save</button>
                    </div>
                </form>
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
                            <img src="<?php echo base_url('assets/img/icons/trash-icon.svg'); ?>" alt="trash" class="img-fluid w-auto h-auto">
                        </span>
                    </div>
                    <h4 class="mb-1">Delete Confirmation</h4>
                    <p class="mb-4">Are you sure you want to delete?</p>
                    <div class="d-flex justify-content-between gap-2">
                        <a href="#" class="btn btn-light w-100" data-bs-dismiss="modal">Close</a>
                        <a href="<?php echo base_url('pos'); ?>" class="btn btn-danger w-100">Delete</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Modal  -->

    <!-- Start Modal  -->
    <div class="modal fade" id="item_view">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">
                <div class="modal-body text-center p-4">
                    <div class="mb-4">
                        <span class="avatar avatar-xxl rounded-circle bg-success-subtle">
                            <img src="<?php echo base_url('assets/img/icons/checked-img.svg'); ?>" alt="trash" class="img-fluid w-auto h-auto">
                        </span>
                    </div>
                    <h4 class="mb-1">Item Added</h4>
                    <p class="mb-0">Lobster Thermidor Added to the cart</p>
                </div>
            </div>
        </div>
    </div>
    <!-- End Modal  -->

    <!-- View Invoices -->
    <div class="modal fade" id="view_invoices">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 p-4 pb-3">
                    <h5 class="modal-title">Invoice</h5>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                    <div class="modal-body p-4 pt-1">
                        <div class="card mb-3">
                            <div class="card-body">
                                <div class="mb-4">
                                    <div class="row g-4 justify-content-between align-items-center border-bottom pb-4">
                                        <div class="col-md-6">
                                            <h6 class="mb-2">#INV5465</h6>
                                            <h6>DreamsPOS</h6>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-2 invoice-logo d-flex align-items-center justify-content-md-end justify-content-start">
                                                <img src="<?php echo base_url('assets/img/logo.svg'); ?>" width="130" class="img-fluid logo" alt="logo">
                                                <img src="<?php echo base_url('assets/img/logo-white.svg'); ?>" width="130" class="img-fluid logo-white d-none" alt="logo">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <div class="row g-4 justify-content-between align-items-center border-bottom pb-4">
                                        <div class="col-md-4">
                                            <h6 class="mb-2">Invoice From</h6>
                                            <p class="text-dark fw-semibold mb-2">DreamsPOS</p>
                                            <p class="mb-2">15 Hodges Mews, High Wycombe HP12 3JL,United Kingdom</p>
                                            <p class="mb-0">Phone : +1 45659 96566</p>
                                        </div>
                                        <div class="col-md-4">
                                            <h6 class="mb-2">Bill To </h6>
                                            <p class="text-dark fw-semibold mb-2">Andrew Fletcher</p>
                                            <p class="mb-2">1147 Rohan Drive Suite,Burlington, VT / 8202115 United Kingdom</p>
                                            <p class="mb-0">Phone : +1 45659 96566</p>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="d-flex align-items-center justify-content-md-center">
                                                <img src="<?php echo base_url('assets/img/invoices/paid-invoices.svg'); ?>" alt="paid-invoices-img">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <h6 class="mb-3">Items Details</h6>
                                    <div class="table-responsive table-nowrap">
                                        <table class="table mb-0 border ">
                                            <thead class="thead-light">
                                                <tr>
                                                    <th>#</th>
                                                    <th>Item Details</th>
                                                    <th>Quantity</th>
                                                    <th>Rate</th>
                                                    <th>Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Grilled Salmon Steak</td>
                                                    <td>2</td>
                                                    <td>$200.00</td>
                                                    <td>$396.00</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Crispy Bacon Bits</td>
                                                    <td>1</td>
                                                    <td>$350.00</td>
                                                    <td>$365.75</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Side Fries</td>
                                                    <td>1</td>
                                                    <td>$399.00</td>
                                                    <td>$398.90</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Lemon Wedge</td>
                                                    <td>4</td>
                                                    <td>$100.00</td>
                                                    <td>$396.00</td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="mb-0">
                                    <div class="row g-4 justify-content-between align-items-center">
                                        <div class="col-md-6">
                                            <h6 class="mb-2">Terms and Conditions</h6>
                                            <div class="mb-4">
                                                <p class="mb-0">1. Goods once sold cannot be taken back or exchanged.</p>
                                                <p class="mb-0">2. We are not the manufacturers the company provides warranty</p>
                                            </div>
                                            <div class="px-3 py-2 bg-light">
                                                <p class="mb-0">Note : Please ensure payment is made within 7 days of invoice date.</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-5 col-md-6">
                                            <div class="mb-3">
                                                <div class="row align-items-center pb-3 border-bottom">
                                                    <div class="col-6">
                                                        <p class="text-dark fw-semibold mb-3">Amount</p>
                                                        <p class="text-dark fw-semibold mb-3">CGST (9%)</p>
                                                        <p class="text-dark fw-semibold mb-3">SGST (9%)</p>
                                                        <p class="text-dark fw-semibold mb-0">Discount (25%)</p>
                                                    </div>
                                                    <div class="col-6 text-end">
                                                        <p class="text-dark fw-semibold mb-3">$1,793.12</p>
                                                        <p class="text-dark fw-semibold mb-3">$18</p>
                                                        <p class="text-dark fw-semibold mb-3">$18</p>
                                                        <p class="text-danger fw-semibold mb-0">- $18</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-flex justify-content-between algin-item-center">
                                                <h6>Total ($)</h6>
                                                <h6>$1,972.43</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center algin-item-center">
                            <div class="d-flex justify-content-center algin-item-center flex-wrap gap-3">
                                <button type="button" class="btn btn-white d-flex align-items-center"><i class="icon-download me-1"></i>Download PDF</button>
                                <button type="button" class="btn btn-white d-flex align-items-center"><i class="icon-printer me-1"></i>Print Invoice</button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    <!-- View Invoices End -->
<?php }?>

<?php if ($page == 'reservations') {   ?>
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
                                        <select class="select2">
                                            <option>Select</option>
                                                <option>Adrian Hawk ( +1 66898 98985 )</option>
                                            <option>Adam Clark - +1 45474 21456</option>
                                        </select>
                                        <button class="btn btn-primary btn-icon" data-bs-toggle="modal" data-bs-target="#add_customer"><i class="icon-plus"></i></button>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <label class="form-label">Date & Time <span class="text-danger ms-1">*</span></label>
                                <div class="input-group w-auto input-group-flat">
                                    <input type="text" class="form-control" data-provider="flatpickr" data-date-format="d/m/Y" placeholder="dd/mm/yyyy">
                                    <span class="input-group-text">
                                        <i class="icon-calendar-fold"></i>
                                    </span>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <label class="form-label">Table <span class="text-danger"> *</span></label>
                                <select class="select">
                                    <option>Select</option>
                                    <option>Ethan Sullivan</option>
                                    <option>Matthew Collins</option>
                                    <option>Olivia Reed</option>
                                </select>
                            </div>

                            <div class="col-lg-6">
                                <label class="form-label">No of Guests <span class="text-danger"> *</span></label>
                                <input type="number" class="form-control">
                            </div>

                            <div class="col-lg-6">
                                <label class="form-label">Status <span class="text-danger"> *</span></label>
                                <select class="select">
                                    <option>Select</option>
                                    <option>Booked</option>
                                    <option>Cancelled</option>
                                    <option>Paid</option>
                                </select>
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
                                    <select class="select">
                                        <option>Select</option>
                                        <option selected>Adrian Hawk ( +1 66898 98985 )</option>
                                        <option selected>Adam Clark - +1 45474 21456</option>
                                        <option>Create “Ad”</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <label class="form-label">Date & Time <span class="text-danger ms-1">*</span></label>
                                <div class="input-group w-auto input-group-flat">
                                    <input type="text" class="form-control" data-provider="flatpickr" data-date-format="d/m/Y" placeholder="10/05/2025">
                                    <span class="input-group-text">
                                        <i class="icon-calendar-fold"></i>
                                    </span>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <label class="form-label">Table <span class="text-danger"> *</span></label>
                                <select class="select">
                                    <option>Select</option>
                                    <option selected>Ethan Sullivan</option>
                                    <option selected>Matthew Collins</option>
                                    <option>Olivia Reed</option>
                                </select>
                            </div>

                            <div class="col-lg-6">
                                <label class="form-label">No of Guests <span class="text-danger"> *</span></label>
                                <input type="number" class="form-control" value="10">
                            </div>

                            <div class="col-lg-6">
                                <label class="form-label">Status <span class="text-danger"> *</span></label>
                                <select class="select">
                                    <option>Select</option>
                                    <option selected>Booked</option>
                                    <option>Cancelled</option>
                                    <option>Paid</option>
                                </select>
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

    <!-- Start Modal  -->
    <div class="modal fade" id="delete_modal">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">
                <div class="modal-body text-center p-4">
                    <div class="mb-4">
                        <span class="avatar avatar-xxl rounded-circle bg-danger-subtle">
                            <img src="<?php echo base_url('assets/img/icons/trash-icon.svg'); ?>" alt="trash" class="img-fluid w-auto h-auto">
                        </span>
                    </div>
                    <h4 class="mb-1">Delete Confirmation</h4>
                    <p class="mb-4">Are you sure you want to delete?</p>
                    <div class="d-flex justify-content-between gap-2">
                        <a href="#" class="btn btn-light w-100" data-bs-dismiss="modal">Close</a>
                        <a href="<?php echo base_url('reservations'); ?>" class="btn btn-danger w-100">Delete</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Modal  -->

    <!-- Add Customer modal -->
    <div class="modal fade" id="add_customer">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <h4 class="modal-title">Add Customer</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form action="<?php echo base_url('reservations'); ?>">
                    <div class="modal-body pt-0">

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
                                <label class="form-label">Date of Birth</label>
                                <div class="input-group w-auto input-group-flat">
                                    <input type="text" class="form-control" data-provider="flatpickr" data-date-format="d/m/Y" placeholder="dd/mm/yyyy">
                                    <span class="input-group-text">
                                        <i class="icon-calendar-fold"></i>
                                    </span>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <label class="form-label">Gender</label>
                                <select class="select">
                                    <option>Select</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Otherwise</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer d-flex align-items-center justify-content-between flex-nowrap gap-2">
                        <button type="button" class="btn btn-light w-100 m-0" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary w-100 m-0">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
<?php }?>

<?php if ($page == 'role-permission') {   ?>
    <!-- Add Role -->
    <div class="modal fade" id="add_role">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 p-4 pb-3">
                    <h4 class="modal-title">Add Role</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form action="<?php echo base_url('role-permission'); ?>">
                    <div class="modal-body p-4 pt-1">
                        <div class="mb-3">
                            <label class="form-label">Role Name<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control">
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
    <!-- Add Role End -->
<?php }?>

<?php if ($page == 'table') {   ?>
    <!-- Add Category -->
    <div class="modal fade" id="add_table">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 p-4 pb-3">
                    <h4 class="modal-title">Add Table</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form action="<?php echo base_url('table'); ?>">
                    <div class="modal-body p-4 pt-1">
                        <div class="mb-3">
                            <label class="form-label">Table Name<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Floor<span class="text-danger"> *</span></label>
                            <select class="select">
                                <option>Select</option>
                                <option>1st</option>
                                <option>2nd</option>
                                <option>3rd</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Table Size<span class="text-danger"> *</span></label>
                            <select class="select">
                                <option>Select</option>
                                <option>Table 1</option>
                                <option>Table 2</option>
                                <option>Table 3</option>
                                <option>Table 4</option>
                                <option>Table 5</option>
                                <option>Table 6</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">No of Guests<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Status<span class="text-danger"> *</span></label>
                            <select class="select">
                                <option>Select</option>
                                <option>Available</option>
                                <option>Booked</option>
                            </select>
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
                <form action="<?php echo base_url('table'); ?>">
                    <div class="modal-body p-4 pt-1">
                        <div class="mb-3">
                            <label class="form-label">Table Name<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" value="Table 1">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Floor<span class="text-danger"> *</span></label>
                            <select class="select">
                                <option>Select</option>
                                <option selected>1st</option>
                                <option>2nd</option>
                                <option>3rd</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Table Size<span class="text-danger"> *</span></label>
                            <select class="select">
                                <option>Select</option>
                                <option selected>Table 1</option>
                                <option>Table 2</option>
                                <option>Table 3</option>
                                <option>Table 4</option>
                                <option>Table 5</option>
                                <option>Table 6</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">No of Guests<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" value="6">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Status<span class="text-danger"> *</span></label>
                            <select class="select">
                                <option>Select</option>
                                <option selected>Available</option>
                                <option>Booked</option>
                            </select>
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
                            <img src="<?php echo base_url('assets/img/icons/trash-icon.svg'); ?>" alt="trash" class="img-fluid w-auto h-auto">
                        </span>
                    </div>
                    <h4 class="mb-1">Delete Confirmation</h4>
                    <p class="mb-4">Are you sure you want to delete?</p>
                    <div class="d-flex justify-content-center gap-2">
                        <a href="#" class="btn btn-light w-100" data-bs-dismiss="modal">Close</a>
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
                    <select class="select">
                        <option>Select</option>
                        <option>Active</option>
                        <option>Inactive</option>
                    </select>
                </div>
            </div>
            <div class="d-flex align-items-center gap-2 mt-auto">
                <a href="#" class="btn btn-light w-100">Reset</a>
                <a href="#" class="btn btn-primary w-100">Apply</a>
            </div>
        </div>
    </div>
    <!-- End Filter -->
<?php }?>

<?php if ($page == 'tax-settings') {   ?>
    <!-- Add Category -->
    <div class="modal fade" id="add_tax">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 p-4 pb-3">
                    <h4 class="modal-title">Add Tax</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form action="<?php echo base_url('tax-settings'); ?>">
                    <div class="modal-body p-4 pt-1">
                        <div class="mb-3">
                            <label class="form-label">Title<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Tax Rate (%)<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Tax Type<span class="text-danger"> *</span></label>
                            <select class="select">
                                <option>Select</option>
                                <option>Inclusive / Exclusive</option>
                                <option>Exclusive</option>
                            </select>
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
    <div class="modal fade" id="edit_tax">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 p-4 pb-3">
                    <h4 class="modal-title">Edit Tax</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form action="<?php echo base_url('tax-settings'); ?>">
                    <div class="modal-body p-4 pt-1">
                        <div class="mb-3">
                            <label class="form-label">Title<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" value="Inclusive / Exclusive">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Tax Rate (%)<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" value="9%">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Tax Type<span class="text-danger"> *</span></label>
                            <select class="select">
                                <option>Select</option>
                                <option selected>Inclusive / Exclusive</option>
                                <option>Exclusive</option>
                            </select>
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
                            <img src="<?php echo base_url('assets/img/icons/trash-icon.svg'); ?>" alt="trash" class="img-fluid w-auto h-auto">
                        </span>
                    </div>
                    <h4 class="mb-1">Delete Confirmation</h4>
                    <p class="mb-4">Are you sure you want to delete?</p>
                    <div class="d-flex justify-content-center gap-2">
                        <a href="#" class="btn btn-light w-100" data-bs-dismiss="modal">Close</a>
                        <a href="<?php echo base_url('tax-settings'); ?>" class="btn btn-danger w-100">Delete</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Modal  -->
<?php }?>

<?php if ($page == 'users') {   ?>
    <!-- Add users -->
    <div class="modal fade" id="add_users">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 p-4 pb-3">
                    <h4 class="modal-title">Add New User</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form action="<?php echo base_url('users'); ?>">
                    <div class="modal-body p-4 pt-1">
                        <div class="d-flex align-items-center gap-3 flex-wrap mb-4">
                            <div class="avatar avatar-3xl border bg-light">
                                <i class="icon-images fs-28 text-dark"></i>
                            </div>
                            <div>
                                <label class="form-label">User Image<span class="text-danger"> *</span></label>
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
                        <div class="row algin-items-center justify-content-center">
                            <div class="col-lg-6">
                                <div class="mb-3">
                                        <label class="form-label">First Name<span class="text-danger"> *</span></label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                        <label class="form-label">Last Name<span class="text-danger"> *</span></label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Role<span class="text-danger"> *</span></label>
                            <select class="select">
                                <option>Select</option>
                                <option>Admin / Owner</option>
                                <option>Supervisor</option>
                                <option>Cashier</option>
                                <option>Chef</option>
                                <option>Waiter</option>
                            </select>
                        </div>
                            <div class="mb-3">
                            <label class="form-label">Phone Number<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Status<span class="text-danger"> *</span></label>
                            <select class="select">
                                <option>Select</option>
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>
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
    <!-- Add users End -->

    <!-- Edit users -->
    <div class="modal fade" id="edit_users">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 p-4 pb-3">
                    <h4 class="modal-title">Edit User</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form action="<?php echo base_url('users'); ?>">
                    <div class="modal-body p-4 pt-1">
                        <div class="d-flex align-items-center gap-3 flex-wrap mb-4">
                            <div class="avatar avatar-3xl border bg-light mb-3">
                                <img src="<?php echo base_url('assets/img/profiles/avatar-03.jpg'); ?>" alt="item" class="img-fluid rounded">
                            </div>
                            <div>
                                <label class="form-label">User Image<span class="text-danger"> *</span></label>
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
                        <div class="row algin-items-center justify-content-center">
                            <div class="col-lg-6">
                                <div class="mb-3">
                                        <label class="form-label">First Name<span class="text-danger"> *</span></label>
                                    <input type="text" class="form-control" value="Emily">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                        <label class="form-label">Last Name<span class="text-danger"> *</span></label>
                                    <input type="text" class="form-control" value="Johnson">
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Role<span class="text-danger"> *</span></label>
                            <select class="select">
                                <option>Select</option>
                                <option>Admin / Owner</option>
                                <option selected>Supervisor</option>
                                <option>Cashier</option>
                                <option>Chef</option>
                                <option>Waiter</option>
                            </select>
                        </div>
                            <div class="mb-3">
                            <label class="form-label">Phone Number<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" value="+1 34567 89012">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Status<span class="text-danger"> *</span></label>
                            <select class="select">
                                <option>Select</option>
                                <option selected>Active</option>
                                <option>Inactive</option>
                            </select>
                        </div>
                        <div class="d-flex align-items-center justify-content-end gap-2 pt-1">
                            <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Edit users End -->

    <!-- User Permission -->
    <div class="modal fade" id="user_permission">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header border-0 p-4 pb-3">
                    <h4 class="modal-title">Permissions</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form action="<?php echo base_url('users'); ?>">
                    <div class="modal-body p-4 pt-1">
                        <div class="d-flex justify-content-end mb-3">
                            <div class="form-check form-check-md">
                                <input class="form-check-input" type="checkbox" id="select-all">
                                <label for="select-all">Revert All</label>
                            </div>
                        </div>
                        <div class="table-responsive mb-3">
                            <table class="table m-0 table-nowrap bg-white border">
                                <thead>
                                    <tr>
                                        <th>Module</th>
                                        <th>View</th>
                                        <th>Add</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                        <th>Export</th>
                                        <th>Approved/Void</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="text-dark fw-medium">Dashboard</td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td class="text-dark fw-medium">POS</td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td class="text-dark fw-medium">Hold/Resume Sale</td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td class="text-dark fw-medium">Refund / Return</td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td class="text-dark fw-medium">Products</td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td class="text-dark fw-medium">Categories</td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td class="text-dark fw-medium">Customers</td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td class="text-dark fw-medium">Reports</td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td class="text-dark fw-medium">Settings</td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-check-md ps-0">
                                                <input class="form-check-input ms-0" type="checkbox">
                                            </div>
                                        </td>

                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div class="d-flex align-items-center justify-content-end gap-2 pt-1">
                            <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary">Save Permission</button>
                        </div>
                    </div>
                </form>
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
                            <img src="<?php echo base_url('assets/img/icons/trash-icon.svg'); ?>" alt="trash" class="img-fluid w-auto h-auto">
                        </span>
                    </div>
                    <h4 class="mb-1">Delete Confirmation</h4>
                    <p class="mb-4">Are you sure you want to delete?</p>
                    <div class="d-flex justify-content-center gap-2">
                        <a href="#" class="btn btn-light w-100" data-bs-dismiss="modal">Close</a>
                        <a href="<?php echo base_url('users'); ?>" class="btn btn-danger w-100">Delete</a>
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
                    <label class="form-label">Name<span class="text-danger"> *</span></label>
                    <div class="dropdown">
                        <a href="#" class="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                            Select
                        </a>
                        <div class="dropdown-menu dropdown-menu-end p-3 w-100">
                            <h6 class="fs-14 fw-semibold mb-3">Name</h6>
                            <div class="input-icon-end input-icon position-relative mb-3">
                                <span class="input-icon-addon">
                                    <i class="icon-search text-dark"></i>
                                </span>
                                <input type="text" class="form-control form-control-md" placeholder="Search">
                            </div>
                            <div class="vstack gap-2">
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">John Smith
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Emily Johnson
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">David Williams
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Ashley Brown
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Michael Davis
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-label">Role<span class="text-danger"> *</span></label>
                    <div class="dropdown">
                        <a href="#" class="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                            Select
                        </a>
                        <div class="dropdown-menu dropdown-menu-end p-3 w-100">
                            <h6 class="fs-14 fw-semibold mb-3">Role</h6>
                            <div class="input-icon-end input-icon position-relative mb-3">
                                <span class="input-icon-addon">
                                    <i class="icon-search text-dark"></i>
                                </span>
                                <input type="text" class="form-control form-control-md" placeholder="Search">
                            </div>
                            <div class="vstack gap-2">
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Admin / Owner
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Supervisor
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Cashier
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Chef
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Waiter
                                    </label>
                                </div>
                                <div>
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Delivery
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div class="mb-3">
                    <label class="form-label">Status<span class="text-danger"> *</span></label>
                    <select class="select">
                        <option>Select</option>
                        <option>Active</option>
                        <option>Inactive</option>
                    </select>
                </div>
            </div>
            <div class="d-flex align-items-center gap-2 mt-auto border-0">
                <a href="#" class="btn btn-light w-100">Reset</a>
                <a href="#" class="btn btn-primary w-100">Apply</a>
            </div>
        </div>
    </div>
    <!-- End Filter -->
<?php }?>
