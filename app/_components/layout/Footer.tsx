import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-end gap-16 bg-gray-800 px-16 py-8">
      <nav className="flex flex-col gap-1">
        Developer
        <Link href="https://github.com/wrtnlabs">Github</Link>
        <Link href="/blog">Docs</Link>
      </nav>
      <nav className="flex flex-col gap-1">
        Company
        <Link href="https://wrtnlabs.io/">Wrtn Labs</Link>
        <Link href="https://wrtn.io/">wrtn.io</Link>
      </nav>
    </footer>
  );
}
