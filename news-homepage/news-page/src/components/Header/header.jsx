import React from "react";
import "./header.css";
import logo from "../../assets/images/logo.svg";
import mobileMenu from "../../assets/images/icon-menu.svg";
import mobileMenuClose from "../../assets/images/icon-menu-close.svg";

function Header() {
  const mobileMenuOpen = () => {
    const drawerMenu = document.querySelector(".drawer-menu");
    const mobileMenuIcon = document.querySelector(".mobile-menu img");
    const mobileMenu = document.querySelector(".mobile-menu");

    mobileMenu.onClick = function () {
      drawerMenu.classList.toggle("open");
      const isOpen = drawerMenu.classList.contains("open");
      mobileMenuIcon.classList = isOpen ? mobileMenuClose : mobileMenu;
    };
  };

  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">New</a>
            </li>
            <li>
              <a href="#">Popular</a>
            </li>
            <li>
              <a href="#">Trending</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
          </ul>
          <div className="mobile-menu">
            <img src={mobileMenu} alt="mobile-menu" />
          </div>
        </div>
        <div className="drawer-menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">New</a>
          </li>
          <li>
            <a href="#">Popular</a>
          </li>
          <li>
            <a href="#">Trending</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Header;
