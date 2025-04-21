"use client";

import { OUR_VALUE } from "@/app/_constants/about";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../common/button";
import { openToast } from "../common/toast";
import ValueCard from "./ValueCard";

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
          {OUR_VALUE.map((props, i) => <ValueCard key={i} {...props} index={i} />)}
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
