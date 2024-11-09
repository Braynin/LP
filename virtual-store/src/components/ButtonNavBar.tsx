import styles from "./ButtonNavBar.module.css";
import arrayNavOptions from "../assets/NavOptions";
import React from "react";

export default function ButtonNavBar({ onSelectSection }) {
  const handleClick = (section) => {
    onSelectSection(section);
  };

  return (
    <ul className={styles["nav-options"]}>
      {arrayNavOptions.map((option, index) => (
        <React.Fragment key={index}>
          <li className={styles["nav-option"]}>
            <a
              className={styles["nav-link"]}
              onClick={() => handleClick(option.text)}
            >
              {option.text}
            </a>
          </li>
          {index < arrayNavOptions.length - 1 && (
            <span className={styles["separator"]}></span>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
}
