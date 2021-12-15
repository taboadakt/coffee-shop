import { Drink, Menu } from "../../graphql/server/resolvers/types";
import DrinkDisplay from "./DisplayDrink";

const Menu = ({ menu }: { menu: Menu }): JSX.Element => {
  const { drinks } = menu;

  return (
    <div>
      {drinks.map((drink: Drink) => (
        <DrinkDisplay key={drink.id} drink={drink} />
      ))}
    </div>
  );
};

export default Menu;
