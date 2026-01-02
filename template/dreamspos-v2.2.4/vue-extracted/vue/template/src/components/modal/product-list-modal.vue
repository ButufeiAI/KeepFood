<template>
  <!-- Import Product -->
  <div class="modal fade" id="view-notes">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="page-wrapper-new p-0">
						<div class="content">
							<div class="modal-header">
								<div class="page-title">
									<h4>Import Product</h4>
								</div>
								<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form @submit.prevent="submitForm">
								
									<div class="row">
										<div class="col-12">
											<div class="mb-3">
												<label>Product<span class="ms-1 text-danger">*</span></label>
												<vue-select 
													:options="Product"
													v-model="selected"
													placeholder="Choose"
												/>
											</div>
										</div>
										<div class="col-sm-6 col-12">
											<div class="mb-3">
												<label>Category<span class="ms-1 text-danger">*</span></label>
												<vue-select 
													:options="Category"
													v-model="selectedOne"
													placeholder="Choose"
												/>
											</div>
										</div>
										<div class="col-sm-6 col-12">
											<div class="mb-3">
												<label>Sub Category<span class="ms-1 text-danger">*</span></label>
												<vue-select 
													:options="Subcategory"
													v-model="selectedTwo"
													placeholder="Choose"
												/>
											</div>
										</div>
										<div class="col-lg-12 col-sm-6 col-12">
											<div class="row">
												<div>
													<div class="modal-footer-btn download-file">
														<a href="javascript:void(0)" class="btn btn-submit">Download Sample File</a>
													</div>
												</div>
											</div>
										</div>
										<div class="col-lg-12">
											<div class="mb-3 image-upload-down">
												<label class="form-label">Upload CSV File</label>
												<div class="image-upload download">
													<input type="file">
													<div class="image-uploads">
														<img src="@/assets/img/download-img.png" alt="img">
														<h4>Drag and drop a <span>file to upload</span></h4>
													</div>
												</div>
											</div>
										</div>
										<div class="col-lg-12 col-sm-6 col-12">
											<div class="mb-3">
												<label class="form-label">Created by<span class="ms-1 text-danger">*</span></label>
												<input type="text" class="form-control">
											</div>
										</div>
									</div>
									<div class="row">
									<div class="col-lg-12">
										<div class="mb-3 mb-3">
											<label class="form-label">Description</label>
											<textarea class="form-control"></textarea>
											<p class="mt-1">Maximum 60 Characters</p>
										</div>
									</div>
								</div>
								</form>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
								<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3">Submit</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Import Product -->

  <!-- delete modal -->
  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content p-5 px-3 text-center">
            <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>
            <h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Product</h4>
            <p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete product?</p>
            <div class="modal-footer-btn mt-3 d-flex justify-content-center">
              <button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3">Yes Delete</button>
            </div>						
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /delete modal -->
</template>
<script>
export default {
  data() {
    return {
			selected: [],
			selectedOne: [],
			selectedTwo: [],
			Product: [
				{label: "Choose", value: "Choose"}, 
				{label: "Bold V3.2", value: "Bold V3.2"}, 
				{label: "Nike Jordan", value: "Nike Jordan"}, 
				{label: "Iphone 14 Pro", value: "Iphone 14 Pro"}, 
			],
			Category: [
				{label: "Choose", value: "Choose"}, 
				{label: "Laptop", value: "Laptop"}, 
				{label: "Electronics", value: "Electronics"}, 
				{label: "Shoe", value: "Shoe"}, 
			],
			Subcategory: [
				{label: "Choose", value: "Choose"}, 
				{label: "Lenovo", value: "Lenovo"}, 
				{label: "Bolt", value: "Bolt"}, 
				{label: "Nike", value: "Nike"}, 
			]
    	};
  	},
	methods: {
		submitForm() {
			this.$router.push("/inventory/product-list");
		},
	},
};
</script>
