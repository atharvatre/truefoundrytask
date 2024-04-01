import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import Charts from "../src/Components/Charts";
import Charts from "../Components/Charts";
export default {
  title: "Components/Charts",
  component: Charts,
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
  return <Charts {...args} />;
};

const exampleData = {
  "CPU Usage": [
    ["1665608250000", "1665608260000"],
    ["10", "12"],
    ["20", "22"],
    ["30", "33"],
  ],
  "Memory Usage": [
    ["1665608250000", "1665608260000"],
    ["10", "12"],
    ["20", "22"],
    ["30", "33"],
  ],
  "Network Usage": [
    ["1665608250000", "1665608260000"],
    ["10", "12"],
    ["20", "22"],
    ["30", "33"],
  ],
  "Disk IOPS": [
    ["1665608250000", "1665608260000"],
    ["10", "12"],
    ["20", "22"],
    ["30", "33"],
  ],
};

export const Primary = Template.bind({});
Primary.args = {
  dataPoints: exampleData,
  dataTs: ["1665608250000", "1665608260000"],
};
