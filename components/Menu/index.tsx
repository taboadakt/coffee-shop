import { useState } from "react";
import styles from "../../styles/Home.module.css";
import { orderDrink } from "../../redux/thunks";
import { useDispatch } from "react-redux";
import { Drink, Menu } from "../../graphql/server/resolvers/types";

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
