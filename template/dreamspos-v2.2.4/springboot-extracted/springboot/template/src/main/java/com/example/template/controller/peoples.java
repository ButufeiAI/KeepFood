package com.example.template.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class peoples {

    @GetMapping("billers")
    public String billers(Model modal) {
            modal.addAttribute("activePage", "billers");
            modal.addAttribute("activeHorizontal", "peoples");
        return "pages/peoples/billers";
    }
    @GetMapping("suppliers")
    public String suppliers(Model modal) {
            modal.addAttribute("activePage", "suppliers");
            modal.addAttribute("activeHorizontal", "peoples");
        return "pages/peoples/suppliers";
    }
    @GetMapping("warehouse")
    public String warehouse(Model modal) {
        modal.addAttribute("activePage", "warehouse");
        modal.addAttribute("activeHorizontal", "peoples");
        return "pages/peoples/warehouse";
    }
    @GetMapping("store-list")
    public String storeList(Model modal) {
        modal.addAttribute("activePage", "store-list");
        modal.addAttribute("activeHorizontal", "peoples");
        return "pages/peoples/store-list";
    }
}
