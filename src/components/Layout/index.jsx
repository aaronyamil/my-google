import React from "react";
import "./Layout.css";
import { HeaderHome } from "../HeaderHome.jsx";
import { Footer } from "../Footer.jsx";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <HeaderHome />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
