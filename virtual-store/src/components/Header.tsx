/*Components*/

import Messages from "./Messages";
import HeaderSearch from "./HeaderSearch.tsx";
import NavBar from "./NavBar";

function Header() {
  return (
    <>
      <Messages />
      <HeaderSearch />
      <NavBar />
    </>
  );
}

export default Header;
