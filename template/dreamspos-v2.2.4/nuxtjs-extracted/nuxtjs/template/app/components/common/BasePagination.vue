<template>
  
    <div class="dataTables_length" id="DataTables_Table_0_length"><label>Row Per Page <select
          name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" class="form-select form-select-sm">
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select> Entries</label></div>
    <div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
      <ul class="pagination">
        <li class="paginate_button page-item previous disabled" id="DataTables_Table_0_previous"><a
            aria-controls="DataTables_Table_0" aria-disabled="true" role="link" data-dt-idx="previous" tabindex="-1"
            class="page-link"><i class="fa fa-angle-left"></i> </a></li>
        <li class="paginate_button page-item active"><a href="#" aria-controls="DataTables_Table_0" role="link"
            aria-current="page" data-dt-idx="0" tabindex="0" class="page-link">1</a></li>
        <li class="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" role="link"
            data-dt-idx="1" tabindex="0" class="page-link">2</a></li>
        <li class="paginate_button page-item next" id="DataTables_Table_0_next"><a href="#"
            aria-controls="DataTables_Table_0" role="link" data-dt-idx="next" tabindex="0" class="page-link"> <i
              class=" fa fa-angle-right"></i></a></li>
      </ul>
    </div>
    <div class="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">1 - 10 of 11 items</div>
</template>

<script>
export default {
  name: 'BasePagination',
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    pageSize: {
      type: Number,
      required: true,
    },
    totalItems: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    pageSizeOptions: {
      type: Array,
      default: () => [10, 25, 50, 100],
    },
  },
  computed: {
    startItem() {
      return ((this.currentPage - 1) * this.pageSize) + 1;
    },
    endItem() {
      return Math.min(this.currentPage * this.pageSize, this.totalItems);
    },
  },
  watch: {
    totalPages(newVal) {
      if (this.currentPage > newVal) {
        this.$emit('update:currentPage', newVal || 1);
      }
    },
  },
};
</script>
