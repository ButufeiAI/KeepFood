<template>
  <div class="card">
    <div class="card-header">
      <h5 class="card-title">Basic Inputs</h5>
    </div>
    <div class="card-body">
      <form action="#">
        <div class="form-group row">
          <label class="col-form-label col-md-2">Text Input</label>
          <div class="col-md-10 mb-3">
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-md-2">Password</label>
          <div class="col-md-10 mb-3">
            <input type="password" class="form-control" />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-md-2">Disabled Input</label>
          <div class="col-md-10 mb-3">
            <input
              type="text"
              class="form-control"
              disabled="disabled"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-md-2">Readonly Input</label>
          <div class="col-md-10 mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="readonly"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-md-2">Placeholder</label>
          <div class="col-md-10 mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Placeholder"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-md-2">File Input</label>
          <div class="col-md-10 mb-3">
            <input class="form-control" type="file" />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-md-2">Default Select</label>
          <div class="col-md-10 mb-3">
            <vue-select :options="Select" v-model="selected" placeholder="-- Select --" />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-md-2">Radio</label>
          <div class="col-md-10 mb-3">
            <div class="radio">
              <label> <input type="radio" name="radio" /> Option 1 </label>
            </div>
            <div class="radio">
              <label> <input type="radio" name="radio" /> Option 2 </label>
            </div>
            <div class="radio">
              <label> <input type="radio" name="radio" /> Option 3 </label>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-md-2">Checkbox</label>
          <div class="col-md-10 mb-3">
            <div class="checkbox">
              <label> <input type="checkbox" name="checkbox" /> Option 1 </label>
            </div>
            <div class="checkbox">
              <label> <input type="checkbox" name="checkbox" /> Option 2 </label>
            </div>
            <div class="checkbox">
              <label> <input type="checkbox" name="checkbox" /> Option 3 </label>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-md-2">Textarea</label>
          <div class="col-md-10 mb-3">
            <textarea
              id="textarea"
              v-model="text"
              rows="5"
              max-rows="6"
              placeholder="Enter text here"
            ></textarea>
          </div>
        </div>
        <div class="form-group mb-0 row">
          <label class="col-form-label col-md-2">Input Addons</label>
          <div class="col-md-10">
            <div class="input-group">
              <span class="input-group-text">$</span>
              <input class="form-control" type="text" />
              <button class="btn btn-primary">Button</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: [],
      Select: [
        {label: "Option 1", value: "Option 1"}, 
        {label: "Option 2", value: "Option 2"}, 
        {label: "Option 3", value: "Option 3"}, 
        {label: "Option 4", value: "Option 4"}, 
        {label: "Option 5", value: "Option 5"}, 
      ],
      text: '',
    };
  },
  mounted() {},
};
</script>
