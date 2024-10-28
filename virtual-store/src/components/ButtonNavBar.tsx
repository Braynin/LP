import styles from "./ButtonNavBar.module.css";
import arrayNavOptions from "../assets/NavOptions";

const createNavOption = (option: any) => (
  <li className={styles["nav-option"]}>
    <a className={styles["nav-link"]} href={option.linkto}>
      {option.text}
    </a>
  </li>
);

export default function ButtonNavBar() {
  return arrayNavOptions.map(createNavOption);
}
