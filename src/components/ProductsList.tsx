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
} from "@mantine/core";
import { IconHeart } from "@tabler/icons";
import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { iProduct } from "../iProduct";
import Product from "../pages/Product";
import styles from "./ProductsList.module.css";

interface iProps {
  products: iProduct[];
}

const ProductsList: FC<iProps> = ({ products }) => {
  const navigate = useNavigate();

  const navigateHandler = (product: iProduct) => {
    navigate(`/products/${product.id}`);
  };

  return (
    <>
      <Container py="xl">
        <SimpleGrid cols={3} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
          {products.map((product) => (
            <Card
              className={styles.card}
              key={product.id}
              p="md"
              radius="md"
              component="a"
              onClick={() => navigateHandler(product)}
            >
              <AspectRatio ratio={1 / 1.2}>
                <Image src="/milk.png" />
              </AspectRatio>

              <Card.Section bg="white">
                <Group position="apart" pl="md" pr="md" pt="md">
                  <Text>{product.name}</Text>
                </Group>
                <Group position="apart" p="md">
                  <Text color="dimmed">{product.type}</Text>
                  <Text color="dimmed">{product.storage} liter</Text>
                </Group>
              </Card.Section>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default ProductsList;
