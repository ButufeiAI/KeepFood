const express = require("express");
const route = express.Router();
const public_routes = require("./public.routes");

const index = "index";
const index_without_nav = "index-without-nav";
const index_error = "index-error";
const pos_index = "pos-index"

route.use(function (req, res, next) {
  console.log(req.url)
  let url_replace_options = req?.url?.replace("?", "")?.replace("/", "");
  let routes = {};
  for (var key in public_routes) {
    routes[key] = public_routes[key]?.replace("/", "");
  }
  res.locals.routes = routes;
  res.locals.active_path = url_replace_options;
  next();
});


// --------------- ( Error Pages ) ----------------------

route.get(public_routes.pageNotFount, (req, res, next) => {
  res.render(index_error, {
    title: "Dreams Pos Admin Template",
    page_path: "error-404",
    layout: index_error,
  });
});

route.get(public_routes.serverError, (req, res, next) => {
  res.render(index_error, {
    title: "Dreams Pos Admin Template",
    page_path: "error-500",
    layout: index_error,
  });
});

route.get(public_routes.coming_soon, (req, res, next) => {
  res.render(index_error, {
    title: "Dreams Pos Admin Template",
    page_path: "coming-soon",
    layout: index_error,
  });
});

route.get(public_routes.under_maintenance, (req, res, next) => {
  res.render(index_error, {
    title: "Dreams Pos Admin Template",
    page_path: "under-maintenance",
    layout: index_error,
  });
});


//   -------------- ( Auth ) ------------------

route.get(public_routes.login, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Dreams Pos Admin Template",
    layout: index_without_nav,
    page_path: "login",
  });
});

route.get(public_routes.signin_2, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Dreams Pos Admin Template",
    layout: index_without_nav,
    page_path: "signin-2",
  });
});

route.get(public_routes.signin_3, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Dreams Pos Admin Template",
    layout: index_without_nav,
    page_path: "signin-3",
  });
});

route.get(public_routes.forgot_password, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Dreams Pos Admin Template",
    layout: index_without_nav,
    page_path: "forgot-password",
  });
});

route.get(public_routes.forgot_password_2, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Dreams Pos Admin Template",
    layout: index_without_nav,
    page_path: "forgot-password-2",
  });
});

route.get(public_routes.forgot_password_3, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Dreams Pos Admin Template",
    layout: index_without_nav,
    page_path: "forgot-password-3",
  });
});

route.get(public_routes.register, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Dreams Pos Admin Template",
    layout: index_without_nav,
    page_path: "register",
  });
});

route.get(public_routes.register_2, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Dreams Pos Admin Template",
    layout: index_without_nav,
    page_path: "register-2",
  });
});

route.get(public_routes.register_3, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Dreams Pos Admin Template",
    layout: index_without_nav,
    page_path: "register-3",
  });
});

route.get(public_routes.reset_password, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Dreams Pos Admin Template",
    layout: index_without_nav,
    page_path: "reset-password",
  });
});

route.get(public_routes.reset_password_2, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Dreams Pos Admin Template",
    layout: index_without_nav,
    page_path: "reset-password-2",
  });
});

route.get(public_routes.reset_password_3, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Dreams Pos Admin Template",
    layout: index_without_nav,
    page_path: "reset-password-3",
  });
});

route.get(public_routes.email_verification, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Dreams Pos Admin Template",
    layout: index_without_nav,
    page_path: "email-verification",
  });
});

route.get(public_routes.email_verification_2, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Dreams Pos Admin Template",
    layout: index_without_nav,
    page_path: "email-verification-2",
  });
});

route.get(public_routes.email_verification_3, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Dreams Pos Admin Template",
    layout: index_without_nav,
    page_path: "email-verification-3",
  });
});

route.get(public_routes.success, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Dreams Pos Admin Template",
    layout: index_without_nav,
    page_path: "success",
  });
});

route.get(public_routes.success_2, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Dreams Pos Admin Template",
    layout: index_without_nav,
    page_path: "success-2",
  });
});

route.get(public_routes.success_3, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Dreams Pos Admin Template",
    layout: index_without_nav,
    page_path: "success-3",
  });
});

