import Image from "next/image";
import { Button } from "../_components/common/button";
import { ArrowRightIcon } from "lucide-react";
import Banner from "../_components/common/Banner";
import OurValue from "../_components/about/OurValue";
import Link from "next/link";

export default function About() {
    return (
        <div className="bg-white pt-40">
            <div className="w-full flex flex-col gap-60 max-w-[1440px] mx-auto px-[16px] md:px-[24px] ">
                <div className="flex flex-col md:flex-row">
                    <h1 className="md:w-1/4 text-5xl md:text-6xl">About</h1>
                    <div className="md:w-3/4">
                        <h2 className="text-[#071511] text-3xl md:text-4xl mt-[16px]">Open Platform for Agents in Business</h2>
                        <div className="relative w-full aspect-[270/157] my-8">
                            <Image src={"/landing/images/about/about.png"} alt="thumbnail" fill objectFit="cover" />
                        </div>
                        <p className="text-[#071511] mt-6 md:mt-9 text-base md:text-lg opacity-60 md:opacity-40">{`Wrtn Labs aims to create an open community centered around the development and improvement of AI agents tailored to specific business needs. We believe that intuitive, human-like conversation is the simplest solution to many business challenges. Our platform provides the tools and environment for you to design, build, and optimize your own AI agents, then test and apply them to real-world problems through simple conversational interactions. Through these capabilities, we aim to offer a flexible lab environment where you can leverage tools used by our open development community, contribute your own tools as needed, and build unique AI agent solutions applicable to specific challenges across your business. By fostering collaboration and community growth, we empower businesses to automate complex tasks, like customer interactions and operational workflows, through simple conversations. This allows you to ultimately focus on the essential value of your business. Join the Wrtn Labs community and let's shape the future of work together.`}</p>
                        <p className="text-black text-base mt-[150px] md:mt-[236px]">Our Story</p>
                        <h2 className="text-[#071511] text-3xl md:text-4xl mt-8">Wrtn Labs from Wrtn Technology</h2>
                        <p className="text-[#071511] mt-6 md:mt-9 text-base md:text-lg opacity-60 md:opacity-40 whitespace-pre-line">{"Wrtn Technologies is an AI startup that developed the AI platform 'Wrtn', which has the most users in Korea as of 2024. Wrtn is helping to accelerate the era of AGI by enabling anyone to easily and conveniently use AI in their daily lives without restrictions.\n\n* AGI (Artificial General Intelligence): Artificial intelligence that is not limited to a specific field and can be applied universally to any situation."}</p>

                        <Link href="https://wrtn.io/" target="_blank">
                            <Button variant="secondary" className="mt-8 md:mt-12">
                                Visit Now <ArrowRightIcon strokeWidth={1.5} size={20} />
                            </Button>
                        </Link>
                    </div>
                </div>
                <OurValue />
            </div>
            <Banner />
        </div>
    )
}