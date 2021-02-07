import React from "react";
import PropTypes from "prop-types";
import { IoMdLogOut } from "react-icons/io";
import { RiPagesLine } from "react-icons/ri";
import { RiTeamLine } from "react-icons/ri";
import { RiGitRepositoryCommitsLine } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import { VscFileMedia } from "react-icons/vsc";

import "../stylesheets/MenuBar.css";

var setAllMenuGray = () => {
  for (var i = 1; i <= 5; i++) {
    document.getElementById(`menu${i}`).style.color = "gray";
    document.getElementById(`menu${i}`).style.backgroundColor = "white";
  }
};

var change = (id) => {
  setAllMenuGray();
  document.getElementById(id).style.color = "#008B8B";
  document.getElementById(id).style.backgroundColor = "#E0FFFF	";
};

export const MenuBar = () => (
  <div id="MenuBar">
    <div id="Section1">
      <div id="Menu2">
        <h2>Project Name</h2>
        <h3>...</h3>
      </div>
      <p>Updated 2 hours ago</p>
      <img
        src="https://i.pinimg.com/564x/d1/dc/97/d1dc979c4664242c74b144a9b115de9c.jpg"
        id="profilePicture"
      />
      <img
        src="https://i.pinimg.com/564x/d1/dc/97/d1dc979c4664242c74b144a9b115de9c.jpg"
        id="profilePicture"
      />
      <img
        src="https://i.pinimg.com/564x/d1/dc/97/d1dc979c4664242c74b144a9b115de9c.jpg"
        id="profilePicture"
      />

      <button id="MenuBar_button">Preview Website</button>
      <hr></hr>
    </div>
    <div id="section2">
      <div id="menu1" onClick={() => change("menu1")}>
        <RiPagesLine />
        Pages
      </div>
      <div id="menu2" onClick={() => change("menu2")}>
        <RiGitRepositoryCommitsLine /> Posts
      </div>
      <div id="menu3" onClick={() => change("menu3")}>
        <VscFileMedia /> Media
      </div>
      <div id="menu4" onClick={() => change("menu4")}>
        <RiTeamLine /> Teams
      </div>
      <div id="menu5" onClick={() => change("menu5")}>
        <IoIosSettings /> Settings
      </div>
    </div>
    <div id="Signout">
      {" "}
      <IoMdLogOut /> Sign Out
    </div>
  </div>
);

MenuBar.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

MenuBar.defaultProps = {
  user: null,
};
