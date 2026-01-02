import { Link } from "react-router-dom";
import { useState } from "react";
import ImageWithBasePath from "../image-with-base-path/index";
import { all_routes } from "../../routes/all_routes";
import { sidebarTabData } from "../sidebar/sidebarData";
import { useAuthStore } from "../../stores/auth.store";
import { authService } from "../../services/auth.service";

const TwoColSidebar = () => {
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
    const { user, logout } = useAuthStore();

    const handleLogout = async () => {
        try {
            await authService.logout();
        } catch (error) {
            console.error('Logout error:', error);
        }
        logout();
        window.location.href = all_routes.login;
    };

    const toggleCategory = (categoryId: string) => {
        setExpandedCategory(prev => {
            // Dacă categoria este deja deschisă, o închidem
            // Altfel, deschidem noua categorie (închide pe cea veche dacă există)
            return prev === categoryId ? null : categoryId;
        });
    };

    return (
        <div className="sidebar" id="sidebar">
            <div className="sidebar-inner">
                {/* Sidebar Header - Aliniat cu header-ul paginii */}
                <div className="sidebar-header" style={{ height: "58px", minHeight: "58px", display: "flex", alignItems: "center", justifyContent: "flex-start", padding: "8px 16px", borderBottom: "1px solid #e5e7eb", position: "relative" }}>
                    <Link to={all_routes.dashboard} className="sidebar-logo" style={{ paddingTop: "0px", paddingBottom: "0px", marginTop: "0px", marginBottom: "0px", textAlign: "left", display: "flex", alignItems: "center", height: "100%" }}>
                        <ImageWithBasePath src="assets/img/logo-keepfood.png" alt="KeepFood Logo" style={{ maxHeight: "83px", width: "auto", height: "auto", display: "block" }} />
                    </Link>
                </div>
                {/* Sidebar Menu - Sub header */}
                <div className="sidebar-menu" style={{ marginTop: "0", paddingTop: "16px", height: "calc(100% - 58px)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                    <ul style={{ marginTop: "0px", paddingTop: "0px", flex: "1", overflowY: "auto" }}>
                        {sidebarTabData.map((tab) => (
                            <li key={tab.id} className={expandedCategory === tab.id ? "submenu active" : ""}>
                                <a
                                    href="#"
                                    className={expandedCategory === tab.id ? "subdrop" : ""}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleCategory(tab.id);
                                    }}
                                >
                                    <i className={tab.icon}></i>
                                    <span>{tab.section[0]?.title || tab.id.replace("_Content", "").replace("_", " ")}</span>
                                </a>
                                <ul style={expandedCategory === tab.id ? { display: "block" } : { display: "none" }}>
                                    {tab.section.map((section, sectionIdx) =>
                                        section.items.map((item, itemIdx) => (
                                            <li key={`${sectionIdx}-${itemIdx}`}>
                                                <Link to={item.link}>
                                                    <i className={item.icon}></i>
                                                    <span>{item.label}</span>
                                                </Link>
                                            </li>
                                        ))
                                    )}
                                </ul>
                            </li>
                        ))}
                    </ul>
                    <div className="sidebar-profile" style={{ marginTop: "auto", paddingTop: "16px", paddingBottom: "16px", borderTop: "1px solid #e5e7eb" }}>
                        <div className="dropdown dropend">
                            <a href="#" className="d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside" onClick={(e) => e.preventDefault()}>
                                <i className="icon-bell"></i>
                                <span className="position-absolute notification-badge bg-danger"></span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-xl notification-dropdown">
                                <div className="d-flex align-items-center justify-content-between notification-header">
                                    <h5 className="mb-0">Notifications</h5>
                                    <a href="#" className="link-primary" onClick={(e) => e.preventDefault()}>Mark all as unread</a>
                                </div>
                                <div className="notification-body" data-simplebar>
                                    <p className="text-center p-3">No notifications</p>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown dropend">
                            <a href="#" className="avatar avatar-sm" data-bs-toggle="dropdown" onClick={(e) => e.preventDefault()}>
                                <ImageWithBasePath 
                                    src="assets/img/profiles/avatar-27.jpg" 
                                    alt={user ? `${user.firstName} ${user.lastName}` : "user"} 
                                    className="img-fluid rounded-circle" 
                                />
                            </a>
                            <div className="dropdown-menu p-0 dropdown-menu-end dropdown-menu-md">
                                <div className="dropdown-header border-bottom p-3">
                                    <div className="d-flex align-items-center justify-content-between gap-3">
                                        <div className="d-flex align-items-center">
                                            <div className="avatar avatar-lg avatar-rounded border border-success">
                                                <ImageWithBasePath 
                                                    src="assets/img/profiles/avatar-27.jpg" 
                                                    className="rounded-circle" 
                                                    alt={user ? `${user.firstName} ${user.lastName}` : "user"} 
                                                />
                                            </div>
                                            <div className="ms-2">
                                                <h5 className="mb-1 fs-14 fw-semibold">
                                                    {user ? `${user.firstName} ${user.lastName}` : "User"}
                                                </h5>
                                                <span className="d-block fs-13">{user?.role || "Administrator"}</span>
                                            </div>
                                        </div>
                                        <span className="badge badge-soft-success">Pro</span>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <Link to={all_routes.storeSettings} className="dropdown-item">
                                        <i className="icon-warehouse me-2 fs-16 align-middle"></i>
                                        <span className="align-middle">Store Settings</span>
                                    </Link>
                                    <Link to={all_routes.rolePermissions} className="dropdown-item">
                                        <i className="icon-shield-ellipsis me-2 fs-16 align-middle"></i>
                                        <span className="align-middle">Roles & Permissions</span>
                                    </Link>
                                    <Link to={all_routes.auditReport} className="dropdown-item">
                                        <i className="icon-clock-arrow-down me-2 fs-16 align-middle"></i>
                                        <span className="align-middle">Audit Logs</span>
                                    </Link>
                                    <Link to={all_routes.users} className="dropdown-item">
                                        <i className="icon-user-pen me-2 fs-16 align-middle"></i>
                                        <span className="align-middle">Manage Staffs</span>
                                    </Link>
                                </div>
                                <div className="p-3 border-top">
                                    <button 
                                        onClick={handleLogout}
                                        className="btn btn-white btn-sm w-100"
                                    >
                                        <i className="icon-log-in me-1"></i>Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TwoColSidebar;
