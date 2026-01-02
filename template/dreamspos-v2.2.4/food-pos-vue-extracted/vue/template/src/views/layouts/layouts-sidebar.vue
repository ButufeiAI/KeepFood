<template>
    <!-- Two Col Sidebar -->
    <div class="two-col-sidebar" id="two-col-sidebar">
        <div class="sidebar sidebar-twocol">
            <div class="twocol-mini">
                <router-link to="/main-menu/dashboard" class="logo-small">
                    <img src="@/assets/img/logo-small.svg" alt="Logo">
                </router-link>
                <div class="sidebar-left">
                    <div class="nav flex-column align-items-center sidebar-nav" id="sidebar-tabs" role="tablist"
                        aria-orientation="vertical" data-simplebar>
                        <simplebar id="scrollbar" class="h-100" ref="scrollbar">
                            <a v-for="tab in sidebarTabs" :key="tab.id" href="#" class="nav-link"
                                :class="{ active: isTabActive(tab) }" :title="tab.title" data-bs-toggle="tab"
                                :data-bs-target="`#${tab.id}`">
                                <i :class="tab.icon"></i>
                            </a>
                        </simplebar>
                    </div>
                    <div class="sidebar-profile">
                        <div class="dropdown dropend">
                            <a href="javascript:void(0);" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                <i class="icon-bell"></i>
                                <span class="position-absolute notification-badge bg-danger"></span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-xl notification-dropdown">
                                <div class="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
                                    <h5 class="mb-0">Notifications</h5>
                                    <a href="#" class="link-primary">Mark all as unread</a>
                                </div>
                                <simplebar id="scrollbar" ref="scrollbar" class="notification-body h-100" data-simplebar>
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
                                </simplebar>
                            </div>
                        </div>
                        <div class="dropdown dropend">
                            <a href="javascript:void(0);" class="avatar avatar-sm" data-bs-toggle="dropdown">
                                <img src="@/assets/img/profiles/avatar-27.jpg" alt="user"
                                    class="img-fluid rounded-circle">
                            </a>
                            <div class="dropdown-menu p-0 dropdown-menu-end dropdown-menu-md">
                                <div class="dropdown-header border-bottom p-3">
                                    <div class="d-flex align-items-center justify-content-between gap-3">
                                        <div class="d-flex align-items-center">
                                            <div class="avatar avatar-lg avatar-rounded border border-success">
                                                <img src="@/assets/img/profiles/avatar-27.jpg" class="rounded-circle"
                                                    alt="user">
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
                                    <router-link to="/settings/store-settings" class="dropdown-item">
                                        <i class="icon-warehouse me-2 fs-16 align-middle"></i>
                                        <span class="align-middle">Store Settings</span>
                                    </router-link>

                                    <!-- Item-->
                                    <router-link to="/administration/role-permission" class="dropdown-item">
                                        <i class="icon-shield-ellipsis me-2 fs-16 align-middle"></i>
                                        <span class="align-middle">Roles & Permisisons</span>
                                    </router-link>

                                    <!-- Item-->
                                    <router-link to="/administration/audit-report" class="dropdown-item">
                                        <i class="icon-clock-arrow-down me-2 fs-16 align-middle"></i>
                                        <span class="align-middle">Audit Logs</span>
                                    </router-link>

                                    <!-- Item-->
                                    <router-link to="/administration/users" class="dropdown-item">
                                        <i class="icon-user-pen me-2 fs-16 align-middle"></i>
                                        <span class="align-middle">Manage Staffs</span>
                                    </router-link>

                                </div>
                                <div class="p-3 border-top">
                                    <router-link to="/login" class="btn btn-white btn-sm w-100">
                                        <i class="icon-log-in me-1"></i>Logout
                                    </router-link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sidebar-right">
                <div class="sidebar-logo mb-3">
                    <div class="dropdown">
                        <a href="javascript:void(0);" class="d-inline-flex align-items-center fw-medium"
                            data-bs-toggle="dropdown">
                            <div class="avatar avatar-xs avatar-rounded me-1">
                                <img src="@/assets/img/store/store-01.jpg" alt="store" class="img-fluid">
                            </div>
                            Streak House <i class="icon-chevrons-up-down ms-2"></i>
                        </a>
                        <ul class="dropdown-menu p-3 mt-3">
                            <li>
                                <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                                    <div class="avatar avatar-xs avatar-rounded me-2">
                                        <img src="@/assets/img/store/store-01.jpg" alt="store" class="img-fluid">
                                    </div>
                                    Streak House
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                                    <div class="avatar avatar-xs avatar-rounded me-2">
                                        <img src="@/assets/img/store/store-02.jpg" alt="store" class="img-fluid">
                                    </div>
                                    Hotchilli Hub
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                                    <div class="avatar avatar-xs avatar-rounded me-2">
                                        <img src="@/assets/img/store/store-03.jpg" alt="store" class="img-fluid">
                                    </div>
                                    The Flavor Lab
                                </a>
                            </li>
                        </ul>
                    </div>

                    <!-- Sidebar Toggle Button -->
                    <button class="sidenav-toggle-btn btn border-0 p-0" id="toggle_btn" @click="toggleSidebar">
                        <i class="icon-panel-right-open fs-16"></i>
                    </button>

                    <!-- Sidebar Close Button -->
                    <button class="sidebar-close"  @click="closeSidebar">
                        <i class="icon-x align-middle"></i>
                    </button>
                </div>
                <div class="sidebar-scroll">
                    <div class="tab-content">
                        <div v-for="tab in sidebarTabs" :key="tab.id" class="tab-pane fade tab-content" :id="tab.id"
                            :class="{ 'show active': isTabActive(tab) }">
                            <ul>
                                <li class="menu-title">
                                    <span>{{ tab.title }}</span>
                                </li>

                                <li v-for="item in tab.menu" :key="item.to">
                                    <router-link :to="item.to" :class="{
                                        active: item.activePaths
                                            ? item.activePaths.some(path => $route.path === path)
                                            : $route.path === item.to
                                    }">
                                        <i :class="item.icon"></i>
                                        <span>{{ item.label }}</span>
                                    </router-link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Two Col Sidebar -->
