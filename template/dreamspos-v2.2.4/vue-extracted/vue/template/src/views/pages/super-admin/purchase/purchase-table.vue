<script>
const data = [
  {
    Invoice_ID: "INV001",
    Image: "company-01.svg",
    Customer: "BrightWave Innovations",
    Email: "michael@example.com",
    Created_Date: "12 Sep 2024",
    Amount: "$200",
    Payment_Method: "Credit Card",
    Status: "Paid",
  },
  {
    Invoice_ID: "INV002",
    Image: "company-02.svg",
    Customer: "Stellar Dynamics",
    Email: "sophie@example.com",
    Created_Date: "24 Oct 2024",
    Amount: "$600",
    Payment_Method: "Paypal",
    Status: "Paid",
  },
  {
    Invoice_ID: "INV003",
    Image: "company-03.svg",
    Customer: "Quantum Nexus",
    Email: "cameron@example.com",
    Created_Date: "18 Feb 2024",
    Amount: "$200",
    Payment_Method: "Debit Card",
    Status: "Paid",
  },
  {
    Invoice_ID: "INV004",
    Image: "company-04.svg",
    Customer: "EcoVision Enterprises",
    Email: "doris@example.com",
    Created_Date: "17 Oct 2024",
    Amount: "$200",
    Payment_Method: "Paypal",
    Status: "Paid",
  },
  {
    Invoice_ID: "INV005",
    Image: "company-05.svg",
    Customer: "Aurora Technologies",
    Email: "thomas@example.com",
    Created_Date: "20 Jul 2024",
    Amount: "$400",
    Payment_Method: "Credit Card",
    Status: "Paid",
  },
  {
    Invoice_ID: "INV006",
    Image: "company-06.svg",
    Customer: "BlueSky Ventures",
    Email: "kathleen@example.com",
    Created_Date: "10 Apr 2024",
    Amount: "$200",
    Payment_Method: "Paypal",
    Status: "Paid",
  },
  {
    Invoice_ID: "INV007",
    Image: "company-07.svg",
    Customer: "TerraFusion Energy",
    Email: "bruce@example.com",
    Created_Date: "29 Aug 2024",
    Amount: "$4800",
    Payment_Method: "Credit Card",
    Status: "Paid",
  },
  {
    Invoice_ID: "INV008",
    Image: "company-08.svg",
    Customer: "UrbanPulse Design",
    Email: "estelle@example.com",
    Created_Date: "22 Feb 2024",
    Amount: "$50",
    Payment_Method: "Credit Card",
    Status: "Unpaid",
  },
  {
    Invoice_ID: "INV009",
    Image: "company-09.svg",
    Customer: "Nimbus Networks",
    Email: "stephen@example.com",
    Created_Date: "03 Nov 2024",
    Amount: "$600",
    Payment_Method: "Paypal",
    Status: "Paid",
  },
  {
    Invoice_ID: "INV010",
    Image: "company-10.svg",
    Customer: "Epicurean Delights",
    Email: "angela@example.com",
    Created_Date: "17 Dec 2024",
    Amount: "$200",
    Payment_Method: "Credit Card",
    Status: "Paid",
  },
];

const columns = [
  {
    sorter: false,
  },
  {
    title: "Invoice ID",
    dataIndex: "Invoice_ID",
    key: "Invoice_ID",
    sorter: {
      compare: (a, b) => {
        a = a.Invoice_ID.toLowerCase();
        b = b.Invoice_ID.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Customer",
    dataIndex: "Customer",
    key: "Customer",
    sorter: {
      compare: (a, b) => {
        a = a.Customer.toLowerCase();
        b = b.Customer.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Email",
    dataIndex: "Email",
    sorter: {
      compare: (a, b) => {
        a = a.Email.toLowerCase();
        b = b.Email.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Created_Date",
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
    title: "Amount",
    dataIndex: "Amount",
    sorter: {
      compare: (a, b) => {
        a = a.Amount.toLowerCase();
        b = b.Amount.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Payment_Method",
    dataIndex: "Payment_Method",
    sorter: {
      compare: (a, b) => {
        a = a.Payment_Method.toLowerCase();
        b = b.Payment_Method.toLowerCase();
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
  methods: {
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/company/${imageName}`, import.meta.url).href;
    },
  }
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
      <template v-if="column.key === 'Invoice_ID'">
        <a href="javascript:void(0);" class="link-default">{{ record.Invoice_ID }}</a>
      </template>
      <template v-if="column.key === 'Customer'">
        <div class="d-flex align-items-center file-name-icon">
          <a href="javascript:void(0);" class="avatar avatar-md border rounded-circle">
            <img :src="getImageUrl(record.Image)"
              class="img-fluid"
              alt="img"
            />
          </a>
          <div class="ms-2">
            <h6 class="fw-medium">
              <a href="javascript:void(0);">{{ record.Customer }}</a>
            </h6>
          </div>
        </div>
      </template>
      <template v-if="column.key === 'Status'">
        <span
          :class="[
            'badge',
            record.Status === 'Paid' ? 'badge-success' : 'badge-danger',
            'd-flex',
            'align-items-center',
            'badge-xs',
          ]"
        >
          <i class="ti ti-point-filled me-1"></i>{{ record.Status }}
        </span>
      </template>
      <template v-if="column.key === 'action'">
        <div class="action-icon d-inline-flex">
          <a
            href="javascript:void(0);"
            class="me-2"
            data-bs-toggle="modal"
            data-bs-target="#view_invoice"
            ><i class="ti ti-file-invoice"></i
          ></a>
          <a href="javascript:void(0);" class="me-2"><i class="ti ti-download"></i></a>
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
