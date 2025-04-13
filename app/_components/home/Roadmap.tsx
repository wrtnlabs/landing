import { ArrowRightIcon } from "lucide-react";
import { Button } from "../common/button";
import Link from "next/link";
import { ROADMAP } from "@/app/_constants/roadmap";

export default function Roadmap() {
  return (
    <section className="flex w-full items-center justify-center bg-[#071511] px-4 py-40 md:h-[960px] md:max-h-screen">
      <div className="flex w-full max-w-[1440px] flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col gap-6">
          <p className="text-base text-[#E6FDFC]">Roadmap</p>
          <h2 className="font-oceanic text-5xl whitespace-pre-line text-[#E6FDFC]">
            {"Built from the ground up\nfor every layer of AI Agents"}
          </h2>
          <p className="text-lg whitespace-pre-line text-[#A7B4B3]">
            {
              "Agent OS lets you seamlessly build, deploy, manage, and host AI agents\nusing Agentica and open-source libraries—while integrating powerful AI\ntools and enabling LLMs to take action in apps."
            }
          </p>
          <Link
            href="https://wrtnlabs.io/agentica/docs/roadmap"
            target="_blank"
            className="w-fit"
          >
            <Button variant="secondary" className="text-[#E6FDFC] border-[#E6FDFC]">
              Our Roadmap <ArrowRightIcon strokeWidth={1.5} size={20} />
            </Button>
          </Link>
        </div>

        <div className="flex w-full flex-col gap-4 md:w-auto">
          {ROADMAP.map(({ title, keywords, className, itemClassName }) => (
            <div
              key={title}
              className={`flex w-full flex-row gap-2 rounded-2xl p-3.5 md:w-[646px] md:rounded-[20px] overflow-scroll ${className}`}
            >
              <h3 className="flex items-center flex-1 justify-center text-center text-lg md:text-[22px] whitespace-pre-line">
                {title}
              </h3>
              <div className="flex flex-row gap-2">
                {keywords.map((keyword) => (
                  <div
                    key={keyword}
                    className="relative flex-1 rounded-md bg-linear-to-b from-[#18EDC9CC] to-[#18EDC933] p-px h-28 w-28 md:h-[132px] md:w-[132px] md:rounded-[10px]"
                  >
                    <div
                      className={`font-md flex h-full w-full bg-linear-to-b items-center justify-center gap-2 text-sm rounded-md text-center md:text-lg md:rounded-[10px] ${itemClassName}`}
                    >
                      {keyword}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
