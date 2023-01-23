import { Container, MultiSelect, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons";
import React, { FC, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductsList from "../components/ProductsList";
import styles from "./Products.module.css";

const Products: FC = () => {
  const products: any = useLoaderData();

  const [query, setQuery] = useState<string>("");

  if (products === undefined) return <h1>Loading...</h1>;

  return (
    <>
      <Container>
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
            data={[
              "React",
              "Angular",
              "Svelte",
              "Vue",
              "Riot",
              "Next.js",
              "Blitz.js",
            ]}
            placeholder="Milk Type"
            searchable
            nothingFound="Nothing found"
          />
        </section>
      </Container>

      <main>
        <ProductsList products={products} query={query} />
      </main>
    </>
  );
};

export default Products;
