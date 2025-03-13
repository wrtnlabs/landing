import { ArrowUpRight } from "lucide-react";
import { Button } from "../_components/common/button";
import { CoreValueCard } from "./_components/CoreValueCard";
import { FuncCallCard } from "./_components/FuncCallCard";
import { CORE_VALUES, FUNC_CALLS } from "./constants";
import { FuncCallCode } from "./_components/FuncCallCode";

export default async function AgenticaPage() {
  return (
    <>
      {/* Welcome */}
      <div className="flex h-[calc(100vh_-_78px)] items-center justify-between gap-6 py-8">
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
            <Button>
              Docs
              <ArrowUpRight />
            </Button>
            <Button variant="secondary">Github</Button>
          </div>
        </div>
        <div className="hidden h-full w-[480px] rounded-[20px] bg-[#27272A] md:block"></div>
        ;
      </div>

      {/* Function calling */}
      <div className="lg:h-screen">
        <div className="flex flex-col gap-8 rounded-4xl border border-zinc-700 p-2 lg:flex-row">
          <FuncCallCode />
          <div className="flex flex-col gap-4 rounded-3xl border border-zinc-700 p-2 md:flex-row lg:w-[394px] lg:flex-col">
            {FUNC_CALLS.map((value) => (
              <FuncCallCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </div>

      {/* Core Value */}
      <div className="lg:h-screen">
        <div className="flex flex-col gap-8 rounded-[44px] border border-zinc-700 p-2 md:flex-row">
          {CORE_VALUES.map((value) => (
            <CoreValueCard key={value.title} {...value} />
          ))}
        </div>
      </div>

      {/* Showcase */}
    </>
  );
}
