"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Item } from "nextra/normalize-pages";

import Header from "../layout/Header";
import Welcome from "./Welcome";
import HowItWorks from "./HowItWorks";
import Service from "./Service";
import OpenSource from "./OpenSource";
import Roadmap from "./Roadmap";
import Banner from "../common/Banner";
import LatestArticles from "./LatestArticles";

export default function HomeClient({ posts }: { posts: Item[] }) {
    const darkSectionRef = useRef(null);
    const isDark = useInView(darkSectionRef, { margin: "0px 0px -99% 0px" });

    return (
        <>
            <Header isDark={isDark} />
            <div className="flex flex-col items-center bg-white">
                <Welcome />
                <HowItWorks />
                <Service />
                <div ref={darkSectionRef} className="w-full">
                    <OpenSource />
                    <Roadmap />
                </div>
                <LatestArticles posts={posts} />
                <Banner />
            </div>
        </>
    );
}
