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
              <div
                class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3"
              >
                <h4>Language</h4>
                <div class="page-btn d-flex align-items-center ms-0">
                  <div class="select-language">
                    <vue-select
                      :options="Selecngsle"
                      v-model="selected"
                      placeholder="Select"
                    />
                  </div>
                  <a
                    href="javascript:void(0);"
                    class="btn btn-primary ms-3"
                    data-bs-toggle="modal"
                    data-bs-target="#add-language"
                    >Add Translation</a
                  >
                </div>
              </div>
              <div class="card-body">
                <div class="table-top">
                  <div class="search-set">
                    <div class="search-input">
                      <a href="javascript:void(0);" class="btn-searchset"
                        ><i class="ti ti-search fs-14 feather-search"></i
                      ></a>
                      <input
                        type="search"
                        class="form-control form-control-sm"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <div class="back-btn">
                      <router-link to="language-settings" class="btn btn-secondary me-3"
                        ><vue-feather
                          type="arrow-left"
                          class="filter-icon me-2"
                        ></vue-feather
                        >Back to Translations
                      </router-link>
                    </div>
                    <div class="page-btn">
                      <a
                        href="javascript:void(0);"
                        class="d-flex align-items-center selected-language"
                        ><img
                          src="@/assets/img/icons/flag-03.svg"
                          class="me-2"
                          alt="Img"
                        />Arabic</a
                      >
                    </div>
                  </div>
                </div>
                <div class="table-responsive no-pagination">
                  <table class="table border datatable">
                    <thead class="thead-light">
                      <tr>
                        <th class="no-sort">
                          <label class="checkboxs">
                            <input type="checkbox" id="select-all" />
                            <span class="checkmarks"></span>
                          </label>
                        </th>
                        <th>Module Name</th>
                        <th>Total</th>
                        <th>Done</th>
                        <th>Progress</th>
                        <th class="no-sort"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <label class="checkboxs">
                            <input type="checkbox" />
                            <span class="checkmarks"></span>
                          </label>
                        </td>
                        <td>Inventory</td>
                        <td>1620</td>
                        <td>1296</td>
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="progress progress-xs" style="width: 120px">
                              <div
                                class="progress-bar bg-success rounded"
                                role="progressbar"
                                style="width: 100%"
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <span class="d-inline-flex fs-12 ms-2">100%</span>
                          </div>
                        </td>
                        <td class="action-table-data">
                          <div class="edit-delete-action">
                            <a class="me-2 p-2" href="#">
                              <i data-feather="download" class="feather-download"></i>
                            </a>
                            <a class="p-2" href="javascript:void(0);">
                              <i data-feather="trash-2" class="feather-trash-2"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label class="checkboxs">
                            <input type="checkbox" />
                            <span class="checkmarks"></span>
                          </label>
                        </td>
                        <td>Expense</td>
                        <td>1620</td>
                        <td>972</td>
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="progress progress-xs" style="width: 120px">
                              <div
                                class="progress-bar bg-pink rounded"
                                role="progressbar"
                                style="width: 70%"
                                aria-valuenow="70"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <span class="d-inline-flex fs-12 ms-2">70%</span>
                          </div>
                        </td>
                        <td class="action-table-data">
                          <div class="edit-delete-action">
                            <a class="me-2 p-2" href="#">
                              <i data-feather="download" class="feather-download"></i>
                            </a>
                            <a class="p-2" href="javascript:void(0);">
                              <i data-feather="trash-2" class="feather-trash-2"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label class="checkboxs">
                            <input type="checkbox" />
                            <span class="checkmarks"></span>
                          </label>
                        </td>
                        <td>Product</td>
                        <td>1620</td>
                        <td>810</td>
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="progress progress-xs" style="width: 120px">
                              <div
                                class="progress-bar bg-warning rounded"
                                role="progressbar"
                                style="width: 40%"
                                aria-valuenow="70"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <span class="d-inline-flex fs-12 ms-2">40%</span>
                          </div>
                        </td>
                        <td class="action-table-data">
                          <div class="edit-delete-action">
                            <a class="me-2 p-2" href="#">
                              <i data-feather="download" class="feather-download"></i>
                            </a>
                            <a class="p-2" href="javascript:void(0);">
                              <i data-feather="trash-2" class="feather-trash-2"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label class="checkboxs">
                            <input type="checkbox" />
                            <span class="checkmarks"></span>
                          </label>
                        </td>
                        <td>Settings</td>
                        <td>1620</td>
                        <td>324</td>
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="progress progress-xs" style="width: 120px">
                              <div
                                class="progress-bar bg-orange rounded"
                                role="progressbar"
                                style="width: 80%"
                                aria-valuenow="70"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <span class="d-inline-flex fs-12 ms-2">80%</span>
                          </div>
                        </td>
                        <td class="action-table-data">
                          <div class="edit-delete-action">
                            <a class="me-2 p-2" href="#">
                              <i data-feather="download" class="feather-download"></i>
                            </a>
                            <a class="p-2" href="javascript:void(0);">
                              <i data-feather="trash-2" class="feather-trash-2"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
      <p class="mb-0">
        {{ new Date().getFullYear() }} &copy; DreamsPOS. All Right Reserved
      </p>
      <p>
        Designed &amp; Developed by
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>
  <language-settings-web-modal></language-settings-web-modal>
</template>
<script>
export default {
  data() {
    return {
      selected: [],
      Selecngsle: [
        {label: "Select Language", value: "Select Language"}, 
        {label: "English", value: "English"}, 
        {label: "Chinese", value: "Chinese"}
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
