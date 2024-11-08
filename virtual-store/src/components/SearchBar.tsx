import { useState } from "react";
import SearchButton from "./SearchButton";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(); // Llama a la función de búsqueda si se presiona Enter
    }
  };

  return (
    <div className={styles["search-form"]}>
      <input
        className={styles["search-input"]}
        type="text"
        placeholder="Buscar"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <SearchButton onClick={handleSearch} />
    </div>
  );
};

export default SearchBar;
