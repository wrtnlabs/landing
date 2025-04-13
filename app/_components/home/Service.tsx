"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { AGENT_OS } from "@/app/_constants/agent-os";
import { Mousewheel } from "swiper/modules";
import { useRef, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../common/tabs";
import clsx from "clsx";
import { addBasePath } from "@/app/_lib/add-base-path";
import "swiper/css";

export default function Service() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass>(null);

  const handleTabClick = (index: number) => {
    swiperRef.current?.slideToLoop(index, 600);
  };

  const tabList = AGENT_OS.map(({ title }) => title);

  return (
    <div className="flex max-w-screen flex-col items-center gap-6 px-4 pb-52 text-center">
      <h2 className="font-oceanic text-[40px] text-left md:text-center leading-[46px] text-[#071414] md:text-[48px] md:leading-[56px] md:whitespace-pre-line">
        {"Turn Conversations\ninto Conversions"}
      </h2>
      <p className="text-base text-[#767676] text-left md:text-center md:text-lg md:whitespace-pre-line">
        {
          "Wrtn Agent OS enables all to be free from repetitive tasks and work\nefficiently across different jobs and environments"
        }
      </p>

      <Tabs className="hidden md:flex">
        <TabsList>
          {tabList.map((key, i) => (
            <TabsTrigger
              key={key}
              value={key}
              onClick={() => handleTabClick(i)}
              className={clsx(
                "rounded-full px-6 py-3.5",
                activeIndex === i
                  ? "bg-[#071511]! text-[#E6FDFC]!"
                  : "text-[#071511]!",
              )}
            >
              {key}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* List */}
      <div className="flex flex-col gap-5 md:hidden">
        {AGENT_OS.map(({ title, heading, description, video }, i) => (
          <div
            key={i}
            className="flex flex-col gap-10 rounded-[20px] bg-[#F7F7F4] px-3.5 py-3.5"
          >
            <div className="mx-8 mt-12 flex flex-col gap-4 text-left">
              <p className="text-base text-[#071511]">{title}</p>
              <h3 className="text-[28px] whitespace-pre-line text-[#071511]">
                {heading}
              </h3>
              <p className="text-base text-[#071511]">{description}</p>
            </div>
            <div className="aspect-square w-full overflow-hidden rounded-md">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
                preload="none"
                src={addBasePath(video)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Carousel */}
      <div className="hidden md:block">
        <Swiper
          modules={[Mousewheel]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView="auto"
          centeredSlides
          spaceBetween={40}
          loop
          mousewheel={{ forceToAxis: true }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-screen"
        >
          {AGENT_OS.map(({ title, heading, description, video }, i) => (
            <SwiperSlide
              key={i}
              className={clsx(
                "h-[624px]! w-[62vw] max-w-[1010px] transition-transform! duration-700 ease-in-out",
                activeIndex === i ? "translate-y-0" : "translate-y-[100px]",
              )}
            >
              <div className="flex w-full min-w-[1010px] flex-col items-center gap-[20px] rounded-[24px] bg-[#F7F7F4] p-[16px] pt-[60px] transition-all duration-500 md:flex-row md:p-[30px] md:pt-[30px]">
                <div className="w-full px-[20px] text-left md:w-1/2 md:px-[50px]">
                  <p className="text-base text-[#071511]">{title}</p>
                  <h3 className="text-[32px] whitespace-pre-line text-[#071511]">
                    {heading}
                  </h3>
                  <p className="text-base text-[#071511]">{description}</p>
                </div>
                <div className="mt-5 aspect-square w-full overflow-hidden rounded-[28px] bg-[#E8E8DC] md:mt-0 md:w-1/2">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                    preload="none"
                    src={addBasePath(video)}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
