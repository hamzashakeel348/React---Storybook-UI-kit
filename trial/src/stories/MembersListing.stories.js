import React from "react";

import { MembersListing } from "./components/MembersListing";

export default {
  title: "Example/MembersListing",
  component: MembersListing,
};

const Template = (args) => <MembersListing />;

export const Original = Template.bind({});
Original.args = {
  user: {},
};
