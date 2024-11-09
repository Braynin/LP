import styles from "./navBar.module.css";
import ButtonNavBar from "./ButtonNavBar";

function NavBar({ handleSelectSection }) {
  return (
    <>
      <div className={styles["nav-container"]}>
        <nav className={styles["nav"]}>
          <ButtonNavBar onSelectSection={handleSelectSection} />
        </nav>
      </div>
    </>
  );
}
export default NavBar;
