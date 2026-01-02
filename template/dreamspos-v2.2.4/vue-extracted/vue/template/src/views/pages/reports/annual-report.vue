<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4>Annual Report</h4>
            <h6>View Reports of Annual Report</h6>
          </div>
        </div>
        <ul class="table-top-head">
          <li class="me-2">
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"
              ><i class="ti ti-refresh"></i
            ></a>
          </li>
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" @click="toggleHeader"><i class="ti ti-chevron-up"></i></a>
          </li>
        </ul>
      </div>
      <div class="d-flex align-items-center justify-content-end">
        <div class="mb-3 me-3">
          <div class="input-icon w-120 position-relative">
            <span class="input-icon-addon">
              <i class="ti ti-calendar text-gray-9"></i>
            </span>
            <input type="text" class="form-control yearpicker" value="2025" />
          </div>
        </div>
        <div class="mb-3 me-3">
          <vue-select :options="Gadgetssel" v-model="selected" placeholder="All Store" />
        </div>
        <div class="mb-3">
          <a href="#" class="btn btn-primary">Generate Report</a>
        </div>
      </div>
      <div class="table-responsive mb-4">
        <table class="table mb-1">
          <thead class="thead-light">
            <tr>
              <th></th>
              <th>Jan 2025</th>
              <th>Feb 2025</th>
              <th>Mar 2025</th>
              <th>Apr 2025</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>January</td>
              <td>$50,000</td>
              <td>$50,000</td>
              <td>$50,000</td>
              <td>$50,000</td>
            </tr>
            <tr>
              <td>Febuary</td>
              <td>$30,000</td>
              <td>$50,000</td>
              <td>$50,000</td>
              <td>$50,000</td>
            </tr>
            <tr>
              <td>March</td>
              <td>$7,000</td>
              <td>$50,000</td>
              <td>$50,000</td>
              <td>$50,000</td>
            </tr>
            <tr>
              <td>April</td>
              <td>$7,000</td>
              <td>$50,000</td>
              <td>$50,000</td>
              <td>$50,000</td>
            </tr>
            <tr>
              <td>May</td>
              <td>$7,000</td>
              <td>$50,000</td>
              <td>$50,000</td>
              <td>$50,000</td>
            </tr>
            <tr>
              <td>June</td>
              <td>$7,000</td>
              <td>$30,000</td>
              <td>$30,000</td>
              <td>$30,000</td>
            </tr>
            <tr>
              <td>July</td>
              <td>$7,000</td>
              <td>$30,000</td>
              <td>$30,000</td>
              <td>$30,000</td>
            </tr>
            <tr>
              <td>August</td>
              <td>$7,000</td>
              <td>$30,000</td>
              <td>$30,000</td>
              <td>$30,000</td>
            </tr>
            <tr>
              <td>September</td>
              <td>$7,000</td>
              <td>$7,000</td>
              <td>$7,000</td>
              <td>$7,000</td>
            </tr>
            <tr>
              <td>October</td>
              <td>$7,000</td>
              <td>$7,000</td>
              <td>$7,000</td>
              <td>$7,000</td>
            </tr>
            <tr>
              <td>November</td>
              <td>$7,000</td>
              <td>$7,000</td>
              <td>$7,000</td>
              <td>$7,000</td>
            </tr>
            <tr>
              <td>December</td>
              <td>$7,000</td>
              <td>$7,000</td>
              <td>$7,000</td>
              <td>$7,000</td>
            </tr>
            <tr>
              <td><h6 class="fw-bold">Total</h6></td>
              <td><h6 class="fw-bold">$8,000</h6></td>
              <td><h6 class="fw-bold">$8,000</h6></td>
              <td><h6 class="fw-bold">$8,000</h6></td>
              <td><h6 class="fw-bold">$8,000</h6></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div
      class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3"
    >
      <p class="mb-0">2014-2025 © DreamsPOS. All Right Reserved</p>
      <p>
        Designed &amp; Developed By
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: [],
      Gadgetssel: [
        {label: "All Stores", value: "All Stores"}, 
        {label: "Electro Mart", value: "Electro Mart"}, 
        {label: "Quantum Gadgets", value: "Quantum Gadgets"}, 
        {label: "Prime Bazaar", value: "Prime Bazaar"}, 
      ],
    };
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
