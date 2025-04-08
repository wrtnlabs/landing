"use client";
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { AGENT_OS } from '@/app/_constants/agent-os';
import { Mousewheel } from 'swiper/modules';
import { useRef, useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '../common/tabs';
import clsx from 'clsx';

import 'swiper/css';

export default function AgentOS() {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<SwiperClass>(null);

    const handleTabClick = (index: number) => {
        swiperRef.current?.slideToLoop(index, 600);
    };

    const tabList = AGENT_OS.map(({ title }) => title)

    return (
        <div className="max-w-screen flex flex-col gap-6 items-center text-center">
            <h2 className="text-[32px] text-[#071414] md:text-5xl md:whitespace-pre-line">
                {"Turn Conversations\ninto Conversions"}
            </h2>
            <p className="text-base text-[#767676] md:text-lg md:whitespace-pre-line">
                {
                    "Wrtn Agent OS enables all to be free from repetitive tasks and work\nefficiently across different jobs and environments"
                }
            </p>

            <Tabs className='hidden md:flex'>
                <TabsList>
                    {tabList.map((key, i) => (
                        <TabsTrigger
                            key={key}
                            value={key}
                            onClick={() => handleTabClick(i)}
                            className={clsx("py-3.5 px-6 rounded-full", activeIndex === i ? "bg-[#071511] text-[#E6FDFC]" : "text-[#071511]")}
                        >
                            {key}
                        </TabsTrigger>
                    ))}
                </TabsList>
            </Tabs>

            <div>
                <Swiper
                    modules={[Mousewheel]}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    slidesPerView="auto"
                    centeredSlides
                    spaceBetween={40}
                    loop
                    mousewheel={{ forceToAxis: true }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    className="hidden md:block w-screen"
                >
                    {AGENT_OS.map(({ title, heading, description, video }, i) => (
                        <SwiperSlide key={i} className="w-[62vw] max-w-[1010px] overflow-hidden h-[624px]! ">
                            <div className="w-full min-w-[1010px] bg-[#F7F7F4] flex rounded-[24px] md:flex-row flex-col pt-[60px] md:pt-[30px] p-[16px] md:p-[30px] gap-[20px] items-center duration-500 transition-all">
                                <div className="md:w-1/2 w-full text-left md:px-[50px] px-[20px]">
                                    <p className='text-base text-[#071511]'>{title}</p>
                                    <h3 className="text-[32px] text-[#071511] whitespace-pre-line">{heading}</h3>
                                    <p className="text-base text-[#071511]">{description}</p>
                                </div>
                                <div className="mt-5 md:mt-0 md:w-1/2 w-full aspect-square bg-[#E8E8DC] rounded-[28px] overflow-hidden">
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover"
                                        preload="none"
                                        src={video}
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div >
    )
}

