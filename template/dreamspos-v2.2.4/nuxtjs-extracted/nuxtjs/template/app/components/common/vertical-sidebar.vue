<template>
  <ul>
    <li class="submenu-open" v-for="item in side_bar_data" :key="item.tittle">
        <h6 class="submenu-hdr">{{ item.tittle }}</h6> <!-- Correct typo if needed -->
        <ul>
            <template v-for="menu in item.menu" :key="menu.menuValue">
                <li v-if="!menu.hasSubRoute" :class="{ 'active': isMenuActive(menu) }">
                    <NuxtLink v-if="menu.route" :to="menu.route">
                        <i :class="menu.icon" class="fs-16 me-2"></i>
                        <span>{{ menu.menuValue }}</span>
                    </NuxtLink>
                </li>
                <li v-else class="submenu">
                    <a href="javascript:void(0);" @click="expandSubMenus(menu)" 
                    :class="{ subdrop: menu.showSubRoute, active: isActive(menu) }">
                        <i :class="menu.icon" class="fs-16 me-2"></i>
                        <span>{{ menu.menuValue }}</span>
                        <span class="menu-arrow"></span>
                    </a>
                    <ul :class="menu.showSubRoute ? 'd-block' : 'd-none'">
                        <li v-for="(subMenu, index) in menu.subMenus" :key="index">
                            <!-- Add v-if to check subMenu.route -->
                            <NuxtLink v-if="subMenu.route" :to="subMenu.route">{{ subMenu.menuValue }}</NuxtLink>
                        </li>
                    </ul>
                </li>
                <li v-if="menu.hasSubRouteTwo" class="submenu">
                    <a href="javascript:void(0);" @click="OpenMenu(menu)"
                    :class="{ 
                            subdrop: openMenuItem === menu,
                            active: isActive(menu)
                            }">

                        <i :class="menu.icon" class="fs-16 me-2"></i><span>{{ menu.menuValue }}</span>
                        <span class="menu-arrow"></span>
                    </a>
                    <ul :class="{ 'd-block': openMenuItem === menu || isActive(menu), 'd-none': openMenuItem !== menu && !isActive(menu) }">
                        <li v-for="subMenus in menu.subMenus" :key="subMenus.menuValue">
                            <template v-if="!subMenus.customSubmenuTwo">
                                <!-- Add v-if for subMenus.route -->
                                <NuxtLink v-if="subMenus.route" :to="subMenus.route" router-link-active="active">{{ subMenus.menuValue }}</NuxtLink>
                            </template>
                            <template v-else-if="subMenus.customSubmenuTwo">
                                <li class="submenu submenu-two">
                                    <a href="javascript:void(0);" @click="openSubmenuOne(subMenus)"
                                    :class="{ subdrop: openSubmenuOneItem === subMenus, active: isSubActive(subMenus) }">
                                        {{ subMenus.menuValue }}<span class="menu-arrow inside-submenu"></span>
                                    </a>
                                    <ul :class="{ 'd-block': openSubmenuOneItem === subMenus, 'd-none': openSubmenuOneItem !== subMenus }">
                                        <li v-for="subMenuTwo in subMenus.subMenusTwo" :key="subMenuTwo.menuValue">
                                            <!-- Add v-if for subMenuTwo.route -->
                                            <NuxtLink v-if="subMenuTwo.route" :to="subMenuTwo.route">{{ subMenuTwo.menuValue }}</NuxtLink>
                                        </li>
                                    </ul>
                                </li>
                            </template>
                        </li>                                
                    </ul>
                </li>                    
            </template>							
        </ul>
    </li>
    <li class="submenu-open">
        <h6 class="submenu-hdr">Help</h6>
        <ul>
            <li><a href="https://dreamspos.dreamstechnologies.com/documentation/nuxtjs.html" target="_blank"><i class="ti ti-file-text fs-16 me-2"></i><span>Documentation</span></a></li>
            <li><a href="https://dreamspos.dreamstechnologies.com/documentation/changelog.html" target="_blank"><i class="ti ti-exchange fs-16 me-2"></i><span>Changelog </span><span class="badge bg-primary badge-xs text-white fs-10 ms-2">v2.2.3</span></a></li>
            <li class="submenu">
                <a href="javascript:void(0);" @click="toggleMultiLevel" :class="{ subdrop: multiLevelOpen }"><i class="ti ti-menu-2 fs-16 me-2"></i><span>Multi Level</span><span class="menu-arrow"></span></a>
                <ul :class="multiLevelOpen ? 'd-block' : 'd-none'">
                    <li><a href="javascript:void(0);">Level 1.1</a></li>
                    <li class="submenu submenu-two"><a href="javascript:void(0);" @click.stop="toggleLevel12" :class="{ subdrop: level12Open }">Level 1.2<span class="menu-arrow inside-submenu"></span></a>
                        <ul :class="level12Open ? 'd-block' : 'd-none'">
                            <li><a href="javascript:void(0);">Level 2.1</a></li>
                            <li class="submenu submenu-two submenu-three"><a href="javascript:void(0);" @click.stop="toggleLevel22" :class="{ subdrop: level22Open }">Level 2.2<span class="menu-arrow inside-submenu inside-submenu-two"></span></a>
                                <ul :class="level22Open ? 'd-block' : 'd-none'">
                                    <li><a href="javascript:void(0);">Level 3.1</a></li>
                                    <li><a href="javascript:void(0);">Level 3.2</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </li>
  </ul>
