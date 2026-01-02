package com.example.template.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;

@Controller
public class superadmin {
    
    @GetMapping("dashboard")
    public String dashboard(Model modal) {  
        modal.addAttribute("activePage", "dashboard");
        modal.addAttribute("activeGroup", "super-admin");
        return "pages/main/super-admin/dashboard";
    }
    @GetMapping("companies")
    public String companies(Model modal) {  
        modal.addAttribute("activePage", "companies");
        modal.addAttribute("activeGroup", "super-admin");
        return "pages/main/super-admin/companies";
    }
    @GetMapping("subscription")
    public String subscription(Model modal) {  
        modal.addAttribute("activePage", "subscription");
        modal.addAttribute("activeGroup", "super-admin");
        return "pages/main/super-admin/subscription";
    }
    @GetMapping("packages")
    public String packages(Model modal) {  
        modal.addAttribute("activePage", "packages");
        modal.addAttribute("activeGroup", "super-admin");
        return "pages/main/super-admin/packages";
    }
    @GetMapping("purchase-transaction")
    public String purchaseTransaction(Model modal) {  
        modal.addAttribute("activePage", "purchase-transaction");
        modal.addAttribute("activeGroup", "super-admin");
        return "pages/main/super-admin/purchase-transaction";
    }
    @GetMapping("domain")
    public String domain(Model modal) {  
        modal.addAttribute("activePage", "domain");
        modal.addAttribute("activeGroup", "super-admin");
        return "pages/main/super-admin/domain";
    }
}
