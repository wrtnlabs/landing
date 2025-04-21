"use client";

import Link from "next/link";
import { Button } from "../common/button";
import Image from "next/image";
import { openToast } from "../common/toast";
import { addBasePath } from "@/app/_lib/add-base-path";

export default function Header({ isAgentOS = true, isDark = false }: { isAgentOS?: boolean, isDark?: boolean }) {
  return (
    <header className="fixed top-0 z-50 flex h-[70px] w-full items-center justify-between px-4 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between">
        <Link href="/">
          <Image
            src={addBasePath(isDark ? "/images/logo-white.svg" : "/images/logo-black.svg")}
            alt="logo"
            width={120}
            height={28}
          />
        </Link>
        {isAgentOS && <Button className="hidden md:block" onClick={openToast}>Open Agent OS</Button>}
      </div>
    </header>
  );
}
