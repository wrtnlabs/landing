import CategoryChip from "./CategoryChip";
import BlogList from "./BlogList";
import { getPosts } from "@/app/_lib/getPost";
import { Suspense } from "react";

export default async function BlogHome() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-white dark:bg-black px-4">
      <div className="max-w-2xl mx-auto flex-col gap-6 flex">
        <h1 className="text-[30px]! font-medium! dark:text-white text-gray-900 font-oceanic">Blog</h1>
        <Suspense>
          <CategoryChip />
          <BlogList posts={posts} />
        </Suspense>
      </div>
    </div >
  );
}
