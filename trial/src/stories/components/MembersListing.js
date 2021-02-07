import React from "react";
import PropTypes from "prop-types";
import { VscSearch } from "react-icons/vsc";
import { BsPlusSquare } from "react-icons/bs";

import "../stylesheets/MembersListing.css";

var setAllMenuGray = () => {
  for (var i = 1; i <= 5; i++) {
    document.getElementById(`Member${i}`).style.color = "gray";
    document.getElementById(`Member${i}`).style.backgroundColor = "white";
  }
};

var change = (id) => {
  setAllMenuGray();
  document.getElementById(id).style.color = "#008B8B";
  document.getElementById(id).style.backgroundColor = "#E0FFFF	";
};

export const MembersListing = () => (
  <div className="MemebersListing">
    <div id="MemebersListing1">
      <h3>COLLABORATORS</h3>
      <select>
        <option>Alpahbet A - Z</option>
      </select>
      <hr id="one"></hr>
      <input placeholder="Text" />
      <VscSearch />
      <hr></hr>
    </div>

    <div id="section">
      <div>
        All Members <BsPlusSquare id="section_svg" />
      </div>
      <div id="Member1" onClick={() => change("Member1")}>
        <img
          src="https://i.pinimg.com/564x/d1/dc/97/d1dc979c4664242c74b144a9b115de9c.jpg"
          id="profilePicture"
        />{" "}
        <div id="Info">
          <h3>Username</h3>
          <p>Username@gmail.com</p>
        </div>
        <div id="Section_right">
          <button>contirbutors</button>
          <p>...</p>
        </div>
      </div>
      <div id="Member2" onClick={() => change("Member2")}>
        <img
          src="https://i.pinimg.com/564x/d1/dc/97/d1dc979c4664242c74b144a9b115de9c.jpg"
          id="profilePicture"
        />{" "}
        <div id="Info">
          <h3>Username</h3>
          <p>Username@gmail.com</p>
        </div>
        <div id="Section_right">
          <button>contirbutors</button>
          <p>...</p>
        </div>
      </div>
      <div id="Member3" onClick={() => change("Member3")}>
        <img
          src="https://i.pinimg.com/564x/d1/dc/97/d1dc979c4664242c74b144a9b115de9c.jpg"
          id="profilePicture"
        />{" "}
        <div id="Info">
          <h3>Username</h3>
          <p>Username@gmail.com</p>
        </div>
        <div id="Section_right">
          <button>contirbutors</button>
          <p>...</p>
        </div>{" "}
      </div>
      <div id="Member4" onClick={() => change("Member5")}>
        <img
          src="https://i.pinimg.com/564x/d1/dc/97/d1dc979c4664242c74b144a9b115de9c.jpg"
          id="profilePicture"
        />{" "}
        <div id="Info">
          <h3>Username</h3>
          <p>Username@gmail.com</p>
        </div>
        <div id="Section_right">
          <button>contirbutors</button>
          <p>...</p>
        </div>
      </div>
      <div id="Member5" onClick={() => change("Member5")}>
        <img
          src="https://i.pinimg.com/564x/d1/dc/97/d1dc979c4664242c74b144a9b115de9c.jpg"
          id="profilePicture"
        />{" "}
        <div id="Info">
          <h3>Username</h3>
          <p>Username@gmail.com</p>
        </div>
        <div id="Section_right">
          <button>contirbutors</button>
          <p>...</p>
        </div>
      </div>
    </div>
    <div id="section3">
      <div>
        Teams <BsPlusSquare id="section_svg" />
      </div>
      <div>
        Featured Article Items{" "}
        <div id="Section_right3">
          <p>...</p>
        </div>
      </div>
      <div>
        Daily Post Article
        <div id="Section_right3">
          <p>...</p>
        </div>
      </div>
    </div>
  </div>
);

MembersListing.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

MembersListing.defaultProps = {
  user: null,
};
