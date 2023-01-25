import { Carousel } from "@mantine/carousel";
import { Text, Paper, Title, Button } from "@mantine/core";
import React, { FC } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { iProduct } from "../iProduct";
import styles from "./Home.module.css";

const Home: FC = () => {
  const navigate = useNavigate();
  const products: any = useLoaderData();

  const navigateHandler = () => {
    navigate("/products");
  };

  const navigateSpecificProductHandler = (id: string) => {
    navigate(`/products/${id}`);
  };

  const bestProducts = products.filter((el: iProduct) => el.storage < 10);

  return (
    <>
      <main className={styles.home__container}>
        <h1>Welcome!</h1>
        <Button size="lg" onClick={navigateHandler}>
          Bring me to all milk products
        </Button>
        <h2>Here are {bestProducts.length} of our best selling milk</h2>
        <Carousel
          slideSize="50%"
          breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
          slideGap="xl"
          align="start"
        >
          {bestProducts.map((item: iProduct) => (
            <Carousel.Slide key={item.id}>
              <Paper
                shadow="md"
                p="xl"
                radius="md"
                sx={{ backgroundImage: `url(/milk.png)` }}
                className=""
              >
                <div>
                  <Text className="" size="xs">
                    {item.type}
                  </Text>
                  <Title order={3} className="">
                    {item.name}
                  </Title>
                </div>
                <Button
                  variant="white"
                  color="dark"
                  onClick={() => navigateSpecificProductHandler(item.id)}
                >
                  View
                </Button>
              </Paper>
            </Carousel.Slide>
          ))}
        </Carousel>
      </main>
    </>
  );
};

export default Home;
