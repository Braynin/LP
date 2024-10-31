

import styles from "./SearchButton.module.css";

function SearchButton({ onClick }) {
    return (
        <button className={styles["search-button"]} onClick={onClick}>
            Buscar
        </button>
    );
}

export default SearchButton;
