import Image from "next/image";
import { Button } from "./_components/common/button";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <div>
        <div className="flex h-screen flex-col items-center justify-center gap-9 text-center mix-blend-difference">
          <h1 className="text-3xl leading-[42px] whitespace-pre-line text-[#E1E1E1] md:text-[64px] md:leading-[69px]">
            {"The Foundation for\nEvery Business Agent\nWrtn Agent OS"}
          </h1>
          <p className="text-sm whitespace-pre-line text-[#757575] md:text-lg">
            {
              "Create a more efficient work environment\nwith your personal AI agents"
            }
          </p>
        </div>
        <video
          src="/videos/main_bg.mp4"
          muted
          loop
          autoPlay
          className="absolute top-0 left-0 -z-10 h-screen w-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-5 px-4 py-24 text-[#002424] md:px-8 md:py-40">
        <p className="text-base">How it works</p>
        <h2 className="text-[40px] whitespace-pre-line md:text-[48px]">
          {"Unchain your potential\nwith Wrtn Agent OS"}
        </h2>
        <p className="text-base whitespace-pre-line">
          {
            "Using Wrtn Agent OS, you can easily create and share your own AI apps and agents\nthrough natural language input and a no-code interface, even without any knowledge of development."
          }
        </p>
        <Button variant="secondary">
          Our Products <ArrowRightIcon strokeWidth={1.5} size={20} />
        </Button>
        <div className="relative aspect-3/1 w-full cursor-pointer overflow-hidden rounded-3xl">
          <Image
            src="/images/main_2.png"
            alt="thumbnail"
            fill
            objectFit="cover"
            className="scale-105 transition-all duration-750 hover:scale-100"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6 text-center">
        <h2 className="text-[32px] text-[#071414] md:text-5xl md:whitespace-pre-line">
          {"Turn Conversations\ninto Conversions"}
        </h2>
        <p className="text-base text-[#767676] md:text-lg md:whitespace-pre-line">
          {
            "Wrtn Agent OS enables all to be free from repetitive tasks and work\nefficiently across different jobs and environments"
          }
        </p>

        <Button variant="secondary">
          Our Products <ArrowRightIcon strokeWidth={1.5} size={20} />
        </Button>

        {/* MEMO: Carousel */}
      </div>
      <div className="flex w-full flex-col items-center bg-[#E4F2EF] px-10 py-24 text-[#071414] md:flex-row md:justify-between md:px-20 md:py-0">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-[28px]">Build an open source ecosystem</p>
            <p className="text-base whitespace-pre-line">
              {
                "Wrtn Agent OS empowers individuals and organizations to automate tasks,\n streamline operations, and focus on what matters most."
              }
            </p>
          </div>

          <Link href="" target="_blank" className="underline">
            Learn about Wrtn Agent OS
          </Link>
        </div>

        <video
          src="/videos/graphic.mp4"
          muted
          loop
          autoPlay
          className="h-auto w-full md:h-[371px] md:w-[658px]"
        >
          <source src="/videos/graphic.mp4" type="video/mp4" />
          <source src="/videos/graphic.mp4" type="video/webm" />
        </video>
      </div>

      <div className="flex flex-col gap-10 px-4 md:px-10">
        <h3 className="text-[32px]">Lastest articles</h3>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
          {Array(4)
            .fill(0)
            .map((item, i) => (
              <div key={i}>
                <div></div>
              </div>
            ))}
        </div>
      </div>

      <div className="w-full bg-[#E6FDFC] md:flex md:justify-between md:px-20">
        <div className="flex flex-col gap-10 px-4 pt-20 pb-9 text-[#002424] md:pt-60">
          <p className="text-base md:h-18">Move to</p>
          <h3 className="text-[50px] md:text-6xl">Wrtn Agent OS</h3>
          <div>
            <Button variant="secondary">Open Playground</Button>
          </div>
        </div>
        <video
          src="/videos/agent.mp4"
          muted
          loop
          autoPlay
          className="relative h-auto w-full object-cover md:h-[907px] md:w-[720px] md:object-contain"
        >
          <source src="/videos/agent.mp4" type="video/mp4" />
          <source src="/videos/agent.mp4" type="video/webm" />
        </video>
      </div>
    </div>
  );
}
