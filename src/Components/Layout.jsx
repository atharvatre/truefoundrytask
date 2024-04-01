//Layout wrapper component

import React from "react";
// import Navr from "./Header";
import { Helmet } from "react-helmet";
// import {helmet} from "helmet";
import Navrbar from "./Navrbar";
const Layout = ({
  children,
  title,
  description,
  keywords,
  author,
}) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />

        <title>{title}</title>
      </Helmet>
      <Navrbar />
      <main>{children}</main>
    </div>
  );
};
Layout.defaultProps = {
  title: "TrueFoundry",
  description: "frontend task TrueFoundry",
  keywords: "react, tailwind",
  author: "darthcoder",
};

export default Layout;
