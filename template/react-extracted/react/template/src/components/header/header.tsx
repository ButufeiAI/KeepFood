import React, { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/useReduxHooks";
import type { RootState } from "../../core/redux/store";
import { setMobileSidebar } from "../../core/redux/sidebarSlice";
import { useEffect, useCallback } from "react";
import { useThemeSettings } from "../../hooks/useThemeSettings";
import { Link } from "react-router-dom";
import { all_routes } from "../../routes/all_routes";
import ImageWithBasePath from "../../components/image-with-base-path";
import { NavLink } from "react-router-dom";

const Header = () => {
  const dispatch = useAppDispatch();
  const {  handleUpdateTheme } = useThemeSettings();
  const { themeSettings } = useThemeSettings();
  const mobileSidebar = useAppSelector(
    (state: RootState) => state.sidebar.mobileSidebar
  );
  const isActive = (path : any) => location.pathname === path;

  const toggleMobileSidebar = useCallback(() => {
    dispatch(setMobileSidebar(!mobileSidebar));
  }, [dispatch, mobileSidebar]);
    const handleDarkModeClick = useCallback(() => {
    handleUpdateTheme("data-bs-theme", "light");
  }, [handleUpdateTheme]);
  const handleLightModeClick = useCallback(() => {
    handleUpdateTheme("data-bs-theme", "dark");
  }, [handleUpdateTheme]);

  useEffect(() => {
    const htmlElement = document.documentElement as HTMLElement;
    Object.entries(themeSettings).forEach(([key, value]) => {
      htmlElement.setAttribute(key as string, String(value));
    });
  }, [themeSettings]);

  useEffect(() => {
    const htmlElement = document.documentElement;
    const mainWrapper = document.querySelector(".main-wrapper");

    if (mobileSidebar) {
      htmlElement.classList.add("menu-opened");
      mainWrapper?.classList.add("slide-nav");
    } else {
      htmlElement.classList.remove("menu-opened");
      mainWrapper?.classList.remove("slide-nav");
    }

    return () => {
      htmlElement.classList.remove("menu-opened");
      mainWrapper?.classList.remove("slide-nav");
    };
  }, [mobileSidebar]);

  return (
    <>
      {/* Topbar Start */}
      <header className="navbar-header">
        <div className="topbar-menu">
          <div className="d-flex align-items-center gap-2">
            {/* Logo */}
            <Link to={all_routes.dashboard} className="logo">
              {/* Logo Normal */}
              <span className="logo-light">
                <span className="logo-lg">
                  <ImageWithBasePath src="assets/img/logo.svg" alt="logo" />
                </span>
                <span className="logo-sm">
                  <ImageWithBasePath src="assets/img/logo-small.svg" alt="small logo" />
                </span>
              </span>
              {/* Logo Dark */}
              <span className="logo-dark">
                <span className="logo-lg">
                  <ImageWithBasePath src="assets/img/logo-white.svg" alt="dark logo" />
                </span>
              </span>
            </Link>
            {/* Sidebar Mobile Button */}
            <Link
              id="mobile_btn"
              className="mobile-btn"
              to="#sidebar"
              onClick={toggleMobileSidebar}
              aria-label="Toggle Mobile Sidebar"
            >
              <i className="icon-menu fs-24" />
            </Link>
            {/* Search */}
            <div className="header-links d-lg-flex d-none">
              <Link to={all_routes.pos} >
                <i className="icon-hand-platter me-1" />
                POS
              </Link>
              <NavLink
                to={all_routes.orders}   className={({ isActive }) =>
      `d-inline-flex align-items-center ${isActive ? "active" : ""}`
    }
              >
                <i className="icon-list-todo me-1" />
                Orders
              </NavLink>
              <NavLink
                to={all_routes.kitchen}  
                className={({ isActive }) =>
      `d-inline-flex align-items-center ${isActive ? "active" : ""}`
    }
              >
                <i className="icon-drumstick me-1" />
                Kitchen
              </NavLink>
              <NavLink
                to={all_routes.reservations} className={({ isActive }) =>
      `d-inline-flex align-items-center ${isActive ? "active" : ""}`
    }>
                <i className="icon-file-clock me-1"> </i>
                Reservation
              </NavLink>
              <NavLink to={all_routes.table}  className={({ isActive }) =>
      `d-inline-flex align-items-center ${isActive ? "active" : ""}`
    } >
                <i className="icon-concierge-bell me-1" />
                Table
              </NavLink>
            </div>
          </div>
          <div className="d-flex align-items-center header-list">
            {/* Upgrade Button */}
            <div className="header-item d-none d-sm-flex">
              <Link
                to="#"
                className="btn btn-sm btn-primary d-inline-flex align-items-center"
              >
                <i className="icon-crown me-1" />
                Upgrade
              </Link>
            </div>
            {/* Search Button */}
            <div className="header-item d-flex">
              <button
                className="topbar-link btn btn-icon"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
                type="button"
                aria-label="search"
              >
                <i className="icon-search fs-16" />
              </button>
            </div>
            {/* Report Button */}
            <div className="header-item d-none d-sm-flex">
              <Link
                to={all_routes.earningReport}
                className="topbar-link btn btn-icon"
                aria-label="report"
              >
                <i className="icon-chart-column-stacked fs-16" />
                <span className="position-absolute report-badge bg-success" />
              </Link>
            </div>
            {/* Light/Dark Mode Button */}
           <div className="header-item d-flex ">
                <button
                  className={`topbar-link btn topbar-link ${themeSettings["mode"] === "dark" ? "active" : ""
                    }`}
                  id="dark-mode-toggle"
                  type="button"
                  onClick={handleDarkModeClick}
                  aria-label="Switch to light mode"
                >
                  <i className="icon-sun fs-16" aria-hidden="true" />
                </button>
                <button
                  className={`topbar-link btn topbar-link ${themeSettings["mode"] === "light" ? "active" : ""
                    }`}
                  id="light-mode-toggle"
                  type="button"
                  onClick={handleLightModeClick}
                  aria-label="Switch to dark mode"
                >
                  <i className="icon-moon fs-16" aria-hidden="true" />
                </button>
              </div>
          </div>
        </div>
      </header>
      {/* Topbar End */}

      {/* Search Modal */}
      <div className="modal fade" id="searchModal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Search</h5>
              <button
                type="button"
                className="btn-close btn-close-modal"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="icon-x" />
              </button>
            </div>
            <div className="modal-body">
              <div className="input-group input-group-flat border rounded align-items-center p-2 mb-4">
                <input
                  type="text"
                  className="form-control border-0 fs-14 ps-1"
                  placeholder="Search your keyword"
                  autoComplete="off"
                />
                <span className="input-group-text border-0 p-0 btn btn-sm btn-icon bg-light rounded">
                  <i className="icon-search text-dark" />
                </span>
              </div>
              <ul className="nav nav-tabs nav-bordered nav-bordered-primary flex-column flex-sm-row mb-5">
                <li className="nav-item">
                  <Link
                    to="#customer-tab"
                    data-bs-toggle="tab"
                    aria-expanded="false"
                    className="nav-link d-flex align-items-center"
                  >
                    <i className="icon-badge-dollar-sign me-2" />
                    Customer
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="#orders-tab"
                    data-bs-toggle="tab"
                    aria-expanded="true"
                    className="nav-link d-flex align-items-center"
                  >
                    <i className="icon-list-todo me-2" />
                    Orders
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="#kitchen-tab"
                    data-bs-toggle="tab"
                    aria-expanded="false"
                    className="nav-link active d-flex align-items-center"
                  >
                    <i className="icon-shopping-bag me-2" />
                    Kitchen
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="#report-tab"
                    data-bs-toggle="tab"
                    aria-expanded="false"
                    className="nav-link d-flex align-items-center"
                  >
                    <i className="icon-users me-2" />
                    Customer Report
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="#audit-tab"
                    data-bs-toggle="tab"
                    aria-expanded="false"
                    className="nav-link d-flex align-items-center"
                  >
                    <i className="icon-hourglass me-2" />
                    Audit Logs
                  </Link>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane fade" id="customer-tab">
                  <div className="text-center">
                    <ImageWithBasePath
                      src="assets/img/icons/search.svg"
                      alt="search icon"
                      className="img-fluid mb-4"
                    />
                    <h4 className="mb-1">No Results Found</h4>
                    <p className="mb-0">
                      Refine your query to discover relevant items
                    </p>
                  </div>
                </div>
                <div className="tab-pane fade" id="orders-tab">
                  <div className="text-center">
                    <ImageWithBasePath
                      src="assets/img/icons/search.svg"
                      alt="search icon"
                      className="img-fluid mb-4"
                    />
                    <h4 className="mb-1">No Results Found</h4>
                    <p className="mb-0">
                      Refine your query to discover relevant items
                    </p>
                  </div>
                </div>
                <div className="tab-pane fade show active" id="kitchen-tab">
                  <div className="text-center">
                    <ImageWithBasePath
                      src="assets/img/icons/search.svg"
                      alt="search icon"
                      className="img-fluid mb-4"
                    />
                    <h4 className="mb-1">No Results Found</h4>
                    <p className="mb-0">
                      Refine your query to discover relevant items
                    </p>
                  </div>
                </div>
                <div className="tab-pane fade" id="report-tab">
                  <div className="text-center">
                    <ImageWithBasePath
                      src="assets/img/icons/search.svg"
                      alt="search icon"
                      className="img-fluid mb-4"
                    />
                    <h4 className="mb-1">No Results Found</h4>
                    <p className="mb-0">
                      Refine your query to discover relevant items
                    </p>
                  </div>
                </div>
                <div className="tab-pane fade" id="audit-tab">
                  <div className="text-center">
                    <ImageWithBasePath
                      src="assets/img/icons/search.svg"
                      alt="search icon"
                      className="img-fluid mb-4"
                    />
                    <h4 className="mb-1">No Results Found</h4>
                    <p className="mb-0">
                      Refine your query to discover relevant items
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default React.memo(Header);
