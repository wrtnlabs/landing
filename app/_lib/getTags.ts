import { getPosts } from "./getPost";

export async function getTags() {
  const posts = await getPosts();
  const tags = posts.flatMap((post) => post.frontMatter.tags);
  return tags;
}
