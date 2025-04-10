import { ArrowRightIcon } from "lucide-react";
import { Button } from "../common/button";
import Link from "next/link";
import { ROADMAP } from "@/app/_constants/roadmap";

export default function Roadmap() {
    return (
        <section className="flex justify-center items-center w-full md:h-[960px] md:max-h-screen bg-[#EEEEE8] py-40 px-4">
            <div className="flex flex-col gap-6 md:flex-row justify-between items-center max-w-[1440px] w-full">
                <div className="flex flex-col gap-6">
                    <p className="text-[#002424] text-base">Roadmap</p>
                    <h2 className="text-[#002424] text-5xl whitespace-pre-line">{"Built from the ground up\nfor every layer of AI Agents"}</h2>
                    <p className="text-[#767676] text-lg whitespace-pre-line">{"Agent OS lets you seamlessly build, deploy, manage, and host AI agents\nusing Agentica and open-source libraries—while integrating powerful AI\ntools and enabling LLMs to take action in apps."}</p>
                    <Link href="/agentica/docs/roadmap" target="_blank" className="w-fit">
                        <Button variant="secondary">
                            Our Roadmap <ArrowRightIcon strokeWidth={1.5} size={20} />
                        </Button>
                    </Link>
                </div>

                <div className="flex flex-col gap-4 w-full md:w-auto">
                    {ROADMAP.map(({ title, keywords, className, itemClassName }) => (
                        <div key={title} className={`flex md:flex-row flex-col w-full md:w-[581px] p-3.5 gap-2 rounded-2xl md:rounded-full bg-linear-to-b ${className}`}>
                            <h3 className="text-center text-xl flex-1 md:whitespace-pre-line flex justify-center items-center">
                                {title}
                            </h3>
                            <div className="flex gap-2 md:flex-row flex-col">
                                {keywords.map((keyword) => (
                                    <div key={keyword} className="p-px flex-1 relative bg-linear-to-b rounded-md md:rounded-full from-[#18EDC9CC] to-[#18EDC933] md:w-[118px] md:h-[118px]">
                                        <div className={`text-center flex gap-2 justify-center items-center rounded-md md:rounded-full text-sm font-md w-full h-full ${itemClassName.container}`}>
                                            <div className={`md:absolute rotate-45 w-1.5 h-1.5 top-2 ${itemClassName.dot}`} />
                                            {keyword}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >

    )
}