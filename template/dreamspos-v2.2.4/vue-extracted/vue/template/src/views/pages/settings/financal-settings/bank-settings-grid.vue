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
            <div class="card flex-fill mb-0 w-50">
              <div class="card-header d-flex align-items-center justify-content-between">
                <h4>Bank Account</h4>
                <div class="page-btn">
                  <a
                    href="#"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#add-account"
                    ><i class="ti ti-circle-plus me-1"></i>Add New Account</a
                  >
                </div>
              </div>
              <div class="card-body pb-0">
                <div class="row">
                  <div
                    class="col-xxl-4 col-xl-6 col-lg-12 col-sm-6"
                    v-for="(bank, index) in banks"
                    :key="index"
                  >
                    <div
                      class="card"
                      :class="{ 'bank-box': true, active: bank.active }"
                      @click="makeActive(index)"
                    >
                      <div class="card-body">
                        <div class="mb-4">
                          <h5 class="mb-1">{{ bank.name }}</h5>
                          <p>{{ bank.cardNumber }}</p>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                          <div>
                            <span>Holder Name</span>
                            <h6>{{ bank.holderName }}</h6>
                          </div>
                          <div class="hstack gap-2 fs-15">
                            <a
                              href="#"
                              class="btn btn-icon btn-sm btn-info-light"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-account"
                              ><i data-feather="edit" class="feather-edit"></i
                            ></a>
                            <a
                              href="#"
                              class="btn btn-icon btn-sm btn-danger-light"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-modal"
                              ><i data-feather="trash-2" class="feather-trash-2"></i
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3"
    >
      <p class="mb-0">2014 - 2025 &copy; DreamsPOS. All Right Reserved</p>
      <p>
        Designed &amp; Developed by
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>
  <bank-settings-grid-modal></bank-settings-grid-modal>
</template>
<script>

export default {
  data() {
    return {
      banks: [
        {
          name: "Karur vysya bank",
          cardNumber: "**** **** 1982",
          holderName: "John Smith",
          active: true,
        },
        {
          name: "Swiss Bank",
          cardNumber: "**** **** 1796",
          holderName: "Andrew",
          active: false,
        },
        {
          name: "HDFC",
          cardNumber: "**** **** 1832",
          holderName: "Mathew",
          active: false,
        },
      ],
    };
  },
  methods: {
    makeActive(index) {
      this.banks.forEach((bank, i) => {
        bank.active = i === index;
      });
    },
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
