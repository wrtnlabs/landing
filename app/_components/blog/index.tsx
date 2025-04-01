import "nextra-theme-blog/style.css";

import { getPosts } from "@/app/_lib/getPost";
import Link from "next/link";

export default async function BlogList() {
  const posts = await getPosts();

  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col gap-6 pt-20">
      <h1 className="text-3xl">Blog</h1>
      <div className="flex flex-col items-center gap-3">
        {posts.map(({ frontMatter, route }) => {
          const { title, date, category, author } = frontMatter;
          return (
            <Link
              href={`/blog/${route}`}
              key={route}
              className="group flex w-full cursor-pointer flex-col gap-2 rounded-xl border border-gray-200 p-4"
            >
              <div className="w-fit rounded-sm bg-gray-100 px-2 py-1 text-sm">
                {category}
              </div>
              <h1 className="text-lg font-medium text-black">{title}</h1>
              <div className="flex gap-1 text-sm text-gray-700">
                <p className="font-semibold">{date}</p>
                <p>∙</p>
                <p>{author}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
