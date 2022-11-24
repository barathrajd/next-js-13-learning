import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <div>Hello Next</div>
        <Link href={"/posts"}>Posts</Link>
        <Link href={"/clientSide"}>Client Side</Link>
      </main>
    </div>
  );
}
