import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { gql } from "@apollo/client";
import styles from "../styles/Home.module.css";
import client from "../apollo/client";
import { Drink, Menu } from "./api/graphql/resolvers/types";
import { useState } from "react";

const yummyStrings = ["Yum!", "Delicious!", "Tasty!", "More please!", "Enjoy!"];
interface Country {
  code: string;
  name: string;
  emoji: string;
}

const handleDrink = (id: string) => {
  // // TODO reduce from inventory
  // client.mutate({
  //   variables: {
  //     input: {
  //       id,
  //     },
  //   },
  //   mutation: gql`
  //     mutation orderDrink($input: OrderDrinkInput) {
  //       orderDrink(input: $input)
  //     }
  //   `,
  // });
};

const DrinkDisplay = ({ drink }: { drink: Drink }): JSX.Element => {
  const [displayName, setDisplayName] = useState(drink.name);
  const disabled = displayName !== drink.name;
  const handleClick = () => {
    if (!disabled) {
      handleDrink(drink.id);
      setDisplayName(
        yummyStrings[Math.floor(Math.random() * yummyStrings.length)]
      );
      setTimeout(() => setDisplayName(drink.name), 1000);
    }
  };
  return (
    <button className={styles.card} onClick={handleClick} disabled={disabled}>
      <p>{displayName}</p>
    </button>
  );
};

const Menu: NextPage<{ menu: Menu }> = ({ menu }: { menu: Menu }) => {
  const { drinks } = menu;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Menu</h1>

        <p className={styles.description}>Click on a beverage to drink it!</p>

        <div className={styles.grid}>
          {drinks.map((drink) => (
            <DrinkDisplay key={drink.id} drink={drink} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Menu;

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Menu {
        menu {
          drinks {
            id
            name
            price
            measurements {
              ingredientId
              measureFlOz
              variant {
                id
                name
              }
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      menu: data.menu,
    },
  };
}
