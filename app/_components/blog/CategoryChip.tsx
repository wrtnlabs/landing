"use client";

import { BLOG_TAGS } from "@/app/_constants/blog";
import { useURLSearchParams } from "@/app/_hooks/useURLSearchParams";
import { cva } from "class-variance-authority";

const chipVariants = cva(
    "w-fit rounded-full border cursor-pointer px-3 py-[6px] text-sm min-w-10 text-center",
    {
        variants: {
            select: {
                true: "bg-gray-800 border-gray-800 text-gray-100 dark:bg-gray-100 dark:border-gray-100 dark:text-gray-900",
                false: "border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-all duration-200",
            },
        },
        defaultVariants: {
            select: false,
        },
    },
);

export default function CategoryChip() {
    const { searchParams, searchParamsChange, deleteSearchParams } = useURLSearchParams()
    const selectTag = searchParams.get("tag");

    return (
        <div className="flex w-full flex-wrap gap-2 select-none">
            <div className={chipVariants({ select: selectTag === null })} onClick={() => deleteSearchParams("tag")}>All</div>
            {BLOG_TAGS?.map((tag, i) => <div key={tag + i} className={chipVariants({ select: selectTag === tag })} onClick={() => searchParamsChange({ tag })}>{tag}</div>)}
        </div>
    )
}