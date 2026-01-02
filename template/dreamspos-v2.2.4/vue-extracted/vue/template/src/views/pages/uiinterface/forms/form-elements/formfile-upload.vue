<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper cardhead">
    <div class="content container-fluid">

      <!-- Page Header -->
      <div class="page-header">
        <div class="row">
          <div class="col-sm-12">
            <h3 class="page-title">File Upload</h3>
            <ul class="breadcrumb">
              <li class="breadcrumb-item"><router-link to="/dashboard">Dashboard</router-link></li>
              <li class="breadcrumb-item active">File Upload</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- /Page Header -->

      <div class="card">
        <div class="card-header">
          <h5 class="card-title">Dropzone File Upload</h5>
        </div>
        <div class="card-body">
          <p class="text-muted">
            DropzoneJS is an open source library that provides drag’n’drop file uploads with image previews.
          </p>
          <form ref="dropzoneForm" method="post" class="dropzone" id="myAwesomeDropzone">
            <div class="fallback">
              <input name="file" type="file" multiple>
            </div>
            <div class="dz-message needsclick">
              <i class="ti ti-cloud-upload h1 text-muted"></i>
              <h3>Drop files here or click to upload.</h3>
              <span class="text-muted fs-13">(This is just a demo dropzone. Selected files are <strong>not</strong>
                actually uploaded.)</span>
            </div>
          </form>

          <!-- Preview -->
          <div ref="previewsContainer" class="dropzone-previews" id="file-previews"></div>

        </div> <!-- end card-body -->
      </div> <!-- end card -->

      <!-- file preview template -->
      <div ref="previewTemplate" class="d-none" id="uploadPreviewTemplate">
        <div class="card mt-2 mb-0 shadow-none border">
          <div class="p-2">
            <div class="row align-items-center">
              <div class="col-auto">
                <img data-dz-thumbnail src="#" class="avatar-sm rounded bg-light" alt="">
              </div>
              <div class="col ps-0">
                <a href="javascript:void(0);" class="text-muted fw-bold" data-dz-name></a>
                <p class="mb-0" data-dz-size></p>
              </div>
              <div class="col-auto">
                <!-- Button -->
                <a href="" class="btn btn-link btn-lg text-muted" data-dz-remove>
                  <i class="ti ti-x"></i>
                </a>
              </div>
            </div>
          </div>
        </div> <!-- end card -->
      </div>

    </div>
    <div class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
      <p class="mb-0 text-gray-9">2014 - 2025 &copy; DreamsPOS. All Right Reserved</p>
      <p>Designed &amp; Developed by <a href="javascript:void(0);" class="text-primary">Dreams</a></p>
    </div>
  </div>
</template>
<script>
import Dropzone from 'dropzone';
import 'dropzone/dist/dropzone.css';
import '@/assets/css/basic.css';
import '@/assets/css/dropzone.css';

export default {
  data() {
    return {
      dropzoneInstance: null,
    };
  },
  mounted() {
    this.initDropzone();
  },
  beforeUnmount() {
    if (this.dropzoneInstance) {
      this.dropzoneInstance.destroy();
      this.dropzoneInstance = null;
    }
  },
  methods: {
    initDropzone() {
      // Disable Dropzone auto-discovery
      Dropzone.autoDiscover = false;

      // Wait for next tick to ensure DOM is ready
      this.$nextTick(() => {
        const dropzoneElement = this.$refs.dropzoneForm;
        const previewsContainer = this.$refs.previewsContainer;
        const previewTemplate = this.$refs.previewTemplate;

        if (!dropzoneElement) {
          console.warn('Dropzone form element not found');
          return;
        }

        // Get configuration from element attributes
        const actionUrl = dropzoneElement.getAttribute('action') || '/';
        
        // Build Dropzone configuration
        const dropzoneConfig = {
          url: actionUrl,
          autoProcessQueue: false, // Disable auto-upload for demo (files won't actually be uploaded)
          addRemoveLinks: true,
        };

        // Set previews container if available
        if (previewsContainer) {
          dropzoneConfig.previewsContainer = previewsContainer;
        }

        // Set preview template if available
        if (previewTemplate) {
          dropzoneConfig.previewTemplate = previewTemplate.innerHTML;
        }

        // Initialize Dropzone
        this.dropzoneInstance = new Dropzone(dropzoneElement, dropzoneConfig);
      });
    },
  },
};
</script>
