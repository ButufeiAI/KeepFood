package com.example.template.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class sales {
    @GetMapping("online-orders")
    public String onlineOrders(Model model) {
        model.addAttribute("activePage", "online-orders");
        model.addAttribute("activeGroup", "sales");
        model.addAttribute("activeHorizontal", "sales");
        return "pages/sales/online-orders";
    }
    @GetMapping("pos-orders")
    public String posOrders(Model model) {
        model.addAttribute("activePage", "pos-orders");
        model.addAttribute("activeGroup", "sales");
        model.addAttribute("activeHorizontal", "sales");
        return "pages/sales/pos-orders";
    }
    @GetMapping("invoice")
    public String invoice(Model model) {
        model.addAttribute("activePage", "invoice");
        model.addAttribute("activeHorizontal", "sales");
        return "pages/sales/invoice";
    }
    @GetMapping("invoice-details")
    public String invoiceDetails(Model model) {
        model.addAttribute("activePage", "invoice-details");
        model.addAttribute("activeHorizontal", "sales");
        return "pages/sales/invoice-details";
    }
    @GetMapping("sales-returns")
    public String salesReturn(Model model) {
        model.addAttribute("activePage", "sales-returns");
        model.addAttribute("activeHorizontal", "sales");
        return "pages/sales/sales-returns";
    }
    @GetMapping("quotation-list")
    public String quotationList(Model model) {
        model.addAttribute("activePage", "quotation-list");
        model.addAttribute("activeHorizontal", "sales");
        return "pages/sales/quotation-list";
    }
    @GetMapping("pos")
    public String pos(Model model) {
        model.addAttribute("activePage", "pos");
        model.addAttribute("activeHorizontal", "sales");
        return "pages/sales/pos";
    }
    @GetMapping("pos-2")
    public String pos2(Model model) {
        model.addAttribute("activePage", "pos-2");
        return "pages/sales/pos-2";
    }
    @GetMapping("pos-3")
    public String pos3(Model model) {
        model.addAttribute("activePage", "pos-3");
        return "pages/sales/pos-3";
    }
    @GetMapping("pos-4")
    public String pos4(Model model) {
        model.addAttribute("activePage", "pos-4");
        return "pages/sales/pos-4";
    }
    @GetMapping("pos-5")
    public String pos5(Model model) {
        model.addAttribute("activePage", "pos-5");
        return "pages/sales/pos-5";
    }
}
