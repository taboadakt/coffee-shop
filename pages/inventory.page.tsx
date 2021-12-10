import type { NextPage } from "next";
import { gql } from "@apollo/client";
import client from "../apollo/client";
import { IngredientInventory } from "./api/graphql/resolvers/types";
import InventoryComponent from "../components/Inventory";
import PageContainer from "../components/PageContainer";

const Inventory: NextPage<{ inventory: IngredientInventory[] }> = ({
  inventory,
}: {
  inventory: IngredientInventory[];
}) => {
  return (
    <PageContainer title="Inventory" description="What do we have here?">
      <InventoryComponent inventory={inventory} />;
    </PageContainer>
  );
};

export default Inventory;

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Inventory {
        inventory {
          id
          name
          stockFlOz
        }
      }
    `,
  });

  return {
    props: {
      inventory: data.inventory,
    },
  };
}
