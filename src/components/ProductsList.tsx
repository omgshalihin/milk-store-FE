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
import React from "react";
import { Link } from "react-router-dom";
import Product from "../pages/Product";
import styles from "./ProductsList.module.css";

const ProductsList = ({ products }) => {
  return (
    <>
      {/* <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={product.id}>{product.name}</Link>
          </li>
        ))}
      </ul> */}
      <Container py="xl">
        <SimpleGrid cols={3} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
          {products.map((product) => (
            // <li key={product.id}>
            //   <Link to={product.id}>
            //     <img src="/" alt="milk image" />
            //     <p>{product.name}</p>
            //     <p>{product.type}</p>
            //     <p>{product.storage}</p>
            //   </Link>
            // </li>
            <Card
              className={styles.card}
              key={product.id}
              p="md"
              radius="md"
              component="a"
              href="#"
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
