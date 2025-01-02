import { Outlet, Link } from "react-router-dom";
/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/Layout.css";
import { Button } from "@chakra-ui/react";
const Layout = () => {
  return (
    <>
      <nav>
        <Button>
          <Link to="/">Home</Link>
        </Button>

        <Button>
          <Link to="/form">Sign Up / Login</Link>
        </Button>
        <Button>
          <Link to="/contact">Contact</Link>
        </Button>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