</template>

<script>
import simplebar from "simplebar-vue";
import "simplebar-vue/dist/simplebar.min.css";
import sidebarTabs from "@/assets/json/sidebar.json";
export default {
    components: {
        simplebar,
    },
    data() {
        return {
            activeTab: '',
            sidebarTabs: sidebarTabs.sidebarTabs,
        }
    },
    mounted() {
        this.initMouseoverListener();
        this.activeTab = this.$route.path.split('/')[1];
    },
    methods: {
        isTabActive(tab) {
            return tab.activePaths.some(path =>
                this.$route.path.startsWith(path)
            );
        },
        toggleSidebar() {
            const body = document.body;
            body.classList.toggle("mini-sidebar");
        },
        closeSidebar() {
            const body = document.body;
            body.classList.remove("slide-nav");
            body.classList.remove("full-width");
            const overlay = document.querySelector(".sidebar-overlay");
            if (overlay) overlay.classList.remove("opened");
        },
        initMouseoverListener() {
            document.addEventListener("mouseover", this.handleMouseover);
        },
        handleMouseover(e) {
            e.stopPropagation();

            const body = document.body;
            const toggleBtn = document.getElementById("toggle_btn");

            if (body.classList.contains("mini-sidebar")) {
                const target = e.target.closest(".sidebar, .header-left");

                if (target) {
                    body.classList.add("expand-menu");
                    } else if (body.classList.contains("expand-menu")) {
                    body.classList.remove("expand-menu");
                }

                e.preventDefault();
            }
        },
    },
    beforeUnmount() {
        document.removeEventListener("mouseover", this.handleMouseover);
        const overlay = document.querySelector(".sidebar-overlay");
        if (overlay) {
            overlay.removeEventListener("click", this.closeSidebar);
        }
    },
}
</script>