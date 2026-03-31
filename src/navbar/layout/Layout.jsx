import { Outlet } from "react-router-dom";
import NavbarLink from "../Navbarlink";

export default function Layout() {

  return (
    <>
      <header>
        <NavbarLink />
      </header>

      <main className="">
        <Outlet />
      </main>
    </>
  );
}