<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4>Employee Salary</h4>
            <h6>Manage your employee salaries</h6>
          </div>
        </div>
        <ul class="table-top-head">
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"
              ><img src="@/assets/img/icons/pdf.svg" alt="img"
            /></a>
          </li>
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"
              ><img src="@/assets/img/icons/excel.svg" alt="img"
            /></a>
          </li>
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Print"
              ><i data-feather="printer" class="feather-rotate-ccw"></i
            ></a>
          </li>
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"
              ><i class="ti ti-refresh"></i
            ></a>
          </li>
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" @click="toggleHeader"><i class="ti ti-chevron-up"></i></a>
          </li>
        </ul>
        <div class="page-btn">
          <a
            href="#"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#add-department"
            ><i class="ti ti-circle-plus me-1"></i>Add Payroll</a
          >
        </div>
      </div>
      <!-- product list -->
      <div class="card table-list-card">
        <div
          class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3"
        >
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
          <div
            class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3"
          >
            <div class="dropdown me-2">
              <a
                href="javascript:void(0);"
                class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                Select Status
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Paid</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Unpaid</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card-body pb-0">
          <div class="custom-datatable-filter table-responsive">
            <table class="table datatable">
              <thead class="thead-light">
                <tr>
                  <th class="no-sort">
                    <label class="checkboxs">
                      <input type="checkbox" id="select-all" />
                      <span class="checkmarks"></span>
                    </label>
                  </th>
                  <th>ID</th>
                  <th>Employee</th>
                  <th>Email</th>
                  <th>Salary</th>
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
                  <td>EMP001</td>
                  <td>
                    <div class="d-flex align-items-center">
                      <router-link to="/hrm/employee-details" class="avatar avatar-md"
                        ><img
                          src="@/assets/img/users/user-33.png"
                          class="img-fluid"
                          alt="img"
                      /></router-link>
                      <div class="ms-2">
                        <p class="text-dark mb-0">
                          <router-link to="/hrm/employee-details">Carl Evans</router-link>
                        </p>
                        <p><a>Designer</a></p>
                      </div>
                    </div>
                  </td>
                  <td>carlevans@example.com</td>
                  <td>$30,000</td>

                  <td>
                    <span
                      class="badge badge-success d-inline-flex align-items-center badge-xs"
                    >
                      <i class="ti ti-point-filled me-1"></i>Paid
                    </span>
                  </td>
                  <td class="action-table-data">
                    <div class="edit-delete-action">
                      <a class="p-2 me-2" href="javascript:void(0);">
                        <i data-feather="eye" class="feather-eye"></i>
                      </a>
                      <a class="p-2 me-2" href="javascript:void(0);">
                        <i data-feather="download" class="feather-download"></i>
                      </a>
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#edit-department"
                        class="p-2 me-2"
                        href="javascript:void(0);"
                      >
                        <i data-feather="edit" class="feather-edit"></i>
                      </a>
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#delete-modal"
                        class="p-2"
                        href="javascript:void(0);"
                      >
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
                  <td>EMP002</td>
                  <td>
                    <div class="d-flex align-items-center">
                      <router-link to="/hrm/employee-details" class="avatar avatar-md"
                        ><img
                          src="@/assets/img/users/user-02.jpg"
                          class="img-fluid"
                          alt="img"
                      /></router-link>
                      <div class="ms-2">
                        <p class="text-dark mb-0">
                          <router-link to="/hrm/employee-details"
                            >Minerva Rameriz</router-link
                          >
                        </p>
                        <p><a>Administrator</a></p>
                      </div>
                    </div>
                  </td>
                  <td>rameriz@example.com</td>
                  <td>$20,000</td>

                  <td>
                    <span
                      class="badge badge-success d-inline-flex align-items-center badge-xs"
                    >
                      <i class="ti ti-point-filled me-1"></i>Paid
                    </span>
                  </td>
                  <td class="action-table-data">
                    <div class="edit-delete-action">
                      <a class="p-2 me-2" href="javascript:void(0);">
                        <i data-feather="eye" class="feather-eye"></i>
                      </a>
                      <a class="p-2 me-2" href="javascript:void(0);">
                        <i data-feather="download" class="feather-download"></i>
                      </a>
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#edit-department"
                        class="p-2 me-2"
                        href="javascript:void(0);"
                      >
                        <i data-feather="edit" class="feather-edit"></i>
                      </a>
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#delete-modal"
                        class="p-2"
                        href="javascript:void(0);"
                      >
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
                  <td>EMP003</td>
                  <td>
                    <div class="d-flex align-items-center">
                      <router-link to="/hrm/employee-details" class="avatar avatar-md"
                        ><img
                          src="@/assets/img/users/user-34.jpg"
                          class="img-fluid"
                          alt="img"
                      /></router-link>
                      <div class="ms-2">
                        <p class="text-dark mb-0">
                          <router-link to="/hrm/employee-details"
                            >Robert Lamon</router-link
                          >
                        </p>
                        <p><a>Developer</a></p>
                      </div>
                    </div>
                  </td>
                  <td>robert@example.com</td>
                  <td>$35,000</td>

                  <td>
                    <span
                      class="badge badge-success d-inline-flex align-items-center badge-xs"
                    >
                      <i class="ti ti-point-filled me-1"></i>Paid
                    </span>
                  </td>
                  <td class="action-table-data">
                    <div class="edit-delete-action">
                      <a class="p-2 me-2" href="javascript:void(0);">
                        <i data-feather="eye" class="feather-eye"></i>
                      </a>
                      <a class="p-2 me-2" href="javascript:void(0);">
                        <i data-feather="download" class="feather-download"></i>
                      </a>
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#edit-department"
                        class="p-2 me-2"
                        href="javascript:void(0);"
                      >
                        <i data-feather="edit" class="feather-edit"></i>
                      </a>
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#delete-modal"
                        class="p-2"
                        href="javascript:void(0);"
                      >
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
                  <td>EMP004</td>
                  <td>
                    <div class="d-flex align-items-center">
                      <router-link to="/hrm/employee-details" class="avatar avatar-md"
                        ><img
                          src="@/assets/img/users/user-35.jpg"
                          class="img-fluid"
                          alt="img"
                      /></router-link>
                      <div class="ms-2">
                        <p class="text-dark mb-0">
                          <router-link to="/hrm/employee-details"
                            >Patricia Lewis</router-link
                          >
                        </p>
                        <p><a>HR Manager</a></p>
                      </div>
                    </div>
                  </td>
                  <td>robert@example.com</td>
                  <td>$35,000</td>

                  <td>
                    <span
                      class="badge badge-success d-inline-flex align-items-center badge-xs"
                    >
                      <i class="ti ti-point-filled me-1"></i>Paid
                    </span>
                  </td>
                  <td class="action-table-data">
                    <div class="edit-delete-action">
                      <a class="p-2 me-2" href="javascript:void(0);">
                        <i data-feather="eye" class="feather-eye"></i>
                      </a>
                      <a class="p-2 me-2" href="javascript:void(0);">
                        <i data-feather="download" class="feather-download"></i>
                      </a>
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#edit-department"
                        class="p-2 me-2"
                        href="javascript:void(0);"
                      >
                        <i data-feather="edit" class="feather-edit"></i>
                      </a>
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#delete-modal"
                        class="p-2"
                        href="javascript:void(0);"
                      >
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
                  <td>EMP005</td>
                  <td>
                    <div class="d-flex align-items-center">
                      <router-link to="/hrm/employee-details" class="avatar avatar-md"
                        ><img
                          src="@/assets/img/users/user-36.jpg"
                          class="img-fluid"
                          alt="img"
                      /></router-link>
                      <div class="ms-2">
                        <p class="text-dark mb-0">
                          <router-link to="/hrm/employee-details"
                            >Mark Joslyn</router-link
                          >
                        </p>
                        <p><a>Designer</a></p>
                      </div>
                    </div>
                  </td>
                  <td>markjoslyn@example.com</td>
                  <td>$32,000</td>

                  <td>
                    <span
                      class="badge badge-success d-inline-flex align-items-center badge-xs"
                    >
                      <i class="ti ti-point-filled me-1"></i>Paid
                    </span>
                  </td>
                  <td class="action-table-data">
                    <div class="edit-delete-action">
                      <a class="p-2 me-2" href="javascript:void(0);">
                        <i data-feather="eye" class="feather-eye"></i>
                      </a>
                      <a class="p-2 me-2" href="javascript:void(0);">
                        <i data-feather="download" class="feather-download"></i>
                      </a>
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#edit-department"
                        class="p-2 me-2"
                        href="javascript:void(0);"
                      >
                        <i data-feather="edit" class="feather-edit"></i>
                      </a>
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#delete-modal"
                        class="p-2"
                        href="javascript:void(0);"
                      >
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
                  <td>EMP006</td>
                  <td>
                    <div class="d-flex align-items-center">
                      <router-link to="/hrm/employee-details" class="avatar avatar-md"
                        ><img
                          src="@/assets/img/users/user-37.jpg"
                          class="img-fluid"
                          alt="img"
                      /></router-link>
                      <div class="ms-2">
                        <p class="text-dark mb-0">
                          <router-link to="/hrm/employee-details"
                            >Marsha Betts</router-link
                          >
                        </p>
                        <p><a>Developer</a></p>
                      </div>
                    </div>
                  </td>
                  <td>marshabetts@example.com</td>
                  <td>$28,000</td>

                  <td>
                    <span
                      class="badge badge-success d-inline-flex align-items-center badge-xs"
                    >
                      <i class="ti ti-point-filled me-1"></i>Paid
                    </span>
                  </td>
                  <td class="action-table-data">
                    <div class="edit-delete-action">
                      <a class="p-2 me-2" href="javascript:void(0);">
                        <i data-feather="eye" class="feather-eye"></i>
                      </a>
                      <a class="p-2 me-2" href="javascript:void(0);">
                        <i data-feather="download" class="feather-download"></i>
                      </a>
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#edit-department"
                        class="p-2 me-2"
                        href="javascript:void(0);"
                      >
                        <i data-feather="edit" class="feather-edit"></i>
                      </a>
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#delete-modal"
                        class="p-2"
                        href="javascript:void(0);"
                      >
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
                  <td>EMP007</td>
                  <td>
                    <div class="d-flex align-items-center">
                      <router-link to="/hrm/employee-details" class="avatar avatar-md"
                        ><img
                          src="@/assets/img/users/user-28.jpg"
                          class="img-fluid"
                          alt="img"
                      /></router-link>
                      <div class="ms-2">
                        <p class="text-dark mb-0">
                          <router-link to="/hrm/employee-details"
                            >Daniel Jude</router-link
                          >
                        </p>
                        <p><a>Administrator</a></p>
                      </div>
                    </div>
                  </td>
                  <td>daieljude@example.com</td>
                  <td>$25,000</td>

                  <td>
                    <span
                      class="badge badge-success d-inline-flex align-items-center badge-xs"
                    >
                      <i class="ti ti-point-filled me-1"></i>Paid
                    </span>
                  </td>
                  <td class="action-table-data">
                    <div class="edit-delete-action">
                      <a class="p-2 me-2" href="javascript:void(0);">
                        <i data-feather="eye" class="feather-eye"></i>
                      </a>
                      <a class="p-2 me-2" href="javascript:void(0);">
                        <i data-feather="download" class="feather-download"></i>
                      </a>
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#edit-department"
                        class="p-2 me-2"
                        href="javascript:void(0);"
                      >
                        <i data-feather="edit" class="feather-edit"></i>
                      </a>
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#delete-modal"
                        class="p-2"
                        href="javascript:void(0);"
                      >
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
                  <td>EMP008</td>
                  <td>
                    <div class="d-flex align-items-center">
                      <router-link to="/hrm/employee-details" class="avatar avatar-md"
                        ><img
                          src="@/assets/img/users/user-38.jpg"
                          class="img-fluid"
                          alt="img"
                      /></router-link>
                      <div class="ms-2">
                        <p class="text-dark mb-0">
                          <router-link to="/hrm/employee-details">Emma Bates</router-link>
                        </p>
                        <p><a>HR Assistant</a></p>
                      </div>
                    </div>
                  </td>
                  <td>emmabates@example.com</td>
                  <td>$21,000</td>

                  <td>
                    <span
                      class="badge badge-success d-inline-flex align-items-center badge-xs"
                    >
                      <i class="ti ti-point-filled me-1"></i>Paid
                    </span>
                  </td>
                  <td class="action-table-data">
                    <div class="edit-delete-action">
                      <a class="p-2 me-2" href="javascript:void(0);">
                        <i data-feather="eye" class="feather-eye"></i>
                      </a>
                      <a class="p-2 me-2" href="javascript:void(0);">
                        <i data-feather="download" class="feather-download"></i>
                      </a>
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#edit-department"
                        class="p-2 me-2"
                        href="javascript:void(0);"
                      >
                        <i data-feather="edit" class="feather-edit"></i>
                      </a>
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#delete-modal"
                        class="p-2"
                        href="javascript:void(0);"
                      >
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
                  <td>EMP009</td>
                  <td>
                    <div class="d-flex align-items-center">
                      <router-link to="/hrm/employee-details" class="avatar avatar-md"
                        ><img
                          src="@/assets/img/users/user-39.jpg"
                          class="img-fluid"
                          alt="img"
                      /></router-link>
                      <div class="ms-2">
                        <p class="text-dark mb-0">
                          <router-link to="/hrm/employee-details"
                            >Richard Fralick</router-link
                          >
                        </p>
                        <p><a>Designer</a></p>
                      </div>
                    </div>
                  </td>
                  <td>richard@example.com</td>
                  <td>$34,000</td>

                  <td>
                    <span
                      class="badge badge-success d-inline-flex align-items-center badge-xs"
                    >
                      <i class="ti ti-point-filled me-1"></i>Paid
                    </span>
                  </td>
                  <td class="action-table-data">
                    <div class="edit-delete-action">
                      <a class="p-2 me-2" href="javascript:void(0);">
                        <i data-feather="eye" class="feather-eye"></i>
                      </a>
                      <a class="p-2 me-2" href="javascript:void(0);">
                        <i data-feather="download" class="feather-download"></i>
                      </a>
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#edit-department"
                        class="p-2 me-2"
                        href="javascript:void(0);"
                      >
                        <i data-feather="edit" class="feather-edit"></i>
                      </a>
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#delete-modal"
                        class="p-2"
                        href="javascript:void(0);"
                      >
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
                  <td>EMP010</td>
                  <td>
                    <div class="d-flex align-items-center">
                      <router-link to="/hrm/employee-details" class="avatar avatar-md"
                        ><img
                          src="@/assets/img/users/user-21.jpg"
                          class="img-fluid"
                          alt="img"
                      /></router-link>
                      <div class="ms-2">
                        <p class="text-dark mb-0">
                          <router-link to="/hrm/employee-details"
                            >Michelle Robison</router-link
                          >
                        </p>
                        <p><a>HR Manager</a></p>
                      </div>
                    </div>
                  </td>
                  <td>robinson@example.com</td>
                  <td>$28,000</td>

                  <td>
                    <span
                      class="badge badge-danger d-inline-flex align-items-center badge-xs"
                    >
                      <i class="ti ti-point-filled me-1"></i>UnPaid
                    </span>
                  </td>
                  <td class="action-table-data">
                    <div class="edit-delete-action">
                      <a class="p-2 me-2" href="javascript:void(0);">
                        <i data-feather="eye" class="feather-eye"></i>
                      </a>
                      <a class="p-2 me-2" href="javascript:void(0);">
                        <i data-feather="download" class="feather-download"></i>
                      </a>
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#edit-department"
                        class="p-2 me-2"
                        href="javascript:void(0);"
                      >
                        <i data-feather="edit" class="feather-edit"></i>
                      </a>
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#delete-modal"
                        class="p-2"
                        href="javascript:void(0);"
                      >
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
      <!-- /product list -->
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
  <payroll-list-modal></payroll-list-modal>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
