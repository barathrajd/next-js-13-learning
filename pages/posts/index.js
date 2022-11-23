import Link from "next/link";
import "./posts.module.css";

// Getting the prop posts from the async getStaticProps()
export default function Posts({ posts }) {
  return (
    <div className="about">
      {posts.map((post) => (
        <Link key={post.id} href={`/posts/${post.id}`}>
          <li>{post.title}</li>
        </Link>
      ))}
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
