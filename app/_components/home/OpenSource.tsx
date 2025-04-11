import { ArrowRightIcon } from "lucide-react";
import { Button } from "../common/button";
import { OPEN_SOURCE } from "@/app/_constants/open-source";
import Link from "next/link";
import Image from "next/image";

export default function OpenSource() {
  return (
    <div className="flex flex-col items-center gap-20 md:max-h-screen">
      <div className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-[32px] text-[#071414] md:text-5xl md:whitespace-pre-line">
          {"Based on powerful\nOpen Source Ecosystem"}
        </h2>
        <p className="text-base text-[#767676] md:text-lg md:whitespace-pre-line">
          Wrtn Agent OS is built on a powerful and reliable Wrtn Labs Open
          Source Ecosystem
        </p>

        <Link href="https://github.com/wrtnlabs" target="_blank">
          <Button variant="secondary">
            Our Ecosystem <ArrowRightIcon strokeWidth={1.5} size={20} />
          </Button>
        </Link>
      </div>

      <div className="aspect-[3/1] w-screen overflow-hidden rounded-md">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          preload="none"
          src={"/videos/agent.mp4"}
        />
      </div>

      <div className="grid w-full max-w-[1440px] gap-20 md:grid-cols-2">
        {OPEN_SOURCE.map(({ title, description, image, link }) => (
          <Link
            key={link}
            href={link}
            target="_blank"
            className="group relative flex h-[218px] items-center justify-between overflow-hidden rounded-[28px] bg-[#FFFFFF] px-5 transition-all duration-300 md:flex-row md:px-14"
          >
            <div className="absolute flex w-full justify-center top-0 opacity-0 left-0 h-full bg-[#000000] overflow-hidden transition-all duration-500 group-hover:opacity-100">
              <Image
                src={image}
                alt={title}
                width={436}
                height={436}
                className="h-[436px] w-[436px] object-cover"
              />
            </div>

            <div className="absolute top-0 left-0 w-full h-[436px] transition-all bg-[linear-gradient(180deg,_#18181B_0%,_rgba(24,24,27,0)_123.45%)] duration-500 opacity-0 group-hover:opacity-100" />

            <div className="z-10 flex w-full flex-col gap-2 text-left">
              <h4 className="text-3xl text-[#000000] transition-all duration-300 group-hover:text-white">
                {title}
              </h4>
              <p className="text-base whitespace-pre-line text-[#767676] transition-all duration-300 group-hover:text-[#A3A3A3]">
                {description}
              </p>
            </div>

            <div className="z-10 flex items-center gap-7 text-sm whitespace-nowrap duration-300 group-hover:text-white">
              See More <ArrowRightIcon size={20} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
