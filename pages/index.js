import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Its a next auth demo app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Hello From IntelliByte 🔥 </h1>
      </main>

      <footer className={styles.footer}>
        &copy; All rights reserved to IntelliByte 🔥
      </footer>
    </div>
  );
}
