import type { NextPage } from "next";
import client from "../apollo/client";
import { Menu } from "../graphql/server/resolvers/types";
import InventoryComponent from "../components/Inventory";
import MenuComponent from "../components/Menu";
import PageContainer from "../components/PageContainer";
import styles from "../styles/Home.module.css";
import { GET_MENU } from "../graphql/client/requests";

const ColumnContainer = ({
  children,
  title,
  description,
  className,
}: {
  children: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
}): JSX.Element => (
  <div
    className={`${styles.columnContainer} ${className && styles[className]}`}
  >
    <h3>{title}</h3>
    {children}
  </div>
);
const Both: NextPage<{ menu: Menu }> = ({ menu }: { menu: Menu }) => {
  return (
    <PageContainer title="Both" description="Wow">
      <div style={{ display: "flex" }}>
        <ColumnContainer title="Menu">
          <MenuComponent menu={menu} />
        </ColumnContainer>
        <ColumnContainer title="Inventory">
          <InventoryComponent />
        </ColumnContainer>
      </div>
    </PageContainer>
  );
};

export default Both;

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
