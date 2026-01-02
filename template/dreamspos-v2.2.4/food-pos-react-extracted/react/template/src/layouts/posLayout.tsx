import PosHeader from "../components/header/posHeader";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const PosLayout = () => {

  useEffect(() => {
    document.body.classList.add("pos-page");

    return () => {
      document.body.classList.remove("pos-page");
    };
  }, []);

  return (
    <div className="bg-white">
      <div className="main-wrapper pos-wrapper">
        <PosHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default PosLayout;

