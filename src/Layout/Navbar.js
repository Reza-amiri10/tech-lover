import { useState } from "react";
import style from "./Navbar.module.css";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className={isMenuOpen ? style.navOpen : style.nav}>
      <NavLink
        className={isMenuOpen ? style.hideBtnLogo : style.btnLogo}
        to="/"
        onClick={() => setIsMenuOpen(false)}
      >
        Tech Lover
      </NavLink>
      <div className={isMenuOpen ? style.listItemOpen : style.listItem}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? style.activeLink : style.link
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive ? style.activeLink : style.link
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Blog
        </NavLink>
        <div className={style.dropdown}>
          <span className={style.dropbtn}>Categories ▾</span>
          <div className={style.dropdownContent}>
            <Link
              key="tech"
              to="/category/tech"
              onClick={() => setIsMenuOpen(false)}
            >
              Technology
            </Link>
            <Link
              key="ai"
              to="/category/ai"
              onClick={() => setIsMenuOpen(false)}
            >
              AI
            </Link>
            <Link
              key="gadgets"
              to="/category/gadgets"
              onClick={() => setIsMenuOpen(false)}
            >
              Gadgets
            </Link>
          </div>
        </div>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? style.activeLink : style.link
          }
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? style.activeLink : style.link
          }
          onClick={() => setIsMenuOpen(false)}
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
          onClick={() => setIsMenuOpen(false)}
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
