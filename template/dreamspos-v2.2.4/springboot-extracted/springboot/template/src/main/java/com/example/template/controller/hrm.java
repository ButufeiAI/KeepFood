package com.example.template.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class hrm {
    @GetMapping("employees-grid")
    public String employeesGrid(Model model) {
    model.addAttribute("activePage", "employees-grid");
    model.addAttribute("activeGroup", "employees");
    model.addAttribute("activetwocolumn", "hrm");
    return "pages/hrm/employees-grid";
    }
    @GetMapping("employees-list")
    public String employeesList(Model model) {
    model.addAttribute("activePage", "employees-list");
    model.addAttribute("activeGroup", "employees");
    model.addAttribute("activetwocolumn", "hrm");
    return "pages/hrm/employees-list";
    }
    @GetMapping("add-employee")
    public String addEmployee(Model model) {
    model.addAttribute("activePage", "add-employee");
    model.addAttribute("activeGroup", "employees");
    model.addAttribute("activetwocolumn", "hrm");
    return "pages/hrm/add-employee";
    }
    @GetMapping("edit-employee")
    public String editEmployee(Model model) {
    model.addAttribute("activePage", "edit-employee");
    model.addAttribute("activeGroup", "employees");
    model.addAttribute("activetwocolumn", "hrm");
    return "pages/hrm/edit-employee";
    }
    @GetMapping("department-list")
    public String departmentList(Model model) {
    model.addAttribute("activePage", "department-list");
    model.addAttribute("activeGroup", "department");
    model.addAttribute("activetwocolumn", "hrm");
    return "pages/hrm/department-list";
    }
    @GetMapping("department-grid")
    public String departmentGrid(Model model) {
    model.addAttribute("activePage", "department-grid");
    model.addAttribute("activeGroup", "department");
    model.addAttribute("activetwocolumn", "hrm");
    return "pages/hrm/department-grid";
    }
    @GetMapping("designation")
    public String designation(Model model) {
    model.addAttribute("activePage", "designation");
    model.addAttribute("activetwocolumn", "hrm");
    return "pages/hrm/designation";
    }
    @GetMapping("shift")
    public String shift(Model model) {
    model.addAttribute("activePage", "shift");
    model.addAttribute("activetwocolumn", "hrm");
    return "pages/hrm/shift";
    }
    @GetMapping("attendance-admin")
    public String attendanceAdmin(Model model) {
    model.addAttribute("activePage", "attendance-admin");
    model.addAttribute("activeGroup", "attendance");
    return "pages/hrm/attendance-admin";
    }
    @GetMapping("attendance-employee")
    public String attendanceEmployee(Model model) {
    model.addAttribute("activePage", "attendance-employee");
    model.addAttribute("activeGroup", "attendance");
    model.addAttribute("activetwocolumn", "hrm");
    return "pages/hrm/attendance-employee";
    }
    @GetMapping("leaves-admin")
    public String leavesAdmin(Model model) {
    model.addAttribute("activePage", "leaves-admin");
    model.addAttribute("activeGroup", "leaves");
    model.addAttribute("activetwocolumn", "hrm");
    return "pages/hrm/leaves-admin";
    }
    @GetMapping("leaves-employee")
    public String leavesEmployee(Model model) {
    model.addAttribute("activePage", "leaves-employee");
    model.addAttribute("activeGroup", "leaves");
    model.addAttribute("activetwocolumn", "hrm");
    return "pages/hrm/leaves-employee";
    }
    @GetMapping("leave-types")
    public String leavesTypes(Model model) {
    model.addAttribute("activePage", "leave-types");
    model.addAttribute("activeGroup", "leaves");
    model.addAttribute("activetwocolumn", "hrm");
    return "pages/hrm/leave-types";
    }
    @GetMapping("holidays")
    public String holidays(Model model) {
    model.addAttribute("activePage", "holidays");
    model.addAttribute("activetwocolumn", "hrm");
    return "pages/hrm/holidays";
    }
    @GetMapping("employee-salary")
    public String employeeSalary(Model model) {
    model.addAttribute("activePage", "employee-salary");
    model.addAttribute("activeGroup", "payroll");
    model.addAttribute("activetwocolumn", "hrm");
    return "pages/hrm/employee-salary";
    }
    @GetMapping("payslip")
    public String payslip(Model model) {
    model.addAttribute("activePage", "payslip");
    model.addAttribute("activeGroup", "payroll");
    model.addAttribute("activetwocolumn", "hrm");
    return "pages/hrm/payslip";
    }
}
