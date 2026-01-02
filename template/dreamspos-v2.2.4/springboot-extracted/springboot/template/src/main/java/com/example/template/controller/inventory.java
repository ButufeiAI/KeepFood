package com.example.template.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class inventory {
    @GetMapping("product-list")
    public String productlist(Model modal) {
        modal.addAttribute("activePage", "product-list");
        modal.addAttribute("activeGroup", "inventory");
        return "pages/inventory/product-list";
    }
    @GetMapping("add-product")
    public String addproduct(Model modal) {
        modal.addAttribute("activePage", "add-product");
        modal.addAttribute("activeGroup", "inventory");
        return "pages/inventory/add-product";
    }
    @GetMapping("edit-product")
    public String editproduct(Model modal) {
        modal.addAttribute("activePage", "edit-product");
        modal.addAttribute("activeGroup", "inventory");
        return "pages/inventory/edit-product";
    }
    @GetMapping("product-details")
    public String productdetails(Model modal) {
        modal.addAttribute("activePage", "product-details");
        modal.addAttribute("activeGroup", "inventory");
        return "pages/inventory/product-details";
    }
    @GetMapping("expired-products")
    public String expiredproducts(Model modal) {
        modal.addAttribute("activePage", "expired-products");
        modal.addAttribute("activeGroup", "inventory");
        return "pages/inventory/expired-products";
    }
    @GetMapping("low-stocks")
    public String lowstocks(Model modal) {
        modal.addAttribute("activePage", "low-stocks");
        modal.addAttribute("activeGroup", "inventory");
        return "pages/inventory/low-stocks";
    }
    @GetMapping("category-list")
    public String categorylist(Model modal) {
        modal.addAttribute("activePage", "category-list");
        modal.addAttribute("activeGroup", "inventory");
        return "pages/inventory/category-list";
    }
    @GetMapping("sub-categories")
    public String subcategory(Model modal) {
        modal.addAttribute("activePage", "sub-categories");
        modal.addAttribute("activeGroup", "inventory");
        return "pages/inventory/sub-categories";
    }
    @GetMapping("brand-list")
    public String brandlist(Model modal) {
        modal.addAttribute("activePage", "brand-list");
        modal.addAttribute("activeGroup", "inventory");
        return "pages/inventory/brand-list";
    }
    @GetMapping("units")
    public String units(Model modal) {
        modal.addAttribute("activePage", "units");
        modal.addAttribute("activeGroup", "inventory");
        return "pages/inventory/units";
    }
    @GetMapping("varriant-attributes")
    public String varriantattributes(Model modal) {
        modal.addAttribute("activePage", "varriant-attributes");
        modal.addAttribute("activeGroup", "inventory");
        return "pages/inventory/varriant-attributes";
    }
    @GetMapping("warranty")
    public String warranty(Model modal) {
        modal.addAttribute("activePage", "warranty");
        modal.addAttribute("activeGroup", "inventory");
        return "pages/inventory/warranty";
    }
    @GetMapping("barcode")
    public String barcode(Model modal) {
        modal.addAttribute("activePage", "barcode");
        modal.addAttribute("activeGroup", "inventory");
        return "pages/inventory/barcode";
    }
    @GetMapping("qrcode")
    public String qrcode(Model modal) {
        modal.addAttribute("activePage", "qrcode");
        modal.addAttribute("activeGroup", "inventory");
        return "pages/inventory/qrcode";
    }
}
