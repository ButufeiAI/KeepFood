package com.example.template.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class authentication {
    @GetMapping("signin")
    public String signin() {
    return "pages/authentication/signin/signin";
    }
    @GetMapping("signin-2")
    public String signin2() {
    return "pages/authentication/signin/signin-2";
    }
    @GetMapping("signin-3")
    public String signin3() {
    return "pages/authentication/signin/signin-3";
    }
    @GetMapping("forgot-password")
    public String forgotPassword() {
    return "pages/authentication/forgot-password/forgot-password";
    }
    @GetMapping("forgot-password-2")
    public String forgotPassword2() {
    return "pages/authentication/forgot-password/forgot-password-2";
    }
    @GetMapping("forgot-password-3")
    public String forgotPassword3() {
    return "pages/authentication/forgot-password/forgot-password-3";
    }
    @GetMapping("register")
    public String register() {
    return "pages/authentication/register/register";
    }
    @GetMapping("register-2")
    public String register2() {
    return "pages/authentication/register/register-2";
    }
    @GetMapping("register-3")
    public String register3() {
    return "pages/authentication/register/register-3";
    }
    @GetMapping("reset-password")
    public String resetPassword() {
    return "pages/authentication/reset-password/reset-password";
    }
    @GetMapping("reset-password-2")
    public String resetPassword2() {
    return "pages/authentication/reset-password/reset-password-2";
    }
    @GetMapping("reset-password-3")
    public String resetPassword3() {
    return "pages/authentication/reset-password/reset-password-3";
    }
    @GetMapping("email-verification")
    public String emailVerification() {
    return "pages/authentication/email-verification/email-verification";
    }
    @GetMapping("email-verification-2")
    public String emailVerification2() {
    return "pages/authentication/email-verification/email-verification-2";
    }
    @GetMapping("email-verification-3")
    public String emailVerification3() {
    return "pages/authentication/email-verification/email-verification-3";
    }
    @GetMapping("two-step-verification")
    public String twoStepVerification() {
    return "pages/authentication/two-step-verification/two-step-verification";
    }
    @GetMapping("two-step-verification-2")
    public String twoStepVerification2() {
    return "pages/authentication/two-step-verification/two-step-verification-2";
    }
    @GetMapping("two-step-verification-3")
    public String twoStepVerification3() {
    return "pages/authentication/two-step-verification/two-step-verification-3";
    }
    @GetMapping("success")
    public String success() {
    return "pages/authentication/success/success";
    }
    @GetMapping("success-2")
    public String success2() {
    return "pages/authentication/success/success-2";
    }
    @GetMapping("success-3")
    public String success3() {
    return "pages/authentication/success/success-3";
    }
    @GetMapping("error-404")
    public String error404() {
    return "pages/authentication/error/error-404";
    }
    @GetMapping("error-500")
    public String error500() {
    return "pages/authentication/error/error-500";
    }
        @GetMapping("under-maintenance")
        public String underMaintenance() {
        return "pages/authentication/under-maintenance";
        }
        @GetMapping("lock-screen")
        public String lockScreen() {
        return "pages/authentication/lock-screen";
        }
        @GetMapping("coming-soon")
        public String comingSoon() {
        return "pages/authentication/coming-soon";
        }
}
