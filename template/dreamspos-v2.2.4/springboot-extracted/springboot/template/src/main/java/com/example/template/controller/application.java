package com.example.template.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class application {
    @GetMapping("chat")
    public String uiChat(Model model) {
        model.addAttribute("activePage", "chat");
        model.addAttribute("activeGroup", "application");
        return "pages/main/application/chat";
    }   
    @GetMapping("audio-call")
    public String audioCall(Model model) {
        model.addAttribute("activePage", "audio-call");
        model.addAttribute("activeGroup", "application");
        model.addAttribute("activeSubGroup", "calls");
        return "pages/main/application/calls/audio-call";
    }   
    @GetMapping("video-call")
    public String videoCall(Model model) {
        model.addAttribute("activePage", "video-call");
        model.addAttribute("activeGroup", "application");
        model.addAttribute("activeSubGroup", "calls");
        return "pages/main/application/calls/video-call";
    }   
    @GetMapping("call-history")
    public String callHistory(Model model) {
        model.addAttribute("activePage", "call-history");
        model.addAttribute("activeGroup", "application");
        model.addAttribute("activeSubGroup", "calls");
        return "pages/main/application/calls/call-history";
    }   
    @GetMapping("calendar")
    public String calendar(Model model) {
        model.addAttribute("activePage", "calendar");
        model.addAttribute("activeGroup", "application");
        return "pages/main/application/calendar";
    }   
    @GetMapping("contacts")
    public String contacts(Model model) {
        model.addAttribute("activePage", "contacts");
        model.addAttribute("activeGroup", "application");
        return "pages/main/application/contacts";
    }   
    @GetMapping("email")
    public String email(Model model) {
        model.addAttribute("activePage", "email");
        model.addAttribute("activeGroup", "application");
        return "pages/main/application/email";
    }   
    @GetMapping("email-reply")
    public String emailReply(Model model) {
        model.addAttribute("activePage", "email-reply");
        model.addAttribute("activeGroup", "application");
        return "pages/main/application/email-reply";
    }   
    @GetMapping("todo")
    public String todo(Model model) {
        model.addAttribute("activePage", "todo");
        model.addAttribute("activeGroup", "application");
        return "pages/main/application/todo";
    }   
    @GetMapping("todo-list")
    public String todoList(Model model) {
        model.addAttribute("activePage", "todo-list");
        model.addAttribute("activeGroup", "application");
        return "pages/main/application/todo-list";
    }   
    @GetMapping("notes")
    public String notes(Model model) {
        model.addAttribute("activePage", "notes");
        model.addAttribute("activeGroup", "application");
        return "pages/main/application/notes";
    }   
    @GetMapping("file-manager")
    public String fileManager(Model model) {
        model.addAttribute("activePage", "file-manager");
        model.addAttribute("activeGroup", "application");
        return "pages/main/application/file-manager";
    }   
    @GetMapping("projects")
    public String projects(Model model) {
        model.addAttribute("activePage", "projects");
        model.addAttribute("activeGroup", "application");
        return "pages/main/application/projects";
    }   
    @GetMapping("social-feed")
    public String socialFeed(Model model) {
        model.addAttribute("activePage", "social-feed");
        model.addAttribute("activeGroup", "application");
        return "pages/main/application/social-feed";
    }   
    @GetMapping("search-list")
    public String searchList(Model model) {
        model.addAttribute("activePage", "search-list");
        model.addAttribute("activeGroup", "application");
        return "pages/main/application/search-list";
    }   
    @GetMapping("products")
    public String products(Model model) {
        model.addAttribute("activePage", "products");
        model.addAttribute("activeGroup", "application");
        model.addAttribute("activeSubGroup", "ecommerce");
        return "pages/main/application/ecommerce/products";
    }   
    @GetMapping("orders")
    public String orders(Model model) {
        model.addAttribute("activePage", "orders");
        model.addAttribute("activeGroup", "application");
        model.addAttribute("activeSubGroup", "ecommerce");
        return "pages/main/application/ecommerce/orders";
    }   
    @GetMapping("customers")
    public String customers(Model model) {
        model.addAttribute("activePage", "customers");
        model.addAttribute("activeGroup", "application");
        model.addAttribute("activeSubGroup", "ecommerce");
        return "pages/main/application/ecommerce/customers";
    }   
    @GetMapping("cart")
    public String cart(Model model) {
        model.addAttribute("activePage", "cart");
        model.addAttribute("activeGroup", "application");
        model.addAttribute("activeSubGroup", "ecommerce");
        return "pages/main/application/ecommerce/cart";
    }
    @GetMapping("checkout")
    public String checkout(Model model) {
        model.addAttribute("activePage", "checkout");
        model.addAttribute("activeGroup", "application");
        model.addAttribute("activeSubGroup", "ecommerce");
        return "pages/main/application/ecommerce/checkout";
    }
    @GetMapping("wishlist")
    public String wishlist(Model model) {
        model.addAttribute("activePage", "wishlist");
        model.addAttribute("activeGroup", "application");
        model.addAttribute("activeSubGroup", "ecommerce");
        return "pages/main/application/ecommerce/wishlist";
    }
    @GetMapping("reviews")
    public String reviews(Model model) {
        model.addAttribute("activePage", "reviews");
        model.addAttribute("activeGroup", "application");
        model.addAttribute("activeSubGroup", "ecommerce");
        return "pages/main/application/ecommerce/reviews";
    }
}
