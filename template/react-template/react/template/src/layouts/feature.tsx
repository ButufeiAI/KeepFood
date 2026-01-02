import { Outlet, useLocation } from "react-router";
import { useAppDispatch, useAppSelector } from "../hooks/useReduxHooks";
import Sidebar from "../components/sidebar/sidebar";
import { Suspense, useEffect, useRef, useState } from "react";
import {
  resetMobileSidebar,
  setMobileSidebar,
} from "../core/redux/sidebarSlice";
import Header from "../components/header/header";
import { useIsMobile } from "../hooks/useMediaQuery";
import { useBootstrapTooltips } from "../hooks/useBootstrapTooltips";
import { useMobileSidebarOverlay } from "../hooks/useMobileSidebarOverlay";
import type { RootState } from "../core/redux/store";
import type { SidebarState } from "../core/redux/sidebarSlice";

const OutletLoader: React.FC = () => (
  <div
    className="d-flex align-items-center justify-content-center"
    style={{ height: "100vh" }}
  >
    <span className="spinner" />
  </div>
);

const Feature = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [isOutletLoading, setIsOutletLoading] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { mobileSidebar } = useAppSelector(
    (state: RootState) => state.sidebar as SidebarState
  );

  // Ref for the main wrapper to detect outside click for sidebar
  const mainWrapperRef = useRef<HTMLDivElement>(null);

  // Mobile detection
  const isMobile = useIsMobile();

  // Check if current page is layout-fullwidth
  const isLayoutFullwidth = location.pathname === "/layout-fullwidth";

  // Tooltip initializer
  useBootstrapTooltips([location.pathname]);

  // Mobile sidebar overlay, outside click detection
  useMobileSidebarOverlay({
    mobileSidebar,
    isLayoutFullwidth,
    isMobile,
    containerRef: mainWrapperRef,
    onClose: () => dispatch(setMobileSidebar(false)),
  });

  // Reset sidebar on route change
  useEffect(() => {
    dispatch(resetMobileSidebar());
  }, [location.pathname, dispatch]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOutletLoading(true);
  }, [location.pathname]);

  useEffect(() => {
    // Clear previous timer
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setIsOutletLoading(false);
    }, 1000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [location.pathname]);

  return (
    <>
      <div className="main-wrapper" ref={mainWrapperRef}>
        <Header />
        <Sidebar />
        <Suspense fallback={<OutletLoader />}>
          {isOutletLoading ? <OutletLoader /> : <Outlet />}
        </Suspense>
      </div>
      <div className={`sidebar-overlay${mobileSidebar ? " opened" : ""}`}></div>
    </>
  );
};

export default Feature;
