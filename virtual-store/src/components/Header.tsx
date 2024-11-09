/*Components*/

import Messages from "./Messages.tsx";
import HeaderSearch from "./HeaderSearch.tsx";
import NavBar from "./NavBar.tsx";

function Header({ onSearch, handleSelectSection }) {
  return (
    <>
      <Messages />
      <HeaderSearch onSearch={onSearch} />
      <NavBar handleSelectSection={handleSelectSection} />
    </>
  );
}

export default Header;