route.get(public_routes.two_step_verification, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Dreams Pos Admin Template",
    layout: index_without_nav,
    page_path: "two-step-verification",
  });
});

route.get(public_routes.two_step_verification_2, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Dreams Pos Admin Template",
    layout: index_without_nav,
    page_path: "two-step-verification-2",
  });
});

route.get(public_routes.two_step_verification_3, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Dreams Pos Admin Template",
    layout: index_without_nav,
    page_path: "two-step-verification-3",
  });
});

route.get(public_routes.lock_screen, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Dreams Pos Admin Template",
    layout: index_without_nav,
    page_path: "lock-screen",
  });
});


// ---------------- ( Main Menu ) --------------------------

route.get(public_routes.admin_dashboard, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "dashboard/admin-dashboard",
  });
});

route.get(public_routes.admin_dashboard_2, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "dashboard/admin-dashboard-2",
  });
});

route.get(public_routes.sales_dashboard, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "dashboard/sales-dashboard",
  });
});


// ---------------- ( Super Admin ) --------------------------

route.get(public_routes.dashboard, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "super-admin/dashboard",
  });
});

route.get(public_routes.companies, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "super-admin/companies",
  });
});

route.get(public_routes.subscription, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "super-admin/subscription",
  });
});

route.get(public_routes.packages, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "super-admin/packages",
  });
});

route.get(public_routes.domain, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "super-admin/domain",
  });
});

route.get(public_routes.purchase_transaction, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "super-admin/purchase-transaction",
  });
});


// ---------------- ( Application ) --------------------------

route.get(public_routes.chat, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "application/chat",
  });
});

route.get(public_routes.video_call, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "application/video-call",
  });
});

route.get(public_routes.audio_call, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "application/audio-call",
  });
});

route.get(public_routes.call_history, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "application/call-history",
  });
});

route.get(public_routes.calendar, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "application/calendar",
  });
});

route.get(public_routes.contacts, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "application/contacts",
  });
});

route.get(public_routes.email, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "application/email",
  });
});

route.get(public_routes.email_reply, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "application/email-reply",
  });
});

route.get(public_routes.todo, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "application/todo",
  });
});

route.get(public_routes.todo_list, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "application/todo-list",
  });
});

route.get(public_routes.notes, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "application/notes",
  });
});

route.get(public_routes.file_manager, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "application/file-manager",
  });
});

route.get(public_routes.projects, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "application/projects",
  });
});

route.get(public_routes.products, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "application/products",
  });
});

route.get(public_routes.orders, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "application/orders",
  });
});

route.get(public_routes.customers, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "application/customers",
  });
});

route.get(public_routes.cart, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "application/cart",
  });
});

route.get(public_routes.checkout, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "application/checkout",
  });
});

route.get(public_routes.wishlist, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "application/wishlist",
  });
});

route.get(public_routes.reviews, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "application/reviews",
  });
});

route.get(public_routes.social_feed, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "application/social-feed",
  });
});

route.get(public_routes.search_list, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "application/search-list",
  });
});


// ---------------- ( Inventory ) --------------------------

route.get(public_routes.product_list, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "inventory/product-list",
  });
});

route.get(public_routes.add_product, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "inventory/add-product",
  });
});

route.get(public_routes.edit_product, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "inventory/edit-product",
  });
});

route.get(public_routes.expired_products, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "inventory/expired-products",
  });
});

route.get(public_routes.low_stocks, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "inventory/low-stocks",
  });
});

route.get(public_routes.category_list, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "inventory/category-list",
  });
});

route.get(public_routes.sub_categories, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "inventory/sub-categories",
  });
});

route.get(public_routes.brand_list, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "inventory/brand-list",
  });
});

route.get(public_routes.units, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "inventory/units",
  });
});

route.get(public_routes.varriant_attributes, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "inventory/varriant-attributes",
  });
});

route.get(public_routes.warranty, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "inventory/warranty",
  });
});

route.get(public_routes.barcode, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "inventory/barcode",
  });
});

route.get(public_routes.qrcode, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "inventory/qrcode",
  });
});

route.get(public_routes.product_details, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "inventory/product-details",
  });
});


// ---------------- ( Stock ) --------------------------

route.get(public_routes.manage_stocks, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "stock/manage-stocks",
  });
});

