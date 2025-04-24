import { ArrowRightIcon } from "lucide-react";
import { Button } from "../common/button";
import { OPEN_SOURCE } from "@/app/_constants/open-source";
import Link from "next/link";
import Image from "next/image";
import { addBasePath } from "@/app/_lib/add-base-path";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";

export default function OpenSource() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "start 0.8"],
  });

  const backgroundColor = useTransform(scrollYProgress, [0, 1], ["#FFFFFF", "#000000"]);
  const titleColor = useTransform(scrollYProgress, [0, 1], ["#071414", "#E6FDFC"]);
  const textColor = useTransform(scrollYProgress, [0, 1], ["#767676", "#BEBEBE"]);
  const buttonColor = useTransform(scrollYProgress, [0, 1], ["#002424", "#E6FDFC"]);

  return (
    <motion.div style={{ backgroundColor }} className={clsx(["flex w-full flex-col items-center gap-20 pb-[100px] pt-[200px] md:pb-0 md:px-8 duration-1000 transition-all"])}>
      <div ref={sectionRef} className="flex flex-col md:items-center md:text-center gap-6 px-4">
        <motion.h2 style={{ color: titleColor }} className={clsx(["font-oceanic text-[24px] leading-normal md:text-[40px] md:leading-[46px] md:whitespace-pre-line duration-700 transition-all"])}>
          {"Based on powerful\nOpen Source Ecosystem"}
        </motion.h2>
        <motion.p style={{ color: textColor }} className={clsx(["text-base md:text-lg md:whitespace-pre-line duration-700 transition-all"])}>
          Wrtn Agent OS is built on a powerful and reliable Wrtn Labs Open
          Source Ecosystem
        </motion.p>

        <Link href="https://github.com/wrtnlabs" target="_blank">
          <motion.button style={{ color: buttonColor, borderColor: buttonColor }} className="text-sm border rounded-full cursor-pointer flex gap-2 px-6 py-[14px] transition-all duration-300">
            Our Ecosystem <ArrowRightIcon strokeWidth={1.5} size={20} />
          </motion.button>
        </Link>
      </div>

      <div className="aspect-[3/1] w-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          preload="auto"
          src={addBasePath("/videos/open-source.MP4")}
        />
      </div>

      <div className="grid w-full max-w-[1440px] md:grid-cols-2">
        {OPEN_SOURCE.map(({ title, description, image, link }) => (
          <Link
            key={link}
            href={link}
            target="_blank"
            className="group relative flex h-[298px] items-center justify-between overflow-hidden bg-black px-5 transition-all duration-300 md:flex-row md:px-14"
          >
            <div className="absolute top-0 left-0 flex h-full w-full justify-center overflow-hidden bg-[#000000] opacity-0 transition-all duration-500 group-hover:opacity-100">
              <Image
                src={addBasePath(image)}
                alt={title}
                width={436}
                height={436}
                className="h-[436px] w-[436px] object-cover"
              />
            </div>

            <div className="absolute top-0 left-0 h-[436px] w-full bg-[linear-gradient(180deg,_#18181B_0%,_rgba(24,24,27,0)_123.45%)] opacity-0 transition-all duration-500 group-hover:opacity-100" />

            <div className="z-10 flex w-full flex-col gap-2 text-left">
              <h4 className="text-3xl text-white">
                {title}
              </h4>
              <p className="text-base whitespace-pre-line text-[#A3A3A3]">
                {description}
              </p>
            </div>

            <div className="z-10 flex items-center gap-7 text-sm whitespace-nowrap duration-300 group-hover:text-white">
              See More <ArrowRightIcon size={20} />
            </div>
          </Link>
        ))}
      </div>
    </motion.div >
  );
}
