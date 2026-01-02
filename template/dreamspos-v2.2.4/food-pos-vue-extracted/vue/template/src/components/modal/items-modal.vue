<template>
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
                <form action="#">                             
                    <div class="modal-body p-4 pt-1">             
                        <div class="row row-gap-3">
                            <div class="col-lg-6 col-sm-12">
                                <div class="bg-light p-3 rounded">
                                    <img src="@/assets/img/items/food-17.jpg" alt="item" class="img-fluid w-100">
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
                                                    <span class="avatar avatar-lg border rounded-circle me-1"><img src="@/assets/img/items/food-17.jpg" alt="item" class="img-fluid rounded-circle"></span>
                                                    <h6 class="fs-12 fw-medium mb-0">Extra Chicken</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="items-card">  
                                                <div class="d-flex align-items-center">
                                                    <span class="avatar avatar-lg border rounded-circle me-1"><img src="@/assets/img/items/food-18.jpg" alt="item" class="img-fluid rounded-circle"></span>
                                                    <h6 class="fs-12 fw-medium mb-0 text-nowrap">Premium Tortilla</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="items-card">  
                                                <div class="d-flex align-items-center">
                                                    <span class="avatar avatar-lg border rounded-circle me-1"><img src="@/assets/img/items/food-19.jpg" alt="item" class="img-fluid rounded-circle"></span>
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
                <form action="#">                             
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
                                    <vue-select 
                                        :options="Category"
                                        v-model="selected"
                                        placeholder="select"
                                    />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label class="form-label">Tax<span class="text-danger"> *</span></label>
                                    <vue-select 
                                        :options="Tax"
                                        v-model="selectedOne"
                                        placeholder="select"
                                    />
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
                                    <div class="rowsContainer">
                                        <div v-for="(variation, index) in variations" :key="index" class="row">
                                            <div class="col-lg-5">
                                                <div class="mb-3">
                                                    <label class="form-label">Size<span class="text-danger"> *</span></label>
                                                    <input type="text" class="form-control" v-model="variation.size">
                                                </div>
                                            </div>
                                            <div class="col-lg-5">
                                                <div class="mb-3">
                                                    <label class="form-label">Price<span class="text-danger"> *</span></label>
                                                    <input type="text" class="form-control" v-model="variation.price">
                                                </div>
                                            </div>
                                            <div class="col-lg-2 d-flex align-items-center gap-2 mt-3">
                                                <span class="btn btn-icon btn-sm btn-white rounded-circle deleteRowBtn" @click="removeVariation(index)">
                                                    <i class="icon-trash-2 text-danger"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" class="addRowBtn btn btn-light btn-sm" @click="addVariation">
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
                                        <div v-for="(addon, index) in addons" :key="index" class="row">
                                            <div class="col-lg-5">
                                                <div class="mb-3">
                                                    <label class="form-label">Name<span class="text-danger"> *</span></label>
                                                    <input type="text" class="form-control" v-model="addon.name">
                                                </div>
                                            </div>
                                            <div class="col-lg-5">
                                                <div class="mb-3">
                                                    <label class="form-label">Price($)<span class="text-danger"> *</span></label>
                                                    <input type="text" class="form-control" v-model="addon.price">
                                                </div>
                                            </div>
                                            <div class="col-lg-2 d-flex align-items-center gap-2 mt-3">
                                                <span class="btn btn-icon btn-sm btn-white rounded-circle deleteRowBtn" @click="removeAddon(index)">
                                                    <i class="icon-trash-2 text-danger"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <a href="#" class="addRowBtn btn btn-light btn-sm" @click="addAddons">
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
                <form action="#">                             
                    <div class="modal-body p-4 pt-1">   
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="mb-3 d-flex align-items-center flex-wrap gap-3">
                                    <div class="avatar avatar-3xl border bg-light mb-3">
                                        <img src="@/assets/img/items/food-10.jpg" alt="item" class="img-fluid rounded">
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
                                    <vue-select 
                                        :options="Category"
                                        v-model="selectedTwo"
                                        placeholder="select"
                                    />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label class="form-label">Tax<span class="text-danger"> *</span></label>
                                    <vue-select 
                                        :options="Tax"
                                        v-model="selectedThree"
                                        placeholder="select"
                                    />
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
                                    <div v-for="(variationOne, index) in variationsOne" :key="index" class="row">
                                        <div class="col-lg-5">
                                            <div class="mb-3">
                                                <label class="form-label">Size<span class="text-danger"> *</span></label>
                                                <input type="text" class="form-control" v-model="variationOne.size">
                                            </div>
                                        </div>
                                        <div class="col-lg-5">
                                            <div class="mb-3">
                                                <label class="form-label">Price($)<span class="text-danger"> *</span></label>
                                                <input type="text" class="form-control" v-model="variationOne.price">
                                            </div>
                                        </div>
                                        <div class="col-lg-2 d-flex align-items-center gap-2 mt-3">
                                            <span class="btn btn-icon btn-sm btn-white rounded-circle deleteRowBtn" @click="removeVariationOne(index)">
                                                <i class="icon-trash-2 text-danger"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <a href="#" class="addRowBtn btn btn-light btn-sm" @click="addVariationOne">
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
                                    <!-- TEMPLATE for this group -->
                                    <div v-for="(addonOne, index) in addonsOne" :key="index" class="row">
                                        <div class="col-lg-5">
                                            <div class="mb-3">
                                                <label class="form-label">Name<span class="text-danger"> *</span></label>
                                                <input type="text" class="form-control" v-model="addonOne.name">
                                            </div>
                                        </div>
                                        <div class="col-lg-5">
                                            <div class="mb-3">
                                                <label class="form-label">Price($)<span class="text-danger"> *</span></label>
                                                <input type="text" class="form-control" v-model="addonOne.price">
                                            </div>
                                        </div>
                                        <div class="col-lg-2 d-flex align-items-center gap-2 mt-3">
                                            <span class="btn btn-icon btn-sm btn-white rounded-circle deleteRowBtn" @click="removeAddonOne(index)">
                                                <i class="icon-trash-2 text-danger"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <a href="#" class="addRowBtn btn btn-light btn-sm" @click="addAddonsOne">
                                        <i class="icon-plus"></i>Add
                                    </a>
                                    
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-end gap-2">
                            <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Item</button>
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
                            <img src="@/assets/img/icons/trash-icon.svg" alt="trash" class="img-fluid w-auto h-auto">
                        </span>
                    </div>
                    <h4 class="mb-1">Delete Confirmation</h4>
                    <p class="mb-4">Are you sure you want to delete?</p>
                    <div class="d-flex justify-content-center gap-2">
                        <a href="#" class="btn btn-light w-100" data-bs-dismiss="modal">Close</a>
                        <router-link to="/menu-management/items" class="btn btn-danger w-100">Delete</router-link>
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
                            <img src="@/assets/img/icons/hide.svg" alt="trash" class="img-fluid w-auto h-auto">
                        </span>
                    </div>
                    <h4 class="mb-1">Hide Item Confirmation</h4>
                    <p class="mb-4">Are you sure you want to hide?</p>
                    <div class="d-flex justify-content-center gap-2">
                        <a href="#" class="btn btn-light w-100" data-bs-dismiss="modal">Close</a>
                        <router-link to="/menu-management/items" class="btn btn-info w-100">Hide</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Modal  -->   
