import styles from "./FooterSection.module.css";
import arrayFooterOptions from "../assets/FooterOptions";

const createFooterSection = (option: any) => (
  <div className={styles["footer-section"]}>
    <h4 className={styles["footer-title"]}>{option.title}</h4>
    <ul className={styles["footer-options"]}>
      <li>
        <a className={styles["footer-option"]} href={option.option1[1]}>
          {option.option1[0]}
        </a>
      </li>
      <li>
        <a className={styles["footer-option"]} href={option.option2[1]}>
          {option.option2[0]}
        </a>
      </li>
      <li>
        <a className={styles["footer-option"]} href={option.option3[1]}>
          {option.option3[0]}
        </a>
      </li>
      <li>
        <a className={styles["footer-option"]} href={option.option4[1]}>
          {option.option4[0]}
        </a>
      </li>
    </ul>
  </div>
);

export default function SocialLink() {
  return arrayFooterOptions.map(createFooterSection);
}
