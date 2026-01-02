package com.example.template.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;


@Controller
public class baseui {
@GetMapping("ui-alerts")
public String uiAlerts(Model model) {
model.addAttribute("activePage", "ui-alerts");
model.addAttribute("activeGroup", "baseui");
return "pages/ui-interface/base-ui/ui-alerts";
}

@GetMapping("ui-accordion")
public String uiAccordion(Model model) {
model.addAttribute("activePage", "ui-accordion");
model.addAttribute("activeGroup", "baseui");
return "pages/ui-interface/base-ui/ui-accordion";
}

@GetMapping("ui-avatar")
public String uiAvatar(Model model) {
model.addAttribute("activePage", "ui-avatar");
model.addAttribute("activeGroup", "baseui");
return "pages/ui-interface/base-ui/ui-avatar";
}
@GetMapping("ui-badges")
public String uiBadges(Model model) {
model.addAttribute("activePage", "ui-badges");
model.addAttribute("activeGroup", "baseui");
return "pages/ui-interface/base-ui/ui-badges";
}
@GetMapping("ui-borders")
public String uiBorders(Model model) {
model.addAttribute("activePage", "ui-borders");
model.addAttribute("activeGroup", "baseui");
return "pages/ui-interface/base-ui/ui-borders";
}
@GetMapping("ui-breadcrumb")
public String uiBreadcrumb(Model model) {
model.addAttribute("activePage", "ui-breadcrumb");
model.addAttribute("activeGroup", "baseui");
return "pages/ui-interface/base-ui/ui-breadcrumb";
}
@GetMapping("ui-buttons")
public String uiButtons(Model model) {
model.addAttribute("activePage", "ui-buttons");
model.addAttribute("activeGroup", "baseui");
return "pages/ui-interface/base-ui/ui-buttons";
}
@GetMapping("ui-buttons-group")
public String uiButtonsGroup(Model model) {
model.addAttribute("activePage", "ui-buttons-group");
model.addAttribute("activeGroup", "baseui");
return "pages/ui-interface/base-ui/ui-buttons-group";
}
@GetMapping("ui-carousel")
public String uiCarousel(Model model) {
model.addAttribute("activePage", "ui-carousel");
model.addAttribute("activeGroup", "baseui");
return "pages/ui-interface/base-ui/ui-carousel";
}
@GetMapping("ui-cards")
public String uiCards(Model model) {
model.addAttribute("activePage", "ui-cards");
model.addAttribute("activeGroup", "baseui");
return "pages/ui-interface/base-ui/ui-cards";
}
@GetMapping("ui-colors")
public String uiColors(Model model) {
model.addAttribute("activePage", "ui-colors");
model.addAttribute("activeGroup", "baseui");
return "pages/ui-interface/base-ui/ui-colors";
}
@GetMapping("ui-dropdowns")
public String uiDropdowns(Model model) {
model.addAttribute("activePage", "ui-dropdowns");
model.addAttribute("activeGroup", "baseui");
return "pages/ui-interface/base-ui/ui-dropdowns";
}
@GetMapping("ui-grid")
public String uiGrid(Model model) {
model.addAttribute("activePage", "ui-grid");
model.addAttribute("activeGroup", "baseui");
return "pages/ui-interface/base-ui/ui-grid";
}
@GetMapping("ui-images")
public String uiImages(Model model) {
model.addAttribute("activePage", "ui-images");
model.addAttribute("activeGroup", "baseui");
return "pages/ui-interface/base-ui/ui-images";
}
@GetMapping("ui-lightbox")
public String uiLightbox(Model model) {
model.addAttribute("activePage", "ui-lightbox");
model.addAttribute("activeGroup", "baseui");
return "pages/ui-interface/base-ui/ui-lightbox";
}
@GetMapping("ui-media")
public String uiMedia(Model model) {
model.addAttribute("activePage", "ui-media");
model.addAttribute("activeGroup", "baseui");
return "pages/ui-interface/base-ui/ui-media";
}
@GetMapping("ui-modals")
public String uiModals(Model model) {
model.addAttribute("activePage", "ui-modals");
model.addAttribute("activeGroup", "baseui");
return "pages/ui-interface/base-ui/ui-modals";
}
@GetMapping("ui-nav-tabs")
public String uiNavTabs(Model model) {
model.addAttribute("activePage", "ui-nav-tabs");
model.addAttribute("activeGroup", "baseui");
return "pages/ui-interface/base-ui/ui-nav-tabs";
}
@GetMapping("ui-offcanvas")
public String uiOffcanvas(Model model) {
model.addAttribute("activePage", "ui-offcanvas");
model.addAttribute("activeGroup", "baseui");
return "pages/ui-interface/base-ui/ui-offcanvas";
}
@GetMapping("ui-pagination")
public String uiPagination(Model model) {
model.addAttribute("activePage", "ui-pagination");
model.addAttribute("activeGroup", "baseui");
return "pages/ui-interface/base-ui/ui-pagination";
}
@GetMapping("ui-placeholders")
public String uiPlaceholders(Model model) {
model.addAttribute("activePage", "ui-placeholders");
model.addAttribute("activeGroup", "baseui");
return "pages/ui-interface/base-ui/ui-placeholders";
}
@GetMapping("ui-popovers")
public String uiPopovers(Model model) {
model.addAttribute("activePage", "ui-popovers");
model.addAttribute("activeGroup", "baseui");
return "pages/ui-interface/base-ui/ui-popovers";
}
@GetMapping("ui-progress")
public String uiProgress(Model model) {
model.addAttribute("activePage", "ui-progress");
model.addAttribute("activeGroup", "baseui");
return "pages/ui-interface/base-ui/ui-progress";
}

@GetMapping("ui-sortable")
public String uiSortable(Model model) {
model.addAttribute("activePage", "ui-sortable");
model.addAttribute("activeGroup", "baseui");
return "pages/ui-interface/base-ui/ui-sortable";
}
@GetMapping("ui-spinner")
public String uiSpinner(Model model) {
model.addAttribute("activePage", "ui-spinner");
model.addAttribute("activeGroup", "baseui");
return "pages/ui-interface/base-ui/ui-spinner";
}
@GetMapping("ui-sweetalerts")
public String uiSweetAlerts(Model model) {
model.addAttribute("activePage", "ui-sweetalerts");
model.addAttribute("activeGroup", "baseui");
return "pages/ui-interface/base-ui/ui-sweetalerts";
}
@GetMapping("ui-swiperjs")
public String uiSwiperjs(Model model) {
model.addAttribute("activePage", "ui-swiperjs");
model.addAttribute("activeGroup", "baseui");
return "pages/ui-interface/base-ui/ui-swiperjs";
}
@GetMapping("ui-toasts")
public String uiToasts(Model model) {
model.addAttribute("activePage", "ui-toasts");
model.addAttribute("activeGroup", "baseui");
return "pages/ui-interface/base-ui/ui-toasts";
}
@GetMapping("ui-tooltips")
public String uiTooltips(Model model) {
model.addAttribute("activePage", "ui-tooltips");
model.addAttribute("activeGroup", "baseui");
return "pages/ui-interface/base-ui/ui-tooltips";
}
@GetMapping("ui-typography")
public String uiTypography(Model model) {
model.addAttribute("activePage", "ui-typography");
model.addAttribute("activeGroup", "baseui");
return "pages/ui-interface/base-ui/ui-typography";
}
@GetMapping("ui-video")
public String uiVideo(Model model) {
model.addAttribute("activePage", "ui-video");
model.addAttribute("activeGroup", "baseui");
return "pages/ui-interface/base-ui/ui-video";
}

}
