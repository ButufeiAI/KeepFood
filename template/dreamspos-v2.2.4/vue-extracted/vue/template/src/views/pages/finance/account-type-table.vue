<template>
  <a-table class="table datanew" :columns="columns" :data-source="data">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'Status'">
        <span :class="record.StatusClass">{{ record.Status }}</span>
      </template>
      <template v-else-if="column.key === 'action'">
        <div class="action-table-data">
          <div class="edit-delete-action">
            <a class="me-2 p-2 mb-0" data-bs-toggle="modal" data-bs-target="#edit-units">
              <i data-feather="edit" class="feather-edit"></i>
            </a>
            <a
              data-bs-toggle="modal"
              data-bs-target="#delete-modal"
              class="me-0 p-2 mb-0"
              href="javascript:void(0);"
            >
              <i data-feather="trash-2" class="feather-trash-2"></i>
            </a>
          </div>
        </div>
      </template>
    </template>
  </a-table>
</template>

<script>
const columns = [
  {
    title: "Type",
    dataIndex: "Type",
    sorter: {
      compare: (a, b) => {
        a = a.Type.toLowerCase();
        b = b.Type.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Created Date",
    dataIndex: "Created_Date",
    sorter: {
      compare: (a, b) => {
        a = a.Created_Date.toLowerCase();
        b = b.Created_Date.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status",
    sorter: {
      compare: (a, b) => {
        a = a.Status.toLowerCase();
        b = b.Status.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "",
    key: "action",
    sorter: true,
  },
];

const data = [
  {
    Type: "Savings account",
    Created_Date: "24 Dec 2024",
    StatusClass: "badge table-badge bg-success fw-medium fs-10",
    Status: "Active",
  },
  {
    Type: "Current Account",
    Created_Date: "10 Dec 2024",
    StatusClass: "badge table-badge bg-danger fw-medium fs-10",
    Status: "Inactive",
  },
  {
    Type: "Salary Account",
    Created_Date: "27 Nov 2024",
    StatusClass: "badge table-badge bg-success fw-medium fs-10",
    Status: "Active",
  },
];
export default {
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>
