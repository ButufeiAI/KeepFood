<template>
    <!-- Add Stock -->
  <div class="modal fade" id="add-stock">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Add Stock</h4>
          </div>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Warehouse <span class="text-danger ms-1">*</span></label
                  >
                  <vue-select
                    :options="Warehouse"
                    v-model="selected"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Store <span class="text-danger ms-1">*</span></label
                  >
                  <vue-select :options="Store" v-model="selectedOne" placeholder="Select" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Responsible Person <span class="text-danger ms-1">*</span></label
                  >
                  <vue-select :options="ResponsiblePerson" v-model="selectedTwo" placeholder="Select" />
                </div>
              </div>
              <div class="col-lg-12">
								<div class="search-form mb-0">
									<label class="form-label">Product <span class="text-danger ms-1">*</span></label>
									<div class="position-relative">
                      <input type="text" class="form-control" placeholder="Select Product">
                      <vue-feather type="search" class="search"></vue-feather>
                  </div>
								</div>
							</div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-md btn-dark me-2"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="submit" class="btn btn-md btn-primary">Add Stock</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Stock -->
</template>

<script>
export default {
    data(){
        return{
            selected:null,
            selectedOne: null,
            selectedTwo: null,
            Warehouse:[
                {label: "Select", Value:"Select"},
                {label: "Quaint Warehouse", Value:"Quaint Warehouse"},
                {label: "Lobar Handy", Value:"Lobar Handy"},
            ],
            Store:[
                {label: "Select", Value:"Select"},
                {label: "Selosy", Value:"Selosy"},
                {label: "Logerro", Value:"Logerro"},
            ],
            ResponsiblePerson:[
                {label: "Select", Value:"Select"},
                {label: "Steven", Value:"Steven"},
                {label: "Gravely", Value:"Gravely"},
            ],
        }
    }
}
</script>