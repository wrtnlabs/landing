import { ArrowRightIcon } from "lucide-react";
import { Button } from "../common/button";
import Image from "next/image";

export default function HowItWorks() {
    return (
        <section className="w-full max-w-[1440px] flex flex-col gap-5 px-4 py-24 text-[#002424] md:px-8 md:py-40">
            <p className="text-base">How it works</p>
            <h2 className="text-[40px] whitespace-pre-line md:text-[48px]">
                {"Unchain your potential\nwith Wrtn Agent OS"}
            </h2>
            <p className="text-base whitespace-pre-line">
                {
                    "Using Wrtn Agent OS, you can easily create and share your own AI apps and agents\nthrough natural language input and a no-code interface, even without any knowledge of development."
                }
            </p>
            <Button variant="secondary" className="w-fit">
                Our Products <ArrowRightIcon strokeWidth={1.5} size={20} />
            </Button>
            <div className="relative aspect-3/1 w-full cursor-pointer overflow-hidden rounded-3xl">
                <Image
                    src="/landing/images/main_2.png"
                    alt="thumbnail"
                    fill
                    objectFit="cover"
                    className="scale-105 transition-all duration-750 hover:scale-100"
                />
            </div>
        </section>

    )
}