import React, { useState } from "react";
import logo from "../starter-code/assets/shared/logo.svg";
import menu from "../starter-code/assets/shared/icon-hamburger.svg";
import close from "../starter-code/assets/shared/icon-close.svg";
import ListLink from "./Link";
import { useLocation, Link } from "react-router-dom";

function Header() {
  const [open, isOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="header">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <nav className={`navBar ${open ? "open" : ""}`}>
        <button
          className="menuBtn closeBtn"
          onClick={() => isOpen((prev) => !prev)}
        >
          <img src={close} alt="close" />
        </button>
        <ul>
          <ListLink
            to="/"
            num={"01"}
            name={"Home"}
            isActive={location.pathname === "/" ? "active" : ""}
          />
          <ListLink
            to="/destination"
            num={"02"}
            name={"Destination"}
            isActive={location.pathname === "/destination" ? "active" : ""}
          />
          <ListLink
            to="/crew"
            num={"03"}
            name={"Crew"}
            isActive={location.pathname === "/crew" ? "active" : ""}
          />
          <ListLink
            to="/technology"
            num={"04"}
            name={"Technology"}
            isActive={location.pathname === "/technology" ? "active" : ""}
          />
        </ul>
      </nav>

      <div>
        <button className="menuBtn" onClick={() => isOpen((prev) => !prev)}>
          <img src={menu} alt="menu" />
        </button>
      </div>
    </header>
  );
}

export default Header;
