<script>
const data = [
  {
    Image: "company-01.svg",
    Name: "BrightWave Innovations",
    Domain_URL: "bwi.example.com",
    Plan: "Advanced (Monthly)",
    Created_Date: "12 Sep 2024",
    Status: "Approved",
    Data_Target: "#domain_approved",
  },
  {
    Image: "company-02.svg",
    Name: "Stellar Dynamics",
    Domain_URL: "sd.example.com",
    Plan: "Basic (Yearly)",
    Created_Date: "24 Oct 2024",
    Status: "Pending",
    Data_Target: "#domain_pending",
  },
  {
    Image: "company-03.svg",
    Name: "Quantum Nexus",
    Domain_URL: "qn.example.com",
    Plan: "Advanced (Monthly)",
    Created_Date: "18 Feb 2024",
    Status: "Rejected",
    Data_Target: "#domain_rejected",
  },
  {
    Image: "company-04.svg",
    Name: "EcoVision Enterprises",
    Domain_URL: "eve.example.com",
    Plan: "Advanced (Monthly)",
    Created_Date: "17 Sep 2024",
    Status: "Approved",
    Data_Target: "#domain_approved",
  },
  {
    Image: "company-05.svg",
    Name: "Aurora Technologies",
    Domain_URL: "at.example.com",
    Plan: "Enterprise (Monthly)",
    Created_Date: "20 Jul 2024",
    Status: "Approved",
    Data_Target: "#domain_approved",
  },
  {
    Image: "company-06.svg",
    Name: "BlueSky Ventures",
    Domain_URL: "bsv.example.com",
    Plan: "Advanced (Monthly)",
    Created_Date: "10 Apr 2024",
    Status: "Pending",
    Data_Target: "#domain_pending",
  },
  {
    Image: "company-07.svg",
    Name: "TerraFusion Energy",
    Domain_URL: "tfe.example.com",
    Plan: "Enterprise (Yearly)",
    Created_Date: "29 Aug 2024",
    Status: "Approved",
    Data_Target: "#domain_approved",
  },
  {
    Image: "company-08.svg",
    Name: "UrbanPulse Design",
    Domain_URL: "upd.example.com",
    Plan: "Basic (Monthly)",
    Created_Date: "22 Feb 2024",
    Status: "Rejected",
    Data_Target: "#domain_rejected",
  },
  {
    Image: "company-09.svg",
    Name: "Nimbus Networks",
    Domain_URL: "nn.example.com",
    Plan: "Basic (Yearly)",
    Created_Date: "03 Nov 2024",
    Status: "Approved",
    Data_Target: "#domain_approved",
  },
  {
    Image: "company-10.svg",
    Name: "Epicurean Delights",
    Domain_URL: "ed.example.com",
    Plan: "Advanced (Monthly)",
    Created_Date: "17 Dec 2024",
    Status: "Approved",
    Data_Target: "#domain_approved",
  },
];

const columns = [
  {
    sorter: false,
  },
  {
    title: "Name",
    dataIndex: "Name",
    key: "Name",
    sorter: {
      compare: (a, b) => {
        a = a.Name.toLowerCase();
        b = b.Name.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Domain URL",
    dataIndex: "Domain_URL",
    sorter: {
      compare: (a, b) => {
        a = a.Domain_URL.toLowerCase();
        b = b.Domain_URL.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Plan",
    dataIndex: "Plan",
    sorter: {
      compare: (a, b) => {
        a = a.Plan.toLowerCase();
        b = b.Plan.toLowerCase();
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
      <template v-if="column.key === 'Name'">
        <div class="d-flex align-items-center file-name-icon">
          <a href="javascript:void(0);" class="avatar avatar-md border rounded-circle">
            <img
              :src="getImageUrl(record.Image)"
              class="img-fluid"
              alt="img"
            />
          </a>
          <div class="ms-2">
            <h6 class="fw-medium">
              <a href="javascript:void(0);">{{ record.Name }}</a>
            </h6>
          </div>
        </div>
      </template>
      <template v-if="column.key === 'Status'">
        <a
          href="javascript:void(0);"
          :class="[
            'badge',
            record.Status === 'Approved'
              ? 'badge-soft-success'
              : record.Status === 'Pending'
              ? 'badge-soft-skyblue'
              : 'badge-soft-danger',
            'd-inline-flex',
            'align-items-center',
            'badge-xs',
          ]"
        >
          <i
            :class="[
              'ti',
              record.Status === 'Approved'
                ? 'ti-checks'
                : record.Status === 'Pending'
                ? 'ti-clock'
                : 'ti-x',
              'me-1',
            ]"
          ></i>
          {{ record.Status }}
        </a>
      </template>
      <template v-if="column.key === 'action'">
        <div class="action-icon d-inline-flex">
          <a
            href="javascript:void(0);"
            class="me-2"
            data-bs-toggle="modal"
            :data-bs-target="record.Data_Target"
            ><i class="ti ti-eye"></i
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
