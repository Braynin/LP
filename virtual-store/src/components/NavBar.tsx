import styles from "./navBar.module.css";
import ButtonNavBar from "./ButtonNavBar";

function NavBar() {
  return (
    <>
      <div className={styles["nav-container"]}>
        <nav className={styles["nav"]}>
          <ButtonNavBar />
        </nav>
      </div>
    </>
  );
}
export default NavBar;
