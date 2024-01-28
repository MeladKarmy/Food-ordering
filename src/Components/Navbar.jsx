import React, { useState } from "react";
import LinksNavigat from "./NavbarComponents/LinksNavigat";
import Logo from "./NavbarComponents/Logo";
import Them from "./NavbarComponents/Them";
import menuIcon from "../assets/Food App/navmenu.svg";

export default function Navbar() {
  let [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      <main className="container p-1 mx-auto">
        <div className="flex flex-wrap justify-between items-center md:flex-nowrap">
          <Logo />
          <div className="md:order-3">
            <Them />
          </div>
          <button
            className="block p-1 md:hidden "
            onClick={() => setOpenMenu(!openMenu)}
          >
            <img src={menuIcon} alt="menu-Icon" />
          </button>
          <div
            className={`w-full md:block md:w-auto  ${
              openMenu ? "block" : "hidden"
            }`}
          >
            <div className="bg-white rounded-3xl opacity-90 md:bg-transparent md:rounded-none md:opacity-100">
              <LinksNavigat />
            </div>
          </div>
        </div>
      </main>
    </nav>
  );
}
