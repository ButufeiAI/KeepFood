package com.example.template.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class icons {

@GetMapping("icon-bootstrap")
public String iconBootstrap(Model model) {
model.addAttribute("activePage", "icon-bootstrap");
model.addAttribute("activeGroup", "icons");
return "pages/ui-interface/icons/icon-bootstrap";
}
@GetMapping("icon-feather")
public String iconFeather(Model model) {
model.addAttribute("activePage", "icon-feather");
model.addAttribute("activeGroup", "icons");
return "pages/ui-interface/icons/icon-feather";
}
@GetMapping("icon-flag")
public String iconFlag(Model model) {
model.addAttribute("activePage", "icon-flag");
model.addAttribute("activeGroup", "icons");
return "pages/ui-interface/icons/icon-flag";
}
@GetMapping("icon-fontawesome")
public String iconFontawesome(Model model) {
model.addAttribute("activePage", "icon-fontawesome");
model.addAttribute("activeGroup", "icons");
return "pages/ui-interface/icons/icon-fontawesome";
}
@GetMapping("icon-ionic")
public String iconIonic(Model model) {
model.addAttribute("activePage", "icon-ionic");
model.addAttribute("activeGroup", "icons");
return "pages/ui-interface/icons/icon-ionic";
}
@GetMapping("icon-material")
public String iconMaterial(Model model) {
model.addAttribute("activePage", "icon-material");
model.addAttribute("activeGroup", "icons");
return "pages/ui-interface/icons/icon-material";
}
@GetMapping("icon-pe7")
public String iconPe7(Model model) {
model.addAttribute("activePage", "icon-pe7");
model.addAttribute("activeGroup", "icons");
return "pages/ui-interface/icons/icon-pe7";
}
@GetMapping("icon-remix")
public String iconRemix(Model model) {
model.addAttribute("activePage", "icon-remix");
model.addAttribute("activeGroup", "icons");
return "pages/ui-interface/icons/icon-remix";
}
@GetMapping("icon-simpleline")
public String iconSimpleline(Model model) {
model.addAttribute("activePage", "icon-simpleline");
model.addAttribute("activeGroup", "icons");
return "pages/ui-interface/icons/icon-simpleline";
}
@GetMapping("icon-tabler")
public String iconTabler(Model model) {
model.addAttribute("activePage", "icon-tabler");
model.addAttribute("activeGroup", "icons");
return "pages/ui-interface/icons/icon-tabler";
}
@GetMapping("icon-themify")
public String iconThemify(Model model) {
model.addAttribute("activePage", "icon-themify");
model.addAttribute("activeGroup", "icons");
return "pages/ui-interface/icons/icon-themify";
}
@GetMapping("icon-typicon")
public String iconTypicon(Model model) {
model.addAttribute("activePage", "icon-typicon");
model.addAttribute("activeGroup", "icons");
return "pages/ui-interface/icons/icon-typicon";
}
@GetMapping("icon-weather")
public String iconWeather(Model model) {
model.addAttribute("activePage", "icon-weather");
model.addAttribute("activeGroup", "icons");
return "pages/ui-interface/icons/icon-weather";
}

}
