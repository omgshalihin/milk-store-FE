import {
  Card,
  Image,
  Text,
  AspectRatio,
  Badge,
  Group,
  ActionIcon,
  Container,
  SimpleGrid,
  Slider,
  Button,
  Flex,
} from "@mantine/core";
import { IconShoppingCartPlus } from "@tabler/icons";
import React, { FC, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { iProduct } from "../iProduct";
import styles from "./Product.module.css";

const Product: FC = () => {
  const product: any = useLoaderData();

  const [value, setValue] = useState<number>(100);

  return (
    <>
      <Container py="xl">
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
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

            <Button size="xl" leftIcon={<IconShoppingCartPlus size={30} />}>
              <Text>Order {(value * product.storage) / 100} liter</Text>
            </Button>
          </Flex>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Product;
