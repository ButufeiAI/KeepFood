<template>
    <!-- ========================
        Start Page Content
    ========================= -->
        
    <div class="page-wrapper">

        <!-- Start Content -->
        <div class="content">

            <!-- Page Header -->
            <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-3 mb-4">
                <div class="flex-grow-1">
                    <h3 class="mb-0">Reports <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle ms-2"><i class="icon-refresh-ccw"></i></a></h3>
                </div>
                <div class="gap-2 d-flex align-items-center flex-wrap">
                    <div class="dropdown">
                        <a href="#" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                            <i class="icon-upload me-1"></i>Export
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end p-3">
                            <li>
                                <a href="#" class="dropdown-item rounded">Export as PDF</a>
                            </li>
                            <li>
                                <a href="#" class="dropdown-item rounded">Export as Excel</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- End Page Header -->

            <!-- Tabs -->
            <ul class="nav nav-tabs nav-bordered nav-bordered-primary mb-4" role="tablist">
                <li class="nav-item">                                             
                    <router-link to="/administration/earning-report" class="nav-link d-flex align-items-center"><i class="icon-badge-dollar-sign me-2"></i>Earning Report</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/administration/order-report" class="nav-link d-flex align-items-center"><i class="icon-list-todo me-2"></i>Order Report</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/administration/sales-report" class="nav-link d-flex align-items-center"><i class="icon-shopping-bag me-2"></i>Sales Report</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/administration/customer-report" class="nav-link d-flex align-items-center"><i class="icon-users me-2"></i>Customer Report</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/administration/audit-report" class="nav-link d-flex align-items-center active"><i class="icon-hourglass me-2"></i>Audit Logs</router-link>
                </li>
            </ul>  
            <!-- Tabs -->

            <!-- card start -->
            <div class="card mb-0">
                <div class="card-body schedule-timeline">
                    <div class="d-sm-flex align-items-center">
                        <div class="d-flex align-items-center active-time">
                            <span class="timeline-border d-flex align-items-center justify-content-center bg-white">
                                <i class="icon-badge-dollar-sign text-gray-2 fs-18"></i>
                            </span>
                        </div>
                        <div class="flex-fill">
                            <div class="p-3">
                                <p class="fw-medium text-dark mb-1">Sale Created by David Williams (Cashier) at POS Terminal</p>
                                <span>12 Nov 2025 at 09:45 AM</span>
                            </div>
                        </div>
                    </div>
                    <div class="d-sm-flex align-items-center">
                        <div class="d-flex align-items-center active-time">
                            <span class="timeline-border d-flex align-items-center justify-content-center bg-white">
                                <i class="icon-box text-gray-2 fs-18"></i>
                            </span>
                        </div>
                        <div class="flex-fill">
                            <div class="p-3">
                                <p class="fw-medium text-dark mb-1">Product Updated by Emily Johnson (Supervisor) in Inventory</p>
                                <span>12 Nov 2025 at 10:15 AM</span>
                            </div>
                        </div>
                    </div>
                    <div class="d-sm-flex align-items-center">
                        <div class="d-flex align-items-center active-time">
                            <span class="timeline-border d-flex align-items-center justify-content-center bg-white">
                                <i class="icon-user-round text-gray-2 fs-18"></i>
                            </span>
                        </div>
                        <div class="flex-fill">
                            <div class="p-3">
                                <p class="fw-medium text-dark mb-1">User Added by John Smith (Admin) in Settings</p>
                                <span>12 Nov 2025 at 11:00 AM</span>
                            </div>
                        </div>
                    </div>
                    <div class="d-sm-flex align-items-center">
                        <div class="d-flex align-items-center active-time">
                            <span class="timeline-border d-flex align-items-center justify-content-center bg-white">
                                <i class="icon-diamond-percent text-gray-2 fs-18"></i>
                            </span>
                        </div>
                        <div class="flex-fill">
                            <div class="p-3">
                                <p class="fw-medium text-dark mb-1">Discount Applied by Alex Martinez (Cashier) in POS Terminal</p>
                                <span>12 Nov 2025 at 11:25 AM</span>
                            </div>
                        </div>
                    </div>
                    <div class="d-sm-flex align-items-center">
                        <div class="d-flex align-items-center active-time">
                            <span class="timeline-border d-flex align-items-center justify-content-center bg-white">
                                <i class="icon-trash-2 text-gray-2 fs-18"></i>
                            </span>
                        </div>
                        <div class="flex-fill timeline-hrline">
                            <div class="p-3">
                                <p class="fw-medium text-dark mb-1">Product Deleted by Emily Johnson (Supervisor) in Inventory</p>
                                <span>12 Nov 2025 at 12:20 PM</span>
                            </div>
                        </div>
                    </div>
                    <div class="d-sm-flex align-items-center">
                        <div class="d-flex align-items-center active-time">
                            <span class="timeline-border d-flex align-items-center justify-content-center bg-white">
                                <i class="icon-badge-x text-gray-2 fs-18"></i>
                            </span>
                        </div>
                        <div class="flex-fill timeline-hrline">
                            <div class="p-3">
                                <p class="fw-medium text-dark mb-1">Sale Voided by  Alex Martinez (Cashier) at POS Terminal</p>
                                <span>12 Nov 2025 at 01:45 PM</span>
                            </div>
                        </div>
                    </div>
                    <div class="d-sm-flex align-items-center">
                        <div class="d-flex align-items-center active-time">
                            <span class="timeline-border d-flex align-items-center justify-content-center bg-white">
                                <i class="icon-badge-dollar-sign text-gray-2 fs-18"></i>
                            </span>
                        </div>
                        <div class="flex-fill timeline-hrline">
                            <div class="p-3">
                                <p class="fw-medium text-dark mb-1">Refund Issued by Emily Johnson (Supervisor) in Sales</p>
                                <span>12 Nov 2025 at 02:00 PM</span>
                            </div>
                        </div>
                    </div>
                    <div class="d-sm-flex align-items-center">
                        <div class="d-flex align-items-center active-time">
                            <span class="timeline-border d-flex align-items-center justify-content-center bg-white">
                                <i class="icon-log-in text-gray-2 fs-18"></i>
                            </span>
                        </div>
                        <div class="flex-fill timeline-hrline">
                            <div class="p-3">
                                <p class="fw-medium text-dark mb-1">Login Attempt (Failed) by John Smith (Admin) at Dashboard</p>
                                <span>12 Nov 2025 at 02:20 PM</span>
                            </div>
                        </div>
                    </div>
                    <div class="d-sm-flex align-items-center">
                        <div class="d-flex align-items-center active-time">
                            <span class="timeline-border d-flex align-items-center justify-content-center bg-white">
                                <i class="icon-badge-dollar-sign text-gray-2 fs-18"></i>
                            </span>
                        </div>
                        <div class="flex-fill timeline-hrline">
                            <div class="p-3">
                                <p class="fw-medium text-dark mb-1">Sale Deleted by David Williams (Cashier) in POS Terminal</p>
                                <span>12 Nov 2025 at 02:30 PM</span>
                            </div>
                        </div>
                    </div>
                    <div class="d-sm-flex align-items-center">
                        <div class="d-flex align-items-center active-time">
                            <span class="timeline-border-none d-flex align-items-center justify-content-center bg-white">
                                <i class="icon-badge-dollar-sign text-gray-2 fs-18"></i>
                            </span>
                        </div>
                        <div class="flex-fill timeline-hrline">
                            <div class="p-3">
                                <p class="fw-medium text-dark mb-1">Sale Created by David Williams (Cashier) at POS Terminal</p>
                                <span>12 Nov 2025 at 02:35 PM</span>
                            </div>
                        </div>
                    </div>
                </div> <!-- end card body -->

            </div>
            <!-- card start -->
                            
        </div>
        <!-- End Content -->  

    </div>

    <!-- ========================
        End Page Content
    ========================= -->
</template>