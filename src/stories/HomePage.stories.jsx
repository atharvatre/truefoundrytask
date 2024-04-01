import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import HomePage from "../src/Components/HomePage";
import HomePage from "../HomePage";
export default {
  title: "UI/HomePage",
  component: HomePage,
  argTypes: {},
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
};

export const Primary = () => {
  return <HomePage />;
};
