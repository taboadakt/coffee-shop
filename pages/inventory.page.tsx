import type { NextPage } from "next";
import { IngredientInventory } from "./api/graphql/resolvers/types";
import InventoryComponent from "../components/Inventory";
import PageContainer from "../components/PageContainer";

const Inventory: NextPage<{ inventory: IngredientInventory[] }> = () => {
  return (
    <PageContainer title="Inventory" description="What do we have here?">
      <InventoryComponent />;
    </PageContainer>
  );
};

export default Inventory;
