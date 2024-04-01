import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import Logs from "../src/Components/Logs";
import Logs from "../Components/Logs";
export default {
  title: "Components/Logs",
  component: Logs,
  argTypes: {
    // If you want to add any props for this component, add them here
  },
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
};

const Template = (args) => {
  return <Logs {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  timestamp: 1665608275847,
  logs: [
    {
      id: 1,
      timestamp: 1665608250000,
      message: "Log message 1",
    },
    {
      id: 2,
      timestamp: 1665608260000,
      message: "Log message 2",
    },
  ],
};
