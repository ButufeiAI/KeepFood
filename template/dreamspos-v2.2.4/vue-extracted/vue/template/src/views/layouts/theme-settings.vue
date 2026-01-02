<template>
    <div class="sidebar-contact ">
        <div class="toggle-theme"  data-bs-toggle="offcanvas" data-bs-target="#theme-setting"><i class="fa fa-cog fa-w-16 fa-spin"></i></div>
    </div>
    <div class="sidebar-themesettings offcanvas offcanvas-end" id="theme-setting">
        <div class="offcanvas-header d-flex align-items-center justify-content-between bg-dark">
            <div>
                <h3 class="mb-1 text-white">Theme Customizer</h3>
                <p class="text-light">Choose your themes & layouts etc.</p>
            </div>
            <a href="#" class="custom-btn-close d-flex align-items-center justify-content-center text-white"  data-bs-dismiss="offcanvas"><i class="ti ti-x"></i></a>
        </div>
        <div class="themecard-body offcanvas-body">
            <div class="accordion accordion-customicon1 accordions-items-seperate" id="settingtheme">
                <div class="accordion-item border px-3 layout-select">
                    <h2 class="accordion-header">
                        <button class="accordion-button text-dark bg-transparent fs-16 px-0 py-3" type="button" data-bs-toggle="collapse" data-bs-target="#layoutsetting" aria-expanded="true" aria-controls="collapsecustomicon1One">
                            Select Layouts
                        </button>
                    </h2>
                    <div id="layoutsetting" class="accordion-collapse collapse show"  >
                        <div class="accordion-body border-top px-0 py-3">
                            <div class="row gx-3">
                                <div class="col-4">
                                    <div class="theme-layout mb-3" @click="handleUpdateTheme('data-layout', 'default')">
                                        <input type="radio" name="LayoutTheme" id="defaultLayout" value="default" :checked="themeSettings['data-layout'] === 'default'">
                                        <label for="defaultLayout">
                                            <span class="d-block mb-2 layout-img">
                                                <img src="@/assets/img/theme/default.svg" alt="img">
                                            </span>                                     
                                            <span class="layout-type">Default</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="theme-layout mb-3" @click="handleUpdateTheme('data-layout', 'mini')">
                                        <input type="radio" name="LayoutTheme" id="miniLayout" value="mini" :checked="themeSettings['data-layout'] === 'mini'">
                                        <label for="miniLayout">
                                            <span class="d-block mb-2 layout-img">
                                                <img src="@/assets/img/theme/mini.svg" alt="img">
                                            </span>                                    
                                            <span class="layout-type">Mini</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="theme-layout mb-3" @click="handleUpdateTheme('data-layout', 'twocolumn')">
                                        <input type="radio" name="LayoutTheme" id="twocolumnLayout" value="twocolumn" :checked="themeSettings['data-layout'] === 'twocolumn'">
                                        <label for="twocolumnLayout">
                                            <span class="d-block mb-2 layout-img">
                                                <img src="@/assets/img/theme/two-column.svg" alt="img">
                                            </span>                                    
                                            <span class="layout-type">Two Column</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="theme-layout mb-3" @click="handleUpdateTheme('data-layout', 'horizontal')">
                                        <input type="radio" name="LayoutTheme" id="horizontalLayout" value="horizontal" :checked="themeSettings['data-layout'] === 'horizontal'">
                                        <label for="horizontalLayout">
                                            <span class="d-block mb-2 layout-img">
                                                <img src="@/assets/img/theme/horizontal.svg" alt="img">
                                            </span>                                    
                                            <span class="layout-type">Horizontal</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="theme-layout mb-3" @click="handleUpdateTheme('data-layout', 'detached')">
                                        <input type="radio" name="LayoutTheme" id="detachedLayout" value="detached" :checked="themeSettings['data-layout'] === 'detached'">
                                        <label for="detachedLayout">
                                            <span class="d-block mb-2 layout-img">
                                                <img src="@/assets/img/theme/detached.svg" alt="img">
                                            </span>                                    
                                            <span class="layout-type">Detached</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="theme-layout mb-3" @click="handleUpdateTheme('data-layout', 'without-header')">
                                        <input type="radio" name="LayoutTheme" id="without-headerLayout" value="without-header" :checked="themeSettings['data-layout'] === 'without-header'">
                                        <label for="without-headerLayout">
                                            <span class="d-block mb-2 layout-img">
                                                <img src="@/assets/img/theme/without-header.svg" alt="img">
                                            </span>                                    
                                            <span class="layout-type">Without Header</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="theme-layout mb-3" @click="handleRTLNavigation">
                                        <span class="d-block mb-2 layout-img">
                                            <img src="@/assets/img/theme/rtl.svg" alt="img">
                                        </span>                                    
                                        <span class="layout-type d-block">RTL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div class="accordion-item border px-3 layout-select">
                    <h2 class="accordion-header">
                        <button class="accordion-button text-dark fs-16 bg-transparent px-0 py-3" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarsetting" aria-expanded="true">
                            Layout Width
                        </button>
                    </h2>
                    <div id="sidebarsetting" class="accordion-collapse collapse show">
                        <div class="accordion-body px-0 py-3 border-top">
                            <div class="d-flex align-items-center">
                                <div class="theme-width m-1 me-2" @click="handleUpdateTheme('data-width', 'fluid')">
                                    <input type="radio" name="width" id="fluidWidth" value="fluid" :checked="themeSettings['data-width'] === 'fluid'">
                                    <label for="fluidWidth" class="d-block rounded fs-12">
                                        <i class="ti ti-layout-list me-1"></i>
                                        Fluid Layout
                                    </label>
                                </div>
                                <div class="theme-width m-1" @click="handleUpdateTheme('data-width', 'box')">
                                    <input type="radio" name="width" id="boxWidth" value="box" :checked="themeSettings['data-width'] === 'box'">
                                    <label for="boxWidth" class="d-block rounded fs-12">
                                    <i class="ti ti-layout-distribute-horizontal me-1"></i>
                                        Boxed Layout
                                    </label>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
                <div class="accordion-item border px-3">
                    <h2 class="accordion-header">
                        <button class="accordion-button text-dark fs-16 px-0 py-3 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#colorsetting" aria-expanded="true">
                            Top Bar Color
                        </button>
                    </h2>
                    <div id="colorsetting" class="accordion-collapse collapse show"	>
                        <div class="accordion-body pb-1 px-0 py-3 border-top">
                        <p class="mb-2 text-gray-9">Solid Colors</p>
                        <div class="d-flex align-items-center flex-wrap">
                                <div class="theme-colorselect theme-colorselect-rounded mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'white')">
                                    <input type="radio" name="topbar" id="whiteTopbar" value="white" :checked="themeSettings['data-topbar'] === 'white'">
                                    <label for="whiteTopbar" class="bg-white"></label>
                                </div>
                                <div class="theme-colorselect theme-colorselect-rounded mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'topbarcolorone')">
                                    <input type="radio" name="topbar" id="darkaquaTopbar" value="topbarcolorone" :checked="themeSettings['data-topbar'] === 'topbarcolorone'">
                                    <label for="darkaquaTopbar" class=" bg-sidebar-color-1"></label>
                                </div>
                                <div class="theme-colorselect theme-colorselect-rounded mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'topbarcolortwo')">
                                    <input type="radio" name="topbar" id="whiterockTopbar" value="topbarcolortwo" :checked="themeSettings['data-topbar'] === 'topbarcolortwo'">
                                    <label for="whiterockTopbar" class=" bg-sidebar-color-2"></label>
                                </div>
                                <div class="theme-colorselect theme-colorselect-rounded mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'topbarcolorthree')">
                                    <input type="radio" name="topbar" id="rockblueTopbar" value="topbarcolorthree" :checked="themeSettings['data-topbar'] === 'topbarcolorthree'">
                                    <label for="rockblueTopbar" class=" bg-sidebar-color-3"></label>
                                </div>
                                <div class="theme-colorselect theme-colorselect-rounded mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'topbarcolorfour')">
                                    <input type="radio" name="topbar" id="bluehazeTopbar" value="topbarcolorfour" :checked="themeSettings['data-topbar'] === 'topbarcolorfour'">
                                    <label for="bluehazeTopbar" class=" bg-sidebar-color-4"></label>
                                </div>              
                                <div class="theme-colorselect theme-colorselect-rounded mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'topbarcolorfive')">
                                    <input type="radio" name="topbar" id="topbar-color-5" value="topbarcolorfive" :checked="themeSettings['data-topbar'] === 'topbarcolorfive'">
                                    <label for="topbar-color-5" class="bg-sidebar-color-5"></label>
                                </div>              
                                <div class="theme-colorselect theme-colorselect-rounded mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'topbarcolorsix')">
                                    <input type="radio" name="topbar" id="topbar-color-6" value="topbarcolorsix" :checked="themeSettings['data-topbar'] === 'topbarcolorsix'">
                                    <label for="topbar-color-6" class="bg-sidebar-color-6"></label>
                                </div>              
                                <div class="theme-colorselect theme-colorselect-rounded mb-3 mt-0">
                                    <div class="theme-topbar"></div>
                                    <div class="pickr-topbar">
                                        <ColorPicker
                                            :value="customTopbarColor"
                                            :checked="themeSettings['data-topbar'] === 'primary'"
                                            :format="customTopbarFormat"
                                            @change="handleTopbarColorChange"
                                            @format-change="handleTopbarFormatChange"
                                        />
                                    </div>
                                </div>
                            </div>
                            <p class="mb-2 text-gray-9">Gradient Colors</p>
                        <div class="d-flex align-items-center flex-wrap">
                                <div class="theme-colorselect theme-colorselect-rounded mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'topbarcolorseven')">
                                    <input type="radio" name="topbar" id="topbar-color-7" value="topbarcolorseven" :checked="themeSettings['data-topbar'] === 'topbarcolorseven'">
                                    <label for="topbar-color-7" class="bg-sidebar-color-7"></label>
                                </div>
                                <div class="theme-colorselect theme-colorselect-rounded mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'topbarcoloreight')">
                                    <input type="radio" name="topbar" id="topbar-color-8" value="topbarcoloreight" :checked="themeSettings['data-topbar'] === 'topbarcoloreight'">
                                    <label for="topbar-color-8" class=" bg-sidebar-color-8"></label>
                                </div>
                                <div class="theme-colorselect theme-colorselect-rounded mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'topbarcolornine')">
                                    <input type="radio" name="topbar" id="topbar-color-9" value="topbarcolornine" :checked="themeSettings['data-topbar'] === 'topbarcolornine'">
                                    <label for="topbar-color-9" class=" bg-sidebar-color-9"></label>
                                </div>
                                <div class="theme-colorselect theme-colorselect-rounded mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'topbarcolorten')">
                                    <input type="radio" name="topbar" id="topbar-color-10" value="topbarcolorten" :checked="themeSettings['data-topbar'] === 'topbarcolorten'">
                                    <label for="topbar-color-10" class=" bg-sidebar-color-10"></label>
                                </div>
                                <div class="theme-colorselect theme-colorselect-rounded mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'topbarcoloreleven')">
                                    <input type="radio" name="topbar" id="topbar-color-11" value="topbarcoloreleven" :checked="themeSettings['data-topbar'] === 'topbarcoloreleven'">
                                    <label for="topbar-color-11" class=" bg-sidebar-color-11"></label>
                                </div> 
                                <div class="theme-colorselect theme-colorselect-rounded mb-3 me-3"  @click="handleUpdateTheme('data-topbar', 'topbarcolortwelve')">
                                    <input type="radio" name="topbar" id="topbar-color-12" value="topbarcolortwelve" :checked="themeSettings['data-topbar'] === 'topbarcolortwelve'">
                                    <label for="topbar-color-12" class=" bg-sidebar-color-12"></label>
                                </div> 
                                <div class="theme-colorselect theme-colorselect-rounded mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'topbarcolorthirteen')">
                                    <input type="radio" name="topbar" id="topbar-color-13" value="topbarcolorthirteen" :checked="themeSettings['data-topbar'] === 'topbarcolorthirteen'">
                                    <label for="topbar-color-13" class=" bg-sidebar-color-13"></label>
                                </div> 
                                <div class="theme-colorselect theme-colorselect-rounded mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'topbarcolorfourteen')">
                                    <input type="radio" name="topbar" id="topbar-color-14" value="topbarcolorfourteen" :checked="themeSettings['data-topbar'] === 'topbarcolorfourteen'">
                                    <label for="topbar-color-14" class=" bg-sidebar-color-14"></label>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div> 
                <div class="accordion-item border px-3 layout-select">
                    <h2 class="accordion-header">
                        <button class="accordion-button text-dark fs-16 px-0 py-3 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarsettings" aria-expanded="true">
                            Sidebar Color
                        </button>
                    </h2>
                    <div id="sidebarsettings" class="accordion-collapse collapse show">
                        <div class="accordion-body px-0 py-3 border-top">
                        <p class="mb-2 text-gray-9">Solid Colors</p>
                        <div class="d-flex align-items-center">
                                <div class="theme-colorselect m-1 me-3" @click="handleUpdateTheme('data-sidebar', 'light')">
                                    <input type="radio" name="sidebar" id="lightSidebar" value="light" :checked="themeSettings['data-sidebar'] === 'light'">
                                    <label for="lightSidebar" class="d-block mb-2">
                                    </label>
                                </div>
                                <div class="theme-colorselect me-3" @click="handleUpdateTheme('data-sidebar', 'sidebarcolorone')">
                                    <input type="radio" name="sidebar" id="bgcolorSidebar" value="sidebarcolorone" :checked="themeSettings['data-sidebar'] === 'sidebarcolorone'">
                                    <label for="bgcolorSidebar" class="d-block bg-sidebar-color-1 mb-2">
                                    </label>
                                </div>
                                <div class="theme-colorselect me-3" @click="handleUpdateTheme('data-sidebar', 'sidebarcolortwo')">
                                    <input type="radio" name="sidebar" id="bgcolor2Sidebar" value="sidebarcolortwo" :checked="themeSettings['data-sidebar'] === 'sidebarcolortwo'">
                                    <label for="bgcolor2Sidebar" class="d-block bg-sidebar-color-2 mb-2">
                                    </label>
                                </div>
                                <div class="theme-colorselect me-3" @click="handleUpdateTheme('data-sidebar', 'sidebarcolorthree')">
                                    <input type="radio" name="sidebar" id="bgcolor3Sidebar" value="sidebarcolorthree" :checked="themeSettings['data-sidebar'] === 'sidebarcolorthree'">
                                    <label for="bgcolor3Sidebar" class="d-block bg-sidebar-color-3 mb-2">
                                    </label>
                                </div>
                                <div class="theme-colorselect me-3" @click="handleUpdateTheme('data-sidebar', 'sidebarcolorfour')">
                                    <input type="radio" name="sidebar" id="bgcolor4Sidebar" value="sidebarcolorfour" :checked="themeSettings['data-sidebar'] === 'sidebarcolorfour'">
                                    <label for="bgcolor4Sidebar" class="d-block bg-sidebar-color-4 mb-2">
                                    </label>
                                </div>
                                <div class="theme-colorselect me-3" @click="handleUpdateTheme('data-sidebar', 'sidebarcolorfive')">
                                    <input type="radio" name="sidebar" id="bgcolor5Sidebar" value="sidebarcolorfive" :checked="themeSettings['data-sidebar'] === 'sidebarcolorfive'">
                                    <label for="bgcolor5Sidebar" class="d-block bg-sidebar-color-5 mb-2">
                                    </label>
                                </div>                            
                                <div class="theme-colorselect me-3" @click="handleUpdateTheme('data-sidebar', 'sidebarcolorsix')">
                                    <input type="radio" name="sidebar" id="bgcolor6Sidebar" value="sidebarcolorsix" :checked="themeSettings['data-sidebar'] === 'sidebarcolorsix'">
                                    <label for="bgcolor6Sidebar" class="d-block bg-sidebar-color-6 mb-2">
                                    </label>
                                </div>                          
                                <div class="theme-colorselect mt-0 mb-2">
                                    <div class="theme-container-background"></div>
                                    <div class="pickr-container-background">
                                        <ColorPicker
                                            :value="customSidebarColor"
                                            :checked="themeSettings['data-sidebar'] === 'primary'"
                                            :format="customSidebarFormat"
                                            @change="handleSidebarColorChange"
                                            @format-change="handleSidebarFormatChange"
                                        />
                                    </div>
                                    
                                </div>
                            </div>
                            <p class="mb-2 text-gray-9">Gradient Colors</p>
                            <div class="d-flex align-items-center">
                                <div class="theme-colorselect m-1 me-3" @click="handleUpdateTheme('data-sidebar', 'sidebarcolorseven')">
                                    <input type="radio" name="sidebar" id="bgcolor7Sidebar" value="sidebarcolorseven" :checked="themeSettings['data-sidebar'] === 'sidebarcolorseven'">
                                    <label for="bgcolor7Sidebar" class="d-block bg-sidebar-color-7 mb-2">
                                    </label>
                                </div>
                                <div class="theme-colorselect me-3" @click="handleUpdateTheme('data-sidebar', 'sidebarcoloreight')">
                                    <input type="radio" name="sidebar" id="bgcolor8Sidebar" value="sidebarcoloreight" :checked="themeSettings['data-sidebar'] === 'sidebarcoloreight'">
                                    <label for="bgcolor8Sidebar" class="d-block bg-sidebar-color-8 mb-2">
                                    </label>
                                </div>
                                <div class="theme-colorselect me-3" @click="handleUpdateTheme('data-sidebar', 'sidebarcolornine')">
                                    <input type="radio" name="sidebar" id="bgcolor9Sidebar" value="sidebarcolornine" :checked="themeSettings['data-sidebar'] === 'sidebarcolornine'">
                                    <label for="bgcolor9Sidebar" class="d-block bg-sidebar-color-9 mb-2">
                                    </label>
                                </div>
                                <div class="theme-colorselect me-3" @click="handleUpdateTheme('data-sidebar', 'sidebarcolorten')">
                                    <input type="radio" name="sidebar" id="bgcolor10Sidebar" value="sidebarcolorten" :checked="themeSettings['data-sidebar'] === 'sidebarcolorten'">
                                    <label for="bgcolor10Sidebar" class="d-block bg-sidebar-color-10 mb-2">
                                    </label>
                                </div>
                                <div class="theme-colorselect me-3" @click="handleUpdateTheme('data-sidebar', 'sidebarcoloreleven')">
                                    <input type="radio" name="sidebar" id="bgcolor11Sidebar" value="sidebarcoloreleven" :checked="themeSettings['data-sidebar'] === 'sidebarcoloreleven'">
                                    <label for="bgcolor11Sidebar" class="d-block bg-sidebar-color-11 mb-2">
                                    </label>
                                </div>  
                                <div class="theme-colorselect me-3" @click="handleUpdateTheme('data-sidebar', 'sidebarcolortwelve')">
                                    <input type="radio" name="sidebar" id="bgcolor12Sidebar" value="sidebarcolortwelve" :checked="themeSettings['data-sidebar'] === 'sidebarcolortwelve'">
                                    <label for="bgcolor12Sidebar" class="d-block bg-sidebar-color-12 mb-2">
                                    </label>
                                </div>  
                                <div class="theme-colorselect me-3" @click="handleUpdateTheme('data-sidebar', 'sidebarcolorthirteen')">
                                    <input type="radio" name="sidebar" id="bgcolor13Sidebar" value="sidebarcolorthirteen" :checked="themeSettings['data-sidebar'] === 'sidebarcolorthirteen'">
                                    <label for="bgcolor13Sidebar" class="d-block bg-sidebar-color-13 mb-2">
                                    </label>
                                </div>  
                                <div class="theme-colorselect" @click="handleUpdateTheme('data-sidebar', 'sidebarcolorfourteen')">
                                    <input type="radio" name="sidebar" id="bgcolor14Sidebar" value="sidebarcolorfourteen" :checked="themeSettings['data-sidebar'] === 'sidebarcolorfourteen'">
                                    <label for="bgcolor14Sidebar" class="d-block bg-sidebar-color-14 mb-2">
                                    </label>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>   
                <div class="accordion-item border px-3">
                    <h2 class="accordion-header">
                        <button class="accordion-button text-dark fs-16 px-0 py-3 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#modesetting" aria-expanded="true">
                        Theme Mode
                        </button>
                    </h2>
                    <div id="modesetting" class="accordion-collapse collapse show">
                        <div class="accordion-body px-0 py3 border-top">
                        <div class="d-flex align-items-center">
                                <div class="theme-mode flex-fill text-center w-100 me-3" @click="handleUpdateTheme('data-theme', 'light')">
                                    <input type="radio" name="theme" id="lightTheme" value="light" :checked="themeSettings['data-theme'] === 'light'">
                                    <label for="lightTheme" class="rounded fw-medium w-100">                            
                                        <span class="d-inline-flex rounded me-2"><i class="ti ti-sun-filled"></i></span>Light
                                    </label>
                                </div>
                                <div class="theme-mode flex-fill text-center w-100 me-3" @click="handleUpdateTheme('data-theme', 'dark')">
                                    <input type="radio" name="theme" id="darkTheme" value="dark" :checked="themeSettings['data-theme'] === 'dark'">
                                    <label for="darkTheme" class="rounded fw-medium w-100">                         
                                        <span class="d-inline-flex rounded me-2"><i class="ti ti-moon-filled"></i></span>Dark
                                    </label>
                                </div>
                                <div class="theme-mode flex-fill w-100 text-center" @click="handleUpdateTheme('data-theme', 'system')">
                                    <input type="radio" name="theme" id="systemTheme" value="system" :checked="themeSettings['data-theme'] === 'system'">
                                    <label for="systemTheme" class="rounded fw-medium w-100">                         
                                        <span class="d-inline-flex rounded me-2"><i class="ti ti-device-laptop"></i></span>System 
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    	    
                <div class="accordion-item border px-3 layout-select">
                    <h2 class="accordion-header">
                        <button class="accordion-button text-dark fs-16 px-0 py-3 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarbgsetting" aria-expanded="true">
                            Sidebar Background
                        </button>
                    </h2>
                    <div id="sidebarbgsetting" class="accordion-collapse collapse show">
                        <div class="accordion-body pb-1 px-0 py-3 border-top">
                        <div class="d-flex align-items-center flex-wrap">
                                <div class="theme-sidebarbg me-3 mb-3" @click="handleUpdateTheme('data-sidebarbg', 'sidebarbg1')">
                                    <input type="radio" name="sidebarbg" id="sidebarBg1" value="sidebarbg1" :checked="themeSettings['data-sidebarbg'] === 'sidebarbg1'">
                                    <label for="sidebarBg1" class="d-block rounded">
                                        <img src="@/assets/img/theme/sidebar-bg-01.svg" alt="img" class="rounded">
                                    </label>
                                </div>
                                <div class="theme-sidebarbg me-3 mb-3" @click="handleUpdateTheme('data-sidebarbg', 'sidebarbg2')">
                                    <input type="radio" name="sidebarbg" id="sidebarBg2" value="sidebarbg2" :checked="themeSettings['data-sidebarbg'] === 'sidebarbg2'">
                                    <label for="sidebarBg2" class="d-block rounded">
                                        <img src="@/assets/img/theme/sidebar-bg-02.svg" alt="img" class="rounded">
                                    </label>
                                </div>
                                <div class="theme-sidebarbg me-3 mb-3" @click="handleUpdateTheme('data-sidebarbg', 'sidebarbg3')">
                                    <input type="radio" name="sidebarbg" id="sidebarBg3" value="sidebarbg3" :checked="themeSettings['data-sidebarbg'] === 'sidebarbg3'">
                                    <label for="sidebarBg3" class="d-block rounded">
                                        <img src="@/assets/img/theme/sidebar-bg-03.svg" alt="img" class="rounded">
                                    </label>
                                </div>
                                <div class="theme-sidebarbg me-3 mb-3" @click="handleUpdateTheme('data-sidebarbg', 'sidebarbg4')">
                                    <input type="radio" name="sidebarbg" id="sidebarBg4" value="sidebarbg4" :checked="themeSettings['data-sidebarbg'] === 'sidebarbg4'">
                                    <label for="sidebarBg4" class="d-block rounded">
                                        <img src="@/assets/img/theme/sidebar-bg-04.svg" alt="img" class="rounded">
                                    </label>
                                </div>
                                <div class="theme-sidebarbg me-3 mb-3" @click="handleUpdateTheme('data-sidebarbg', 'sidebarbg5')">
                                    <input type="radio" name="sidebarbg" id="sidebarBg5" value="sidebarbg5" :checked="themeSettings['data-sidebarbg'] === 'sidebarbg5'">
                                    <label for="sidebarBg5" class="d-block rounded">
                                        <img src="@/assets/img/theme/sidebar-bg-05.svg" alt="img" class="rounded">
                                    </label>
                                </div>
                                <div class="theme-sidebarbg me-3 mb-3" @click="handleUpdateTheme('data-sidebarbg', 'sidebarbg6')">
                                    <input type="radio" name="sidebarbg" id="sidebarBg6" value="sidebarbg6" :checked="themeSettings['data-sidebarbg'] === 'sidebarbg6'">
                                    <label for="sidebarBg6" class="d-block rounded">
                                        <img src="@/assets/img/theme/sidebar-bg-06.svg" alt="img" class="rounded">
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
                <div class="accordion-item border px-3">
                    <h2 class="accordion-header">
                        <button class="accordion-button text-dark fs-16 px-0 py-3 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarcolor" aria-expanded="true">
                            Theme Colors
                        </button>
                    </h2>
                    <div id="sidebarcolor" class="accordion-collapse collapse show"	 >
                        <div class="accordion-body pb-2 px-0 py-3 border-top">
                        <div class="d-flex align-items-center flex-wrap">
                                <div class="theme-colorsset me-2 mb-2" @click="handleUpdateTheme('data-color', 'primary')">
                                    <input type="radio" name="color" id="primaryColor" value="primary" :checked="themeSettings['data-color'] === 'primary'">
                                    <label for="primaryColor" class="primary-clr"></label>
                                </div>
                                <div class="theme-colorsset me-2 mb-2" @click="handleUpdateTheme('data-color', 'brightblue')">
                                    <input type="radio" name="color" id="brightblueColor" value="brightblue" :checked="themeSettings['data-color'] === 'brightblue'">
                                    <label for="brightblueColor" class="theme-color-1"></label>
                                </div>
                                <div class="theme-colorsset me-2 mb-2" @click="handleUpdateTheme('data-color', 'lunargreen')">
                                    <input type="radio" name="color" id="lunargreenColor" value="lunargreen" :checked="themeSettings['data-color'] === 'lunargreen'">
                                    <label for="lunargreenColor" class="theme-color-2"></label>
                                </div>
                                <div class="theme-colorsset me-2 mb-2" @click="handleUpdateTheme('data-color', 'lavendar')">
                                    <input type="radio" name="color" id="lavendarColor" value="lavendar" :checked="themeSettings['data-color'] === 'lavendar'">
                                    <label for="lavendarColor" class="theme-color-3"></label>
                                </div>
                                <div class="theme-colorsset me-2 mb-2" @click="handleUpdateTheme('data-color', 'magenta')">
                                    <input type="radio" name="color" id="magentaColor" value="magenta" :checked="themeSettings['data-color'] === 'magenta'">
                                    <label for="magentaColor" class="theme-color-4"></label>
                                </div>
                                <div class="theme-colorsset me-2 mb-2" @click="handleUpdateTheme('data-color', 'chromeyellow')">
                                    <input type="radio" name="color" id="chromeyellowColor" value="chromeyellow" :checked="themeSettings['data-color'] === 'chromeyellow'">
                                    <label for="chromeyellowColor" class="theme-color-5"></label>
                                </div> 
                                <div class="theme-colorsset me-2 mb-2" @click="handleUpdateTheme('data-color', 'orange')">
                                    <input type="radio" name="color" id="orangeColor" value="orange" :checked="themeSettings['data-color'] === 'orange'">
                                    <label for="orangeColor" class="theme-color-6"></label>
                                </div> 
                            <div class="theme-colorsset mb-2">                                
                                <div class="pickr-container-primary">
                                    <ColorPicker
                                        :value="customPrimaryColor"
                                        :checked="themeSettings['data-color'] === 'primary'"
                                        :format="customPrimaryFormat"
                                        @change="handlePrimaryColorChange"
                                        @format-change="handlePrimaryFormatChange"
                                    />
                                </div>
                                <div class="theme-container-primary">
                                    
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div> 
        </div>
        <div class="p-3 pt-0">
            <div class="row gx-3">
                <div class="col-6">
                    <a href="#" id="resetbutton" class="btn btn-light close-theme w-100" @click.prevent="handleResetTheme"><i class="ti ti-restore me-1"></i>Reset</a>
                </div>
                <div class="col-6">
                    <a href="https://themeforest.net/item/dreamspos-pos-inventory-management-admin-dashboard-template/38834413" target="_blank" class="btn btn-primary w-100" data-bs-dismiss="offcanvas"><i class="ti ti-shopping-cart-plus me-1"></i>Buy Product</a>
                </div>
            </div>
        </div>    
    </div>
