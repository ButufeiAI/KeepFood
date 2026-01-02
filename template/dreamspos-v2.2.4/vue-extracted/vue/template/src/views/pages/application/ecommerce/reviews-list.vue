<template>
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <div class="page-wrapper">
        <div class="content">
            <div class="page-header">
                <div class="add-item d-flex">
                    <div class="page-title">
                        <h4 class="fw-bold">Review</h4>
                        <h6>Manage your reviews</h6>
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
                <div class="page-btn">
                    <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-review"><i class="ti ti-circle-plus me-1"></i>Add Product</a>
                </div>
            </div>
            
            <!-- /product list -->
            <div class="card table-list-card">
                <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                    <div class="search-set">
                        <div class="search-input">
                            <a href="javascript:void(0);" class="btn-searchset"><i class="ti ti-search fs-14 feather-search"></i></a>
                            <input type="search" class="form-control form-control-sm" placeholder="Search">
                        </div>
                    </div>
                    <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                        <div class="dropdown me-2">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                Rating
                            </a>
                            <ul class="dropdown-menu  dropdown-menu-end p-3">
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">5 </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">4</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">3</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">2</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">1	</a>
                                </li>
                            </ul>
                        </div>
                        <div class="dropdown me-2">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                Status
                            </a>
                            <ul class="dropdown-menu  dropdown-menu-end p-3">
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Published</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Pending</a>
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
                    <div class="custom-datatable-filter table-responsive">
                        <a-table
                            class="table datatable thead-light"
                            :columns="columns"
                            :data-source="data"
                            :row-selection="rowSelection"
                        >
                            <template #bodyCell="{ column, record }">
                                <template v-if="column.key === 'ProductName'">
                                    <div class="d-flex align-items-center">
                                        <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                            <img :src="getImageUrl(record.Image)" alt="product">
                                        </a>
                                        <a href="javascript:void(0);">{{record.ProductName}}</a>
                                    </div>												
                                </template>
                                <template v-if="column.key === 'Author'">
                                    <div class="userimgname">
                                        <span class="avatar avatar-sm">
                                            <a href="javascript:void(0);">
                                                <img :src="getImageUrlOne(record.AuthorImg)" alt="product">
                                            </a>
                                        </span>
                                        <a href="javascript:void(0);">{{record.Author}}</a>
                                    </div>
                                </template>
                                <template v-if="column.key === 'Ratings'">
                                    <div class="d-flex align-items-center">
                                        <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                        <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                        <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                        <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                        <span><i class="ti ti-star-filled text-warning me-1"></i></span>
                                    </div>
                                </template>
                                <template v-if="column.key === 'Status'">
                                    <span class="badge badge-success"><i class="ti ti-point-filled"></i>{{record.Status}}</span>
                                </template>
                                <template v-if="column.key === 'action'">
                                    <div class="action-table-data">
                                        <div class="edit-delete-action">
                                            <a class="me-2 p-2" href="#" data-bs-toggle="modal" data-bs-target="#edit-review">
                                                <i data-feather="edit" class="feather-edit"></i>
                                            </a>
                                            <a class="p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_review">
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

    <reviews-modal></reviews-modal>
</template>


