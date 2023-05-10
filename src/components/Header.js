import React from "react";
import Search from "./Search";

function Header({ search, updateSearch }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search search={search} updateSearch={updateSearch}/>
    </header>
  );
}

export default Header;
