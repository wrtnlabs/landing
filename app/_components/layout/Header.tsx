import Link from "next/link";

import { Tabs, TabsList, TabsTrigger } from "../common/tabs";
import { headers } from "next/headers";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default async function Header() {
  const headerList = await headers();
  const pathname = headerList.get("x-forwarded-pathname") ?? "";

  return (
    <header className="sticky top-0 z-50 flex w-full justify-center bg-linear-to-t to-[#030303]/50 pt-5">
      <Tabs defaultValue={pathname}>
        <TabsList>
          <Link href="/agentica">
            <TabsTrigger value="/agentica">Agentica</TabsTrigger>
          </Link>
          <Link href="/autoview">
            <TabsTrigger value="/autoview">Autoview</TabsTrigger>
          </Link>
          <Link href="https://wrtnlabs.io/" target="_blank">
            <TabsTrigger value="/">
              Agent OS <ArrowUpRight />
            </TabsTrigger>
          </Link>
          <Link href="https://wrtnlabs.io/blog-overview" target="_blank">
            <TabsTrigger value="/">
              Blog <ArrowUpRight />
            </TabsTrigger>
          </Link>
        </TabsList>
      </Tabs>
    </header>
  );
}