route.get(public_routes.stock_adjustment, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "stock/stock-adjustment",
  });
});

route.get(public_routes.stock_transfer, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "stock/stock-transfer",
  });
});


// ---------------- ( Sales ) --------------------------

route.get(public_routes.online_orders, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "sales/online-orders",
  });
})

route.get(public_routes.pos_orders, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "sales/pos-orders",
  });
})

route.get(public_routes.invoice, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "sales/invoice",
  });
})

route.get(public_routes.invoice_details, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "sales/invoice-details",
  });
})

route.get(public_routes.sales_returns, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "sales/sales-returns",
  });
})

route.get(public_routes.quotation_list, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "sales/quotation-list",
  });
})

route.get(public_routes.pos, (req, res, next) => {
  res.render(pos_index, {
    title: "Dreams Pos Admin Template",
    layout: pos_index,
    page_path: "/pos/pos",
  });
});

route.get(public_routes.pos_2, (req, res, next) => {
  res.render(pos_index, {
    title: "Dreams Pos Admin Template",
    layout: pos_index,
    page_path: "/pos/pos-2",
  });
});

route.get(public_routes.pos_3, (req, res, next) => {
  res.render(pos_index, {
    title: "Dreams Pos Admin Template",
    layout: pos_index,
    page_path: "/pos/pos-3",
  });
});

route.get(public_routes.pos_4, (req, res, next) => {
  res.render(pos_index, {
    title: "Dreams Pos Admin Template",
    layout: pos_index,
    page_path: "/pos/pos-4",
  });
});

route.get(public_routes.pos_5, (req, res, next) => {
  res.render(pos_index, {
    title: "Dreams Pos Admin Template",
    layout: pos_index,
    page_path: "/pos/pos-5",
  });
});


// ---------------- ( Promo ) --------------------------

route.get(public_routes.coupons, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "promo/coupons",
  });
})

route.get(public_routes.gift_cards, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "promo/gift-cards",
  });
})

route.get(public_routes.discount_plan, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "promo/discount-plan",
  });
})

route.get(public_routes.discount, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "promo/discount",
  });
})


// ---------------- ( Purchases ) --------------------------

route.get(public_routes.purchase_list, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "purchases/purchase-list",
  });
})

route.get(public_routes.purchase_order_report, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "purchases/purchase-order-report",
  });
})

route.get(public_routes.purchase_returns, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "purchases/purchase-returns",
  });
})


// ---------------- ( Theme Layouts ) --------------------------

route.get(public_routes.layout_horizontal, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "theme-layout/layout-horizontal",
  });
})

route.get(public_routes.layout_detached, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "theme-layout/layout-detached",
  });
})

route.get(public_routes.layout_two_column, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "theme-layout/layout-two-column",
  });
})

route.get(public_routes.layout_hovered, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "theme-layout/layout-hovered",
  });
})

route.get(public_routes.layout_boxed, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "theme-layout/layout-boxed",
  });
})

route.get(public_routes.layout_rtl, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "theme-layout/layout-rtl",
  });
})

route.get(public_routes.layout_dark, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "theme-layout/layout-dark",
  });
})


// ---------------- ( Pages ) --------------------------

route.get(public_routes.blank_page, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "pages/blank-page",
  });
});

route.get(public_routes.pricing, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "pages/pricing",
  });
});

route.get(public_routes.profile, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "pages/profile",
  });
});

// ---------------- ( User Management ) --------------------------

route.get(public_routes.users, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "user-management/users",
  });
});

route.get(public_routes.roles_permissions, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "user-management/roles-permissions",
  });
});

route.get(public_routes.delete_account, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "user-management/delete-account",
  });
});

route.get(public_routes.permissions, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "user-management/permissions",
  });
});


// ---------------- ( Settings ) --------------------------


