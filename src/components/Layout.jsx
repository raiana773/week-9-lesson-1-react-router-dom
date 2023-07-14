import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <footer>@makers2023</footer>
    </>
  );
};

export { Layout };
// {} = заменили на именнованный
