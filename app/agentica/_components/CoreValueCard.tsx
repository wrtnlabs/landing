import {
  Card,
  CardTitle,
  CardDescription,
} from "@/app/_components/common/card";
import { CatIcon } from "lucide-react";

interface CoreValueCardProps {
  icon: string;
  title: string;
  description: string;
}

export function CoreValueCard({ title, description }: CoreValueCardProps) {
  return (
    <Card className="relative flex h-[400px] flex-auto cursor-pointer flex-col justify-between overflow-hidden rounded-[36px] border-zinc-700 bg-[#030303]/70 p-5 pb-12">
      {/* TODO: icon */}
      <CatIcon size={80} color="#FFFFFF" />

      <div className="flex flex-col gap-3">
        <CardTitle className="text-[40px] text-[#F6F6F3]">{title}</CardTitle>
        <hr className="border-t-2 border-zinc-600" />
        <CardDescription className="h-28 text-base text-zinc-400">
          {description}
        </CardDescription>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(100%_100%_at_50%_0%,rgba(151,247,226,0.3),transparent)] opacity-0 transition-opacity duration-500 hover:opacity-100" />
    </Card>
  );
}
