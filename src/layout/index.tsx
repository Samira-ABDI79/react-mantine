import { Outlet } from "react-router-dom";
import { NavbarSegmented } from "./navbar";
import { FooterSocial } from "./footer";

function Layout() {
  return (
    <>
      {/* <TopNavbar /> */}
      <NavbarSegmented />
      <Outlet />
      <FooterSocial />
    </>
  );
}

export default Layout;
