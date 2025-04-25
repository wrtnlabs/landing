"use client";

import { useURLSearchParams } from "@/app/_hooks/useURLSearchParams";
import Link from "next/link";
import { Item } from "nextra/normalize-pages";

export default function BlogList({ posts }: { posts: Item[] }) {
    const { searchParams } = useURLSearchParams();
    const tag = searchParams.get("tag");

    const filteredPosts = posts.filter((post) => {
        if (!post.frontMatter) return false;
        if (tag && !post.frontMatter.tags?.includes(tag)) return false;
        return true;
    });

    if (filteredPosts.length === 0) {
        return (
            <p className="text-base text-[#002424] dark:text-zinc-200 mt-4 text-center">No results found.</p>
        )
    }

    return (
        <div className="flex flex-col items-center gap-3">
            {filteredPosts.map(({ frontMatter, route }) => {
                const { title, date, tags, author } = frontMatter;
                return (
                    <Link
                        href={`/blog${route}`}
                        key={route}
                        className="group flex w-full hover:bg-black/10 dark:hover:bg-white/20 duration-300 decoration-transparent! transition-all cursor-pointer flex-col gap-2 rounded-xl border-gray-700 p-4"
                    >
                        <h1 className="h-16 text-lg! m-0! font-medium! text-zinc-800 dark:text-zinc-50">
                            {title}
                        </h1>
                        <div className="flex w-full items-center justify-between">
                            <div className="flex gap-1 text-base text-gray-400 dark:text-gray-300">
                                <p className="m-0!">{date}</p>
                                <p className="m-0!">∙</p>
                                <p className="m-0!">{author}</p>
                            </div>
                            <div className="w-fit rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-1 text-xs font-[400] text-gray-400 border-[0.5px] border-gray-300 dark:border-gray-600">
                                # {tags}
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}