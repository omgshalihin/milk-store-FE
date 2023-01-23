import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <Nav />
      <main className={styles.content}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
