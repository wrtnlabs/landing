import { ArrowUpRight } from "lucide-react";
import { Button } from "../_components/common/button";
import { CoreValueCard } from "./_components/CoreValueCard";
import { FuncCallCard } from "./_components/FuncCallCard";
import { CORE_VALUES, FUNC_CALLS } from "./constants";
import { Chat } from "./_components/Chat";

export default async function AgenticaPage() {
  return (
    <>
      {/* Welcome */}
      <div className="flex h-[calc(100vh_-_78px)] items-center justify-between py-8">
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
        <Chat />
      </div>

      {/* Function calling */}
      <div className="h-screen">
        <div className="flex flex-col gap-4 rounded-3xl border border-zinc-700 p-2 md:flex-row lg:flex-col">
          {FUNC_CALLS.map((value) => (
            <FuncCallCard key={value.title} {...value} />
          ))}
        </div>
      </div>

      {/* Core Value */}
      <div className="h-screen">
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
