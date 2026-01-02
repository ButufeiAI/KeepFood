package com.example.template.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;

@Controller
public class advancedui {

    @GetMapping("ui-ribbon")
    public String uiRibbon(Model model) {
        model.addAttribute("activePage", "ui-ribbon");
        model.addAttribute("activeGroup", "advancedui");
        return "pages/ui-interface/advanced-ui/ui-ribbon";
    }

    @GetMapping("ui-clipboard")
    public String uiClipboard(Model model) {
        model.addAttribute("activePage", "ui-clipboard");
        model.addAttribute("activeGroup", "advancedui");
        return "pages/ui-interface/advanced-ui/ui-clipboard";
    }

    @GetMapping("ui-counter")
    public String uiCounter(Model model) {
        model.addAttribute("activePage", "ui-counter");
        model.addAttribute("activeGroup", "advancedui");
        return "pages/ui-interface/advanced-ui/ui-counter";
    }

    @GetMapping("ui-drag-drop")
    public String uiDragDrop(Model model) {
        model.addAttribute("activePage", "ui-drag-drop");
        model.addAttribute("activeGroup", "advancedui");
        return "pages/ui-interface/advanced-ui/ui-drag-drop";
    }


    @GetMapping("ui-rangeslider")
    public String uiRangeslider(Model model) {
        model.addAttribute("activePage", "ui-rangeslider");
        model.addAttribute("activeGroup", "advancedui");
        return "pages/ui-interface/advanced-ui/ui-rangeslider";
    }
    @GetMapping("ui-rating")
    public String uiRating(Model model) {
        model.addAttribute("activePage", "ui-rating");
        model.addAttribute("activeGroup", "advancedui");
        return "pages/ui-interface/advanced-ui/ui-rating";
    }
    @GetMapping("ui-text-editor")
    public String uiTextEditor(Model model) {
        model.addAttribute("activePage", "ui-text-editor");
        model.addAttribute("activeGroup", "advancedui");
        return "pages/ui-interface/advanced-ui/ui-text-editor";
    }
    @GetMapping("ui-scrollbar")
    public String uiScrollbar(Model model) {
        model.addAttribute("activePage", "ui-scrollbar");
        model.addAttribute("activeGroup", "advancedui");
        return "pages/ui-interface/advanced-ui/ui-scrollbar";
    }
    @GetMapping("ui-stickynote")
    public String uiStickynote(Model model) {
        model.addAttribute("activePage", "ui-stickynote");
        model.addAttribute("activeGroup", "advancedui");
        return "pages/ui-interface/advanced-ui/ui-stickynote";
    }
    @GetMapping("ui-timeline")
    public String uiTimeline(Model model) {
        model.addAttribute("activePage", "ui-timeline");
        model.addAttribute("activeGroup", "advancedui");
        return "pages/ui-interface/advanced-ui/ui-timeline";
    }


}
