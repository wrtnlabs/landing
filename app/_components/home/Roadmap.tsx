import { ArrowRightIcon } from "lucide-react";
import { Button } from "../common/button";
import Link from "next/link";
import { ROADMAP } from "@/app/_constants/roadmap";

export default function Roadmap() {
    return (
        <section className="flex flex-col md:flex-row h-[960px] md:max-h-screen bg-[#EEEEE8] px-60 items-center justify-between">
            <div className="flex flex-col gap-6">
                <p className="text-[#002424] text-base">Roadmap</p>
                <h2 className="text-[#002424] text-5xl whitespace-pre-line">{"Built from the ground up\nfor every layer of AI Agents"}</h2>
                <p className="text-[#767676] text-lg">Agent OS lets you seamlessly build, deploy, manage, and host AI agents using Agentica and open-source libraries—while integrating powerful AI tools and enabling LLMs to take action in apps.</p>
                <Link href="/agentica/docs/roadmap" target="_blank" className="w-fit">
                    <Button variant="secondary">
                        Our Roadmap <ArrowRightIcon strokeWidth={1.5} size={20} />
                    </Button>
                </Link>
            </div>

            <div className="flex flex-col gap-4">
                {ROADMAP.map(({ title, keywords, className, itemClassName }) => (
                    <div key={title} className={`flex w-[581px] p-3.5 gap-2 rounded-full bg-linear-to-b ${className}`}>
                        <h3 className="text-center text-xl flex-1 whitespace-pre-line flex justify-center items-center">
                            {title}
                        </h3>
                        <div className="flex gap-2">
                            {keywords.map((keyword) => (
                                <div key={keyword} className="p-px relative bg-linear-to-b rounded-full from-[#18EDC9CC] to-[#18EDC933] w-[118px] h-[118px]">
                                    <div className={`text-center flex justify-center items-center rounded-full text-sm font-md w-full h-full ${itemClassName.container}`}>
                                        <div className={`absolute rotate-45 w-1.5 h-1.5 top-2 ${itemClassName.dot}`} />
                                        {keyword}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section >

    )
}