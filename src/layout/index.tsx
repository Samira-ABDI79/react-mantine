import { Outlet } from "react-router-dom";
import { NavbarSegmented } from "./navbar";

function Layout() {
  return (
    <>
      {/* <TopNavbar /> */}
      <NavbarSegmented />
      <Outlet />
    </>
  );
}

export default Layout;
