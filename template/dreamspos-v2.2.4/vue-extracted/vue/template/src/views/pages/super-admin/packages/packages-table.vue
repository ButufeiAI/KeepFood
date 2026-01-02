<script>
const data = [
  {
    Plan_Name: "Basic",
    Plan_Type: "Monthly",
    Total_Subscribers: "56",
    Price: "$50",
    Created_Date: "14 Jan 2024",
    Status: "Active",
  },
  {
    Plan_Name: "Advanced",
    Plan_Type: "Monthly",
    Total_Subscribers: "99",
    Price: "$200",
    Created_Date: "21 Jan 2024",
    Status: "Active",
  },
  {
    Plan_Name: "Premium",
    Plan_Type: "Monthly",
    Total_Subscribers: "58",
    Price: "$300",
    Created_Date: "10 Feb 2024",
    Status: "Active",
  },
  {
    Plan_Name: "Enterprise",
    Plan_Type: "Monthly",
    Total_Subscribers: "67",
    Price: "$400",
    Created_Date: "18 Feb 2024",
    Status: "Active",
  },
  {
    Plan_Name: "Basic",
    Plan_Type: "Yearly",
    Total_Subscribers: "78",
    Price: "$600",
    Created_Date: "15 Mar 2024",
    Status: "Active",
  },
  {
    Plan_Name: "Advanced",
    Plan_Type: "Yearly",
    Total_Subscribers: "99",
    Price: "$2400",
    Created_Date: "26 Mar 2024",
    Status: "Active",
  },
  {
    Plan_Name: "Premium",
    Plan_Type: "Yearly",
    Total_Subscribers: "48",
    Price: "$3600",
    Created_Date: "05 Apr 2024",
    Status: "Active",
  },
  {
    Plan_Name: "Enterprise",
    Plan_Type: "Yearly",
    Total_Subscribers: "17",
    Price: "$4800",
    Created_Date: "16 Apr 2024",
    Status: "Active",
  },
];

const columns = [
  {
    sorter: false,
  },
  {
    title: "Plan Name",
    dataIndex: "Plan_Name",
    key: "Plan_Name",
    sorter: {
      compare: (a, b) => {
        a = a.Plan_Name.toLowerCase();
        b = b.Plan_Name.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Plan Type",
    dataIndex: "Plan_Type",
    sorter: {
      compare: (a, b) => {
        a = a.Plan_Type.toLowerCase();
        b = b.Plan_Type.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Total Subscribers",
    dataIndex: "Total_Subscribers",
    sorter: {
      compare: (a, b) => {
        a = a.Total_Subscribers.toLowerCase();
        b = b.Total_Subscribers.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Price",
    dataIndex: "Price",
    sorter: {
      compare: (a, b) => {
        a = a.Price.toLowerCase();
        b = b.Price.toLowerCase();
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

const rowSelection = {
  onChange: () => {},
  onSelect: () => {},
  onSelectAll: () => {},
};

export default {
  data() {
    return {
      data,
      columns,
      rowSelection,
    };
  },
};
</script>

<template>
  <a-table
    class="table datatable thead-light"
    :columns="columns"
    :data-source="data"
    :row-selection="rowSelection"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'Plan_Name'">
        <h6 class="fw-medium">
          <a href="javascript:void(0);">{{ record.Plan_Name }}</a>
        </h6>
      </template>
      <template v-else-if="column.key === 'Status'">
        <span class="badge badge-success d-inline-flex align-items-center badge-sm">
          <i class="ti ti-point-filled me-1"></i>{{ record.Status }}
        </span>
      </template>
      <template v-else-if="column.key === 'action'">
        <div class="action-icon d-inline-flex">
          <a
            href="javascript:void(0);"
            class="me-2"
            data-bs-toggle="modal"
            data-bs-target="#edit_plans"
            ><i class="ti ti-edit"></i
          ></a>
          <a
            href="javascript:void(0);"
            data-bs-toggle="modal"
            data-bs-target="#delete_modal"
            ><i class="ti ti-trash"></i
          ></a>
        </div>
      </template>
    </template>
  </a-table>
</template>
