<template>
  <!-- Language -->
  <div class="modal fade" id="add-language">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Language Setup</h4>
          </div>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form action="#">
          <div class="modal-body">
            <div class="card table-list-card">
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
                        ><i data-feather="arrow-left" class="filter-icon me-2"></i>Back to
                        Translations
                      </router-link>
                    </div>
                    <div class="page-btn me-2">
                      <a
                        href="javascript:void(0);"
                        class="d-flex align-items-center selected-language"
                        ><img
                          src="@/assets/img/icons/flag-03.svg"
                          class="me-2"
                          alt=""
                        />Arabic</a
                      >
                    </div>
                    <div>
                      <span class="d-block fs-10">Progress</span>
                      <div class="d-flex align-items-center">
                        <div class="progress progress-xs" style="width: 90px">
                          <div
                            class="progress-bar bg-orange rounded"
                            role="progressbar"
                            style="width: 80%"
                            aria-valuenow="100"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span class="d-inline-flex fs-12 ms-2">80%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="table-responsive no-pagination">
                  <table class="table datatable">
                    <thead>
                      <tr>
                        <th>English</th>
                        <th>Arabic</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Products</td>
                        <td>
                          <div>
                            <input type="text" class="form-control" value="منتجات" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Expired Products</td>
                        <td>
                          <div>
                            <input
                              type="text"
                              class="form-control"
                              value="المنتجات منتهية الصلاحية"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Low Stocks</td>
                        <td>
                          <div>
                            <input
                              type="text"
                              class="form-control"
                              value="مخزونات منخفضة"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Category</td>
                        <td>
                          <div>
                            <input type="text" class="form-control" value="فئة" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Sub Category</td>
                        <td>
                          <div>
                            <input
                              type="text"
                              class="form-control"
                              value="الفئة الفرعية"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Brand</td>
                        <td>
                          <div>
                            <input type="text" class="form-control" value="ماركة" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Unit</td>
                        <td>
                          <div>
                            <input type="text" class="form-control" value="وحدة" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Warranties</td>
                        <td>
                          <div>
                            <input type="text" class="form-control" value="الضمانات" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Print Barcode</td>
                        <td>
                          <div>
                            <input
                              type="text"
                              class="form-control"
                              value="طباعة الباركود"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Print QR Code</td>
                        <td>
                          <div>
                            <input
                              type="text"
                              class="form-control"
                              value="طباعة رمز الاستجابة السريعة"
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Language -->
</template>
