package com.example.template.controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;


@Controller
public class forms {
    
    @GetMapping("form-basic-inputs")
    public String formBasicInputs(Model model) {
        model.addAttribute("activePage", "form-basic-inputs");
        model.addAttribute("activeGroup", "forms");
        model.addAttribute("activeSubGroup", "form-element");
        return "pages/ui-interface/forms/form-basic-inputs";
    }
    @GetMapping("form-checkbox-radios")
    public String formCheckboxRadios(Model model) {
        model.addAttribute("activePage", "form-checkbox-radios");
        model.addAttribute("activeGroup", "forms");
        model.addAttribute("activeSubGroup", "form-element");
        return "pages/ui-interface/forms/form-checkbox-radios";
    }
    @GetMapping("form-fileupload")
    public String formFileupload(Model model) {
        model.addAttribute("activePage", "form-fileupload");
        model.addAttribute("activeGroup", "forms");
        model.addAttribute("activeSubGroup", "form-element");
        return "pages/ui-interface/forms/form-fileupload";
    }
    @GetMapping("form-grid-gutters")
    public String formGridGutters(Model model) {
        model.addAttribute("activePage", "form-grid-gutters");
        model.addAttribute("activeGroup", "forms");
        model.addAttribute("activeSubGroup", "form-element");
        return "pages/ui-interface/forms/form-grid-gutters";
    }
    @GetMapping("form-input-groups")
    public String formInputGroups(Model model) {
        model.addAttribute("activePage", "form-input-groups");
        model.addAttribute("activeGroup", "forms");
        model.addAttribute("activeSubGroup", "form-element");
        return "pages/ui-interface/forms/form-input-groups";
    }
    @GetMapping("form-mask")
    public String formMask(Model model) {
        model.addAttribute("activePage", "form-mask");
        model.addAttribute("activeGroup", "forms");
        model.addAttribute("activeSubGroup", "form-element");
        return "pages/ui-interface/forms/form-mask";
    }
    @GetMapping("form-select")
    public String formSelect(Model model) {
        model.addAttribute("activePage", "form-select");
        model.addAttribute("activeGroup", "forms");
        model.addAttribute("activeSubGroup", "form-element");
        return "pages/ui-interface/forms/form-select";
    }
    @GetMapping("form-horizontal")
    public String formHorizontal(Model model) {
        model.addAttribute("activePage", "form-horizontal");
        model.addAttribute("activeGroup", "forms");
        model.addAttribute("activeSubGroup", "form-layout");
        return "pages/ui-interface/forms/form-horizontal";
    }
    @GetMapping("form-vertical")
    public String formVertical(Model model) {
        model.addAttribute("activePage", "form-vertical");
        model.addAttribute("activeGroup", "forms");
        model.addAttribute("activeSubGroup", "form-layout");
        return "pages/ui-interface/forms/form-vertical";
    }
    @GetMapping("form-floating-labels")
    public String formFloatingLabels(Model model) {
        model.addAttribute("activePage", "form-floating-labels");
        model.addAttribute("activeGroup", "forms");
        model.addAttribute("activeSubGroup", "form-layout");
        return "pages/ui-interface/forms/form-floating-labels";
    }
    @GetMapping("form-validation")
    public String formValidation(Model model) {
        model.addAttribute("activePage", "form-validation");
        model.addAttribute("activeGroup", "forms");
        return "pages/ui-interface/forms/form-validation";
    }
    @GetMapping("form-select2")
    public String formSelect2(Model model) {
        model.addAttribute("activePage", "form-select2");
        model.addAttribute("activeGroup", "forms");
        return "pages/ui-interface/forms/form-select2";
    }
    @GetMapping("form-wizard")
    public String formWizard(Model model) {
        model.addAttribute("activePage", "form-wizard");
        model.addAttribute("activeGroup", "forms");
        return "pages/ui-interface/forms/form-wizard";
    }
    @GetMapping("form-pickers")
    public String formPickers(Model model) {
        model.addAttribute("activePage", "form-pickers");
        model.addAttribute("activeGroup", "forms");
        return "pages/ui-interface/forms/form-pickers";
    }
}
