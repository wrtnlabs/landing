import { ArrowRightIcon } from "lucide-react";
import { Button } from "../common/button";
import { OPEN_SOURCE } from "@/app/_constants/open-source";
import Link from "next/link";
import Image from "next/image";

export default function OpenSource() {
    return (
        <div className="flex flex-col items-center max-h-screen gap-20">
            <div className="flex flex-col gap-6 text-center items-center">
                <h2 className="text-[32px] text-[#071414] md:text-5xl md:whitespace-pre-line">
                    {"Based on powerful\nOpen Source Ecosystem"}
                </h2>
                <p className="text-base text-[#767676] md:text-lg md:whitespace-pre-line">
                    Wrtn Agent OS is built on a powerful and reliable Wrtn Labs Open Source Ecosystem
                </p>

                <Link href="https://github.com/wrtnlabs" target="_blank">
                    <Button variant="secondary">
                        Our Ecosystem <ArrowRightIcon strokeWidth={1.5} size={20} />
                    </Button>
                </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-7 max-w-[1440px] w-full">
                {OPEN_SOURCE.map(({ title, description, image, link }) => (
                    <Link key={link} href={link} target="_blank" className="bg-[#000000] flex justify-between items-center pl-14">
                        <div className="flex flex-col gap-2 text-left">
                            <h4 className="text-3xl text-white">{title}</h4>
                            <p className="text-base text-[#A3A3A3] whitespace-pre-line">{description}</p>
                        </div>
                        <Image src={image} alt={title} width={348} height={348} />
                    </Link>
                ))}
            </div>
        </div>
    )
}