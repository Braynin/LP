import styles from "./navBar.module.css";
import ButtonNavBar from "./ButtonNavBar";

function NavBar() {
  return (
    <>
      <div className={styles["nav-container"]}>
        <nav className={styles["nav"]}>
          <ul className={styles["nav-options"]}>
            <ButtonNavBar />
          </ul>
        </nav>
      </div>
    </>
  );
}
export default NavBar;
