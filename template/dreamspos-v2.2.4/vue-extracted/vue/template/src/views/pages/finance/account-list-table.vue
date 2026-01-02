<template>
  <a-table
    class="table datanew"
    :columns="columns"
    :data-source="data"
    :row-selection="rowSelection"
  >
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
    title: "Account Holder Name",
    dataIndex: "Account_Holder_Name",
    sorter: {
      compare: (a, b) => {
        a = a.Account_Holder_Name.toLowerCase();
        b = b.Account_Holder_Name.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Account No",
    dataIndex: "Account_No",
    sorter: {
      compare: (a, b) => {
        a = a.Account_No.toLowerCase();
        b = b.Account_No.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
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
    title: "Opening Balance",
    dataIndex: "Opening_Balance",
    sorter: {
      compare: (a, b) => {
        a = a.Opening_Balance.toLowerCase();
        b = b.Opening_Balance.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Notes",
    dataIndex: "Notes",
    sorter: {
      compare: (a, b) => {
        a = a.Notes.toLowerCase();
        b = b.Notes.toLowerCase();
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
const data = [
  {
    key: "1",
    Account_Holder_Name: "Zephyr Indira",
    Account_No: "3298784309485",
    Type: "Savings account",
    Opening_Balance: "$200",
    Notes: "Account for Business",
    StatusClass: "badge table-badge bg-success fw-medium fs-10",
    Status: "Active",
  },
  {
    key: "2",
    Account_Holder_Name: "Quillon Elysia",
    Account_No: "5475878970090",
    Type: "Current Account",
    Opening_Balance: "$50",
    Notes: "Account for Business",
    StatusClass: "badge table-badge bg-danger fw-medium fs-10",
    Status: "Closed",
  },
  {
    key: "3",
    Account_Holder_Name: "Thaddeus Juniper",
    Account_No: "3255465758698",
    Type: "Salary Account",
    Opening_Balance: "$800",
    Notes: "Current Account",
    StatusClass: "badge table-badge bg-success fw-medium fs-10",
    Status: "Active",
  },
  {
    key: "4",
    Account_Holder_Name: "Orion Astrid",
    Account_No: "4353689870544",
    Type: "Current Account",
    Opening_Balance: "$100",
    Notes: "Account for Business",
    StatusClass: "badge table-badge bg-success fw-medium fs-10",
    Status: "Active",
  },
  {
    key: "5",
    Account_Holder_Name: "Caspian Marigold",
    Account_No: "4324356677889",
    Type: "Current Account",
    Opening_Balance: "$700",
    Notes: "Account for Business",
    StatusClass: "badge table-badge bg-success fw-medium fs-10",
    Status: "Active",
  },
  {
    key: "6",
    Account_Holder_Name: "Emma James",
    Account_No: "2343547586900",
    Type: "Salary Account",
    Opening_Balance: "$1000",
    Notes: "Account for Business",
    StatusClass: "badge table-badge bg-success fw-medium fs-10",
    Status: "Active",
  },
  {
    key: "7",
    Account_Holder_Name: "Olivia Ethan",
    Account_No: "3453647664889",
    Type: "Current Account",
    Opening_Balance: "$1200",
    Notes: "A type of bank account.",
    StatusClass: "badge table-badge bg-success fw-medium fs-10",
    Status: "Active",
  },
  {
    key: "8",
    Account_Holder_Name: "Sophia Liam",
    Account_No: "3354456565687",
    Type: "Current Account",
    Opening_Balance: "$750",
    Notes: "Account for Business",
    StatusClass: "badge table-badge bg-danger fw-medium fs-10",
    Status: "Closed",
  },
  {
    key: "9",
    Account_Holder_Name: "Ava Mason",
    Account_No: "3456565767787",
    Type: "Salary Account",
    Opening_Balance: "$450",
    Notes: "A type of bank account.",
    StatusClass: "badge table-badge bg-success fw-medium fs-10",
    Status: "Active",
  },
  {
    key: "10",
    Account_Holder_Name: "Isabella Jackson",
    Account_No: "3434565776768",
    Type: "Salary Account",
    Opening_Balance: "$300",
    Notes: "A type of bank account.",
    StatusClass: "badge table-badge bg-success fw-medium fs-10",
    Status: "Active",
  },
];
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
