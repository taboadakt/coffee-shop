import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { gql } from "@apollo/client";
import styles from "../styles/Home.module.css";
import client from "../apollo/client";
import { Menu } from "./api/graphql/resolvers/types";

interface Country {
  code: string;
  name: string;
  emoji: string;
}

const Menu: NextPage<{ menu: Menu }> = ({ menu }: { menu: Menu }) => {
  const { drinks } = menu;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Menu</h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          {drinks.map((drink) => (
            <div key={drink.id} className={styles.card}>
              <h3>
                <a
                  href="#country-name"
                  aria-hidden="true"
                  className="aal_anchor"
                  id="country-name"
                >
                  <svg
                    aria-hidden="true"
                    className="aal_svg"
                    height="16"
                    version="1.1"
                    viewBox="0 0 16 16"
                    width="16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                    ></path>
                  </svg>
                </a>
                {drink.name}
              </h3>
              <p>
                {drink.id} - {drink.name}
              </p>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Menu;

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Menu {
        menu {
          drinks {
            name
            price
            measurements {
              ingredient {
                name
              }
              measureFlOz
              variant {
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
