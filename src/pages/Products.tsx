import { Container, MultiSelect, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons";
import React, { FC, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductsList from "../components/ProductsList";
import styles from "./Products.module.css";

const Products: FC = () => {
  const products: any = useLoaderData();

  const [query, setQuery] = useState<string>("");
  const [milkTypes, setMilkTypes] = useState<string[]>([]);

  if (products === undefined) return <h1>Loading...</h1>;

  return (
    <>
      <Container pt={200}>
        <section className={styles.search__filter}>
          <TextInput
            placeholder="Search"
            icon={<IconSearch size={14} />}
            value={query}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setQuery(e.target.value)
            }
          />
          <MultiSelect
            onChange={(e) => setMilkTypes(e)}
            data={[
              "whole milk",
              "oat milk",
              "pea milk",
              "almond milk",
              "rice milk",
              "coconut milk",
              "soy milk",
              "walnut milk",
              "macadamia milk",
              "hemp milk",
              "cashew milk",
            ]}
            placeholder="Milk Type"
            searchable
            nothingFound="No milk types found"
          />
        </section>
      </Container>

      <main>
        <ProductsList products={products} query={query} milkTypes={milkTypes} />
      </main>
    </>
  );
};

export default Products;
