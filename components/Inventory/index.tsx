import styles from "../../styles/Home.module.css";
import { IngredientInventory } from "../../pages/api/graphql/resolvers/types";

const Inventory = ({
  inventory,
}: {
  inventory: IngredientInventory[];
}): JSX.Element => {
  return (
    <div className={styles.grid}>
      {inventory.map((ingredient) => (
        <div className="card" key={ingredient.id}>
          <p>id: {ingredient.id}</p>
          <p>name: {ingredient.name}</p>
          <p>stockFlOz: {ingredient.stockFlOz}</p>
        </div>
      ))}
    </div>
  );
};

export default Inventory;
