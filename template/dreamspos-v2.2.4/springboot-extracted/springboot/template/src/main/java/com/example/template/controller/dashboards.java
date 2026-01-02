package com.example.template.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;


@Controller
public class dashboards {
@GetMapping(value = {"/", "/index"})
public String index(Model model) {
model.addAttribute("activePage", "index");
model.addAttribute("activeGroup", "dashboard");
return "pages/main/dashboards/index";
}

@GetMapping("/admin-dashboard")
public String adminDashboard(Model model) {
model.addAttribute("activePage", "admin-dashboard");
model.addAttribute("activeGroup", "dashboard");
return "pages/main/dashboards/admin-dashboard";
}

@GetMapping("/sales-dashboard")
public String salesDashboard(Model model) {
model.addAttribute("activePage", "sales-dashboard");
model.addAttribute("activeGroup", "dashboard");
return "pages/main/dashboards/sales-dashboard"; 
}

}
