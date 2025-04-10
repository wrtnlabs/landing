"use client";

import { OUR_VALUE } from "@/app/_constants/about";
import { ArrowUpRight, Plus } from "lucide-react";
import Image from "next/image";
import { Button } from "../common/button";
import { openToast } from "../common/toast";

export default function OurValue() {
    return (
        <div>
            <div className="flex flex-col gap-14">
                <div>
                    <p className="text-black text-base">Our Value</p>
                    <h3 className="text-[#002424] text-[32px]">Bring AGI Close to People</h3>
                    <p className="text-[#071511] text-base md:text-lg opacity-60 md:opacity-40 mt-[24px] md:mt-[36px]">We connect people by realizing an AI ecosystem that is equally accessible to everyone.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {OUR_VALUE.map(({ title, content, thumbnail }, i) => (
                        <div key={i} className="flex flex-col gap-4">
                            <h3 className="text-[#002424] text-2xl md:hidden">{title}</h3>
                            <div className="group text-[#E6FDFC] relative rounded-2xl overflow-hidden aspect-[703/518]">
                                <Image src={thumbnail} alt={title} fill objectFit="cover" />
                                <div className="w-full opacity-0 group-hover:opacity-100 top-0 absolute h-full backdrop-blur-2xl bg-[#000000]/40 transition-all duration-300" />

                                <div className="absolute group-hover:hidden top-10 right-10 border-2 flex justify-center items-center border-[#FFFFFF] rounded-full w-10 h-10" >
                                    <Plus size={32} strokeWidth={1.5} color="#FFFFFF" />
                                </div>

                                <div className="flex flex-col justify-center w-full h-full p-8 md:p-14">
                                    <p className="hidden md:block opacity-0 text-base transform translate-y-[-20px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">Our Value {i + 1}</p>
                                    <h3 className="hidden md:block opacity-0 text-[32px] transform translate-y-[-20px] group-hover:opacity-100 mt-4 group-hover:translate-y-0 transition-all duration-300">{title}</h3>
                                    <p className="text-lg md:text-xl opacity-0 group-hover:opacity-60 md:mt-auto transform translate-y-[20px] group-hover:block group-hover:translate-y-0 transition-all duration-300">{content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-[1440px] mt-40 mb-52 mx-auto flex flex-col items-center justify-center gap-7 bg-[#E4F2EC] px-[40px] md:px-[80px] h-[348px]">
                <p className="text-[#071414] whitespace-pre-line text-center text-[26px] md:text-[28px]">{"Create a more efficient work environment\nwith your own personal AI agents now"}</p>
                <Button variant="primary" onClick={openToast}>Try Wrtn Labs
                    <ArrowUpRight strokeWidth={1.5} size={20} />
                </Button>
            </div>
        </div>
    )
}