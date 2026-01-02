<template>
    <!-- Topbar Start -->
    <header class="navbar-header">
        <div class="topbar-menu">
            <div class="d-flex align-items-center gap-2">

                <!-- Logo -->
                <router-link to="/main-menu/dashboard" class="logo">

                    <!-- Logo Normal -->
                    <span class="logo-light">
                        <span class="logo-lg"><img src="@/assets/img/logo.svg" alt="logo"></span>
                        <span class="logo-sm"><img src="@/assets/img/logo-small.svg" alt="small logo"></span>
                    </span>

                    <!-- Logo Dark -->
                    <span class="logo-dark">
                        <span class="logo-lg"><img src="@/assets/img/logo-white.svg" alt="dark logo"></span>
                    </span>
                </router-link>

                <!-- Sidebar Mobile Button -->
                <a id="mobile_btn" class="mobile-btn" href="#sidebar" @click="toggleSidebar">
                    <i class="icon-menu fs-24"></i>
                </a>    
                
                <!-- Search -->
                <div class="header-links d-lg-flex d-none">
                    <router-link to="/main-menu/pos" class="d-inline-flex align-items-center"><i class="icon-hand-platter me-1"></i>POS</router-link>
                    <router-link to="/main-menu/orders" class="d-inline-flex align-items-center"><i class="icon-list-todo me-1"></i>Orders</router-link>
                    <router-link to="/main-menu/kitchen" class="d-inline-flex align-items-center"><i class="icon-drumstick me-1"></i>Kitchen</router-link>
                    <router-link to="/main-menu/reservations" class="d-inline-flex align-items-center"><i class="icon-file-clock me-1"></i>Reservation</router-link>
                    <router-link to="/operations/table" class="d-inline-flex align-items-center"><i class="icon-concierge-bell me-1"></i>Table</router-link>
                </div>
                
            </div>

            <div class="d-flex align-items-center header-list">

                    <!-- Upgrade Button -->
                <div class="header-item d-none d-sm-flex">
                    <a href="#" class="btn btn-sm btn-primary d-inline-flex align-items-center">
                        <i class="icon-crown me-1"></i>Upgrade
                    </a>
                </div>

                <!-- Search Button -->
                <div class="header-item d-flex">
                    <button class="topbar-link btn btn-icon" data-bs-toggle="modal" data-bs-target="#searchModal" type="button" aria-label="search">
                        <i class="icon-search fs-16"></i>
                    </button>
                </div>

                <!-- Report Button -->
                <div class="header-item d-none d-sm-flex">
                    <router-link to="/administration/earning-report" class="topbar-link btn btn-icon" aria-label="report">
                        <i class="icon-chart-column-stacked fs-16"></i><span class="position-absolute report-badge bg-success"></span>
                    </router-link>
                </div>

                <!-- Light/Dark Mode Button -->
                <div class="header-item d-flex">
                    <button
                        class="topbar-link btn btn-icon"
                        id="light-dark-mode"
                        type="button" @click="toggleDarkMode"
                    >
                        <i class="fs-16" :class="[isDarkMode ? 'icon-sun' : 'icon-moon']"></i>
                    </button>
                </div>
                    
            </div>
        </div>
    </header>
    <!-- Topbar End -->

    <!-- Search Modal -->
        <div class="modal fade" id="searchModal">
            <div class="modal-dialog modal-md">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="mb-0">Search</h5>
                        <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                    </div>
                    <div class="modal-body">
                        <div class="input-group input-group-flat mb-4">
                            <input type="text" class="form-control form-control-lg fs-14" placeholder="Search your keyword">
                            <span class="input-group-text">
                                <i class="icon-search text-dark"></i>
                            </span>
                        </div>
                        <ul class="nav nav-tabs nav-bordered nav-bordered-primary mb-4">
                            <li class="nav-item">
                                <a href="#customer-tab" data-bs-toggle="tab" aria-expanded="false" class="nav-link active d-flex align-items-center">
                                    <i class="icon-badge-dollar-sign me-2"></i>Customer
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#orders-tab" data-bs-toggle="tab" aria-expanded="true" class="nav-link d-flex align-items-center">
                                     <i class="icon-list-todo me-2"></i>Orders
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#kitchen-tab" data-bs-toggle="tab" aria-expanded="false" class="nav-link d-flex align-items-center">
                                     <i class="icon-shopping-bag me-2"></i>Kitchen
                                </a>
                            </li>
                        </ul>

                        <div class="tab-content pt-1">
                            <div class="tab-pane fade show active" id="customer-tab">
                                <div class="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3 border-bottom">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar avatar-rounded me-2">
                                            <img src="@/assets/img/profiles/avatar-32.jpg" alt="customer">
                                        </div>
                                        <div>
                                            <h6 class="fs-14 fw-semibold mb-1">Adrian James</h6>
                                            <p class="fs-13 mb-0">Male</p>
                                        </div>
                                    </div>
                                    <span class="badge bg-light text-dark">#CR6569</span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3 border-bottom">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar avatar-rounded me-2">
                                            <img src="@/assets/img/profiles/avatar-33.jpg" alt="customer">
                                        </div>
                                        <div>
                                            <h6 class="fs-14 fw-semibold mb-1">Sue Allen</h6>
                                            <p class="fs-13 mb-0">Female</p>
                                        </div>
                                    </div>
                                    <span class="badge bg-light text-dark">#CR6569</span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3 border-bottom">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar avatar-rounded me-2">
                                            <img src="@/assets/img/profiles/avatar-31.jpg" alt="customer">
                                        </div>
                                        <div>
                                            <h6 class="fs-14 fw-semibold mb-1">Frank Barrett</h6>
                                            <p class="fs-13 mb-0">Male</p>
                                        </div>
                                    </div>
                                    <span class="badge bg-light text-dark">#CR4824</span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between pb-3">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar avatar-rounded bg-light text-dark border me-2">
                                            <i class="icon-user fs-20"></i>
                                        </div>
                                        <div>
                                            <h6 class="fs-14 fw-semibold mb-1">Walkin Customer</h6>
                                            <p class="fs-13 mb-0">Male</p>
                                        </div>
                                    </div>
                                    <span class="badge bg-light text-dark">#CR8238</span>
                                </div>
                                <router-link to="/operations/customer" class="btn btn-sm btn-white d-inline-flex align-items-center w-100 mt-1">View All<i class="icon-arrow-right ms-1"></i></router-link>
                            </div>
                            <div class="tab-pane fade" id="orders-tab">
                                <div class="d-flex align-items-sm-center justify-content-between flex-column gap-2 flex-sm-row pb-3 mb-3 border-bottom">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar avatar-rounded bg-light text-dark me-2">
                                            <i class="icon-shopping-bag fs-24"></i>
                                        </div>
                                        <div>
                                            <h6 class="fs-14 fw-semibold mb-1">#56998</h6>
                                            <div class="d-flex align-items-center gap-2">
                                                <p class="mb-0">Dine In</p>
                                                <span class="even-line"></span>
                                                 <p class="mb-0">Table No : 3</p>
                                            </div>                                            
                                        </div>
                                    </div>
                                    <div>
                                        <span class="badge bg-light text-dark">Token No : 27</span>
                                    </div>
                                </div>
                                <div class="d-flex align-items-sm-center justify-content-between flex-column gap-2 flex-sm-row pb-3 mb-3 border-bottom">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar avatar-rounded bg-light text-dark me-2">
                                            <i class="icon-shopping-bag fs-24"></i>
                                        </div>
                                        <div>
                                            <h6 class="fs-14 fw-semibold mb-1">#57001</h6>
                                            <div class="d-flex align-items-center gap-2">
                                                <p class="mb-0">Take Away</p>
                                            </div>                                            
                                        </div>
                                    </div>
                                    <div>
                                        <span class="badge bg-light text-dark">Token No : 26</span>
                                    </div>
                                </div>
                                <div class="d-flex align-items-sm-center justify-content-between flex-column gap-2 flex-sm-row pb-3 mb-3 border-bottom">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar avatar-rounded bg-light text-dark me-2">
                                            <i class="icon-shopping-bag fs-24"></i>
                                        </div>
                                        <div>
                                            <h6 class="fs-14 fw-semibold mb-1">#56998</h6>
                                            <div class="d-flex align-items-center gap-2">
                                                <p class="mb-0">Dine In</p>
                                                <span class="even-line"></span>
                                                 <p class="mb-0">Table No : 3</p>
                                            </div>                                            
                                        </div>
                                    </div>
                                    <div>
                                        <span class="badge bg-light text-dark">Token No : 27</span>
                                    </div>
                                </div>
                                <div class="d-flex align-items-sm-center justify-content-between flex-column gap-2 flex-sm-row pb-3">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar avatar-rounded bg-light text-dark me-2">
                                            <i class="icon-shopping-bag fs-24"></i>
                                        </div>
                                        <div>
                                            <h6 class="fs-14 fw-semibold mb-1">#57002</h6>
                                            <div class="d-flex align-items-center gap-2">
                                                <p class="mb-0">Delivery</p>
                                            </div>                                            
                                        </div>
                                    </div>
                                    <div>
                                        <span class="badge bg-light text-dark">Token No : 25</span>
                                    </div>
                                </div>
                                <router-link to="/main-menu/orders" class="btn btn-sm btn-white d-inline-flex align-items-center w-100 mt-1">View All<i class="icon-arrow-right ms-1"></i></router-link>
                                <div class="text-center d-none">
                                    <img src="@/assets/img/icons/search.svg" alt="search icon" class="img-fluid mb-4">
                                    <h4 class="mb-1">No Results Found</h4>
                                    <p class="mb-0">Refine your query to discover relevant items</p>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="kitchen-tab">
                                <div class="d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar avatar-rounded bg-light text-dark me-2">
                                            <i class="icon-hand-platter fs-24"></i>
                                        </div>
                                        <div>
                                            <h6 class="fs-14 fw-semibold mb-1">Andrew Brooks</h6>
                                            <p class="fs-13 mb-0">#14751</p>                           
                                        </div>
                                    </div>
                                    <span class="badge bg-light text-dark">T#23896</span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar avatar-rounded bg-light text-dark me-2">
                                            <i class="icon-hand-platter fs-24"></i>
                                        </div>
                                        <div>
                                            <h6 class="fs-14 fw-semibold mb-1">Walk in Customer</h6>
                                            <p class="fs-13 mb-0">Take Away</p>                           
                                        </div>
                                    </div>
                                    <span class="badge bg-light text-dark">#14547</span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar avatar-rounded bg-light text-dark me-2">
                                            <i class="icon-hand-platter fs-24"></i>
                                        </div>
                                        <div>
                                            <h6 class="fs-14 fw-semibold mb-1">Elijah Thompson</h6>
                                            <p class="fs-13 mb-0">Take Away</p>                           
                                        </div>
                                    </div>
                                    <span class="badge bg-light text-dark">#98765</span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between pb-3">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar avatar-rounded bg-light text-dark me-2">
                                            <i class="icon-hand-platter fs-24"></i>
                                        </div>
                                        <div>
                                            <h6 class="fs-14 fw-semibold mb-1">Jennifer Brooks</h6>
                                            <p class="fs-13 mb-0">DineIn</p>                           
                                        </div>
                                    </div>
                                    <span class="badge bg-light text-dark">#23896</span>
                                </div>
                                <router-link to="/main-menu/kitchen" class="btn btn-sm btn-white d-inline-flex align-items-center w-100 mt-1">View All<i class="icon-arrow-right ms-1"></i></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>


<script>
import { ref, onMounted } from "vue";
export default {
    data(){
        return{

        }
    },
    setup() {
        const isDarkMode = ref(false);

        const setThemeAttribute = (enabled) => {
            document.documentElement.setAttribute("data-bs-theme", enabled ? "dark" : "light");
        };

        const toggleDarkMode = () => {
            isDarkMode.value = !isDarkMode.value;
            localStorage.setItem("dark", isDarkMode.value ? "enabled" : "disabled");
            setThemeAttribute(isDarkMode.value);
        };

        const initializeDarkMode = () => {
            const darkMode = localStorage.getItem("dark");
            isDarkMode.value = darkMode === "enabled";
            setThemeAttribute(isDarkMode.value);
        };

        onMounted(() => {
            initializeDarkMode();
        });

        return {
            isDarkMode,
            toggleDarkMode,
        };
    },
    methods: {
        toggleSidebar() {
            const body = document.body;
            body.classList.toggle("slide-nav");
        },
    }
}
</script>