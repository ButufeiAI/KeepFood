package com.example.template.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class promo {
    @GetMapping("coupons")
    public String coupons(Model modal) {
        modal.addAttribute("activePage", "coupons");
        modal.addAttribute("activeHorizontal", "promo");
        return "pages/promo/coupons";
    }
    @GetMapping("discount")
    public String discount(Model modal) {
        modal.addAttribute("activePage", "discount");
        modal.addAttribute("activeGroup", "discount");
         modal.addAttribute("activeHorizontal", "promo");
        return "pages/promo/discount";
    }
    @GetMapping("discount-plan")
    public String discountPlan(Model modal) {
        modal.addAttribute("activePage", "discount-plan");
        modal.addAttribute("activeGroup", "discount");
         modal.addAttribute("activeHorizontal", "promo");
        return "pages/promo/discount-plan";
    }
    @GetMapping("gift-cards")
    public String giftCards(Model modal) {
        modal.addAttribute("activePage", "gift-cards");
        modal.addAttribute("activetwocolumn", "finance");
        return "pages/promo/gift-cards";
    }
}
