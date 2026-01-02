import { Outlet } from "react-router";

const AuthFeature = () => {

  return (
    <div className="bg-white">
      <div className="main-wrapper">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthFeature;
