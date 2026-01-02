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
                <h4 class="fs-18 fw-bold">Localization</h4>
              </div>
              <div class="card-body">
                <form @submit.prevent="submitForm">
                  <div class="border-bottom mb-3">
                    <div class="card-title-head">
                      <h6 class="fs-16 fw-bold mb-3">
                        <span class="fs-18 me-2"><i class="ti ti-list"></i></span>
                        Basic Information
                      </h6>
                    </div>
                    <div>
                      <div class="row align-items-center">
                        <div class="col-sm-6">
                          <div class="mb-3">
                            <h6 class="mb-1 fw-medium">Language</h6>
                            <p>Select Language of the Website</p>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="localization-select ms-sm-auto mb-3">
                            <vue-select
                              :options="EnglSelc"
                              v-model="selected"
                              placeholder="English"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row align-items-center">
                        <div class="col-sm-6">
                          <div class="mb-3">
                            <h6 class="mb-1 fw-medium">Language Switcher</h6>
                            <p>To display in all the pages</p>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="localization-select ms-sm-auto mb-3">
                            <div
                              class="status-toggle modal-status d-flex justify-content-between align-items-center"
                            >
                              <input type="checkbox" id="user3" class="check" checked />
                              <label for="user3" class="checktoggle"></label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row align-items-center">
                        <div class="col-sm-6">
                          <div class="mb-3">
                            <h6 class="mb-1 fw-medium">Timezone</h6>
                            <p>Select Time zone in website</p>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="localization-select ms-sm-auto mb-3">
                            <vue-select
                              :options="UtcSel"
                              v-model="selectedOne"
                              placeholder="UTC 5:30"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row align-items-center">
                        <div class="col-sm-6">
                          <div class="mb-3">
                            <h6 class="mb-1 fw-medium">Date format</h6>
                            <p>Select date format to display in website</p>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="localization-select ms-sm-auto mb-3">
                            <vue-select
                              :options="MonthSel"
                              v-model="selectedTwo"
                              placeholder="01 Jan 2025"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row align-items-center">
                        <div class="col-sm-6">
                          <div class="mb-3">
                            <h6 class="mb-1 fw-medium">Time Format</h6>
                            <p>Select time format to display in website</p>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="localization-select ms-sm-auto mb-3">
                            <vue-select
                              :options="HourSel"
                              v-model="selectedThree"
                              placeholder="12 Hours"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row align-items-center">
                        <div class="col-sm-6">
                          <div class="mb-3">
                            <h6 class="mb-1 fw-medium">Financial Year</h6>
                            <p>Select year for finance</p>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="localization-select ms-sm-auto mb-3">
                            <vue-select
                              :options="YeaSel"
                              v-model="selectedFour"
                              placeholder="2025"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row align-items-center">
                        <div class="col-sm-6">
                          <div class="mb-3">
                            <h6 class="mb-1 fw-medium">Starting Month</h6>
                            <p>Select starting month to display</p>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="localization-select ms-sm-auto mb-3">
                            <vue-select
                              :options="NamSel"
                              v-model="selectedFive"
                              placeholder="January"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="border-bottom mb-3">
                    <div class="card-title-head">
                      <h6 class="fs-16 fw-bold mb-3">
                        <span class="fs-18 me-2"><i class="ti ti-credit-card"></i></span>
                        Currency Settings
                      </h6>
                    </div>
                    <div class="localization-info">
                      <div class="row align-items-center">
                        <div class="col-sm-6">
                          <div class="mb-3">
                            <h6 class="mb-1 fw-medium">Currency</h6>
                            <p>Select Time zone in website</p>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="localization-select ms-sm-auto mb-3">
                            <vue-select
                              :options="LocaSel"
                              v-model="selectedSix"
                              placeholder="USA"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row align-items-center">
                        <div class="col-sm-6">
                          <div class="mb-3">
                            <h6 class="mb-1 fw-medium">Currency Symbol</h6>
                            <p>Select date format to display in website</p>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="localization-select ms-sm-auto mb-3">
                            <vue-select
                              :options="SymSel"
                              v-model="selectedSeven"
                              placeholder="Select"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row align-items-center">
                        <div class="col-sm-6">
                          <div class="mb-3">
                            <h6 class="mb-1 fw-medium">Currency Position</h6>
                            <p>Select time format to display in website</p>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="localization-select ms-sm-auto mb-3">
                            <vue-select
                              :options="CurrencySelect"
                              v-model="selectedEight"
                              placeholder="$100"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row align-items-center">
                        <div class="col-sm-6">
                          <div class="mb-3">
                            <h6 class="mb-1 fw-medium">Decimal Separator</h6>
                            <p>Select year for finance</p>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="localization-select ms-sm-auto mb-3">
                            <vue-select
                              :options="DecimalSel"
                              v-model="selectedNine"
                              placeholder="."
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row align-items-center">
                        <div class="col-sm-6">
                          <div class="mb-3">
                            <h6 class="mb-1 fw-medium">Thousand Separator</h6>
                            <p>Select starting month to display</p>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="localization-select ms-sm-auto mb-3">
                            <vue-select
                              :options="ThousandSel"
                              v-model="selectedTen"
                              placeholder=","
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="border-bottom mb-3">
                    <div class="card-title-head">
                      <h6 class="fs-16 fw-bold mb-3">
                        <span class="fs-18 me-2"><i class="ti ti-map"></i></span>
                        Country Settings
                      </h6>
                    </div>
                    <div class="localization-info">
                      <div class="row align-items-center">
                        <div class="col-sm-6">
                          <div class="mb-3">
                            <h6 class="mb-1 fw-medium">Countries Restriction</h6>
                            <p>Select countries restriction</p>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="localization-select ms-sm-auto mb-3">
                            <vue-select
                              :options="Countrires"
                              v-model="selectedEleven"
                              placeholder="Allow All Countries"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="card-title-head">
                      <h6 class="fs-16 fw-bold mb-3">
                        <span class="fs-18 me-2"><i class="ti ti-map"></i></span>
                        File Settings
                      </h6>
                    </div>
                    <div class="localization-info">
                      <div class="row align-items-center">
                        <div class="col-sm-6">
                          <div class="mb-3">
                            <h6 class="fw-medium mb-1">Allowed Files</h6>
                            <p>Select files</p>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="localization-select ms-sm-auto mb-3 w-100">
                            <div class="mb-3">
                              <vue3-tags-input
                                class="input-tags form-control"
                                type="text"
                                data-role="tagsinput"
                                name="inputBox"
                                id="inputBox"
                                :tags="tags"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row align-items-center">
                        <div class="col-sm-6">
                          <div class="mb-3 mb-sm-0">
                            <h6 class="fw-medium mb-1">Max File Size</h6>
                            <p>File size</p>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div
                            class="localization-select ms-sm-auto mb-3 d-flex align-items-center mb-sm-0"
                          >
                            <input type="text" class="form-control" value="5000" />
                            <span class="ms-2 text-gray-9">MB</span>
                          </div>
                        </div>
                      </div>
                    </div>
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
import Vue3TagsInput from "vue3-tags-input";
export default {
  components: {
    Vue3TagsInput,
  },
  data() {
    return {
      selected: "English",
      selectedOne: "UTC 5:30",
      selectedTwo: "01 Jan 2025",
      selectedThree: "12 Hours",
      selectedFour: "2025",
      selectedFive: "January",
      selectedSix: "USA",
      selectedSeven: [],
      selectedEight: "$100",
      selectedNine: ".",
      selectedTen: ",",
      selectedEleven: "Allow All Countries",
      ThousandSel: [
        {label: ",", value: ","}, 
        {label: ",", value: ","}
      ],
      DecimalSel: [
        {label: ".", value: "."}, 
        {label: ".", value: "."}
      ],
      CurrencySelect: [
        {label: "$100", value: "$100"}, 
        {label: "$400", value: "$400"}
      ],
      SymSel: [
        {label: "$", value: "$"}, 
        {label: "€", value: "€"}, 
        {label: "¥", value: "¥"}
      ],
      Countrires: [
        {label: "Allow All Countries", value: "Allow All Countries"}, 
        {label: "Deny All Countries", value: "Deny All Countries"}
      ],
      LocaSel: [
        {label: "USA", value: "USA"}, 
        {label: "India", value: "India"}
      ],
      NamSel: [
        {label: "January", value: "January"}, 
        {label: "February", value: "February"}, 
        {label: "March", value: "March"}, 
      ],
      YeaSel: [
        {label: "2025", value: "2025"}, 
        {label: "2026", value: "2026"},
      ],
      HourSel: [
        {label: "12 Hours", value: "12 Hours"}, 
        {label: "24 Hours", value: "24 Hours"}
      ],
      MonthSel: [
        {llabel: "01 Jan 2025", value: "01 Jan 2025"}, 
        {label: "Jul 22 2025", value: "Jul 22 2025"}
      ],
      UtcSel: [
        {label: "UTC 5:30", value: "UTC 5:30"}, 
        {label: "(UTC+11:00) INR", value: "(UTC+11:00) INR"}
      ],
      EnglSelc: [
        {label: "English", value: "English"}, 
        {label: "Spanish", value: "Spanish"}
      ],
      tags: [
        {label: "JPG", value: "JPG"}, 
        {label: "GIF", value: "GIF"}, 
        {label: "PNG", value: "PNG"},
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/website-settings/localization-settings");
    },
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
