import { useState } from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuList = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };
  return (
    <nav className={isMenuOpen ? style.navOpen : style.nav}>
      <p className={isMenuOpen ? style.hideBtnLogo : ""}>Tech Lover</p>
      <div className={isMenuOpen ? style.listItemOpen : style.listItem}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? style.activeLink : style.link
          }
          onClick={handleMenuList}
        >
          Home
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive ? style.activeLink : style.link
          }
          onClick={handleMenuList}
        >
          Blog
        </NavLink>
        <NavLink
          to="/categories"
          className={({ isActive }) =>
            isActive ? style.activeLink : style.link
          }
          onClick={handleMenuList}
        >
          Categories ⌄
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? style.activeLink : style.link
          }
          onClick={handleMenuList}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? style.activeLink : style.link
          }
          onClick={handleMenuList}
        >
          Contact
        </NavLink>
      </div>
      <div className={isMenuOpen ? style.subBtnMenuOpen : style.subBtnMenu}>
        <NavLink
          to="/subscribe"
          className={({ isActive }) =>
            isActive ? style.activeLinkBtn : style.link
          }
          onClick={handleMenuList}
        >
          <button className={isMenuOpen ? style.hideBtnLogo : ""}>
            Subscribe
          </button>
        </NavLink>

        <div onClick={handleMenuClick} className={style.menu}>
          <div className={isMenuOpen ? style.d1 : ""}></div>
          <div className={isMenuOpen ? style.d2 : ""}></div>
        </div>
      </div>
    </nav>
  );
}
