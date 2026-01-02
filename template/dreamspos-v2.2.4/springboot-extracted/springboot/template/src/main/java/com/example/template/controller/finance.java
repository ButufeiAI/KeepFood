package com.example.template.controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.stereotype.Controller;

@Controller
public class finance {
@GetMapping("expense-list")
public String expenseList(Model model) {
model.addAttribute("activePage", "expense-list");
model.addAttribute("activeGroup", "expense");
model.addAttribute("activeHorizontal", "expense");
model.addAttribute("activetwocolumn", "finance");
return "pages/finance-accounts/expense-list";
}
@GetMapping("expense-category")
public String expenseCategory(Model model) {
model.addAttribute("activePage", "expense-category");
model.addAttribute("activeGroup", "expense");
model.addAttribute("activeHorizontal", "expense");
model.addAttribute("activetwocolumn", "finance");
return "pages/finance-accounts/expense-category";
}
@GetMapping("income")
public String income(Model model) {
model.addAttribute("activePage", "income");
model.addAttribute("activeGroup", "income");
model.addAttribute("activeHorizontal", "income");
model.addAttribute("activetwocolumn", "finance");
return "pages/finance-accounts/income";
}
@GetMapping("income-category")
public String incomeCategory(Model model) {
model.addAttribute("activePage", "income-category");
model.addAttribute("activeGroup", "income");
model.addAttribute("activeHorizontal", "income");
model.addAttribute("activetwocolumn", "finance");
return "pages/finance-accounts/income-category";
}
@GetMapping("account-list")
public String accountList(Model model) {
model.addAttribute("activePage", "account-list");
model.addAttribute("activetwocolumn", "finance");
return "pages/finance-accounts/account-list";
}
@GetMapping("money-transfer")
public String moneyTransfer(Model model) {
model.addAttribute("activePage", "money-transfer");
model.addAttribute("activetwocolumn", "finance");
return "pages/finance-accounts/money-transfer";
}
@GetMapping("balance-sheet")
public String balanceSheet(Model model) {
model.addAttribute("activePage", "balance-sheet");
model.addAttribute("activetwocolumn", "finance");
return "pages/finance-accounts/balance-sheet";
}
@GetMapping("trial-balance")
public String trialBalance(Model model) {
model.addAttribute("activePage", "trial-balance");
model.addAttribute("activetwocolumn", "finance");
return "pages/finance-accounts/trial-balance";
}
@GetMapping("cash-flow")
public String cashFlow(Model model) {
model.addAttribute("activePage", "cash-flow");
model.addAttribute("activetwocolumn", "finance");
return "pages/finance-accounts/cash-flow";
}
@GetMapping("account-statement")
public String accountStatement(Model model) {
model.addAttribute("activePage", "account-statement");
model.addAttribute("activetwocolumn", "finance");
return "pages/finance-accounts/account-statement";
}
}
