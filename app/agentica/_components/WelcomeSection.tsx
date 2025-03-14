import { Button } from "@/app/_components/common/button";
import { GithubIcon } from "@/app/_components/icons/Github";
import { ArrowUpRight } from "lucide-react";

export function WelcomeSection() {
  return (
    <div
      className="px- flex h-[calc(100vh_-_78px)] items-center justify-between gap-6 px-20 py-8"
      style={{
        background:
          "radial-gradient(108.03% 74.3% at 50% 50%, rgba(41, 41, 48, 0.75) 0%, rgba(25, 25, 28, 0.57) 53%, transparent 100%)",
      }}
    >
      <div className="flex flex-col gap-9">
        <div className="flex flex-col gap-4">
          <h1 className="text-[80px] font-semibold text-zinc-50">Agentica</h1>
          <p className="text-xl whitespace-pre-line text-[#767676]">
            {
              "Agentic AI Framework specialized in LLM Function Calling\n enhanced by TypeScript compiler skills"
            }
          </p>
        </div>
        <div className="flex gap-[18px]">
          <Button className="w-[180px]">
            Docs
            <ArrowUpRight />
          </Button>
          <Button variant="secondary" className="w-[180px]">
            Github
            <GithubIcon width={24} height={24} className="h-6 w-6" />
          </Button>
        </div>
      </div>
      <div className="hidden h-full w-[480px] rounded-[20px] bg-[#27272A] md:block"></div>
    </div>
  );
}
