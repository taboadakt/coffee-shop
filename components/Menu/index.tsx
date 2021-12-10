import { useState } from "react";
import { gql } from "@apollo/client";
import styles from "../../styles/Home.module.css";
import { Drink, Menu } from "../../pages/api/graphql/resolvers/types";
import client from "../../apollo/client";

const yummyStrings = ["Yum!", "Delicious!", "Tasty!", "More please!", "Enjoy!"];

const handleDrink = async (id: string) => {
  // TODO reduce from inventory
  const result = await client.mutate({
    variables: {
      input: {
        id,
      },
    },
    mutation: gql`
      mutation orderDrink($input: OrderDrinkInput) {
        orderDrink(input: $input)
      }
    `,
  });
  console.log(result);
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

const Menu = ({ menu }: { menu: Menu }): JSX.Element => {
  const { drinks } = menu;
  return (
    <div className={styles.grid}>
      {drinks.map((drink: Drink) => (
        <DrinkDisplay key={drink.id} drink={drink} />
      ))}
    </div>
  );
};

export default Menu;
