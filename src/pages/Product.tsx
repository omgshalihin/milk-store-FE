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
import { useParams } from "react-router-dom";
import { iProduct } from "../iProduct";
import styles from "./Product.module.css";

const Product: FC = () => {
  const [value, setValue] = useState(100);
  const params = useParams();
  // const [productId, setProductId] = useState<string>();

  useEffect(() => {
    const productId = params.id;
  }, []);

  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.id}</p>
      <p></p>
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
                  Name
                </Text>
                <Text color="dimmed" align="left" size="xl">
                  Type
                </Text>
                <Text color="dimmed" align="left" size="xl">
                  Storage Qty
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
              <Button size="xl" leftIcon={<IconShoppingCartPlus size={30} />}>
                <Text>Order {value} liter</Text>
              </Button>
            </Flex>
          </SimpleGrid>
        </Container>
      </>
    </>
  );
};

export default Product;
