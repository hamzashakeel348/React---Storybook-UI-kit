import React from "react";

import { MenuBar } from "./components/MenuBar";

export default {
  title: "Example/MenuBar",
  component: MenuBar,
};

const Template = (args) => <MenuBar />;

export const Original = Template.bind({});
Original.args = {
  user: {},
};
