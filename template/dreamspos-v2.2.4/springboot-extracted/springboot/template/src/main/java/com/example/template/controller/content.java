package com.example.template.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class content {

@GetMapping("pages")
public String pages(Model model) {
model.addAttribute("activePage", "pages");
model.addAttribute("activeHorizontal", "content");
return "pages/content/pages";
}
@GetMapping("all-blog")
public String allBlog(Model model) {
model.addAttribute("activePage", "all-blog");
model.addAttribute("activeGroup", "blog");
model.addAttribute("activeHorizontal", "content");
return "pages/content/blog/all-blog";
}
@GetMapping("blog-details")
public String blogDetails(Model model) {
model.addAttribute("activePage", "blog-details");
model.addAttribute("activeGroup", "blog");
model.addAttribute("activeHorizontal", "content");
return "pages/content/blog/blog-details";
}
@GetMapping("blog-tag")
public String blogTag(Model model) {
model.addAttribute("activePage", "blog-tag");
model.addAttribute("activeGroup", "blog");
model.addAttribute("activeHorizontal", "content");
return "pages/content/blog/blog-tag";
}
@GetMapping("blog-comments")
public String blogComment(Model model) {
model.addAttribute("activePage", "blog-comments");
model.addAttribute("activeGroup", "blog");
model.addAttribute("activeHorizontal", "content");
return "pages/content/blog/blog-comments";
}
@GetMapping("blog-categories")
public String blogCategories(Model model) {
model.addAttribute("activePage", "blog-categories");
model.addAttribute("activeGroup", "blog");
model.addAttribute("activeHorizontal", "content");
return "pages/content/blog/blog-categories";
}
@GetMapping("countries")
public String countries(Model model) {
model.addAttribute("activePage", "countries");
model.addAttribute("activeGroup", "location");
model.addAttribute("activeHorizontal", "content");
return "pages/content/location/countries";
}
@GetMapping("states")
public String states(Model model) {
model.addAttribute("activePage", "states");
model.addAttribute("activeGroup", "location");
model.addAttribute("activeHorizontal", "content");
return "pages/content/location/states";
}
@GetMapping("cities")
public String cities(Model model) {
model.addAttribute("activePage", "cities");
model.addAttribute("activeGroup", "location");
model.addAttribute("activeHorizontal", "content");
return "pages/content/location/cities";
}
@GetMapping("testimonials")
public String testimonials(Model model) {
model.addAttribute("activePage", "testimonials");
model.addAttribute("activeHorizontal", "content");
return "pages/content/testimonials";
}
@GetMapping("faq")
public String faq(Model model) {
model.addAttribute("activePage", "faq");
model.addAttribute("activeHorizontal", "content");
return "pages/content/faq";
}
}
