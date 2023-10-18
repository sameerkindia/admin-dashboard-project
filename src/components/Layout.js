import MainNav from "./MainNav";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      <MainNav />
      <Outlet />
    </div>
  );
}

export default Layout;
