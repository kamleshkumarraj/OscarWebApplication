import React from "react";
import { useLocation, Link } from "react-router-dom";
import logout from "../../assets/admin/dashboard/dashboardlogout.svg";
import headerLogo from "../../assets/admin/headerLogo.svg";

const Header = () => {
  const location = useLocation();

  // Function to get the current route name and path
  const getBreadcrumbs = () => {
    const path = location.pathname.split("/").filter(Boolean);

    if (path.length === 0 || (path.length === 1 && path[0] === "admin")) {
      return [{ name: "Dashboard", path: "/admin" }];
    }

    return path.map((segment, index) => {
      const fullPath = "/" + path.slice(0, index + 1).join("/");
      return {
        name: segment.charAt(0).toUpperCase() + segment.slice(1),
        path: fullPath,
      };
    });
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <div className="w-full h-[94px] flex items-center bg-[#524bad]">
      <Link to={"/admin"}>
        <div className="mx-9 pl-10 h-[94px] flex items-center justify-center space-x-3">
          <img src={headerLogo} alt="Logo" className="w-full h-[50px]" />
          <span className="text-2xl font-bold text-white">Admin</span>
        </div>
      </Link>

      <div className="w-full flex justify-between items-center space-x-3 mx-20 h-full">
        <div className="flex space-x-5 text-white">
          {breadcrumbs.map((breadcrumb, index) => (
            <React.Fragment key={breadcrumb.path}>
              <Link to={breadcrumb.path} className="hover:underline">
                <h1>{breadcrumb.name}</h1>
              </Link>
              {index < breadcrumbs.length - 1 && <span>{">"}</span>}
            </React.Fragment>
          ))}
        </div>
        <div>
          <button>
            <Link to={"/admin/login"}>
              <img src={logout} alt="Logout" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
