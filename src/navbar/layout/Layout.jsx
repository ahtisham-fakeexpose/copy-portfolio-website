import { Outlet } from "react-router-dom";
import NavbarLink from "../Navbarlink";

export default function Layout() {

  return (
    <>
      <header>
        <NavbarLink />
      </header>

      <main className="p-3 sm:p-4 md:p-5 lg:p-6">
        <Outlet />
      </main>
    </>
  );
}