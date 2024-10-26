import styles from "./navBar.module.css";

function NavBar() {
  return (
    <>
      <div className={styles["nav-container"]}>
        <nav className={styles["nav"]}>
          <ul className={styles["nav-options"]}>
            <li className={styles["nav-option"]}>
              <a className={styles["nav-link"]} href="#" data-section="penal">
                Penal
              </a>
            </li>

            <li className={styles["nav-option"]}>
              <a className={styles["nav-link"]} href="#" data-section="civil">
                Civil
              </a>
            </li>

            <li className={styles["nav-option"]}>
              <a className={styles["nav-link"]} href="#" data-section="familia">
                Familia
              </a>
            </li>

            <li className={styles["nav-option"]}>
              <a
                className={styles["nav-link"]}
                href="#"
                data-section="administrativo"
              >
                Administrativo
              </a>
            </li>

            <li className={styles["nav-option"]}>
              <a
                className={styles["nav-link"]}
                href="#"
                data-section="constitucional"
              >
                Constitucional
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default NavBar;
