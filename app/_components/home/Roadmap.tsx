import { ArrowRightIcon } from "lucide-react";
import { Button } from "../common/button";
import Link from "next/link";
import { ROADMAP } from "@/app/_constants/roadmap";

export default function Roadmap() {
  return (
    <section className="flex w-full items-center justify-center bg-[#EEEEE8] px-4 py-40 md:h-[960px] md:max-h-screen">
      <div className="flex w-full max-w-[1440px] flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col gap-6">
          <p className="text-base text-[#002424]">Roadmap</p>
          <h2 className="text-5xl whitespace-pre-line text-[#002424]">
            {"Built from the ground up\nfor every layer of AI Agents"}
          </h2>
          <p className="text-lg whitespace-pre-line text-[#767676]">
            {
              "Agent OS lets you seamlessly build, deploy, manage, and host AI agents\nusing Agentica and open-source libraries—while integrating powerful AI\ntools and enabling LLMs to take action in apps."
            }
          </p>
          <Link
            href="https://wrtnlabs.io/agentica/docs/roadmap"
            target="_blank"
            className="w-fit"
          >
            <Button variant="secondary">
              Our Roadmap <ArrowRightIcon strokeWidth={1.5} size={20} />
            </Button>
          </Link>
        </div>

        <div className="flex w-full flex-col gap-4 md:w-auto">
          {ROADMAP.map(({ title, keywords, className, itemClassName }) => (
            <div
              key={title}
              className={`flex w-full flex-col gap-2 rounded-2xl bg-linear-to-b p-3.5 md:w-[581px] md:flex-row md:rounded-full ${className}`}
            >
              <h3 className="flex flex-1 items-center justify-center text-center text-xl md:whitespace-pre-line">
                {title}
              </h3>
              <div className="flex flex-col gap-2 md:flex-row">
                {keywords.map((keyword) => (
                  <div
                    key={keyword}
                    className="relative flex-1 rounded-md bg-linear-to-b from-[#18EDC9CC] to-[#18EDC933] p-px md:h-[118px] md:w-[118px] md:rounded-full"
                  >
                    <div
                      className={`font-md flex h-full w-full items-center justify-center gap-2 rounded-md text-center text-sm md:rounded-full ${itemClassName.container}`}
                    >
                      <div
                        className={`top-2 h-1.5 w-1.5 rotate-45 md:absolute ${itemClassName.dot}`}
                      />
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
