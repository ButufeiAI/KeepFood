package com.example.template.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class charts {
    @GetMapping("chart-apex")
public String chartApex(Model model) {
model.addAttribute("activePage", "chart-apex");
model.addAttribute("activeGroup", "charts");
return "pages/ui-interface/charts/chart-apex";
}
@GetMapping("chart-c3")
public String chartC3(Model model) {
model.addAttribute("activePage", "chart-c3");
model.addAttribute("activeGroup", "charts");
return "pages/ui-interface/charts/chart-c3";
}
@GetMapping("chart-flot")
public String chartFlot(Model model) {
model.addAttribute("activePage", "chart-flot");
model.addAttribute("activeGroup", "charts");
return "pages/ui-interface/charts/chart-flot";
}
@GetMapping("chart-morris")
public String chartMorris(Model model) {
model.addAttribute("activePage", "chart-morris");
model.addAttribute("activeGroup", "charts");
return "pages/ui-interface/charts/chart-morris";
}
@GetMapping("chart-peity")
public String chartPeity(Model model) {
model.addAttribute("activePage", "chart-peity");
model.addAttribute("activeGroup", "charts");
return "pages/ui-interface/charts/chart-peity";
}
@GetMapping("chart-js")
public String chartJs(Model model) {
model.addAttribute("activePage", "chart-js");
model.addAttribute("activeGroup", "charts");
return "pages/ui-interface/charts/chart-js";
}

        }
