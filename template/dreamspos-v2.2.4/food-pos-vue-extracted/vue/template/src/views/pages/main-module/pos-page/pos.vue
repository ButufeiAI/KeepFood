<template>
    <!-- Page Start-->
    <div class="page-wrapper">
        <div class="content">

            <!-- start row -->
            <div class="row g-0">
                <div class="col-lg-8 pos-left">

                    <div class="slider-wrapper mb-4 pb-4 border-bottom">
                
                        <div class="d-flex align-items-center flex-wrap gap-3 mb-4">
                                <h3 class="mb-0">Recent Orders</h3>   
                            <div class="d-flex align-items-center flex-wrap  justify-content-between gap-2 flex-fill">
                                <ul class="nav nav-tabs nav-tabs-solid border-0 align-items-center flex-wrap gap-2" role="tablist">
                                    <li class="nav-item">                                             
                                        <a href="#" class="nav-link active shadow-sm" data-bs-toggle="tab" data-bs-target="#all" @click="activeTab = 'all'">All Orders</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link shadow-sm" data-bs-toggle="tab"  data-bs-target="#dinein" @click="activeTab = 'dinein'">Dine In</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link shadow-sm" data-bs-toggle="tab"  data-bs-target="#takeaway" @click="activeTab = 'takeaway'">Take Away</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link shadow-sm" data-bs-toggle="tab"  data-bs-target="#delivery" @click="activeTab = 'delivery'">Delivery</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link shadow-sm" data-bs-toggle="tab"  data-bs-target="#table" @click="activeTab = 'table'">Table</a>
                                    </li>
                                </ul>
                                <div class="d-flex align-items-center gap-2">
                                    <button type="button" class="slick-arrow all-prev" @click="moveAllPrev"><i class="icon-arrow-left"></i></button>
                                    <button type="button" class="slick-arrow all-next" @click="moveAllNext"><i class="icon-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>

                        <div class="tab-content">

                            <!-- Tab -->
                            <div class="tab-pane fade active show" id="all">
                                <all-order ref="AllCarousel"></all-order>
                            </div>

                            <!-- Tab -->
                            <div class="tab-pane fade" id="dinein">
                                <dine-in ref="DineInCarousel"></dine-in>
                            </div>

                            <!-- Tab -->
                            <div class="tab-pane fade" id="takeaway">
                                <take-away ref="TakeAwayCarousel"></take-away>
                            </div>

                            <!-- Tab -->
                            <div class="tab-pane fade" id="delivery">
                                <delivery ref="DeliveryCarousel"></delivery>                                
                            </div>

                            <!-- Tab -->
                            <div class="tab-pane fade" id="table">
                                <all-table ref="AllTableCarousel"></all-table>
                            </div>

                        </div>

                    </div>

                    <!-- Menu Item -->
                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                        <div class="d-flex align-items-center gap-2 flex-wrap">
                            <h5 class="mb-0 me-2">Menu Categories</h5>                            
                        </div>
                        <div class="d-flex align-items-center gap-2 flex-wrap orders-list">
                            <label class="d-flex align-items-center fs-14 text-dark">
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span class="dot success me-1"></span>
                                Veg
                            </label>
                            <label class="d-flex align-items-center fs-14 text-dark">
                                <input class="form-check-input m-0 me-2" type="checkbox">
                                <span class="dot me-1"></span>
                                Non Veg
                            </label>
                            <label class="d-flex align-items-center fs-14 text-dark">
                                <input class="form-check-input m-0 me-2" type="checkbox">
                                <span class="dot warning me-1"></span>
                                Egg
                            </label>
                        </div>
                        <div class="d-flex align-items-center gap-2 flex-wrap">
                            <div class="page-search">
                                <input type="search" class="form-control form-control-sm pe-4" placeholder="Search">
                                <i class="icon-search fs-14"></i>
                            </div>
                            <a href="#" class="btn btn-icon btn-sm btn-outline-white rounded-circle" aria-label="refresh"><i class="icon-refresh-ccw"></i></a>
                            <a href="#" class="btn btn-icon btn-sm btn-outline-white rounded-circle" aria-label="refresh"><i class="icon-list-filter"></i></a>
                            <div class="d-flex align-items-center gap-2">
                                <button type="button" class="slick-arrow category-prev" @click="movePrev"><i class="icon-arrow-left"></i></button>
                                <button type="button" class="slick-arrow category-next" @click="moveNext"><i class="icon-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>

                    <!-- Category Slider -->
                    <ul class="nav nav-tabs nav-tabs-solid category-tab border-0 category-slider mb-4" role="tablist">
                        <Carousel :settings="settings" :breakpoints="breakpoints" ref="categoryCarousel">
                            <Slide>
                                <li class="nav-item w-100 me-2">                                             
                                    <a href="#all-menu" class="nav-link active shadow" data-bs-toggle="tab">
                                        <div class="avatar avatar-lg rounded-circle flex-shrink-0">
                                            <img src="@/assets/img/food/food-1.png" alt="food" class="img-fluid">
                                        </div>
                                        <div>
                                            <h6 class="fs-14 fw-semibold mb-1">All Menus</h6>
                                            <p class="text-body fw-normal mb-0">200 Menus</p>
                                        </div>
                                    </a>
                                </li>
                            </Slide>
                            <Slide>
                                <li class="nav-item w-100 me-2">
                                    <a href="#seafood-menu" class="nav-link shadow" data-bs-toggle="tab">
                                        <div class="avatar avatar-lg rounded-circle flex-shrink-0">
                                            <img src="@/assets/img/food/food-2.png" alt="food" class="img-fluid">
                                        </div>
                                        <div>
                                            <h6 class="fs-14 fw-semibold mb-1">Sea Food</h6>
                                            <p class="text-body fw-normal mb-0">200 Menus</p>
                                        </div>
                                    </a>
                                </li>
                            </Slide>
                            <Slide>
                                <li class="nav-item w-100 me-2">
                                    <a href="#pizza-menu" class="nav-link shadow-sm" data-bs-toggle="tab">
                                        <div class="avatar avatar-lg rounded-circle flex-shrink-0">
                                            <img src="@/assets/img/food/food-3.png" alt="food" class="img-fluid">
                                        </div>
                                        <div>
                                            <h6 class="fs-14 fw-semibold mb-1">Pizza</h6>
                                            <p class="text-body fw-normal mb-0">180 Menus</p>
                                        </div>
                                    </a>
                                </li>
                            </Slide>
                            <Slide>
                                <li class="nav-item w-100 me-2">
                                    <a href="#salad-menu" class="nav-link shadow-sm" data-bs-toggle="tab">
                                        <div class="avatar avatar-lg rounded-circle flex-shrink-0">
                                            <img src="@/assets/img/food/food-4.png" alt="food" class="img-fluid">
                                        </div>
                                        <div>
                                            <h6 class="fs-14 fw-semibold mb-1">Salads</h6>
                                            <p class="text-body fw-normal mb-0">180 Menus</p>
                                        </div>
                                    </a>
                                </li>
                            </Slide>
                            <Slide>
                                <li class="nav-item w-100 me-2">
                                    <a href="#tacos-menu" class="nav-link shadow-sm" data-bs-toggle="tab">
                                        <div class="avatar avatar-lg rounded-circle flex-shrink-0">
                                            <img src="@/assets/img/food/food-5.png" alt="food" class="img-fluid">
                                        </div>
                                        <div>
                                            <h6 class="fs-14 fw-semibold mb-1">Tacos</h6>
                                            <p class="text-body fw-normal mb-0">150 Menus</p>
                                        </div>
                                    </a>
                                </li>
                            </Slide>
                            <Slide>
                                <li class="nav-item w-100 me-2">
                                    <a href="#soup-menu" class="nav-link shadow-sm" data-bs-toggle="tab">
                                        <div class="avatar avatar-lg rounded-circle flex-shrink-0">
                                            <img src="@/assets/img/food/food-6.png" alt="food" class="img-fluid">
                                        </div>
                                        <div>
                                            <h6 class="fs-14 fw-semibold mb-1">Soups</h6>
                                            <p class="text-body fw-normal mb-0">180 Menus</p>
                                        </div>
                                    </a>
                                </li>
                            </Slide>
                        </Carousel>
                    </ul> 

                    <div class="tab-content">

                        <!-- Tab Item -->
                        <div class="tab-pane fade show active" id="all-menu">
                            <div class="row g-3">
                                
                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="@/assets/img/items/food-01.jpg" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                            <span class="badge bg-danger"><i class="icon-crown text-white"></i>Trending</span>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Sea Food</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Grilled Salmon Steak</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$80</p>
                                                <pos-counter></pos-counter>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="@/assets/img/items/food-02.jpg" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                            <span class="badge bg-indigo"><i class="icon-flame text-white"></i>Must Try</span>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Pizza</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-success me-1"></i> Veg</span>
                                                </div>
                                            </div>
                                            <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Cheese Burst Pizza</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$66</p>
                                                <pos-counter></pos-counter>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="@/assets/img/items/food-03.jpg" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Sea Food</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Garlic Butter Shrimp</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$25</p>
                                                <pos-counter></pos-counter>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="@/assets/img/items/food-04.jpg" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Tacos</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Chicken Taco</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark"><span class="text-body text-decoration-line-through">$38</span> $33</p>
                                                <pos-counter></pos-counter>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="@/assets/img/items/food-10.jpg" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Soups</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Tomato Basil Soup</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark"><span class="text-body text-decoration-line-through">$38</span> $33</p>
                                                <pos-counter></pos-counter>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="@/assets/img/items/food-05.jpg" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Sushi</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Vegetable Roll</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$66</p>
                                                <pos-counter></pos-counter>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="@/assets/img/items/food-16.jpg" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Beverages</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Lemon Mint Juice</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$96</p>
                                                <pos-counter></pos-counter>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="@/assets/img/items/food-05.jpg" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                            <span class="badge bg-indigo"><i class="icon-flame text-white"></i>Must Try</span>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Salads</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Grilled Chicken</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$49</p>
                                                <pos-counter></pos-counter>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="@/assets/img/items/food-09.jpg" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Soups</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Shrimp Tom Yum</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$25</p>
                                                <pos-counter></pos-counter>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="@/assets/img/items/food-08.jpg" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Pizza</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Corn Pizza</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$96</p>
                                                <pos-counter></pos-counter>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="@/assets/img/items/food-07.jpg" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Soups</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Chicken Noodle Soup</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$45</p>
                                                <pos-counter></pos-counter>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="@/assets/img/items/food-05.jpg" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Sea Food</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Lobster Thermidor</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$56</p>
                                                <pos-counter></pos-counter>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                        </div>

                        <!-- Tab Item -->
                        <div class="tab-pane fade" id="seafood-menu">
                            <div class="row g-3">
                                
                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="@/assets/img/items/food-01.jpg" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                            <span class="badge bg-danger"><i class="icon-crown text-white"></i>Trending</span>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Sea Food</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Grilled Salmon Steak</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$80</p>
                                                <pos-counter></pos-counter>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="@/assets/img/items/food-03.jpg" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Sea Food</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Garlic Butter Shrimp</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$25</p>
                                                <pos-counter></pos-counter>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="@/assets/img/items/food-05.jpg" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Sushi</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Vegetable Roll</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$66</p>
                                                <pos-counter></pos-counter>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="@/assets/img/items/food-05.jpg" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Sea Food</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Lobster Thermidor</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$56</p>
                                                <pos-counter></pos-counter>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                        </div>

                            <!-- Tab Item -->
                        <div class="tab-pane fade" id="pizza-menu">
                            <div class="row g-3">

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="@/assets/img/items/food-02.jpg" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                            <span class="badge bg-indigo"><i class="icon-flame text-white"></i>Must Try</span>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Pizza</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-success me-1"></i> Veg</span>
                                                </div>
                                            </div>
                                            <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Cheese Burst Pizza</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$66</p>
                                                <pos-counter></pos-counter>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="@/assets/img/items/food-08.jpg" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Pizza</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Corn Pizza</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$96</p>
                                                <pos-counter></pos-counter>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <!-- Tab Item -->
                        <div class="tab-pane fade" id="salad-menu">
                            <div class="row g-3">

                                    <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="@/assets/img/items/food-05.jpg" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                            <span class="badge bg-indigo"><i class="icon-flame text-white"></i>Must Try</span>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Salads</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Grilled Chicken</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$49</p>
                                                <pos-counter></pos-counter>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="@/assets/img/items/food-07.jpg" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Soups</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Chicken Noodle Soup</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$45</p>
                                                <pos-counter></pos-counter>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <!-- Tab Item -->
                        <div class="tab-pane fade" id="tacos-menu">
                            <div class="row g-3">

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="@/assets/img/items/food-04.jpg" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Tacos</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Chicken Taco</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark"><span class="text-body text-decoration-line-through">$38</span> $33</p>
                                                <pos-counter></pos-counter>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <!-- Tab Item -->
                        <div class="tab-pane fade" id="soup-menu">
                            <div class="row g-3">

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="@/assets/img/items/food-10.jpg" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Soups</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Tomato Basil Soup</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark"><span class="text-body text-decoration-line-through">$38</span> $33</p>
                                                <pos-counter></pos-counter>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="@/assets/img/items/food-09.jpg" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Soups</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Shrimp Tom Yum</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$25</p>
                                                <pos-counter></pos-counter>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="col-xl-3 col-md-4 col-sm-6">
                                    <div class="bg-white rounded border p-2">
                                        <div class="food-items position-relative mb-2">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#items_details">
                                                <img src="@/assets/img/items/food-07.jpg" alt="item" class="img-fluid w-100 rounded">
                                            </a>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center justify-content-between mb-1">
                                                <p class="fs-12 mb-0">Soups</p>
                                                <div>
                                                    <span class="d-flex align-items-center"><i class="icon-square-dot text-danger me-1"></i>Non Veg</span>
                                                </div>
                                            </div>
                                                <h6 class="fs-14 fw-semibold text-truncate mb-2"><a href="#" data-bs-toggle="modal" data-bs-target="#items_details">Chicken Noodle Soup</a></h6>
                                            <div class="d-flex align-items-center justify-content-between flex gap-2">
                                                <p class="mb-0 text-dark">$45</p>
                                                <pos-counter></pos-counter>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                    </div>

                </div>

                <div class="col-lg-4">
                    <div class="pos-right">

                        <!-- Title  -->
                        <div class="p-3 d-flex align-items-center justify-content-between flex-wrap border-bottom">
                            <h6 class="mb-0">Order #56998</h6>
                            <p class="mb-0">08 Oct, 2025, 12:44 PM</p> 
                        </div>

                        <!-- Tabs  -->
                        <div class="item border-bottom">
                            <!-- Tabs -->
                            <ul class="nav nav-tabs nav-tabs-solid border-0 mb-3 align-items-center justify-content-between flex-wrap gap-1 pos-tab" role="tablist">
                                <li class="nav-item flex-fill">                                             
                                    <a href="#order-tab1" class="nav-link active justify-content-center shadow-sm" data-bs-toggle="tab"><i class="icon-wine"></i>Dine In</a>
                                </li>
                                <li class="nav-item flex-fill">
                                    <a href="#order-tab2" class="nav-link justify-content-center shadow-sm" data-bs-toggle="tab"><i class="icon-shopping-bag"></i>Take Away</a>
                                </li>
                                <li class="nav-item flex-fill">
                                    <a href="#order-tab3" class="nav-link flex-fill justify-content-center shadow-sm" data-bs-toggle="tab"><i class="icon-check-check"></i>Delivery</a>
                                </li>
                                <li class="nav-item flex-fill">
                                    <a href="#order-tab4" class="nav-link flex-fill justify-content-center shadow-sm" data-bs-toggle="tab"><i class="icon-land-plot"></i>Table</a>
                                </li>
                            </ul> 

                            <div class="tab-content">

                                <!-- TAb 1 -->
                                <div class="tab-pane show active" id="order-tab1">

                                    <!-- Start row -->
                                    <div class="row g-2">
                                        <div class="col-lg-5">
                                            <vue-select 
                                                :options="Option"
                                                v-model="selected"
                                                placeholder="Select"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="input-item d-flex align-items-center gap-2">
                                                <vue-select 
                                                    :options="Customer"
                                                    v-model="selectedTwo"
                                                    placeholder="Select"
                                                />
                                                <button class="btn btn-primary btn-icon" data-bs-toggle="modal" data-bs-target="#add_customer"><i class="icon-plus"></i></button>
                                            </div>
                                        </div>
                                        <div class="col-lg-1">
                                            <div class="d-flex align-items-center justify-content-end">
                                                <button class="border-0 btn btn-icon bg-transparent fs-16 text-dark" data-bs-toggle="modal" data-bs-target="#edit_customer"><i class="icon-pencil-line"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- TAb 2 -->
                                <div class="tab-pane show" id="order-tab2">

                                    <!-- Start row -->
                                    <div class="row g-2">
                                        <div class="col-lg-11">
                                            <div class="input-item d-flex align-items-center gap-2">
                                                <input type="text" class="form-control" placeholder="Select Customer">
                                                <button class="btn btn-primary btn-icon" data-bs-toggle="modal" data-bs-target="#add_customer"><i class="icon-plus"></i></button>
                                            </div>
                                        </div>
                                        <div class="col-lg-1">
                                            <div class="d-flex align-items-center justify-content-end">
                                                <button class="border-0 btn btn-icon bg-transparent fs-16 text-dark" data-bs-toggle="modal" data-bs-target="#edit_customer"><i class="icon-pencil-line"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- TAb 3 -->
                                <div class="tab-pane show" id="order-tab3">

                                    <!-- Start row -->
                                    <div class="row g-2">
                                        <div class="col-lg-11">
                                            <div class="input-item d-flex align-items-center gap-2">
                                                <input type="text" class="form-control" placeholder="Select Customer">
                                                <button class="btn btn-primary btn-icon" data-bs-toggle="modal" data-bs-target="#add_customer"><i class="icon-plus"></i></button>
                                            </div>
                                        </div>
                                        <div class="col-lg-1">
                                            <div class="d-flex align-items-center justify-content-end">
                                                <button class="border-0 btn btn-icon bg-transparent fs-16 text-dark" data-bs-toggle="modal" data-bs-target="#edit_customer"><i class="icon-pencil-line"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- TAb 4 -->
                                <div class="tab-pane show" id="order-tab4">

                                    <!-- Start row -->
                                    <div class="row g-2">
                                        <div class="col-lg-5">
                                            <vue-select 
                                                :options="Table"
                                                v-model="selectedOne"
                                                placeholder="Select"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="input-item d-flex align-items-center gap-2">
                                                <input type="text" class="form-control" placeholder="Select Customer">
                                                <button class="btn btn-primary btn-icon" data-bs-toggle="modal" data-bs-target="#add_customer"><i class="icon-plus"></i></button>
                                            </div>
                                        </div>
                                        <div class="col-lg-1">
                                            <div class="d-flex align-items-center justify-content-end">
                                                <button class="border-0 btn btn-icon bg-transparent fs-16 text-dark" data-bs-toggle="modal" data-bs-target="#edit_customer"><i class="icon-pencil-line"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <!-- Ordered Item -->
                        <div class="p-3 border-bottom">
                            <div class="d-flex align-items-center justify-content-between mb-4 gap-2 flex-wrap">
                                <h6 class="mb-0">Ordered Menus</h6>                                    
                                <p class="mb-0 d-flex align-items-center text-dark">Total Menus : <span class="d-flex align-items-center justify-content-center fs-14 btn btn-icon btn-xs rounded-circle border flex-shrink-0 ms-1 text-dark">4</span></p>
                            </div>

                            <div class="menu-item active p-2 rounded border shadow mb-3">
                                <div class="d-flex align-items-center justify-content-between flex-wrap flex-xl-nowrap gap-2">
                                    <a href="#" class="d-flex align-items-center overflow-hidden" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                        <div class="avatar avatar-lg flex-shrink-0 me-2">
                                            <img src="@/assets/img/items/food-04.jpg" alt="food-img" class="img-fluid rounded">
                                        </div>
                                        <div class="overflow-hidden">
                                            <h6 class="mb-1 fs-13 fw-semibold text-truncate mb-2">Chicken Taco</h6>
                                            <p class="badge badge-md bg-light text-dark mb-0">Medium</p>
                                        </div>
                                    </a>
                                    <div class="d-flex align-items-center gap-2 flex-shrink-0">
                                        <pos-counter></pos-counter>
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#add_notes" class="btn btn-xs fs-12 py-1 px-2 btn-white">Add Note</a>
                                        <a href="#" class="btn btn-xs btn-icon fs-12 btn-light close-icon rounded-circle"><i class="icon-x"></i></a>
                                    </div>
                                </div>
                                <div id="collapseOne" class="collapse show">
                                    <div class="pt-2 mt-2 border-top">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="text-center">
                                                <span class="fs-12 mb-1 d-block fw-medium text-dark">Item Rate</span>
                                                <p class="mb-0 fs-14 fw-normal">$33</p>
                                            </div>
                                            <div class="text-center">
                                                <span class="fs-12 mb-1 d-block fw-medium text-dark">Amount</span>
                                                <p class="mb-0 fs-14 fw-normal">$66</p>
                                            </div>
                                            <div class="text-center">
                                                <span class="fs-12 mb-1 d-block fw-medium text-dark">Total</span>
                                                <p class="mb-0 fs-14 fw-semibold text-dark">$66</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="menu-item p-2 rounded border shadow mb-3">
                                <div class="d-flex align-items-center justify-content-between flex-wrap flex-xl-nowrap gap-2">
                                    <a href="#" class="d-flex align-items-center overflow-hidden" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                        <div class="avatar avatar-lg flex-shrink-0 me-2">
                                            <img src="@/assets/img/items/food-01.jpg" alt="food-img" class="img-fluid rounded">
                                        </div>
                                        <div class="overflow-hidden">
                                            <h6 class="mb-1 fs-13 fw-semibold text-truncate mb-2">Grilled Chicken</h6>
                                            <p class="badge badge-md bg-light text-dark mb-0">Small: 250 gms</p>
                                        </div>
                                    </a>
                                    <div class="d-flex align-items-center gap-2 justify-content-end flex-shrink-0">
                                        <pos-counter></pos-counter>
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#add_notes" class="btn btn-xs fs-12 py-1 px-2 btn-white">Add Note</a>
                                        <a href="#" class="btn btn-xs btn-icon fs-12 btn-light close-icon rounded-circle"><i class="icon-x"></i></a>
                                    </div>
                                </div>
                                <div id="collapseTwo" class="collapse">
                                    <div class="pt-2 mt-2 border-top">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="text-center">
                                                <span class="fs-12 mb-1 d-block fw-medium text-dark">Item Rate</span>
                                                <p class="mb-0 fs-14 fw-normal">$13</p>
                                            </div>
                                            <div class="text-center">
                                                <span class="fs-12 mb-1 d-block fw-medium text-dark">Amount</span>
                                                <p class="mb-0 fs-14 fw-normal">$26</p>
                                            </div>
                                            <div class="text-center">
                                                <span class="fs-12 mb-1 d-block fw-medium text-dark">Total</span>
                                                <p class="mb-0 fs-14 fw-semibold text-dark">$46</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="menu-item p-2 rounded border shadow mb-3">
                                <div class="d-flex align-items-center justify-content-between flex-wrap flex-xl-nowrap gap-2">
                                    <a href="#" class="d-flex align-items-center overflow-hidden" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                        <div class="avatar avatar-lg flex-shrink-0 me-2">
                                            <img src="@/assets/img/items/food-20.jpg" alt="food-img" class="img-fluid rounded">
                                        </div>
                                        <div class="overflow-hidden">
                                            <h6 class="mb-1 fs-13 fw-semibold text-truncate mb-2">Lobster Thermidor</h6>
                                            <p class="badge badge-md bg-light text-dark mb-0">Half Lobster : 300 gms</p>
                                        </div>
                                    </a>
                                    <div class="d-flex align-items-center gap-2 justify-content-end flex-shrink-0">
                                        <pos-counter></pos-counter>
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#add_notes" class="btn btn-xs fs-12 py-1 px-2 btn-white">Add Note</a>
                                        <a href="#" class="btn btn-xs btn-icon fs-12 btn-light close-icon rounded-circle"><i class="icon-x"></i></a>
                                    </div>
                                </div>
                                <div id="collapseThree" class="collapse">
                                    <div class="pt-2 mt-2 border-top">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="text-center">
                                                <span class="fs-12 mb-1 d-block fw-medium text-dark">Item Rate</span>
                                                <p class="mb-0 fs-14 fw-normal">$33</p>
                                            </div>
                                            <div class="text-center">
                                                <span class="fs-12 mb-1 d-block fw-medium text-dark">Amount</span>
                                                <p class="mb-0 fs-14 fw-normal">$66</p>
                                            </div>
                                            <div class="text-center">
                                                <span class="fs-12 mb-1 d-block fw-medium text-dark">Total</span>
                                                <p class="mb-0 fs-14 fw-semibold text-dark">$66</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="menu-item p-2 rounded border shadow mb-3">
                                <div class="d-flex align-items-center justify-content-between flex-wrap flex-xl-nowrap gap-2">
                                    <a href="#" class="d-flex align-items-center overflow-hidden" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                                        <div class="avatar avatar-lg flex-shrink-0 me-2">
                                            <img src="@/assets/img/items/food-08.jpg" alt="food-img" class="img-fluid rounded">
                                        </div>
                                        <div class="overflow-hidden">
                                            <h6 class="mb-1 fs-13 fw-semibold text-truncate mb-2">Spinach & Corn Pizza</h6>
                                            <p class="badge badge-md bg-light text-dark mb-0">Small: 6 inches</p>
                                        </div>
                                    </a>
                                    <div class="d-flex align-items-center gap-2 justify-content-end flex-shrink-0">
                                        <pos-counter></pos-counter>
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#add_notes" class="btn btn-xs fs-12 py-1 px-2 btn-white">Add Note</a>
                                        <a href="#" class="btn btn-xs btn-icon fs-12 btn-light close-icon rounded-circle"><i class="icon-x"></i></a>
                                    </div>
                                </div>
                                <div id="collapseFour" class="collapse">
                                    <div class="pt-2 mt-2 border-top">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="text-center">
                                                <span class="fs-12 mb-1 d-block fw-medium text-dark">Item Rate</span>
                                                <p class="mb-0 fs-14 fw-normal">$30</p>
                                            </div>
                                            <div class="text-center">
                                                <span class="fs-12 mb-1 d-block fw-medium text-dark">Amount</span>
                                                <p class="mb-0 fs-14 fw-normal">$30</p>
                                            </div>
                                            <div class="text-center">
                                                <span class="fs-12 mb-1 d-block fw-medium text-dark">Total</span>
                                                <p class="mb-0 fs-14 fw-semibold text-dark">$30</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="price-item">
                                <h6 class="mb-3">Payment Summary</h6>
                                <p class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-2">Sub Total<span class="fw-medium text-dark">$267</span> </p>
                                <p class="fs-14 fw-normal d-flex align-items-center justify-content-between mb-0">Tax (18%)<span class="fw-medium text-dark">$26.7</span> </p>
                            </div>
                        </div>

                        <!-- Paid Item -->
                        <div class="p-3 border-bottom d-flex align-items-center justify-content-between gap-2 flex-wrap">
                            <h5 class="mb-0">Amount to be Paid</h5>
                            <h5 class="mb-0">$274</h5>
                        </div>

                        <!-- Order Item -->
                        <div class="p-3">
                            <a href="#" class="btn btn-primary w-100 mb-4" data-bs-toggle="modal" data-bs-target="#order_modal">Place an Order</a>
                            <!-- start row -->
                            <div class="row g-3">
                                <div class="col-sm-4">
                                    <a href="#" class="btn btn-outline-light btn-sm d-flex align-items-center gap-1 shadow-sm" data-bs-toggle="modal" data-bs-target="#print_reciept"><i class="icon-printer"></i>Print</a>
                                </div>
                                <div class="col-sm-4">
                                    <a href="#" class="btn btn-outline-light btn-sm d-flex align-items-center gap-1 shadow-sm"  data-bs-toggle="modal" data-bs-target="#view_invoices"><i class="icon-file-chart-column"></i>Invoice</a>
                                </div>
                                <div class="col-sm-4">
                                    <a href="#" class="btn btn-outline-light btn-sm d-flex align-items-center gap-1 shadow-sm" data-bs-toggle="modal" data-bs-target="#draft_details"><i class="icon-files"></i>Draft</a>
                                </div>
                                <div class="col-sm-4">
                                    <a href="#" class="btn btn-outline-light btn-sm d-flex align-items-center gap-1 shadow-sm" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-x"></i>Cancel</a>
                                </div>
                                <div class="col-sm-4">
                                    <a href="#" class="btn btn-outline-light btn-sm d-flex align-items-center gap-1 shadow-sm" data-bs-toggle="modal" data-bs-target="#add_notes"><i class="icon-zap"></i>Void</a>
                                </div>
                                <div class="col-sm-4">
                                    <a href="#" class="btn btn-outline-light btn-sm d-flex align-items-center gap-1 shadow-sm" data-bs-toggle="modal" data-bs-target="#transactions_details"><i class="icon-file-chart-line"></i>Tranactions</a>
                                </div>
                            </div>
                            <!-- end row -->

                        </div>
                    </div>
                </div>
            </div>
            <!-- end row -->

        </div>
    </div>
    <!-- Page Start-->

    <pos-modal></pos-modal>
