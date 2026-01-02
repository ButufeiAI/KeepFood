<template>
  <div class="page-wrapper cardhead">
    <div class="content">
      <!-- Page Header -->
      <layout-breadcrumb :title="title" :text="text" :text1="text1" />
      <!-- /Page Header -->

      <div class="row">
        <!-- Scroll -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Horizontal Scroll</h5>
            </div>
            <div class="card-body">
              <div class="scroll-bar-wrap">
                <simplebar ref="horizontalScroll" class="horizontal-scroll scroll-demo" style="overflow-y: hidden;">
                  <div class="horz-scroll-content" style="width: 1600px;">
                    <div class="row">
                      <div class="col-sm-3">
                        <p>
                          {{ para1 }}
                        </p>
                      </div>
                      <div class="col-sm-3">
                        <p>
                          {{ para2 }}
                        </p>
                      </div>
                      <div class="col-sm-3">
                        <p>
                          {{ para3 }}
                        </p>
                      </div>
                      <div class="col-sm-3">
                        <p>
                          {{ para4 }}
                        </p>
                      </div>
                    </div>
                  </div>
                </simplebar>
              </div>
            </div>
          </div>
        </div>
        <!-- /Scroll -->

        <!-- Scroll -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Vertical Scroll</h5>
            </div>
            <div class="card-body">
              <simplebar ref="verticalScroll" class="vertical-scroll scroll-demo" style="max-height: 300px; overflow-x: hidden;">
                <p>
                  {{ para1 }}
                </p>
                <p>
                  {{ para2 }}
                </p>
                <p>
                  {{ para3 }}
                </p>
                <p>
                  {{ para4 }}
                </p>
                <p>
                  {{ para5 }}
                </p>
              </simplebar>
            </div>
          </div>
        </div>
        <!-- /Scroll -->

        <!-- Scroll -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Small Size Scroll</h5>
            </div>
            <div class="card-body">
              <simplebar ref="scrollbarMargins" class="scrollbar-margins large-margin scroll-demo" style="max-height: 300px;">
                <p>
                  {{ para1 }}
                </p>
                <p>
                  {{ para2 }}
                </p>
                <p>
                  {{ para3 }}
                </p>
                <p>
                  {{ para4 }}
                </p>
                <p>
                  {{ para5 }}
                </p>
              </simplebar>
            </div>
          </div>
        </div>
        <!-- /Scroll -->

        <!-- Scroll -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Visible Scroll</h5>
            </div>
            <div class="card-body">
              <div class="scroll-bar-wrap">
                <simplebar ref="visibleScroll" class="visible-scroll always-visible scroll-demo" :forceVisible="true">
                  <div class="horz-scroll-content" style="width: 1600px; max-height: 300px;">
                    <div class="row">
                      <div class="col-sm-3">
                        <p>{{ para1 }}</p>
                        <p>{{ para2 }}</p>
                        <p>{{ para3 }}</p>
                      </div>
                      <div class="col-sm-3">
                        <p>{{ para3 }}</p>
                        <p>{{ para4 }}</p>
                        <p>{{ para5 }}</p>
                      </div>
                      <div class="col-sm-3">
                        <p>{{ para1 }}</p>
                        <p>{{ para2 }}</p>
                        <p>{{ para3 }}</p>
                      </div>
                      <div class="col-sm-3">
                        <p>{{ para3 }}</p>
                        <p>{{ para4 }}</p>
                        <p>{{ para5 }}</p>
                      </div>
                    </div>
                  </div>
                </simplebar>
              </div>
            </div>
          </div>
        </div>
        <!-- /Scroll -->
      </div>
    </div>
  </div>
</template>
<script>
import simplebar from "simplebar-vue";
import "simplebar-vue/dist/simplebar.min.css";

export default {
  components: {
    simplebar,
  },
  data() {
    return {
      title: "Scroll Bar",
      text: "Dashboard",
      text1: "Scroll Bar",
      para1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      para2:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus pageMaker including versions of Lorem Ipsum.",
      para3:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      para4:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      para5:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initScrollbars();
    });
  },
  methods: {
    initScrollbars() {
      // Initialize scrollbars similar to PerfectScrollbar configuration
      // Vertical Scroll - suppress horizontal scroll (wheelPropagation enabled by default in simplebar)
      if (this.$refs.verticalScroll) {
        const verticalEl = this.$refs.verticalScroll.$el;
        if (verticalEl) {
          const contentEl = verticalEl.querySelector('.simplebar-content-wrapper');
          if (contentEl) {
            contentEl.style.overflowX = 'hidden';
          }
        }
      }

      // Horizontal Scroll - suppress vertical scroll
      if (this.$refs.horizontalScroll) {
        const horizontalEl = this.$refs.horizontalScroll.$el;
        if (horizontalEl) {
          const contentEl = horizontalEl.querySelector('.simplebar-content-wrapper');
          if (contentEl) {
            contentEl.style.overflowY = 'hidden';
          }
        }
      }

      // Visible Scroll - force visible scrollbar (wheelPropagation enabled)
      if (this.$refs.visibleScroll) {
        const visibleEl = this.$refs.visibleScroll.$el;
        if (visibleEl) {
          const scrollbarEl = visibleEl.querySelector('.simplebar-scrollbar');
          if (scrollbarEl) {
            scrollbarEl.classList.add('simplebar-visible');
          }
        }
      }

      // Scrollbar Margins - standard configuration (wheelPropagation enabled)
      // Already configured via max-height
    }
  }
};
</script>