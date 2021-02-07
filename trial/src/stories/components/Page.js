import React from "react";
import PropTypes from "prop-types";
import { MenuBar } from "./MenuBar";
import { Header } from "./Header";
import { MembersListing } from "./MembersListing";
import "../stylesheets/page.css";

export const Page = () => (
  <>
    <Header />
    <MenuBar />
    <MembersListing />
  </>
);
Page.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Page.defaultProps = {
  user: null,
};
