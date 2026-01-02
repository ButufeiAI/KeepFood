<template>
	<div class="sidebar sidebar-horizontal" id="horizontal-menu">
		<div id="sidebar-menu-3" class="sidebar-menu">
			<div class="main-menu">
				<ul class="nav-menu">
					<template v-for="mainTitle in sideBarData" :key="mainTitle.tittle">
						<li class="submenu">
							<a :class="{ active: openedSubMenu[0] === mainTitle.tittle, subdrop: openedSubMenu[0] === mainTitle.tittle }"
							    @click="showMenu(mainTitle.tittle)"
							>
								<i class="ti" :class="'ti-' + mainTitle.icon"></i>
								<span>{{ mainTitle.tittle }}</span>
								<span class="menu-arrow"></span>
							</a>
							<ul :class="{ 'd-block ': openedSubMenu[0] === mainTitle.tittle, 'd-none': openedSubMenu[0] !== mainTitle.tittle }">
								<template v-for="mainMenus in mainTitle.subRoutes" :key="mainMenus.tittle">
                                    <template v-if="mainMenus.hasSubRoute === false">
                                        <li class="submenu">
                                            <NuxtLink :class="{ active: mainMenus.activeRoute === activePath }"
                                                v-if="mainMenus.route" :to="mainMenus.route"
                                            >
                                                <span>{{ mainMenus.tittle}} 2</span>
                                            </NuxtLink>
                                        </li>
                                    </template>
                                    <template v-if="mainMenus.hasSubRoute === true">
                                        <li class="submenu">
                                            <a :class="{ active: activePath === mainMenus.activeRoute, subdrop: openedSubMenu[1] === mainMenus.tittle }"
                                                @click="showSubMenu(mainMenus.tittle)"
                                            >
                                                <span>{{ mainMenus.tittle }}</span>
                                                <span class="menu-arrow"></span>
                                            </a>
                                            <ul :class="{ 'd-block': openedSubMenu[1] === mainMenus.tittle, 'd-none': openedSubMenu[1] !== mainMenus.tittle }">
                                                <template v-for="subDropMenus in mainMenus.subRoutes" :key="subDropMenus.tittle">
                                                    <template v-if="!subDropMenus.customSubmenuTwo">
                                                        <li>
                                                            <NuxtLink v-if="subDropMenus.route" :to="subDropMenus.route"
                                                            >{{ subDropMenus.tittle }}</NuxtLink
                                                            >
                                                        </li>
                                                    </template>
                                                    <template v-if="subDropMenus.customSubmenuTwo">
                                                        <li class="submenu submenu-two">
                                                            <a :class="{ subdrop: isSubMenuTwo[1] === subDropMenus.tittle }"
                                                                @click="showSubTwo(subDropMenus.tittle)"
                                                            >
                                                                {{ subDropMenus.tittle }}
                                                                <span class="menu-arrow inside-submenu"></span>
                                                            </a>
                                                            <ul :class="{ 'd-block': isSubMenuTwo[1] === subDropMenus.tittle, 'd-none': isSubMenuTwo[1] !== subDropMenus.tittle }">
                                                                <li v-for="subDropMenus2 in subDropMenus.subMenusTwo" :key="subDropMenus2.tittle">
                                                                    <NuxtLink v-if="subDropMenus2.route" :to="subDropMenus2.route">{{ subDropMenus2.tittle }}</NuxtLink>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </template>
                                                </template>
                                            </ul>   
                                        </li>
                                        
                                    </template>
                                </template>                                   
							</ul>
						</li>
					</template>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import sideBarData from "@/assets/json/horizontal-header.json";

export default {
	data() {
		return {
			sideBarData: sideBarData,
			openedSubMenu: [],
			isSubMenuTwo: [],
			activePath: '', // Set this based on your routing logic
		};
	},
	methods: {
		showMenu(title) {
			if (this.openedSubMenu[0] === title) {
			this.openedSubMenu = [];
			} else {
			this.openedSubMenu = [title];
			}
		},
		showSubMenu(title) {
			if (this.openedSubMenu[1] === title) {
			this.openedSubMenu = [this.openedSubMenu[0]];
			} else {
			this.openedSubMenu = [this.openedSubMenu[0], title];
			}
		},
		showSubTwo(title) {
			if (this.isSubMenuTwo[1] === title) {
			this.isSubMenuTwo = [];
			} else {
			this.isSubMenuTwo = [this.isSubMenuTwo[0], title];
			}
		},
	},
};
</script>