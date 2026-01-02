<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  
  <div class="page-wrapper">
    <div class="content">
        <div class="page-header">
            <div class="add-item d-flex">
                <div class="page-title">
                    <h4 class="fw-bold">Gift Cards</h4>
                    <h6>Manage your gift cards</h6>
                </div>
            </div>
            <ul class="table-top-head">
                <li>
                    <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="@/assets/img/icons/pdf.svg" alt="img"></a>
                </li>
                <li>
                    <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="@/assets/img/icons/excel.svg" alt="img"></a>
                </li>
                <li>
                    <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"><i class="ti ti-refresh"></i></a>
                </li>
                <li>
                    <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" @click="toggleHeader"><i class="ti ti-chevron-up"></i></a>
                </li>
            </ul>
            <div class="page-btn">
                <a href="#" class="btn btn-primary btn-md d-inline-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add-units">
                    <vue-feather type="plus-circle" class="me-2"></vue-feather>Add Gift Card
                </a>
            </div>
        </div>
        <!-- /product list -->
        <div class="card table-list-card">
            <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                <div class="search-set">
                    <div class="search-input">
                        <a href="#" class="btn-searchset"><i data-feather="search" class="feather-search"></i></a>
                        <input type="search" class="form-control form-control-sm" placeholder="Search">
                    </div>
                </div>
                <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                            
                    <div class="dropdown me-2">
                        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                            Status
                        </a>
                        <ul class="dropdown-menu  dropdown-menu-end p-3">
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item rounded-1">Redeemed</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item rounded-1">Expired</a>
                            </li>
                        </ul>
                    </div>
                    <div class="dropdown">
                        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                            Sort By : Last 7 Days
                        </a>
                        <ul class="dropdown-menu  dropdown-menu-end p-3">
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item rounded-1">Recently Added</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item rounded-1">Ascending</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item rounded-1">Desending</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item rounded-1">Last Month</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 7 Days</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <a-table :columns="columns" :data-source="data" :row-selection="{}">
                        <template #bodyCell="{ column, record }">
                            <template v-if="column.key === 'Gift_Card'">
                                <div class="text-gray-9">{{record.Gift_Card}}</div>
                            </template>
                            <template v-else-if="column.key === 'Customer'">
                                <div class="userimgname">
                                    <span class="avatar avatar-md me-2">
                                    <a href="javascript:void(0);">
                                        <img :src="getImageUrl(record.Image)" alt="user">
                                    </a>
                                </span>
                                    <a href="javascript:void(0);">{{record.Customer}}</a>
                                </div>
                            </template>	
                            <template v-else-if="column.key === 'Status'">
                                <span class="badge table-badge bg-success fw-medium fs-10">{{record.Status}}</span>
                            </template>
                            <template v-else-if="column.key === 'action'">
                                <div class="action-table-data">
                                    <div class="edit-delete-action">
                                        <a data-bs-toggle="modal" data-bs-target="#gift-card-details" class="me-2 edit-icon  p-2" href="#">
                                            <i data-feather="eye" class="feather-eye"></i>
                                        </a>
                                        <a class="me-2 p-2" href="#" data-bs-toggle="modal" data-bs-target="#edit-units">
                                            <i data-feather="edit" class="feather-edit"></i>
                                        </a>
                                        <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="p-2" href="javascript:void(0);">
                                            <i data-feather="trash-2" class="feather-trash-2"></i>
                                        </a>
                                    </div>
                                </div>
                            </template>
                        </template>
                    </a-table>
                </div>
            </div>
        </div>
        <!-- /product list -->
    </div>
    <div class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
        <p class="mb-0 text-gray-9">2014-2025 © DreamsPOS. All Right Reserved</p>
        <p>Designed &amp; Developed By <a href="javascript:void(0);" class="text-primary">Dreams</a></p>
    </div>
  </div>

  <gift-cards-modal></gift-cards-modal>
</template>

