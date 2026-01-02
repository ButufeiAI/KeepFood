package com.example.template.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class table {

    @GetMapping("tables-basic")
    public String tablesBasic(Model model) {
        model.addAttribute("activePage", "tables-basic");
        model.addAttribute("activeGroup", "tables");
        return "pages/ui-interface/tables/tables-basic";
    }
    @GetMapping("data-tables")
    public String dataTables(Model model) {
        model.addAttribute("activePage", "data-tables");
        model.addAttribute("activeGroup", "tables");
        return "pages/ui-interface/tables/data-tables";
    }
}