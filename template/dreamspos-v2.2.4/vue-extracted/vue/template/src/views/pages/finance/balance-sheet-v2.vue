<template>
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
    <div class="page-wrapper">
        <div class="content">
            <div class="page-header">
                <div class="add-item d-flex">
                    <div class="page-title">
                        <h4 class="fw-bold">Balance Sheet</h4>
                        <h6>View Your Balance Sheet </h6>
                    </div>
                </div>
                <ul class="table-top-head">
                    <li>
                        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img
                                src="@/assets/img/icons/pdf.svg" alt="img"></a>
                    </li>
                    <li>
                        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img
                                src="@/assets/img/icons/excel.svg" alt="img"></a>
                    </li>
                    <li>
                        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"><i
                                class="ti ti-refresh"></i></a>
                    </li>
                    <li>
                        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header"><i
                                class="ti ti-chevron-up"></i></a>
                    </li>
                </ul>
            </div>

            <div class="card">
                <div class="card-body">
                    <div class="row row-gap-2 align-items-end">
                        <div class="col-md-3">
                            <label class="form-label">Choose Your Date</label>
                            <a-date-picker v-model:value="value1" class="datetimepicker form-control" />
                        </div>
                        <div class="col-md-3">
                            <label class="form-label">Store</label>
                            <div class="dropdown me-2">
                                <a href="javascript:void(0);"
                                    class="dropdown-toggle btn btn-white btn-md d-flex align-items-center justify-content-between"
                                    data-bs-toggle="dropdown">
                                    All Store
                                </a>
                                <ul class="dropdown-menu  dropdown-menu-end p-3">
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Store 1</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Store 2</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <button class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h4>Jan 2025 - Balance Sheet</h4>
                </div>
                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table">
                            <thead class="thead-light">
                                <tr>
                                    <th>Assets</th>
                                    <th>Amount</th>
                                    <th>Liabilities & Equity</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-gray-9 fw-bold" colspan="2">Current Assets</td>
                                    <td class="text-gray-9 fw-bold" colspan="2">Current Liabilities</td>
                                </tr>
                                <tr>
                                    <td>Cash in register</td>
                                    <td>$4565</td>
                                    <td>Cash in register</td>
                                    <td>$4565</td>
                                </tr>
                                <tr>
                                    <td>Bank Accounts</td>
                                    <td>$4494</td>
                                    <td>Bank Accounts</td>
                                    <td>$4494</td>
                                </tr>
                                <tr>
                                    <td>Accounts Receivable</td>
                                    <td>$65945</td>
                                    <td>Accounts Receivable</td>
                                    <td>$65945</td>
                                </tr>
                                <tr>
                                    <td>Inventory (POS stock)</td>
                                    <td>$1948</td>
                                    <td>Inventory (POS stock)</td>
                                    <td>$1948</td>
                                </tr>
                                <tr>
                                    <td>Prepaid Expenses</td>
                                    <td>$1686</td>
                                    <td>Prepaid Expenses</td>
                                    <td>$1686</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td class="bg-light text-dark fw-bold p-3 fs-16">Total Current Assets</td>
                                    <td class="bg-light text-dark fw-bold p-3 fs-16">$31,000</td>
                                    <td class="bg-light text-dark fw-bold p-3 fs-16">Total Liability</td>
                                    <td class="bg-light text-dark fw-bold p-3 fs-16">$78,000</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
            <!-- /product list -->
        </div>
        <div class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
            <p class="mb-0 text-gray-9">
                {{ new Date().getFullYear() }} &copy; DreamsPOS. All Right Reserved
            </p>
            <p>
                Designed &amp; Developed by
                <a href="javascript:void(0);" class="text-primary">Dreams</a>
            </p>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
const value1 = ref();

export default {
    data() {
        return {
            value1,
            dateFormat: "dd-MM-yyyy",
        };
    },
    methods: {
        toggleHeader() {
            document.getElementById("collapse-header").classList.toggle("active");
            document.body.classList.toggle("header-collapse");
        },
    },
};
</script>