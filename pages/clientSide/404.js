import Head from "next/head";
import useSwr from "swr";
import styles from "../../styles/Home.module.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ClientSide() {
  const { data, error } = useSwr(
    "https://jsonplaceholder.typicode.com/post/1",
    fetcher
  );

  if (!data) return <>Loadind...</>;
  if (error) return <>Failed</>;

  return (
    <div className={styles.container}>
      <Head>
        <title>404 </title>
      </Head>

      <main className={styles.main}>
        <h1>Not Found</h1>
      </main>
    </div>
  );
}
