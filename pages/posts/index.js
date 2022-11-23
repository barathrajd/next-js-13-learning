import Link from "next/link";
import "./posts.module.css";

export default function About({ posts }) {
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

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
