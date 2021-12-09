import type { NextPage } from "next";
import { gql } from "@apollo/client";
import styles from "../styles/Home.module.css";
import client from "../apollo/client";
import { IngredientInventory } from "./api/graphql/resolvers/types";

const Inventory: NextPage<{ inventory: IngredientInventory[] }> = ({
  inventory,
}: {
  inventory: IngredientInventory[];
}) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Inventory</h1>

        <p className={styles.description}>What do we have?</p>

        <div className={styles.grid}>
          {inventory.map((ingredient) => (
            <div className="card" key={ingredient.id}>
              <p>id: {ingredient.id}</p>
              <p>name: {ingredient.name}</p>
              <p>stockFlOz: {ingredient.stockFlOz}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Inventory;

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Inventory {
        inventory {
          id
          name
          stockFlOz
        }
      }
    `,
  });

  return {
    props: {
      inventory: data.inventory,
    },
  };
}
