import { Link } from "react-router-dom";

import styles from "./HeaderSearch.module.css";
import SocialLink from "./SocialLinks.tsx";
import SearchBar from "./SearchBar.tsx";

function HeaderSearch({ onSearch }) {
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
        <SearchBar onSearch={onSearch} />
        <ul className={styles["social-links"]}>
          <SocialLink />
        </ul>
      </div>
    </>
  );
}
export default HeaderSearch;
