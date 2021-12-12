import type { NextPage } from "next";
import client from "../apollo/client";
import { Menu } from "../graphql/server/resolvers/types";
import MenuComponent from "../components/Menu";
import PageContainer from "../components/PageContainer";
import { GET_MENU } from "../graphql/client/requests";

const MenuPage: NextPage<{ menu: Menu }> = ({ menu }: { menu: Menu }) => {
  return (
    <PageContainer title="Menu" description="Click on a beverage to drink it!">
      <MenuComponent menu={menu} />
    </PageContainer>
  );
};

export default MenuPage;

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_MENU,
  });

  return {
    props: {
      menu: data.menu,
    },
  };
}
