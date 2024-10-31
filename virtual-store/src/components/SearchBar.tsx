import React, { useState } from "react";
import SearchButton from "./SearchButton";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {

    const [searchText, setSearchText] = useState("");

    const handleSearch = () => {
        onSearch(searchText);
    };


    return (
        <div className={styles["search-form"]}>
        <input
            className={styles["search-input"]}
            type="text"
            placeholder="Buscar"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
        />
        <SearchButton onClick={handleSearch} />
    </div>
    );
};

export default SearchBar;