<script>
const data = [
  {
    "Id": "1",
    "Gift_Card": "GFT1110",
    "Image": "user-33.png",
    "Customer": "Carl Evans",
    "Issued_Date": "24 Dec 2024",
    "Expiry_Date": "24 Jan 2025",
    "Amount": "$200",
    "Balance": "$100",
    "Status": "Active"
  },
  {
    "Id": "2",
    "Gift_Card": "GFT1109",
    "Image": "user-02.jpg",
    "Customer": "Minerva Rameriz",
    "Issued_Date": "10 Dec 2024",
    "Expiry_Date": "10 Jan 2025",
    "Amount": "$300",
    "Balance": "$200",
    "Status": "Active"
  },
  {
    "Id": "3",
    "Gift_Card": "GFT1108",
    "Image": "user-34.jpg",
    "Customer": "Robert Lamon",
    "Issued_Date": "27 Nov 2024",
    "Expiry_Date": "27 Dec 2024",
    "Amount": "$200",
    "Balance": "$150",
    "Status": "Active"
  },
  {
    "Id": "4",
    "Gift_Card": "GFT1107",
    "Image": "user-35.jpg",
    "Customer": "Patricia Lewis",
    "Issued_Date": "18 Nov 2024",
    "Expiry_Date": "18 Dec 2024",
    "Amount": "$120",
    "Balance": "$0",
    "Status": "Redeemed"
  },
  {
    "Id": "5",
    "Gift_Card": "GFT1106",
    "Image": "user-36.jpg",
    "Customer": "Mark Joslyn",
    "Issued_Date": "06 Nov 2024",
    "Expiry_Date": "06 Dec 2024",
    "Amount": "$350",
    "Balance": "$300",
    "Status": "Active"
  },
  {
    "Id": "6",
    "Gift_Card": "GFT1105",
    "Image": "user-37.jpg",
    "Customer": "Marsha Betts",
    "Issued_Date": "25 Oct 2024",
    "Expiry_Date": "25 Nov 2024",
    "Amount": "$500",
    "Balance": "$400",
    "Status": "Active"
  },
  {
    "Id": "7",
    "Gift_Card": "GFT1104",
    "Image": "user-28.jpg",
    "Customer": "Daniel Jude",
    "Issued_Date": "14 Oct 2024",
    "Expiry_Date": "14 Nov 2024",
    "Amount": "$220",
    "Balance": "$150",
    "Status": "Active"
  },
  {
    "Id": "8",
    "Gift_Card": "GFT1103",
    "Image": "user-38.jpg",
    "Customer": "Emma Bates",
    "Issued_Date": "03 Oct 2024",
    "Expiry_Date": "03 Nov 2024",
    "Amount": "$260",
    "Balance": "$220",
    "Status": "Inactive"
  },
  {
    "Id": "9",
    "Gift_Card": "GFT1102",
    "Image": "user-39.jpg",
    "Customer": "Richard Fralick",
    "Issued_Date": "20 Sep 2024",
    "Expiry_Date": "20 Oct 2024",
    "Amount": "$200",
    "Balance": "$160",
    "Status": "Active"
  },
  {
    "Id": "10",
    "Gift_Card": "GFT1101",
    "Image": "user-39.jpg",
    "Customer": "Michelle Robison",
    "Issued_Date": "10 Sep 2024",
    "Expiry_Date": "10 Oct 2024",
    "Amount": "$400",
    "Balance": "$350",
    "Status": "Expired"
  }
];

const columns = [
  {
    sorter: true,
  },
  {
    title: "Gift Card",
    dataIndex: "Gift_Card",
    key: "Gift_Card",
    sorter: {
      compare: (a, b) => {
        a = a.Gift_Card.toLowerCase();
        b = b.Gift_Card.toLowerCase();
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
    title: "Issued Date",
    dataIndex: "Issued_Date",
    sorter: {
      compare: (a, b) => {
        a = a.Issued_Date.toLowerCase();
        b = b.Issued_Date.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Expiry Date",
    dataIndex: "Expiry_Date",
    sorter: {
      compare: (a, b) => {
        a = a.Expiry_Date.toLowerCase();
        b = b.Expiry_Date.toLowerCase();
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
    title: "Balance",
    dataIndex: "Balance",
    sorter: {
      compare: (a, b) => {
        a = a.Balance.toLowerCase();
        b = b.Balance.toLowerCase();
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
]


const rowSelection = {
    onChange: () => {},
    onSelect: () => {},
    onSelectAll: () => {},
};
export default {
  data(){
    return{
      columns,
      data,
      rowSelection,
    }
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/users/${imageName}`, import.meta.url).href;
    },
  },
}
</script>