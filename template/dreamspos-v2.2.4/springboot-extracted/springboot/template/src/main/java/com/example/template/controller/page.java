package com.example.template.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class page {
    @GetMapping("profile")
    public String profile(Model modal) {
        modal.addAttribute("activePage", "profile");
        return "pages/page/profile";
    }
    @GetMapping("blank-page")
    public String blankPage(Model modal) {
        modal.addAttribute("activePage", "blank-page");
        return "pages/page/blank-page";
    }
    @GetMapping("pricing")
    public String pricing(Model modal) {
        modal.addAttribute("activePage", "pricing");
        return "pages/page/pricing";
    }
    @GetMapping("activities")
    public String activities(Model modal) {
        modal.addAttribute("activePage", "activities");
        return "pages/page/activities";
    }
}