<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper cardhead">
    <div class="content">
      <!-- Page Header -->
      <div class="page-header">
        <div class="row">
          <div class="col-sm-12">
            <h3 class="page-title">Tooltip</h3>
          </div>
        </div>
      </div>
      <!-- /Page Header -->

      <div class="row">
        <!-- Colored Tooltips -->
        <div class="col-xl-12">
          <div class="card">
            <div class="card-header justify-content-between">
              <div class="card-title">Colored Tooltips</div>
            </div>
            <div class="card-body">
              <div class="btn-list">
                <a-tooltip title="Primary Tooltip" placement="top" color="orange">
                  <button type="button" class="btn btn-primary">
                    Primary Tooltip
                  </button>
                </a-tooltip>
                <a-tooltip title="Secondary Tooltip" placement="top" color="midnightblue">
                  <button type="button" class="btn btn-secondary">
                    Secondary Tooltip
                  </button>
                </a-tooltip>
                <a-tooltip title="Warning Tooltip" placement="top" color="yellow">
                  <button type="button" class="btn btn-warning">
                    Warning Tooltip
                  </button>
                </a-tooltip>
                <a-tooltip title="Info Tooltip" placement="top" color="blue">
                  <button type="button" class="btn btn-info">
                    Info Tooltip
                  </button>
                </a-tooltip>
                <a-tooltip title="Success Tooltip" placement="top" color="green">
                  <button type="button" class="btn btn-success">
                    Success Tooltip
                  </button>
                </a-tooltip>
                <a-tooltip title="Danger Tooltip" placement="top" color="red">
                  <button type="button" class="btn btn-danger">
                    Danger Tooltip
                  </button>
                </a-tooltip>
                <a-tooltip title="Light Tooltip" placement="top" color="lime">
                  <button type="button" class="btn btn-light">
                    Light Tooltip
                  </button>
                </a-tooltip>
                <a-tooltip title="Dark Tooltip" placement="top" color="black">
                  <button type="button" class="btn btn-dark text-white">
                    Dark Tooltip
                  </button>
                </a-tooltip>
              </div>
            </div>
          </div>
        </div>
        <!-- /Colored Tooltips -->
      </div>

      <div class="row">
        <!-- Html Element -->
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Html Element</h5>
            </div>
            <div class="card-body">
              <div class="popover-list">
                <button
                  class="example-popover btn btn-primary"
                  type="button"
                  data-container="body"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title=""
                  data-bs-original-title="Popover title"
                >
                  Hover Me
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- /Html Element -->

        <!-- Direction Tooltip -->
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Direction Tooltip</h5>
            </div>
            <div class="card-body">
              <div class="tooltip-list">
                <button
                  type="button"
                  class="btn btn-primary me-2"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title=""
                  data-bs-original-title="Tooltip on top"
                >
                  Tooltip on top
                </button>
                <button
                  type="button"
                  class="btn btn-primary me-2"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title=""
                  data-bs-original-title="Tooltip on right"
                >
                  Tooltip on right
                </button>
                <button
                  type="button"
                  class="btn btn-primary me-2"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title=""
                  data-bs-original-title="Tooltip on bottom"
                >
                  Tooltip on bottom
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title=""
                  data-bs-original-title="Tooltip on left"
                >
                  Tooltip on left
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- /Direction Tooltip -->

        <!-- Html Element -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Html Element</h5>
            </div>
            <div class="card-body">
              <div class="popover-list">
                <button
                  type="button"
                  class="btn btn-primary me-2"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  title=""
                  data-bs-original-title="<em>Tooltip</em> <u>with</u> <b>HTML</b>"
                >
                  Tooltip with HTML
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="tooltip"
                  data-bs-trigger="click"
                  data-bs-html="true"
                  data-bs-placement="bottom"
                  title=""
                  data-bs-original-title="<em>Tooltip</em> <u>with</u> <b>HTML</b>"
                >
                  Click Me
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- /Html Element -->

        <!-- Tooltip -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Disabled Elements</h5>
            </div>
            <div class="card-body">
              <span
                class="d-inline-block"
                tabindex="0"
              >
                <button class="btn btn-primary" type="button" disabled>
                  Disabled button
                </button>
              </span>
            </div>
          </div>
        </div>
        <!-- /Tooltip -->

        <!-- Tooltip Links -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Tooltips on Links</h5>
            </div>
            <div class="card-body">
              <p class="text-muted mb-0">
                Hover on the link to view the
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="tooltip"
                  data-bs-custom-class="tooltip-primary"
                  title="Link Tooltip"
                  class="text-primary"
                  >Tooltip</a
                >
              </p>
            </div>
          </div>
        </div>
        <!-- /Tooltip Links -->

        <!-- Tooltip Images -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Tooltip For Images</h5>
            </div>
            <div class="card-body">
              <a
                href="javascript:void(0);"
                data-bs-toggle="tooltip"
                title="Marina Kai"
                data-bs-custom-class="tooltip-primary"
                class="avatar avatar-md me-2 online avatar-rounded"
              >
                <img src="@/assets/img/avatar/avatar-1.jpg" alt="img" />
              </a>
              <a
                href="javascript:void(0);"
                data-bs-toggle="tooltip"
                title="Alex Carey"
                data-bs-custom-class="tooltip-primary"
                class="avatar avatar-lg me-2 online avatar-rounded"
              >
                <img src="@/assets/img/avatar/avatar-2.jpg" alt="img" />
              </a>
              <a
                href="javascript:void(0);"
                data-bs-toggle="tooltip"
                title="Maria John"
                data-bs-custom-class="tooltip-primary"
                class="avatar avatar-xl me-2 offline avatar-rounded"
              >
                <img src="@/assets/img/avatar/avatar-3.jpg" alt="img" />
              </a>
            </div>
          </div>
        </div>
        <!-- /Tooltip Images -->
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, nextTick } from 'vue';

