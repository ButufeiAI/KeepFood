<template>
    <!-- Add Role -->
    <div class="modal fade" id="add_role">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 p-4 pb-3">
                    <h4 class="modal-title">Add Role</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form action="#">
                    <div class="modal-body p-4 pt-1">
                        <div class="mb-3">
                            <label class="form-label">Role Name<span class="text-danger"> *</span></label>
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
    <!-- Add Role End -->
</template>