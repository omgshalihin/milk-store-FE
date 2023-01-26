import {
  Card,
  Image,
  Text,
  AspectRatio,
  Container,
  SimpleGrid,
  Slider,
  Button,
  Flex,
} from "@mantine/core";
import { IconShoppingCartPlus } from "@tabler/icons";
import React, { FC, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { iProduct } from "../iProduct";
import styles from "./Product.module.css";

const Product: FC = () => {
  const product: any = useLoaderData();

  const [value, setValue] = useState<number>(100);

  const orderHandler = (orderQty: number) => {
    console.log("order");
    console.log(orderQty);
  };

  return (
    <>
      <Container py="xl">
        <SimpleGrid
          mt={220}
          cols={2}
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        >
          <Card p="md" radius="md" component="a">
            <AspectRatio ratio={1 / 1}>
              <Image src="/milk.png" />
            </AspectRatio>
          </Card>
          <Flex direction="column" gap="xl" justify="space-between">
            <div>
              <Text align="left" size="xl">
                {product.name}
              </Text>
              <Text color="dimmed" align="left" size="xl">
                {product.type}
              </Text>
              <Text color="dimmed" align="left" size="xl">
                {product.storage}
              </Text>
            </div>

            <Slider
              value={value}
              onChange={setValue}
              size="xl"
              marks={[
                { value: 20, label: "20%" },
                { value: 50, label: "50%" },
                { value: 80, label: "80%" },
              ]}
            />
            {value == 100 ? (
              <Text>You have reached the MAX</Text>
            ) : (
              <Text>
                Use slider to indicate the amount of milk you would like to
                order
              </Text>
            )}

            <Button
              size="xl"
              leftIcon={<IconShoppingCartPlus size={30} />}
              onClick={() => orderHandler((value * product.storage) / 100)}
            >
              <Text>Order {(value * product.storage) / 100} liter</Text>
            </Button>
          </Flex>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Product;
