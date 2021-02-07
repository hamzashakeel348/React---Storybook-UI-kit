import React from "react";
import { BiPyramid } from "react-icons/bi";

import { IoIosNotifications } from "react-icons/io";

import "../stylesheets/header.css";

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <div className="wrapper">
    <div id="Main">
      <BiPyramid />
      <hr />
      <select>
        <option> Organization 01</option>
        <option>Organization 02</option>
        <option>Organization 03</option>
        <option>Organization 04</option>
      </select>
    </div>

    <div id="Main2">
      <hr />
      <IoIosNotifications />
      <img
        src="https://i.pinimg.com/564x/d1/dc/97/d1dc979c4664242c74b144a9b115de9c.jpg"
        id="ProfilePicture"
      />
    </div>
  </div>
);