<script>
const data = [
 {
   "Id": "1",
   "Image": "stock-img-01.png",
   "ProductName": "Lenovo IdeaPad 3",
   "AuthorImg": "user-30.jpg",
   "Author": "James Kirwin",
   "Review": "Sleek design and excellent battery life",
   "Ratings": "",
   "Date": "24 Dec 2024",
   "Status": "Published"
 },
 {
   "Id": "2",
   "Image": "stock-img-06.png",
   "ProductName": "Beats Pro",
   "AuthorImg": "user-13.jpg",
   "Author": "Francis Chang",
   "Review": "Crystal-clear sound and deep bass",
   "Ratings": "",
   "Date": "10 Dec 2024",
   "Status": "Published"
 },
 {
   "Id": "3",
   "Image": "stock-img-02.png",
   "ProductName": "Nike Jordan",
   "AuthorImg": "user-11.jpg",
   "Author": "Antonio Engle",
   "Review": "Stylish, durable, and incredibly comfortable",
   "Ratings": "",
   "Date": "27 Nov 2024",
   "Status": "Published"
 },
 {
   "Id": "4",
   "Image": "stock-img-03.png",
   "ProductName": "Apple Series 5 Watch",
   "AuthorImg": "user-32.jpg",
   "Author": "Leo Kelly",
   "Review": "Ultimate fitness and lifestyle companion!",
   "Ratings": "",
   "Date": "18 Nov 2024",
   "Status": "Published"
 },
 {
   "Id": "5",
   "Image": "stock-img-04.png",
   "ProductName": "Amazon Echo Dot",
   "AuthorImg": "user-02.jpg",
   "Author": "Annette Walker",
   "Review": "Perfect voice-controlled home assistant!",
   "Ratings": "",
   "Date": "06 Nov 2024",
   "Status": "Published"
 },
 {
   "Id": "6",
   "Image": "stock-img-05.png",
   "ProductName": "Sanford Chair Sofa",
   "AuthorImg": "user-05.jpg",
   "Author": "John Weaver",
   "Review": "Elegant design and superb comfort",
   "Ratings": "",
   "Date": "25 Oct 2024",
   "Status": "Published"
 },
 {
   "Id": "7",
   "Image": "expire-product-01.png",
   "ProductName": "Red Premium Satchel",
   "AuthorImg": "user-08.jpg",
   "Author": "Gary Hennessy",
   "Review": "perfect for work, travel, and everyday use",
   "Ratings": "",
   "Date": "14 Oct 2024",
   "Status": "Published"
 },
 {
   "Id": "8",
   "Image": "expire-product-02.png",
   "ProductName": "Iphone 14 Pro",
   "AuthorImg": "user-04.jpg",
   "Author": "Eleanor Panek",
   "Review": "Powerful performance and stunning display",
   "Ratings": "",
   "Date": "03 Oct 2024",
   "Status": "Published"
 },
 {
   "Id": "9",
   "Image": "expire-product-03.png",
   "ProductName": "Gaming Chair",
   "AuthorImg": "user-09.jpg",
   "Author": "William Levy",
   "Review": "Ergonomic and incredibly comfortable",
   "Ratings": "",
   "Date": "20 Sep 2024",
   "Status": "Published"
 },
 {
   "Id": "10",
   "Image": "expire-product-04.png",
   "ProductName": "Borealis Backpack",
   "AuthorImg": "user-10.jpg",
   "Author": "Charlotte Klotz",
   "Review": "Perfect for work, school and travel!",
   "Ratings": "",
   "Date": "10 Sep 2024",
   "Status": "Published"
 },
 {
   "Id": "11",
   "Image": "expire-product-04.png",
   "ProductName": "Borealis Backpack",
   "AuthorImg": "user-10.jpg",
   "Author": "Charlotte Klotz",
   "Review": "perfect for work, travel, and everyday use",
   "Ratings": "",
   "Date": "03 Oct 2024",
   "Status": "Published"
 }
]

const columns = [
    {
        sorter: false,
    },
    {
        title: "ProductName",
        dataIndex: "ProductName",
        key: "ProductName",
        sorter: {
            compare: (a, b) => {
                a = a.ProductName.toLowerCase();
                b = b.ProductName.toLowerCase();
                return a > b ? -1 : b > a ? 1 : 0;
            },
        },
    },
    {
        title: "Author",
        dataIndex: "Author",
        key: "Author",
        sorter: {
            compare: (a, b) => {
                a = a.Author.toLowerCase();
                b = b.Author.toLowerCase();
                return a > b ? -1 : b > a ? 1 : 0;
            },
        },
    },
    {
        title: "Review",
        dataIndex: "Review",
        sorter: {
            compare: (a, b) => {
                a = a.Review.toLowerCase();
                b = b.Review.toLowerCase();
                return a > b ? -1 : b > a ? 1 : 0;
            },
        },
    },
    {
        title: "Ratings",
        dataIndex: "Ratings",
        key: "Ratings",
        sorter: {
            compare: (a, b) => {
                a = a.Ratings.toLowerCase();
                b = b.Ratings.toLowerCase();
                return a > b ? -1 : b > a ? 1 : 0;
            },
        },
    },
    {
        title: "Date",
        dataIndex: "Date",
        sorter: {
            compare: (a, b) => {
                a = a.Date.toLowerCase();
                b = b.Date.toLowerCase();
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
        getImageUrlOne(imageName) {
            return new URL(`/src/assets/img/users/${imageName}`, import.meta.url).href;
        },
    },
}
</script>