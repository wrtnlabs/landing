import Link from "next/link";
import { Button } from "../common/button";

export default async function Header() {
  return (
    <header className="fixed top-0 z-50 flex h-[70px] w-full items-center justify-between px-6 backdrop-blur-xl">
      <div></div>
      <Button className="hidden md:block">Open Playground</Button>
    </header>
  );
}
