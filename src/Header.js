import React from "react";
import Logo from "./logo_transparent.png"



function Header() {
    return(
    <header className="App-header">
    <img src={Logo} className="App-logo" alt="logo" />
  </header>
  );
}

export default Header;