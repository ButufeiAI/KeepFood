<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper cardhead">
    <div class="content container-fluid">
      <!-- Page Header -->
      <layout-breadcrumb :title="title" :text="text" :text1="text1" />
      <!-- /Page Header -->

      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Basic Select2</h5>
            </div>
            <div class="card-body">
              <vue-select :options="SelectOne" v-model="selected" placeholder="Selection-1" />
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Multiple Select</h5>
            </div>
            <div class="card-body">
              <vue-select :options="SelectTwo" v-model="selectedOne" placeholder="" />
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Single Select With Placeholder</h5>
            </div>
            <div class="card-body">
              <vue-select :options="SelectThree" v-model="selectedTwo" placeholder="Texas" />
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Multiple Select With Placeholder</h5>
            </div>
            <div class="card-body">
              <vue-select :options="SelectFour" v-model="selectedThree" placeholder="Select" />
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Multiple Select With Placeholder</h5>
            </div>
            <div class="card-body">
              <vue-select :options="SelectFive" v-model="selectedFour" placeholder="" />
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <!-- Basic -->
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Basic</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <p>
                    Use select2() function on select element to convert it to Select 2.
                  </p>
                  <vue-select :options="SelectSix" v-model="selectedFive" placeholder="Orange" />
                </div>
              </div>
            </div>
          </div>
          <!-- /Basic -->

          <!-- Nested -->
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Nested</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <p>Add options inside the optgroups to for group options.</p>
                  <select class="form-control nested">
                    <optgroup label="Group1">
                      <option selected="selected">orange</option>
                      <option>white</option>
                      <option>purple</option>
                    </optgroup>
                    <optgroup label="Group2">
                      <option>purple</option>
                      <option>orange</option>
                      <option>white</option>
                    </optgroup>
                    <optgroup label="Group3">
                      <option>white</option>
                      <option>purple</option>
                      <option>orange</option>
                    </optgroup>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <!-- /Nested -->

          <!-- Placeholder -->
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Placeholder</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <p>Apply Placeholder by setting option placeholder option.</p>
                  <vue-select
                    :options="SelectSeven"
                    v-model="selectedSix"
                    placeholder="Choose"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- /Placeholder -->

          <!-- Tagging with multi-value -->
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Tagging with multi-value select boxes</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <p>Set tags: true to convert select 2 in Tag mode.</p>
                  <select class="form-control tagging" multiple="multiple">
                    <option>orange</option>
                    <option>white</option>
                    <option>purple</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <!-- /Tagging with multi-value -->
        </div>

        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Small Select2</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <p>Use data('select2') function to get container of select2.</p>
                  <vue-select
                    :options="SelectEight"
                    v-model="selectedSeven"
                    placeholder="Orange"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Disabling options</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <p>Disable Select using disabled attribute.</p>
                  <vue-select
                    :options="SelectNine"
                    v-model="selectedEight"
                    placeholder="Choose"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Limiting the number of Tagging</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <p>
                    Set maximumSelectionLength: 2 with tags: true to limit selectin in Tag
                    mode.
                  </p>
                  <select class="form-control tagging" multiple="multiple">
                    <option>orange</option>
                    <option>white</option>
                    <option>purple</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Form Select2",
      text: "Dashboard",
      text1: "Form Select2",
      selected: "Selection-1",
      selectedOne: [],
      selectedTwo: "Texas",
      selectedThree: [],
      selectedFour: [],
      selectedFive: "Orange",
      selectedSix: [],
      selectedSeven: "Orange",
      selectedEight: [],
      SelectOne: [
        {label: "Selection-1", value: "Selection-1"},
        {label: "Selection-2", value: "Selection-2"},
        {label: "Selection-3", value: "Selection-3"},
        {label: "Selection-4", value: "Selection-4"},
        {label: "Selection-5", value: "Selection-5"},
      ],
      SelectTwo: [
        {label: "Multiple-1", value: "Multiple-1"}, 
        {label: "Multiple-2", value: "Multiple-2"}, 
        {label: "Multiple-3", value: "Multiple-3"}, 
        {label: "Multiple-4", value: "Multiple-4"}, 
        {label: "Multiple-5", value: "Multiple-5"}, 
      ],
      SelectThree: [
        {label: "Texas", value: "Texas"}, 
        {label: "Georgia", value: "Georgia"}, 
        {label: "California", value: "California"}, 
        {label: "Washington D.C", value: "Washington D.C"}, 
        {label: "Virginia", value: "Virginia"}, 
      ],
      SelectFour: [
        {label: "Apple", value: "Apple"}, 
        {label: "Mango", value: "Mango"}, 
        {label: "Orange", value: "Orange"}, 
        {label: "Guava", value: "Guava"}, 
        {label: "Pineapple", value: "Pineapple"},
      ],
      SelectFive: [
        {label: "Apple", value: "Apple"}, 
        {label: "Mango", value: "Mango"}, 
        {label: "Orange", value: "Orange"}, 
        {label: "Guava", value: "Guava"}, 
        {label: "Pineapple", value: "Pineapple"},
      ],
      SelectSix: [
        {label: "Orange", value: "Orange"}, 
        {label: "White", value: "White"}, 
        {label: "Purple", value: "Purple"}, 
      ],
      SelectSeven: [
        {label: "First", value: "First"}, 
        {label: "Second", value: "Second"}, 
        {label: "Third", value: "Third"}, 
        {label: "Fourth", value: "Fourth"}, 
        {label: "Fifth", value: "Fifth"},
      ],
      SelectEight: [
        {label: "Orange", value: "Orange"}, 
        {label: "White", value: "White"}, 
        {label: "Purple", value: "Purple"}, 
      ],
      SelectNine: [
        {label: "First", value: "First"}, 
        {label: "Second", value: "Second"}, 
        {label: "Third", value: "Third"}
      ],
    };
  },
};
</script>
