"use client";

import { ArrowRightIcon } from "lucide-react";
import { Button } from "../common/button";
import Image from "next/image";
import { openToast } from "../common/toast";
import { addBasePath } from "@/app/_lib/add-base-path";
import { useScreenSize } from "@/app/_hooks/useScreenSize";

export default function HowItWorks() {
  const { isMobile } = useScreenSize();

  return (
    <section className="flex w-full max-w-[1440px] flex-col gap-5 px-4 py-24 text-[#002424] md:px-8 md:py-40">
      <p className="text-base">Coming soon</p>
      <h2 className="font-oceanic text-[24px] leading-normal whitespace-pre-line md:text-[48px] md:leading-[56px] ">
        {"Unchain your potential\nwith Wrtn Agent OS"}
      </h2>
      <p className="text-base leading-6 md:whitespace-pre-line text-[#767676]">
        {
          "Using Wrtn Agent OS, you can easily create and share your own AI apps and agents\nthrough natural language input and a no-code interface, even without any knowledge of development."
        }
      </p>
      <Button variant="secondary" className="w-fit" onClick={openToast}>
        Agent OS <ArrowRightIcon strokeWidth={1.5} size={20} />
      </Button>

      {isMobile ? <div className="relative aspect-72/31 min-h-[320px] w-full cursor-pointer overflow-hidden rounded-3xl">
        <Image
          src={addBasePath("/images/main_mobile.png")}
          alt="thumbnail"
          fill
          objectFit="cover"
          className="scale-105 transition-all duration-750 hover:scale-100"
        />
      </div> : <div className="relative aspect-72/31 min-h-[320px] w-full cursor-pointer overflow-hidden rounded-3xl">
        <Image
          src={addBasePath("/images/main.png")}
          alt="thumbnail"
          fill
          objectFit="cover"
          className="scale-105 transition-all duration-750 hover:scale-100"
        />
      </div>}
      {/* <div className="relative aspect-72/31 min-h-[320px] w-full cursor-pointer overflow-hidden rounded-3xl">
        <Image
          src={isMobile ? addBasePath("/images/main_mobile.png") : addBasePath("/images/main.png")}
          alt="thumbnail"
          fill
          objectFit="cover"
          className="scale-105 transition-all duration-750 hover:scale-100"
        />
      </div> */}
    </section>
  );
}