</template>

<script>
export default {
    data() {
        return {
            variations: [
                { size: '', price: '' }
            ],
            variationsOne: [
                { size: 'M', price: '22.25' }
            ],
            addons: [
                { size: '', price: '' }
            ],
            addonsOne: [
                { size: '', price: '' }
            ],
            selected: [],
            selectedOne: [],
            selectedTwo: "Salads",
            selectedThree: "CGST(9%)",
            Category: [
                { label: "Select", value: "Select" },
                { label: "Sea Food", value: "Sea Food" },
                { label: "Pizza", value: "Pizza" },
                { label: "Salads", value: "Salads" },
                { label: "Tacos", value: "Tacos" },
                { label: "Burgers", value: "Burgers" },
            ],
            Tax: [
                { label: "Select", value: "Select" },
                { label: "CGST(9%)", value: "CGST(9%)" },
                { label: "SGST(9%)", value: "SGST(9%)" },
                { label: "IGST(18%)", value: "IGST(18%)" },
                { label: "VAT(10%)", value: "VAT(10%)" },
                { label: "Service Tax(15%)", value: "Service Tax(15%)" },
            ],
        }
    },
    methods: {
        addVariation() {
            this.variations.push({ size: '', price: '' });
        },
        removeVariation(index) {
            this.variations.splice(index, 1);
        },
        addAddons() {
            this.addons.push({ name: '', price: '' });
        },
        removeAddon(index) {
            this.addons.splice(index, 1);
        },
        addVariationOne() {
            this.variationsOne.push({ size: '', price: '' });
        },
        removeVariationOne(index) {
            this.variationsOne.splice(index, 1);
        },
        addAddonsOne() {
            this.addonsOne.push({ size: '', price: '' });
        },
        removeAddonOne(index) {
            this.addonsOne.splice(index, 1);
        },
    }
}
</script>