package com.example.template.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class settings {
    @GetMapping("general-settings")
    public String generalSettings(Model model) {
        model.addAttribute("activePage", "general-settings");
        model.addAttribute("activeGroup", "generals-settings");
        return "pages/settings/general-settings/general-settings";
    }
    @GetMapping("security-settings")
    public String securitySettings(Model model) {
        model.addAttribute("activePage", "security-settings");
        model.addAttribute("activeGroup", "generals-settings");
        return "pages/settings/general-settings/security-settings";
    }
    @GetMapping("notification")
    public String notification(Model model) {
        model.addAttribute("activePage", "notification");
        model.addAttribute("activeGroup", "generals-settings");
        return "pages/settings/general-settings/notification";
    }
    @GetMapping("connected-apps")
    public String connectedApps(Model model) {
        model.addAttribute("activePage", "connected-apps");
        model.addAttribute("activeGroup", "generals-settings");
        return "pages/settings/general-settings/connected-apps";
    }
    
    @GetMapping("system-settings")
    public String systemSettings(Model model) {
        model.addAttribute("activePage", "system-settings");
        model.addAttribute("activeGroup", "website-settings");
        return "pages/settings/website-settings/system-settings";
    }
    @GetMapping("company-settings")
    public String companySettings(Model model) {
        model.addAttribute("activePage", "company-settings");
        model.addAttribute("activeGroup", "website-settings");
        return "pages/settings/website-settings/company-settings";
    }
    @GetMapping("localization-settings")
    public String localizationSettings(Model model) {
        model.addAttribute("activePage", "localization-settings");
        model.addAttribute("activeGroup", "website-settings");
        return "pages/settings/website-settings/localization-settings";
    }
    @GetMapping("prefixes")
    public String prefixes(Model model) {
        model.addAttribute("activePage", "prefixes");
        model.addAttribute("activeGroup", "website-settings");
        return "pages/settings/website-settings/prefixes";
    }
    @GetMapping("preference")
    public String preference(Model model) {
        model.addAttribute("activePage", "preference");
        model.addAttribute("activeGroup", "website-settings");
        return "pages/settings/website-settings/preference";
    }
    @GetMapping("appearance")
    public String appearance(Model model) {
        model.addAttribute("activePage", "appearance");
        model.addAttribute("activeGroup", "website-settings");
        return "pages/settings/website-settings/appearance";
    }
    @GetMapping("social-authentication")
    public String socialAuthentication(Model model) {
        model.addAttribute("activePage", "social-authentication");
        model.addAttribute("activeGroup", "website-settings");
        return "pages/settings/website-settings/social-authentication";
    }
    @GetMapping("language-settings-web")
    public String languageSettingsWeb(Model model) {
        model.addAttribute("activePage", "language-settings-web");
        model.addAttribute("activeGroup", "website-settings");
        return "pages/settings/website-settings/language-settings-web";
    }
    @GetMapping("language-settings")
    public String languageSettings(Model model) {
        model.addAttribute("activePage", "language-settings");
        model.addAttribute("activeGroup", "website-settings");
        return "pages/settings/website-settings/language-settings";
    }
    @GetMapping("invoice-settings")
    public String invoiceSettings(Model model) {
        model.addAttribute("activePage", "invoice-settings");
        model.addAttribute("activeGroup", "app-settings");
        return "pages/settings/app-settings/invoice-settings";
    }
    @GetMapping("invoice-templates")
    public String invoiceTemplates(Model model) {
        model.addAttribute("activePage", "invoice-templates");
        model.addAttribute("activeGroup", "app-settings");
        return "pages/settings/app-settings/invoice-templates";
    }
    @GetMapping("printer-settings")
    public String printerSettings(Model model) {
        model.addAttribute("activePage", "printer-settings");
        model.addAttribute("activeGroup", "app-settings");
        return "pages/settings/app-settings/printer-settings";
    }
    @GetMapping("pos-settings")
    public String posSettings(Model model) {
        model.addAttribute("activePage", "pos-settings");
        model.addAttribute("activeGroup", "app-settings");
        return "pages/settings/app-settings/pos-settings";
    }
    @GetMapping("signatures")
    public String signatures(Model model) {
        model.addAttribute("activePage", "signatures");
        model.addAttribute("activeGroup", "app-settings");
        return "pages/settings/app-settings/signatures";
    }
    @GetMapping("custom-fields")
    public String customFields(Model model) {
        model.addAttribute("activePage", "custom-fields");
        model.addAttribute("activeGroup", "app-settings");
        return "pages/settings/app-settings/custom-fields";
    }
    @GetMapping("email-settings")
    public String emailSettings(Model model) {
        model.addAttribute("activePage", "email-settings");
        model.addAttribute("activeGroup", "system-settings");
        model.addAttribute("activeSubGroup", "emails");
        return "pages/settings/system-settings/email-settings";
    }
    @GetMapping("email-template")
    public String emailTemplate(Model model) {
        model.addAttribute("activePage", "email-template");
        model.addAttribute("activeGroup", "system-settings");
        model.addAttribute("activeSubGroup", "emails");
        return "pages/settings/system-settings/email-template";
    }
    @GetMapping("sms-settings")
    public String smsSettings(Model model) {
        model.addAttribute("activePage", "sms-settings");
        model.addAttribute("activeGroup", "system-settings");
        model.addAttribute("activeSubGroup", "sms");
        return "pages/settings/system-settings/sms-settings";
    }
    @GetMapping("sms-template")
    public String smsTemplate(Model model) {
        model.addAttribute("activePage", "sms-template");
        model.addAttribute("activeGroup", "system-settings");
        model.addAttribute("activeSubGroup", "sms");
        return "pages/settings/system-settings/sms-template";
    }
    @GetMapping("otp-settings")
    public String otpSettings(Model model) {
        model.addAttribute("activePage", "otp-settings");
        model.addAttribute("activeGroup", "system-settings");
        return "pages/settings/system-settings/otp-settings";
    }
    @GetMapping("gdpr-settings")
    public String gdprSettings(Model model) {
        model.addAttribute("activePage", "gdpr-settings");
        model.addAttribute("activeGroup", "system-settings");
        return "pages/settings/system-settings/gdpr-settings";
    }
    @GetMapping("payment-gateway-settings")
    public String paymentGatewaySettings(Model model) {
        model.addAttribute("activePage", "payment-gateway-settings");
        model.addAttribute("activeGroup", "financial-settings");
        return "pages/settings/financial-settings/payment-gateway-settings";
    }
    @GetMapping("bank-settings-grid")
    public String bankSettingsGrid(Model model) {
        model.addAttribute("activePage", "bank-settings-grid");
        model.addAttribute("activeGroup", "financial-settings");
        return "pages/settings/financial-settings/bank-settings-grid";
    }
    @GetMapping("tax-rates")
    public String taxRates(Model model) {
        model.addAttribute("activePage", "tax-rates");
        model.addAttribute("activeGroup", "financial-settings");
        return "pages/settings/financial-settings/tax-rates";
    }
    @GetMapping("currency-settings")
    public String currencySettings(Model model) {
        model.addAttribute("activePage", "currency-settings");
        model.addAttribute("activeGroup", "financial-settings");
        return "pages/settings/financial-settings/currency-settings";
    }
    @GetMapping("ban-ip-address")
    public String banIpAddress(Model model) {
        model.addAttribute("activePage", "ban-ip-address");
        model.addAttribute("activeGroup", "other-settings");
        return "pages/settings/other-settings/ban-ip-address";
    }
    @GetMapping("storage-settings")
    public String storageSettings(Model model) {
        model.addAttribute("activePage", "storage-settings");
        model.addAttribute("activeGroup", "other-settings");
        return "pages/settings/other-settings/storage-settings";
    }
}
