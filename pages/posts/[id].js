import Link from "next/link";

export default function About({ post }) {
  return (
    <div>
      <Link href={"/posts"}>Back</Link>
      <div>id :{post.id}</div>
      <h4>Title :{post.title}</h4>
      <p>Body :{post.body}</p>
    </div>
  );
}
// getStaticPath get the datas from the build time.
export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const posts = await res.json();

  // ID format to be in the String

  const paths = posts.map((post) => ({
    params: { id: String(post.id) },
  }));

  return { paths, fallback: false };
}

// getting the dynamic page id from the async getStaticPath()
export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();

  return { props: { post } };
}
