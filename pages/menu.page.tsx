import type { NextPage } from "next";
import { Menu } from "./api/graphql/resolvers/types";
import MenuComponent from "../components/Menu";
import PageContainer from "../components/PageContainer";

const MenuPage: NextPage<{ menu: Menu }> = () => {
  return (
    <PageContainer title="Menu" description="Click on a beverage to drink it!">
      <MenuComponent />
    </PageContainer>
  );
};

export default MenuPage;
