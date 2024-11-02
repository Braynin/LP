import { Link } from "react-router-dom";

import styles from "./HeaderSearch.module.css";
import SocialLink from "./SocialLinks";

function HeaderSearch() {
  return (
    <>
      <div className={styles["header-container"]}>
        <Link to="/">
          <img
            className={styles["header-logo"]}
            src="./public/logolp.webp"
            alt="Logo Lp"
          />
        </Link>
        <form className={styles["header-search"]}>
          <input
            className={styles["search-input"]}
            type="text"
            placeholder="Buscar"
          />
        </form>
        <ul className={styles["social-links"]}>
          <SocialLink />
        </ul>
      </div>
    </>
  );
}
export default HeaderSearch;