export default {
  name: 'UITooltips',
  setup() {
    let tooltipInstances = [];
    let Tooltip = null;

    const initializeTooltips = async () => {
      // Try to get Tooltip from window.bootstrap first (from bundle import)
      if (window.bootstrap && window.bootstrap.Tooltip) {
        Tooltip = window.bootstrap.Tooltip;
      } else {
        // Fallback: dynamically import Tooltip
        try {
          const bootstrap = await import('bootstrap');
          Tooltip = bootstrap.Tooltip;
        } catch (error) {
          console.error('Failed to load Bootstrap Tooltip:', error);
          return;
        }
      }
      
      if (!Tooltip) {
        console.warn('Bootstrap Tooltip not available');
        return;
      }

      // Initialize all tooltips
      const tooltipElements = document.querySelectorAll('[data-bs-toggle="tooltip"]');
      
      tooltipElements.forEach(element => {
        // Skip if already initialized
        if (Tooltip.getInstance(element)) {
          return;
        }

        // Get title from data-bs-original-title if title is empty
        let title = element.getAttribute('title') || element.getAttribute('data-bs-original-title') || '';
        
        // If title is empty, skip this element
        if (!title) {
          return;
        }

        const options = {
          trigger: element.getAttribute('data-bs-trigger') || 'hover focus',
          placement: element.getAttribute('data-bs-placement') || 'top',
          html: element.getAttribute('data-bs-html') === 'true',
          title: title
        };

        // Add custom class if specified
        const customClass = element.getAttribute('data-bs-custom-class');
        if (customClass) {
          options.customClass = customClass;
        }

        // Add container if specified
        const container = element.getAttribute('data-container');
        if (container) {
          options.container = container;
        }

        try {
          const tooltip = new Tooltip(element, options);
          tooltipInstances.push(tooltip);
        } catch (error) {
          console.error('Error initializing tooltip:', error);
        }
      });
    };

    onMounted(async () => {
      // Wait for DOM to be fully rendered
      await nextTick();
      
      // Initialize tooltips
      await initializeTooltips();
    });

    onUnmounted(() => {
      // Dispose all tooltip instances
      tooltipInstances.forEach(tooltip => {
        if (tooltip && typeof tooltip.dispose === 'function') {
          tooltip.dispose();
        }
      });
      tooltipInstances = [];
    });
  }
}
</script>