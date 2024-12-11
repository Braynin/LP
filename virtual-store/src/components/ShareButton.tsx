import React, { useState } from "react";
import SocialLinks from "./SocialLinks";
import styles from "./ShareButton.module.css";

const ShareButton: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Muestra el menú cuando el cursor entra en el área del contenedor
  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  // Oculta el menú cuando el cursor sale completamente del área
  const handleMouseLeave = () => {
    setShowMenu(false);
  };

  return (
    <li
      className={styles["share-container"]}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={styles["share-button-wrapper"]}
        onMouseEnter={handleMouseEnter} // El menú permanecerá visible si el cursor está en esta área
        onMouseLeave={handleMouseLeave} // Oculta el menú cuando el cursor sale de todo el contenedor
      >
        <a className={styles["policy-icon"]} href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles["icon icon-tabler icons-tabler-outline icon-tabler-share"]}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M8.7 10.7l6.6 -3.4" />
            <path d="M8.7 13.3l6.6 3.4" />
          </svg>
        </a>
        <p className={styles["policy-desc"]}>Compartir</p>

        {showMenu && (
          <div className={styles["share-menu"]}>
            <SocialLinks />
          </div>
        )}
      </div>
    </li>
  );
};

export default ShareButton;
