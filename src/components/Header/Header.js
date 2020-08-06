import React from "react";
import { Link } from "react-router-dom";
import { Video } from "react-feather";

export const Header = () => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/">
          <h1>Movie Night</h1>
        </Link>
        {/*<Link className="header__button" to="/">*/}
        {/*  <Video className="vertical-align-middle" size={32} />*/}
        {/*</Link>*/}
      </div>
    </div>
  </header>
);

export default Header;
