import Head from "next/head";
import useSwr from "swr";
import styles from "../../styles/Home.module.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ClientSide() {
  const { data, error } = useSwr(
    "https://jsonplaceholder.typicode.com/posts/1",
    fetcher
  );

  if (!data) return <>Loadind...</>;
  if (error) return <>Failed</>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Client Side</title>
      </Head>

      <main className={styles.main}>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
      </main>
    </div>
  );
}
