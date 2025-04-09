import { getPosts } from "@/app/_lib/getPost";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function LatestArticles() {
    const posts = await getPosts();

    return (
        <div className="flex flex-col gap-10 px-4 md:px-10 py-40 md:max-h-screen max-w-[1440px] mx-auto">
            <div className="flex items-center justify-between">
                <h3 className="text-[32px] text-[#071414]">Latest articles</h3>
                <Link href="/blog" className="flex items-center gap-7 text-[#002424]">
                    View All <ArrowRightIcon size={24} />
                </Link>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
                {posts.map(({ frontMatter, route }, i) => {
                    const { title, date, tags, thumbnail } = frontMatter;
                    return (
                        <Link href={`/blog${route}`} key={i} className="flex flex-col justify-between h-[395px] pb-2.5 border-b border-[#E3E3E3] cursor-pointer group">
                            <div className="flex flex-col gap-6">
                                <div className="relative w-full aspect-video overflow-hidden">
                                    <Image src={thumbnail} alt="thumbnail" fill objectFit="cover" className="group-hover:scale-105 duration-300" />
                                </div>
                                <div className="flex gap-1">{tags.map((tag: string) => <div key={tag} className="py-1 px-2 bg-gray-200 rounded-sm text-sm text-black">{tag}</div>)}</div>
                                <h4 className="text-lg text-[#002424]">{title}</h4>
                            </div>
                            <div className="text-sm">
                                <p className="text-[#8B8B8B]">{date} | </p>
                                <p></p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>

    )
}