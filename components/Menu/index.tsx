import styles from "../../styles/Home.module.css";
import { Drink, Menu } from "../../graphql/server/resolvers/types";
import DrinkDisplay from "./DisplayDrink";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/types";
import { getInventory } from "../../redux/thunks";
import { useEffect } from "react";

const Menu = ({ menu }: { menu: Menu }): JSX.Element => {
  const dispatch = useDispatch();
  const { drinks } = menu;
  const inventory = useSelector((state: AppState) => state.inventory);

  useEffect(() => {
    if (!inventory) {
      dispatch(getInventory());
    }
  });
  return (
    <div className={styles.grid}>
      {drinks.map((drink: Drink) => (
        <DrinkDisplay key={drink.id} drink={drink} />
      ))}
    </div>
  );
};

export default Menu;
