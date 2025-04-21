import { getPosts } from "./_lib/getPost";
import HomeClient from "./_components/home/Client";

export default async function Home() {
  const posts = await getPosts();

  return (
    <HomeClient posts={posts} />
  )
}
