import styles from "../../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/types";
import { useEffect } from "react";
import { getInventory } from "../../redux/thunks";

const Inventory = (): JSX.Element => {
  const dispatch = useDispatch();
  const inventory = useSelector((state: AppState) => state.inventory);

  useEffect(() => {
    if (!inventory) {
      dispatch(getInventory());
    }
  });

  if (!inventory) return <div>No inventory</div>;
  return (
    <div className={styles.grid}>
      {inventory.map((ingredient) => (
        <div className="card" key={ingredient.id}>
          <p>id: {ingredient.id}</p>
          <p>name: {ingredient.name}</p>
          <p>stockFlOz: {ingredient.stockFlOz.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default Inventory;
