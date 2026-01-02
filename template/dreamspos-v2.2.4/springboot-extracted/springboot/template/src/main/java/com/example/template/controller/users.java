package com.example.template.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class users {
    @GetMapping("users")
    public String users(Model model) {
    model.addAttribute("activePage", "users");
    model.addAttribute("activeHorizontal", "users");
    return "pages/user-management/users";
    }
    @GetMapping("roles-permissions")
    public String roles_permissions(Model model) {
    model.addAttribute("activePage", "roles-permissions");
        model.addAttribute("activeHorizontal", "users");
    return "pages/user-management/roles-permissions";
    }
    @GetMapping("permissions")
    public String permissions(Model model) {
    model.addAttribute("activePage", "permissions");
        model.addAttribute("activeHorizontal", "users");
    return "pages/user-management/permissions";
    }
    @GetMapping("delete-account")
    public String delete_account(Model model) {
    model.addAttribute("activePage", "delete-account");
    model.addAttribute("activeHorizontal", "users");
    return "pages/user-management/delete-account";
    }
}
