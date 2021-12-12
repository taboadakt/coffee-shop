import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getInventory, getMenu } from "../redux/thunks";
import styles from "../styles/Home.module.css";

const MOTTO = "More espresso less depresso";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInventory);
    dispatch(getMenu);
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Shop</title>
        <meta name="description" content={MOTTO} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the Coffee Shop</h1>
        <p>{MOTTO}</p>

        <Link href="/inventory">
          <a>See your inventory</a>
        </Link>
        <Link href="/menu">
          <a>See your menu</a>
        </Link>
        <Link href="/both">
          <a>Why not both</a>
        </Link>
      </main>
    </div>
  );
};

export default Home;
