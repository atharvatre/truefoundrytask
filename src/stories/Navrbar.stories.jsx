import Navrbar from "../Components/Navrbar";
import React from "react";
import "../../src/index.css";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "UI/NavBar",
  component: Navrbar,
};
const Template = (args) => {
  return (
    <Router>
      <Navrbar {...args} />
    </Router>
  );
};
export const Primary = Template.bind({});
// export const navbar = () => <Navrbar />;
