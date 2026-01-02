<template>
    <!-- Add Category -->
    <div class="modal fade" id="add_tax">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 p-4 pb-3">
                    <h4 class="modal-title">Add Tax</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form action="#">                             
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
                            <vue-select 
                                :options="Tax"
                                v-model="selected"
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
    <div class="modal fade" id="edit_tax">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 p-4 pb-3">
                    <h4 class="modal-title">Edit Tax</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form action="#">                             
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
                            <vue-select 
                                :options="Tax"
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
    <!-- Edit Category End -->
</template>

<script>
export default {
    data(){
        return {
            selected: [],
            selectedOne: "CGST",
            Tax: [
                { label: "Select", value: "Select" },
                { label: "CGST", value: "CGST" },
                { label: "SGST", value: "SGST" },
                { label: "IGST", value: "IGST" },
                { label: "VAT", value: "VAT" },
                { label: "Service Tax", value: "Service Tax" },
            ]
        }
    }
}
</script>