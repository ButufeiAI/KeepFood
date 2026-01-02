package com.example.template.controller;

import org.springframework.web.bind.annotation.GetMapping;      
import org.springframework.ui.Model;
import org.springframework.stereotype.Controller;

@Controller
public class maps {
    @GetMapping("maps-vector")
    public String mapsVector(Model modal) {
        modal.addAttribute("activePage", "maps-vector");
        modal.addAttribute("activeGroup", "maps");
        return "pages/ui-interface/maps/maps-vector";
    }
    @GetMapping("maps-leaflet")
    public String mapsLeaflet(Model modal) {
        modal.addAttribute("activePage", "maps-leaflet");
        modal.addAttribute("activeGroup", "maps");
        return "pages/ui-interface/maps/maps-leaflet";
    }
}
