"use client";
import { ArrowRightIcon } from "lucide-react"
import { Button } from "../common/button"
import { openToast } from "../common/toast"

export default function Banner() {
    return (
        <div className="w-full bg-[#E6FDFC] md:flex md:justify-between md:px-20">
            <div className="flex flex-col gap-10 px-4 pt-20 pb-9 text-[#002424] md:pt-60">
                <p className="text-base md:h-18">Move to</p>
                <h3 className="text-[50px] md:text-6xl">Wrtn Agent OS</h3>

                <Button variant="secondary" className="w-fit" onClick={openToast}>Take a tour
                    <ArrowRightIcon strokeWidth={1.5} size={20} />
                </Button>
            </div>

            <video
                src="/landing/videos/agent.mp4"
                muted
                loop
                autoPlay
                className="relative h-auto w-full object-cover md:h-[907px] md:w-[720px] md:object-contain"
            >
                <source src="/landing/videos/agent.mp4" type="video/mp4" />
                <source src="/landing/videos/agent.mp4" type="video/webm" />
            </video>
        </div>
    )
}