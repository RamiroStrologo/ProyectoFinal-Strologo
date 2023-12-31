import React from "react";
import { asideNavBar } from "./navBar.module.css";
import { NavLink } from "react-router-dom";
import CartWidget from "../cartwidget/CartWidget";

export default function NavBar() {
  return (
    <aside className={asideNavBar}>
      <nav>
        <ul>
          <li>
            <NavLink>
              <img
                src="/img/pages/tienda/hamburger-menu-ico.svg"
                alt="hamburger_ico"
              />
            </NavLink>
          </li>
          <li>
            <NavLink to="/ps4">PS4</NavLink>
          </li>
          <li>
            <NavLink to="/ps3">PS3</NavLink>
          </li>
          <li>
            <NavLink to="/xone">XBOX ONE</NavLink>
          </li>
          <li>
            <CartWidget />
          </li>
        </ul>
      </nav>
    </aside>
  );
}
