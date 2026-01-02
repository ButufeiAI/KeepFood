package com.example.template.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class reports {
    @GetMapping("sales-report")
    public String salesReport(Model modal) {
        modal.addAttribute("activePage", "sales-report");
        modal.addAttribute("activeGroup", "sales-report");
        modal.addAttribute("activetwocolumn", "reports");
        return "pages/reports/sales-report";
    }
    @GetMapping("best-seller")
    public String bestSeller(Model modal) {
        modal.addAttribute("activePage", "best-seller");
        modal.addAttribute("activeGroup", "sales-report");
        modal.addAttribute("activetwocolumn", "reports");
        return "pages/reports/best-seller";
    }
    @GetMapping("purchase-report")
    public String purchaseReport(Model modal) {
        modal.addAttribute("activePage", "purchase-report");
        modal.addAttribute("activetwocolumn", "reports");
        return "pages/reports/purchase-report";
    }
    @GetMapping("inventory-report")
    public String inventoryReport(Model modal) {
        modal.addAttribute("activePage", "inventory-report");
        modal.addAttribute("activeGroup", "inventory-report");
        modal.addAttribute("activetwocolumn", "reports");
        return "pages/reports/inventory-report";
    }
    @GetMapping("stock-history")
    public String stockHistory(Model modal) {
        modal.addAttribute("activePage", "stock-history");
        modal.addAttribute("activeGroup", "inventory-report");
        return "pages/reports/stock-history";
    }
    @GetMapping("sold-stock")
    public String soldStock(Model modal) {
        modal.addAttribute("activePage", "sold-stock");
        modal.addAttribute("activeGroup", "inventory-report");
        modal.addAttribute("activetwocolumn", "reports");
        return "pages/reports/sold-stock";
    }
    @GetMapping("invoice-report")
    public String invoiceReport(Model modal) {
        modal.addAttribute("activePage", "invoice-report");
        modal.addAttribute("activetwocolumn", "reports");
        return "pages/reports/invoice-report";
    }
    @GetMapping("supplier-report")
    public String supplierReport(Model modal) {
        modal.addAttribute("activePage", "supplier-report");
        modal.addAttribute("activeGroup", "supplier-report");
        modal.addAttribute("activetwocolumn", "reports");
        return "pages/reports/supplier-report";
    }
    @GetMapping("supplier-due-report")
    public String supplierDueReport(Model modal) {
        modal.addAttribute("activePage", "supplier-due-report");
        modal.addAttribute("activeGroup", "supplier-report");
        modal.addAttribute("activetwocolumn", "reports");
        return "pages/reports/supplier-due-report";
    }
    @GetMapping("customer-report")
    public String customerReport(Model modal) {
        modal.addAttribute("activePage", "customer-report");
        modal.addAttribute("activeGroup", "customer-report");
        modal.addAttribute("activetwocolumn", "reports");
        return "pages/reports/customer-report";
    }
    @GetMapping("customer-due-report")
    public String customerDueReport(Model modal) {
        modal.addAttribute("activePage", "customer-due-report");
        modal.addAttribute("activeGroup", "customer-report");
        return "pages/reports/customer-due-report";
    }
    @GetMapping("product-report")
    public String productReport(Model modal) {
        modal.addAttribute("activePage", "product-report");
        modal.addAttribute("activeGroup", "product-report");
        modal.addAttribute("activetwocolumn", "reports");
        return "pages/reports/product-report";
    }
    @GetMapping("product-expiry-report")
    public String productExpiryReport(Model modal) {
        modal.addAttribute("activePage", "product-expiry-report");
        modal.addAttribute("activeGroup", "product-report");
        modal.addAttribute("activetwocolumn", "reports");
        return "pages/reports/product-expiry-report";
    }
    @GetMapping("product-quantity-alert")
    public String productQuantityAlertReport(Model modal) {
        modal.addAttribute("activePage", "product-quantity-alert");
        modal.addAttribute("activeGroup", "product-report");
        modal.addAttribute("activetwocolumn", "reports");
        return "pages/reports/product-quantity-alert";
    }
    @GetMapping("expense-report")
    public String expenseReport(Model modal) {
        modal.addAttribute("activePage", "expense-report");
        modal.addAttribute("activetwocolumn", "reports");
        return "pages/reports/expense-report";
    }
    @GetMapping("income-report")
    public String incomeReport(Model modal) {
        modal.addAttribute("activePage", "income-report");
        modal.addAttribute("activetwocolumn", "reports");
        return "pages/reports/income-report";
    }
    @GetMapping("profit-and-loss")
    public String profitAndLossReport(Model modal) {
        modal.addAttribute("activePage", "profit-and-loss");
        modal.addAttribute("activetwocolumn", "reports");
        return "pages/reports/profit-and-loss";
    }
    @GetMapping("tax-reports")
    public String taxReportsReport(Model modal) {
        modal.addAttribute("activePage", "tax-reports");
        modal.addAttribute("activetwocolumn", "reports");
        return "pages/reports/tax-reports";
    }
    @GetMapping("annual-report")
    public String annualReport(Model modal) {
        modal.addAttribute("activePage", "annual-report");
        modal.addAttribute("activetwocolumn", "reports");
        return "pages/reports/annual-report";
    }
}
