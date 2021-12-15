import { useState } from "react";
import styles from "../../styles/Home.module.css";
import { orderDrink } from "../../redux/thunks";
import { useDispatch, useSelector } from "react-redux";
import { Drink } from "../../graphql/server/resolvers/types";
import { AppState } from "../../redux/types";

const yummyStrings = ["Yum!", "Delicious!", "Tasty!", "More please!", "Enjoy!"];

const DrinkDisplay = ({ drink }: { drink: Drink }): JSX.Element => {
  const outOfStock = useSelector((state: AppState) => state.outOfStock);
  const dispatch = useDispatch();
  const [displayName, setDisplayName] = useState(drink.name);
  const isOutOfStock = outOfStock.includes(drink.id);
  const disabled = displayName !== drink.name || isOutOfStock;

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
    <div>
      <button className={styles.card} onClick={handleClick} disabled={disabled}>
        <h3>{displayName}</h3>
        <h3>${drink.price}</h3>
        {isOutOfStock && <p>Out of stock</p>}
      </button>
    </div>
  );
};

export default DrinkDisplay;
