import React from "react";
import Nav from "../components/Nav";
import styles from "./Error.module.css";

const ErrorPage = () => {
  return (
    <>
      <Nav />
      <main className={styles.content}>
        <h1>An error occured!</h1>
        <p>Could not find this page!</p>
      </main>
    </>
  );
};

export default ErrorPage;
