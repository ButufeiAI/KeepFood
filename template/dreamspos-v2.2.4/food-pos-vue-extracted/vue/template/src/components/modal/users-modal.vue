<template>
    <!-- Add users -->
    <div class="modal fade" id="add_users">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 p-4 pb-3">
                    <h4 class="modal-title">Add New User</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form action="#">                             
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
                            <vue-select 
                                :options="Role"
                                v-model="selected"
                                placeholder="Select"
                            />
                        </div>
                            <div class="mb-3">
                            <label class="form-label">Phone Number<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Status<span class="text-danger"> *</span></label>
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
    <!-- Add users End -->

    <!-- Edit users -->
    <div class="modal fade" id="edit_users">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 p-4 pb-3">
                    <h4 class="modal-title">Edit User</h4>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form action="#">                             
                    <div class="modal-body p-4 pt-1">             
                        <div class="d-flex align-items-center gap-3 flex-wrap mb-4">
                                <div class="avatar avatar-3xl border bg-light mb-3">
                                <img src="@/assets/img/profiles/avatar-03.jpg" alt="item" class="img-fluid rounded">
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
                            <vue-select 
                                :options="Role"
                                v-model="selectedTwo"
                                placeholder="Select"
                            />
                        </div>
                            <div class="mb-3">
                            <label class="form-label">Phone Number<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" value="+1 34567 89012">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Status<span class="text-danger"> *</span></label>
                            <vue-select 
                                :options="Status"
                                v-model="selectedThree"
                                placeholder="Select"
                            />
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
                <form action="#">                             
                    <div class="modal-body p-4 pt-1">  
                        <div class="d-flex justify-content-end mb-3">
                            <div class="form-check form-check-md">
                                <input class="form-check-input" type="checkbox" id="select-all">
                                <label for="select-all">Revert All</label>
                            </div>  
                        </div> 
                        <div class="table-responsive mb-3">
                            <table class="table m-0 table-nowrap bg-white">
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
                <div class="mb-0">
                    <label class="form-label">Status<span class="text-danger"> *</span></label>
                    <vue-select 
                        :options="Status"
                        v-model="selectedFour"
                        placeholder="Select"
                    />
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
            selectedOne: [],
            selectedTwo: "Supervisor",
            selectedThree: "Active",
            selectedFour: [],
            Role: [
                { label: "Select", value: "Select" },
                { label: "Admin / Owner", value: "Admin / Owner" },
                { label: "Supervisor", value: "Supervisor" },
                { label: "Cashier", value: "Cashier" },
                { label: "Chef", value: "Chef" },
                { label: "Waiter", value: "Waiter" },
            ],
            Status: [
                { label: "Select", value: "Select" },
                { label: "Active", value: "Active" },
                { label: "Inactive", value: "Inactive" },
            ],
        }
    }
}
</script>