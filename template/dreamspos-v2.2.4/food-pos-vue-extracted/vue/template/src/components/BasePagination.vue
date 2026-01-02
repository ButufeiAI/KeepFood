<template>
  <div class="row align-items-center mt-3">
    <div class="col-md-6">
      <div class="datatable-length">
        <div class="dataTables_length" id="calls-list_length">
          <label class="d-flex align-items-center">
            <select name="calls-list_length" aria-controls="calls-list" class="form-select form-select-sm me-2"
              :value="pageSize" @change="$emit('update:pageSize', $event.target.value)">
              <option v-for="size in pageSizeOptions" :key="size" :value="size">
                {{ size }}
              </option>
            </select>
            Entries
          </label>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="datatable-paginate">
        <div class="dataTables_paginate paging_simple_numbers" id="calls-list_paginate">
          <ul class="pagination">
            <li class="paginate_button page-item previous" :class="{ disabled: currentPage === 1 }"
              id="calls-list_previous" @click="currentPage > 1 && $emit('update:currentPage', currentPage - 1)">
              <a aria-controls="calls-list" aria-disabled="true" role="link" data-dt-idx="previous" tabindex="-1"
                class="page-link" href="javascript:void(0);">
                <i class="ti ti-chevron-left"></i> Prev
              </a>
            </li>
            <li v-for="page in totalPages" :key="page" class="paginate_button page-item"
              :class="{ active: currentPage === page }">
              <a href="javascript:void(0);" aria-controls="calls-list" role="link"
                :aria-current="currentPage === page ? 'page' : undefined" :data-dt-idx="page - 1"
                :tabindex="currentPage === page ? 0 : -1" class="page-link" @click.prevent="$emit('update:currentPage', page)">
                {{ page }}
              </a>
            </li>
            <li class="paginate_button page-item next" :class="{ disabled: currentPage === totalPages }"
              id="calls-list_next" @click="currentPage < totalPages && $emit('update:currentPage', currentPage + 1)">
              <a aria-controls="calls-list" aria-disabled="true" role="link" data-dt-idx="next" tabindex="-1"
                class="page-link" href="javascript:void(0);">
                <i class="ti ti-chevron-right"></i> Next
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
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
    pageSizeOptions: {
      type: Array,
      default: () => [5, 10, 20, 50],
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
};
</script>