route.get(public_routes.generalSettings, (req, res, next) => {
  res.render(index, {
    page_path: "./settings/general-settings/general-settings",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.securitySettings, (req, res, next) => {
  res.render(index, {
    page_path: "./settings/general-settings/security-settings",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.notification, (req, res, next) => {
  res.render(index, {
    page_path: "./settings/general-settings/notification",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.connectedApps, (req, res, next) => {
  res.render(index, {
    page_path: "./settings/general-settings/connected-apps",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.systemSettings, (req, res, next) => {
  res.render(index, {
    page_path: "./settings/website-settings/system-settings",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.companySettings, (req, res, next) => {
  res.render(index, {
    page_path: "./settings/website-settings/company-settings",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.localizationSettings, (req, res, next) => {
  res.render(index, {
    page_path: "./settings/website-settings/localization-settings",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.prefixes, (req, res, next) => {
  res.render(index, {
    page_path: "./settings/website-settings/prefixes",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.preference, (req, res, next) => {
  res.render(index, {
    page_path: "./settings/website-settings/preference",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.appearance, (req, res, next) => {
  res.render(index, {
    page_path: "./settings/website-settings/appearance",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.socialAuthentication, (req, res, next) => {
  res.render(index, {
    page_path: "./settings/website-settings/social-authentication",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.languageSettings, (req, res, next) => {
  res.render(index, {
    page_path: "./settings/website-settings/language-settings",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.languageSettingsweb, (req, res, next) => {
  res.render(index, {
    page_path: "./settings/website-settings/language-settings-web",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.invoiceSettings, (req, res, next) => {
  res.render(index, {
    page_path: "./settings/app-settings/invoice-settings",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.invoiceTemplates, (req, res, next) => {
  res.render(index, {
    page_path: "./settings/app-settings/invoice-templates",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.printerSettings, (req, res, next) => {
  res.render(index, {
    page_path: "./settings/app-settings/printer-settings",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.posSettings, (req, res, next) => {
  res.render(index, {
    page_path: "./settings/app-settings/pos-settings",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.signatures, (req, res, next) => {
  res.render(index, {
    page_path: "./settings/app-settings/signatures",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.customFields, (req, res, next) => {
  res.render(index, {
    page_path: "./settings/app-settings/custom-fields",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.emailSettings, (req, res, next) => {
  res.render(index, {
    page_path: "./settings/system-settings/email-settings",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.emailTemplates, (req, res, next) => {
  res.render(index, {
    page_path: "./settings/system-settings/email-templates",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.smsTemplates, (req, res, next) => {
  res.render(index, {
    page_path: "./settings/system-settings/sms-templates",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.smsSettings, (req, res, next) => {
  res.render(index, {
    page_path: "./settings/system-settings/sms-settings",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.otpSettings, (req, res, next) => {
  res.render(index, {
    page_path: "./settings/system-settings/otp-settings",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.gdprSettings, (req, res, next) => {
  res.render(index, {
    page_path: "./settings/system-settings/gdpr-settings",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.paymentGatewaySettings, (req, res, next) => {
  res.render(index, {
    page_path: "./settings/financial-settings/payment-gateway-settings",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.bankSettingsGrid, (req, res, next) => {
  res.render(index, {
    page_path: "./settings/financial-settings/bank-settings-grid",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.taxRates, (req, res, next) => {
  res.render(index, {
    page_path: "./settings/financial-settings/tax-rates",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.currencySettings, (req, res, next) => {
  res.render(index, {
    page_path: "./settings/financial-settings/currency-settings",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.storageSettings, (req, res, next) => {
  res.render(index, {
    page_path: "./settings/other-settings/storage-settings",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.banIpAddress, (req, res, next) => {
  res.render(index, {
    page_path: "./settings/other-settings/ban-ip-address",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.faq, (req, res, next) => {
  res.render(index, {
    page_path: "./content/faq",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.testimonials, (req, res, next) => {
  res.render(index, {
    page_path: "./content/testimonials",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.cities, (req, res, next) => {
  res.render(index, {
    page_path: "./locations/cities",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.states, (req, res, next) => {
  res.render(index, {
    page_path: "./locations/states",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.countries, (req, res, next) => {
  res.render(index, {
    page_path: "./locations/countries",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.blogComments, (req, res, next) => {
  res.render(index, {
    page_path: "./blogs/blog-comments",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.blogCategories, (req, res, next) => {
  res.render(index, {
    page_path: "./blogs/blog-categories",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.blogTag, (req, res, next) => {
  res.render(index, {
    page_path: "./blogs/blog-tag",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.blogDetails, (req, res, next) => {
  res.render(index, {
    page_path: "./blogs/blog-details",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.allBlog, (req, res, next) => {
  res.render(index, {
    page_path: "./blogs/all-blog",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.pages, (req, res, next) => {
  res.render(index, {
    page_path: "./content/pages",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.annualReport, (req, res, next) => {
  res.render(index, {
    page_path: "./reports/annual-report",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.taxReports, (req, res, next) => {
  res.render(index, {
    page_path: "./reports/tax-reports",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.incomeReport, (req, res, next) => {
  res.render(index, {
    page_path: "./reports/income-report",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.expenseReport, (req, res, next) => {
  res.render(index, {
    page_path: "./reports/expense-report",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.profitAndLoss, (req, res, next) => {
  res.render(index, {
    page_path: "./reports/profit-and-loss",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.salesTax, (req, res, next) => {
  res.render(index, {
    page_path: "./reports/sales-tax",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.productquantityAlert, (req, res, next) => {
  res.render(index, {
    page_path: "./reports/product-report/product-quantity-alert",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.productexpiryReport, (req, res, next) => {
  res.render(index, {
    page_path: "./reports/product-report/product-expiry-report",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.productReport, (req, res, next) => {
  res.render(index, {
    page_path: "./reports/product-report/product-report",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.customerdueReport, (req, res, next) => {
  res.render(index, {
    page_path: "./reports/customer-report/customer-due-report",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.customerReport, (req, res, next) => {
  res.render(index, {
    page_path: "./reports/customer-report/customer-report",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.supplierdueReport, (req, res, next) => {
  res.render(index, {
    page_path: "./reports/supplier-report/supplier-due-report",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.supplierReport, (req, res, next) => {
  res.render(index, {
    page_path: "./reports/supplier-report/supplier-report",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.invoiceReport, (req, res, next) => {
  res.render(index, {
    page_path: "./reports/invoice-report",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.inventoryReport, (req, res, next) => {
  res.render(index, {
    page_path: "./reports/inventory-report/inventory-report",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.stockHistory, (req, res, next) => {
  res.render(index, {
    page_path: "./reports/inventory-report/stock-history",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.soldStock, (req, res, next) => {
  res.render(index, {
    page_path: "./reports/inventory-report/sold-stock",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.purchaseReport, (req, res, next) => {
  res.render(index, {
    page_path: "./reports/purchase-report",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.bestSeller, (req, res, next) => {
  res.render(index, {
    page_path: "./reports/sales-report/best-seller",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.salesReport, (req, res, next) => {
  res.render(index, {
    page_path: "./reports/sales-report/sales-report",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.employeeSalary, (req, res, next) => {
  res.render(index, {
    page_path: "./hrm/payroll/employee-salary",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.payslip, (req, res, next) => {
  res.render(index, {
    page_path: "./hrm/payroll/payslip",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.holidays, (req, res, next) => {
  res.render(index, {
    page_path: "./hrm/holidays",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.leavesAdmin, (req, res, next) => {
  res.render(index, {
    page_path: "./hrm/leaves/leaves-admin",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.leavesEmployee, (req, res, next) => {
  res.render(index, {
    page_path: "./hrm/leaves/leaves-employee",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.leaveTypes, (req, res, next) => {
  res.render(index, {
    page_path: "./hrm/leaves/leave-types",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.attendanceEmployee, (req, res, next) => {
  res.render(index, {
    page_path: "./hrm/attendence/attendance-employee",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.attendanceAdmin, (req, res, next) => {
  res.render(index, {
    page_path: "./hrm/attendence/attendance-admin",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.shift, (req, res, next) => {
  res.render(index, {
    page_path: "./hrm/shift",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.designation, (req, res, next) => {
  res.render(index, {
    page_path: "./hrm/designation",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.departmentGrid, (req, res, next) => {
  res.render(index, {
    page_path: "./hrm/department/department-grid",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.departmentList, (req, res, next) => {
  res.render(index, {
    page_path: "./hrm/department/department-list",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.employeesGrid, (req, res, next) => {
  res.render(index, {
    page_path: "./hrm/employees/employees-grid",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.employeesList, (req, res, next) => {
  res.render(index, {
    page_path: "./hrm/employees/employees-list",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.employeeDetails, (req, res, next) => {
  res.render(index, {
    page_path: "./hrm/employees/employee-details",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.addEmployee, (req, res, next) => {
  res.render(index, {
    page_path: "./hrm/employees/add-employee",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.editEmployee, (req, res, next) => {
  res.render(index, {
    page_path: "./hrm/employees/edit-employee",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.warehouse, (req, res, next) => {
  res.render(index, {
    page_path: "/peoples/warehouse",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.suppliers, (req, res, next) => {
  res.render(index, {
    page_path: "/peoples/suppliers",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.billers, (req, res, next) => {
  res.render(index, {
    page_path: "/peoples/billers",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.customers, (req, res, next) => {
  res.render(index, {
    page_path: "/peoples/customers",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.storeList, (req, res, next) => {
  res.render(index, {
    page_path: "/peoples/store-list",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.expenseList, (req, res, next) => {
  res.render(index, {
    page_path: "/finance/expense/expense-list",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.expenseCategory, (req, res, next) => {
  res.render(index, {
    page_path: "/finance/expense/expense-category",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.income, (req, res, next) => {
  res.render(index, {
    page_path: "/finance/income/income",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.incomeCategory, (req, res, next) => {
  res.render(index, {
    page_path: "/finance/income/income-category",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.accountList, (req, res, next) => {
  res.render(index, {
    page_path: "/finance/account-list",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.moneyTransfer, (req, res, next) => {
  res.render(index, {
    page_path: "/finance/money-transfer",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.balanceSheet, (req, res, next) => {
  res.render(index, {
    page_path: "/finance/balance-sheet",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.trialBalance, (req, res, next) => {
  res.render(index, {
    page_path: "/finance/trial-balance",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.cashFlow, (req, res, next) => {
  res.render(index, {
    page_path: "/finance/cash-flow",
    title: "Dreams Pos Admin Template",
  });
});
route.get(public_routes.accountStatement, (req, res, next) => {
  res.render(index, {
    page_path: "/finance/account-statement",
    title: "Dreams Pos Admin Template",
  });
});

// ---------------- ( charts ) --------------------------

route.get(public_routes.chart_apex, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "charts/chart-apex",
  });
});

route.get(public_routes.chart_js, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "charts/chart-js",
  });
});

route.get(public_routes.chart_morris, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "charts/chart-morris",
  });
});

route.get(public_routes.chart_flot, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "charts/chart-flot",
  });
});

route.get(public_routes.chart_peity, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "charts/chart-peity",
  });
});

route.get(public_routes.chart_c3, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "charts/chart-c3",
  });
});

// -------------- ( Icons ) --------------

route.get(public_routes.icon_fontawesome, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "icons/icon-fontawesome",
  });
});

route.get(public_routes.icon_feather, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "icons/icon-feather",
  });
});

route.get(public_routes.icon_ionic, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "icons/icon-ionic",
  });
});

route.get(public_routes.icon_material, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "icons/icon-material",
  });
});

route.get(public_routes.icon_pe7, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "icons/icon-pe7",
  });
});

route.get(public_routes.icon_simpleline, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "icons/icon-simpleline",
  });
});

route.get(public_routes.icon_themify, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "icons/icon-themify",
  });
});

route.get(public_routes.icon_weather, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "icons/icon-weather",
  });
});

route.get(public_routes.icon_typicon, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "icons/icon-typicon",
  });
});

route.get(public_routes.icon_flag, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "icons/icon-flag",
  });
});

route.get(public_routes.icon_tabler, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "icons/icon-tabler",
  });
});

route.get(public_routes.icon_bootstrap, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "icons/icon-bootstrap",
  });
});

route.get(public_routes.icon_remix, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "icons/icon-remix",
  });
});

// ------------- ( Maps ) ----------------

route.get(public_routes.maps_vector, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "maps/maps-vector",
  });
});

route.get(public_routes.maps_leaflet, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "maps/maps-leaflet",
  });
});

// ------------- ( Forms ) ----------------

route.get(public_routes.form_basic_inputs, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "forms/form-basic-inputs",
  });
});

route.get(public_routes.form_input_groups, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "forms/form-input-groups",
  });
});

route.get(public_routes.form_horizontal, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "forms/horizontalform",
  });
});

route.get(public_routes.form_vertical, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "forms/verticalform",
  });
});

route.get(public_routes.form_mask, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "forms/formmask",
  });
});

route.get(public_routes.form_validation, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "forms/formvalidation",
  });
});

route.get(public_routes.form_checkbox_radios, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "forms/form-checkbox-radios",
  });
});
route.get(public_routes.form_grid_gutters, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "forms/form-grid-gutters",
  });
});
route.get(public_routes.form_select, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "forms/form-select",
  });
});
route.get(public_routes.form_fileUpload, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "forms/fileupload",
  });
});
route.get(public_routes.form_floating_labels, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "forms/form-floating-labels",
  });
});
route.get(public_routes.form_formSelected2, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "forms/formselect2",
  });
});
route.get(public_routes.form_wizard, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "forms/form-wizard",
  });
});
route.get(public_routes.form_pickers, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "forms/form-pickers",
  });
});
route.get(public_routes.form_elements, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "forms/form-elements",
  });
});

// -------------- ( Tables ) ----------------------

route.get(public_routes.tables_basic, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "tables/tables-basic",
  });
});

route.get(public_routes.data_tables, (req, res, next) => {
  res.render(index, {
    title: "Dreams Pos Admin Template",
    page_path: "tables/data-tables",
  });
});

// -------------- ( Base UI ) ----------------------

route.get(public_routes.ui_carousel, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-carousel",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_cards, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-cards",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_breadcrumb, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-breadcrumb",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_buttons_group, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-buttons-group",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_buttons, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-buttons",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_borders, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-borders",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_badges, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-badges",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_avatar, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-avatar",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_accordion, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-accordion",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_alerts, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-alerts",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_colors, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-colors",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_popovers, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-popovers",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_pagination, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-pagination",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_offcanvas, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-offcanvas",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_modals, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-modals",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_media, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-media",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_lightbox, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-lightbox",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_images, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-images",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_grid, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-grid",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_dropdowns, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-dropdowns",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_progress, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-progress",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_video, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-video",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_typography, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-typography",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_tooltips, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-tooltips",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_toasts, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-toasts",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_nav_tabs, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-nav-tabs",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_sweetalerts, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-sweetalerts",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_spinner, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-spinner",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_placeholders, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-placeholders",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_sortable, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-sortable",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_swiperjs, (req, res, next) => {
  res.render(index, {
    page_path: "base-ui/ui-swiperjs",
    title: "Dreams Pos Admin Template",
  });
});

// -------------- ( Advance UI ) ----------------------

route.get(public_routes.ui_clipboard, (req, res, next) => {
  res.render(index, {
    page_path: "advance-ui/ui-clipboard",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_counter, (req, res, next) => {
  res.render(index, {
    page_path: "advance-ui/ui-counter",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_rangeslider, (req, res, next) => {
  res.render(index, {
    page_path: "advance-ui/ui-rangeslider",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_rating, (req, res, next) => {
  res.render(index, {
    page_path: "advance-ui/ui-rating",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_drag_drop, (req, res, next) => {
  res.render(index, {
    page_path: "advance-ui/ui-drag-drop",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_ribbon, (req, res, next) => {
  res.render(index, {
    page_path: "advance-ui/ui-ribbon",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_scrollbar, (req, res, next) => {
  res.render(index, {
    page_path: "advance-ui/ui-scrollbar",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_stickynote, (req, res, next) => {
  res.render(index, {
    page_path: "advance-ui/ui-stickynote",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_text_editor, (req, res, next) => {
  res.render(index, {
    page_path: "advance-ui/ui-text-editor",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.ui_timeline, (req, res, next) => {
  res.render(index, {
    page_path: "advance-ui/ui-timeline",
    title: "Dreams Pos Admin Template",
  });
});

route.get(public_routes.activities, (req, res, next) => {
  res.render(index, {
    page_path: "/activities",
    title: "Dreams Pos Admin Template",
  });
});

route.get("/", function (req, res) {
  res.redirect(public_routes.login);
});
route.get("*", function (req, res) {
  res.redirect(public_routes.pageNotFount);
});


module.exports = route