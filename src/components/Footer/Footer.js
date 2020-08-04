import React from "react";
import { Link } from "react-router-dom";
import { Video } from "react-feather";

export const Footer = () => (
  <footer className="footer">
    <div className="content-container container--flex-col">
      <p className="footer__text">Created with ♥ by Pawel in Detroit.️</p>
      <p className="footer__text">
        <Link className="footer__link" to="/credits">
          Credits.
        </Link>
      </p>
    </div>
  </footer>
);

export default Footer;
