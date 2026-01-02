package com.example.template.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class purchases {
    @GetMapping("purchase-list")
    public String purchaseList(Model modal) {
        modal.addAttribute("activePage", "purchase-list");
        modal.addAttribute("activeHorizontal", "purchase");
        return "pages/purchases/purchase-list";
    }
    @GetMapping("purchase-order-report")
    public String purchaseOrderReport(Model modal) {
        modal.addAttribute("activePage", "purchase-order-report");
        modal.addAttribute("activeHorizontal", "purchase");
        return "pages/purchases/purchase-order-report";
    }
    @GetMapping("purchase-returns")
    public String purchaseReturns(Model modal) {
        modal.addAttribute("activePage", "purchase-returns");
        modal.addAttribute("activeHorizontal", "purchase");
        return "pages/purchases/purchase-returns";
    }
}
