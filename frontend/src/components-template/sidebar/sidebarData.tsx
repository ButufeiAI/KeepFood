import { all_routes } from "../../routes/all_routes"

 const routes = all_routes;

 export const sidebarTabData = [
  {
    id:"MAIN_Content",
    icon: "icon-layout-dashboard",
    section:[
      {
        title:"PRINCIPAL",
        items:[
          { link: routes.dashboard, label: "Tableau de bord", icon: "icon-layout-dashboard" },
          { link: routes.pos, label: "PDV", icon: "icon-combine" },
          { link: routes.orders, label: "Commandes", icon: "icon-list-todo", relativeLinks: [routes.kanbanView] },
          { link: routes.kitchen, label: "Cuisine (KDS)", icon: "icon-drumstick" },
          { link: routes.reservations, label: "Réservation", icon: "icon-file-clock" },
        ]
      }
    ]
  },
  {
    id:"MENU_MANAGEMENT_Content",
    icon: "icon-layers",
    section:[
      {
        title:"GESTION DU MENU",
        items:[
          { link: routes.establishmentTypes, label: "Type d'Établissement", icon: "icon-building" },
          { link: routes.categories, label: "Catégories", icon: "icon-layers" },
          { link: routes.items, label: "Articles", icon: "icon-layout-list" },
          { link: routes.addons, label: "Suppléments", icon: "icon-text-select" },
          { link: routes.coupons, label: "Coupons", icon: "icon-badge-percent" },
        ]
      }
    ]
  },
  {
    id:"OPERATIONS_Content",
    icon: "icon-merge",
    section:[
      {
        title:"OPÉRATIONS",
        items:[
          { link: routes.table, label: "Tables", icon: "icon-concierge-bell" },
          { link: routes.customer, label: "Clients", icon: "icon-user-round" },
          { link: routes.invoices, label: "Factures", icon: "icon-file-spreadsheet" },
          { link: routes.payments, label: "Paiements", icon: "icon-badge-dollar-sign" },
        ]
      }
    ]
  },
  {
    id:"ADMINISTRATION_Content",
    icon: "icon-user-cog",
    section:[
      {
        title:"ADMINISTRATION",
        items:[
          { link: routes.users, label: "Utilisateurs", icon: "icon-users" },
          { link: routes.rolePermissions, label: "Permissions", icon: "icon-shield" },
          { link: routes.earningReport, label: "Rapports", icon: "icon-file-spreadsheet", relativeLinks: [routes.salesReport, routes.orderReport, routes.customerReport, routes.auditReport]},
        ]
      }
    ]
  },
  {
    id:"PAGES_Content",
    icon: "icon-library-big",
    section:[
      {
        title:"PAGES",
        items:[
          { link: routes.login, label: "Connexion", icon: "icon-lock-keyhole" },
          { link: routes.register, label: "Inscription", icon: "icon-user-round-plus" },
          { link: routes.forgotPassword, label: "Mot de passe oublié", icon: "icon-lock-keyhole-open" },
          { link: routes.emailVerification, label: "Vérification e-mail", icon: "icon-mail" },
          { link: routes.otp, label: "OTP", icon: "icon-blocks" },
          { link: routes.resetPassword, label: "Réinitialiser mot de passe", icon: "icon-lock-keyhole" },
        ]
      }
    ]
  },
  {
    id:"SETTINGS_Content",
    icon: "icon-cog",
    section:[
      {
        title:"PARAMÈTRES",
        items:[
          { link: routes.storeSettings, label: "Paramètres du magasin", icon: "icon-warehouse" },
          { link: routes.taxSettings, label: "Taxe", icon: "icon-diamond-percent" },
          { link: routes.printSettings, label: "Impression", icon: "icon-printer" },
          { link: routes.paymentSettings, label: "Types de paiement", icon: "icon-circle-dollar-sign" },
          { link: routes.deliverySettings, label: "Livraison", icon: "icon-bike" },
          { link: routes.notificationsSettings, label: "Notifications", icon: "icon-bell" },
          { link: routes.integrationsSettings, label: "Intégrations / API", icon: "icon-pin" },
        ]
      }
    ]
  },
 ]