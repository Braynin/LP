/*Components*/

import Messages from "./Messages.tsx";
import HeaderSearch from "./HeaderSearch.tsx";
import NavBar from "./NavBar.tsx";

function Header({ onSearch }) {
  return (
    <>
      <Messages />
      <HeaderSearch onSearch={onSearch} />
      <NavBar />
    </>
  );
}

export default Header;
