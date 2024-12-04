import React from "react";
import { Outlet } from "react-router-dom";
import Contact from "./contact/Contact"

export const Layout = () => {
  return (
    <>
      <Outlet />
      <Contact />
    </>
  );
};
