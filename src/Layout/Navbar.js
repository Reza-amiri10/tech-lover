import { useState } from "react";
import styles from "./Navbar.module.css";

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
    <nav className={isMenuOpen ? styles.navOpen : styles.nav}>
      <p className={isMenuOpen ? styles.hideBtnLogo : ""}>Tech Lover</p>
      <ul className={isMenuOpen ? styles.listItemOpen : styles.listItem}>
        <li onClick={handleMenuList}>Home</li>
        <li onClick={handleMenuList}>Blog</li>
        <li onClick={handleMenuList}>Categories ⌄</li>
        <li onClick={handleMenuList}>About</li>
        <li onClick={handleMenuList}>Contact</li>
      </ul>
      <div className={isMenuOpen ? styles.subBtnMenuOpen : styles.subBtnMenu}>
        <button className={isMenuOpen ? styles.hideBtnLogo : ""}>
          Subscribe
        </button>

        <div onClick={handleMenuClick} className={styles.menu}>
          <div className={isMenuOpen ? styles.d1 : ""}></div>
          <div className={isMenuOpen ? styles.d2 : ""}></div>
        </div>
      </div>
    </nav>
  );
}
