import React from "react";
import "./header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header_icon" />
      </IconButton>

      <img
        className="header__logo"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thecoco.net%2Fwp-content%2Fuploads%2F2018%2F08%2Ftinder-logo.png&f=1&nofb=1"
        alt="tinder logo"
      />

      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
