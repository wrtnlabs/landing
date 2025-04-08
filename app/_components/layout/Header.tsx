import Link from "next/link";
import { Button } from "../common/button";
import Image from "next/image";

export default async function Header() {
  return (
    <header className="fixed top-0 z-50 flex h-[70px] w-full items-center justify-between backdrop-blur-xl px-4">
      <div className="max-w-[1440px] w-full flex items-center justify-between mx-auto">
        <Link href="/">
          <Image src="/clone/images/logo-black.svg" alt="logo" width={120} height={28} />
        </Link>
        <Button className="hidden md:block">Open Agent OS</Button>
      </div>
    </header>
  );
}
