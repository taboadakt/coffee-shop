import type { NextPage } from "next";
import { gql } from "@apollo/client";
import client from "../apollo/client";
import { Menu } from "./api/graphql/resolvers/types";
import MenuComponent from "../components/Menu";
import PageContainer from "../components/PageContainer";

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
    query: gql`
      query Menu {
        menu {
          drinks {
            id
            name
            price
            measurements {
              ingredientId
              measureFlOz
              variant {
                id
                name
              }
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      menu: data.menu,
    },
  };
}
