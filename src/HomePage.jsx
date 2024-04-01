import React from "react";
import Layout from "./Components/Layout";

const HomePage = () => {
  return (
    <Layout title={"TrueFoundry"}>
      <div className="h-screen flex items-center justify-center">
        TrueFoundry
        <h1> Frontend Task</h1>
        <h3>Made By: Atharv Atre</h3>
      </div>
    </Layout>
  );
};

export default HomePage;
