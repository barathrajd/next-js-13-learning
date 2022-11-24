import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

// Getting the prop posts from the async getStaticProps()
export default function Posts({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Posts</title>
      </Head>

      <main className={styles.main}>
        <Link href={"/"}>Home</Link>
        {posts.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))}
      </main>
    </div>
  );
}
// getStaticProps() provides the props for the SSG pages (Static Site generation)
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
