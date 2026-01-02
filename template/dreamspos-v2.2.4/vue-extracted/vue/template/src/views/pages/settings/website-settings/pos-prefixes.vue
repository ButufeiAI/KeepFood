<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content settings-content">
      <div class="page-header settings-pg-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4>Settings</h4>
            <h6>Manage your settings on portal</h6>
          </div>
        </div>
        <ul class="table-top-head">
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"
              ><i class="ti ti-refresh"></i
            ></a>
          </li>
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" @click="toggleHeader"><i class="ti ti-chevron-up"></i></a>
          </li>
        </ul>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="settings-wrapper d-flex">
            <settings-sidebar></settings-sidebar>
            <div class="card flex-fill mb-0">
              <div class="card-header">
                <h4 class="fs-18 fw-bold">Prefixes</h4>
              </div>
              <div class="card-body">
                <form @submit.prevent="submitForm">
                  <div class="row">
                    <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Product (SKU)</label>
                        <input type="text" class="form-control" value="SKU -" />
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Supplier</label>
                        <input type="text" class="form-control" value="SUP -" />
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Purchase</label>
                        <input type="text" class="form-control" value="PU -" />
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Purchase Return</label>
                        <input type="text" class="form-control" value="PR -" />
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Sales</label>
                        <input type="text" class="form-control" value="SA -" />
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Sales Return</label>
                        <input type="text" class="form-control" value="SR -" />
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Customer</label>
                        <input type="text" class="form-control" value="CT -" />
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Expense</label>
                        <input type="text" class="form-control" value="EX -" />
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Stock Transfer</label>
                        <input type="text" class="form-control" value="ST -" />
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Stock Adjustmentt</label>
                        <input type="text" class="form-control" value="SA -" />
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Sales Order</label>
                        <input type="text" class="form-control" value="SO -" />
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">POS Invoice</label>
                        <input type="text" class="form-control" value="PINV -" />
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Estimation</label>
                        <input type="text" class="form-control" value="EST -" />
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Transaction</label>
                        <input type="text" class="form-control" value="TRN -" />
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Employee</label>
                        <input type="text" class="form-control" value="EMP -" />
                      </div>
                    </div>
                  </div>
                  <div class="text-end settings-bottom-btn mt-0">
                    <button type="button" class="btn btn-secondary me-2">Cancel</button>
                    <button type="submit" class="btn btn-primary">Save Changes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3"
    >
      <p class="mb-0">
        {{ new Date().getFullYear() }} &copy; DreamsPOS. All Right Reserved
      </p>
      <p>
        Designed &amp; Developed by
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    submitForm() {
      this.$router.push("/website-settings/prefixes");
    },
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
