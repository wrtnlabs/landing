import { addBasePath } from "@/app/_lib/add-base-path";
import clsx from "clsx";
import { Plus, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ValueCardProps {
    title: string;
    content: string;
    thumbnail: string;
    index: number;
}

export default function ValueCard({ title, content, thumbnail, index }: ValueCardProps) {
    const [showContent, setShowContent] = useState(false);

    return (
        <div key={index} className="flex flex-col gap-4">
            <h3 className="text-2xl text-[#002424] md:hidden">{title}</h3>
            <div className="group relative aspect-[703/518] overflow-hidden rounded-2xl text-[#E6FDFC]">
                <Image
                    src={addBasePath(thumbnail)}
                    alt={title}
                    fill
                    objectFit="cover"
                />
                <div className={clsx(["absolute top-0 h-full w-full bg-[#000000]/40 opacity-0 backdrop-blur-2xl transition-all duration-300 md:group-hover:opacity-100", showContent && "opacity-100"])} />

                <div
                    className="absolute top-10 right-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#FFFFFF] cursor-pointer md:group-hover:hidden"
                    onClick={() => setShowContent((prev) => !prev)}
                >
                    {showContent ? <X size={32} strokeWidth={1.5} color="#FFFFFF" /> : <Plus size={32} strokeWidth={1.5} color="#FFFFFF" />}
                </div>

                <div className="flex h-full w-full flex-col justify-center p-8 md:p-14">
                    <p className="hidden translate-y-[-20px] transform text-base opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:block">
                        Our Value {index + 1}
                    </p>
                    <h3 className="mt-4 hidden translate-y-[-20px] transform text-[32px] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:block">
                        {title}
                    </h3>

                    <p
                        className={clsx(["mt-4 text-sm transition-opacity duration-300 md:mt-auto md:text-xl opacity-0 md:group-hover:block md:group-hover:opacity-60", showContent && "block opacity-60"])}
                    >
                        {content}
                    </p>
                </div>
            </div>
        </div>
    )
}