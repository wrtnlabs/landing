import { getPosts } from "@/app/_lib/getPost";
import { getTags } from "@/app/_lib/getTags";
import Link from "next/link";

export default async function BlogList() {
  const posts = await getPosts();
  const allTags = await getTags();
  const tags = [...new Set(allTags)];

  return (
    <div className="pt-20 min-h-screen bg-black">
      <div className="max-w-2xl mx-auto flex-col gap-6 flex">
        <h1 className="text-3xl text-white">Blog</h1>
        <div className="flex w-full flex-wrap gap-2">
          <div className="w-fit rounded-full cursor-pointer bg-gray-100 px-2 py-1 text-sm text-gray-900 min-w-10 text-center">All</div>
          {tags?.map((tag) => <div key={tag} className="w-fit rounded-full cursor-pointer bg-gray-100 px-2 py-1 text-sm text-gray-900">{tag}</div>)}
        </div>

        <div className="flex flex-col items-center gap-3">
          {posts.map(({ frontMatter, route }) => {
            const { title, date, tags, author } = frontMatter;
            return (
              <Link
                href={`/blog/${route}`}
                key={route}
                className="group flex w-full hover:bg-white/20 duration-300 transition-all cursor-pointer flex-col gap-2 rounded-xl border-gray-700 p-4"
              >
                <h1 className="h-16 text-2xl font-medium text-zinc-50">
                  {title}
                </h1>
                <div className="flex w-full items-center justify-between">
                  <div className="flex gap-1 text-base text-gray-300">
                    <p>{date}</p>
                    <p>∙</p>
                    <p>{author}</p>
                  </div>
                  <div className="w-fit rounded-full bg-gray-800 px-2 py-1 text-xs text-gray-400 border-[0.5px] border-gray-600">
                    # {tags}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div >
  );
}
