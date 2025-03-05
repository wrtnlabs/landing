import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-center">
      <nav className="flex h-12 items-center gap-16">
        <Link href="/agentica">Agentica</Link>
        <Link href="/autoview">Autoview</Link>
        <Link href="/showcase">Showcase</Link>
        <Link
          href="https://wrtnlabs.github.io/studio-pro/tech-specs/"
          className="flex items-center gap-1"
        >
          Docs
          <ArrowUpRight size={20} strokeWidth={1.5} />
        </Link>
        <Link
          href="https://wrtnlabs.io/blog-overview/"
          className="flex items-center gap-1"
        >
          Blog
          <ArrowUpRight size={20} strokeWidth={1.5} />
        </Link>
      </nav>
    </header>
  );
}