</template>

<script>
import { defineComponent, onMounted, onBeforeUnmount } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
    components: {
        Carousel,
        Slide,
    },
    data(){
        return {
            activeTab: "all",
            selected: "Waiter",
            selectedOne: "Table",
            selectedTwo: "Select Customer",
            Option: [
                { label: "Waiter", value: "Waiter"},
                { label: "Andrew Fletcher", value: "Andrew Fletcher"},
                { label: "Morgan Evans", value: "Morgan Evans"},
                { label: "Maria Gonzalez", value: "Maria Gonzalez"},
            ],
            Table: [
                { label: "Table", value: "Table"},
                { label: "Table 1", value: "Table 1"},
                { label: "Table 2", value: "Table 2"},
                { label: "Table 3", value: "Table 3"},
            ],
            Customer: [
                { label: "Select Customer", value: "Select Customer"},
                { label: "Sue Allen", value: "Sue Allen"},
                { label: "Frank Barrett", value: "Frank Barrett"},
                { label: "Jim Vickers", value: "Jim Vickers"},
            ],
            settings: {
                itemsToShow: 4,
                snapAlign: "center",
                loop: true,
            },
            breakpoints: {
                575: {
                    itemsToShow: 1,
                    snapAlign: "center",
                },
                767: {
                    itemsToShow: 2,
                    snapAlign: "center",
                },
                991: {
                    itemsToShow: 5,
                    snapAlign: "center",
                },
                1024: {
                    itemsToShow: 4,
                    snapAlign: "start",
                },
            },
        }
    },
    methods: {
        moveNext() {
            this.$refs.categoryCarousel.next();
        },
        movePrev() {
            this.$refs.categoryCarousel.prev();
        },
        moveAllNext() {
            switch (this.activeTab) {
                case "all":
                    this.$refs.AllCarousel.next();
                    break;
                case "dinein":
                    this.$refs.DineInCarousel.next();
                    break;
                case "takeaway":
                    this.$refs.TakeAwayCarousel.next();
                    break;
                case "delivery":
                    this.$refs.DeliveryCarousel.next();
                    break;
                case "table":
                    this.$refs.AllTableCarousel.next();
                    break;
            }
        },
        moveAllPrev() {
            switch (this.activeTab) {
                case "all":
                    this.$refs.AllCarousel.prev();
                    break;
                case "dinein":
                    this.$refs.DineInCarousel.prev();
                    break;
                case "takeaway":
                    this.$refs.TakeAwayCarousel.prev();
                    break;
                case "delivery":
                    this.$refs.DeliveryCarousel.prev();
                    break;
                case "table":
                    this.$refs.AllTableCarousel.prev();
                    break;
            }
        },
    },
    setup() {
        onMounted(() => {
            document.body.classList.add("pos-page");
        });
        onBeforeUnmount(() => {
            document.body.classList.remove("pos-page");
        });
    },
});
</script>