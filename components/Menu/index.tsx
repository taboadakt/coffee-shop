import { useEffect, useState } from "react";
import { gql } from "@apollo/client";
import styles from "../../styles/Home.module.css";
import { Drink, Menu } from "../../pages/api/graphql/resolvers/types";
import client from "../../apollo/client";
import { getInventory, getMenu, orderDrink } from "../../redux/thunks";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/types";

const yummyStrings = ["Yum!", "Delicious!", "Tasty!", "More please!", "Enjoy!"];

const DrinkDisplay = ({ drink }: { drink: Drink }): JSX.Element => {
  const dispatch = useDispatch();
  const [displayName, setDisplayName] = useState(drink.name);
  const disabled = displayName !== drink.name;

  const handleDrink = async (id: string) => {
    dispatch(orderDrink(id));
  };
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

const Menu = (): JSX.Element => {
  const dispatch = useDispatch();
  const menu = useSelector((state: AppState) => state.menu);

  useEffect(() => {
    if (!menu) {
      dispatch(getMenu());
    }
  });

  if (!menu) return <div>No Menu loaded</div>;

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
