import React, { useEffect } from "react";
import Nav from "../components/Nav";
import styles from "./Success.module.css";
import { Container, MultiSelect, TextInput } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);

  return (
    <>
      <Container pt={250}>
        <main className={styles.content}>
          <h1>Thank you for shopping with us!</h1>
          <p>You will be directed to the homepage shortly.</p>
        </main>
      </Container>
    </>
  );
};

export default Success;
