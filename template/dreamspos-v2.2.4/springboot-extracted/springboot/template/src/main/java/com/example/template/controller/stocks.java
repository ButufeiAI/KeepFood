package com.example.template.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class stocks {
    @GetMapping("manage-stocks")
    public String manageStocks(Model model) {
        model.addAttribute("activePage", "manage-stocks");
        model.addAttribute("activeGroup", "stocks");
        return "pages/stocks/manage-stocks";
    }
    @GetMapping("stock-adjustment")
    public String stockAdjustment(Model model) {
        model.addAttribute("activePage", "stock-adjustment");
        model.addAttribute("activeGroup", "stocks");
        return "pages/stocks/stock-adjustment";
    }
    @GetMapping("stock-transfer")
    public String stockTransfer(Model model) {
        model.addAttribute("activePage", "stock-transfer");
        model.addAttribute("activeGroup", "stocks");
        return "pages/stocks/stock-transfer";
    }
}
