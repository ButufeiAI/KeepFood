<template>
  <div class="page-wrapper cardhead">
    <div class="content">
      <!-- Page Header -->
      <layout-breadcrumb :title="title" :text="text" :text1="text1" />
      <!-- /Page Header -->

      <div class="row">
        <!-- Editor -->
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Editor</h5>
            </div>
            <div class="card-body">
              <div class="editor pages-editor one">
                <div class="editor three-line">
                  <div class="editor-container">
                    <div ref="editorRef" class="quill-editor" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Editor -->
      </div>
    </div>
  </div>
</template>

<script>
import Quill from "quill";
import "quill/dist/quill.snow.css";
export default {
  data() {
    return {
      content: "Description",
      title: "Text Editor",
      text: "Dashboard",
      text1: "Text Editor",
    };
  },
  mounted() {
    this.initQuill();
  },
  methods: {
    submitForm() {
      this.$router.push("/hrm/department-list");
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

      quill.on("text-change", () => {
        this.content = quill.root.innerHTML;
      });
    },
  },
  name: "text-editor",
};
</script>
