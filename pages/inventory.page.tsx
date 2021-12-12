import type { NextPage } from "next";
import InventoryComponent from "../components/Inventory";
import PageContainer from "../components/PageContainer";
import { IngredientInventory } from "../graphql/server/resolvers/types";

const Inventory: NextPage<{ inventory: IngredientInventory[] }> = () => {
  return (
    <PageContainer title="Inventory" description="What do we have here?">
      <InventoryComponent />
    </PageContainer>
  );
};

export default Inventory;
