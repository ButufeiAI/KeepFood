<template>
  <!-- Add Shift -->
  <div class="modal fade" id="add-shift">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <form @submit.prevent="submitForm">
              <div class="modal-body">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="pills-add-shift-info-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-add-shift-info"
                      type="button"
                      role="tab"
                      aria-controls="pills-add-shift-info"
                      aria-selected="true"
                    >
                      Shift Info
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-add-break-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-add-break"
                      type="button"
                      role="tab"
                      aria-controls="pills-add-break"
                      aria-selected="false"
                    >
                      Break Timings
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="pills-add-shift-info"
                    role="tabpanel"
                    aria-labelledby="pills-add-shift-info-tab"
                  >
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="mb-3">
                          <label class="form-label"
                            >Shift <span class="text-danger"> *</span></label
                          >
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="mb-3">
                          <label class="form-label"
                            >From <span class="text-danger"> *</span></label
                          >
                          <div class="input-addon-right position-relative">
                            <a-time-picker
                              class="form-control timepicker"
                              placeholder="09:10 AM"
                              use12-hours
                              format="h:mm a"
                              type="text"
                            />
                            <span class="cus-icon"
                              ><i data-feather="clock" class="feather-clock"></i
                            ></span>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="mb-3">
                          <label class="form-label"
                            >To <span class="text-danger"> *</span></label
                          >
                          <div class="input-addon-right position-relative">
                            <a-time-picker
                              class="form-control timepicker"
                              placeholder="09:10 AM"
                              use12-hours
                              format="h:mm a"
                              type="text"
                            />
                            <span class="cus-icon"
                              ><i data-feather="clock" class="feather-clock"></i
                            ></span>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="mb-3">
                          <label class="form-label"
                            >Weekoff <span class="text-danger"> *</span></label
                          >
                          <vue-select
                            :options="WeekSelect"
                            v-model="selected"
                            placeholder="Choose"
                          />
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="modal-table-item">
                          <h4>Weekdays Defeniton</h4>
                          <div
                            class="table-responsive table-borderless bg-light rounded p-3"
                          >
                            <table class="table">
                              <thead>
                                <tr>
                                  <th class="ps-0">Days</th>
                                  <th class="text-center">Weeks</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div
                                      class="status-toggle modal-status d-flex align-items-center"
                                    >
                                      <input
                                        type="checkbox"
                                        id="day1"
                                        class="check"
                                        checked
                                      />
                                      <label for="day1" class="checktoggle"></label>
                                      <span class="status-label ms-2">Monday</span>
                                    </div>
                                  </td>
                                  <td>
                                    <div class="text-end">
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        All
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        1st
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        2nd
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        3rd
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        4th
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        5th
                                      </label>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div
                                      class="status-toggle modal-status d-flex align-items-center"
                                    >
                                      <input type="checkbox" id="day2" class="check" />
                                      <label for="day2" class="checktoggle"></label>
                                      <span class="status-label ms-2">Tuesday</span>
                                    </div>
                                  </td>
                                  <td>
                                    <div class="text-end">
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        All
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        1st
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        2nd
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        3rd
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        4th
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        5th
                                      </label>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div
                                      class="status-toggle modal-status d-flex align-items-center"
                                    >
                                      <input type="checkbox" id="day3" class="check" />
                                      <label for="day3" class="checktoggle"></label>
                                      <span class="status-label ms-2">Wednesday</span>
                                    </div>
                                  </td>
                                  <td>
                                    <div class="text-end">
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        All
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        1st
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        2nd
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        3rd
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        4th
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        5th
                                      </label>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div
                                      class="status-toggle modal-status d-flex align-items-center"
                                    >
                                      <input type="checkbox" id="day4" class="check" />
                                      <label for="day4" class="checktoggle"></label>
                                      <span class="status-label ms-2">Thursday</span>
                                    </div>
                                  </td>
                                  <td>
                                    <div class="text-end">
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        All
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        1st
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        2nd
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        3rd
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        4th
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        5th
                                      </label>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div
                                      class="status-toggle modal-status d-flex align-items-center"
                                    >
                                      <input type="checkbox" id="day5" class="check" />
                                      <label for="day5" class="checktoggle"></label>
                                      <span class="status-label ms-2">Friday</span>
                                    </div>
                                  </td>
                                  <td>
                                    <div class="text-end">
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        All
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        1st
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        2nd
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        3rd
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        4th
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        5th
                                      </label>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div
                                      class="status-toggle modal-status d-flex align-items-center"
                                    >
                                      <input type="checkbox" id="day6" class="check" />
                                      <label for="day6" class="checktoggle"></label>
                                      <span class="status-label ms-2">Saturday</span>
                                    </div>
                                  </td>
                                  <td>
                                    <div class="text-end">
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        All
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        1st
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        2nd
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        3rd
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        4th
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        5th
                                      </label>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div
                                      class="status-toggle modal-status d-flex align-items-center"
                                    >
                                      <input type="checkbox" id="day7" class="check" />
                                      <label for="day7" class="checktoggle"></label>
                                      <span class="status-label ms-2">Sunday</span>
                                    </div>
                                  </td>
                                  <td>
                                    <div class="text-end">
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        All
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        1st
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        2nd
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        3rd
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        4th
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        5th
                                      </label>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div class="mb-3 mt-3 custom-form-check">
                            <label class="checkboxs modal-table-check">
                              <input type="checkbox" />
                              <span class="checkmarks"></span>
                              Recurring Shift
                            </label>
                          </div>
                          <div class="m-0">
                            <div
                              class="status-toggle modal-status d-flex justify-content-between align-items-center"
                            >
                              <span class="status-label">Status</span>
                              <input type="checkbox" id="user6" class="check" checked />
                              <label for="user6" class="checktoggle mb-0"></label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-add-break"
                    role="tabpanel"
                    aria-labelledby="pills-add-break-tab"
                  >
                    <div class="break-title">
                      <h4>Morning Break</h4>
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="mb-3">
                          <label class="form-label"
                            >From <span class="text-danger"> *</span></label
                          >
                          <div class="input-addon-right position-relative">
                            <a-time-picker
                              class="form-control timepicker"
                              placeholder="09:10 AM"
                              use12-hours
                              format="h:mm a"
                              type="text"
                            />
                            <span class="cus-icon"
                              ><i data-feather="clock" class="feather-clock"></i
                            ></span>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="mb-3">
                          <label class="form-label"
                            >To <span class="text-danger"> *</span></label
                          >
                          <div class="input-addon-right position-relative">
                            <a-time-picker
                              class="form-control timepicker"
                              placeholder="09:10 AM"
                              use12-hours
                              format="h:mm a"
                              type="text"
                            />
                            <span class="cus-icon"
                              ><i data-feather="clock" class="feather-clock"></i
                            ></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="break-title">
                      <h4>Lunch</h4>
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="mb-3">
                          <label class="form-label"
                            >From <span class="text-danger"> *</span></label
                          >
                          <div class="input-addon-right position-relative">
                            <a-time-picker
                              class="form-control timepicker"
                              placeholder="09:10 AM"
                              use12-hours
                              format="h:mm a"
                              type="text"
                            />
                            <span class="cus-icon"
                              ><i data-feather="clock" class="feather-clock"></i
                            ></span>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="mb-3">
                          <label class="form-label"
                            >To <span class="text-danger"> *</span></label
                          >
                          <div class="input-addon-right position-relative">
                            <a-time-picker
                              class="form-control timepicker"
                              placeholder="09:10 AM"
                              use12-hours
                              format="h:mm a"
                              type="text"
                            />
                            <span class="cus-icon"
                              ><i data-feather="clock" class="feather-clock"></i
                            ></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="break-title">
                      <h4>Evening Break</h4>
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="mb-3">
                          <label class="form-label"
                            >From <span class="text-danger"> *</span></label
                          >
                          <div class="input-addon-right position-relative">
                            <a-time-picker
                              class="form-control timepicker"
                              placeholder="09:10 AM"
                              use12-hours
                              format="h:mm a"
                              type="text"
                            />
                            <span class="cus-icon"
                              ><i data-feather="clock" class="feather-clock"></i
                            ></span>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="mb-3">
                          <label class="form-label"
                            >To <span class="text-danger"> *</span></label
                          >
                          <div class="input-addon-right position-relative">
                            <a-time-picker
                              class="form-control timepicker"
                              placeholder="09:10 AM"
                              use12-hours
                              format="h:mm a"
                              type="text"
                            />
                            <span class="cus-icon"
                              ><i data-feather="clock" class="feather-clock"></i
                            ></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="input-blocks summer-description-box mb-0">
                      <label>Description</label>
                      <div id="summernote">
                        <div class="editor pages-editor">
                          <div class="editor three-line">
                            <div class="editor-container">
                              <div ref="editorRef" class="quill-editor" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary me-2"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Shift -->

  <!-- Edit Shift -->
  <div class="modal fade" id="edit-units">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header">
              <div class="page-title">
                <h4>Edit Shift</h4>
              </div>
              <button
                type="button"
                class="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form @submit.prevent="submitForm">
              <div class="modal-body">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="pills-add-shift-info-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-add-shift-info"
                      type="button"
                      role="tab"
                      aria-controls="pills-add-shift-info"
                      aria-selected="true"
                    >
                      Shift Info
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-add-break-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-add-break"
                      type="button"
                      role="tab"
                      aria-controls="pills-add-break"
                      aria-selected="false"
                    >
                      Break Timings
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="pills-tabContent2">
                  <div
                    class="tab-pane fade show active"
                    id="pills-edit-shift-info"
                    role="tabpanel"
                    aria-labelledby="pills-edit-shift-info-tab"
                  >
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="input-blocks">
                          <label class="form-label"
                            >Shift Name <span class="text-danger"> *</span></label
                          >
                          <input type="text" class="form-control" value="Fixed" />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="mb-3">
                          <label class="form-label"
                            >From <span class="text-danger"> *</span></label
                          >
                          <div class="input-addon-right position-relative">
                            <a-time-picker
                              class="form-control timepicker"
                              placeholder="09:10 AM"
                              use12-hours
                              format="h:mm a"
                              type="text"
                            />
                            <span class="cus-icon"
                              ><i data-feather="clock" class="feather-clock"></i
                            ></span>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="mb-3">
                          <label class="form-label"
                            >To <span class="text-danger"> *</span></label
                          >
                          <div class="input-addon-right position-relative">
                            <a-time-picker
                              class="form-control timepicker"
                              placeholder="09:10 AM"
                              use12-hours
                              format="h:mm a"
                              type="text"
                            />
                            <span class="cus-icon"
                              ><i data-feather="clock" class="feather-clock"></i
                            ></span>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="mb-3">
                          <label class="form-label"
                            >Weekoff <span class="text-danger"> *</span></label
                          >
                          <vue-select
                            :options="WeekSelect"
                            v-model="selectedOne"
                            placeholder="Choose"
                          />
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="modal-table-item">
                          <h4>Weekdays Defeniton</h4>
                          <div
                            class="table-responsive table-borderless bg-light rounded p-3"
                          >
                            <table class="table">
                              <thead>
                                <tr>
                                  <th class="ps-0">Days</th>
                                  <th class="text-center">Weeks</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div
                                      class="status-toggle modal-status d-flex align-items-center"
                                    >
                                      <input
                                        type="checkbox"
                                        id="days1"
                                        class="check"
                                        checked
                                      />
                                      <label for="days1" class="checktoggle"></label>
                                      <span class="status-label ms-2">Monday</span>
                                    </div>
                                  </td>
                                  <td>
                                    <div class="text-end">
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" checked />
                                        <span class="checkmarks"></span>
                                        All
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" checked />
                                        <span class="checkmarks"></span>
                                        1st
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" checked />
                                        <span class="checkmarks"></span>
                                        2nd
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" checked />
                                        <span class="checkmarks"></span>
                                        3rd
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" checked />
                                        <span class="checkmarks"></span>
                                        4th
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" checked />
                                        <span class="checkmarks"></span>
                                        5th
                                      </label>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div
                                      class="status-toggle modal-status d-flex align-items-center"
                                    >
                                      <input
                                        type="checkbox"
                                        id="days2"
                                        class="check"
                                        checked
                                      />
                                      <label for="days2" class="checktoggle"></label>
                                      <span class="status-label ms-2">Tuesday</span>
                                    </div>
                                  </td>
                                  <td>
                                    <div class="text-end">
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" checked />
                                        <span class="checkmarks"></span>
                                        All
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" checked />
                                        <span class="checkmarks"></span>
                                        1st
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" checked />
                                        <span class="checkmarks"></span>
                                        2nd
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" checked />
                                        <span class="checkmarks"></span>
                                        3rd
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" checked />
                                        <span class="checkmarks"></span>
                                        4th
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" checked />
                                        <span class="checkmarks"></span>
                                        5th
                                      </label>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div
                                      class="status-toggle modal-status d-flex align-items-center"
                                    >
                                      <input
                                        type="checkbox"
                                        id="days3"
                                        class="check"
                                        checked
                                      />
                                      <label for="days3" class="checktoggle"></label>
                                      <span class="status-label ms-2">Wednesday</span>
                                    </div>
                                  </td>
                                  <td>
                                    <div class="text-end">
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" checked />
                                        <span class="checkmarks"></span>
                                        All
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" checked />
                                        <span class="checkmarks"></span>
                                        1st
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" checked />
                                        <span class="checkmarks"></span>
                                        2nd
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" checked />
                                        <span class="checkmarks"></span>
                                        3rd
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" checked />
                                        <span class="checkmarks"></span>
                                        4th
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" checked />
                                        <span class="checkmarks"></span>
                                        5th
                                      </label>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div
                                      class="status-toggle modal-status d-flex align-items-center"
                                    >
                                      <input
                                        type="checkbox"
                                        id="days4"
                                        class="check"
                                        checked
                                      />
                                      <label for="days4" class="checktoggle"></label>
                                      <span class="status-label ms-2">Thursday</span>
                                    </div>
                                  </td>
                                  <td>
                                    <div class="text-end">
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" checked />
                                        <span class="checkmarks"></span>
                                        All
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" checked />
                                        <span class="checkmarks"></span>
                                        1st
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        2nd
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        3rd
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" checked />
                                        <span class="checkmarks"></span>
                                        4th
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" checked />
                                        <span class="checkmarks"></span>
                                        5th
                                      </label>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div
                                      class="status-toggle modal-status d-flex align-items-center"
                                    >
                                      <input type="checkbox" id="days5" class="check" />
                                      <label for="days5" class="checktoggle"></label>
                                      <span class="status-label ms-2">Friday</span>
                                    </div>
                                  </td>
                                  <td>
                                    <div class="text-end">
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        All
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        1st
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        2nd
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        3rd
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        4th
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        5th
                                      </label>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div
                                      class="status-toggle modal-status d-flex align-items-center"
                                    >
                                      <input type="checkbox" id="days6" class="check" />
                                      <label for="days6" class="checktoggle"></label>
                                      <span class="status-label ms-2">Saturday</span>
                                    </div>
                                  </td>
                                  <td>
                                    <div class="text-end">
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        All
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        1st
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        2nd
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        3rd
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        4th
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        5th
                                      </label>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div
                                      class="status-toggle modal-status d-flex align-items-center"
                                    >
                                      <input type="checkbox" id="days7" class="check" />
                                      <label for="days7" class="checktoggle"></label>
                                      <span class="status-label ms-2">Sunday</span>
                                    </div>
                                  </td>
                                  <td>
                                    <div class="text-end">
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        All
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        1st
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        2nd
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        3rd
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        4th
                                      </label>
                                      <label class="checkboxs modal-table-check">
                                        <input type="checkbox" />
                                        <span class="checkmarks"></span>
                                        5th
                                      </label>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div class="mb-3 mt-3 custom-form-check">
                            <label class="checkboxs modal-table-check">
                              <input type="checkbox" checked />
                              <span class="checkmarks"></span>
                              Recurring Shift
                            </label>
                          </div>

                          <div class="m-0">
                            <div
                              class="status-toggle modal-status d-flex justify-content-between align-items-center"
                            >
                              <span class="status-label">Status</span>
                              <input type="checkbox" id="users6" class="check" checked />
                              <label for="users6" class="checktoggle mb-0"></label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-edit-break"
                    role="tabpanel"
                    aria-labelledby="pills-edit-break-tab"
                  >
                    <div class="break-title">
                      <h4>Morning Break</h4>
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="mb-3">
                          <label class="form-label"
                            >From <span class="text-danger"> *</span></label
                          >
                          <div class="input-addon-right position-relative">
                            <a-time-picker
                              class="form-control timepicker"
                              placeholder="09:10 AM"
                              use12-hours
                              format="h:mm a"
                              type="text"
                            />
                            <span class="cus-icon"
                              ><i data-feather="clock" class="feather-clock"></i
                            ></span>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="mb-3">
                          <label class="form-label"
                            >To <span class="text-danger"> *</span></label
                          >
                          <div class="input-addon-right position-relative">
                            <a-time-picker
                              class="form-control timepicker"
                              placeholder="09:10 AM"
                              use12-hours
                              format="h:mm a"
                              type="text"
                            />
                            <span class="cus-icon"
                              ><i data-feather="clock" class="feather-clock"></i
                            ></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="break-title">
                      <h4>Lunch</h4>
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="mb-3">
                          <label class="form-label"
                            >From <span class="text-danger"> *</span></label
                          >
                          <div class="input-addon-right position-relative">
                            <a-time-picker
                              class="form-control timepicker"
                              placeholder="09:10 AM"
                              use12-hours
                              format="h:mm a"
                              type="text"
                            />
                            <span class="cus-icon"
                              ><i data-feather="clock" class="feather-clock"></i
                            ></span>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="mb-3">
                          <label class="form-label"
                            >To <span class="text-danger"> *</span></label
                          >
                          <div class="input-addon-right position-relative">
                            <a-time-picker
                              class="form-control timepicker"
                              placeholder="09:10 AM"
                              use12-hours
                              format="h:mm a"
                              type="text"
                            />
                            <span class="cus-icon"
                              ><i data-feather="clock" class="feather-clock"></i
                            ></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="break-title">
                      <h4>Evening Break</h4>
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="mb-3">
                          <label class="form-label"
                            >From <span class="text-danger"> *</span></label
                          >
                          <div class="input-addon-right position-relative">
                            <a-time-picker
                              class="form-control timepicker"
                              placeholder="09:10 AM"
                              use12-hours
                              format="h:mm a"
                              type="text"
                            />
                            <span class="cus-icon"
                              ><i data-feather="clock" class="feather-clock"></i
                            ></span>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="mb-3">
                          <label class="form-label"
                            >To <span class="text-danger"> *</span></label
                          >
                          <div class="input-addon-right position-relative">
                            <a-time-picker
                              class="form-control timepicker"
                              placeholder="09:10 AM"
                              use12-hours
                              format="h:mm a"
                              type="text"
                            />
                            <span class="cus-icon"
                              ><i data-feather="clock" class="feather-clock"></i
                            ></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="input-blocks summer-description-box mb-0">
                      <label>Description</label>
                      <div id="summernote2">
                        <div class="editor pages-editor">
                        <div class="editor three-line">
                          <div class="editor-container">
                            <div ref="editorRefOne" class="quill-editor" />
                          </div>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary me-2"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit Shift -->

  <!-- delete modal -->
  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content p-5 px-3 text-center">
            <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"
              ><i class="ti ti-trash fs-24 text-danger"></i
            ></span>
            <h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Shift</h4>
            <p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete shift?</p>
            <div class="modal-footer-btn mt-3 d-flex justify-content-center">
              <button
                type="button"
                class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="submit" class="btn btn-submit fs-13 fw-medium p-2 px-3">
                Yes Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /delete modal -->
</template>

<script>
import Quill from "quill";
import "quill/dist/quill.snow.css";
export default {
  data() {
    return {
      selected: [],
      selectedOne: [],
      WeekSelect: [
        {label: "Choose", value: "Choose"}, 
        {label: "Sunday, Monday", value: "Sunday, Monday"}, 
        {label: "Saturday, Sunday", value: "Saturday, Sunday"}, 
        {label: "Tuesday, Saturday", value: "Tuesday, Saturday"}, 
      ],
    };
  },
  mounted() {
    this.initQuill();
  },
  methods: {
    submitForm() {
      this.$router.push("/hrm/shift");
    },
    initQuill() {
      const quill = new Quill(this.$refs.editorRef, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline"],
            ["image", "code-block"],
          ],
        },
      });
      const quillone = new Quill(this.$refs.editorRefOne, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline"],
            ["image", "code-block"],
          ],
        },
      });

      quill.on("text-change", () => {
        this.content = quill.root.innerHTML;
      });
      quillone.on("text-change", () => {
        this.content = quillone.root.innerHTML;
      });
    },
  },
};
</script>
