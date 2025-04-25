"use client";

import Link from "next/link";
import { Button } from "../common/button";
import Image from "next/image";
import { openToast } from "../common/toast";
import { addBasePath } from "@/app/_lib/add-base-path";
import { useEffect, useState } from "react";

const WHITE_LOGO = "/images/logo-white.svg";
const BLACK_LOGO = "/images/logo-black.svg";

export default function Header({ isAgentOS = true, isDark }: { isAgentOS?: boolean, isDark?: boolean }) {
  const [isSystemDark, setIsSystemDark] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsSystemDark(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsSystemDark(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const logoSrc = isDark === undefined ? (isSystemDark ? WHITE_LOGO : BLACK_LOGO) : (isDark ? WHITE_LOGO : BLACK_LOGO);

  return (
    <header className="fixed top-0 z-50 flex h-[70px] w-full items-center justify-between px-4 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between">
        <Link href="/">
          <Image
            src={addBasePath(logoSrc)}
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
