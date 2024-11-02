/*Components*/

import FooterSection from "./FooterSection";
import styles from "./Footer.module.css";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <>
      <div className={styles["footer-container"]}>
        <FooterSection />
        <div className={styles["footer-section"]}>
          <h4 className={styles["footer-title"]}>¿Consultas?</h4>
          <a className={styles["footer-option"]} href="tel:+51997743461">
            +51 997 743 461
          </a>
          <h4 className={styles["footer-title"]}>Síguenos en</h4>
          <ul className={styles["social-links"]}>
            <SocialLinks />
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
