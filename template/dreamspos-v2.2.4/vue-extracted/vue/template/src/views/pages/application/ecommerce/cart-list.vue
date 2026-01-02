<template>
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <div class="page-wrapper">
        <div class="content">
            <div class="page-header">
                <div class="add-item d-flex">
                    <div class="page-title">
                        <h4 class="fw-bold">Cart</h4>
                        <h6>Manage your cart</h6>
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
                        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" @click="toggleHeader" id="collapse-header"><i class="ti ti-chevron-up"></i></a>
                    </li>
                </ul>
            </div>
            
            <a-table
                class="table datatable thead-light"
                :columns="columns"
                :data-source="data"
                :row-selection="rowSelection"
            >
                <template #bodyCell="{ column, record }">
                    <template v-if="column.key === 'Product'">
                        <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="avatar avatar-md">
                                <img :src="getImageUrl(record.Image)" alt="product">
                            </a>
                            <a href="javascript:void(0);">{{record.Product}}</a>
                        </div>												
                    </template>
                    <template v-if="column.key === 'Quantity'">
                        <counter-index></counter-index>
                    </template>
                    <template v-if="column.key === 'action'">
                        <div class="edit-delete-action d-flex align-items-center">
                            <a class="p-2 d-flex align-items-center border rounded" href="javascript:void(0);">
                                <i data-feather="trash-2" class="feather-trash-2"></i>
                            </a>
                        </div>
                    </template>
                </template>
            </a-table>

            <div class="d-flex align-items-center justify-content-between bg-white rounded border-gray p-4 mb-4">
                <div class="d-flex align-items-center">
                    <input type="text" class="form-control me-2" placeholder="Enter Coupon Code">
                    <a href="#" class="btn btn-primary">Apply</a>
                </div>
                <div class="d-flex align-items-center">
                    <p class="mb-0 me-2">Total Price : </p>
                    <p class="text-gray-9">Total 2230</p>
                </div>
            </div>

            <div class="d-flex align-items-center justify-content-end mb-4">
                <a href="#" class="btn btn-secondary me-2">Checkout</a>
                <a href="#" class="btn btn-primary">Continue Shopping</a>
            </div>
            
        </div>
        <div class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
            <p class="mb-0 text-gray-9">2014-2025 © DreamsPOS. All Right Reserved</p>
            <p>Designed &amp; Developed By <a href="javascript:void(0);" class="text-primary">Dreams</a></p>
        </div>
    </div>

</template>

<script>
const data = [
 {
   "Id": "1",
   "Code": "CU001",
   "Image": "stock-img-01.png",
   "Product": "Lenovo IdeaPad 3",
   "Amount": "$600",
   "Quantity": "4",
   "Total": "$160"
 },
 {
   "Id": "2",
   "Code": "CU002",
   "Image": "stock-img-06.png",
   "Product": "Beats Pro",
   "Amount": "$160",
   "Quantity": "2",
   "Total": "$1200"
 },
 {
   "Id": "3",
   "Code": "CU003",
   "Image": "stock-img-02.png",
   "Product": "Nike Jordan",
   "Amount": "$110",
   "Quantity": "2",
   "Total": "$330"
 },
 {
   "Id": "4",
   "Code": "CU004",
   "Image": "stock-img-03.png",
   "Product": "Apple Series 5 Watch",
   "Amount": "$120",
   "Quantity": "2",
   "Total": "$1420"
 },
 {
   "Id": "5",
   "Code": "CU005",
   "Image": "stock-img-04.png",
   "Product": "Amazon Echo Dot",
   "Amount": "$80",
   "Quantity": "2",
   "Total": "$1200"
 }
]

const columns = [
    {
        sorter: false,
    },
    {
        title: "Code",
        dataIndex: "Code",
        sorter: {
            compare: (a, b) => {
                a = a.Code.toLowerCase();
                b = b.Code.toLowerCase();
                return a > b ? -1 : b > a ? 1 : 0;
            },
        },
    },
    {
        title: "Product",
        dataIndex: "Product",
        key: "Product",
        sorter: {
            compare: (a, b) => {
                a = a.Product.toLowerCase();
                b = b.Product.toLowerCase();
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
        title: "Quantity",
        dataIndex: "Quantity",
        key: "Quantity",
        sorter: {
            compare: (a, b) => {
                a = a.Quantity.toLowerCase();
                b = b.Quantity.toLowerCase();
                return a > b ? -1 : b > a ? 1 : 0;
            },
        },
    },
    {
        title: "Total",
        dataIndex: "Total",
        sorter: {
            compare: (a, b) => {
                a = a.Total.toLowerCase();
                b = b.Total.toLowerCase();
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
    data() {
        return {
            data,
            columns,
            rowSelection,            
        }
    },
    methods: {        
        toggleHeader() {
            document.getElementById("collapse-header").classList.toggle("active");
            document.body.classList.toggle("header-collapse");
        },
        getImageUrl(imageName) {
            return new URL(`/src/assets/img/products/${imageName}`, import.meta.url).href;
        },
    },
}
</script>