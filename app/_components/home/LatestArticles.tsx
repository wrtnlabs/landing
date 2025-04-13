import { daysAgo, formatDate } from "@/app/_lib/date";
import { getPosts } from "@/app/_lib/getPost";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { addBasePath } from "@/app/_lib/add-base-path";


export default async function LatestArticles() {
  const posts = await getPosts();
  const viewPosts = posts.filter(({ name }) => ["the-journey-of-building-a-cs-refund-agent", "meet-our-new-member"].includes(name));

  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-4 py-40 md:max-h-screen md:px-10">
      <div className="flex items-center justify-between">
        <h3 className="text-[32px] text-[#071414]">Latest articles</h3>
        <Link href="/blog" className="flex items-center gap-7 text-[#002424]">
          View All <ArrowRightIcon size={24} />
        </Link>
      </div>

      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-4">
        {viewPosts.map(({ frontMatter, route }, i) => {
          if (!frontMatter) return null;
          const { title, date, tags, thumbnail } = frontMatter;
          return (
            <Link
              href={`/blog${route}`}
              key={i}
              className="group flex w-full cursor-pointer flex-col justify-between gap-8 border-b border-[#E3E3E3] pb-2.5 md:h-[395px] md:gap-0"
            >
              <div className="flex flex-col gap-6">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={addBasePath(thumbnail)}
                    alt="thumbnail"
                    fill
                    objectFit="cover"
                    className="duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex gap-1">
                  {tags.map((tag: string) => (
                    <div
                      key={tag}
                      className="rounded-sm bg-[#ECF9F3] px-2 py-1 text-sm text-[#002424]"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <h4 className="text-lg text-[#002424]">{title}</h4>
              </div>
              <div className="text-sm">
                <span className="text-[#8B8B8B]">{formatDate(date)} | </span>
                <span className="font-medium text-black">
                  {daysAgo(date)} DAYS AGO
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
