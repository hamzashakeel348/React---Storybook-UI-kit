import React from "react";

import { Page } from "./components/Page";
import * as HeaderStories from "./Header.stories";

export default {
  title: "Example/Page",
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const Original = Template.bind({});
Original.args = {
  ...HeaderStories.Original.args,
};
