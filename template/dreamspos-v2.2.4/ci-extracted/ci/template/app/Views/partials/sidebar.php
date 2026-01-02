<?php
$link = $_SERVER[ 'PHP_SELF' ];
$link_array = explode( '/', $link );
$page = end( $link_array );
if ($page === '' || $page === 'index.php') $page = 'index';
?>

<?php if ($page !== 'pos') {   ?>
<!-- Two Col Sidebar -->
<div class="two-col-sidebar" id="two-col-sidebar">
    <div class="sidebar sidebar-twocol">
        <div class="twocol-mini">
            <a href="<?php echo base_url('index'); ?>" class="logo-small">
                <img src="<?php echo base_url('assets/img/logo-small.svg'); ?>" alt="Logo">
            </a>
            <div class="sidebar-left">
                <div class="nav flex-column align-items-center sidebar-nav" id="sidebar-tabs" role="tablist" aria-orientation="vertical" data-simplebar>
                    <a href="#" class="nav-link <?php echo ($page =='index' || $page =='/' || $page =='pos' || $page =='orders' || $page =='kanban-view' || $page =='kitchen' || $page =='reservations') ? 'active' : '' ;?>" title="Dashboard" data-bs-toggle="tab" data-bs-target="#dashboard">
                        <i class="icon-layout-dashboard"></i>
                    </a>
                    <a href="#" class="nav-link <?php echo ($page =='categories' || $page =='items' || $page =='addons' || $page =='coupons') ? 'active' : '' ;?>" title="Management" data-bs-toggle="tab" data-bs-target="#menu-management">
                        <i class="icon-layers"></i>
                    </a>
                    <a href="#" class="nav-link <?php echo ($page =='table' || $page =='customer' || $page =='invoices' || $page =='invoice-details' || $page =='payments') ? 'active' : '' ;?>" title="Operations" data-bs-toggle="tab" data-bs-target="#operations">
                        <i class="icon-merge"></i>
                    </a>
                    <a href="#" class="nav-link <?php echo ($page =='users' || $page =='role-permission' || $page =='earning-report' || $page =='order-report' || $page =='sales-report' || $page =='customer-report' || $page =='audit-report') ? 'active' : '' ;?>" title="Administration" data-bs-toggle="tab" data-bs-target="#administration">
                        <i class="icon-user-cog"></i>
                    </a>
                    <a href="#" class="nav-link <?php echo ($page =='login' || $page =='register' || $page =='forgot-password' || $page =='email-verification' || $page =='otp' || $page =='reset-password') ? 'active' : '' ;?>" title="Pages" data-bs-toggle="tab" data-bs-target="#pages">
                        <i class="icon-library-big"></i>
                    </a>
                    <a href="#" class="nav-link <?php echo ($page =='store-settings' || $page =='tax-settings' || $page =='print-settings' || $page =='payment-settings' || $page =='delivery-settings' || $page =='notifications-settings' || $page =='integrations-settings') ? 'active' : '' ;?>" title="Settings" data-bs-toggle="tab" data-bs-target="#settings">
                        <i class="icon-cog"></i>
                    </a>
                </div>
                <div class="sidebar-profile">
                    <div class="dropdown dropend">
                        <a href="javascript:void(0);" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                            <i class="icon-bell"></i>
                            <span class="position-absolute notification-badge bg-danger"></span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-xl notification-dropdown">
                            <div class="d-flex align-items-center justify-content-between notification-header">
                                <h5 class="mb-0">Notifications</h5>
                                <a href="#" class="link-primary">Mark all as unread</a>
                            </div>
                            <div class="notification-body" data-simplebar>

                                <ul class="nav nav-tabs p-1 bg-light rounded border-0 nav-solid-white mb-3">
                                    <li class="nav-item">
                                        <a href="#all-notification" data-bs-toggle="tab" aria-expanded="true" class="nav-link active d-flex align-items-center py-1 px-2">
                                            All
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#unread-notification" data-bs-toggle="tab" aria-expanded="false" class="nav-link d-flex align-items-center py-1 px-2">
                                            Unread <span class="badge-icon ms-1">4</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#inbox-notification" data-bs-toggle="tab" aria-expanded="false" class="nav-link d-flex align-items-center py-1 px-2">
                                            Inbox
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#kitchen-notification" data-bs-toggle="tab" aria-expanded="false" class="nav-link d-flex align-items-center py-1 px-2">
                                            Kitchen <span class="badge-icon ms-1">5</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#order-notification" data-bs-toggle="tab" aria-expanded="false" class="nav-link d-flex align-items-center py-1 px-2">
                                            Orders
                                        </a>
                                    </li>
                                </ul>

                                <div class="tab-content">
                                    <div class="tab-pane fade show active" id="all-notification">

                                        <div class="notification-list">
                                            <h6 class="fs-14 fw-semibold mb-3">Today</h6>

                                            <!-- Item-->
                                            <div class="notification-item">
                                                <div class="d-flex">
                                                    <div class="me-2 avatar avatar-rounded flex-shrink-0 badge-soft-secondary border border-secondary">
                                                        <i class="icon-cooking-pot"></i>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <p class="mb-1">New order from <span class="text-dark fw-medium">Table #12</span>  (3 items) pending.</p>
                                                        <p class="fs-13 mb-0 d-inline-flex align-items-center"><i class="icon-clock me-1"></i>20 Min Ago</p>
                                                    </div>
                                                </div>
                                                <div class="notification-action">
                                                    <a href="javascript:void(0);" class="notification-read rounded-circle bg-success" data-bs-toggle="tooltip" title="" data-bs-original-title="Make as Read" aria-label="Make as Read"></a>
                                                </div>
                                            </div>

                                            <!-- Item-->
                                            <div class="notification-item">
                                                <div class="d-flex">
                                                    <div class="me-2 avatar avatar-rounded flex-shrink-0 badge-soft-orange border border-orange">
                                                        <i class="icon-shopping-cart"></i>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <p class="mb-1"><span class="text-dark fw-medium">Order #124</span> confirmed and sent to the kitchen.</p>
                                                        <p class="fs-13 mb-0 d-inline-flex align-items-center"><i class="icon-clock me-1"></i>35 Min Ago</p>
                                                    </div>
                                                </div>
                                                <div class="notification-action">
                                                    <a href="javascript:void(0);" class="notification-read rounded-circle bg-success" data-bs-toggle="tooltip" title="" data-bs-original-title="Make as Read" aria-label="Make as Read"></a>
                                                </div>
                                            </div>

                                            <!-- Item-->
                                            <div class="notification-item">
                                                <div class="d-flex">
                                                    <div class="me-2 avatar avatar-rounded flex-shrink-0 badge-soft-success border border-success">
                                                        <i class="icon-badge-dollar-sign"></i>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <p class="mb-1"><span class="text-dark fw-medium">$850</span> received via UPI for <span class="text-dark fw-medium">Order #124.</span></p>
                                                        <p class="fs-13 mb-0 d-inline-flex align-items-center"><i class="icon-clock me-1"></i>40 Min Ago</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Item-->
                                            <div class="notification-item">
                                                <div class="d-flex">
                                                    <div class="me-2 avatar avatar-rounded flex-shrink-0 badge-soft-success border border-success">
                                                        <i class="icon-square-pen"></i>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <p class="mb-1">New  order has been created <span class="text-dark fw-medium">Dine</span> in  for <span class="text-dark fw-medium">Table 1</span> total <span class="text-dark fw-medium">20 Items</span></p>
                                                        <p class="fs-13 mb-0 d-inline-flex align-items-center"><i class="icon-clock me-1"></i>45 Min Ago</p>
                                                        <div class="d-flex align-items-center gap-2 mt-2">
                                                            <button type="button" class="btn btn-sm btn-primary">Accept</button>
                                                            <button type="button" class="btn btn-sm btn-white">Decline</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="notification-list">
                                            <h6 class="fs-14 fw-semibold mb-3">Yesterday</h6>

                                            <!-- Item-->
                                            <div class="notification-item">
                                                <div class="d-flex">
                                                    <div class="me-2 avatar avatar-rounded flex-shrink-0 badge-soft-danger border border-danger">
                                                        <i class="icon-info"></i>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <p class="mb-1">Low stock: Cheese <span class="text-dark fw-medium">(5 units left).</span></p>
                                                        <p class="fs-13 mb-0 d-inline-flex align-items-center"><i class="icon-clock me-1"></i>10 Hrs Ago</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Item-->
                                            <div class="notification-item">
                                                <div class="d-flex">
                                                    <div class="me-2 avatar avatar-rounded flex-shrink-0 badge-soft-indigo border border-indigo">
                                                        <i class="icon-calendar-fold"></i>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <p class="mb-1">Table reservation for Andrew Merkel at <span class="text-dark fw-medium">7:30 PM.</span></p>
                                                        <p class="fs-13 mb-0 d-inline-flex align-items-center"><i class="icon-clock me-1"></i>40 Hrs Ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="tab-pane fade" id="unread-notification">

                                        <div class="notification-list">
                                            <h6 class="fs-14 fw-semibold mb-3">Today</h6>

                                            <!-- Item-->
                                            <div class="notification-item">
                                                <div class="d-flex">
                                                    <div class="me-2 avatar avatar-rounded flex-shrink-0 badge-soft-secondary border border-secondary">
                                                        <i class="icon-cooking-pot"></i>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <p class="mb-1">New order from <span class="text-dark fw-medium">Table #12</span>  (3 items) pending.</p>
                                                        <p class="fs-13 mb-0 d-inline-flex align-items-center"><i class="icon-clock me-1"></i>20 Min Ago</p>
                                                    </div>
                                                </div>
                                                <div class="notification-action">
                                                    <a href="javascript:void(0);" class="notification-read rounded-circle bg-success" data-bs-toggle="tooltip" title="" data-bs-original-title="Make as Read" aria-label="Make as Read"></a>
                                                </div>
                                            </div>

                                            <!-- Item-->
                                            <div class="notification-item">
                                                <div class="d-flex">
                                                    <div class="me-2 avatar avatar-rounded flex-shrink-0 badge-soft-orange border border-orange">
                                                        <i class="icon-shopping-cart"></i>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <p class="mb-1"><span class="text-dark fw-medium">Order #124</span> confirmed and sent to the kitchen.</p>
                                                        <p class="fs-13 mb-0 d-inline-flex align-items-center"><i class="icon-clock me-1"></i>35 Min Ago</p>
                                                    </div>
                                                </div>
                                                <div class="notification-action">
                                                    <a href="javascript:void(0);" class="notification-read rounded-circle bg-success" data-bs-toggle="tooltip" title="" data-bs-original-title="Make as Read" aria-label="Make as Read"></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="notification-list">
                                            <h6 class="fs-14 fw-semibold mb-3">Yesterday</h6>

                                            <!-- Item-->
                                            <div class="notification-item">
                                                <div class="d-flex">
                                                    <div class="me-2 avatar avatar-rounded flex-shrink-0 badge-soft-danger border border-danger">
                                                        <i class="icon-info"></i>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <p class="mb-1">Low stock: Cheese <span class="text-dark fw-medium">(5 units left).</span></p>
                                                        <p class="fs-13 mb-0 d-inline-flex align-items-center"><i class="icon-clock me-1"></i>10 Hrs Ago</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Item-->
                                            <div class="notification-item">
                                                <div class="d-flex">
                                                    <div class="me-2 avatar avatar-rounded flex-shrink-0 badge-soft-indigo border border-indigo">
                                                        <i class="icon-calendar-fold"></i>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <p class="mb-1">Table reservation for Andrew Merkel at <span class="text-dark fw-medium">7:30 PM.</span></p>
                                                        <p class="fs-13 mb-0 d-inline-flex align-items-center"><i class="icon-clock me-1"></i>40 Hrs Ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="tab-pane fade" id="inbox-notification">

                                        <div class="notification-list">
                                            <h6 class="fs-14 fw-semibold mb-3">Today</h6>

                                            <!-- Item-->
                                            <div class="notification-item">
                                                <div class="d-flex">
                                                    <div class="me-2 avatar avatar-rounded flex-shrink-0 badge-soft-success border border-success">
                                                        <i class="icon-badge-dollar-sign"></i>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <p class="mb-1"><span class="text-dark fw-medium">$850</span> received via UPI for <span class="text-dark fw-medium">Order #124.</span></p>
                                                        <p class="fs-13 mb-0 d-inline-flex align-items-center"><i class="icon-clock me-1"></i>40 Min Ago</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Item-->
                                            <div class="notification-item">
                                                <div class="d-flex">
                                                    <div class="me-2 avatar avatar-rounded flex-shrink-0 badge-soft-success border border-success">
                                                        <i class="icon-square-pen"></i>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <p class="mb-1">New  order has been created <span class="text-dark fw-medium">Dine</span> in  for <span class="text-dark fw-medium">Table 1</span> total <span class="text-dark fw-medium">20 Items</span></p>
                                                        <p class="fs-13 mb-0 d-inline-flex align-items-center"><i class="icon-clock me-1"></i>45 Min Ago</p>
                                                        <div class="d-flex align-items-center gap-2 mt-2">
                                                            <button type="button" class="btn btn-sm btn-primary">Accept</button>
                                                            <button type="button" class="btn btn-sm btn-white">Decline</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="tab-pane fade" id="kitchen-notification">

                                        <div class="notification-list">
                                            <h6 class="fs-14 fw-semibold mb-3">Today</h6>

                                            <!-- Item-->
                                            <div class="notification-item">
                                                <div class="d-flex">
                                                    <div class="me-2 avatar avatar-rounded flex-shrink-0 badge-soft-orange border border-orange">
                                                        <i class="icon-shopping-cart"></i>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <p class="mb-1"><span class="text-dark fw-medium">Order #124</span> confirmed and sent to the kitchen.</p>
                                                        <p class="fs-13 mb-0 d-inline-flex align-items-center"><i class="icon-clock me-1"></i>35 Min Ago</p>
                                                    </div>
                                                </div>
                                                <div class="notification-action">
                                                    <a href="javascript:void(0);" class="notification-read rounded-circle bg-success" data-bs-toggle="tooltip" title="" data-bs-original-title="Make as Read" aria-label="Make as Read"></a>
                                                </div>
                                            </div>

                                            <!-- Item-->
                                            <div class="notification-item">
                                                <div class="d-flex">
                                                    <div class="me-2 avatar avatar-rounded flex-shrink-0 badge-soft-secondary border border-secondary">
                                                        <i class="icon-cooking-pot"></i>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <p class="mb-1">New order from <span class="text-dark fw-medium">Table #12</span>  (3 items) pending.</p>
                                                        <p class="fs-13 mb-0 d-inline-flex align-items-center"><i class="icon-clock me-1"></i>20 Min Ago</p>
                                                    </div>
                                                </div>
                                                <div class="notification-action">
                                                    <a href="javascript:void(0);" class="notification-read rounded-circle bg-success" data-bs-toggle="tooltip" title="" data-bs-original-title="Make as Read" aria-label="Make as Read"></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="notification-list">
                                            <h6 class="fs-14 fw-semibold mb-3">Yesterday</h6>

                                            <!-- Item-->
                                            <div class="notification-item">
                                                <div class="d-flex">
                                                    <div class="me-2 avatar avatar-rounded flex-shrink-0 badge-soft-indigo border border-indigo">
                                                        <i class="icon-calendar-fold"></i>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <p class="mb-1">Table reservation for Andrew Merkel at <span class="text-dark fw-medium">7:30 PM.</span></p>
                                                        <p class="fs-13 mb-0 d-inline-flex align-items-center"><i class="icon-clock me-1"></i>40 Hrs Ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="tab-pane fade" id="order-notification">

                                        <div class="notification-list">
                                            <h6 class="fs-14 fw-semibold mb-3">Today</h6>

                                            <!-- Item-->
                                            <div class="notification-item">
                                                <div class="d-flex">
                                                    <div class="me-2 avatar avatar-rounded flex-shrink-0 badge-soft-secondary border border-secondary">
                                                        <i class="icon-cooking-pot"></i>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <p class="mb-1">New order from <span class="text-dark fw-medium">Table #12</span>  (3 items) pending.</p>
                                                        <p class="fs-13 mb-0 d-inline-flex align-items-center"><i class="icon-clock me-1"></i>20 Min Ago</p>
                                                    </div>
                                                </div>
                                                <div class="notification-action">
                                                    <a href="javascript:void(0);" class="notification-read rounded-circle bg-success" data-bs-toggle="tooltip" title="" data-bs-original-title="Make as Read" aria-label="Make as Read"></a>
                                                </div>
                                            </div>

                                            <!-- Item-->
                                            <div class="notification-item">
                                                <div class="d-flex">
                                                    <div class="me-2 avatar avatar-rounded flex-shrink-0 badge-soft-orange border border-orange">
                                                        <i class="icon-shopping-cart"></i>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <p class="mb-1"><span class="text-dark fw-medium">Order #124</span> confirmed and sent to the kitchen.</p>
                                                        <p class="fs-13 mb-0 d-inline-flex align-items-center"><i class="icon-clock me-1"></i>35 Min Ago</p>
                                                    </div>
                                                </div>
                                                <div class="notification-action">
                                                    <a href="javascript:void(0);" class="notification-read rounded-circle bg-success" data-bs-toggle="tooltip" title="" data-bs-original-title="Make as Read" aria-label="Make as Read"></a>
                                                </div>
                                            </div>

                                            <!-- Item-->
                                            <div class="notification-item">
                                                <div class="d-flex">
                                                    <div class="me-2 avatar avatar-rounded flex-shrink-0 badge-soft-success border border-success">
                                                        <i class="icon-square-pen"></i>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <p class="mb-1">New  order has been created <span class="text-dark fw-medium">Dine</span> in  for <span class="text-dark fw-medium">Table 1</span> total <span class="text-dark fw-medium">20 Items</span></p>
                                                        <p class="fs-13 mb-0 d-inline-flex align-items-center"><i class="icon-clock me-1"></i>45 Min Ago</p>
                                                        <div class="d-flex align-items-center gap-2 mt-2">
                                                            <button type="button" class="btn btn-sm btn-primary">Accept</button>
                                                            <button type="button" class="btn btn-sm btn-white">Decline</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="dropdown dropend">
                        <a href="javascript:void(0);" class="avatar avatar-sm" data-bs-toggle="dropdown">
                            <img src="<?php echo base_url('assets/img/profiles/avatar-27.jpg'); ?>" alt="user" class="img-fluid rounded-circle">
                        </a>
                        <div class="dropdown-menu p-0 dropdown-menu-end dropdown-menu-md">
                            <div class="dropdown-header border-bottom p-3">
                                <div class="d-flex align-items-center justify-content-between gap-3">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar avatar-lg avatar-rounded border border-success">
                                            <img src="<?php echo base_url('assets/img/profiles/avatar-27.jpg'); ?>" class="rounded-circle" alt="user">
                                        </div>
                                        <div class="ms-2">
                                            <h5 class="mb-1 fs-14 fw-semibold">Adrian James</h5>
                                            <span class="d-block fs-13">Administrator</span>
                                        </div>
                                    </div>
                                    <span class="badge badge-soft-success">Pro</span>
                                </div>
                            </div>
                            <div class="p-3">

                                <!-- Item-->
                                <a href="<?php echo base_url('store-settings'); ?>" class="dropdown-item">
                                    <i class="icon-warehouse me-2 fs-16 align-middle"></i>
                                    <span class="align-middle">Store Settings</span>
                                </a>

                                <!-- Item-->
                                <a href="<?php echo base_url('role-permission'); ?>" class="dropdown-item">
                                    <i class="icon-shield-ellipsis me-2 fs-16 align-middle"></i>
                                    <span class="align-middle">Roles & Permisisons</span>
                                </a>

                                <!-- Item-->
                                <a href="<?php echo base_url('audit-report'); ?>" class="dropdown-item">
                                    <i class="icon-clock-arrow-down me-2 fs-16 align-middle"></i>
                                    <span class="align-middle">Audit Logs</span>
                                </a>

                                <!-- Item-->
                                <a href="<?php echo base_url('users'); ?>" class="dropdown-item">
                                    <i class="icon-user-pen me-2 fs-16 align-middle"></i>
                                    <span class="align-middle">Manage Staffs</span>
                                </a>

                            </div>
                            <div class="p-3 border-top">
                                <a href="<?php echo base_url('login'); ?>" class="btn btn-white btn-sm w-100">
                                    <i class="icon-log-in me-1"></i>Logout
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sidebar-right">
            <div class="sidebar-logo mb-3">
                <div class="dropdown">
                    <a href="javascript:void(0);" class="d-inline-flex align-items-center fw-medium"  data-bs-toggle="dropdown">
                        <div class="avatar avatar-xs avatar-rounded me-1">
                            <img src="<?php echo base_url('assets/img/store/store-01.jpg'); ?>" alt="store" class="img-fluid">
                        </div>
                        Streak House <i class="icon-chevrons-up-down ms-2"></i>
                    </a>
                    <ul class="dropdown-menu p-3 mt-3">
                        <li>
                            <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                                <div class="avatar avatar-xs avatar-rounded me-2">
                                    <img src="<?php echo base_url('assets/img/store/store-01.jpg'); ?>" alt="store" class="img-fluid">
                                </div>
                                Streak House
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                                <div class="avatar avatar-xs avatar-rounded me-2">
                                    <img src="<?php echo base_url('assets/img/store/store-02.jpg'); ?>" alt="store" class="img-fluid">
                                </div>
                                Hotchilli Hub
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                                <div class="avatar avatar-xs avatar-rounded me-2">
                                    <img src="<?php echo base_url('assets/img/store/store-03.jpg'); ?>" alt="store" class="img-fluid">
                                </div>
                                The Flavor Lab
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Sidebar Toggle Button -->
                <button class="sidenav-toggle-btn btn border-0 p-0" id="toggle_btn">
                    <i class="icon-panel-right-open fs-16"></i>
                </button>

                <!-- Sidebar Close Button -->
                <button class="sidebar-close">
                    <i class="icon-x align-middle"></i>
                </button>
            </div>
            <div class="sidebar-scroll">
                <div class="tab-content" id="tab-content">
                    <div class="tab-pane fade <?php echo ($page =='index' || $page =='/' || $page =='pos' || $page =='orders' || $page =='kanban-view' || $page =='kitchen' || $page =='reservations') ? 'show active' : '' ;?>" id="dashboard">
                        <ul>
                            <li class="menu-title"><span>MAIN</span></li>
                            <li><a href="<?php echo base_url('index'); ?>" class="<?php echo ($page =='index' || $page =='/') ? 'active' : '' ;?>"><i class="icon-layout-dashboard"></i><span>Dashboard</span></a></li>
                            <li><a href="<?php echo base_url('pos'); ?>" class="<?php echo ($page =='pos') ? 'active' : '' ;?>"><i class="icon-combine"></i><span>POS</span></a></li>
                            <li><a href="<?php echo base_url('orders'); ?>" class="<?php echo ($page =='orders' || $page =='kanban-view') ? 'active' : '' ;?>"><i class="icon-list-todo"></i><span>Orders</span></a></li>
                            <li><a href="<?php echo base_url('kitchen'); ?>" class="<?php echo ($page =='kitchen') ? 'active' : '' ;?>"><i class="icon-drumstick"></i><span>Kitchen (KDS)</span></a></li>
                            <li><a href="<?php echo base_url('reservations'); ?>" class="<?php echo ($page =='reservations') ? 'active' : '' ;?>"><i class="icon-file-clock"></i><span>Reservation</span></a></li>
                        </ul>
                    </div>
                    <div class="tab-pane fade <?php echo ($page =='categories' || $page =='items' || $page =='addons' || $page =='coupons') ? 'show active' : '' ;?>" id="menu-management">
                        <ul>
                            <li class="menu-title"><span>MENU MANAGEMENT</span></li>
                            <li><a href="<?php echo base_url('categories'); ?>" class="<?php echo ($page =='categories') ? 'active' : '' ;?>"><i class="icon-layers"></i><span>Categories</span></a></li>
                            <li><a href="<?php echo base_url('items'); ?>" class="<?php echo ($page =='items') ? 'active' : '' ;?>"><i class="icon-layout-list"></i><span>Items</span></a></li>
                            <li><a href="<?php echo base_url('addons'); ?>" class="<?php echo ($page =='addons') ? 'active' : '' ;?>"><i class="icon-text-select"></i><span>Addons</span></a></li>
                            <li><a href="<?php echo base_url('coupons'); ?>" class="<?php echo ($page =='coupons') ? 'active' : '' ;?>"><i class="icon-badge-percent"></i><span>Coupons</span></a></li>
                        </ul>
                    </div>
                    <div class="tab-pane fade <?php echo ($page =='table' || $page =='customer' || $page =='invoices' || $page =='invoice-details' || $page =='payments') ? 'show active' : '' ;?>" id="operations">
                        <ul>
                            <li class="menu-title"><span>OPERATIONS</span></li>
                            <li><a href="<?php echo base_url('table'); ?>" class="<?php echo ($page =='table') ? 'active' : '' ;?>"><i class="icon-concierge-bell"></i><span>Tables</span></a></li>
                            <li><a href="<?php echo base_url('customer'); ?>" class="<?php echo ($page =='customer') ? 'active' : '' ;?>" ><i class="icon-user-round"></i><span>Customers</span></a></li>
                            <li><a href="<?php echo base_url('invoices'); ?>" class="<?php echo ($page =='invoices' || $page =='invoice-details') ? 'active' : '' ;?>"><i class="icon-file-spreadsheet"></i><span>Invoices</span></a></li>
                            <li><a href="<?php echo base_url('payments'); ?>" class="<?php echo ($page =='payments') ? 'active' : '' ;?>"><i class="icon-badge-dollar-sign"></i><span>Payments</span></a></li>
                        </ul>
                    </div>
                    <div class="tab-pane fade <?php echo ($page =='users' || $page =='role-permission' || $page =='earning-report' || $page =='order-report' || $page =='sales-report' || $page =='customer-report' || $page =='audit-report') ? 'show active' : '' ;?>" id="administration">
                        <ul>
                            <li class="menu-title"><span>ADMINISTRATION</span></li>
                            <li><a href="<?php echo base_url('users'); ?>" class="<?php echo ($page =='users') ? 'active' : '' ;?>"><i class="icon-users"></i><span>Users</span></a></li>
                            <li><a href="<?php echo base_url('role-permission'); ?>" class="<?php echo ($page =='role-permission') ? 'active' : '' ;?>"><i class="icon-shield"></i><span>Permissions</span></a></li>
                            <li><a href="<?php echo base_url('earning-report'); ?>" class="<?php echo ($page =='earning-report' || $page =='order-report' || $page =='sales-report' || $page =='customer-report' || $page =='audit-report') ? 'active' : '' ;?>"><i class="icon-file-spreadsheet"></i><span>Reports</span></a></li>
                        </ul>
                    </div>
                    <div class="tab-pane fade <?php echo ($page =='login' || $page =='register' || $page =='forgot-password' || $page =='email-verification' || $page =='otp' || $page =='reset-password') ? 'show active' : '' ;?>" id="pages">
                        <ul>
                            <li class="menu-title"><span>Pages</span></li>
                            <li><a href="<?php echo base_url('login'); ?>" class="<?php echo ($page =='login') ? 'active' : '' ;?>"><i class="icon-lock-keyhole"></i><span>Sign In</span></a></li>
                            <li><a href="<?php echo base_url('register'); ?>" class="<?php echo ($page =='register') ? 'active' : '' ;?>"><i class="icon-user-round-plus"></i><span>Sign Up</span></a></li>
                            <li><a href="<?php echo base_url('forgot-password'); ?>" class="<?php echo ($page =='forgot-password') ? 'active' : '' ;?>"><i class="icon-lock-keyhole-open"></i><span>Forgot Password</span></a></li>
                            <li><a href="<?php echo base_url('email-verification'); ?>" class="<?php echo ($page =='email-verification') ? 'active' : '' ;?>"><i class="icon-mail"></i><span>Email Verification</span></a></li>
                            <li><a href="<?php echo base_url('otp'); ?>" class="<?php echo ($page =='otp') ? 'active' : '' ;?>"><i class="icon-blocks"></i><span>OTP</span></a></li>
                            <li><a href="<?php echo base_url('reset-password'); ?>" class="<?php echo ($page =='reset-password') ? 'active' : '' ;?>"><i class="icon-lock-keyhole"></i><span>Reset Password</span></a></li>
                        </ul>
                    </div>
                    <div class="tab-pane fade <?php echo ($page =='store-settings' || $page =='tax-settings' || $page =='print-settings' || $page =='payment-settings' || $page =='delivery-settings' || $page =='notifications-settings' || $page =='integrations-settings') ? 'show active' : '' ;?>" id="settings">
                        <ul>
                            <li class="menu-title"><span>SETTINGS</span></li>
                            <li><a href="<?php echo base_url('store-settings'); ?>" class="<?php echo ($page =='store-settings') ? 'active' : '' ;?>"><i class="icon-warehouse"></i><span>Store Settings</span></a></li>
                            <li><a href="<?php echo base_url('tax-settings'); ?>" class="<?php echo ($page =='tax-settings') ? 'active' : '' ;?>"><i class="icon-diamond-percent"></i><span>Tax</span></a></li>
                            <li><a href="<?php echo base_url('print-settings'); ?>" class="<?php echo ($page =='print-settings') ? 'active' : '' ;?>"><i class="icon-printer"></i><span>Print</span></a></li>
                            <li><a href="<?php echo base_url('payment-settings'); ?>" class="<?php echo ($page =='payment-settings') ? 'active' : '' ;?>"><i class="icon-circle-dollar-sign"></i><span>Payment Types</span></a></li>
                            <li><a href="<?php echo base_url('delivery-settings'); ?>" class="<?php echo ($page =='delivery-settings') ? 'active' : '' ;?>"><i class="icon-bike"></i><span>Delivery</span></a></li>
                            <li><a href="<?php echo base_url('notifications-settings'); ?>" class="<?php echo ($page =='notifications-settings') ? 'active' : '' ;?>"><i class="icon-bell"></i><span>Notifications</span></a></li>
                            <li><a href="<?php echo base_url('integrations-settings'); ?>" class="<?php echo ($page =='integrations-settings') ? 'active' : '' ;?>"><i class="icon-pin"></i><span>Integrations / API</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- End Two Col Sidebar -->
<?php }?>