</template>

<script>
import ColorPicker from "@/components/ColorPicker.vue";

export default {
    components: { ColorPicker },

    data() {
        return {
            themeSettings: {
                "data-layout": "default",
                "data-width": "fluid",
                "data-sidebar": "light",
                "data-size": "default",
                "data-topbar": "white",
                "data-sidebarbg": "default",
                "data-color": "primary",
                "data-theme": "light",
            },

            // custom colors USED by ColorPicker
            customPrimaryColor: "rgba(59, 125, 221, 1)",
            customPrimaryFormat: "rgba",

            customTopbarColor: "rgba(255, 255, 255, 1)",
            customTopbarFormat: "rgba",

            customSidebarColor: "rgba(255, 255, 255, 1)",
            customSidebarFormat: "rgba",

            miniSidebar: false,
            expandMenu: false,
        };
    },

    mounted() {
        Object.keys(this.themeSettings).forEach((key) => {
            document.documentElement.setAttribute(key, this.themeSettings[key]);
        });

        this.applyPrimaryCustomColor(this.customPrimaryColor);
        this.applySidebarCustomColor(this.customSidebarColor);
        this.applyTopbarCustomColor(this.customTopbarColor);

        this.updateBodyClasses();
    },

    methods: {
        handleUpdateTheme(key, value) {
            this.themeSettings[key] = value;
            document.documentElement.setAttribute(key, value);
            this.updateBodyClasses();
        },

        // ----- PRIMARY COLOR -----
        handlePrimaryColorChange(value, rgbaValue) {
            this.customPrimaryColor = value;
            this.applyPrimaryCustomColor(rgbaValue || value);
            this.handleUpdateTheme("data-color", "all");
        },
        handlePrimaryFormatChange(fmt) {
            this.customPrimaryFormat = fmt;
        },
        applyPrimaryCustomColor(colorString) {
            const rgb = this.convertColorToRgbChannels(colorString);
            if (rgb) {
                document.documentElement.style.setProperty("--primary-rgb-picr", rgb);
            }
        },

        // ----- TOPBAR COLOR -----
        handleTopbarColorChange(value, rgbaValue) {
            this.customTopbarColor = value;
            this.applyTopbarCustomColor(rgbaValue || value);
            this.handleUpdateTheme("data-topbar", "all");
        },
        handleTopbarFormatChange(fmt) {
            this.customTopbarFormat = fmt;
        },
        applyTopbarCustomColor(colorString) {
            const rgb = this.convertColorToRgbChannels(colorString);
            if (rgb) {
                document.documentElement.style.setProperty("--topbar--rgb-picr", rgb);
            }
        },

        // ----- SIDEBAR COLOR -----
        handleSidebarColorChange(value, rgbaValue) {
            this.customSidebarColor = value;
            this.applySidebarCustomColor(rgbaValue || value);
            this.handleUpdateTheme("data-sidebar", "all");
        },
        handleSidebarFormatChange(fmt) {
            this.customSidebarFormat = fmt;
        },
        applySidebarCustomColor(colorString) {
            const rgb = this.convertColorToRgbChannels(colorString);
            if (rgb) {
                document.documentElement.style.setProperty("--sidebar--rgb-picr", rgb);
            }
        },

        // ----- UTILS -----
        convertColorToRgbChannels(value) {
            if (!value) return null;

            if (value.startsWith("#")) {
                let hex = value.slice(1);
                if (hex.length === 3) hex = hex.split("").map(c => c + c).join("");
                const r = parseInt(hex.slice(0, 2), 16);
                const g = parseInt(hex.slice(2, 4), 16);
                const b = parseInt(hex.slice(4, 6), 16);
                return `${r}, ${g}, ${b}`;
            }

            const rgba = value.match(/rgba?\(([^)]+)\)/i);
            if (rgba) {
                const [r, g, b] = rgba[1].split(",").map(n => parseFloat(n.trim()));
                return `${r}, ${g}, ${b}`;
            }

            return null;
        },

        updateBodyClasses() {
            const body = document.body;
            body.classList.remove("mini-sidebar", "expand-menu", "layout-box-mode", "menu-horizontal");

            if (this.miniSidebar || this.themeSettings["data-layout"] === "mini")
                body.classList.add("mini-sidebar");

            if (this.expandMenu && this.themeSettings["data-layout"] === "mini")
                body.classList.add("expand-menu");

            if (this.themeSettings["data-width"] === "box")
                body.classList.add("layout-box-mode");

            if (this.themeSettings["data-layout"] === "horizontal")
                body.classList.add("menu-horizontal");
        },

        handleRTLNavigation() {
            if (this.themeSettings["data-layout"] === "horizontal") {
                this.handleUpdateTheme("data-layout", "default");
            }
            this.$router.push("/layouts/layout-rtl");
        },

        // ----- RESET -----
        handleResetTheme() {
            // Reset theme settings to default values
            this.themeSettings = {
                "data-layout": "default",
                "data-width": "fluid",
                "data-sidebar": "light",
                "data-size": "default",
                "data-topbar": "white",
                "data-sidebarbg": "default",
                "data-color": "primary",
                "data-theme": "light",
            };

            // Reset custom colors to defaults
            this.customPrimaryColor = "rgba(59, 125, 221, 1)";
            this.customPrimaryFormat = "rgba";

            this.customTopbarColor = "rgba(255, 255, 255, 1)";
            this.customTopbarFormat = "rgba";

            this.customSidebarColor = "rgba(255, 255, 255, 1)";
            this.customSidebarFormat = "rgba";

            // Reset flags
            this.miniSidebar = false;
            this.expandMenu = false;

            // Remove all existing theme-related attributes first
            const allThemeAttributes = [
                "data-layout", "data-width", "data-sidebar", "data-size",
                "data-topbar", "data-sidebarbg", "data-color", "data-theme"
            ];
            allThemeAttributes.forEach((attr) => {
                document.documentElement.removeAttribute(attr);
            });

            // Remove custom CSS variables
            document.documentElement.style.removeProperty("--primary-rgb-picr");
            document.documentElement.style.removeProperty("--topbar--rgb-picr");
            document.documentElement.style.removeProperty("--sidebar--rgb-picr");

            // Set all default attributes
            Object.keys(this.themeSettings).forEach((key) => {
                document.documentElement.setAttribute(key, this.themeSettings[key]);
            });

            // Apply default custom colors (only primary color needs custom CSS variable)
            this.applyPrimaryCustomColor(this.customPrimaryColor);

            // Update body classes
            this.updateBodyClasses();

            // Force Vue reactivity update
            this.$forceUpdate();
        }
    }
};
</script>
