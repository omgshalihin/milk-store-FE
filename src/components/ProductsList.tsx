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
import React, { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { iProduct } from "../iProduct";
import Product from "../pages/Product";
import styles from "./ProductsList.module.css";

interface iProps {
  products: iProduct[];
  query: string;
  milkTypes: string[];
}

const ProductsList: FC<iProps> = ({ products, query, milkTypes }) => {
  const [filterIsActive, setFilterIsActive] = useState<boolean>(false);
  const searchedProducts = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );
  const filteredProducts = products.filter((p) =>
    milkTypes.includes(p.type.toLowerCase())
  );

  const navigate = useNavigate();
  const navigateHandler = (product: iProduct) => {
    navigate(`/products/${product.id}`);
  };

  useEffect(() => {
    if (milkTypes.length !== 0) {
      setFilterIsActive(true);
    } else {
      setFilterIsActive(false);
    }
  }, [milkTypes]);

  return (
    <>
      <Container py="xl">
        <section className={styles.total}>
          <p>
            {(!filterIsActive ? searchedProducts : filteredProducts).length}{" "}
            products
          </p>
        </section>
        <SimpleGrid cols={3} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
          {(!filterIsActive ? searchedProducts : filteredProducts).map(
            (product) => (
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
            )
          )}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default ProductsList;
