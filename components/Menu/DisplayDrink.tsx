import { useState } from "react";
import styles from "../../styles/Home.module.css";
import { orderDrink } from "../../redux/thunks";
import { useDispatch } from "react-redux";
import { Drink } from "../../graphql/server/resolvers/types";

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
      <h3>{displayName}</h3>
      <h3>${drink.price}</h3>
    </button>
  );
};

export default DrinkDisplay;
