package com.example.template.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class layout {
    @GetMapping("layout-horizontal")
    public String layouthorizontal(Model modal) {
        modal.addAttribute("activePage", "layout-horizontal");
        modal.addAttribute("activeGroup", "layout-pages");
        return "pages/main/layout-pages/layout-horizontal";
    }
    @GetMapping("layout-detached")
    public String layoutdetached(Model modal) {
        modal.addAttribute("activePage", "layout-detached");
        modal.addAttribute("activeGroup", "layout-pages");
        return "pages/main/layout-pages/layout-detached";
    }
    @GetMapping("layout-hovered")
    public String layouthovered(Model modal) {
        modal.addAttribute("activePage", "layout-hovered");
        modal.addAttribute("activeGroup", "layout-pages");
        return "pages/main/layout-pages/layout-hovered";
    }
    @GetMapping("layout-boxed")
    public String layoutboxed(Model modal) {
        modal.addAttribute("activePage", "layout-boxed");
        modal.addAttribute("activeGroup", "layout-pages");
        return "pages/main/layout-pages/layout-boxed";
    }
    @GetMapping("layout-rtl")
    public String layoutrtl(Model modal) {
        modal.addAttribute("activePage", "layout-rtl");
        modal.addAttribute("activeGroup", "layout-pages");
        return "pages/main/layout-pages/layout-rtl";
    }
    @GetMapping("layout-dark")
    public String layoutdark(Model modal) {
        modal.addAttribute("activePage", "layout-dark");
        modal.addAttribute("activeGroup", "layout-pages");
        return "pages/main/layout-pages/layout-dark";
    }
    @GetMapping("layout-two-column")
    public String layouttwo(Model modal) {
        modal.addAttribute("activePage", "layout-two-column");
        modal.addAttribute("activeGroup", "layout-pages");
        return "pages/main/layout-pages/layout-two-column";
    }

}
