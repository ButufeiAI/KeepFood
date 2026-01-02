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
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"><i class="ti ti-refresh"></i></a>
          </li>
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header"
              @click="toggleHeader"><i class="ti ti-chevron-up"></i></a>
          </li>
        </ul>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="settings-wrapper d-flex">
            <settings-sidebar></settings-sidebar>
            <div class="card flex-fill mb-0 w-50">
              <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                <h4>Language</h4>
                <div class="page-btn d-flex align-items-center ms-0">
                  <div class="select-language">
                    <vue-select :options="Selectlangsle" v-model="selected" placeholder="Select Language" />
                  </div>
                  <a href="javascript:void(0);" class="btn btn-primary ms-3" data-bs-toggle="modal"
                    data-bs-target="#add-language">Add Translation</a>
                </div>
              </div>
              <div class="card-body">
                <div class="table-top">
                  <div class="search-set">
                    <div class="search-input">
                      <a href="#" class="btn-searchset"><i data-feather="search" class="feather-search"></i></a>
                      <input type="search" class="form-control form-control-sm" placeholder="Search" />
                    </div>
                  </div>
                  <div class="search-path">
                    <div class="d-flex align-items-center">
                      <a class="btn btn-secondary" href="javascript:void(0);">
                        <i data-feather="filter" class="filter-icon"></i>
                        Import Sample
                      </a>
                    </div>
                  </div>
                </div>
                <div class="table-responsive no-pagination">
                  <table class="table datatable border">
                    <thead class="thead-light">
                      <tr>
                        <th class="no-sort">
                          <label class="checkboxs">
                            <input type="checkbox" id="select-all" />
                            <span class="checkmarks"></span>
                          </label>
                        </th>
                        <th>Language</th>
                        <th>Code</th>
                        <th>RTL</th>
                        <th>Default</th>
                        <th>Total</th>
                        <th>Done</th>
                        <th>Progress</th>
                        <th>Status</th>
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
                        <td>
                          <div class="language-name d-flex align-items-center">
                            <img src="@/assets/img/icons/flag-01.svg" class="me-2" alt="Img" />
                            English
                          </div>
                        </td>
                        <td>en</td>
                        <td>
                          <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                            <input type="checkbox" id="user1" class="check" checked="" />
                            <label for="user1" class="checktoggle"></label>
                          </div>
                        </td>
                        <td>
                          <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                            <input type="checkbox" id="users1" class="check" checked="" />
                            <label for="users1" class="checktoggle"></label>
                          </div>
                        </td>
                        <td>2145</td>
                        <td>1815</td>
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="circle-progress" data-value="80">
                              <span class="progress-left">
                                <span class="progress-bar border-warning"></span>
                              </span>
                              <span class="progress-right">
                                <span class="progress-bar border-warning"></span>
                              </span>
                            </div>
                            <div class="progress-value ms-2">80%</div>
                          </div>
                        </td>
                        <td>
                          <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                            <input type="checkbox" id="status1" class="check" checked="" />
                            <label for="status1" class="checktoggle"></label>
                          </div>
                        </td>
                        <td class="action-table-data">
                          <div class="edit-delete-action">
                            <router-link to="language-settings-web"
                              class="btn border text-dark bg-white me-2">Web</router-link>
                            <a href="javascript:void(0);" class="btn border text-dark bg-white me-2">App</a>
                            <a href="javascript:void(0);" class="btn border text-dark bg-white me-2">Admin</a>
                            <a href="javascript:void(0);" class="me-2 language-import">
                              <i data-feather="download" class="feather-download"></i>
                            </a>
                            <a href="javascript:void(0);">
                              <vue-feather type="trash-2" class="trash-2"></vue-feather>
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
                        <td>
                          <div class="language-name d-flex align-items-center">
                            <img src="@/assets/img/icons/flag-02.svg" class="me-2" alt="Img" />
                            German
                          </div>
                        </td>
                        <td>Ar</td>
                        <td>
                          <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                            <input type="checkbox" id="user2" class="check" checked="" />
                            <label for="user2" class="checktoggle"></label>
                          </div>
                        </td>
                        <td>
                          <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                            <input type="checkbox" id="users2" class="check" checked="" />
                            <label for="users2" class="checktoggle"></label>
                          </div>
                        </td>
                        <td>2045</td>
                        <td>2045</td>
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="circle-progress" data-value="70">
                              <span class="progress-left">
                                <span class="progress-bar border-cyan"></span>
                              </span>
                              <span class="progress-right">
                                <span class="progress-bar border-cyan"></span>
                              </span>
                            </div>
                            <div class="progress-value ms-2">70%</div>
                          </div>
                        </td>
                        <td>
                          <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                            <input type="checkbox" id="status2" class="check" checked="" />
                            <label for="status2" class="checktoggle"></label>
                          </div>
                        </td>
                        <td class="action-table-data">
                          <div class="edit-delete-action">
                            <router-link to="language-settings-web"
                              class="btn border text-dark bg-white me-2">Web</router-link>
                            <a href="javascript:void(0);" class="btn border text-dark bg-white me-2">App</a>
                            <a href="javascript:void(0);" class="btn border text-dark bg-white me-2">Admin</a>
                            <a href="javascript:void(0);" class="me-2 language-import">
                              <i data-feather="download" class="feather-download"></i>
                            </a>
                            <a href="javascript:void(0);">
                              <vue-feather type="trash-2" class="trash-2"></vue-feather>
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
                        <td>
                          <div class="language-name d-flex align-items-center">
                            <img src="@/assets/img/icons/flag-03.svg" class="me-2" alt="Img" />
                            Arabic
                          </div>
                        </td>
                        <td>zh</td>
                        <td>
                          <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                            <input type="checkbox" id="user3" class="check" checked="" />
                            <label for="user3" class="checktoggle"></label>
                          </div>
                        </td>
                        <td>
                          <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                            <input type="checkbox" id="users3" class="check" checked="" />
                            <label for="users3" class="checktoggle"></label>
                          </div>
                        </td>
                        <td>2245</td>
                        <td>295</td>
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="circle-progress" data-value="50">
                              <span class="progress-left">
                                <span class="progress-bar border-purple"></span>
                              </span>
                              <span class="progress-right">
                                <span class="progress-bar border-purple"></span>
                              </span>
                            </div>
                            <div class="progress-value ms-2">50%</div>
                          </div>
                        </td>
                        <td>
                          <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                            <input type="checkbox" id="status3" class="check" checked="" />
                            <label for="status3" class="checktoggle"></label>
                          </div>
                        </td>
                        <td class="action-table-data">
                          <div class="edit-delete-action">
                            <router-link to="language-settings-web"
                              class="btn border text-dark bg-white me-2">Web</router-link>
                            <a href="javascript:void(0);" class="btn border text-dark bg-white me-2">App</a>
                            <a href="javascript:void(0);" class="btn border text-dark bg-white me-2">Admin</a>
                            <a href="javascript:void(0);" class="me-2 language-import">
                              <i data-feather="download" class="feather-download"></i>
                            </a>
                            <a href="javascript:void(0);">
                              <vue-feather type="trash-2" class="trash-2"></vue-feather>
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
                        <td>
                          <div class="language-name d-flex align-items-center">
                            <img src="@/assets/img/icons/flag-04.svg" class="me-2" alt="Img" />
                            French
                          </div>
                        </td>
                        <td>hi</td>
                        <td>
                          <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                            <input type="checkbox" id="user4" class="check" checked="" />
                            <label for="user4" class="checktoggle"></label>
                          </div>
                        </td>
                        <td>
                          <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                            <input type="checkbox" id="users4" class="check" checked="" />
                            <label for="users4" class="checktoggle"></label>
                          </div>
                        </td>
                        <td>2535</td>
                        <td>1145</td>
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="circle-progress" data-value="30">
                              <span class="progress-left">
                                <span class="progress-bar border-danger"></span>
                              </span>
                              <span class="progress-right">
                                <span class="progress-bar border-danger"></span>
                              </span>
                            </div>
                            <div class="progress-value ms-2">30%</div>
                          </div>
                        </td>
                        <td>
                          <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                            <input type="checkbox" id="status4" class="check" checked="" />
                            <label for="status4" class="checktoggle"></label>
                          </div>
                        </td>
                        <td class="action-table-data">
                          <div class="edit-delete-action">
                            <router-link to="language-settings-web"
                              class="btn border text-dark bg-white me-2">Web</router-link>
                            <a href="javascript:void(0);" class="btn border text-dark bg-white me-2">App</a>
                            <a href="javascript:void(0);" class="btn border text-dark bg-white me-2">Admin</a>
                            <a href="javascript:void(0);" class="me-2 language-import">
                              <i data-feather="download" class="feather-download"></i>
                            </a>
                            <a href="javascript:void(0);">
                              <vue-feather type="trash-2" class="trash-2"></vue-feather>
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
    <div class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
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
      Selectlangsle: [
        { label: "Select Language", value: "Select Language" },
        { label: "English", value: "English" },
        { label: "Chinese", value: "Chinese" }
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
