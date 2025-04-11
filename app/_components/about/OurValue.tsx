"use client";

import { OUR_VALUE } from "@/app/_constants/about";
import { ArrowUpRight, Plus } from "lucide-react";
import Image from "next/image";
import { Button } from "../common/button";
import { openToast } from "../common/toast";
import { addBasePath } from "@/app/_lib/add-base-path";

export default function OurValue() {
  return (
    <div>
      <div className="flex flex-col gap-14">
        <div>
          <p className="text-base text-black">Our Value</p>
          <h3 className="text-[32px] text-[#002424]">
            Bring AGI Close to People
          </h3>
          <p className="mt-[24px] text-base text-[#071511] opacity-60 md:mt-[36px] md:text-lg md:opacity-40">
            We connect people by realizing an AI ecosystem that is equally
            accessible to everyone.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {OUR_VALUE.map(({ title, content, thumbnail }, i) => (
            <div key={i} className="flex flex-col gap-4">
              <h3 className="text-2xl text-[#002424] md:hidden">{title}</h3>
              <div className="group relative aspect-[703/518] overflow-hidden rounded-2xl text-[#E6FDFC]">
                <Image
                  src={addBasePath(thumbnail)}
                  alt={title}
                  fill
                  objectFit="cover"
                />
                <div className="absolute top-0 h-full w-full bg-[#000000]/40 opacity-0 backdrop-blur-2xl transition-all duration-300 group-hover:opacity-100" />

                <div className="absolute top-10 right-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#FFFFFF] group-hover:hidden">
                  <Plus size={32} strokeWidth={1.5} color="#FFFFFF" />
                </div>

                <div className="flex h-full w-full flex-col justify-center p-8 md:p-14">
                  <p className="hidden translate-y-[-20px] transform text-base opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:block">
                    Our Value {i + 1}
                  </p>
                  <h3 className="mt-4 hidden translate-y-[-20px] transform text-[32px] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:block">
                    {title}
                  </h3>
                  <p className="translate-y-[20px] transform text-lg opacity-0 transition-all duration-300 group-hover:block group-hover:translate-y-0 group-hover:opacity-60 md:mt-auto md:text-xl">
                    {content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-40 mb-52 flex h-[348px] max-w-[1440px] flex-col items-center justify-center gap-7 bg-[#E4F2EC] px-[40px] md:px-[80px]">
        <p className="text-center text-[26px] whitespace-pre-line text-[#071414] md:text-[28px]">
          {
            "Create a more efficient work environment\nwith your own personal AI agents now"
          }
        </p>
        <Button variant="primary" onClick={openToast}>
          Try Wrtn Labs
          <ArrowUpRight strokeWidth={1.5} size={20} />
        </Button>
      </div>
    </div>
  );
}