</template>

<script>
import side_bar_data from "@/assets/json/sidebar.json";

export default {
  data() {
      return {
          side_bar_data: side_bar_data,
          openMenuItem: null,
          openSubmenuOneItem: null,
          multiLevelOpen: false,
          level12Open: false,
          level22Open: false,
      }
  },
  computed: {
      isMenuActive() {
          return (menu) => {
              return this.$route.path === menu.route ||
              this.$route.path === menu.active_link ||
              this.$route.path === menu.active_link1 ||
              this.$route.path === menu.active_link2 ||
              this.$route.path === menu.active_link3 ||
              this.$route.path === menu.active_link4 ||
              this.$route.path === menu.active_link5;                
          };
      },
      isActive(){
          return (menu) => {
              let result = this.$route.path.split('/').filter(part => part);
              let base = result[0];
              return base === menu.active_link || 
              base === menu.active_link1 ||
              base === menu.active_link2
          }
      },
      isSubActive(){
          return (menu) => {
              let result = this.$route.path.split('/').filter(part => part);
              let base = result[0];
              return base === menu.active_link ||
              base === menu.active_link2
          }
      }
  },
  methods: {
      expandSubMenus(menu) {
          // Check if we're in mini-sidebar mode
          const isMiniSidebar = document.body.classList.contains('mini-sidebar');
          
          this.side_bar_data.forEach((item) => {
              item.menu.forEach((subMenu) => {
                  if (subMenu !== menu) {
                      subMenu.showSubRoute = false;
                  }
              });
          });
          
          // In mini-sidebar mode, always show the submenu when clicked
          if (isMiniSidebar) {
              menu.showSubRoute = true;
          } else {
              menu.showSubRoute = !menu.showSubRoute;
          }
      },
      OpenMenu(menu) {
          // Check if we're in mini-sidebar mode
          const isMiniSidebar = document.body.classList.contains('mini-sidebar');
          
          // Close other submenus
          this.side_bar_data.forEach((item) => {
              item.menu.forEach((subMenu) => {
                  subMenu.showSubRoute = false; 
              });
          });
          
          // If clicking a different menu, close nested submenus
          if (this.openMenuItem !== menu) {
              this.openSubmenuOneItem = null;
          }
          
          // In mini-sidebar mode, always show the submenu when clicked
          if (isMiniSidebar) {
              this.openMenuItem = menu;
          } else {
              this.openMenuItem = this.openMenuItem === menu ? null : menu;
          }
      },
      openSubmenuOne(subMenus) {
          // Check if we're in mini-sidebar mode
          const isMiniSidebar = document.body.classList.contains('mini-sidebar');
          
          // In mini-sidebar mode, always show the submenu when clicked
          if (isMiniSidebar) {
              this.openSubmenuOneItem = subMenus;
          } else {
              this.openSubmenuOneItem = this.openSubmenuOneItem === subMenus ? null : subMenus;
          }
      },
      toggleMultiLevel() {
          const isMiniSidebar = document.body.classList.contains('mini-sidebar');
          if (isMiniSidebar) {
              this.multiLevelOpen = true;
          } else {
              this.multiLevelOpen = !this.multiLevelOpen;
          }
      },
      toggleLevel12() {
          const isMiniSidebar = document.body.classList.contains('mini-sidebar');
          if (isMiniSidebar) {
              this.level12Open = true;
          } else {
              this.level12Open = !this.level12Open;
          }
      },
      toggleLevel22() {
          const isMiniSidebar = document.body.classList.contains('mini-sidebar');
          if (isMiniSidebar) {
              this.level22Open = true;
          } else {
              this.level22Open = !this.level22Open;
          }
      },
  }
}
</script>